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
  headline: "Manager — Digital Marketing, Business Development & Analytics",
  bio: "MBA graduate and digital marketing professional with hands-on experience across digital marketing, business development, recruiting, and analytics.\n\nCurrently Manager at Human IntelR, leading digital marketing, business development, and analytics. Previously Business Development Executive at Pyroferus Technologies and Digital Marketing & Recruiting at IEQS Group.\n\nI help businesses strengthen digital presence, generate qualified pipeline, and turn strategy into practical growth systems. Based in Tamil Nadu — open to opportunities where accountability and results matter.",
  location: "Gudalur / Chennai, Tamil Nadu, India",
  email: "premmohan0147@gmail.com",
  phone: "+91 95003 63147",
  linkedin: "https://www.linkedin.com/in/prem-m-04486a245",
  whatsapp: "9500363147",
  profileImage: "/profile.jpg",
  resumeUrl: null,
  resumeVersion: "1.0",
  resumeUpdatedAt: null,
  currentlyExploring: [
    "Digital Marketing Strategy",
    "Business Development",
    "Analytics & Reporting",
    "Lead Generation",
    "Performance Marketing",
    "Growth Systems",
    "Talent Acquisition",
  ],
  updatedAt: new Date().toISOString(),
};

export const experiences: Experience[] = [
  {
    id: "1",
    company: "Human IntelR",
    role: "Manager — Digital Marketing, Business Development & Analytics",
    location: "India",
    startDate: "2024-03",
    endDate: null,
    current: true,
    description:
      "Leading digital marketing, business development, and analytics at Human IntelR. Responsible for growth initiatives, channel strategy, pipeline development, and performance insights.",
    responsibilities: [
      "Digital marketing strategy and multi-channel execution",
      "Business development and opportunity development",
      "Analytics, reporting, and performance tracking",
      "Lead generation and qualification support",
    ],
    achievements: [],
    logo: null,
    status: "published",
    order: 1,
  },
  {
    id: "2",
    company: "Pyroferus Technologies",
    role: "Business Development Executive",
    location: "India",
    startDate: "2023-08",
    endDate: "2023-09",
    current: false,
    description:
      "Business development role focused on market outreach, opportunity mapping, and supporting growth conversations for the organization.",
    responsibilities: [
      "Business development outreach and follow-ups",
      "Opportunity identification and pipeline support",
      "Client and partner relationship support",
    ],
    achievements: [],
    logo: null,
    status: "published",
    order: 2,
  },
  {
    id: "3",
    company: "IEQS Group",
    role: "Digital Marketing and Recruiting",
    location: "India",
    startDate: "2022-10",
    endDate: "2023-05",
    current: false,
    description:
      "Handled digital marketing and recruiting activities at IEQS Group. Combined channel execution with talent acquisition support, including project work on challenges in the talent acquisition process.",
    responsibilities: [
      "Digital marketing execution and campaign support",
      "Recruiting and talent acquisition support",
      "MBA project: The Challenges to Talent Acquisition Process",
    ],
    achievements: [
      "Completed MBA project on Talent Acquisition Process challenges at IEQS Group (2023)",
    ],
    logo: null,
    status: "published",
    order: 3,
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
  {
    id: "12",
    name: "MS Office & Excel",
    category: "Tools",
    description: "Professional productivity, analysis, and reporting with MS Office and Excel.",
    relatedServices: ["business-development", "digital-marketing"],
    relatedTools: ["Excel", "Word", "PowerPoint"],
    order: 12,
    status: "published",
  },
];

export const projects: Project[] = [
  {
    id: "1",
    title: "The Challenges to Talent Acquisition Process",
    slug: "talent-acquisition-challenges",
    industry: "HR / Recruiting",
    objective:
      "Study and document challenges in the talent acquisition process at IEQS Group as part of the MBA project.",
    services: ["Business Development", "Digital Marketing"],
    challenge:
      "Talent acquisition processes often face gaps between hiring needs, sourcing, screening, and conversion — impacting speed and quality of hire.",
    solution:
      "Analyzed the end-to-end talent acquisition process at IEQS Group, identified friction points, and framed practical recommendations for improvement.",
    outcome:
      "Completed MBA project (2023) with structured findings on talent acquisition challenges and process improvement opportunities.",
    tools: ["Research", "Process analysis", "MS Office", "Excel"],
    image: null,
    liveUrl: null,
    featured: true,
    status: "published",
    order: 1,
  },
  {
    id: "2",
    title: "Summer Project — Delsy India Pvt Ltd",
    slug: "delsy-india-summer-project",
    industry: "Business",
    objective:
      "MBA summer project at Delsy India Pvt Ltd (2022) focused on applied business learning.",
    services: ["Business Development"],
    challenge:
      "Bridge academic MBA learning with real organizational exposure and practical business understanding.",
    solution:
      "Completed a structured summer project engagement at Delsy India Pvt Ltd, applying business administration concepts in a live environment.",
    outcome:
      "Hands-on exposure to business operations and professional practices during the MBA program (2022).",
    tools: ["MS Office", "Excel", "Business analysis"],
    image: null,
    liveUrl: null,
    featured: true,
    status: "published",
    order: 2,
  },
  {
    id: "3",
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
    featured: false,
    status: "published",
    order: 3,
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
  siteTitle: "M Prem — Digital Marketing, BD & Analytics",
  siteDescription:
    "Manager — Digital Marketing, Business Development & Analytics. MBA professional helping businesses strengthen digital presence, generate pipeline, and build practical growth systems.",
  favicon: "/favicon.ico",
  logo: "",
  primaryColor: "#3b82f6",
  accentColor: "#00d4ff",
  electricColor: "#00d4ff",
  ogImage: "/og-default.png",
  googleAnalyticsId: "",
  contactEmail: "premmohan0147@gmail.com",
  whatsappNumber: "9500363147",
  linkedinUrl: "https://www.linkedin.com/in/prem-m-04486a245",
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
    url: "https://www.linkedin.com/in/prem-m-04486a245",
    enabled: true,
  },
  {
    id: "2",
    platform: "WhatsApp",
    url: "https://wa.me/919500363147",
    enabled: true,
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
  "Analytics",
  "Lead Generation",
  "Recruiting / Talent Acquisition",
  "MS Office & Excel",
  "Growth Strategy",
  "Performance Marketing",
  "Pipeline Support",
];
