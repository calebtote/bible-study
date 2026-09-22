"use client";

/**
 * Saved places.
 *
 * Bookmarks store their own restorable `href` rather than being reassembled from
 * their kind and id. That is the difference between a bookmark that reopens the
 * dossier you were reading inside the chapter you were reading it in, and one that
 * dumps you at the top of chapter 6 to find your way back.
 *
 * Grouped by kind, newest first within a group, because a reader with thirty
 * bookmarks is looking for "that place" or "that question", not for the
 * chronological order in which they pressed the button.
 */

import Link from "next/link";
import type { Bookmark } from "@/content/types";
import { useStudy } from "@/lib/state/preferences";

const KIND_LABEL: Record<Bookmark["kind"], string> = {
  chapter: "Chapters",
  milestone: "Milestones",
  entity: "Places and peoples",
  person: "People",
  theme: "Themes",
  question: "Difficult questions",
};

const ORDER: Bookmark["kind"][] = [
  "chapter",
  "milestone",
  "entity",
  "person",
  "theme",
  "question",
];

export function BookmarksPanel({ onClose }: { onClose: () => void }) {
  const store = useStudy();
  const { bookmarks } = store.data;

  if (!store.hydrated) {
    return (
      <p className="px-4 py-5 text-[12.5px] text-ink-faint">Loading your bookmarks…</p>
    );
  }

  if (!bookmarks.length) {
    return (
      <div className="px-4 py-5">
        <h2 className="font-serif text-[14px] font-semibold text-charcoal">
          No bookmarks yet
        </h2>
        <p className="mt-1.5 text-[12px] leading-relaxed text-ink-soft">
          The bookmark control sits beside a chapter title, a milestone, a dossier and
          a theme. Saved views come back exactly as you left them, including which
          place you had open.
        </p>
      </div>
    );
  }

  const groups = ORDER.map((kind) => ({
    kind,
    items: bookmarks
      .filter((b) => b.kind === kind)
      .sort((a, b) => b.createdAt.localeCompare(a.createdAt)),
  })).filter((g) => g.items.length);

  return (
    <div className="quiet-scroll max-h-[min(70vh,30rem)] overflow-y-auto">
      <div className="rule-b flex items-baseline justify-between px-4 py-3">
        <h2 className="font-serif text-[15px] font-semibold text-charcoal">Bookmarks</h2>
        <span className="text-[11px] text-ink-faint">{bookmarks.length} saved</span>
      </div>

      {groups.map((g) => (
        <section key={g.kind}>
          <h3 className="label-caps rule-b bg-ivory-deep px-4 py-1.5">
            {KIND_LABEL[g.kind]}
          </h3>
          <ul>
            {g.items.map((b) => (
              <li key={b.id} className="rule-b flex items-center gap-1 last:border-b-0">
                <Link
                  href={b.href}
                  onClick={onClose}
                  className="min-w-0 flex-1 px-4 py-2 text-[12.5px] text-charcoal hover:bg-forest-wash hover:text-forest"
                >
                  <span className="block truncate">{b.label}</span>
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
                  className="mr-2 shrink-0 rounded p-1 text-ink-faint hover:bg-terracotta-wash hover:text-terracotta"
                >
                  <svg viewBox="0 0 16 16" className="size-3.5" aria-hidden>
                    <path
                      d="M4 4l8 8M12 4l-8 8"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}

/**
 * The bookmark toggle itself, used beside chapter titles, milestones and dossiers.
 *
 * It takes the full bookmark rather than an id because the label and href are known
 * where the button is rendered and nowhere else. A dossier open inside chapter 10
 * knows that it is inside chapter 10; a bookmark list reconstructing that later does
 * not.
 */
export function BookmarkButton({
  kind,
  targetId,
  label,
  href,
  className,
}: {
  kind: Bookmark["kind"];
  targetId: string;
  label: string;
  href: string;
  className?: string;
}) {
  const store = useStudy();
  const saved = store.isBookmarked(kind, targetId);

  return (
    <button
      type="button"
      onClick={() => store.toggleBookmark({ kind, targetId, label, href })}
      aria-pressed={saved}
      title={saved ? "Remove bookmark" : "Bookmark this"}
      aria-label={saved ? `Remove bookmark: ${label}` : `Bookmark ${label}`}
      className={`rounded p-1 transition-colors ${
        saved
          ? "text-bronze hover:bg-bronze-wash"
          : "text-ink-faint hover:bg-ivory-deep hover:text-bronze"
      } ${className ?? ""}`}
    >
      <svg viewBox="0 0 16 16" className="size-4" aria-hidden>
        <path
          d="M4 2.5h8v11l-4-3-4 3z"
          fill={saved ? "currentColor" : "none"}
          stroke="currentColor"
          strokeWidth="1.3"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}
