/**
 * The endpoint the visit beacon posts to.
 *
 * Lives under `app/api`, so the static-export build parks it along with the ESV
 * proxy; the beacon checks `STATIC_EXPORT` and never calls it there. The raw IP
 * is hashed with the user agent before anything touches disk — see `lib/visits`.
 *
 * Always answers 204, even for a malformed body: a tracking endpoint that
 * returns errors invites retries and console noise for zero benefit.
 */

import type { NextRequest } from "next/server";
import { recordVisit, visitorId } from "@/lib/visits";

export async function POST(request: NextRequest) {
  let body: { path?: unknown; referrer?: unknown } = {};
  try {
    body = await request.json();
  } catch {
    /* no or invalid JSON; record the view with defaults */
  }

  const ua = request.headers.get("user-agent") ?? "unknown";
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "local";

  await recordVisit({
    t: new Date().toISOString(),
    path: typeof body.path === "string" ? body.path : "/",
    visitor: visitorId(ip, ua),
    referrer: typeof body.referrer === "string" ? body.referrer : "",
    ua,
  });

  return new Response(null, { status: 204 });
}
