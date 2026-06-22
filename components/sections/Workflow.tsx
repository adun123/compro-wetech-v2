"use client";
import type { LucideIcon } from "lucide-react";
import { Brush, ClipboardCheck, Compass, Rocket, Search, Settings, ShieldCheck } from "lucide-react";

const steps: Array<{ num: string; title: string; desc: string; icon: LucideIcon }> = [
  { num: "01", title: "Discovery", desc: "Kami memahami bisnis, tujuan, dan tantangan Anda secara mendalam sebelum menulis satu baris kode pun.", icon: Search },
  { num: "02", title: "Strategy", desc: "Merancang arsitektur solusi, tech stack, timeline, dan roadmap yang sesuai scope dan budget.", icon: Compass },
  { num: "03", title: "Design", desc: "UI/UX yang bersih, intuitif, dan sesuai brand identity Anda. Prototype interaktif sebelum development.", icon: Brush },
  { num: "04", title: "Development", desc: "Pengembangan dengan standar kode yang bersih, terstruktur, dan scalable. Regular update progress.", icon: Settings },
  { num: "05", title: "Testing", desc: "QA menyeluruh — functional testing, cross-browser, mobile responsiveness, dan performance check.", icon: ClipboardCheck },
  { num: "06", title: "Launch", desc: "Deployment yang aman dengan monitoring, backup, dan dukungan penuh saat go-live.", icon: Rocket },
  { num: "07", title: "Maintenance", desc: "Support berkelanjutan, update, dan pengembangan fitur baru sesuai pertumbuhan bisnis Anda.", icon: ShieldCheck },
];

export default function Workflow() {
  return (
    <section
      id="workflow"
      style={{
        padding: "7rem 1.5rem",
        background: "var(--bg-primary)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          bottom: "0",
          left: "50%",
          transform: "translateX(-50%)",
          width: "800px",
          height: "300px",
          background: "radial-gradient(ellipse, var(--accent-glow) 0%, transparent 70%)",
          filter: "blur(40px)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: "1280px", margin: "0 auto", position: "relative", zIndex: 2 }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "5rem" }}>
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
            Proses Kerja
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
            Dari diskusi hingga{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #7c3aed, #a78bfa)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              live & tumbuh
            </span>
          </h2>
        </div>

        {/* Timeline */}
        <div style={{ position: "relative" }}>
          {/* Vertical line */}
          <div
            style={{
              position: "absolute",
              left: "28px",
              top: "12px",
              bottom: "12px",
              width: "2px",
              background: "linear-gradient(to bottom, #7c3aed, #4c1d95, #7c3aed)",
              opacity: 0.3,
            }}
            className="timeline-line"
          />

          <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
            {steps.map((step, i) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.num}
                  style={{
                    display: "flex",
                    gap: "2rem",
                    alignItems: "flex-start",
                    padding: "1.75rem 0",
                    paddingLeft: "0",
                    borderBottom: i < steps.length - 1 ? "1px solid var(--border)" : "none",
                    marginLeft: "0",
                    transition: "all 0.2s",
                  }}
                  className="timeline-item"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.paddingLeft = "0.5rem";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.paddingLeft = "0";
                  }}
                >
                {/* Dot */}
                <div
                  style={{
                    position: "relative",
                    zIndex: 2,
                    width: "56px",
                    height: "56px",
                    borderRadius: "50%",
                    background: "linear-gradient(135deg, #26185f, #7c3aed)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    color: "#f0eeff",
                    boxShadow: "0 4px 20px rgba(124,58,237,0.3)",
                  }}
                  className="timeline-dot"
                >
                  <Icon size={24} strokeWidth={1.8} />
                </div>

                {/* Content */}
                <div style={{ flex: 1, paddingTop: "0.75rem" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.5rem" }}>
                    <span
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "0.75rem",
                        fontWeight: "700",
                        color: "var(--text-accent)",
                        letterSpacing: "0.08em",
                      }}
                    >
                      {step.num}
                    </span>
                    <h3
                      style={{
                        fontFamily: "'Satoshi', sans-serif",
                        fontWeight: "700",
                        fontSize: "1.2rem",
                        color: "var(--text-primary)",
                        letterSpacing: "-0.01em",
                      }}
                    >
                      {step.title}
                    </h3>
                  </div>
                  <p
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.95rem",
                      color: "var(--text-muted)",
                      lineHeight: "1.6",
                      maxWidth: "600px",
                    }}
                  >
                    {step.desc}
                  </p>
                </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .timeline-line {
            left: 50% !important;
            transform: translateX(-50%);
          }
          .timeline-item {
            display: grid !important;
            grid-template-columns: 1fr auto 1fr !important;
            align-items: center !important;
            gap: 2rem !important;
            padding-left: 0 !important;
          }
          .timeline-item:nth-child(even) .timeline-dot {
            order: 2;
          }
          .timeline-item:nth-child(even) > div:first-child {
            order: 3;
            text-align: left;
          }
          .timeline-item:nth-child(even) > div:last-child {
            order: 1;
            text-align: right;
          }
          .timeline-item:nth-child(even) > div:last-child p {
            margin-left: auto;
          }
        }
      `}</style>
    </section>
  );
}
