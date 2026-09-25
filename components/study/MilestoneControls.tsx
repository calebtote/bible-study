"use client";

/**
 * Walking the book one beat at a time.
 *
 * Prev and next cross chapter boundaries, because the story does. Pressing next at
 * the fall of Jericho should arrive at Achan's theft, which is the whole point of
 * chapters 6 and 7 sitting next to each other; stopping dead at the end of chapter 6
 * would hide the connection the book is making.
 *
 * Play advances on a timer and is genuinely optional. It exists for leading a group,
 * where the leader wants to talk while the map moves, and it stops the moment anyone
 * touches another control. It does not loop, and it does not start on load: a page
 * that begins moving on its own is a page that has taken the reader's place away
 * from them.
 *
 * The dots are a position display and a control at once. Their shape says what kind
 * of beat each one is, so a reader can see before clicking that the next three
 * milestones in chapter 13 are territorial descriptions rather than events.
 */

import { useCallback, useEffect, useRef, useState } from "react";
import type { Milestone } from "@/content/types";
import { SEQUENCE_TYPES } from "@/content/types";
import { MILESTONE_SEQUENCE, milestoneNeighbours } from "@/content/chapters";

/** Long enough to read a caption and glance at the map. */
const STEP_MS = 9000;

export function MilestoneControls({
  milestone,
  chapterMilestones,
  onGo,
}: {
  milestone: Milestone;
  chapterMilestones: Milestone[];
  onGo: (id: string) => void;
}) {
  const [wantPlay, setWantPlay] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const { previous, next } = milestoneNeighbours(milestone.id);

  /*
   * Playback needs somewhere to go. Deriving that rather than clearing the flag from an
   * effect matters because the end of the book is reached *by* playback: the timer calls
   * `onGo` without stopping, so the last tick lands on Joshua 24 with the flag still set.
   * As one expression the button turns back into a play arrow in the same render that
   * arrives there, instead of a render later.
   */
  const playing = wantPlay && Boolean(next);

  const position = MILESTONE_SEQUENCE.indexOf(milestone.id) + 1;
  const total = MILESTONE_SEQUENCE.length;

  const stop = useCallback(() => setWantPlay(false), []);

  /* Any manual move cancels playback, including a click on the dots. */
  const go = useCallback(
    (id: string) => {
      stop();
      onGo(id);
    },
    [onGo, stop]
  );

  useEffect(() => {
    if (timer.current) clearTimeout(timer.current);
    /* No next milestone means the end of the book, and the book does not wrap. */
    if (!playing || !next) return;

    timer.current = setTimeout(() => onGo(next.id), STEP_MS);
    return () => {
      if (timer.current) clearTimeout(timer.current);
    };
  }, [playing, next, onGo, milestone.id]);

  /* Left and right arrows step, when the reader is not typing or on the map. */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      const el = document.activeElement;
      if (
        el instanceof HTMLInputElement ||
        el instanceof HTMLTextAreaElement ||
        (el instanceof HTMLElement && el.isContentEditable) ||
        el instanceof HTMLCanvasElement
      ) {
        return;
      }
      if (e.key === "ArrowLeft" && previous) {
        e.preventDefault();
        go(previous.id);
      } else if (e.key === "ArrowRight" && next) {
        e.preventDefault();
        go(next.id);
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [previous, next, go]);

  return (
    <div className="rule-t shrink-0 bg-ivory px-3 py-3">
      <div className="mb-2 flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
        <p className="label-caps text-forest">Study chapter by chapter</p>
        <p className="text-[11px] text-ink-faint tabular-nums">Milestone {position} of {total}</p>
      </div>
      <p className="mb-3 text-[12px] leading-relaxed text-ink-soft">
        Follow the milestones to update the map and reading, then continue into the next chapter.
      </p>
      <div className="flex flex-wrap items-center gap-2">
        <Step
          label={previous ? `Previous: ${previous.title}` : "No earlier milestone"}
          disabled={!previous}
          onClick={() => previous && go(previous.id)}
          direction="prev"
        />
        <Step
          label={next ? `Next milestone: ${next.title}` : "No later milestone"}
          disabled={!next}
          onClick={() => next && go(next.id)}
          direction="next"
          chapter={next && next.chapter !== milestone.chapter ? next.chapter : undefined}
        />
      </div>

      <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-2">
        <span className="text-[11px] text-ink-faint">This chapter</span>
        <ol className="flex min-w-0 flex-1 flex-wrap items-center gap-1" aria-label="Milestones in this chapter">
          {chapterMilestones.map((m) => {
            const current = m.id === milestone.id;
            const meta = SEQUENCE_TYPES[m.sequenceType];
            return (
              <li key={m.id}>
                <button
                  type="button"
                  onClick={() => go(m.id)}
                  aria-current={current ? "true" : undefined}
                  title={`${m.title} · ${meta.label}`}
                  className={`flex h-5 items-center gap-1.5 rounded px-1.5 transition-colors ${
                    current ? "bg-bronze-wash" : "hover:bg-ivory-deep"
                  }`}
                >
                  <span
                    aria-hidden
                    className={`block size-[7px] border ${
                      m.sequenceType === "event"
                        ? "rounded-full"
                        : m.sequenceType === "allotment"
                          ? "rounded-[1px]"
                          : "rotate-45 rounded-[1px]"
                    } ${
                      current
                        ? "border-bronze bg-bronze"
                        : "border-rule-strong bg-transparent"
                    }`}
                  />
                  <span className="sr-only">{m.title}</span>
                </button>
              </li>
            );
          })}
        </ol>

        <button
          type="button"
          onClick={() => setWantPlay((v) => !v)}
          disabled={!next}
          aria-label={playing ? "Pause automatic advance" : "Advance automatically"}
          title={
            next
              ? playing
                ? "Pause"
                : `Advance every ${STEP_MS / 1000} seconds`
              : "The last milestone in the book"
          }
          className={`flex min-h-8 items-center gap-1.5 rounded border px-2 py-1 text-[11px] transition-colors disabled:opacity-40 ${
            playing
              ? "border-forest bg-forest text-ivory"
              : "border-rule text-ink-soft hover:border-rule-strong hover:text-charcoal"
          }`}
        >
          <svg viewBox="0 0 12 12" className="size-3" aria-hidden>
            {playing ? (
              <path d="M3 2.5h2v7H3zM7 2.5h2v7H7z" fill="currentColor" />
            ) : (
              <path d="M3.5 2.3 10 6l-6.5 3.7z" fill="currentColor" />
            )}
          </svg>
          {playing ? "Pause" : "Auto-play"}
        </button>
      </div>
    </div>
  );
}

function Step({
  label,
  disabled,
  onClick,
  direction,
  chapter,
}: {
  label: string;
  disabled: boolean;
  onClick: () => void;
  direction: "prev" | "next";
  chapter?: number;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={label}
      title={label}
      className={`flex min-h-11 items-center justify-center gap-2 rounded border px-3 py-2 text-[12px] font-medium transition-colors disabled:opacity-40 ${
        direction === "next"
          ? "flex-1 border-forest bg-forest text-ivory hover:bg-forest/90"
          : "border-rule text-ink-soft hover:border-rule-strong hover:text-charcoal"
      }`}
    >
      <svg viewBox="0 0 12 12" className={`size-3 shrink-0 ${direction === "next" ? "order-last" : ""}`} aria-hidden>
        <path
          d={direction === "prev" ? "M7.5 2.5 4 6l3.5 3.5" : "M4.5 2.5 8 6l-3.5 3.5"}
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      {direction === "prev" ? "Previous" : disabled ? "Final milestone" : chapter ? `Next · Joshua ${chapter}` : "Next milestone"}
    </button>
  );
}
