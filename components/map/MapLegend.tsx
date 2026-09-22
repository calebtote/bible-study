"use client";

/**
 * The legend.
 *
 * This panel does more work than a normal map key, because the marks on this map
 * encode how confident the study is, and a reader who cannot decode that is
 * being misled by a map that looks authoritative. So the legend explains the
 * textures and line patterns in the same words the data uses, and it states the
 * two distinctions the whole atlas turns on: a victory is not an occupation, and
 * an allotment is not control.
 *
 * It lists only what is actually drawn right now. A key full of symbols absent
 * from the map teaches the reader to ignore the key.
 */

import { useEffect, useMemo } from "react";
import type { EventIcon, FeatureCertainty, MapFeature } from "@/content/types";
import { CERTAINTY_STYLES } from "@/content/types";
import { eventIconDataUrl } from "@/lib/map/icons";
import { MAP_COLORS } from "@/lib/design/palette";
import { DASH } from "@/lib/map/feature-layers";

const EVENT_ICON_MEANING: Record<EventIcon, string> = {
  battle: "A battle the text narrates",
  crossing: "Crossing a river or a boundary",
  treaty: "An oath or treaty sworn",
  assembly: "The people gathered",
  covenant: "Covenant made or renewed",
  memorial: "Stones set up as a memorial",
  camp: "An encampment",
  burial: "A burial",
  altar: "An altar built",
  failure: "Something the text says was not done",
};

/** A dash pattern drawn as an SVG stroke, so the legend shows the real thing. */
function DashSwatch({
  certainty,
  color,
}: {
  certainty: FeatureCertainty;
  color: string;
}) {
  const dash = DASH[certainty];
  return (
    <svg width="42" height="10" viewBox="0 0 42 10" aria-hidden className="shrink-0">
      <line
        x1="1"
        y1="5"
        x2="41"
        y2="5"
        stroke={color}
        strokeWidth="2"
        strokeDasharray={dash ? dash.map((d) => d * 2).join(" ") : undefined}
        strokeLinecap={dash ? "butt" : "round"}
      />
    </svg>
  );
}

function Row({
  swatch,
  title,
  body,
}: {
  swatch: React.ReactNode;
  title: string;
  body: string;
}) {
  return (
    <li className="flex gap-2.5 px-3.5 py-1.5">
      <span className="mt-0.5 flex w-11 shrink-0 justify-center">{swatch}</span>
      <span className="min-w-0">
        <span className="block text-[12px] font-medium text-charcoal">{title}</span>
        <span className="block text-[11.5px] leading-snug text-ink-soft">{body}</span>
      </span>
    </li>
  );
}

function Heading({ children }: { children: React.ReactNode }) {
  return <li className="label-caps rule-t mt-1.5 px-3.5 pt-2.5 pb-1">{children}</li>;
}

