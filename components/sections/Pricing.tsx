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
      "Website company profile profesional",
      "Landing page dengan CTA strategis",
      "Basic SEO setup & metadata",
      "Responsive design (mobile-first)",
      "3 bulan support & maintenance",
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
      "Custom web application sesuai workflow",
      "Dashboard & reporting system",
      "API integrations (payment, CRM, dll)",
      "Role-based access control",
      "6 bulan support & development",
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
            toggleActions: "play none none none",
          },
          y: 40,
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
              toggleActions: "play none none none",
            },
            y: 80,
            opacity: 0,
            scale: 0.97,
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
            toggleActions: "play none none none",
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
        padding: "8rem 1.5rem 10rem",
        background: "var(--bg-primary)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative line */}
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

      <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative", zIndex: 2 }}>
        {/* Header */}
        <div ref={headerRef} style={{ marginBottom: "5rem" }}>
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
            Investasi
          </p>
          <h2
            style={{
              fontFamily: "'Satoshi', sans-serif",
              fontWeight: 400,
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
              lineHeight: "1.1",
              letterSpacing: "-0.02em",
              color: "var(--text-primary)",
              maxWidth: "700px",
              marginBottom: "1.5rem",
            }}
          >
            Transparent pricing,{" "}
            <span style={{ fontStyle: "italic", color: "var(--accent)" }}>
              flexible engagement
            </span>
          </h2>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "1.05rem",
              color: "var(--text-secondary)",
              lineHeight: "1.7",
              maxWidth: "600px",
            }}
          >
            Pilih model engagement yang sesuai dengan kebutuhan bisnis Anda.
            Semua harga menyesuaikan scope, fitur, integrasi, dan timeline.
          </p>
        </div>

        {/* Pricing cards — vertical cards in horizontal grid */}
        <div
          ref={cardsContainerRef}
          className="pricing-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "1.25rem",
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
                padding: "2rem 1.5rem",
                borderRadius: "16px",
                border: tier.highlighted
                  ? "2px solid var(--accent)"
                  : "1px solid rgba(13,148,136,0.15)",
                background: tier.highlighted
                  ? "linear-gradient(160deg, #042f2e, #0a1a18)"
                  : "rgba(13,148,136,0.03)",
                transition: "transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease",
                boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-6px)";
                e.currentTarget.style.boxShadow = "0 16px 48px rgba(0,0,0,0.12)";
                if (!tier.highlighted) {
                  e.currentTarget.style.borderColor = "var(--accent)";
                }
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 2px 12px rgba(0,0,0,0.04)";
                if (!tier.highlighted) {
                  e.currentTarget.style.borderColor = "var(--border)";
                }
              }}
            >
              {tier.highlighted && (
                <div
                  style={{
                    position: "absolute",
                    top: "1rem",
                    right: "1rem",
                    padding: "0.2rem 0.6rem",
                    borderRadius: "2px",
                    background: "var(--accent)",
                    color: "#fff",
                    fontSize: "0.6rem",
                    fontWeight: "700",
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
                  fontWeight: "700",
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
                    fontWeight: 400,
                    fontSize: "1.75rem",
                    color: tier.highlighted ? "#f0fdfa" : "var(--text-primary)",
                    letterSpacing: "-0.02em",
                  }}
                >
                  {tier.price}
                </span>
                <span
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.8rem",
                    color: tier.highlighted ? "#99f6e4" : "var(--text-muted)",
                    fontWeight: "500",
                    marginLeft: "0.25rem",
                  }}
                >
                  {tier.suffix}
                </span>
              </div>

              {/* Description */}
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.88rem",
                  color: tier.highlighted ? "#99f6e4" : "var(--text-secondary)",
                  marginBottom: "0.4rem",
                  lineHeight: "1.5",
                }}
              >
                {tier.description}
              </p>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.75rem",
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
              <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem", marginBottom: "2rem", flex: 1 }}>
                {tier.features.map((feature) => (
                  <div
                    key={feature}
                    style={{ display: "flex", alignItems: "flex-start", gap: "0.5rem" }}
                  >
                    <div
                      style={{
                        width: "16px",
                        height: "16px",
                        borderRadius: "2px",
                        background: tier.highlighted ? "var(--accent)" : "var(--bg-muted)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                        marginTop: "2px",
                      }}
                    >
                      <Check
                        size={9}
                        color={tier.highlighted ? "#fff" : "var(--text-secondary)"}
                        strokeWidth={3}
                      />
                    </div>
                    <span
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "0.82rem",
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
                href={`https://wa.me/6287877946981?text=Halo%20WeTech%20Studio%2C%20saya%20tertarik%20dengan%20paket%20${tier.tier}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "0.5rem",
                  padding: "0.75rem 1rem",
                  borderRadius: "4px",
                  background: tier.highlighted ? "var(--accent)" : "transparent",
                  color: tier.highlighted ? "#fff" : "var(--text-primary)",
                  border: tier.highlighted ? "none" : "1.5px solid var(--border)",
                  fontWeight: "600",
                  fontSize: "0.85rem",
                  fontFamily: "'Inter', sans-serif",
                  textDecoration: "none",
                  transition: "all 0.25s ease",
                  marginTop: "auto",
                }}
                onMouseEnter={(e) => {
                  if (tier.highlighted) {
                    e.currentTarget.style.background = "var(--accent-hover)";
                    e.currentTarget.style.transform = "translateY(-2px)";
                    e.currentTarget.style.boxShadow = "0 8px 24px rgba(20,184,166,0.3)";
                  } else {
                    e.currentTarget.style.borderColor = "var(--accent)";
                    e.currentTarget.style.color = "var(--accent)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (tier.highlighted) {
                    e.currentTarget.style.background = "var(--accent)";
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "none";
                  } else {
                    e.currentTarget.style.borderColor = "var(--border)";
                    e.currentTarget.style.color = "var(--text-primary)";
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
            marginTop: "3rem",
            padding: "1.25rem 2rem",
            borderRadius: "4px",
            border: "1px solid var(--border)",
            background: "var(--bg-surface)",
          }}
        >
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.85rem",
              color: "var(--text-muted)",
              lineHeight: "1.6",
              textAlign: "center",
            }}
          >
            <strong style={{ color: "var(--text-secondary)" }}>Catatan:</strong>{" "}
            Harga di atas adalah estimasi awal. Final pricing disesuaikan dengan scope detail,
            kompleksitas fitur, integrasi yang dibutuhkan, dan timeline proyek.
            Hubungi kami untuk estimasi yang lebih akurat.
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
