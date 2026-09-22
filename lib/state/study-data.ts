/**
 * Local study data: notes, bookmarks, progress, preferences.
 *
 * There is no account and no server. Everything a reader produces lives in this
 * browser and leaves only when they export it. That makes two things important:
 *
 *   1. Reading must never throw. A corrupted or half written record has to
 *      degrade to the default rather than take the study down, because the
 *      alternative is a reader who cannot open their own notes.
 *   2. Importing must validate before it replaces. An import is the one action
 *      here that can destroy work, so it is checked field by field and the
 *      caller is told what it found before anything is overwritten.
 */

import type {
  Bookmark,
  LayerId,
  Note,
  Preferences,
  StudyData,
  StudyProgress,
} from "@/content/types";
import { LAYERS } from "@/content/types";
import { STATIC_EXPORT } from "@/lib/base-path";

export const STORAGE_KEY = "joshua-study-v1";

export const DEFAULT_PREFERENCES: Preferences = {
  spoilerMode: true,
  layers: Object.fromEntries(
    (Object.keys(LAYERS) as LayerId[]).map((id) => [id, LAYERS[id].defaultOn])
  ) as Record<LayerId, boolean>,
  reading: {
    fontScale: 1,
    lineHeight: "normal",
    serifBody: true,
    showEvidenceLabels: true,
    expandAllSections: false,
  },
  map: {
    basemap: "external-terrain",
    showLabels: true,
  },
  scripture: {
    /*
     * The ESV, which is the translation this study was asked to read in, and the one
     * most readers coming to Joshua for close study will have in print beside them.
     * Preferring it costs nothing when it is unavailable: a deployment with no
     * credential, an offline reader or a failed request all fall through to the bundled
     * World English Bible, and the passage says so in place rather than silently
     * swapping translations underneath a reader comparing wording.
     *
     * A statically exported build is a stronger case than "unavailable": there is no
     * server for any deployment of it to have a credential on, ever, so defaulting to
     * ESV there would mean every reader's first passage is the fallback message
     * before it settles into WEB. Starting them on WEB is simply the honest default.
     */
    preferred: STATIC_EXPORT ? "web" : "esv",
  },
  motion: "auto",
};

export const DEFAULT_PROGRESS: StudyProgress = {
  completedChapters: [],
  visitedMilestones: [],
};

export const emptyStudyData = (): StudyData => ({
  version: 1,
  exportedAt: new Date().toISOString(),
  notes: [],
  bookmarks: [],
  progress: { ...DEFAULT_PROGRESS },
  preferences: structuredClone(DEFAULT_PREFERENCES),
});

/* ------------------------------------------------------------------ */
/* Validation                                                          */
/* ------------------------------------------------------------------ */

export interface ImportReport {
  ok: boolean;
  /** Reasons the file cannot be used at all. */
  errors: string[];
  /** Records that were dropped or repaired, named so the reader can see them. */
  repairs: string[];
  /** What the file would add, for the confirmation step. */
  summary: { notes: number; bookmarks: number; chaptersComplete: number };
  data?: StudyData;
}

const isRecord = (v: unknown): v is Record<string, unknown> =>
  typeof v === "object" && v !== null && !Array.isArray(v);

const isIsoDate = (v: unknown): v is string =>
  typeof v === "string" && !Number.isNaN(Date.parse(v));

const FONT_SCALES: Preferences["reading"]["fontScale"][] = [0.9, 1, 1.15, 1.3];
const LINE_HEIGHTS: Preferences["reading"]["lineHeight"][] = [
  "snug",
  "normal",
  "relaxed",
];
const BOOKMARK_KINDS: Bookmark["kind"][] = [
  "chapter",
  "milestone",
  "entity",
  "theme",
  "question",
  "person",
];

/**
 * Preferences are merged rather than validated wholesale: an unknown key is
 * ignored and a missing one falls back to the default, so a file written by an
 * older or newer version of the study still restores everything it can.
 */
