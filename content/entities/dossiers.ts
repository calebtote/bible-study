/**
 * Authored additions to entity dossiers.
 *
 * Every site, people group, tribe and region already has curated prose in its
 * seed: a plain-language identification and an account of why the study places it
 * where it does. That is enough for a dossier, and `content/entities/index.ts`
 * builds one from the seed alone for the many places that are a line in a
 * boundary list and nothing more.
 *
 * This file is for the places and peoples that deserve more than that. It adds
 * the four things a seed cannot carry: where the entity has already appeared in
 * the biblical story, what excavation and outside records do and do not show, what
 * remains genuinely unsettled, and where the entity turns up later in Scripture.
 *
 * Three rules for entries here.
 *
 * An entity with no entry is not deficient. Its dossier is shorter because there
 * is less to say, which is the honest outcome. Padding every one of ninety-two
 * places to the same length would bury the ones that matter.
 *
 * `historical` must not let attestation leak. That a mound is securely identified
 * as Jericho says nothing about what happened there, and the prose has to keep
 * those apart rather than letting the reader slide from one to the other.
 *
 * `later` sits behind the spoiler control, so it may look forward freely. Nothing
 * outside it may.
 */

import type { Citation, EntityRelationship, EvidenceLabel } from "../types";

export interface DossierBlock {
  body: string;
  scriptureRefs?: string[];
  citations?: Citation[];
  evidenceLabels?: EvidenceLabel[];
}

export interface DossierExtra {
  /** Site, group or person entity id. Validated against the registers. */
  entityId: string;
  /** Where this entity has already appeared before Joshua opens. */
  earlier?: DossierBlock;
  /**
   * Excavation, inscriptions and outside records. Collapsed by default, because
   * a reader following the story should be able to pass it by.
   */
  historical?: DossierBlock;
  /**
   * What is disputed. Never collapsed: an uncertainty a reader has to open a
   * panel to discover has not really been disclosed.
   */
  uncertainties?: DossierBlock;
  /** Later biblical relevance. Revealed only when spoiler mode is off. */
  later?: DossierBlock;
  /** Structured ties, for entities where the text states them. */
  relationships?: EntityRelationship[];
  /** Entities a reader should be offered next, beyond those derived from co-occurrence. */
  relatedEntityIds?: string[];
}

import { PLACE_DOSSIERS } from "./dossiers-places";
import { GROUP_DOSSIERS } from "./dossiers-groups";

export const DOSSIER_EXTRAS: DossierExtra[] = [
  ...PLACE_DOSSIERS,
  ...GROUP_DOSSIERS,
];

export const DOSSIER_EXTRA_BY_ID: Record<string, DossierExtra> =
  Object.fromEntries(DOSSIER_EXTRAS.map((d) => [d.entityId, d]));
