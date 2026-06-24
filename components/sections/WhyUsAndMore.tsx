"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { Code2, Handshake, Rocket, ShieldCheck, Target, Wrench, ArrowRight, ExternalLink } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { services } from "@/lib/services";

gsap.registerPlugin(ScrollTrigger);

const advantages: Array<{ icon: LucideIcon; title: string; desc: string }> = [
  { icon: Target, title: "Business-first Approach", desc: "We start from business goals, not tools." },
  { icon: Code2, title: "Clean & Scalable Code", desc: "Readable, maintainable, ready to grow." },
  { icon: Wrench, title: "Custom Solution", desc: "Built around your actual workflow." },
  { icon: ShieldCheck, title: "End-to-End Support", desc: "From consultation to maintenance." },
  { icon: Rocket, title: "Ready to Evolve", desc: "Prepared for new features and integrations." },
  { icon: Handshake, title: "SMB to Corporate", desc: "Consistent standards across project sizes." },
];

const companyLinks = [
  { label: "About", href: "/#about" },
  { label: "Services", href: "/#services" },
  { label: "Portfolio", href: "/#projects" },
  { label: "Pricing", href: "/#pricing" },
  { label: "Contact", href: "/#contact" },
];

const contactLinks = [
  { label: "hello@wetech.studio", href: "mailto:hello@wetech.studio", external: false },
  { label: "WhatsApp", href: "https://wa.me/6287877946981", external: true },
];

