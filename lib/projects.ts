export type ProjectCategory = "AI & Automation" | "Web Platform" | "Landing Page & Company Profile";

export type Project = {
  slug: string;
  title: string;
  category: ProjectCategory;
  description: string;
  client: string;
  industry: string;
  timeline: string;
  role: string;
  techStack: string[];
  highlights: string[];
  challenge: string;
  solution: string;
  features: string[];
  outcomes: string[];
  relatedServices: string[];
  featured: boolean;
  gradient: string;
  images: string[];
};

export const projects: Project[] = [
  {
    slug: "ai-ocr-platform",
    title: "AI-Powered OCR Platform",
    category: "AI & Automation",
    description:
      "A document digitization platform with AI extraction for mortgage onboarding. The system covers document intake, OCR processing, and manual review workflows.",
    client: "Financial operations team",
    industry: "Fintech & lending",
    timeline: "8-10 weeks",
    role: "Product design, AI workflow, frontend, backend",
    techStack: ["Next.js", "Node.js", "Gemini AI", "Supabase", "PostgreSQL"],
    highlights: ["Automated extraction for identity and financial documents", "Case-based workflow with audit trail", "Editable extraction output for manual review"],
    challenge:
      "The team handled document-heavy onboarding manually, causing slow review cycles, inconsistent extraction, and limited visibility into each case status.",
    solution:
      "We designed a structured intake and review platform where AI extracts document fields first, then operators can validate, edit, and track each case through a clearer workflow.",
    features: ["Document upload and case grouping", "AI field extraction and confidence review", "Manual correction workflow", "Audit trail for review activity", "Dashboard for processing status"],
    outcomes: ["Reduced repetitive data entry", "Clearer review ownership", "Faster first-pass document checking", "More structured onboarding records"],
    relatedServices: ["solusi-ai-otomasi", "dashboard-sistem-manajemen", "aplikasi-web-custom"],
    featured: true,
    gradient: "linear-gradient(135deg, #073b37, #0d9488)",
    images: ["/projects/btn-2.png"],
  },
  {
    slug: "content-marketing-ai",
    title: "Content Marketing AI",
    category: "AI & Automation",
    description:
      "A creative automation platform that turns one product asset into multiple marketing outputs, including image concepts, captions, and video ideas.",
    client: "Marketing and content team",
    industry: "Creative operations",
    timeline: "5-7 weeks",
    role: "AI product flow, interface design, prompt system",
    techStack: ["Next.js", "Node.js", "Gemini AI", "Computer Vision", "Tailwind CSS"],
    highlights: ["Single asset to multiple content outputs", "Prompt engineering and template generation", "Campaign generation workflow"],
    challenge:
      "Producing campaign ideas from product assets took too much repetitive work and made it hard to keep output structure consistent across channels.",
    solution:
      "We built an AI-assisted content workspace that analyzes an uploaded asset and turns it into campaign-ready ideas, captions, and creative directions.",
    features: ["Asset upload and visual analysis", "Campaign angle generation", "Caption and content template output", "Idea history for iteration", "Responsive creative workspace"],
    outcomes: ["Faster content ideation", "Reusable campaign structure", "Better consistency across outputs", "More room for creative review instead of blank-page work"],
    relatedServices: ["solusi-ai-otomasi", "aplikasi-web-custom"],
    featured: true,
    gradient: "linear-gradient(135deg, #052e2b, #0f766e)",
    images: ["/projects/marketing-ai-1.png"],
  },
  {
    slug: "ai-collateral-assessment",
    title: "AI Collateral Assessment",
    category: "AI & Automation",
    description:
      "A fintech application for document intelligence and collateral assessment in loan workflows, supporting automated valuation and real-time financial simulations.",
    client: "Loan assessment team",
    industry: "Fintech",
    timeline: "6-8 weeks",
    role: "System design, AI extraction, simulation workflow",
    techStack: ["Next.js", "Node.js", "Express", "Gemini AI", "Tailwind CSS"],
    highlights: ["OCR for collateral assessment", "Real-time loan simulation", "Rule-based financial models"],
    challenge:
      "Collateral assessment required multiple manual checks across documents, rules, and loan simulations, making the process slow and difficult to standardize.",
    solution:
      "We combined OCR, rule-based calculations, and a focused assessment dashboard so users can review extracted information and simulate financial scenarios in one place.",
    features: ["Collateral document OCR", "Assessment form workflow", "Loan simulation module", "Rule-based calculation logic", "Review-ready dashboard"],
    outcomes: ["More consistent assessment flow", "Less switching between tools", "Faster scenario comparison", "Clearer data trail for review"],
    relatedServices: ["solusi-ai-otomasi", "dashboard-sistem-manajemen", "integrasi-api-backend"],
    featured: false,
    gradient: "linear-gradient(135deg, #073b37, #134e4a)",
    images: ["/projects/pegadaian.png"],
  },
  {
    slug: "smart-water-monitoring",
    title: "Smart Water Monitoring",
    category: "Web Platform",
    description:
      "A water quality monitoring system for aquaculture operations, enabling admins and users to manage water condition data more effectively.",
    client: "Aquaculture research team",
    industry: "Aquaculture & IoT",
    timeline: "6-8 weeks",
    role: "Dashboard design, web platform, API integration",
    techStack: ["Laravel", "MySQL", "REST API", "IoT Sensors"],
    highlights: ["Real-time water quality data", "Role-based monitoring dashboard", "Research-backed prototype"],
    challenge:
      "Water quality data needed to be monitored and interpreted more consistently so operators could respond to pond condition changes sooner.",
    solution:
      "We developed a web dashboard that organizes sensor readings, pond records, and user roles into a clear monitoring experience for daily operations.",
    features: ["Water quality metric dashboard", "Pond-based monitoring views", "Role-based access", "Historical data tables", "REST API integration"],
    outcomes: ["Cleaner monitoring workflow", "Better visibility into pond conditions", "Centralized operational records", "A stronger base for future IoT expansion"],
    relatedServices: ["dashboard-sistem-manajemen", "integrasi-api-backend", "aplikasi-web-custom"],
    featured: false,
    gradient: "linear-gradient(135deg, #073b37, #115e59)",
    images: ["/projects/aqua-1.png"],
  },
  {
    slug: "namika-bali-group",
    title: "Company Profile Website",
    category: "Landing Page & Company Profile",
    description:
      "A responsive company profile website that presents brand identity, services, portfolio, and contact flow with a clean, professional layout.",
    client: "Namika Bali Group",
    industry: "Hospitality & services",
    timeline: "3-5 weeks",
    role: "Website design, frontend, SEO foundation",
    techStack: ["Next.js", "Tailwind CSS", "TypeScript"],
    highlights: ["Live production website", "Modern and responsive design", "SEO optimized"],
    challenge:
      "The brand needed a clearer digital presence that could communicate services, credibility, and contact paths without feeling generic.",
    solution:
      "We created a responsive company profile website with a polished visual system, concise service structure, portfolio-friendly sections, and direct contact flow.",
    features: ["Responsive company profile layout", "Service and portfolio sections", "SEO metadata foundation", "WhatsApp-ready CTA flow", "Performance-focused frontend"],
    outcomes: ["More professional brand presentation", "Clearer service explanation", "Easier inquiry path", "A scalable website structure for future content"],
    relatedServices: ["website-company-profile", "landing-page"],
    featured: true,
    gradient: "linear-gradient(135deg, #10201e, #0d9488)",
    images: ["/projects/namika-2.png"],
  },
];

export const projectCategories: ProjectCategory[] = ["AI & Automation", "Web Platform", "Landing Page & Company Profile"];

export function getProjectsByCategory(category: ProjectCategory) {
  return projects.filter((p) => p.category === category);
}

export function getFeaturedProjects() {
  return projects.filter((p) => p.featured);
}

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getProjectsByService(serviceSlug: string) {
  return projects.filter((project) => project.relatedServices.includes(serviceSlug));
}
