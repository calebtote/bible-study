"use client";

/**
 * The notebook: everything the reader has produced, and the only two ways it moves.
 *
 * Import is the single action in this study that can destroy work, so it is built as
 * three separate steps rather than one button. The file is parsed and reported on
 * first, the reader is told what it contains and what was repaired, and only then are
 * they asked to choose between merging and replacing, with the cost of replacing
 * stated in the same breath. No confirm() dialog, because a browser confirm cannot
 * show a reader that they are about to discard fourteen notes.
 *
 * Export writes the file the reader already owns. It is plain JSON, readable in any
 * text editor, and deliberately not compressed or encoded: study notes should not
 * need this application to be legible in ten years.
 */

import { useCallback, useMemo, useRef, useState } from "react";
import Link from "next/link";
import type { Bookmark, Note } from "@/content/types";
import {
  AVAILABLE_CHAPTER_COUNT,
  CHAPTER_BY_NUMBER,
  MILESTONE_BY_ID,
  TOTAL_CHAPTERS,
} from "@/content/chapters";
import { useStudy } from "@/lib/state/preferences";
import { parseStudyData, type ImportReport } from "@/lib/state/study-data";
import { studyHref } from "@/lib/state/study-url";
import { Aside } from "@/components/shell/PageShell";

type Pending = { report: ImportReport; filename: string };
type ImportChoice = "merge" | "replace";

