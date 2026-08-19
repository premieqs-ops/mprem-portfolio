import type {
  Profile,
  Experience,
  Service,
  Skill,
  Project,
  CaseStudy,
  SiteSettings,
  Article,
  Certification,
  Testimonial,
  NewsItem,
} from "@/types";
import {
  profile as defaultProfile,
  experiences as defaultExperiences,
  services as defaultServices,
  skills as defaultSkills,
  projects as defaultProjects,
  caseStudies as defaultCaseStudies,
  siteSettings as defaultSiteSettings,
  articles as defaultArticles,
  certifications as defaultCertifications,
  testimonials as defaultTestimonials,
  capabilities as defaultCapabilities,
} from "@/data/mock";

export const CMS_STORAGE_KEY = "mprem_cms_v1";

const defaultNews: NewsItem[] = [
  {
    id: "n1",
    title: "Google rolls out AI Overviews more widely in Search",
    summary: "AI-generated answer blocks are reshaping click-through patterns. Brands need stronger entity signals, original research, and clear expertise to stay visible beyond the overview.",
    category: "ai",
    source: "Industry",
    url: "https://blog.google/products/search/",
    publishedAt: "2026-08-01",
    featured: true,
    status: "published",
    order: 1,
  },
  {
    id: "n2",
    title: "First-party data and consent become the growth advantage",
    summary: "As third-party cookies fade, marketers who invest in owned lists, CRM hygiene, and value-exchange lead magnets will outperform those still reliant on broad targeting alone.",
    category: "digital-marketing",
    source: "Industry",
    url: "https://developers.google.com/privacy-sandbox",
    publishedAt: "2026-07-20",
    featured: true,
    status: "published",
    order: 2,
  },
  {
    id: "n3",
    title: "Performance Max & demand gen: creative quality is the new bid strategy",
    summary: "Automated campaign types reward asset diversity and clear conversion signals. Weak creative and messy conversion tracking now cost more than poor keyword lists ever did.",
    category: "digital-marketing",
    source: "Industry",
    url: "https://support.google.com/google-ads/",
    publishedAt: "2026-07-10",
    featured: false,
    status: "published",
    order: 3,
  },
  {
    id: "n4",
    title: "Practical AI workflows for marketing teams (not just chat demos)",
    summary: "Teams seeing ROI use AI for research synthesis, brief generation, QA, and reporting pipelines — with human review gates — rather than publishing raw model output.",
    category: "ai",
    source: "Industry",
    url: "https://openai.com/blog",
    publishedAt: "2026-06-28",
    featured: true,
    status: "published",
    order: 4,
  },
  {
    id: "n5",
    title: "SEO in 2026: topical authority beats keyword stuffing",
    summary: "Search systems continue to reward coherent topical coverage, useful structure, and real experience signals. Thin pages targeting single keywords are a liability.",
    category: "seo",
    source: "Industry",
    url: "https://developers.google.com/search/docs",
    publishedAt: "2026-06-15",
    featured: false,
    status: "published",
    order: 5,
  },
  {
    id: "n6",
    title: "Marketing automation: fewer tools, tighter handoffs to pipeline",
    summary: "The winning pattern is not more zap stacks — it is a clean lead definition, CRM stages, and automations that support business development follow-up within hours.",
    category: "growth",
    source: "Industry",
    url: "",
    publishedAt: "2026-06-01",
    featured: false,
    status: "published",
    order: 6,
  },
];

export interface CMSData {
  profile: Profile;
  experiences: Experience[];
  services: Service[];
  skills: Skill[];
  projects: Project[];
  caseStudies: CaseStudy[];
  siteSettings: SiteSettings;
  articles: Article[];
  certifications: Certification[];
  testimonials: Testimonial[];
  capabilities: string[];
  news: NewsItem[];
  updatedAt: string;
}

export function getDefaultCMSData(): CMSData {
  return {
    profile: { ...defaultProfile },
    experiences: [...defaultExperiences],
    services: [...defaultServices],
    skills: [...defaultSkills],
    projects: [...defaultProjects],
    caseStudies: [...defaultCaseStudies],
    siteSettings: {
      ...defaultSiteSettings,
      electricColor:
        (defaultSiteSettings as { electricColor?: string }).electricColor ||
        "#00d4ff",
    },
    articles: [...defaultArticles],
    certifications: [...defaultCertifications],
    testimonials: [...defaultTestimonials],
    capabilities: [...defaultCapabilities],
    news: [...defaultNews],
    updatedAt: new Date().toISOString(),
  };
}

export function loadCMSData(): CMSData {
  if (typeof window === "undefined") return getDefaultCMSData();
  try {
    const raw = localStorage.getItem(CMS_STORAGE_KEY);
    if (!raw) return getDefaultCMSData();
    const parsed = JSON.parse(raw) as Partial<CMSData>;
    const defaults = getDefaultCMSData();
    return {
      ...defaults,
      ...parsed,
      profile: { ...defaults.profile, ...parsed.profile },
      siteSettings: { ...defaults.siteSettings, ...parsed.siteSettings },
      experiences: parsed.experiences ?? defaults.experiences,
      services: parsed.services ?? defaults.services,
      skills: parsed.skills ?? defaults.skills,
      projects: parsed.projects ?? defaults.projects,
      caseStudies: parsed.caseStudies ?? defaults.caseStudies,
      articles: parsed.articles ?? defaults.articles,
      certifications: parsed.certifications ?? defaults.certifications,
      testimonials: parsed.testimonials ?? defaults.testimonials,
      capabilities: parsed.capabilities ?? defaults.capabilities,
      news: parsed.news ?? defaults.news,
      updatedAt: parsed.updatedAt ?? defaults.updatedAt,
    };
  } catch {
    return getDefaultCMSData();
  }
}

export function saveCMSData(data: CMSData): void {
  if (typeof window === "undefined") return;
  const payload: CMSData = {
    ...data,
    updatedAt: new Date().toISOString(),
  };
  localStorage.setItem(CMS_STORAGE_KEY, JSON.stringify(payload));
  window.dispatchEvent(new CustomEvent("cms-updated", { detail: payload }));
}

export function resetCMSData(): CMSData {
  const data = getDefaultCMSData();
  if (typeof window !== "undefined") {
    localStorage.removeItem(CMS_STORAGE_KEY);
    window.dispatchEvent(new CustomEvent("cms-updated", { detail: data }));
  }
  return data;
}

export function exportCMSData(data: CMSData): void {
  const blob = new Blob([JSON.stringify(data, null, 2)], {
    type: "application/json",
  });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `mprem-cms-${new Date().toISOString().slice(0, 10)}.json`;
  a.click();
  URL.revokeObjectURL(url);
}

export function importCMSData(file: File): Promise<CMSData> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      try {
        const parsed = JSON.parse(String(reader.result)) as CMSData;
        saveCMSData(parsed);
        resolve(parsed);
      } catch (e) {
        reject(e);
      }
    };
    reader.onerror = () => reject(reader.error);
    reader.readAsText(file);
  });
}
