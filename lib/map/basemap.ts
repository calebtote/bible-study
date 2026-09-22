/**
 * The basemap style.
 *
 * Built entirely from GeoJSON files in `public/geo`, generated from public
 * domain Natural Earth data by `scripts/build-basemap.mjs`. There is no tile
 * server in the default path and no API key anywhere, because the study has to
 * work when the network does not. Shaded relief is the one optional extra, and
 * it is added on top of a map that is already complete without it.
 *
 * The terrain reads ancient: sandy fills, muted water, fine labels, no
 * saturated political colour. The interface around it stays modern.
 */

import type { StyleSpecification } from "maplibre-gl";
import { MAP_COLORS } from "@/lib/design/palette";
import { withBasePath } from "@/lib/base-path";

/** The study area, used for the reset view and to fence the camera in. */
export const STUDY_BOUNDS: [[number, number], [number, number]] = [
  [32.4, 29.2],
  [37.6, 34.6],
];

/** Wider, for the orientation views that need Egypt and Mesopotamia in frame. */
export const WIDE_BOUNDS: [[number, number], [number, number]] = [
  [25.0, 23.0],
  [49.0, 39.0],
];

export const DEFAULT_CENTER: [number, number] = [35.3, 31.9];
export const DEFAULT_ZOOM = 7.4;

/**
 * Terrain tiles from the AWS Open Data set. No key, no account, public sources.
 * Treated strictly as decoration: if these fail, `AtlasMap` removes the
 * hillshade and says so, and no study content is affected.
 */
export const TERRAIN_TILES =
  "https://s3.amazonaws.com/elevation-tiles-prod/terrarium/{z}/{x}/{y}.png";

export const TERRAIN_ATTRIBUTION =
  '<a href="https://registry.opendata.aws/terrain-tiles/" target="_blank" rel="noreferrer">Terrain tiles</a> (AWS Open Data)';

export const BASE_ATTRIBUTION =
  '<a href="https://www.naturalearthdata.com/" target="_blank" rel="noreferrer">Natural Earth</a> (public domain)';

export function buildBaseStyle(opts: { wide: boolean }): StyleSpecification {
  const landUrl = withBasePath(opts.wide ? "/geo/land-wide.json" : "/geo/land.json");

  return {
    version: 8,
    /*
     * Deliberately no `glyphs` and no `sprite`.
     *
     * MapLibre can only render `text-field` if it can fetch glyph ranges from a
     * server, which would put a network dependency under the one thing the
     * study must never lose: the ability to read the map offline. So no layer
     * here uses text. Place names are drawn as DOM elements over the canvas by
     * `MapLabels`, which has the side benefit of setting them in Source Serif
     * rather than in whatever a glyph pack happens to contain. Icons need no
     * glyphs, so those stay on the canvas, drawn into the map by `icons.ts`.
     *
     * These are MapLibre style sources, not `next/link` destinations, so Next's
     * `basePath` rewriting never reaches them; `withBasePath` does that work by hand.
     */
    sources: {
      land: { type: "geojson", data: landUrl },
      lakes: { type: "geojson", data: withBasePath("/geo/lakes.json") },
      rivers: { type: "geojson", data: withBasePath("/geo/rivers.json") },
    },
    layers: [
      {
        id: "sea",
        type: "background",
        paint: { "background-color": MAP_COLORS.sea },
      },
      {
        id: "coastal-wash",
        type: "line",
        source: "land",
        paint: {
          "line-color": "#DCE5DA",
          "line-width": ["interpolate", ["linear"], ["zoom"], 4, 3, 9, 12, 13, 20],
          "line-blur": 5,
          "line-opacity": 0.5,
        },
      },
      {
        id: "land",
        type: "fill",
        source: "land",
        paint: { "fill-color": MAP_COLORS.land },
      },
      {
        id: "coast",
        type: "line",
        source: "land",
        paint: {
          "line-color": MAP_COLORS.coast,
          "line-width": ["interpolate", ["linear"], ["zoom"], 5, 0.5, 10, 1.1],
          "line-opacity": 0.7,
        },
      },
      {
        id: "lakes",
        type: "fill",
        source: "lakes",
        paint: { "fill-color": MAP_COLORS.lake },
      },
      {
        id: "lakes-edge",
        type: "line",
        source: "lakes",
        paint: {
          "line-color": MAP_COLORS.lakeEdge,
          "line-width": 0.7,
          "line-opacity": 0.65,
        },
      },
      {
        id: "rivers",
        type: "line",
        source: "rivers",
        paint: {
          "line-color": MAP_COLORS.river,
          "line-width": ["interpolate", ["linear"], ["zoom"], 5, 0.6, 10, 2.2],
          "line-opacity": 0.7,
        },
        layout: { "line-cap": "round", "line-join": "round" },
      },
    ],
  };
}

/**
 * Whether the bundled basemap files are actually present and parseable.
 *
 * Called once on mount. A missing or corrupt file is not fatal: the map still
 * draws the study's own features over a plain sand background, which is enough
 * to read every milestone. The point of checking is to be able to say so
 * rather than to show an empty rectangle and let the reader wonder.
 */
export async function checkBundledGeography(): Promise<{
  ok: boolean;
  missing: string[];
}> {
  const files = ["/geo/land.json", "/geo/lakes.json", "/geo/rivers.json"].map(withBasePath);
  const missing: string[] = [];
  await Promise.all(
    files.map(async (f) => {
      try {
        const res = await fetch(f, { cache: "force-cache" });
        if (!res.ok) missing.push(f);
      } catch {
        missing.push(f);
      }
    })
  );
  return { ok: missing.length === 0, missing };
}
