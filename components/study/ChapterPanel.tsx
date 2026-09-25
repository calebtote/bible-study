"use client";

/**
 * The right panel: the chapter, and the beat inside it.
 *
 * The order here is the study's argument about how to read a chapter. What is
 * happening comes first, at the beat the reader is standing on. Then the chapter as a
 * whole. Then what brought us here, the surrounding world, and why it matters. Then
 * the details and the difficulties. Discussion questions and the reader's own notes
 * come last, because they are what you do after understanding rather than before.
 *
 * The milestone narrative sits above the chapter sections rather than inside them,
 * and it changes as the reader walks the map. That is the one piece of this panel
 * synchronised to the map, and keeping it visually distinct, in a bronze-ruled block,
 * means the reader can tell at a glance which text moved and which did not.
 *
 * Entities named by the current beat are listed as controls. This is the map's index
 * in text form, and it is also the accessible route to every dossier: a reader who
 * cannot click a four-pixel dot on a canvas can still reach Makkedah.
 */

import type { Chapter, Milestone } from "@/content/types";
import { ENTITY_TYPES } from "@/content/types";
import { ENTITY_BY_ID } from "@/content/entities";
import { deeperWords } from "@/content/chapters";
import { Prose, ProseLine, type EntityClick } from "@/components/Prose";
import { Section } from "@/components/ui/Disclosure";
import { ScriptureRefs } from "@/components/scripture/ScriptureRefs";
import { Citations, EvidenceBadges } from "@/components/ui/Evidence";
import { BookmarkButton } from "@/components/shell/BookmarksPanel";
import { NoteEditor } from "./NoteEditor";
import { useStudy } from "@/lib/state/preferences";
import { studyHref } from "@/lib/state/study-url";

export function ChapterPanel({
  chapter,
  milestone,
  onEntityClick,
  className,
}: {
  chapter: Chapter;
  milestone: Milestone | null;
  onEntityClick: EntityClick;
  className?: string;
}) {
  const store = useStudy();
  const complete = store.data.progress.completedChapters.includes(chapter.number);
  const deeper = deeperWords(chapter);

  return (
    <div className={`quiet-scroll overflow-y-auto ${className ?? ""}`}>
      <div className="px-5 py-4 pb-10 sm:px-6">
        <header>
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              <p className="label-caps text-bronze">Joshua {chapter.number}</p>
              <h1 className="mt-1 font-serif text-[26px] leading-[1.15] font-semibold tracking-[-0.015em] text-charcoal">
                {chapter.title}
              </h1>
            </div>
            <BookmarkButton
              kind="chapter"
              targetId={chapter.id}
              label={`Joshua ${chapter.number}. ${chapter.title}`}
              href={studyHref({ chapter: chapter.number })}
              className="mt-1 shrink-0"
            />
          </div>

          <p className="mt-2 font-serif text-[15px] leading-relaxed text-ink-soft">
            <ProseLine text={chapter.summary} onEntityClick={onEntityClick} />
          </p>

          <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2">
            <ScriptureRefs refs={[chapter.scriptureRange]} label="Read the chapter" />
            <button
              type="button"
              onClick={() => store.markChapterComplete(chapter.number, !complete)}
              aria-pressed={complete}
              className={`flex items-center gap-1.5 rounded border px-2 py-1 text-[11.5px] transition-colors ${
                complete
                  ? "border-forest bg-forest-wash font-medium text-forest"
                  : "border-rule text-ink-soft hover:border-rule-strong hover:text-charcoal"
              }`}
            >
              <svg viewBox="0 0 12 12" className="size-3" aria-hidden>
                <path
                  d="M2.5 6.4 4.7 8.6 9.5 3.8"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              {complete ? "Marked read" : "Mark as read"}
            </button>
          </div>
        </header>

        {milestone && (
          <MilestoneBlock milestone={milestone} onEntityClick={onEntityClick} />
        )}

        <div className="mt-5">
          {chapter.sections.map((section) => (
            <Section
              key={section.id}
              section={section}
              onEntityClick={onEntityClick}
              headingLevel={3}
            />
          ))}

          {chapter.discussionQuestions.length > 0 && (
            <section className="rule-t py-4">
              <h3 className="font-serif text-base font-semibold text-charcoal">Discuss</h3>
              <ol className="mt-2.5 space-y-2.5">
                {chapter.discussionQuestions.map((q, i) => (
                  <li key={i} className="flex gap-2.5">
                    <span className="mt-[2px] shrink-0 font-sans text-[11px] text-bronze tabular-nums">
                      {i + 1}
                    </span>
                    <span className="prose-study text-[0.95em]">
                      <Prose body={q} onEntityClick={onEntityClick} compact />
                    </span>
                  </li>
                ))}
              </ol>
            </section>
          )}

          <NoteEditor chapter={chapter.number} milestone={milestone} />
        </div>

        {deeper > 0 && (
          <p className="mt-5 text-[11px] leading-relaxed text-ink-faint">
            This chapter carries about {deeper} further words of background in the
            sections that open on request, over and above the {chapter.wordCount} in
            front of you.
          </p>
        )}
      </div>
    </div>
  );
}

/**
 * The beat. Bronze-ruled and set apart, because this is the block that changes when
 * the reader moves the map and everything below it does not.
 */
function MilestoneBlock({
  milestone,
  onEntityClick,
}: {
  milestone: Milestone;
  onEntityClick: EntityClick;
}) {
  const entities = milestone.entityIds
    .map((id) => ENTITY_BY_ID[id])
    .filter(Boolean);

  return (
    <section className="mt-5 border-l-2 border-bronze/40 pl-4">
      <div className="flex items-start justify-between gap-3">
        <h2 className="font-serif text-[17px] leading-snug font-semibold text-charcoal">
          {milestone.title}
        </h2>
        <BookmarkButton
          kind="milestone"
          targetId={milestone.id}
          label={milestone.title}
          href={studyHref({ chapter: milestone.chapter, milestoneId: milestone.id })}
          className="shrink-0"
        />
      </div>

      <div className="mt-2">
        <Prose body={milestone.narrative} onEntityClick={onEntityClick} />
      </div>

      <ScriptureRefs refs={milestone.scriptureRefs} className="mt-3" />
      <EvidenceBadges labels={milestone.evidenceLabels} className="mt-3" />
      <Citations citations={milestone.citations} />

      {entities.length > 0 && (
        <div className="mt-3.5">
          <h3 className="label-caps text-ink-faint">In view here</h3>
          <ul className="mt-1.5 flex flex-wrap gap-1.5">
            {entities.map((e) => (
              <li key={e.id}>
                <button
                  type="button"
                  onClick={() => onEntityClick(e.id)}
                  title={`${ENTITY_TYPES[e.type].label}. ${e.summary}`}
                  className="rounded-sm border border-rule bg-ivory px-1.5 py-0.5 text-[11.5px] text-charcoal transition-colors hover:border-bronze hover:bg-bronze-wash hover:text-bronze"
                >
                  {e.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}
