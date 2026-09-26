import type { Metadata } from "next";
import type { SourceKind } from "@/content/types";
import { SOURCES, METHODOLOGY_NOTES } from "@/content/sources";
import { PageShell, Aside } from "@/components/shell/PageShell";

export const metadata: Metadata = {
  title: "Sources",
  description:
    "Every work this study cites, what each one is cited for, and how citations, evidence labels and dates are handled here.",
};

/*
 * Ordered deliberately rather than alphabetically. A reader checking a claim wants
 * the primary ancient texts and the archaeology near the top, because those are the
 * entries that decide whether something is attested outside the Bible. Theology and
 * reference works come last: they are where interpretation lives, not evidence.
 */
const KIND_ORDER: { kind: SourceKind; label: string; blurb: string }[] = [
  {
    kind: "scripture",
    label: "Scripture",
    blurb:
      "The two translations this study reads from, and the terms each one is used under.",
  },
  {
    kind: "primary-ancient-text",
    label: "Primary ancient texts",
    blurb:
      "Documents written in the ancient world itself. These are the only sources that can attest something independently of the biblical account.",
  },
  {
    kind: "archaeology",
    label: "Archaeology and excavation reports",
    blurb:
      "Site reports and syntheses. Where excavators disagree about a date or a layer, both are listed, because the disagreement is the finding.",
  },
  {
    kind: "journal-article",
    label: "Journal articles",
    blurb: "Individual arguments, cited for the specific claim each one makes.",
  },
  {
    kind: "atlas",
    label: "Historical atlases and geography",
    blurb:
      "Where the terrain, the routes and the proposed site identifications come from.",
  },
  {
    kind: "commentary",
    label: "Commentaries",
    blurb:
      "Chapter-level exegesis, spanning several traditions and reading strategies on purpose.",
  },
  {
    kind: "theology",
    label: "Theology and ethics",
    blurb:
      "Including positions this study does not hold, on the questions where that matters most.",
  },
  {
    kind: "reference-work",
    label: "Reference works",
    blurb: "Standard works used for cross-checking names, places and dates.",
  },
  {
    kind: "encyclopedia",
    label: "Dictionaries and encyclopedias",
    blurb: "Consulted for identification and for the range of scholarly opinion.",
  },
];

export default function SourcesPage() {
  const byKind = KIND_ORDER.map((group) => ({
    ...group,
    sources: SOURCES.filter((s) => s.kind === group.kind),
  })).filter((g) => g.sources.length > 0);

  const accounted = byKind.reduce((n, g) => n + g.sources.length, 0);

  return (
    <PageShell
      eyebrow="Apparatus"
      title="Sources and method"
      standfirst="A closed registry of every work this study leans on. Content files may only cite an entry that appears here, and a build-time check refuses anything that does not resolve. The point is blunt: it makes inventing a citation impossible to do quietly."
      wide
    >
      <section className="mt-2 space-y-4">
        {METHODOLOGY_NOTES.map((note) => (
          <Aside key={note.id} title={note.title}>
            <p>{note.body}</p>
          </Aside>
        ))}
      </section>

      <section className="mt-12">
        <div className="rule-b flex flex-wrap items-baseline justify-between gap-3 pb-2.5">
          <h2 className="font-serif text-[19px] font-semibold tracking-[-0.01em] text-charcoal">
            The registry
          </h2>
          <p className="text-[11.5px] text-ink-faint">
            {SOURCES.length} entries
            {accounted !== SOURCES.length &&
              `, ${SOURCES.length - accounted} not shown under a heading`}
          </p>
        </div>

        <div className="mt-8 space-y-11">
          {byKind.map((group) => (
            <div key={group.kind}>
              <h3 className="font-serif text-[16.5px] font-semibold text-forest">
                {group.label}
              </h3>
              <p className="mt-1 max-w-2xl text-[12.5px] leading-relaxed text-ink-soft">
                {group.blurb}
              </p>

              <ul className="mt-4 space-y-5">
                {group.sources.map((s) => (
                  <li key={s.id} className="rule-t pt-4">
                    <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                      <h4 className="font-serif text-[14.5px] leading-snug font-semibold text-charcoal">
                        {s.title}
                      </h4>
                      {s.year && (
                        <span className="shrink-0 font-sans text-[11.5px] tabular-nums text-ink-faint">
                          {s.year}
                        </span>
                      )}
                    </div>

                    <p className="mt-0.5 text-[12.5px] text-ink-soft">
                      {s.author}
                      {s.publication && (
                        <span className="text-ink-faint"> · {s.publication}</span>
                      )}
                    </p>

                    <p className="mt-1.5 max-w-3xl text-[12.5px] leading-relaxed text-charcoal">
                      {s.note}
                    </p>

                    {/*
                      Standpoint is shown wherever it is recorded. A reader weighing
                      two sources that disagree is better served knowing that one is
                      a minimalist synthesis and the other a Reformed evangelical
                      commentary than by a neutral-looking list that hides it.
                    */}
                    {s.standpoint && (
                      <p className="mt-1.5 text-[11.5px] leading-relaxed text-bronze">
                        Standpoint: {s.standpoint}
                      </p>
                    )}

                    {s.url && (
                      <a
                        href={s.url}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="mt-1.5 inline-block text-[11.5px] text-forest underline decoration-rule-strong underline-offset-2 hover:decoration-forest"
                      >
                        {s.url.replace(/^https?:\/\//, "").replace(/\/$/, "")}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <p className="mt-12 max-w-2xl text-[12px] leading-relaxed text-ink-faint">
        Links are given only where a resource is freely and stably available. Their
        absence says nothing about a source; most of these are books you would borrow
        or buy. Where a claim in this study rests on my own synthesis rather than on a
        source, it carries no citation, which is the honest signal rather than an
        oversight.
      </p>
    </PageShell>
  );
}
