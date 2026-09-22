"use client";

/**
 * Before Joshua: how Israel got to the east bank of the Jordan.
 *
 * Joshua 1 opens mid-sentence, narratively speaking. "Moses my servant is dead"
 * assumes a reader who knows who Moses was, what the promise to Abraham said, why a
 * whole generation died in the wilderness, and what two and a half tribes are already
 * doing on the wrong side of the river. Without that, chapter 1 is a stirring speech
 * about nothing in particular and chapter 14 is unreadable.
 *
 * So this is a stepper rather than a page of prose. Each stage puts the relevant
 * geography on the same map the study uses, because the distances are part of the
 * argument: Egypt to Sinai to Kadesh to the plains of Moab is not a stroll, and the
 * approach from the east rather than the south is the single fact that shapes the
 * entire military geography of the book.
 *
 * The world view at the end is deliberately last. It is the only place absolute dates
 * appear anywhere in this study, and each one names the chronology it belongs to,
 * because a bare "c. 1400 BC" silently picks a side in an argument the evidence has
 * not settled.
 */

import { useCallback, useEffect, useMemo, useRef } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import type { BeforeStage, HistoricalAnchor } from "@/content/types";
import { BEFORE_STAGES, BEFORE_STAGE_BY_ID } from "@/content/before-joshua";
import {
  ANCHORS_BY_CHRONOLOGY,
  WORLD_AT_JOSHUA_1,
} from "@/content/world-at-joshua-1";
import { ENTITY_BY_ID } from "@/content/entities";
import { AtlasMap } from "@/components/map/AtlasMap";
import { Prose } from "@/components/Prose";
import { Section } from "@/components/ui/Disclosure";
import { Citations, EvidenceBadges } from "@/components/ui/Evidence";
import { ScriptureRefs } from "@/components/scripture/ScriptureRefs";
import { Aside } from "@/components/shell/PageShell";
import { usePreferences } from "@/lib/state/preferences";
import { selectByIds } from "@/lib/map/select";
import { entityHref, studyHref } from "@/lib/state/study-url";
import { firstMilestoneOf } from "@/content/chapters";

const WORLD_VIEW = "world";

const CHRONOLOGY_LABELS: Record<
  HistoricalAnchor["chronology"],
  { label: string; note: string }
> = {
  "external-fixed-point": {
    label: "Fixed by evidence outside the Bible",
    note: "Dated by an inscription or an excavated context, independently of the biblical account. These are the firmest points available, and there are very few of them.",
  },
  "early-date-15th-century": {
    label: "On the early reconstruction",
    note: "Follows 1 Kings 6:1 read as a round figure of 480 years, putting the exodus in the fifteenth century. Everything in this column depends on that reading.",
  },
  "late-date-13th-century": {
    label: "On the late reconstruction",
    note: "Follows the Egyptian evidence for the cities named in Exodus, putting the exodus in the thirteenth century. Everything in this column depends on that reading.",
  },
  "no-consensus": {
    label: "No agreed date",
    note: "Either the evidence points in more than one direction or there is none to point with. Listed rather than assigned a figure.",
  },
};

