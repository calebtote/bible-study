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
import { RefPopover } from "./RefPopover";

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
 * A single reference rendered inline in running prose, such as a relationship
 * note in a dossier. The verses open in a popover beside the reference, so a
 * glance at the passage never disturbs the sentence it belongs to.
 */
export function ScriptureRef({ reference }: { reference: string }) {
  const parsed = parseRef(reference);

  if (!parsed) return <span className="text-ink-faint">{reference}</span>;

  return <RefPopover refText={reference}>{parsed.display}</RefPopover>;
}
