/**
 * Turning authored features into MapLibre layers.
 *
 * This file is where the study's rules about what a map may claim become actual
 * styling, so they are worth stating plainly.
 *
 * There is no "territory Israel controls" layer, and there cannot be one,
 * because no such data exists in the model. A victory is an event mark at a
 * point. An allotment is a hatched polygon on its own toggle. Land the book says
 * was not taken is a separate layer again, and it stays on the map while the
 * victories accumulate. The result is that the book cannot be animated as a
 * steadily filling empire, because nothing in the data fills.
 *
 * Texture carries as much of the meaning as colour:
 *
 *   physiographic region   soft fill, thin solid edge     the edge is real
 *   tribal allotment       open diagonal hatch, dashed    assigned, not held
 *   remaining land         dense cross hatch, dotted      named as not possessed
 *   people or polity       stipple, and no outline at all never a border
 *   schematic              dot grid                       a diagram, not a place
 *
 * `line-dasharray` is not data driven in MapLibre, so each certainty gets its
 * own layer rather than an expression. That is more verbose and it is also more
 * honest to read: you can see in the layer list that a disputed route and a
 * well supported one are drawn by different code.
 */

import type {
  CircleLayerSpecification,
  FillLayerSpecification,
  LineLayerSpecification,
  SymbolLayerSpecification,
} from "maplibre-gl";
import type { Feature, FeatureCollection, Geometry } from "geojson";
import type { FeatureCertainty, MapFeature } from "@/content/types";
import { MAP_COLORS } from "@/lib/design/palette";
import { iconImageId } from "./icons";

export const FEATURES_SOURCE = "study-features";
export const ROUTES_SOURCE = "study-routes";

/** Dash patterns, in line-width multiples. Shape, not colour, tells them apart. */
export const DASH: Record<FeatureCertainty, number[] | undefined> = {
  "well-supported": undefined,
  approximate: [3, 1.6],
  disputed: [1.2, 1.4],
  schematic: [4.5, 1.4, 1, 1.4],
  /* Never drawn. Present so the record is exhaustive. */
  unknown: undefined,
};

const DRAWN_CERTAINTIES: FeatureCertainty[] = [
  "well-supported",
  "approximate",
  "disputed",
  "schematic",
];

/* ------------------------------------------------------------------ */
/* Feature properties                                                  */
/* ------------------------------------------------------------------ */

export interface FeatureProps {
  id: string;
  entityId?: string;
  kind: MapFeature["kind"];
  certainty: FeatureCertainty;
  layer: MapFeature["layer"];
  label: string;
  eventIcon?: string;
  /** Currently selected, so it can be lifted and haloed. */
  selected: boolean;
  /** On the map for context rather than because this milestone names it. */
  context: boolean;
  priority: number;
}

const isPolygon = (g: Geometry) =>
  g.type === "Polygon" || g.type === "MultiPolygon";
const isLine = (g: Geometry) =>
  g.type === "LineString" || g.type === "MultiLineString";

export function toGeoJson(
  features: MapFeature[],
  opts: { selectedId?: string | null; contextIds?: Set<string> } = {}
): FeatureCollection<Geometry, FeatureProps> {
  return {
    type: "FeatureCollection",
    features: features.map(
      (f): Feature<Geometry, FeatureProps> => ({
        type: "Feature",
        id: f.id,
        geometry: f.geometry,
        properties: {
          id: f.id,
          entityId: f.entityId,
          kind: f.kind,
          certainty: f.certainty,
          layer: f.layer,
          label: f.label,
          eventIcon: f.eventIcon,
          selected: f.id === opts.selectedId || f.entityId === opts.selectedId,
          context: opts.contextIds?.has(f.id) ?? false,
          priority: f.priority ?? 0,
        },
      })
    ),
  };
}

export const emptyCollection = (): FeatureCollection<Geometry, FeatureProps> => ({
  type: "FeatureCollection",
  features: [],
});

/* ------------------------------------------------------------------ */
/* Layers                                                             */
/* ------------------------------------------------------------------ */

const src = FEATURES_SOURCE;

