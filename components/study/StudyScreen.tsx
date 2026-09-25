"use client";

/**
 * The study screen.
 *
 * Desktop is three panes: where you are in the book, the ground it happened on, and
 * the text explaining it. The map takes the larger share of the space left after the
 * rail, because it is the thing you cannot get from a printed study Bible and the
 * reason this is a website.
 *
 * Mobile is the same three things as tabs, and the tab is the only piece of state
 * that is local. Chapter, milestone and open dossier all live in the URL, so switching
 * from Map to Context and back lands on the same beat, and a link shared from a phone
 * opens the same view on a laptop.
 *
 * The dossier overlays the text pane rather than replacing the screen. Chapter and map
 * keep their state underneath, which is what makes a dossier feel like a drawer you
 * opened rather than a page you navigated to, and it is why the way back is a button
 * that names the chapter instead of a generic close.
 */

import { useEffect, useMemo, useState, useSyncExternalStore } from "react";
import type { SectionKind } from "@/content/types";
import { CHAPTER_BY_NUMBER, MILESTONES_BY_CHAPTER, MILESTONE_BY_ID, milestoneNeighbours } from "@/content/chapters";
import { ENTITY_BY_ID } from "@/content/entities";
import { useStudy } from "@/lib/state/preferences";
import { useStudyNavigation } from "@/lib/state/study-url";
import { selectForMilestone } from "@/lib/map/select";
import { ChapterRail } from "./ChapterRail";
import { ChapterPanel } from "./ChapterPanel";
import { MapPanel } from "./MapPanel";
import { EntityDrawer } from "./EntityDrawer";

type Tab = "map" | "story" | "context";

/* Which sections belong to which mobile tab. Desktop shows all of them together. */
const STORY_KINDS = new Set<SectionKind>(["at-a-glance", "walk-through"]);

function subscribeToLayout(onChange: () => void) {
  const query = window.matchMedia("(min-width: 1024px)");
  query.addEventListener("change", onChange);
  return () => query.removeEventListener("change", onChange);
}

