/**
 * Referential integrity and editorial-discipline checks for the study content.
 *
 * Ten authors wrote the chapters, themes, questions and profiles in parallel
 * against a fixed set of ids. This script is what stops that from drifting. It is
 * not a linter for taste; every check here corresponds to a way the study could
 * quietly tell the reader something untrue:
 *
 *   an invented citation          -> unknown sourceId
 *   an invented place             -> a coordinate on a site marked unknown, or a
 *                                   milestone pointing at a feature that has none
 *   a dead cross-reference        -> an entity, theme or question id that resolves
 *                                   to nothing, so a link in the interface goes dark
 *   an animated summary           -> a sequenceType that lets the map draw a march
 *                                   where the text gives a territorial description
 *   generic devotional filler     -> word counts outside the curated band
 *
 * Run: npm run validate
 */

import fs from "node:fs";
import path from "node:path";
import {
  EVIDENCE_LABELS,
  NARRATIVE_PHASES,
  SECTION_ORDER,
  SEQUENCE_TYPES,
  type Chapter,
  type Citation,
  type DifficultQuestion,
  type Milestone,
  type PersonProfile,
  type Theme,
} from "../content/types";
import {
  BEFORE_STAGE_IDS,
  DIFFICULT_QUESTION_IDS,
  MILESTONE_ID_PATTERN,
  THEME_IDS,
} from "../content/manifest";
import { SOURCE_IDS } from "../content/sources";
import { SITE_SEEDS } from "../content/map/site-seeds";
import { PERSON_SEEDS, FULL_PROFILE_IDS } from "../content/entities/person-seeds";
import { GROUP_SEEDS } from "../content/entities/group-seeds";
import { AUTHORED_FEATURES, SITE_DERIVED_FEATURES } from "../content/map/features";
import {
  ALL_FEATURES,
  FEATURE_BY_ID,
  UNDRAWABLE_FEATURE_IDS,
  UNLOCATED_MEMBERS,
} from "../content/map/index";

/* ------------------------------------------------------------------ */
/* Reporting                                                           */
/* ------------------------------------------------------------------ */

const errors: string[] = [];
const warnings: string[] = [];
const notes: string[] = [];

let scope = "";
const inScope = (s: string) => {
  scope = s;
};
const fail = (msg: string) => errors.push(`${scope}: ${msg}`);
const warn = (msg: string) => warnings.push(`${scope}: ${msg}`);

const ROOT = path.resolve(import.meta.dirname, "..");

/* ------------------------------------------------------------------ */
/* The id universe                                                     */
/* ------------------------------------------------------------------ */

const SOURCES = new Set(SOURCE_IDS);
const SITE_IDS = new Set(SITE_SEEDS.map((s) => s.id));
const PERSON_IDS = new Set(PERSON_SEEDS.map((p) => p.id));
const GROUP_IDS = new Set(GROUP_SEEDS.map((g) => g.id));
const ENTITY_IDS = new Set([...SITE_IDS, ...PERSON_IDS, ...GROUP_IDS]);
const THEMES = new Set<string>(THEME_IDS);
const QUESTIONS = new Set<string>(DIFFICULT_QUESTION_IDS);
const STAGES = new Set<string>(BEFORE_STAGE_IDS);
const UNLOCATED = new Set(SITE_SEEDS.filter((s) => !s.coords).map((s) => s.id));

/** The study area, generously bounded. Catches transposed lat/lon immediately. */
const BBOX = { west: 29, east: 40, south: 28, north: 36 };
const inBbox = ([lon, lat]: [number, number]) =>
  lon >= BBOX.west && lon <= BBOX.east && lat >= BBOX.south && lat <= BBOX.north;

const words = (s: string) => s.trim().split(/\s+/).filter(Boolean).length;

const checkCitations = (cites: Citation[] | undefined, where: string) => {
  for (const c of cites ?? []) {
    if (!SOURCES.has(c.sourceId)) {
      fail(`${where} cites unknown source "${c.sourceId}"`);
    }
    if (!c.supportedClaim?.trim()) {
      fail(`${where} cites ${c.sourceId} with no supportedClaim`);
    }
  }
};

