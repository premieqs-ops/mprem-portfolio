"use client";

import { motion } from "framer-motion";
import {
  MessageSquare,
  ScanSearch,
  Layers,
  Rocket,
  LineChart,
  RefreshCw,
} from "lucide-react";

const steps = [
  {
    num: "01",
    icon: MessageSquare,
    title: "Clarify the Goal",
    description:
      "What does success look like in business terms — pipeline, revenue, visibility, or market entry?",
  },
  {
    num: "02",
    icon: ScanSearch,
    title: "Diagnose the System",
    description:
      "Audit channels, messaging, funnels, and data. Find the highest-leverage gaps and constraints.",
  },
  {
    num: "03",
    icon: Layers,
    title: "Design the Approach",
    description:
      "Choose channels, offers, and measurement. Prioritize what compounds; cut what doesn’t.",
  },
  {
    num: "04",
    icon: Rocket,
    title: "Execute with Precision",
    description:
      "Launch campaigns, content, and processes with clear ownership and tight feedback loops.",
  },
  {
    num: "05",
    icon: LineChart,
    title: "Measure & Learn",
    description:
      "Track leading and lagging indicators. Attribute results. Surface what to double down on.",
  },
  {
    num: "06",
    icon: RefreshCw,
    title: "Iterate & Scale",
    description:
      "Refine winning paths, automate where it helps, and expand only what has proven unit economics.",
  },
];

export default function HowIWork() {
  return (
    <section className="relative py-20 md:py-28 border-t border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 md:mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="badge mb-4"
          >
            Process
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-heading mb-4"
          >
            How Engagements Typically Run
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="section-subheading mx-auto"
          >
            A simple, repeatable process that keeps strategy and execution
            connected from day one.
          </motion.p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-12 left-[8%] right-[8%] h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{ delay: i * 0.07, duration: 0.5 }}
                  className="relative group"
                >
                  <div className="glass-card p-6 md:p-7 h-full hover:border-accent/40 transition-all duration-300">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="relative flex items-center justify-center w-12 h-12 rounded-full bg-accent/10 border border-accent/30 group-hover:shadow-glow-sm transition-all">
                        <Icon className="w-5 h-5 text-accent-light" />
                        <span className="absolute -top-1.5 -right-1.5 text-[10px] font-bold tracking-wider text-accent-electric bg-background border border-accent/40 rounded-full w-5 h-5 flex items-center justify-center">
                          {step.num.slice(1)}
                        </span>
                      </div>
                      <span className="text-xs font-mono text-foreground-subtle tracking-widest">
                        {step.num}
                      </span>
                    </div>
                    <h3 className="text-lg font-display font-semibold text-foreground mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm text-foreground-muted leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