export function NotebookScreen() {
  const store = useStudy();
  const { notes, bookmarks } = store.data;

  if (!store.hydrated) {
    return <div className="h-64" aria-hidden />;
  }

  return (
    <div className="space-y-12">
      {store.storageBlocked && (
        <Aside title="This browser is not saving anything" tone="caution">
          <p>
            Writing to local storage failed, which usually means private browsing or a
            blocked-storage setting. The study works normally, but notes and progress
            will be gone when you close the tab. Export before you leave if you want to
            keep anything.
          </p>
        </Aside>
      )}

      <Progress />
      <Notes notes={notes} />
      <Bookmarks bookmarks={bookmarks} />
      <Transfer />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Progress                                                           */
/* ------------------------------------------------------------------ */

function Progress() {
  const store = useStudy();
  const { progress } = store.data;
  const complete = new Set(progress.completedChapters);

  return (
    <section>
      <h2 className="rule-b pb-2.5 font-serif text-[19px] font-semibold tracking-[-0.01em] text-charcoal">
        Progress
      </h2>
      <p className="mt-3 text-[13px] leading-relaxed text-ink-soft">
        {complete.size} of {TOTAL_CHAPTERS} chapters marked read,{" "}
        {progress.visitedMilestones.length} milestone
        {progress.visitedMilestones.length === 1 ? "" : "s"} visited. Click a number to
        change whether it counts as read.
      </p>

      <ul className="mt-4 flex flex-wrap gap-1.5">
        {Array.from({ length: TOTAL_CHAPTERS }, (_, i) => i + 1).map((n) => {
          const authored = CHAPTER_BY_NUMBER[n] !== undefined;
          const done = complete.has(n);
          return (
            <li key={n}>
              <button
                type="button"
                disabled={!authored}
                onClick={() => store.markChapterComplete(n, !done)}
                aria-pressed={done}
                title={
                  authored
                    ? done
                      ? `Joshua ${n}: marked read`
                      : `Joshua ${n}: not marked read`
                    : `Joshua ${n} is not written yet`
                }
                className={`size-8 rounded text-[12px] tabular-nums transition-colors ${
                  !authored
                    ? "cursor-not-allowed border border-dashed border-rule text-ink-faint/60"
                    : done
                      ? "bg-forest font-medium text-ivory hover:bg-[#2b4539]"
                      : "border border-rule-strong text-charcoal hover:border-forest hover:bg-forest-wash hover:text-forest"
                }`}
              >
                {n}
              </button>
            </li>
          );
        })}
      </ul>

      {AVAILABLE_CHAPTER_COUNT < TOTAL_CHAPTERS && (
        <p className="mt-3 text-[11.5px] leading-relaxed text-ink-faint">
          Dashed numbers are chapters that have not been written yet. They are shown
          rather than hidden so the shape of the gap is visible.
        </p>
      )}
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Notes                                                              */
/* ------------------------------------------------------------------ */

function Notes({ notes }: { notes: Note[] }) {
  const store = useStudy();

  /* Newest first within each chapter, chapters in reading order. */
  const byChapter = useMemo(() => {
    const groups = new Map<number, Note[]>();
    for (const n of notes) {
      const list = groups.get(n.chapter) ?? [];
      list.push(n);
      groups.set(n.chapter, list);
    }
    return [...groups.entries()]
      .sort((a, b) => a[0] - b[0])
      .map(([chapter, list]) => ({
        chapter,
        notes: [...list].sort(
          (a, b) => Date.parse(b.updatedAt) - Date.parse(a.updatedAt)
        ),
      }));
  }, [notes]);

  return (
    <section>
      <div className="rule-b flex flex-wrap items-baseline justify-between gap-3 pb-2.5">
        <h2 className="font-serif text-[19px] font-semibold tracking-[-0.01em] text-charcoal">
          Notes
        </h2>
        <p className="text-[11.5px] text-ink-faint">
          {notes.length} note{notes.length === 1 ? "" : "s"}
        </p>
      </div>

      {notes.length === 0 ? (
        <p className="mt-3 max-w-2xl text-[13px] leading-relaxed text-ink-soft">
          Nothing yet. Notes are written in the study itself, at the foot of any
          chapter panel, and they attach to whichever milestone you are looking at so
          you can find them again in context.
        </p>
      ) : (
        <div className="mt-5 space-y-7">
          {byChapter.map((group) => (
            <div key={group.chapter}>
              <h3 className="font-serif text-[15px] font-semibold text-forest">
                Joshua {group.chapter}
                {CHAPTER_BY_NUMBER[group.chapter] && (
                  <span className="ml-2 font-sans text-[11.5px] font-normal text-ink-faint">
                    {CHAPTER_BY_NUMBER[group.chapter].title}
                  </span>
                )}
              </h3>

              <ul className="mt-2.5 space-y-3">
                {group.notes.map((note) => {
                  const milestone = note.milestoneId
                    ? MILESTONE_BY_ID[note.milestoneId]
                    : undefined;
                  return (
                    <li
                      key={note.id}
                      className="rounded border border-rule bg-ivory px-4 py-3"
                    >
                      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                        <Link
                          href={studyHref({
                            chapter: note.chapter,
                            milestoneId: milestone?.id ?? null,
                          })}
                          className="text-[11.5px] font-medium text-forest underline decoration-rule-strong underline-offset-2 hover:decoration-forest"
                        >
                          {milestone
                            ? milestone.title
                            : note.milestoneId
                              ? "A milestone that no longer exists"
                              : "The chapter as a whole"}
                        </Link>
                        <button
                          type="button"
                          onClick={() => store.deleteNote(note.id)}
                          className="shrink-0 rounded px-1.5 py-0.5 text-[11px] text-ink-faint transition-colors hover:bg-terracotta-wash hover:text-terracotta"
                        >
                          Delete
                        </button>
                      </div>
                      <p className="mt-2 text-[13px] leading-relaxed whitespace-pre-wrap text-charcoal">
                        {note.body}
                      </p>
                      <p className="mt-2 text-[10.5px] text-ink-faint">
                        Last edited {formatWhen(note.updatedAt)}
                      </p>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Bookmarks                                                          */
/* ------------------------------------------------------------------ */

const KIND_LABELS: Record<Bookmark["kind"], string> = {
  chapter: "Chapters",
  milestone: "Milestones",
  entity: "Places and peoples",
  person: "People",
  theme: "Themes",
  question: "Difficult questions",
};

function Bookmarks({ bookmarks }: { bookmarks: Bookmark[] }) {
  const store = useStudy();

  const groups = (Object.keys(KIND_LABELS) as Bookmark["kind"][])
    .map((kind) => ({
      kind,
      items: bookmarks
        .filter((b) => b.kind === kind)
        .sort((a, b) => Date.parse(b.createdAt) - Date.parse(a.createdAt)),
    }))
    .filter((g) => g.items.length > 0);

  return (
    <section>
      <div className="rule-b flex flex-wrap items-baseline justify-between gap-3 pb-2.5">
        <h2 className="font-serif text-[19px] font-semibold tracking-[-0.01em] text-charcoal">
          Bookmarks
        </h2>
        <p className="text-[11.5px] text-ink-faint">
          {bookmarks.length} saved
        </p>
      </div>

      {bookmarks.length === 0 ? (
        <p className="mt-3 max-w-2xl text-[13px] leading-relaxed text-ink-soft">
          Nothing saved yet. The bookmark control sits beside chapter titles,
          milestones, dossiers, profiles, themes and questions, and it stores the link
          back to exactly what you were reading.
        </p>
      ) : (
        <div className="mt-5 space-y-6">
          {groups.map((group) => (
            <div key={group.kind}>
              <h3 className="label-caps text-bronze">{KIND_LABELS[group.kind]}</h3>
              <ul className="mt-2 space-y-1">
                {group.items.map((b) => (
                  <li key={b.id} className="flex items-baseline gap-2">
                    <Link
                      href={b.href}
                      className="min-w-0 flex-1 truncate text-[13px] text-charcoal hover:text-forest hover:underline"
                    >
                      {b.label}
                    </Link>
                    <button
                      type="button"
                      onClick={() =>
                        store.toggleBookmark({
                          kind: b.kind,
                          targetId: b.targetId,
                          label: b.label,
                          href: b.href,
                        })
                      }
                      aria-label={`Remove bookmark: ${b.label}`}
                      className="shrink-0 rounded px-1.5 py-0.5 text-[11px] text-ink-faint transition-colors hover:bg-terracotta-wash hover:text-terracotta"
                    >
                      Remove
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Export and import                                                  */
/* ------------------------------------------------------------------ */

function Transfer() {
  const store = useStudy();
  const fileInput = useRef<HTMLInputElement>(null);
  const [pending, setPending] = useState<Pending | null>(null);
  const [done, setDone] = useState<string | null>(null);
  const [resetArmed, setResetArmed] = useState(false);

  const { notes, bookmarks, progress } = store.data;
  const isEmpty =
    notes.length === 0 &&
    bookmarks.length === 0 &&
    progress.completedChapters.length === 0;

  const download = useCallback(() => {
    const payload = JSON.stringify(
      { ...store.data, exportedAt: new Date().toISOString() },
      null,
      2
    );
    const blob = new Blob([payload], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    /* Dated so successive exports do not overwrite each other in a downloads folder. */
    a.download = `joshua-study-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
    setDone("Exported.");
  }, [store.data]);

  const readFile = useCallback(async (file: File) => {
    setDone(null);
    const text = await file.text();
    setPending({ report: parseStudyData(text), filename: file.name });
  }, []);

  const apply = useCallback(
    (choice: ImportChoice) => {
      if (!pending?.report.data) return;
      const { data } = pending.report;
      if (choice === "replace") store.replaceAll(data);
      else store.mergeIn(data);
      setDone(
        choice === "replace"
          ? "Everything here was replaced with the contents of that file."
          : "That file was merged into what was already here."
      );
      setPending(null);
      if (fileInput.current) fileInput.current.value = "";
    },
    [pending, store]
  );

  return (
    <section>
      <h2 className="rule-b pb-2.5 font-serif text-[19px] font-semibold tracking-[-0.01em] text-charcoal">
        Moving your work
      </h2>

      <p className="mt-3 max-w-2xl text-[13px] leading-relaxed text-ink-soft">
        There is no account and nothing is sent anywhere, which means this browser is
        the only copy. Export writes a plain JSON file you can read in any text editor,
        keep in a folder, or open on another machine.
      </p>

      <div className="mt-5 flex flex-wrap items-center gap-3">
        <button
          type="button"
          onClick={download}
          disabled={isEmpty}
          className="rounded bg-forest px-4 py-2.5 text-[13px] font-medium text-ivory transition-colors hover:bg-[#2b4539] disabled:cursor-not-allowed disabled:bg-rule-strong disabled:text-ink-faint"
        >
          Export everything
        </button>

        <label className="cursor-pointer rounded border border-rule-strong px-4 py-2.5 text-[13px] font-medium text-charcoal transition-colors hover:border-bronze hover:bg-bronze-wash hover:text-bronze">
          Choose a file to import
          <input
            ref={fileInput}
            type="file"
            accept="application/json,.json"
            className="sr-only"
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (file) void readFile(file);
            }}
          />
        </label>
      </div>

      {isEmpty && (
        <p className="mt-2 text-[11.5px] text-ink-faint">
          Export is available once there is something to export.
        </p>
      )}

      {done && (
        <p className="mt-4 rounded border border-forest/30 bg-forest-wash px-3 py-2 text-[12.5px] text-forest">
          {done}
        </p>
      )}

      {pending && (
        <ImportReview
          pending={pending}
          currentCounts={{
            notes: notes.length,
            bookmarks: bookmarks.length,
            chapters: progress.completedChapters.length,
          }}
          onApply={apply}
          onCancel={() => {
            setPending(null);
            if (fileInput.current) fileInput.current.value = "";
          }}
        />
      )}

      <div className="rule-t mt-10 pt-5">
        <h3 className="font-serif text-[15px] font-semibold text-charcoal">
          Clear everything
        </h3>
        <p className="mt-1.5 max-w-2xl text-[12.5px] leading-relaxed text-ink-soft">
          Deletes every note, bookmark and progress mark in this browser and restores
          the default settings. There is no undo, and no copy anywhere else unless you
          have exported one.
        </p>
        {resetArmed ? (
          <div className="mt-3 flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={() => {
                store.resetAll();
                setResetArmed(false);
                setDone("Everything in this browser was cleared.");
              }}
              className="rounded bg-terracotta px-3.5 py-2 text-[12.5px] font-medium text-ivory transition-colors hover:bg-[#9b503b]"
            >
              Yes, delete {notes.length} note{notes.length === 1 ? "" : "s"} and{" "}
              {bookmarks.length} bookmark{bookmarks.length === 1 ? "" : "s"}
            </button>
            <button
              type="button"
              onClick={() => setResetArmed(false)}
              className="rounded border border-rule-strong px-3.5 py-2 text-[12.5px] text-charcoal hover:bg-ivory-deep"
            >
              Keep it
            </button>
          </div>
        ) : (
          <button
            type="button"
            onClick={() => setResetArmed(true)}
            disabled={isEmpty}
            className="mt-3 rounded border border-terracotta/50 px-3.5 py-2 text-[12.5px] font-medium text-terracotta transition-colors hover:bg-terracotta-wash disabled:cursor-not-allowed disabled:border-rule disabled:text-ink-faint"
          >
            Clear everything
          </button>
        )}
      </div>
    </section>
  );
}

/**
 * The confirmation step.
 *
 * The brief asks for an explicit choice before overwriting, and the distinction it is
 * protecting is real: a reader restoring a backup wants replace, and a reader pulling
 * in notes from a second device wants merge. Getting it wrong silently deletes work,
 * so both buttons state what they will do to the numbers currently on screen.
 */
function ImportReview({
  pending,
  currentCounts,
  onApply,
  onCancel,
}: {
  pending: Pending;
  currentCounts: { notes: number; bookmarks: number; chapters: number };
  onApply: (choice: ImportChoice) => void;
  onCancel: () => void;
}) {
  const { report, filename } = pending;
  const hasCurrent =
    currentCounts.notes > 0 ||
    currentCounts.bookmarks > 0 ||
    currentCounts.chapters > 0;

  return (
    <div className="animate-fade-rise mt-6 rounded border border-bronze/40 bg-bronze-wash/50 px-4 py-4">
      <h3 className="font-serif text-[15.5px] font-semibold text-charcoal">
        {report.ok ? "Ready to import" : "That file cannot be used"}
      </h3>
      <p className="mt-1 text-[11.5px] text-ink-faint">{filename}</p>

      {report.errors.length > 0 && (
        <ul className="mt-3 space-y-1.5">
          {report.errors.map((e, i) => (
            <li
              key={i}
              className="border-l-2 border-terracotta pl-3 text-[12.5px] leading-relaxed text-terracotta"
            >
              {e}
            </li>
          ))}
        </ul>
      )}

      {report.ok && (
        <dl className="mt-3 flex flex-wrap gap-x-7 gap-y-2">
          <Count label="Notes" value={report.summary.notes} />
          <Count label="Bookmarks" value={report.summary.bookmarks} />
          <Count label="Chapters read" value={report.summary.chaptersComplete} />
        </dl>
      )}

      {report.repairs.length > 0 && (
        <div className="mt-4">
          <h4 className="label-caps text-terracotta">
            {report.repairs.length} thing{report.repairs.length === 1 ? "" : "s"} were
            changed or dropped
          </h4>
          <ul className="mt-1.5 space-y-1">
            {report.repairs.map((r, i) => (
              <li key={i} className="text-[12px] leading-relaxed text-ink-soft">
                {r}
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="rule-t mt-4 flex flex-wrap items-center gap-3 pt-4">
        {report.ok && (
          <>
            <button
              type="button"
              onClick={() => onApply("merge")}
              className="rounded bg-forest px-3.5 py-2 text-[12.5px] font-medium text-ivory transition-colors hover:bg-[#2b4539]"
            >
              Merge with what is here
            </button>
            <button
              type="button"
              onClick={() => onApply("replace")}
              className="rounded border border-terracotta/50 px-3.5 py-2 text-[12.5px] font-medium text-terracotta transition-colors hover:bg-terracotta-wash"
            >
              {hasCurrent
                ? `Replace, discarding ${currentCounts.notes} note${
                    currentCounts.notes === 1 ? "" : "s"
                  } and ${currentCounts.bookmarks} bookmark${
                    currentCounts.bookmarks === 1 ? "" : "s"
                  }`
                : "Replace"}
            </button>
          </>
        )}
        <button
          type="button"
          onClick={onCancel}
          className="rounded border border-rule-strong px-3.5 py-2 text-[12.5px] text-charcoal hover:bg-ivory"
        >
          Cancel
        </button>
      </div>

      {report.ok && (
        <p className="mt-3 text-[11.5px] leading-relaxed text-ink-faint">
          Merging keeps both sides, and where the same note exists twice it keeps the
          one edited more recently. Replacing discards everything currently in this
          browser. Nothing has changed yet.
        </p>
      )}
    </div>
  );
}

function Count({ label, value }: { label: string; value: number }) {
  return (
    <div>
      <dt className="label-caps text-ink-faint">{label}</dt>
      <dd className="font-serif text-[18px] tabular-nums text-charcoal">{value}</dd>
    </div>
  );
}

/** Dates are formatted on the client only, so the server never renders a locale. */
function formatWhen(iso: string): string {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return "at an unknown time";
  return d.toLocaleString(undefined, {
    dateStyle: "medium",
    timeStyle: "short",
  });
}
