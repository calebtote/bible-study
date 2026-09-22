"use client";

/**
 * The row of references under a section, and the passage behind them.
 *
 * Every claim in this study carries the references it rests on, which creates a
 * design problem: a reader who has to leave the page to check a reference will stop
 * checking references. So the reference is a control, and the passage opens in place.
 *
 * One at a time. Opening a second reference closes the first, because a section
 * followed by six stacked passages buries the section. The reference that is open
 * stays visibly open so the reader knows where they are.
 *
 * A reference that cannot be parsed is still shown, as plain text rather than a
 * button. A dead control that looks live is worse than a label.
 */

import { useState } from "react";
import { parseRef } from "@/lib/scripture/reference";
import { Passage } from "./Passage";

export function ScriptureRefs({
  refs,
  className,
  label = "Read",
}: {
  refs: string[] | undefined;
  className?: string;
  /** Overridden where the surrounding context needs a different verb. */
  label?: string;
}) {
  const [open, setOpen] = useState<string | null>(null);
  if (!refs?.length) return null;

  return (
    <div className={className}>
      <ul className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
        <li className="label-caps text-ink-faint" aria-hidden>
          {label}
        </li>
        {refs.map((raw) => {
          const parsed = parseRef(raw);
          const isOpen = open === raw;

          if (!parsed) {
            return (
              <li key={raw} className="text-[11.5px] text-ink-faint">
                {raw}
              </li>
            );
          }

          return (
            <li key={raw}>
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : raw)}
                aria-expanded={isOpen}
                className={`rounded-sm px-1.5 py-0.5 text-[11.5px] font-medium transition-colors ${
                  isOpen
                    ? "bg-bronze-wash text-bronze"
                    : "text-forest hover:bg-forest-wash"
                }`}
              >
                {parsed.display}
              </button>
            </li>
          );
        })}
      </ul>

      {open && (
        <Passage
          reference={open}
          className="animate-fade-rise mt-3"
          showReference={false}
        />
      )}
    </div>
  );
}

/**
 * A single reference rendered inline in running prose.
 *
 * Used where a reference belongs to one sentence rather than to a whole section,
 * such as a relationship note in a dossier.
 */
export function ScriptureRef({ reference }: { reference: string }) {
  const [open, setOpen] = useState(false);
  const parsed = parseRef(reference);

  if (!parsed) return <span className="text-ink-faint">{reference}</span>;

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="text-forest underline decoration-rule-strong underline-offset-2 hover:decoration-forest"
      >
        {parsed.display}
      </button>
      {open && (
        <Passage
          reference={reference}
          className="animate-fade-rise mt-2 mb-1"
          showReference={false}
        />
      )}
    </>
  );
}