export function BeforeScreen() {
  const router = useRouter();
  const params = useSearchParams();
  const body = useRef<HTMLDivElement>(null);

  const raw = params.get("stage");
  const isWorld = raw === WORLD_VIEW;
  const stage = !isWorld && raw ? BEFORE_STAGE_BY_ID[raw] : undefined;
  const current = stage ?? (isWorld ? undefined : BEFORE_STAGES[0]);
  const corrected = Boolean(raw) && !isWorld && stage === undefined;

  const index = current ? BEFORE_STAGES.indexOf(current) : -1;

  const go = useCallback(
    (id: string) => {
      router.replace(`/before-joshua?stage=${id}`, { scroll: false });
    },
    [router]
  );

  /* Moving a stage should bring the reader's eye back to the top of the stage. */
  useEffect(() => {
    if (!raw) return;
    body.current?.scrollIntoView({
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "auto"
        : "smooth",
      block: "start",
    });
  }, [raw]);

  const openEntity = useCallback(
    (id: string) => router.push(entityHref(id)),
    [router]
  );

  const prev = index > 0 ? BEFORE_STAGES[index - 1] : undefined;
  const next =
    index >= 0 && index < BEFORE_STAGES.length - 1
      ? BEFORE_STAGES[index + 1]
      : undefined;

  return (
    <div>
      {corrected && (
        <p className="mb-5 rounded border border-terracotta/35 bg-terracotta-wash px-3 py-2 text-[12px] leading-relaxed text-terracotta">
          That link named a stage this study does not have, so the first one is shown.
        </p>
      )}

      <Stepper
        activeId={isWorld ? WORLD_VIEW : current?.id}
        onGo={go}
      />

      <div ref={body} className="mt-8 scroll-mt-6">
        {isWorld ? (
          <WorldView onEntityClick={openEntity} />
        ) : current ? (
          <StageView stage={current} index={index} onEntityClick={openEntity} />
        ) : null}
      </div>

      <nav
        aria-label="Stage navigation"
        className="rule-t mt-10 flex flex-wrap items-center justify-between gap-3 pt-5"
      >
        {prev ? (
          <button
            type="button"
            onClick={() => go(prev.id)}
            className="rounded border border-rule-strong px-3 py-2 text-left text-[12.5px] text-charcoal transition-colors hover:border-forest hover:bg-forest-wash hover:text-forest"
          >
            <span className="label-caps block text-ink-faint">Back</span>
            {prev.title}
          </button>
        ) : (
          <span />
        )}

        {isWorld ? (
          <Link
            href={studyHref({
              chapter: 1,
              milestoneId: firstMilestoneOf(1)?.id ?? null,
            })}
            className="rounded bg-forest px-4 py-2.5 text-[13px] font-medium text-ivory transition-colors hover:bg-[#2b4539]"
          >
            Begin Joshua 1
          </Link>
        ) : next ? (
          <button
            type="button"
            onClick={() => go(next.id)}
            className="rounded border border-rule-strong px-3 py-2 text-right text-[12.5px] text-charcoal transition-colors hover:border-forest hover:bg-forest-wash hover:text-forest"
          >
            <span className="label-caps block text-ink-faint">Next</span>
            {next.title}
          </button>
        ) : (
          <button
            type="button"
            onClick={() => go(WORLD_VIEW)}
            className="rounded bg-forest px-4 py-2.5 text-[13px] font-medium text-ivory transition-colors hover:bg-[#2b4539]"
          >
            The world at Joshua 1
          </button>
        )}
      </nav>
    </div>
  );
}

function Stepper({
  activeId,
  onGo,
}: {
  activeId: string | undefined;
  onGo: (id: string) => void;
}) {
  return (
    <nav aria-label="Before Joshua stages">
      <ol className="flex flex-wrap gap-1.5">
        {BEFORE_STAGES.map((s, i) => {
          const active = activeId === s.id;
          return (
            <li key={s.id}>
              <button
                type="button"
                onClick={() => onGo(s.id)}
                aria-current={active ? "step" : undefined}
                className={`flex items-baseline gap-1.5 rounded border px-2.5 py-1.5 text-left text-[12px] leading-snug transition-colors ${
                  active
                    ? "border-bronze bg-bronze-wash font-medium text-bronze"
                    : "border-rule bg-ivory text-ink-soft hover:border-rule-strong hover:text-charcoal"
                }`}
              >
                <span className="tabular-nums opacity-60">{i + 1}</span>
                {s.title}
              </button>
            </li>
          );
        })}
        <li>
          <button
            type="button"
            onClick={() => onGo(WORLD_VIEW)}
            aria-current={activeId === WORLD_VIEW ? "step" : undefined}
            className={`rounded border px-2.5 py-1.5 text-[12px] leading-snug transition-colors ${
              activeId === WORLD_VIEW
                ? "border-forest bg-forest-wash font-medium text-forest"
                : "border-rule bg-ivory text-ink-soft hover:border-rule-strong hover:text-charcoal"
            }`}
          >
            The world at Joshua 1
          </button>
        </li>
      </ol>
    </nav>
  );
}

