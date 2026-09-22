"use client";

/**
 * A passage, set as a study Bible would set it.
 *
 * Verse numbers are small, raised and bronze, sitting inside the text rather than
 * hanging off it, so the eye reads sentences and finds numbers when it wants them.
 * The text itself is the serif, because it is the thing being studied; everything
 * around it stays in the sans.
 *
 * Which translation is on screen is always named. That is partly a licence
 * requirement for the ESV and partly a study requirement for both: a reader
 * comparing the panel's quoted phrase against the passage needs to know whether a
 * difference in wording is a difference in translation.
 */

import { useEffect, useState } from "react";
import {
  loadPassage,
  type Passage as PassageData,
  type PassageResult,
} from "@/lib/scripture/passage";
import { usePreferences } from "@/lib/state/preferences";

type State =
  | { phase: "loading" }
  | { phase: "done"; result: PassageResult };

export function usePassage(raw: string | null): State {
  const prefs = usePreferences();
  const preferred = prefs.scripture.preferred;

  /*
   * A resolved passage is stored with the request that asked for it, and "loading" is
   * what a mismatch means rather than a state anyone sets. Holding a bare phase instead
   * left one render, every time the reference or the translation changed, in which the
   * previous passage was still on screen underneath the new heading: Joshua 6 verses
   * captioned Joshua 7, until the effect caught up. Comparing keys cannot show that,
   * because the only thing it will display is a result fetched for what is being asked
   * for now.
   */
  const key = `${preferred}::${raw ?? ""}`;
  const [done, setDone] = useState<{ key: string; result: PassageResult } | null>(null);

  useEffect(() => {
    if (!raw) return;
    let live = true;
    loadPassage(raw, preferred).then((result) => {
      if (live) setDone({ key, result });
    });
    return () => {
      live = false;
    };
  }, [raw, preferred, key]);

  return done?.key === key ? { phase: "done", result: done.result } : { phase: "loading" };
}

export function Passage({
  reference,
  className,
  showReference = true,
}: {
  reference: string;
  className?: string;
  showReference?: boolean;
}) {
  const state = usePassage(reference);

  if (state.phase === "loading") {
    return (
      <div className={`py-2 ${className ?? ""}`}>
        <p className="text-[12px] text-ink-faint">Loading {reference}…</p>
      </div>
    );
  }

  const { result } = state;

  if (result.status !== "ok") {
    /*
     * Every non-success path here is a sentence the reader can act on, not a
     * blank space. An unreadable reference, a book the bundle does not carry and
     * a verse range that overruns its chapter are three different problems and
     * are reported as three different problems.
     */
    return (
      <div
        className={`rounded border border-dashed border-rule-strong bg-ivory-deep px-3.5 py-3 ${className ?? ""}`}
      >
        <p className="text-[12.5px] leading-relaxed text-ink-soft">{result.message}</p>
      </div>
    );
  }

  return (
    <PassageBody
      passage={result.passage}
      className={className}
      showReference={showReference}
    />
  );
}

export function PassageBody({
  passage,
  className,
  showReference = true,
}: {
  passage: PassageData;
  className?: string;
  showReference?: boolean;
}) {
  return (
    <figure
      className={`border-l-2 border-bronze/40 pl-4 ${className ?? ""}`}
    >
      {showReference && (
        <figcaption className="label-caps mb-1.5 text-bronze">
          {passage.ref.display}
        </figcaption>
      )}

      <div className="prose-study text-[0.98em]">
        <p>
          {passage.verses.map((v, i) => (
            <span key={v.v}>
              {i > 0 && " "}
              <sup className="mr-0.5 font-sans text-[0.62em] font-medium text-bronze select-none">
                {v.v}
              </sup>
              {v.t}
            </span>
          ))}
        </p>
      </div>

      {passage.fellBackFrom === "esv" && (
        <p className="mt-2 text-[11px] leading-snug text-ink-faint">
          Shown in the {passage.translation}. {passage.fallbackReason}
        </p>
      )}

      <p className="mt-2 text-[11px] text-ink-faint">
        {passage.translation}
        {!passage.attribution && passage.translationId === "web" && ", public domain"}
      </p>

      {passage.attribution && (
        <p className="mt-1 text-[10.5px] leading-snug text-ink-faint">
          {passage.attribution}
        </p>
      )}
    </figure>
  );
}
