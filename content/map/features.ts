/**
 * Authored map geometry: regions, allotments, routes, coalitions, remaining land.
 *
 * Everything in this file is a reconstruction, and `certainty` says how much of one.
 * Nothing here is a survey. The distinction the whole file exists to protect:
 *
 *   a physiographic region has real edges;
 *   a tribal allotment is a described area interpolated between the few boundary
 *     points that can actually be identified;
 *   a route the text does not give is a direction, not a march;
 *   a coalition is a set of cities and never a shaded territory.
 *
 * Conventions
 * -----------
 * `applicableMilestoneIds: []` means the feature is not bound to particular
 * milestones. Context features (the physiographic regions) draw whenever their
 * layer is on; everything else appears when a milestone lists its id in
 * `mapFeatureIds`.
 *
 * Polygon vertex counts are deliberately low. A twelve-point polygon reads as an
 * approximation. A two-hundred-point polygon reads as a survey, and would be a lie
 * about how well these boundaries are known.
 *
 * No coordinate in this file is a placeholder. Features whose position comes from
 * the site register are declared in `SITE_DERIVED_FEATURES` with `memberSiteIds`
 * and given geometry at load time, so a member whose location is unknown is simply
 * absent rather than pinned somewhere convenient.
 */

import type { Citation, FeatureCertainty, MapFeature } from "../types";

/* ------------------------------------------------------------------ */
/* Helpers                                                             */
/* ------------------------------------------------------------------ */

type Ring = [number, number][];

/**
 * A feature whose geometry is assembled from the site register rather than
 * authored here. Omit `certainty` to inherit the weakest certainty among the
 * located members, which is the only honest default for a set.
 */
export type SiteDerivedFeature = Omit<MapFeature, "geometry" | "certainty"> & {
  certainty?: FeatureCertainty;
  memberSiteIds: string[];
};

const cite = (
  sourceId: string,
  supportedClaim: string,
  locator?: string
): Citation => ({ sourceId, supportedClaim, locator });

/** Standard provenance for a tribal allotment polygon. */
const allotmentCites = (locator: string): Citation[] => [
  cite(
    "rainey-notley-sacred-bridge",
    "Reconstruction of the tribal boundary descriptions and the identification of their boundary points",
    locator
  ),
  cite(
    "aharoni-land-of-bible",
    "Physiographic framework used to interpolate between identified boundary points"
  ),
  cite(
    "hess-joshua",
    "Commentary on the boundary list and the limits of what it establishes",
    locator
  ),
];

const closeRing = (ring: Ring): Ring => {
  const [first] = ring;
  const last = ring[ring.length - 1];
  return first[0] === last[0] && first[1] === last[1] ? ring : [...ring, first];
};

const polygon = (ring: Ring) => ({
  type: "Polygon" as const,
  coordinates: [closeRing(ring)],
});

const line = (coordinates: Ring) => ({
  type: "LineString" as const,
  coordinates,
});

const multiLine = (coordinates: Ring[]) => ({
  type: "MultiLineString" as const,
  coordinates,
});

/* ------------------------------------------------------------------ */
/* 1. Physiographic regions: the land itself                           */
/* ------------------------------------------------------------------ */

interface RegionSeed {
  id: string;
  label: string;
  ring: Ring;
  explanation: string;
}

