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
        transition: "all 0.4s ease",
        backgroundColor: scrolled ? "rgba(var(--bg-primary-rgb, 6,4,18), 0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
      }}
    >
      <nav
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 1.5rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "72px",
        }}
      >
        {/* Logo */}
        <Link
          href="/"
          style={{
            display: "flex",
            alignItems: "center",
            textDecoration: "none",
            minWidth: 0,
          }}
        >
          <div
            className="logo-mark"
            
          >
            <Image
              src="/logo-text.png"
              alt="WeTech Studio logo"
              width={1536}
              height={1024}
              priority
              style={{
                width: "240px",
                height: "auto",
                display: "block",
                objectFit: "contain",
                flexShrink: 0,
              }}
            />
          </div>
          {/* <span
            className="logo-text"
            style={{
              fontFamily: "'Sora', sans-serif",
              fontWeight: "800",
              fontSize: "1.6rem",
              color: "var(--text-primary)",
              letterSpacing: "-0.04em",
            }}
          >
            WeTech<span style={{ color: "var(--accent-bright)" }}>Studio</span>
          </span> */}
        </Link>

        {/* Desktop Nav */}
        <ul
          style={{
            display: "flex",
            alignItems: "center",
            gap: "2rem",
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
                  color: "var(--text-secondary)",
                  textDecoration: "none",
                  fontSize: "0.9rem",
                  fontWeight: "500",
                  fontFamily: "'Space Grotesk', sans-serif",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text-accent)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }} className="hidden-mobile">
          <a
            href="https://wa.me/6287877946981?text=Halo%20WeTech%20Studio%2C%20saya%20ingin%20konsultasi%20project"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: "0.55rem 1.4rem",
              borderRadius: "50px",
              background: "linear-gradient(135deg, #26185f, #7c3aed)",
              color: "#fff",
              fontWeight: "600",
              fontSize: "0.875rem",
              fontFamily: "'Sora', sans-serif",
              textDecoration: "none",
              transition: "opacity 0.2s, transform 0.2s",
              display: "inline-block",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.opacity = "0.85";
              e.currentTarget.style.transform = "translateY(-1px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.opacity = "1";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            Konsultasi Gratis
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            color: "var(--text-primary)",
            padding: "0.5rem",
          }}
          className="show-mobile"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          style={{
            background: "var(--bg-surface)",
            borderTop: "1px solid var(--border)",
            padding: "1.5rem",
          }}
        >
          <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "1rem" }}>
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  style={{
                    color: "var(--text-secondary)",
                    textDecoration: "none",
                    fontSize: "1rem",
                    fontWeight: "500",
                    fontFamily: "'Space Grotesk', sans-serif",
                    display: "block",
                    padding: "0.5rem 0",
                  }}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <a
                href="https://wa.me/6287877946981?text=Halo%20WeTech%20Studio%2C%20saya%20ingin%20konsultasi%20project"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "block",
                  padding: "0.75rem 1.5rem",
                  borderRadius: "50px",
                  background: "linear-gradient(135deg, #26185f, #7c3aed)",
                  color: "#fff",
                  fontWeight: "600",
                  textAlign: "center",
                  textDecoration: "none",
                  fontFamily: "'Sora', sans-serif",
                  marginTop: "0.5rem",
                }}
              >
                Konsultasi Gratis
              </a>
            </li>
          </ul>
        </div>
      )}

      <style>{`
        @media (min-width: 768px) {
          .hidden-mobile { display: flex !important; }
          .show-mobile { display: none !important; }
        }
        @media (max-width: 767px) {
          .hidden-mobile {
            display: none !important;
          }

          .show-mobile {
            display: block !important;
          }

          .logo-mark {
            width: auto !important;
            height: auto !important;
            border-radius: 0 !important;
            background: transparent !important;
          }

           nav {
              padding-left: 0.7rem !important;
              padding-right: 1rem !important;
            }

            .logo-mark img {
              width: 180px !important;
              margin-left: -6px;
            }
        }
      `}</style>
    </header>
  );
}
