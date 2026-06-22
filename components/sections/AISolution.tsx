"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Bot, BrainCircuit, Cable, MessageCircle, Workflow } from "lucide-react";
import type { LucideIcon } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const aiFeatures: Array<{ title: string; desc: string; icon: LucideIcon; stat?: string; statLabel?: string }> = [
  {
    title: "AI Chatbot & Customer Service",
    desc: "Chatbot cerdas yang menjawab pertanyaan pelanggan 24/7, memproses leads, dan mengeskalasi ke tim human saat diperlukan.",
    icon: MessageCircle,
    stat: "24/7",
    statLabel: "Always on",
  },
  {
    title: "CS Automation",
    desc: "Automasi alur CS dari triage tiket, response template, hingga follow-up otomatis.",
    icon: Bot,
    stat: "80%",
    statLabel: "Waktu CS berkurang",
  },
  {
    title: "Internal Knowledge Assistant",
    desc: "Asisten AI berbasis data internal. Karyawan bisa tanya kebijakan, prosedur, atau info produk — langsung dapat jawaban akurat.",
    icon: BrainCircuit,
  },
  {
    title: "Business Automation",
    desc: "Automasi proses bisnis berulang — klasifikasi dokumen, ekstraksi data, hingga pengambilan keputusan berbasis rules.",
    icon: Workflow,
    stat: "3x",
    statLabel: "Lebih cepat",
  },
  {
    title: "Multi-channel Integration",
    desc: "Solusi AI terintegrasi langsung ke website, WhatsApp, dashboard, dan workflow bisnis yang sudah berjalan.",
    icon: Cable,
  },
];

