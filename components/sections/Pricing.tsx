"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, Check } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const pricingTiers = [
  {
    tier: "STARTER",
    price: "Rp 15-25",
    suffix: "juta",
    description: "Company profile & landing page",
    features: [
      "Professional company profile website",
      "Landing page with strategic CTA",
      "Basic SEO setup and metadata",
      "Responsive mobile-first design",
      "3 months support and maintenance",
    ],
    target: "UMKM & small businesses",
    cta: "Start Project",
    highlighted: false,
  },
  {
    tier: "GROWTH",
    price: "Rp 50-80",
    suffix: "juta",
    description: "Custom web application & dashboard",
    features: [
      "Custom web application based on your workflow",
      "Dashboard and reporting system",
      "API integrations (payment, CRM, and more)",
      "Role-based access control",
      "6 months support and development",
    ],
    target: "Growing SMBs & mid-market",
    cta: "Start Project",
    highlighted: false,
  },
  {
    tier: "ENTERPRISE",
    price: "Rp 150-300",
    suffix: "juta+",
    description: "Full digital ecosystem",
    features: [
      "Full-scale digital platform",
      "AI solutions & automation",
      "Custom integrations & backend",
      "Dedicated project team",
      "12 bulan support + SLA",
      "Priority response & maintenance",
    ],
    target: "Large corporations & agencies",
    cta: "Get Custom Quote",
    highlighted: true,
  },
  {
    tier: "RETAINER",
    price: "Rp 10-25",
    suffix: "juta/bulan",
    description: "Ongoing development & support",
    features: [
      "Continuous development hours",
      "Maintenance & updates",
      "Priority support (24h response)",
      "Monthly strategy calls",
      "Flexible scope adjustment",
    ],
    target: "Companies needing continuous support",
    cta: "Discuss Retainer",
    highlighted: false,
  },
];

