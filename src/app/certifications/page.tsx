import type { Metadata } from "next";
import { certifications } from "@/data/mock";
import Badge from "@/components/ui/Badge";

export const metadata: Metadata = {
  title: "Certifications",
  description: "Professional certifications.",
};

export default function CertificationsPage() {
  return (
    <div className="pt-28 pb-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Badge className="mb-4">Certifications</Badge>
        <h1 className="section-heading mb-4">Credentials</h1>
        <p className="section-subheading mb-12">Certifications are managed from Admin. Only verified entries are shown.</p>

        {certifications.length === 0 ? (
          <div className="glass-card p-12 text-center">
            <p className="text-foreground-muted">Certifications will appear here once added from the Admin CMS.</p>
          </div>
        ) : (
          <div className="space-y-4">
            {certifications.map((c) => (
              <div key={c.id} className="glass-card p-6">
                <h2 className="font-semibold">{c.name}</h2>
                <p className="text-sm text-foreground-muted">{c.issuer} \u00b7 {c.issueDate}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
