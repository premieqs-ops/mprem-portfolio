"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  LayoutDashboard, User, Briefcase, Layers, FolderKanban, FileText,
  MessageSquare, Award, Image, Users, Settings, Search, BarChart3, LogOut,
} from "lucide-react";
import {
  experiences, services, projects, articles, testimonials, caseStudies,
} from "@/data/mock";

const sidebarItems = [
  { href: "/admin", label: "Dashboard", icon: LayoutDashboard },
  { href: "/admin/profile", label: "Profile", icon: User },
  { href: "/admin/experience", label: "Experience", icon: Briefcase },
  { href: "/admin/services", label: "Services", icon: Layers },
  { href: "/admin/projects", label: "Projects", icon: FolderKanban },
  { href: "/admin/case-studies", label: "Case Studies", icon: FolderKanban },
  { href: "/admin/articles", label: "Articles", icon: FileText },
  { href: "/admin/testimonials", label: "Testimonials", icon: MessageSquare },
  { href: "/admin/certifications", label: "Certifications", icon: Award },
  { href: "/admin/media", label: "Media", icon: Image },
  { href: "/admin/leads", label: "Leads", icon: Users },
  { href: "/admin/seo", label: "SEO", icon: Search },
  { href: "/admin/analytics", label: "Analytics", icon: BarChart3 },
  { href: "/admin/settings", label: "Settings", icon: Settings },
];

export default function AdminDashboard() {
  const router = useRouter();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const session = sessionStorage.getItem("admin_session");
    if (!session) router.replace("/admin/login");
    else setReady(true);
  }, [router]);

  if (!ready) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0a0e14]">
        <p className="text-foreground-muted">Checking session...</p>
      </div>
    );
  }

  const stats = [
    { label: "Published Projects", value: projects.filter((p) => p.status === "published").length },
    { label: "Draft Projects", value: projects.filter((p) => p.status === "draft").length },
    { label: "Articles", value: articles.length },
    { label: "Testimonials", value: testimonials.length },
    { label: "Experience Entries", value: experiences.length },
    { label: "Services", value: services.length },
    { label: "Case Studies", value: caseStudies.length },
    { label: "Leads", value: 0 },
  ];

  const logout = () => {
    sessionStorage.removeItem("admin_session");
    router.push("/admin/login");
  };

  return (
    <div className="min-h-screen bg-[#0a0e14] text-foreground flex">
      <aside className="w-64 border-r border-border bg-[#05070a] hidden lg:flex flex-col">
        <div className="p-6 border-b border-border">
          <p className="font-display font-bold text-lg">M PREM</p>
          <p className="text-xs text-foreground-subtle">Admin CMS</p>
        </div>
        <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
          {sidebarItems.map((item) => (
            <Link key={item.href} href={item.href} className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-foreground-muted hover:bg-white/5 hover:text-foreground transition-colors">
              <item.icon className="w-4 h-4" />{item.label}
            </Link>
          ))}
        </nav>
        <div className="p-4 border-t border-border">
          <button onClick={logout} className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-foreground-muted hover:text-red-400 w-full">
            <LogOut className="w-4 h-4" />Logout
          </button>
        </div>
      </aside>

      <div className="flex-1 flex flex-col">
        <header className="h-16 border-b border-border flex items-center justify-between px-6 bg-[#05070a]/50">
          <h1 className="font-display font-semibold">Dashboard</h1>
          <div className="flex items-center gap-4">
            <span className="text-xs text-foreground-subtle">Development mode \u00b7 Connect Supabase for production</span>
            <button onClick={logout} className="lg:hidden text-sm text-foreground-muted">Logout</button>
          </div>
        </header>

        <main className="flex-1 p-6 md:p-8 overflow-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            {stats.map((s) => (
              <div key={s.label} className="rounded-xl border border-border bg-[#11161d] p-5">
                <p className="text-2xl font-display font-bold">{s.value}</p>
                <p className="text-sm text-foreground-muted mt-1">{s.label}</p>
              </div>
            ))}
          </div>

          <div className="rounded-xl border border-border bg-[#11161d] p-6">
            <h2 className="font-display font-semibold mb-4">Content Architecture Ready</h2>
            <ul className="space-y-2 text-sm text-foreground-muted">
              <li>\u2022 Profile, Experience, Services, Skills, Projects, Case Studies</li>
              <li>\u2022 Articles, Testimonials, Certifications</li>
              <li>\u2022 Media library, Leads, SEO settings, Site settings</li>
              <li>\u2022 Draft / Published / Archived status support</li>
              <li>\u2022 Ready for Supabase tables + Auth + Storage</li>
            </ul>
            <p className="mt-6 text-xs text-foreground-subtle">
              All public content is currently driven by mock data in <code className="text-accent-light">src/data/mock.ts</code>.
            </p>
          </div>

          <div className="mt-8 grid sm:grid-cols-2 gap-4">
            <Link href="/" className="rounded-xl border border-border p-5 hover:border-accent/40 transition-colors">
              <p className="font-medium">View Public Site \u2192</p>
              <p className="text-sm text-foreground-muted mt-1">Open the live portfolio experience</p>
            </Link>
            <Link href="/admin/profile" className="rounded-xl border border-border p-5 hover:border-accent/40 transition-colors">
              <p className="font-medium">Edit Profile \u2192</p>
              <p className="text-sm text-foreground-muted mt-1">Update name, bio, contact & photo</p>
            </Link>
          </div>
        </main>
      </div>
    </div>
  );
}
