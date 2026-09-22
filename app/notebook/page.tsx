import type { Metadata } from "next";
import { PageShell } from "@/components/shell/PageShell";
import { NotebookScreen } from "@/components/notebook/NotebookScreen";

export const metadata: Metadata = {
  title: "Notebook",
  description:
    "Your notes, bookmarks and progress, held in this browser only, with export and import so they are yours to move.",
};

export default function NotebookPage() {
  return (
    <PageShell
      eyebrow="Your work"
      title="Notebook"
      standfirst="Everything you have written and marked, in one place. None of it has left this browser, which also means this browser is the only copy until you export it."
      wide
    >
      <NotebookScreen />
    </PageShell>
  );
}
