"use client";

/**
 * The two front-door buttons.
 *
 * "Resume study" only appears once there is something to resume, and it names
 * where it will land rather than saying "continue". A reader who last opened this
 * a fortnight ago has forgotten where they were, and a button that silently jumps
 * eleven chapters in is disorienting in a way a labelled one is not.
 *
 * Both buttons wait for hydration before committing to a label. The stored
 * position lives in local storage, which the server cannot see, so rendering
 * "Resume at Joshua 9" on the server and then correcting it would flash.
 */

import Link from "next/link";
import { CHAPTER_BY_NUMBER, MILESTONE_BY_ID, firstMilestoneOf } from "@/content/chapters";
import { useStudy } from "@/lib/state/preferences";
import { studyHref } from "@/lib/state/study-url";

export function JourneyStart() {
  const store = useStudy();
  const { progress } = store.data;

  const first = firstMilestoneOf(1);
  const beginHref = studyHref({ chapter: 1, milestoneId: first?.id ?? null });

  const resumeChapter = progress.lastChapter;
  const resumeMilestone = progress.lastMilestoneId
    ? MILESTONE_BY_ID[progress.lastMilestoneId]
    : undefined;

  /*
   * A stored position can outlive the content it pointed at, and silently
   * sending the reader somewhere else would be worse than not offering to
   * resume. So the milestone has to still exist for the button to appear.
   */
  const canResume =
    store.hydrated &&
    resumeChapter !== undefined &&
    CHAPTER_BY_NUMBER[resumeChapter] !== undefined &&
    resumeMilestone !== undefined;

  const visited = progress.visitedMilestones.length;
  const complete = progress.completedChapters.length;

  return (
    <div className="mt-7">
      <div className="flex flex-wrap items-center gap-3">
        <Link
          href={beginHref}
          className="rounded bg-forest px-4 py-2.5 text-[13.5px] font-medium text-ivory transition-colors hover:bg-[#2b4539]"
        >
          Begin the journey
        </Link>

        {canResume && (
          <Link
            href={studyHref({
              chapter: resumeChapter,
              milestoneId: resumeMilestone.id,
            })}
            className="rounded border border-rule-strong px-4 py-2.5 text-[13.5px] font-medium text-charcoal transition-colors hover:border-bronze hover:bg-bronze-wash hover:text-bronze"
          >
            Resume at Joshua {resumeChapter}: {resumeMilestone.title}
          </Link>
        )}
      </div>

      {store.hydrated && (visited > 0 || complete > 0) && (
        <p className="mt-3 text-[11.5px] text-ink-faint">
          {complete > 0 && `${complete} chapter${complete === 1 ? "" : "s"} marked read. `}
          {visited > 0 && `${visited} milestone${visited === 1 ? "" : "s"} visited. `}
          Kept in this browser only, and nowhere else.
        </p>
      )}
    </div>
  );
}
