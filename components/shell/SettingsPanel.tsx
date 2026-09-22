"use client";

/**
 * Reading and display settings.
 *
 * Every control here changes something the reader can see immediately, and every one
 * persists. There is no save button because there is nothing to save: the store
 * writes through, debounced.
 *
 * Two of these are more than preferences. Spoiler mode decides whether the study
 * tells you how things turn out, which changes how a chapter reads, so it sits at
 * the top with an explanation rather than buried as a toggle. The translation choice
 * names what is bundled and what is fetched, because a reader who loses their
 * connection should already know which of the two they were reading.
 */

import Link from "next/link";
import type { Preferences } from "@/content/types";
import { useStudy } from "@/lib/state/preferences";

const FONT_SCALES: { value: Preferences["reading"]["fontScale"]; label: string }[] = [
  { value: 0.9, label: "Small" },
  { value: 1, label: "Default" },
  { value: 1.15, label: "Large" },
  { value: 1.3, label: "Larger" },
];

const LINE_HEIGHTS: { value: Preferences["reading"]["lineHeight"]; label: string }[] = [
  { value: "snug", label: "Snug" },
  { value: "normal", label: "Normal" },
  { value: "relaxed", label: "Relaxed" },
];

export function SettingsPanel({ onClose }: { onClose: () => void }) {
  const store = useStudy();
  const prefs = store.preferences;
  const set = store.setPreferences;

  return (
    <div className="quiet-scroll max-h-[min(70vh,34rem)] overflow-y-auto">
      <div className="rule-b px-4 py-3">
        <h2 className="font-serif text-[15px] font-semibold text-charcoal">Settings</h2>
      </div>

      <Field
        title="Spoiler mode"
        note={
          prefs.spoilerMode
            ? "Material about what happens after Joshua stays hidden until you ask for it."
            : "Later biblical outcomes are shown inline throughout the study."
        }
      >
        <Switch
          checked={prefs.spoilerMode}
          onChange={(v) => set((p) => ({ ...p, spoilerMode: v }))}
          label="Hide what comes later"
        />
      </Field>

      <Field
        title="Translation"
        note="The World English Bible is public domain and bundled with the study, so it works with no connection. The English Standard Version is fetched on request and needs a configured key; without one, passages fall back to the bundled text and say so."
      >
        <Choice
          options={[
            { value: "web", label: "World English Bible" },
            { value: "esv", label: "English Standard Version" },
          ]}
          value={prefs.scripture.preferred}
          onChange={(v) =>
            set((p) => ({
              ...p,
              scripture: { preferred: v as "esv" | "web" },
            }))
          }
        />
      </Field>

      <Field title="Text size">
        <Choice
          options={FONT_SCALES.map((f) => ({ value: String(f.value), label: f.label }))}
          value={String(prefs.reading.fontScale)}
          onChange={(v) =>
            set((p) => ({
              ...p,
              reading: {
                ...p.reading,
                fontScale: Number(v) as Preferences["reading"]["fontScale"],
              },
            }))
          }
        />
      </Field>

      <Field title="Line spacing">
        <Choice
          options={LINE_HEIGHTS.map((l) => ({ value: l.value, label: l.label }))}
          value={prefs.reading.lineHeight}
          onChange={(v) =>
            set((p) => ({
              ...p,
              reading: {
                ...p.reading,
                lineHeight: v as Preferences["reading"]["lineHeight"],
              },
            }))
          }
        />
      </Field>

      <Field
        title="Evidence labels"
        note="The small tags that say whether a passage is reporting the biblical account, external attestation, a reconstruction, a disputed reading, or theological interpretation."
      >
        <Switch
          checked={prefs.reading.showEvidenceLabels}
          onChange={(v) =>
            set((p) => ({ ...p, reading: { ...p.reading, showEvidenceLabels: v } }))
          }
          label="Show evidence labels"
        />
      </Field>

      <Field
        title="Sections"
        note="Deeper background is collapsed by default. Turn this on to open everything, which is also what you want before printing."
      >
        <Switch
          checked={prefs.reading.expandAllSections}
          onChange={(v) =>
            set((p) => ({ ...p, reading: { ...p.reading, expandAllSections: v } }))
          }
          label="Open every section"
        />
      </Field>

      <Field
        title="Map"
        note="Shaded relief is fetched from an external tile service. It is scenery: if it fails, the map says so and every place, route and caption still works."
      >
        <Switch
          checked={prefs.map.showLabels}
          onChange={(v) => set((p) => ({ ...p, map: { ...p.map, showLabels: v } }))}
          label="Place names on the map"
        />
        <Switch
          checked={prefs.map.basemap === "external-terrain"}
          onChange={(v) =>
            set((p) => ({
              ...p,
              map: { ...p.map, basemap: v ? "external-terrain" : "bundled" },
            }))
          }
          label="Shaded relief"
        />
      </Field>

      <Field
        title="Motion"
        note="Routes draw onto the map as you move between beats. Reduced motion shows them complete instead. Your system setting is respected on its own; this forces it."
      >
        <Switch
          checked={prefs.motion === "reduced"}
          onChange={(v) => set((p) => ({ ...p, motion: v ? "reduced" : "auto" }))}
          label="Reduce motion"
        />
      </Field>

      <div className="rule-t px-4 py-3">
        {store.storageBlocked && (
          <p className="mb-2 text-[11.5px] leading-relaxed text-terracotta">
            Your notes and progress are not being saved. This browser is blocking
            local storage, which private browsing windows often do.
          </p>
        )}
        <Link
          href="/notebook"
          onClick={onClose}
          className="text-[12.5px] font-medium text-forest hover:underline"
        >
          Notes, bookmarks, export and import
        </Link>
      </div>
    </div>
  );
}

function Field({
  title,
  note,
  children,
}: {
  title: string;
  note?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="rule-b px-4 py-3 last:border-b-0">
      <h3 className="label-caps mb-1.5 text-ink-soft">{title}</h3>
      <div className="space-y-1.5">{children}</div>
      {note && (
        <p className="mt-2 text-[11px] leading-relaxed text-ink-faint">{note}</p>
      )}
    </section>
  );
}

function Switch({
  checked,
  onChange,
  label,
}: {
  checked: boolean;
  onChange: (v: boolean) => void;
  label: string;
}) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      onClick={() => onChange(!checked)}
      className="flex w-full items-center justify-between gap-3 py-0.5 text-left"
    >
      <span className="text-[12.5px] text-charcoal">{label}</span>
      <span
        className={`relative h-[18px] w-8 shrink-0 rounded-full transition-colors ${
          checked ? "bg-forest" : "bg-rule-strong"
        }`}
      >
        <span
          className={`absolute top-[2px] size-[14px] rounded-full bg-ivory transition-[left] ${
            checked ? "left-[16px]" : "left-[2px]"
          }`}
        />
      </span>
    </button>
  );
}

function Choice({
  options,
  value,
  onChange,
}: {
  options: { value: string; label: string }[];
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div className="flex flex-wrap gap-1">
      {options.map((o) => {
        const active = o.value === value;
        return (
          <button
            key={o.value}
            type="button"
            aria-pressed={active}
            onClick={() => onChange(o.value)}
            className={`rounded border px-2 py-1 text-[11.5px] transition-colors ${
              active
                ? "border-forest bg-forest-wash font-medium text-forest"
                : "border-rule text-ink-soft hover:border-rule-strong hover:text-charcoal"
            }`}
          >
            {o.label}
          </button>
        );
      })}
    </div>
  );
}
