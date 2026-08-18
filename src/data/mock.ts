import type {
  Profile,
  Experience,
  Service,
  Skill,
  Project,
  CaseStudy,
  Testimonial,
  Article,
  Certification,
  SiteSettings,
  SocialLink,
} from "@/types";

export const profile: Profile = {
  id: "1",
  name: "M Prem",
  headline: "Digital Marketing & Business Growth Professional",
  bio: "I work at the intersection of digital marketing, business development and technology. My focus is not simply generating activity \u2014 it is understanding the business objective, identifying the right digital opportunities and turning strategy into execution.\n\nI help businesses strengthen their digital presence, generate qualified opportunities and build practical growth strategies across marketing, business development and digital channels.",
  location: "Chennai, Tamil Nadu, India",
  email: "hello@mprem.in",
  phone: "+91 XXXXX XXXXX",
  linkedin: "https://www.linkedin.com/in/m-prem-/",
  whatsapp: "",
  profileImage: null,
  resumeUrl: null,
  resumeVersion: "1.0",
  resumeUpdatedAt: null,
  currentlyExploring: ["AI", "Automation", "SEO", "Performance Marketing", "Analytics", "Business Strategy", "Growth Systems"],
  updatedAt: new Date().toISOString(),
};

export const experiences: Experience[] = [
  {
    id: "1",
    company: "Human IntelR",
    role: "Digital Marketing / Business Development",
    location: "Chennai, India",
    startDate: "",
    endDate: null,
    current: true,
    description: "Supporting digital marketing and business development initiatives at Human IntelR \u2014 a business consulting and services firm focused on shaping the future of businesses, products & services.",
    responsibilities: ["Digital marketing strategy and execution", "Business development support", "Lead generation initiatives", "Content and channel strategy"],
    achievements: [],
    logo: null,
    status: "published",
    order: 1,
  },
];

export const services: Service[] = [
  { id: "1", title: "Digital Marketing", slug: "digital-marketing", description: "Build and execute practical digital marketing strategies across organic and paid channels.", longDescription: "Comprehensive digital marketing strategies tailored to business goals.", icon: "Megaphone", order: 1, status: "published" },
  { id: "2", title: "SEO", slug: "seo", description: "Improve search visibility, website discoverability and long-term organic growth.", longDescription: "Technical SEO, content strategy, on-page optimization and authority building.", icon: "Search", order: 2, status: "published" },
  { id: "3", title: "Lead Generation", slug: "lead-generation", description: "Design digital campaigns and funnels focused on generating qualified business opportunities.", longDescription: "End-to-end lead generation systems combining paid media, landing pages and qualification processes.", icon: "Target", order: 3, status: "published" },
  { id: "4", title: "Business Development", slug: "business-development", description: "Identify opportunities, build relationships and create structured growth processes.", longDescription: "Practical business development frameworks connecting marketing to pipeline.", icon: "TrendingUp", order: 4, status: "published" },
  { id: "5", title: "Social Media Marketing", slug: "social-media-marketing", description: "Develop content and channel strategies that strengthen brand presence and audience engagement.", longDescription: "Platform-specific content systems and paid social strategies.", icon: "Share2", order: 5, status: "published" },
  { id: "6", title: "AI & Marketing Automation", slug: "ai-marketing-automation", description: "Explore AI-powered workflows, automation and modern marketing systems to improve efficiency.", longDescription: "Practical application of AI tools and marketing automation platforms.", icon: "Bot", order: 6, status: "published" },
];

