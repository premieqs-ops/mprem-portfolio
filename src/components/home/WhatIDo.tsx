"use client";

import type { ComponentType } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Megaphone, Search, Target, TrendingUp, Share2, Bot, ArrowRight } from "lucide-react";
import { services } from "@/data/mock";
import { cn } from "@/lib/utils";

const iconMap: Record<string, ComponentType<{ className?: string }>> = {
  Megaphone, Search, Target, TrendingUp, Share2, Bot,
};

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function WhatIDo() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 md:mb-20">
          <motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="badge mb-4">
            What I Do
          </motion.p>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="section-heading mb-4">
            From Strategy to Execution.
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="section-subheading mx-auto">
            Practical digital solutions designed around business outcomes.
          </motion.p>
        </div>

        <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-50px" }} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon] || Megaphone;
            return (
              <motion.div key={service.id} variants={item}>
                <Link href={`/services#${service.slug}`} className={cn("group relative block h-full p-6 md:p-8 rounded-2xl glass-card", "hover:border-accent/40 hover:-translate-y-1 transition-all duration-300")}>
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 border border-accent/20 text-accent-light group-hover:bg-accent/20 group-hover:shadow-glow-sm transition-all">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono text-foreground-subtle">0{index + 1}</span>
                  </div>
                  <h3 className="text-xl font-display font-semibold mb-3 group-hover:text-accent-light transition-colors">{service.title}</h3>
                  <p className="text-sm text-foreground-muted leading-relaxed mb-6">{service.description}</p>
                  <span className="inline-flex items-center gap-1.5 text-sm font-medium text-accent-light opacity-0 group-hover:opacity-100 transition-opacity">
                    Explore <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
