import type { Metadata } from "next";
import { caseStudies } from "@/data/mock";
import { notFound } from "next/navigation";
import Link from "next/link";
import Badge from "@/components/ui/Badge";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const cs = caseStudies.find((c) => c.slug === slug);
  if (!cs) return { title: "Case Study" };
  return { title: cs.title, description: cs.strategy };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const cs = caseStudies.find((c) => c.slug === slug && c.status === "published");
  if (!cs) notFound();

  return (
    <div className="pt-28 pb-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Badge className="mb-4">Case Study</Badge>
        <h1 className="section-heading mb-8">{cs.title}</h1>

        <div className="space-y-10">
          <section>
            <h2 className="text-sm uppercase tracking-wider text-accent-light mb-2">The Challenge</h2>
            <p className="text-foreground-muted leading-relaxed text-lg">{cs.challenge}</p>
          </section>
          <section>
            <h2 className="text-sm uppercase tracking-wider text-accent-light mb-2">The Strategy</h2>
            <p className="text-foreground-muted leading-relaxed text-lg">{cs.strategy}</p>
          </section>
          <section>
            <h2 className="text-sm uppercase tracking-wider text-accent-light mb-2">The Execution</h2>
            <p className="text-foreground-muted leading-relaxed text-lg">{cs.execution}</p>
          </section>
          <section>
            <h2 className="text-sm uppercase tracking-wider text-accent-light mb-2">The Result</h2>
            <p className="text-foreground-muted leading-relaxed text-lg">{cs.result}</p>
            {cs.metrics.length === 0 && (
              <p className="mt-2 text-sm text-foreground-subtle italic">Metrics available in admin when verified data is published.</p>
            )}
          </section>
          <section>
            <h2 className="text-sm uppercase tracking-wider text-accent-light mb-2">What I Learned</h2>
            <p className="text-foreground-muted leading-relaxed text-lg">{cs.learnings}</p>
          </section>
          {cs.tools.length > 0 && (
            <section>
              <h2 className="text-sm uppercase tracking-wider text-accent-light mb-3">Tools Used</h2>
              <div className="flex flex-wrap gap-2">
                {cs.tools.map((t) => (
                  <span key={t} className="px-3 py-1 text-xs rounded-full border border-border bg-background-card">{t}</span>
                ))}
              </div>
            </section>
          )}
        </div>

        <div className="mt-16 pt-8 border-t border-border">
          <Link href="/contact" className="btn-primary">Discuss a Similar Challenge \u2192</Link>
        </div>
      </div>
    </div>
  );
}
