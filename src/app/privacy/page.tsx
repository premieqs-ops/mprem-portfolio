import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for M Prem portfolio website",
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-24 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-display font-bold mb-6">Privacy Policy</h1>
      <div className="space-y-4 text-foreground-muted leading-relaxed text-sm">
        <p>Last updated: August 2026</p>
        <p>
          This website is a personal portfolio for M Prem. We collect information you voluntarily
          submit through the contact form (such as name, email, and message) solely to respond to
          your inquiry.
        </p>
        <p>
          We do not sell personal data. Form submissions may be stored securely for follow-up.
          Analytics, if enabled, may collect anonymized usage data.
        </p>
        <p>
          For questions about this policy, contact{" "}
          <a href="mailto:premmohan0147@gmail.com" className="text-accent-light hover:underline">
            premmohan0147@gmail.com
          </a>
          .
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
