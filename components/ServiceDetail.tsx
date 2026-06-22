import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import type { Service } from "@/lib/services";
import { services } from "@/lib/services";
import { siteConfig } from "@/lib/site";

type ServiceDetailProps = {
  service: Service;
};

function SectionTitle({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div style={{ marginBottom: "2rem" }}>
      <p
        style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: "0.78rem",
          fontWeight: "700",
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          color: "var(--text-accent)",
          marginBottom: "0.75rem",
        }}
      >
        {eyebrow}
      </p>
      <h2
        style={{
          fontFamily: "'Satoshi', sans-serif",
          fontWeight: "800",
          fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
          lineHeight: "1.12",
          letterSpacing: "-0.03em",
          color: "var(--text-primary)",
        }}
      >
        {title}
      </h2>
    </div>
  );
}

function PillList({ items }: { items: string[] }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.8rem" }}>
      {items.map((item) => (
        <div
          key={item}
          style={{
            display: "flex",
            gap: "0.75rem",
            alignItems: "flex-start",
            padding: "1rem",
            borderRadius: "14px",
            border: "1px solid var(--border)",
            background: "var(--bg-surface)",
          }}
        >
          <CheckCircle2 size={18} color="var(--text-accent)" style={{ marginTop: "0.15rem", flexShrink: 0 }} />
          <span
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.94rem",
              lineHeight: "1.6",
              color: "var(--text-secondary)",
            }}
          >
            {item}
          </span>
        </div>
      ))}
    </div>
  );
}

