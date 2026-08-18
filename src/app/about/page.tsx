import type { Metadata } from "next";
import { profile, experiences } from "@/data/mock";
import Badge from "@/components/ui/Badge";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about M Prem \u2014 Digital Marketing & Business Growth Professional based in Chennai.",
};

export default function AboutPage() {
  return (
    <div className="pt-28 pb-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <Badge className="mb-4">About M Prem</Badge>
          <h1 className="section-heading mb-6">
            More Than Marketing.<br />
            <span className="text-gradient">It&apos;s About Growth.</span>
          </h1>
          <div className="space-y-4 text-lg text-foreground-muted leading-relaxed">
            {profile.bio.split("\n\n").map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div>
            <h2 className="text-xl font-display font-semibold mb-4">Currently Exploring</h2>
            <div className="flex flex-wrap gap-2">
              {profile.currentlyExploring.map((item) => (
                <span key={item} className="px-3 py-1.5 text-sm rounded-full border border-border bg-background-card text-foreground-muted">{item}</span>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-xl font-display font-semibold mb-4">Location</h2>
            <p className="text-foreground-muted">{profile.location}</p>
            <p className="mt-4 text-sm text-foreground-subtle">Education and detailed timeline can be updated from the Admin CMS. Publicly available: DMI College of Engineering (2021\u20132023).</p>
          </div>
        </div>

        <div className="glass-card p-8 md:p-10">
          <h2 className="text-2xl font-display font-semibold mb-6">Current Role</h2>
          {experiences.map((exp) => (
            <div key={exp.id}>
              <h3 className="text-lg font-medium">{exp.role}</h3>
              <p className="text-foreground-muted">{exp.company} \u00b7 {exp.location}</p>
              <p className="mt-3 text-foreground-subtle">{exp.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex gap-4">
          <Link href="/contact" className="btn-primary">Let&apos;s Connect <ArrowRight className="w-4 h-4" /></Link>
          <Link href="/experience" className="btn-secondary">Full Experience</Link>
        </div>
      </div>
    </div>
  );
}
