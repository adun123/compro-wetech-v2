"use client";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { Code2, Handshake, Rocket, ShieldCheck, Target, Wrench } from "lucide-react";
import { services } from "@/lib/services";

const advantages: Array<{ icon: LucideIcon; title: string; desc: string }> = [
  { icon: Target, title: "Business-first Approach", desc: "Kami memulai dari tujuan bisnis, bukan dari teknologi. Setiap keputusan teknis punya alasan bisnis yang jelas." },
  { icon: Code2, title: "Clean & Scalable Code", desc: "Kode yang kami tulis bersih, terdokumentasi, dan dirancang untuk tumbuh — bukan sekadar bekerja hari ini." },
  { icon: Wrench, title: "Custom Solution", desc: "Tidak ada template yang dipaksakan. Setiap solusi dirancang khusus sesuai kebutuhan dan proses bisnis Anda." },
  { icon: ShieldCheck, title: "End-to-End Support", desc: "Dari konsultasi, design, development, hingga maintenance — kami ada di setiap tahap perjalanan digital Anda." },
  { icon: Rocket, title: "Bisa Dikembangkan", desc: "Platform yang kami bangun siap untuk ditambah fitur, integrasi AI, atau dikembangkan menjadi sistem yang lebih besar." },
  { icon: Handshake, title: "Corporate & UMKM Premium", desc: "Pengalaman melayani berbagai skala bisnis dengan standar kualitas yang konsisten dan komunikasi yang transparan." },
];

const pricingItems = [
  { title: "Website", price: "Rp 3,5 juta", suffix: "mulai dari", desc: "Company profile & landing page" },
  { title: "Custom System", price: "Rp 15 juta", suffix: "mulai dari", desc: "Web application & dashboard" },
  { title: "AI Solution", price: "Rp 7,5 juta", suffix: "mulai dari", desc: "Chatbot & automation" },
  { title: "Corporate Project", price: "By Quotation", suffix: "", desc: "Sistem enterprise & custom scope" },
];

const companyLinks = [
  { label: "Tentang Kami", href: "/#why-us" },
  { label: "Proses Kerja", href: "/#workflow" },
  { label: "Use Cases", href: "/#use-cases" },
  { label: "Pricing", href: "/#pricing" },
  { label: "Kontak", href: "/#contact" },
];

const contactLinks = [
  { label: "hello@wetech.studio", href: "mailto:hello@wetech.studio", external: false },
  { label: "WhatsApp", href: "https://wa.me/6287877946981", external: true },
];

