"use client";

import { motion } from "framer-motion";
import {
  Target,
  Search,
  TrendingUp,
  Bot,
  BarChart3,
  Users,
} from "lucide-react";

const pillars = [
  {
    icon: Target,
    title: "Pipeline Focus",
    description:
      "Every campaign and channel decision is judged by its contribution to qualified opportunities — not vanity metrics.",
  },
  {
    icon: Search,
    title: "Organic Compounding",
    description:
      "SEO and content systems built to accumulate authority and traffic over time, not chase temporary ranking spikes.",
  },
  {
    icon: TrendingUp,
    title: "BD Alignment",
    description:
      "Marketing and business development treated as one system: shared definitions, clean handoffs, clear ownership.",
  },
  {
    icon: Bot,
    title: "AI-Augmented Work",
    description:
      "Practical use of AI and automation to accelerate research, creative, routing, and reporting — without losing control.",
  },
  {
    icon: BarChart3,
    title: "Measurement First",
    description:
      "Clear attribution, UTMs, and dashboards so decisions rest on data rather than assumptions.",
  },
  {
    icon: Users,
    title: "Founder-Friendly",
    description:
      "Direct communication, no jargon for its own sake, and recommendations you can actually implement.",
  },
];

export default function ImpactStats() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background-secondary/40 to-background pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 md:mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="badge mb-4"
          >
            How I Think
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-heading mb-4"
          >
            Principles Behind the Work
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="section-subheading mx-auto"
          >
            A clear operating philosophy for digital marketing that serves the
            business — not the other way around.
          </motion.p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {pillars.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: i * 0.06, duration: 0.45 }}
                className="group relative p-6 md:p-7 rounded-2xl glass-card hover:border-accent/35 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-accent/10 border border-accent/25 flex items-center justify-center group-hover:bg-accent/20 group-hover:shadow-glow-sm transition-all">
                    <Icon className="w-5 h-5 text-accent-light" />
                  </div>
                  <div>
                    <h3 className="text-base md:text-lg font-display font-semibold text-foreground mb-1.5">
                      {item.title}
                    </h3>
                    <p className="text-sm md:text-[15px] text-foreground-muted leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