export default function Pricing() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);
  const noteRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header: fade in + slide up
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

      // Cards: individual scroll-triggered reveal with scale
      if (cardsContainerRef.current) {
        const cards = cardsContainerRef.current.querySelectorAll(".pricing-card");

        cards.forEach((card, index) => {
          gsap.from(card, {
            scrollTrigger: {
              trigger: card,
              start: "top 92%",
            },
            y: 80,
            opacity: 0,
            scale: 0.95,
            duration: 0.7,
            delay: index * 0.08,
            ease: "power2.out",
          });
        });
      }

      // Note: fade in
      if (noteRef.current) {
        gsap.from(noteRef.current, {
          scrollTrigger: {
            trigger: noteRef.current,
            start: "top 90%",
          },
          y: 20,
          opacity: 0,
          duration: 0.6,
          ease: "power2.out",
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="pricing"
      style={{
        padding: "10rem 1.5rem 12rem",
        background: "var(--bg-primary)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Top decorative line with gradient */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "1px",
          background: "linear-gradient(90deg, transparent 0%, var(--accent) 50%, transparent 100%)",
          opacity: 0.4,
        }}
      />

      {/* Decorative background elements */}
      <div
        style={{
          position: "absolute",
          top: "10%",
          left: "-10%",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(13, 148, 136, 0.05) 0%, transparent 70%)",
          filter: "blur(60px)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: "1300px",
          margin: "0 auto",
          position: "relative",
          zIndex: 2,
        }}
      >
        {/* Header */}
        <div ref={headerRef} style={{ marginBottom: "5rem", textAlign: "center" }}>


          <h2
            style={{
              fontFamily: "'Satoshi', sans-serif",
              fontWeight: 600,
              fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
              lineHeight: "1.1",
              letterSpacing: "-0.02em",
              color: "var(--text-primary)",
              marginBottom: "1.5rem",
            }}
          >
            Transparent pricing,{" "}
            <span
              style={{
                fontStyle: "italic",
                fontWeight: 400,
                color: "var(--accent)",
              }}
            >
              flexible
            </span>
            <br />
            engagement
          </h2>

          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "1.1rem",
              color: "var(--text-secondary)",
              lineHeight: "1.7",
              maxWidth: "650px",
              margin: "0 auto",
            }}
          >
            Choose an engagement model that fits your business needs.
            Pricing is adjusted based on scope, features, integrations, and timeline.
          </p>
        </div>

        {/* Pricing cards — vertical cards in horizontal grid */}
        <div
          ref={cardsContainerRef}
          className="pricing-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "1.5rem",
          }}
        >
          {pricingTiers.map((tier) => (
            <div
              key={tier.tier}
              className="pricing-card"
              style={{
                position: "relative",
                display: "flex",
                flexDirection: "column",
                padding: "2rem 1.75rem",
                borderRadius: "20px",
                border: tier.highlighted
                  ? "2px solid var(--accent)"
                  : "1px solid var(--border)",
                background: tier.highlighted
                  ? "linear-gradient(160deg, #042f2e, #0a1a18)"
                  : "var(--bg-surface)",
                transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                boxShadow: tier.highlighted
                  ? "0 8px 40px rgba(13, 148, 136, 0.15)"
                  : "0 2px 12px rgba(0,0,0,0.04)",
                overflow: "hidden",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-8px)";
                e.currentTarget.style.boxShadow = "0 20px 60px rgba(0,0,0,0.12)";
                if (!tier.highlighted) {
                  e.currentTarget.style.borderColor = "var(--accent)";
                }
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = tier.highlighted
                  ? "0 8px 40px rgba(13, 148, 136, 0.15)"
                  : "0 2px 12px rgba(0,0,0,0.04)";
                if (!tier.highlighted) {
                  e.currentTarget.style.borderColor = "var(--border)";
                }
              }}
            >
              {/* Top gradient bar for highlighted */}
              {tier.highlighted && (
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: "3px",
                    background: "linear-gradient(90deg, #0d9488, #5eead4, #0d9488)",
                  }}
                />
              )}

              {/* Popular badge */}
              {tier.highlighted && (
                <div
                  style={{
                    position: "absolute",
                    top: "1.25rem",
                    right: "1.25rem",
                    padding: "0.25rem 0.7rem",
                    borderRadius: "4px",
                    background: "var(--accent)",
                    color: "#fff",
                    fontSize: "0.65rem",
                    fontWeight: 700,
                    fontFamily: "'Inter', sans-serif",
                    letterSpacing: "0.1em",
                  }}
                >
                  POPULAR
                </div>
              )}

              {/* Tier name */}
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.72rem",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: tier.highlighted ? "var(--accent)" : "var(--text-muted)",
                  marginBottom: "1rem",
                }}
              >
                {tier.tier}
              </p>

              {/* Price */}
              <div style={{ marginBottom: "0.75rem" }}>
                <span
                  style={{
                    fontFamily: "'Satoshi', sans-serif",
                    fontWeight: 600,
                    fontSize: "2rem",
                    color: tier.highlighted ? "#f0fdfa" : "var(--text-primary)",
                    letterSpacing: "-0.02em",
                  }}
                >
                  {tier.price}
                </span>
                <span
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.85rem",
                    color: tier.highlighted ? "#99f6e4" : "var(--text-muted)",
                    fontWeight: 500,
                    marginLeft: "0.3rem",
                  }}
                >
                  {tier.suffix}
                </span>
              </div>

              {/* Description */}
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.9rem",
                  color: tier.highlighted ? "#99f6e4" : "var(--text-secondary)",
                  marginBottom: "0.3rem",
                  lineHeight: "1.5",
                }}
              >
                {tier.description}
              </p>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.78rem",
                  color: tier.highlighted ? "#5eead4" : "var(--text-muted)",
                  fontStyle: "italic",
                  marginBottom: "1.5rem",
                }}
              >
                {tier.target}
              </p>

              {/* Divider */}
              <div
                style={{
                  height: "1px",
                  background: tier.highlighted ? "rgba(94,234,212,0.2)" : "var(--border)",
                  marginBottom: "1.5rem",
                }}
              />

              {/* Features */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.7rem",
                  marginBottom: "2rem",
                  flex: 1,
                }}
              >
                {tier.features.map((feature) => (
                  <div
                    key={feature}
                    style={{ display: "flex", alignItems: "flex-start", gap: "0.6rem" }}
                  >
                    <div
                      style={{
                        width: "18px",
                        height: "18px",
                        borderRadius: "4px",
                        background: tier.highlighted
                          ? "rgba(94,234,212,0.15)"
                          : "rgba(13, 148, 136, 0.08)",
                        border: tier.highlighted
                          ? "1px solid rgba(94,234,212,0.3)"
                          : "1px solid rgba(13, 148, 136, 0.15)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                        marginTop: "2px",
                      }}
                    >
                      <Check
                        size={11}
                        color={tier.highlighted ? "#5eead4" : "var(--accent)"}
                        strokeWidth={3}
                      />
                    </div>
                    <span
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "0.85rem",
                        color: tier.highlighted ? "#99f6e4" : "var(--text-secondary)",
                        lineHeight: "1.5",
                      }}
                    >
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <a
                href={`https://wa.me/6287877946981?text=Hello%20WeTech%20Studio%2C%20I%20am%20interested%20in%20the%20${tier.tier}%20package`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "0.5rem",
                  padding: "0.875rem 1rem",
                  borderRadius: "8px",
                  background: tier.highlighted
                    ? "linear-gradient(135deg, #0d9488, #14b8a6)"
                    : "transparent",
                  color: tier.highlighted ? "#fff" : "var(--text-primary)",
                  border: tier.highlighted ? "none" : "1.5px solid var(--border)",
                  fontWeight: 600,
                  fontSize: "0.9rem",
                  fontFamily: "'Satoshi', sans-serif",
                  textDecoration: "none",
                  transition: "all 0.25s ease",
                  marginTop: "auto",
                }}
                onMouseEnter={(e) => {
                  if (tier.highlighted) {
                    e.currentTarget.style.transform = "translateY(-2px)";
                    e.currentTarget.style.boxShadow = "0 8px 24px rgba(20,184,166,0.4)";
                  } else {
                    e.currentTarget.style.borderColor = "var(--accent)";
                    e.currentTarget.style.color = "var(--accent)";
                    e.currentTarget.style.background = "rgba(13, 148, 136, 0.05)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (tier.highlighted) {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "none";
                  } else {
                    e.currentTarget.style.borderColor = "var(--border)";
                    e.currentTarget.style.color = "var(--text-primary)";
                    e.currentTarget.style.background = "transparent";
                  }
                }}
              >
                {tier.cta}
                <ArrowRight size={14} />
              </a>
            </div>
          ))}
        </div>

        {/* Note */}
        <div
          ref={noteRef}
          style={{
            marginTop: "4rem",
            padding: "1.5rem 2rem",
            borderRadius: "12px",
            border: "1px solid var(--border)",
            background: "var(--bg-surface)",
            textAlign: "center",
          }}
        >
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.9rem",
              color: "var(--text-muted)",
              lineHeight: "1.7",
            }}
          >
            <strong style={{ color: "var(--text-secondary)" }}>Note:</strong>{" "}
            These are starting estimates. Final pricing depends on detailed scope,
            feature complexity, required integrations, and project timeline.
            Contact us for a more accurate estimate.
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .pricing-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 600px) {
          .pricing-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
