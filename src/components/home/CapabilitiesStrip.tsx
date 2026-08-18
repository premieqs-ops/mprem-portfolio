"use client";

import { capabilities } from "@/data/mock";

export default function CapabilitiesStrip() {
  const items = [...capabilities, ...capabilities];

  return (
    <section className="relative py-8 border-y border-border overflow-hidden bg-background-secondary/50">
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />

      <div className="flex animate-marquee whitespace-nowrap">
        {items.map((item, i) => (
          <div key={`${item}-${i}`} className="inline-flex items-center mx-6 md:mx-10">
            <span className="text-sm md:text-base font-medium text-foreground-muted tracking-wide">
              {item}
            </span>
            <span className="ml-6 md:ml-10 h-1 w-1 rounded-full bg-accent/60" />
          </div>
        ))}
      </div>
    </section>
  );
}
