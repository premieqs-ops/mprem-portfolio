"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Linkedin, Mail } from "lucide-react";
import { useCMSData } from "@/components/cms/CMSProvider";

export default function ContactCTA() {
  const { profile } = useCMSData();
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-hero-glow opacity-50" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[150px]" />

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <h2 className="section-heading">
            Ready to Connect Marketing to Growth?
            <br />
            <span className="text-gradient">Let&apos;s Talk.</span>
          </h2>
          <p className="section-subheading mx-auto">
            Whether you need a sharper digital strategy, stronger lead systems,
            or clearer alignment between marketing and business development —
            let&apos;s explore what can be built.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/contact" className="btn-primary group">
              Start the Conversation
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </a>
          </div>

          <p className="text-sm text-foreground-subtle flex items-center justify-center gap-2">
            <Mail className="w-4 h-4" />
            {profile.email}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
