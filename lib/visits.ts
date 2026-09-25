/**
 * The visit log behind `/stats`.
 *
 * One JSON line per page view, appended to `data/visits.jsonl` (gitignored). A
 * flat file rather than a database on purpose: this study has no other stateful
 * storage, and stats are a curiosity, not a system worth operating. Appends are
 * atomic enough at this traffic level, and a torn line is simply skipped on read.
 *
 * Privacy is by construction: the raw IP is never written. Each view stores only
 * a truncated hash of ip + user agent, enough to count "unique visitors" and
 * nothing that identifies one.
 */

import { createHash } from "node:crypto";
import { appendFile, mkdir, readFile } from "node:fs/promises";
import path from "node:path";

export type Visit = {
  /** ISO timestamp of the view. */
  t: string;
  /** Pathname visited. */
  path: string;
  /** Anonymous visitor id: truncated hash of ip + user agent. */
  visitor: string;
  referrer: string;
  ua: string;
};

const DATA_DIR = path.join(process.cwd(), "data");
const VISITS_FILE = path.join(DATA_DIR, "visits.jsonl");

export function visitorId(ip: string, ua: string): string {
  return createHash("sha256").update(`${ip}|${ua}`).digest("hex").slice(0, 12);
}

export async function recordVisit(visit: Visit): Promise<void> {
  await mkdir(DATA_DIR, { recursive: true });
  await appendFile(VISITS_FILE, JSON.stringify(visit) + "\n", "utf8");
}

export async function readVisits(): Promise<Visit[]> {
  let raw: string;
  try {
    raw = await readFile(VISITS_FILE, "utf8");
  } catch (err) {
    if ((err as NodeJS.ErrnoException).code === "ENOENT") return [];
    throw err;
  }
  const visits: Visit[] = [];
  for (const line of raw.split("\n")) {
    if (!line.trim()) continue;
    try {
      visits.push(JSON.parse(line));
    } catch {
      /* a line torn by a mid-write restart; skip it rather than lose the page */
    }
  }
  return visits;
}
