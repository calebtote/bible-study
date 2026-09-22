/**
 * Parsing the study's Scripture references.
 *
 * Every reference in the content is written in one shape, "Book 6:1-5", with the
 * verse range optional. That is a deliberate constraint rather than a limitation of
 * this parser: a study whose references are machine-readable can offer the passage
 * inline, and one whose references are free prose cannot.
 *
 * A reference that will not parse is returned as `null` and rendered as plain text.
 * The alternative, guessing, would put the wrong verses under a claim.
 */

export interface ParsedRef {
  /** Canonical display form, normalised. */
  display: string;
  book: string;
  chapter: number;
  verseStart?: number;
  verseEnd?: number;
  /** File stem under `public/scripture/web/`. */
  slug: string;
  /** The form api.esv.org expects. */
  esvQuery: string;
}

const REF = /^([1-3]\s+)?([A-Za-z][A-Za-z\s]*?)\s+(\d+)(?::(\d+)(?:\s*[-–]\s*(\d+))?)?$/;

export function parseRef(raw: string): ParsedRef | null {
  const text = raw.trim().replace(/\s+/g, " ");
  const m = text.match(REF);
  if (!m) return null;

  const [, ordinal, name, chapterText, startText, endText] = m;
  const book = `${ordinal ? ordinal.trim() + " " : ""}${name.trim()}`;
  const chapter = Number(chapterText);
  if (!Number.isInteger(chapter) || chapter < 1) return null;

  const verseStart = startText ? Number(startText) : undefined;
  const verseEnd = endText ? Number(endText) : verseStart;
  if (verseStart !== undefined && verseEnd !== undefined && verseEnd < verseStart) {
    return null;
  }

  /* "Psalm 95" is how a single psalm is cited; the bundle stores the book as psalms. */
  const slugBook = book.toLowerCase() === "psalm" ? "psalms" : book.toLowerCase();
  const slug = `${slugBook.replace(/\s+/g, "-")}-${chapter}`;

  return {
    display: text,
    book,
    chapter,
    verseStart,
    verseEnd,
    slug,
    esvQuery: text,
  };
}

/** Does this reference fall inside the book the study is about? */
export const isJoshua = (ref: ParsedRef): boolean =>
  ref.book.toLowerCase() === "joshua";

export interface Verse {
  v: number;
  t: string;
}

export interface ChapterText {
  book: string;
  chapter: number;
  translation: string;
  translationId: string;
  verses: Verse[];
}

/** The verses a reference selects, or the whole chapter when it gives no range. */
export function selectVerses(chapter: ChapterText, ref: ParsedRef): Verse[] {
  if (ref.verseStart === undefined) return chapter.verses;
  const end = ref.verseEnd ?? ref.verseStart;
  return chapter.verses.filter((v) => v.v >= ref.verseStart! && v.v <= end);
}
