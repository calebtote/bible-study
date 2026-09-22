/**
 * Canonical id lists.
 *
 * Content is authored in many files. This file is the single place that decides
 * which theme ids, difficult-question ids and before-stage ids exist, so that a
 * chapter can reference a theme without the two files drifting apart.
 * `scripts/validate-content.mjs` checks every cross-reference against these lists.
 */

export const THEME_IDS = [
  "promise-and-fulfillment",
  "land-and-inheritance",
  "covenant-faithfulness",
  "leadership-and-succession",
  "holiness-and-presence",
  "judgment-and-mercy",
  "outsiders-and-belonging",
  "memory-and-memorials",
  "unity-among-tribes",
  "rest",
  "obedience-and-failure",
] as const;

export type ThemeId = (typeof THEME_IDS)[number];

export const DIFFICULT_QUESTION_IDS = [
  "conquest-violence",
  "destruction-language",
  "achans-punishment",
  "rahabs-deception",
  "gibeonite-oath",
  "the-long-day",
  "incomplete-possession",
] as const;

export type DifficultQuestionId = (typeof DIFFICULT_QUESTION_IDS)[number];

export const BEFORE_STAGE_IDS = [
  "abraham-and-the-promises",
  "isaac-jacob-and-the-land",
  "joseph-and-the-move-to-egypt",
  "oppression-and-exodus",
  "sinai-and-covenant-identity",
  "scouting-canaan-and-the-wilderness-generation",
  "approach-from-the-east",
  "moses-final-instructions",
] as const;

export type BeforeStageId = (typeof BEFORE_STAGE_IDS)[number];

/**
 * Milestone ids are `<chapter-slug>-<event-slug>`, lowercase kebab, and must be
 * globally unique. Examples: `ch1-commission`, `ch6-jericho-falls`,
 * `ch14-caleb-claims-hebron`. The `ch<N>-` prefix is required so that a milestone
 * id read in isolation still says which chapter it belongs to.
 */
export const MILESTONE_ID_PATTERN = /^ch(?:[1-9]|1\d|2[0-4])-[a-z0-9]+(?:-[a-z0-9]+)*$/;

/** Map feature ids generated from the site register. */
export const siteFeatureId = (siteId: string) => `site-${siteId}`;
