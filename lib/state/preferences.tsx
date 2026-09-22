"use client";

/**
 * The single store for everything the reader owns: preferences, notes,
 * bookmarks and progress. They share one local storage record because they are
 * exported and imported as one document.
 *
 * Hydration matters here. The server has no access to local storage, so the
 * first render must use defaults and the stored values are applied in an effect.
 * `hydrated` is exposed so that anything which would visibly flip (reading size,
 * which map layers are on) can wait one frame rather than flash.
 */

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import type {
  Bookmark,
  LayerId,
  Note,
  Preferences,
  StudyData,
} from "@/content/types";
import {
  DEFAULT_PREFERENCES,
  emptyStudyData,
  loadStudyData,
  mergeStudyData,
  saveStudyData,
} from "./study-data";

interface StudyStore {
  hydrated: boolean;
  /** True when writes are not reaching storage, so the UI can say so. */
  storageBlocked: boolean;
  data: StudyData;
  preferences: Preferences;

  setPreferences: (patch: (p: Preferences) => Preferences) => void;
  toggleLayer: (id: LayerId) => void;
  setLayers: (layers: Record<LayerId, boolean>) => void;

  noteFor: (chapter: number, milestoneId?: string) => Note | undefined;
  saveNote: (chapter: number, body: string, milestoneId?: string) => void;
  deleteNote: (id: string) => void;

  isBookmarked: (kind: Bookmark["kind"], targetId: string) => boolean;
  toggleBookmark: (b: Omit<Bookmark, "id" | "createdAt">) => void;

  markChapterComplete: (chapter: number, complete: boolean) => void;
  recordVisit: (chapter: number, milestoneId: string) => void;

  replaceAll: (data: StudyData) => void;
  mergeIn: (data: StudyData) => void;
  resetAll: () => void;
}

const StudyContext = createContext<StudyStore | null>(null);

const noteId = (chapter: number, milestoneId?: string) =>
  milestoneId ? `note-${milestoneId}` : `note-ch${chapter}`;

