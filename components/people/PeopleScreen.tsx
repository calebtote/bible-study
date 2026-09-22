"use client";

/**
 * The character explorer.
 *
 * A profile answers "who is this" for someone who has met the name mid-chapter and
 * has no idea why it matters. The hard editorial constraint is that Joshua gives us
 * very little biography: no ages for most figures, almost no interior motive, and
 * nothing at all about several people who act decisively once and vanish. So each
 * profile carries an explicit list of what the text does not tell us, and that list
 * is displayed rather than tucked away. A silent gap reads as a complete account.
 *
 * The timeline is the other half. It orders events by narrative sequence, never by
 * date, and it marks each event with how firmly the text fixes its position: stated
 * outright, reasonably inferred, or simply not fixed. Drawing all three the same way
 * would manufacture a chronology the book does not offer.
 */

import { useCallback, useEffect, useMemo, useRef } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import type { PersonProfile, SequenceCertainty, TimelineEvent } from "@/content/types";
import { PROFILES, PROFILE_BY_ENTITY_ID } from "@/content/people/profiles";
import { TIMELINE_EVENT_BY_ID } from "@/content/people/timeline";
import { ENTITY_BY_ID } from "@/content/entities";
import { THEME_BY_ID } from "@/content/themes";
import { MILESTONE_BY_ID } from "@/content/chapters";
import { BEFORE_STAGE_BY_ID } from "@/content/before-joshua";
import { Prose } from "@/components/Prose";
import { Citations } from "@/components/ui/Evidence";
import { Spoiler } from "@/components/ui/Disclosure";
import { ScriptureRefs } from "@/components/scripture/ScriptureRefs";
import { BookmarkButton } from "@/components/shell/BookmarksPanel";
import { usePreferences } from "@/lib/state/preferences";
import { entityHref, studyHref } from "@/lib/state/study-url";

const ERA_LABELS: Record<TimelineEvent["era"], string> = {
  patriarchs: "The patriarchs",
  egypt: "Egypt",
  exodus: "The exodus",
  wilderness: "The wilderness",
  transjordan: "East of the Jordan",
  joshua: "The book of Joshua",
  "after-joshua": "After Joshua",
};

const CERTAINTY: Record<
  SequenceCertainty,
  { label: string; note: string; dot: string; line: string }
> = {
  "explicit-sequence": {
    label: "Order stated",
    note: "The text says where this falls in the sequence.",
    dot: "bg-forest border-forest",
    line: "border-solid border-forest/35",
  },
  "inferred-sequence": {
    label: "Order inferred",
    note: "A reasonable reading of the sequence, not a statement of it.",
    dot: "bg-ivory border-bronze",
    line: "border-dashed border-bronze/45",
  },
  undated: {
    label: "Not placed",
    note: "The text does not fix when this happened.",
    dot: "bg-ivory border-rule-strong",
    line: "border-dotted border-rule-strong",
  },
};

