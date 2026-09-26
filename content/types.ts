/**
 * Core data model for "Joshua: The Journey into the Land".
 *
 * Two rules shape these types:
 *  1. Biblical sequence is stored separately from proposed historical dates.
 *     `Milestone.sequenceType` and `TimelineEvent.sequenceCertainty` carry
 *     narrative order; `HistoricalAnchor` is the only place absolute dates live,
 *     and it must name the chronology it assumes.
 *  2. Every non-obvious claim carries an evidence label and, where it depends on
 *     something outside the biblical text, a citation into the source registry.
 */

import type { Geometry } from "geojson";

/* ------------------------------------------------------------------ */
/* Evidence and sourcing                                              */
/* ------------------------------------------------------------------ */

/**
 * Labels may coexist. A city can be "externally-attested" as a place and still
 * have a narrated event there labelled "biblical-account" only: attestation of a
 * site is not attestation of everything the text reports happening at it.
 */
export type EvidenceLabel =
  | "biblical-account"
  | "externally-attested"
  | "reconstruction"
  | "disputed"
  | "theological-interpretation";

export const EVIDENCE_LABELS: Record<
  EvidenceLabel,
  { label: string; description: string }
> = {
  "biblical-account": {
    label: "Biblical account",
    description:
      "What the text of Scripture itself says, described on its own terms.",
  },
  "externally-attested": {
    label: "Externally attested",
    description:
      "Supported by evidence outside the Bible: excavation, inscriptions, or ancient records from other peoples. Attestation of a place or a name is not attestation of every event reported there.",
  },
  reconstruction: {
    label: "Reconstruction",
    description:
      "A modern proposal that fills a gap the sources leave open, such as a route, a boundary line, or a site identification. Held with appropriate tentativeness.",
  },
  disputed: {
    label: "Disputed",
    description:
      "Competent scholars disagree, and the disagreement is substantive rather than cosmetic. Both or several readings are presented.",
  },
  "theological-interpretation": {
    label: "Theological reading",
    description:
      "A claim about meaning and significance rather than about physical fact. Christian readings are identified as such, and specific traditions are named where relevant.",
  },
};

export interface Citation {
  sourceId: string;
  /** Page, chapter, verse, or section within the source. */
  locator?: string;
  /** The specific claim this source is being cited to support. */
  supportedClaim: string;
}

export type SourceKind =
  | "scripture"
  | "commentary"
  | "reference-work"
  | "atlas"
  | "archaeology"
  | "journal-article"
  | "primary-ancient-text"
  | "theology"
  | "encyclopedia";

export interface Source {
  id: string;
  kind: SourceKind;
  /** Author(s) or the responsible institution. */
  author: string;
  title: string;
  /** Publisher, journal, volume, series, or issuing body. */
  publication?: string;
  year?: string;
  url?: string;
  /** What this source is used for in this study, and its standpoint. */
  note: string;
  /**
   * Tradition or standpoint, where it affects how the source should be read.
   * e.g. "Reformed evangelical", "minimalist", "Israeli archaeology".
   */
  standpoint?: string;
}

/* ------------------------------------------------------------------ */
/* Study content                                                      */
/* ------------------------------------------------------------------ */

export interface StudySection {
  id: string;
  title: string;
  /** Lightweight markdown: paragraphs, **bold**, *italic*, and [[entity:id]] links. */
  body: string;
  scriptureRefs: string[];
  citations: Citation[];
  evidenceLabels: EvidenceLabel[];
  /** When true the section is collapsed by default (progressive disclosure). */
  collapsedByDefault?: boolean;
}

export type SectionKind =
  | "at-a-glance"
  | "walk-through"
  | "what-brought-us-here"
  | "surrounding-world"
  | "why-it-matters"
  | "details-worth-noticing"
  | "difficult-questions";

export const SECTION_ORDER: { kind: SectionKind; title: string }[] = [
  { kind: "at-a-glance", title: "At a glance" },
  { kind: "walk-through", title: "Walk through the chapter" },
  { kind: "what-brought-us-here", title: "What brought us here" },
  { kind: "surrounding-world", title: "The surrounding world" },
  { kind: "why-it-matters", title: "Why it matters" },
  { kind: "details-worth-noticing", title: "Details worth noticing" },
  { kind: "difficult-questions", title: "Difficult questions" },
];

export type NarrativePhase =
  | "preparation-and-entry"
  | "campaigns-and-consequences"
  | "inheritance-and-life"
  | "unity-farewell-covenant";

