"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { caseStudies } from "@/data/mock";
import Badge from "@/components/ui/Badge";

export default function FeaturedProject() {
  const featured = caseStudies.find((c) => c.featured) || caseStudies[0];
  if (!featured) return null;

  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent pointer-events-none" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative aspect-[4/3] rounded-2xl overflow-hidden glass-card border-accent/20">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-background-tertiary to-accent-electric/10" />
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-foreground-muted text-sm text-center px-8">Case study visual<br /><span className="text-xs text-foreground-subtle">Upload from Admin</span></p>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-6">
            <Badge variant="accent">Featured Project</Badge>
            <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight">{featured.title}</h2>
            <p className="text-foreground-muted leading-relaxed text-lg">{featured.strategy}</p>
            <p className="text-sm text-foreground-subtle">Metrics and detailed outcomes are managed from the Admin CMS and appear only when verified data is published.</p>
            <Link href={`/case-studies/${featured.slug}`} className="btn-primary group inline-flex">
              View Case Study <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
