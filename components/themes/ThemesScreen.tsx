"use client";

/**
 * Themes and difficult questions.
 *
 * These are two different kinds of writing and the page keeps them visibly apart. A
 * theme traces one thread through the book and is allowed to argue a reading. A
 * difficult question is where honest readers get stuck, and it is structured so that
 * the argument cannot be hidden: what the text claims, how the passage works as
 * literature, what the historical questions are, then each major interpretation with
 * its own strengths and difficulties, and last what stays unresolved.
 *
 * That order matters. Putting interpretations before the text's own claims invites a
 * reader to pick a side before knowing what is being explained. Putting the
 * unresolved section last means the page does not close on a resolution it has not
 * earned.
 *
 * Selection lives in the URL so a group leader can send "read this one before
 * Thursday" as a link.
 */

import { useCallback, useEffect, useMemo, useRef } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import type { DifficultQuestion, Theme } from "@/content/types";
import { THEMES, THEME_BY_ID } from "@/content/themes";
import {
  DIFFICULT_QUESTIONS,
  DIFFICULT_QUESTION_BY_ID,
} from "@/content/difficult-questions";
import { ENTITY_BY_ID } from "@/content/entities";
import { Prose } from "@/components/Prose";
import { Citations } from "@/components/ui/Evidence";
import { ScriptureRefs } from "@/components/scripture/ScriptureRefs";
import { BookmarkButton } from "@/components/shell/BookmarksPanel";
import { Aside } from "@/components/shell/PageShell";
import { entityHref, studyHref } from "@/lib/state/study-url";

type Selection =
  | { kind: "theme"; theme: Theme }
  | { kind: "question"; question: DifficultQuestion };

export function ThemesScreen() {
  const router = useRouter();
  const params = useSearchParams();
  const detail = useRef<HTMLDivElement>(null);

  const rawTheme = params.get("theme");
  const rawQuestion = params.get("question");

  const selection = useMemo<Selection | null>(() => {
    const q = rawQuestion ? DIFFICULT_QUESTION_BY_ID[rawQuestion] : undefined;
    if (q) return { kind: "question", question: q };
    const t = rawTheme ? THEME_BY_ID[rawTheme] : undefined;
    if (t) return { kind: "theme", theme: t };
    return null;
  }, [rawTheme, rawQuestion]);

  /* A link that named something missing should say so, not render an empty column. */
  const corrected =
    (Boolean(rawTheme) && !THEME_BY_ID[rawTheme as string]) ||
    (Boolean(rawQuestion) && !DIFFICULT_QUESTION_BY_ID[rawQuestion as string]);

  const select = useCallback(
    (next: { theme?: string; question?: string } | null) => {
      const sp = new URLSearchParams();
      if (next?.theme) sp.set("theme", next.theme);
      if (next?.question) sp.set("question", next.question);
      const qs = sp.toString();
      router.replace(qs ? `/themes?${qs}` : "/themes", { scroll: false });
    },
    [router]
  );

  /*
   * On a narrow screen the detail renders below the index, so a tap that changes
   * the selection has to move the viewport or it looks like nothing happened.
   */
  useEffect(() => {
    if (!selection) return;
    if (window.matchMedia("(min-width: 1024px)").matches) {
      detail.current?.scrollTo({ top: 0 });
      return;
    }
    detail.current?.scrollIntoView({
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "auto"
        : "smooth",
      block: "start",
    });
  }, [selection]);

  const openEntity = useCallback(
    (id: string) => router.push(entityHref(id)),
    [router]
  );

  return (
    <div className="lg:grid lg:grid-cols-[300px_minmax(0,1fr)] lg:gap-10">
      <div className="lg:sticky lg:top-4 lg:max-h-[calc(100dvh-6rem)] lg:self-start lg:overflow-y-auto lg:pr-1 quiet-scroll">
        {corrected && (
          <p className="mb-4 rounded border border-terracotta/35 bg-terracotta-wash px-3 py-2 text-[11.5px] leading-relaxed text-terracotta">
            That link named a theme or question this study does not have.
          </p>
        )}

        <h2 className="label-caps text-bronze">Themes</h2>
        <p className="mt-1.5 text-[12px] leading-relaxed text-ink-soft">
          Threads that run the length of the book.
        </p>
        <ul className="mt-3 space-y-0.5">
          {THEMES.map((t) => (
            <IndexRow
              key={t.id}
              title={t.title}
              hook={t.hook}
              active={selection?.kind === "theme" && selection.theme.id === t.id}
              onSelect={() => select({ theme: t.id })}
            />
          ))}
        </ul>

        <h2 className="label-caps mt-9 text-terracotta">Difficult questions</h2>
        <p className="mt-1.5 text-[12px] leading-relaxed text-ink-soft">
          Where the text resists us. Each one separates the claim from the argument.
        </p>
        <ul className="mt-3 space-y-0.5">
          {DIFFICULT_QUESTIONS.map((q) => (
            <IndexRow
              key={q.id}
              title={q.title}
              hook={q.hook}
              tone="question"
              active={
                selection?.kind === "question" && selection.question.id === q.id
              }
              onSelect={() => select({ question: q.id })}
            />
          ))}
        </ul>
      </div>

      <div ref={detail} className="mt-10 min-w-0 lg:mt-0">
        {selection === null ? (
          <Empty />
        ) : selection.kind === "theme" ? (
          <ThemeDetail theme={selection.theme} onEntityClick={openEntity} onSelect={select} />
        ) : (
          <QuestionDetail
            question={selection.question}
            onEntityClick={openEntity}
            onSelect={select}
          />
        )}
      </div>
    </div>
  );
}

