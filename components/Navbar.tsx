"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowUpRight, ChevronDown, Menu, X } from "lucide-react";
import { siteConfig } from "@/lib/site";
import { services } from "@/lib/services";

const navLinks = [
  { label: "About", href: "/#about" },
  { label: "Process", href: "/#process" },
  { label: "Services", href: "/#services" },
  { label: "Work", href: "/#projects" },
  { label: "Pricing", href: "/#pricing" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        display: "flex",
        justifyContent: "center",
        padding: scrolled ? "0.75rem 1rem" : "1.25rem 1rem",
        pointerEvents: "none",
        transition: "padding 0.35s ease",
      }}
    >
      <nav
        style={{
          pointerEvents: "auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "1rem",
          padding: scrolled ? "0.55rem 0.7rem" : "0.65rem 0.8rem",
          borderRadius: "999px",
          background: scrolled ? "var(--nav-bg-scrolled)" : "var(--nav-bg)",
          backdropFilter: "blur(22px) saturate(1.5)",
          WebkitBackdropFilter: "blur(22px) saturate(1.5)",
          border: scrolled ? "1px solid var(--nav-border)" : "1px solid var(--nav-border-idle)",
          boxShadow: scrolled ? "0 14px 40px rgba(15, 23, 42, 0.12)" : "0 8px 24px rgba(15, 23, 42, 0.08)",
          transition: "all 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        <ul
          className="nav-links"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.25rem",
            listStyle: "none",
            margin: 0,
            padding: 0,
          }}
        >
          {navLinks.map((link) => (
            <li key={link.href} className={link.label === "Services" ? "nav-services" : undefined} style={{ position: "relative" }}>
              <Link
                href={link.href}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  minHeight: "36px",
                  padding: "0 0.9rem",
                  borderRadius: "999px",
                  color: "var(--nav-text)",
                  textDecoration: "none",
                  fontSize: "0.83rem",
                  fontWeight: 600,
                  fontFamily: "'Inter', sans-serif",
                  whiteSpace: "nowrap",
                  transition: "background 0.2s ease, color 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(20, 184, 166, 0.1)";
                  e.currentTarget.style.color = "var(--accent)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.color = "var(--nav-text)";
                }}
              >
                {link.label}
                {link.label === "Services" && <ChevronDown size={13} strokeWidth={2.4} />}
              </Link>
              {link.label === "Services" && (
                <div className="nav-services-menu">
                  {services.map((service) => (
                    <Link key={service.slug} href={service.path} className="nav-services-item">
                      <span>{service.title}</span>
                      <small>{service.tag}</small>
                    </Link>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>

        <a
          href={siteConfig.contact.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="nav-cta"
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "0.45rem",
            minHeight: "38px",
            padding: "0 1rem",
            borderRadius: "999px",
            background: "#073b37",
            color: "#fff",
            fontWeight: 700,
            fontSize: "0.82rem",
            fontFamily: "'Satoshi', sans-serif",
            textDecoration: "none",
            whiteSpace: "nowrap",
          }}
        >
          Discuss Project
          <ArrowUpRight size={15} />
        </a>

        <button
          onClick={() => setMenuOpen((value) => !value)}
          className="nav-toggle"
          style={{
            display: "none",
            alignItems: "center",
            justifyContent: "center",
            width: "38px",
            height: "38px",
            border: "none",
            borderRadius: "50%",
            background: "#073b37",
            color: "#fff",
            cursor: "pointer",
          }}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      {menuOpen && (
        <div
          style={{
            pointerEvents: "auto",
            position: "absolute",
            top: "calc(100% + 0.5rem)",
            left: "50%",
            transform: "translateX(-50%)",
            width: "calc(100% - 2rem)",
            maxWidth: "360px",
            borderRadius: "22px",
            background: "rgba(255,255,255,0.96)",
            backdropFilter: "blur(24px)",
            WebkitBackdropFilter: "blur(24px)",
            border: "1px solid rgba(15,23,42,0.08)",
            boxShadow: "0 22px 60px rgba(15,23,42,0.16)",
            padding: "0.75rem",
            animation: "islandExpand 0.25s ease",
          }}
        >
          {navLinks.map((link) =>
            link.label === "Services" ? (
              <div key={link.href}>
                <button
                  type="button"
                  onClick={() => setServicesOpen((value) => !value)}
                  aria-expanded={servicesOpen}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    width: "100%",
                    padding: "0.8rem 0.9rem",
                    borderRadius: "14px",
                    border: "none",
                    background: servicesOpen ? "rgba(20,184,166,0.08)" : "transparent",
                    color: "#10201e",
                    textDecoration: "none",
                    fontSize: "0.95rem",
                    fontWeight: 600,
                    fontFamily: "'Inter', sans-serif",
                    cursor: "pointer",
                  }}
                >
                  Services
                  <ChevronDown size={16} style={{ transform: servicesOpen ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.2s ease" }} />
                </button>
                {servicesOpen && (
                  <div style={{ display: "grid", gap: "0.25rem", marginTop: "0.25rem", padding: "0.25rem 0 0.45rem 0.45rem" }}>
                    {services.map((service) => (
                      <Link
                        key={service.slug}
                        href={service.path}
                        onClick={() => {
                          setMenuOpen(false);
                          setServicesOpen(false);
                        }}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          gap: "0.75rem",
                          padding: "0.68rem 0.8rem",
                          borderRadius: "13px",
                          color: "#10201e",
                          textDecoration: "none",
                          fontSize: "0.84rem",
                          fontWeight: 600,
                          fontFamily: "'Inter', sans-serif",
                          background: "rgba(20,184,166,0.06)",
                        }}
                      >
                        {service.title}
                        <span style={{ color: service.color, fontSize: "0.7rem", fontWeight: 800 }}>{service.tag}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                style={{
                  display: "block",
                  padding: "0.8rem 0.9rem",
                  borderRadius: "14px",
                  color: "#10201e",
                  textDecoration: "none",
                  fontSize: "0.95rem",
                  fontWeight: 600,
                  fontFamily: "'Inter', sans-serif",
                }}
              >
                {link.label}
              </Link>
            )
          )}
        </div>
      )}

      <style>{`
        .nav-services-menu {
          position: absolute;
          top: calc(100% + 0.55rem);
          left: 50%;
          transform: translateX(-50%) translateY(8px);
          width: 320px;
          display: grid;
          gap: 0.25rem;
          padding: 0.65rem;
          border-radius: 18px;
          background: rgba(255,255,255,0.96);
          border: 1px solid rgba(15,23,42,0.08);
          box-shadow: 0 22px 60px rgba(15,23,42,0.16);
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.2s ease, transform 0.2s ease;
        }
        .nav-services:hover .nav-services-menu {
          opacity: 1;
          pointer-events: auto;
          transform: translateX(-50%) translateY(0);
        }
        .nav-services-item {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 0.75rem;
          padding: 0.72rem 0.85rem;
          border-radius: 13px;
          color: #10201e;
          text-decoration: none;
          font-family: 'Inter', sans-serif;
          font-size: 0.86rem;
          font-weight: 700;
        }
        .nav-services-item:hover {
          background: rgba(20,184,166,0.08);
        }
        .nav-services-item small {
          color: var(--accent);
          font-size: 0.68rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.08em;
        }
        @media (max-width: 760px) {
          .nav-links,
          .nav-cta {
            display: none !important;
          }
          .nav-toggle {
            display: inline-flex !important;
          }
        }
      `}</style>
    </header>
  );
}
