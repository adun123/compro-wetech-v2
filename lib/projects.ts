export type ProjectCategory = "AI & Automation" | "Web Platform" | "Landing Page & Company Profile";

export type Project = {
  slug: string;
  title: string;
  category: ProjectCategory;
  description: string;
  techStack: string[];
  highlights: string[];
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
    techStack: ["Next.js", "Node.js", "Gemini AI", "Supabase", "PostgreSQL"],
    highlights: ["Automated extraction for identity and financial documents", "Case-based workflow with audit trail", "Editable extraction output for manual review"],
    featured: true,
    gradient: "linear-gradient(135deg, #073b37, #0d9488)",
    images: ["/projects/ai-ocr-1.png", "/projects/ai-ocr-2.png", "/generated/compro-hero.png"],
  },
  {
    slug: "content-marketing-ai",
    title: "Content Marketing AI",
    category: "AI & Automation",
    description:
      "A creative automation platform that turns one product asset into multiple marketing outputs, including image concepts, captions, and video ideas.",
    techStack: ["Next.js", "Node.js", "Gemini AI", "Computer Vision", "Tailwind CSS"],
    highlights: ["Single asset to multiple content outputs", "Prompt engineering and template generation", "Campaign generation workflow"],
    featured: true,
    gradient: "linear-gradient(135deg, #052e2b, #0f766e)",
    images: ["/projects/marketing-ai-1.png", "/projects/marketing-ai-2.png", "/projects/marketing-ai-3.png"],
  },
  {
    slug: "ai-collateral-assessment",
    title: "AI Collateral Assessment",
    category: "AI & Automation",
    description:
      "A fintech application for document intelligence and collateral assessment in loan workflows, supporting automated valuation and real-time financial simulations.",
    techStack: ["Next.js", "Node.js", "Express", "Gemini AI", "Tailwind CSS"],
    highlights: ["OCR for collateral assessment", "Real-time loan simulation", "Rule-based financial models"],
    featured: false,
    gradient: "linear-gradient(135deg, #073b37, #134e4a)",
    images: ["/generated/compro-hero.png", "/projects/ai-ocr-1.png", "/projects/marketing-ai-1.png"],
  },
  {
    slug: "smart-water-monitoring",
    title: "Smart Water Monitoring",
    category: "Web Platform",
    description:
      "A water quality monitoring system for aquaculture operations, enabling admins and users to manage water condition data more effectively.",
    techStack: ["Laravel", "MySQL", "REST API", "IoT Sensors"],
    highlights: ["Real-time water quality data", "Role-based monitoring dashboard", "Research-backed prototype"],
    featured: false,
    gradient: "linear-gradient(135deg, #073b37, #115e59)",
    images: ["/projects/aqua-1.png", "/projects/aqua-2.png", "/projects/aqua-3.png"],
  },
  {
    slug: "namika-bali-group",
    title: "Company Profile Website",
    category: "Landing Page & Company Profile",
    description:
      "A responsive company profile website that presents brand identity, services, portfolio, and contact flow with a clean, professional layout.",
    techStack: ["Next.js", "Tailwind CSS", "TypeScript"],
    highlights: ["Live production website", "Modern and responsive design", "SEO optimized"],
    featured: true,
    gradient: "linear-gradient(135deg, #10201e, #0d9488)",
    images: ["/projects/namika-1.png", "/generated/compro-hero.png", "/projects/marketing-ai-2.png"],
  },
];

export const projectCategories: ProjectCategory[] = ["AI & Automation", "Web Platform", "Landing Page & Company Profile"];

export function getProjectsByCategory(category: ProjectCategory) {
  return projects.filter((p) => p.category === category);
}

export function getFeaturedProjects() {
  return projects.filter((p) => p.featured);
}
