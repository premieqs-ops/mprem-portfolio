import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Terms of use for M Prem portfolio website",
};

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-24 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-display font-bold mb-6">Terms of Use</h1>
      <div className="space-y-4 text-foreground-muted leading-relaxed text-sm">
        <p>Last updated: August 2026</p>
        <p>
          This website is provided for informational and professional portfolio purposes. Content
          is owned by M Prem unless otherwise stated. You may not copy or reuse materials without
          permission.
        </p>
        <p>
          Information on this site is for general purposes and does not constitute professional
          advice. Engagement for services is subject to a separate agreement.
        </p>
        <p>
          Contact{" "}
          <a href="mailto:premmohan0147@gmail.com" className="text-accent-light hover:underline">
            premmohan0147@gmail.com
          </a>{" "}
          for any questions.
        </p>
        <p>
          <Link href="/" className="text-accent-light hover:underline">
            ← Back to home
          </Link>
        </p>
      </div>
    </div>
  );
}
