"use client";

/**
 * Progressive disclosure, and the spoiler control.
 *
 * `StudySection` is the unit of the chapter panel and of every dossier, so this is
 * the component that decides what a reader meets first. Sections marked
 * `collapsedByDefault` open on request; the rest are already open. A reading
 * preference can force everything open, which is what printing and searching need.
 *
 * `Spoiler` is a different thing wearing similar clothes. Later biblical relevance
 * is hidden not because it is deeper but because knowing how the story turns out
 * changes how chapter 9 reads. The button says what is behind it, so the reader
 * chooses knowingly rather than clicking a blank.
 */

import { useId, useState } from "react";
import type { StudySection } from "@/content/types";
import { Prose, type EntityClick } from "@/components/Prose";
import { Citations, EvidenceBadges } from "./Evidence";
import { usePreferences, useStudyOptional } from "@/lib/state/preferences";
import { ScriptureRefs } from "@/components/scripture/ScriptureRefs";

export function Section({
  section,
  onEntityClick,
  headingLevel = 3,
}: {
  section: StudySection;
  onEntityClick?: EntityClick;
  headingLevel?: 2 | 3 | 4;
}) {
  const prefs = usePreferences();
  const forced = prefs.reading.expandAllSections;
  const [openedByReader, setOpenedByReader] = useState(!section.collapsedByDefault);
  const bodyId = useId();

  /*
   * Derived, not synchronised. The preference wins while it is on and hands control back
   * when it is off, which is the same shape `Spoiler` uses below for exactly the same
   * reason: one expression cannot fall out of step with the preference, whereas an
   * effect that pushed `open` to true left the reader's own choice overwritten and the
   * sections stuck open after they turned the preference off again.
   */
  const open = forced || openedByReader;

  const Heading = `h${headingLevel}` as "h2" | "h3" | "h4";
  const collapsible = Boolean(section.collapsedByDefault) && !forced;

  return (
    <section className="rule-t py-4 first:pt-0 first:[border-top-width:0]">
      {collapsible ? (
        <button
          type="button"
          onClick={() => setOpenedByReader((v) => !v)}
          aria-expanded={open}
          aria-controls={bodyId}
          className="group flex w-full items-baseline justify-between gap-3 text-left"
        >
          <Heading className="font-serif text-base font-semibold text-charcoal group-hover:text-forest">
            {section.title}
          </Heading>
          <span className="label-caps shrink-0 text-ink-faint group-hover:text-forest">
            {open ? "Close" : "Open"}
          </span>
        </button>
      ) : (
        <Heading className="font-serif text-base font-semibold text-charcoal">
          {section.title}
        </Heading>
      )}

      {open && (
        <div id={bodyId} className={collapsible ? "animate-fade-rise mt-3" : "mt-3"}>
          <Prose body={section.body} onEntityClick={onEntityClick} />
          <ScriptureRefs refs={section.scriptureRefs} className="mt-3" />
          <EvidenceBadges labels={section.evidenceLabels} className="mt-3" />
          <Citations citations={section.citations} />
        </div>
      )}
    </section>
  );
}

export function Spoiler({
  title = "Later in the biblical story",
  blurb = "This looks ahead past the book of Joshua.",
  children,
}: {
  title?: string;
  blurb?: string;
  children: React.ReactNode;
}) {
  const prefs = usePreferences();
  const store = useStudyOptional();
  const [revealed, setRevealed] = useState(false);

  /* Spoiler mode off means the reader has already decided, globally. */
  const show = !prefs.spoilerMode || revealed;

  return (
    <section className="rule-t py-4">
      <h3 className="font-serif text-base font-semibold text-charcoal">{title}</h3>

      {show ? (
        <div className="animate-fade-rise mt-3">{children}</div>
      ) : (
        <div className="mt-2 rounded border border-dashed border-rule-strong bg-ivory-deep px-3.5 py-3">
          <p className="text-[12.5px] leading-relaxed text-ink-soft">{blurb}</p>
          <div className="mt-2.5 flex flex-wrap gap-3 text-[11.5px]">
            <button
              type="button"
              onClick={() => setRevealed(true)}
              className="font-medium text-forest hover:underline"
            >
              Show it here
            </button>
            {store && (
              <button
                type="button"
                onClick={() =>
                  store.setPreferences((p) => ({ ...p, spoilerMode: false }))
                }
                className="text-ink-faint hover:text-charcoal hover:underline"
              >
                Stop hiding these everywhere
              </button>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