function mergePreferences(raw: unknown, repairs: string[]): Preferences {
  const base = structuredClone(DEFAULT_PREFERENCES);
  if (!isRecord(raw)) {
    if (raw !== undefined) repairs.push("preferences were not an object; defaults used");
    return base;
  }

  if (typeof raw.spoilerMode === "boolean") base.spoilerMode = raw.spoilerMode;
  if (raw.motion === "auto" || raw.motion === "reduced") base.motion = raw.motion;

  if (isRecord(raw.layers)) {
    for (const id of Object.keys(LAYERS) as LayerId[]) {
      if (typeof raw.layers[id] === "boolean") base.layers[id] = raw.layers[id];
    }
  }

  if (isRecord(raw.reading)) {
    const r = raw.reading;
    if (FONT_SCALES.includes(r.fontScale as never)) {
      base.reading.fontScale = r.fontScale as Preferences["reading"]["fontScale"];
    }
    if (LINE_HEIGHTS.includes(r.lineHeight as never)) {
      base.reading.lineHeight = r.lineHeight as Preferences["reading"]["lineHeight"];
    }
    for (const k of ["serifBody", "showEvidenceLabels", "expandAllSections"] as const) {
      if (typeof r[k] === "boolean") base.reading[k] = r[k];
    }
  }

  if (isRecord(raw.map)) {
    if (raw.map.basemap === "bundled" || raw.map.basemap === "external-terrain") {
      base.map.basemap = raw.map.basemap;
    }
    if (typeof raw.map.showLabels === "boolean") {
      base.map.showLabels = raw.map.showLabels;
    }
  }

  if (isRecord(raw.scripture)) {
    if (raw.scripture.preferred === "esv" || raw.scripture.preferred === "web") {
      base.scripture.preferred = raw.scripture.preferred;
    }
    /*
     * Older exports, and hand edited files, may carry an ESV key here. It is
     * dropped rather than restored: the credential belongs on the server, and
     * silently reviving one out of a shared file is exactly what the current
     * shape of Preferences exists to prevent.
     */
    if ("esvApiKey" in raw.scripture) {
      repairs.push(
        "an API key in the file was discarded; keys are held server side and are not part of study data"
      );
    }
  }

  return base;
}

function validateNotes(raw: unknown, repairs: string[]): Note[] {
  if (!Array.isArray(raw)) {
    if (raw !== undefined) repairs.push("notes were not a list; none imported");
    return [];
  }
  const out: Note[] = [];
  const seen = new Set<string>();
  raw.forEach((n, i) => {
    if (!isRecord(n)) return repairs.push(`note ${i + 1} was not an object`);
    const { id, chapter, body, milestoneId, createdAt, updatedAt } = n;
    if (typeof id !== "string" || !id) return repairs.push(`note ${i + 1} had no id`);
    if (seen.has(id)) return repairs.push(`note "${id}" appeared twice; the later copy was dropped`);
    if (typeof chapter !== "number" || chapter < 1 || chapter > 24) {
      return repairs.push(`note "${id}" named chapter ${String(chapter)}, which is not 1 to 24`);
    }
    if (typeof body !== "string") return repairs.push(`note "${id}" had no body`);
    seen.add(id);
    const now = new Date().toISOString();
    out.push({
      id,
      chapter,
      body,
      milestoneId: typeof milestoneId === "string" ? milestoneId : undefined,
      createdAt: isIsoDate(createdAt) ? createdAt : now,
      updatedAt: isIsoDate(updatedAt) ? updatedAt : now,
    });
  });
  return out;
}

function validateBookmarks(raw: unknown, repairs: string[]): Bookmark[] {
  if (!Array.isArray(raw)) {
    if (raw !== undefined) repairs.push("bookmarks were not a list; none imported");
    return [];
  }
  const out: Bookmark[] = [];
  const seen = new Set<string>();
  raw.forEach((b, i) => {
    if (!isRecord(b)) return repairs.push(`bookmark ${i + 1} was not an object`);
    const { id, kind, targetId, label, href, createdAt } = b;
    if (typeof id !== "string" || !id) return repairs.push(`bookmark ${i + 1} had no id`);
    if (seen.has(id)) return repairs.push(`bookmark "${id}" appeared twice`);
    if (!BOOKMARK_KINDS.includes(kind as never)) {
      return repairs.push(`bookmark "${id}" had an unknown kind "${String(kind)}"`);
    }
    if (typeof targetId !== "string" || typeof label !== "string") {
      return repairs.push(`bookmark "${id}" was missing its target or label`);
    }
    /*
     * A bookmark href is navigated to, so it must be a path inside this study
     * and never an absolute or scheme bearing URL that a shared file could use
     * to send a reader somewhere else.
     */
    if (typeof href !== "string" || !href.startsWith("/") || href.startsWith("//")) {
      return repairs.push(`bookmark "${id}" did not point at a page inside this study`);
    }
    seen.add(id);
    out.push({
      id,
      kind: kind as Bookmark["kind"],
      targetId,
      label,
      href,
      createdAt: isIsoDate(createdAt) ? createdAt : new Date().toISOString(),
    });
  });
  return out;
}

