"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Layanan", href: "/#services" },
  { label: "AI Solution", href: "/#ai-solution" },
  { label: "Use Cases", href: "/#use-cases" },
  { label: "Pricing", href: "/#pricing" },
  { label: "Kontak", href: "/#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
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
        transition: "padding 0.4s ease",
        pointerEvents: "none",
      }}
    >
      {/* Dynamic Island container */}
      <nav
        className="dynamic-island"
        style={{
          pointerEvents: "auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "1.5rem",
          padding: scrolled ? "0.5rem 0.75rem 0.5rem 1rem" : "0.6rem 1rem 0.6rem 1.25rem",
          borderRadius: "999px",
          background: scrolled
            ? "var(--nav-bg-scrolled, rgba(255,255,255,0.95))"
            : "var(--nav-bg, rgba(255,255,255,0.85))",
          backdropFilter: "blur(20px) saturate(1.5)",
          WebkitBackdropFilter: "blur(20px) saturate(1.5)",
          border: scrolled
            ? "1px solid var(--nav-border, rgba(0,0,0,0.08))"
            : "1px solid var(--nav-border-idle, rgba(0,0,0,0.05))",
          boxShadow: scrolled
            ? "0 8px 32px rgba(0,0,0,0.12)"
            : "0 4px 16px rgba(0,0,0,0.06)",
          transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
          maxWidth: "fit-content",
        }}
      >
        {/* Logo */}
        <Link
          href="/"
          style={{
            display: "flex",
            alignItems: "center",
            textDecoration: "none",
            flexShrink: 0,
          }}
        >
          <Image
            src="/logo-text.png"
            alt="WeTech Studio logo"
            width={1536}
            height={1024}
            priority
            className="nav-logo"
            style={{
              width: "auto",
              height: "28px",
              display: "block",
              objectFit: "contain",
            }}
          />
        </Link>

        {/* Desktop Nav Links */}
        <ul
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1.5rem",
            listStyle: "none",
            margin: 0,
            padding: 0,
          }}
          className="hidden-mobile"
        >
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                style={{
                  color: "var(--nav-text)",
                  textDecoration: "none",
                  fontSize: "0.82rem",
                  fontWeight: "500",
                  fontFamily: "'Inter', sans-serif",
                  transition: "color 0.2s",
                  whiteSpace: "nowrap",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--nav-text)")}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <a
          href="https://wa.me/6287877946981?text=Halo%20WeTech%20Studio%2C%20saya%20ingin%20konsultasi%20project"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden-mobile"
          style={{
            padding: "0.45rem 1.1rem",
            borderRadius: "999px",
            background: "linear-gradient(135deg, #042f2e, #0d9488)",
            color: "#fff",
            fontWeight: "600",
            fontSize: "0.8rem",
            fontFamily: "'Satoshi', sans-serif",
            textDecoration: "none",
            transition: "opacity 0.2s, transform 0.2s",
            whiteSpace: "nowrap",
            flexShrink: 0,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.opacity = "0.85";
            e.currentTarget.style.transform = "scale(1.03)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.opacity = "1";
            e.currentTarget.style.transform = "scale(1)";
          }}
        >
          Konsultasi Gratis
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            color: "var(--nav-text)",
            padding: "0.4rem",
            display: "flex",
            alignItems: "center",
          }}
          className="show-mobile"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div
          style={{
            pointerEvents: "auto",
            position: "absolute",
            top: "calc(100%)",
            left: "50%",
            transform: "translateX(-50%)",
            width: "calc(100% - 2rem)",
            maxWidth: "360px",
            borderRadius: "20px",
            background: "rgba(var(--bg-primary-rgb, 6,4,18), 0.95)",
            backdropFilter: "blur(24px) saturate(1.4)",
            WebkitBackdropFilter: "blur(24px) saturate(1.4)",
            border: "1px solid rgba(255,255,255,0.08)",
            boxShadow: "0 16px 48px rgba(0,0,0,0.5)",
            padding: "1.25rem 1.5rem",
            animation: "islandExpand 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        >
          <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "0.25rem" }}>
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  style={{
                    color: "var(--text-secondary)",
                    textDecoration: "none",
                    fontSize: "0.95rem",
                    fontWeight: "500",
                    fontFamily: "'Inter', sans-serif",
                    display: "block",
                    padding: "0.6rem 0.75rem",
                    borderRadius: "10px",
                    transition: "background 0.2s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.05)")}
                  onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li style={{ marginTop: "0.5rem" }}>
              <a
                href="https://wa.me/6287877946981?text=Halo%20WeTech%20Studio%2C%20saya%20ingin%20konsultasi%20project"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "block",
                  padding: "0.7rem 1.5rem",
                  borderRadius: "999px",
                  background: "linear-gradient(135deg, #042f2e, #0d9488)",
                  color: "#fff",
                  fontWeight: "600",
                  textAlign: "center",
                  textDecoration: "none",
                  fontFamily: "'Satoshi', sans-serif",
                  fontSize: "0.9rem",
                }}
              >
                Konsultasi Gratis
              </a>
            </li>
          </ul>
        </div>
      )}

      <style>{`
        @keyframes islandExpand {
          from {
            opacity: 0;
            transform: translateX(-50%) scale(0.95) translateY(-8px);
          }
          to {
            opacity: 1;
            transform: translateX(-50%) scale(1) translateY(0);
          }
        }
        @media (min-width: 768px) {
          .hidden-mobile { display: flex !important; }
          .show-mobile { display: none !important; }
        }
        @media (max-width: 767px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
          .nav-logo { height: 22px !important; }
        }
      `}</style>
    </header>
  );
}
