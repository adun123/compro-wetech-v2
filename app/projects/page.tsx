"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { projects, projectCategories, type ProjectCategory } from "@/lib/projects";

function ImageCarousel({ images, gradient }: { images: string[]; gradient: string }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        borderRadius: "12px",
        overflow: "hidden",
        background: gradient,
      }}
    >
      {/* Placeholder images — replace with real ones */}
      {images.map((img, i) => (
        <div
          key={img}
          style={{
            position: "absolute",
            inset: 0,
            opacity: i === current ? 1 : 0,
            transition: "opacity 0.8s ease",
          }}
        >
          <Image
            src={img}
            alt=""
            fill
            style={{ objectFit: "cover" }}
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      ))}

      {/* Dots indicator */}
      <div style={{ position: "absolute", bottom: "0.75rem", left: "50%", transform: "translateX(-50%)", display: "flex", gap: "0.35rem" }}>
        {images.map((_, i) => (
          <div
            key={i}
            style={{
              width: i === current ? "16px" : "5px",
              height: "5px",
              borderRadius: "3px",
              background: i === current ? "#fff" : "rgba(255,255,255,0.3)",
              transition: "all 0.3s ease",
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory | "All">("All");

  const filtered = activeCategory === "All" ? projects : projects.filter((p) => p.category === activeCategory);

  return (
    <main style={{ minHeight: "100vh", background: "var(--bg-primary)" }}>
      {/* Header */}
      <div style={{ padding: "8rem 1.5rem 3rem", maxWidth: "1100px", margin: "0 auto" }}>
        <Link
          href="/"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.4rem",
            fontFamily: "'Inter', sans-serif",
            fontSize: "0.82rem",
            color: "var(--text-muted)",
            textDecoration: "none",
            marginBottom: "2.5rem",
            transition: "color 0.2s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
        >
          <ArrowLeft size={14} /> Kembali ke Home
        </Link>

        <h1 style={{ fontFamily: "'Satoshi', sans-serif", fontWeight: 400, fontSize: "clamp(3rem, 6vw, 5rem)", lineHeight: "1.05", letterSpacing: "-0.03em", color: "var(--text-primary)", marginBottom: "1.5rem" }}>
          Our Work
        </h1>
        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "1.05rem", color: "var(--text-secondary)", lineHeight: "1.7", maxWidth: "500px" }}>
          Dari AI automation hingga web platform  dikerjakan dengan standar yang sama.
        </p>

        {/* Filter */}
        <div style={{ display: "flex", gap: "0.5rem", marginTop: "2.5rem", flexWrap: "wrap" }}>
          {["All", ...projectCategories].map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat as ProjectCategory | "All")}
              style={{
                padding: "0.4rem 1rem",
                borderRadius: "50px",
                border: activeCategory === cat ? "1px solid var(--accent)" : "1px solid var(--border)",
                background: activeCategory === cat ? "var(--accent)" : "transparent",
                color: activeCategory === cat ? "#fff" : "var(--text-muted)",
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.8rem",
                fontWeight: "500",
                cursor: "pointer",
                transition: "all 0.2s",
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Image Marquee — 2 rows, opposite directions */}
      <div style={{ overflow: "hidden", padding: "2rem 0 3rem", position: "relative" }}>
        {/* Row 1 → right */}
        <div className="img-marquee" style={{ marginBottom: "1rem" }}>
          <div className="img-marquee-track img-marquee-right">
            {[...projects, ...projects].map((p, i) => (
              <div key={`r1-${p.slug}-${i}`} style={{ width: "320px", height: "200px", borderRadius: "12px", overflow: "hidden", flexShrink: 0, position: "relative", background: p.gradient }}>
                <Image src={p.images[0]} alt={p.title} fill style={{ objectFit: "cover" }} sizes="320px" />
              </div>
            ))}
          </div>
        </div>
        {/* Row 2 ← left */}
        <div className="img-marquee">
          <div className="img-marquee-track img-marquee-left">
            {[...projects, ...projects].map((p, i) => (
              <div key={`r2-${p.slug}-${i}`} style={{ width: "320px", height: "200px", borderRadius: "12px", overflow: "hidden", flexShrink: 0, position: "relative", background: p.gradient }}>
                <Image src={p.images[1] || p.images[0]} alt={p.title} fill style={{ objectFit: "cover" }} sizes="320px" />
              </div>
            ))}
          </div>
        </div>
        {/* Fade edges */}
        <div style={{ position: "absolute", top: 0, bottom: 0, left: 0, width: "60px", background: "linear-gradient(to right, var(--bg-primary), transparent)", zIndex: 2, pointerEvents: "none" }} />
        <div style={{ position: "absolute", top: 0, bottom: 0, right: 0, width: "60px", background: "linear-gradient(to left, var(--bg-primary), transparent)", zIndex: 2, pointerEvents: "none" }} />
      </div>

      {/* Projects */}
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "2rem 1.5rem 8rem" }}>
        {filtered.map((p, i) => (
          <div
            key={p.slug}
            className="project-entry"
            style={{
              display: "grid",
              gridTemplateColumns: i % 2 === 0 ? "1fr 1fr" : "1fr 1fr",
              gap: "3rem",
              alignItems: "center",
              padding: "4rem 0",
              borderBottom: "1px solid var(--border)",
              borderTop: i === 0 ? "1px solid var(--border)" : "none",
            }}
          >
            {/* Image carousel - alternate sides */}
            <div style={{ order: i % 2 === 0 ? 1 : 2, height: "280px" }}>
              <ImageCarousel images={p.images} gradient={p.gradient} />
            </div>

            {/* Content */}
            <div style={{ order: i % 2 === 0 ? 2 : 1 }}>
              <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.7rem", fontWeight: "600", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--accent)", marginBottom: "0.75rem", display: "block" }}>
                {p.category}
              </span>

              <h2 style={{ fontFamily: "'Satoshi', sans-serif", fontWeight: 400, fontSize: "clamp(1.6rem, 3vw, 2.2rem)", lineHeight: "1.15", letterSpacing: "-0.02em", color: "var(--text-primary)", marginBottom: "1rem" }}>
                {p.title}
              </h2>

              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.88rem", color: "var(--text-secondary)", lineHeight: "1.7", marginBottom: "1.25rem" }}>
                {p.description}
              </p>

              {/* Highlights */}
              <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem", marginBottom: "1.25rem" }}>
                {p.highlights.map((h) => (
                  <span key={h} style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.8rem", color: "var(--text-muted)", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    <span style={{ width: "4px", height: "4px", borderRadius: "50%", background: "var(--accent)", flexShrink: 0 }} />
                    {h}
                  </span>
                ))}
              </div>

              {/* Tech */}
              <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap" }}>
                {p.techStack.map((t) => (
                  <span key={t} style={{ padding: "0.15rem 0.5rem", borderRadius: "50px", fontSize: "0.68rem", fontFamily: "'Inter', sans-serif", background: "var(--bg-muted)", color: "var(--text-muted)", border: "1px solid var(--border)" }}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .img-marquee {
          overflow: hidden;
          width: 100%;
        }
        .img-marquee-track {
          display: flex;
          gap: 1rem;
          width: fit-content;
        }
        .img-marquee-right {
          animation: imgMarqueeRight 30s linear infinite;
        }
        .img-marquee-left {
          animation: imgMarqueeLeft 35s linear infinite;
        }
        .img-marquee-track:hover {
          animation-play-state: paused;
        }
        @keyframes imgMarqueeRight {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes imgMarqueeLeft {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        @media (max-width: 767px) {
          .project-entry {
            grid-template-columns: 1fr !important;
          }
          .project-entry > div {
            order: unset !important;
          }
        }
      `}</style>
    </main>
  );
}