export const NARRATIVE_PHASES: Record<
  NarrativePhase,
  { label: string; chapters: number[]; blurb: string }
> = {
  "preparation-and-entry": {
    label: "Preparation and entry",
    chapters: [1, 2, 3, 4, 5],
    blurb:
      "Succession, reconnaissance, the crossing, and covenant identity before any fighting begins.",
  },
  "campaigns-and-consequences": {
    label: "Campaigns and their consequences",
    chapters: [6, 7, 8, 9, 10, 11, 12],
    blurb:
      "Jericho and Ai, a treaty obtained by deception, southern and northern coalitions, and a closing register of kings.",
  },
  "inheritance-and-life": {
    label: "Inheritance and life in the land",
    chapters: [13, 14, 15, 16, 17, 18, 19, 20, 21],
    blurb:
      "Land still unpossessed, tribal allotments, cities of refuge, and the Levites' scattered inheritance.",
  },
  "unity-farewell-covenant": {
    label: "Unity, farewell, and covenant renewal",
    chapters: [22, 23, 24],
    blurb:
      "An altar that nearly caused a civil war, a farewell warning, and covenant renewal at Shechem.",
  },
};

export interface Chapter {
  id: string;
  number: number;
  title: string;
  /** One or two sentences, used in the rail and chapter header. */
  summary: string;
  phase: NarrativePhase;
  /** Canonical span, e.g. "Joshua 1:1-18". */
  scriptureRange: string;
  milestoneIds: string[];
  sections: (StudySection & { kind: SectionKind })[];
  discussionQuestions: string[];
  relatedEntityIds: string[];
  themeIds: string[];
  /** Approximate curated word count, excluding optional deeper material. */
  wordCount?: number;
}

/**
 * `sequenceType` is load-bearing for the map. Only "event" milestones may
 * animate movement. "summary", "allotment", and "retrospective" milestones
 * describe territory or look backward and must not be rendered as fresh
 * chronological advance.
 */
export type SequenceType = "event" | "summary" | "allotment" | "retrospective";

export const SEQUENCE_TYPES: Record<
  SequenceType,
  { label: string; mapRule: string }
> = {
  event: {
    label: "Narrated event",
    mapRule:
      "A located episode in the story's sequence. Movement and event markers are appropriate here.",
  },
  summary: {
    label: "Summary statement",
    mapRule:
      "A compressed report covering an unspecified span. The map shows the scope of the report; nothing travels.",
  },
  allotment: {
    label: "Territorial description",
    mapRule:
      "Land assigned by lot and described by boundary. Drawn as an approximate region, which says nothing about who held the ground.",
  },
  retrospective: {
    label: "Retrospective",
    mapRule:
      "The text looks back on earlier events. The map may recall earlier places but adds no new advance.",
  },
};

export interface MapViewport {
  center: [number, number];
  zoom: number;
  /** Optional bounding box preferred over center/zoom when present. */
  bounds?: [[number, number], [number, number]];
  /** A schematic inset (e.g. the Jericho procession) rather than real geography. */
  inset?: "jericho-procession" | "ebal-gerizim" | "none";
}

export interface Milestone {
  id: string;
  chapter: number;
  /** Order within the chapter. */
  order: number;
  title: string;
  scriptureRefs: string[];
  /** The narrative for this specific beat, 90-220 words. */
  narrative: string;
  entityIds: string[];
  mapFeatureIds: string[];
  /** Caption shown directly beneath the map. */
  mapCaption: string;
  /** "What changed?" panel beside the map. */
  whatChanged: string;
  /** "Why this geography matters" panel beside the map. */
  geographyExplanation: string;
  sequenceType: SequenceType;
  viewport: MapViewport;
  citations: Citation[];
  evidenceLabels?: EvidenceLabel[];
}

/* ------------------------------------------------------------------ */
/* Entities                                                           */
/* ------------------------------------------------------------------ */

/**
 * A city, its ruler, an alliance, a people group, and a region are distinct
 * records. "Jericho" the city, "the king of Jericho", and "the Canaanites" are
 * not interchangeable, and the data model refuses to blur them.
 */
export type EntityType =
  | "person"
  | "people"
  | "city"
  | "region"
  | "polity"
  | "alliance"
  | "tribe"
  | "geographic-feature";

export const ENTITY_TYPES: Record<
  EntityType,
  { label: string; description: string }
