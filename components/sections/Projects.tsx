"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { getFeaturedProjects } from "@/lib/projects";

gsap.registerPlugin(ScrollTrigger);

const featured = getFeaturedProjects();

export default function Projects() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const blocks = sectionRef.current?.querySelectorAll(".showcase-block");
      blocks?.forEach((block) => {
        const title = block.querySelector(".showcase-title");
        gsap.from(title, {
          scrollTrigger: { trigger: block, start: "top 80%", end: "top 40%", scrub: 0.5 },
          x: -60,
          opacity: 0,
        });
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} style={{ background: "var(--bg-primary)" }}>
      {/* Header */}
      <div style={{ padding: "6rem 1.5rem 3rem", maxWidth: "1000px", margin: "0 auto" }}>
        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.8rem", fontWeight: "600", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--accent)", marginBottom: "0.75rem" }}>
          Selected Work
        </p>
        <h2 style={{ fontFamily: "'Satoshi', sans-serif", fontWeight: 400, fontSize: "clamp(2rem, 4vw, 3rem)", lineHeight: "1.1", letterSpacing: "-0.02em", color: "var(--text-primary)" }}>
          Yang telah kami <span style={{ fontStyle: "italic", color: "var(--accent)" }}>bangun</span>
        </h2>
      </div>

      {/* Showcase blocks */}
      {featured.map((p, i) => (
        <div
          key={p.slug}
          className="showcase-block"
          style={{
            position: "relative",
            padding: "5rem 1.5rem",
            background: p.gradient,
            borderTop: i === 0 ? "1px solid rgba(255,255,255,0.05)" : "none",
            borderBottom: "1px solid rgba(255,255,255,0.05)",
            overflow: "hidden",
            cursor: "default",
            transition: "padding 0.4s ease",
          }}
          onMouseEnter={(e) => { e.currentTarget.style.paddingLeft = "3rem"; }}
          onMouseLeave={(e) => { e.currentTarget.style.paddingLeft = "1.5rem"; }}
        >
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.72rem", fontWeight: "600", letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)", marginBottom: "0.75rem", maxWidth: "1000px", marginLeft: "auto", marginRight: "auto" }}>
            {p.category}
          </p>
          <h3
            className="showcase-title"
            style={{ fontFamily: "'Satoshi', sans-serif", fontWeight: 400, fontSize: "clamp(2.5rem, 7vw, 5rem)", lineHeight: "1.05", letterSpacing: "-0.03em", color: "#f0fdfa", maxWidth: "1000px", margin: "0 auto" }}
          >
            {p.title}
          </h3>
          <div style={{ maxWidth: "1000px", margin: "1.5rem auto 0", display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
            {p.techStack.slice(0, 3).map((t) => (
              <span key={t} style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.72rem", color: "rgba(255,255,255,0.4)" }}>{t}</span>
            ))}
          </div>
        </div>
      ))}

      {/* CTA */}
      <div style={{ padding: "4rem 1.5rem 6rem", textAlign: "center" }}>
        <Link
          href="/projects"
          style={{ display: "inline-flex", alignItems: "center", gap: "0.6rem", padding: "0.9rem 2rem", borderRadius: "50px", border: "1px solid var(--border)", color: "var(--text-primary)", fontFamily: "'Inter', sans-serif", fontSize: "0.9rem", fontWeight: "600", textDecoration: "none", transition: "all 0.25s" }}
          onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--accent)"; e.currentTarget.style.color = "var(--accent)"; }}
          onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.color = "var(--text-primary)"; }}
        >
          Explore All Projects <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  );
}
