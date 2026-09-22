import { Suspense } from "react";
import type { Metadata } from "next";
import { PageShell } from "@/components/shell/PageShell";
import { ThemesScreen } from "@/components/themes/ThemesScreen";
import { THEMES } from "@/content/themes";
import { DIFFICULT_QUESTIONS } from "@/content/difficult-questions";

export const metadata: Metadata = {
  title: "Themes and difficult questions",
  description:
    "Eleven threads that run the length of Joshua, and seven questions the book raises that do not resolve cleanly.",
};

export default function ThemesPage() {
  return (
    <PageShell
      eyebrow="Reading across the book"
      title="Themes and difficult questions"
      standfirst={`${THEMES.length} threads that run from chapter 1 to chapter 24, and ${DIFFICULT_QUESTIONS.length} questions this book raises that no reading settles comfortably. The themes argue a reading. The questions set out the argument and leave it open where it is open.`}
      wide
    >
      {/* The screen reads ?theme= and ?question= from the URL, so it needs a boundary. */}
      <Suspense fallback={<div className="h-64" aria-hidden />}>
        <ThemesScreen />
      </Suspense>
    </PageShell>
  );
}