const REGION_SEEDS: RegionSeed[] = [
  {
    id: "region-shephelah",
    label: "The Shephelah",
    ring: [
      [34.85, 31.35],
      [35.0, 31.4],
      [35.05, 31.75],
      [34.95, 31.86],
      [34.82, 31.78],
      [34.8, 31.45],
    ],
    explanation:
      "The belt of low chalk hills between the coastal plain and the Judean highlands, roughly 100 to 400 m, cut by west-east valleys. Its edges are gradual rather than sharp, so this outline marks a zone. The zone is real, and it is the most useful piece of terrain in the book: every route from the coast into the hill country runs up one of its valleys.",
  },
  {
    id: "region-hill-country-judah",
    label: "The hill country of Judah",
    ring: [
      [35.0, 31.25],
      [35.25, 31.35],
      [35.32, 31.8],
      [35.15, 31.86],
      [34.98, 31.75],
      [34.98, 31.4],
    ],
    explanation:
      "The limestone ridge running south from Jerusalem through Hebron, mostly 600 to 1,000 m, with steep valleys falling away either side. Movement follows the ridge line, which is why the watershed road matters and why Hebron at about 900 m is genuinely strong ground.",
  },
  {
    id: "region-hill-country-ephraim",
    label: "The hill country of Ephraim",
    ring: [
      [35.05, 31.9],
      [35.35, 31.95],
      [35.45, 32.3],
      [35.25, 32.4],
      [35.05, 32.25],
      [35.0, 32.05],
    ],
    explanation:
      "The central highlands north of Benjamin, broken by the pass at Shechem between Ebal and Gerizim. More open and better watered than Judah's ridge, which is part of why this becomes Israel's early heartland and why Shiloh works as a central sanctuary.",
  },
  {
    id: "region-negev",
    label: "The Negev",
    ring: [
      [34.3, 30.6],
      [35.2, 30.9],
      [35.35, 31.15],
      [35.0, 31.28],
      [34.6, 31.2],
      [34.3, 30.95],
    ],
    explanation:
      "The dry south, where rainfall drops below what reliable grain farming needs. Its northern edge is a rainfall line that shifts from decade to decade, not a border. This is the terrain behind Achsah's request in Joshua 15: land here without springs is not much of an inheritance.",
  },
  {
    id: "region-coastal-plain",
    label: "The coastal plain",
    ring: [
      [34.45, 31.55],
      [34.8, 31.9],
      [34.92, 32.3],
      [34.85, 32.55],
      [34.7, 32.45],
      [34.55, 32.05],
      [34.4, 31.7],
    ],
    explanation:
      "The flat corridor along the Mediterranean carrying the main international route between Egypt and the north. Good ground for chariots and for armies, which is exactly why Israel does not hold it in this book even though several boundary descriptions reach the sea.",
  },
  {
    id: "region-jezreel-valley",
    label: "The Jezreel valley",
    ring: [
      [35.05, 32.52],
      [35.3, 32.58],
      [35.55, 32.52],
      [35.5, 32.42],
      [35.25, 32.42],
      [35.05, 32.45],
    ],
    explanation:
      "A broad flat valley cutting clean across the country from the coastal plain to the Jordan, ringed by fortified towns. Excellent chariot country, which is the problem: Joshua 17 says Manasseh could not take the valley towns, and the ground explains why.",
  },
  {
    id: "region-jordan-valley",
    label: "The Jordan valley",
    ring: [
      [35.48, 31.35],
      [35.6, 31.9],
      [35.62, 32.4],
      [35.58, 32.8],
      [35.45, 32.75],
      [35.45, 32.3],
      [35.4, 31.85],
      [35.38, 31.4],
    ],
    explanation:
      "The floor of the rift valley, below sea level for its whole length and hot. It is crossed at a limited number of fords, which is what makes the crossing in Joshua 3 a real geographic event and what makes the eastern tribes' position in Joshua 22 a real problem of identity.",
  },
  {
    id: "region-arabah",
    label: "The Arabah",
    ring: [
      [35.42, 31.02],
      [35.55, 30.85],
      [35.35, 30.3],
      [35.12, 29.7],
      [34.98, 29.55],
      [34.92, 29.7],
      [35.05, 30.2],
      [35.22, 30.75],
      [35.32, 31.0],
    ],
    explanation:
      "The continuation of the rift south of the Dead Sea toward the Gulf of Aqaba, arid and deep. Joshua uses the word Arabah with more than one scope: sometimes this southern stretch, sometimes the whole rift including the Jordan valley, sometimes the valley floor beside the Dead Sea. The outline shows the southern stretch and the label deliberately claims no more than that.",
  },
  {
    id: "region-wilderness-judah",
    label: "The wilderness of Judah",
    ring: [
      [35.25, 31.3],
      [35.42, 31.35],
      [35.48, 31.8],
      [35.32, 31.82],
      [35.22, 31.7],
    ],
    explanation:
      "The steep rain-shadow slope east of the Judean ridge, dropping more than a kilometre to the Dead Sea. Almost unusable for farming, which is why Judah's wilderness district in Joshua 15 contains so few towns.",
  },
  {
    id: "region-galilee",
    label: "Galilee",
    ring: [
      [35.05, 32.65],
      [35.45, 32.7],
      [35.6, 33.25],
      [35.4, 33.35],
      [35.1, 33.1],
      [35.0, 32.85],
    ],
    explanation:
      "The northern highlands: higher and wetter above, lower and more open below. The upper part is rugged enough to be defensible, while the lower part opens toward the Jezreel valley and the routes through it.",
  },
  {
    id: "region-huleh-basin",
    label: "The Huleh basin",
    ring: [
      [35.55, 33.05],
      [35.7, 33.1],
      [35.72, 33.35],
      [35.6, 33.4],
      [35.52, 33.25],
    ],
    explanation:
      "The marshy upper Jordan basin below Hermon, beside Hazor, through which the route from the north enters the country. Hazor sits here because whoever holds this basin controls that entry. The marshes were drained in the twentieth century, so the modern landscape looks nothing like the ancient one.",
  },
  {
    id: "region-gilead",
    label: "Gilead",
    ring: [
      [35.55, 31.95],
      [36.0, 32.0],
      [36.2, 32.4],
      [36.05, 32.7],
      [35.75, 32.65],
      [35.58, 32.3],
    ],
    explanation:
      "The wooded highland east of the Jordan, divided by the Jabbok gorge. The text uses the name with varying extent, sometimes for the whole Transjordan highland and sometimes for a narrower district, so this outline is coarse on purpose.",
  },
  {
    id: "region-bashan",
    label: "Bashan",
    ring: [
      [35.85, 32.7],
      [36.3, 32.7],
      [36.5, 33.0],
      [36.35, 33.25],
      [36.0, 33.15],
      [35.8, 32.95],
    ],
    explanation:
      "The fertile basalt plateau north-east of the Sea of Chinnereth, Og's territory. Good soil, few natural boundaries, and nothing in the terrain to mark where it ends, so these edges are indicative only.",
  },
  {
    id: "region-moab-plateau",
    label: "The plains of Moab",
    ring: [
      [35.52, 31.75],
      [35.72, 31.78],
      [35.75, 31.92],
      [35.58, 31.95],
      [35.5, 31.88],
    ],
    explanation:
      "The stretch of valley floor east of the Jordan opposite Jericho where Israel camps. Deuteronomy is delivered here and Joshua opens here. It is a defined piece of ground, hemmed by the river to the west and the plateau escarpment to the east.",
  },
  {
    id: "region-goshen-judah",
    label: "The land of Goshen (in Judah)",
    ring: [
      [34.95, 31.3],
      [35.15, 31.35],
      [35.15, 31.5],
      [34.95, 31.48],
    ],
    explanation:
      "A district named in Joshua 10 and 11 in the southern hill country, placed approximately. The label spells out which Goshen this is, because it is not the Goshen of Egypt despite the identical name, and the two get confused constantly.",
  },
];

