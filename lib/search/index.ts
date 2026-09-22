/**
 * The global search index.
 *
 * Built once from the content modules at first use, held in memory, and never sent
 * anywhere. There is no search service here and no query logging, because a study
 * that phones home about what its reader is looking up is a different product.
 *
 * Scoring is deliberately simple and readable rather than clever: a match in a title
 * outranks a match in a summary, which outranks a match in the body. A reader typing
 * "Rahab" wants Rahab's dossier first and the paragraph in chapter 6 that mentions
 * her second, and that ordering falls out of field weighting without needing to
 * tokenise anything. If it ever stops being good enough, the fix is a better index,
 * not a network call.
 */

import { CHAPTERS, MILESTONES } from "@/content/chapters";
import { ALL_ENTITIES } from "@/content/entities";
import { THEMES } from "@/content/themes";
import { DIFFICULT_QUESTIONS } from "@/content/difficult-questions";
import { PROFILES } from "@/content/people/profiles";
import { BEFORE_STAGES } from "@/content/before-joshua";
import { SOURCES } from "@/content/sources";
import { ENTITY_TYPES } from "@/content/types";

export type ResultKind =
  | "chapter"
  | "milestone"
  | "entity"
  | "person"
  | "theme"
  | "question"
  | "before-stage"
  | "source";

export interface SearchResult {
  kind: ResultKind;
  id: string;
  title: string;
  /** One line of context, so the reader can tell two similar hits apart. */
  context: string;
  href: string;
  /** Group heading in the results list. */
  group: string;
}

interface IndexEntry extends SearchResult {
  /** Lowercased title, for the strongest match. */
  t: string;
  /** Lowercased secondary text: summary, hook, identity. */
  s: string;
  /** Lowercased body text, truncated. Weakest match. */
  b: string;
}

const KIND_GROUP: Record<ResultKind, string> = {
  chapter: "Chapters",
  milestone: "Milestones",
  entity: "Places and peoples",
  person: "People",
  theme: "Themes",
  question: "Difficult questions",
  "before-stage": "Before Joshua",
  source: "Sources",
};

/* Bodies are long. Only the opening is indexed, which is where the subject is named. */
const BODY_CAP = 900;

const lower = (s: string | undefined) => (s ?? "").toLowerCase();

let index: IndexEntry[] | null = null;

function build(): IndexEntry[] {
  const out: IndexEntry[] = [];

  const push = (
    kind: ResultKind,
    id: string,
    title: string,
    context: string,
    href: string,
    secondary: string,
    body: string
  ) => {
    out.push({
      kind,
      id,
      title,
      context,
      href,
      group: KIND_GROUP[kind],
      t: lower(title),
      s: lower(secondary),
      b: lower(body).slice(0, BODY_CAP),
    });
  };

  for (const c of CHAPTERS) {
    push(
      "chapter",
      c.id,
      `Joshua ${c.number}. ${c.title}`,
      c.summary,
      `/study?chapter=${c.number}`,
      c.summary,
      c.sections.map((s) => s.body).join(" ")
    );
  }

  for (const m of MILESTONES) {
    push(
      "milestone",
      m.id,
      m.title,
      `Joshua ${m.chapter}. ${m.scriptureRefs[0] ?? ""}`.trim(),
      `/study?chapter=${m.chapter}&milestone=${m.id}`,
      m.mapCaption,
      `${m.narrative} ${m.whatChanged} ${m.geographyExplanation}`
    );
  }

  /* People get their own group even though they are entities, because a reader
     looking for Caleb is looking for a person, not for a record type. */
  const profiled = new Set(PROFILES.map((p) => p.entityId));

  for (const e of ALL_ENTITIES) {
    const isPerson = e.type === "person";
    push(
      isPerson && profiled.has(e.id) ? "person" : "entity",
      e.id,
      e.name,
      [ENTITY_TYPES[e.type].label, ...e.alternateNames].join(" · "),
      isPerson && profiled.has(e.id)
        ? `/people?person=${e.id}`
        : `/study?entity=${e.id}`,
      `${e.summary} ${e.alternateNames.join(" ")} ${e.modernSite?.name ?? ""}`,
      e.sections.map((s) => s.body).join(" ")
    );
  }

  for (const t of THEMES) {
    push("theme", t.id, t.title, t.hook, `/themes?theme=${t.id}`, t.hook, t.body);
  }

  for (const q of DIFFICULT_QUESTIONS) {
    push(
      "question",
      q.id,
      q.title,
      q.hook,
      `/themes?question=${q.id}`,
      q.hook,
      `${q.whatTheTextSays} ${q.historicalQuestions} ${q.unresolved}`
    );
  }

  for (const s of BEFORE_STAGES) {
    push(
      "before-stage",
      s.id,
      s.title,
      "Before Joshua",
      `/before-joshua?stage=${s.id}`,
      s.geographicOrientation,
      s.body
    );
  }

  for (const s of SOURCES) {
    push(
      "source",
      s.id,
      s.title,
      [s.author, s.publication].filter(Boolean).join(", "),
      `/sources?source=${s.id}`,
      `${s.author ?? ""} ${s.publication ?? ""}`,
      s.note ?? ""
    );
  }

  return out;
}

/**
 * Rank matches for a query.
 *
 * An empty or one-character query returns nothing rather than everything: a list of
 * four hundred results is not a search result, it is a wall.
 */
export function search(query: string, limit = 24): SearchResult[] {
  const q = query.trim().toLowerCase();
  if (q.length < 2) return [];

  index ??= build();

  const scored: { entry: IndexEntry; score: number }[] = [];

  for (const entry of index) {
    let score = 0;

    if (entry.t === q) score += 120;
    else if (entry.t.startsWith(q)) score += 80;
    else if (entry.t.includes(q)) score += 50;

    if (entry.s.includes(q)) score += 14;
    if (entry.b.includes(q)) score += 5;

    if (score > 0) scored.push({ entry, score });
  }

  scored.sort((a, b) => b.score - a.score || a.entry.title.localeCompare(b.entry.title));
  return scored.slice(0, limit).map(({ entry }) => ({
    kind: entry.kind,
    id: entry.id,
    title: entry.title,
    context: entry.context,
    href: entry.href,
    group: entry.group,
  }));
}

/** Results in their display groups, preserving rank inside each group. */
export function groupResults(results: SearchResult[]): [string, SearchResult[]][] {
  const groups = new Map<string, SearchResult[]>();
  for (const r of results) {
    const list = groups.get(r.group);
    if (list) list.push(r);
    else groups.set(r.group, [r]);
  }
  return [...groups.entries()];
}
