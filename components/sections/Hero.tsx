"use client";
import { useEffect, useMemo, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import dynamic from "next/dynamic";

const HeroBackground = dynamic(() => import("@/components/HeroBackground"), { ssr: false });

const rotatingWords = ["scalable", "efficient", "integrated", "intelligent", "custom"];

function CountStat({ end, suffix, label }: { end: number; suffix: string; label: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const counted = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !counted.current) {
          counted.current = true;
          const duration = 1500;
          const start = performance.now();
          const step = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.round(eased * end));
            if (progress < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [end]);

  return (
    <div ref={ref} style={{ textAlign: "center" }}>
      <div style={{ fontFamily: "'Satoshi', sans-serif", fontSize: "2.5rem", color: "var(--accent)", letterSpacing: "-0.02em", lineHeight: 1 }}>
        {count}{suffix}
      </div>
      <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.75rem", color: "var(--text-muted)", letterSpacing: "0.08em", textTransform: "uppercase", marginTop: "0.3rem" }}>
        {label}
      </div>
    </div>
  );
}

export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const currentWord = useMemo(() => rotatingWords[wordIndex], [wordIndex]);

  return (
    <section
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        background: "var(--bg-primary)",
      }}
    >
      {/* Three.js particle background */}
      <HeroBackground />

      {/* Gradient overlay for depth */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(ellipse at center, transparent 0%, var(--bg-primary) 75%)",
          pointerEvents: "none",
          zIndex: 1,
        }}
      />

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "8rem 1.5rem 5rem",
          width: "100%",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontFamily: "'Satoshi', sans-serif",
            fontWeight: 400,
            fontSize: "clamp(3rem, 8vw, 7rem)",
            lineHeight: "1.05",
            letterSpacing: "-0.02em",
            color: "var(--text-primary)",
            marginBottom: "2rem",
          }}
        >
          We build{" "}
          <span
            style={{
              display: "inline-block",
              position: "relative",
              minWidth: "420px",
              verticalAlign: "baseline",
              overflow: "hidden",
              height: "1.05em",
            }}
          >
            <AnimatePresence mode="wait">
              <motion.span
                key={currentWord}
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -40, opacity: 0 }}
                transition={{ type: "spring", stiffness: 60, damping: 20, mass: 0.8 }}
                style={{
                  display: "inline-block",
                  fontStyle: "italic",
                  color: "var(--accent)",
                  position: "absolute",
                  left: 0,
                  top: 0,
                }}
              >
                {currentWord}
              </motion.span>
            </AnimatePresence>
          </span>
          <br />
          digital systems.
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "clamp(1.05rem, 2vw, 1.25rem)",
            lineHeight: "1.7",
            color: "var(--text-secondary)",
            marginBottom: "3rem",
            maxWidth: "620px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          WeTech Studio membantu perusahaan membangun website, sistem custom,
          dashboard, dan solusi AI — dirancang untuk pertumbuhan nyata, bukan sekadar tampilan.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <a
            href="https://wa.me/6287877946981?text=Halo%20WeTech%20Studio%2C%20saya%20ingin%20konsultasi%20project"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.6rem",
              padding: "1rem 2.2rem",
              borderRadius: "50px",
              background: "var(--accent)",
              color: "#fff",
              fontWeight: "600",
              fontSize: "1rem",
              fontFamily: "'Inter', sans-serif",
              textDecoration: "none",
              transition: "all 0.25s ease",
              border: "none",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "var(--accent-hover)";
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = "0 8px 30px rgba(20,184,166,0.3)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "var(--accent)";
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            Start a Project
            <ArrowRight size={18} />
          </a>
        </motion.div>

        {/* Stats - count up */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "3rem",
            marginTop: "4rem",
            flexWrap: "wrap",
          }}
        >
          {[
            { end: 20, suffix: "+", label: "Projects" },
            { end: 15, suffix: "+", label: "Clients" },
            { end: 100, suffix: "%", label: "On-time" },
          ].map((s) => (
            <CountStat key={s.label} end={s.end} suffix={s.suffix} label={s.label} />
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        style={{
          position: "absolute",
          bottom: "2.5rem",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 10,
        }}
      >
        <div
          style={{
            width: "1px",
            height: "48px",
            background: "linear-gradient(to bottom, transparent, var(--text-muted))",
          }}
        />
      </motion.div>
    </section>
  );
}