const checkEntityRefs = (ids: string[] | undefined, where: string) => {
  for (const id of ids ?? []) {
    if (!ENTITY_IDS.has(id)) fail(`${where} references unknown entity "${id}"`);
  }
};

const ENTITY_LINK = /\[\[entity:([a-z0-9-]+)\]\]/g;
const checkBodyLinks = (body: string, where: string) => {
  for (const m of body.matchAll(ENTITY_LINK)) {
    if (!ENTITY_IDS.has(m[1])) {
      fail(`${where} links to unknown entity "${m[1]}"`);
    }
  }
  if (body.includes("—")) {
    warn(`${where} contains an em dash, which the style guide excludes`);
  }
};

/* ------------------------------------------------------------------ */
/* 1. Registries                                                       */
/* ------------------------------------------------------------------ */

inScope("sources.ts");
{
  const seen = new Set<string>();
  for (const id of SOURCE_IDS) {
    if (seen.has(id)) fail(`duplicate source id "${id}"`);
    seen.add(id);
  }
}

inScope("site-seeds.ts");
{
  const seen = new Set<string>();
  for (const s of SITE_SEEDS) {
    if (seen.has(s.id)) fail(`duplicate site id "${s.id}"`);
    seen.add(s.id);

    if (s.certainty === "unknown" && s.coords) {
      fail(
        `"${s.id}" is marked certainty "unknown" but carries a coordinate. An unknown location must not be pinned.`
      );
    }
    if (s.certainty !== "unknown" && !s.coords) {
      fail(
        `"${s.id}" has certainty "${s.certainty}" but no coordinate. Either give it one or mark it "unknown".`
      );
    }
    if (s.coords && !inBbox(s.coords)) {
      fail(
        `"${s.id}" coordinate [${s.coords}] falls outside the study area. Check for transposed longitude and latitude.`
      );
    }
    for (const alt of s.alternatives ?? []) {
      if (alt.coordinates && !inBbox(alt.coordinates)) {
        fail(`"${s.id}" alternative "${alt.name}" coordinate is outside the study area`);
      }
    }
    if (s.certainty === "disputed" && !(s.alternatives?.length || s.why.length > 60)) {
      warn(`"${s.id}" is disputed but names no alternatives and gives little explanation`);
    }
    checkCitations(
      (s.cites ?? []).map((c) => ({
        sourceId: c.sourceId,
        supportedClaim: c.claim,
        locator: c.locator,
      })),
      `site "${s.id}"`
    );
  }
  notes.push(
    `${SITE_SEEDS.length} sites registered, ${UNLOCATED.size} of them deliberately unlocated.`
  );
}

inScope("person-seeds.ts");
{
  const seen = new Set<string>();
  for (const p of PERSON_SEEDS) {
    if (seen.has(p.id)) fail(`duplicate person id "${p.id}"`);
    seen.add(p.id);
    for (const ch of p.chapters) {
      if (ch < 1 || ch > 24) fail(`"${p.id}" lists chapter ${ch}, outside 1-24`);
    }
  }
}

inScope("group-seeds.ts");
{
  const seen = new Set<string>();
  for (const g of GROUP_SEEDS) {
    if (seen.has(g.id)) fail(`duplicate group id "${g.id}"`);
    seen.add(g.id);
    for (const site of g.memberSiteIds ?? []) {
      if (!SITE_IDS.has(site)) {
        fail(`"${g.id}" lists unknown member site "${site}"`);
      }
    }
    if (!g.mappingNote?.trim()) {
      fail(`"${g.id}" has no mappingNote, so the map has no rule for drawing it`);
    }
    checkCitations(
      (g.cites ?? []).map((c) => ({
        sourceId: c.sourceId,
        supportedClaim: c.claim,
        locator: c.locator,
      })),
      `group "${g.id}"`
    );
  }
}

inScope("id namespace");
{
  const collide = (a: Set<string>, b: Set<string>, an: string, bn: string) => {
    for (const id of a) {
      if (b.has(id)) fail(`"${id}" is used as both a ${an} and a ${bn} id`);
    }
  };
  collide(SITE_IDS, PERSON_IDS, "site", "person");
  collide(SITE_IDS, GROUP_IDS, "site", "group");
  collide(PERSON_IDS, GROUP_IDS, "person", "group");
}

