"use client";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { Code2, Handshake, Rocket, ShieldCheck, Target, Wrench } from "lucide-react";
import { services } from "@/lib/services";

const advantages: Array<{ icon: LucideIcon; title: string; desc: string }> = [
  { icon: Target, title: "Business-first Approach", desc: "Mulai dari tujuan bisnis, bukan teknologi." },
  { icon: Code2, title: "Clean & Scalable Code", desc: "Kode bersih, terdokumentasi, siap tumbuh." },
  { icon: Wrench, title: "Custom Solution", desc: "Dirancang khusus sesuai proses bisnis Anda." },
  { icon: ShieldCheck, title: "End-to-End Support", desc: "Konsultasi hingga maintenance." },
  { icon: Rocket, title: "Bisa Dikembangkan", desc: "Siap ditambah fitur dan integrasi AI." },
  { icon: Handshake, title: "Corporate & UMKM", desc: "Standar kualitas konsisten di semua skala." },
];

const companyLinks = [
  { label: "Tentang Kami", href: "/#why-us" },
  { label: "Layanan", href: "/#services" },
  { label: "AI Solution", href: "/#ai-solution" },
  { label: "Pricing", href: "/#pricing" },
  { label: "Kontak", href: "/#contact" },
];

const contactLinks = [
  { label: "hello@wetech.studio", href: "mailto:hello@wetech.studio", external: false },
  { label: "WhatsApp", href: "https://wa.me/6287877946981", external: true },
];

