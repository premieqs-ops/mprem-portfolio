"use client";

import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  LayoutDashboard, User, Briefcase, Layers, FolderKanban, FileText,
  Settings, LogOut, Save, Download, Upload, RotateCcw, Plus, Trash2,
  ExternalLink, Check, Sparkles,
} from "lucide-react";
import { useCMS } from "@/components/cms/CMSProvider";
import type { Experience, Service, Skill, Project, CaseStudy } from "@/types";

const TABS = [
  { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
  { id: "profile", label: "Profile", icon: User },
  { id: "services", label: "Services", icon: Layers },
  { id: "experience", label: "Experience", icon: Briefcase },
  { id: "skills", label: "Skills", icon: Sparkles },
  { id: "projects", label: "Projects", icon: FolderKanban },
  { id: "case-studies", label: "Case Studies", icon: FileText },
  { id: "settings", label: "Settings", icon: Settings },
] as const;

type TabId = (typeof TABS)[number]["id"];

const inputCls = () =>
  "w-full px-3 py-2 rounded-lg bg-[#0a0e14] border border-white/10 text-sm text-white placeholder:text-white/30 focus:border-blue-500 focus:outline-none";
const labelCls = () =>
  "block text-xs font-medium text-white/50 mb-1.5 uppercase tracking-wider";

function AdminInner() {
  const router = useRouter();
  const { data, ready, update, save, reset, exportJson, importJson, hasChanges } = useCMS();
  const [tab, setTab] = useState<TabId>("dashboard");
  const [authed, setAuthed] = useState(false);
  const [toast, setToast] = useState("");
  const fileRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!sessionStorage.getItem("admin_session")) router.replace("/admin/login");
    else setAuthed(true);
  }, [router]);

  const showToast = (msg: string) => {
    setToast(msg);
    setTimeout(() => setToast(""), 2500);
  };

  const handleSave = () => {
    try {
      save();
      showToast("Saved — live on this browser");
    } catch (err) {
      console.error(err);
      showToast("Save failed — try again");
    }
  };

  const logout = () => {
    sessionStorage.removeItem("admin_session");
    router.push("/admin/login");
  };

  if (!authed || !ready) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#05070a] text-white/60">
        Loading admin…
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#05070a] text-white flex">
      <aside className="w-56 border-r border-white/10 bg-[#0a0e14] hidden md:flex flex-col shrink-0">
        <div className="p-5 border-b border-white/10">
          <p className="font-bold text-lg tracking-tight">M PREM</p>
          <p className="text-[10px] text-white/40 uppercase tracking-widest mt-0.5">Content CMS</p>
        </div>
        <nav className="flex-1 p-3 space-y-0.5 overflow-y-auto">
          {TABS.map((t) => (
            <button key={t.id} type="button" onClick={() => setTab(t.id)} className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm transition-colors ${
              tab === t.id ? "bg-blue-500/15 text-blue-400 border border-blue-500/20" : "text-white/50 hover:text-white hover:bg-white/5"
            }`}>
              <t.icon className="w-4 h-4 shrink-0" />{t.label}
            </button>
          ))}
        </nav>
        <div className="p-3 border-t border-white/10 space-y-1">
          <Link href="/" target="_blank" className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm text-white/50 hover:text-white hover:bg-white/5">
            <ExternalLink className="w-4 h-4" /> View Site
          </Link>
          <button type="button" onClick={logout} className="w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm text-white/50 hover:text-red-400">
            <LogOut className="w-4 h-4" /> Logout
          </button>
        </div>
      </aside>

      <div className="flex-1 flex flex-col min-w-0">
        <header className="h-14 border-b border-white/10 flex items-center justify-between px-4 md:px-6 bg-[#0a0e14]/80 backdrop-blur sticky top-0 z-30">
          <div className="flex items-center gap-3">
            <select value={tab} onChange={(e) => setTab(e.target.value as TabId)} className="md:hidden bg-[#0a0e14] border border-white/10 rounded-lg px-3 py-1.5 text-sm">
              {TABS.map((t) => (<option key={t.id} value={t.id}>{t.label}</option>))}
            </select>
            <h1 className="hidden md:block font-semibold text-sm">{TABS.find((t) => t.id === tab)?.label}</h1>
            {hasChanges && <span className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-400 border border-amber-500/30">Unsaved</span>}
          </div>
          <div className="flex items-center gap-2">
            <button type="button" onClick={exportJson} className="p-2 rounded-lg text-white/40 hover:text-white hover:bg-white/5" title="Export"><Download className="w-4 h-4" /></button>
            <button type="button" onClick={() => fileRef.current?.click()} className="p-2 rounded-lg text-white/40 hover:text-white hover:bg-white/5" title="Import"><Upload className="w-4 h-4" /></button>
            <input ref={fileRef} type="file" accept=".json" className="hidden" onChange={async (e) => {
              const f = e.target.files?.[0];
              if (f) { await importJson(f); showToast("Imported"); }
            }} />
            <button type="button" onClick={() => { if (confirm("Reset all to defaults?")) { reset(); showToast("Reset done"); } }} className="p-2 rounded-lg text-white/40 hover:text-red-400" title="Reset"><RotateCcw className="w-4 h-4" /></button>
            <button type="button" onClick={handleSave} className={`flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium ${
              hasChanges ? "bg-blue-500 text-white shadow-lg shadow-blue-500/25 hover:bg-blue-400" : "bg-white/10 text-white/50"
            }`}>
              <Save className="w-3.5 h-3.5" /> Save
            </button>
          </div>
        </header>

        {toast && (
          <div className="fixed top-4 right-6 z-50 flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-sm shadow-xl">
            <Check className="w-4 h-4" /> {toast}
          </div>
        )}

        <main className="flex-1 overflow-auto p-4 md:p-6">
          {tab === "dashboard" && (
            <div className="space-y-6 max-w-4xl">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {[
                  ["Services", data.services.length], ["Experience", data.experiences.length],
                  ["Skills", data.skills.length], ["Projects", data.projects.length],
                  ["Case Studies", data.caseStudies.length], ["Articles", data.articles.length],
                  ["Testimonials", data.testimonials.length], ["Certifications", data.certifications.length],
                ].map(([label, value]) => (
                  <div key={String(label)} className="rounded-xl border border-white/10 bg-[#0a0e14] p-4">
                    <p className="text-2xl font-bold">{value}</p>
                    <p className="text-xs text-white/40 mt-1">{label}</p>
                  </div>
                ))}
              </div>
              <div className="rounded-xl border border-white/10 bg-[#0a0e14] p-5 space-y-3 text-sm text-white/50">
                <h2 className="font-semibold text-white">How to use</h2>
                <p>1. Edit any section from the sidebar</p>
                <p>2. Click <strong className="text-white">Save</strong></p>
                <p>3. Open the public site in the <strong className="text-white">same browser</strong> — updates show immediately</p>
                <p>4. Use Export/Import to backup or move data</p>
                <Link href="/" target="_blank" className="inline-flex items-center gap-2 text-blue-400 hover:underline pt-2">
                  Open public site <ExternalLink className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          )}

          {tab === "profile" && (
            <div className="max-w-2xl rounded-xl border border-white/10 bg-[#0a0e14] p-5 space-y-4">
              {([
                ["name", "Name"], ["headline", "Headline"], ["email", "Email"],
                ["phone", "Phone"], ["location", "Location"], ["linkedin", "LinkedIn URL"], ["whatsapp", "WhatsApp"],
              ] as const).map(([key, label]) => (
                <div key={key}>
                  <label className={labelCls()}>{label}</label>
                  <input className={inputCls()} value={String(data.profile[key] ?? "")} onChange={(e) => update({ profile: { ...data.profile, [key]: e.target.value } })} />
                </div>
              ))}
              <div>
                <label className={labelCls()}>Bio</label>
                <textarea rows={6} className={inputCls()} value={data.profile.bio} onChange={(e) => update({ profile: { ...data.profile, bio: e.target.value } })} />
              </div>
              <div>
                <label className={labelCls()}>Currently exploring (comma separated)</label>
                <input className={inputCls()} value={data.profile.currentlyExploring.join(", ")} onChange={(e) => update({ profile: { ...data.profile, currentlyExploring: e.target.value.split(",").map((s) => s.trim()).filter(Boolean) } })} />
              </div>
            </div>
          )}

          {tab === "services" && (
            <div className="max-w-3xl space-y-4">
              {data.services.map((svc, idx) => (
                <div key={svc.id} className="rounded-xl border border-white/10 bg-[#0a0e14] p-5 space-y-3">
                  <div className="flex justify-between"><span className="text-xs text-white/30">#{idx + 1}</span>
                    <button type="button" onClick={() => update({ services: data.services.filter((s) => s.id !== svc.id) })} className="text-white/30 hover:text-red-400"><Trash2 className="w-4 h-4" /></button>
                  </div>
                  <input className={inputCls()} value={svc.title} placeholder="Title" onChange={(e) => update({ services: data.services.map((s) => s.id === svc.id ? { ...s, title: e.target.value } : s) })} />
                  <textarea rows={2} className={inputCls()} value={svc.description} placeholder="Description" onChange={(e) => update({ services: data.services.map((s) => s.id === svc.id ? { ...s, description: e.target.value } : s) })} />
                  <textarea rows={2} className={inputCls()} value={svc.longDescription} placeholder="Long description" onChange={(e) => update({ services: data.services.map((s) => s.id === svc.id ? { ...s, longDescription: e.target.value } : s) })} />
                </div>
              ))}
              <button type="button" onClick={() => {
                const id = String(Date.now());
                update({ services: [...data.services, { id, title: "New Service", slug: `service-${id}`, description: "", longDescription: "", icon: "Megaphone", order: data.services.length + 1, status: "published" as const }] });
              }} className="flex items-center gap-2 px-4 py-2 rounded-lg border border-dashed border-white/20 text-sm text-white/50 hover:text-white"><Plus className="w-4 h-4" /> Add service</button>
            </div>
          )}

          {tab === "experience" && (
            <div className="max-w-3xl space-y-4">
              {data.experiences.map((exp, idx) => (
                <div key={exp.id} className="rounded-xl border border-white/10 bg-[#0a0e14] p-5 space-y-3">
                  <div className="flex justify-between"><span className="text-xs text-white/30">#{idx + 1}</span>
                    <button type="button" onClick={() => update({ experiences: data.experiences.filter((e) => e.id !== exp.id) })} className="text-white/30 hover:text-red-400"><Trash2 className="w-4 h-4" /></button>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-3">
                    <input className={inputCls()} value={exp.role} placeholder="Role" onChange={(e) => update({ experiences: data.experiences.map((x) => x.id === exp.id ? { ...x, role: e.target.value } : x) })} />
                    <input className={inputCls()} value={exp.company} placeholder="Company" onChange={(e) => update({ experiences: data.experiences.map((x) => x.id === exp.id ? { ...x, company: e.target.value } : x) })} />
                  </div>
                  <input className={inputCls()} value={exp.location} placeholder="Location" onChange={(e) => update({ experiences: data.experiences.map((x) => x.id === exp.id ? { ...x, location: e.target.value } : x) })} />
                  <textarea rows={3} className={inputCls()} value={exp.description} placeholder="Description" onChange={(e) => update({ experiences: data.experiences.map((x) => x.id === exp.id ? { ...x, description: e.target.value } : x) })} />
                  <textarea rows={3} className={inputCls()} value={exp.responsibilities.join("\n")} placeholder="Responsibilities (one per line)" onChange={(e) => update({ experiences: data.experiences.map((x) => x.id === exp.id ? { ...x, responsibilities: e.target.value.split("\n").map((s) => s.trim()).filter(Boolean) } : x) })} />
                  <label className="flex items-center gap-2 text-sm text-white/50">
                    <input type="checkbox" checked={exp.current} onChange={(e) => update({ experiences: data.experiences.map((x) => x.id === exp.id ? { ...x, current: e.target.checked } : x) })} /> Current role
                  </label>
                </div>
              ))}
              <button type="button" onClick={() => {
                const id = String(Date.now());
                update({ experiences: [...data.experiences, { id, company: "Company", role: "Role", location: "Chennai", startDate: "", endDate: null, current: true, description: "", responsibilities: [], achievements: [], logo: null, status: "published" as const, order: data.experiences.length + 1 }] });
              }} className="flex items-center gap-2 px-4 py-2 rounded-lg border border-dashed border-white/20 text-sm text-white/50 hover:text-white"><Plus className="w-4 h-4" /> Add experience</button>
            </div>
          )}

          {tab === "skills" && (
            <div className="max-w-3xl space-y-3">
              <div className="grid sm:grid-cols-2 gap-3">
                {data.skills.map((sk) => (
                  <div key={sk.id} className="rounded-xl border border-white/10 bg-[#0a0e14] p-4 space-y-2">
                    <div className="flex gap-2">
                      <input className={inputCls()} value={sk.name} onChange={(e) => update({ skills: data.skills.map((s) => s.id === sk.id ? { ...s, name: e.target.value } : s) })} />
                      <button type="button" onClick={() => update({ skills: data.skills.filter((s) => s.id !== sk.id) })} className="text-white/30 hover:text-red-400"><Trash2 className="w-4 h-4" /></button>
                    </div>
                    <input className={inputCls()} value={sk.category} placeholder="Category" onChange={(e) => update({ skills: data.skills.map((s) => s.id === sk.id ? { ...s, category: e.target.value } : s) })} />
                    <textarea rows={2} className={inputCls()} value={sk.description} placeholder="Description" onChange={(e) => update({ skills: data.skills.map((s) => s.id === sk.id ? { ...s, description: e.target.value } : s) })} />
                  </div>
                ))}
              </div>
              <button type="button" onClick={() => {
                const id = String(Date.now());
                update({ skills: [...data.skills, { id, name: "New Skill", category: "Core", description: "", relatedServices: [], relatedTools: [], order: data.skills.length + 1, status: "published" as const }] });
              }} className="flex items-center gap-2 px-4 py-2 rounded-lg border border-dashed border-white/20 text-sm text-white/50"><Plus className="w-4 h-4" /> Add skill</button>
            </div>
          )}

          {tab === "projects" && (
            <div className="max-w-3xl space-y-4">
              {data.projects.map((p) => (
                <div key={p.id} className="rounded-xl border border-white/10 bg-[#0a0e14] p-5 space-y-3">
                  <div className="flex gap-2">
                    <input className={inputCls()} value={p.title} onChange={(e) => update({ projects: data.projects.map((x) => x.id === p.id ? { ...x, title: e.target.value } : x) })} />
                    <button type="button" onClick={() => update({ projects: data.projects.filter((x) => x.id !== p.id) })} className="text-white/30 hover:text-red-400"><Trash2 className="w-4 h-4" /></button>
                  </div>
                  <select className={inputCls()} value={p.status} onChange={(e) => update({ projects: data.projects.map((x) => x.id === p.id ? { ...x, status: e.target.value as Project["status"] } : x) })}>
                    <option value="draft">Draft</option><option value="published">Published</option><option value="archived">Archived</option>
                  </select>
                  <textarea rows={2} className={inputCls()} value={p.objective} placeholder="Objective" onChange={(e) => update({ projects: data.projects.map((x) => x.id === p.id ? { ...x, objective: e.target.value } : x) })} />
                  <textarea rows={2} className={inputCls()} value={p.challenge} placeholder="Challenge" onChange={(e) => update({ projects: data.projects.map((x) => x.id === p.id ? { ...x, challenge: e.target.value } : x) })} />
                  <textarea rows={2} className={inputCls()} value={p.solution} placeholder="Solution" onChange={(e) => update({ projects: data.projects.map((x) => x.id === p.id ? { ...x, solution: e.target.value } : x) })} />
                  <textarea rows={2} className={inputCls()} value={p.outcome} placeholder="Outcome" onChange={(e) => update({ projects: data.projects.map((x) => x.id === p.id ? { ...x, outcome: e.target.value } : x) })} />
                </div>
              ))}
              <button type="button" onClick={() => {
                const id = String(Date.now());
                update({ projects: [...data.projects, { id, title: "New Project", slug: `project-${id}`, industry: "", objective: "", services: [], challenge: "", solution: "", outcome: "", tools: [], image: null, liveUrl: null, featured: false, status: "draft" as const, order: data.projects.length + 1 }] });
              }} className="flex items-center gap-2 px-4 py-2 rounded-lg border border-dashed border-white/20 text-sm text-white/50"><Plus className="w-4 h-4" /> Add project</button>
            </div>
          )}

          {tab === "case-studies" && (
            <div className="max-w-3xl space-y-4">
              {data.caseStudies.map((cs) => (
                <div key={cs.id} className="rounded-xl border border-white/10 bg-[#0a0e14] p-5 space-y-3">
                  <div className="flex gap-2">
                    <input className={inputCls()} value={cs.title} onChange={(e) => update({ caseStudies: data.caseStudies.map((x) => x.id === cs.id ? { ...x, title: e.target.value } : x) })} />
                    <button type="button" onClick={() => update({ caseStudies: data.caseStudies.filter((x) => x.id !== cs.id) })} className="text-white/30 hover:text-red-400"><Trash2 className="w-4 h-4" /></button>
                  </div>
                  {(["challenge", "strategy", "execution", "result", "learnings"] as const).map((field) => (
                    <textarea key={field} rows={2} className={inputCls()} value={cs[field]} placeholder={field} onChange={(e) => update({ caseStudies: data.caseStudies.map((x) => x.id === cs.id ? { ...x, [field]: e.target.value } : x) })} />
                  ))}
                  <select className={inputCls()} value={cs.status} onChange={(e) => update({ caseStudies: data.caseStudies.map((x) => x.id === cs.id ? { ...x, status: e.target.value as CaseStudy["status"] } : x) })}>
                    <option value="draft">Draft</option><option value="published">Published</option><option value="archived">Archived</option>
                  </select>
                </div>
              ))}
              <button type="button" onClick={() => {
                const id = String(Date.now());
                update({ caseStudies: [...data.caseStudies, { id, title: "New Case Study", slug: `case-${id}`, challenge: "", strategy: "", execution: "", result: "", learnings: "", tools: [], metrics: [], image: null, featured: false, status: "draft" as const }] });
              }} className="flex items-center gap-2 px-4 py-2 rounded-lg border border-dashed border-white/20 text-sm text-white/50"><Plus className="w-4 h-4" /> Add case study</button>
            </div>
          )}

          {tab === "settings" && (
            <div className="max-w-2xl rounded-xl border border-white/10 bg-[#0a0e14] p-5 space-y-4">
              <div><label className={labelCls()}>Site title</label>
                <input className={inputCls()} value={data.siteSettings.siteTitle} onChange={(e) => update({ siteSettings: { ...data.siteSettings, siteTitle: e.target.value } })} /></div>
              <div><label className={labelCls()}>Site description</label>
                <textarea rows={3} className={inputCls()} value={data.siteSettings.siteDescription} onChange={(e) => update({ siteSettings: { ...data.siteSettings, siteDescription: e.target.value } })} /></div>
              <div><label className={labelCls()}>Contact email</label>
                <input className={inputCls()} value={data.siteSettings.contactEmail} onChange={(e) => update({ siteSettings: { ...data.siteSettings, contactEmail: e.target.value } })} /></div>
              <div><label className={labelCls()}>WhatsApp number</label>
                <input className={inputCls()} value={data.siteSettings.whatsappNumber} onChange={(e) => update({ siteSettings: { ...data.siteSettings, whatsappNumber: e.target.value } })} /></div>
              <div><label className={labelCls()}>LinkedIn URL</label>
                <input className={inputCls()} value={data.siteSettings.linkedinUrl} onChange={(e) => update({ siteSettings: { ...data.siteSettings, linkedinUrl: e.target.value } })} /></div>
              <div><label className={labelCls()}>Capabilities (comma separated)</label>
                <input className={inputCls()} value={data.capabilities.join(", ")} onChange={(e) => update({ capabilities: e.target.value.split(",").map((s) => s.trim()).filter(Boolean) })} /></div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

export default function AdminPage() {
  return <AdminInner />;
}