function StageView({
  stage,
  index,
  onEntityClick,
}: {
  stage: BeforeStage;
  index: number;
  onEntityClick: (id: string) => void;
}) {
  const prefs = usePreferences();

  const features = useMemo(
    () => selectByIds(stage.mapFeatureIds, prefs.layers),
    [stage.mapFeatureIds, prefs.layers]
  );

  const entities = stage.entityIds.map((id) => ENTITY_BY_ID[id]).filter(Boolean);

  return (
    <article className="animate-fade-rise" key={stage.id}>
      <header>
        <p className="label-caps text-bronze">
          Stage {index + 1} of {BEFORE_STAGES.length}
        </p>
        <h2 className="mt-1 font-serif text-[25px] leading-tight font-semibold tracking-[-0.012em] text-charcoal">
          {stage.title}
        </h2>
      </header>

      <div className="mt-5 overflow-hidden rounded border border-rule">
        <div className="relative h-[300px] sm:h-[380px]">
          {/*
            Every stage before the Jordan crossing is either a summary of years or a
            journey the text gives only in outline, so nothing here animates as a
            narrated march. `summary` is the honest sequence type for all of them.
          */}
          <AtlasMap
            features={features}
            viewport={stage.viewport}
            sequenceType="summary"
            animationKey={stage.id}
            onSelect={(id) => id && onEntityClick(id)}
          />
        </div>
        <div className="rule-t bg-ivory-deep/60 px-4 py-3">
          <h3 className="label-caps text-forest">Getting your bearings</h3>
          <p className="mt-1.5 text-[12.5px] leading-relaxed text-charcoal">
            {stage.geographicOrientation}
          </p>
          {features.length === 0 && stage.mapFeatureIds.length > 0 && (
            <p className="mt-2 text-[11.5px] leading-relaxed text-terracotta">
              Nothing is drawn because the layers this stage uses are switched off in
              settings.
            </p>
          )}
        </div>
      </div>

      <div className="mt-6">
        <EvidenceBadges labels={stage.evidenceLabels} className="mb-3" />
        <Prose body={stage.body} onEntityClick={onEntityClick} />
        <ScriptureRefs refs={stage.scriptureRefs} className="mt-4" />
        <Citations citations={stage.citations} />
      </div>

      {entities.length > 0 && (
        <div className="rule-t mt-6 pt-4">
          <h3 className="label-caps text-ink-faint">People and places in this stage</h3>
          <ul className="mt-1.5 flex flex-wrap gap-1.5">
            {entities.map((e) => (
              <li key={e.id}>
                <Link
                  href={entityHref(e.id)}
                  className="inline-block rounded-sm border border-rule bg-ivory px-1.5 py-0.5 text-[11.5px] text-charcoal transition-colors hover:border-bronze hover:bg-bronze-wash hover:text-bronze"
                >
                  {e.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </article>
  );
}

function WorldView({ onEntityClick }: { onEntityClick: (id: string) => void }) {
  const groups = (
    Object.keys(CHRONOLOGY_LABELS) as HistoricalAnchor["chronology"][]
  )
    .map((key) => ({ key, anchors: ANCHORS_BY_CHRONOLOGY[key] ?? [] }))
    .filter((g) => g.anchors.length > 0);

  return (
    <article className="animate-fade-rise">
      <header>
        <p className="label-caps text-forest">Orientation</p>
        <h2 className="mt-1 font-serif text-[25px] leading-tight font-semibold tracking-[-0.012em] text-charcoal">
          The world at Joshua 1
        </h2>
        <p className="mt-2.5 font-serif text-[15px] leading-relaxed text-ink-soft">
          Three things worth holding in mind as the book opens: what Israel is at this
          moment, how Canaan was actually organised, and who else had a claim on the
          same corridor of land.
        </p>
      </header>

      <div className="mt-6 space-y-2">
        {WORLD_AT_JOSHUA_1.map((section) => (
          <Section
            key={section.id}
            section={section}
            onEntityClick={onEntityClick}
            headingLevel={3}
          />
        ))}
      </div>

      <section className="mt-10">
        <h3 className="font-serif text-[19px] font-semibold tracking-[-0.01em] text-charcoal">
          Dates, and why they are kept here
        </h3>
        <div className="mt-3 space-y-3 text-[13px] leading-relaxed text-ink-soft">
          <p>
            This is the only page in the study that carries absolute dates. Nothing in
            the chapters or on the map depends on them, and that is deliberate: the
            date of the exodus and conquest is genuinely unsettled, and a study that
            printed one figure everywhere would be teaching a conclusion as though it
            were a fact.
          </p>
          <p>
            Each entry below names the reconstruction it belongs to. Two of the columns
            are alternatives, not a sequence, and reading down both is the point.
          </p>
        </div>

        <div className="mt-6 space-y-8">
          {groups.map((group) => (
            <div key={group.key}>
              <h4 className="font-serif text-[16px] font-semibold text-forest">
                {CHRONOLOGY_LABELS[group.key].label}
              </h4>
              <p className="mt-1 max-w-2xl text-[12px] leading-relaxed text-ink-faint">
                {CHRONOLOGY_LABELS[group.key].note}
              </p>
              <ul className="mt-3 space-y-4">
                {group.anchors.map((a) => (
                  <li key={a.id} className="rule-t pt-3">
                    <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-0.5">
                      <h5 className="font-serif text-[14px] leading-snug font-semibold text-charcoal">
                        {a.label}
                      </h5>
                      <span className="shrink-0 font-sans text-[11.5px] tabular-nums text-bronze">
                        {a.approximateDate ?? "no date asserted"}
                      </span>
                    </div>
                    <p className="mt-1 text-[12.5px] leading-relaxed text-ink-soft">
                      {a.description}
                    </p>
                    <Citations citations={a.citations} />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <div className="mt-8">
        <Aside title="What a reconstruction is">
          <p>
            An early or late date is not a finding; it is a package of readings that
            hangs together. Choosing one commits you to how you read 1 Kings 6:1, which
            destruction layers you match to which campaign, and what you make of the
            Egyptian evidence. This study does not pick for you, and where a chapter
            touches the question it says so on the page rather than assuming an answer
            settled somewhere else.
          </p>
        </Aside>
      </div>
    </article>
  );
}
