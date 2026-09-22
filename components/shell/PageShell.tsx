/**
 * The reading-width shell for every route that is not the study screen.
 *
 * The study screen is three panes fighting for space. These pages are the
 * opposite: one column, wide margins, and nothing competing with the prose. The
 * measure is capped near 68 characters because that is where a serif text face
 * stops being comfortable, and the generous top space exists so the page opens
 * on a title rather than on a wall.
 *
 * `eyebrow` is the small caps line above the title. It is doing navigational
 * work, not decorative work: a reader arriving from a shared link needs to know
 * which part of the study they have landed in before they read anything else.
 */

export function PageShell({
  eyebrow,
  title,
  standfirst,
  children,
  wide = false,
  aside,
}: {
  eyebrow?: string;
  title: string;
  standfirst?: string;
  children: React.ReactNode;
  /** Wider measure, for pages that hold lists and tables rather than prose. */
  wide?: boolean;
  /** Controls that belong beside the title rather than in the flow. */
  aside?: React.ReactNode;
}) {
  return (
    <div className="quiet-scroll h-[calc(100dvh-3rem)] overflow-y-auto">
      <div
        className={`mx-auto px-5 pt-10 pb-24 sm:px-8 ${wide ? "max-w-5xl" : "max-w-2xl"}`}
      >
        <header className="rule-b pb-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div className="min-w-0">
              {eyebrow && <p className="label-caps text-bronze">{eyebrow}</p>}
              <h1 className="mt-1.5 font-serif text-[30px] leading-[1.15] font-semibold tracking-[-0.015em] text-charcoal sm:text-[34px]">
                {title}
              </h1>
            </div>
            {aside && <div className="shrink-0">{aside}</div>}
          </div>
          {standfirst && (
            <p className="mt-3 max-w-xl font-serif text-[15.5px] leading-relaxed text-ink-soft">
              {standfirst}
            </p>
          )}
        </header>
        {children}
      </div>
    </div>
  );
}

/**
 * A quiet framed block for the thing on a page that must not be skimmed past:
 * a limitation, a caution, a note about what the evidence does not show.
 */
export function Aside({
  title,
  tone = "neutral",
  children,
}: {
  title?: string;
  tone?: "neutral" | "caution";
  children: React.ReactNode;
}) {
  const tones = {
    neutral: "border-rule bg-ivory-deep",
    caution: "border-terracotta/35 bg-terracotta-wash",
  } as const;

  return (
    <div className={`rounded border px-4 py-3 ${tones[tone]}`}>
      {title && (
        <h3
          className={`font-serif text-[13.5px] font-semibold ${
            tone === "caution" ? "text-terracotta" : "text-charcoal"
          }`}
        >
          {title}
        </h3>
      )}
      <div
        className={`text-[12.5px] leading-relaxed ${title ? "mt-1.5" : ""} ${
          tone === "caution" ? "text-terracotta" : "text-ink-soft"
        }`}
      >
        {children}
      </div>
    </div>
  );
}
