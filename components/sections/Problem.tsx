"use client";

const problems = [
  {
    num: "01",
    title: "Website terlihat kurang profesional",
    desc: "First impression buruk membuat calon klien ragu sebelum bicara. Kompetitor yang tampak lebih profesional menang duluan.",
  },
  {
    num: "02",
    title: "Proses bisnis masih manual",
    desc: "Tim menghabiskan waktu untuk tugas berulang yang seharusnya bisa diotomasi — membuang energi dan memperlambat growth.",
  },
  {
    num: "03",
    title: "Data tersebar di Excel & WhatsApp",
    desc: "Tidak ada single source of truth. Keputusan bisnis diambil berdasarkan data yang tidak akurat atau tidak sinkron.",
  },
  {
    num: "04",
    title: "Tidak punya sistem internal yang rapi",
    desc: "Tanpa sistem yang terstruktur, skalabilitas bisnis terhambat. Setiap pertumbuhan justru menambah kompleksitas operasional.",
  },
  {
    num: "05",
    title: "Sulit scale tanpa digitalisasi",
    desc: "Bisnis yang bergantung pada proses manual tidak bisa tumbuh cepat. Operasional yang tidak terdigitalisasi menjadi bottleneck utama.",
  },
];

export default function Problem() {
  return (
    <section
      id="problem"
      style={{
        padding: "6rem 1.5rem",
        background: "var(--bg-secondary)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "1px",
          background: "linear-gradient(90deg, transparent, var(--accent-bright), transparent)",
          opacity: 0.4,
        }}
      />

      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        {/* Header */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "2rem",
            marginBottom: "5rem",
          }}
        >
          <div>
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
              Kenali Masalahnya
            </p>
            <h2
              style={{
                fontFamily: "'Sora', sans-serif",
                fontWeight: "800",
                fontSize: "clamp(2rem, 5vw, 3.5rem)",
                lineHeight: "1.1",
                letterSpacing: "-0.03em",
                color: "var(--text-primary)",
                maxWidth: "700px",
              }}
            >
              Apakah bisnis Anda mengalami{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #7c3aed, #a78bfa)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                salah satu ini?
              </span>
            </h2>
          </div>
        </div>

        {/* Problem list */}
        <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
          {problems.map((p) => (
            <div
              key={p.num}
              style={{
                display: "grid",
                gridTemplateColumns: "auto 1fr auto",
                alignItems: "center",
                gap: "2rem",
                padding: "2rem 0",
                borderTop: "1px solid var(--border)",
                cursor: "default",
                transition: "all 0.3s",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget;
                el.style.paddingLeft = "1rem";
                el.style.background = "var(--bg-surface)";
                el.style.borderRadius = "12px";
                el.style.borderColor = "transparent";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget;
                el.style.paddingLeft = "0";
                el.style.background = "transparent";
                el.style.borderRadius = "0";
                el.style.borderColor = "var(--border)";
              }}
            >
              {/* Number */}
              <span
                style={{
                  fontFamily: "'Sora', sans-serif",
                  fontWeight: "800",
                  fontSize: "clamp(2rem, 4vw, 3rem)",
                  color: "var(--border)",
                  letterSpacing: "-0.04em",
                  lineHeight: "1",
                  minWidth: "60px",
                  transition: "color 0.3s",
                }}
              >
                {p.num}
              </span>

              {/* Content */}
              <div>
                <h3
                  style={{
                    fontFamily: "'Sora', sans-serif",
                    fontWeight: "700",
                    fontSize: "clamp(1rem, 2vw, 1.35rem)",
                    color: "var(--text-primary)",
                    marginBottom: "0.5rem",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {p.title}
                </h3>
                <p
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: "0.95rem",
                    color: "var(--text-muted)",
                    lineHeight: "1.6",
                    maxWidth: "600px",
                  }}
                >
                  {p.desc}
                </p>
              </div>

              {/* Arrow */}
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  border: "1px solid var(--border)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--text-muted)",
                  flexShrink: 0,
                  transition: "all 0.3s",
                }}
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M3 8h10M9 4l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          ))}
          <div style={{ borderTop: "1px solid var(--border)" }} />
        </div>
      </div>
    </section>
  );
}
