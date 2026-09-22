"use client";

/**
 * Place names, drawn as DOM elements over the map canvas.
 *
 * MapLibre would need a glyph server to render text, and the study has to work
 * with no network at all, so labels are HTML instead. That constraint turns out
 * to be an advantage: the names are set in the same Source Serif as the chapter
 * text, at the same optical size, so the map reads as part of the document
 * rather than as an embedded widget.
 *
 * Two rules from the brief are enforced here rather than in the data:
 *
 *   An approximate or disputed polygon must carry a visible label, so areas are
 *   given a higher keep priority than points and are placed first. A reader must
 *   never see a shaded shape with no idea what it claims to be.
 *
 *   A disputed identification is marked in the label itself, with a question
 *   mark, so the uncertainty survives being glanced at rather than living only
 *   in a panel the reader may not open.
 */

import { useEffect, useMemo, useState } from "react";
import type { Map as MlMap } from "maplibre-gl";
import type { Geometry } from "geojson";
import type { FeatureCertainty, MapFeature } from "@/content/types";

interface Placed {
  id: string;
  entityId?: string;
  text: string;
  x: number;
  y: number;
  kind: MapFeature["kind"];
  certainty: FeatureCertainty;
  selected: boolean;
  area: boolean;
  water?: boolean;
}

type Pos = [number, number];

/**
 * A representative point to hang the label on.
 *
 * For an area this is the mean of the outer ring's vertices. That is not a true
 * centroid and for a strongly concave shape it can sit outside the polygon, but
 * the regions and allotments here are broad and roughly convex, and a label a
 * little off centre is a much smaller problem than a label that overlaps the
 * shape's own edge.
 */
function anchorOf(geometry: Geometry): Pos | null {
  switch (geometry.type) {
    case "Point":
      return geometry.coordinates as Pos;
    case "MultiPoint": {
      const cs = geometry.coordinates as Pos[];
      if (!cs.length) return null;
      return mean(cs);
    }
    case "LineString": {
      const cs = geometry.coordinates as Pos[];
      return cs.length ? cs[Math.floor(cs.length / 2)] : null;
    }
    case "MultiLineString": {
      const parts = geometry.coordinates as Pos[][];
      const longest = parts.reduce<Pos[]>((a, b) => (b.length > a.length ? b : a), []);
      return longest.length ? longest[Math.floor(longest.length / 2)] : null;
    }
    case "Polygon": {
      const ring = (geometry.coordinates as Pos[][])[0] ?? [];
      return ring.length ? mean(ring) : null;
    }
    case "MultiPolygon": {
      const rings = (geometry.coordinates as Pos[][][]).map((p) => p[0] ?? []);
      const biggest = rings.reduce<Pos[]>((a, b) => (b.length > a.length ? b : a), []);
      return biggest.length ? mean(biggest) : null;
    }
    default:
      return null;
  }
}

const mean = (cs: Pos[]): Pos => [
  cs.reduce((n, c) => n + c[0], 0) / cs.length,
  cs.reduce((n, c) => n + c[1], 0) / cs.length,
];

const AREA_KINDS: MapFeature["kind"][] = [
  "region",
  "allotment",
  "remaining-land",
  "polity-region",
];

/**
 * Rough box for collision testing. Cheaper and steadier than measuring the DOM.
 *
 * The per-character figures are deliberately generous, and the area figure much more so
 * than the point figure. An area label is set in uppercase at 0.14em tracking, which
 * adds about 1.5px of letter-spacing per character on top of a wider glyph; estimating
 * it at a point label's rate understated a long name like "The Sidonian coast: not
 * taken" by roughly a third, so it tested as clear of the legend and then rendered
 * halfway underneath it. Overestimating costs one dropped label in a crowd.
 * Underestimating costs an unreadable one, so the error is biased that way on purpose.
 */
const boxOf = (p: Placed) => {
  const w = p.text.length * (p.area ? 9.7 : 6.8) + 14;
  const h = p.selected ? 25 : p.area ? 18 : 19;
  return { x1: p.x - w / 2, y1: p.y - h / 2, x2: p.x + w / 2, y2: p.y + h / 2 };
};

type Box = ReturnType<typeof boxOf>;

const overlaps = (a: Box, b: Box) =>
  a.x1 < b.x2 && a.x2 > b.x1 && a.y1 < b.y2 && a.y2 > b.y1;

