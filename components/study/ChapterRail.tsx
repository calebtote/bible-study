"use client";

/**
 * The left rail: where you are in the book, and how far you have gone.
 *
 * Chapters are grouped by narrative phase rather than listed one to twenty-four,
 * because the shape of Joshua is the first thing a reader needs and a flat list hides
 * it. Seeing that chapters 13 to 21 are a single block called "Inheritance and life
 * in the land" tells you something true about the book before you have read a word of
 * it: most of Joshua is not battles.
 *
 * Progress is shown, not scored. A ring for chapters marked read, nothing gamified.
 * "Before Joshua" sits at the top of the rail rather than in the nav alone, because
 * the question it answers, what brought these people here, is the one a reader
 * arriving at chapter 1 actually has.
 */

import Link from "next/link";
import { NARRATIVE_PHASES, type NarrativePhase } from "@/content/types";
import {
  CHAPTERS_BY_PHASE,
  MILESTONES_BY_CHAPTER,
  MISSING_CHAPTER_NUMBERS,
  TOTAL_CHAPTERS,
} from "@/content/chapters";
import { useStudy } from "@/lib/state/preferences";

const PHASE_ORDER: NarrativePhase[] = [
  "preparation-and-entry",
  "campaigns-and-consequences",
  "inheritance-and-life",
  "unity-farewell-covenant",
];

export function ChapterRail({
  chapter,
  onSelectChapter,
  className,
}: {
  chapter: number;
  onSelectChapter: (n: number) => void;
  className?: string;
}) {
  const store = useStudy();
  const complete = new Set(store.data.progress.completedChapters);
  const missing = new Set(MISSING_CHAPTER_NUMBERS);

  return (
    <nav className={`quiet-scroll overflow-y-auto ${className ?? ""}`} aria-label="Chapters">
      <div className="rule-b px-4 py-3">
        <Link
          href="/before-joshua"
          className="group block rounded px-2 py-1.5 -mx-2 transition-colors hover:bg-ivory-deep"
        >
          <span className="block font-serif text-[13.5px] font-semibold text-charcoal group-hover:text-forest">
            Before Joshua
          </span>
          <span className="mt-0.5 block text-[11px] leading-snug text-ink-faint">
            Eight stages from Abraham to the plains of Moab, and the world as chapter 1
            opens.
          </span>
        </Link>
      </div>

      {PHASE_ORDER.map((phase) => {
        const meta = NARRATIVE_PHASES[phase];
        const chapters = CHAPTERS_BY_PHASE[phase] ?? [];
        const phaseNumbers = meta.chapters;

        return (
          <section key={phase} className="rule-b px-4 py-3 last:border-b-0">
            <h2 className="font-serif text-[12px] font-semibold tracking-[0.01em] text-bronze">
              {meta.label}
            </h2>
            <p className="mt-1 text-[11px] leading-snug text-ink-faint">{meta.blurb}</p>

            <ul className="mt-2.5 space-y-0.5">
              {phaseNumbers.map((n) => {
                const record = chapters.find((c) => c.number === n);
                const isMissing = missing.has(n) || !record;
                const active = n === chapter;
                const done = complete.has(n);
                const beats = MILESTONES_BY_CHAPTER[n]?.length ?? 0;

                if (isMissing) {
                  /*
                   * Named but not yet written. Shown rather than omitted, so a gap
                   * in the study reads as a gap and not as a mis-click.
                   */
                  return (
                    <li key={n}>
                      <span className="flex items-baseline gap-2 rounded px-2 py-1 text-[12.5px] text-ink-faint">
                        <span className="w-5 shrink-0 text-right tabular-nums">{n}</span>
                        <span className="italic">Not yet available</span>
                      </span>
                    </li>
                  );
                }

                return (
                  <li key={n}>
                    <button
                      type="button"
                      onClick={() => onSelectChapter(n)}
                      aria-current={active ? "true" : undefined}
                      className={`flex w-full items-baseline gap-2 rounded px-2 py-1 text-left transition-colors ${
                        active
                          ? "bg-forest-wash"
                          : "hover:bg-ivory-deep"
                      }`}
                    >
                      <span
                        className={`w-5 shrink-0 text-right text-[12.5px] tabular-nums ${
                          active ? "font-semibold text-forest" : "text-ink-faint"
                        }`}
                      >
                        {n}
                      </span>
                      <span className="min-w-0 flex-1">
                        <span
                          className={`block truncate font-serif text-[13px] ${
                            active ? "font-semibold text-forest" : "text-charcoal"
                          }`}
                        >
                          {record.title}
                        </span>
                        {active && (
                          <span className="mt-0.5 block text-[10.5px] text-ink-faint">
                            {beats} {beats === 1 ? "milestone" : "milestones"}
                            {record.wordCount ? ` · ${record.wordCount} words` : ""}
                          </span>
                        )}
                      </span>
                      {done && (
                        <span
                          className="mt-0.5 shrink-0 text-forest-soft"
                          title="Marked read"
                          aria-label="Marked read"
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
                        </span>
                      )}
                    </button>
                  </li>
                );
              })}
            </ul>
          </section>
        );
      })}

      <Progress complete={complete.size} />
    </nav>
  );
}

function Progress({ complete }: { complete: number }) {
  const pct = Math.round((complete / TOTAL_CHAPTERS) * 100);
  return (
    <div className="rule-t px-4 py-3">
      <h2 className="label-caps text-ink-soft">Study progress</h2>
      <div className="mt-2 h-1 overflow-hidden rounded-full bg-ivory-sunk">
        <div
          className="h-full rounded-full bg-forest transition-[width] duration-500"
          style={{ width: `${pct}%` }}
        />
      </div>
      <p className="mt-1.5 text-[11px] text-ink-faint">
        {complete} of {TOTAL_CHAPTERS} chapters marked read
      </p>
    </div>
  );
}
