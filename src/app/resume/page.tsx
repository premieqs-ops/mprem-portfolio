import type { Metadata } from "next";
import Badge from "@/components/ui/Badge";
import Link from "next/link";
import { profile } from "@/data/mock";
import { Download, Eye } from "lucide-react";

export const metadata: Metadata = {
  title: "Resume",
  description: "Download or view the resume of M Prem.",
};

export default function ResumePage() {
  return (
    <div className="pt-28 pb-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
        <Badge className="mb-4">Resume</Badge>
        <h1 className="section-heading mb-4">Experience That Connects Strategy With Execution.</h1>
        <p className="section-subheading mx-auto mb-12">Resume is replaceable from the Admin dashboard. Upload a new PDF anytime without code changes.</p>

        {profile.resumeUrl ? (
          <div className="flex flex-wrap justify-center gap-4">
            <a href={profile.resumeUrl} download className="btn-primary"><Download className="w-4 h-4" /> Download Resume</a>
            <a href={profile.resumeUrl} target="_blank" rel="noopener noreferrer" className="btn-secondary"><Eye className="w-4 h-4" /> View Resume</a>
          </div>
        ) : (
          <div className="glass-card p-10">
            <p className="text-foreground-muted mb-4">Resume PDF has not been uploaded yet.</p>
            <p className="text-sm text-foreground-subtle">Go to Admin \u2192 Profile \u2192 Upload Resume to add your latest version.</p>
          </div>
        )}

        <div className="mt-12">
          <Link href="/contact" className="text-accent-light hover:underline">Or start a conversation \u2192</Link>
        </div>
      </div>
    </div>
  );
}
