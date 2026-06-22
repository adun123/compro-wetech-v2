"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Compass, Code2, Rocket, ShieldCheck } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  { icon: Compass, num: "01", title: "Discovery & Strategy", desc: "Memahami bisnis, tujuan, dan merancang arsitektur solusi." },
  { icon: Code2, num: "02", title: "Design & Development", desc: "UI/UX premium + development iteratif dengan update rutin." },
  { icon: Rocket, num: "03", title: "Testing & Launch", desc: "QA menyeluruh, deployment aman, monitoring saat go-live." },
  { icon: ShieldCheck, num: "04", title: "Support & Growth", desc: "Maintenance, pengembangan fitur, dan support berkelanjutan." },
];

export default function Solution() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Steps timeline animation
      if (stepsRef.current) {
        const items = stepsRef.current.querySelectorAll(".step-item");
        const line = stepsRef.current.querySelector(".step-line-fill");

        // Line draws as you scroll
        if (line) {
          gsap.fromTo(line, { scaleY: 0 }, {
            scaleY: 1,
            ease: "none",
            scrollTrigger: {
              trigger: stepsRef.current,
              start: "top 60%",
              end: "bottom 60%",
              scrub: 0.8,
            },
          });
        }

        items.forEach((item, i) => {
          gsap.from(item, {
            scrollTrigger: {
              trigger: item,
              start: "top 80%",
            },
            x: -40,
            opacity: 0,
            duration: 0.6,
            delay: i * 0.1,
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
      id="solution"
      style={{
        padding: "8rem 1.5rem",
        position: "relative",
        overflow: "hidden",
        background: "linear-gradient(135deg, #042f2e 0%, #052e2b 40%, #021716 100%)",
      }}
    >
      {/* Grid lines background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(13,148,136,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(13,148,136,0.05) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
          pointerEvents: "none",
        }}
      />

      <div style={{ position: "relative", zIndex: 10, maxWidth: "960px", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.8rem",
              fontWeight: "600",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "#5eead4",
              marginBottom: "1rem",
            }}
          >
            Solusi Kami
          </p>
          <h2
            style={{
              fontFamily: "'Satoshi', sans-serif",
              fontWeight: 400,
              fontSize: "clamp(2.2rem, 5vw, 4rem)",
              lineHeight: "1.15",
              letterSpacing: "-0.02em",
              color: "#f0fdfa",
              marginBottom: "1.5rem",
            }}
          >
            Technology partner yang mengubah kebutuhan bisnis menjadi{" "}
            <span style={{ fontStyle: "italic", color: "#5eead4" }}>solusi digital nyata</span>
          </h2>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "1.05rem",
              lineHeight: "1.7",
              color: "#99f6e4",
              maxWidth: "650px",
              margin: "0 auto",
            }}
          >
            Kami memahami bisnis Anda, merancang solusi yang tepat, dan memastikan
            teknologi yang kami bangun benar-benar bekerja untuk pertumbuhan Anda.
          </p>
        </div>

        {/* 4-step workflow */}
        <div ref={stepsRef} style={{ position: "relative", paddingLeft: "2.5rem" }}>
          {/* Vertical line */}
          <div
            style={{
              position: "absolute",
              left: "0.75rem",
              top: 0,
              bottom: 0,
              width: "2px",
              background: "rgba(13,148,136,0.2)",
              borderRadius: "1px",
            }}
          >
            <div
              className="step-line-fill"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: "100%",
                background: "linear-gradient(180deg, #0d9488, #5eead4)",
                borderRadius: "1px",
                transformOrigin: "top",
              }}
            />
          </div>

          {/* Steps */}
          <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.num}
                  className="step-item"
                  style={{
                    display: "flex",
                    gap: "1.25rem",
                    alignItems: "flex-start",
                    padding: "1.5rem",
                    borderRadius: "12px",
                    border: "1px solid rgba(13,148,136,0.2)",
                    background: "rgba(19,13,46,0.5)",
                    backdropFilter: "blur(8px)",
                    transition: "border-color 0.3s, transform 0.3s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "rgba(94,234,212,0.5)";
                    e.currentTarget.style.transform = "translateX(4px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "rgba(13,148,136,0.2)";
                    e.currentTarget.style.transform = "translateX(0)";
                  }}
                >
                  {/* Icon */}
                  <div
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "10px",
                      background: "rgba(13,148,136,0.15)",
                      border: "1px solid rgba(13,148,136,0.3)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#5eead4",
                      flexShrink: 0,
                    }}
                  >
                    <Icon size={20} strokeWidth={1.8} />
                  </div>

                  {/* Content */}
                  <div>
                    <h3
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontWeight: "600",
                        fontSize: "1.1rem",
                        color: "#f0fdfa",
                        marginBottom: "0.3rem",
                      }}
                    >
                      {step.title}
                    </h3>
                    <p
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "0.88rem",
                        color: "#5a8a85",
                        lineHeight: "1.6",
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
    </section>
  );
}
