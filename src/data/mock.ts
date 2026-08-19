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
  bio: "I operate at the intersection of digital marketing, business development, and technology. My focus is not activity for its own sake — it is understanding the real business objective, identifying the highest-leverage digital opportunities, and turning strategy into measurable execution.\n\nI help companies strengthen their digital presence, generate qualified pipeline, and build practical growth systems across marketing, business development, and digital channels. Based in Chennai, I work with founders and teams who want clarity, accountability, and results — not vanity metrics.",
  location: "Chennai, Tamil Nadu, India",
  email: "hello@mprem.in",
  phone: "+91 XXXXX XXXXX",
  linkedin: "https://www.linkedin.com/in/m-prem-/",
  whatsapp: "",
  profileImage: "/profile.jpg",
  resumeUrl: null,
  resumeVersion: "1.0",
  resumeUpdatedAt: null,
  currentlyExploring: [
    "AI-powered Marketing",
    "Marketing Automation",
    "SEO Systems",
    "Performance Marketing",
    "Revenue Analytics",
    "Growth Strategy",
    "Demand Generation",
  ],
  updatedAt: new Date().toISOString(),
};

export const experiences: Experience[] = [
  {
    id: "1",
    company: "Human IntelR",
    role: "Digital Marketing & Business Development",
    location: "Chennai, India",
    startDate: "",
    endDate: null,
    current: true,
    description:
      "Driving digital marketing and business development initiatives at Human IntelR — a consulting firm focused on shaping the future of businesses, products, and services. Bridging strategy and execution across channels, pipeline, and growth systems.",
    responsibilities: [
      "Digital marketing strategy & multi-channel execution",
      "Business development and opportunity mapping",
      "Lead generation systems and qualification frameworks",
      "Content, SEO, and channel strategy aligned to pipeline goals",
    ],
    achievements: [],
    logo: null,
    status: "published",
    order: 1,
  },
];

export const services: Service[] = [
  {
    id: "1",
    title: "Digital Marketing Strategy",
    slug: "digital-marketing",
    description:
      "Full-funnel digital strategies that connect channels, content, and campaigns to real business goals.",
    longDescription:
      "I design and execute digital marketing systems tailored to your objectives — channel selection, campaign architecture, content engines, and measurement frameworks. The outcome is not more activity; it is clearer attribution and stronger pipeline.",
    icon: "Megaphone",
    order: 1,
    status: "published",
  },
  {
    id: "2",
    title: "SEO & Organic Growth",
    slug: "seo",
    description:
      "Technical and content SEO systems that compound search visibility and qualified organic traffic.",
    longDescription:
      "From technical health and on-page structure to content strategy and authority building — SEO built for sustainable organic growth, not short-term ranking spikes. Every recommendation is tied to discoverability and business impact.",
    icon: "Search",
    order: 2,
    status: "published",
  },
  {
    id: "3",
    title: "Lead Generation Systems",
    slug: "lead-generation",
    description:
      "Campaigns and funnels engineered to attract, qualify, and convert high-intent opportunities.",
    longDescription:
      "End-to-end lead generation: paid media, landing pages, offer design, nurture flows, and qualification rules. Built so marketing activity feeds a pipeline your sales or BD team can actually work.",
    icon: "Target",
    order: 3,
    status: "published",
  },
  {
    id: "4",
    title: "Business Development",
    slug: "business-development",
    description:
      "Structured BD processes that turn market signals into conversations and closed opportunities.",
    longDescription:
      "Practical business development frameworks — opportunity mapping, outreach systems, relationship sequences, and pipeline discipline — so growth is intentional rather than accidental.",
    icon: "TrendingUp",
    order: 4,
    status: "published",
  },
  {
    id: "5",
    title: "Social & Content Systems",
    slug: "social-media-marketing",
    description:
      "Platform-native content and social strategies that build presence and support demand generation.",
    longDescription:
      "Content calendars, platform-specific formats, community signals, and paid social support — aligned to brand and pipeline, not random posting.",
    icon: "Share2",
    order: 5,
    status: "published",
  },
  {
    id: "6",
    title: "AI & Marketing Automation",
    slug: "ai-marketing-automation",
    description:
      "Practical AI workflows and automation that reduce manual work and scale personalization.",
    longDescription:
      "I apply AI tools and automation platforms to real marketing workflows — research, content drafts, lead routing, reporting, and nurture sequences — so teams move faster without losing quality or control.",
    icon: "Bot",
    order: 6,
    status: "published",
  },
];

