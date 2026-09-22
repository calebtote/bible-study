import Link from "next/link";
import { PageShell, Aside } from "@/components/shell/PageShell";
import { JourneyStart } from "@/components/shell/JourneyStart";
import {
  AVAILABLE_CHAPTER_COUNT,
  TOTAL_CHAPTERS,
  TOTAL_MILESTONES,
  MISSING_CHAPTER_NUMBERS,
} from "@/content/chapters";
import { THEMES } from "@/content/themes";
import { DIFFICULT_QUESTIONS } from "@/content/difficult-questions";
import { BEFORE_STAGES } from "@/content/before-joshua";
import { PROFILES } from "@/content/people/profiles";
import { SOURCES } from "@/content/sources";
import { ALL_ENTITIES } from "@/content/entities";

/*
 * The six questions in `ORIENTS` are the brief's own test for the product, and
 * putting them on the front page is a commitment rather than decoration: every
 * milestone in the study is supposed to answer all six.
 */
const ORIENTS: { q: string; a: string }[] = [
  {
    q: "Where are we?",
    a: "A map built from bundled geography, not a stock basemap, showing the ground each episode happened on and how far it is from the last one.",
  },
  {
    q: "What is happening?",
    a: "The chapter walked through beat by beat, with the text itself a click away in the English Standard Version or the bundled World English Bible.",
  },
  {
    q: "What brought us here?",
    a: "Every chapter carries the prior narrative it depends on, because Joshua 14 is unreadable without Numbers 13.",
  },
  {
    q: "Who are these people?",
    a: "Dossiers that keep a city, its ruler, an alliance, a people group and a region as five different kinds of thing.",
  },
  {
    q: "What was their world like?",
    a: "The Egyptian empire, the city-state system, the terrain and the routes, drawn from records outside the Bible and labelled as such.",
  },
  {
    q: "Why does this matter?",
    a: "Where the chapter sits in the biblical story, with Reformed readings named as Reformed rather than presented as the plain sense.",
  },
];

const ROUTES: { href: string; title: string; blurb: string; count: string }[] = [
  {
    href: "/before-joshua",
    title: "Before Joshua",
    blurb:
      "How Israel arrived at the Jordan, from the promise to Abraham to the plains of Moab, and what the world around Canaan looked like at Joshua 1.",
    count: `${BEFORE_STAGES.length} stages`,
  },
  {
    href: "/people",
    title: "People",
    blurb:
      "Joshua, Caleb, Rahab, Achan, Achsah, Othniel and the rest, each on a timeline that marks where the text fixes the order and where it does not.",
    count: `${PROFILES.length} profiles`,
  },
  {
    href: "/themes",
    title: "Themes and difficult questions",
    blurb:
      "The threads that run the length of the book, and the seven places where honest readers get stuck, argued rather than smoothed over.",
    count: `${THEMES.length} themes, ${DIFFICULT_QUESTIONS.length} questions`,
  },
  {
    href: "/sources",
    title: "Sources",
    blurb:
      "Every work this study leans on, what each one is cited for, and a plain account of how citations and dates are handled here.",
    count: `${SOURCES.length} sources`,
  },
  {
    href: "/notebook",
    title: "Notebook",
    blurb:
      "Your notes, bookmarks and progress, held in this browser and nowhere else, with export and import so they are yours to move.",
    count: "Local only",
  },
];