/** Polygon fills. Each texture is a claim about what kind of area this is. */
const fillLayers: FillLayerSpecification[] = [
  {
    /*
     * Peoples and polities. Stipple, low opacity, and no companion line layer.
     * The absence of an outline is the point: these are rough areas of presence
     * and influence, and a crisp edge would turn them into states with borders.
     */
    id: "poly-peoples",
    type: "fill",
    source: src,
    filter: ["all", ["==", ["get", "layer"], "peoples"], ["==", ["geometry-type"], "Polygon"]],
    paint: {
      "fill-pattern": "stipple-peoples",
      "fill-opacity": 0.75,
    },
  },
  {
    id: "poly-region",
    type: "fill",
    source: src,
    filter: ["all", ["==", ["get", "kind"], "region"], ["==", ["geometry-type"], "Polygon"]],
    paint: {
      "fill-color": MAP_COLORS.region,
      "fill-opacity": ["case", ["get", "selected"], 0.2, 0.085],
    },
  },
  {
    id: "poly-allotment",
    type: "fill",
    source: src,
    filter: ["all", ["==", ["get", "kind"], "allotment"], ["==", ["geometry-type"], "Polygon"]],
    paint: {
      "fill-pattern": "hatch-allotment",
      "fill-opacity": ["case", ["get", "selected"], 1, 0.8],
    },
  },
  {
    id: "poly-remaining",
    type: "fill",
    source: src,
    filter: [
      "all",
      ["==", ["get", "kind"], "remaining-land"],
      ["==", ["geometry-type"], "Polygon"],
    ],
    paint: {
      "fill-pattern": "hatch-remaining",
      "fill-opacity": 0.85,
    },
  },
  {
    id: "poly-schematic",
    type: "fill",
    source: src,
    filter: [
      "all",
      ["==", ["get", "certainty"], "schematic"],
      ["==", ["geometry-type"], "Polygon"],
      ["!=", ["get", "kind"], "allotment"],
      ["!=", ["get", "layer"], "peoples"],
    ],
    paint: { "fill-pattern": "grid-schematic", "fill-opacity": 0.7 },
  },
];

/**
 * Polygon outlines, one layer per certainty so each can carry its own dash.
 * Peoples are excluded everywhere: they get no outline at any certainty.
 */
function polygonOutlines(): LineLayerSpecification[] {
  const out: LineLayerSpecification[] = [];

  for (const certainty of DRAWN_CERTAINTIES) {
    const dash = DASH[certainty];

    out.push({
      id: `poly-edge-region-${certainty}`,
      type: "line",
      source: src,
      filter: [
        "all",
        ["==", ["get", "kind"], "region"],
        ["==", ["get", "certainty"], certainty],
        ["==", ["geometry-type"], "Polygon"],
      ],
      paint: {
        "line-color": MAP_COLORS.region,
        "line-width": ["case", ["get", "selected"], 1.8, 0.9],
        "line-opacity": 0.55,
        ...(dash ? { "line-dasharray": dash } : {}),
      },
    });

    out.push({
      id: `poly-edge-allotment-${certainty}`,
      type: "line",
      source: src,
      filter: [
        "all",
        ["==", ["get", "kind"], "allotment"],
        ["==", ["get", "certainty"], certainty],
        ["==", ["geometry-type"], "Polygon"],
      ],
      paint: {
        "line-color": MAP_COLORS.allotment,
        "line-width": ["case", ["get", "selected"], 2.2, 1.2],
        "line-opacity": 0.8,
        /*
         * An allotment edge is dashed even when the certainty is the best the
         * data offers, because the boundary lists in Joshua name places rather
         * than tracing a line, and the drawn edge is always an interpolation
         * between the few of those places that can be located.
         */
        "line-dasharray": dash ?? [3, 1.6],
      },
    });

    out.push({
      id: `poly-edge-remaining-${certainty}`,
      type: "line",
      source: src,
      filter: [
        "all",
        ["==", ["get", "kind"], "remaining-land"],
        ["==", ["get", "certainty"], certainty],
        ["==", ["geometry-type"], "Polygon"],
      ],
      paint: {
        "line-color": MAP_COLORS.remaining,
        "line-width": ["case", ["get", "selected"], 2.2, 1.1],
        "line-opacity": 0.85,
        "line-dasharray": dash ?? [1.4, 1.4],
      },
    });
  }

  return out;
}

/**
 * Movement. Drawn from a separate source so the line can be animated by
 * replacing its geometry without re-serialising every polygon on the map.
 *
 * A casing sits under each route so a bronze line stays legible where it
 * crosses water or a hatched allotment.
 */
