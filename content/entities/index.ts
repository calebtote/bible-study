/**
 * The assembled entity register.
 *
 * Four registers feed this: the sites, the groups, the people, and the authored
 * dossier additions. They stay separate as data because they are separate kinds of
 * thing, and this module builds an `Entity` from each without ever merging the
 * kinds. "Jericho" the city, "the king of Jericho", and "the Canaanites" come out
 * of here as three records, as the model requires.
 *
 * Two things are deliberately derived here rather than authored.
 *
 * Related entities come from co-occurrence in milestones. An author maintaining
 * ninety-two cross-reference lists by hand would leave them stale within a week,
 * and the study's own narrative already records which places and peoples belong
 * together: they are the ones the same beat names.
 *
 * The map link comes from the feature set. A place with no drawable location gets
 * no `primaryMapFeatureId`, which means the dossier for an unlocated site cannot
 * offer a "show on map" action that would have nothing to show. The absence is
 * structural rather than something the interface has to remember to check.
 *
 * What is *not* here is the role an entity plays at the milestone the reader is
 * currently on. That is not a property of the entity, it changes with the beat,
 * and the study screen composes it from the milestone. Baking it in would mean
 * choosing one moment out of the twenty-four chapters and calling it the role.
 */

import type {
  Citation,
  Entity,
  EntityRelationship,
  EntityType,
  EvidenceLabel,
  FeatureCertainty,
  StudySection,
} from "../types";
import { CERTAINTY_STYLES } from "../types";
import { siteFeatureId } from "../manifest";
import { SITE_SEEDS, type SiteSeed } from "../map/site-seeds";
import { GROUP_SEEDS, type GroupExtent, type GroupSeed } from "./group-seeds";
import { PERSON_SEEDS, type PersonSeed } from "./person-seeds";
import { PROFILE_BY_ENTITY_ID } from "../people/profiles";
import { TIMELINE_EVENTS } from "../people/timeline";
import { MILESTONES } from "../chapters";
import { ALL_FEATURES } from "../map";
import { DOSSIER_EXTRA_BY_ID, type DossierBlock } from "./dossiers";

/* ------------------------------------------------------------------ */
/* Section helpers                                                     */
/* ------------------------------------------------------------------ */

const toCitations = (
  cites: { sourceId: string; claim: string; locator?: string }[] | undefined
): Citation[] =>
  (cites ?? []).map((c) => ({
    sourceId: c.sourceId,
    supportedClaim: c.claim,
    locator: c.locator,
  }));

function section(
  id: string,
  title: string,
  body: string,
  opts: {
    scriptureRefs?: string[];
    citations?: Citation[];
    evidenceLabels?: EvidenceLabel[];
    collapsedByDefault?: boolean;
  } = {}
): StudySection {
  return {
    id,
    title,
    body: body.trim(),
    scriptureRefs: opts.scriptureRefs ?? [],
    citations: opts.citations ?? [],
    evidenceLabels: opts.evidenceLabels ?? ["biblical-account"],
    collapsedByDefault: opts.collapsedByDefault,
  };
}

/** An authored block becomes a section only if it exists. */
function blockSection(
  id: string,
  title: string,
  block: DossierBlock | undefined,
  fallbackLabels: EvidenceLabel[],
  collapsedByDefault?: boolean
): StudySection[] {
  if (!block?.body.trim()) return [];
  return [
    section(id, title, block.body, {
      scriptureRefs: block.scriptureRefs,
      citations: block.citations,
      evidenceLabels: block.evidenceLabels ?? fallbackLabels,
      collapsedByDefault,
    }),
  ];
}

/**
 * How confidently a location is held governs how the setting section is labelled.
 * A securely identified mound is externally attested *as a place*; that is all,
 * and the label says only that.
 */
const CERTAINTY_LABELS: Record<FeatureCertainty, EvidenceLabel[]> = {
  "well-supported": ["externally-attested"],
  approximate: ["externally-attested", "reconstruction"],
  disputed: ["disputed"],
  schematic: ["reconstruction"],
  /* Nothing outside the text places it, because nothing places it at all. */
  unknown: ["biblical-account"],
};

