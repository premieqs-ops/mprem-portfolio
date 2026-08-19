"use client";

import Link from "next/link";
import { ArrowUpRight, Cpu, Search, Sparkles, TrendingUp, Wrench } from "lucide-react";
import Badge from "@/components/ui/Badge";
import { useCMSData } from "@/components/cms/CMSProvider";

const categoryMeta: Record<string, { label: string; icon: typeof Sparkles }> = {
  "digital-marketing": { label: "Digital Marketing", icon: TrendingUp },
  ai: { label: "AI", icon: Cpu },
  seo: { label: "SEO", icon: Search },
  growth: { label: "Growth", icon: Sparkles },
  tools: { label: "Tools", icon: Wrench },
};

export default function InsightsPage() {
  const { news, articles } = useCMSData();
  const publishedNews = (news || [])
    .filter((n) => n.status === "published")
    .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
  const publishedArticles = (articles || []).filter((a) => a.status === "published");

  return (
    <div className="pt-28 pb-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Badge className="mb-4">Insights</Badge>
        <h1 className="section-heading mb-4">
          Digital Marketing &amp; AI Updates
        </h1>
        <p className="section-subheading mb-16 max-w-2xl">
          Trending industry signals and practical notes on SEO, paid media, AI
          workflows, and growth systems. Managed from Admin — keep only valid,
          useful updates.
        </p>

        <section className="mb-20">
          <h2 className="text-xl font-display font-semibold mb-6 flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-accent-light" />
            Trending Now
          </h2>
          {publishedNews.length === 0 ? (
            <div className="glass-card p-10 text-center text-foreground-muted">
              No published updates yet. Add items from Admin → News & Trends.
            </div>
          ) : (
            <div className="grid md:grid-cols-2 gap-5">
              {publishedNews.map((item) => {
                const meta = categoryMeta[item.category] || categoryMeta["digital-marketing"];
                const Icon = meta.icon;
                return (
                  <article
                    key={item.id}
                    className="glass-card p-6 hover:border-accent/40 transition-colors"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <span className="inline-flex items-center gap-1.5 text-xs font-medium text-accent-light bg-accent/10 border border-accent/20 rounded-full px-2.5 py-1">
                        <Icon className="w-3 h-3" />
                        {meta.label}
                      </span>
                      <time className="text-xs text-foreground-subtle">
                        {item.publishedAt}
                      </time>
                    </div>
                    <h3 className="text-lg font-display font-semibold mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-foreground-muted leading-relaxed mb-4">
                      {item.summary}
                    </p>
                    <div className="flex items-center justify-between text-xs text-foreground-subtle">
                      <span>{item.source || "Industry"}</span>
                      {item.url ? (
                        <a
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-accent-light hover:underline"
                        >
                          Source <ArrowUpRight className="w-3 h-3" />
                        </a>
                      ) : null}
                    </div>
                  </article>
                );
              })}
            </div>
          )}
        </section>

        <section>
          <h2 className="text-xl font-display font-semibold mb-6">
            Deeper Articles
          </h2>
          {publishedArticles.length === 0 ? (
            <div className="glass-card p-10 text-center">
              <p className="text-foreground-muted">
                Long-form insights will appear here when published from Admin.
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {publishedArticles.map((article) => (
                <Link
                  key={article.id}
                  href={`/insights/${article.slug}`}
                  className="glass-card p-6 hover:border-accent/40 transition-colors"
                >
                  <span className="text-xs text-accent-light">
                    {article.category}
                  </span>
                  <h3 className="text-lg font-display font-semibold mt-2 mb-2">
                    {article.title}
                  </h3>
                  <p className="text-sm text-foreground-muted line-clamp-2">
                    {article.excerpt}
                  </p>
                </Link>
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
