/**
 * Choosing what the map shows for a given beat.
 *
 * Three inputs decide it: what the milestone names, what the reader has switched on,
 * and what stays on the map regardless for orientation. Keeping the decision in one
 * function rather than spread through the map component means the rules are
 * inspectable, and two of them are editorial rather than technical.
 *
 * Context features are the large named regions, and they persist across every beat.
 * A reader who has just watched the army move from Gilgal to Ai needs to still see
 * the hill country and the Jordan valley to know what that movement meant. They are
 * marked as context in the returned set so the map can draw them fainter than the
 * things this beat is actually about.
 *
 * Layer toggles subtract, never add. A milestone that names a tribal allotment shows
 * it only while the allotments layer is on. The alternative, letting a milestone
 * force its own layers on, would mean the reader's toggles silently stopped
 * working, and a control that does not control anything is worse than no control.
 */

import type { LayerId, MapFeature, Milestone } from "@/content/types";
import {
  ALL_FEATURES,
  CONTEXT_FEATURE_IDS,
  FEATURE_BY_ID,
  UNDRAWABLE_FEATURE_IDS,
  UNLOCATED_MEMBERS,
} from "@/content/map";

export interface MapSelection {
  features: MapFeature[];
  /** Ids drawn for orientation rather than because this beat names them. */
  contextIds: Set<string>;
  /**
   * Features this milestone names that the map is not drawing, and why. Surfaced
   * beside the map so an absence is stated rather than left as a silent gap.
   */
  omissions: { label: string; reason: string }[];
  /** Layers this beat has content for, whether or not they are currently on. */
  relevantLayers: Set<LayerId>;
}

const contextSet = new Set(CONTEXT_FEATURE_IDS);
const undrawable = new Set(UNDRAWABLE_FEATURE_IDS);

/**
 * Features applicable to a milestone, before layer filtering.
 *
 * A feature declares the milestones it belongs to rather than a milestone listing
 * its features, because a site like Gilgal appears in a dozen beats and maintaining
 * that list from the milestone side would mean editing twelve places to add one.
 * The milestone's own `mapFeatureIds` is honoured too, for the cases where a beat
 * wants a feature the feature itself did not anticipate.
 */
function applicableTo(milestone: Milestone): MapFeature[] {
  const named = new Set(milestone.mapFeatureIds);
  return ALL_FEATURES.filter(
    (f) => named.has(f.id) || f.applicableMilestoneIds.includes(milestone.id)
  );
}

export function selectForMilestone(
  milestone: Milestone,
  layers: Record<LayerId, boolean>
): MapSelection {
  const applicable = applicableTo(milestone);
  const relevantLayers = new Set(applicable.map((f) => f.layer));

  const omissions: { label: string; reason: string }[] = [];

  const drawable = applicable.filter((f) => {
    /*
     * A schematic inset belongs to its own diagram, not to the geographic map.
     * Drawing the Jericho procession at real coordinates would assert seven
     * circuits of a specific radius, which the text does not describe.
     */
    if (f.schematicGroup) return false;

    if (undrawable.has(f.id)) {
      omissions.push({
        label: f.label,
        reason:
          "None of the places in this set can be located, so there is nothing to draw. The places themselves are listed in the text beside the map.",
      });
      return false;
    }

    const missing = UNLOCATED_MEMBERS[f.id];
    if (missing?.length) {
      omissions.push({
        label: f.label,
        reason: `Drawn without ${missing.length} member${
          missing.length === 1 ? "" : "s"
        } whose location is not known: ${missing.join(", ")}. The shape is therefore incomplete, not a full picture of the set.`,
      });
    }

    return true;
  });

  const visible = drawable.filter((f) => layers[f.layer] !== false);

  /* Turned-off layers are reported too, so a blank area has an explanation. */
  for (const layer of relevantLayers) {
    if (layers[layer] === false) {
      const count = drawable.filter((f) => f.layer === layer).length;
      if (count > 0) {
        omissions.push({
          label: `${count} feature${count === 1 ? "" : "s"} hidden`,
          reason: `The ${layer.replace(/-/g, " ")} layer is switched off for this beat.`,
        });
      }
    }
  }

  /* Context regions ride along, but only while their own layer is on. */
  const contextFeatures = CONTEXT_FEATURE_IDS.map((id) => FEATURE_BY_ID[id])
    .filter(Boolean)
    .filter((f) => layers[f.layer] !== false)
    .filter((f) => !visible.some((v) => v.id === f.id));

  const features = [...contextFeatures, ...visible].sort(
    (a, b) => (a.priority ?? 0) - (b.priority ?? 0)
  );

  return {
    features,
    contextIds: new Set(contextFeatures.map((f) => f.id)),
    omissions,
    relevantLayers,
  };
}

/** Features for a fixed id list, used by Before Joshua stages and dossier focus. */
export function selectByIds(
  ids: string[],
  layers?: Record<LayerId, boolean>
): MapFeature[] {
  return ids
    .map((id) => FEATURE_BY_ID[id])
    .filter(Boolean)
    .filter((f) => !f.schematicGroup)
    .filter((f) => !layers || layers[f.layer] !== false)
    .sort((a, b) => (a.priority ?? 0) - (b.priority ?? 0));
}

export const isContextFeature = (id: string) => contextSet.has(id);
