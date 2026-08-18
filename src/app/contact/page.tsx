"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Linkedin, Mail, MapPin, Phone, MessageCircle } from "lucide-react";
import Badge from "@/components/ui/Badge";
import { useCMSData } from "@/components/cms/CMSProvider";

const serviceOptions = [
  "Digital Marketing",
  "SEO",
  "Lead Generation",
  "Business Development",
  "Social Media",
  "Website",
  "AI / Automation",
  "Other",
];

export default function ContactPage() {
  const { profile, siteSettings } = useCMSData();
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    budget: "",
    message: "",
  });

  const email = profile.email || siteSettings.contactEmail;
  const linkedin = profile.linkedin || siteSettings.linkedinUrl;
  const phone = profile.phone;
  const whatsapp = profile.whatsapp || siteSettings.whatsappNumber;
  const location = profile.location;

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          company: form.company,
          message: `[${form.service || "General"}] ${form.message}${form.budget ? ` | Budget: ${form.budget}` : ""}`,
          source: "contact",
        }),
      });
      if (res.ok || res.status === 503) {
        setStatus("success");
        setForm({
          name: "",
          email: "",
          phone: "",
          company: "",
          service: "",
          budget: "",
          message: "",
        });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("success");
      setForm({
        name: "",
        email: "",
        phone: "",
        company: "",
        service: "",
        budget: "",
        message: "",
      });
    }
  };

  return (
    <div className="pt-28 pb-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <Badge className="mb-4">Contact</Badge>
            <h1 className="section-heading mb-6">
              Have a Business Challenge?
              <br />
              <span className="text-gradient">Let&apos;s Talk.</span>
            </h1>
            <p className="text-lg text-foreground-muted mb-10 leading-relaxed">
              Whether you need help with digital marketing, lead generation,
              business development or a growth strategy, let&apos;s explore what
              can be built together.
            </p>

            <div className="space-y-6">
              {email && (
                <a
                  href={`mailto:${email}`}
                  className="flex items-center gap-4 text-foreground-muted hover:text-accent-light transition-colors"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/10 border border-accent/20">
                    <Mail className="w-4 h-4 text-accent-light" />
                  </div>
                  {email}
                </a>
              )}
              {phone && (
                <a
                  href={`tel:${phone.replace(/\s/g, "")}`}
                  className="flex items-center gap-4 text-foreground-muted hover:text-accent-light transition-colors"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/10 border border-accent/20">
                    <Phone className="w-4 h-4 text-accent-light" />
                  </div>
                  {phone}
                </a>
              )}
              {whatsapp && (
                <a
                  href={`https://wa.me/${whatsapp.replace(/\D/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-foreground-muted hover:text-accent-light transition-colors"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/10 border border-accent/20">
                    <MessageCircle className="w-4 h-4 text-accent-light" />
                  </div>
                  WhatsApp
                </a>
              )}
              {linkedin && (
                <a
                  href={linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-foreground-muted hover:text-accent-light transition-colors"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/10 border border-accent/20">
                    <Linkedin className="w-4 h-4 text-accent-light" />
                  </div>
                  LinkedIn
                </a>
              )}
              {location && (
                <div className="flex items-center gap-4 text-foreground-muted">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/10 border border-accent/20">
                    <MapPin className="w-4 h-4 text-accent-light" />
                  </div>
                  {location}
                </div>
              )}
            </div>
          </div>

          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="glass-card p-6 md:p-8"
            >
              {status === "success" ? (
                <div className="text-center py-12 space-y-4">
                  <div className="text-4xl">✓</div>
                  <h3 className="text-xl font-display font-semibold">Message sent</h3>
                  <p className="text-foreground-muted text-sm">
                    Thanks for reaching out. I&apos;ll get back to you soon.
                  </p>
                  <button
                    type="button"
                    onClick={() => setStatus("idle")}
                    className="text-sm text-accent-light hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-1.5">Name *</label>
                      <input
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-background border border-border focus:border-accent focus:ring-1 focus:ring-accent outline-none transition"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1.5">Email *</label>
                      <input
                        required
                        type="email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-background border border-border focus:border-accent focus:ring-1 focus:ring-accent outline-none transition"
                        placeholder="you@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-1.5">Phone</label>
                      <input
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-background border border-border focus:border-accent focus:ring-1 focus:ring-accent outline-none transition"
                        placeholder="+91 ..."
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1.5">Company</label>
                      <input
                        value={form.company}
                        onChange={(e) => setForm({ ...form, company: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-background border border-border focus:border-accent focus:ring-1 focus:ring-accent outline-none transition"
                        placeholder="Optional"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-1.5">Service</label>
                      <select
                        value={form.service}
                        onChange={(e) => setForm({ ...form, service: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-background border border-border focus:border-accent focus:ring-1 focus:ring-accent outline-none transition"
                      >
                        <option value="">Select a service</option>
                        {serviceOptions.map((s) => (
                          <option key={s} value={s}>
                            {s}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1.5">Budget</label>
                      <input
                        value={form.budget}
                        onChange={(e) => setForm({ ...form, budget: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-background border border-border focus:border-accent focus:ring-1 focus:ring-accent outline-none transition"
                        placeholder="Optional"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1.5">Message *</label>
                    <textarea
                      required
                      rows={4}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-background border border-border focus:border-accent focus:ring-1 focus:ring-accent outline-none transition resize-none"
                      placeholder="Tell me about your challenge or goal..."
                    />
                  </div>

                  {status === "error" && (
                    <p className="text-sm text-red-400">Something went wrong. Please try again or email me directly.</p>
                  )}

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="btn-primary w-full justify-center disabled:opacity-60"
                  >
                    {status === "loading" ? (
                      "Sending..."
                    ) : (
                      <>
                        Start the Conversation
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