function validateProgress(raw: unknown, repairs: string[]): StudyProgress {
  const out: StudyProgress = { ...DEFAULT_PROGRESS };
  if (!isRecord(raw)) {
    if (raw !== undefined) repairs.push("progress was not an object; none imported");
    return out;
  }
  if (Array.isArray(raw.completedChapters)) {
    out.completedChapters = [
      ...new Set(
        raw.completedChapters.filter(
          (c): c is number => typeof c === "number" && c >= 1 && c <= 24
        )
      ),
    ].sort((a, b) => a - b);
    const dropped = raw.completedChapters.length - out.completedChapters.length;
    if (dropped > 0) repairs.push(`${dropped} completed chapter entries were not valid chapter numbers`);
  }
  if (Array.isArray(raw.visitedMilestones)) {
    out.visitedMilestones = [
      ...new Set(raw.visitedMilestones.filter((m): m is string => typeof m === "string")),
    ];
  }
  if (typeof raw.lastChapter === "number" && raw.lastChapter >= 1 && raw.lastChapter <= 24) {
    out.lastChapter = raw.lastChapter;
  }
  if (typeof raw.lastMilestoneId === "string") out.lastMilestoneId = raw.lastMilestoneId;
  return out;
}

/**
 * Parse a candidate export file. Never throws, and never returns partial data
 * alongside `ok: true`: either the caller gets something safe to write, or it
 * gets errors to show.
 */
export function parseStudyData(text: string): ImportReport {
  const errors: string[] = [];
  const repairs: string[] = [];

  let raw: unknown;
  try {
    raw = JSON.parse(text);
  } catch (e) {
    return {
      ok: false,
      errors: [`The file is not valid JSON: ${(e as Error).message}`],
      repairs,
      summary: { notes: 0, bookmarks: 0, chaptersComplete: 0 },
    };
  }

  if (!isRecord(raw)) {
    errors.push("The file does not contain a study export object.");
  } else if (raw.version !== 1) {
    errors.push(
      `This file declares version ${JSON.stringify(raw.version)}. This study reads version 1.`
    );
  }

  if (errors.length) {
    return { ok: false, errors, repairs, summary: { notes: 0, bookmarks: 0, chaptersComplete: 0 } };
  }

  const r = raw as Record<string, unknown>;
  const data: StudyData = {
    version: 1,
    exportedAt: isIsoDate(r.exportedAt) ? (r.exportedAt as string) : new Date().toISOString(),
    notes: validateNotes(r.notes, repairs),
    bookmarks: validateBookmarks(r.bookmarks, repairs),
    progress: validateProgress(r.progress, repairs),
    preferences: mergePreferences(r.preferences, repairs),
  };

  return {
    ok: true,
    errors,
    repairs,
    summary: {
      notes: data.notes.length,
      bookmarks: data.bookmarks.length,
      chaptersComplete: data.progress.completedChapters.length,
    },
    data,
  };
}

/** Merge an import into what is already here, keeping the newer of each note. */
export function mergeStudyData(current: StudyData, incoming: StudyData): StudyData {
  const notes = new Map(current.notes.map((n) => [n.id, n]));
  for (const n of incoming.notes) {
    const existing = notes.get(n.id);
    if (!existing || Date.parse(n.updatedAt) > Date.parse(existing.updatedAt)) {
      notes.set(n.id, n);
    }
  }
  const bookmarks = new Map(current.bookmarks.map((b) => [b.id, b]));
  for (const b of incoming.bookmarks) if (!bookmarks.has(b.id)) bookmarks.set(b.id, b);

  return {
    version: 1,
    exportedAt: new Date().toISOString(),
    notes: [...notes.values()],
    bookmarks: [...bookmarks.values()],
    progress: {
      completedChapters: [
        ...new Set([
          ...current.progress.completedChapters,
          ...incoming.progress.completedChapters,
        ]),
      ].sort((a, b) => a - b),
      visitedMilestones: [
        ...new Set([
          ...current.progress.visitedMilestones,
          ...incoming.progress.visitedMilestones,
        ]),
      ],
      lastChapter: incoming.progress.lastChapter ?? current.progress.lastChapter,
      lastMilestoneId: incoming.progress.lastMilestoneId ?? current.progress.lastMilestoneId,
    },
    /* Preferences are the importing file's, since that is the readable intent. */
    preferences: incoming.preferences,
  };
}

/* ------------------------------------------------------------------ */
/* Storage                                                             */
/* ------------------------------------------------------------------ */

export function loadStudyData(): StudyData {
  if (typeof window === "undefined") return emptyStudyData();
  let text: string | null = null;
  try {
    text = window.localStorage.getItem(STORAGE_KEY);
  } catch {
    /* Private browsing, or storage disabled. The study still works, unsaved. */
    return emptyStudyData();
  }
  if (!text) return emptyStudyData();
  const report = parseStudyData(text);
  return report.ok && report.data ? report.data : emptyStudyData();
}

export function saveStudyData(data: StudyData): boolean {
  if (typeof window === "undefined") return false;
  try {
    window.localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ ...data, exportedAt: new Date().toISOString() })
    );
    return true;
  } catch {
    return false;
  }
}
