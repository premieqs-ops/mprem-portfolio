import Hero from "@/components/home/Hero";
import CapabilitiesStrip from "@/components/home/CapabilitiesStrip";
import WhatIDo from "@/components/home/WhatIDo";
import AboutPreview from "@/components/home/AboutPreview";
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
      <AboutPreview />
      <SkillsEcosystem />
      <ExperienceTimeline />
      <FeaturedProject />
      <section className="py-20 border-t border-border">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <h2 className="section-heading mb-4">Insights</h2>
          <p className="text-foreground-muted mb-8">
            Ideas, experiments & insights will appear here once published from
            the Admin CMS.
          </p>
          <a href="/insights" className="text-accent-light font-medium hover:underline">
            View Insights →
          </a>
        </div>
      </section>
      <section className="py-20 bg-background-secondary/30">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <h2 className="section-heading mb-4">Client Feedback</h2>
          <p className="text-foreground-muted">
            Client feedback will appear here. Testimonials are managed from the
            Admin dashboard and only published when verified.
          </p>
        </div>
      </section>
      <ContactCTA />
    </>
  );
}
