"use client";

/**
 * Evidence labels and citations.
 *
 * These two components are the study's promise to the reader made visible. The
 * labels say what kind of claim a passage is making, and the citations say which
 * source is being leaned on and for exactly what. Both are small and quiet by
 * design: they sit at the foot of a section, legible but not shouting, because a
 * study that makes its apparatus loud teaches the reader to skip it.
 *
 * Labels coexist. A section can be a biblical account and externally attested at
 * once, and nothing here reduces a set of labels to a single verdict.
 */

import { useState } from "react";
import type { Citation, EvidenceLabel } from "@/content/types";
import { EVIDENCE_LABELS } from "@/content/types";
import { SOURCE_BY_ID, shortCitation } from "@/content/sources";
import { usePreferences } from "@/lib/state/preferences";

const LABEL_TONE: Record<EvidenceLabel, string> = {
  "biblical-account": "border-rule text-ink-soft",
  "externally-attested": "border-forest/35 text-forest",
  reconstruction: "border-bronze/45 text-bronze",
  disputed: "border-terracotta/45 text-terracotta",
  "theological-interpretation": "border-water/50 text-[#4F7385]",
};

export function EvidenceBadges({
  labels,
  className,
}: {
  labels: EvidenceLabel[] | undefined;
  className?: string;
}) {
  const prefs = usePreferences();
  if (!prefs.reading.showEvidenceLabels) return null;
  if (!labels?.length) return null;

  return (
    <ul className={`flex flex-wrap gap-1.5 ${className ?? ""}`}>
      {labels.map((l) => (
        <li key={l}>
          <span
            className={`inline-block rounded-sm border px-1.5 py-0.5 text-[10px] font-medium tracking-[0.06em] uppercase ${LABEL_TONE[l]}`}
            title={EVIDENCE_LABELS[l].description}
          >
            {EVIDENCE_LABELS[l].label}
          </span>
        </li>
      ))}
    </ul>
  );
}

/**
 * Citations, collapsed to a count until asked for.
 *
 * Every entry names the claim it supports rather than sitting at the end of a
 * paragraph as an unattached number. A reader who wants to know which of four
 * sentences a source is answering for can see it without opening the book.
 */
export function Citations({
  citations,
  className,
}: {
  citations: Citation[] | undefined;
  className?: string;
}) {
  const [open, setOpen] = useState(false);
  if (!citations?.length) return null;

  return (
    <div className={`mt-3 ${className ?? ""}`}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="label-caps text-ink-faint transition-colors hover:text-forest"
        aria-expanded={open}
      >
        {open ? "Hide sources" : `${citations.length} source${citations.length === 1 ? "" : "s"}`}
      </button>

      {open && (
        <ol className="mt-2 space-y-2 border-l border-rule pl-3">
          {citations.map((c, i) => {
            const source = SOURCE_BY_ID[c.sourceId];
            return (
              <li key={`${c.sourceId}-${i}`} className="text-[11.5px] leading-snug">
                <span className="block text-charcoal">
                  {source ? shortCitation(c.sourceId) : c.sourceId}
                  {c.locator ? `, ${c.locator}` : ""}
                </span>
                <span className="mt-0.5 block text-ink-soft">
                  Cited for: {c.supportedClaim}
                </span>
                {source?.standpoint && (
                  <span className="mt-0.5 block text-ink-faint">
                    Standpoint: {source.standpoint}
                  </span>
                )}
                {source?.url && (
                  <a
                    href={source.url}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="mt-0.5 inline-block text-forest underline decoration-rule-strong underline-offset-2 hover:decoration-forest"
                  >
                    Source record
                  </a>
                )}
              </li>
            );
          })}
        </ol>
      )}
    </div>
  );
}