export default function ServiceDetail({ service }: ServiceDetailProps) {
  const relatedServices = services.filter((item) => item.slug !== service.slug);

  return (
    <main style={{ background: "var(--bg-primary)", minHeight: "100vh" }}>
      <section
        style={{
          position: "relative",
          overflow: "hidden",
          padding: "9rem 1.5rem 5rem",
          background: "var(--gradient-hero)",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(13,148,136,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(13,148,136,0.05) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "12%",
            right: "-160px",
            width: "520px",
            height: "520px",
            borderRadius: "50%",
            background: "radial-gradient(circle, var(--accent-glow) 0%, transparent 70%)",
            filter: "blur(55px)",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "relative",
            zIndex: 2,
            maxWidth: "1280px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "3rem",
          }}
          className="service-detail-hero"
        >
          <div>
            <Link
              href="/#services"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                color: "var(--text-accent)",
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.9rem",
                fontWeight: "600",
                textDecoration: "none",
                marginBottom: "2rem",
              }}
            >
              <ArrowLeft size={16} />
              Kembali ke layanan
            </Link>
            <p
              style={{
                display: "inline-flex",
                marginLeft: "1rem",
                padding: "0.35rem 0.85rem",
                borderRadius: "50px",
                background: `${service.color}18`,
                border: `1px solid ${service.color}35`,
                color: service.color,
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.78rem",
                fontWeight: "700",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
            >
              {service.tag}
            </p>
            <h1
              style={{
                fontFamily: "'Satoshi', sans-serif",
                fontWeight: "800",
                fontSize: "clamp(2.5rem, 6vw, 5rem)",
                lineHeight: "1.04",
                letterSpacing: "-0.04em",
                color: "var(--text-primary)",
                maxWidth: "880px",
                marginBottom: "1.5rem",
              }}
            >
              {service.title}
            </h1>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "clamp(1rem, 2vw, 1.2rem)",
                lineHeight: "1.75",
                color: "var(--text-secondary)",
                maxWidth: "720px",
                marginBottom: "2.5rem",
              }}
            >
              {service.description}
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
              <a
                href={siteConfig.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  padding: "0.95rem 2rem",
                  borderRadius: "50px",
                  background: "var(--gradient-accent)",
                  color: "#fff",
                  fontWeight: "700",
                  fontSize: "1rem",
                  fontFamily: "'Satoshi', sans-serif",
                  textDecoration: "none",
                  boxShadow: "0 10px 36px rgba(13,148,136,0.34)",
                }}
              >
                Diskusi via WhatsApp
                <ArrowRight size={18} />
              </a>
              <Link
                href="/#contact"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  padding: "0.95rem 2rem",
                  borderRadius: "50px",
                  border: "1.5px solid var(--border)",
                  background: "var(--bg-surface)",
                  color: "var(--text-primary)",
                  fontWeight: "600",
                  fontSize: "1rem",
                  fontFamily: "'Satoshi', sans-serif",
                  textDecoration: "none",
                }}
              >
                Lihat kontak
              </Link>
            </div>
          </div>

          <aside
            style={{
              padding: "1.5rem",
              borderRadius: "22px",
              border: "1px solid var(--border)",
              background: "var(--bg-surface)",
              boxShadow: "0 20px 70px var(--accent-glow)",
              alignSelf: "start",
            }}
          >
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.78rem",
                fontWeight: "700",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "var(--text-accent)",
                marginBottom: "1rem",
              }}
            >
              Benefit utama
            </p>
            <PillList items={service.benefits} />
          </aside>
        </div>
      </section>

      <section style={{ padding: "6rem 1.5rem", background: "var(--bg-primary)" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "2rem" }} className="service-detail-grid">
            <div>
              <SectionTitle eyebrow="Cocok untuk" title="Kapan layanan ini relevan?" />
              <PillList items={service.idealFor} />
            </div>
            <div>
              <SectionTitle eyebrow="Output" title="Apa saja yang disiapkan?" />
              <PillList items={service.deliverables} />
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: "6rem 1.5rem", background: "var(--bg-secondary)", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 80% 20%, var(--accent-glow) 0%, transparent 55%)", pointerEvents: "none" }} />
        <div style={{ maxWidth: "1280px", margin: "0 auto", position: "relative", zIndex: 2 }}>
          <SectionTitle eyebrow="Proses" title="Alur kerja yang terarah dari awal" />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1.25rem" }}>
            {service.process.map((step, index) => (
              <div
                key={step}
                style={{
                  padding: "1.5rem",
                  borderRadius: "18px",
                  border: "1px solid var(--border)",
                  background: "var(--bg-surface)",
                }}
              >
                <span
                  style={{
                    display: "inline-flex",
                    width: "40px",
                    height: "40px",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "50%",
                    background: "var(--gradient-accent)",
                    color: "#fff",
                    fontFamily: "'Satoshi', sans-serif",
                    fontWeight: "800",
                    marginBottom: "1rem",
                  }}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p style={{ fontFamily: "'Inter', sans-serif", color: "var(--text-secondary)", lineHeight: "1.65", fontSize: "0.95rem" }}>
                  {step}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "6rem 1.5rem", background: "var(--bg-primary)" }}>
        <div style={{ maxWidth: "980px", margin: "0 auto" }}>
          <SectionTitle eyebrow="FAQ" title="Pertanyaan yang sering muncul" />
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {service.faq.map((item) => (
              <details
                key={item.question}
                style={{
                  padding: "1.35rem 1.5rem",
                  borderRadius: "16px",
                  border: "1px solid var(--border)",
                  background: "var(--bg-surface)",
                }}
              >
                <summary style={{ cursor: "pointer", fontFamily: "'Satoshi', sans-serif", fontWeight: "700", color: "var(--text-primary)" }}>
                  {item.question}
                </summary>
                <p style={{ marginTop: "1rem", fontFamily: "'Inter', sans-serif", color: "var(--text-muted)", lineHeight: "1.7", fontSize: "0.94rem" }}>
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "6rem 1.5rem", background: "linear-gradient(135deg, #060412 0%, #021716 42%, #042f2e 100%)" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", gap: "2rem", alignItems: "flex-end", flexWrap: "wrap", marginBottom: "2rem" }}>
            <div>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.78rem", fontWeight: "700", letterSpacing: "0.12em", textTransform: "uppercase", color: "#5eead4", marginBottom: "0.75rem" }}>
                Layanan lain
              </p>
              <h2 style={{ fontFamily: "'Satoshi', sans-serif", fontWeight: "800", fontSize: "clamp(1.8rem, 4vw, 3rem)", color: "#f0fdfa", letterSpacing: "-0.03em", lineHeight: "1.1" }}>
                Bangun ekosistem digital yang saling terhubung
              </h2>
            </div>
            <Link href="/#services" style={{ color: "#99f6e4", fontFamily: "'Inter', sans-serif", fontWeight: "600", textDecoration: "none" }}>
              Semua layanan
            </Link>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1rem" }}>
            {relatedServices.map((item) => (
              <Link
                key={item.slug}
                href={item.path}
                style={{
                  display: "block",
                  padding: "1.25rem",
                  borderRadius: "16px",
                  border: "1px solid rgba(13,148,136,0.28)",
                  background: "rgba(19,13,46,0.72)",
                  textDecoration: "none",
                }}
              >
                <p style={{ fontFamily: "'Inter', sans-serif", color: item.color, fontSize: "0.75rem", fontWeight: "700", marginBottom: "0.45rem" }}>
                  {item.tag}
                </p>
                <h3 style={{ fontFamily: "'Satoshi', sans-serif", fontSize: "1rem", color: "#f0fdfa", fontWeight: "700", marginBottom: "0.5rem" }}>
                  {item.title}
                </h3>
                <p style={{ fontFamily: "'Inter', sans-serif", color: "#7c6fa0", lineHeight: "1.55", fontSize: "0.86rem" }}>
                  {item.short}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        @media (min-width: 920px) {
          .service-detail-hero { grid-template-columns: minmax(0, 1.4fr) minmax(320px, 0.6fr) !important; align-items: center !important; }
          .service-detail-grid { grid-template-columns: repeat(2, minmax(0, 1fr)) !important; }
        }
      `}</style>
    </main>
  );
}
