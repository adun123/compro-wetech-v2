"use client";
import { useEffect, useRef } from "react";
import { ArrowRight, Zap } from "lucide-react";

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    // Particles
    const particles: Array<{
      x: number; y: number; vx: number; vy: number;
      size: number; opacity: number; color: string;
    }> = [];

    const colors = isDark
      ? ["#7c3aed", "#a78bfa", "#6d28d9", "#c4b5fd", "#4c1d95"]
      : ["#6d28d9", "#7c3aed", "#4c1d95", "#8b5cf6", "#5b21b6"];

    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        size: Math.random() * 2.5 + 0.5,
        opacity: Math.random() * 0.6 + 0.1,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    let animId: number;
    let time = 0;

    const animate = () => {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      time += 0.005;

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.opacity * (0.7 + 0.3 * Math.sin(time + p.x));
        ctx.fill();
      });

      // Grid lines
      ctx.globalAlpha = isDark ? 0.06 : 0.04;
      ctx.strokeStyle = isDark ? "#7c3aed" : "#6d28d9";
      ctx.lineWidth = 0.5;
      const gridSize = 60;
      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      ctx.globalAlpha = 1;
      animId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        background: "var(--gradient-hero)",
      }}
    >
      {/* Canvas background */}
      <canvas
        ref={canvasRef}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none",
        }}
      />

      {/* Orb glows */}
      <div
        style={{
          position: "absolute",
          top: "15%",
          right: "10%",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(124,58,237,var(--glow-strength)) 0%, transparent 70%)",
          filter: "blur(40px)",
          pointerEvents: "none",
          animation: "floatOrb 8s ease-in-out infinite",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "10%",
          left: "5%",
          width: "350px",
          height: "350px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(38,24,95,0.6) 0%, transparent 70%)",
          filter: "blur(50px)",
          pointerEvents: "none",
          animation: "floatOrb 10s ease-in-out infinite reverse",
        }}
      />

      {/* Decorative circle ring */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          right: "-100px",
          transform: "translateY(-50%)",
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          border: "1px solid var(--border)",
          opacity: 0.3,
          pointerEvents: "none",
          animation: "rotateSlow 30s linear infinite",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "50%",
          right: "-50px",
          transform: "translateY(-50%)",
          width: "450px",
          height: "450px",
          borderRadius: "50%",
          border: "1px dashed var(--accent-bright)",
          opacity: 0.15,
          pointerEvents: "none",
          animation: "rotateSlow 20s linear infinite reverse",
        }}
      />

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "8rem 1.5rem 5rem",
          width: "100%",
        }}
      >
        <div style={{ maxWidth: "800px" }}>
          {/* Badge */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.4rem 1rem",
              borderRadius: "50px",
              border: "1px solid var(--border)",
              background: "var(--bg-surface)",
              color: "var(--text-accent)",
              fontSize: "0.8rem",
              fontWeight: "600",
              fontFamily: "'Space Grotesk', sans-serif",
              marginBottom: "2rem",
              animation: "fadeUp 0.6s ease forwards",
              letterSpacing: "0.05em",
              textTransform: "uppercase",
            }}
          >
            <Zap size={12} />
            Digital Technology Studio
          </div>

          {/* Headline */}
          <h1
            style={{
              fontFamily: "'Sora', sans-serif",
              fontWeight: "800",
              fontSize: "clamp(2.5rem, 6vw, 5rem)",
              lineHeight: "1.05",
              letterSpacing: "-0.03em",
              color: "var(--text-primary)",
              marginBottom: "1.5rem",
              animation: "fadeUp 0.6s ease 0.1s both",
            }}
          >
            Build Smarter{" "}
            <span
              style={{
                display: "block",
                background: "linear-gradient(135deg, #7c3aed, #a78bfa, #60a5fa)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                backgroundSize: "200% 200%",
                animation: "gradientShift 4s ease infinite, fadeUp 0.6s ease 0.1s both",
              }}
            >
              Digital Systems
            </span>
            for Growing Businesses
          </h1>

          {/* Subheadline */}
          <p
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "clamp(1rem, 2vw, 1.2rem)",
              lineHeight: "1.7",
              color: "var(--text-secondary)",
              marginBottom: "2.5rem",
              maxWidth: "600px",
              animation: "fadeUp 0.6s ease 0.2s both",
            }}
          >
            WeTech Studio membantu bisnis membangun website, sistem custom, dashboard,
            dan solusi AI yang dirancang untuk meningkatkan kredibilitas, efisiensi,
            dan pertumbuhan.
          </p>

          {/* CTAs */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "1rem",
              animation: "fadeUp 0.6s ease 0.3s both",
            }}
          >
            <a
              href="https://wa.me/6287877946981?text=Halo%20WeTech%20Studio%2C%20saya%20ingin%20konsultasi%20project"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.875rem 2rem",
                borderRadius: "50px",
                background: "linear-gradient(135deg, #26185f, #7c3aed)",
                color: "#fff",
                fontWeight: "700",
                fontSize: "1rem",
                fontFamily: "'Sora', sans-serif",
                textDecoration: "none",
                transition: "all 0.2s",
                boxShadow: "0 8px 32px rgba(124,58,237,0.35)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow = "0 12px 40px rgba(124,58,237,0.5)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 8px 32px rgba(124,58,237,0.35)";
              }}
            >
              Konsultasi Project
              <ArrowRight size={18} />
            </a>
            <a
              href="#services"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.875rem 2rem",
                borderRadius: "50px",
                border: "1.5px solid var(--border)",
                background: "var(--bg-surface)",
                color: "var(--text-primary)",
                fontWeight: "600",
                fontSize: "1rem",
                fontFamily: "'Sora', sans-serif",
                textDecoration: "none",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "var(--accent-bright)";
                e.currentTarget.style.background = "var(--bg-muted)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--border)";
                e.currentTarget.style.background = "var(--bg-surface)";
              }}
            >
              Lihat Layanan
            </a>
          </div>

          {/* Social proof */}
          <div
            style={{
              marginTop: "3.5rem",
              display: "flex",
              alignItems: "center",
              gap: "2rem",
              flexWrap: "wrap",
              animation: "fadeUp 0.6s ease 0.4s both",
            }}
          >
            {[
              { num: "50+", label: "Project Selesai" },
              { num: "30+", label: "Klien Puas" },
              { num: "3+", label: "Tahun Pengalaman" },
            ].map((s) => (
              <div key={s.label} style={{ display: "flex", flexDirection: "column" }}>
                <span
                  style={{
                    fontFamily: "'Sora', sans-serif",
                    fontWeight: "800",
                    fontSize: "1.75rem",
                    color: "var(--text-accent)",
                    letterSpacing: "-0.03em",
                  }}
                >
                  {s.num}
                </span>
                <span
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: "0.8rem",
                    color: "var(--text-muted)",
                    fontWeight: "500",
                  }}
                >
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        style={{
          position: "absolute",
          bottom: "2rem",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.5rem",
          opacity: 0.5,
        }}
      >
        <div
          style={{
            width: "1px",
            height: "60px",
            background: "linear-gradient(to bottom, transparent, var(--accent-bright))",
            animation: "pulseGlow 2s ease-in-out infinite",
          }}
        />
      </div>

      <style>{`
        @keyframes floatOrb {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-20px) scale(1.05); }
        }
        @keyframes rotateSlow {
          from { transform: translateY(-50%) rotate(0deg); }
          to { transform: translateY(-50%) rotate(360deg); }
        }
        @keyframes gradientShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulseGlow {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.8; }
        }
      `}</style>
    </section>
  );
}