const PHYSIOGRAPHIC: MapFeature[] = REGION_SEEDS.map(
  ({ id, label, ring, explanation }) => ({
    id,
    entityId: id,
    geometry: polygon(ring),
    kind: "region",
    certainty: "approximate",
    layer: "places",
    label,
    explanation,
    applicableMilestoneIds: [],
    priority: 1,
    citations: [
      cite(
        "aharoni-land-of-bible",
        "Physiographic division of the land and the character of each region"
      ),
      cite(
        "rainey-notley-sacred-bridge",
        "Regional geography and the routes the terrain permits"
      ),
    ],
  })
);

/* ------------------------------------------------------------------ */
/* 2. Tribal allotments                                                */
/* ------------------------------------------------------------------ */

const ALLOTMENT_CAVEAT =
  "Allotment is not control. This polygon shows an area the text describes as assigned, not ground Israel is said to have held. The boundary is interpolated between the few points in the list that can actually be identified.";

interface AllotmentSeed {
  tribe: string;
  label: string;
  locator: string;
  certainty: Extract<FeatureCertainty, "approximate" | "schematic">;
  ring: Ring;
  explanation: string;
}

const ALLOTMENT_SEEDS: AllotmentSeed[] = [
  {
    tribe: "judah",
    label: "Judah",
    locator: "on Joshua 15",
    certainty: "approximate",
    ring: [
      [34.62, 31.8],
      [34.85, 31.78],
      [34.98, 31.75],
      [35.09, 31.81],
      [35.22, 31.77],
      [35.29, 31.79],
      [35.45, 31.83],
      [35.48, 31.6],
      [35.4, 31.35],
      [35.42, 31.1],
      [35.2, 30.95],
      [34.85, 30.8],
      [34.44, 30.66],
      [33.85, 31.05],
      [34.25, 31.35],
      [34.45, 31.6],
    ],
    explanation:
      "Judah's boundary is described point by point in Joshua 15 and is the most detailed in the book, which makes this the best grounded of the allotment polygons. It is still a reconstruction, because a majority of the named boundary points cannot be identified on the ground. Note too that the described area reaches the Great Sea and includes Jerusalem, and that Joshua 15:63 says plainly Judah could not drive out Jerusalem's inhabitants.",
  },
  {
    tribe: "benjamin",
    label: "Benjamin",
    locator: "on Joshua 18:11-20",
    certainty: "approximate",
    ring: [
      [35.52, 31.87],
      [35.3, 31.93],
      [35.23, 31.93],
      [35.1, 31.86],
      [35.05, 31.82],
      [35.09, 31.79],
      [35.22, 31.77],
      [35.32, 31.8],
      [35.48, 31.83],
    ],
    explanation:
      "A small territory on the plateau, squeezed between Judah and Ephraim and described in unusual detail precisely because it is hemmed in. Its size is out of all proportion to its importance: Jericho, the four Gibeonite towns, the approaches to Bethel and the site of Jerusalem all sit inside it.",
  },
  {
    tribe: "ephraim",
    label: "Ephraim",
    locator: "on Joshua 16",
    certainty: "approximate",
    ring: [
      [35.55, 31.95],
      [35.3, 31.95],
      [35.1, 31.88],
      [34.95, 31.93],
      [34.8, 32.02],
      [34.75, 32.12],
      [34.9, 32.18],
      [35.1, 32.2],
      [35.25, 32.18],
      [35.4, 32.15],
      [35.55, 32.1],
    ],
    explanation:
      "The central hill country north of Benjamin, containing Shiloh and Joshua's own portion at Timnath-serah. The western end of the described area runs out into the coastal plain, which Ephraim did not hold, and Joshua 16:10 states that the Canaanites in Gezer were not driven out but put to forced labour.",
  },
  {
    tribe: "manasseh-west",
    label: "Manasseh (west of the Jordan)",
    locator: "on Joshua 17:7-13",
    certainty: "approximate",
    ring: [
      [35.5, 32.15],
      [35.25, 32.18],
      [35.05, 32.2],
      [34.85, 32.2],
      [34.78, 32.28],
      [34.92, 32.5],
      [35.1, 32.52],
      [35.3, 32.5],
      [35.5, 32.45],
    ],
    explanation:
      "Western Manasseh reaches from the hill country toward the coast and the Jezreel valley. A large share of its best land is exactly what Joshua 17:11-12 says it could not take: Beth-shan, Ibleam, Dor, Taanach and Megiddo. Turn the remaining-land layer on over this polygon and the gap between assignment and possession is visible at a glance.",
  },
  {
    tribe: "manasseh-east",
    label: "Manasseh (east of the Jordan)",
    locator: "on Joshua 13:29-31",
    certainty: "schematic",
    ring: [
      [35.58, 32.35],
      [35.95, 32.4],
      [36.25, 32.55],
      [36.35, 32.85],
      [36.2, 33.05],
      [35.9, 33.0],
      [35.7, 32.8],
      [35.6, 32.6],
    ],
    explanation:
      "Assigned by Moses before Joshua opens, and described by region names, Bashan and half of Gilead and the towns of Jair, rather than by boundary points. There is almost nothing to interpolate between, so this outline is schematic: it shows roughly where, and makes no claim at all about edges.",
  },
  {
    tribe: "zebulun",
    label: "Zebulun",
    locator: "on Joshua 19:10-16",
    certainty: "approximate",
    ring: [
      [35.1, 32.6],
      [35.35, 32.65],
      [35.5, 32.72],
      [35.45, 32.82],
      [35.25, 32.85],
      [35.05, 32.78],
      [35.02, 32.68],
    ],
    explanation:
      "Lower Galilee, between the Jezreel valley and the Galilean hills. Several points in its boundary list are unidentified, so this is coarser than it looks.",
  },
  {
    tribe: "issachar",
    label: "Issachar",
    locator: "on Joshua 19:17-23",
    certainty: "approximate",
    ring: [
      [35.1, 32.55],
      [35.35, 32.6],
      [35.55, 32.62],
      [35.58, 32.5],
      [35.45, 32.45],
      [35.2, 32.48],
    ],
    explanation:
      "Described by a town list rather than a continuous boundary, which is why this outline is drawn loosely. Much of the valley floor it covers holds towns the text says remained Canaanite.",
  },
  {
    tribe: "asher",
    label: "Asher",
    locator: "on Joshua 19:24-31",
    certainty: "approximate",
    ring: [
      [34.92, 32.55],
      [35.05, 32.7],
      [35.1, 32.85],
      [35.2, 33.05],
      [35.25, 33.25],
      [35.2, 33.32],
      [35.05, 33.2],
      [34.95, 32.95],
      [34.92, 32.7],
    ],
    explanation:
      "A narrow coastal strip and the hills behind it, reaching north toward Tyre and Sidon. This is the clearest case in the book of allotment on paper without possession on the ground: the described area overlaps substantially with territory Joshua 13:4-6 lists as Sidonian and not taken.",
  },
  {
    tribe: "naphtali",
    label: "Naphtali",
    locator: "on Joshua 19:32-39",
    certainty: "approximate",
    ring: [
      [35.3, 32.7],
      [35.55, 32.75],
      [35.6, 33.0],
      [35.62, 33.25],
      [35.5, 33.32],
      [35.35, 33.2],
      [35.28, 32.95],
    ],
    explanation:
      "Upper Galilee and the western side of the upper Jordan valley, taking in Hazor's area and Kedesh, one of the cities of refuge.",
  },
  {
    tribe: "dan",
    label: "Dan (as allotted)",
    locator: "on Joshua 19:40-48",
    certainty: "approximate",
    ring: [
      [34.85, 31.85],
      [35.05, 31.88],
      [35.08, 31.98],
      [34.95, 32.02],
      [34.8, 32.0],
      [34.78, 31.92],
    ],
    explanation:
      "The area allotted to Dan, west of Benjamin toward the coastal plain, which Dan does not hold. Dan's later migration north to Laish belongs to Judges 18 and is outside this book, so it is not drawn here at all. Merging the two would produce a tribe with territory in two places, which is not what Joshua describes.",
  },
  {
    tribe: "reuben",
    label: "Reuben",
    locator: "on Joshua 13:15-23",
    certainty: "schematic",
    ring: [
      [35.52, 31.82],
      [35.8, 31.84],
      [36.0, 31.75],
      [35.98, 31.5],
      [35.75, 31.42],
      [35.55, 31.47],
      [35.48, 31.65],
    ],
    explanation:
      "East of the Jordan on the plateau north of the Arnon, in territory taken from Sihon before Joshua opens. The Arnon gorge gives a firm southern edge. Nothing else here is firm, and Reuben's area interlocks with Gad's in ways the text never resolves.",
  },
  {
    tribe: "gad",
    label: "Gad",
    locator: "on Joshua 13:24-28",
    certainty: "schematic",
    ring: [
      [35.52, 31.84],
      [35.85, 31.86],
      [36.05, 31.95],
      [36.1, 32.2],
      [35.95, 32.35],
      [35.7, 32.32],
      [35.55, 32.15],
      [35.5, 31.98],
    ],
    explanation:
      "Gilead and part of the valley, between Reuben and eastern Manasseh, described partly by towns and partly by region names. The line between Gad and Reuben is drawn as indicative because the text does not draw one.",
  },
];

