export type ServiceSlug =
  | "website-company-profile"
  | "landing-page"
  | "aplikasi-web-custom"
  | "dashboard-sistem-manajemen"
  | "integrasi-api-backend"
  | "solusi-ai-otomasi";

export type ServiceFaq = {
  question: string;
  answer: string;
};

export type Service = {
  id: string;
  slug: ServiceSlug;
  path: `/layanan/${ServiceSlug}`;
  title: string;
  tag: string;
  short: string;
  description: string;
  color: string;
  metadata: {
    title: string;
    description: string;
    keywords: string[];
  };
  benefits: string[];
  idealFor: string[];
  deliverables: string[];
  process: string[];
  faq: ServiceFaq[];
};

export const services: Service[] = [
  {
    id: "01",
    slug: "website-company-profile",
    path: "/layanan/website-company-profile",
    title: "Company Profile Website",
    tag: "Web",
    short: "A credible digital presence for your business.",
    description:
      "A professional company profile website that explains your brand, services, and business strengths with clear content structure, polished visuals, and SEO-ready foundations.",
    color: "#0d9488",
    metadata: {
      title: "Professional Company Profile Website Development",
      description:
        "Company profile website development for businesses that need a credible, responsive, fast, and SEO-ready digital presence.",
      keywords: ["company profile website", "business website", "professional website", "website development"],
    },
    benefits: ["Stronger brand credibility", "Clearer information structure", "Responsive on mobile", "SEO-ready page foundation"],
    idealFor: ["Service companies", "B2B and corporate vendors", "SMBs that need a professional presence", "Brands that need an official information channel"],
    deliverables: ["Main page and supporting page design", "Content structure for company and services", "Contact form or WhatsApp CTA", "Basic metadata and sitemap setup"],
    process: ["Brand and goal discovery", "Page structure planning", "UI design and development", "Content review, testing, and launch"],
    faq: [
      {
        question: "Can the website match our brand identity?",
        answer: "Yes. The structure, visuals, and content direction are adjusted to your positioning, audience, and available brand assets.",
      },
      {
        question: "Will the website be SEO-ready?",
        answer: "The website includes metadata, heading structure, internal links, and basic performance foundations. Advanced SEO can be discussed as a separate scope.",
      },
    ],
  },
  {
    id: "02",
    slug: "landing-page",
    path: "/layanan/landing-page",
    title: "Landing Page",
    tag: "Web",
    short: "Campaign pages focused on clarity and conversion.",
    description:
      "Landing pages for products, campaigns, or specific services with focused messaging, clear calls to action, and a structure that supports performance tracking.",
    color: "#0f766e",
    metadata: {
      title: "Landing Page Development for Campaigns and Products",
      description:
        "Responsive landing page development for campaigns, products, and services with a focus on message clarity, CTA, and conversion structure.",
      keywords: ["landing page development", "campaign landing page", "product landing page", "conversion landing page"],
    },
    benefits: ["Sharper campaign message", "Clearer call to action", "Tracking-ready structure", "Easy to iterate for experiments"],
    idealFor: ["Digital ad campaigns", "New product launches", "Lead generation", "Specific service promotions"],
    deliverables: ["Hero and value proposition", "Benefit and proof sections", "Form or WhatsApp CTA", "Metadata and crawlable page structure"],
    process: ["Audience and offer mapping", "Message angle and content flow", "Design and implementation", "CTA and basic tracking test"],
    faq: [
      {
        question: "Can the landing page be used for paid ads?",
        answer: "Yes. The page is structured so traffic from campaigns can quickly understand the offer, CTA, and key supporting information.",
      },
      {
        question: "Can it connect to WhatsApp or a form?",
        answer: "Yes. CTAs can point to WhatsApp, email, or a form based on your follow-up workflow.",
      },
    ],
  },
  {
    id: "03",
    slug: "aplikasi-web-custom",
    path: "/layanan/aplikasi-web-custom",
    title: "Custom Web Application",
    tag: "App",
    short: "Web systems shaped around your business process.",
    description:
      "Custom web applications for internal teams or customers, built around real workflows, user roles, data validation, and business processes that templates cannot handle well.",
    color: "#115e59",
    metadata: {
      title: "Custom Web Application Development",
      description:
        "Custom web application development for internal systems, operational workflows, customer portals, and specific business requirements.",
      keywords: ["custom web app", "web application development", "internal business system", "custom software"],
    },
    benefits: ["Workflow that matches your process", "Controlled user roles", "Cleaner data management", "Ready for phased development"],
    idealFor: ["Manual operations", "Teams with approval workflows", "Customer or partner portals", "Businesses with unique workflows"],
    deliverables: ["Requirements analysis and user flow", "Responsive web app UI", "Core features based on scope", "Basic user documentation"],
    process: ["Business process discovery", "Scope and feature prioritization", "Iterative development", "Functional testing with users"],
    faq: [
      {
        question: "Do all features need to be built at once?",
        answer: "No. The scope can be prioritized into a useful first version, then expanded in phases as the business grows.",
      },
      {
        question: "Can the app support multiple user roles?",
        answer: "Yes. Roles and permissions are designed around your team structure and data access requirements.",
      },
    ],
  },
  {
    id: "04",
    slug: "dashboard-sistem-manajemen",
    path: "/layanan/dashboard-sistem-manajemen",
    title: "Dashboard & Management System",
    tag: "System",
    short: "Business data and activities in one place.",
    description:
      "Dashboards and management systems that collect key data, monitor work status, reveal trends, and help owners or managers make decisions with structured information.",
    color: "#0f766e",
    metadata: {
      title: "Business Dashboard and Management System Development",
      description:
        "Dashboard and management system development for reporting, operational monitoring, workflows, and business data visualization.",
      keywords: ["business dashboard", "management system", "operational dashboard", "business data visualization"],
    },
    benefits: ["Easier data monitoring", "More consistent reporting", "Transparent work status", "Faster decisions"],
    idealFor: ["Owners who need data summaries", "Operational teams", "Project managers", "Businesses with recurring reports"],
    deliverables: ["Key metric dashboard", "Tables and data filters", "User roles based on needs", "Export or reporting features based on scope"],
    process: ["Identify key metrics", "Map data sources and structure", "Design dashboard views", "Test reporting scenarios"],
    faq: [
      {
        question: "Does the dashboard need to be real-time?",
        answer: "Not always. Update frequency depends on business needs, available data sources, and development priorities.",
      },
      {
        question: "Can reports be exported?",
        answer: "Yes, if included in scope. Export formats and columns are defined during requirements planning.",
      },
    ],
  },
  {
    id: "05",
    slug: "integrasi-api-backend",
    path: "/layanan/integrasi-api-backend",
    title: "API Integration & Backend",
    tag: "Integration",
    short: "Connect systems so your data works together.",
    description:
      "API and backend integration for websites, payments, CRM, ERP, WhatsApp, databases, or third-party tools so data becomes more synchronized and manual work is reduced.",
    color: "#134e4a",
    metadata: {
      title: "API Integration and Backend Development",
      description:
        "API integration and backend development for connecting systems, synchronizing data, payments, CRM, ERP, and digital workflows.",
      keywords: ["API integration", "backend development", "payment gateway integration", "data synchronization"],
    },
    benefits: ["Synchronized system data", "Less manual input", "More scalable workflows", "Clearer integration documentation"],
    idealFor: ["Businesses using many tools", "Systems that need payment integration", "Manual reconciliation workflows", "Platforms that need internal APIs"],
    deliverables: ["API endpoints based on scope", "Agreed third-party integrations", "Validation and response handling", "Basic technical documentation"],
    process: ["Audit available systems and APIs", "Design data flow", "Implement integration", "Test success and failure scenarios"],
    faq: [
      {
        question: "Can every tool be integrated?",
        answer: "It depends on API availability, access permissions, and documentation from each tool. Feasibility is checked before implementation.",
      },
      {
        question: "Does old data need to be migrated?",
        answer: "If needed, data migration can be discussed as a separate scope after data sources and structures are mapped.",
      },
    ],
  },
  {
    id: "06",
    slug: "solusi-ai-otomasi",
    path: "/layanan/solusi-ai-otomasi",
    title: "AI & Automation",
    tag: "AI",
    short: "Practical automation for workflows and customer service.",
    description:
      "AI and automation solutions for practical business use cases such as customer service triage, internal knowledge search, data classification, and repetitive workflow support.",
    color: "#0d9488",
    metadata: {
      title: "AI and Business Automation Solutions",
      description:
        "AI and automation solutions for chatbots, knowledge assistants, workflow automation, and AI integration into business processes.",
      keywords: ["business automation", "AI chatbot", "workflow automation", "AI customer service", "knowledge assistant"],
    },
    benefits: ["Faster first responses", "Less repetitive work", "Easier internal knowledge search", "Automation connected to real workflows"],
    idealFor: ["Customer service teams", "Businesses with recurring FAQs", "Document-heavy operations", "Teams that need an internal assistant"],
    deliverables: ["AI use case mapping", "Prototype or AI module based on scope", "Channel or dashboard integration", "Usage guide and initial evaluation"],
    process: ["Identify repetitive work", "Validate data and AI boundaries", "Implement solution", "Test answers, escalation, and workflow behavior"],
    faq: [
      {
        question: "Will AI replace the human team?",
        answer: "The goal is to reduce repetitive work and speed up initial responses. Complex cases can still be escalated to humans.",
      },
      {
        question: "Can AI use internal company data?",
        answer: "Yes, if the data is available and approved for use. Access structure, security, and answer boundaries should be designed from the start.",
      },
    ],
  },
];

export const servicePaths = services.map((service) => service.path);

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug);
}
