/**
 * Icons and fill patterns, drawn into the map at runtime.
 *
 * Nothing here is fetched. Each glyph is painted onto a canvas and handed to
 * MapLibre with `addImage`, so there is no sprite sheet and no request to fail.
 *
 * The icons carry meaning that colour alone must not have to carry. A reader who
 * cannot distinguish terracotta from bronze still needs to tell a battle from a
 * treaty, and a reader looking at a shaded polygon needs to know from its
 * texture whether it is a real physiographic edge or an interpolated guess. So
 * the event marks differ in shape, and the fills differ in hatch direction and
 * spacing as well as in hue.
 */

import type { EventIcon } from "@/content/types";
import { MAP_COLORS, PALETTE } from "@/lib/design/palette";

const DPR = 2;
const ICON_PX = 22;

type Ctx = CanvasRenderingContext2D;

function canvas(size: number): { c: HTMLCanvasElement; ctx: Ctx } {
  const c = document.createElement("canvas");
  c.width = size * DPR;
  c.height = size * DPR;
  const ctx = c.getContext("2d");
  if (!ctx) throw new Error("2d canvas context unavailable");
  ctx.scale(DPR, DPR);
  return { c, ctx };
}

/** The colour an event mark takes: conflict, covenant, or neutral. */
function iconColor(icon: EventIcon): string {
  switch (icon) {
    case "battle":
    case "failure":
      return MAP_COLORS.conflict;
    case "treaty":
    case "covenant":
    case "altar":
    case "assembly":
      return MAP_COLORS.covenant;
    default:
      return PALETTE.bronze;
  }
}

/* ------------------------------------------------------------------ */
/* Event marks                                                         */
/* ------------------------------------------------------------------ */

/**
 * Each mark is a small line drawing on a filled ivory disc, so it stays legible
 * over sand, over water and over a hatched allotment alike.
 */
function drawEvent(ctx: Ctx, icon: EventIcon) {
  const s = ICON_PX;
  const m = s / 2;
  const color = iconColor(icon);

  ctx.clearRect(0, 0, s, s);

  /* The disc. A ring in the icon's own colour, an ivory centre to draw on. */
  ctx.beginPath();
  ctx.arc(m, m, m - 1.6, 0, Math.PI * 2);
  ctx.fillStyle = MAP_COLORS.labelHalo;
  ctx.fill();
  ctx.lineWidth = 1.4;
  ctx.strokeStyle = color;
  ctx.stroke();

  ctx.strokeStyle = color;
  ctx.fillStyle = color;
  ctx.lineWidth = 1.5;
  ctx.lineCap = "round";
  ctx.lineJoin = "round";

  const line = (x1: number, y1: number, x2: number, y2: number) => {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
  };

  switch (icon) {
    /* Crossed swords. */
    case "battle":
      line(m - 3.6, m - 3.6, m + 3.6, m + 3.6);
      line(m + 3.6, m - 3.6, m - 3.6, m + 3.6);
      break;

    /* Two banks and a line stepping between them. */
    case "crossing":
      line(m - 4.6, m - 3.4, m + 4.6, m - 3.4);
      line(m - 4.6, m + 3.4, m + 4.6, m + 3.4);
      ctx.setLineDash([1.6, 1.4]);
      line(m, m - 3.4, m, m + 3.4);
      ctx.setLineDash([]);
      break;

    /* A clasp: two hooks meeting. */
    case "treaty":
      ctx.beginPath();
      ctx.arc(m - 1.6, m, 2.6, -Math.PI / 2, Math.PI / 2);
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(m + 1.6, m, 2.6, Math.PI / 2, -Math.PI / 2);
      ctx.stroke();
      break;

    /* A gathering: three figures around a centre. */
    case "assembly":
      for (const a of [-Math.PI / 2, Math.PI / 6, (Math.PI * 5) / 6]) {
        ctx.beginPath();
        ctx.arc(m + Math.cos(a) * 3.4, m + Math.sin(a) * 3.4, 1.5, 0, Math.PI * 2);
        ctx.fill();
      }
      break;

    /* A scroll and a fold: the covenant document. */
    case "covenant":
      ctx.beginPath();
      ctx.rect(m - 3.4, m - 4, 6.8, 8);
      ctx.stroke();
      line(m - 1.8, m - 1.6, m + 1.8, m - 1.6);
      line(m - 1.8, m + 1, m + 1.8, m + 1);
      break;

    /* Stacked stones. */
    case "memorial":
      ctx.beginPath();
      ctx.rect(m - 3.6, m + 0.8, 7.2, 3);
      ctx.stroke();
      ctx.beginPath();
      ctx.rect(m - 2.4, m - 2.4, 4.8, 3);
      ctx.stroke();
      break;

    /* A tent. */
    case "camp":
      ctx.beginPath();
      ctx.moveTo(m - 4.4, m + 3.4);
      ctx.lineTo(m, m - 4);
      ctx.lineTo(m + 4.4, m + 3.4);
      ctx.closePath();
      ctx.stroke();
      break;

    /* A grave marker on a mound. */
    case "burial":
      ctx.beginPath();
      ctx.arc(m, m - 0.6, 3.2, Math.PI, 0);
      ctx.stroke();
      line(m - 3.2, m - 0.6, m - 3.2, m + 3.2);
      line(m + 3.2, m - 0.6, m + 3.2, m + 3.2);
      line(m - 4.6, m + 3.2, m + 4.6, m + 3.2);
      break;

    /* An altar: a block with horns. */
    case "altar":
      ctx.beginPath();
      ctx.rect(m - 3.8, m - 1, 7.6, 4.4);
      ctx.stroke();
      line(m - 3.8, m - 1, m - 4.8, m - 3.2);
      line(m + 3.8, m - 1, m + 4.8, m - 3.2);
      break;

    /*
     * Failure is a broken line, not a cross or a warning sign. The book reports
     * these as things Israel did not do, and the mark should read as an
     * incompletion rather than as a verdict stamped on the ground.
     */
    case "failure":
      line(m - 4.6, m + 2.4, m - 0.8, m + 2.4);
      line(m + 0.8, m + 2.4, m + 4.6, m + 2.4);
      line(m - 2.4, m - 3.4, m + 2.4, m - 3.4);
      line(m - 2.4, m - 3.4, m - 2.4, m + 2.4);
      break;
  }
}