/* ------------------------------------------------------------------ */
/* 2. Map features                                                     */
/* ------------------------------------------------------------------ */

inScope("map features");
{
  const seen = new Set<string>();
  for (const f of ALL_FEATURES) {
    if (seen.has(f.id)) fail(`duplicate feature id "${f.id}"`);
    seen.add(f.id);

    if (f.entityId && !ENTITY_IDS.has(f.entityId)) {
      fail(`feature "${f.id}" points at unknown entity "${f.entityId}"`);
    }
    if (!f.label?.trim()) fail(`feature "${f.id}" has no label`);
    if (!f.explanation?.trim()) {
      fail(`feature "${f.id}" has no explanation of why it is drawn as it is`);
    }
    if (f.certainty === "unknown") {
      fail(`feature "${f.id}" has certainty "unknown" but is still drawn`);
    }
    checkCitations(f.citations, `feature "${f.id}"`);

    const g = f.geometry;
    if (g.type === "Polygon") {
      for (const ring of g.coordinates) {
        if (ring.length < 4) fail(`feature "${f.id}" has a ring with under 4 positions`);
        const [a, b] = [ring[0], ring[ring.length - 1]];
        if (a[0] !== b[0] || a[1] !== b[1]) {
          fail(`feature "${f.id}" has an unclosed ring`);
        }
        for (const p of ring) {
          if (!inBbox(p as [number, number])) {
            fail(`feature "${f.id}" has a vertex outside the study area: [${p}]`);
          }
        }
      }
    }
  }

  for (const f of AUTHORED_FEATURES) {
    if (f.kind === "allotment" && !f.explanation.includes("Allotment is not control")) {
      fail(`allotment "${f.id}" is missing the allotment-is-not-control caveat`);
    }
  }

  for (const s of SITE_DERIVED_FEATURES) {
    if (s.memberSiteIds.length === 0) {
      fail(`site-derived feature "${s.id}" lists no members`);
    }
    for (const id of s.memberSiteIds) {
      if (!SITE_IDS.has(id)) {
        fail(`site-derived feature "${s.id}" lists unknown member site "${id}"`);
      }
    }
  }

  for (const [id, missing] of Object.entries(UNLOCATED_MEMBERS)) {
    const unexpected = missing.filter((m) => !UNLOCATED.has(m));
    if (unexpected.length) {
      fail(`feature "${id}" dropped members that are not unlocated: ${unexpected.join(", ")}`);
    } else {
      notes.push(`"${id}" draws without ${missing.join(", ")}, whose locations are unknown.`);
    }
  }
  for (const id of UNDRAWABLE_FEATURE_IDS) {
    warn(`"${id}" resolved to no geometry at all and will not appear on the map`);
  }
  notes.push(`${ALL_FEATURES.length} map features assembled.`);
}

/* ------------------------------------------------------------------ */
/* 3. Chapters and milestones                                          */
/* ------------------------------------------------------------------ */

interface ChapterModule {
  CHAPTERS?: Chapter[];
  MILESTONES?: Milestone[];
}

const chapterDir = path.join(ROOT, "content", "chapters");
const chapterFiles = fs.existsSync(chapterDir)
  ? fs
      .readdirSync(chapterDir)
      .filter((f) => f.endsWith(".ts") && f !== "index.ts")
      .sort()
  : [];

const allChapters: Chapter[] = [];
const allMilestones: Milestone[] = [];

for (const file of chapterFiles) {
  inScope(`chapters/${file}`);
  let mod: ChapterModule;
  try {
    mod = (await import(path.join(chapterDir, file))) as ChapterModule;
  } catch (e) {
    fail(`failed to import: ${(e as Error).message}`);
    continue;
  }
  if (!mod.CHAPTERS) fail("exports no CHAPTERS");
  if (!mod.MILESTONES) fail("exports no MILESTONES");
  allChapters.push(...(mod.CHAPTERS ?? []));
  allMilestones.push(...(mod.MILESTONES ?? []));
}