/* ------------------------------------------------------------------ */
/* Derived relationships between entities                              */
/* ------------------------------------------------------------------ */

/** entityId -> (other entityId -> number of milestones they share) */
const CO_OCCURRENCE: Record<string, Record<string, number>> = {};

for (const m of MILESTONES) {
  for (const a of m.entityIds) {
    const row = (CO_OCCURRENCE[a] ??= {});
    for (const b of m.entityIds) {
      if (a === b) continue;
      row[b] = (row[b] ?? 0) + 1;
    }
  }
}

const RELATED_LIMIT = 8;

function relatedFor(id: string, seeded: string[]): string[] {
  const derived = Object.entries(CO_OCCURRENCE[id] ?? {})
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
    .map(([other]) => other);

  const out: string[] = [];
  for (const candidate of [...seeded, ...derived]) {
    if (candidate === id || out.includes(candidate)) continue;
    out.push(candidate);
    if (out.length >= RELATED_LIMIT) break;
  }
  return out;
}

/* ------------------------------------------------------------------ */
/* Chapters and timeline links                                         */
/* ------------------------------------------------------------------ */

/** Chapters whose milestones actually name the entity, as a check on the seeds. */
const MILESTONE_CHAPTERS: Record<string, Set<number>> = {};
for (const m of MILESTONES) {
  for (const id of m.entityIds) {
    (MILESTONE_CHAPTERS[id] ??= new Set()).add(m.chapter);
  }
}

function chaptersFor(id: string, seeded: number[]): number[] {
  const set = new Set(seeded);
  for (const n of MILESTONE_CHAPTERS[id] ?? []) set.add(n);
  return [...set].sort((a, b) => a - b);
}

const TIMELINE_BY_ENTITY: Record<string, string[]> = {};
for (const e of [...TIMELINE_EVENTS].sort(
  (a, b) => a.narrativeOrder - b.narrativeOrder
)) {
  for (const id of e.entityIds) {
    (TIMELINE_BY_ENTITY[id] ??= []).push(e.id);
  }
}

/* ------------------------------------------------------------------ */
/* Map links                                                           */
/* ------------------------------------------------------------------ */

/**
 * Point features rank above areas: a dossier opening on Hebron should focus the
 * town, not the hill country polygon that happens to carry the same entity id.
 */
const FEATURE_RANK: Record<string, number> = {
  site: 5,
  coalition: 4,
  "town-group": 4,
  allotment: 3,
  "polity-region": 2,
  "remaining-land": 2,
  region: 1,
};

const FEATURE_FOR_ENTITY: Record<string, string> = {};
for (const f of ALL_FEATURES) {
  if (!f.entityId) continue;
  const held = FEATURE_FOR_ENTITY[f.entityId];
  if (!held) {
    FEATURE_FOR_ENTITY[f.entityId] = f.id;
    continue;
  }
  const heldKind = ALL_FEATURES.find((x) => x.id === held)?.kind ?? "";
  if ((FEATURE_RANK[f.kind] ?? 0) > (FEATURE_RANK[heldKind] ?? 0)) {
    FEATURE_FOR_ENTITY[f.entityId] = f.id;
  }
}

/* ------------------------------------------------------------------ */
/* Sites                                                              */
/* ------------------------------------------------------------------ */

function settingBody(seed: SiteSeed): string {
  /*
   * A seed with a `modern` value gets a modern-site panel of its own, carrying the name,
   * the certainty label and `why` as its note. Repeating either here printed the same
   * two facts twice in one dossier, a few hundred pixels apart: it affected 57 of the 92
   * sites, and on a panel whose whole purpose is to be read slowly it reads as padding.
   *
   * So this section states only what that panel does not. The certainty *description*
   * always belongs here, because the panel has room for the label alone, and the
   * competing candidates always belong here because the panel has no room for them at
   * all. `why` returns only when there is no panel to carry it.
   */
  const parts: string[] = seed.modern ? [] : [seed.why];

  parts.push(
    `**How firmly this is held.** ${CERTAINTY_STYLES[seed.certainty].label}. ${
      CERTAINTY_STYLES[seed.certainty].description
    }`
  );

  if (seed.alternatives?.length) {
    const list = seed.alternatives
      .map((a) => `*${a.name}* — ${a.note}`)
      .join("\n\n");
    parts.push(`**Other candidates that have been proposed.**\n\n${list}`);
  }

  return parts.join("\n\n");
}