export function PeopleScreen() {
  const router = useRouter();
  const params = useSearchParams();
  const detail = useRef<HTMLDivElement>(null);

  const rawPerson = params.get("person");
  const profile = rawPerson ? PROFILE_BY_ENTITY_ID[rawPerson] : undefined;
  const corrected = Boolean(rawPerson) && profile === undefined;

  const select = useCallback(
    (entityId: string | null) => {
      router.replace(entityId ? `/people?person=${entityId}` : "/people", {
        scroll: false,
      });
    },
    [router]
  );

  useEffect(() => {
    if (!profile) return;
    if (window.matchMedia("(min-width: 1024px)").matches) return;
    detail.current?.scrollIntoView({
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "auto"
        : "smooth",
      block: "start",
    });
  }, [profile]);

  const openEntity = useCallback(
    (id: string) => {
      /* A profiled person stays on this page; anyone else opens in the study. */
      if (PROFILE_BY_ENTITY_ID[id]) select(id);
      else router.push(entityHref(id));
    },
    [router, select]
  );

  return (
    <div className="lg:grid lg:grid-cols-[228px_minmax(0,1fr)] lg:gap-10">
      <nav
        aria-label="People"
        className="quiet-scroll lg:sticky lg:top-4 lg:max-h-[calc(100dvh-6rem)] lg:self-start lg:overflow-y-auto lg:pr-1"
      >
        {corrected && (
          <p className="mb-4 rounded border border-terracotta/35 bg-terracotta-wash px-3 py-2 text-[11.5px] leading-relaxed text-terracotta">
            That link named someone without a profile here.
          </p>
        )}
        <ul className="space-y-0.5">
          {PROFILES.map((p) => {
            const entity = ENTITY_BY_ID[p.entityId];
            const active = profile?.entityId === p.entityId;
            return (
              <li key={p.entityId}>
                <button
                  type="button"
                  onClick={() => select(p.entityId)}
                  aria-current={active ? "true" : undefined}
                  className={`w-full rounded px-2.5 py-2 text-left transition-colors ${
                    active ? "bg-bronze-wash" : "hover:bg-ivory-deep"
                  }`}
                >
                  <span
                    className={`block font-serif text-[14px] leading-snug ${
                      active ? "font-semibold text-bronze" : "text-charcoal"
                    }`}
                  >
                    {entity?.name ?? p.entityId}
                  </span>
                  <span className="mt-0.5 block text-[11px] leading-snug text-ink-faint">
                    {p.identity}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
        <p className="mt-5 text-[11px] leading-relaxed text-ink-faint">
          Curated profiles only. Many more names appear in the book, and every one of
          them has a record you can open from the chapter it occurs in.
        </p>
      </nav>

      <div ref={detail} className="mt-10 min-w-0 lg:mt-0">
        {profile ? (
          <ProfileDetail profile={profile} onEntityClick={openEntity} />
        ) : (
          <Empty />
        )}
      </div>
    </div>
  );
}

function Empty() {
  return (
    <div className="rounded border border-dashed border-rule-strong bg-ivory-deep px-6 py-10">
      <p className="max-w-md font-serif text-[15px] leading-relaxed text-ink-soft">
        Choose a name. Each profile carries what the text says this person did, the
        consequences it records, and a plain list of what it never tells us.
      </p>
      <p className="mt-3 max-w-md text-[12.5px] leading-relaxed text-ink-faint">
        Nothing here is filled in from imagination. Where Joshua gives no age, no
        motive and no ending, the profile says so instead of supplying one.
      </p>
    </div>
  );
}

function ProfileDetail({
  profile,
  onEntityClick,
}: {
  profile: PersonProfile;
  onEntityClick: (id: string) => void;
}) {
  const prefs = usePreferences();
  const entity = ENTITY_BY_ID[profile.entityId];
  const name = entity?.name ?? profile.entityId;

  const events = useMemo(() => {
    const resolved = profile.timelineEventIds
      .map((id) => TIMELINE_EVENT_BY_ID[id])
      .filter(Boolean);
    const visible = prefs.spoilerMode ? resolved.filter((e) => !e.spoiler) : resolved;
    return [...visible].sort((a, b) => a.narrativeOrder - b.narrativeOrder);
  }, [profile.timelineEventIds, prefs.spoilerMode]);

  const hiddenCount = prefs.spoilerMode
    ? profile.timelineEventIds
        .map((id) => TIMELINE_EVENT_BY_ID[id])
        .filter((e) => e?.spoiler).length
    : 0;

  const places = profile.placeEntityIds.map((id) => ENTITY_BY_ID[id]).filter(Boolean);
  const themes = profile.themeIds.map((id) => THEME_BY_ID[id]).filter(Boolean);

  return (
    <article className="animate-fade-rise" key={profile.entityId}>
      <header className="rule-b pb-5">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div className="min-w-0">
            <p className="label-caps text-bronze">Profile</p>
            <h2 className="mt-1 font-serif text-[27px] leading-tight font-semibold tracking-[-0.014em] text-charcoal">
              {name}
            </h2>
            <p className="mt-1.5 font-serif text-[15px] leading-relaxed text-ink-soft">
              {profile.identity}
            </p>
          </div>
          <BookmarkButton
            kind="person"
            targetId={profile.entityId}
            label={name}
            href={`/people?person=${profile.entityId}`}
            className="shrink-0"
          />
        </div>

        {entity?.alternateNames && entity.alternateNames.length > 0 && (
          <p className="mt-2.5 text-[12px] text-ink-faint">
            Also called {entity.alternateNames.join(", ")}
          </p>
        )}

        <div className="mt-4 flex flex-wrap gap-2">
          <Link
            href={entityHref(profile.entityId)}
            className="rounded border border-rule-strong px-3 py-1.5 text-[12px] font-medium text-charcoal transition-colors hover:border-forest hover:bg-forest-wash hover:text-forest"
          >
            Open on the map
          </Link>
        </div>
      </header>

      <Block title="Background">
        <Prose body={profile.background} onEntityClick={onEntityClick} />
      </Block>

      <Block title="What they did, and what followed">
        <Prose body={profile.actionsAndConsequences} onEntityClick={onEntityClick} />
      </Block>

      <Block title="Why the book keeps them in view">
        <Prose body={profile.significance} onEntityClick={onEntityClick} />
        <ScriptureRefs refs={profile.scriptureRefs} className="mt-3.5" />
        <Citations citations={profile.citations} />
      </Block>

      {profile.relationships.length > 0 && (
        <Block title="Relationships">
          <p className="mb-2.5 text-[11.5px] leading-relaxed text-ink-faint">
            Only ties the text states, or marks here as inferred.
          </p>
          <ul className="space-y-2">
            {profile.relationships.map((r, i) => {
              const target = ENTITY_BY_ID[r.targetEntityId];
              return (
                <li key={`${r.kind}-${r.targetEntityId}-${i}`} className="text-[12.5px] leading-relaxed">
                  <span className="label-caps text-ink-faint">{r.kind}</span>{" "}
                  {target ? (
                    <button
                      type="button"
                      onClick={() => onEntityClick(r.targetEntityId)}
                      className="font-medium text-forest hover:underline"
                    >
                      {target.name}
                    </button>
                  ) : (
                    <span className="font-medium text-charcoal">{r.targetEntityId}</span>
                  )}
                  {r.inferred && (
                    <span className="ml-1.5 rounded-sm bg-bronze-wash px-1 py-px text-[10px] text-bronze">
                      inferred
                    </span>
                  )}
                  {r.note && <span className="text-ink-soft"> — {r.note}</span>}
                  {r.scriptureRefs && r.scriptureRefs.length > 0 && (
                    <ScriptureRefs refs={r.scriptureRefs} className="mt-1.5" label="See" />
                  )}
                </li>
              );
            })}
          </ul>
        </Block>
      )}

      {events.length > 0 && (
        <section className="rule-t py-5">
          <h3 className="font-serif text-[16.5px] font-semibold text-charcoal">
            Where they appear
          </h3>
          <p className="mt-1 text-[12px] leading-relaxed text-ink-faint">
            Narrative order, not dates. The marker on each event says how firmly the
            text fixes its place in the sequence.
          </p>

          <Legend />
          <Timeline events={events} />

          {hiddenCount > 0 && (
            <p className="mt-3 text-[11.5px] leading-relaxed text-ink-faint">
              {hiddenCount} later event{hiddenCount === 1 ? "" : "s"} hidden by spoiler
              mode. Turn it off in settings to see what happens to this person after
              Joshua.
            </p>
          )}
        </section>
      )}

      {profile.whatWeAreNotTold && profile.whatWeAreNotTold.length > 0 && (
        <section className="rule-t py-5">
          <h3 className="font-serif text-[16.5px] font-semibold text-charcoal">
            What we are not told
          </h3>
          <p className="mt-1 text-[12px] leading-relaxed text-ink-faint">
            Listed rather than left blank. Every one of these is a place where a
            confident-sounding account would be invention.
          </p>
          <ul className="mt-3 space-y-1.5">
            {profile.whatWeAreNotTold.map((gap, i) => (
              <li
                key={i}
                className="border-l-2 border-rule-strong pl-3 text-[12.5px] leading-relaxed text-ink-soft"
              >
                {gap}
              </li>
            ))}
          </ul>
        </section>
      )}

      {profile.later && (
        <div className="mt-3">
          <Spoiler
            title="Later in the biblical story"
            blurb="What happens to this person, or to their line, beyond the book of Joshua."
          >
            <Prose body={profile.later.body} onEntityClick={onEntityClick} />
            <ScriptureRefs refs={profile.later.scriptureRefs} className="mt-3" />
          </Spoiler>
        </div>
      )}

      {(places.length > 0 || themes.length > 0) && (
        <section className="rule-t mt-3 pt-5">
          {places.length > 0 && (
            <div>
              <h3 className="label-caps text-ink-faint">Places in their story</h3>
              <ul className="mt-1.5 flex flex-wrap gap-1.5">
                {places.map((p) => (
                  <li key={p.id}>
                    <Link
                      href={entityHref(p.id)}
                      className="inline-block rounded-sm border border-rule bg-ivory px-1.5 py-0.5 text-[11.5px] text-charcoal transition-colors hover:border-bronze hover:bg-bronze-wash hover:text-bronze"
                    >
                      {p.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
          {themes.length > 0 && (
            <div className="mt-4">
              <h3 className="label-caps text-ink-faint">Themes they belong to</h3>
              <ul className="mt-1.5 flex flex-wrap gap-1.5">
                {themes.map((t) => (
                  <li key={t.id}>
                    <Link
                      href={`/themes?theme=${t.id}`}
                      className="inline-block rounded-sm border border-rule bg-ivory px-1.5 py-0.5 text-[11.5px] text-charcoal transition-colors hover:border-forest hover:bg-forest-wash hover:text-forest"
                    >
                      {t.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </section>
      )}
    </article>
  );
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="rule-t py-5">
      <h3 className="font-serif text-[16.5px] font-semibold text-charcoal">{title}</h3>
      <div className="mt-2.5">{children}</div>
    </section>
  );
}

function Legend() {
  return (
    <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-1.5">
      {(Object.keys(CERTAINTY) as SequenceCertainty[]).map((k) => (
        <li key={k} className="flex items-center gap-1.5 text-[11px] text-ink-faint">
          <span
            className={`size-2 shrink-0 rounded-full border ${CERTAINTY[k].dot}`}
            aria-hidden
          />
          {CERTAINTY[k].label}
        </li>
      ))}
    </ul>
  );
}

function Timeline({ events }: { events: TimelineEvent[] }) {
  /* Era headings appear only where the era changes, so the spine stays continuous. */
  const startsEra = events.map(
    (event, i) => i === 0 || events[i - 1].era !== event.era
  );

  return (
    <ol className="mt-5">
      {events.map((event, i) => {
        const showEra = startsEra[i];
        const cert = CERTAINTY[event.sequenceCertainty];

        return (
          <li key={event.id}>
            {showEra && (
              <p className="label-caps mt-4 mb-2 text-bronze first:mt-0">
                {ERA_LABELS[event.era]}
              </p>
            )}
            <div className={`relative border-l pb-5 pl-5 ${cert.line}`}>
              <span
                className={`absolute top-1 -left-[4.5px] size-2 rounded-full border ${cert.dot}`}
                aria-hidden
              />
              <div className="flex flex-wrap items-baseline gap-x-2">
                <h4 className="font-serif text-[14.5px] leading-snug font-semibold text-charcoal">
                  {event.label}
                </h4>
                <span className="text-[10.5px] text-ink-faint">{cert.label}</span>
              </div>
              <p className="mt-1 text-[12.5px] leading-relaxed text-ink-soft">
                {event.description}
              </p>
              <div className="mt-1.5 flex flex-wrap items-center gap-x-4 gap-y-1">
                <EventLink event={event} />
                <ScriptureRefs refs={event.scriptureRefs} label="Read" />
              </div>
            </div>
          </li>
        );
      })}
    </ol>
  );
}

/**
 * The link out of a timeline event.
 *
 * The brief asks that clicking an event opens the corresponding milestone, so the
 * label names the destination rather than saying "open". An event whose link target
 * has not been authored yet renders nothing, because a control that goes nowhere is
 * worse than no control.
 */
function EventLink({ event }: { event: TimelineEvent }) {
  if (!event.link) return null;

  if (event.link.kind === "milestone") {
    const m = MILESTONE_BY_ID[event.link.milestoneId];
    if (!m) return null;
    return (
      <Link
        href={studyHref({ chapter: m.chapter, milestoneId: m.id })}
        className="text-[11.5px] font-medium text-forest underline decoration-rule-strong underline-offset-2 hover:decoration-forest"
      >
        Joshua {m.chapter}: {m.title}
      </Link>
    );
  }

  if (event.link.kind === "before-stage") {
    const stage = BEFORE_STAGE_BY_ID[event.link.stageId];
    if (!stage) return null;
    return (
      <Link
        href={`/before-joshua?stage=${stage.id}`}
        className="text-[11.5px] font-medium text-forest underline decoration-rule-strong underline-offset-2 hover:decoration-forest"
      >
        Before Joshua: {stage.title}
      </Link>
    );
  }

  const chapter = event.link.chapter;
  return (
    <Link
      href={studyHref({ chapter })}
      className="text-[11.5px] font-medium text-forest underline decoration-rule-strong underline-offset-2 hover:decoration-forest"
    >
      Joshua {chapter}
    </Link>
  );
}