function IndexRow({
  title,
  hook,
  active,
  onSelect,
  tone = "theme",
}: {
  title: string;
  hook: string;
  active: boolean;
  onSelect: () => void;
  tone?: "theme" | "question";
}) {
  return (
    <li>
      <button
        type="button"
        onClick={onSelect}
        aria-current={active ? "true" : undefined}
        className={`w-full rounded px-2.5 py-2 text-left transition-colors ${
          active
            ? tone === "question"
              ? "bg-terracotta-wash"
              : "bg-bronze-wash"
            : "hover:bg-ivory-deep"
        }`}
      >
        <span
          className={`block font-serif text-[13.5px] leading-snug ${
            active
              ? tone === "question"
                ? "font-semibold text-terracotta"
                : "font-semibold text-bronze"
              : "text-charcoal"
          }`}
        >
          {title}
        </span>
        <span className="mt-0.5 block text-[11.5px] leading-snug text-ink-faint">
          {hook}
        </span>
      </button>
    </li>
  );
}

function Empty() {
  return (
    <div className="rounded border border-dashed border-rule-strong bg-ivory-deep px-6 py-10">
      <p className="max-w-md font-serif text-[15px] leading-relaxed text-ink-soft">
        Pick a theme to follow one thread from chapter 1 to chapter 24, or a difficult
        question to see the argument laid out rather than settled.
      </p>
      <p className="mt-3 max-w-md text-[12.5px] leading-relaxed text-ink-faint">
        The two are written differently on purpose. A theme is allowed to argue a
        reading. A question sets out what the text claims, what the historical
        problems are, and each major interpretation with its own difficulties, and
        then says what remains open.
      </p>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Shared pieces                                                      */
/* ------------------------------------------------------------------ */

function ChapterChips({ chapters }: { chapters: number[] }) {
  if (!chapters.length) return null;
  return (
    <div className="mt-4">
      <h3 className="label-caps text-ink-faint">Chapters</h3>
      <ul className="mt-1.5 flex flex-wrap gap-1.5">
        {chapters.map((n) => (
          <li key={n}>
            <Link
              href={studyHref({ chapter: n })}
              className="inline-block rounded-sm border border-rule bg-ivory px-1.5 py-0.5 text-[11.5px] tabular-nums text-charcoal transition-colors hover:border-forest hover:bg-forest-wash hover:text-forest"
            >
              {n}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function EntityChips({ ids }: { ids: string[] }) {
  const entities = ids.map((id) => ENTITY_BY_ID[id]).filter(Boolean);
  if (!entities.length) return null;
  return (
    <div className="mt-4">
      <h3 className="label-caps text-ink-faint">In view</h3>
      <ul className="mt-1.5 flex flex-wrap gap-1.5">
        {entities.map((e) => (
          <li key={e.id}>
            <Link
              href={entityHref(e.id)}
              className="inline-block rounded-sm border border-rule bg-ivory px-1.5 py-0.5 text-[11.5px] text-charcoal transition-colors hover:border-bronze hover:bg-bronze-wash hover:text-bronze"
            >
              {e.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="rule-t py-5">
      <h3 className="font-serif text-[16.5px] font-semibold text-charcoal">{title}</h3>
      <div className="mt-2.5">{children}</div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Theme                                                              */
/* ------------------------------------------------------------------ */

function ThemeDetail({
  theme,
  onEntityClick,
  onSelect,
}: {
  theme: Theme;
  onEntityClick: (id: string) => void;
  onSelect: (next: { theme?: string; question?: string }) => void;
}) {
  const related = theme.relatedQuestionIds
    .map((id) => DIFFICULT_QUESTION_BY_ID[id])
    .filter(Boolean);

  return (
    <article className="animate-fade-rise">
      <header className="rule-b pb-5">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div className="min-w-0">
            <p className="label-caps text-bronze">Theme</p>
            <h2 className="mt-1 font-serif text-[25px] leading-tight font-semibold tracking-[-0.012em] text-charcoal">
              {theme.title}
            </h2>
          </div>
          <BookmarkButton
            kind="theme"
            targetId={theme.id}
            label={theme.title}
            href={`/themes?theme=${theme.id}`}
            className="shrink-0"
          />
        </div>
        <p className="mt-2.5 font-serif text-[15px] leading-relaxed text-ink-soft">
          {theme.hook}
        </p>
        <ChapterChips chapters={theme.chapterNumbers} />
      </header>

      <div className="pt-5">
        <Prose body={theme.body} onEntityClick={onEntityClick} />
        <ScriptureRefs refs={theme.scriptureRefs} className="mt-4" />
        <Citations citations={theme.citations} />
      </div>

      {/*
        Labelled, and labelled where the reader cannot miss it. The brief is
        explicit that Reformed emphases appear as one Christian reading rather than
        as the plain sense of the text, so the heading carries the label and the
        standing sentence below says what the label means.
      */}
      {theme.reformedPerspective && (
        <section className="mt-5 rounded border border-water/40 bg-[#eef2f4] px-4 py-3.5">
          <h3 className="font-serif text-[14.5px] font-semibold text-[#3f6377]">
            A Reformed reading
          </h3>
          <p className="mt-1 text-[11.5px] leading-relaxed text-[#4F7385]">
            One Christian tradition&apos;s emphasis, named so you can weigh it as such.
            Other Christian readings of this theme are held in good faith.
          </p>
          <div className="mt-2.5">
            <Prose body={theme.reformedPerspective.body} onEntityClick={onEntityClick} />
            <Citations citations={theme.reformedPerspective.citations} />
          </div>
        </section>
      )}

      {theme.newTestament && (
        <Block title="In the New Testament">
          {/*
            The distinction the brief insists on: a verse that actually cites Joshua
            is a different kind of claim from a resemblance later Christians drew.
            Merging them lets typology borrow the authority of citation.
          */}
          {theme.newTestament.explicitReferences.length > 0 && (
            <div>
              <h4 className="label-caps text-forest">Passages that refer to it directly</h4>
              <ul className="mt-2 space-y-2">
                {theme.newTestament.explicitReferences.map((r) => (
                  <li key={r.ref} className="text-[12.5px] leading-relaxed">
                    <span className="font-medium text-charcoal">{r.ref}</span>
                    <span className="text-ink-soft"> — {r.note}</span>
                  </li>
                ))}
              </ul>
              <ScriptureRefs
                refs={theme.newTestament.explicitReferences.map((r) => r.ref)}
                className="mt-3"
                label="Read"
              />
            </div>
          )}

          {theme.newTestament.laterTypology.length > 0 && (
            <div className="mt-5">
              <h4 className="label-caps text-bronze">
                Connections drawn later by Christian readers
              </h4>
              <p className="mt-1 text-[11.5px] leading-relaxed text-ink-faint">
                Not stated by the New Testament itself. Read these as interpretation
                with a history, not as the text&apos;s own claim.
              </p>
              <ul className="mt-2 space-y-2">
                {theme.newTestament.laterTypology.map((t, i) => (
                  <li key={i} className="text-[12.5px] leading-relaxed">
                    <span className="font-medium text-charcoal">{t.claim}</span>
                    <span className="text-ink-soft"> — {t.note}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </Block>
      )}

      <EntityChips ids={theme.entityIds} />

      {related.length > 0 && (
        <Block title="Where this gets difficult">
          <ul className="space-y-1.5">
            {related.map((q) => (
              <li key={q.id}>
                <button
                  type="button"
                  onClick={() => onSelect({ question: q.id })}
                  className="text-left text-[13px] leading-relaxed font-medium text-terracotta hover:underline"
                >
                  {q.title}
                </button>
                <span className="block text-[11.5px] text-ink-faint">{q.hook}</span>
              </li>
            ))}
          </ul>
        </Block>
      )}
    </article>
  );
}

/* ------------------------------------------------------------------ */
/* Difficult question                                                 */
/* ------------------------------------------------------------------ */

function QuestionDetail({
  question,
  onEntityClick,
  onSelect,
}: {
  question: DifficultQuestion;
  onEntityClick: (id: string) => void;
  onSelect: (next: { theme?: string; question?: string }) => void;
}) {
  const themes = question.themeIds.map((id) => THEME_BY_ID[id]).filter(Boolean);

  return (
    <article className="animate-fade-rise">
      <header className="rule-b pb-5">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div className="min-w-0">
            <p className="label-caps text-terracotta">Difficult question</p>
            <h2 className="mt-1 font-serif text-[25px] leading-tight font-semibold tracking-[-0.012em] text-charcoal">
              {question.title}
            </h2>
          </div>
          <BookmarkButton
            kind="question"
            targetId={question.id}
            label={question.title}
            href={`/themes?question=${question.id}`}
            className="shrink-0"
          />
        </div>
        <p className="mt-2.5 font-serif text-[15px] leading-relaxed text-ink-soft">
          {question.hook}
        </p>
        <ChapterChips chapters={question.chapterNumbers} />
      </header>

      <Block title="What the text says">
        <Prose body={question.whatTheTextSays} onEntityClick={onEntityClick} />
        <ScriptureRefs refs={question.scriptureRefs} className="mt-3" />
      </Block>

      <Block title="How the passage works">
        <Prose body={question.literaryFunction} onEntityClick={onEntityClick} />
      </Block>

      <Block title="The historical questions">
        <Prose body={question.historicalQuestions} onEntityClick={onEntityClick} />
      </Block>

      <section className="rule-t py-5">
        <h3 className="font-serif text-[16.5px] font-semibold text-charcoal">
          How it has been answered
        </h3>
        <p className="mt-1 text-[12px] leading-relaxed text-ink-faint">
          Each position stated in its own terms, with what it accounts for and what it
          costs. Some of these this study does not hold; they are here because a
          reader cannot weigh a view they have only heard summarised by its
          opponents.
        </p>

        <ol className="mt-4 space-y-5">
          {question.interpretations.map((interp, i) => (
            <li key={interp.label} className="rounded border border-rule bg-ivory-deep px-4 py-3.5">
              <div className="flex items-baseline gap-2.5">
                <span className="font-serif text-[13px] tabular-nums text-bronze">
                  {i + 1}
                </span>
                <h4 className="font-serif text-[15px] leading-snug font-semibold text-charcoal">
                  {interp.label}
                </h4>
              </div>
              {interp.proponents && (
                <p className="mt-1 pl-6 text-[11.5px] leading-relaxed text-ink-faint">
                  Associated with {interp.proponents}
                </p>
              )}
              <div className="mt-2 pl-6">
                <Prose body={interp.summary} onEntityClick={onEntityClick} compact />
                <dl className="mt-3 space-y-2 text-[12.5px] leading-relaxed">
                  <div>
                    <dt className="label-caps text-forest">What it accounts for</dt>
                    <dd className="mt-0.5 text-ink-soft">{interp.strengths}</dd>
                  </div>
                  <div>
                    <dt className="label-caps text-terracotta">What it struggles with</dt>
                    <dd className="mt-0.5 text-ink-soft">{interp.difficulties}</dd>
                  </div>
                </dl>
                <Citations citations={interp.citations} />
              </div>
            </li>
          ))}
        </ol>
      </section>

      <Block title="What stays unresolved">
        <Prose body={question.unresolved} onEntityClick={onEntityClick} />
        <Citations citations={question.citations} />
      </Block>

      {question.ethicalNote && (
        <div className="mt-2">
          <Aside title="A necessary caution" tone="caution">
            <Prose body={question.ethicalNote} compact />
          </Aside>
        </div>
      )}

      {themes.length > 0 && (
        <Block title="Related themes">
          <ul className="space-y-1.5">
            {themes.map((t) => (
              <li key={t.id}>
                <button
                  type="button"
                  onClick={() => onSelect({ theme: t.id })}
                  className="text-left text-[13px] leading-relaxed font-medium text-bronze hover:underline"
                >
                  {t.title}
                </button>
                <span className="block text-[11.5px] text-ink-faint">{t.hook}</span>
              </li>
            ))}
          </ul>
        </Block>
      )}
    </article>
  );
}
