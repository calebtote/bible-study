/**
 * The assembled map feature set.
 *
 * Three sources come together here:
 *   1. point features generated from the curated site register;
 *   2. polygons and routes authored by hand in `features.ts`;
 *   3. coalitions and town sets, whose geometry is resolved from the register.
 *
 * The resolution step is where the study's honesty about location is enforced
 * mechanically rather than editorially. A site marked `unknown` produces no point
 * feature, and any set that lists it as a member simply comes out one member short,
 * with the omission recorded in `UNLOCATED_MEMBERS` so the interface can name what
 * is missing instead of quietly drawing an incomplete diagram as if it were whole.
 */

import type {
  Citation,
  FeatureCertainty,
  LayerId,
  MapFeature,
} from "../types";
import { siteFeatureId } from "../manifest";
import { SITE_SEEDS, SITE_SEED_BY_ID, UNLOCATED_SITE_IDS } from "./site-seeds";
import {
  AUTHORED_FEATURES,
  SITE_DERIVED_FEATURES,
  type SiteDerivedFeature,
} from "./features";

/* ------------------------------------------------------------------ */
/* Point features from the site register                               */
/* ------------------------------------------------------------------ */

const SITE_FEATURES: MapFeature[] = SITE_SEEDS.flatMap((seed) => {
  if (!seed.coords) return [];
  return [
    {
      id: siteFeatureId(seed.id),
      entityId: seed.id,
      geometry: { type: "Point", coordinates: seed.coords },
      kind: "site",
      certainty: seed.certainty,
      layer: seed.layer ?? "places",
      label: seed.name,
      explanation: seed.why,
      applicableMilestoneIds: [],
      priority: 10,
      eventIcon: seed.eventIcon,
      alternatives: seed.alternatives,
      citations: (seed.cites ?? []).map(
        (c): Citation => ({
          sourceId: c.sourceId,
          supportedClaim: c.claim,
          locator: c.locator,
        })
      ),
    } satisfies MapFeature,
  ];
});

/* ------------------------------------------------------------------ */
/* Resolving site-derived geometry                                     */
/* ------------------------------------------------------------------ */

/** Weakest first. Used to pick the certainty a set inherits from its members. */
const CERTAINTY_RANK: FeatureCertainty[] = [
  "unknown",
  "schematic",
  "disputed",
  "approximate",
  "well-supported",
];

const weakest = (values: FeatureCertainty[]): FeatureCertainty =>
  values.reduce(
    (worst, v) =>
      CERTAINTY_RANK.indexOf(v) < CERTAINTY_RANK.indexOf(worst) ? v : worst,
    "well-supported" as FeatureCertainty
  );

interface Resolved {
  feature: MapFeature | null;
  unlocated: string[];
}

/**
 * Coalitions draw as connectors from the convening city to each other member.
 * `memberSiteIds[0]` is that city by convention, and in all three coalitions the
 * text names it: Adoni-zedek of Jerusalem convenes the five, Jabin of Hazor gathers
 * the north, and Gibeon acts for its three neighbours.
 */
function resolve(seed: SiteDerivedFeature): Resolved {
  const located: { id: string; coords: [number, number]; certainty: FeatureCertainty }[] =
    [];
  const unlocated: string[] = [];

  for (const id of seed.memberSiteIds) {
    const site = SITE_SEED_BY_ID[id];
    if (!site) {
      unlocated.push(id);
      continue;
    }
    if (!site.coords) {
      unlocated.push(id);
      continue;
    }
    located.push({ id, coords: site.coords, certainty: site.certainty });
  }

  if (located.length === 0) return { feature: null, unlocated };

  const certainty =
    seed.certainty ?? weakest(located.map((m) => m.certainty));

  let geometry: MapFeature["geometry"];
  if (seed.kind === "coalition") {
    const [hub, ...rest] = located;
    if (rest.length === 0) return { feature: null, unlocated };
    geometry = {
      type: "MultiLineString",
      coordinates: rest.map((m) => [hub.coords, m.coords]),
    };
  } else if (located.length === 1) {
    geometry = { type: "Point", coordinates: located[0].coords };
  } else {
    geometry = { type: "MultiPoint", coordinates: located.map((m) => m.coords) };
  }

  const { memberSiteIds, ...rest } = seed;
  return {
    feature: { ...rest, certainty, geometry, memberSiteIds },
    unlocated,
  };
}

const resolved = SITE_DERIVED_FEATURES.map((seed) => ({
  seed,
  ...resolve(seed),
}));

const DERIVED_FEATURES: MapFeature[] = resolved
  .map((r) => r.feature)
  .filter((f): f is MapFeature => f !== null);

/**
 * Members a set could not draw, keyed by feature id. Empty arrays are omitted.
 * The interface reads this to say, for example, that the northern coalition is
 * drawn without Madon because Madon's location is not known.
 */
export const UNLOCATED_MEMBERS: Record<string, string[]> = Object.fromEntries(
  resolved
    .filter((r) => r.unlocated.length > 0)
    .map((r) => [r.seed.id, r.unlocated])
);

/** Sets that resolved to nothing at all, so the interface can explain the gap. */
export const UNDRAWABLE_FEATURE_IDS: string[] = resolved
  .filter((r) => r.feature === null)
  .map((r) => r.seed.id);

/* ------------------------------------------------------------------ */
/* The assembled set                                                   */
/* ------------------------------------------------------------------ */

export const ALL_FEATURES: MapFeature[] = [
  ...SITE_FEATURES,
  ...AUTHORED_FEATURES,
  ...DERIVED_FEATURES,
];

export const FEATURE_BY_ID: Record<string, MapFeature> = Object.fromEntries(
  ALL_FEATURES.map((f) => [f.id, f])
);

export const FEATURES_BY_LAYER: Record<LayerId, MapFeature[]> =
  ALL_FEATURES.reduce(
    (acc, f) => {
      acc[f.layer].push(f);
      return acc;
    },
    {
      places: [],
      movement: [],
      events: [],
      peoples: [],
      allotments: [],
      "remaining-land": [],
      "modern-reference": [],
    } as Record<LayerId, MapFeature[]>
  );

/**
 * Context features draw whenever their layer is on, rather than waiting for a
 * milestone to name them. These are the physiographic regions: the land does not
 * appear and disappear as the story moves.
 */
export const CONTEXT_FEATURE_IDS: string[] = AUTHORED_FEATURES.filter(
  (f) => f.kind === "region"
).map((f) => f.id);

/** Places named in the study that the study refuses to put on the map. */
export { UNLOCATED_SITE_IDS };