/**
 * Uncertainty is never left to an authored block alone. If nothing was written
 * for a place that the register marks as less than securely located, the section
 * is generated from the register, so a reader cannot meet a disputed or unlocated
 * site without being told.
 */
function derivedUncertainty(seed: SiteSeed): string | null {
  if (seed.certainty === "well-supported") return null;

  if (seed.certainty === "unknown") {
    return `The study does not place ${seed.name} on the map. The text names it, so it is kept in the register and in the chapters that mention it, but no location is asserted and none is guessed at. Where it appears in a route, the route is drawn with a gap rather than bridged through a position invented for the purpose.`;
  }

  const alts = seed.alternatives?.length
    ? ` Competing candidates are named in the setting above, and the study does not choose between them beyond drawing the mark where the identification currently favoured by the atlases places it.`
    : "";

  return `${CERTAINTY_STYLES[seed.certainty].description}${alts} The mark on the map carries this in its own styling rather than looking like a securely fixed point.`;
}

function fromSite(seed: SiteSeed): Entity {
  const extra = DOSSIER_EXTRA_BY_ID[seed.id];
  const cites = toCitations(seed.cites);

  const uncertaintyBody = extra?.uncertainties?.body ?? derivedUncertainty(seed);

  /*
   * No "What this is" section. The drawer already prints `summary` as the lead
   * paragraph under the name, so repeating it as the first section made every dossier
   * open by saying the same sentence twice within about three hundred pixels. That
   * reads as boilerplate and teaches the reader to skim the top of a panel whose whole
   * job is to be read carefully. The plain-language identification the brief asks for
   * is the lead paragraph; search indexes `summary` directly, so nothing is lost.
   */
  const sections: StudySection[] = [
    section(`${seed.id}-setting`, "Where it is, and how firmly", settingBody(seed), {
      citations: cites,
      evidenceLabels: CERTAINTY_LABELS[seed.certainty],
    }),
    ...blockSection(
      `${seed.id}-earlier`,
      "Earlier in the biblical story",
      extra?.earlier,
      ["biblical-account"]
    ),
    ...(uncertaintyBody
      ? [
          section(`${seed.id}-uncertainties`, "What is uncertain", uncertaintyBody, {
            scriptureRefs: extra?.uncertainties?.scriptureRefs,
            citations: extra?.uncertainties?.citations,
            evidenceLabels: extra?.uncertainties?.evidenceLabels ?? ["disputed"],
          }),
        ]
      : []),
    ...blockSection(
      `${seed.id}-historical`,
      "Historical and archaeological context",
      extra?.historical,
      ["externally-attested"],
      true
    ),
  ];

  return {
    id: seed.id,
    name: seed.name,
    alternateNames: seed.alt ?? [],
    type: seed.type,
    summary: seed.summary,
    modernSite: seed.modern
      ? { name: seed.modern, certainty: seed.certainty, note: seed.why }
      : undefined,
    sections,
    relatedEntityIds: relatedFor(seed.id, extra?.relatedEntityIds ?? []),
    timelineEventIds: TIMELINE_BY_ENTITY[seed.id] ?? [],
    chapterNumbers: chaptersFor(seed.id, seed.chapters),
    laterRelevance: extra?.later
      ? {
          body: extra.later.body,
          scriptureRefs: extra.later.scriptureRefs ?? [],
          citations: extra.later.citations ?? [],
        }
      : undefined,
    relationships: extra?.relationships,
    primaryMapFeatureId: seed.coords ? siteFeatureId(seed.id) : undefined,
  };
}

/* ------------------------------------------------------------------ */
/* Groups: peoples, polities, alliances, tribes, regions               */
/* ------------------------------------------------------------------ */

/**
 * What each kind of extent permits a map to claim. This is the sentence that stops
 * a reader taking a shaded area for a country.
 */