inScope("chapter coverage");
{
  const byNumber = new Map<number, Chapter>();
  for (const c of allChapters) {
    if (byNumber.has(c.number)) fail(`chapter ${c.number} is defined twice`);
    byNumber.set(c.number, c);
  }
  const missing = Array.from({ length: 24 }, (_, i) => i + 1).filter(
    (n) => !byNumber.has(n)
  );
  if (missing.length) {
    warn(`chapters not yet authored: ${missing.join(", ")}`);
  }
  notes.push(`${byNumber.size} of 24 chapters authored.`);
}

const milestonesByChapter = new Map<number, Milestone[]>();
for (const m of allMilestones) {
  const list = milestonesByChapter.get(m.chapter) ?? [];
  list.push(m);
  milestonesByChapter.set(m.chapter, list);
}

for (const c of allChapters) {
  inScope(`chapter ${c.number}`);

  if (c.id !== `ch${c.number}`) fail(`id is "${c.id}" but should be "ch${c.number}"`);
  if (!c.title?.trim()) fail("has no title");
  if (!c.summary?.trim()) fail("has no summary");
  if (!c.scriptureRange?.trim()) fail("has no scriptureRange");

  const phase = NARRATIVE_PHASES[c.phase];
  if (!phase) {
    fail(`has unknown phase "${c.phase}"`);
  } else if (!phase.chapters.includes(c.number)) {
    fail(`is in phase "${c.phase}", which does not contain chapter ${c.number}`);
  }

  /* Sections: all seven, in order, with the canonical titles. */
  const kinds = c.sections.map((s) => s.kind);
  const expected = SECTION_ORDER.map((s) => s.kind);
  if (kinds.length !== expected.length || kinds.some((k, i) => k !== expected[i])) {
    fail(`sections are ${kinds.join(", ")} but must be exactly ${expected.join(", ")}`);
  }
  const collapsed = new Set([
    "surrounding-world",
    "details-worth-noticing",
    "difficult-questions",
  ]);
  for (const s of c.sections) {
    const canonical = SECTION_ORDER.find((o) => o.kind === s.kind);
    if (canonical && s.title !== canonical.title) {
      fail(`section "${s.kind}" is titled "${s.title}" but should be "${canonical.title}"`);
    }
    if (s.id !== `ch${c.number}-${s.kind}`) {
      fail(`section id "${s.id}" should be "ch${c.number}-${s.kind}"`);
    }
    if (!s.body?.trim()) fail(`section "${s.kind}" has an empty body`);
    if (collapsed.has(s.kind) !== Boolean(s.collapsedByDefault)) {
      fail(
        `section "${s.kind}" has collapsedByDefault=${Boolean(s.collapsedByDefault)}; ` +
          `it should be ${collapsed.has(s.kind)}`
      );
    }
    for (const label of s.evidenceLabels) {
      if (!(label in EVIDENCE_LABELS)) fail(`section "${s.kind}" has unknown evidence label "${label}"`);
    }
    if (s.evidenceLabels.length === 0) {
      warn(`section "${s.kind}" carries no evidence label`);
    }
    checkCitations(s.citations, `chapter ${c.number} section "${s.kind}"`);
    checkBodyLinks(s.body, `chapter ${c.number} section "${s.kind}"`);
  }

  /**
   * Word budget: the guard against generic devotional padding.
   *
   * The 400 to 700 band applies to the curated explanation, which is the sections
   * that are open by default. The three collapsed sections are the deeper material
   * a reader chooses to open, and they are budgeted separately so that progressive
   * disclosure does not become a way to smuggle in padding.
   *
   * The band warns; a wider tolerance fails. The brief asks for roughly 400 to 700
   * words, and a chapter that comes in at 399 has not padded or skimped, it has
   * landed a word outside a round number. What the hard bound is actually for is
   * catching a chapter that was never really written or that turned into filler,
   * and those miss by a lot, not by one.
   */
  const curated = c.sections
    .filter((s) => !s.collapsedByDefault)
    .reduce((n, s) => n + words(s.body), 0);
  const deeper = c.sections
    .filter((s) => s.collapsedByDefault)
    .reduce((n, s) => n + words(s.body), 0);

  const band = `(a further ${deeper} words sit behind progressive disclosure)`;
  if (curated < 340 || curated > 780) {
    fail(`has ${curated} words in its open sections, well outside 400 to 700 ${band}`);
  } else if (curated < 400 || curated > 700) {
    warn(`has ${curated} words in its open sections; the band is 400 to 700 ${band}`);
  }
  if (deeper > 600) {
    fail(`has ${deeper} words in its collapsed sections, which is past the 600 ceiling`);
  }
  const glance = c.sections.find((s) => s.kind === "at-a-glance");
  if (glance) {
    const n = words(glance.body);
    if (n < 40 || n > 70) warn(`"At a glance" is ${n} words; the band is 40 to 70`);
  }
  const walk = c.sections.find((s) => s.kind === "walk-through");
  if (walk) {
    const n = words(walk.body);
    if (n < 140 || n > 220) warn(`"Walk through the chapter" is ${n} words; the band is 140 to 220`);
  }

  if (c.discussionQuestions.length < 3 || c.discussionQuestions.length > 5) {
    fail(`has ${c.discussionQuestions.length} discussion questions; the range is 3 to 5`);
  }
  for (const t of c.themeIds) {
    if (!THEMES.has(t)) fail(`references unknown theme "${t}"`);
  }
  if (c.themeIds.length === 0) warn("references no themes");
  checkEntityRefs(c.relatedEntityIds, `chapter ${c.number}`);

  /* milestoneIds must agree with the milestones that claim this chapter. */
  const declared = c.milestoneIds;
  const actual = (milestonesByChapter.get(c.number) ?? [])
    .slice()
    .sort((a, b) => a.order - b.order)
    .map((m) => m.id);
  if (declared.join("|") !== actual.join("|")) {
    fail(
      `milestoneIds [${declared.join(", ")}] do not match the milestones defined for ` +
        `this chapter in order [${actual.join(", ")}]`
    );
  }
}

