"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { profile as mockProfile } from "@/data/mock";

export default function AdminProfilePage() {
  const router = useRouter();
  const [ready, setReady] = useState(false);
  const [form, setForm] = useState(mockProfile);

  useEffect(() => {
    if (!sessionStorage.getItem("admin_session")) router.replace("/admin/login");
    else setReady(true);
  }, [router]);

  if (!ready) return null;

  return (
    <div className="min-h-screen bg-[#0a0e14] text-foreground p-6 md:p-10">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <Link href="/admin" className="text-sm text-accent-light hover:underline">\u2190 Dashboard</Link>
            <h1 className="text-2xl font-display font-bold mt-2">Edit Profile</h1>
          </div>
        </div>

        <div className="rounded-xl border border-border bg-[#11161d] p-6 space-y-5">
          <div>
            <label className="block text-sm mb-1">Name</label>
            <input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full px-4 py-2 rounded-lg bg-background border border-border" />
          </div>
          <div>
            <label className="block text-sm mb-1">Headline</label>
            <input value={form.headline} onChange={(e) => setForm({ ...form, headline: e.target.value })} className="w-full px-4 py-2 rounded-lg bg-background border border-border" />
          </div>
          <div>
            <label className="block text-sm mb-1">Bio</label>
            <textarea rows={6} value={form.bio} onChange={(e) => setForm({ ...form, bio: e.target.value })} className="w-full px-4 py-2 rounded-lg bg-background border border-border resize-none" />
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm mb-1">Email</label>
              <input value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full px-4 py-2 rounded-lg bg-background border border-border" />
            </div>
            <div>
              <label className="block text-sm mb-1">Location</label>
              <input value={form.location} onChange={(e) => setForm({ ...form, location: e.target.value })} className="w-full px-4 py-2 rounded-lg bg-background border border-border" />
            </div>
          </div>
          <div>
            <label className="block text-sm mb-1">LinkedIn URL</label>
            <input value={form.linkedin} onChange={(e) => setForm({ ...form, linkedin: e.target.value })} className="w-full px-4 py-2 rounded-lg bg-background border border-border" />
          </div>
          <div className="pt-4 flex gap-3">
            <button className="btn-primary">Save Changes</button>
            <p className="text-xs text-foreground-subtle self-center">Demo UI \u2014 connect to Supabase to persist.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
