/**
 * The ESV passage proxy.
 *
 * The reason this route exists rather than the browser calling api.esv.org itself
 * is the credential. `API_ESV_ORG` is read here, on the server, and never reaches
 * the client bundle, the reader's local storage, or the notebook export file. A
 * study whose export could carry a live API key out to whoever it was shared with
 * would be a study that leaked its own credential.
 *
 * Two further deliberate choices.
 *
 * The query is parsed before it is forwarded. Only a reference this study's own
 * parser recognises is sent on, so the route is a passage lookup and not an open
 * relay that happens to be authenticated.
 *
 * Failure is explicit and quiet. If the key is absent, if the upstream is down, or
 * if the reader is offline, this returns a status the interface can act on, and the
 * passage falls back to the bundled World English Bible. Nothing in the study
 * depends on this route working: it is a translation preference, not the text.
 */

import { NextResponse } from "next/server";
import { parseRef } from "@/lib/scripture/reference";

const ENDPOINT = "https://api.esv.org/v3/passage/text/";

/** A day. Passages do not change, and the upstream has a daily request budget. */
const REVALIDATE_SECONDS = 86_400;

export interface EsvResponse {
  reference: string;
  /** Canonical reference as the ESV API resolved it. */
  canonical: string;
  text: string;
  translation: "ESV";
  attribution: string;
}

/**
 * Required by the ESV API terms of use, and rendered with every passage rather
 * than parked on a colophon page.
 */
const ATTRIBUTION =
  "Scripture quotations are from the ESV Bible (The Holy Bible, English Standard Version), copyright 2001 by Crossway, a publishing ministry of Good News Publishers. Used by permission. All rights reserved.";

/**
 * The bare token, however it was written into the environment.
 *
 * ESV hands its credential over as a ready-made header line, so the natural thing to
 * paste into a `.env` is `API_ESV_ORG=Authorization: Token abc123`. That produces a
 * request authorised as `Token Authorization: Token abc123`, which the upstream rejects
 * with a 403 that looks exactly like a revoked key, and the study falls quietly back to
 * the World English Bible with nothing on screen to suggest a configuration problem
 * rather than a licensing one. Accepting either form is a two-line concession that
 * removes a whole class of silent misconfiguration.
 */
function esvToken(): string | undefined {
  const raw = process.env.API_ESV_ORG?.trim();
  if (!raw) return undefined;
  const token = raw
    .replace(/^authorization\s*:\s*/i, "")
    .replace(/^token\s+/i, "")
    .trim();
  return token || undefined;
}

export async function GET(request: Request) {
  const query = new URL(request.url).searchParams.get("q")?.trim();

  if (!query) {
    return NextResponse.json(
      { error: "No passage was requested." },
      { status: 400 }
    );
  }

  const ref = parseRef(query);
  if (!ref) {
    return NextResponse.json(
      {
        error: `"${query}" is not a reference this study recognises. Expected a form like "Joshua 6:1-5".`,
      },
      { status: 400 }
    );
  }

  const key = esvToken();
  if (!key) {
    /*
     * 503 rather than 500: nothing is broken, the translation is simply not
     * configured in this deployment, and the client should fall back rather
     * than report an error to the reader.
     */
    return NextResponse.json(
      {
        error: "esv-not-configured",
        detail:
          "This deployment has no ESV credential, so the English Standard Version is unavailable. The bundled World English Bible is used instead.",
      },
      { status: 503 }
    );
  }

  const url = new URL(ENDPOINT);
  url.searchParams.set("q", ref.esvQuery);
  url.searchParams.set("include-passage-references", "false");
  url.searchParams.set("include-verse-numbers", "true");
  url.searchParams.set("include-first-verse-numbers", "true");
  url.searchParams.set("include-footnotes", "false");
  url.searchParams.set("include-footnote-body", "false");
  url.searchParams.set("include-headings", "false");
  url.searchParams.set("include-short-copyright", "false");
  url.searchParams.set("indent-paragraphs", "0");
  url.searchParams.set("indent-poetry", "false");
  url.searchParams.set("indent-declares", "0");
  url.searchParams.set("indent-psalm-doxology", "0");

  let upstream: Response;
  try {
    upstream = await fetch(url, {
      headers: { Authorization: `Token ${key}` },
      next: { revalidate: REVALIDATE_SECONDS },
    });
  } catch {
    return NextResponse.json(
      {
        error: "esv-unreachable",
        detail: "The ESV service could not be reached.",
      },
      { status: 502 }
    );
  }

  if (!upstream.ok) {
    /*
     * The upstream body may name the credential problem. It is not forwarded:
     * an error message is a place credentials leak, and the reader can do nothing
     * with it either way.
     */
    return NextResponse.json(
      {
        error: "esv-request-failed",
        detail: `The ESV service returned ${upstream.status}.`,
      },
      { status: 502 }
    );
  }

  const payload = (await upstream.json()) as {
    canonical?: string;
    passages?: string[];
  };

  const text = (payload.passages ?? []).join("\n\n").trim();
  if (!text) {
    return NextResponse.json(
      {
        error: "esv-empty",
        detail: `The ESV service returned no text for "${ref.display}".`,
      },
      { status: 502 }
    );
  }

  const body: EsvResponse = {
    reference: ref.display,
    canonical: payload.canonical?.trim() || ref.display,
    text,
    translation: "ESV",
    attribution: ATTRIBUTION,
  };

  return NextResponse.json(body, {
    headers: { "Cache-Control": `public, max-age=${REVALIDATE_SECONDS}` },
  });
}