inScope("milestones");
{
  const seen = new Set<string>();
  for (const m of allMilestones) {
    if (seen.has(m.id)) fail(`duplicate milestone id "${m.id}"`);
    seen.add(m.id);

    if (!MILESTONE_ID_PATTERN.test(m.id)) {
      fail(`"${m.id}" does not match the milestone id pattern`);
    }
    if (!m.id.startsWith(`ch${m.chapter}-`)) {
      fail(`"${m.id}" declares chapter ${m.chapter}, which its id prefix contradicts`);
    }
    if (m.chapter < 1 || m.chapter > 24) fail(`"${m.id}" has chapter ${m.chapter}`);

    if (!m.title?.trim()) fail(`"${m.id}" has no title`);
    if (!m.mapCaption?.trim()) fail(`"${m.id}" has no mapCaption`);
    if (!m.whatChanged?.trim()) fail(`"${m.id}" has no whatChanged`);
    if (!m.geographyExplanation?.trim()) {
      fail(`"${m.id}" has no geographyExplanation, so the map is decoration here`);
    }
    if (m.scriptureRefs.length === 0) fail(`"${m.id}" cites no Scripture`);

    const n = words(m.narrative);
    if (n < 90 || n > 220) fail(`"${m.id}" narrative is ${n} words; the band is 90 to 220`);

    if (!(m.sequenceType in SEQUENCE_TYPES)) {
      fail(`"${m.id}" has unknown sequenceType "${m.sequenceType}"`);
    }

    checkEntityRefs(m.entityIds, `milestone "${m.id}"`);
    checkCitations(m.citations, `milestone "${m.id}"`);
    checkBodyLinks(m.narrative, `milestone "${m.id}"`);

    for (const fid of m.mapFeatureIds) {
      if (FEATURE_BY_ID[fid]) continue;
      const bare = fid.replace(/^site-/, "");
      if (fid.startsWith("site-") && UNLOCATED.has(bare)) {
        fail(
          `"${m.id}" references "${fid}", but ${bare}'s location is unknown and it has ` +
            `no map feature. Reference the entity in entityIds instead.`
        );
      } else {
        fail(`"${m.id}" references unknown map feature "${fid}"`);
      }
    }
    if (m.mapFeatureIds.length === 0) warn(`"${m.id}" places nothing on the map`);

    const { center, zoom, bounds } = m.viewport;
    if (!inBbox(center)) fail(`"${m.id}" viewport centre [${center}] is outside the study area`);
    if (!bounds && (zoom < 7 || zoom > 12)) {
      warn(`"${m.id}" viewport zoom is ${zoom}; the band is 7 to 12`);
    }
    for (const label of m.evidenceLabels ?? []) {
      if (!(label in EVIDENCE_LABELS)) fail(`"${m.id}" has unknown evidence label "${label}"`);
    }
  }

  for (const [chapter, list] of milestonesByChapter) {
    const orders = list.map((m) => m.order).sort((a, b) => a - b);
    const expected = orders.map((_, i) => i + 1);
    if (orders.join(",") !== expected.join(",")) {
      fail(`chapter ${chapter} milestone orders are [${orders.join(", ")}]; expected 1..n`);
    }
    if (list.length > 6) {
      warn(`chapter ${chapter} has ${list.length} milestones; 2 to 5 is the norm`);
    }
    if (list.length < 2) {
      fail(`chapter ${chapter} has only ${list.length} milestone`);
    }
  }
  notes.push(`${allMilestones.length} milestones across ${milestonesByChapter.size} chapters.`);
}