/* ------------------------------------------------------------------ */
/* Fill patterns                                                       */
/* ------------------------------------------------------------------ */

type PatternName =
  /** Assigned land. Sparse diagonal, deliberately open: it is not solid ground. */
  | "hatch-allotment"
  /** Land the book says was not possessed. Cross hatch, denser, terracotta. */
  | "hatch-remaining"
  /** A people's rough area. Stipple, no direction, no edge to read as a border. */
  | "stipple-peoples"
  /** A diagram rather than a position. Dot grid, clearly artificial. */
  | "grid-schematic";

const PATTERN_PX = 16;

function drawPattern(ctx: Ctx, name: PatternName) {
  const s = PATTERN_PX;
  ctx.clearRect(0, 0, s, s);
  ctx.lineWidth = 1;
  ctx.lineCap = "butt";

  const diagonal = (color: string, step: number, back = false) => {
    ctx.strokeStyle = color;
    for (let i = -s; i < s * 2; i += step) {
      ctx.beginPath();
      if (back) {
        ctx.moveTo(i, 0);
        ctx.lineTo(i - s, s);
      } else {
        ctx.moveTo(i, 0);
        ctx.lineTo(i + s, s);
      }
      ctx.stroke();
    }
  };

  switch (name) {
    case "hatch-allotment":
      ctx.globalAlpha = 0.5;
      diagonal(MAP_COLORS.allotment, 6);
      ctx.globalAlpha = 1;
      break;
    case "hatch-remaining":
      ctx.globalAlpha = 0.55;
      diagonal(MAP_COLORS.remaining, 6);
      diagonal(MAP_COLORS.remaining, 6, true);
      ctx.globalAlpha = 1;
      break;
    case "stipple-peoples":
      ctx.fillStyle = MAP_COLORS.peoples;
      ctx.globalAlpha = 0.5;
      for (const [x, y] of [
        [2, 3],
        [7, 9],
        [12, 5],
        [5, 13],
        [14, 12],
        [9, 1],
      ]) {
        ctx.beginPath();
        ctx.arc(x, y, 1.05, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;
      break;
    case "grid-schematic":
      ctx.strokeStyle = MAP_COLORS.region;
      ctx.globalAlpha = 0.5;
      for (let i = 0; i <= s; i += 5) {
        ctx.beginPath();
        ctx.moveTo(i, 0);
        ctx.lineTo(i, s);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(0, i);
        ctx.lineTo(s, i);
        ctx.stroke();
      }
      ctx.globalAlpha = 1;
      break;
  }
}

/* ------------------------------------------------------------------ */
/* Registration                                                        */
/* ------------------------------------------------------------------ */

export const EVENT_ICONS: EventIcon[] = [
  "battle",
  "crossing",
  "treaty",
  "assembly",
  "covenant",
  "memorial",
  "camp",
  "burial",
  "altar",
  "failure",
];

export const PATTERNS: PatternName[] = [
  "hatch-allotment",
  "hatch-remaining",
  "stipple-peoples",
  "grid-schematic",
];

export const iconImageId = (icon: EventIcon) => `ev-${icon}`;

interface ImageHost {
  hasImage(id: string): boolean;
  addImage(id: string, image: ImageData, options?: { pixelRatio?: number }): void;
}

/**
 * Hand MapLibre the pixels rather than the canvas.
 *
 * `addImage` does not accept an HTMLCanvasElement: it reads `width`, `height` and
 * `data` off whatever it is given, and a canvas has the first two but not the third.
 * Passing one registers an image with zero bytes, which surfaces as a "mismatched
 * image size" RangeError and, more quietly, as event marks and hatch fills that never
 * appear. `ImageData` carries all three, so it is unambiguous.
 */
function pixels(c: HTMLCanvasElement, ctx: Ctx): ImageData {
  return ctx.getImageData(0, 0, c.width, c.height);
}

/**
 * Register every icon and pattern. Safe to call more than once, which matters
 * because MapLibre drops added images when the style is replaced.
 */
export function registerMapImages(map: ImageHost) {
  for (const icon of EVENT_ICONS) {
    const id = iconImageId(icon);
    if (map.hasImage(id)) continue;
    const { c, ctx } = canvas(ICON_PX);
    drawEvent(ctx, icon);
    map.addImage(id, pixels(c, ctx), { pixelRatio: DPR });
  }
  for (const name of PATTERNS) {
    if (map.hasImage(name)) continue;
    const { c, ctx } = canvas(PATTERN_PX);
    drawPattern(ctx, name);
    map.addImage(name, pixels(c, ctx), { pixelRatio: DPR });
  }
}

/**
 * The same event mark as a data URL, for use in the legend and in prose where a
 * reader needs to match what they are reading to what they are seeing.
 */
export function eventIconDataUrl(icon: EventIcon): string {
  const { c, ctx } = canvas(ICON_PX);
  drawEvent(ctx, icon);
  return c.toDataURL();
}
