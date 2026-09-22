"use client";

/**
 * The map canvas.
 *
 * Everything essential is bundled: the basemap outlines are local GeoJSON, the
 * icons and hatch patterns are painted onto canvases at runtime, and the place
 * names are DOM elements rather than glyph ranges from a server. So the failure
 * of any external request degrades the map's appearance and never its content.
 *
 * Shaded relief is the only outward request, it is off unless the reader turns
 * it on, and if it fails the hillshade is removed and the reader is told rather
 * than being left with a half drawn map and no explanation.
 */

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import type {
  GeoJSONSource,
  Map as MlMap,
  MapMouseEvent,
  StyleImageInterface,
} from "maplibre-gl";
import type { Geometry } from "geojson";
import type { MapFeature, MapViewport, SequenceType } from "@/content/types";
import { usePreferences } from "@/lib/state/preferences";
import {
  BASE_ATTRIBUTION,
  DEFAULT_CENTER,
  DEFAULT_ZOOM,
  STUDY_BOUNDS,
  TERRAIN_ATTRIBUTION,
  TERRAIN_TILES,
  buildBaseStyle,
  checkBundledGeography,
} from "@/lib/map/basemap";
import { registerMapImages } from "@/lib/map/icons";
import {
  FEATURES_SOURCE,
  FEATURE_LAYER_SPECS,
  INTERACTIVE_LAYER_IDS,
  ROUTES_SOURCE,
  emptyCollection,
  partialGeometry,
  toGeoJson,
} from "@/lib/map/feature-layers";
import { MapLabels } from "./MapLabels";
import { MapControls } from "./MapControls";
import { MapLegend } from "./MapLegend";

export interface AtlasMapProps {
  /** Features to draw. Already filtered by milestone and by layer toggles. */
  features: MapFeature[];
  viewport: MapViewport;
  /**
   * Only a narrated event may animate movement. A summary, a territorial
   * description or a retrospective draws its routes at once, because animating
   * them would imply a journey the text does not describe.
   */
  sequenceType: SequenceType;
  /** Changes when the reader moves to a different beat, restarting the draw. */
  animationKey: string;
  selectedId?: string | null;
  onSelect: (entityId: string | null) => void;
  wide?: boolean;
  className?: string;
  /** Feature ids that are on the map for orientation, not because this beat names them. */
  contextIds?: Set<string>;
}

type Status = {
  /** The bundled outlines could not be loaded; the map still draws features. */
  geographyMissing: string[];
  /** Relief was requested and the tiles did not come. */
  reliefFailed: boolean;
};

const MOTION_QUERY = "(prefers-reduced-motion: reduce)";

