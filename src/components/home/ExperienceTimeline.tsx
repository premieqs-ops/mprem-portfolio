"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { experiences } from "@/data/mock";
import Badge from "@/components/ui/Badge";

export default function ExperienceTimeline() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="mb-4">Experience</Badge>
          <h2 className="section-heading mb-4">Professional Journey</h2>
          <p className="section-subheading mx-auto">Roles and responsibilities focused on digital growth and business development.</p>
        </div>

        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="relative pl-12 md:pl-0 md:grid md:grid-cols-2 gap-8 mb-12 last:mb-0"
            >
              <div className="absolute left-4 md:left-1/2 top-6 w-3 h-3 rounded-full bg-accent shadow-glow -translate-x-1.5 md:-translate-x-1.5 border-2 border-background" />
              <div className={i % 2 === 0 ? "md:text-right md:pr-12" : "md:col-start-2 md:pl-12"}>
                <div className="glass-card p-6 inline-block text-left w-full md:w-auto min-w-[280px]">
                  <p className="text-xs text-accent-light font-medium mb-1">
                    {exp.current ? "Present" : exp.endDate || "Add dates in Admin"}
                    {exp.startDate && ` · ${exp.startDate}`}
                  </p>
                  <h3 className="text-lg font-display font-semibold">{exp.role}</h3>
                  <p className="text-foreground-muted text-sm mb-3">{exp.company} · {exp.location}</p>
                  <p className="text-sm text-foreground-subtle leading-relaxed">{exp.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/experience" className="inline-flex items-center gap-2 text-accent-light font-medium hover:gap-3 transition-all">
            View full experience <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