export default function WhyUsAndMore() {
  // Double the items for seamless loop
  const marqueeItems = [...advantages, ...advantages];

  return (
    <>
      {/* Why WeTech Studio - Marquee */}
      <section
        id="why-us"
        style={{ padding: "6rem 0", background: "var(--bg-primary)", overflow: "hidden", position: "relative" }}
      >
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 1.5rem", marginBottom: "3rem" }}>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.8rem", fontWeight: "600", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--accent)", marginBottom: "0.75rem", textAlign: "center" }}>
            Kenapa WeTech Studio?
          </p>
          <h2 style={{ fontFamily: "'Satoshi', sans-serif", fontWeight: 400, fontSize: "clamp(2rem, 4vw, 3rem)", lineHeight: "1.1", letterSpacing: "-0.02em", color: "var(--text-primary)", textAlign: "center" }}>
            Partner teknologi yang{" "}
            <span style={{ fontStyle: "italic", color: "var(--accent)" }}>benar-benar peduli</span>
          </h2>
        </div>

        {/* Marquee Row 1 */}
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
                    borderRadius: "12px",
                    border: "1px solid var(--border)",
                    background: "var(--bg-surface)",
                    whiteSpace: "nowrap",
                    flexShrink: 0,
                  }}
                >
                  <div style={{ color: "var(--accent)", flexShrink: 0 }}>
                    <Icon size={24} strokeWidth={1.8} />
                  </div>
                  <div>
                    <h3 style={{ fontFamily: "'Inter', sans-serif", fontWeight: "600", fontSize: "0.95rem", color: "var(--text-primary)", marginBottom: "0.15rem" }}>
                      {a.title}
                    </h3>
                    <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.8rem", color: "var(--text-muted)" }}>
                      {a.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Fade edges */}
        <div style={{ position: "absolute", top: 0, bottom: 0, left: 0, width: "80px", background: "linear-gradient(to right, var(--bg-primary), transparent)", zIndex: 2, pointerEvents: "none" }} />
        <div style={{ position: "absolute", top: 0, bottom: 0, right: 0, width: "80px", background: "linear-gradient(to left, var(--bg-primary), transparent)", zIndex: 2, pointerEvents: "none" }} />
      </section>

      {/* Final CTA */}
      <section
        id="contact"
        style={{
          padding: "8rem 1.5rem",
          position: "relative",
          overflow: "hidden",
          background: "linear-gradient(135deg, #060412 0%, #021716 40%, #042f2e 100%)",
        }}
      >
        <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(13,148,136,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(13,148,136,0.06) 1px, transparent 1px)", backgroundSize: "60px 60px", pointerEvents: "none" }} />
        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: "600px", height: "600px", borderRadius: "50%", background: "radial-gradient(circle, rgba(13,148,136,0.15) 0%, transparent 70%)", filter: "blur(40px)", pointerEvents: "none" }} />

        <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center", position: "relative", zIndex: 2 }}>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.8rem", fontWeight: "600", letterSpacing: "0.12em", textTransform: "uppercase", color: "#5eead4", marginBottom: "1.5rem" }}>
            Mulai Sekarang
          </p>
          <h2 style={{ fontFamily: "'Satoshi', sans-serif", fontWeight: 400, fontSize: "clamp(2.5rem, 6vw, 4.5rem)", lineHeight: "1.05", letterSpacing: "-0.02em", color: "#f0fdfa", marginBottom: "1.5rem" }}>
            Ready to Build Your{" "}
            <span style={{ fontStyle: "italic", color: "#5eead4" }}>Digital System?</span>
          </h2>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "1.1rem", color: "#99f6e4", lineHeight: "1.7", marginBottom: "3rem" }}>
            Diskusikan kebutuhan website, sistem, atau solusi AI untuk bisnis Anda. Konsultasi pertama gratis.
          </p>
          <a
            href="https://wa.me/6287877946981?text=Halo%20WeTech%20Studio%2C%20saya%20ingin%20mulai%20konsultasi%20project%20digital"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.75rem",
              padding: "1.1rem 2.5rem",
              borderRadius: "50px",
              background: "linear-gradient(135deg, #0d9488, #0f766e)",
              color: "#fff",
              fontWeight: "700",
              fontSize: "1.1rem",
              fontFamily: "'Inter', sans-serif",
              textDecoration: "none",
              transition: "all 0.2s",
              boxShadow: "0 8px 40px rgba(13,148,136,0.4)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-3px) scale(1.02)";
              e.currentTarget.style.boxShadow = "0 16px 50px rgba(13,148,136,0.6)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0) scale(1)";
              e.currentTarget.style.boxShadow = "0 8px 40px rgba(13,148,136,0.4)";
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            Mulai Konsultasi via WhatsApp
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ background: "#030208", borderTop: "1px solid #052e2b", padding: "4rem 1.5rem 2rem" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "3rem", marginBottom: "3rem" }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1rem" }}>
                <div style={{ width: "36px", height: "36px", borderRadius: "10px", background: "linear-gradient(135deg, #042f2e, #0d9488)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "16px", fontWeight: "800", color: "#fff", fontFamily: "'Inter', sans-serif" }}>W</div>
                <span style={{ fontFamily: "'Inter', sans-serif", fontWeight: "700", fontSize: "1.1rem", color: "#f0fdfa", letterSpacing: "-0.02em" }}>
                  WeTech<span style={{ color: "#0d9488" }}>Studio</span>
                </span>
              </div>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.85rem", color: "#5a8a85", lineHeight: "1.6", maxWidth: "240px" }}>
                Digital technology studio. Partner teknologi untuk bisnis yang ingin tumbuh.
              </p>
            </div>

            <div>
              <h4 style={{ fontFamily: "'Inter', sans-serif", fontWeight: "600", fontSize: "0.85rem", color: "#f0fdfa", marginBottom: "1rem" }}>Layanan</h4>
              <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                {services.slice(0, 4).map((s) => (
                  <li key={s.slug}>
                    <Link href={s.path} style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.82rem", color: "#5a8a85", textDecoration: "none", transition: "color 0.2s" }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "#5eead4")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "#5a8a85")}
                    >{s.title}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 style={{ fontFamily: "'Inter', sans-serif", fontWeight: "600", fontSize: "0.85rem", color: "#f0fdfa", marginBottom: "1rem" }}>Perusahaan</h4>
              <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                {companyLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.82rem", color: "#5a8a85", textDecoration: "none" }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "#5eead4")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "#5a8a85")}
                    >{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 style={{ fontFamily: "'Inter', sans-serif", fontWeight: "600", fontSize: "0.85rem", color: "#f0fdfa", marginBottom: "1rem" }}>Kontak</h4>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                {contactLinks.map((c) => (
                  <a key={c.label} href={c.href} target={c.external ? "_blank" : undefined} rel={c.external ? "noopener noreferrer" : undefined}
                    style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.82rem", color: "#5a8a85", textDecoration: "none" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#5eead4")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#5a8a85")}
                  >{c.label}</a>
                ))}
              </div>
            </div>
          </div>

          <div style={{ borderTop: "1px solid #052e2b", paddingTop: "2rem", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem" }}>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.78rem", color: "#3d5856" }}>
              © 2024 WeTech Studio · PT WeTech Digital Nusantara
            </p>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.78rem", color: "#3d5856" }}>
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
          animation: marqueeScroll 30s linear infinite;
          width: fit-content;
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }
        @keyframes marqueeScroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </>
  );
}
