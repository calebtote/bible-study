# Authoring contract

Read this before writing any content file. It is the shared contract that keeps
independently authored files consistent and honest.

## Read first, always

1. `content/types.ts` — the interfaces. Match them exactly; the build type-checks.
2. `content/sources.ts` — the **closed** source registry.
3. `content/map/site-seeds.ts` — every place id and its certainty.
4. `content/entities/person-seeds.ts` — every person id.
5. `content/entities/group-seeds.ts` — every people, polity, alliance, tribe, region id.
6. `content/manifest.ts` — theme ids, difficult-question ids, before-stage ids.

## The four rules that override everything else

**1. Never invent a citation.** `sourceId` must already exist in `content/sources.ts`.
If no source in the registry supports a claim, either drop the claim, or state it as
what the biblical text says and label it `biblical-account`. Do not add entries to
`sources.ts`. `scripts/validate-content.mjs` fails the build on an unknown `sourceId`.

**2. Never invent a coordinate, a date, an age, or a motive.** If `site-seeds.ts`
marks a place `unknown`, write as though it has no location, because it has none.
Where a person's motive is not stated, do not supply one. Absolute dates appear only
in `HistoricalAnchor` records, which must name the chronology they assume.

**3. Military victory is not occupation. Allotment is not control.** The book itself
distinguishes beating a king in the field, burning a city, being assigned land, and
living on it. Keep those four distinct in every sentence. When the text admits a
failure to possess, say so in the same breath as the victory.

**4. Say "we do not know" in plain words.** Uncertainty is content, not a disclaimer.
Put it in the sentence where the claim is made, not in a footnote.

## Voice

A well-edited study Bible: calm, specific, unhurried, respectful of the reader's
intelligence. Christian orientation, with Reformed readings **labelled as Reformed**
and never presented as the only Christian option. No devotional filler. No repeated
formulas across chapters — if a sentence would work equally well in any chapter, cut
it. No em dashes. Explain terms on first use.

Never imply that ancient Israel's campaigns authorise anyone's violence now. Where the
text's violence is the subject, the ethical note belongs in the text, not in a hedge.

## Markdown in `body` fields

Paragraphs separated by blank lines. `**bold**`, `*italic*`. Link entities with
`[[entity:jericho]]`, which renders as a clickable dossier link. Use entity links
generously but only for ids that exist. No headings, lists, images or HTML.

## Chapter files

One file per group, e.g. `content/chapters/ch01-05.ts`:

```ts
import type { Chapter, Milestone } from "../types";
export const CHAPTERS: Chapter[] = [ ... ];
export const MILESTONES: Milestone[] = [ ... ];
```

- `id` is `ch1` … `ch24`. `phase` comes from `NARRATIVE_PHASES`.
- `sections` must contain all seven `SectionKind`s in `SECTION_ORDER` order, with the
  titles from `SECTION_ORDER`. Section `id` is `ch<N>-<kind>`.
- `collapsedByDefault: true` on `surrounding-world`, `details-worth-noticing` and
  `difficult-questions`; the first four stay open.
- **400 to 700 words across the four sections that are open by default**, plus up to
  600 more in the three collapsed sections. The open sections are the curated
  explanation; the collapsed ones are deeper material, not somewhere to put padding.
  `at-a-glance` is 40 to 70 words; `walk-through` is the longest at 140 to 220.
- Set `wordCount` to your estimate of the **open** sections, which is what the field
  means in `types.ts`. Do not agonise over it: `content/chapters/index.ts` recounts it
  at load time, so the interface always shows a true number.
- `discussionQuestions`: 3 to 5, specific to this chapter's text and geography. A
  question that could be asked of any chapter is a failed question.
- `themeIds` from `THEME_IDS`, typically 2 to 4. `relatedEntityIds` from the seeds.

## Milestones

- `id` is `ch<N>-<slug>`, e.g. `ch6-jericho-falls`. 2 to 5 per chapter; allotment
  chapters may have more.
- `narrative`: 90 to 220 words, the beat itself.
- `sequenceType`: `event` only for a located episode in sequence. Use `summary` for
  compressed reports, `allotment` for territorial assignments, `retrospective` when
  the text looks back. Getting this wrong makes the map lie.
- `mapFeatureIds`: `site-<id>` for places from the seed register, plus ids from
  `content/map/features.ts` once it exists. Only reference features you know exist;
  if unsure, reference the site features, which always exist for located sites.
- `mapCaption`: one sentence under the map, present tense, concrete.
- `whatChanged`: what is different on the map now, in one or two sentences. If nothing
  changed geographically, say that.
- `geographyExplanation`: why this terrain matters. Elevation, routes, water, distance,
  what the ground makes easy or hard. This is the section that stops the map being
  decoration; make it earn its place.
- `viewport`: center `[lon, lat]`, zoom 7 to 12. Use `bounds` for wide views. `inset`
  only for `"jericho-procession"` or `"ebal-gerizim"`.

## Evidence labels

Apply all that fit; they coexist. A section describing Hazor's size can carry both
`biblical-account` and `externally-attested`; a section on what the fall of Jericho
means carries `theological-interpretation` as well. Do not use
`externally-attested` for a narrated event merely because the place is identified.

## Scripture references

Format as `"Joshua 6:1-5"`, `"Deuteronomy 7:1-6"`, `"Hebrews 11:30"`. Chapters
available offline are listed in `public/scripture/web/`; prefer references to those.
Quote sparingly and never more than a verse or two inline.
