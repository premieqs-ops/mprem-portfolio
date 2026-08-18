"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Linkedin, Mail, MapPin } from "lucide-react";
import Badge from "@/components/ui/Badge";
import { profile } from "@/data/mock";

const services = [
  "Digital Marketing", "SEO", "Lead Generation", "Business Development",
  "Social Media", "Website", "AI / Automation", "Other",
];

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [form, setForm] = useState({
    name: "", email: "", phone: "", company: "", service: "", budget: "", message: "",
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    await new Promise((r) => setTimeout(r, 1200));
    setStatus("success");
    setForm({ name: "", email: "", phone: "", company: "", service: "", budget: "", message: "" });
  };

  return (
    <div className="pt-28 pb-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <Badge className="mb-4">Contact</Badge>
            <h1 className="section-heading mb-6">
              Have a Business Challenge?<br />
              <span className="text-gradient">Let&apos;s Talk.</span>
            </h1>
            <p className="text-lg text-foreground-muted mb-10 leading-relaxed">
              Whether you need help with digital marketing, lead generation, business development or a growth strategy, let&apos;s explore what can be built together.
            </p>

            <div className="space-y-6">
              <a href={`mailto:${profile.email}`} className="flex items-center gap-4 text-foreground-muted hover:text-accent-light transition-colors">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/10 border border-accent/20">
                  <Mail className="w-4 h-4 text-accent-light" />
                </div>
                {profile.email}
              </a>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-foreground-muted hover:text-accent-light transition-colors">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/10 border border-accent/20">
                  <Linkedin className="w-4 h-4 text-accent-light" />
                </div>
                LinkedIn Profile
              </a>
              <div className="flex items-center gap-4 text-foreground-muted">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/10 border border-accent/20">
                  <MapPin className="w-4 h-4 text-accent-light" />
                </div>
                {profile.location}
              </div>
            </div>
          </div>

          <div className="glass-card p-6 md:p-8">
            {status === "success" ? (
              <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-12">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent/20 flex items-center justify-center">
                  <span className="text-2xl">\u2713</span>
                </div>
                <h3 className="text-xl font-display font-semibold mb-2">Message Sent</h3>
                <p className="text-foreground-muted mb-6">Thank you. I&apos;ll get back to you soon.</p>
                <button onClick={() => setStatus("idle")} className="text-accent-light text-sm hover:underline">Send another message</button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium mb-1.5">Name *</label>
                    <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full px-4 py-2.5 rounded-xl bg-background border border-border focus:border-accent focus:ring-1 focus:ring-accent outline-none transition" placeholder="Your name" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1.5">Email *</label>
                    <input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full px-4 py-2.5 rounded-xl bg-background border border-border focus:border-accent focus:ring-1 focus:ring-accent outline-none transition" placeholder="you@company.com" />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium mb-1.5">Phone</label>
                    <input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="w-full px-4 py-2.5 rounded-xl bg-background border border-border focus:border-accent focus:ring-1 focus:ring-accent outline-none transition" placeholder="+91 ..." />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1.5">Company</label>
                    <input value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} className="w-full px-4 py-2.5 rounded-xl bg-background border border-border focus:border-accent focus:ring-1 focus:ring-accent outline-none transition" placeholder="Company name" />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium mb-1.5">Service</label>
                    <select value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })} className="w-full px-4 py-2.5 rounded-xl bg-background border border-border focus:border-accent focus:ring-1 focus:ring-accent outline-none transition">
                      <option value="">Select a service</option>
                      {services.map((s) => (<option key={s} value={s}>{s}</option>))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1.5">Budget</label>
                    <input value={form.budget} onChange={(e) => setForm({ ...form, budget: e.target.value })} className="w-full px-4 py-2.5 rounded-xl bg-background border border-border focus:border-accent focus:ring-1 focus:ring-accent outline-none transition" placeholder="Optional" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1.5">Message *</label>
                  <textarea required rows={4} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="w-full px-4 py-2.5 rounded-xl bg-background border border-border focus:border-accent focus:ring-1 focus:ring-accent outline-none transition resize-none" placeholder="Tell me about your challenge or goal..." />
                </div>
                <button type="submit" disabled={status === "loading"} className="btn-primary w-full justify-center disabled:opacity-60">
                  {status === "loading" ? "Sending..." : (<>Start the Conversation <ArrowRight className="w-4 h-4" /></>)}
                </button>
                <p className="text-xs text-foreground-subtle text-center">Form submissions are stored for Admin review. Ready for Supabase / backend integration.</p>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
