"use client";

/**
 * Notes, saved as you type.
 *
 * The store debounces writes and flushes on unmount and on page hide, so there is no
 * save button and nothing to forget to press. What this component adds is the part
 * the store cannot: telling the reader that the saving happened. A textarea that
 * quietly persists is indistinguishable from one that quietly loses everything, and
 * only one of those is acceptable for someone's study notes.
 *
 * A note can attach to the chapter or to the milestone the reader is on. Both are
 * offered because both are real: a thought about the ambush at Ai belongs to that
 * beat, and a thought about chapter 8 as a whole does not. The toggle shows which
 * note is in front of you and whether the other one has anything in it, so switching
 * never feels like the text disappeared.
 */

import { useEffect, useRef, useState } from "react";
import type { Milestone } from "@/content/types";
import { useStudy } from "@/lib/state/preferences";

export function NoteEditor({
  chapter,
  milestone,
}: {
  chapter: number;
  milestone: Milestone | null;
}) {
  const store = useStudy();
  const [scope, setScope] = useState<"chapter" | "milestone">("chapter");
  const [draft, setDraft] = useState("");
  const [saved, setSaved] = useState(false);
  const area = useRef<HTMLTextAreaElement>(null);

  const milestoneId = scope === "milestone" && milestone ? milestone.id : undefined;
  const stored = store.noteFor(chapter, milestoneId);

  const chapterNote = store.noteFor(chapter);
  const milestoneNote = milestone ? store.noteFor(chapter, milestone.id) : undefined;

  /*
   * The draft follows the note, keyed on which note is showing. Without this a
   * reader who switches scope or chapter sees the previous note's text in the box
   * and is one keystroke from saving it into the wrong place.
   */
  const key = `${chapter}:${milestoneId ?? "chapter"}`;
  const lastKey = useRef(key);
  useEffect(() => {
    if (lastKey.current !== key || draft === "") {
      lastKey.current = key;
      setDraft(stored?.body ?? "");
      setSaved(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key, store.hydrated]);

  /* Grow to fit, so long notes do not live in a three-line window. */
  useEffect(() => {
    const el = area.current;
    if (!el) return;
    el.style.height = "auto";
    el.style.height = `${Math.max(96, el.scrollHeight)}px`;
  }, [draft]);

  const write = (value: string) => {
    setDraft(value);
    store.saveNote(chapter, value, milestoneId);
    setSaved(true);
  };

  return (
    <section className="rule-t py-4">
      <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
        <h3 className="font-serif text-base font-semibold text-charcoal">My notes</h3>
        {milestone && (
          <div className="flex gap-1" role="group" aria-label="What this note is about">
            <ScopeButton
              active={scope === "chapter"}
              onClick={() => setScope("chapter")}
              hasContent={Boolean(chapterNote?.body)}
            >
              Chapter {chapter}
            </ScopeButton>
            <ScopeButton
              active={scope === "milestone"}
              onClick={() => setScope("milestone")}
              hasContent={Boolean(milestoneNote?.body)}
            >
              This milestone
            </ScopeButton>
          </div>
        )}
      </div>

      <textarea
        ref={area}
        value={draft}
        onChange={(e) => write(e.target.value)}
        placeholder={
          scope === "milestone" && milestone
            ? `A thought about ${milestone.title}.`
            : `A thought about Joshua ${chapter} as a whole.`
        }
        aria-label={
          scope === "milestone" && milestone
            ? `Notes on ${milestone.title}`
            : `Notes on Joshua ${chapter}`
        }
        className="mt-2.5 w-full resize-none rounded border border-rule bg-ivory px-3 py-2.5 font-serif text-[14px] leading-relaxed text-charcoal outline-none transition-colors focus:border-forest-soft"
      />

      <div className="mt-1.5 flex items-baseline justify-between gap-3 text-[11px]">
        <span className="text-ink-faint">
          {store.storageBlocked ? (
            <span className="text-terracotta">
              Not saved. This browser is blocking local storage, so anything typed here
              will be lost when you close the tab.
            </span>
          ) : saved || stored ? (
            <>
              Saved in this browser only
              {stored?.updatedAt && (
                <>
                  {" · "}
                  {new Date(stored.updatedAt).toLocaleString(undefined, {
                    dateStyle: "medium",
                    timeStyle: "short",
                  })}
                </>
              )}
            </>
          ) : (
            "Saves automatically, in this browser only"
          )}
        </span>
        {stored && (
          <button
            type="button"
            onClick={() => {
              store.deleteNote(stored.id);
              setDraft("");
              setSaved(false);
            }}
            className="shrink-0 text-ink-faint hover:text-terracotta hover:underline"
          >
            Delete
          </button>
        )}
      </div>
    </section>
  );
}

function ScopeButton({
  active,
  onClick,
  hasContent,
  children,
}: {
  active: boolean;
  onClick: () => void;
  hasContent: boolean;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      aria-pressed={active}
      onClick={onClick}
      className={`flex items-center gap-1.5 rounded border px-2 py-0.5 text-[11px] transition-colors ${
        active
          ? "border-forest bg-forest-wash font-medium text-forest"
          : "border-rule text-ink-soft hover:border-rule-strong hover:text-charcoal"
      }`}
    >
      {children}
      {hasContent && (
        <span
          aria-label="has a note"
          title="This one has a note"
          className="block size-1.5 rounded-full bg-bronze"
        />
      )}
    </button>
  );
}
