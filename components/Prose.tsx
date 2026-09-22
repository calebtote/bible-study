"use client";

/**
 * The renderer for every authored body in the study.
 *
 * The content model allows a deliberately small markdown: blank-line paragraphs,
 * `**bold**`, `*italic*`, and `[[entity:id]]` links into the dossiers. Nothing
 * else, and no HTML, which is why this parses to React elements rather than
 * setting innerHTML. There is no sanitiser here because there is nothing to
 * sanitise: an unrecognised construct renders as the literal text an author typed,
 * which is visible in review rather than silently swallowed.
 *
 * An `[[entity:id]]` whose id has no record renders as plain text rather than a
 * dead link. The validator already fails the build on an unknown id, so this is
 * the second line of defence, and it fails toward legible prose.
 */

import { Fragment, useMemo } from "react";
import { ENTITY_BY_ID } from "@/content/entities";
import { RefPopover } from "@/components/scripture/RefPopover";

export type EntityClick = (entityId: string) => void;

/*
 * Scripture references in running prose, e.g. "Judges 1:27-28" or "Joshua 24".
 * Each one becomes a popover showing the verses in place, because a cross
 * reference the reader has to go and look up is a cross reference most readers
 * will not follow. Only books whose text the study can actually show are
 * matched; a book outside that set stays plain prose, since a reference that
 * opens an apology is worse than one that opens nothing.
 */
const REF_IN_PROSE =
  /\b((?:[12]\s(?:Samuel|Kings|Chronicles)|Genesis|Exodus|Leviticus|Numbers|Deuteronomy|Joshua|Judges|Psalms?|Isaiah|Jeremiah|Ezekiel|Micah|Habakkuk|Matthew|Acts|Romans|Hebrews|James)\s\d+(?::\d+(?:\s?[-–]\s?\d+)?)?)\b/g;

/** Plain text with its scripture references made glanceable. */
function TextWithRefs({ text }: { text: string }) {
  /* One capture group, so split alternates prose and reference. */
  const parts = text.split(REF_IN_PROSE);
  if (parts.length === 1) return <>{text}</>;
  return (
    <>
      {parts.map((part, i) =>
        i % 2 === 1 ? (
          <RefPopover key={i} refText={part}>
            {part}
          </RefPopover>
        ) : (
          <Fragment key={i}>{part}</Fragment>
        )
      )}
    </>
  );
}

const TOKEN =
  /(\[\[entity:[a-z0-9-]+\]\]|\[\[ref:[^\]|]+\|[^\]]+\]\]|\*\*[^*]+\*\*|\*[^*]+\*)/g;

/*
 * The same pattern without `g`, for testing a single segment. `TOKEN.test` would be
 * wrong here: a global regex carries `lastIndex` between calls, so consecutive tests
 * would start mid-string and answer about the wrong offset.
 */
const IS_TOKEN =
  /^(?:\[\[entity:[a-z0-9-]+\]\]|\[\[ref:[^\]|]+\|[^\]]+\]\]|\*\*[^*]+\*\*|\*[^*]+\*)$/;

/** Prose that ends in a bare definite article, so the next word must not supply one. */
const TRAILING_ARTICLE = /(^|[\s(“"'])the\s+$/i;

/**
 * The name as it should read at this point in the sentence.
 *
 * Twenty-seven entities carry a definite article in their canonical name, because
 * that is genuinely what they are called: "The Salt Sea", "The Shephelah", "The
 * daughters of Zelophehad". Authors then write the article too, since `the
 * [[entity:salt-sea]]` is the only way to put the phrase in a sentence that reads
 * naturally, and the result rendered as "the The Salt Sea".
 *
 * Fixing it here rather than in the content, because the content is right: an entity's
 * name belongs to the entity, an article belongs to the sentence, and there are
 * hundreds of call sites. Elide only when the preceding prose already supplied the
 * article, so a name that opens a sentence keeps its capital.
 */
function nameInContext(name: string, before: string | undefined) {
  if (!before || !/^The\s/.test(name)) return name;
  return TRAILING_ARTICLE.test(before) ? name.slice(4) : name;
}

function Inline({
  text,
  onEntityClick,
}: {
  text: string;
  onEntityClick?: EntityClick;
}) {
  const parts = text.split(TOKEN).filter((p) => p !== "");

  return (
    <>
      {parts.map((part, i) => {
        /*
         * An authored anchor: `[[ref:Joshua 2:10-11|that had already happened]]`.
         * The phrase is a claim the text makes without naming its passage, and the
         * anchor supplies the passage on hover. This is the deliberate counterpart
         * to the automatic matching below: automation catches references the prose
         * spells out, and anchors carry the ones it only alludes to.
         */
        const anchor = part.match(/^\[\[ref:([^\]|]+)\|([^\]]+)\]\]$/);
        if (anchor) {
          return (
            <RefPopover key={i} refText={anchor[1].trim()}>
              {anchor[2]}
            </RefPopover>
          );
        }

        const entity = part.match(/^\[\[entity:([a-z0-9-]+)\]\]$/);
        if (entity) {
          const record = ENTITY_BY_ID[entity[1]];
          if (!record) return <Fragment key={i}>{entity[1]}</Fragment>;
          /*
           * Only a plain-text neighbour counts. A preceding bold or italic run is left
           * alone rather than unwrapped and inspected: it is vanishingly rare before an
           * entity link, and guessing wrong drops an article the sentence needed.
           */
          const prev = parts[i - 1];
          const before = prev && !IS_TOKEN.test(prev) ? prev : undefined;
          const label = nameInContext(record.name, before);
          if (!onEntityClick) {
            /* No handler in this context, so the name is still the name. */
            return <Fragment key={i}>{label}</Fragment>;
          }
          return (
            <button
              key={i}
              type="button"
              className="entity-link"
              onClick={() => onEntityClick(record.id)}
              title={`${record.name}: open the dossier`}
            >
              {label}
            </button>
          );
        }

        if (part.startsWith("**") && part.endsWith("**")) {
          return (
            <strong key={i} className="font-semibold">
              <TextWithRefs text={part.slice(2, -2)} />
            </strong>
          );
        }
        if (part.startsWith("*") && part.endsWith("*")) {
          return (
            <em key={i}>
              <TextWithRefs text={part.slice(1, -1)} />
            </em>
          );
        }
        return (
          <Fragment key={i}>
            <TextWithRefs text={part} />
          </Fragment>
        );
      })}
    </>
  );
}

export function Prose({
  body,
  onEntityClick,
  className,
  compact,
}: {
  body: string;
  onEntityClick?: EntityClick;
  className?: string;
  compact?: boolean;
}) {
  const paragraphs = useMemo(
    () => body.trim().split(/\n\s*\n/).filter(Boolean),
    [body]
  );

  return (
    <div className={`prose-study ${className ?? ""}`}>
      {paragraphs.map((p, i) => (
        <p key={i} className={compact ? "mt-2 first:mt-0" : undefined}>
          <Inline text={p.replace(/\n/g, " ")} onEntityClick={onEntityClick} />
        </p>
      ))}
    </div>
  );
}

/** A single line of inline markdown, for captions and list items. */
export function ProseLine({
  text,
  onEntityClick,
  className,
}: {
  text: string;
  onEntityClick?: EntityClick;
  className?: string;
}) {
  return (
    <span className={className}>
      <Inline text={text} onEntityClick={onEntityClick} />
    </span>
  );
}