export default function WhyUsAndMore() {
  return (
    <>
      {/* Why WeTech Studio */}
      <section
        id="why-us"
        style={{ padding: "7rem 1.5rem", background: "var(--bg-primary)", position: "relative", overflow: "hidden" }}
      >
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div style={{ marginBottom: "4rem" }}>
            <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "0.8rem", fontWeight: "600", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--text-accent)", marginBottom: "1rem" }}>
              Kenapa WeTech Studio?
            </p>
            <h2 style={{ fontFamily: "'Sora', sans-serif", fontWeight: "800", fontSize: "clamp(2rem, 5vw, 3.5rem)", lineHeight: "1.1", letterSpacing: "-0.03em", color: "var(--text-primary)", maxWidth: "600px" }}>
              Partner teknologi yang{" "}
              <span style={{ background: "linear-gradient(135deg, #7c3aed, #a78bfa)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                benar-benar peduli
              </span>{" "}
              dengan bisnis Anda
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
            {advantages.map((a) => {
              const Icon = a.icon;

              return (
              <div
                key={a.title}
                style={{
                  padding: "2rem",
                  borderRadius: "16px",
                  border: "1px solid var(--border)",
                  background: "var(--bg-surface)",
                  transition: "all 0.25s",
                  cursor: "default",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "var(--accent-bright)";
                  e.currentTarget.style.transform = "translateY(-4px)";
                  e.currentTarget.style.boxShadow = "0 12px 40px var(--accent-glow)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--border)";
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <div style={{ color: "var(--text-accent)", marginBottom: "1rem" }}>
                  <Icon size={32} strokeWidth={1.75} />
                </div>
                <h3 style={{ fontFamily: "'Sora', sans-serif", fontWeight: "700", fontSize: "1.05rem", color: "var(--text-primary)", marginBottom: "0.5rem", letterSpacing: "-0.01em" }}>
                  {a.title}
                </h3>
                <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "0.875rem", color: "var(--text-muted)", lineHeight: "1.6" }}>
                  {a.desc}
                </p>
              </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section
        id="pricing"
        style={{
          padding: "7rem 1.5rem",
          background: "var(--bg-secondary)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "1px", background: "linear-gradient(90deg, transparent, var(--accent-bright), transparent)", opacity: 0.3 }} />

        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "0.8rem", fontWeight: "600", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--text-accent)", marginBottom: "1rem" }}>
              Investasi
            </p>
            <h2 style={{ fontFamily: "'Sora', sans-serif", fontWeight: "800", fontSize: "clamp(2rem, 5vw, 3.5rem)", lineHeight: "1.1", letterSpacing: "-0.03em", color: "var(--text-primary)" }}>
              Transparan dari{" "}
              <span style={{ background: "linear-gradient(135deg, #7c3aed, #a78bfa)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                awal
              </span>
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1.5rem", marginBottom: "3rem" }}>
            {pricingItems.map((item, i) => (
              <div
                key={item.title}
                style={{
                  padding: "2rem",
                  borderRadius: "20px",
                  border: "1px solid var(--border)",
                  background: i === 3 ? "linear-gradient(135deg, #26185f, #4c1d95)" : "var(--bg-surface)",
                  position: "relative",
                  overflow: "hidden",
                  transition: "all 0.25s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-4px)";
                  if (i !== 3) e.currentTarget.style.borderColor = "var(--accent-bright)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  if (i !== 3) e.currentTarget.style.borderColor = "var(--border)";
                }}
              >
                {i === 3 && (
                  <div style={{ position: "absolute", top: "1rem", right: "1rem", padding: "0.2rem 0.6rem", borderRadius: "50px", background: "rgba(167,139,250,0.3)", color: "#c4b5fd", fontSize: "0.7rem", fontWeight: "700", fontFamily: "'Space Grotesk', sans-serif" }}>
                    ENTERPRISE
                  </div>
                )}
                <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "0.8rem", color: i === 3 ? "#a78bfa" : "var(--text-muted)", marginBottom: "0.5rem", fontWeight: "500" }}>
                  {item.suffix || "\u00A0"}
                </p>
                <div style={{ fontFamily: "'Sora', sans-serif", fontWeight: "800", fontSize: "clamp(1.5rem, 3vw, 2rem)", color: i === 3 ? "#f0eeff" : "var(--text-primary)", letterSpacing: "-0.03em", marginBottom: "0.5rem" }}>
                  {item.price}
                </div>
                <h3 style={{ fontFamily: "'Sora', sans-serif", fontWeight: "700", fontSize: "1.1rem", color: i === 3 ? "#e0d7ff" : "var(--text-primary)", marginBottom: "0.4rem" }}>
                  {item.title}
                </h3>
                <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "0.875rem", color: i === 3 ? "#a78bfa" : "var(--text-muted)" }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <div
            style={{
              textAlign: "center",
              padding: "1.25rem 2rem",
              borderRadius: "12px",
              border: "1px solid var(--border)",
              background: "var(--bg-surface)",
              maxWidth: "700px",
              margin: "0 auto",
            }}
          >
            <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "0.9rem", color: "var(--text-muted)", lineHeight: "1.6" }}>
              💡 <strong style={{ color: "var(--text-secondary)" }}>Catatan:</strong> Harga menyesuaikan scope, fitur, integrasi, timeline, dan level support yang dibutuhkan. Hubungi kami untuk estimasi yang tepat.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section
        id="contact"
        style={{
          padding: "8rem 1.5rem",
          position: "relative",
          overflow: "hidden",
          background: "linear-gradient(135deg, #060412 0%, #0d0820 40%, #26185f 100%)",
        }}
      >
        <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(124,58,237,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(124,58,237,0.06) 1px, transparent 1px)", backgroundSize: "60px 60px", pointerEvents: "none" }} />
        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: "600px", height: "600px", borderRadius: "50%", background: "radial-gradient(circle, rgba(124,58,237,0.15) 0%, transparent 70%)", filter: "blur(40px)", pointerEvents: "none" }} />

        <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center", position: "relative", zIndex: 2 }}>
          <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "0.8rem", fontWeight: "600", letterSpacing: "0.12em", textTransform: "uppercase", color: "#a78bfa", marginBottom: "1.5rem" }}>
            Mulai Sekarang
          </p>
          <h2 style={{ fontFamily: "'Sora', sans-serif", fontWeight: "800", fontSize: "clamp(2.5rem, 6vw, 4.5rem)", lineHeight: "1.05", letterSpacing: "-0.03em", color: "#f0eeff", marginBottom: "1.5rem" }}>
            Ready to Build Your{" "}
            <span style={{ background: "linear-gradient(135deg, #a78bfa, #60a5fa)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Digital System?
            </span>
          </h2>
          <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "1.1rem", color: "#c4b5fd", lineHeight: "1.7", marginBottom: "3rem" }}>
            Diskusikan kebutuhan website, sistem, atau solusi AI untuk bisnis Anda bersama WeTech Studio. Konsultasi pertama gratis.
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
              background: "linear-gradient(135deg, #7c3aed, #6d28d9)",
              color: "#fff",
              fontWeight: "700",
              fontSize: "1.1rem",
              fontFamily: "'Sora', sans-serif",
              textDecoration: "none",
              transition: "all 0.2s",
              boxShadow: "0 8px 40px rgba(124,58,237,0.4)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-3px) scale(1.02)";
              e.currentTarget.style.boxShadow = "0 16px 50px rgba(124,58,237,0.6)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0) scale(1)";
              e.currentTarget.style.boxShadow = "0 8px 40px rgba(124,58,237,0.4)";
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
      <footer style={{ background: "#030208", borderTop: "1px solid #1a0a4a", padding: "4rem 1.5rem 2rem" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "3rem", marginBottom: "3rem" }}>
            {/* Brand */}
            <div style={{ gridColumn: "span 1" }} className="footer-brand">
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1rem" }}>
                <div style={{ width: "36px", height: "36px", borderRadius: "10px", background: "linear-gradient(135deg, #26185f, #7c3aed)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "16px", fontWeight: "800", color: "#fff", fontFamily: "'Sora', sans-serif" }}>W</div>
                <span style={{ fontFamily: "'Sora', sans-serif", fontWeight: "700", fontSize: "1.1rem", color: "#f0eeff", letterSpacing: "-0.02em" }}>
                  WeTech<span style={{ color: "#7c3aed" }}>Studio</span>
                </span>
              </div>
              <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "0.875rem", color: "#7c6fa0", lineHeight: "1.6", maxWidth: "240px" }}>
                Digital technology studio di bawah PT WeTech Digital Nusantara. Partner teknologi untuk bisnis yang ingin tumbuh.
              </p>
            </div>

            {/* Services */}
            <div>
              <h4 style={{ fontFamily: "'Sora', sans-serif", fontWeight: "600", fontSize: "0.9rem", color: "#f0eeff", marginBottom: "1rem" }}>Layanan</h4>
              <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                {services.map((service) => (
                  <li key={service.slug}>
                    <Link href={service.path} style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "0.875rem", color: "#7c6fa0", textDecoration: "none", transition: "color 0.2s" }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "#a78bfa")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "#7c6fa0")}
                    >{service.title}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 style={{ fontFamily: "'Sora', sans-serif", fontWeight: "600", fontSize: "0.9rem", color: "#f0eeff", marginBottom: "1rem" }}>Perusahaan</h4>
              <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                {companyLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "0.875rem", color: "#7c6fa0", textDecoration: "none" }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "#a78bfa")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "#7c6fa0")}
                    >{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 style={{ fontFamily: "'Sora', sans-serif", fontWeight: "600", fontSize: "0.9rem", color: "#f0eeff", marginBottom: "1rem" }}>Kontak</h4>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                {contactLinks.map((c) => (
                  <a key={c.label} href={c.href} target={c.external ? "_blank" : undefined} rel={c.external ? "noopener noreferrer" : undefined}
                    style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "0.875rem", color: "#7c6fa0", textDecoration: "none" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#a78bfa")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#7c6fa0")}
                  >{c.label}</a>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom */}
          <div style={{ borderTop: "1px solid #1a0a4a", paddingTop: "2rem", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem" }}>
            <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "0.8rem", color: "#3d3468" }}>
              © 2024 WeTech Studio · PT WeTech Digital Nusantara. All rights reserved.
            </p>
            <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "0.8rem", color: "#3d3468" }}>
              Jakarta, Indonesia
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
