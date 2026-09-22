/**
 * The palette, in one place.
 *
 * MapLibre needs colour literals in JavaScript and the interface needs them in
 * CSS, so they are declared here and mirrored in `app/globals.css`. The six
 * specified colours are exact; everything else is a tint of one of them, so the
 * map and the page cannot drift into two different warm greys.
 */

export const PALETTE = {
  ivory: "#F7F3EA",
  charcoal: "#292D29",
  forest: "#355447",
  bronze: "#A77943",
  water: "#7198AB",
  terracotta: "#B35F47",
} as const;

/** Map specific tints. Sandy, low chroma, nothing that competes with the type. */
export const MAP_COLORS = {
  sea: "#C3D5DE",
  landLow: "#ECE5D3",
  land: "#E8DFC9",
  landHigh: "#DDD0B3",
  coast: "#C9BDA4",
  lake: "#AAC4D1",
  lakeEdge: PALETTE.water,
  river: PALETTE.water,
  label: "#4A4F4A",
  labelHalo: "#F7F3EA",
  graticule: "#D8CFBB",

  site: PALETTE.charcoal,
  siteSelected: PALETTE.bronze,
  route: PALETTE.bronze,
  conflict: PALETTE.terracotta,
  covenant: PALETTE.forest,
  region: "#8A8E7F",
  allotment: PALETTE.forest,
  remaining: PALETTE.terracotta,
  peoples: "#7C7566",
  modern: "#9AA0A6",
} as const;

/**
 * Per tribe hues for the allotment layer.
 *
 * Twelve distinguishable fills would need colours outside the palette, so the
 * allotment layer does not try: every allotment is drawn in the same hatched
 * forest green, and tribes are told apart by their labels rather than by colour.
 * That is also the honest choice, because a reader scanning a twelve colour
 * political map reads it as twelve controlled territories, which is precisely
 * what an allotment is not.
 */
export const ALLOTMENT_FILL = PALETTE.forest;
