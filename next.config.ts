import type { NextConfig } from "next";

/*
 * Static export, for hosting on GitHub Pages (or any host with no Node server).
 *
 * Set only by `scripts/build-static.mjs`, never by hand: that script also removes
 * `app/api` for the duration of the build, because a route handler that reads
 * `request.url` (the ESV proxy does, to read `?q=`) cannot be included in a static
 * export at all. `npm run build` and `npm run dev` are untouched by this and keep the
 * live ESV route, so nothing changes for local work or for hosting with a real server.
 */
const STATIC_EXPORT = process.env.NEXT_PUBLIC_STATIC_EXPORT === "1";

/*
 * The sub-path GitHub (or any other host) is serving this build from, e.g.
 * "/bible-study" for a project page without a custom domain. Read from the same
 * `NEXT_PUBLIC_BASE_PATH` that `lib/base-path.ts` uses for asset URLs the router does
 * not touch, so the two can never drift apart. Empty for local dev, for `next start`,
 * and for any host that serves the app from its domain root.
 */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  ...(STATIC_EXPORT ? { output: "export" as const } : {}),
  ...(basePath ? { basePath } : {}),
  /*
   * Folder-per-route output (`/study/index.html` rather than `/study.html`), so a
   * static host needs no rewrite rules to serve a clean URL. Scoped to the static
   * build alone: a server-backed deployment has no need of it and the brief's example
   * URLs (`/study?chapter=6`) already read naturally without a trailing slash.
   */
  ...(STATIC_EXPORT ? { trailingSlash: true } : {}),
  /*
   * Let `next dev` be reached from other devices on the local network.
   *
   * The dev server blocks cross-origin requests to dev-only assets unless the origin is
   * allowed here, and the block is quiet: the page loads, the study reads normally, and
   * the one lazily imported chunk — MapLibre — never arrives, so the map pane sits empty
   * with no error anywhere. Opening the study on a phone via the machine's LAN address
   * is exactly how this app gets checked on a real phone, so the common private hostnames
   * are allowed. Each `*` matches one label, so this is the 192.168 subnet and mDNS
   * `.local` names, not the open internet. Production (`next start`) is unaffected;
   * it has no dev endpoints to protect.
   */
  allowedDevOrigins: ["192.168.*.*", "10.*.*.*", "*.local"],
};

export default nextConfig;