export default function Home() {
  const missing = MISSING_CHAPTER_NUMBERS;

  return (
    <PageShell
      eyebrow="An interactive study"
      title="Joshua: The Journey into the Land"
      standfirst="Twenty-four chapters of conquest, failure, boundary lists and covenant, set on the ground where they happened and in the world that surrounded them. Read it as a story that unfolds in real geography, and see plainly where the evidence runs out."
    >
      <JourneyStart />

      <section className="mt-12">
        <h2 className="font-serif text-[19px] font-semibold tracking-[-0.01em] text-charcoal">
          What this study tries to answer
        </h2>
        <dl className="mt-4 space-y-4">
          {ORIENTS.map((o) => (
            <div key={o.q} className="rule-t pt-4 first:[border-top-width:0] first:pt-0">
              <dt className="font-serif text-[15px] font-semibold text-forest">{o.q}</dt>
              <dd className="mt-1 text-[13.5px] leading-relaxed text-ink-soft">{o.a}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="mt-12">
        <h2 className="font-serif text-[19px] font-semibold tracking-[-0.01em] text-charcoal">
          What the map will not do
        </h2>
        <div className="mt-3 space-y-3 text-[13.5px] leading-relaxed text-ink-soft">
          <p>
            Most maps of Joshua show a tide of colour spreading across Canaan until
            the page is full. That is not what the book describes, and it is the
            single most misleading thing a map of this material can do.
          </p>
          <p>
            Beating a king in the field, burning a city, being assigned a territory,
            and actually living on it are four different things, and Joshua keeps them
            apart. Chapter 12 lists thirty-one defeated kings. Chapter 13 opens by
            saying much land remains unpossessed. Chapter 15 gives Judah a boundary
            and then admits Jerusalem stayed in other hands. Chapter 17 assigns
            Manasseh the Jezreel corridor and then says the valley towns were never
            taken.
          </p>
          <p>
            So the layers here stay separate: where a victory happened, what was
            allotted, and what was still unheld. Approximate areas are labelled as
            approximate. Where a place cannot be located, the map says the location is
            not asserted instead of putting a dot somewhere plausible.
          </p>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-serif text-[19px] font-semibold tracking-[-0.01em] text-charcoal">
          The rest of the study
        </h2>
        <ul className="mt-4 space-y-3">
          {ROUTES.map((r) => (
            <li key={r.href}>
              <Link
                href={r.href}
                className="group block rounded border border-rule bg-ivory px-4 py-3.5 transition-colors hover:border-bronze/60 hover:bg-bronze-wash/40"
              >
                <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
                  <h3 className="font-serif text-[15.5px] font-semibold text-charcoal group-hover:text-bronze">
                    {r.title}
                  </h3>
                  <span className="label-caps shrink-0 text-ink-faint">{r.count}</span>
                </div>
                <p className="mt-1.5 text-[13px] leading-relaxed text-ink-soft">
                  {r.blurb}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-12 space-y-4">
        <h2 className="font-serif text-[19px] font-semibold tracking-[-0.01em] text-charcoal">
          Honest limits
        </h2>

        {missing.length > 0 && (
          <Aside title="Not every chapter is written yet" tone="caution">
            <p>
              {AVAILABLE_CHAPTER_COUNT} of {TOTAL_CHAPTERS} chapters are authored, with{" "}
              {TOTAL_MILESTONES} mapped milestones between them. Still to come:{" "}
              {missing.join(", ")}. Those chapters appear in the rail as not yet
              available rather than being hidden, so you can see the gap instead of
              wondering whether you mis-clicked.
            </p>
          </Aside>
        )}

        <Aside title="What identification does and does not prove">
          <p>
            {ALL_ENTITIES.length} places, people, peoples and regions have records here.
            Many of the sites are securely identified, some are disputed, and a few are
            simply unknown. Identifying a mound as Jericho places the name; it does not
            confirm any event the text describes there, and a destruction layer does not
            arrive with a signature. Those two claims are kept apart everywhere in this
            study.
          </p>
        </Aside>

        <Aside title="Joshua and later violence" tone="caution">
          <p>
            These chapters have been used to justify conquest and displacement,
            including against indigenous peoples and in modern territorial conflict.
            This study treats the campaigns as a bounded episode inside the biblical
            narrative and does not treat them as authorisation for anyone&apos;s
            violence now. That is said on the pages where it arises rather than left
            to inference.
          </p>
        </Aside>
      </section>

      <p className="mt-10 text-[12px] leading-relaxed text-ink-faint">
        No account, no sign-in, and nothing sent anywhere. Notes and progress stay in
        this browser until you export them.
      </p>
    </PageShell>
  );
}