export const skills: Skill[] = [
  {
    id: "1",
    name: "Digital Marketing",
    category: "Core",
    description: "Strategy and execution across organic, paid, and owned channels.",
    relatedServices: ["digital-marketing"],
    relatedTools: ["Google Ads", "Meta Ads", "GA4", "Search Console"],
    order: 1,
    status: "published",
  },
  {
    id: "2",
    name: "SEO",
    category: "Core",
    description: "Technical, on-page, and content systems for long-term organic growth.",
    relatedServices: ["seo"],
    relatedTools: ["Search Console", "Ahrefs", "Screaming Frog", "Surfer"],
    order: 2,
    status: "published",
  },
  {
    id: "3",
    name: "Google Ads",
    category: "Paid",
    description: "Search, Performance Max, and display campaigns focused on ROI.",
    relatedServices: ["lead-generation", "digital-marketing"],
    relatedTools: ["Google Ads", "Google Analytics", "Tag Manager"],
    order: 3,
    status: "published",
  },
  {
    id: "4",
    name: "Meta Ads",
    category: "Paid",
    description: "Facebook & Instagram acquisition and retargeting systems.",
    relatedServices: ["lead-generation", "social-media-marketing"],
    relatedTools: ["Meta Business Suite", "Ads Manager", "Pixel"],
    order: 4,
    status: "published",
  },
  {
    id: "5",
    name: "Lead Generation",
    category: "Growth",
    description: "Funnels, offers, and qualification systems that feed pipeline.",
    relatedServices: ["lead-generation"],
    relatedTools: ["Landing pages", "CRM", "Forms", "Automation"],
    order: 5,
    status: "published",
  },
  {
    id: "6",
    name: "Business Development",
    category: "Growth",
    description: "Opportunity mapping, outreach, and pipeline discipline.",
    relatedServices: ["business-development"],
    relatedTools: ["CRM", "LinkedIn", "Outreach sequences"],
    order: 6,
    status: "published",
  },
  {
    id: "7",
    name: "Analytics & Attribution",
    category: "Data",
    description: "Measurement frameworks that connect activity to outcomes.",
    relatedServices: ["digital-marketing"],
    relatedTools: ["GA4", "Looker Studio", "Search Console", "UTMs"],
    order: 7,
    status: "published",
  },
  {
    id: "8",
    name: "Content Strategy",
    category: "Creative",
    description: "Content systems designed for discovery, trust, and conversion.",
    relatedServices: ["digital-marketing", "social-media-marketing"],
    relatedTools: ["Notion", "Canva", "AI writing tools"],
    order: 8,
    status: "published",
  },
  {
    id: "9",
    name: "AI for Marketing",
    category: "Modern",
    description: "Applied AI for research, creative, and workflow acceleration.",
    relatedServices: ["ai-marketing-automation"],
    relatedTools: ["ChatGPT", "Claude", "Custom GPTs", "Midjourney"],
    order: 9,
    status: "published",
  },
  {
    id: "10",
    name: "Marketing Automation",
    category: "Modern",
    description: "Workflows that scale personalization and reduce manual effort.",
    relatedServices: ["ai-marketing-automation"],
    relatedTools: ["Zapier", "Make", "n8n", "CRM automations"],
    order: 10,
    status: "published",
  },
  {
    id: "11",
    name: "Growth Strategy",
    category: "Growth",
    description: "Connecting digital activity to pipeline and revenue outcomes.",
    relatedServices: ["business-development", "digital-marketing"],
    relatedTools: ["Strategy frameworks", "OKRs", "Funnel models"],
    order: 11,
    status: "published",
  },
];

export const projects: Project[] = [
  {
    id: "1",
    title: "Digital Growth Framework",
    slug: "digital-growth-framework",
    industry: "Business Services",
    objective:
      "Connect marketing activity to pipeline and business development outcomes.",
    services: ["Digital Marketing", "Lead Generation", "Business Development"],
    challenge:
      "Many teams run campaigns without a clear link between digital activity and qualified opportunities.",
    solution:
      "A structured approach that aligns channel selection, messaging, and measurement with pipeline goals — so marketing and BD work as one system.",
    outcome:
      "Clearer prioritization, better lead quality signals, and a repeatable process for connecting digital work to business conversations.",
    tools: ["Google", "Meta", "Analytics", "CRM"],
    image: null,
    liveUrl: null,
    featured: true,
    status: "published",
    order: 1,
  },
];

export const caseStudies: CaseStudy[] = [
  {
    id: "1",
    title: "From Activity to Pipeline",
    slug: "from-activity-to-pipeline",
    challenge:
      "Digital campaigns were generating volume, but the connection to qualified business opportunities was weak.",
    strategy:
      "Reframe success metrics around pipeline quality, redesign offers and landing paths, and tighten handoff between marketing and business development.",
    execution:
      "Channel audit, messaging alignment, funnel simplification, and a shared definition of a qualified opportunity across teams.",
    result:
      "Metrics and verified outcomes will appear here once published from the Admin CMS. Structure is ready for real results.",
    learnings:
      "Digital activity creates the most value when it is intentionally connected to business development and pipeline goals.",
    tools: ["Google Ads", "Meta Ads", "Analytics", "CRM"],
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
    excerpt:
      "Practical notes on digital marketing, growth systems, and business development will be published here.",
    content: "Content is managed from the Admin CMS.",
    coverImage: null,
    category: "Growth",
    tags: ["digital marketing", "pipeline", "strategy"],
    author: "M Prem",
    publishedAt: null,
    readingTime: 4,
    featured: false,
    seoTitle: "Insights | M Prem",
    seoDescription:
      "Ideas and experiments on digital growth, SEO, lead generation, and business development.",
    status: "draft",
  },
];

export const certifications: Certification[] = [];

export const siteSettings: SiteSettings = {
  siteTitle: "M Prem — Digital Marketing & Business Growth",
  siteDescription:
    "Digital marketing and business growth professional based in Chennai. Helping businesses strengthen digital presence, generate qualified pipeline, and build practical growth systems.",
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
  {
    id: "1",
    platform: "LinkedIn",
    url: "https://www.linkedin.com/in/m-prem-/",
    enabled: true,
  },
  {
    id: "2",
    platform: "WhatsApp",
    url: "",
    enabled: false,
  },
  {
    id: "3",
    platform: "X",
    url: "",
    enabled: false,
  },
  {
    id: "4",
    platform: "Instagram",
    url: "",
    enabled: false,
  },
];

export const capabilities = [
  "Digital Marketing",
  "Business Development",
  "SEO Systems",
  "Lead Generation",
  "Growth Strategy",
  "AI & Automation",
  "Content Systems",
  "Revenue Analytics",
  "Performance Marketing",
  "Pipeline Design",
];
