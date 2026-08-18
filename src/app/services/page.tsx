import type { Metadata } from "next";
import type { ComponentType } from "react";
import Link from "next/link";
import { Megaphone, Search, Target, TrendingUp, Share2, Bot, ArrowRight } from "lucide-react";
import { services } from "@/data/mock";
import Badge from "@/components/ui/Badge";

export const metadata: Metadata = {
  title: "Services",
  description: "Digital marketing, SEO, lead generation, business development and growth strategy services.",
};

const iconMap: Record<string, ComponentType<{ className?: string }>> = {
  Megaphone, Search, Target, TrendingUp, Share2, Bot,
};

export default function ServicesPage() {
  return (
    <div className="pt-28 pb-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <Badge className="mb-4">Services</Badge>
          <h1 className="section-heading mb-4">From Strategy to Execution.</h1>
          <p className="section-subheading">Practical digital solutions designed around business outcomes.</p>
        </div>

        <div className="space-y-8">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon] || Megaphone;
            return (
              <div key={service.id} id={service.slug} className="glass-card p-6 md:p-10 scroll-mt-28">
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-accent/10 border border-accent/20 text-accent-light">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs font-mono text-foreground-subtle">0{i + 1}</span>
                      <h2 className="text-2xl font-display font-semibold">{service.title}</h2>
                    </div>
                    <p className="text-foreground-muted leading-relaxed mb-4">{service.longDescription || service.description}</p>
                    <Link href="/contact" className="inline-flex items-center gap-2 text-sm font-medium text-accent-light hover:gap-3 transition-all">
                      Discuss Your Challenge <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
