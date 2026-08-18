import type { Metadata } from "next";
import { projects } from "@/data/mock";
import Badge from "@/components/ui/Badge";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Projects",
  description: "Selected work and projects by M Prem.",
};

export default function ProjectsPage() {
  const published = projects.filter((p) => p.status === "published");

  return (
    <div className="pt-28 pb-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Badge className="mb-4">Projects</Badge>
        <h1 className="section-heading mb-4">Selected Work</h1>
        <p className="section-subheading mb-16">Projects are managed from the Admin CMS. Only published items appear here.</p>

        {published.length === 0 ? (
          <div className="glass-card p-12 text-center">
            <p className="text-foreground-muted text-lg mb-2">Projects are being updated.</p>
            <p className="text-sm text-foreground-subtle">Check back soon. Full project details can be added from the Admin dashboard without touching code.</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-6">
            {published.map((project) => (
              <div key={project.id} className="glass-card p-6">
                <h2 className="text-xl font-display font-semibold mb-2">{project.title}</h2>
                <p className="text-sm text-foreground-muted mb-4">{project.industry}</p>
                <p className="text-foreground-subtle text-sm">{project.objective}</p>
              </div>
            ))}
          </div>
        )}

        <div className="mt-12">
          <Link href="/contact" className="btn-primary">Discuss a Project</Link>
        </div>
      </div>
    </div>
  );
}
