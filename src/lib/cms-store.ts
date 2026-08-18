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
    siteSettings: { ...defaultSiteSettings },
    articles: [...defaultArticles],
    certifications: [...defaultCertifications],
    testimonials: [...defaultTestimonials],
    capabilities: [...defaultCapabilities],
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
