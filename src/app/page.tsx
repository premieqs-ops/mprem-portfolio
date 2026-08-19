import Hero from "@/components/home/Hero";
import CapabilitiesStrip from "@/components/home/CapabilitiesStrip";
import WhatIDo from "@/components/home/WhatIDo";
import ImpactStats from "@/components/home/ImpactStats";
import AboutPreview from "@/components/home/AboutPreview";
import HowIWork from "@/components/home/HowIWork";
import SkillsEcosystem from "@/components/home/SkillsEcosystem";
import ExperienceTimeline from "@/components/home/ExperienceTimeline";
import FeaturedProject from "@/components/home/FeaturedProject";
import ContactCTA from "@/components/home/ContactCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <CapabilitiesStrip />
      <WhatIDo />
      <ImpactStats />
      <AboutPreview />
      <HowIWork />
      <SkillsEcosystem />
      <ExperienceTimeline />
      <FeaturedProject />

      {/* Insights — empty state, CMS-ready */}
      <section className="py-20 md:py-24 border-t border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="badge mb-4 mx-auto w-fit">Insights</p>
          <h2 className="section-heading mb-4">Ideas Worth Shipping</h2>
          <p className="section-subheading mx-auto mb-8">
            Notes on digital marketing, growth systems, and business development
            will appear here as they are published.
          </p>
          <a
            href="/insights"
            className="inline-flex items-center gap-1.5 text-accent-light font-medium hover:underline"
          >
            Browse Insights →
          </a>
        </div>
      </section>

      {/* Testimonials — empty state, no fabricated quotes */}
      <section className="py-20 md:py-24 bg-background-secondary/40 border-t border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="badge mb-4 mx-auto w-fit">Feedback</p>
          <h2 className="section-heading mb-4">Client Perspectives</h2>
          <p className="section-subheading mx-auto">
            Verified client feedback will be published here from the Admin
            dashboard. No placeholder testimonials.
          </p>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
