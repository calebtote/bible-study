#!/usr/bin/env node
/**
 * Build the static export used for GitHub Pages (or any host with no Node server).
 *
 * Next.js cannot include a route handler that reads the request in a static export;
 * `app/api/esv/route.ts` reads `request.url` to get `?q=`, so it is one of those and the
 * build fails if it stays where Next can see it. There is no config flag for "export
 * everything except this one route" (confirmed against the bundled Next docs for this
 * version), so this script moves `app/api` aside for the one build that cannot have it
 * and puts it straight back, on every exit path, including a crash.
 *
 * `npm run build` and `npm run dev` never call this script and never lose the route;
 * only `npm run build:pages` does, so hosting with a real server is untouched.
 */

import { existsSync, renameSync } from "node:fs";
import { spawnSync } from "node:child_process";
import path from "node:path";

const ROOT = process.cwd();
const API_DIR = path.join(ROOT, "app", "api");
const BACKUP_DIR = path.join(ROOT, ".api-backup-during-static-build");

/*
 * Self-healing: if a previous run was killed mid-build, `app/api` is already sitting
 * in the backup slot and this run would otherwise "successfully" build without it,
 * silently shipping the routed build with a missing route. Put it back before doing
 * anything else, so this run starts from the same state a first run would.
 */
if (!existsSync(API_DIR) && existsSync(BACKUP_DIR)) {
  console.log("[build-static] found app/api parked from an interrupted run, restoring it first");
  renameSync(BACKUP_DIR, API_DIR);
}

const hadApi = existsSync(API_DIR);
if (hadApi) renameSync(API_DIR, BACKUP_DIR);

let exitCode = 1;
try {
  const result = spawnSync("npx", ["next", "build"], {
    stdio: "inherit",
    env: { ...process.env, NEXT_PUBLIC_STATIC_EXPORT: "1" },
  });
  exitCode = result.status ?? 1;
} finally {
  if (hadApi) renameSync(BACKUP_DIR, API_DIR);
}

process.exit(exitCode);