/* ------------------------------------------------------------------ */
/* 4. Optional content modules                                         */
/* ------------------------------------------------------------------ */

async function optional<T>(rel: string, pick: (m: Record<string, unknown>) => T | undefined) {
  const file = path.join(ROOT, rel);
  if (!fs.existsSync(file)) {
    warnings.push(`${rel}: not yet authored`);
    return undefined;
  }
  try {
    const mod = (await import(file)) as Record<string, unknown>;
    const value = pick(mod);
    if (value === undefined) {
      errors.push(`${rel}: does not export what was expected`);
    }
    return value;
  } catch (e) {
    errors.push(`${rel}: failed to import: ${(e as Error).message}`);
    return undefined;
  }
}

const themes = await optional("content/themes.ts", (m) => m.THEMES as Theme[] | undefined);
if (themes) {
  inScope("themes.ts");
  const ids = new Set(themes.map((t) => t.id));
  for (const want of THEME_IDS) {
    if (!ids.has(want)) fail(`missing theme "${want}"`);
  }
  for (const t of themes) {
    if (!THEMES.has(t.id)) fail(`"${t.id}" is not in THEME_IDS`);
    if (!t.hook?.trim()) fail(`"${t.id}" has no hook`);
    if (words(t.body) < 150) warn(`"${t.id}" body is only ${words(t.body)} words`);
    checkEntityRefs(t.entityIds, `theme "${t.id}"`);
    checkCitations(t.citations, `theme "${t.id}"`);
    checkCitations(t.reformedPerspective?.citations, `theme "${t.id}" Reformed perspective`);
    checkBodyLinks(t.body, `theme "${t.id}"`);
    for (const q of t.relatedQuestionIds) {
      if (!QUESTIONS.has(q)) fail(`"${t.id}" references unknown question "${q}"`);
    }
    for (const ch of t.chapterNumbers) {
      if (ch < 1 || ch > 24) fail(`"${t.id}" lists chapter ${ch}`);
    }
  }
  notes.push(`${themes.length} themes authored.`);
}

const questions = await optional(
  "content/difficult-questions.ts",
  (m) => m.DIFFICULT_QUESTIONS as DifficultQuestion[] | undefined
);
if (questions) {
  inScope("difficult-questions.ts");
  const ids = new Set(questions.map((q) => q.id));
  for (const want of DIFFICULT_QUESTION_IDS) {
    if (!ids.has(want)) fail(`missing question "${want}"`);
  }
  for (const q of questions) {
    if (!QUESTIONS.has(q.id)) fail(`"${q.id}" is not in DIFFICULT_QUESTION_IDS`);
    for (const field of [
      "whatTheTextSays",
      "literaryFunction",
      "historicalQuestions",
      "unresolved",
    ] as const) {
      if (!q[field]?.trim()) fail(`"${q.id}" has an empty ${field}`);
    }
    if (q.interpretations.length < 2) {
      fail(`"${q.id}" gives ${q.interpretations.length} interpretations; a difficult question needs at least 2`);
    }
    for (const i of q.interpretations) {
      if (!i.label?.trim()) fail(`"${q.id}" has an unlabelled interpretation`);
      if (!i.strengths?.trim() || !i.difficulties?.trim()) {
        fail(`"${q.id}" interpretation "${i.label}" omits strengths or difficulties`);
      }
      checkCitations(i.citations, `question "${q.id}" interpretation "${i.label}"`);
    }
    if (q.id === "conquest-violence" && !q.ethicalNote?.trim()) {
      fail(`"${q.id}" must carry an ethicalNote`);
    }
    for (const t of q.themeIds) {
      if (!THEMES.has(t)) fail(`"${q.id}" references unknown theme "${t}"`);
    }
    checkCitations(q.citations, `question "${q.id}"`);
  }
  notes.push(`${questions.length} difficult questions authored.`);
}