function routeLayers(): LineLayerSpecification[] {
  const out: LineLayerSpecification[] = [
    {
      id: "route-casing",
      type: "line",
      source: ROUTES_SOURCE,
      filter: ["==", ["get", "kind"], "route"],
      layout: { "line-cap": "round", "line-join": "round" },
      paint: {
        "line-color": MAP_COLORS.labelHalo,
        "line-width": ["interpolate", ["linear"], ["zoom"], 6, 4.5, 11, 7],
        "line-opacity": 0.7,
      },
    },
  ];

  for (const certainty of DRAWN_CERTAINTIES) {
    const dash = DASH[certainty];
    out.push({
      id: `route-${certainty}`,
      type: "line",
      source: ROUTES_SOURCE,
      filter: [
        "all",
        ["==", ["get", "kind"], "route"],
        ["==", ["get", "certainty"], certainty],
      ],
      layout: { "line-cap": dash ? "butt" : "round", "line-join": "round" },
      paint: {
        "line-color": MAP_COLORS.route,
        "line-width": ["interpolate", ["linear"], ["zoom"], 6, 2, 11, 3.4],
        "line-opacity": certainty === "schematic" ? 0.7 : 0.95,
        ...(dash ? { "line-dasharray": dash } : {}),
      },
    });
  }

  /*
   * Coalitions. Connectors from the convening city to each ally, never a shaded
   * area, because an alliance is a set of cities that agreed to act together and
   * not a region anybody governed.
   */
  for (const certainty of DRAWN_CERTAINTIES) {
    const dash = DASH[certainty];
    out.push({
      id: `coalition-${certainty}`,
      type: "line",
      source: src,
      filter: [
        "all",
        ["==", ["get", "kind"], "coalition"],
        ["==", ["get", "certainty"], certainty],
      ],
      layout: { "line-join": "round" },
      paint: {
        "line-color": MAP_COLORS.conflict,
        "line-width": ["case", ["get", "selected"], 2.4, 1.4],
        "line-opacity": 0.8,
        "line-dasharray": dash ?? [2.5, 1.5],
      },
    });
  }

  return out;
}

/**
 * Points. Shape as well as colour distinguishes certainty, so a disputed
 * identification reads as provisional without relying on hue:
 *
 *   well supported   filled disc, solid ring
 *   approximate      filled disc, lighter and slightly larger ring
 *   disputed         hollow disc, dashed ring, and a "?" in its label
 *   schematic        drawn smaller and paler, since it marks a diagram
 */
const pointLayers: (CircleLayerSpecification | SymbolLayerSpecification)[] = [
  {
    /* Selection halo. Bronze, generous, sits under the marker. */
    id: "site-halo",
    type: "circle",
    source: src,
    filter: ["all", ["get", "selected"], ["!=", ["geometry-type"], "Polygon"]],
    paint: {
      "circle-radius": ["interpolate", ["linear"], ["zoom"], 6, 11, 11, 17],
      "circle-color": MAP_COLORS.siteSelected,
      "circle-opacity": 0.18,
      "circle-stroke-color": MAP_COLORS.siteSelected,
      "circle-stroke-width": 1,
      "circle-stroke-opacity": 0.5,
    },
  },
  {
    id: "site-circle",
    type: "circle",
    source: src,
    filter: [
      "all",
      ["==", ["get", "kind"], "site"],
      ["!=", ["get", "certainty"], "disputed"],
    ],
    paint: {
      "circle-radius": [
        "interpolate",
        ["linear"],
        ["zoom"],
        6,
        ["case", ["get", "selected"], 5.5, ["==", ["get", "certainty"], "schematic"], 3, 4],
        11,
        ["case", ["get", "selected"], 8, ["==", ["get", "certainty"], "schematic"], 4.5, 6],
      ],
      "circle-color": [
        "case",
        ["get", "selected"],
        MAP_COLORS.siteSelected,
        ["get", "context"],
        MAP_COLORS.region,
        MAP_COLORS.site,
      ],
      "circle-opacity": ["case", ["==", ["get", "certainty"], "schematic"], 0.6, 1],
      "circle-stroke-color": MAP_COLORS.labelHalo,
      "circle-stroke-width": ["interpolate", ["linear"], ["zoom"], 6, 1.2, 11, 2],
    },
  },
  {
    /* Disputed sites are hollow, so they read as a question at a glance. */
    id: "site-disputed",
    type: "circle",
    source: src,
    filter: [
      "all",
      ["==", ["get", "kind"], "site"],
      ["==", ["get", "certainty"], "disputed"],
    ],
    paint: {
      "circle-radius": ["interpolate", ["linear"], ["zoom"], 6, 4.5, 11, 6.5],
      "circle-color": MAP_COLORS.labelHalo,
      "circle-opacity": 0.9,
      "circle-stroke-color": [
        "case",
        ["get", "selected"],
        MAP_COLORS.siteSelected,
        MAP_COLORS.site,
      ],
      "circle-stroke-width": ["interpolate", ["linear"], ["zoom"], 6, 1.4, 11, 2.2],
    },
  },
  {
    /* Scattered town sets: Levi's towns, Simeon's, the cities of refuge. */
    id: "town-group",
    type: "circle",
    source: src,
    filter: ["==", ["get", "kind"], "town-group"],
    paint: {
      "circle-radius": ["interpolate", ["linear"], ["zoom"], 6, 4, 11, 6],
      "circle-color": MAP_COLORS.covenant,
      "circle-opacity": 0.85,
      "circle-stroke-color": MAP_COLORS.labelHalo,
      "circle-stroke-width": 1.6,
    },
  },
  {
    id: "event-icon",
    type: "symbol",
    source: src,
    filter: ["all", ["has", "eventIcon"], ["!=", ["geometry-type"], "Polygon"]],
    layout: {
      "icon-image": ["concat", "ev-", ["get", "eventIcon"]],
      "icon-size": ["interpolate", ["linear"], ["zoom"], 6, 0.72, 11, 1],
      "icon-allow-overlap": true,
      "icon-anchor": "center",
      /* Offset so the mark sits beside its point rather than hiding it. */
      "icon-offset": [0, -14],
    },
  },
];

