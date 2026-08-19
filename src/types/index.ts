export type ContentStatus = "draft" | "published" | "archived";

export interface Profile {
  id: string;
  name: string;
  headline: string;
  bio: string;
  location: string;
  email: string;
  phone: string;
  linkedin: string;
  whatsapp: string;
  profileImage: string | null;
  resumeUrl: string | null;
  resumeVersion: string;
  resumeUpdatedAt: string | null;
  currentlyExploring: string[];
  updatedAt: string;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  location: string;
  startDate: string;
  endDate: string | null;
  current: boolean;
  description: string;
  responsibilities: string[];
  achievements: string[];
  logo: string | null;
  status: ContentStatus;
  order: number;
}

export interface Service {
  id: string;
  title: string;
  slug: string;
  description: string;
  longDescription: string;
  icon: string;
  order: number;
  status: ContentStatus;
}

export interface Skill {
  id: string;
  name: string;
  category: string;
  description: string;
  relatedServices: string[];
  relatedTools: string[];
  order: number;
  status: ContentStatus;
}

export interface Project {
  id: string;
  title: string;
  slug: string;
  industry: string;
  objective: string;
  services: string[];
  challenge: string;
  solution: string;
  outcome: string;
  tools: string[];
  image: string | null;
  liveUrl: string | null;
  featured: boolean;
  status: ContentStatus;
  order: number;
}

export interface CaseStudy {
  id: string;
  title: string;
  slug: string;
  challenge: string;
  strategy: string;
  execution: string;
  result: string;
  learnings: string;
  tools: string[];
  metrics: { label: string; value: string }[];
  image: string | null;
  featured: boolean;
  status: ContentStatus;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  photo: string | null;
  linkedinUrl: string | null;
  status: ContentStatus;
}

export interface Article {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  coverImage: string | null;
  category: string;
  tags: string[];
  author: string;
  publishedAt: string | null;
  readingTime: number;
  featured: boolean;
  seoTitle: string;
  seoDescription: string;
  status: ContentStatus;
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  issueDate: string;
  credentialId: string | null;
  credentialUrl: string | null;
  image: string | null;
  status: ContentStatus;
}

export interface Lead {
  id: string;
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  budget: string;
  message: string;
  status: "new" | "contacted" | "qualified" | "proposal" | "won" | "lost";
  createdAt: string;
}

export interface NewsItem {
  id: string;
  title: string;
  summary: string;
  category: "digital-marketing" | "ai" | "seo" | "growth" | "tools";
  source: string;
  url: string;
  publishedAt: string;
  featured: boolean;
  status: ContentStatus;
  order: number;
}

export interface SiteSettings {
  siteTitle: string;
  siteDescription: string;
  favicon: string;
  logo: string;
  primaryColor: string;
  accentColor: string;
  electricColor: string;
  ogImage: string;
  googleAnalyticsId: string;
  contactEmail: string;
  whatsappNumber: string;
  linkedinUrl: string;
  enableTestimonials: boolean;
  enableBlog: boolean;
  enableProjects: boolean;
  enableCaseStudies: boolean;
  enableContactForm: boolean;
  enableWhatsapp: boolean;
  enableBooking: boolean;
  bookingUrl: string;
}

export interface SocialLink {
  id: string;
  platform: string;
  url: string;
  enabled: boolean;
}
