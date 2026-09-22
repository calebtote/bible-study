/**
 * Builds the bundled offline basemap from Natural Earth data.
 *
 * Natural Earth is public domain (https://www.naturalearthdata.com/about/terms-of-use/).
 * `world-atlas` ships the land polygons as TopoJSON; the lakes and river centrelines
 * are fetched once from the natural-earth-vector repository and cached under
 * `scripts/.cache/` so the build does not need network access on a rebuild.
 *
 * Output lands in `public/geo/`, is served as plain static JSON, and is what makes
 * the map work with no external tile server at all.
 *
 * Run: node scripts/build-basemap.mjs
 */

import fs from "node:fs";
import path from "node:path";
import { feature } from "topojson-client";

const ROOT = path.resolve(import.meta.dirname, "..");
const OUT = path.join(ROOT, "public", "geo");
const CACHE = path.join(ROOT, "scripts", ".cache");

fs.mkdirSync(OUT, { recursive: true });
fs.mkdirSync(CACHE, { recursive: true });

/**
 * Land is clipped wider than the water, and the difference is deliberate.
 *
 * The basemap paints sea as a background colour and lays land polygons over it, so
 * anywhere the land data stops, the map claims ocean. `AtlasMap` fences the camera
 * to lon 28.5..41.5 and lat 26.5..37.5, which means the land outline has to cover at
 * least that much or a reader panning east of Amman sails into an invented sea. This
 * box is the camera fence plus a degree of margin.
 */
const LAND_BBOX = { west: 27.5, south: 25.5, east: 42.5, north: 38.5 };

/**
 * Water stays clipped to the southern Levant, which is a curation decision rather
 * than a performance one. Natural Earth's lake layer is modern: widening this box
 * pulls in reservoirs like Lake Assad that were filled in the 1970s, and a study of
 * Joshua should not draw them. The named-waterworks filter below catches some, but
 * not reliably enough to trust at continental scale. Inside this box the water set
 * is small enough to have been checked by hand: the Sea of Galilee, the Dead Sea,
 * and the Jordan.
 */
const WATER_BBOX = { west: 32.0, south: 28.6, east: 38.2, north: 35.6 };

/**
 * The wide view, for Joshua 24's recital and the Before Joshua stages. Again sized
 * past its camera fence of lon 14..60, lat 14..48.
 */
const WIDE_BBOX = { west: 13.0, south: 13.0, east: 61.0, north: 49.0 };

const NE_BASE =
  "https://raw.githubusercontent.com/nvkelso/natural-earth-vector/master/geojson";

async function cached(name) {
  const file = path.join(CACHE, `${name}.geojson`);
  if (fs.existsSync(file)) return JSON.parse(fs.readFileSync(file, "utf8"));
  process.stdout.write(`fetching ${name}... `);
  const res = await fetch(`${NE_BASE}/${name}.geojson`);
  if (!res.ok) throw new Error(`${name}: HTTP ${res.status}`);
  const text = await res.text();
  fs.writeFileSync(file, text);
  console.log("cached");
  return JSON.parse(text);
}

/* ------------------------------------------------------------------ */
/* Clipping                                                            */
/* ------------------------------------------------------------------ */

const inside = (p, edge, b) => {
  if (edge === "west") return p[0] >= b.west;
  if (edge === "east") return p[0] <= b.east;
  if (edge === "south") return p[1] >= b.south;
  return p[1] <= b.north;
};

function intersect(a, c, edge, b) {
  const [x1, y1] = a;
  const [x2, y2] = c;
  if (edge === "west" || edge === "east") {
    const x = edge === "west" ? b.west : b.east;
    return [x, y1 + ((y2 - y1) * (x - x1)) / (x2 - x1)];
  }
  const y = edge === "south" ? b.south : b.north;
  return [x1 + ((x2 - x1) * (y - y1)) / (y2 - y1), y];
}

/** Sutherland-Hodgman. Correct for a convex clip rectangle, which is all we need. */
function clipRing(ring, b) {
  let out = ring;
  for (const edge of ["west", "east", "south", "north"]) {
    const input = out;
    out = [];
    for (let i = 0; i < input.length; i++) {
      const cur = input[i];
      const prev = input[(i + input.length - 1) % input.length];
      const curIn = inside(cur, edge, b);
      const prevIn = inside(prev, edge, b);
      if (curIn) {
        if (!prevIn) out.push(intersect(prev, cur, edge, b));
        out.push(cur);
      } else if (prevIn) {
        out.push(intersect(prev, cur, edge, b));
      }
    }
    if (out.length === 0) return null;
  }
  if (out.length < 4) return null;
  const first = out[0];
  const last = out[out.length - 1];
  if (first[0] !== last[0] || first[1] !== last[1]) out.push([...first]);
  return out;
}

const bboxOverlaps = (coords, b) => {
  let minX = Infinity,
    minY = Infinity,
    maxX = -Infinity,
    maxY = -Infinity;
  const walk = (c) => {
    if (typeof c[0] === "number") {
      if (c[0] < minX) minX = c[0];
      if (c[0] > maxX) maxX = c[0];
      if (c[1] < minY) minY = c[1];
      if (c[1] > maxY) maxY = c[1];
      return;
    }
    for (const x of c) walk(x);
  };
  walk(coords);
  return !(maxX < b.west || minX > b.east || maxY < b.south || minY > b.north);
};

function clipPolygonGeometry(geom, b) {
  const polys = geom.type === "Polygon" ? [geom.coordinates] : geom.coordinates;
  const kept = [];
  for (const poly of polys) {
    if (!bboxOverlaps(poly, b)) continue;
    const rings = poly.map((r) => clipRing(r, b)).filter(Boolean);
    if (rings.length) kept.push(rings);
  }
  if (!kept.length) return null;
  return kept.length === 1
    ? { type: "Polygon", coordinates: kept[0] }
    : { type: "MultiPolygon", coordinates: kept };
}

