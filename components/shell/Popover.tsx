"use client";

/**
 * The anchored panel the top bar's bookmarks and settings buttons drop.
 *
 * Small enough to be shared rather than written twice, and it carries the two
 * behaviours that are easy to forget on a hand-rolled dropdown: a click outside
 * closes it, and Escape closes it and returns focus to the button that opened it.
 * Without the second one, a keyboard reader who opens settings is stranded.
 */

import { useEffect, useRef } from "react";

export function Popover({
  open,
  onClose,
  label,
  children,
  align = "right",
  width = "w-80",
}: {
  open: boolean;
  onClose: () => void;
  label: string;
  children: React.ReactNode;
  align?: "left" | "right";
  width?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    const onPointerDown = (e: PointerEvent) => {
      const el = ref.current;
      if (!el) return;
      const target = e.target as Node;
      /* The trigger is outside this element, so it closes on its own toggle. */
      if (!el.contains(target) && !el.parentElement?.contains(target)) onClose();
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
      }
    };

    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      ref={ref}
      role="dialog"
      aria-label={label}
      className={`animate-fade-rise absolute top-[calc(100%+6px)] z-40 ${
        align === "right" ? "right-0" : "left-0"
      } ${width} max-w-[calc(100vw-1.5rem)] overflow-hidden rounded-lg border border-rule bg-ivory shadow-float`}
    >
      {children}
    </div>
  );
}
