"use client";

/**
 * The top bar: the product's name, the routes, search, bookmarks and settings.
 *
 * It is thin and quiet on purpose. On the study screen it is the only chrome above
 * the map, and every row of pixels it takes is a row the map does not get. The
 * borrowed convention is a printed study Bible's running head: enough to tell you
 * where you are, not enough to read.
 *
 * Search is reachable with the slash key from anywhere, which is the one shortcut
 * worth teaching, so the button says so.
 */

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useStudy } from "@/lib/state/preferences";
import { SearchOverlay } from "./SearchOverlay";
import { SettingsPanel } from "./SettingsPanel";
import { BookmarksPanel } from "./BookmarksPanel";
import { Popover } from "./Popover";

const NAV = [
  { href: "/study", label: "Study" },
  { href: "/before-joshua", label: "Before Joshua" },
  { href: "/people", label: "People" },
  { href: "/themes", label: "Themes" },
  { href: "/sources", label: "Sources" },
  { href: "/notebook", label: "Notebook" },
];

export function TopBar() {
  const pathname = usePathname();
  const store = useStudy();
  const [search, setSearch] = useState(false);
  const [panel, setPanel] = useState<"bookmarks" | "settings" | null>(null);

  /*
   * Slash opens search, unless the reader is typing. Stealing the key mid-note
   * would be an unforgivable way to lose a sentence.
   */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "/" || e.metaKey || e.ctrlKey || e.altKey) return;
      const el = document.activeElement;
      const typing =
        el instanceof HTMLInputElement ||
        el instanceof HTMLTextAreaElement ||
        (el instanceof HTMLElement && el.isContentEditable);
      if (typing) return;
      e.preventDefault();
      setSearch(true);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  const bookmarkCount = store.data.bookmarks.length;

  return (
    <>
      <header className="rule-b sticky top-0 z-30 bg-ivory/92 backdrop-blur-sm no-print">
        <div className="flex h-12 items-center gap-2 px-3 sm:gap-4 sm:px-4">
          <Link href="/" className="group flex min-w-0 shrink-0 items-baseline gap-2">
            <span className="font-serif text-[15px] font-semibold tracking-[-0.01em] text-charcoal group-hover:text-forest">
              Joshua
            </span>
            <span className="hidden truncate font-serif text-[12.5px] text-ink-faint md:block">
              The Journey into the Land
            </span>
          </Link>

          <nav className="quiet-scroll -mx-1 flex min-w-0 flex-1 items-center gap-0.5 overflow-x-auto px-1">
            {NAV.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`shrink-0 rounded px-2 py-1 text-[12.5px] whitespace-nowrap transition-colors ${
                    active
                      ? "bg-forest-wash font-medium text-forest"
                      : "text-ink-soft hover:bg-ivory-deep hover:text-charcoal"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex shrink-0 items-center gap-1">
            <button
              type="button"
              onClick={() => setSearch(true)}
              className="flex items-center gap-2 rounded border border-rule px-2 py-1 text-[12px] text-ink-faint transition-colors hover:border-rule-strong hover:text-charcoal"
              aria-label="Search the study"
            >
              <svg viewBox="0 0 16 16" className="size-3.5" aria-hidden>
                <circle cx="6.8" cy="6.8" r="4.4" fill="none" stroke="currentColor" strokeWidth="1.5" />
                <path d="M10.2 10.2 14 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
              <span className="hidden sm:block">Search</span>
              <kbd className="hidden rounded border border-rule px-1 text-[10px] lg:block">/</kbd>
            </button>

            <div className="relative">
              <IconButton
                label={`Bookmarks${bookmarkCount ? ` (${bookmarkCount})` : ""}`}
                active={panel === "bookmarks"}
                onClick={() => setPanel(panel === "bookmarks" ? null : "bookmarks")}
              >
                <path
                  d="M4 2.5h8v11l-4-3-4 3z"
                  fill={bookmarkCount ? "currentColor" : "none"}
                  stroke="currentColor"
                  strokeWidth="1.3"
                  strokeLinejoin="round"
                />
              </IconButton>
              <Popover
                open={panel === "bookmarks"}
                onClose={() => setPanel(null)}
                label="Bookmarks"
              >
                <BookmarksPanel onClose={() => setPanel(null)} />
              </Popover>
            </div>

            <div className="relative">
              <IconButton
                label="Settings"
                active={panel === "settings"}
                onClick={() => setPanel(panel === "settings" ? null : "settings")}
              >
                <circle cx="8" cy="8" r="2.1" fill="none" stroke="currentColor" strokeWidth="1.3" />
                <path
                  d="M8 1.6v1.7M8 12.7v1.7M1.6 8h1.7M12.7 8h1.7M3.5 3.5l1.2 1.2M11.3 11.3l1.2 1.2M12.5 3.5l-1.2 1.2M4.7 11.3l-1.2 1.2"
                  stroke="currentColor"
                  strokeWidth="1.3"
                  strokeLinecap="round"
                />
              </IconButton>
              <Popover
                open={panel === "settings"}
                onClose={() => setPanel(null)}
                label="Settings"
              >
                <SettingsPanel onClose={() => setPanel(null)} />
              </Popover>
            </div>
          </div>
        </div>
      </header>

      {search && <SearchOverlay onClose={() => setSearch(false)} />}
    </>
  );
}

function IconButton({
  label,
  active,
  onClick,
  children,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      aria-expanded={active}
      title={label}
      className={`rounded p-1.5 transition-colors ${
        active
          ? "bg-forest-wash text-forest"
          : "text-ink-faint hover:bg-ivory-deep hover:text-charcoal"
      }`}
    >
      <svg viewBox="0 0 16 16" className="size-4" aria-hidden>
        {children}
      </svg>
    </button>
  );
}
