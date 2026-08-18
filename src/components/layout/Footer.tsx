import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { profile } from "@/data/mock";

const footerLinks = {
  navigate: [
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/experience", label: "Experience" },
    { href: "/projects", label: "Projects" },
    { href: "/insights", label: "Insights" },
  ],
  services: [
    { href: "/services#digital-marketing", label: "Digital Marketing" },
    { href: "/services#seo", label: "SEO" },
    { href: "/services#lead-generation", label: "Lead Generation" },
    { href: "/services#business-development", label: "Business Development" },
  ],
  connect: [
    { href: "/contact", label: "Contact" },
    { href: "/resume", label: "Resume" },
    { href: profile.linkedin, label: "LinkedIn", external: true },
  ],
};

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-border bg-background-secondary">
      <div className="absolute inset-0 bg-hero-glow opacity-30 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          <div className="lg:col-span-1">
            <Link href="/" className="font-display text-2xl font-bold tracking-tight">
              M PREM
            </Link>
            <p className="mt-4 text-sm text-foreground-muted leading-relaxed max-w-xs">
              Digital Marketing • Business Development • Growth
            </p>
            <p className="mt-6 text-sm text-foreground-subtle">{profile.location}</p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground-muted mb-4">Navigate</h4>
            <ul className="space-y-3">
              {footerLinks.navigate.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-foreground-muted hover:text-accent-light transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground-muted mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-foreground-muted hover:text-accent-light transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground-muted mb-4">Connect</h4>
            <ul className="space-y-3">
              {footerLinks.connect.map((link) => (
                <li key={link.href}>
                  {"external" in link && link.external ? (
                    <a href={link.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-sm text-foreground-muted hover:text-accent-light transition-colors">
                      {link.label}
                      <ArrowUpRight className="w-3 h-3" />
                    </a>
                  ) : (
                    <Link href={link.href} className="text-sm text-foreground-muted hover:text-accent-light transition-colors">
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Link href="/contact" className="btn-primary text-sm px-5 py-2.5">
                Start a Conversation
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-foreground-subtle">© {year} M Prem. All rights reserved.</p>
          <div className="flex items-center gap-6 text-sm text-foreground-subtle">
            <Link href="/privacy" className="hover:text-foreground-muted transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-foreground-muted transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