const stages = await optional(
  "content/before-joshua.ts",
  (m) => m.BEFORE_STAGES as { id: string; order: number; body: string; entityIds: string[]; mapFeatureIds: string[]; citations: Citation[] }[] | undefined
);
if (stages) {
  inScope("before-joshua.ts");
  const ids = new Set(stages.map((s) => s.id));
  for (const want of BEFORE_STAGE_IDS) {
    if (!ids.has(want)) fail(`missing stage "${want}"`);
  }
  for (const s of stages) {
    if (!STAGES.has(s.id)) fail(`"${s.id}" is not in BEFORE_STAGE_IDS`);
    const n = words(s.body);
    if (n < 150 || n > 320) warn(`"${s.id}" is ${n} words; the band is 150 to 320`);
    checkEntityRefs(s.entityIds, `stage "${s.id}"`);
    checkCitations(s.citations, `stage "${s.id}"`);
    checkBodyLinks(s.body, `stage "${s.id}"`);
    for (const fid of s.mapFeatureIds) {
      if (!FEATURE_BY_ID[fid]) fail(`"${s.id}" references unknown map feature "${fid}"`);
    }
  }
  notes.push(`${stages.length} Before Joshua stages authored.`);
}

const profiles = await optional(
  "content/people.ts",
  (m) => m.PERSON_PROFILES as PersonProfile[] | undefined
);
if (profiles) {
  inScope("people.ts");
  const ids = new Set(profiles.map((p) => p.entityId));
  for (const want of FULL_PROFILE_IDS) {
    if (!ids.has(want)) fail(`missing full profile for "${want}"`);
  }
  for (const p of profiles) {
    if (!PERSON_IDS.has(p.entityId)) fail(`profile for unknown person "${p.entityId}"`);
    for (const field of ["identity", "background", "actionsAndConsequences", "significance"] as const) {
      if (!p[field]?.trim()) fail(`"${p.entityId}" has an empty ${field}`);
    }
    checkEntityRefs(p.placeEntityIds, `profile "${p.entityId}"`);
    checkCitations(p.citations, `profile "${p.entityId}"`);
    checkBodyLinks(p.background, `profile "${p.entityId}" background`);
    for (const r of p.relationships) {
      if (!ENTITY_IDS.has(r.targetEntityId)) {
        fail(`"${p.entityId}" relates to unknown entity "${r.targetEntityId}"`);
      }
    }
    for (const t of p.themeIds) {
      if (!THEMES.has(t)) fail(`"${p.entityId}" references unknown theme "${t}"`);
    }
  }
  notes.push(`${profiles.length} person profiles authored.`);
}

/* ------------------------------------------------------------------ */
/* Report                                                              */
/* ------------------------------------------------------------------ */

const bold = (s: string) => `\x1b[1m${s}\x1b[0m`;
const red = (s: string) => `\x1b[31m${s}\x1b[0m`;
const yellow = (s: string) => `\x1b[33m${s}\x1b[0m`;
const dim = (s: string) => `\x1b[2m${s}\x1b[0m`;

console.log(bold("\nContent validation\n"));
for (const n of notes) console.log(dim(`  ${n}`));

if (warnings.length) {
  console.log(yellow(`\n  ${warnings.length} warning${warnings.length === 1 ? "" : "s"}`));
  for (const w of warnings) console.log(yellow(`    ${w}`));
}
if (errors.length) {
  console.log(red(`\n  ${errors.length} error${errors.length === 1 ? "" : "s"}`));
  for (const e of errors) console.log(red(`    ${e}`));
  console.log(red(bold("\nValidation failed.\n")));
  process.exit(1);
}
console.log(bold("\nNo errors.\n"));
