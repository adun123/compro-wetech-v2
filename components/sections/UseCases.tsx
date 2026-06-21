"use client";

const useCases = [
  {
    
    category: "Website & CRM",
    title: "Lead masuk tidak terukur",
    need: "Tim marketing sudah menjalankan campaign, tetapi sumber lead, kualitas prospek, dan follow-up masih sulit dipantau.",
    solution: "Landing page terarah, form terstruktur, tracking event, dan alur lead yang siap diteruskan ke CRM atau WhatsApp.",
    outputs: ["Lead source jelas", "Follow-up lebih rapi", "Data campaign terbaca"],
    accent: "var(--accent-bright)",
    bg: "linear-gradient(135deg, var(--accent), var(--accent-bright))",
  },
  {
    
    category: "Custom System",
    title: "Operasional manual berulang",
    need: "Admin masih memindahkan data antar spreadsheet, chat, dan dokumen sehingga proses lambat serta rawan salah input.",
    solution: "Sistem internal yang mengikuti workflow bisnis, lengkap dengan role user, form validasi, status proses, dan riwayat aktivitas.",
    outputs: ["Input data satu pintu", "Status pekerjaan transparan", "Proses lebih konsisten"],
    accent: "#6d28d9",
    bg: "linear-gradient(135deg, #0d0820, #26185f)",
  },
  {
    
    category: "AI & WhatsApp",
    title: "Customer service kewalahan",
    need: "Pertanyaan pelanggan berulang masuk dari banyak channel, sementara tim CS perlu tetap fokus pada kasus prioritas.",
    solution: "AI assistant untuk triage, jawaban FAQ, pengumpulan data awal, dan eskalasi ke tim manusia saat konteksnya sudah lengkap.",
    outputs: ["Respon awal lebih cepat", "Tiket lebih terstruktur", "CS fokus ke kasus penting"],
    accent: "#4c1d95",
    bg: "linear-gradient(135deg, #130d2e, #4c1d95)",
  },
  {
    
    category: "Dashboard",
    title: "Data bisnis tersebar",
    need: "Owner dan manajer mengambil keputusan dari laporan terpisah yang tidak selalu sinkron atau mudah dibandingkan.",
    solution: "Dashboard bisnis yang menggabungkan metrik penting, filter periode, visualisasi tren, dan export laporan sesuai kebutuhan tim.",
    outputs: ["Insight lebih cepat", "Laporan mudah dibaca", "Keputusan berbasis data"],
    accent: "#5b21b6",
    bg: "linear-gradient(135deg, #0f0a2e, #3730a3)",
  },
  {
    
    category: "Workflow",
    title: "Approval terlalu panjang",
    need: "Permintaan internal sering tertahan karena status, PIC, dan dokumen pendukung tidak terlihat dalam satu alur kerja.",
    solution: "Workflow approval digital dengan notifikasi, catatan keputusan, lampiran, dan pembagian akses sesuai level persetujuan.",
    outputs: ["PIC lebih jelas", "Riwayat approval tersimpan", "Bottleneck mudah ditemukan"],
    accent: "#7c3aed",
    bg: "linear-gradient(135deg, #1a0a4a, #7c3aed)",
  },
  {
    
    category: "Integration",
    title: "Sistem tidak saling terhubung",
    need: "Payment, inventory, website, dan sistem internal berjalan sendiri-sendiri sehingga data harus direkonsiliasi manual.",
    solution: "Integrasi API yang menghubungkan tools penting, menyamakan data utama, dan mengurangi pekerjaan copy-paste antar platform.",
    outputs: ["Data lebih sinkron", "Rekonsiliasi berkurang", "Operasional lebih scalable"],
    accent: "#3730a3",
    bg: "linear-gradient(135deg, #060412, #26185f)",
  },
];