export default function AISolution() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (gridRef.current) {
        const cards = gridRef.current.querySelectorAll(".bento-card");
        cards.forEach((card, i) => {
          gsap.from(card, {
            scrollTrigger: { trigger: card, start: "top 88%" },
            y: 60,
            opacity: 0,
            scale: 0.96,
            duration: 0.6,
            delay: i * 0.08,
            ease: "power2.out",
          });
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="ai-solution"
      style={{
        padding: "8rem 1.5rem",
        position: "relative",
        overflow: "hidden",
        background: "linear-gradient(180deg, #04120f 0%, #071a17 50%, #0a0f0f 100%)",
      }}
    >
      {/* Grid pattern */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "linear-gradient(rgba(13,148,136,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(13,148,136,0.04) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
          pointerEvents: "none",
        }}
      />

      {/* Animated gradient orbs */}
      <div
        className="ai-orb ai-orb-1"
        style={{
          position: "absolute",
          top: "10%",
          left: "15%",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(13,148,136,0.15) 0%, transparent 70%)",
          filter: "blur(60px)",
          pointerEvents: "none",
          animation: "orbFloat1 8s ease-in-out infinite",
        }}
      />
      <div
        className="ai-orb ai-orb-2"
        style={{
          position: "absolute",
          bottom: "15%",
          right: "10%",
          width: "350px",
          height: "350px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(20,184,166,0.12) 0%, transparent 70%)",
          filter: "blur(50px)",
          pointerEvents: "none",
          animation: "orbFloat2 10s ease-in-out infinite",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(13,148,136,0.08) 0%, transparent 60%)",
          filter: "blur(80px)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: "1100px", margin: "0 auto", position: "relative", zIndex: 2 }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.8rem",
              fontWeight: "600",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "var(--accent)",
              marginBottom: "0.75rem",
            }}
          >
            AI Solution
          </p>
          <h2
            style={{
              fontFamily: "'Satoshi', sans-serif",
              fontWeight: 400,
              fontSize: "clamp(2.2rem, 5vw, 3.5rem)",
              lineHeight: "1.1",
              letterSpacing: "-0.02em",
              color: "#f0fdfa",
              marginBottom: "1rem",
            }}
          >
            AI bukan gimmick,{" "}
            <span style={{ fontStyle: "italic", color: "var(--accent)" }}>alat efisiensi</span> nyata
          </h2>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "1rem",
              color: "#94a3b8",
              lineHeight: "1.7",
              maxWidth: "600px",
              margin: "0 auto",
            }}
          >
            Setiap solusi AI yang kami bangun punya use case nyata, diukur efektivitasnya, 
            dan dirancang untuk menghemat waktu dan biaya operasional.
          </p>
        </div>

        {/* Bento Grid */}
        <div
          ref={gridRef}
          className="bento-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gridTemplateRows: "auto auto",
            gap: "1.25rem",
          }}
        >
          {aiFeatures.map((f, i) => {
            const Icon = f.icon;
            // First 2 cards span different sizes for bento feel
            const isLarge = i === 0;
            const isMedium = i === 3;

            return (
              <div
                key={f.title}
                className="bento-card"
                style={{
                  gridColumn: isLarge ? "span 2" : isMedium ? "span 2" : "span 1",
                  padding: isLarge || isMedium ? "2.5rem" : "2rem",
                  borderRadius: "16px",
                  border: "1px solid rgba(13,148,136,0.15)",
                  background: "rgba(13,148,136,0.04)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                  transition: "border-color 0.3s, transform 0.3s, box-shadow 0.3s",
                  cursor: "default",
                  position: "relative",
                  overflow: "hidden",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "var(--accent)";
                  e.currentTarget.style.transform = "translateY(-3px)";
                  e.currentTarget.style.boxShadow = "0 12px 40px rgba(20,184,166,0.08)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--border)";
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                {/* Icon */}
                <div
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "12px",
                    background: "rgba(13,148,136,0.1)",
                    border: "1px solid rgba(13,148,136,0.2)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--accent)",
                  }}
                >
                  <Icon size={22} strokeWidth={1.8} />
                </div>

                {/* Content */}
                <h3
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: "600",
                    fontSize: isLarge || isMedium ? "1.2rem" : "1.05rem",
                    color: "#f0fdfa",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {f.title}
                </h3>
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.88rem",
                    color: "#94a3b8",
                    lineHeight: "1.7",
                    flex: 1,
                  }}
                >
                  {f.desc}
                </p>

                {/* Stat (if exists) */}
                {f.stat && (
                  <div style={{ marginTop: "0.5rem", paddingTop: "1rem", borderTop: "1px solid rgba(13,148,136,0.15)" }}>
                    <span
                      style={{
                        fontFamily: "'Satoshi', sans-serif",
                        fontSize: "2rem",
                        color: "var(--accent)",
                        letterSpacing: "-0.02em",
                      }}
                    >
                      {f.stat}
                    </span>
                    <span
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "0.78rem",
                        color: "#94a3b8",
                        marginLeft: "0.5rem",
                      }}
                    >
                      {f.statLabel}
                    </span>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div style={{ textAlign: "center", marginTop: "3rem" }}>
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
              background: "var(--accent)",
              color: "#fff",
              fontWeight: "600",
              fontSize: "0.95rem",
              fontFamily: "'Inter', sans-serif",
              textDecoration: "none",
              transition: "all 0.25s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "var(--accent-hover)";
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = "0 8px 24px rgba(20,184,166,0.3)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "var(--accent)";
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            Tanya tentang AI Solution
          </a>
        </div>
      </div>

      <style>{`
        @keyframes orbFloat1 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(30px, -20px) scale(1.1); }
        }
        @keyframes orbFloat2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(-25px, 15px) scale(1.05); }
        }
        @media (max-width: 767px) {
          .bento-grid {
            grid-template-columns: 1fr !important;
          }
          .bento-grid > div {
            grid-column: span 1 !important;
          }
        }
        @media (min-width: 768px) and (max-width: 1023px) {
          .bento-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .bento-grid > div:first-child {
            grid-column: span 2 !important;
          }
          .bento-grid > div:nth-child(4) {
            grid-column: span 2 !important;
          }
        }
      `}</style>
    </section>
  );
}
