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
    description: "Platform digitalisasi dokumen dengan AI extraction untuk proses onboarding KPR. Sistem mencakup workflow intake dokumen, OCR processing, dan review hasil ekstraksi.",
    techStack: ["Next.js", "Node.js", "Gemini AI", "Supabase", "PostgreSQL"],
    highlights: ["Automated extraction KTP, KK, NPWP, slip gaji", "Case-based workflow dengan audit trail", "Editable extraction output untuk review manual"],
    featured: true,
    gradient: "linear-gradient(135deg, #042f2e, #0d9488)",
    images: ["/projects/ai-ocr-1.png", "/projects/ai-ocr-2.png", "/projects/ai-ocr-3.png"],
  },
 
  {
    slug: "content-marketing-ai",
    title: "Content Marketing AI",
    category: "AI & Automation",
    description: "Platform creative automation yang mengubah satu product asset menjadi multiple marketing content — image concepts, captions, dan video ideas melalui AI workflow.",
    techStack: ["Next.js", "Node.js", "Gemini AI", "Computer Vision", "Tailwind CSS"],
    highlights: ["Single asset → multiple content output", "Prompt engineering & template generation", "Campaign generation workflow"],
    featured: true,
    gradient: "linear-gradient(135deg, #052e2b, #0f766e)",
    images: ["/projects/marketing-ai-1.png", "/projects/marketing-ai-2.png", "/projects/marketing-ai-3.png"],
  },
  {
    slug: "ai-collateral-assessment",
    title: "AI Collateral Assessment",
    category: "AI & Automation",
    description: "Aplikasi fintech dengan AI untuk document intelligence dan penilaian jaminan dalam proses pinjaman. Mendukung automated valuation dan simulasi keuangan real-time.",
    techStack: ["Next.js", "Node.js", "Express", "Gemini AI", "Tailwind CSS"],
    highlights: ["OCR untuk assessment jaminan", "Real-time loan simulation", "Rule-based financial models"],
    featured: false,
    gradient: "linear-gradient(135deg, #042f2e, #134e4a)",
    images: ["/projects/collateral-1.png", "/projects/collateral-2.png", "/projects/collateral-3.png"],
  },
 

  {
    slug: "smart-water-monitoring",
    title: "Smart Water Monitoring",
    category: "Web Platform",
    description: "Sistem monitoring kualitas air untuk tambak budidaya. Administrator dan pengguna dapat memantau dan mengelola data kualitas air secara efektif.",
    techStack: ["Laravel", "MySQL", "REST API", "IoT Sensors"],
    highlights: ["Real-time water quality data", "Role-based monitoring dashboard", "Research-backed prototype"],
    featured: false,
    gradient: "linear-gradient(135deg, #042f2e, #115e59)",
    images: ["/projects/aqua-1.png", "/projects/aqua-2.png", "/projects/aqua-3.png"],
  },
  {
    slug: "namika-bali-group",
    title: "Namika Bali Group",
    category: "Landing Page & Company Profile",
    description: "Company profile untuk Namika Bali Group — menampilkan brand, layanan, dan portofolio bisnis dengan desain modern dan responsif.",
    techStack: ["Next.js", "Tailwind CSS", "TypeScript"],
    highlights: ["Live production website", "Modern & responsive design", "SEO optimized"],
    featured: true,
    gradient: "linear-gradient(135deg, #0a0f0f, #0d9488)",
    images: ["/projects/namika-1.png", "/projects/namika-2.png", "/projects/namika-3.png"],
  },
];

export const projectCategories: ProjectCategory[] = ["AI & Automation", "Web Platform", "Landing Page & Company Profile"];

export function getProjectsByCategory(category: ProjectCategory) {
  return projects.filter((p) => p.category === category);
}

export function getFeaturedProjects() {
  return projects.filter((p) => p.featured);
}
