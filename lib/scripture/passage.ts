/**
 * Fetching a passage, in whichever translation is available.
 *
 * Two translations, and they are not equivalent in kind. The World English Bible is
 * public domain and bundled with the site as static JSON, so it works with no
 * network, no key and no third party. The English Standard Version is fetched live
 * through this app's own route handler. That makes the ESV a preference and the WEB
 * the floor: if the ESV cannot be had, for any reason, the passage still appears and
 * the reader is told which translation they are looking at.
 *
 * Silent substitution would be the wrong behaviour here. Translations differ, and a
 * reader comparing a quoted phrase against the panel needs to know which text is on
 * screen. So a fallback is reported as a fallback.
 *
 * A book that is not bundled produces a plainly worded "not included" result rather
 * than an empty panel. The bundle covers every book this study cites; if that stops
 * being true, the interface should say so out loud instead of showing nothing.
 */

import {
  parseRef,
  selectVerses,
  type ChapterText,
  type ParsedRef,
  type Verse,
} from "./reference";
import { STATIC_EXPORT, withBasePath } from "@/lib/base-path";

export interface Passage {
  ref: ParsedRef;
  /** Human-readable translation name, always shown with the text. */
  translation: string;
  translationId: "esv" | "web";
  verses: Verse[];
  /** Copyright line the licence requires. Absent for public-domain text. */
  attribution?: string;
  /**
   * Set when the reader asked for a translation that could not be fetched and
   * this is the substitute.
   */
  fellBackFrom?: "esv";
  /** Why the preferred translation was unavailable, in plain words. */
  fallbackReason?: string;
}

export type PassageResult =
  | { status: "ok"; passage: Passage }
  | { status: "unparsed"; message: string }
  /** The reference parsed, but this study does not carry that book. */
  | { status: "not-bundled"; message: string }
  | { status: "error"; message: string };

export type TranslationChoice = "esv" | "web";

/* One chapter file serves many references, so it is cached rather than refetched. */
const chapterCache = new Map<string, ChapterText | "missing">();
const esvCache = new Map<string, Passage | "unavailable">();

const WEB_NAME = "World English Bible";

/**
 * Turn the ESV API's inline verse markers back into discrete verses.
 *
 * The API returns `[1] text [2] text`. Splitting it means both translations render
 * through exactly the same component, so the reader's eye is not asked to adjust
 * when they switch. If no markers are found the whole passage becomes a single
 * entry numbered from the reference, which is honest about what is known.
 */
function splitEsvVerses(text: string, ref: ParsedRef): Verse[] {
  const parts = text.split(/\[(\d+)\]/).slice(1);
  if (parts.length < 2) {
    return [{ v: ref.verseStart ?? 1, t: text.replace(/\s+/g, " ").trim() }];
  }

  const verses: Verse[] = [];
  for (let i = 0; i + 1 < parts.length; i += 2) {
    const v = Number(parts[i]);
    const t = parts[i + 1].replace(/\s+/g, " ").trim();
    if (Number.isInteger(v) && t) verses.push({ v, t });
  }
  return verses;
}

async function loadWeb(ref: ParsedRef): Promise<PassageResult> {
  const cached = chapterCache.get(ref.slug);

  if (cached === "missing") {
    return { status: "not-bundled", message: notBundled(ref) };
  }

  let chapter = cached;
  if (!chapter) {
    let response: Response;
    try {
      response = await fetch(withBasePath(`/scripture/web/${ref.slug}.json`));
    } catch {
      return {
        status: "error",
        message: `The bundled text for ${ref.display} could not be loaded.`,
      };
    }

    if (response.status === 404) {
      chapterCache.set(ref.slug, "missing");
      return { status: "not-bundled", message: notBundled(ref) };
    }
    if (!response.ok) {
      return {
        status: "error",
        message: `The bundled text for ${ref.display} could not be loaded.`,
      };
    }

    chapter = (await response.json()) as ChapterText;
    chapterCache.set(ref.slug, chapter);
  }

  const verses = selectVerses(chapter, ref);
  if (!verses.length) {
    /*
     * The chapter is bundled but the range falls outside it, which means a
     * reference in the content is wrong. Say which, so it can be corrected.
     */
    return {
      status: "error",
      message: `${ref.display} is outside ${chapter.book} ${chapter.chapter}, which has ${chapter.verses.length} verses. The reference in the study text needs correcting.`,
    };
  }

  return {
    status: "ok",
    passage: {
      ref,
      translation: chapter.translation || WEB_NAME,
      translationId: "web",
      verses,
    },
  };
}

const notBundled = (ref: ParsedRef) =>
  `${ref.book} is not among the books bundled with this study, so ${ref.display} cannot be shown here. Open it in your own Bible.`;

/*
 * A statically exported build has no server, so `/api/esv` cannot exist at all: it is
 * a route handler, not a file, and static hosts serve files. Checked first, before any
 * cache lookup, so this never fights the "unavailable" cache for the same slot; a build
 * that has no proxy always answers the same way, and answers it without a network
 * round trip that could only ever 404.
 */
const NO_ESV_PROXY = {
  reason:
    "This build has no ESV proxy, so the World English Bible is shown instead.",
};

async function loadEsv(ref: ParsedRef): Promise<Passage | { reason: string }> {
  if (STATIC_EXPORT) return NO_ESV_PROXY;

  const cached = esvCache.get(ref.display);
  if (cached && cached !== "unavailable") return cached;
  if (cached === "unavailable") {
    return { reason: "The English Standard Version is not available here." };
  }

  let response: Response;
  try {
    response = await fetch(withBasePath(`/api/esv?q=${encodeURIComponent(ref.display)}`));
  } catch {
    return { reason: "The English Standard Version could not be reached." };
  }

  if (!response.ok) {
    const detail = await response
      .json()
      .then((b: { detail?: string }) => b.detail)
      .catch(() => undefined);
    /*
     * A missing key or an unroutable host will not fix itself on the next
     * reference, so the negative result is cached and the rest of the session
     * goes straight to the bundled text.
     */
    if (response.status === 503) esvCache.set(ref.display, "unavailable");
    return {
      reason:
        detail ?? "The English Standard Version is not available at the moment.",
    };
  }

  const body = (await response.json()) as {
    text: string;
    canonical: string;
    attribution: string;
  };

  const passage: Passage = {
    ref,
    translation: "English Standard Version",
    translationId: "esv",
    verses: splitEsvVerses(body.text, ref),
    attribution: body.attribution,
  };
  esvCache.set(ref.display, passage);
  return passage;
}

/**
 * The passage for a reference, in the preferred translation where possible.
 *
 * `raw` is the reference exactly as an author wrote it in the content.
 */
export async function loadPassage(
  raw: string,
  preferred: TranslationChoice
): Promise<PassageResult> {
  const ref = parseRef(raw);
  if (!ref) {
    return {
      status: "unparsed",
      message: `"${raw}" could not be read as a Bible reference, so no passage is shown rather than the wrong one.`,
    };
  }

  if (preferred === "web") return loadWeb(ref);

  const esv = await loadEsv(ref);
  if ("verses" in esv) return { status: "ok", passage: esv };

  const fallback = await loadWeb(ref);
  if (fallback.status !== "ok") return fallback;
  return {
    status: "ok",
    passage: {
      ...fallback.passage,
      fellBackFrom: "esv",
      fallbackReason: esv.reason,
    },
  };
}
