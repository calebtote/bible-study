"use client";

/**
 * The study screen's state lives in the URL.
 *
 * Chapter, milestone and open entity are all query parameters, which makes every
 * view in the study a place someone can link to. Paste a URL into a group chat and
 * the person who opens it sees the beat you were looking at, with the same dossier
 * open. That is the whole reason for putting this state in the address bar rather
 * than in a store.
 *
 * History behaviour is chosen per parameter rather than uniformly.
 *
 * Stepping through milestones uses `replace`. A reader who walks the eleven beats of
 * chapter 10 and then presses the browser's back button expects to leave the
 * chapter, not to reverse eleven times through it.
 *
 * Opening an entity uses `push`, because a dossier is a place the reader went and
 * back is the obvious way out of it. The spec asks for a clear return to the
 * chapter, and the browser's own back button is the clearest one available.
 *
 * Every parameter is validated against the content on read. A URL naming a chapter
 * that does not exist, or a milestone from a different chapter, resolves to the
 * nearest sensible view rather than rendering an empty screen. Hand-edited and
 * stale shared links are normal, not exceptional.
 */

import { useCallback, useMemo } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import {
  CHAPTER_BY_NUMBER,
  MILESTONES,
  MILESTONE_BY_ID,
  MILESTONES_BY_CHAPTER,
  firstMilestoneOf,
} from "@/content/chapters";
import { ENTITY_BY_ID } from "@/content/entities";

export interface StudyLocation {
  chapter: number;
  /** Null only when a chapter has no milestones authored yet. */
  milestoneId: string | null;
  entityId: string | null;
}

/** Where a reader with no URL parameters and no saved progress starts. */
const DEFAULT_CHAPTER = 1;

export function readStudyLocation(params: URLSearchParams): StudyLocation {
  const rawChapter = Number(params.get("chapter"));
  const rawMilestone = params.get("milestone");
  const rawEntity = params.get("entity");

  /*
   * The milestone wins when it disagrees with the chapter. A shared link whose
   * milestone is real is more trustworthy than its chapter parameter, since the
   * milestone is the specific thing the sender was looking at.
   */
  const milestone = rawMilestone ? MILESTONE_BY_ID[rawMilestone] : undefined;

  let chapter = milestone?.chapter ?? rawChapter;
  if (!CHAPTER_BY_NUMBER[chapter]) chapter = DEFAULT_CHAPTER;

  const milestoneId =
    milestone && milestone.chapter === chapter
      ? milestone.id
      : (firstMilestoneOf(chapter)?.id ?? null);

  const entityId = rawEntity && ENTITY_BY_ID[rawEntity] ? rawEntity : null;

  return { chapter, milestoneId, entityId };
}

export function studyHref(loc: Partial<StudyLocation>): string {
  const params = new URLSearchParams();
  if (loc.chapter) params.set("chapter", String(loc.chapter));
  if (loc.milestoneId) params.set("milestone", loc.milestoneId);
  if (loc.entityId) params.set("entity", loc.entityId);
  const qs = params.toString();
  return qs ? `/study?${qs}` : "/study";
}

/**
 * A link that opens an entity's dossier in the place it belongs.
 *
 * Called from the themes, people and Before Joshua pages, where an entity name is
 * mentioned outside any chapter. Landing on chapter 1 with the Jezreel valley open
 * would be technically correct and useless, so this finds the first milestone that
 * actually names the entity and opens the dossier over that beat. An entity with no
 * milestone (a region mentioned only in a theme, say) falls back to the plain
 * dossier, which the study screen handles.
 */
export function entityHref(entityId: string): string {
  const first = MILESTONES.find((m) => m.entityIds.includes(entityId));
  return studyHref({
    chapter: first?.chapter,
    milestoneId: first?.id ?? null,
    entityId,
  });
}

export interface StudyNavigation extends StudyLocation {
  /** True when the URL named something that does not exist and was corrected. */
  corrected: boolean;
  goToChapter: (chapter: number) => void;
  goToMilestone: (milestoneId: string) => void;
  openEntity: (entityId: string) => void;
  closeEntity: () => void;
  href: (loc: Partial<StudyLocation>) => string;
}

export function useStudyNavigation(): StudyNavigation {
  const router = useRouter();
  const params = useSearchParams();

  const location = useMemo(
    () => readStudyLocation(new URLSearchParams(params.toString())),
    [params]
  );

  const corrected = useMemo(() => {
    const rawChapter = params.get("chapter");
    const rawMilestone = params.get("milestone");
    const rawEntity = params.get("entity");
    if (rawMilestone && !MILESTONE_BY_ID[rawMilestone]) return true;
    if (rawEntity && !ENTITY_BY_ID[rawEntity]) return true;
    if (rawChapter && !CHAPTER_BY_NUMBER[Number(rawChapter)]) return true;
    return false;
  }, [params]);

  const write = useCallback(
    (next: Partial<StudyLocation>, mode: "push" | "replace") => {
      const merged: Partial<StudyLocation> = { ...location, ...next };
      router[mode](studyHref(merged), { scroll: false });
    },
    [router, location]
  );

  const goToChapter = useCallback(
    (chapter: number) => {
      /*
       * Changing chapter drops the open entity. Carrying a dossier across a
       * chapter boundary would leave the reader looking at Rahab while the panel
       * discusses tribal boundaries, which reads as a bug even when it is not.
       */
      write(
        {
          chapter,
          milestoneId: firstMilestoneOf(chapter)?.id ?? null,
          entityId: null,
        },
        "replace"
      );
    },
    [write]
  );

  const goToMilestone = useCallback(
    (milestoneId: string) => {
      const m = MILESTONE_BY_ID[milestoneId];
      if (!m) return;
      write({ chapter: m.chapter, milestoneId }, "replace");
    },
    [write]
  );

  const openEntity = useCallback(
    (entityId: string) => {
      if (!ENTITY_BY_ID[entityId]) return;
      write({ entityId }, "push");
    },
    [write]
  );

  const closeEntity = useCallback(() => {
    write({ entityId: null }, "push");
  }, [write]);

  return {
    ...location,
    corrected,
    goToChapter,
    goToMilestone,
    openEntity,
    closeEntity,
    href: studyHref,
  };
}

/** Milestones of a chapter, in order. Empty when the chapter has none yet. */
export const milestonesOf = (chapter: number) => MILESTONES_BY_CHAPTER[chapter] ?? [];
