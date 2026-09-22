"use client";

/**
 * Global search.
 *
 * A dialog rather than an inline dropdown, because the results span the whole study
 * and deserve room: a query like "Jericho" legitimately returns a chapter, four
 * milestones, a dossier and two sources, and those are different kinds of answer
 * that the reader needs to see grouped.
 *
 * Keyboard first. The input takes focus on open, the arrow keys move through
 * results, Enter follows the highlighted one and Escape closes. Nothing here needs
 * a mouse, which matters on a study screen where the reader's hands are already on
 * the keys taking notes.
 */

import { useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { groupResults, search, type SearchResult } from "@/lib/search";

/**
 * Mounted only while open, which is what makes the empty query and the highlighted row
 * start fresh each time without anything resetting them. Kept mounted behind an early
 * return, the dialog had to clear its own state from an effect on the way in, and a
 * search closed on the fourth result would briefly reopen showing that result again.
 */
export function SearchOverlay({ onClose }: { onClose: () => void }) {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  const results = useMemo(() => search(query), [query]);
  const grouped = useMemo(() => groupResults(results), [results]);

  /* One frame, so the element exists before focus is asked for. */
  useEffect(() => {
    requestAnimationFrame(() => inputRef.current?.focus());
  }, []);

  /* Keep the highlighted row in view when the arrow keys walk past the fold. */
  useEffect(() => {
    listRef.current
      ?.querySelector<HTMLElement>('[data-active="true"]')
      ?.scrollIntoView({ block: "nearest" });
  }, [active]);

  const go = (result: SearchResult) => {
    router.push(result.href);
    onClose();
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      e.preventDefault();
      onClose();
      return;
    }
    if (!results.length) return;

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActive((i) => (i + 1) % results.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive((i) => (i - 1 + results.length) % results.length);
    } else if (e.key === "Enter") {
      e.preventDefault();
      go(results[active]);
    }
  };

  /* Flat position, so grouping does not complicate arrow-key movement. */
  let position = -1;

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center px-4 pt-[8vh] sm:pt-[12vh]"
      role="dialog"
      aria-modal="true"
      aria-label="Search the study"
    >
      <button
        type="button"
        aria-label="Close search"
        onClick={onClose}
        className="absolute inset-0 cursor-default bg-charcoal/25 backdrop-blur-[2px]"
      />

      <div
        className="animate-fade-rise relative w-full max-w-2xl overflow-hidden rounded-lg border border-rule bg-ivory shadow-float"
        onKeyDown={onKeyDown}
      >
        <div className="rule-b flex items-center gap-3 px-4 py-3">
          <svg viewBox="0 0 16 16" className="size-4 shrink-0 text-ink-faint" aria-hidden>
            <circle cx="6.8" cy="6.8" r="4.4" fill="none" stroke="currentColor" strokeWidth="1.4" />
            <path d="M10.2 10.2 14 14" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
          </svg>
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              /* A new query means a new first result, so the highlight goes back to it. */
              setActive(0);
            }}
            placeholder="Search chapters, places, people, themes, sources"
            className="w-full bg-transparent text-[15px] text-charcoal outline-none placeholder:text-ink-faint"
            autoComplete="off"
            spellCheck={false}
            aria-controls="search-results"
          />
          <kbd className="hidden shrink-0 rounded border border-rule px-1.5 py-0.5 text-[10px] text-ink-faint sm:block">
            Esc
          </kbd>
        </div>

        <div
          id="search-results"
          ref={listRef}
          className="quiet-scroll max-h-[60vh] overflow-y-auto"
          role="listbox"
        >
          {query.trim().length < 2 ? (
            <p className="px-4 py-6 text-[13px] leading-relaxed text-ink-soft">
              Type at least two letters. Search covers every chapter, milestone,
              place, people group, person, theme, difficult question and source in
              the study.
            </p>
          ) : !results.length ? (
            <p className="px-4 py-6 text-[13px] leading-relaxed text-ink-soft">
              Nothing matches “{query.trim()}”. The study covers the book of Joshua
              and the passages it depends on, so a name from elsewhere in the Bible
              may simply not be in it.
            </p>
          ) : (
            grouped.map(([group, items]) => (
              <section key={group}>
                <h2 className="label-caps rule-b bg-ivory-deep px-4 py-1.5">{group}</h2>
                <ul>
                  {items.map((r) => {
                    position += 1;
                    const isActive = position === active;
                    const myPosition = position;
                    return (
                      <li key={`${r.kind}-${r.id}`}>
                        <button
                          type="button"
                          role="option"
                          aria-selected={isActive}
                          data-active={isActive}
                          onMouseEnter={() => setActive(myPosition)}
                          onClick={() => go(r)}
                          className={`block w-full px-4 py-2 text-left ${
                            isActive ? "bg-forest-wash" : ""
                          }`}
                        >
                          <span className="block font-serif text-[14px] text-charcoal">
                            {r.title}
                          </span>
                          {r.context && (
                            <span className="mt-0.5 block truncate text-[11.5px] text-ink-soft">
                              {r.context}
                            </span>
                          )}
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </section>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
