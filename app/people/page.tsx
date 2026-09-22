import { Suspense } from "react";
import type { Metadata } from "next";
import { PageShell } from "@/components/shell/PageShell";
import { PeopleScreen } from "@/components/people/PeopleScreen";
import { PROFILES } from "@/content/people/profiles";

export const metadata: Metadata = {
  title: "People",
  description:
    "Curated profiles of the named figures in Joshua, each with a timeline that marks where the text fixes the order of events and where it does not.",
};

export default function PeoplePage() {
  return (
    <PageShell
      eyebrow="Character explorer"
      title="People"
      standfirst={`${PROFILES.length} figures whose actions shape the book, from Joshua and Caleb to people who appear once and change everything. Each profile keeps to what the text says, names what it withholds, and puts every appearance on a timeline ordered by narrative sequence rather than by date.`}
      wide
    >
      <Suspense fallback={<div className="h-64" aria-hidden />}>
        <PeopleScreen />
      </Suspense>
    </PageShell>
  );
}