export function StudyScreen() {
  const desktop = useSyncExternalStore(
    subscribeToLayout,
    () => window.matchMedia("(min-width: 1024px)").matches,
    () => false,
  );
  const nav = useStudyNavigation();
  const store = useStudy();
  const [tab, setTab] = useState<Tab>("story");
  const [railOpen, setRailOpen] = useState(false);

  const chapter = CHAPTER_BY_NUMBER[nav.chapter];
  const milestone = nav.milestoneId ? MILESTONE_BY_ID[nav.milestoneId] : undefined;
  const chapterMilestones = MILESTONES_BY_CHAPTER[nav.chapter] ?? [];
  const entity = nav.entityId ? ENTITY_BY_ID[nav.entityId] : undefined;

  const selection = useMemo(
    () =>
      milestone
        ? selectForMilestone(milestone, store.preferences.layers)
        : { features: [], contextIds: new Set<string>(), omissions: [], relevantLayers: new Set<never>() },
    [milestone, store.preferences.layers]
  );

  /* Progress follows the reader rather than asking them to record it. */
  useEffect(() => {
    if (milestone) store.recordVisit(milestone.chapter, milestone.id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [milestone?.id]);

  /*
   * No tab switch when a place is picked. The sheet below is `fixed` and above the map,
   * so a dossier opened by tapping a pin is already on screen; moving to Story as well
   * only meant that closing it left the reader somewhere they had not asked to be,
   * looking at the text instead of the map they had just tapped.
   */

  if (!chapter) {
    return (
      <div className="px-6 py-16 text-center">
        <p className="text-[14px] text-ink-soft">
          Joshua {nav.chapter} is not available yet.
        </p>
      </div>
    );
  }

  const storyChapter = {
    ...chapter,
    sections: chapter.sections.filter((s) => STORY_KINDS.has(s.kind)),
  };
  const contextChapter = {
    ...chapter,
    sections: chapter.sections.filter((s) => !STORY_KINDS.has(s.kind)),
    discussionQuestions: [],
  };

  return (
    <div className="flex h-[calc(100dvh-var(--app-header-height))] min-h-0 flex-col">
      {nav.corrected && (
        <p className="rule-b bg-terracotta-wash px-4 py-1.5 text-[11.5px] text-terracotta">
          Part of that link pointed at something this study does not have, so the
          nearest view was opened instead.
        </p>
      )}

      {/* ---------------------------------------------------------------- */}
      {/* Desktop: rail, map, text                                        */}
      {/* ---------------------------------------------------------------- */}
      {desktop && <div className="hidden min-h-0 flex-1 lg:grid lg:grid-cols-[262px_minmax(0,3fr)_minmax(0,2fr)]">
        <ChapterRail
          chapter={nav.chapter}
          onSelectChapter={nav.goToChapter}
          className="rule-r min-h-0"
        />

        {milestone ? (
          <MapPanel
            milestone={milestone}
            chapterMilestones={chapterMilestones}
            selection={selection}
            selectedEntityId={nav.entityId}
            onSelectEntity={(id) => (id ? nav.openEntity(id) : nav.closeEntity())}
            onGoToMilestone={nav.goToMilestone}
            className="rule-r min-h-0"
          />
        ) : (
          <NoMilestones chapter={nav.chapter} className="rule-r" />
        )}

        <div className="relative min-h-0">
          <ChapterPanel
            chapter={chapter}
            milestone={milestone ?? null}
            onEntityClick={nav.openEntity}
            className="h-full"
          />
          {entity && (
            <div className="absolute inset-0 z-20 border-l border-rule shadow-[-8px_0_24px_-12px_rgba(41,45,41,0.18)]">
              <EntityDrawer
                entity={entity}
                chapter={nav.chapter}
                milestoneId={nav.milestoneId}
                onClose={nav.closeEntity}
                onEntityClick={nav.openEntity}
                onGoToMilestone={nav.goToMilestone}
              />
            </div>
          )}
        </div>
      </div>}

      {/* ---------------------------------------------------------------- */}
      {/* Mobile and tablet: chapter selector, tabs, bottom sheet          */}
      {/* ---------------------------------------------------------------- */}
      {!desktop && <div className="flex min-h-0 flex-1 flex-col lg:hidden">
        <div className="rule-b flex items-center gap-2 px-3 py-2">
          <button
            type="button"
            onClick={() => setRailOpen(true)}
            className="flex min-h-11 min-w-0 flex-1 items-baseline gap-2 rounded border border-rule px-2.5 py-1.5 text-left"
            aria-haspopup="dialog"
          >
            <span className="label-caps shrink-0 text-bronze">Josh {chapter.number}</span>
            <span className="min-w-0 flex-1 truncate font-serif text-[13px] text-charcoal">
              {chapter.title}
            </span>
            <svg viewBox="0 0 12 12" className="size-3 shrink-0 text-ink-faint" aria-hidden>
              <path
                d="M2.5 4.5 6 8l3.5-3.5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        <div role="tablist" aria-label="Study view" className="rule-b flex px-3">
          {(["map", "story", "context"] as Tab[]).map((t) => (
            <button
              key={t}
              type="button"
              role="tab"
              aria-selected={tab === t}
              aria-controls="mobile-study-panel"
              id={`study-tab-${t}`}
              onClick={() => setTab(t)}
              className={`-mb-px min-h-11 flex-1 border-b-2 px-3 py-2 text-[12.5px] capitalize transition-colors ${
                tab === t
                  ? "border-forest font-medium text-forest"
                  : "border-transparent text-ink-soft"
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        <div id="mobile-study-panel" role="tabpanel" aria-labelledby={`study-tab-${tab}`} className="min-h-0 flex-1">
          {tab === "map" ? (
            milestone ? (
              <MapPanel
                milestone={milestone}
                chapterMilestones={chapterMilestones}
                selection={selection}
                selectedEntityId={nav.entityId}
                onSelectEntity={(id) => (id ? nav.openEntity(id) : nav.closeEntity())}
                onGoToMilestone={nav.goToMilestone}
                className="h-full"
              />
            ) : (
              <NoMilestones chapter={nav.chapter} />
            )
          ) : (
            <ChapterPanel
              resetScrollKey={`${tab}-${milestone?.id ?? chapter.number}`}
              chapter={tab === "story" ? storyChapter : contextChapter}
              milestone={tab === "story" ? (milestone ?? null) : null}
              onEntityClick={nav.openEntity}
              className="h-full"
            />
          )}
        </div>

        {/* Milestone controls stay reachable on every tab, as the spec requires. */}
        {milestone && tab !== "map" && (
          <MobileStepper
            milestoneTitle={milestone.title}
            onGoToMilestone={nav.goToMilestone}
            milestoneId={milestone.id}
          />
        )}

        {entity && (
          <div className="fixed inset-x-0 bottom-0 z-40 h-[82dvh] animate-sheet-up rounded-t-xl border-t border-rule bg-ivory shadow-float">
            <div className="mx-auto mt-2 h-1 w-10 rounded-full bg-rule-strong" aria-hidden />
            <div className="h-[calc(82dvh-0.75rem)]">
              <EntityDrawer
                entity={entity}
                chapter={nav.chapter}
                milestoneId={nav.milestoneId}
                onClose={nav.closeEntity}
                onEntityClick={nav.openEntity}
                onGoToMilestone={nav.goToMilestone}
              />
            </div>
          </div>
        )}

        {railOpen && (
          <div className="fixed inset-0 z-50 flex" role="dialog" aria-label="Chapters">
            <button
              type="button"
              aria-label="Close chapter list"
              onClick={() => setRailOpen(false)}
              className="absolute inset-0 cursor-default bg-charcoal/25"
            />
            <div className="relative flex h-full w-[86vw] max-w-sm flex-col pt-[env(safe-area-inset-top)] pb-[env(safe-area-inset-bottom)] border-r border-rule bg-ivory">
              <div className="rule-b flex items-center justify-between px-4 py-2.5">
                <h2 className="font-serif text-[14px] font-semibold text-charcoal">
                  Chapters
                </h2>
                <button
                  type="button"
                  onClick={() => setRailOpen(false)}
                  className="text-[12px] text-forest hover:underline"
                >
                  Close
                </button>
              </div>
              <ChapterRail
                chapter={nav.chapter}
                onSelectChapter={(n) => {
                  nav.goToChapter(n);
                  setRailOpen(false);
                }}
                className="min-h-0 flex-1"
              />
            </div>
          </div>
        )}
      </div>}
    </div>
  );
}

function MobileStepper({
  milestoneId,
  milestoneTitle,
  onGoToMilestone,
}: {
  milestoneId: string;
  milestoneTitle: string;
  onGoToMilestone: (id: string) => void;
}) {
  const m = MILESTONE_BY_ID[milestoneId];
  const siblings = m ? (MILESTONES_BY_CHAPTER[m.chapter] ?? []) : [];
  const index = siblings.findIndex((s) => s.id === milestoneId);

  const { previous: prev, next } = milestoneNeighbours(milestoneId);

  return (
    <div className="mobile-safe-bottom rule-t shrink-0 bg-ivory px-3 py-2">
      <p className="mb-2 truncate text-[11.5px] text-ink-soft" aria-live="polite">
        {index + 1} of {siblings.length} in Joshua {m?.chapter} · {milestoneTitle}
      </p>
      <div className="flex items-center gap-2">
        <button
          type="button"
          disabled={!prev}
          onClick={() => prev && onGoToMilestone(prev.id)}
          className="min-h-11 rounded border border-rule px-3 py-2 text-[12px] text-ink-soft disabled:opacity-40"
        >
          Previous
        </button>
        <button
          type="button"
          disabled={!next}
          onClick={() => next && onGoToMilestone(next.id)}
          className="min-h-11 flex-1 rounded border border-forest bg-forest px-3 py-2 text-[12px] font-medium text-ivory disabled:opacity-40"
        >
          {!next ? "Final milestone" : next.chapter !== m?.chapter ? `Next · Joshua ${next.chapter}` : "Next milestone"}
        </button>
      </div>
    </div>
  );
}

function NoMilestones({
  chapter,
  className,
}: {
  chapter: number;
  className?: string;
}) {
  return (
    <div className={`flex items-center justify-center px-6 py-12 ${className ?? ""}`}>
      <p className="max-w-sm text-center text-[13px] leading-relaxed text-ink-soft">
        Joshua {chapter} has no mapped milestones yet, so there is nothing for the map
        to show. The chapter text beside this is complete.
      </p>
    </div>
  );
}
