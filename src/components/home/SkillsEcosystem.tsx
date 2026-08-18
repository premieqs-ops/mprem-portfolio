"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useCMSData } from "@/components/cms/CMSProvider";
import { cn } from "@/lib/utils";
import Badge from "@/components/ui/Badge";

export default function SkillsEcosystem() {
  const { skills } = useCMSData();
  const [active, setActive] = useState<string | null>(null);
  const activeSkill = skills.find((s) => s.id === active);

  return (
    <section className="relative py-24 md:py-32 bg-background-secondary/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="mb-4">Skills</Badge>
          <h2 className="section-heading mb-4">Skill Ecosystem</h2>
          <p className="section-subheading mx-auto">An interconnected set of capabilities. Click any skill to explore.</p>
        </div>
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-12">
          {skills.map((skill, i) => (
            <motion.button key={skill.id} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.04 }} onClick={() => setActive(active === skill.id ? null : skill.id)} className={cn("px-4 py-2.5 rounded-full text-sm font-medium border transition-all duration-300", active === skill.id ? "bg-accent/20 border-accent text-accent-light shadow-glow-sm" : "bg-background-card border-border text-foreground-muted hover:border-accent/40 hover:text-foreground")}>
              {skill.name}
            </motion.button>
          ))}
        </div>
        <AnimatePresence mode="wait">
          {activeSkill && (
            <motion.div key={activeSkill.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3 }} className="max-w-2xl mx-auto glass-card p-6 md:p-8">
              <h3 className="text-xl font-display font-semibold mb-2">{activeSkill.name}</h3>
              <p className="text-foreground-muted mb-4">{activeSkill.description}</p>
              {activeSkill.relatedTools.length > 0 && (
                <div>
                  <p className="text-xs uppercase tracking-wider text-foreground-subtle mb-2">Related tools</p>
                  <div className="flex flex-wrap gap-2">
                    {activeSkill.relatedTools.map((tool) => (
                      <span key={tool} className="px-2.5 py-1 text-xs rounded-md bg-accent/10 text-accent-light border border-accent/20">{tool}</span>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