> = {
  person: { label: "Person", description: "A named individual." },
  people: {
    label: "People group",
    description:
      "A population named as a group in the text. Biblical people-group labels are not modern ethnic or national categories and often function as broad or archaic terms.",
  },
  city: {
    label: "City or town",
    description:
      "A settlement. In Late Bronze Canaan most 'cities' were small fortified centres of a few hectares, not large metropolises.",
  },
  region: {
    label: "Region",
    description:
      "A named area with fuzzy edges, defined by terrain or usage rather than a surveyed border.",
  },
  polity: {
    label: "Polity",
    description:
      "A governing entity such as a city-state or kingdom, distinct from the settlement itself and from the people living in it.",
  },
  alliance: {
    label: "Alliance",
    description:
      "A temporary coalition of rulers acting together, which existed only for the duration of the campaign.",
  },
  tribe: {
    label: "Tribe of Israel",
    description:
      "A kinship division of Israel, which receives an allotment. The allotment is an assignment, not a record of control.",
  },
  "geographic-feature": {
    label: "Geographic feature",
    description: "A river, mountain, valley, sea, or pass.",
  },
};

export interface Entity {
  id: string;
  name: string;
  alternateNames: string[];
  type: EntityType;
  /** Plain-language identification, one or two sentences, no jargon. */
  summary: string;
  /** Modern identification where one is proposed. */
  modernSite?: {
    name: string;
    /** How firmly the identification is held. */
    certainty: FeatureCertainty;
    note: string;
  };
  sections: StudySection[];
  relatedEntityIds: string[];
  timelineEventIds: string[];
  /** Chapters in which this entity has a meaningful role. */
  chapterNumbers: number[];
  /** Content only revealed when spoiler mode is off. */
  laterRelevance?: {
    body: string;
    scriptureRefs: string[];
    citations: Citation[];
  };
  /** For people: family and leadership relationships. */
  relationships?: EntityRelationship[];
  /** Primary map feature to focus when the dossier opens. */
  primaryMapFeatureId?: string;
}

export interface EntityRelationship {
  /** e.g. "father", "successor to", "vassal of", "member of coalition". */
  kind: string;
  targetEntityId: string;
  note?: string;
  /** Where the relationship is stated or inferred. */
  scriptureRefs?: string[];
  inferred?: boolean;
}

/* ------------------------------------------------------------------ */
/* Map features                                                       */
/* ------------------------------------------------------------------ */

export type FeatureCertainty =
  | "well-supported"
  | "approximate"
  | "disputed"
  | "schematic"
  /** Location genuinely not known; carried in the data so the UI can say so. */
  | "unknown";

export const CERTAINTY_STYLES: Record<
  FeatureCertainty,
  { label: string; description: string }
> = {
  "well-supported": {
    label: "Well supported",
    description:
      "The identification is broadly agreed and usually rests on excavation plus continuity of the name.",
  },
  approximate: {
    label: "Approximate",
    description:
      "The general area is known; the drawn point or line places it for the eye without claiming survey precision.",
  },
  disputed: {
    label: "Disputed",
    description:
      "More than one serious candidate exists. Shown with a distinct outline and the alternatives named.",
  },
  schematic: {
    label: "Schematic",
    description:
      "A diagram explaining a relationship. Where it sits on the ground is beyond what the evidence gives.",
  },
  unknown: {
    label: "Location unknown",
    description:
      "No location is asserted. It appears in the register and dossiers, and the map leaves it out on purpose.",
  },
};

export type FeatureKind =
  | "site"
  | "route"
  | "event"
  | "region"
  | "allotment"
  | "remaining-land"
  | "polity-region"
  /** A set of scattered towns, not a territory: Levi's 48, Simeon's, the refuges. */
  | "town-group"
  /** Cities acting together, drawn as connectors. Never a shaded area. */
  | "coalition"
  | "water"
  | "modern-reference";

/** The seven toggleable layers required by the study screen. */
export type LayerId =
  | "places"
  | "movement"
  | "events"
  | "peoples"
  | "allotments"
  | "remaining-land"
  | "modern-reference";

export const LAYERS: Record<
  LayerId,
  { label: string; description: string; defaultOn: boolean }
