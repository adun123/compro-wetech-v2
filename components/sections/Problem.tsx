"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const problems = [
  {
    num: "01",
    title: "Website terlihat kurang profesional",
    desc: "First impression buruk membuat calon klien ragu sebelum bicara. Kompetitor yang tampak lebih profesional menang duluan.",
  },
  {
    num: "02",
    title: "Proses bisnis masih manual",
    desc: "Tim menghabiskan waktu untuk tugas berulang yang seharusnya bisa diotomasi — membuang energi dan memperlambat growth.",
  },
  {
    num: "03",
    title: "Data tersebar di Excel & WhatsApp",
    desc: "Tidak ada single source of truth. Keputusan bisnis diambil berdasarkan data yang tidak akurat atau tidak sinkron.",
  },
  {
    num: "04",
    title: "Tidak punya sistem internal yang rapi",
    desc: "Tanpa sistem yang terstruktur, skalabilitas bisnis terhambat. Setiap pertumbuhan justru menambah kompleksitas operasional.",
  },
  {
    num: "05",
    title: "Sulit scale tanpa digitalisasi",
    desc: "Bisnis yang bergantung pada proses manual tidak bisa tumbuh cepat. Operasional yang tidak terdigitalisasi menjadi bottleneck utama.",
  },
];

export default function Problem() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      if (headerRef.current) {
        gsap.from(headerRef.current.children, {
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 80%",
          },
          y: 60,
          opacity: 0,
          stagger: 0.15,
          duration: 0.8,
          ease: "power3.out",
        });
      }

      // Cards: each pinned briefly as they reveal
      if (cardsRef.current) {
        const cards = cardsRef.current.querySelectorAll(".problem-card");

        cards.forEach((card, i) => {
          // Reveal animation
          gsap.from(card, {
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              end: "top 40%",
              scrub: 0.5,
            },
            x: i % 2 === 0 ? -80 : 80,
            opacity: 0,
            scale: 0.95,
          });

          // Number color shift on scroll
          const numEl = card.querySelector(".problem-num");
          if (numEl) {
            gsap.to(numEl, {
              scrollTrigger: {
                trigger: card,
                start: "top 60%",
                end: "top 30%",
                scrub: true,
              },
              color: "#14b8a6",
            });
          }
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="problem"
      style={{
        padding: "8rem 1.5rem 10rem",
        background: "var(--bg-secondary)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative top line */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "1px",
          background: "linear-gradient(90deg, transparent, var(--accent), transparent)",
          opacity: 0.3,
        }}
      />

      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        {/* Header */}
        <div ref={headerRef} style={{ marginBottom: "5rem", textAlign: "center" }}>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.8rem",
              fontWeight: "600",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "var(--accent)",
              marginBottom: "1rem",
            }}
          >
            Kenali Masalahnya
          </p>
          <h2
            style={{
              fontFamily: "'Satoshi', sans-serif",
              fontWeight: 400,
              fontSize: "clamp(2.2rem, 5vw, 3.5rem)",
              lineHeight: "1.1",
              letterSpacing: "-0.02em",
              color: "var(--text-primary)",
            }}
          >
            Apakah bisnis Anda mengalami{" "}
            <span style={{ fontStyle: "italic", color: "var(--accent)" }}>
              salah satu ini?
            </span>
          </h2>
        </div>

        {/* Problem cards */}
        <div ref={cardsRef} style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          {problems.map((p) => (
            <div
              key={p.num}
              className="problem-card"
              style={{
                display: "grid",
                gridTemplateColumns: "4rem 1fr",
                gap: "1.5rem",
                alignItems: "start",
                padding: "2rem",
                borderRadius: "12px",
                border: "1px solid var(--border)",
                background: "var(--bg-surface)",
                transition: "border-color 0.3s, box-shadow 0.3s, transform 0.3s",
                cursor: "default",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "var(--accent)";
                e.currentTarget.style.boxShadow = "0 8px 32px rgba(20,184,166,0.08)";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--border)";
                e.currentTarget.style.boxShadow = "none";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              {/* Number */}
              <span
                className="problem-num"
                style={{
                  fontFamily: "'Satoshi', sans-serif",
                  fontWeight: 400,
                  fontSize: "2.5rem",
                  color: "var(--border)",
                  lineHeight: "1",
                  transition: "color 0.3s",
                }}
              >
                {p.num}
              </span>

              {/* Content */}
              <div>
                <h3
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: "600",
                    fontSize: "1.15rem",
                    color: "var(--text-primary)",
                    marginBottom: "0.5rem",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {p.title}
                </h3>
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.9rem",
                    color: "var(--text-muted)",
                    lineHeight: "1.7",
                  }}
                >
                  {p.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
