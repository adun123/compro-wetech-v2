"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { getFeaturedProjects } from "@/lib/projects";

gsap.registerPlugin(ScrollTrigger);

const featured = getFeaturedProjects();

export default function Projects() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      if (headerRef.current) {
        gsap.from(headerRef.current.children, {
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 85%",
          },
          y: 50,
          opacity: 0,
          stagger: 0.15,
          duration: 0.8,
          ease: "power3.out",
        });
      }

      // Showcase blocks parallax + reveal
      const blocks = sectionRef.current?.querySelectorAll(".showcase-block");
      blocks?.forEach((block, i) => {
        // Reveal animation
        gsap.from(block, {
          scrollTrigger: {
            trigger: block,
            start: "top 85%",
          },
          y: 80,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
        });

        // Parallax on scroll
        gsap.to(block.querySelector(".showcase-content"), {
          y: -50,
          ease: "none",
          scrollTrigger: {
            trigger: block,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="projects"
      style={{ background: "var(--bg-primary)" }}
    >
      {/* Header */}
      <div
        ref={headerRef}
        style={{ padding: "8rem 1.5rem 4rem", maxWidth: "1200px", margin: "0 auto" }}
      >


        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: "1.5rem" }}>
          <h2
            style={{
              fontFamily: "'Satoshi', sans-serif",
              fontWeight: 600,
              fontSize: "clamp(2.5rem, 6vw, 4rem)",
              lineHeight: "1.1",
              letterSpacing: "-0.02em",
              color: "var(--text-primary)",
            }}
          >
            Selected work we have{" "}
            <span
              style={{
                fontStyle: "italic",
                fontWeight: 400,
                background: "linear-gradient(135deg, #0d9488, #14b8a6)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              built
            </span>
          </h2>

          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "1rem",
              color: "var(--text-muted)",
              maxWidth: "400px",
            }}
          >
            A few examples of websites, platforms, dashboards, and digital systems designed to support real business goals.
          </p>
        </div>
      </div>

      {/* Showcase blocks - Full width with gradient backgrounds */}
      <div style={{ position: "relative" }}>
        {featured.map((p, i) => (
          <div
            key={p.slug}
            className="showcase-block"
            style={{
              position: "relative",
              padding: "6rem 1.5rem",
              background: p.gradient,
              borderTop: i === 0 ? "1px solid rgba(255,255,255,0.05)" : "none",
              borderBottom: "1px solid rgba(255,255,255,0.05)",
              overflow: "hidden",
              cursor: "pointer",
              transition: "padding 0.4s ease",
            }}
          >
            {/* Decorative elements */}
            <div
              style={{
                position: "absolute",
                top: "-50%",
                right: "-20%",
                width: "600px",
                height: "600px",
                borderRadius: "50%",
                background: "radial-gradient(circle, rgba(45, 212, 191, 0.08) 0%, transparent 70%)",
                filter: "blur(40px)",
                pointerEvents: "none",
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: "-30%",
                left: "-10%",
                width: "400px",
                height: "400px",
                borderRadius: "50%",
                background: "radial-gradient(circle, rgba(13, 148, 136, 0.06) 0%, transparent 70%)",
                filter: "blur(30px)",
                pointerEvents: "none",
              }}
            />

            {/* Content wrapper */}
            <div
              className="showcase-content"
              style={{
                position: "relative",
                zIndex: 2,
                maxWidth: "1200px",
                margin: "0 auto",
                display: "grid",
                gridTemplateColumns: "1fr auto",
                gap: "2rem",
                alignItems: "center",
              }}
            >
              <div>
                {/* Category tag */}
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    padding: "0.3rem 0.8rem",
                    borderRadius: "50px",
                    background: "rgba(255,255,255,0.08)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    marginBottom: "1.25rem",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.7rem",
                      fontWeight: "600",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "rgba(255,255,255,0.6)",
                    }}
                  >
                    {p.category}
                  </span>
                </div>

                {/* Title */}
                <h3
                  style={{
                    fontFamily: "'Satoshi', sans-serif",
                    fontWeight: 500,
                    fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
                    lineHeight: "1.05",
                    letterSpacing: "-0.03em",
                    color: "#f0fdfa",
                    marginBottom: "1.25rem",
                  }}
                >
                  {p.title}
                </h3>

                {/* Description */}
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "1rem",
                    color: "rgba(255,255,255,0.6)",
                    lineHeight: "1.7",
                    maxWidth: "600px",
                    marginBottom: "1.5rem",
                  }}
                >
                  {p.description}
                </p>



                {/* Highlights */}
                <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                  {p.highlights.slice(0, 2).map((h, idx) => (
                    <div
                      key={idx}
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
                          background: "#5eead4",
                        }}
                      />
                      <span
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          fontSize: "0.85rem",
                          color: "rgba(255,255,255,0.7)",
                        }}
                      >
                        {h}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Arrow */}
              <div
                style={{
                  width: "80px",
                  height: "80px",
                  borderRadius: "50%",
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "all 0.3s ease",
                  flexShrink: 0,
                }}
                className="showcase-arrow"
              >
                <ArrowRight size={28} color="rgba(255,255,255,0.6)" />
              </div>
            </div>

            {/* Hover overlay */}
            <div
              className="showcase-overlay"
              style={{
                position: "absolute",
                inset: 0,
                background: "rgba(0,0,0,0)",
                transition: "background 0.4s ease",
                pointerEvents: "none",
              }}
            />
          </div>
        ))}
      </div>

      {/* CTA */}
      <div
        style={{
          padding: "5rem 1.5rem 8rem",
          textAlign: "center",
          background: "var(--bg-primary)",
        }}
      >
        <Link
          href="/projects"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.75rem",
            padding: "1rem 2.5rem",
            borderRadius: "999px",
            border: "1px solid var(--border)",
            color: "var(--text-primary)",
            fontFamily: "'Satoshi', sans-serif",
            fontSize: "1rem",
            fontWeight: 600,
            textDecoration: "none",
            transition: "all 0.3s ease",
            background: "var(--bg-surface)",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = "var(--accent)";
            e.currentTarget.style.color = "var(--accent)";
            e.currentTarget.style.transform = "translateY(-3px)";
            e.currentTarget.style.boxShadow = "0 12px 40px rgba(20, 184, 166, 0.1)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = "var(--border)";
            e.currentTarget.style.color = "var(--text-primary)";
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "none";
          }}
        >
          View All Projects
          <ExternalLink size={18} />
        </Link>
      </div>

      <style>{`
        .showcase-block:hover {
          padding-left: 3rem !important;
        }
        .showcase-block:hover .showcase-overlay {
          background: rgba(0,0,0,0.05) !important;
        }
        .showcase-block:hover .showcase-arrow {
          background: rgba(255,255,255,0.15) !important;
          transform: rotate(-45deg);
        }
        .showcase-arrow {
          transition: all 0.3s ease !important;
        }
      `}</style>
    </section>
  );
}