const ALLOTMENTS: MapFeature[] = ALLOTMENT_SEEDS.map(
  ({ tribe, label, locator, certainty, ring, explanation }) => ({
    id: `allot-${tribe}`,
    entityId: `tribe-${tribe}`,
    geometry: polygon(ring),
    kind: "allotment",
    certainty,
    layer: "allotments",
    label,
    explanation: `${explanation}\n\n${ALLOTMENT_CAVEAT}`,
    applicableMilestoneIds: [],
    priority: 2,
    citations: allotmentCites(locator),
  })
);

/* ------------------------------------------------------------------ */
/* 3. Land that remained                                               */
/* ------------------------------------------------------------------ */

interface RemainingSeed {
  id: string;
  entityId: string;
  label: string;
  ring: Ring;
  explanation: string;
  citations: Citation[];
}

const REMAINING_SEEDS: RemainingSeed[] = [
  {
    id: "remain-philistia",
    entityId: "philistines",
    label: "Philistine territory: not taken",
    ring: [
      [34.3, 31.3],
      [34.75, 31.35],
      [34.95, 31.75],
      [34.85, 31.95],
      [34.6, 31.85],
      [34.35, 31.55],
    ],
    explanation:
      "Joshua 13:2-3 names the five Philistine rulers among the territory still to be possessed, and Judah's city list in chapter 15 includes towns Judah plainly did not hold. The five centres are Gaza, Ashkelon, Ashdod, Ekron and Gath. There is a chronological question here worth knowing about as well: Philistine settlement in force is generally dated to the very end of the Late Bronze Age, which sits awkwardly with an early date for the conquest.",
    citations: [
      cite(
        "stager-forging-identity",
        "Philistine settlement on the southern coast dated to the Late Bronze to Iron Age transition"
      ),
      cite(
        "hess-joshua",
        "Joshua 13 lists Philistine territory among land not yet possessed",
        "on Joshua 13:1-6"
      ),
    ],
  },
  {
    id: "remain-phoenician-coast",
    entityId: "sidonians",
    label: "The Sidonian coast: not taken",
    ring: [
      [35.1, 33.15],
      [35.3, 33.25],
      [35.45, 33.6],
      [35.35, 33.72],
      [35.2, 33.55],
      [35.05, 33.25],
    ],
    explanation:
      "Joshua 13:4-6 lists the land of the Sidonians among what remained, and Sidon itself appears as a boundary point in Asher's description. Asher's allotment and this unpossessed area overlap, which is the point: a tribe assigned land that the same book says was held by someone else.",
    citations: [
      cite(
        "hess-joshua",
        "Sidonian territory listed among the land remaining to be possessed",
        "on Joshua 13:4-6"
      ),
    ],
  },
  {
    id: "remain-lebanon",
    entityId: "region-lebanon",
    label: "Lebanon and the northern valley: not taken",
    ring: [
      [35.4, 33.6],
      [35.8, 33.7],
      [36.3, 34.3],
      [36.1, 34.45],
      [35.6, 34.0],
      [35.35, 33.75],
    ],
    explanation:
      "Lebanon appears in Joshua 1:4 inside the described extent of the land and in Joshua 13:5 among the territory not yet taken. Both statements stand in the same book. Drawing this area on both the places layer and the remaining-land layer is how the map keeps them both visible instead of quietly choosing one.",
    citations: [
      cite(
        "hess-joshua",
        "Lebanon appears both in the described extent of the land and in the list of what remained",
        "on Joshua 1:4 and 13:5"
      ),
    ],
  },
  {
    id: "remain-geshur-maacah",
    entityId: "geshurites",
    label: "Geshur and Maacah: not taken",
    ring: [
      [35.6, 32.85],
      [35.9, 32.95],
      [35.95, 33.25],
      [35.75, 33.35],
      [35.6, 33.15],
      [35.58, 32.95],
    ],
    explanation:
      "Joshua 13:11-13 says Israel did not drive out the Geshurites and the Maacathites, and that they lived among Israel. The area is approximate: neither group has a described boundary, and this outline marks a zone north-east of the lake rather than a territory.",
    citations: [
      cite(
        "hess-joshua",
        "Joshua 13:13 states the Geshurites and Maacathites were not driven out",
        "on Joshua 13:11-13"
      ),
    ],
  },
];