export const FEATURE_LAYER_SPECS = [
  ...fillLayers,
  ...polygonOutlines(),
  ...routeLayers(),
  ...pointLayers,
];

/** Every layer id this module owns, in draw order. */
export const FEATURE_LAYER_IDS = FEATURE_LAYER_SPECS.map((l) => l.id);

/** Ids of the layers that respond to a click, topmost first. */
export const INTERACTIVE_LAYER_IDS = [
  "event-icon",
  "site-disputed",
  "site-circle",
  "town-group",
  ...DRAWN_CERTAINTIES.map((c) => `coalition-${c}`),
  ...DRAWN_CERTAINTIES.map((c) => `route-${c}`),
  "poly-allotment",
  "poly-remaining",
  "poly-region",
  "poly-peoples",
];

export { iconImageId, isLine, isPolygon };

/* ------------------------------------------------------------------ */
/* Progressive route drawing                                          */
/* ------------------------------------------------------------------ */

type Pos = [number, number];

const dist = (a: Pos, b: Pos) => Math.hypot(b[0] - a[0], b[1] - a[1]);

function sliceLine(coords: Pos[], target: number): { line: Pos[]; used: number } {
  if (coords.length < 2 || target <= 0) return { line: [], used: 0 };
  const out: Pos[] = [coords[0]];
  let used = 0;
  for (let i = 1; i < coords.length; i++) {
    const seg = dist(coords[i - 1], coords[i]);
    if (used + seg >= target) {
      const t = seg === 0 ? 0 : (target - used) / seg;
      out.push([
        coords[i - 1][0] + (coords[i][0] - coords[i - 1][0]) * t,
        coords[i - 1][1] + (coords[i][1] - coords[i - 1][1]) * t,
      ]);
      return { line: out, used: target };
    }
    out.push(coords[i]);
    used += seg;
  }
  return { line: out, used };
}

const lengthOf = (coords: Pos[]) =>
  coords.reduce((n, c, i) => (i === 0 ? 0 : n + dist(coords[i - 1], c)), 0);

/**
 * Draw a route partially, for the animation that shows direction of travel.
 *
 * A MultiLineString advances through its segments in order, which matters for
 * the southern sweep: that route is deliberately broken where Makkedah and
 * Libnah cannot be located, and the gaps have to stay gaps while it draws.
 */
export function partialGeometry(geometry: Geometry, progress: number): Geometry {
  const t = Math.max(0, Math.min(1, progress));
  if (t >= 1) return geometry;

  if (geometry.type === "LineString") {
    const coords = geometry.coordinates as Pos[];
    const { line } = sliceLine(coords, lengthOf(coords) * t);
    return line.length >= 2
      ? { type: "LineString", coordinates: line }
      : { type: "LineString", coordinates: [] };
  }

  if (geometry.type === "MultiLineString") {
    const parts = geometry.coordinates as Pos[][];
    const total = parts.reduce((n, p) => n + lengthOf(p), 0);
    let remaining = total * t;
    const drawn: Pos[][] = [];
    for (const part of parts) {
      if (remaining <= 0) break;
      const len = lengthOf(part);
      if (remaining >= len) {
        drawn.push(part);
        remaining -= len;
      } else {
        const { line } = sliceLine(part, remaining);
        if (line.length >= 2) drawn.push(line);
        remaining = 0;
      }
    }
    return { type: "MultiLineString", coordinates: drawn };
  }

  return geometry;
}
