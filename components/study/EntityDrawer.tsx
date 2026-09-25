"use client";

/**
 * The dossier drawer.
 *
 * It overlays the chapter panel rather than replacing the screen, so the chapter and
 * the map keep their state underneath and the way back is always visible. The spec
 * asks for a clear return to the chapter; there are three here, and that is
 * deliberate rather than redundant. A labelled button that names the chapter, the
 * Escape key, and the browser's own back button all land in the same place.
 *
 * The header states what kind of record this is before anything else. "Jericho" the
 * city, "the king of Jericho", and "the Canaanites" are three different records in
 * this study, and a reader who has clicked a dot on a map needs to know which one
 * they have opened. The type label and its description carry that.
 *
 * "Where this appears" is derived from the milestones, not authored. It is the
 * honest answer to a question an authored "role" field cannot answer: the role of
 * Gilgal is different in chapter 4 than in chapter 10, and a single sentence claiming
 * to be its role would have to pick one and pretend.
 */

import { useEffect, useMemo, useRef } from "react";
import type { Entity, Milestone } from "@/content/types";
import { ENTITY_TYPES, CERTAINTY_STYLES } from "@/content/types";
import { ENTITY_BY_ID } from "@/content/entities";
import { MILESTONES } from "@/content/chapters";
import { TIMELINE_EVENT_BY_ID } from "@/content/people/timeline";
import { PROFILE_BY_ENTITY_ID } from "@/content/people/profiles";
import { Prose, ProseLine, type EntityClick } from "@/components/Prose";
import { Section, Spoiler } from "@/components/ui/Disclosure";
import { ScriptureRefs, ScriptureRef } from "@/components/scripture/ScriptureRefs";
import { Citations } from "@/components/ui/Evidence";
import { BookmarkButton } from "@/components/shell/BookmarksPanel";
import { studyHref } from "@/lib/state/study-url";
import Link from "next/link";

