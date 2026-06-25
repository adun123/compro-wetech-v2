"use client";

import Image from "next/image";
import { Building2, Layers3, ShieldCheck } from "lucide-react";

const proofPoints = [
  {
    icon: Building2,
    title: "For brands that need to look credible from day one",
    desc: "We structure websites and company profiles so prospects quickly understand your business, services, and value.",
  },
  {
    icon: Layers3,
    title: "For operations that need cleaner digital workflows",
    desc: "We design dashboards, web apps, and integrations around the real work happening inside your company.",
  },
  {
    icon: ShieldCheck,
    title: "For teams that want a long-term technology partner",
    desc: "After launch, every system can keep evolving as your team, data, and business priorities grow.",
  },
];

const clientLogos = [
  "/logo/btn-logo.png",
  "/logo/pegadaian-logo.png",
  "/logo/medime.png",
  "/logo/logo-tataletak.png",
  "/logo/logo-tanifest.png",
  "/logo/logo-kingkost.png",
  "/logo/logo-bangunin.png",
  "/logo/logo-aquaculture.png",
  "/logo/haka-auto.png",
  "/logo/apj-media.png",
];

export default function Problem() {
  return (
    <section
      id="about"
      style={{
        padding: "7rem 1.5rem",
        background: "var(--bg-primary)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "-12rem",
          right: "-10rem",
          width: "34rem",
          height: "34rem",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(20,184,166,0.12), transparent 68%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: "1240px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "minmax(0, 0.95fr) minmax(0, 1.05fr)",
          gap: "clamp(2rem, 5vw, 4.5rem)",
          alignItems: "center",
        }}
        className="about-grid"
      >
        <div>
          <p
            style={{
              color: "var(--accent)",
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.78rem",
              fontWeight: 800,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              marginBottom: "1rem",
            }}
          >
            About WeTech Studio
          </p>
          <h2
            style={{
              fontFamily: "'Satoshi', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(2.3rem, 5vw, 4.25rem)",
              lineHeight: "1.06",
              letterSpacing: "-0.03em",
              color: "var(--text-primary)",
              marginBottom: "1.35rem",
            }}
          >
            We help businesses look professional and operate better through digital systems.
          </h2>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "1rem",
              lineHeight: "1.8",
              color: "var(--text-secondary)",
              marginBottom: "2rem",
            }}
          >
            We do more than design interfaces. We shape information architecture,
            user experience, features, integrations, and technical foundations so every
            digital product supports real business work.
          </p>

          <div style={{ display: "grid", gap: "1rem" }}>
            {proofPoints.map((point) => {
              const Icon = point.icon;
              return (
                <div
                  key={point.title}
                  style={{
                    display: "flex",
                    gap: "1rem",
                    padding: "1rem",
                    borderRadius: "18px",
                    border: "1px solid var(--border)",
                    background: "var(--bg-surface)",
                  }}
                >
                  <div
                    style={{
                      width: "44px",
                      height: "44px",
                      borderRadius: "14px",
                      background: "rgba(20,184,166,0.1)",
                      color: "var(--accent)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <Icon size={22} />
                  </div>
                  <div>
                    <h3
                      style={{
                        fontFamily: "'Satoshi', sans-serif",
                        fontWeight: 700,
                        fontSize: "1rem",
                        color: "var(--text-primary)",
                        marginBottom: "0.35rem",
                      }}
                    >
                      {point.title}
                    </h3>
                    <p
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "0.9rem",
                        lineHeight: "1.65",
                        color: "var(--text-muted)",
                      }}
                    >
                      {point.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div
          style={{
            borderRadius: "30px",
            padding: "1.15rem",
            background: "linear-gradient(135deg, rgba(7,59,55,0.08), rgba(20,184,166,0.12))",
            border: "1px solid rgba(7,59,55,0.1)",
          }}
        >
          <div
            style={{
              borderRadius: "24px",
              overflow: "hidden",
              background: "#fff",
              boxShadow: "0 24px 70px rgba(7,59,55,0.14)",
            }}
          >
            <div style={{ position: "relative", aspectRatio: "1.35 / 1", background: "#eef7f4" }}>
              <Image
                src="/projects/marketing-ai-2.png"
                alt="WeTech Studio digital project preview"
                fill
                sizes="(max-width: 900px) 100vw, 560px"
                style={{ objectFit: "cover" }}
              />
            </div>
            <div style={{ padding: "1.4rem" }}>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.78rem",
                  fontWeight: 800,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "var(--accent)",
                  marginBottom: "1rem",
                }}
              >
                Brands and partners we have supported
              </p>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
                  gap: "0.7rem",
                }}
                className="client-logo-grid"
              >
                {clientLogos.map((logo) => (
                  <div
                    key={logo}
                    style={{
                      position: "relative",
                      height: "58px",
                      borderRadius: "14px",
                      border: "1px solid var(--border)",
                      background: "#fff",
                    }}
                  >
                    <Image src={logo} alt="" fill sizes="120px" style={{ objectFit: "contain", padding: "0.7rem" }} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .about-grid {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 520px) {
          .client-logo-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
          }
        }
      `}</style>
    </section>
  );
}