export default function WhyUsAndMore() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);

  // Double the items for seamless loop
  const marqueeItems = [...advantages, ...advantages];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // CTA animation
      if (ctaRef.current) {
        gsap.from(ctaRef.current.children, {
          scrollTrigger: {
            trigger: ctaRef.current,
            start: "top 85%",
          },
          y: 60,
          opacity: 0,
          stagger: 0.15,
          duration: 0.9,
          ease: "power3.out",
        });
      }

      // Footer animation
      if (footerRef.current) {
        gsap.from(footerRef.current.querySelectorAll(".footer-section"), {
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 90%",
          },
          y: 40,
          opacity: 0,
          stagger: 0.1,
          duration: 0.7,
          ease: "power2.out",
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      {/* Why WeTech Studio - Marquee */}
      <section
        ref={sectionRef}
        id="why-us"
        style={{
          padding: "8rem 0",
          background: "var(--bg-primary)",
          overflow: "hidden",
          position: "relative",
        }}
      >
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 1.5rem", marginBottom: "4rem" }}>
          <h2
            style={{
              fontFamily: "'Satoshi', sans-serif",
              fontWeight: 600,
              fontSize: "clamp(2.2rem, 5vw, 3.5rem)",
              lineHeight: "1.1",
              letterSpacing: "-0.02em",
              color: "var(--text-primary)",
              textAlign: "center",
              maxWidth: "700px",
              margin: "0 auto",
            }}
          >
            A technology partner that{" "}
            <span
              style={{
                fontStyle: "italic",
                fontWeight: 400,
                color: "var(--accent)",
              }}
            >
              actually cares
            </span>
          </h2>
        </div>

        {/* Marquee Row */}
        <div className="marquee-wrapper" style={{ marginBottom: "1rem" }}>
          <div className="marquee-track">
            {marqueeItems.map((a, i) => {
              const Icon = a.icon;
              return (
                <div
                  key={`${a.title}-${i}`}
                  className="marquee-card"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "1rem",
                    padding: "1.25rem 1.75rem",
                    borderRadius: "14px",
                    border: "1px solid var(--border)",
                    background: "var(--bg-surface)",
                    whiteSpace: "nowrap",
                    flexShrink: 0,
                    transition: "all 0.3s ease",
                  }}
                >
                  <div
                    style={{
                      width: "44px",
                      height: "44px",
                      borderRadius: "12px",
                      background: "rgba(13, 148, 136, 0.08)",
                      border: "1px solid rgba(13, 148, 136, 0.12)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "var(--accent)",
                      flexShrink: 0,
                    }}
                  >
                    <Icon size={22} strokeWidth={1.8} />
                  </div>
                  <div>
                    <h3
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontWeight: "600",
                        fontSize: "0.95rem",
                        color: "var(--text-primary)",
                        marginBottom: "0.15rem",
                      }}
                    >
                      {a.title}
                    </h3>
                    <p
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "0.8rem",
                        color: "var(--text-muted)",
                      }}
                    >
                      {a.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Fade edges */}
        <div
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            left: 0,
            width: "100px",
            background: "linear-gradient(to right, var(--bg-primary), transparent)",
            zIndex: 2,
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            right: 0,
            width: "100px",
            background: "linear-gradient(to left, var(--bg-primary), transparent)",
            zIndex: 2,
            pointerEvents: "none",
          }}
        />
      </section>

      {/* Final CTA */}
      <section
        ref={ctaRef}
        id="contact"
        style={{
          padding: "10rem 1.5rem",
          position: "relative",
          overflow: "hidden",
          background: "linear-gradient(135deg, #060412 0%, #021716 40%, #042f2e 100%)",
        }}
      >
        {/* Background elements */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(13,148,136,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(13,148,136,0.06) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "700px",
            height: "700px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(13,148,136,0.15) 0%, transparent 70%)",
            filter: "blur(60px)",
            pointerEvents: "none",
          }}
        />

        {/* Decorative floating elements */}
        <div
          style={{
            position: "absolute",
            top: "20%",
            left: "20%",
            width: "8px",
            height: "8px",
            borderRadius: "50%",
            background: "#5eead4",
            opacity: 0.3,
          }}
          className="floating-dot dot-1"
        />
        <div
          style={{
            position: "absolute",
            top: "30%",
            right: "25%",
            width: "6px",
            height: "6px",
            borderRadius: "50%",
            background: "#14b8a6",
            opacity: 0.4,
          }}
          className="floating-dot dot-2"
        />
        <div
          style={{
            position: "absolute",
            bottom: "25%",
            left: "30%",
            width: "10px",
            height: "10px",
            borderRadius: "50%",
            background: "#2dd4bf",
            opacity: 0.25,
          }}
          className="floating-dot dot-3"
        />

        <div
          style={{
            maxWidth: "850px",
            margin: "0 auto",
            textAlign: "center",
            position: "relative",
            zIndex: 2,
          }}
        >
          <h2
            style={{
              fontFamily: "'Satoshi', sans-serif",
              fontWeight: 600,
              fontSize: "clamp(2.8rem, 7vw, 5rem)",
              lineHeight: "1.05",
              letterSpacing: "-0.02em",
              color: "#f0fdfa",
              marginBottom: "1.5rem",
            }}
          >
            Ready to Build Your{" "}
            <span
              style={{
                fontStyle: "italic",
                fontWeight: 400,
                color: "#5eead4",
              }}
            >
              Digital System?
            </span>
          </h2>

          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "1.15rem",
              color: "#99f6e4",
              lineHeight: "1.7",
              marginBottom: "3rem",
              maxWidth: "600px",
              margin: "0 auto 3rem",
            }}
          >
            Discuss your website, custom system, dashboard, or integration needs.
            The first consultation is free.
          </p>

          <a
            href="https://wa.me/6287877946981?text=Hello%20WeTech%20Studio%2C%20I%20would%20like%20to%20start%20a%20digital%20project%20consultation"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.75rem",
              padding: "1.1rem 2.5rem",
              borderRadius: "50px",
              background: "linear-gradient(135deg, #0d9488, #14b8a6)",
              color: "#fff",
              fontWeight: 700,
              fontSize: "1.05rem",
              fontFamily: "'Satoshi', sans-serif",
              textDecoration: "none",
              transition: "all 0.3s ease",
              boxShadow: "0 8px 40px rgba(13,148,136,0.4)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-3px) scale(1.02)";
              e.currentTarget.style.boxShadow = "0 16px 50px rgba(13,148,136,0.5)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0) scale(1)";
              e.currentTarget.style.boxShadow = "0 8px 40px rgba(13,148,136,0.4)";
            }}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            Start a WhatsApp Consultation
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer
        ref={footerRef}
        style={{
          background: "#030208",
          borderTop: "1px solid #052e2b",
          padding: "5rem 1.5rem 2.5rem",
        }}
      >
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "3rem",
              marginBottom: "4rem",
            }}
          >
            {/* Brand */}
            <div className="footer-section">
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  marginBottom: "1.25rem",
                }}
              >
                <div
                  style={{
                    width: "42px",
                    height: "42px",
                    borderRadius: "12px",
                    background: "linear-gradient(135deg, #042f2e, #0d9488)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "18px",
                    fontWeight: 800,
                    color: "#fff",
                    fontFamily: "'Satoshi', sans-serif",
                  }}
                >
                  W
                </div>
                <span
                  style={{
                    fontFamily: "'Satoshi', sans-serif",
                    fontWeight: 700,
                    fontSize: "1.2rem",
                    color: "#f0fdfa",
                    letterSpacing: "-0.02em",
                  }}
                >
                  WeTech<span style={{ color: "#0d9488" }}>Studio</span>
                </span>
              </div>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.9rem",
                  color: "#5a8a85",
                  lineHeight: "1.7",
                  maxWidth: "260px",
                }}
              >
                Digital technology studio for businesses that want to grow with better systems.
              </p>
            </div>

            {/* Services */}
            <div className="footer-section">
              <h4
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 600,
                  fontSize: "0.85rem",
                  color: "#f0fdfa",
                  marginBottom: "1.25rem",
                  letterSpacing: "0.02em",
                }}
              >
                Services
              </h4>
              <ul
                style={{
                  listStyle: "none",
                  margin: 0,
                  padding: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.6rem",
                }}
              >
                {services.slice(0, 4).map((s) => (
                  <li key={s.slug}>
                    <Link
                      href={s.path}
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "0.85rem",
                        color: "#5a8a85",
                        textDecoration: "none",
                        transition: "color 0.2s ease",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "0.25rem",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = "#5eead4";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = "#5a8a85";
                      }}
                    >
                      {s.title}
                      <ArrowRight size={12} />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div className="footer-section">
              <h4
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 600,
                  fontSize: "0.85rem",
                  color: "#f0fdfa",
                  marginBottom: "1.25rem",
                  letterSpacing: "0.02em",
                }}
              >
                Company
              </h4>
              <ul
                style={{
                  listStyle: "none",
                  margin: 0,
                  padding: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.6rem",
                }}
              >
                {companyLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "0.85rem",
                        color: "#5a8a85",
                        textDecoration: "none",
                        transition: "color 0.2s ease",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = "#5eead4";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = "#5a8a85";
                      }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="footer-section">
              <h4
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 600,
                  fontSize: "0.85rem",
                  color: "#f0fdfa",
                  marginBottom: "1.25rem",
                  letterSpacing: "0.02em",
                }}
              >
                Contact
              </h4>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                {contactLinks.map((c) => (
                  <a
                    key={c.label}
                    href={c.href}
                    target={c.external ? "_blank" : undefined}
                    rel={c.external ? "noopener noreferrer" : undefined}
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.85rem",
                      color: "#5a8a85",
                      textDecoration: "none",
                      transition: "color 0.2s ease",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.4rem",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = "#5eead4";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "#5a8a85";
                    }}
                  >
                    {c.external && <ExternalLink size={12} />}
                    {c.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div
            style={{
              borderTop: "1px solid #052e2b",
              paddingTop: "2rem",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "1rem",
            }}
          >
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.8rem",
                color: "#3d5856",
              }}
            >
              © 2024 WeTech Studio · PT WeTech Digital Nusantara
            </p>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.8rem",
                color: "#3d5856",
              }}
            >
              Jakarta, Indonesia
            </p>
          </div>
        </div>
      </footer>

      <style>{`
        .marquee-wrapper {
          overflow: hidden;
          width: 100%;
        }
        .marquee-track {
          display: flex;
          gap: 1rem;
          animation: marqueeScroll 35s linear infinite;
          width: fit-content;
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }
        .marquee-card:hover {
          border-color: var(--accent) !important;
          transform: translateY(-2px);
          box-shadow: 0 8px 30px rgba(20, 184, 166, 0.1);
        }
        @keyframes marqueeScroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes floatDot {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(10px, -15px); }
        }
        .floating-dot.dot-1 { animation: floatDot 4s ease-in-out infinite; }
        .floating-dot.dot-2 { animation: floatDot 5s ease-in-out infinite 0.5s; }
        .floating-dot.dot-3 { animation: floatDot 6s ease-in-out infinite 1s; }
      `}</style>
    </>
  );
}