export default function UseCases() {
  return (
    <section
      id="use-cases"
      style={{
        padding: "7rem 1.5rem",
        background: "var(--bg-secondary)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "0",
          left: "0",
          right: "0",
          height: "1px",
          background: "linear-gradient(90deg, transparent, var(--accent-bright), transparent)",
          opacity: 0.3,
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "12%",
          right: "-180px",
          width: "520px",
          height: "520px",
          borderRadius: "50%",
          background: "radial-gradient(circle, var(--accent-glow) 0%, transparent 70%)",
          filter: "blur(60px)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          left: "-220px",
          bottom: "8%",
          width: "440px",
          height: "440px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(38,24,95,0.28) 0%, transparent 70%)",
          filter: "blur(70px)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: "1280px", margin: "0 auto", position: "relative", zIndex: 2 }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            marginBottom: "4rem",
            flexWrap: "wrap",
            gap: "1.5rem",
          }}
        >
          <div style={{ maxWidth: "760px" }}>
            <p
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "0.8rem",
                fontWeight: "600",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "var(--text-accent)",
                marginBottom: "1rem",
              }}
            >
              Use Cases
            </p>
            <h2
              style={{
                fontFamily: "'Sora', sans-serif",
                fontWeight: "800",
                fontSize: "clamp(2rem, 5vw, 3.5rem)",
                lineHeight: "1.1",
                letterSpacing: "-0.03em",
                color: "var(--text-primary)",
              }}
            >
              Solusi berdasarkan{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, var(--accent-bright), #a78bfa)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                kebutuhan bisnis
              </span>
            </h2>
          </div>
          <p
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "0.95rem",
              color: "var(--text-secondary)",
              lineHeight: "1.7",
              maxWidth: "360px",
            }}
          >
            Bukan klaim portfolio. Ini contoh masalah bisnis yang umum kami bantu petakan menjadi website, sistem, dashboard, integrasi, atau automasi AI yang konkret.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "1.5rem",
          }}
          className="use-cases-grid"
        >
          {useCases.map((item) => (
            <div
              key={item.title}
              style={{
                borderRadius: "20px",
                overflow: "hidden",
                border: "1px solid var(--border)",
                background: "var(--bg-surface)",
                transition: "all 0.3s",
                position: "relative",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-6px)";
                e.currentTarget.style.borderColor = item.accent;
                e.currentTarget.style.boxShadow = "0 20px 60px rgba(124,58,237,0.22)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.borderColor = "var(--border)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <div
                style={{
                  minHeight: "170px",
                  background: item.bg,
                  position: "relative",
                  overflow: "hidden",
                  padding: "1.5rem",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    backgroundImage: "linear-gradient(rgba(167,139,250,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(167,139,250,0.1) 1px, transparent 1px)",
                    backgroundSize: "32px 32px",
                    opacity: 0.7,
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    right: "-48px",
                    bottom: "-64px",
                    width: "180px",
                    height: "180px",
                    borderRadius: "50%",
                    border: "1px solid rgba(255,255,255,0.18)",
                    opacity: 0.8,
                  }}
                />
                <div style={{ position: "relative", zIndex: 2, display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "1rem" }}>
                  <span
                    style={{
                      padding: "0.3rem 0.8rem",
                      borderRadius: "50px",
                      background: "rgba(0,0,0,0.35)",
                      backdropFilter: "blur(10px)",
                      color: "#fff",
                      fontSize: "0.75rem",
                      fontWeight: "600",
                      fontFamily: "'Space Grotesk', sans-serif",
                      letterSpacing: "0.05em",
                    }}
                  >
                    {item.category}
                  </span>
                  <span
                    style={{
                      fontFamily: "'Sora', sans-serif",
                      fontSize: "0.8rem",
                      color: "rgba(255,255,255,0.7)",
                      fontWeight: "800",
                      letterSpacing: "0.08em",
                    }}
                  >
                  
                  </span>
                </div>
                <h3
                  style={{
                    position: "relative",
                    zIndex: 2,
                    fontFamily: "'Sora', sans-serif",
                    fontWeight: "800",
                    fontSize: "clamp(1.25rem, 2.4vw, 1.6rem)",
                    color: "#f0eeff",
                    letterSpacing: "-0.03em",
                    lineHeight: "1.15",
                    maxWidth: "320px",
                  }}
                >
                  {item.title}
                </h3>
              </div>

              <div style={{ padding: "1.5rem" }}>
                <div style={{ display: "grid", gap: "1rem", marginBottom: "1.25rem" }}>
                  <div>
                    <p
                      style={{
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontSize: "0.72rem",
                        fontWeight: "700",
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        color: "var(--text-accent)",
                        marginBottom: "0.4rem",
                      }}
                    >
                      Kebutuhan
                    </p>
                    <p
                      style={{
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontSize: "0.875rem",
                        color: "var(--text-muted)",
                        lineHeight: "1.6",
                      }}
                    >
                      {item.need}
                    </p>
                  </div>
                  <div>
                    <p
                      style={{
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontSize: "0.72rem",
                        fontWeight: "700",
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        color: "var(--text-accent)",
                        marginBottom: "0.4rem",
                      }}
                    >
                      Solusi
                    </p>
                    <p
                      style={{
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontSize: "0.875rem",
                        color: "var(--text-secondary)",
                        lineHeight: "1.6",
                      }}
                    >
                      {item.solution}
                    </p>
                  </div>
                </div>

                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.45rem" }}>
                  {item.outputs.map((output) => (
                    <span
                      key={output}
                      style={{
                        padding: "0.28rem 0.75rem",
                        borderRadius: "50px",
                        fontSize: "0.75rem",
                        fontWeight: "500",
                        fontFamily: "'Space Grotesk', sans-serif",
                        background: "var(--bg-muted)",
                        color: "var(--text-secondary)",
                        border: "1px solid var(--border)",
                      }}
                    >
                      {output}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div
          style={{
            marginTop: "3rem",
            padding: "1.25rem 1.5rem",
            borderRadius: "16px",
            border: "1px solid var(--border)",
            background: "var(--bg-surface)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "1rem",
            flexWrap: "wrap",
          }}
        >
          <p
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "0.9rem",
              color: "var(--text-muted)",
              lineHeight: "1.6",
              maxWidth: "760px",
            }}
          >
            Punya kebutuhan yang belum ada di daftar? Kami mulai dari problem, proses, dan metrik bisnis sebelum menentukan bentuk teknologinya.
          </p>
          <a
            href="#contact"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "0.9rem",
              color: "var(--text-accent)",
              textDecoration: "none",
              fontWeight: "700",
              display: "inline-flex",
              alignItems: "center",
              gap: "0.4rem",
              transition: "gap 0.2s",
              whiteSpace: "nowrap",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.gap = "0.75rem")}
            onMouseLeave={(e) => (e.currentTarget.style.gap = "0.4rem")}
          >
            Diskusikan use case Anda →
          </a>
        </div>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .use-cases-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (min-width: 1180px) {
          .use-cases-grid {
            grid-template-columns: repeat(3, 1fr) !important;
          }
        }
      `}</style>
    </section>
  );
}
