"use client";

import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { siteConfig } from "@/lib/site";

const highlights = ["Company websites", "Custom web systems", "Dashboards & integrations"];

export default function Hero() {
  return (
    <section
      style={{
        position: "relative",
        minHeight: "100vh",
        overflow: "hidden",
        background: "#f7fbf8",
        color: "#10201e",
      }}
    >
      <Image
        src="/generated/compro-hero.png"
        alt=""
        fill
        priority
        sizes="100vw"
        style={{
          objectFit: "cover",
          objectPosition: "center",
          opacity: 0.92,
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(90deg, rgba(247,251,248,0.98) 0%, rgba(247,251,248,0.86) 38%, rgba(247,251,248,0.28) 68%, rgba(247,251,248,0.12) 100%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at 18% 84%, rgba(20,184,166,0.16), transparent 34%), linear-gradient(to top, #f7fbf8 0%, rgba(247,251,248,0) 28%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 2,
          maxWidth: "1280px",
          minHeight: "100vh",
          margin: "0 auto",
          padding: "2rem 1.5rem 5rem",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <a
          href="/"
          aria-label="WeTech Studio home"
          style={{
            display: "inline-flex",
            width: "fit-content",
            alignItems: "center",
            marginBottom: "auto",
            paddingTop: "0.25rem",
          }}
        >
          <Image
            src="/logo-text.png"
            alt="WeTech Studio"
            width={240}
            height={160}
            priority
            style={{ width: "154px", height: "auto", objectFit: "contain" }}
          />
        </a>

        <div
          className="hero-compro-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0, 1fr) minmax(420px, 0.86fr)",
            gap: "clamp(2rem, 6vw, 5rem)",
            alignItems: "center",
            width: "100%",
            paddingTop: "5.5rem",
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 34 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <p
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.45rem 0.8rem",
                borderRadius: "999px",
                border: "1px solid rgba(7,59,55,0.12)",
                background: "rgba(255,255,255,0.7)",
                color: "#0f766e",
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.78rem",
                fontWeight: 700,
                marginBottom: "1.35rem",
              }}
            >
              Digital technology partner for growing businesses
            </p>

            <h1
              style={{
                fontFamily: "'Satoshi', sans-serif",
                fontWeight: 800,
                fontSize: "clamp(3rem, 8vw, 6.8rem)",
                lineHeight: "0.98",
                letterSpacing: "-0.035em",
                color: "#10201e",
                maxWidth: "850px",
                marginBottom: "1.5rem",
              }}
            >
              We build websites and digital systems that look polished and work hard.
            </h1>

            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "clamp(1rem, 1.6vw, 1.18rem)",
                lineHeight: "1.8",
                color: "#48635f",
                maxWidth: "650px",
                marginBottom: "2rem",
              }}
            >
              {siteConfig.brand} helps companies design and develop company profiles,
              landing pages, custom web apps, operational dashboards, and backend
              integrations with a professional visual standard.
            </p>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.85rem", marginBottom: "2.5rem" }}>
              <a
                href={siteConfig.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.65rem",
                  minHeight: "50px",
                  padding: "0 1.35rem",
                  borderRadius: "999px",
                  background: "#073b37",
                  color: "#fff",
                  fontFamily: "'Satoshi', sans-serif",
                  fontSize: "0.98rem",
                  fontWeight: 700,
                  textDecoration: "none",
                  boxShadow: "0 16px 38px rgba(7,59,55,0.22)",
                }}
              >
                Start a Project
                <ArrowRight size={18} />
              </a>
              <a
                href="/#projects"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  minHeight: "50px",
                  padding: "0 1.35rem",
                  borderRadius: "999px",
                  border: "1px solid rgba(7,59,55,0.18)",
                  background: "rgba(255,255,255,0.62)",
                  color: "#10201e",
                  fontFamily: "'Satoshi', sans-serif",
                  fontSize: "0.98rem",
                  fontWeight: 700,
                  textDecoration: "none",
                }}
              >
                View Portfolio
              </a>
            </div>

            <div className="hero-highlights" style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem 1.1rem" }}>
              {highlights.map((item) => (
                <span
                  key={item}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.45rem",
                    color: "#48635f",
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.88rem",
                    fontWeight: 600,
                  }}
                >
                  <CheckCircle2 size={16} color="#0f766e" />
                  {item}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 28 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.75, ease: "easeOut", delay: 0.12 }}
            style={{ position: "relative", minHeight: "560px" }}
          >
            <div
              style={{
                position: "absolute",
                right: 0,
                top: "22%",
                width: "250px",
                padding: "1.2rem",
                borderRadius: "26px",
                background: "rgba(255,255,255,0.82)",
                border: "1px solid rgba(7,59,55,0.12)",
                boxShadow: "0 24px 60px rgba(7,59,55,0.16)",
                backdropFilter: "blur(16px)",
              }}
            >
              <p style={{ fontFamily: "'Satoshi', sans-serif", fontSize: "2.6rem", fontWeight: 800, color: "#073b37", lineHeight: 1 }}>
                20+
              </p>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.86rem", lineHeight: 1.6, color: "#48635f" }}>
                Delivered websites, dashboards, platforms, and automation projects.
              </p>
            </div>

            <div
              style={{
                position: "absolute",
                left: "8%",
                bottom: "8%",
                width: "300px",
                padding: "1rem",
                borderRadius: "26px",
                background: "#073b37",
                color: "#e7fffb",
                boxShadow: "0 24px 60px rgba(7,59,55,0.22)",
              }}
            >
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.75rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "#99f6e4", fontWeight: 800, marginBottom: "0.8rem" }}>
                What we deliver
              </p>
              {["Brand-ready websites", "Business dashboards", "Scalable web apps"].map((item) => (
                <div
                  key={item}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.6rem",
                    padding: "0.55rem 0",
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.9rem",
                    fontWeight: 600,
                  }}
                >
                  <CheckCircle2 size={16} color="#5eead4" />
                  {item}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 980px) {
          .hero-compro-grid {
            grid-template-columns: 1fr !important;
            padding-top: 4rem !important;
          }
          .hero-compro-grid > div:last-child {
            min-height: 500px !important;
          }
        }
        @media (max-width: 640px) {
          .hero-compro-grid {
            padding-top: 3.25rem !important;
          }
          .hero-highlights {
            flex-direction: column !important;
          }
          .hero-compro-grid > div:last-child {
            min-height: 260px !important;
          }
          .hero-compro-grid > div:last-child > div {
            position: relative !important;
            inset: auto !important;
            width: 100% !important;
            margin-bottom: 1rem;
          }
        }
      `}</style>
    </section>
  );
}
