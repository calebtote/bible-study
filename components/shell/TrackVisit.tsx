"use client";

/**
 * The visit beacon behind `/stats`.
 *
 * One fire-and-forget POST per page view, sent from the layout so every route is
 * counted without any page opting in. It renders nothing and must never get in a
 * reader's way: failures are swallowed, and `keepalive` lets the request finish
 * even when the reader is already navigating off.
 *
 * A static export has no server and no `/api/track`, so the beacon checks
 * `STATIC_EXPORT` first and stays silent rather than 404ing on every page view.
 */

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { STATIC_EXPORT, withBasePath } from "@/lib/base-path";

export function TrackVisit() {
  const pathname = usePathname();

  useEffect(() => {
    if (STATIC_EXPORT) return;
    fetch(withBasePath("/api/track"), {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: pathname, referrer: document.referrer }),
      keepalive: true,
    }).catch(() => {
      /* tracking is best-effort; the study never surfaces its errors */
    });
  }, [pathname]);

  return null;
}