const REMAINING: MapFeature[] = REMAINING_SEEDS.map((seed) => ({
  id: seed.id,
  entityId: seed.entityId,
  geometry: polygon(seed.ring),
  kind: "remaining-land",
  certainty: "approximate",
  layer: "remaining-land",
  label: seed.label,
  explanation: seed.explanation,
  applicableMilestoneIds: [],
  priority: 3,
  citations: seed.citations,
}));

/**
 * Cities the book itself says were not taken, several of whose kings nonetheless
 * appear in the register of defeated rulers in Joshua 12. This is the sharpest
 * evidence inside the text that beating a king was not the same as holding his town.
 */
export const UNPOSSESSED_CITIES: {
  site: string;
  label: string;
  ref: string;
  note: string;
}[] = [
  {
    site: "jerusalem",
    label: "Jerusalem: not taken",
    ref: "Joshua 15:63",
    note: "Judah could not drive out the Jebusites, who went on living there alongside Judah. Its king is among the five defeated in chapter 10.",
  },
  {
    site: "gezer",
    label: "Gezer: not cleared",
    ref: "Joshua 16:10",
    note: "The Canaanites remained and were put to forced labour. Its king Horam is defeated in the field in chapter 10 and listed in chapter 12.",
  },
  {
    site: "beth-shan",
    label: "Beth-shan: not taken",
    ref: "Joshua 17:11-12",
    note: "Manasseh could not take the town. It held an Egyptian garrison in the Late Bronze Age, which is a concrete reason why.",
  },
  {
    site: "megiddo",
    label: "Megiddo: not taken",
    ref: "Joshua 17:11-12",
    note: "Among the valley towns Manasseh could not take, while its king appears in the chapter 12 register.",
  },
  {
    site: "taanach",
    label: "Taanach: not taken",
    ref: "Joshua 17:11-12",
    note: "Named among the valley towns that held out, and its king is in the chapter 12 register.",
  },
  {
    site: "dor",
    label: "Dor: not taken",
    ref: "Joshua 17:11-12",
    note: "Named among the towns not taken, and its king is in the chapter 12 register.",
  },
  {
    site: "ibleam",
    label: "Ibleam: not taken",
    ref: "Joshua 17:11-12",
    note: "Named among the valley towns Manasseh could not take.",
  },
  {
    site: "gaza",
    label: "Gaza: not taken",
    ref: "Joshua 13:3",
    note: "One of the five Philistine centres listed among the land remaining.",
  },
  {
    site: "ashkelon",
    label: "Ashkelon: not taken",
    ref: "Joshua 13:3",
    note: "One of the five Philistine centres listed among the land remaining.",
  },
  {
    site: "ashdod",
    label: "Ashdod: not taken",
    ref: "Joshua 13:3",
    note: "One of the five Philistine centres listed among the land remaining.",
  },
  {
    site: "ekron",
    label: "Ekron: not taken",
    ref: "Joshua 13:3",
    note: "One of the five Philistine centres listed among the land remaining.",
  },
  {
    site: "gath",
    label: "Gath: not taken",
    ref: "Joshua 13:3",
    note: "One of the five Philistine centres listed among the land remaining.",
  },
];

