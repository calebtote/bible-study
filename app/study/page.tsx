import { Suspense } from "react";
import type { Metadata } from "next";
import { StudyScreen } from "@/components/study/StudyScreen";

export const metadata: Metadata = {
  title: "Study",
  description:
    "Walk the book of Joshua chapter by chapter and milestone by milestone, with the map, the surrounding world, and what is and is not known about both.",
};

export default function StudyPage() {
  return (
    /*
     * `useSearchParams` needs a suspense boundary. The fallback is a line of text
     * rather than a skeleton of the three panes: a fake map that turns into a real
     * one reads as a glitch, and this resolves in a frame.
     */
    <Suspense
      fallback={
        <p className="px-6 py-16 text-center text-[13px] text-ink-faint">
          Opening the study…
        </p>
      }
    >
      <StudyScreen />
    </Suspense>
  );
}
