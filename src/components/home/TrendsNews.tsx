"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, Sparkles, Cpu, Search, TrendingUp, Wrench } from "lucide-react";
import { useCMSData } from "@/components/cms/CMSProvider";
import Badge from "@/components/ui/Badge";

const categoryMeta: Record<
  string,
  { label: string; icon: typeof Sparkles }
> = {
  "digital-marketing": { label: "Digital Marketing", icon: TrendingUp },
  ai: { label: "AI", icon: Cpu },
  seo: { label: "SEO", icon: Search },
  growth: { label: "Growth", icon: Sparkles },
  tools: { label: "Tools", icon: Wrench },
};

export default function TrendsNews() {
  const { news } = useCMSData();
  const items = (news || [])
    .filter((n) => n.status === "published")
    .sort((a, b) => (a.order ?? 0) - (b.order ?? 0) || b.publishedAt.localeCompare(a.publishedAt))
    .slice(0, 6);

  if (items.length === 0) return null;

  return (
    <section className="relative py-20 md:py-28 border-t border-border overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-accent/5 to-background pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-14">
          <div>
            <Badge className="mb-4">Trending</Badge>
            <h2 className="section-heading mb-3">
              Digital Marketing &amp; AI Updates
            </h2>
            <p className="section-subheading">
              Curated, practical signals on search, paid media, AI workflows, and
              growth systems — not noise.
            </p>
          </div>
          <Link
            href="/insights"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-accent-light hover:underline shrink-0"
          >
            View all updates
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((item, i) => {
            const meta = categoryMeta[item.category] || categoryMeta["digital-marketing"];
            const Icon = meta.icon;
            return (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ delay: i * 0.05, duration: 0.4 }}
                className="group glass-card p-5 md:p-6 flex flex-col hover:border-accent/40 transition-all duration-300"
              >
                <div className="flex items-center justify-between gap-3 mb-3">
                  <span className="inline-flex items-center gap-1.5 text-xs font-medium text-accent-light bg-accent/10 border border-accent/20 rounded-full px-2.5 py-1">
                    <Icon className="w-3 h-3" />
                    {meta.label}
                  </span>
                  <time className="text-xs text-foreground-subtle tabular-nums">
                    {item.publishedAt}
                  </time>
                </div>
                <h3 className="text-base md:text-lg font-display font-semibold text-foreground mb-2 leading-snug group-hover:text-accent-light transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-foreground-muted leading-relaxed flex-1 line-clamp-3">
                  {item.summary}
                </p>
                <div className="mt-4 pt-3 border-t border-border flex items-center justify-between">
                  <span className="text-xs text-foreground-subtle">
                    {item.source || "Industry"}
                  </span>
                  {item.url ? (
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-medium text-accent-light hover:underline"
                    >
                      Source
                      <ArrowUpRight className="w-3 h-3" />
                    </a>
                  ) : null}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
