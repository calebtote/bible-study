"use client";

/**
 * The controls in the map's corner: layers, legend, reset view, full screen.
 *
 * Modern interface over an ancient looking map, so these are plain labelled
 * buttons with real text rather than mystery glyphs. Nothing here is decorative
 * and nothing is disabled without saying why.
 */

import { useEffect, useRef, useState } from "react";
import type { LayerId } from "@/content/types";
import { LAYERS } from "@/content/types";
import { useStudy } from "@/lib/state/preferences";

function CornerButton({
  children,
  onClick,
  pressed,
  title,
  disabled,
}: {
  children: React.ReactNode;
  onClick: () => void;
  pressed?: boolean;
  title: string;
  disabled?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      title={title}
      aria-pressed={pressed}
      disabled={disabled}
      className={[
        "rounded border px-2.5 py-1.5 text-[11px] font-medium transition-colors",
        "disabled:cursor-not-allowed disabled:opacity-45",
        pressed
          ? "border-forest bg-forest text-ivory"
          : "border-rule bg-ivory/95 text-charcoal hover:border-rule-strong hover:bg-ivory-deep",
      ].join(" ")}
    >
      {children}
    </button>
  );
}

export function MapControls({
  onReset,
  onToggleLegend,
  legendOpen,
  onToggleFullscreen,
  fullscreen,
  fullscreenSupported,
}: {
  onReset: () => void;
  onToggleLegend: () => void;
  legendOpen: boolean;
  onToggleFullscreen: () => void;
  fullscreen: boolean;
  fullscreenSupported: boolean;
}) {
  const [layersOpen, setLayersOpen] = useState(false);
  const { preferences, setPreferences } = useStudy();
  const panel = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!layersOpen) return;
    const onDown = (e: MouseEvent) => {
      if (!panel.current?.contains(e.target as Node)) setLayersOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLayersOpen(false);
    };
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [layersOpen]);

  return (
    /*
     * `data-map-reserve` tells MapLabels to keep place names out from under this
     * cluster. Labels are DOM elements with no knowledge of the chrome drawn over the
     * same canvas, so without it a long name like "Lebanon and the northern valley:
     * not taken" renders straight beneath these buttons and is simply unreadable.
     */
    <div
      data-map-reserve
      className="absolute top-3 right-3 left-3 z-30 flex flex-col items-end gap-2 pointer-events-none no-print"
    >
      <div className="pointer-events-auto flex flex-wrap justify-end gap-1.5">
        <CornerButton
          onClick={() => setPreferences((p) => ({
            ...p,
            map: { ...p.map, basemap: p.map.basemap === "external-terrain" ? "bundled" : "external-terrain" },
          }))}
          pressed={preferences.map.basemap === "external-terrain"}
          title="Show or hide shaded terrain relief"
        >
          Relief
        </CornerButton>
        <CornerButton
          onClick={() => setLayersOpen((v) => !v)}
          pressed={layersOpen}
          title="Choose which layers the map draws"
        >
          Layers
        </CornerButton>
        <CornerButton
          onClick={onToggleLegend}
          pressed={legendOpen}
          title="What the marks, textures and line patterns mean"
        >
          Legend
        </CornerButton>
        <CornerButton onClick={onReset} title="Return to the whole study area">
          Reset view
        </CornerButton>
        <CornerButton
          onClick={onToggleFullscreen}
          pressed={fullscreen}
          disabled={!fullscreenSupported}
          title={
            fullscreenSupported
              ? fullscreen
                ? "Leave full screen"
                : "Fill the window with the map"
              : "This browser does not allow full screen here"
          }
        >
          {fullscreen ? "Exit full screen" : "Full screen"}
        </CornerButton>
      </div>

      {layersOpen && <div className="pointer-events-auto max-w-full"><LayerPanel ref={panel} onClose={() => setLayersOpen(false)} /></div>}
    </div>
  );
}

function LayerPanel({
  ref,
  onClose,
}: {
  ref: React.Ref<HTMLDivElement>;
  onClose: () => void;
}) {
  const { preferences, toggleLayer, setLayers } = useStudy();
  const ids = Object.keys(LAYERS) as LayerId[];

  return (
    <div
      ref={ref}
      className="animate-fade-rise w-80 max-w-full rounded border border-rule bg-ivory shadow-float"
      role="group"
      aria-label="Map layers"
    >
      <div className="flex items-baseline justify-between rule-b px-3.5 py-2.5">
        <span className="label-caps">Layers</span>
        <button
          type="button"
          onClick={onClose}
          className="text-[11px] text-ink-faint hover:text-charcoal"
        >
          Close
        </button>
      </div>

      <ul className="max-h-[52vh] overflow-y-auto quiet-scroll px-1.5 py-1.5">
        {ids.map((id) => {
          const on = preferences.layers[id];
          return (
            <li key={id}>
              <label className="flex cursor-pointer gap-2.5 rounded px-2 py-2 hover:bg-ivory-deep">
                <input
                  type="checkbox"
                  checked={on}
                  onChange={() => toggleLayer(id)}
                  className="mt-0.5 h-3.5 w-3.5 shrink-0 accent-[#355447]"
                />
                <span className="min-w-0">
                  <span className="block text-[12.5px] font-medium text-charcoal">
                    {LAYERS[id].label}
                  </span>
                  <span className="mt-0.5 block text-[11.5px] leading-snug text-ink-soft">
                    {LAYERS[id].description}
                  </span>
                </span>
              </label>
            </li>
          );
        })}
      </ul>

      <div className="flex gap-3 rule-t px-3.5 py-2.5 text-[11px]">
        <button
          type="button"
          className="text-forest hover:underline"
          onClick={() =>
            setLayers(
              Object.fromEntries(ids.map((id) => [id, true])) as Record<LayerId, boolean>
            )
          }
        >
          Show all
        </button>
        <button
          type="button"
          className="text-forest hover:underline"
          onClick={() =>
            setLayers(
              Object.fromEntries(
                ids.map((id) => [id, LAYERS[id].defaultOn])
              ) as Record<LayerId, boolean>
            )
          }
        >
          Reset to defaults
        </button>
      </div>
    </div>
  );
}
