"use client";
import Link from "next/link";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { services } from "@/lib/services";

export default function Services() {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <section
      id="services"
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
          top: "30%",
          right: "-200px",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background: "radial-gradient(circle, var(--accent-glow) 0%, transparent 70%)",
          filter: "blur(60px)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: "1280px", margin: "0 auto", position: "relative", zIndex: 2 }}>
        {/* Header */}
        <div style={{ marginBottom: "4rem" }}>
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
            Layanan Kami
          </p>
          <h2
            style={{
              fontFamily: "'Sora', sans-serif",
              fontWeight: "800",
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              lineHeight: "1.1",
              letterSpacing: "-0.03em",
              color: "var(--text-primary)",
              maxWidth: "600px",
            }}
          >
            Solusi digital lengkap untuk setiap{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #7c3aed, #a78bfa)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              kebutuhan bisnis
            </span>
          </h2>
        </div>

        {/* Service interactive list */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "0",
          }}
          className="services-grid"
        >
          {/* Service list */}
          <div>
            {services.map((s, i) => (
              <div
                key={s.id}
                onClick={() => setActiveIdx(i)}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  padding: "1.75rem 1.5rem",
                  borderBottom: "1px solid var(--border)",
                  cursor: "pointer",
                  background: activeIdx === i ? "var(--bg-surface)" : "transparent",
                  borderRadius: activeIdx === i ? "12px" : "0",
                  borderLeft: activeIdx === i ? `3px solid ${s.color}` : "3px solid transparent",
                  transition: "all 0.25s",
                  marginBottom: activeIdx === i ? "2px" : "0",
                }}
              >
                <div style={{ display: "flex", gap: "1.5rem", alignItems: "flex-start", flex: 1 }}>
                  <span
                    style={{
                      fontFamily: "'Sora', sans-serif",
                      fontWeight: "700",
                      fontSize: "0.8rem",
                      color: activeIdx === i ? s.color : "var(--text-muted)",
                      paddingTop: "4px",
                      minWidth: "28px",
                    }}
                  >
                    {s.id}
                  </span>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.3rem" }}>
                      <h3
                        style={{
                          fontFamily: "'Sora', sans-serif",
                          fontWeight: "700",
                          fontSize: "clamp(0.95rem, 1.8vw, 1.1rem)",
                          color: "var(--text-primary)",
                          letterSpacing: "-0.01em",
                        }}
                      >
                          {s.title}
                      </h3>
                      <span
                        style={{
                          padding: "0.15rem 0.6rem",
                          borderRadius: "50px",
                          fontSize: "0.7rem",
                          fontWeight: "600",
                          fontFamily: "'Space Grotesk', sans-serif",
                          background: activeIdx === i ? `${s.color}20` : "var(--bg-muted)",
                          color: activeIdx === i ? s.color : "var(--text-muted)",
                          border: `1px solid ${activeIdx === i ? `${s.color}40` : "var(--border)"}`,
                          letterSpacing: "0.05em",
                        }}
                      >
                        {s.tag}
                      </span>
                    </div>
                    <p
                      style={{
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontSize: "0.9rem",
                        color: "var(--text-muted)",
                        lineHeight: "1.5",
                      }}
                    >
                          {s.short}
                    </p>

                    {/* Expanded content inline for mobile */}
                    {activeIdx === i && (
                      <div
                        style={{
                          marginTop: "1rem",
                          paddingTop: "1rem",
                          borderTop: `1px solid ${s.color}30`,
                        }}
                        className="service-expanded"
                      >
                        <p
                          style={{
                            fontFamily: "'Space Grotesk', sans-serif",
                            fontSize: "0.9rem",
                            color: "var(--text-secondary)",
                            lineHeight: "1.7",
                            marginBottom: "1rem",
                          }}
                        >
                          {s.description}
                        </p>
                        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                          {s.benefits.map((b) => (
                            <span
                              key={b}
                              style={{
                                padding: "0.3rem 0.8rem",
                                borderRadius: "50px",
                                fontSize: "0.78rem",
                                fontWeight: "500",
                                fontFamily: "'Space Grotesk', sans-serif",
                                background: `${s.color}15`,
                                color: s.color,
                                border: `1px solid ${s.color}30`,
                              }}
                            >
                              {b}
                            </span>
                          ))}
                        </div>
                        <Link
                          href={s.path}
                          style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "0.4rem",
                            marginTop: "1rem",
                            color: s.color,
                            fontFamily: "'Space Grotesk', sans-serif",
                            fontSize: "0.86rem",
                            fontWeight: "700",
                            textDecoration: "none",
                          }}
                        >
                          Detail layanan
                          <ArrowRight size={14} />
                        </Link>
                      </div>
                    )}
                  </div>
                </div>

                <Link
                  href={s.path}
                  aria-label={`Buka detail ${s.title}`}
                  onClick={(event) => event.stopPropagation()}
                  style={{
                    color: activeIdx === i ? s.color : "var(--text-muted)",
                    transform: activeIdx === i ? "rotate(45deg)" : "none",
                    transition: "all 0.25s",
                    marginTop: "2px",
                    flexShrink: 0,
                    display: "inline-flex",
                    textDecoration: "none",
                  }}
                >
                  <ArrowRight size={18} />
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div style={{ marginTop: "3rem", textAlign: "center" }}>
          <a
            href="https://wa.me/6281234567890?text=Halo%20WeTech%20Studio%2C%20saya%20ingin%20konsultasi%20project"
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
            Diskusikan Kebutuhan Anda
            <ArrowRight size={16} />
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 767px) {
          .service-expanded { display: block; }
        }
      `}</style>
    </section>
  );
}
