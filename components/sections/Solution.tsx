"use client";
import type { LucideIcon } from "lucide-react";
import { Handshake, Ruler, Target, Zap } from "lucide-react";

const pillars: Array<{ icon: LucideIcon; title: string; desc: string }> = [
  { icon: Zap, title: "Functional", desc: "Solusi yang benar-benar bekerja sesuai kebutuhan bisnis nyata." },
  { icon: Ruler, title: "Scalable", desc: "Dibangun untuk tumbuh bersama bisnis Anda, tidak perlu rebuild dari nol." },
  { icon: Target, title: "Strategic", desc: "Setiap keputusan teknis didasarkan pada tujuan bisnis yang jelas." },
  { icon: Handshake, title: "Supportive", desc: "End-to-end support dari konsultasi hingga setelah launch." },
];

export default function Solution() {
  return (
    <section
      id="solution"
      style={{
        padding: "8rem 1.5rem",
        position: "relative",
        overflow: "hidden",
        background: "linear-gradient(135deg, #26185f 0%, #1a0a4a 40%, #0d0820 100%)",
      }}
    >
      {/* Mesh overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            radial-gradient(ellipse at 20% 50%, rgba(124,58,237,0.2) 0%, transparent 60%),
            radial-gradient(ellipse at 80% 20%, rgba(96,165,250,0.1) 0%, transparent 50%)
          `,
          pointerEvents: "none",
        }}
      />

      {/* Grid lines */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(124,58,237,0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(124,58,237,0.06) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 10,
          maxWidth: "1280px",
          margin: "0 auto",
        }}
      >
        {/* Label */}
        <p
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "0.8rem",
            fontWeight: "600",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "#a78bfa",
            marginBottom: "2rem",
            textAlign: "center",
          }}
        >
          Solusi Kami
        </p>

        {/* Bold statement */}
        <div style={{ maxWidth: "960px", margin: "0 auto", textAlign: "center" }}>
          <h2
            style={{
              fontFamily: "'Sora', sans-serif",
              fontWeight: "800",
              fontSize: "clamp(2rem, 5.5vw, 4.5rem)",
              lineHeight: "1.1",
              letterSpacing: "-0.03em",
              color: "#f0eeff",
              marginBottom: "2.5rem",
            }}
          >
            WeTech Studio hadir sebagai{" "}
            <em
              style={{
                fontStyle: "normal",
                background: "linear-gradient(135deg, #a78bfa, #60a5fa)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              technology partner
            </em>{" "}
            yang mengubah kebutuhan bisnis menjadi solusi digital yang fungsional,
            scalable, dan mudah digunakan.
          </h2>

          <p
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "clamp(1rem, 1.8vw, 1.2rem)",
              lineHeight: "1.7",
              color: "#c4b5fd",
              marginBottom: "3rem",
              maxWidth: "700px",
              margin: "0 auto 3rem",
            }}
          >
            Kami tidak hanya membangun produk digital — kami memahami bisnis Anda,
            merancang solusi yang tepat, dan memastikan teknologi yang kami bangun
            benar-benar bekerja untuk pertumbuhan Anda.
          </p>
        </div>

        {/* Value pillars */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "1.5rem",
            marginTop: "4rem",
          }}
        >
          {pillars.map((pillar) => {
            const Icon = pillar.icon;

            return (
              <div
                key={pillar.title}
                style={{
                  padding: "2rem",
                  borderRadius: "16px",
                  border: "1px solid rgba(124,58,237,0.3)",
                  background: "rgba(19,13,46,0.6)",
                  backdropFilter: "blur(10px)",
                  transition: "all 0.3s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "rgba(167,139,250,0.6)";
                  e.currentTarget.style.background = "rgba(38,24,95,0.7)";
                  e.currentTarget.style.transform = "translateY(-4px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(124,58,237,0.3)";
                  e.currentTarget.style.background = "rgba(19,13,46,0.6)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <div style={{ color: "var(--text-accent)", marginBottom: "1rem" }}>
                  <Icon size={32} strokeWidth={1.75} />
                </div>
                <h3
                  style={{
                    fontFamily: "'Sora', sans-serif",
                    fontWeight: "700",
                    fontSize: "1.1rem",
                    color: "#f0eeff",
                    marginBottom: "0.5rem",
                  }}
                >
                  {pillar.title}
                </h3>
                <p
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: "0.9rem",
                    color: "#7c6fa0",
                    lineHeight: "1.6",
                  }}
                >
                  {pillar.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