/**
 * Boxes already claimed by chrome drawn over the same canvas.
 *
 * Labels are HTML positioned by `map.project`, so they know nothing about the layers
 * control, the legend, or MapLibre's own zoom and attribution widgets sitting on top of
 * them. Without this, a wide name like "Lebanon and the northern valley: not taken"
 * rendered straight under the corner buttons, which is not a near miss: the label is
 * simply gone, and the reader is left with a cross-hatched shape and no idea what it
 * claims. Anything wanting to be avoided marks itself `data-map-reserve`; MapLibre's
 * controls are matched by their own class names.
 */
function reservedBoxes(map: MlMap): Box[] {
  const container = map.getContainer();
  const base = container.getBoundingClientRect();
  const roots = [container, container.parentElement].filter(
    (n): n is HTMLElement => n instanceof HTMLElement
  );

  const found = new Set<Element>();
  for (const root of roots) {
    for (const el of root.querySelectorAll(
      "[data-map-reserve], .maplibregl-ctrl-top-right, .maplibregl-ctrl-top-left, .maplibregl-ctrl-bottom-right, .maplibregl-ctrl-bottom-left"
    )) {
      found.add(el);
    }
  }

  const pad = 6;
  return [...found]
    .map((el) => el.getBoundingClientRect())
    .filter((r) => r.width > 0 && r.height > 0)
    .map((r) => ({
      x1: r.left - base.left - pad,
      y1: r.top - base.top - pad,
      x2: r.right - base.left + pad,
      y2: r.bottom - base.top + pad,
    }));
}