> = {
  places: {
    label: "Places",
    description: "Cities, camps, mountains, rivers, and regions in view.",
    defaultOn: true,
  },
  movement: {
    label: "Movement",
    description:
      "Travel described in the text. Dashed where the route itself is a modern reconstruction.",
    defaultOn: true,
  },
  events: {
    label: "Events",
    description:
      "Battles, crossings, treaties, assemblies, and covenant events, distinguished by icon.",
    defaultOn: true,
  },
  peoples: {
    label: "Peoples and polities",
    description:
      "Rough areas of influence for peoples and city-states. Deliberately drawn as soft zones, not borders.",
    defaultOn: false,
  },
  /*
   * On by default, unlike the other two optional layers.
   *
   * These are not overlays on the story; for chapters 13 to 21 they are the story.
   * With them off, a reader opening Joshua 15 got the generic named regions and a note
   * saying some features were hidden, while the panel beside the map discussed a
   * boundary they could not see. Worse, allotment and remaining land are the pair the
   * study most needs to hold together: assigned land and unpossessed land drawn over
   * each other is the whole argument that victory was not occupation. Defaulting either
   * off breaks the comparison before the reader can make it.
   *
   * Clutter is not a risk here. Both sets carry no `applicableMilestoneIds`, so a
   * polygon appears only where a milestone names it, which means nothing territorial
   * shows during the campaign chapters unless that beat is about it.
   */
  allotments: {
    label: "Tribal allotments",
    description:
      "Land assigned to a tribe. An assignment only; possession is a separate question.",
    defaultOn: true,
  },
  "remaining-land": {
    label: "Remaining land",
    description: "Places and areas the book itself says were not possessed.",
    defaultOn: true,
  },
  "modern-reference": {
    label: "Modern reference",
    description:
      "Present-day orientation points, for locating the story geographically today.",
    defaultOn: false,
  },
};

export type EventIcon =
  | "battle"
  | "crossing"
  | "treaty"
  | "assembly"
  | "covenant"
  | "memorial"
  | "camp"
  | "burial"
  | "altar"
  | "failure";

export interface MapFeature {
  id: string;
  entityId?: string;
  geometry: Geometry;
  kind: FeatureKind;
  certainty: FeatureCertainty;
  layer: LayerId;
  /** Label drawn on the map. Approximate polygons must have one. */
  label: string;
  /** Shown for approximate/disputed features: why it is drawn where it is. */
  explanation: string;
  applicableMilestoneIds: string[];
  citations: Citation[];
  eventIcon?: EventIcon;
  /** Competing candidate locations, for disputed sites. */
  alternatives?: { name: string; coordinates?: [number, number]; note: string }[];
  /** Draw order hint; higher sits above. */
  priority?: number;
  /** Marks a feature as belonging to the schematic inset rather than the map. */
  schematicGroup?: "jericho-procession" | "ebal-gerizim";
  /**
   * For `town-group` and `coalition` features: the sites that make up the set.
   * Ids are site entity ids, resolved against the site register at load time, so
   * a member whose location is unknown is simply absent from the drawn geometry
   * and is reported as missing rather than given a placeholder position.
   */
  memberSiteIds?: string[];
}

/* ------------------------------------------------------------------ */
/* People timelines and "Before Joshua"                               */
/* ------------------------------------------------------------------ */

export type SequenceCertainty =
  /** The text states the order explicitly. */
  | "explicit-sequence"
  /** Order is a reasonable inference from the text. */
  | "inferred-sequence"
  /** The text does not fix when this happened. */
  | "undated";

export interface TimelineEvent {
  id: string;
  label: string;
  description: string;
  scriptureRefs: string[];
  sequenceCertainty: SequenceCertainty;
  /** Monotonic ordering key for the narrative sequence only. Not a date. */
  narrativeOrder: number;
  entityIds: string[];
  /** Jump target: a study milestone or a Before Joshua stage. */
  link?:
    | { kind: "milestone"; milestoneId: string }
    | { kind: "before-stage"; stageId: string }
    | { kind: "chapter"; chapter: number };
  /** Era grouping for the people timeline. */
  era:
    | "patriarchs"
    | "egypt"
    | "exodus"
    | "wilderness"
    | "transjordan"
    | "joshua"
    | "after-joshua";
  /** After-Joshua events are hidden in spoiler-free mode. */
  spoiler?: boolean;
}

export interface PersonProfile {
  entityId: string;
  /** Short identity line, e.g. "Son of Nun, of the tribe of Ephraim". */
  identity: string;
  /** Explicitly stated family and leadership ties only. */
  relationships: EntityRelationship[];
  background: string;
  actionsAndConsequences: string;
  significance: string;
  timelineEventIds: string[];
  placeEntityIds: string[];
  themeIds: string[];
  scriptureRefs: string[];
  citations: Citation[];
  later?: { body: string; scriptureRefs: string[] };
  /** Named unknowns, to stop the profile implying more than the text gives. */
  whatWeAreNotTold?: string[];
}

