"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Compass, Code2, Rocket, ShieldCheck } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    icon: Compass,
    num: "01",
    title: "Discovery & Strategy",
    desc: "We map your business goals, users, workflow, and the right structure for the solution.",
    highlight: "We start by listening",
  },
  {
    icon: Code2,
    num: "02",
    title: "Design & Development",
    desc: "We turn the strategy into polished UI, clean code, and weekly progress you can review.",
    highlight: "Thoughtful design, clean code",
  },
  {
    icon: Rocket,
    num: "03",
    title: "Testing & Launch",
    desc: "We test core scenarios, prepare deployment, and support the launch process.",
    highlight: "Quality is non-negotiable",
  },
  {
    icon: ShieldCheck,
    num: "04",
    title: "Support & Growth",
    desc: "We help maintain, improve, and expand the system as new business needs appear.",
    highlight: "We stay after launch",
  },
];

export default function Solution() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const floatingOrbRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      if (headerRef.current) {
        gsap.from(headerRef.current.children, {
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
          y: 60,
          opacity: 0,
          stagger: 0.12,
          duration: 0.9,
          ease: "power3.out",
        });
      }

      // Floating orb animation
      if (floatingOrbRef.current) {
        gsap.to(floatingOrbRef.current, {
          y: -30,
          x: 20,
          rotation: 360,
          duration: 20,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      }

      // Vertical line draw animation
      if (lineRef.current) {
        gsap.fromTo(
          lineRef.current,
          { scaleY: 0 },
          {
            scaleY: 1,
            ease: "none",
            scrollTrigger: {
              trigger: stepsRef.current,
              start: "top 70%",
              end: "bottom 70%",
              scrub: 1,
            },
          }
        );
      }

      // Steps animation
      if (stepsRef.current) {
        const items = stepsRef.current.querySelectorAll(".step-item");
        items.forEach((item, i) => {
          gsap.from(item, {
            scrollTrigger: {
              trigger: item,
              start: "top 88%",
              toggleActions: "play none none reverse",
            },
            x: -60,
            opacity: 0,
            duration: 0.8,
            delay: i * 0.1,
            ease: "power3.out",
          });
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="process"
      style={{
        padding: "10rem 1.5rem 12rem",
        position: "relative",
        overflow: "hidden",
        background: "linear-gradient(135deg, #042f2e 0%, #052e2b 40%, #021716 100%)",
      }}
    >
      {/* Floating decorative orb */}
      <div
        ref={floatingOrbRef}
        style={{
          position: "absolute",
          top: "10%",
          right: "15%",
          width: "300px",
          height: "300px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(45, 212, 191, 0.1) 0%, transparent 70%)",
          filter: "blur(40px)",
          pointerEvents: "none",
        }}
      />

      {/* Grid lines background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(13,148,136,0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(13,148,136,0.06) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
          pointerEvents: "none",
        }}
      />

      {/* Radial gradient overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(ellipse at center, transparent 0%, rgba(2, 23, 22, 0.5) 100%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ position: "relative", zIndex: 10, maxWidth: "1000px", margin: "0 auto" }}>
        {/* Header */}
        <div ref={headerRef} style={{ textAlign: "center", marginBottom: "5rem" }}>


          <h2
            style={{
              fontFamily: "'Satoshi', sans-serif",
              fontWeight: 600,
              fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
              lineHeight: "1.1",
              letterSpacing: "-0.02em",
              color: "#f0fdfa",
              marginBottom: "1.5rem",
            }}
          >
            A clear process that turns{" "}
            <span
              style={{
                fontStyle: "italic",
                fontWeight: 400,
                color: "#5eead4",
              }}
            >
              business needs
            </span>
            <br />
            into working digital products
          </h2>

          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "1.1rem",
              lineHeight: "1.7",
              color: "#99f6e4",
              maxWidth: "650px",
              margin: "0 auto",
            }}
          >
            We keep the process practical: understand the business, design the right
            structure, build with care, then launch with room to grow.
          </p>
        </div>

        {/* 4-step workflow */}
        <div ref={stepsRef} style={{ position: "relative", paddingLeft: "4rem" }}>
          {/* Animated vertical line */}
          <div
            style={{
              position: "absolute",
              left: "1rem",
              top: "1.5rem",
              bottom: "1.5rem",
              width: "2px",
              background: "rgba(13,148,136,0.15)",
              borderRadius: "1px",
            }}
          >
            <div
              ref={lineRef}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: "100%",
                background: "linear-gradient(180deg, #0d9488, #5eead4)",
                borderRadius: "1px",
                transformOrigin: "top",
                transform: "scaleY(0)",
              }}
            />
          </div>

          {/* Glowing node dots on the line */}
          {[0, 1, 2, 3].map((i) => (
            <div
              key={i}
              className={`node-dot node-${i}`}
              style={{
                position: "absolute",
                left: "0.35rem",
                top: `${2 + i * 28}%`,
                width: "12px",
                height: "12px",
                borderRadius: "50%",
                background: "#042f2e",
                border: "2px solid rgba(13,148,136,0.3)",
                zIndex: 2,
              }}
            />
          ))}

          {/* Steps */}
          <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.num}
                  className="step-item"
                  style={{
                    display: "flex",
                    gap: "1.5rem",
                    alignItems: "flex-start",
                    padding: "2rem",
                    borderRadius: "20px",
                    border: "1px solid rgba(13,148,136,0.15)",
                    background: "rgba(4, 47, 46, 0.5)",
                    backdropFilter: "blur(10px)",
                    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "rgba(94,234,212,0.4)";
                    e.currentTarget.style.background = "rgba(13,148,136,0.1)";
                    e.currentTarget.style.transform = "translateX(8px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "rgba(13,148,136,0.15)";
                    e.currentTarget.style.background = "rgba(4, 47, 46, 0.5)";
                    e.currentTarget.style.transform = "translateX(0)";
                  }}
                >
                  {/* Icon */}
                  <div
                    style={{
                      width: "52px",
                      height: "52px",
                      borderRadius: "14px",
                      background: "linear-gradient(135deg, rgba(13,148,136,0.2), rgba(13,148,136,0.05))",
                      border: "1px solid rgba(13,148,136,0.25)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#5eead4",
                      flexShrink: 0,
                    }}
                  >
                    <Icon size={24} strokeWidth={1.8} />
                  </div>

                  {/* Content */}
                  <div style={{ flex: 1 }}>
                    <h3
                      style={{
                        fontFamily: "'Satoshi', sans-serif",
                        fontWeight: 600,
                        fontSize: "1.35rem",
                        color: "#f0fdfa",
                        marginBottom: "0.5rem",
                        letterSpacing: "-0.01em",
                      }}
                    >
                      {step.title}
                    </h3>
                    <p
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "0.95rem",
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

      <style>{`
        .node-dot {
          transition: all 0.3s ease;
        }
        .step-item:hover ~ .node-dot,
        .step-item:hover .node-dot {
          background: #5eead4 !important;
          box-shadow: 0 0 20px rgba(94, 234, 212, 0.5);
        }
      `}</style>
    </section>
  );
}
