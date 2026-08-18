import type { Metadata } from "next";
import { caseStudies } from "@/data/mock";
import Badge from "@/components/ui/Badge";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Case Studies",
  description: "Case studies showing strategy, execution and outcomes.",
};

export default function CaseStudiesPage() {
  const published = caseStudies.filter((c) => c.status === "published");

  return (
    <div className="pt-28 pb-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Badge className="mb-4">Case Studies</Badge>
        <h1 className="section-heading mb-4">How Strategy Becomes Results</h1>
        <p className="section-subheading mb-16">Challenge \u2192 Strategy \u2192 Execution \u2192 Result. Metrics appear only when verified data is entered in Admin.</p>

        <div className="space-y-8">
          {published.map((cs) => (
            <div key={cs.id} className="glass-card p-6 md:p-10">
              <h2 className="text-2xl font-display font-semibold mb-4">{cs.title}</h2>
              <div className="grid md:grid-cols-2 gap-6 text-sm">
                <div>
                  <p className="text-xs uppercase tracking-wider text-foreground-subtle mb-1">The Challenge</p>
                  <p className="text-foreground-muted">{cs.challenge}</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-foreground-subtle mb-1">The Strategy</p>
                  <p className="text-foreground-muted">{cs.strategy}</p>
                </div>
              </div>
              <div className="mt-6">
                <Link href={`/case-studies/${cs.slug}`} className="text-accent-light text-sm font-medium hover:underline">
                  View full case study \u2192
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
