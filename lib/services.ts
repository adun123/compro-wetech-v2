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
    title: "Website Company Profile",
    tag: "Web",
    short: "Kehadiran digital yang kredibel untuk bisnis Anda.",
    description:
      "Website company profile yang menjelaskan brand, layanan, dan keunggulan bisnis dengan struktur konten yang rapi, tampilan premium, dan fondasi SEO yang mudah dirayapi mesin pencari.",
    color: "#0d9488",
    metadata: {
      title: "Jasa Website Company Profile Profesional",
      description:
        "Jasa pembuatan website company profile profesional untuk bisnis yang membutuhkan website kredibel, responsif, cepat, dan SEO-ready.",
      keywords: [
        "jasa website company profile",
        "website perusahaan",
        "website bisnis profesional",
        "pembuatan website Jakarta",
      ],
    },
    benefits: ["Kredibilitas brand meningkat", "Struktur informasi lebih jelas", "Responsif untuk mobile", "Fondasi SEO on-page"],
    idealFor: ["Perusahaan jasa", "B2B dan vendor corporate", "UMKM yang ingin terlihat profesional", "Brand yang butuh kanal informasi resmi"],
    deliverables: ["Desain halaman utama dan halaman pendukung", "Copy structure untuk profil layanan", "Form kontak atau WhatsApp CTA", "Setup metadata dasar dan sitemap entry"],
    process: ["Discovery brand dan tujuan website", "Perancangan struktur halaman", "Desain UI dan development", "Review konten, testing, dan launch"],
    faq: [
      {
        question: "Apakah website company profile bisa disesuaikan dengan identitas brand?",
        answer: "Ya. Struktur, visual, dan konten disesuaikan dengan positioning bisnis, target audiens, dan aset brand yang tersedia.",
      },
      {
        question: "Apakah website langsung SEO-ready?",
        answer: "Website disiapkan dengan metadata, struktur heading, internal link, dan performa dasar. Strategi SEO lanjutan dapat dibahas sesuai kebutuhan.",
      },
    ],
  },
  {
    id: "02",
    slug: "landing-page",
    path: "/layanan/landing-page",
    title: "Landing Page",
    tag: "Web",
    short: "Halaman kampanye yang fokus pada konversi.",
    description:
      "Landing page untuk produk, campaign, atau layanan spesifik dengan alur pesan yang terarah, CTA jelas, dan struktur tracking yang siap membantu evaluasi performa campaign.",
    color: "#0f766e",
    metadata: {
      title: "Jasa Landing Page untuk Campaign dan Produk",
      description:
        "Jasa pembuatan landing page responsif untuk campaign, produk, dan layanan dengan fokus pada pesan, CTA, dan struktur konversi.",
      keywords: ["jasa landing page", "landing page campaign", "landing page produk", "landing page konversi"],
    },
    benefits: ["Pesan campaign lebih fokus", "CTA lebih mudah dipahami", "Siap integrasi tracking", "Mudah dikembangkan untuk eksperimen"],
    idealFor: ["Campaign iklan digital", "Peluncuran produk baru", "Lead generation", "Promosi layanan tertentu"],
    deliverables: ["Hero dan value proposition", "Section benefit dan bukti pendukung tanpa klaim palsu", "Form atau CTA WhatsApp", "Metadata dan struktur halaman crawlable"],
    process: ["Pemetaan target audiens", "Penyusunan angle dan urutan konten", "Desain dan implementasi halaman", "Testing CTA dan tracking dasar"],
    faq: [
      {
        question: "Apakah landing page bisa dipakai untuk iklan?",
        answer: "Bisa. Halaman disusun agar pesan, CTA, dan informasi penting mudah dipahami oleh traffic dari campaign.",
      },
      {
        question: "Apakah bisa terhubung ke WhatsApp atau form?",
        answer: "Bisa. CTA dapat diarahkan ke WhatsApp, email, atau form sesuai alur follow-up bisnis Anda.",
      },
    ],
  },
  {
    id: "03",
    slug: "aplikasi-web-custom",
    path: "/layanan/aplikasi-web-custom",
    title: "Aplikasi Web Custom",
    tag: "App",
    short: "Sistem web yang mengikuti proses bisnis Anda.",
    description:
      "Aplikasi web custom untuk kebutuhan internal atau pelanggan, dibangun berdasarkan proses bisnis nyata, role pengguna, validasi data, dan alur kerja yang tidak cocok ditangani template umum.",
    color: "#115e59",
    metadata: {
      title: "Jasa Pembuatan Aplikasi Web Custom",
      description:
        "Jasa pembuatan aplikasi web custom untuk sistem internal, workflow operasional, portal pelanggan, dan kebutuhan bisnis spesifik.",
      keywords: ["aplikasi web custom", "jasa web app", "sistem internal bisnis", "software custom"],
    },
    benefits: ["Alur sesuai proses bisnis", "Role akses lebih terkontrol", "Data tersimpan lebih rapi", "Siap dikembangkan bertahap"],
    idealFor: ["Operasional yang masih manual", "Tim dengan banyak approval", "Portal pelanggan atau mitra", "Bisnis dengan workflow unik"],
    deliverables: ["Analisis requirement dan user flow", "UI aplikasi web responsif", "Fitur utama sesuai scope", "Dokumentasi penggunaan dasar"],
    process: ["Discovery proses bisnis", "Penyusunan scope dan prioritas fitur", "Development iteratif", "Uji fungsi bersama tim pengguna"],
    faq: [
      {
        question: "Apakah semua fitur harus dibuat sekaligus?",
        answer: "Tidak. Scope dapat diprioritaskan menjadi versi awal yang paling penting, lalu dikembangkan bertahap sesuai kebutuhan.",
      },
      {
        question: "Apakah aplikasi bisa memiliki beberapa role user?",
        answer: "Bisa. Role dan hak akses dirancang sesuai struktur tim dan kebutuhan kontrol data.",
      },
    ],
  },
  {
    id: "04",
    slug: "dashboard-sistem-manajemen",
    path: "/layanan/dashboard-sistem-manajemen",
    title: "Dashboard & Sistem Manajemen",
    tag: "System",
    short: "Data dan aktivitas bisnis dalam satu tempat.",
    description:
      "Dashboard dan sistem manajemen untuk mengumpulkan data penting, memantau status pekerjaan, melihat tren, dan membantu owner atau manajer mengambil keputusan dengan informasi yang lebih terstruktur.",
    color: "#0f766e",
    metadata: {
      title: "Jasa Dashboard dan Sistem Manajemen Bisnis",
      description:
        "Jasa pembuatan dashboard bisnis dan sistem manajemen untuk laporan, monitoring operasional, workflow, dan visualisasi data.",
      keywords: ["jasa dashboard bisnis", "sistem manajemen", "dashboard operasional", "visualisasi data bisnis"],
    },
    benefits: ["Data lebih mudah dipantau", "Laporan lebih konsisten", "Status kerja transparan", "Keputusan lebih cepat"],
    idealFor: ["Owner yang butuh ringkasan data", "Tim operasional", "Manajer proyek", "Bisnis dengan laporan berulang"],
    deliverables: ["Dashboard metrik utama", "Tabel dan filter data", "Role pengguna sesuai kebutuhan", "Export atau laporan sesuai scope"],
    process: ["Identifikasi metrik penting", "Mapping sumber dan struktur data", "Desain dashboard", "Testing skenario laporan"],
    faq: [
      {
        question: "Apakah dashboard harus real-time?",
        answer: "Tidak selalu. Frekuensi update data disesuaikan dengan kebutuhan bisnis, sumber data, dan prioritas biaya pengembangan.",
      },
      {
        question: "Apakah bisa export laporan?",
        answer: "Bisa jika termasuk dalam scope. Format export dan kolom data ditentukan saat perancangan kebutuhan.",
      },
    ],
  },
  {
    id: "05",
    slug: "integrasi-api-backend",
    path: "/layanan/integrasi-api-backend",
    title: "Integrasi API & Backend",
    tag: "Integration",
    short: "Hubungkan sistem agar data tidak bekerja sendiri-sendiri.",
    description:
      "Integrasi API dan backend untuk menyambungkan website, payment, CRM, ERP, WhatsApp, database, atau layanan pihak ketiga agar proses data lebih sinkron dan pekerjaan manual berkurang.",
    color: "#134e4a",
    metadata: {
      title: "Jasa Integrasi API dan Backend",
      description:
        "Jasa integrasi API dan pengembangan backend untuk menghubungkan sistem, sinkronisasi data, payment, CRM, ERP, dan workflow digital.",
      keywords: ["jasa integrasi API", "backend development", "integrasi payment gateway", "sinkronisasi data"],
    },
    benefits: ["Data antar sistem lebih sinkron", "Input manual berkurang", "Workflow lebih scalable", "Dokumentasi integrasi lebih jelas"],
    idealFor: ["Bisnis dengan banyak tools", "Sistem yang butuh payment gateway", "Operasional dengan rekonsiliasi manual", "Platform yang perlu API internal"],
    deliverables: ["Endpoint API sesuai scope", "Integrasi third-party yang disepakati", "Validasi dan handling response", "Dokumentasi teknis dasar"],
    process: ["Audit sistem dan API yang tersedia", "Desain flow data", "Implementasi integrasi", "Testing skenario sukses dan gagal"],
    faq: [
      {
        question: "Apakah semua tools bisa diintegrasikan?",
        answer: "Tergantung ketersediaan API, izin akses, dan dokumentasi dari masing-masing tool. Kami akan mengecek kelayakan sebelum implementasi.",
      },
      {
        question: "Apakah data lama perlu dimigrasikan?",
        answer: "Jika diperlukan, migrasi data dapat dibahas sebagai scope terpisah setelah struktur dan sumber data dipetakan.",
      },
    ],
  },
  {
    id: "06",
    slug: "solusi-ai-otomasi",
    path: "/layanan/solusi-ai-otomasi",
    title: "Solusi AI & Otomasi",
    tag: "AI",
    short: "AI praktis untuk workflow dan layanan pelanggan.",
    description:
      "Solusi AI dan otomasi yang dirancang untuk use case bisnis nyata seperti triage customer service, pencarian knowledge internal, klasifikasi data, dan workflow berulang yang dapat dibantu sistem.",
    color: "#0d9488",
    metadata: {
      title: "Jasa Solusi AI dan Otomasi Bisnis",
      description:
        "Jasa solusi AI dan otomasi untuk chatbot, knowledge assistant, workflow automation, dan integrasi AI ke proses bisnis.",
      keywords: ["solusi AI bisnis", "jasa chatbot AI", "otomasi bisnis", "AI customer service", "workflow automation"],
    },
    benefits: ["Respons awal lebih cepat", "Tugas berulang berkurang", "Knowledge internal lebih mudah dicari", "AI terhubung ke workflow yang relevan"],
    idealFor: ["Tim customer service", "Bisnis dengan FAQ berulang", "Operasional dokumen", "Tim yang butuh asisten internal"],
    deliverables: ["Pemetaan use case AI", "Prototype atau modul AI sesuai scope", "Integrasi channel atau dashboard", "Panduan penggunaan dan evaluasi awal"],
    process: ["Identifikasi pekerjaan berulang", "Validasi data dan batasan AI", "Implementasi solusi", "Testing jawaban, eskalasi, dan workflow"],
    faq: [
      {
        question: "Apakah AI akan menggantikan tim manusia?",
        answer: "Tujuan utamanya membantu pekerjaan berulang dan mempercepat respons awal. Untuk kasus kompleks, alur eskalasi ke manusia tetap dapat disiapkan.",
      },
      {
        question: "Apakah AI bisa memakai data internal perusahaan?",
        answer: "Bisa jika data tersedia dan diizinkan untuk digunakan. Struktur akses, keamanan, dan batasan jawaban perlu dirancang sejak awal.",
      },
    ],
  },
];

export const servicePaths = services.map((service) => service.path);

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug);
}
