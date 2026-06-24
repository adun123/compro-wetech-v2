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
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    const mm = gsap.matchMedia();

    // Header animation
    if (headerRef.current) {
      gsap.from(headerRef.current.children, {
        scrollTrigger: {
          trigger: headerRef.current,
          start: "top 85%",
        },
        y: 50,
        opacity: 0,
        stagger: 0.12,
        duration: 0.8,
        ease: "power3.out",
      });
    }

    // Desktop: Horizontal scroll pinning
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
        ref={headerRef}
        style={{
          padding: "6rem 2rem 3rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          flexWrap: "wrap",
          gap: "1.5rem",
          maxWidth: "1400px",
          margin: "0 auto",
        }}
      >
        <div>


          <h2
            style={{
              fontFamily: "'Satoshi', sans-serif",
              fontWeight: 600,
              fontSize: "clamp(2.2rem, 5vw, 3.5rem)",
              lineHeight: "1.1",
              letterSpacing: "-0.02em",
              color: "var(--text-primary)",
              marginBottom: "1rem",
            }}
          >
            Digital solutions for every{" "}
            <span
              style={{
                fontStyle: "italic",
                fontWeight: 400,
                color: "var(--accent)",
              }}
            >
              business need
            </span>
          </h2>
        </div>

        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "0.9rem",
            color: "var(--text-muted)",
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            maxWidth: "300px",
          }}
          className="hidden-mobile-services"
        >
          Scroll to explore →
        </p>
      </div>

      {/* Horizontal track */}
      <div
        ref={trackRef}
        className="services-track"
        style={{
          display: "flex",
          gap: "1.5rem",
          padding: "1rem 2rem 5rem",
          width: "fit-content",
        }}
      >
        {services.map((s, i) => (
          <div
            key={s.id}
            className="service-card"
            style={{
              width: "400px",
              minWidth: "400px",
              maxHeight: "calc(100vh - 220px)",
              padding: "2rem",
              borderRadius: "20px",
              border: "1px solid var(--border)",
              background: "var(--bg-surface)",
              display: "flex",
              flexDirection: "column",
              transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
              cursor: "default",
              overflowY: "auto",
              position: "relative",
            }}
          >
            {/* Top accent bar */}
            <div
              className="card-accent-bar"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: "3px",
                background: `linear-gradient(90deg, ${s.color}, transparent)`,
                opacity: 0.5,
                transition: "opacity 0.3s",
                borderRadius: "20px 20px 0 0",
              }}
            />

            {/* Tag + Detail link */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "1.5rem",
              }}
            >
              <span
                style={{
                  padding: "0.3rem 0.8rem",
                  borderRadius: "50px",
                  fontSize: "0.72rem",
                  fontWeight: 600,
                  fontFamily: "'Inter', sans-serif",
                  background: `${s.color}12`,
                  color: s.color,
                  border: `1px solid ${s.color}25`,
                }}
              >
                {s.tag}
              </span>
              <Link
                href={s.path}
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.75rem",
                  fontWeight: 600,
                  color: s.color,
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.3rem",
                  transition: "gap 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.gap = "0.6rem")}
                onMouseLeave={(e) => (e.currentTarget.style.gap = "0.3rem")}
              >
                Detail <ArrowRight size={12} />
              </Link>
            </div>



            {/* Title + Description */}
            <h3
              style={{
                fontFamily: "'Satoshi', sans-serif",
                fontWeight: 600,
                fontSize: "1.35rem",
                color: "var(--text-primary)",
                marginBottom: "0.75rem",
                letterSpacing: "-0.01em",
              }}
            >
              {s.title}
            </h3>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.9rem",
                color: "var(--text-muted)",
                lineHeight: "1.7",
                marginBottom: "1.5rem",
                flex: 1,
              }}
            >
              {s.description}
            </p>

            {/* Short tagline */}
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.85rem",
                fontStyle: "italic",
                color: s.color,
                marginBottom: "1.5rem",
                paddingBottom: "1.5rem",
                borderBottom: "1px solid var(--border)",
              }}
            >
              {s.short}
            </p>

            {/* Benefits */}
            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              <span
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.7rem",
                  fontWeight: 600,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: "var(--text-muted)",
                  marginBottom: "0.25rem",
                }}
              >
                Benefits
              </span>
              {s.benefits.slice(0, 3).map((b) => (
                <div
                  key={b}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                  }}
                >
                  <span
                    style={{
                      width: "4px",
                      height: "4px",
                      borderRadius: "50%",
                      background: s.color,
                    }}
                  />
                  <span
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.82rem",
                      color: "var(--text-secondary)",
                    }}
                  >
                    {b}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* CTA Card */}
        <div
          style={{
            width: "320px",
            minWidth: "320px",
            padding: "2.5rem",
            borderRadius: "20px",
            background: "linear-gradient(135deg, #042f2e, #0d9488)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            gap: "1.5rem",
          }}
        >
          <div
            style={{
              width: "60px",
              height: "60px",
              borderRadius: "16px",
              background: "rgba(255,255,255,0.1)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >

          </div>
          <div>
            <h3
              style={{
                fontFamily: "'Satoshi', sans-serif",
                fontSize: "1.35rem",
                fontWeight: 600,
                color: "#f0fdfa",
                marginBottom: "0.75rem",
              }}
            >
              Need a custom solution?
            </h3>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.9rem",
                color: "rgba(255,255,255,0.7)",
                lineHeight: "1.6",
              }}
            >
              Book a free consultation to find the right solution for your business.
            </p>
          </div>
          <a
            href="https://wa.me/6287877946981?text=Hello%20WeTech%20Studio%2C%20I%20would%20like%20to%20discuss%20your%20services"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.875rem 1.75rem",
              borderRadius: "999px",
              background: "#fff",
              color: "#042f2e",
              fontFamily: "'Satoshi', sans-serif",
              fontWeight: 600,
              fontSize: "0.9rem",
              textDecoration: "none",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.2)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            Talk to Us <ArrowRight size={16} />
          </a>
        </div>
      </div>

      <style>{`
        .service-card:hover {
          border-color: var(--accent) !important;
          transform: translateY(-4px);
          box-shadow: 0 16px 48px rgba(20, 184, 166, 0.1);
        }
        .service-card:hover .card-accent-bar {
          opacity: 1 !important;
        }
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