/* ------------------------------------------------------------------ */
/* 4. Movement: routes the text gives, and directions it does not      */
/* ------------------------------------------------------------------ */

const MOVEMENT: MapFeature[] = [
  {
    id: "route-shittim-to-jordan",
    geometry: line([
      [35.6278, 31.8408],
      [35.58, 31.855],
      [35.5525, 31.8608],
      [35.5347, 31.8608],
    ]),
    kind: "route",
    certainty: "approximate",
    layer: "movement",
    label: "Shittim to the river",
    explanation:
      "A short move, about 10 km down the valley floor from the camp in the plains of Moab to the riverbank opposite Jericho. The text gives both ends, so the direction is secure. The exact line is not, and the camp itself was spread across the plain rather than gathered at a point.",
    applicableMilestoneIds: [],
    citations: [
      cite(
        "rainey-notley-sacred-bridge",
        "The plains of Moab and the Jericho fords as staging area and crossing point"
      ),
    ],
  },
  {
    id: "route-jordan-crossing",
    geometry: line([
      [35.5347, 31.8608],
      [35.5252, 31.8628],
      [35.515, 31.865],
    ]),
    kind: "route",
    certainty: "approximate",
    layer: "movement",
    label: "The crossing",
    explanation:
      "The crossing itself: a few hundred metres of riverbed opposite Jericho. The text names no ford, so this line marks the reach of river the narrative describes rather than a located crossing point. The Jordan at harvest is in flood, which is the detail Joshua 3:15 makes a point of.",
    applicableMilestoneIds: [],
    eventIcon: "crossing",
    citations: [
      cite(
        "hess-joshua",
        "The narrative places the crossing opposite Jericho at flood stage without naming a ford",
        "on Joshua 3:14-17"
      ),
    ],
  },
  {
    id: "route-gilgal-to-ai",
    geometry: line([
      [35.5083, 31.8686],
      [35.44, 31.878],
      [35.37, 31.888],
      [35.3, 31.905],
      [35.2606, 31.9169],
    ]),
    kind: "route",
    certainty: "approximate",
    layer: "movement",
    label: "Up from the valley to Ai",
    explanation:
      "About 25 km, but the number that matters is the climb: from roughly 250 m below sea level on the valley floor to around 850 m in the hill country, more than a kilometre of ascent through steep wadis. The text does not give the route, so the line follows the practicable ascent. It also explains why the first attack on Ai went badly. Israel was fighting uphill at the top of a long climb, and the retreat was back down it.",
    applicableMilestoneIds: [],
    citations: [
      cite(
        "rainey-notley-sacred-bridge",
        "Routes of ascent from the Jordan valley into the central hill country"
      ),
    ],
  },
  {
    id: "route-gilgal-to-gibeon",
    geometry: line([
      [35.5083, 31.8686],
      [35.43, 31.862],
      [35.35, 31.855],
      [35.27, 31.85],
      [35.2, 31.846],
      [35.1847, 31.8463],
    ]),
    kind: "route",
    certainty: "approximate",
    layer: "movement",
    label: "The night march to Gibeon",
    explanation:
      "Joshua 10:9 says Joshua came upon them suddenly, having marched up all night from Gilgal. That is roughly 30 km with about 1,200 m of ascent, in the dark. Arriving at dawn at the top of that climb with an army still fit to fight is the hardest physical fact in the book, and the terrain is what makes it remarkable rather than routine. The line is reconstructed; the text gives the start, the end, and the fact that it took a night.",
    applicableMilestoneIds: [],
    citations: [
      cite(
        "rainey-notley-sacred-bridge",
        "Distance and ascent from the Jordan valley to the Benjamin plateau"
      ),
      cite(
        "hess-joshua",
        "Joshua 10:9 describes an all-night march from Gilgal",
        "on Joshua 10:9"
      ),
    ],
  },
  {
    id: "route-beth-horon-pursuit",
    geometry: line([
      [35.1847, 31.8463],
      [35.15, 31.872],
      [35.115, 31.888],
      [35.08, 31.895],
      [35.03, 31.87],
      [34.98, 31.8],
      [34.9358, 31.7],
    ]),
    kind: "route",
    certainty: "well-supported",
    layer: "movement",
    label: "The rout down the Beth-horon descent",
    explanation:
      "This is the one route in the book the text effectively names: Joshua 10:10-11 gives Gibeon, the ascent of Beth-horon, Azekah and Makkedah in order. The descent between Upper and Lower Beth-horon drops about 250 m in roughly 3 km over broken ground, and it is the natural escape from the plateau to the coastal plain. An army strung out along it cannot form a line and cannot turn. Geography and narrative fit each other exactly here.",
    applicableMilestoneIds: [],
    eventIcon: "battle",
    citations: [
      cite(
        "rainey-notley-sacred-bridge",
        "The Beth-horon ridge road as the principal descent from the Benjamin plateau"
      ),
      cite(
        "aharoni-land-of-bible",
        "The character of the Beth-horon descent and its military significance"
      ),
    ],
  },
  {
    id: "route-southern-sweep",
    geometry: multiLine([
      [
        [34.8489, 31.565],
        [34.99, 31.4906],
      ],
      [
        [34.99, 31.4906],
        [35.06, 31.51],
        [35.0994, 31.5236],
      ],
      [
        [35.0994, 31.5236],
        [35.06, 31.46],
        [35.0164, 31.4022],
      ],
    ]),
    kind: "route",
    certainty: "disputed",
    layer: "movement",
    label: "The southern sweep (incomplete by necessity)",
    explanation:
      "Joshua 10:28-39 lists the towns in order: Makkedah, Libnah, Lachish, Eglon, Hebron, Debir. Two of those, Makkedah and Libnah, cannot be located at all, and Eglon and Debir are disputed. So this line has gaps, and the gaps are honest: the first two stages of the campaign the text describes cannot be drawn. A continuous line here would be an invention. What the drawn segments do show is a sequence moving through the Shephelah and up into the southern hill country, which is coherent terrain for a campaign.",
    applicableMilestoneIds: [],
    citations: [
      cite(
        "rainey-notley-sacred-bridge",
        "Identification and non-identification of the towns in the southern campaign list"
      ),
      cite(
        "hess-joshua",
        "The order of towns in the southern campaign summary",
        "on Joshua 10:28-39"
      ),
    ],
  },
  {
    id: "route-north-to-merom",
    geometry: line([
      [35.2894, 32.0561],
      [35.34, 32.28],
      [35.4, 32.6],
      [35.44, 32.85],
      [35.4372, 32.9878],
    ]),
    kind: "route",
    certainty: "schematic",
    layer: "movement",
    label: "Northward to the waters of Merom (direction only)",
    explanation:
      "The text says Joshua came against them suddenly at the waters of Merom. It does not say where he came from or by what road, and the muster site itself is disputed. This line therefore indicates direction and nothing more. It is drawn schematically on purpose and should not be read as a known march: both of its endpoints are uncertain.",
    applicableMilestoneIds: [],
    citations: [
      cite(
        "hess-joshua",
        "Joshua 11:7 reports a sudden arrival without giving a route",
        "on Joshua 11:1-9"
      ),
    ],
  },
  {
    id: "route-gilgal-to-shiloh",
    geometry: line([
      [35.5083, 31.8686],
      [35.44, 31.9],
      [35.38, 31.96],
      [35.33, 32.01],
      [35.2894, 32.0561],
    ]),
    kind: "route",
    certainty: "approximate",
    layer: "movement",
    label: "The centre moves from Gilgal to Shiloh",
    explanation:
      "Between Joshua 14 and Joshua 18 the tent of meeting moves from Gilgal in the valley to Shiloh in the hill country, and the remaining allotments are cast there instead. That is a real shift in the centre of gravity, from a camp at the entry point to a sanctuary in the highlands where Israel actually lived. The route is a reconstruction. The move is not.",
    applicableMilestoneIds: [],
    citations: [
      cite(
        "finkelstein-shiloh",
        "Shiloh's prominence as a central highland sanctuary site in Iron Age I"
      ),
      cite(
        "hess-joshua",
        "The assembly relocates from Gilgal to Shiloh for the remaining allotments",
        "on Joshua 18:1"
      ),
    ],
  },
  {
    id: "route-eastern-tribes-return",
    geometry: line([
      [35.2894, 32.0561],
      [35.37, 31.98],
      [35.46, 31.91],
      [35.53, 31.87],
      [35.62, 31.87],
      [35.7, 31.92],
    ]),
    kind: "route",
    certainty: "approximate",
    layer: "movement",
    label: "The eastern tribes go home",
    explanation:
      "Joshua 22 sends Reuben, Gad and half of Manasseh back across the river to the territory Moses had given them. The crossing is the same barrier they came over in chapter 3, and now it runs between them and the rest of Israel. That is the geography behind the altar crisis: a river that had been a threshold is now a boundary.",
    applicableMilestoneIds: [],
    citations: [
      cite(
        "havrelock-river-jordan",
        "The Jordan functioning as both a link and a dividing line in Israel's self-understanding"
      ),
    ],
  },
];

