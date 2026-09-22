/**
 * The assembled chapter and milestone set.
 *
 * Chapters are authored in small groups so that each file stays a readable
 * editorial unit rather than a four thousand line monolith. This module is the
 * only place the rest of the app imports them from, and it does three jobs the
 * group files should not have to think about.
 *
 * It orders everything. Chapters come out 1 to 24 and milestones come out in
 * chapter-then-order sequence, no matter what order the files were written in.
 *
 * It recounts `wordCount`. That field means the length of the sections a reader
 * sees without opening anything, and an authored number would drift the moment a
 * sentence was cut. Counting it here means the figure shown in the interface is
 * always the true one.
 *
 * It reports what is absent. `MISSING_CHAPTER_NUMBERS` is derived, not declared,
 * so a chapter that has not been written yet is a visible gap rather than a
 * silently short list.
 */

import type { Chapter, Milestone, NarrativePhase } from "../types";
import { NARRATIVE_PHASES } from "../types";

/*
 * One import per authored file. A file name states the chapters it holds, so adding a
 * chapter means adding a line here as well as writing the content; the validator reads
 * the chapter files directly and will not notice an import that was never added.
 */
import * as ch01to02 from "./ch01-02";
import * as ch03to04 from "./ch03-04";
import * as ch05to08 from "./ch05-08";
import * as ch09to12 from "./ch09-12";
import * as ch13to14 from "./ch13-14";
import * as ch15to16 from "./ch15-16";
import * as ch17 from "./ch17";
import * as ch18to21 from "./ch18-21";
import * as ch22to24 from "./ch22-24";

const GROUPS: { chapters: Chapter[]; milestones: Milestone[] }[] = [
  { chapters: ch01to02.CHAPTERS, milestones: ch01to02.MILESTONES },
  { chapters: ch03to04.CHAPTERS, milestones: ch03to04.MILESTONES },
  { chapters: ch05to08.CHAPTERS, milestones: ch05to08.MILESTONES },
  { chapters: ch09to12.CHAPTERS, milestones: ch09to12.MILESTONES },
  { chapters: ch13to14.CHAPTERS, milestones: ch13to14.MILESTONES },
  { chapters: ch15to16.CHAPTERS, milestones: ch15to16.MILESTONES },
  { chapters: ch17.CHAPTERS, milestones: ch17.MILESTONES },
  { chapters: ch18to21.CHAPTERS, milestones: ch18to21.MILESTONES },
  { chapters: ch22to24.CHAPTERS, milestones: ch22to24.MILESTONES },
];

/* ------------------------------------------------------------------ */
/* Word counts                                                         */
/* ------------------------------------------------------------------ */

const words = (s: string): number => s.trim().split(/\s+/).filter(Boolean).length;

/** The open sections only. Collapsed material is deeper reading, not the budget. */
const openWords = (chapter: Chapter): number =>
  chapter.sections
    .filter((s) => !s.collapsedByDefault)
    .reduce((n, s) => n + words(s.body), 0);

/** Everything behind progressive disclosure, so the interface can offer a figure. */
export const deeperWords = (chapter: Chapter): number =>
  chapter.sections
    .filter((s) => s.collapsedByDefault)
    .reduce((n, s) => n + words(s.body), 0);

/* ------------------------------------------------------------------ */
/* The assembled set                                                   */
/* ------------------------------------------------------------------ */

export const CHAPTERS: Chapter[] = GROUPS.flatMap((g) => g.chapters)
  .map((c) => ({ ...c, wordCount: openWords(c) }))
  .sort((a, b) => a.number - b.number);

export const MILESTONES: Milestone[] = GROUPS.flatMap((g) => g.milestones).sort(
  (a, b) => a.chapter - b.chapter || a.order - b.order
);

export const CHAPTER_BY_NUMBER: Record<number, Chapter> = Object.fromEntries(
  CHAPTERS.map((c) => [c.number, c])
);

export const CHAPTER_BY_ID: Record<string, Chapter> = Object.fromEntries(
  CHAPTERS.map((c) => [c.id, c])
);

export const MILESTONE_BY_ID: Record<string, Milestone> = Object.fromEntries(
  MILESTONES.map((m) => [m.id, m])
);

export const MILESTONES_BY_CHAPTER: Record<number, Milestone[]> =
  MILESTONES.reduce<Record<number, Milestone[]>>((acc, m) => {
    (acc[m.chapter] ??= []).push(m);
    return acc;
  }, {});

export const CHAPTER_NUMBERS: number[] = CHAPTERS.map((c) => c.number);

/**
 * Chapters 1 to 24 that have no record yet. The rail reads this so an unwritten
 * chapter is shown as not yet available rather than omitted, which would leave a
 * reader wondering whether they had mis-clicked.
 */
export const MISSING_CHAPTER_NUMBERS: number[] = Array.from(
  { length: 24 },
  (_, i) => i + 1
).filter((n) => !(n in CHAPTER_BY_NUMBER));

export const CHAPTERS_BY_PHASE: Record<NarrativePhase, Chapter[]> = (
  Object.keys(NARRATIVE_PHASES) as NarrativePhase[]
).reduce(
  (acc, phase) => {
    acc[phase] = CHAPTERS.filter((c) => c.phase === phase);
    return acc;
  },
  {} as Record<NarrativePhase, Chapter[]>
);

/* ------------------------------------------------------------------ */
/* Navigation                                                          */
/* ------------------------------------------------------------------ */

/**
 * Every milestone in reading order, which is what the previous and next controls
 * walk. They cross chapter boundaries: reaching the end of chapter 6 and pressing
 * next should arrive at Achan rather than stopping dead at Jericho.
 */
export const MILESTONE_SEQUENCE: string[] = MILESTONES.map((m) => m.id);

const SEQUENCE_INDEX: Record<string, number> = Object.fromEntries(
  MILESTONE_SEQUENCE.map((id, i) => [id, i])
);

export function milestoneNeighbours(id: string): {
  previous: Milestone | null;
  next: Milestone | null;
} {
  const i = SEQUENCE_INDEX[id];
  if (i === undefined) return { previous: null, next: null };
  return {
    previous: i > 0 ? MILESTONES[i - 1] : null,
    next: i < MILESTONES.length - 1 ? MILESTONES[i + 1] : null,
  };
}

/** The first milestone of a chapter, which is where selecting a chapter lands. */
export function firstMilestoneOf(chapter: number): Milestone | undefined {
  return MILESTONES_BY_CHAPTER[chapter]?.[0];
}

export function chapterOf(milestoneId: string): Chapter | undefined {
  const m = MILESTONE_BY_ID[milestoneId];
  return m ? CHAPTER_BY_NUMBER[m.chapter] : undefined;
}

/* ------------------------------------------------------------------ */
/* Totals for progress                                                 */
/* ------------------------------------------------------------------ */

export const TOTAL_CHAPTERS = 24;
export const AVAILABLE_CHAPTER_COUNT = CHAPTERS.length;
export const TOTAL_MILESTONES = MILESTONES.length;
