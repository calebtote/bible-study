/**
 * `/stats` — the study's own visitor log, read back as a page.
 *
 * Server-rendered from `data/visits.jsonl` on every request (`connection()`
 * opts the page out of prerendering) — except in a static export, where there
 * is no server and no beacon, so the page prerenders once and says so.
 *
 * The charts keep to the study's palette: single-series bronze bars with every
 * value directly labeled, so colour never has to carry meaning on its own —
 * the six brand colours are all too muted for that job, and the labels are the
 * point anyway.
 */

import type { Metadata } from "next";
import { connection } from "next/server";
import { STATIC_EXPORT } from "@/lib/base-path";
import { readVisits, type Visit } from "@/lib/visits";
import { PageShell, Aside } from "@/components/shell/PageShell";

export const metadata: Metadata = {
  title: "Visitor stats",
  description:
    "Who has been walking through this study: visits, pages, hours and a few facts nobody needed.",
};

const DAY_NAMES = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

function browserName(ua: string): string {
  if (/bot|crawl|spider|slurp|preview/i.test(ua)) return "Bots and crawlers";
  if (/edg\//i.test(ua)) return "Edge";
  if (/firefox|fxios/i.test(ua)) return "Firefox";
  if (/chrome|crios/i.test(ua)) return "Chrome";
  if (/safari/i.test(ua)) return "Safari";
  return "Other";
}

function referrerHost(referrer: string): string | null {
  if (!referrer) return null;
  try {
    return new URL(referrer).hostname;
  } catch {
    return null;
  }
}

function count<T>(items: T[], key: (item: T) => string | null) {
  const counts = new Map<string, number>();
  for (const item of items) {
    const k = key(item);
    if (k === null) continue;
    counts.set(k, (counts.get(k) ?? 0) + 1);
  }
  return counts;
}

function top(counts: Map<string, number>, limit: number) {
  return [...counts.entries()].sort((a, b) => b[1] - a[1]).slice(0, limit);
}

/** Calendar day of a visit in the server's timezone, as YYYY-MM-DD. */
function localDay(iso: string): string {
  const d = new Date(iso);
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const dd = String(d.getDate()).padStart(2, "0");
  return `${d.getFullYear()}-${mm}-${dd}`;
}

/*
 * "Active" can only mean "seen recently": the beacon fires on page views, not
 * on presence, so a reader sitting on one chapter for ten minutes drops out of
 * the count. Five minutes is the conventional compromise. Reading the clock is
 * impure, so it lives here rather than in the component body; the page renders
 * per request (`connection()`), which is what makes "now" meaningful at all.
 */
function activeVisitorCount(visits: Visit[]): number {
  const fiveMinutesAgo = Date.now() - 5 * 60 * 1000;
  return new Set(
    visits
      .filter((v) => new Date(v.t).getTime() >= fiveMinutesAgo)
      .map((v) => v.visitor),
  ).size;
}

function longestDailyStreak(days: string[]): number {
  const unique = [...new Set(days)].sort();
  let streak = 0;
  let best = 0;
  let prev: number | null = null;
  for (const day of unique) {
    const ts = new Date(`${day}T00:00:00Z`).getTime();
    streak = prev !== null && ts - prev === 86_400_000 ? streak + 1 : 1;
    best = Math.max(best, streak);
    prev = ts;
  }
  return best;
}

function hourLabel(hour: number): string {
  const h = hour % 12 === 0 ? 12 : hour % 12;
  return `${h} ${hour < 12 ? "am" : "pm"}`;
}

function StatTile({
  label,
  value,
  note,
}: {
  label: string;
  value: string;
  note?: string;
}) {
  return (
    <div className="rounded border border-rule bg-ivory-deep px-4 py-3">
      <p className="text-[11.5px] text-ink-soft">{label}</p>
      <p className="mt-0.5 text-[26px] leading-tight font-semibold text-charcoal">
        {value}
      </p>
      {note && <p className="mt-0.5 text-[11.5px] text-ink-faint">{note}</p>}
    </div>
  );
}

function BarList({
  title,
  entries,
  total,
}: {
  title: string;
  entries: [string, number][];
  total: number;
}) {
  const max = entries[0]?.[1] ?? 1;
  return (
    <section>
      <h2 className="label-caps rule-b pb-2">{title}</h2>
      <ul className="mt-3 space-y-2.5">
        {entries.map(([label, n]) => (
          <li key={label} className="flex items-center gap-3 text-[12.5px]">
            <span className="w-2/5 truncate text-charcoal" title={label}>
              {label}
            </span>
            <span className="flex min-w-0 flex-1 items-center gap-2">
              <span
                className="h-2.5 shrink-0 rounded-r-[3px] bg-bronze"
                style={{ width: `${Math.max((n / max) * 60, 1.5)}%` }}
              />
              <span className="whitespace-nowrap tabular-nums text-ink-soft">
                {n.toLocaleString()}
                <span className="text-ink-faint">
                  {" "}
                  · {Math.round((n / total) * 100)}%
                </span>
              </span>
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default async function StatsPage() {
  /*
   * A static export has no server, no beacon, and must not bake whatever the
   * build machine's visit log held into a public bundle. It gets the honest
   * page instead, prerendered once.
   */
  if (STATIC_EXPORT) {
    return (
      <PageShell
        eyebrow="Apparatus"
        title="Visitor stats"
        standfirst="Who has been walking through this study. No cookies and no identities: each view stores a timestamp, a path, and an anonymous hash — never an address."
      >
        <div className="mt-6">
          <Aside title="This build cannot count" tone="neutral">
            <p>
              This is a static deployment, so there is no server to receive
              visits. Run the study with <code>npm run build</code> and{" "}
              <code>npm start</code> and this page comes alive.
            </p>
          </Aside>
        </div>
      </PageShell>
    );
  }

  await connection();
  const visits = await readVisits();

  if (visits.length === 0) {
    return (
      <PageShell
        eyebrow="Apparatus"
        title="Visitor stats"
        standfirst="Who has been walking through this study. No cookies and no identities: each view stores a timestamp, a path, and an anonymous hash — never an address."
      >
        <p className="mt-6 text-[13.5px] leading-relaxed text-ink-soft">
          Nothing recorded yet. Walk through a few pages of the study and come
          back — every page view lands here.
        </p>
      </PageShell>
    );
  }

  const uniqueVisitors = new Set(visits.map((v) => v.visitor)).size;
  const activeNow = activeVisitorCount(visits);
  const days = visits.map((v) => localDay(v.t));
  const today = localDay(new Date().toISOString());
  const visitsToday = days.filter((d) => d === today).length;
  const activeDays = new Set(days).size;
  const streak = longestDailyStreak(days);

  const busiestHour = top(
    count(visits, (v) => String(new Date(v.t).getHours())),
    1,
  )[0];
  const busiestDay = top(
    count(visits, (v) => DAY_NAMES[new Date(v.t).getDay()]),
    1,
  )[0];

  const nightOwls = visits.filter((v) => {
    const h = new Date(v.t).getHours();
    return h >= 22 || h < 5;
  }).length;
  const weekend = visits.filter((v) => {
    const d = new Date(v.t).getDay();
    return d === 0 || d === 6;
  }).length;
  const topVisitor = top(count(visits, (v) => v.visitor), 1)[0];

  const first = new Date(visits[0].t);
  const pct = (n: number) => `${Math.round((n / visits.length) * 100)}%`;

  return (
    <PageShell
      eyebrow="Apparatus"
      title="Visitor stats"
      standfirst={`Who has been walking through this study since ${first.toLocaleDateString(
        "en-US",
        { month: "long", day: "numeric", year: "numeric" },
      )}. No cookies and no identities: each view stores a timestamp, a path, and an anonymous hash — never an address.`}
      wide
    >
      <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
        <StatTile label="Total visits" value={visits.length.toLocaleString()} />
        <StatTile
          label="Unique visitors"
          value={uniqueVisitors.toLocaleString()}
        />
        <StatTile
          label="Active now"
          value={activeNow.toLocaleString()}
          note="seen in the last 5 minutes"
        />
        <StatTile label="Visits today" value={visitsToday.toLocaleString()} />
        <StatTile
          label="Busiest hour"
          value={hourLabel(Number(busiestHour[0]))}
          note={`${busiestHour[1].toLocaleString()} visits`}
        />
        <StatTile
          label="Busiest day"
          value={busiestDay[0]}
          note={`${busiestDay[1].toLocaleString()} visits`}
        />
        <StatTile
          label="Longest streak"
          value={`${streak} day${streak === 1 ? "" : "s"}`}
          note={`visited on ${activeDays} day${activeDays === 1 ? "" : "s"} in all`}
        />
      </div>

      <div className="mt-12 space-y-10">
        <BarList
          title="Most visited pages"
          entries={top(count(visits, (v) => v.path), 6)}
          total={visits.length}
        />
        <BarList
          title="Browsers"
          entries={top(count(visits, (v) => browserName(v.ua)), 6)}
          total={visits.length}
        />
        <BarList
          title="Arrived from"
          entries={top(count(visits, (v) => referrerHost(v.referrer)), 6)}
          total={visits.length}
        />
      </div>

      <section className="mt-12">
        <h2 className="label-caps rule-b pb-2">Facts nobody needed</h2>
        <ul className="mt-3 space-y-1.5 text-[13px] leading-relaxed text-ink-soft">
          <li>
            {pct(nightOwls)} of visits happen between 10 pm and 5 am — night-owl
            reading.
          </li>
          <li>{pct(weekend)} of visits fall on a weekend.</li>
          <li>
            The most devoted visitor has stopped by{" "}
            {topVisitor[1].toLocaleString()} time
            {topVisitor[1] === 1 ? "" : "s"}.
          </li>
          <li>
            That averages {(visits.length / activeDays).toFixed(1)} visits per
            active day.
          </li>
        </ul>
      </section>

      <p className="mt-12 text-[12px] leading-relaxed text-ink-faint">
        Counted from a plain file on the server, so hours and days follow its
        clock. Direct visits carry no referrer, so &ldquo;Arrived from&rdquo;
        only counts arrivals that had one.
      </p>
    </PageShell>
  );
}
