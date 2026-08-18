import type { Metadata } from "next";
import { experiences } from "@/data/mock";
import Badge from "@/components/ui/Badge";

export const metadata: Metadata = {
  title: "Experience",
  description: "Professional experience of M Prem in digital marketing and business development.",
};

export default function ExperiencePage() {
  return (
    <div className="pt-28 pb-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Badge className="mb-4">Experience</Badge>
        <h1 className="section-heading mb-4">Professional Journey</h1>
        <p className="section-subheading mb-16">Roles focused on digital growth, marketing and business development. Full details are editable from the Admin CMS.</p>

        <div className="relative">
          <div className="absolute left-4 top-0 bottom-0 w-px bg-border" />
          {experiences.map((exp) => (
            <div key={exp.id} className="relative pl-12 pb-12 last:pb-0">
              <div className="absolute left-4 top-2 w-3 h-3 rounded-full bg-accent shadow-glow -translate-x-1.5 border-2 border-background" />
              <div className="glass-card p-6 md:p-8">
                <p className="text-xs text-accent-light font-medium mb-1">
                  {exp.current ? "Present" : exp.endDate || "\u2014"}
                  {exp.startDate ? ` \u00b7 Started ${exp.startDate}` : " \u00b7 Dates managed in Admin"}
                </p>
                <h2 className="text-xl font-display font-semibold">{exp.role}</h2>
                <p className="text-foreground-muted mb-4">{exp.company} \u00b7 {exp.location}</p>
                <p className="text-foreground-subtle mb-4">{exp.description}</p>
                {exp.responsibilities.length > 0 && (
                  <ul className="space-y-2">
                    {exp.responsibilities.map((r, i) => (
                      <li key={i} className="text-sm text-foreground-muted flex gap-2">
                        <span className="text-accent">\u2022</span>{r}
                      </li>
                    ))}
                  </ul>
                )}
                {exp.achievements.length === 0 && (
                  <p className="mt-4 text-xs text-foreground-subtle italic">Achievements can be added from Admin when verified.</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
