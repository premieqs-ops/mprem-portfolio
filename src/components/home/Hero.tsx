"use client";

import { useRef, type MouseEvent } from "react";
import Link from "next/link";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Badge from "@/components/ui/Badge";
import { useCMSData } from "@/components/cms/CMSProvider";
import { PROFILE_SUIT } from "@/lib/profileSuit";

const floatingNodes = [
  { label: "SEO", x: "8%", y: "18%" },
  { label: "Google Ads", x: "78%", y: "12%" },
  { label: "Lead Gen", x: "4%", y: "58%" },
  { label: "Analytics", x: "82%", y: "52%" },
  { label: "AI Systems", x: "18%", y: "82%" },
  { label: "Meta Ads", x: "72%", y: "78%" },
  { label: "Pipeline", x: "42%", y: "8%" },
];

export default function Hero() {
  const { profile } = useCMSData();
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 25, stiffness: 150 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  const handleMouseMove = (e: MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    mouseX.set((e.clientX - (rect.left + rect.width / 2)) / 20);
    mouseY.set((e.clientY - (rect.top + rect.height / 2)) / 20);
  };

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex items-center pt-20 overflow-hidden noise"
    >
      <div className="absolute inset-0 bg-hero-glow" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[120px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent-electric/10 rounded-full blur-[100px]" />
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(59,130,246,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.3) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-8">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <Badge>{profile.headline || "Digital Marketing • Business Development • Growth"}</Badge>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-[3.5rem] xl:text-6xl font-display font-bold leading-[1.1] tracking-tight"
            >
              Digital Marketing That <span className="text-gradient">Feeds Pipeline</span> — Not Just Activity.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-foreground-muted max-w-xl leading-relaxed"
            >
              {profile.bio?.split("\n\n")[0] ||
                "From digital marketing and lead generation to business development and growth strategy, I combine creative thinking with practical execution."}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4"
            >
              <Link href="/contact" className="btn-primary group">
                Start a Conversation
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/projects" className="btn-secondary">
                View My Work
              </Link>
            </motion.div>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-foreground-muted hover:text-accent-light transition-colors"
              >
                Connect on LinkedIn
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:flex items-center justify-center"
            style={{ perspective: 1000 }}
          >
            <motion.div
              style={{ x, y }}
              className="relative w-72 h-[22rem] md:w-80 md:h-[26rem] rounded-3xl overflow-hidden glass-card border-accent/20 shadow-glow-lg"
            >
              <img
                src={PROFILE_SUIT}
                alt={profile.name}
                className="absolute inset-0 w-full h-full object-cover object-top"
              />
              {/* Strong bottom fade so name stays readable */}
              <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-black via-black/70 to-transparent pointer-events-none" />
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="absolute bottom-0 left-0 right-0 p-5 md:p-6"
              >
                <p className="text-base md:text-lg font-semibold text-white tracking-wide drop-shadow-lg">
                  {profile.name}
                </p>
                <p className="text-xs md:text-sm text-white/80 mt-0.5 drop-shadow">
                  {profile.location}
                </p>
              </motion.div>
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-accent/30 via-accent-electric/20 to-accent/30 blur-sm -z-10" />
            </motion.div>

            {floatingNodes.map((node, i) => (
              <motion.div
                key={node.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 + i * 0.08, duration: 0.5 }}
                className="absolute"
                style={{ left: node.x, top: node.y }}
              >
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 4 + i * 0.3, repeat: Infinity, ease: "easeInOut" }}
                  whileHover={{ scale: 1.1, zIndex: 20 }}
                  className="px-3 py-1.5 rounded-full glass border-accent/20 text-xs font-medium text-accent-light shadow-glow-sm cursor-default"
                >
                  {node.label}
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