export function PreferencesProvider({ children }: { children: React.ReactNode }) {
  const [data, setData] = useState<StudyData>(emptyStudyData);
  const [hydrated, setHydrated] = useState(false);
  const [storageBlocked, setStorageBlocked] = useState(false);

  /*
   * Notes, bookmarks and progress live in `localStorage`, which does not exist on the
   * server, so the first render has to be the empty set and the stored data has to arrive
   * after mount. Reading it during render would make the server and client markup
   * disagree and React would discard the tree. `useSyncExternalStore` is the version of
   * this React would prefer and is worth doing if the persistence layer is ever reworked;
   * it is not worth rebuilding the layer that every note depends on for a lint rule.
   */
  /* eslint-disable react-hooks/set-state-in-effect */
  useEffect(() => {
    setData(loadStudyData());
    setHydrated(true);
  }, []);
  /* eslint-enable react-hooks/set-state-in-effect */

  /*
   * Writes are debounced because the notes field saves as the reader types.
   * The timer is flushed on unmount and on pagehide, so closing the tab
   * mid-sentence does not lose the sentence.
   */
  const pending = useRef<StudyData | null>(null);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const flush = useCallback(() => {
    if (timer.current) {
      clearTimeout(timer.current);
      timer.current = null;
    }
    if (pending.current) {
      const ok = saveStudyData(pending.current);
      setStorageBlocked(!ok);
      pending.current = null;
    }
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    pending.current = data;
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(flush, 400);
    return () => {
      if (timer.current) clearTimeout(timer.current);
    };
  }, [data, hydrated, flush]);

  useEffect(() => {
    const onHide = () => flush();
    window.addEventListener("pagehide", onHide);
    window.addEventListener("beforeunload", onHide);
    return () => {
      window.removeEventListener("pagehide", onHide);
      window.removeEventListener("beforeunload", onHide);
      flush();
    };
  }, [flush]);

  /* Reading preferences and motion drive CSS custom properties on <html>. */
  const prefs = data.preferences;
  useEffect(() => {
    if (!hydrated) return;
    const root = document.documentElement;
    root.style.setProperty("--reading-scale", String(prefs.reading.fontScale));
    root.style.setProperty(
      "--reading-leading",
      prefs.reading.lineHeight === "snug"
        ? "1.45"
        : prefs.reading.lineHeight === "relaxed"
          ? "1.85"
          : "1.65"
    );
    root.dataset.motion = prefs.motion;
  }, [hydrated, prefs.reading.fontScale, prefs.reading.lineHeight, prefs.motion]);

  const store = useMemo<StudyStore>(() => {
    const patchData = (fn: (d: StudyData) => StudyData) => setData((d) => fn(d));

    return {
      hydrated,
      storageBlocked,
      data,
      preferences: data.preferences,

      setPreferences: (patch) =>
        patchData((d) => ({ ...d, preferences: patch(d.preferences) })),

      toggleLayer: (id) =>
        patchData((d) => ({
          ...d,
          preferences: {
            ...d.preferences,
            layers: { ...d.preferences.layers, [id]: !d.preferences.layers[id] },
          },
        })),

      setLayers: (layers) =>
        patchData((d) => ({
          ...d,
          preferences: { ...d.preferences, layers },
        })),

      noteFor: (chapter, milestoneId) =>
        data.notes.find((n) => n.id === noteId(chapter, milestoneId)),

      saveNote: (chapter, body, milestoneId) =>
        patchData((d) => {
          const id = noteId(chapter, milestoneId);
          const now = new Date().toISOString();
          const existing = d.notes.find((n) => n.id === id);
          /* An emptied note is deleted rather than kept as a blank record. */
          if (!body.trim()) {
            return existing ? { ...d, notes: d.notes.filter((n) => n.id !== id) } : d;
          }
          const next: Note = existing
            ? { ...existing, body, updatedAt: now }
            : { id, chapter, milestoneId, body, createdAt: now, updatedAt: now };
          return {
            ...d,
            notes: existing
              ? d.notes.map((n) => (n.id === id ? next : n))
              : [...d.notes, next],
          };
        }),

      deleteNote: (id) =>
        patchData((d) => ({ ...d, notes: d.notes.filter((n) => n.id !== id) })),

      isBookmarked: (kind, targetId) =>
        data.bookmarks.some((b) => b.kind === kind && b.targetId === targetId),

      toggleBookmark: (b) =>
        patchData((d) => {
          const found = d.bookmarks.find(
            (x) => x.kind === b.kind && x.targetId === b.targetId
          );
          if (found) {
            return { ...d, bookmarks: d.bookmarks.filter((x) => x.id !== found.id) };
          }
          return {
            ...d,
            bookmarks: [
              ...d.bookmarks,
              {
                ...b,
                id: `bm-${b.kind}-${b.targetId}`,
                createdAt: new Date().toISOString(),
              },
            ],
          };
        }),

      markChapterComplete: (chapter, complete) =>
        patchData((d) => {
          const set = new Set(d.progress.completedChapters);
          if (complete) set.add(chapter);
          else set.delete(chapter);
          return {
            ...d,
            progress: {
              ...d.progress,
              completedChapters: [...set].sort((a, b) => a - b),
            },
          };
        }),

      recordVisit: (chapter, milestoneId) =>
        patchData((d) => {
          const already =
            d.progress.visitedMilestones.includes(milestoneId) &&
            d.progress.lastChapter === chapter &&
            d.progress.lastMilestoneId === milestoneId;
          if (already) return d;
          const visited = new Set(d.progress.visitedMilestones);
          visited.add(milestoneId);
          return {
            ...d,
            progress: {
              ...d.progress,
              visitedMilestones: [...visited],
              lastChapter: chapter,
              lastMilestoneId: milestoneId,
            },
          };
        }),

      replaceAll: (incoming) => setData(incoming),
      mergeIn: (incoming) => setData((d) => mergeStudyData(d, incoming)),
      resetAll: () => setData(emptyStudyData()),
    };
  }, [data, hydrated, storageBlocked]);

  return <StudyContext.Provider value={store}>{children}</StudyContext.Provider>;
}

export function useStudy(): StudyStore {
  const ctx = useContext(StudyContext);
  if (!ctx) {
    throw new Error("useStudy must be used inside PreferencesProvider");
  }
  return ctx;
}

/**
 * The store if there is one, `null` if not.
 *
 * For components that offer a stored action as a convenience but must still render
 * without it: a spoiler panel can reveal itself locally whether or not it is able
 * to also change the global preference.
 */
export function useStudyOptional(): StudyStore | null {
  return useContext(StudyContext);
}

/** Preferences alone, for components that do not touch notes or progress. */
export function usePreferences(): Preferences {
  const ctx = useContext(StudyContext);
  return ctx?.preferences ?? DEFAULT_PREFERENCES;
}