const EXTENT_NOTES: Record<GroupExtent, string> = {
  physiographic:
    "The edges of this area are in the ground: a valley floor, a ridge line, a coastal plain. They can be drawn because they are physical, and they carried no political meaning of their own.",
  "described-area":
    "The text describes roughly where this lies without drawing a line. The shape on the map is interpolated between the few points that can be located, and its edge is a convenience rather than a frontier.",
  "label-without-borders":
    "This is a label the biblical writers use, not a territory anyone governed. It is drawn as diffuse shading with no outline, because an outline would invent a border that did not exist.",
  "coalition-of-cities":
    "This existed as an agreement between rulers for the length of one campaign. It is drawn as connectors between cities and never as shaded ground, because no one governed the space between them as a unit.",
  "political-entity":
    "This was a state with real administrative reach, though not with modern-style surveyed borders. Its extent is shown as the area its authority is documented to have touched, which thinned with distance rather than stopping at a line.",
};

function fromGroup(seed: GroupSeed): Entity {
  const extra = DOSSIER_EXTRA_BY_ID[seed.id];
  const cites = toCitations(seed.cites);

  /* Same reason as `fromSite`: the drawer's lead paragraph is the identification. */
  const sections: StudySection[] = [
    section(
      `${seed.id}-mapping`,
      "How this is drawn, and how it should not be read",
      `${seed.mappingNote}\n\n${EXTENT_NOTES[seed.extent]}`,
      {
        citations: cites,
        evidenceLabels:
          seed.extent === "label-without-borders"
            ? ["biblical-account", "reconstruction"]
            : ["reconstruction"],
      }
    ),
    ...blockSection(
      `${seed.id}-earlier`,
      "Earlier in the biblical story",
      extra?.earlier,
      ["biblical-account"]
    ),
    ...blockSection(
      `${seed.id}-uncertainties`,
      "What is uncertain",
      extra?.uncertainties,
      ["disputed"]
    ),
    ...blockSection(
      `${seed.id}-historical`,
      "Historical and archaeological context",
      extra?.historical,
      ["externally-attested"],
      true
    ),
  ];

  return {
    id: seed.id,
    name: seed.name,
    alternateNames: seed.alt ?? [],
    type: seed.type,
    summary: seed.summary,
    sections,
    relatedEntityIds: relatedFor(seed.id, [
      ...(extra?.relatedEntityIds ?? []),
      ...(seed.memberSiteIds ?? []),
    ]),
    timelineEventIds: TIMELINE_BY_ENTITY[seed.id] ?? [],
    chapterNumbers: chaptersFor(seed.id, seed.chapters),
    laterRelevance: extra?.later
      ? {
          body: extra.later.body,
          scriptureRefs: extra.later.scriptureRefs ?? [],
          citations: extra.later.citations ?? [],
        }
      : undefined,
    relationships: extra?.relationships,
    primaryMapFeatureId: FEATURE_FOR_ENTITY[seed.id],
  };
}

/* ------------------------------------------------------------------ */
/* People                                                             */
/* ------------------------------------------------------------------ */

/** Rendered as its own section so the gaps are as visible as the content. */
function notToldBody(items: string[]): string {
  return items.map((i) => `*${i}*`).join("\n\n");
}