export function AtlasMap({
  features,
  viewport,
  sequenceType,
  animationKey,
  selectedId,
  onSelect,
  wide = false,
  className,
  contextIds,
}: AtlasMapProps) {
  const prefs = usePreferences();
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<MlMap | null>(null);
  /*
   * The loaded instance, held in state rather than signalled by a `ready` boolean.
   *
   * `MapLabels` is rendered from this, and render must not depend on a ref: React does
   * not track `mapRef.current`, so assigning it cannot schedule the render that would
   * show the labels. It worked only because a separate `ready` flag was flipped in the
   * same breath, which made the correctness of every place name on the map rest on two
   * values being kept in step by hand. One source of truth instead, and the effects
   * below get an honest dependency: they re-run when the map they act on changes.
   */
  const [liveMap, setLiveMap] = useState<MlMap | null>(null);
  const [status, setStatus] = useState<Status>({
    geographyMissing: [],
    reliefFailed: false,
  });
  const [legendOpen, setLegendOpen] = useState(false);
  const [fullscreen, setFullscreen] = useState(false);
  /** Bumped on every camera move so the DOM labels reposition. */
  const [cameraTick, setCameraTick] = useState(0);

  const reduceMotion =
    prefs.motion === "reduced" ||
    (typeof window !== "undefined" && window.matchMedia(MOTION_QUERY).matches);

  /* Routes live in their own source so the draw animation can replace geometry. */
  const { routeFeatures, staticFeatures } = useMemo(() => {
    const routeFeatures = features.filter((f) => f.kind === "route");
    const staticFeatures = features.filter((f) => f.kind !== "route");
    return { routeFeatures, staticFeatures };
  }, [features]);

  /* ---------------------------------------------------------------- */
  /* Create the map once                                              */
  /* ---------------------------------------------------------------- */

  useEffect(() => {
    let cancelled = false;
    let map: MlMap | null = null;

    (async () => {
      const el = containerRef.current;
      if (!el) return;

      /* Imported here rather than at module scope: MapLibre needs a window. */
      const maplibregl = (await import("maplibre-gl")).default;
      if (cancelled) return;

      const check = await checkBundledGeography();
      if (cancelled) return;
      if (!check.ok) {
        setStatus((s) => ({ ...s, geographyMissing: check.missing }));
      }

      map = new maplibregl.Map({
        container: el,
        style: buildBaseStyle({ wide }),
        center: viewport.center ?? DEFAULT_CENTER,
        zoom: viewport.zoom ?? DEFAULT_ZOOM,
        /*
         * Fenced to the region with room to spare. A study of Joshua has no use
         * for the Pacific, and letting the camera wander there mostly produces
         * readers who cannot find their way back.
         */
        maxBounds: wide
          ? [
              [14, 14],
              [60, 48],
            ]
          : [
              [28.5, 26.5],
              [41.5, 37.5],
            ],
        minZoom: wide ? 3.2 : 5.5,
        maxZoom: 13,
        attributionControl: false,
        /* The terrain is the interesting part; tilt and rotation are noise here. */
        pitchWithRotate: false,
        dragRotate: false,
        touchZoomRotate: true,
        renderWorldCopies: false,
        fadeDuration: reduceMotion ? 0 : 200,
      });

      mapRef.current = map;

      /*
       * Hang the instance on the container for end-to-end tests.
       *
       * Everything this map asserts lives in WebGL: which polygons painted, which
       * pattern a fill resolved to, where the camera ended up. None of it reaches the
       * DOM, so a screenshot is the only other evidence available, and a screenshot
       * cannot tell an allotment hatch that failed to register from a region tint that
       * is meant to be flat. Both of those have already shipped as bugs here. With the
       * handle, a test can call `queryRenderedFeatures` and check the real answer.
       */
      (containerRef.current as unknown as { __atlasMap?: MlMap }).__atlasMap = map;

      map.addControl(
        new maplibregl.AttributionControl({
          compact: true,
          customAttribution: BASE_ATTRIBUTION,
        }),
        "bottom-right"
      );
      map.addControl(
        new maplibregl.NavigationControl({ showCompass: false, visualizePitch: false }),
        "bottom-right"
      );

      /* The canvas is focusable and pans with the arrow keys by default. */
      map.getCanvas().setAttribute("tabindex", "0");
      map.getCanvas().setAttribute(
        "aria-label",
        "Study map. Use the arrow keys to pan and plus or minus to zoom. Every place drawn here is also listed in the text beside the map."
      );

      map.on("load", () => {
        if (cancelled || !map) return;
        registerMapImages(map as unknown as Parameters<typeof registerMapImages>[0]);

        map.addSource(FEATURES_SOURCE, { type: "geojson", data: emptyCollection() });
        map.addSource(ROUTES_SOURCE, { type: "geojson", data: emptyCollection() });
        for (const spec of FEATURE_LAYER_SPECS) map.addLayer(spec);

        setLiveMap(map);
      });

      /*
       * A missing image would otherwise log once per frame. It also tells us a
       * pattern failed to register, so it is worth repairing rather than muting.
       */
      map.on("styleimagemissing", (e: { id: string }) => {
        if (!map) return;
        registerMapImages(map as unknown as Parameters<typeof registerMapImages>[0]);
        if (!map.hasImage(e.id)) {
          const blank: StyleImageInterface = {
            width: 1,
            height: 1,
            data: new Uint8Array(4),
          };
          map.addImage(e.id, blank);
        }
      });

      const bump = () => setCameraTick((n) => n + 1);
      map.on("move", bump);
      map.on("zoom", bump);
      map.on("resize", bump);

      map.on("click", (e: MapMouseEvent) => {
        if (!map) return;
        const layers = INTERACTIVE_LAYER_IDS.filter((id) => map!.getLayer(id));
        const hits = map.queryRenderedFeatures(e.point, { layers });
        if (!hits.length) {
          onSelect(null);
          return;
        }
        const props = hits[0].properties as { entityId?: string; id?: string };
        onSelect(props.entityId ?? props.id ?? null);
      });

      map.on("mousemove", (e: MapMouseEvent) => {
        if (!map) return;
        const layers = INTERACTIVE_LAYER_IDS.filter((id) => map!.getLayer(id));
        const hits = map.queryRenderedFeatures(e.point, { layers });
        map.getCanvas().style.cursor = hits.length ? "pointer" : "";
      });
    })();

    return () => {
      cancelled = true;
      map?.remove();
      mapRef.current = null;
      setLiveMap(null);
    };
    /*
     * Created once. Viewport, features and motion changes are applied by the
     * effects below; rebuilding the map on any of them would throw away the
     * reader's position every time they changed a layer.
     */
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [wide]);

  /* ---------------------------------------------------------------- */
  /* Feature data                                                     */
  /* ---------------------------------------------------------------- */

  useEffect(() => {
    const map = liveMap;
    if (!map) return;
    const source = map.getSource(FEATURES_SOURCE) as GeoJSONSource | undefined;
    source?.setData(toGeoJson(staticFeatures, { selectedId, contextIds }));
  }, [liveMap, staticFeatures, selectedId, contextIds]);

  /* ---------------------------------------------------------------- */
  /* Routes, drawn progressively for narrated events                  */
  /* ---------------------------------------------------------------- */

  useEffect(() => {
    const map = liveMap;
    if (!map) return;

    const source = map.getSource(ROUTES_SOURCE) as GeoJSONSource | undefined;
    if (!source) return;

    const full = toGeoJson(routeFeatures, { selectedId });

    /*
     * Movement is animated only for a narrated event, and only when motion is
     * allowed. Otherwise the route appears complete immediately: the drawing is
     * a way of showing direction, never a claim that the beat is a journey.
     */
    const shouldAnimate =
      !reduceMotion && sequenceType === "event" && routeFeatures.length > 0;

    if (!shouldAnimate) {
      source.setData(full);
      return;
    }

    const originals: Geometry[] = routeFeatures.map((f) => f.geometry);
    let frame = 0;
    const start = performance.now();
    const DURATION = 900;

    const step = (now: number) => {
      const t = Math.min(1, (now - start) / DURATION);
      /* Ease out, so the line settles rather than stopping dead. */
      const eased = 1 - Math.pow(1 - t, 3);
      source.setData({
        ...full,
        features: full.features.map((f, i) => ({
          ...f,
          geometry: partialGeometry(originals[i], eased),
        })),
      });
      if (t < 1) frame = requestAnimationFrame(step);
    };
    frame = requestAnimationFrame(step);

    return () => cancelAnimationFrame(frame);
  }, [liveMap, routeFeatures, selectedId, sequenceType, reduceMotion, animationKey]);

  /* ---------------------------------------------------------------- */
  /* Viewport                                                         */
  /* ---------------------------------------------------------------- */

  useEffect(() => {
    const map = liveMap;
    if (!map) return;

    const opts = { duration: reduceMotion ? 0 : 700, essential: true } as const;
    if (viewport.bounds) {
      map.fitBounds(viewport.bounds, { padding: 64, ...opts });
    } else {
      map.easeTo({ center: viewport.center, zoom: viewport.zoom, ...opts });
    }
  }, [liveMap, viewport, reduceMotion]);

  /* ---------------------------------------------------------------- */
  /* Optional shaded relief                                           */
  /* ---------------------------------------------------------------- */

  const wantRelief = prefs.map.basemap === "external-terrain";

  useEffect(() => {
    const map = liveMap;
    if (!map) return;

    const SOURCE = "terrain-dem";
    const LAYER = "hillshade";

    const teardown = () => {
      if (map.getLayer(LAYER)) map.removeLayer(LAYER);
      if (map.getSource(SOURCE)) map.removeSource(SOURCE);
    };

    if (!wantRelief) {
      teardown();
      /*
       * Not derivable, so not a lint violation to route around: whether tiles failed is
       * something that happened to a remote server, not a function of any prop. Turning
       * relief off clears the record along with the layer, so the notice does not outlive
       * the thing it was explaining.
       */
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setStatus((s) => (s.reliefFailed ? { ...s, reliefFailed: false } : s));
      return;
    }

    if (!map.getSource(SOURCE)) {
      map.addSource(SOURCE, {
        type: "raster-dem",
        tiles: [TERRAIN_TILES],
        /* The AWS set is terrarium encoded, not Mapbox's RGB scheme. */
        encoding: "terrarium",
        tileSize: 256,
        maxzoom: 12,
        attribution: TERRAIN_ATTRIBUTION,
      });
    }

    if (!map.getLayer(LAYER)) {
      map.addLayer(
        {
          id: LAYER,
          type: "hillshade",
          source: SOURCE,
          paint: {
            "hillshade-exaggeration": 0.42,
            "hillshade-shadow-color": "#9c8f74",
            "hillshade-highlight-color": "#fbf7ee",
            "hillshade-accent-color": "#b9a988",
          },
        },
        /* Under everything the study itself draws, over the land fill. */
        map.getLayer("lakes") ? "lakes" : undefined
      );
    }

    /*
     * Tile failures surface as style errors naming the source. Two strikes and
     * the relief is removed: a single timeout on one tile is not worth tearing
     * down a working hillshade, but a source that is not reachable is.
     */
    let failures = 0;
    const onError = (e: { error?: Error; sourceId?: string }) => {
      if (e.sourceId !== SOURCE) return;
      failures += 1;
      if (failures < 2) return;
      teardown();
      setStatus((s) => ({ ...s, reliefFailed: true }));
    };
    map.on("error", onError);

    return () => {
      map.off("error", onError);
    };
  }, [liveMap, wantRelief]);

  /* ---------------------------------------------------------------- */
  /* Layer visibility from preferences                                */
  /* ---------------------------------------------------------------- */

  useEffect(() => {
    const map = liveMap;
    if (!map) return;
    /*
     * Visibility is filtered at the data level in `features`, so layers stay on
     * here. The one thing preferences switch off directly is the label overlay,
     * which is DOM rather than a map layer.
     */
    map.triggerRepaint();
  }, [liveMap, prefs.layers]);

  /* ---------------------------------------------------------------- */
  /* Controls                                                         */
  /* ---------------------------------------------------------------- */

  const resetView = useCallback(() => {
    const map = mapRef.current;
    if (!map) return;
    map.fitBounds(STUDY_BOUNDS, {
      padding: 48,
      duration: reduceMotion ? 0 : 600,
    });
  }, [reduceMotion]);

  const toggleFullscreen = useCallback(async () => {
    const el = containerRef.current?.parentElement;
    if (!el) return;
    try {
      if (document.fullscreenElement) {
        await document.exitFullscreen();
      } else {
        await el.requestFullscreen();
      }
    } catch {
      /* Denied or unsupported. The button reports the real state below. */
    }
  }, []);

  useEffect(() => {
    const onChange = () => {
      setFullscreen(Boolean(document.fullscreenElement));
      /* The canvas must be told its box changed or it renders at the old size. */
      requestAnimationFrame(() => mapRef.current?.resize());
    };
    document.addEventListener("fullscreenchange", onChange);
    return () => document.removeEventListener("fullscreenchange", onChange);
  }, []);

  const fullscreenSupported =
    typeof document !== "undefined" && Boolean(document.documentElement.requestFullscreen);

  return (
    <div className={`relative isolate h-full w-full overflow-hidden ${className ?? ""}`}>
      {/*
        Sized with `h-full w-full` rather than `absolute inset-0`.

        MapLibre writes `position: relative` onto whatever element it is handed, via
        `.maplibregl-map` in its own stylesheet. That selector and Tailwind's
        `absolute` carry identical specificity, so the later stylesheet wins, and it
        is MapLibre's. The container therefore lost `absolute`, `inset-0` stopped
        applying, the box collapsed to zero height, and `overflow: hidden` clipped the
        canvas out of sight: the map was rendering land, water and every marker into a
        buffer no reader could see. Staying in normal flow with a percentage height is
        what MapLibre expects of a container and does not depend on stylesheet order.
        Every sibling below is absolutely positioned, so nothing is displaced.
      */}
      <div ref={containerRef} className="h-full w-full bg-[#E8DFC9]" />

      {liveMap && prefs.map.showLabels && (
        <MapLabels
          map={liveMap}
          features={features}
          selectedId={selectedId}
          tick={cameraTick}
        />
      )}

      <MapControls
        onReset={resetView}
        onToggleLegend={() => setLegendOpen((v) => !v)}
        legendOpen={legendOpen}
        onToggleFullscreen={toggleFullscreen}
        fullscreen={fullscreen}
        fullscreenSupported={fullscreenSupported}
      />

      {/*
        The legend needs an absolutely positioned host of its own.

        Rendered as a bare sibling it stayed in normal flow, and since the element above
        it already claims `h-full`, it began exactly at the wrapper's bottom edge and was
        cut off by `overflow-hidden`. The button toggled its pressed state and nothing
        appeared: a dead control, and for a map whose whole argument rests on
        distinguishing hatch from cross hatch, the worst possible one to lose.

        Bounded to the map rather than the viewport, because `max-h-[70vh]` was taller
        than the map panel itself on a laptop.
      */}
      {legendOpen && (
        <div
          data-map-reserve
          className="absolute top-14 right-3 bottom-3 z-30 flex max-w-[calc(100%-1.5rem)] items-start justify-end no-print"
        >
          <MapLegend
            features={features}
            onClose={() => setLegendOpen(false)}
            reliefFailed={status.reliefFailed}
          />
        </div>
      )}

      {/*
        Honest failure reporting. Both notices say what is lost and what is not,
        because a reader who sees a plainer map needs to know whether they are
        missing study content or only scenery.
      */}
      {(status.geographyMissing.length > 0 || status.reliefFailed) && (
        <div className="pointer-events-none absolute inset-x-3 bottom-12 z-20 flex justify-center">
          <p className="pointer-events-auto max-w-md rounded border border-rule bg-ivory/95 px-3 py-2 text-xs leading-relaxed text-ink-soft shadow-float">
            {status.geographyMissing.length > 0 && (
              <span>
                The bundled coastline and river outlines did not load, so the map is
                drawing places and routes over a plain background. Every milestone,
                caption and dossier is unaffected.{" "}
              </span>
            )}
            {status.reliefFailed && (
              <span>
                Shaded relief is unavailable, so the terrain is drawn flat. Relief is
                scenery only: nothing in the study depends on it.
              </span>
            )}
          </p>
        </div>
      )}
    </div>
  );
}