export interface BeforeStage {
  id: string;
  order: number;
  title: string;
  /** Concise explanation, 150-320 words. */
  body: string;
  scriptureRefs: string[];
  entityIds: string[];
  mapFeatureIds: string[];
  viewport: MapViewport;
  geographicOrientation: string;
  citations: Citation[];
  evidenceLabels: EvidenceLabel[];
}

/**
 * Absolute dates live only here, and every anchor must name the chronology it
 * assumes. Nothing in the chapter or milestone data depends on these.
 */
export interface HistoricalAnchor {
  id: string;
  label: string;
  /** e.g. "c. 1208 BC". Omitted where the evidence does not justify a figure. */
  approximateDate?: string;
  /** The reconstruction this date belongs to. */
  chronology:
    | "early-date-15th-century"
    | "late-date-13th-century"
    | "external-fixed-point"
    | "no-consensus";
  description: string;
  citations: Citation[];
}

/* ------------------------------------------------------------------ */
/* Themes and difficult questions                                     */
/* ------------------------------------------------------------------ */

export interface Theme {
  id: string;
  title: string;
  /** One-line hook for the theme index. */
  hook: string;
  body: string;
  chapterNumbers: number[];
  entityIds: string[];
  scriptureRefs: string[];
  citations: Citation[];
  /** Theological reflection continuing the theme, alongside other traditions' readings. */
  reformedPerspective?: { body: string; citations: Citation[] };
  /** Distinguishes explicit NT citation from later Christian typology. */
  newTestament?: {
    explicitReferences: { ref: string; note: string }[];
    laterTypology: { claim: string; note: string }[];
  };
  relatedQuestionIds: string[];
}

export interface DifficultQuestion {
  id: string;
  title: string;
  hook: string;
  /** What the text actually claims, before interpretation. */
  whatTheTextSays: string;
  /** How the passage works as literature within the book. */
  literaryFunction: string;
  /** Historical and archaeological questions raised. */
  historicalQuestions: string;
  /** Major interpretations, each labelled and fairly stated. */
  interpretations: {
    label: string;
    proponents?: string;
    summary: string;
    strengths: string;
    difficulties: string;
    citations: Citation[];
  }[];
  /** What remains genuinely unresolved. */
  unresolved: string;
  chapterNumbers: number[];
  themeIds: string[];
  scriptureRefs: string[];
  citations: Citation[];
}

/* ------------------------------------------------------------------ */
/* User data (local only, no account)                                 */
/* ------------------------------------------------------------------ */

export interface Note {
  id: string;
  /** Chapter number the note belongs to. */
  chapter: number;
  /** Optional milestone the note is pinned to. */
  milestoneId?: string;
  body: string;
  createdAt: string;
  updatedAt: string;
}

export interface Bookmark {
  id: string;
  kind: "chapter" | "milestone" | "entity" | "theme" | "question" | "person";
  targetId: string;
  label: string;
  /** Restorable URL for the bookmarked view. */
  href: string;
  createdAt: string;
}

export interface Preferences {
  spoilerMode: boolean;
  layers: Record<LayerId, boolean>;
  reading: {
    fontScale: 0.9 | 1 | 1.15 | 1.3;
    lineHeight: "snug" | "normal" | "relaxed";
    serifBody: boolean;
    showEvidenceLabels: boolean;
    expandAllSections: boolean;
  };
  map: {
    /** Bundled vector outlines, or an external raster basemap. */
    basemap: "bundled" | "external-terrain";
    showLabels: boolean;
  };
  scripture: {
    /**
     * Preferred translation. The World English Bible is bundled and always
     * available offline. ESV is fetched through this app's own route handler,
     * which holds the api.esv.org credential server side, so no key is ever
     * stored in preferences: preferences are written to local storage and
     * included in the notebook export, and a shared export file must not be
     * able to carry a credential out with it.
     */
    preferred: "esv" | "web";
  };
  motion: "auto" | "reduced";
}

export interface StudyProgress {
  /** Chapter numbers marked complete. */
  completedChapters: number[];
  /** Milestone ids visited. */
  visitedMilestones: string[];
  lastChapter?: number;
  lastMilestoneId?: string;
}

export interface StudyData {
  version: 1;
  exportedAt: string;
  notes: Note[];
  bookmarks: Bookmark[];
  progress: StudyProgress;
  preferences: Preferences;
}