/** Line clipping: split into the runs that fall inside the box. */
function clipLineGeometry(geom, b) {
  const lines =
    geom.type === "LineString" ? [geom.coordinates] : geom.coordinates;
  const kept = [];
  const within = (p) =>
    p[0] >= b.west && p[0] <= b.east && p[1] >= b.south && p[1] <= b.north;
  for (const line of lines) {
    let run = [];
    for (const p of line) {
      if (within(p)) {
        run.push(p);
      } else if (run.length > 1) {
        kept.push(run);
        run = [];
      } else {
        run = [];
      }
    }
    if (run.length > 1) kept.push(run);
  }
  if (!kept.length) return null;
  return kept.length === 1
    ? { type: "LineString", coordinates: kept[0] }
    : { type: "MultiLineString", coordinates: kept };
}

const round = (n, dp) => Math.round(n * 10 ** dp) / 10 ** dp;

function roundCoords(c, dp) {
  if (typeof c[0] === "number") return [round(c[0], dp), round(c[1], dp)];
  return c.map((x) => roundCoords(x, dp));
}

function fc(features) {
  return { type: "FeatureCollection", features };
}

/**
 * Natural Earth is a modern dataset, so its water layers include works that did
 * not exist in antiquity. Drawing the Suez Canal on a map of Joshua would be a
 * small absurdity, so named modern constructions are dropped.
 */
const MODERN_WATERWORKS = /canal|reservoir|bitter lake|lake nasser|qattinah/i;
const isModernWaterwork = (name) => Boolean(name && MODERN_WATERWORKS.test(name));

function write(name, collection) {
  const file = path.join(OUT, `${name}.json`);
  fs.writeFileSync(file, JSON.stringify(collection));
  const kb = (fs.statSync(file).size / 1024).toFixed(0);
  console.log(`  ${name}.json  ${collection.features.length} features  ${kb} KB`);
}

/* ------------------------------------------------------------------ */
/* Build                                                               */
/* ------------------------------------------------------------------ */

console.log("Building bundled basemap from Natural Earth (public domain)\n");

/* Land, at two resolutions for two zoom regimes. */
for (const [name, topoFile, bbox, dp] of [
  ["land", "land-10m.json", LAND_BBOX, 4],
  ["land-wide", "land-50m.json", WIDE_BBOX, 3],
]) {
  const topo = JSON.parse(
    fs.readFileSync(
      path.join(ROOT, "node_modules", "world-atlas", topoFile),
      "utf8"
    )
  );
  const land = feature(topo, topo.objects.land);
  const geoms = land.type === "FeatureCollection" ? land.features : [land];
  const out = [];
  for (const f of geoms) {
    const g = clipPolygonGeometry(f.geometry, bbox);
    if (g) out.push({ type: "Feature", properties: {}, geometry: roundGeom(g, dp) });
  }
  write(name, fc(out));
}

function roundGeom(g, dp) {
  return { ...g, coordinates: roundCoords(g.coordinates, dp) };
}

/* Lakes. The Dead Sea and the Sea of Galilee are the ones that matter here. */
{
  const lakes = await cached("ne_10m_lakes");
  const out = [];
  for (const f of lakes.features) {
    if (!f.geometry || !bboxOverlaps(f.geometry.coordinates, WATER_BBOX)) continue;
    if (isModernWaterwork(f.properties?.name)) continue;
    const g = clipPolygonGeometry(f.geometry, WATER_BBOX);
    if (!g) continue;
    out.push({
      type: "Feature",
      properties: { name: f.properties?.name ?? null },
      geometry: roundGeom(g, 4),
    });
  }
  write("lakes", fc(out));
}

/* River centrelines. The Jordan, the Yarmuk, the Zarqa (Jabbok), the Mujib (Arnon). */
{
  const rivers = await cached("ne_10m_rivers_lake_centerlines");
  const out = [];
  for (const f of rivers.features) {
    if (!f.geometry || !bboxOverlaps(f.geometry.coordinates, WATER_BBOX)) continue;
    if (isModernWaterwork(f.properties?.name)) continue;
    const g = clipLineGeometry(f.geometry, WATER_BBOX);
    if (!g) continue;
    out.push({
      type: "Feature",
      properties: { name: f.properties?.name ?? null },
      geometry: roundGeom(g, 4),
    });
  }
  write("rivers", fc(out));
}

fs.writeFileSync(
  path.join(OUT, "ATTRIBUTION.txt"),
  [
    "Bundled geographic outlines in this directory are derived from Natural Earth.",
    "",
    "Natural Earth is in the public domain. No permission is needed to use it.",
    "https://www.naturalearthdata.com/about/terms-of-use/",
    "",
    "  land.json, land-wide.json   ne_10m_land / ne_50m_land, via the world-atlas package",
    "  lakes.json                  ne_10m_lakes",
    "  rivers.json                 ne_10m_rivers_lake_centerlines",
    "",
    "Coordinates are rounded and the data is clipped to the study area. Shorelines",
    "reflect the modern landscape: the Dead Sea's surface has fallen sharply in living",
    "memory and its southern basin is largely dry, so the ancient shoreline was not",
    "identical to the one drawn here.",
    "",
    "Optional shaded relief, when enabled in settings, is requested from the AWS Open",
    "Data terrain tile set (https://registry.opendata.aws/terrain-tiles/), which is",
    "assembled from public and open elevation sources including SRTM and GMTED2010.",
    "It is a visual enhancement only. Every piece of study content works without it.",
    "",
  ].join("\n")
);
console.log("\n  ATTRIBUTION.txt written");
console.log("\nDone.");
