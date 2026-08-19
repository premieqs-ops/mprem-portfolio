"use client";

import type { ComponentType } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Megaphone,
  Search,
  Target,
  TrendingUp,
  Share2,
  Bot,
  ArrowRight,
} from "lucide-react";
import { useCMSData } from "@/components/cms/CMSProvider";
import { cn } from "@/lib/utils";

const iconMap: Record<string, ComponentType<{ className?: string }>> = {
  Megaphone,
  Search,
  Target,
  TrendingUp,
  Share2,
  Bot,
};

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function WhatIDo() {
  const { services } = useCMSData();
  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 md:mb-20">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="badge mb-4"
          >
            What I Do
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-heading mb-4"
          >
            Services Built Around Outcomes.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="section-subheading mx-auto"
          >
            Strategy, channels, and systems designed to strengthen presence and generate qualified opportunities.
          </motion.p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service) => {
            const Icon = iconMap[service.icon] || Megaphone;
            return (
              <motion.div key={service.id} variants={item}>
                <Link
                  href={`/services#${service.slug}`}
                  className={cn(
                    "group relative block h-full p-6 md:p-8 rounded-2xl glass-card",
                    "hover:border-accent/40 hover:-translate-y-1 transition-all duration-300"
                  )}
                >
                  <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/25 flex items-center justify-center mb-5 group-hover:bg-accent/20 group-hover:shadow-glow-sm transition-all">
                    <Icon className="w-5 h-5 text-accent-light" />
                  </div>
                  <h3 className="text-lg md:text-xl font-display font-semibold text-foreground mb-2 group-hover:text-accent-light transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-foreground-muted leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <span className="inline-flex items-center gap-1 text-sm text-accent-light font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    Learn more
                    <ArrowRight className="w-3.5 h-3.5" />
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
