"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { services } from "@/lib/services";

gsap.registerPlugin(ScrollTrigger);

export default function Services() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      const scrollWidth = track.scrollWidth - window.innerWidth;

      gsap.to(track, {
        x: -scrollWidth,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${scrollWidth}`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });
    });

    return () => mm.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="services"
      style={{
        background: "var(--bg-primary)",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Header - fixed at top during scroll */}
      <div
        style={{
          padding: "4rem 2rem 2rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          flexWrap: "wrap",
          gap: "1rem",
          maxWidth: "1400px",
          margin: "0 auto",
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
              color: "var(--accent)",
              marginBottom: "0.75rem",
            }}
          >
            Layanan Kami
          </p>
          <h2
            style={{
              fontFamily: "'Satoshi', sans-serif",
              fontWeight: 400,
              fontSize: "clamp(2rem, 4vw, 3.2rem)",
              lineHeight: "1.1",
              letterSpacing: "-0.02em",
              color: "var(--text-primary)",
            }}
          >
            Solusi digital untuk setiap{" "}
            <span style={{ fontStyle: "italic", color: "var(--accent)" }}>kebutuhan bisnis</span>
          </h2>
        </div>
        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "0.85rem",
            color: "var(--text-muted)",
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
          }}
          className="hidden-mobile-services"
        >
          Scroll untuk explore →
        </p>
      </div>

      {/* Horizontal track */}
      <div
        ref={trackRef}
        className="services-track"
        style={{
          display: "flex",
          gap: "1.5rem",
          padding: "2rem 2rem 4rem",
          width: "fit-content",
        }}
      >
        {services.map((s) => (
          <div
            key={s.id}
            style={{
              width: "380px",
              minWidth: "380px",
              maxHeight: "calc(100vh - 180px)",
              padding: "2rem",
              borderRadius: "16px",
              border: "1px solid var(--border)",
              background: "var(--bg-surface)",
              display: "flex",
              flexDirection: "column",
              transition: "border-color 0.3s, transform 0.3s, box-shadow 0.3s",
              cursor: "default",
              overflowY: "auto",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = s.color;
              e.currentTarget.style.transform = "translateY(-4px)";
              e.currentTarget.style.boxShadow = `0 12px 40px ${s.color}15`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "var(--border)";
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            {/* Tag + Detail link */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem" }}>
              <span
                style={{
                  padding: "0.25rem 0.7rem",
                  borderRadius: "50px",
                  fontSize: "0.7rem",
                  fontWeight: "600",
                  fontFamily: "'Inter', sans-serif",
                  background: `${s.color}15`,
                  color: s.color,
                  border: `1px solid ${s.color}30`,
                }}
              >
                {s.tag}
              </span>
              <Link
                href={s.path}
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.75rem",
                  fontWeight: "600",
                  color: s.color,
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.3rem",
                  transition: "gap 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.gap = "0.5rem")}
                onMouseLeave={(e) => (e.currentTarget.style.gap = "0.3rem")}
              >
                Detail <ArrowRight size={12} />
              </Link>
            </div>

            {/* Title + Description */}
            <h3
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: "600",
                fontSize: "1.25rem",
                color: "var(--text-primary)",
                marginBottom: "0.5rem",
                letterSpacing: "-0.01em",
              }}
            >
              {s.title}
            </h3>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.88rem",
                color: "var(--text-muted)",
                lineHeight: "1.7",
                marginBottom: "1.5rem",
                flex: 1,
              }}
            >
              {s.description}
            </p>

            {/* Benefits */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", marginBottom: "1.5rem" }}>
              {s.benefits.slice(0, 3).map((b) => (
                <span
                  key={b}
                  style={{
                    padding: "0.2rem 0.6rem",
                    borderRadius: "50px",
                    fontSize: "0.72rem",
                    fontFamily: "'Inter', sans-serif",
                    background: "var(--bg-muted)",
                    color: "var(--text-secondary)",
                    border: "1px solid var(--border)",
                  }}
                >
                  {b}
                </span>
              ))}
            </div>

          </div>
        ))}
      </div>

      <style>{`
        @media (max-width: 767px) {
          .services-track {
            flex-direction: column !important;
            width: 100% !important;
            padding: 1.5rem !important;
          }
          .services-track > div {
            width: 100% !important;
            min-width: 100% !important;
          }
          .hidden-mobile-services {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
}
