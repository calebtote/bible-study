/**
 * The sub-path this build is deployed under, and whether it has a server at all.
 *
 * `next.config.ts` sets `basePath` from the same `NEXT_PUBLIC_BASE_PATH` variable read
 * here, so the two stay in step by construction. Next's own router and `next/link`
 * apply that `basePath` automatically; what it does not touch is anything fetched by a
 * literal string, which is everything in this study that isn't a page route: the bundled
 * GeoJSON, the bundled scripture, and the ESV proxy. Those call sites go through
 * `withBasePath` instead of assuming they are served from the domain root.
 *
 * `STATIC_EXPORT` is the companion fact: a GitHub Pages (or any static host) deployment
 * has no server, so `/api/esv` cannot exist there at all. Code that would otherwise hit
 * that route checks this flag first, so a static deployment fails toward the bundled
 * World English Bible immediately rather than after a guaranteed 404 round trip.
 */

export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const STATIC_EXPORT = process.env.NEXT_PUBLIC_STATIC_EXPORT === "1";

export const withBasePath = (path: string): string => `${BASE_PATH}${path}`;