/* ------------------------------------------------------------------ */
/* 5. Coalitions and town sets: drawn from the register, never shaded   */
/* ------------------------------------------------------------------ */

/**
 * Coalitions are connector lines between member cities; town sets are point sets.
 * Both take their geometry from the site register, so an unlocatable member is
 * genuinely absent rather than placed for the sake of a tidy diagram. The loader
 * reports the missing members so the interface can name them.
 */
export const SITE_DERIVED_FEATURES: SiteDerivedFeature[] = [
  {
    id: "coalition-southern",
    entityId: "southern-coalition",
    kind: "coalition",
    layer: "peoples",
    label: "The five kings against Gibeon",
    explanation:
      "Five city rulers, convened by Adoni-zedek of Jerusalem, striking at Gibeon for making peace with Israel. The connectors run from each city to the target. They are lines and not a filled area on purpose: this alliance lasted a single campaign, and shading the ground between these towns would invent a southern kingdom that never existed. Eglon's location is disputed, so one connector has an uncertain endpoint.",
    applicableMilestoneIds: [],
    memberSiteIds: ["jerusalem", "hebron", "jarmuth", "lachish", "eglon"],
    priority: 4,
    citations: [
      cite(
        "hess-joshua",
        "The coalition forms in response to Gibeon's treaty and is a temporary military arrangement",
        "on Joshua 10:1-5"
      ),
      cite(
        "moran-amarna",
        "Late Bronze Canaan as a landscape of small city-states forming shifting alliances"
      ),
    ],
  },
  {
    id: "coalition-northern",
    entityId: "northern-coalition",
    kind: "coalition",
    certainty: "disputed",
    layer: "peoples",
    label: "The northern coalition converging on Merom",
    explanation:
      "Jabin of Hazor gathers a larger alliance than the southern one, described as fielding horses and chariots in great number. Almost every connector here is uncertain at one end or both: the muster site at the waters of Merom is disputed, Madon cannot be located at all and so is missing from the diagram entirely, and Achshaph's identification is unsettled. The convergence is what the text describes. The precise geometry is not available.",
    applicableMilestoneIds: [],
    memberSiteIds: ["hazor", "madon", "shimron", "achshaph", "chinnereth", "dor"],
    priority: 4,
    citations: [
      cite(
        "hess-joshua",
        "Jabin assembles a northern coalition with chariotry, mustering at the waters of Merom",
        "on Joshua 11:1-5"
      ),
      cite(
        "yadin-hazor",
        "Hazor's exceptional size and standing among the cities of the region"
      ),
    ],
  },
  {
    id: "coalition-gibeonite",
    entityId: "gibeonite-league",
    kind: "coalition",
    layer: "peoples",
    label: "The four Gibeonite towns",
    explanation:
      "Gibeon with Chephirah, Beeroth and Kiriath-jearim, acting together in Joshua 9. The distance from here to Gilgal is about 30 km, which is what makes the deception audacious: these are near neighbours claiming to have come from a distant country, and their worn-out sandals and mouldy bread were props. Beeroth's location is disputed and Kiriath-jearim's is approximate.",
    applicableMilestoneIds: [],
    memberSiteIds: ["gibeon", "chephirah", "beeroth", "kiriath-jearim"],
    priority: 4,
    citations: [
      cite(
        "blenkinsopp-gibeon",
        "The four towns act as a group and retain a distinct status within Israel after the treaty"
      ),
      cite(
        "pritchard-gibeon",
        "Excavation at el-Jib and the inscribed jar handles confirming the identification of Gibeon"
      ),
    ],
  },
  {
    id: "refuge-network",
    kind: "town-group",
    layer: "events",
    label: "The six cities of refuge",
    explanation:
      "Three west of the Jordan and three east, spaced so a person fleeing a blood avenger could reach one within about a day. The spacing is the legal provision: the law is delivered as geography. Four of the six can be placed with reasonable confidence, Ramoth in Gilead only tentatively, and Bezer and Golan not at all. So the map shows an incomplete network, which is a truer picture than six confident pins.",
    applicableMilestoneIds: [],
    memberSiteIds: [
      "kedesh-naphtali",
      "shechem",
      "hebron",
      "bezer",
      "ramoth-gilead",
      "golan-city",
    ],
    eventIcon: "assembly",
    priority: 6,
    citations: [
      cite(
        "hess-joshua",
        "The distribution of the six cities of refuge on both sides of the Jordan",
        "on Joshua 20"
      ),
      cite(
        "haran-levitical-cities",
        "The relationship between the cities of refuge and the Levitical town lists"
      ),
    ],
  },
  {
    id: "allot-simeon-towns",
    entityId: "tribe-simeon",
    kind: "town-group",
    certainty: "schematic",
    layer: "allotments",
    label: "Simeon: towns within Judah",
    explanation:
      "Simeon has no separate block of land. Joshua 19:1-9 says its inheritance lay inside Judah's portion, because Judah's was more than it needed. Simeon is therefore drawn as a set of towns inside Judah's area and never as a territory of its own. Only some of the towns in its list can be located, so this is a partial set.",
    applicableMilestoneIds: [],
    memberSiteIds: ["beersheba", "hormah", "arad", "eshtemoa"],
    priority: 5,
    citations: [
      cite(
        "hess-joshua",
        "Simeon's inheritance is described as lying within Judah's territory rather than as a separate allotment",
        "on Joshua 19:1-9"
      ),
    ],
  },
  {
    id: "allot-levi-none",
    entityId: "tribe-levi",
    kind: "town-group",
    certainty: "schematic",
    layer: "allotments",
    label: "Levi: no territory, forty-eight towns",
    explanation:
      "Levi is never drawn as a region, because Joshua says twice that Levi has no territorial inheritance. Instead Joshua 21 lists forty-eight towns with their pasture, scattered through every other tribe's area. The scattering is the point: a tribe with no land of its own, present everywhere. Of the forty-eight only a minority can be located with confidence, so the map shows a partial set and says so rather than filling in the rest.",
    applicableMilestoneIds: [],
    memberSiteIds: [
      "hebron",
      "libnah",
      "jattir",
      "eshtemoa",
      "debir",
      "anab",
      "beth-shemesh",
      "gibeon",
      "shechem",
      "gezer",
      "upper-beth-horon",
      "aijalon",
      "taanach",
      "kedesh-naphtali",
      "ramoth-gilead",
      "heshbon",
      "jazer",
      "bezer",
      "golan-city",
      "ashtaroth",
    ],
    priority: 5,
    citations: [
      cite(
        "haran-levitical-cities",
        "The Levitical city lists describe towns with pasture rather than a contiguous territory"
      ),
      cite(
        "hess-joshua",
        "Joshua states that Levi receives no inheritance of land",
        "on Joshua 13:14, 13:33 and 14:3-4"
      ),
    ],
  },
  ...UNPOSSESSED_CITIES.map(
    (c): SiteDerivedFeature => ({
      id: `remain-${c.site}`,
      entityId: c.site,
      kind: "remaining-land",
      layer: "remaining-land",
      label: c.label,
      explanation: `${c.note} Stated at ${c.ref}.`,
      applicableMilestoneIds: [],
      memberSiteIds: [c.site],
      priority: 5,
      citations: [
        cite(
          "hess-joshua",
          `The text states that this town was not taken (${c.ref})`,
          `on ${c.ref}`
        ),
      ],
    })
  ),
];

/* ------------------------------------------------------------------ */
/* Exports                                                             */
/* ------------------------------------------------------------------ */

/** Features whose geometry is authored here, with real coordinates. */
export const AUTHORED_FEATURES: MapFeature[] = [
  ...PHYSIOGRAPHIC,
  ...ALLOTMENTS,
  ...REMAINING,
  ...MOVEMENT,
];
