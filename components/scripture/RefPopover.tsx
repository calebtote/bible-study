"use client";

/**
 * The passage behind a reference, shown where the reader already is.
 *
 * Study prose is full of cross references, and each one is an implicit demand:
 * go look that up. This removes the trip. Rest on the reference, or tap it, and
 * the verses appear beside it; move away and they are gone. The popover never
 * navigates and never scrolls the page, because checking a cross reference is a
 * glance, and a glance that costs the reader their place costs more than it gives.
 *
 * The card is fixed-position and measured against the viewport on open, because
 * the panels these references live in are scroll containers with overflow hidden,
 * and a card positioned inside one gets clipped at exactly the moment it is needed.
 * Fixed positioning goes stale on scroll, so scrolling closes the card; that is the
 * behaviour a reader expects from a tooltip anyway.
 *
 * Text arrives through the same loader as every other passage in the study, so it
 * is the preferred translation with its attribution, cached after the first look.
 */

import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { usePassage } from "./Passage";

/** Wide enough for a verse to read naturally, narrow enough to feel like a glance. */
const CARD_WIDTH = 360;
const GAP = 8;

export function RefPopover({
  refText,
  className,
  children,
}: {
  /** The reference exactly as written, e.g. "Joshua 6:1-5". */
  refText: string;
  className?: string;
  children: React.ReactNode;
}) {
  const triggerRef = useRef<HTMLButtonElement>(null);
  const [at, setAt] = useState<{ x: number; y: number; above: boolean } | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const open = at !== null;

  const place = useCallback(() => {
    const el = triggerRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = Math.min(
      Math.max(GAP, r.left + r.width / 2 - CARD_WIDTH / 2),
      window.innerWidth - CARD_WIDTH - GAP
    );
    /* Above by default, below when the trigger sits near the top of the window. */
    const above = r.top > 260;
    setAt({ x, y: above ? r.top - GAP : r.bottom + GAP, above });
  }, []);

  const scheduleClose = useCallback(() => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setAt(null), 180);
  }, []);

  const cancelClose = useCallback(() => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  }, []);

  useEffect(() => {
    if (!open) return;
    const close = () => setAt(null);
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    /* `true` catches the scroll of whichever panel the reference lives in. */
    window.addEventListener("scroll", close, true);
    window.addEventListener("resize", close);
    document.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("scroll", close, true);
      window.removeEventListener("resize", close);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  useEffect(
    () => () => {
      if (closeTimer.current) clearTimeout(closeTimer.current);
    },
    []
  );

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        className={className ?? "ref-link"}
        aria-expanded={open}
        onMouseEnter={() => {
          cancelClose();
          place();
        }}
        onMouseLeave={scheduleClose}
        onFocus={place}
        onBlur={scheduleClose}
        onClick={() => (open ? setAt(null) : place())}
      >
        {children}
      </button>

      {/*
        Portalled to the body. The trigger lives inside a paragraph, and a div
        inside a p is invalid HTML that React will refuse to hydrate; the card
        also has no business being clipped by whichever scroll container the
        paragraph happens to be in.
      */}
      {open &&
        createPortal(
          <div
            role="tooltip"
            onMouseEnter={cancelClose}
            onMouseLeave={scheduleClose}
            className="animate-fade-rise fixed z-[70] rounded border border-rule bg-ivory shadow-float"
            style={{
              left: at.x,
              top: at.y,
              width: CARD_WIDTH,
              maxWidth: `calc(100vw - ${GAP * 2}px)`,
              transform: at.above ? "translateY(-100%)" : undefined,
            }}
          >
            <PassageCard refText={refText} />
          </div>,
          document.body
        )}
    </>
  );
}

/** Mounted only while the card is open, so nothing is fetched for a glance not taken. */
function PassageCard({ refText }: { refText: string }) {
  const state = usePassage(refText);

  return (
    <div className="quiet-scroll max-h-72 overflow-y-auto px-4 py-3">
      <p className="label-caps text-bronze">{refText}</p>

      {state.phase === "loading" && (
        <p className="mt-2 text-[12px] text-ink-faint">Loading…</p>
      )}

      {state.phase === "done" && state.result.status !== "ok" && (
        <p className="mt-2 text-[12.5px] leading-relaxed text-ink-soft">
          {state.result.message}
        </p>
      )}

      {state.phase === "done" && state.result.status === "ok" && (
        <>
          <p className="mt-2 font-serif text-[13.5px] leading-relaxed text-charcoal">
            {state.result.passage.verses.map((v, i) => (
              <span key={v.v}>
                {i > 0 && " "}
                <sup className="mr-0.5 font-sans text-[0.62em] font-medium text-bronze select-none">
                  {v.v}
                </sup>
                {v.t}
              </span>
            ))}
          </p>
          <p className="mt-2 text-[10.5px] text-ink-faint">
            {state.result.passage.translation}
          </p>
        </>
      )}
    </div>
  );
}
