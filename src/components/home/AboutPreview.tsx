"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Badge from "@/components/ui/Badge";
import { useCMSData } from "@/components/cms/CMSProvider";
import { PROFILE_ABOUT } from "@/lib/profileImages";

export default function AboutPreview() {
  const { profile } = useCMSData();
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-accent/5 to-transparent pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] max-w-md mx-auto lg:mx-0 rounded-3xl overflow-hidden glass-card border-accent/20">
              <img
                src={PROFILE_ABOUT}
                alt="M Prem"
                className="absolute inset-0 w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
            </div>
            {/* Decorative */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-2xl border border-accent/20 bg-accent/5 -z-10" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <Badge>About</Badge>
            <h2 className="section-heading">
              Strategy Without Execution
              <br />
              <span className="text-gradient">Is Just Theory.</span>
            </h2>
            <div className="space-y-4 text-foreground-muted leading-relaxed">
              {profile.bio.split("\n\n").map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>

            <div>
              <p className="text-sm font-medium text-foreground-subtle mb-3 uppercase tracking-wider">
                Currently Exploring
              </p>
              <div className="flex flex-wrap gap-2">
                {profile.currentlyExploring.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1.5 text-xs rounded-full border border-border bg-background-tertiary text-foreground-muted"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-accent-light font-medium hover:gap-3 transition-all"
            >
              Learn more about me
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
