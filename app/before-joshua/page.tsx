import { Suspense } from "react";
import type { Metadata } from "next";
import { PageShell } from "@/components/shell/PageShell";
import { BeforeScreen } from "@/components/before/BeforeScreen";
import { BEFORE_STAGES } from "@/content/before-joshua";

export const metadata: Metadata = {
  title: "Before Joshua",
  description:
    "How Israel arrived at the Jordan: the promise to Abraham, Egypt, the exodus, Sinai, the wilderness generation, and the approach from the east.",
};

export default function BeforeJoshuaPage() {
  return (
    <PageShell
      eyebrow="Orientation"
      title="Before Joshua"
      standfirst={`Joshua 1 begins with a death notice and assumes you know who died and why it matters. These ${BEFORE_STAGES.length} stages supply what the book takes for granted, from a promise made to one family to an army camped on the wrong side of a river, and end with a look at the world Canaan sat inside.`}
      wide
    >
      <Suspense fallback={<div className="h-64" aria-hidden />}>
        <BeforeScreen />
      </Suspense>
    </PageShell>
  );
}