function fromPerson(seed: PersonSeed): Entity {
  const profile = PROFILE_BY_ENTITY_ID[seed.id];
  const extra = DOSSIER_EXTRA_BY_ID[seed.id];

  /*
   * `seed.summary` is deliberately absent here: the drawer prints it as the lead
   * paragraph, so including it again made the first section restate what the reader had
   * just finished. `profile.identity` is a different fact and worth its own section
   * (parentage, tribe, epithets), so it stays; without a profile there is nothing left
   * to say that the lead has not already said, and the section is dropped.
   */
  const sections: StudySection[] = profile
    ? [section(`${seed.id}-identification`, "Who this is", profile.identity)]
    : [];

  if (seed.statedRelations.length) {
    sections.push(
      section(
        `${seed.id}-relations`,
        "Ties the text states",
        seed.statedRelations.map((r) => `*${r}*`).join("\n\n"),
        { evidenceLabels: ["biblical-account"] }
      )
    );
  }

  if (profile) {
    sections.push(
      section(`${seed.id}-background`, "Background", profile.background, {
        scriptureRefs: profile.scriptureRefs,
        citations: profile.citations,
      }),
      section(
        `${seed.id}-actions`,
        "What they do, and what follows",
        profile.actionsAndConsequences,
        { scriptureRefs: profile.scriptureRefs }
      ),
      section(
        `${seed.id}-significance`,
        "Why the book gives them this much space",
        profile.significance,
        {
          evidenceLabels: ["biblical-account", "theological-interpretation"],
          collapsedByDefault: true,
        }
      )
    );
  }

  const gaps = profile?.whatWeAreNotTold ?? seed.notTold;
  if (gaps?.length) {
    sections.push(
      section(
        `${seed.id}-not-told`,
        "What we are not told",
        notToldBody(gaps),
        { evidenceLabels: ["biblical-account"] }
      )
    );
  }

  sections.push(
    ...blockSection(
      `${seed.id}-historical`,
      "Historical context",
      extra?.historical,
      ["externally-attested"],
      true
    )
  );

  const relationships: EntityRelationship[] | undefined =
    profile?.relationships ?? extra?.relationships;

  const later = profile?.later ?? extra?.later;

  return {
    id: seed.id,
    name: seed.name,
    alternateNames: seed.alt ?? [],
    type: "person",
    summary: seed.summary,
    sections,
    relatedEntityIds: relatedFor(seed.id, [
      ...(extra?.relatedEntityIds ?? []),
      ...(profile?.placeEntityIds ?? []),
      ...(relationships ?? []).map((r) => r.targetEntityId),
    ]),
    timelineEventIds: profile?.timelineEventIds?.length
      ? profile.timelineEventIds
      : (TIMELINE_BY_ENTITY[seed.id] ?? []),
    chapterNumbers: chaptersFor(seed.id, seed.chapters),
    laterRelevance: later
      ? {
          body: later.body,
          scriptureRefs: later.scriptureRefs ?? [],
          citations: "citations" in later ? (later.citations ?? []) : [],
        }
      : undefined,
    relationships,
    /* People are not drawn on the map; the places they act in are. */
    primaryMapFeatureId: undefined,
  };
}

/* ------------------------------------------------------------------ */
/* The assembled register                                              */
/* ------------------------------------------------------------------ */

export const ALL_ENTITIES: Entity[] = [
  ...PERSON_SEEDS.map(fromPerson),
  ...SITE_SEEDS.map(fromSite),
  ...GROUP_SEEDS.map(fromGroup),
];

export const ENTITY_BY_ID: Record<string, Entity> = Object.fromEntries(
  ALL_ENTITIES.map((e) => [e.id, e])
);

export const ENTITY_IDS: string[] = ALL_ENTITIES.map((e) => e.id);

export const ENTITIES_BY_TYPE: Record<EntityType, Entity[]> =
  ALL_ENTITIES.reduce(
    (acc, e) => {
      acc[e.type].push(e);
      return acc;
    },
    {
      person: [],
      people: [],
      city: [],
      region: [],
      polity: [],
      alliance: [],
      tribe: [],
      "geographic-feature": [],
    } as Record<EntityType, Entity[]>
  );

export function getEntity(id: string): Entity | undefined {
  return ENTITY_BY_ID[id];
}

/** Entities a chapter touches, ordered so people come before places. */
export function entitiesForChapter(chapter: number): Entity[] {
  return ALL_ENTITIES.filter((e) => e.chapterNumbers.includes(chapter));
}

/**
 * Every id any milestone, chapter or feature refers to, whether or not a record
 * exists for it. The validator compares this against `ENTITY_IDS` so a reference
 * to an entity nobody wrote is a build failure and not a dead link.
 */
export const REFERENCED_ENTITY_IDS: string[] = [
  ...new Set([
    ...MILESTONES.flatMap((m) => m.entityIds),
    ...ALL_FEATURES.flatMap((f) => f.entityId ?? []),
  ]),
].sort();