export function MapLabels({
  map,
  features,
  selectedId,
  tick,
}: {
  map: MlMap;
  features: MapFeature[];
  selectedId?: string | null;
  tick: number;
}) {
  const [placed, setPlaced] = useState<Placed[]>([]);

  /* Anchors in map coordinates, recomputed only when the features change. */
  const anchors = useMemo(
    () =>
      features.flatMap((f) => {
        if (f.certainty === "unknown") return [];
        const at = anchorOf(f.geometry);
        if (!at) return [];
        const area = AREA_KINDS.includes(f.kind);
        return [{ feature: f, at, area }];
      }),
    [features]
  );

  useEffect(() => {
    const place = () => {
    const next: Placed[] = [];
    const chrome = reservedBoxes(map);
    const taken: Box[] = [];
    const canvas = map.getCanvas();
    const w = canvas.clientWidth;
    const h = canvas.clientHeight;

    /*
     * Placement order decides who survives a collision: the selected feature
     * first, then areas, then whatever the data marks as important.
     */
    const ordered = [...anchors].sort((a, b) => {
      const sel = (x: typeof a) =>
        x.feature.id === selectedId || x.feature.entityId === selectedId ? 1 : 0;
      if (sel(b) !== sel(a)) return sel(b) - sel(a);
      if (a.area !== b.area) return a.area ? -1 : 1;
      return (b.feature.priority ?? 0) - (a.feature.priority ?? 0);
    });

    for (const { feature, at, area } of ordered) {
      const pt = map.project(at);
      /* Off screen, or in the gutter where a label would be clipped. */
      if (pt.x < 8 || pt.y < 8 || pt.x > w - 8 || pt.y > h - 8) continue;

      const selected =
        feature.id === selectedId || feature.entityId === selectedId;

      const candidate: Placed = {
        id: feature.id,
        entityId: feature.entityId,
        /*
         * The question mark is part of the name as drawn. A disputed site is
         * not "Eglon", it is "Eglon?", and that is the whole point.
         */
        text: feature.certainty === "disputed" ? `${feature.label}?` : feature.label,
        /* Points sit above their marker; areas sit on their anchor. */
        x: pt.x,
        y: area ? pt.y : pt.y - 15,
        kind: feature.kind,
        certainty: feature.certainty,
        selected,
        area,
      };

      const box = boxOf(candidate);
      /*
       * Chrome wins over everything, including the selection. A name printed beneath
       * the legend is not a compromise, it is unreadable, and the dossier the reader
       * just opened already gives them the name in full.
       */
      if (chrome.some((c) => overlaps(c, box))) continue;
      /* Otherwise the selected label wins; it is what the reader just asked for. */
      if (!selected && taken.some((t) => overlaps(t, box))) continue;
      taken.push(box);
      next.push(candidate);
    }

    // Quiet reference names share the collision system with study labels.
    // Study features always take precedence over this geographic context.
    const waters: { text: string; at: Pos; minZoom: number }[] = [
      { text: "Mediterranean Sea", at: [33.5, 32.7], minZoom: 4 },
      { text: "Dead Sea", at: [35.47, 31.48], minZoom: 7 },
      { text: "Sea of Galilee", at: [35.59, 32.82], minZoom: 8 },
    ];
    for (const water of waters) {
      if (map.getZoom() < water.minZoom) continue;
      const pt = map.project(water.at);
      const candidate: Placed = {
        id: `water-${water.text}`, text: water.text, x: pt.x, y: pt.y,
        kind: "region", certainty: "well-supported", selected: false,
        area: false, water: true,
      };
      const box = boxOf(candidate);
      if (box.x1 < 8 || box.y1 < 8 || box.x2 > w - 8 || box.y2 > h - 8) continue;
      if ([...chrome, ...taken].some((b) => overlaps(b, box))) continue;
      taken.push(box);
      next.push(candidate);
    }

    /*
     * After commit, deliberately, which is why this is an effect and not a `useMemo`.
     * Placement measures two things that only exist once the browser has laid the frame
     * out: `map.project()` against the live camera, and the real bounding boxes of the
     * control chrome the labels must avoid. Computing it during render would read
     * geometry from the previous layout and put names under the legend.
     */
    setPlaced(next);
    };

    place();

    /*
     * Re-place when the chrome itself changes. Chrome wins every collision, so an open
     * layers panel or legend rightly suppresses the labels under it; the bug was the
     * other direction. Closing the panel changed no dependency of this effect, and the
     * labels stayed suppressed until the next camera move: a reader who opened Layers,
     * toggled something and closed it was left with a map of unnamed dots. Watching for
     * `data-map-reserve` mounts and unmounts is what makes the panel's disappearance an
     * event this effect can see. Mutations inside the label host itself never match the
     * filter, so placing labels cannot re-trigger it.
     */
    const host = map.getContainer().parentElement;
    if (!host) return;
    let raf = 0;
    const involvesChrome = (m: MutationRecord) =>
      (m.target instanceof HTMLElement && m.target.closest("[data-map-reserve]") !== null) ||
      [...m.addedNodes, ...m.removedNodes].some(
        (n) =>
          n instanceof HTMLElement &&
          (n.matches("[data-map-reserve]") || n.querySelector("[data-map-reserve]") !== null)
      );
    const observer = new MutationObserver((mutations) => {
      if (!mutations.some(involvesChrome)) return;
      cancelAnimationFrame(raf);
      /* One frame later, so the box being measured is the layout after the change. */
      raf = requestAnimationFrame(place);
    });
    observer.observe(host, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [anchors, map, selectedId, tick]);

  return (
    <div className="pointer-events-none absolute inset-0 z-10 overflow-hidden">
      {placed.map((p) => (
        <span
          key={p.id}
          className={[
            "absolute -translate-x-1/2 -translate-y-1/2 whitespace-nowrap",
            "transition-colors duration-200",
            /*
             * Everything ancient is set in the serif; a modern reference point is set
             * in the interface sans, italic and grey. The typeface is the claim: this
             * name belongs to the reader's world, not to the map's.
             */
            p.kind === "modern-reference"
              ? "font-sans text-[10.5px] italic text-[#7D838A]"
              : p.water
                ? "font-serif text-[13px] italic tracking-[0.04em] text-[#486E7B]"
                : p.area
                  ? "font-serif text-[11px] uppercase tracking-[0.14em]"
                  : "font-serif text-[12.5px] tracking-[0.01em]",
            /*
             * An area label is tinted to match its own texture, so the name and the
             * fill make the same claim. A reader scanning Joshua 15 sees green "JUDAH"
             * over green hatching and terracotta "PHILISTINE TERRITORY: NOT TAKEN" over
             * terracotta cross hatching, and does not have to consult the legend to know
             * which kind of statement each shape is. Plain geographic regions stay faint:
             * they are orientation, not argument.
             */
            p.water || p.kind === "modern-reference" ? "" : p.selected
              ? "rounded-sm border border-bronze/35 bg-ivory/90 px-1.5 py-0.5 font-semibold text-bronze"
              : p.kind === "allotment"
                ? "text-forest/70"
                : p.kind === "remaining-land"
                  ? "text-terracotta/80"
                  : p.area
                    ? "text-ink-faint"
                    : "text-[#3A403A]",
            p.certainty === "schematic" ? "italic opacity-80" : "",
          ].join(" ")}
          style={{
            left: p.x,
            top: p.y,
            /* An ivory halo, so a name stays legible over hatching or water. */
            textShadow:
              "0 0 3px #F7F3EA, 0 0 3px #F7F3EA, 0 0 6px #F7F3EA, 0 1px 1px #F7F3EA",
          }}
          aria-hidden
        >
          {p.text}
        </span>
      ))}
    </div>
  );
}