export const skills: Skill[] = [
  { id: "1", name: "Digital Marketing", category: "Core", description: "Strategy and execution across digital channels.", relatedServices: ["digital-marketing"], relatedTools: ["Google Ads", "Meta Ads", "Analytics"], order: 1, status: "published" },
  { id: "2", name: "SEO", category: "Core", description: "Search visibility and organic growth systems.", relatedServices: ["seo"], relatedTools: ["Search Console", "Ahrefs"], order: 2, status: "published" },
  { id: "3", name: "Google Ads", category: "Paid", description: "Search, display and performance campaigns.", relatedServices: ["lead-generation"], relatedTools: ["Google Ads"], order: 3, status: "published" },
  { id: "4", name: "Meta Ads", category: "Paid", description: "Facebook & Instagram advertising systems.", relatedServices: ["lead-generation"], relatedTools: ["Meta Business Suite"], order: 4, status: "published" },
  { id: "5", name: "Lead Generation", category: "Growth", description: "Qualified opportunity systems and funnels.", relatedServices: ["lead-generation"], relatedTools: ["Landing pages", "CRM"], order: 5, status: "published" },
  { id: "6", name: "Business Development", category: "Growth", description: "Pipeline and relationship-driven growth.", relatedServices: ["business-development"], relatedTools: ["CRM"], order: 6, status: "published" },
  { id: "7", name: "Analytics", category: "Data", description: "Measurement, insights and decision support.", relatedServices: ["digital-marketing"], relatedTools: ["GA4", "Search Console"], order: 7, status: "published" },
  { id: "8", name: "Content Strategy", category: "Creative", description: "Content systems that support discovery and conversion.", relatedServices: ["digital-marketing"], relatedTools: ["Notion", "Canva"], order: 8, status: "published" },
  { id: "9", name: "AI Tools", category: "Modern", description: "Practical AI applications in marketing workflows.", relatedServices: ["ai-marketing-automation"], relatedTools: ["ChatGPT", "Claude"], order: 9, status: "published" },
  { id: "10", name: "Marketing Automation", category: "Modern", description: "Workflows that scale personalization and efficiency.", relatedServices: ["ai-marketing-automation"], relatedTools: ["Zapier", "Make"], order: 10, status: "published" },
  { id: "11", name: "Business Strategy", category: "Growth", description: "Connecting digital activity to business outcomes.", relatedServices: ["business-development"], relatedTools: [], order: 11, status: "published" },
  { id: "12", name: "Social Media", category: "Creative", description: "Channel strategy and audience engagement.", relatedServices: ["social-media-marketing"], relatedTools: ["Meta", "LinkedIn"], order: 12, status: "published" },
];

export const projects: Project[] = [
  {
    id: "1",
    title: "Project details coming soon",
    slug: "coming-soon",
    industry: "\u2014",
    objective: "Add project details from Admin CMS.",
    services: [],
    challenge: "Project details will appear here once published from the Admin dashboard.",
    solution: "",
    outcome: "",
    tools: [],
    image: null,
    liveUrl: null,
    featured: false,
    status: "draft",
    order: 1,
  },
];

export const caseStudies: CaseStudy[] = [
  {
    id: "1",
    title: "Turning Digital Presence Into Business Opportunity",
    slug: "digital-presence-to-opportunity",
    challenge: "Many businesses invest in digital activity without a clear connection to qualified opportunities or structured growth processes.",
    strategy: "A combined approach of digital marketing foundations, search visibility, content systems and business development alignment.",
    execution: "Practical systems spanning channel strategy, campaign structure, measurement and relationship processes.",
    result: "Metrics and verified outcomes will be displayed here once entered and published from the Admin CMS.",
    learnings: "Digital activity creates the most value when it is intentionally connected to business development and pipeline goals.",
    tools: ["Google", "Meta", "Analytics", "CRM"],
    metrics: [],
    image: null,
    featured: true,
    status: "published",
  },
];

export const testimonials: Testimonial[] = [];

export const articles: Article[] = [
  {
    id: "1",
    title: "Insights coming soon",
    slug: "insights-coming-soon",
    excerpt: "Articles and experiments on digital marketing, growth and business development will appear here.",
    content: "Content will be managed from the Admin CMS.",
    coverImage: null,
    category: "Digital Marketing",
    tags: ["growth"],
    author: "M Prem",
    publishedAt: null,
    readingTime: 3,
    featured: false,
    seoTitle: "Insights | M Prem",
    seoDescription: "Ideas, experiments and insights on digital growth.",
    status: "draft",
  },
];

export const certifications: Certification[] = [];

export const siteSettings: SiteSettings = {
  siteTitle: "M Prem \u2014 Digital Marketing & Business Growth",
  siteDescription: "I help businesses strengthen their digital presence, generate qualified opportunities and build practical growth strategies.",
  favicon: "/favicon.ico",
  logo: "",
  primaryColor: "#3b82f6",
  accentColor: "#00d4ff",
  ogImage: "/og-default.png",
  googleAnalyticsId: "",
  contactEmail: "hello@mprem.in",
  whatsappNumber: "",
  linkedinUrl: "https://www.linkedin.com/in/m-prem-/",
  enableTestimonials: true,
  enableBlog: true,
  enableProjects: true,
  enableCaseStudies: true,
  enableContactForm: true,
  enableWhatsapp: true,
  enableBooking: false,
  bookingUrl: "",
};

export const socialLinks: SocialLink[] = [
  { id: "1", platform: "LinkedIn", url: "https://www.linkedin.com/in/m-prem-/", enabled: true },
  { id: "2", platform: "WhatsApp", url: "", enabled: false },
  { id: "3", platform: "X", url: "", enabled: false },
  { id: "4", platform: "Instagram", url: "", enabled: false },
];

export const capabilities = [
  "Digital Marketing",
  "Business Development",
  "SEO",
  "Lead Generation",
  "Growth Strategy",
  "AI & Automation",
  "Content Strategy",
  "Analytics",
];
