"use client";

/**
 * The map, its caption, and the two questions that sit beside it.
 *
 * "What changed?" and "Why this geography matters" are not decoration around the
 * map; they are the reason the map is here. A pin on a coastline teaches almost
 * nothing on its own. A pin plus "this is the only pass through the ridge, which is
 * why both armies are fighting for it" teaches the thing the study exists to teach.
 * So they are authored per milestone and always visible, never collapsed.
 *
 * The sequence-type badge is the map's honesty label. A reader looking at chapter 13
 * needs to know that the shaded area is an assignment of land rather than a record of
 * conquest, and that the beat they are on is a territorial description rather than a
 * march. The badge says which, and the tooltip says what that means for how the map
 * should be read.
 *
 * Omissions are printed under the map. If a set of towns is drawn short three members
 * because three cannot be located, that is stated. An incomplete diagram presented as
 * whole is the specific failure this study is built to avoid.
 */

import type { Milestone } from "@/content/types";
import { SEQUENCE_TYPES } from "@/content/types";
import { ProseLine, type EntityClick } from "@/components/Prose";
import { AtlasMap } from "@/components/map/AtlasMap";
import { MilestoneControls } from "./MilestoneControls";
import type { MapSelection } from "@/lib/map/select";

export function MapPanel({
  milestone,
  chapterMilestones,
  selection,
  selectedEntityId,
  onSelectEntity,
  onGoToMilestone,
  className,
}: {
  milestone: Milestone;
  chapterMilestones: Milestone[];
  selection: MapSelection;
  selectedEntityId: string | null;
  onSelectEntity: (id: string | null) => void;
  onGoToMilestone: (id: string) => void;
  className?: string;
}) {
  const sequence = SEQUENCE_TYPES[milestone.sequenceType];

  return (
    <div className={`mobile-safe-bottom quiet-scroll flex min-h-0 flex-col overflow-y-auto lg:overflow-visible ${className ?? ""}`}>
      <div className="relative min-h-[min(48dvh,360px)] shrink-0 lg:min-h-[240px] lg:flex-1">
        <AtlasMap
          features={selection.features}
          contextIds={selection.contextIds}
          viewport={milestone.viewport}
          sequenceType={milestone.sequenceType}
          animationKey={milestone.id}
          selectedId={selectedEntityId}
          onSelect={onSelectEntity}
        />
      </div>

      <MilestoneControls
        milestone={milestone}
        chapterMilestones={chapterMilestones}
        onGo={onGoToMilestone}
      />

      <div className="quiet-scroll shrink-0 lg:max-h-[38%] lg:overflow-y-auto bg-ivory-deep/60">
        <div className="rule-b px-4 py-3">
          <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
            <h2 className="font-serif text-[14px] font-semibold text-charcoal">
              {milestone.title}
            </h2>
            <span
              title={sequence.mapRule}
              className="shrink-0 rounded-sm border border-rule-strong px-1.5 py-0.5 text-[10px] font-medium tracking-[0.06em] text-ink-soft uppercase"
            >
              {sequence.label}
            </span>
          </div>
          <p className="mt-1.5 text-[12.5px] leading-relaxed text-ink-soft">
            <ProseLine text={milestone.mapCaption} onEntityClick={onSelectEntity} />
          </p>
          <p className="mt-1.5 text-[11px] leading-relaxed text-ink-faint">
            {sequence.mapRule}
          </p>
        </div>

        <div className="grid gap-px bg-rule sm:grid-cols-2">
          <Aside
            title="What changed?"
            body={milestone.whatChanged}
            onEntityClick={onSelectEntity}
          />
          <Aside
            title="Why this geography matters"
            body={milestone.geographyExplanation}
            onEntityClick={onSelectEntity}
          />
        </div>

        {selection.omissions.length > 0 && (
          <div className="rule-t bg-ivory px-4 py-3">
            <h3 className="label-caps text-terracotta">Not drawn</h3>
            <ul className="mt-1.5 space-y-1.5">
              {selection.omissions.map((o, i) => (
                <li key={`${o.label}-${i}`} className="text-[11.5px] leading-relaxed">
                  <span className="font-medium text-charcoal">{o.label}.</span>{" "}
                  <span className="text-ink-soft">{o.reason}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

/**
 * Rendered through `ProseLine`, not as a bare string.
 *
 * These captions are authored in the same small markdown as every other body in the
 * study, and just over half of them name a place with `[[entity:id]]`. Interpolating
 * the raw string printed that markup on screen. `ProseLine` keeps the paragraph
 * styling and turns the tokens into the dossier links they were written to be.
 */
function Aside({
  title,
  body,
  onEntityClick,
}: {
  title: string;
  body: string;
  onEntityClick: EntityClick;
}) {
  return (
    <section className="bg-ivory px-4 py-3">
      <h3 className="label-caps text-forest">{title}</h3>
      <p className="mt-1.5 text-[12.5px] leading-relaxed text-charcoal">
        <ProseLine text={body} onEntityClick={onEntityClick} />
      </p>
    </section>
  );
}
