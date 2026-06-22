"use client";

const projects = [
  {
    num: "01",
    title: "Company Profile Website",
    category: "Web Design",
    desc: "Website corporate profesional dengan design premium yang mencerminkan identitas brand dan meningkatkan kepercayaan calon klien.",
    tags: ["Next.js", "Tailwind", "CMS Integration"],
    accent: "#7c3aed",
    bg: "linear-gradient(135deg, #1a0a4a, #26185f)",
  },
  {
    num: "02",
    title: "Business Dashboard",
    category: "Web Application",
    desc: "Dashboard analitik bisnis real-time dengan visualisasi data, reporting otomatis, dan multi-role access control.",
    tags: ["React", "Chart.js", "REST API"],
    accent: "#6d28d9",
    bg: "linear-gradient(135deg, #0d0820, #1a1240)",
  },
  {
    num: "03",
    title: "Custom Management System",
    category: "System",
    desc: "Sistem manajemen internal yang menggantikan proses manual dengan workflow digital yang efisien dan terstandarisasi.",
    tags: ["Full-stack", "Database", "Automation"],
    accent: "#4c1d95",
    bg: "linear-gradient(135deg, #0f0a2e, #1a0a4a)",
  },
  {
    num: "04",
    title: "AI Chatbot Solution",
    category: "AI Integration",
    desc: "Implementasi AI chatbot untuk CS automation yang terintegrasi dengan WhatsApp, website, dan sistem internal klien.",
    tags: ["AI/ML", "WhatsApp API", "NLP"],
    accent: "#7c3aed",
    bg: "linear-gradient(135deg, #0d0820, #26185f)",
  },
];

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      style={{
        padding: "7rem 1.5rem",
        background: "var(--bg-secondary)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "0",
          left: "0",
          right: "0",
          height: "1px",
          background: "linear-gradient(90deg, transparent, var(--accent-bright), transparent)",
          opacity: 0.3,
        }}
      />

      <div style={{ maxWidth: "1280px", margin: "0 auto", position: "relative", zIndex: 2 }}>
        {/* Header */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            marginBottom: "4rem",
            flexWrap: "wrap",
            gap: "1.5rem",
          }}
        >
          <div>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.8rem",
                fontWeight: "600",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "var(--text-accent)",
                marginBottom: "1rem",
              }}
            >
              Portfolio
            </p>
            <h2
              style={{
                fontFamily: "'Satoshi', sans-serif",
                fontWeight: "800",
                fontSize: "clamp(2rem, 5vw, 3.5rem)",
                lineHeight: "1.1",
                letterSpacing: "-0.03em",
                color: "var(--text-primary)",
              }}
            >
              Hasil kerja yang{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #7c3aed, #a78bfa)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                berbicara sendiri
              </span>
            </h2>
          </div>
          <a
            href="https://wa.me/6281234567890?text=Saya%20ingin%20melihat%20portfolio%20lengkap%20WeTech%20Studio"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.9rem",
              color: "var(--text-accent)",
              textDecoration: "none",
              fontWeight: "600",
              display: "flex",
              alignItems: "center",
              gap: "0.4rem",
              transition: "gap 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.gap = "0.75rem")}
            onMouseLeave={(e) => (e.currentTarget.style.gap = "0.4rem")}
          >
            Lihat semua project →
          </a>
        </div>

        {/* Project showcase */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "1.5rem",
          }}
          className="portfolio-grid"
        >
          {projects.map((p) => (
            <div
              key={p.num}
              style={{
                borderRadius: "20px",
                overflow: "hidden",
                border: "1px solid var(--border)",
                transition: "all 0.3s",
                cursor: "pointer",
                position: "relative",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-6px)";
                e.currentTarget.style.borderColor = p.accent;
                e.currentTarget.style.boxShadow = `0 20px 60px ${p.accent}30`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.borderColor = "var(--border)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              {/* Mock preview */}
              <div
                style={{
                  height: "200px",
                  background: p.bg,
                  position: "relative",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  overflow: "hidden",
                }}
              >
                {/* Abstract mockup elements */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    backgroundImage: `linear-gradient(rgba(124,58,237,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(124,58,237,0.08) 1px, transparent 1px)`,
                    backgroundSize: "30px 30px",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    top: "20%",
                    left: "15%",
                    right: "15%",
                    bottom: "20%",
                    borderRadius: "12px",
                    border: `1px solid ${p.accent}40`,
                    background: `${p.accent}10`,
                    backdropFilter: "blur(4px)",
                    display: "flex",
                    flexDirection: "column",
                    padding: "1.5rem",
                    gap: "0.75rem",
                  }}
                >
                  <div style={{ display: "flex", gap: "0.5rem" }}>
                    {["#ff6b6b", "#ffd93d", "#6bcb77"].map((c) => (
                      <div key={c} style={{ width: "8px", height: "8px", borderRadius: "50%", background: c }} />
                    ))}
                  </div>
                  <div style={{ height: "8px", width: "60%", borderRadius: "4px", background: `${p.accent}60` }} />
                  <div style={{ height: "6px", width: "40%", borderRadius: "3px", background: `${p.accent}30` }} />
                  <div
                    style={{
                      flex: 1,
                      borderRadius: "8px",
                      background: `${p.accent}15`,
                      border: `1px solid ${p.accent}25`,
                    }}
                  />
                </div>

                {/* Category label */}
                <div
                  style={{
                    position: "absolute",
                    top: "1rem",
                    right: "1rem",
                    padding: "0.3rem 0.8rem",
                    borderRadius: "50px",
                    background: "rgba(0,0,0,0.5)",
                    backdropFilter: "blur(10px)",
                    color: "#fff",
                    fontSize: "0.75rem",
                    fontWeight: "600",
                    fontFamily: "'Inter', sans-serif",
                    letterSpacing: "0.05em",
                  }}
                >
                  {p.category}
                </div>
              </div>

              {/* Info */}
              <div
                style={{
                  padding: "1.5rem",
                  background: "var(--bg-surface)",
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "0.75rem" }}>
                  <h3
                    style={{
                      fontFamily: "'Satoshi', sans-serif",
                      fontWeight: "700",
                      fontSize: "1.15rem",
                      color: "var(--text-primary)",
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {p.title}
                  </h3>
                  <span
                    style={{
                      fontFamily: "'Satoshi', sans-serif",
                      fontSize: "0.75rem",
                      color: "var(--text-muted)",
                      fontWeight: "700",
                    }}
                  >
                    {p.num}
                  </span>
                </div>
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.875rem",
                    color: "var(--text-muted)",
                    lineHeight: "1.6",
                    marginBottom: "1rem",
                  }}
                >
                  {p.desc}
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                  {p.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        padding: "0.25rem 0.7rem",
                        borderRadius: "50px",
                        fontSize: "0.75rem",
                        fontWeight: "500",
                        fontFamily: "'Inter', sans-serif",
                        background: "var(--bg-muted)",
                        color: "var(--text-secondary)",
                        border: "1px solid var(--border)",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .portfolio-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
    </section>
  );
}