export function EntityDrawer({
  entity,
  chapter,
  milestoneId,
  onClose,
  onEntityClick,
  onGoToMilestone,
}: {
  entity: Entity;
  chapter: number;
  milestoneId: string | null;
  onClose: () => void;
  onEntityClick: EntityClick;
  onGoToMilestone: (id: string) => void;
}) {
  const panel = useRef<HTMLDivElement>(null);
  const meta = ENTITY_TYPES[entity.type];
  const profile = PROFILE_BY_ENTITY_ID[entity.id];

  const appearances = useMemo(
    () => MILESTONES.filter((m) => m.entityIds.includes(entity.id)),
    [entity.id]
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
      }
    };
    document.addEventListener("keydown", onKey);
    /* Focus moves into the drawer so a keyboard reader is not left behind it. */
    requestAnimationFrame(() => panel.current?.focus());
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  /* Scrolled back to the top when a related entity replaces this one. */
  useEffect(() => {
    panel.current?.scrollTo({ top: 0 });
  }, [entity.id]);

  const related = entity.relatedEntityIds
    .map((id) => ENTITY_BY_ID[id])
    .filter(Boolean)
    .filter((e) => e.id !== entity.id);

  const events = entity.timelineEventIds
    .map((id) => TIMELINE_EVENT_BY_ID[id])
    .filter(Boolean)
    .sort((a, b) => a.narrativeOrder - b.narrativeOrder);

  return (
    <div
      ref={panel}
      tabIndex={-1}
      role="dialog"
      aria-modal="false"
      aria-label={`${entity.name}. ${meta.label}.`}
      className="quiet-scroll animate-fade-rise h-full overflow-y-auto bg-ivory outline-none"
    >
      <div className="rule-b sticky top-0 z-10 flex items-center justify-between gap-3 bg-ivory/95 px-5 py-2.5 backdrop-blur-sm">
        <button
          type="button"
          onClick={onClose}
          className="flex items-center gap-1.5 text-[12px] font-medium text-forest hover:underline"
        >
          <svg viewBox="0 0 12 12" className="size-3" aria-hidden>
            <path
              d="M7.5 2.5 4 6l3.5 3.5"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Back to Joshua {chapter}
        </button>
        <div className="flex items-center gap-1">
          {profile && (
            <Link
              href={`/people?person=${entity.id}`}
              className="rounded px-2 py-0.5 text-[11.5px] text-ink-soft hover:bg-ivory-deep hover:text-charcoal"
            >
              Full profile
            </Link>
          )}
          <BookmarkButton
            kind={entity.type === "person" ? "person" : "entity"}
            targetId={entity.id}
            label={entity.name}
            href={studyHref({ chapter, milestoneId, entityId: entity.id })}
            className="shrink-0"
          />
        </div>
      </div>

      <div className="px-5 py-4 pb-[calc(2.5rem+env(safe-area-inset-bottom))]">
        <header>
          <p className="label-caps text-bronze" title={meta.description}>
            {meta.label}
          </p>
          <h2 className="mt-1 font-serif text-[22px] leading-tight font-semibold tracking-[-0.01em] text-charcoal">
            {entity.name}
          </h2>
          {entity.alternateNames.length > 0 && (
            <p className="mt-1 text-[12px] text-ink-faint">
              Also called {entity.alternateNames.join(", ")}
            </p>
          )}
          <p className="mt-2.5 font-serif text-[14.5px] leading-relaxed text-charcoal">
            <ProseLine text={entity.summary} onEntityClick={onEntityClick} />
          </p>
          <p className="mt-2 text-[11px] leading-relaxed text-ink-faint">
            {meta.description}
          </p>

          {entity.modernSite && (
            <div className="mt-3 rounded border border-rule bg-ivory-deep px-3.5 py-2.5">
              <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
                <h3 className="font-serif text-[13px] font-semibold text-charcoal">
                  Proposed modern site: {entity.modernSite.name}
                </h3>
                <span
                  title={CERTAINTY_STYLES[entity.modernSite.certainty].description}
                  className="shrink-0 rounded-sm border border-rule-strong px-1.5 py-0.5 text-[10px] font-medium tracking-[0.06em] text-ink-soft uppercase"
                >
                  {CERTAINTY_STYLES[entity.modernSite.certainty].label}
                </span>
              </div>
              <p className="mt-1.5 text-[12px] leading-relaxed text-ink-soft">
                {entity.modernSite.note}
              </p>
              {/*
                The one sentence that must appear wherever an identification does.
                Identifying the mound is not the same as confirming what the text
                says happened on it, and the two are conflated constantly.
              */}
              <p className="mt-1.5 text-[11px] leading-relaxed text-ink-faint">
                An identification places the name. It does not by itself confirm any
                event the biblical text describes there.
              </p>
            </div>
          )}
        </header>

        <div className="mt-4">
          {entity.sections.map((section) => (
            <Section
              key={section.id}
              section={section}
              onEntityClick={onEntityClick}
              headingLevel={3}
            />
          ))}

          {entity.relationships && entity.relationships.length > 0 && (
            <section className="rule-t py-4">
              <h3 className="font-serif text-base font-semibold text-charcoal">
                Relationships
              </h3>
              <ul className="mt-2.5 space-y-2">
                {entity.relationships.map((r, i) => {
                  const target = ENTITY_BY_ID[r.targetEntityId];
                  return (
                    <li key={`${r.targetEntityId}-${i}`} className="text-[12.5px] leading-relaxed">
                      <span className="text-ink-soft">{r.kind}: </span>
                      {target ? (
                        <button
                          type="button"
                          onClick={() => onEntityClick(target.id)}
                          className="entity-link"
                        >
                          {target.name}
                        </button>
                      ) : (
                        <span className="text-charcoal">{r.targetEntityId}</span>
                      )}
                      {r.inferred && (
                        <span className="ml-1.5 rounded-sm border border-bronze/45 px-1 py-px text-[9.5px] font-medium tracking-[0.06em] text-bronze uppercase">
                          Inferred
                        </span>
                      )}
                      {r.note && (
                        <span className="mt-0.5 block text-ink-soft">{r.note}</span>
                      )}
                      {r.scriptureRefs?.length ? (
                        <span className="mt-0.5 block text-[11.5px]">
                          {r.scriptureRefs.map((ref, j) => (
                            <span key={ref}>
                              {j > 0 && ", "}
                              <ScriptureRef reference={ref} />
                            </span>
                          ))}
                        </span>
                      ) : null}
                    </li>
                  );
                })}
              </ul>
            </section>
          )}

          {appearances.length > 0 && (
            <section className="rule-t py-4">
              <h3 className="font-serif text-base font-semibold text-charcoal">
                Where this appears
              </h3>
              <p className="mt-1 text-[11.5px] leading-relaxed text-ink-faint">
                Every milestone that names it, in the book&apos;s order. The role
                changes from one to the next, which is why it is shown as a list
                rather than summarised into a single job.
              </p>
              <ul className="mt-2.5 space-y-0.5">
                {appearances.map((m) => (
                  <Appearance
                    key={m.id}
                    milestone={m}
                    current={m.id === milestoneId}
                    onGo={onGoToMilestone}
                  />
                ))}
              </ul>
            </section>
          )}

          {events.length > 0 && (
            <section className="rule-t py-4">
              <h3 className="font-serif text-base font-semibold text-charcoal">
                On the timeline
              </h3>
              <ul className="mt-2.5 space-y-1.5">
                {events.map((e) => (
                  <li key={e.id} className="text-[12.5px] leading-relaxed">
                    <span className="text-charcoal">{e.label}</span>
                    {e.sequenceCertainty !== "explicit-sequence" && (
                      <span className="ml-1.5 text-[10.5px] text-ink-faint">
                        {e.sequenceCertainty === "undated"
                          ? "(the text does not fix when)"
                          : "(order inferred)"}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
              <Link
                href={`/people?person=${entity.id}`}
                className="mt-2 inline-block text-[11.5px] font-medium text-forest hover:underline"
              >
                See the full timeline
              </Link>
            </section>
          )}

          {entity.laterRelevance && (
            <Spoiler
              title="Later in the biblical story"
              blurb={`What happens to ${entity.name} after the book of Joshua. Hidden because knowing it changes how the chapters ahead read.`}
            >
              <Prose
                body={entity.laterRelevance.body}
                onEntityClick={onEntityClick}
              />
              <ScriptureRefs
                refs={entity.laterRelevance.scriptureRefs}
                className="mt-3"
              />
              <Citations citations={entity.laterRelevance.citations} />
            </Spoiler>
          )}

          {related.length > 0 && (
            <section className="rule-t py-4">
              <h3 className="font-serif text-base font-semibold text-charcoal">
                Related
              </h3>
              <ul className="mt-2.5 flex flex-wrap gap-1.5">
                {related.map((e) => (
                  <li key={e.id}>
                    <button
                      type="button"
                      onClick={() => onEntityClick(e.id)}
                      title={`${ENTITY_TYPES[e.type].label}. ${e.summary}`}
                      className="rounded-sm border border-rule bg-ivory px-1.5 py-0.5 text-[11.5px] text-charcoal transition-colors hover:border-bronze hover:bg-bronze-wash hover:text-bronze"
                    >
                      {e.name}
                    </button>
                  </li>
                ))}
              </ul>
              <p className="mt-2 text-[11px] leading-relaxed text-ink-faint">
                Drawn from the milestones these records share, so this is a list of
                what appears alongside it rather than a claim about how they are
                connected.
              </p>
            </section>
          )}
        </div>
      </div>
    </div>
  );
}

function Appearance({
  milestone,
  current,
  onGo,
}: {
  milestone: Milestone;
  current: boolean;
  onGo: (id: string) => void;
}) {
  return (
    <li>
      <button
        type="button"
        onClick={() => onGo(milestone.id)}
        aria-current={current ? "true" : undefined}
        className={`flex w-full items-baseline gap-2 rounded px-2 py-1 text-left transition-colors ${
          current ? "bg-bronze-wash" : "hover:bg-ivory-deep"
        }`}
      >
        <span
          className={`w-11 shrink-0 text-[10.5px] tabular-nums ${
            current ? "font-semibold text-bronze" : "text-ink-faint"
          }`}
        >
          Josh {milestone.chapter}
        </span>
        <span
          className={`min-w-0 flex-1 truncate font-serif text-[12.5px] ${
            current ? "font-semibold text-bronze" : "text-charcoal"
          }`}
        >
          {milestone.title}
        </span>
      </button>
    </li>
  );
}
