"use client";
import type { LucideIcon } from "lucide-react";
import { Bot, BrainCircuit, Cable, MessageCircle, Workflow } from "lucide-react";

const aiFeatures: Array<{ title: string; desc: string; icon: LucideIcon }> = [
  {
    title: "AI Chatbot & Customer Service",
    desc: "Chatbot cerdas yang mampu menjawab pertanyaan pelanggan 24/7, memproses leads, dan mengeskalasi ke tim human saat diperlukan.",
    icon: MessageCircle,
  },
  {
    title: "AI Customer Service Automation",
    desc: "Automasi alur CS dari triage tiket, response template, hingga follow-up otomatis — tim Anda fokus pada kasus yang benar-benar butuh perhatian.",
    icon: Bot,
  },
  {
    title: "AI Internal Knowledge Assistant",
    desc: "Asisten AI berbasis data internal perusahaan. Karyawan bisa tanya kebijakan, prosedur, atau informasi produk — langsung dapat jawaban akurat.",
    icon: BrainCircuit,
  },
  {
    title: "AI Business Automation",
    desc: "Automasi proses bisnis berulang menggunakan AI — dari klasifikasi dokumen, ekstraksi data, hingga pengambilan keputusan berbasis rules yang kompleks.",
    icon: Workflow,
  },
  {
    title: "Multi-channel Integration",
    desc: "Solusi AI terintegrasi langsung ke website, WhatsApp, dashboard, dan workflow bisnis yang sudah berjalan — tanpa mengganggu sistem yang ada.",
    icon: Cable,
  },
];

export default function AISolution() {
  return (
    <section
      id="ai-solution"
      style={{
        padding: "7rem 1.5rem",
        position: "relative",
        overflow: "hidden",
        background: "var(--bg-secondary)",
      }}
    >
      {/* Background accent */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `
            radial-gradient(ellipse at 10% 80%, rgba(38,24,95,0.3) 0%, transparent 60%),
            radial-gradient(ellipse at 90% 20%, rgba(96,165,250,0.08) 0%, transparent 50%)
          `,
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: "1280px", margin: "0 auto", position: "relative", zIndex: 2 }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "4rem",
            alignItems: "start",
          }}
          className="ai-grid"
        >
          {/* Left: Headline */}
          <div className="ai-left">
            <p
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "0.8rem",
                fontWeight: "600",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "var(--text-accent)",
                marginBottom: "1rem",
              }}
            >
              AI Solution
            </p>
            <h2
              style={{
                fontFamily: "'Sora', sans-serif",
                fontWeight: "800",
                fontSize: "clamp(2rem, 4.5vw, 3.5rem)",
                lineHeight: "1.1",
                letterSpacing: "-0.03em",
                color: "var(--text-primary)",
                marginBottom: "1.5rem",
              }}
            >
              AI bukan{" "}
              <em
                style={{
                  fontStyle: "normal",
                  textDecoration: "line-through",
                  opacity: 0.5,
                }}
              >
                gimmick
              </em>
              <br />
              <span
                style={{
                  background: "linear-gradient(135deg, #7c3aed, #60a5fa)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                alat efisiensi
              </span>{" "}
              nyata
            </h2>
            <p
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "1.05rem",
                color: "var(--text-secondary)",
                lineHeight: "1.7",
                marginBottom: "2rem",
                maxWidth: "480px",
              }}
            >
              Kami tidak menjual AI sebagai buzzword. Setiap solusi AI yang kami bangun
              memiliki use case nyata, diukur efektivitasnya, dan dirancang untuk
              menghemat waktu dan biaya operasional bisnis Anda.
            </p>

            {/* Stats */}
            <div style={{ display: "flex", gap: "2.5rem", flexWrap: "wrap", marginBottom: "2.5rem" }}>
              {[
                { num: "80%", label: "Pengurangan waktu CS" },
                { num: "24/7", label: "Layanan tanpa henti" },
                { num: "3x", label: "Respons lebih cepat" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div
                    style={{
                      fontFamily: "'Sora', sans-serif",
                      fontWeight: "800",
                      fontSize: "2rem",
                      color: "var(--text-accent)",
                      letterSpacing: "-0.03em",
                    }}
                  >
                    {stat.num}
                  </div>
                  <div
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: "0.8rem",
                      color: "var(--text-muted)",
                    }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            <a
              href="https://wa.me/6287877946981?text=Halo%20WeTech%20Studio%2C%20saya%20tertarik%20dengan%20AI%20Solution"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.875rem 2rem",
                borderRadius: "50px",
                background: "linear-gradient(135deg, #26185f, #7c3aed)",
                color: "#fff",
                fontWeight: "600",
                fontSize: "0.95rem",
                fontFamily: "'Sora', sans-serif",
                textDecoration: "none",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow = "0 8px 30px rgba(124,58,237,0.4)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              Tanya tentang AI Solution
            </a>
          </div>

          {/* Right: Feature list */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {aiFeatures.map((f) => {
              const Icon = f.icon;

              return (
                <div
                  key={f.title}
                  style={{
                    display: "flex",
                    gap: "1.25rem",
                    padding: "1.5rem",
                    borderRadius: "16px",
                    border: "1px solid var(--border)",
                    background: "var(--bg-surface)",
                    transition: "all 0.25s",
                    cursor: "default",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "var(--accent-bright)";
                    e.currentTarget.style.transform = "translateX(6px)";
                    e.currentTarget.style.background = "var(--bg-muted)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "var(--border)";
                    e.currentTarget.style.transform = "translateX(0)";
                    e.currentTarget.style.background = "var(--bg-surface)";
                  }}
                >
                <div
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "12px",
                    background: "linear-gradient(135deg, #26185f20, #7c3aed20)",
                    border: "1px solid var(--border)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--text-accent)",
                    flexShrink: 0,
                  }}
                >
                  <Icon size={22} strokeWidth={1.8} />
                </div>
                <div>
                  <h3
                    style={{
                      fontFamily: "'Sora', sans-serif",
                      fontWeight: "700",
                      fontSize: "1rem",
                      color: "var(--text-primary)",
                      marginBottom: "0.4rem",
                    }}
                  >
                    {f.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: "0.875rem",
                      color: "var(--text-muted)",
                      lineHeight: "1.6",
                    }}
                  >
                    {f.desc}
                  </p>
                </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 1024px) {
          .ai-grid {
            grid-template-columns: 1fr 1.2fr !important;
          }
        }
      `}</style>
    </section>
  );
}
