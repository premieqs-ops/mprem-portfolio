import type { Metadata } from "next";
import { articles } from "@/data/mock";
import Badge from "@/components/ui/Badge";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Insights",
  description: "Ideas, experiments and insights on digital marketing and growth.",
};

export default function InsightsPage() {
  const published = articles.filter((a) => a.status === "published");

  return (
    <div className="pt-28 pb-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Badge className="mb-4">Content</Badge>
        <h1 className="section-heading mb-4">Ideas, Experiments & Insights</h1>
        <p className="section-subheading mb-16">Articles on SEO, digital marketing, AI, business development and growth.</p>

        {published.length === 0 ? (
          <div className="glass-card p-12 text-center">
            <p className="text-foreground-muted text-lg">New insights are coming soon.</p>
            <p className="text-sm text-foreground-subtle mt-2">Content is fully managed from the Admin CMS.</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {published.map((article) => (
              <Link key={article.id} href={`/insights/${article.slug}`} className="glass-card p-6 hover:border-accent/40 transition-colors">
                <span className="text-xs text-accent-light">{article.category}</span>
                <h2 className="text-lg font-display font-semibold mt-2 mb-2">{article.title}</h2>
                <p className="text-sm text-foreground-muted line-clamp-2">{article.excerpt}</p>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