export function MapLegend({
  features,
  onClose,
  reliefFailed,
}: {
  features: MapFeature[];
  onClose: () => void;
  reliefFailed: boolean;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  /* Only what is on the map, so the key stays true to the current view. */
  const present = useMemo(() => {
    const kinds = new Set(features.map((f) => f.kind));
    const certainties = new Set(features.map((f) => f.certainty));
    const icons = new Set(
      features.map((f) => f.eventIcon).filter((i): i is EventIcon => Boolean(i))
    );
    return { kinds, certainties, icons };
  }, [features]);

  const iconUrls = useMemo(() => {
    const out = new Map<EventIcon, string>();
    for (const i of present.icons) {
      try {
        out.set(i, eventIconDataUrl(i));
      } catch {
        /* No canvas. The text description below still names each mark. */
      }
    }
    return out;
  }, [present.icons]);

  const routeCertainties = useMemo(
    () =>
      [...new Set(features.filter((f) => f.kind === "route").map((f) => f.certainty))].filter(
        (c) => c !== "unknown"
      ),
    [features]
  );

  return (
    <div
      className="animate-fade-rise max-h-full w-[22rem] max-w-full overflow-y-auto quiet-scroll rounded border border-rule bg-ivory shadow-float"
      role="region"
      aria-label="Map legend"
    >
      <div className="sticky top-0 flex items-baseline justify-between rule-b bg-ivory px-3.5 py-2.5">
        <span className="label-caps">Legend</span>
        <button
          type="button"
          onClick={onClose}
          className="text-[11px] text-ink-faint hover:text-charcoal"
        >
          Close
        </button>
      </div>

      {/*
        The two sentences that keep the map honest, at the top where they will
        actually be read rather than in a footnote at the bottom.
      */}
      <p className="bg-ivory-deep px-3.5 py-2.5 text-[11.5px] leading-relaxed text-ink-soft">
        Two things this map never shows. Winning a battle is not holding a place,
        so victories are marks at points and never shaded ground. Being assigned
        land is not possessing it, so allotments are drawn open and hatched, and
        the land the book says was not taken stays on its own layer while the
        victories mount up.
      </p>

      <ul className="pb-3">
        {present.kinds.has("site") && (
          <>
            <Heading>Places</Heading>
            <Row
              swatch={
                <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden>
                  <circle
                    cx="8"
                    cy="8"
                    r="5"
                    fill={MAP_COLORS.site}
                    stroke={MAP_COLORS.labelHalo}
                    strokeWidth="2"
                  />
                </svg>
              }
              title="Identified site"
              body={CERTAINTY_STYLES["well-supported"].description}
            />
            {present.certainties.has("disputed") && (
              <Row
                swatch={
                  <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden>
                    <circle
                      cx="8"
                      cy="8"
                      r="5"
                      fill={MAP_COLORS.labelHalo}
                      stroke={MAP_COLORS.site}
                      strokeWidth="2"
                    />
                  </svg>
                }
                title="Disputed identification, labelled with a question mark"
                body={CERTAINTY_STYLES.disputed.description}
              />
            )}
            <Row
              swatch={
                <span className="text-[11px] text-ink-faint line-through">name</span>
              }
              title="Location unknown"
              body={CERTAINTY_STYLES.unknown.description}
            />
          </>
        )}

        {routeCertainties.length > 0 && (
          <>
            <Heading>Movement</Heading>
            {routeCertainties.map((c) => (
              <Row
                key={c}
                swatch={<DashSwatch certainty={c} color={MAP_COLORS.route} />}
                title={CERTAINTY_STYLES[c].label}
                body={
                  c === "well-supported"
                    ? "A route the text itself names, drawn solid."
                    : CERTAINTY_STYLES[c].description
                }
              />
            ))}
            <Row
              swatch={
                <svg width="42" height="10" viewBox="0 0 42 10" aria-hidden>
                  <line
                    x1="1"
                    y1="5"
                    x2="15"
                    y2="5"
                    stroke={MAP_COLORS.route}
                    strokeWidth="2"
                    strokeDasharray="6 3"
                  />
                  <line
                    x1="27"
                    y1="5"
                    x2="41"
                    y2="5"
                    stroke={MAP_COLORS.route}
                    strokeWidth="2"
                    strokeDasharray="6 3"
                  />
                </svg>
              }
              title="A gap in a route"
              body="A place on the way that cannot be located, left as a gap rather than bridged with a guess."
            />
          </>
        )}

        {present.icons.size > 0 && (
          <>
            <Heading>Events</Heading>
            {[...present.icons].map((icon) => (
              <Row
                key={icon}
                swatch={
                  iconUrls.has(icon) ? (
                    /*
                     * A bare `img`, because `next/image` has nothing to do here: the src
                     * is an 18px data URL drawn on a canvas a moment ago, by the same
                     * function that hands the mark to MapLibre. That shared origin is the
                     * point, since it is what guarantees the swatch in the legend is the
                     * mark on the map rather than a hand-kept copy of it. There is no file
                     * to optimise and no request to make.
                     */
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={iconUrls.get(icon)}
                      alt=""
                      width={18}
                      height={18}
                      aria-hidden
                    />
                  ) : (
                    <span className="text-[11px] text-ink-faint">{icon}</span>
                  )
                }
                title={EVENT_ICON_MEANING[icon]}
                body="A mark at a point, not an area. It records that something happened here."
              />
            ))}
          </>
        )}

        {(present.kinds.has("allotment") ||
          present.kinds.has("remaining-land") ||
          present.kinds.has("region") ||
          present.kinds.has("polity-region")) && (
          <>
            <Heading>Areas</Heading>
            {present.kinds.has("region") && (
              <Row
                swatch={
                  <svg width="30" height="16" viewBox="0 0 30 16" aria-hidden>
                    <rect
                      x="1"
                      y="1"
                      width="28"
                      height="14"
                      fill={MAP_COLORS.region}
                      fillOpacity="0.12"
                      stroke={MAP_COLORS.region}
                      strokeWidth="1"
                    />
                  </svg>
                }
                title="Physiographic region"
                body="Hill country, valley, plain. A thin solid edge, because this edge is in the ground rather than in a text."
              />
            )}
            {present.kinds.has("allotment") && (
              <Row
                swatch={
                  <svg width="30" height="16" viewBox="0 0 30 16" aria-hidden>
                    <defs>
                      <pattern
                        id="lg-allot"
                        width="6"
                        height="6"
                        patternUnits="userSpaceOnUse"
                        patternTransform="rotate(45)"
                      >
                        <line
                          x1="0"
                          y1="0"
                          x2="0"
                          y2="6"
                          stroke={MAP_COLORS.allotment}
                          strokeWidth="0.7"
                          strokeOpacity="0.38"
                        />
                      </pattern>
                    </defs>
                    <rect
                      x="1"
                      y="1"
                      width="28"
                      height="14"
                      fill="url(#lg-allot)"
                      stroke={MAP_COLORS.allotment}
                      strokeWidth="1.2"
                      strokeDasharray="4 2.5"
                    />
                  </svg>
                }
                title="Tribal allotment: assigned, not held"
                body="Open hatch and a dashed edge. The boundary lists name places rather than tracing a line, so the edge is interpolated between the few that can be located."
              />
            )}
            {present.kinds.has("remaining-land") && (
              <Row
                swatch={
                  <svg width="30" height="16" viewBox="0 0 30 16" aria-hidden>
                    <defs>
                      <pattern
                        id="lg-remain"
                        width="8"
                        height="8"
                        patternUnits="userSpaceOnUse"
                      >
                        <path
                          d="M0 0L8 8M8 0L0 8"
                          stroke={MAP_COLORS.remaining}
                          strokeWidth="0.7"
                          strokeOpacity="0.4"
                        />
                      </pattern>
                    </defs>
                    <rect
                      x="1"
                      y="1"
                      width="28"
                      height="14"
                      fill="url(#lg-remain)"
                      stroke={MAP_COLORS.remaining}
                      strokeWidth="1.1"
                      strokeDasharray="1.6 1.6"
                    />
                  </svg>
                }
                title="Land the book says was not possessed"
                body="Dense cross hatch. It stays on the map through the campaign chapters, because the book keeps saying it."
              />
            )}
            {present.kinds.has("polity-region") && (
              <Row
                swatch={
                  <svg width="30" height="16" viewBox="0 0 30 16" aria-hidden>
                    <defs>
                      <pattern
                        id="lg-peoples"
                        width="6"
                        height="6"
                        patternUnits="userSpaceOnUse"
                      >
                        <circle
                          cx="2"
                          cy="2"
                          r="1"
                          fill={MAP_COLORS.peoples}
                          fillOpacity="0.55"
                        />
                        <circle
                          cx="5"
                          cy="4.5"
                          r="0.8"
                          fill={MAP_COLORS.peoples}
                          fillOpacity="0.45"
                        />
                      </pattern>
                    </defs>
                    <rect x="1" y="1" width="28" height="14" fill="url(#lg-peoples)" />
                  </svg>
                }
                title="A people or a city state, with no border at all"
                body="Stipple and deliberately no outline. These were not nations with surveyed frontiers, and drawing an edge would invent one."
              />
            )}
            {present.certainties.has("schematic") && (
              <Row
                swatch={
                  <svg width="30" height="16" viewBox="0 0 30 16" aria-hidden>
                    <defs>
                      <pattern
                        id="lg-schem"
                        width="8"
                        height="8"
                        patternUnits="userSpaceOnUse"
                      >
                        <circle
                          cx="4"
                          cy="4"
                          r="0.65"
                          fill={MAP_COLORS.region}
                          fillOpacity="0.4"
                        />
                      </pattern>
                    </defs>
                    <rect x="1" y="1" width="28" height="14" fill="url(#lg-schem)" />
                  </svg>
                }
                title="Schematic"
                body={CERTAINTY_STYLES.schematic.description}
              />
            )}
          </>
        )}

        {present.kinds.has("coalition") && (
          <>
            <Heading>Alliances</Heading>
            <Row
              swatch={
                <svg width="30" height="16" viewBox="0 0 30 16" aria-hidden>
                  <line
                    x1="4"
                    y1="8"
                    x2="26"
                    y2="3"
                    stroke={MAP_COLORS.conflict}
                    strokeWidth="1.3"
                    strokeDasharray="3 2"
                  />
                  <line
                    x1="4"
                    y1="8"
                    x2="26"
                    y2="13"
                    stroke={MAP_COLORS.conflict}
                    strokeWidth="1.3"
                    strokeDasharray="3 2"
                  />
                  <circle cx="4" cy="8" r="2.4" fill={MAP_COLORS.conflict} />
                </svg>
              }
              title="A coalition of cities"
              body="Connectors from the city that convened it to each ally. Never a shaded area, because an alliance is an agreement between cities and not territory anyone governed."
            />
          </>
        )}

        {present.kinds.has("modern-reference") && (
          <>
            <Heading>Modern reference</Heading>
            <Row
              swatch={
                <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden>
                  <circle
                    cx="8"
                    cy="8"
                    r="3"
                    fill={MAP_COLORS.modern}
                    stroke={MAP_COLORS.labelHalo}
                    strokeWidth="1"
                  />
                </svg>
              }
              title="A present-day city"
              body="Orientation only, named in grey italic so it cannot be mistaken for the ancient map. A modern city at or near an ancient site is not evidence about that site."
            />
          </>
        )}

        {present.kinds.has("town-group") && (
          <>
            <Heading>Scattered towns</Heading>
            <Row
              swatch={
                <svg width="30" height="16" viewBox="0 0 30 16" aria-hidden>
                  <circle cx="6" cy="5" r="2.4" fill={MAP_COLORS.covenant} />
                  <circle cx="16" cy="11" r="2.4" fill={MAP_COLORS.covenant} />
                  <circle cx="25" cy="4" r="2.4" fill={MAP_COLORS.covenant} />
                </svg>
              }
              title="A set of towns, not a territory"
              body="Levi's towns, Simeon's towns inside Judah, the cities of refuge. Points only, because the text assigns towns here and not a block of land."
            />
          </>
        )}

        <Heading>The base map</Heading>
        <Row
          swatch={
            <svg width="30" height="16" viewBox="0 0 30 16" aria-hidden>
              <rect x="1" y="1" width="28" height="14" fill={MAP_COLORS.land} />
            </svg>
          }
          title="Coastlines, lakes and rivers from Natural Earth"
          body={
            "Public domain, bundled with the study, and modern. The Dead Sea in particular has fallen sharply in living memory, so the shoreline drawn here is not the ancient one." +
            (reliefFailed
              ? " Shaded relief was requested and did not load, so the terrain is flat."
              : "")
          }
        />
      </ul>
    </div>
  );
}
