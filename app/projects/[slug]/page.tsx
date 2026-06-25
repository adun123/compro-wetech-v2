import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, CheckCircle2, ExternalLink } from "lucide-react";
import JsonLd from "@/components/JsonLd";
import Navbar from "@/components/Navbar";
import { absoluteUrl, siteConfig } from "@/lib/site";
import { getProjectBySlug, projects } from "@/lib/projects";
import { services } from "@/lib/services";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {};
  }

  const title = `${project.title} Case Study`;
  const description = `${project.description} Built by ${siteConfig.brand}.`;

  return {
    title,
    description,
    alternates: {
      canonical: `/projects/${project.slug}`,
    },
    openGraph: {
      title,
      description,
      url: absoluteUrl(`/projects/${project.slug}`),
      type: "article",
      locale: siteConfig.locale,
      siteName: siteConfig.brand,
      images: [{ url: absoluteUrl(project.images[0]) }],
    },
  };
}

function StatCard({ label, value }: { label: string; value: string }) {
  return (
    <div
      style={{
        padding: "1.1rem",
        borderRadius: "16px",
        border: "1px solid var(--border)",
        background: "var(--bg-surface)",
      }}
    >
      <p
        style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: "0.72rem",
          fontWeight: 700,
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          color: "var(--text-accent)",
          marginBottom: "0.45rem",
        }}
      >
        {label}
      </p>
      <p style={{ fontFamily: "'Satoshi', sans-serif", fontSize: "1rem", fontWeight: 700, color: "var(--text-primary)" }}>
        {value}
      </p>
    </div>
  );
}

function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div style={{ marginBottom: "1.75rem" }}>
      <p
        style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: "0.76rem",
          fontWeight: 800,
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          color: "var(--text-accent)",
          marginBottom: "0.7rem",
        }}
      >
        {eyebrow}
      </p>
      <h2
        style={{
          fontFamily: "'Satoshi', sans-serif",
          fontWeight: 800,
          fontSize: "clamp(1.9rem, 4vw, 3rem)",
          lineHeight: 1.1,
          letterSpacing: "-0.03em",
          color: "var(--text-primary)",
        }}
      >
        {title}
      </h2>
    </div>
  );
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const relatedServices = services.filter((service) => project.relatedServices.includes(service.slug));
  const otherProjects = projects.filter((item) => item.slug !== project.slug).slice(0, 3);

  const projectJsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.description,
    url: absoluteUrl(`/projects/${project.slug}`),
    creator: {
      "@type": "Organization",
      name: siteConfig.brand,
      url: siteConfig.url,
    },
    image: project.images.map((image) => absoluteUrl(image)),
  };

  return (
    <>
      <JsonLd data={projectJsonLd} />
      <Navbar />
      <main style={{ minHeight: "100vh", background: "var(--bg-primary)" }}>
        <section
          style={{
            position: "relative",
            overflow: "hidden",
            padding: "8.5rem 1.5rem 4.5rem",
            background: "var(--gradient-hero)",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage:
                "linear-gradient(rgba(13,148,136,0.055) 1px, transparent 1px), linear-gradient(90deg, rgba(13,148,136,0.055) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
              pointerEvents: "none",
            }}
          />
          <div style={{ maxWidth: "1220px", margin: "0 auto", position: "relative", zIndex: 2 }}>
            <Link
              href="/projects"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.45rem",
                color: "var(--text-accent)",
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.9rem",
                fontWeight: 700,
                textDecoration: "none",
                marginBottom: "2rem",
              }}
            >
              <ArrowLeft size={16} />
              Back to work
            </Link>

            <div className="project-detail-hero">
              <div>
                <p
                  style={{
                    display: "inline-flex",
                    padding: "0.35rem 0.85rem",
                    borderRadius: "999px",
                    background: "rgba(20,184,166,0.11)",
                    color: "var(--text-accent)",
                    border: "1px solid rgba(20,184,166,0.22)",
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.76rem",
                    fontWeight: 800,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    marginBottom: "1.25rem",
                  }}
                >
                  {project.category}
                </p>
                <h1
                  style={{
                    fontFamily: "'Satoshi', sans-serif",
                    fontWeight: 800,
                    fontSize: "clamp(2.6rem, 6vw, 5rem)",
                    lineHeight: 1,
                    letterSpacing: "-0.045em",
                    color: "var(--text-primary)",
                    marginBottom: "1.35rem",
                  }}
                >
                  {project.title}
                </h1>
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "clamp(1rem, 2vw, 1.2rem)",
                    lineHeight: 1.75,
                    color: "var(--text-secondary)",
                    maxWidth: "720px",
                  }}
                >
                  {project.description}
                </p>
              </div>

              <div
                style={{
                  position: "relative",
                  aspectRatio: "16 / 9",
                  borderRadius: "24px",
                  overflow: "hidden",
                  background: project.gradient,
                  border: "1px solid var(--border)",
                  boxShadow: "0 24px 80px rgba(15,23,42,0.18)",
                }}
              >
                <Image src={project.images[0]} alt={`${project.title} interface preview`} fill priority sizes="(max-width: 900px) 100vw, 44vw" style={{ objectFit: "contain", padding: "0.9rem" }} />
              </div>
            </div>
          </div>
        </section>

        <section style={{ padding: "3rem 1.5rem 1rem", background: "var(--bg-primary)" }}>
          <div className="project-detail-stats" style={{ maxWidth: "1220px", margin: "0 auto" }}>
            <StatCard label="Client" value={project.client} />
            <StatCard label="Industry" value={project.industry} />
            <StatCard label="Timeline" value={project.timeline} />
            <StatCard label="Role" value={project.role} />
          </div>
        </section>

        <section style={{ padding: "5rem 1.5rem", background: "var(--bg-primary)" }}>
          <div className="project-detail-two-col" style={{ maxWidth: "1220px", margin: "0 auto" }}>
            <article>
              <SectionHeading eyebrow="Challenge" title="The problem behind the build" />
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "1rem", lineHeight: 1.8, color: "var(--text-secondary)" }}>
                {project.challenge}
              </p>
            </article>
            <article>
              <SectionHeading eyebrow="Solution" title="What we designed and shipped" />
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "1rem", lineHeight: 1.8, color: "var(--text-secondary)" }}>
                {project.solution}
              </p>
            </article>
          </div>
        </section>

        <section style={{ padding: "5rem 1.5rem", background: "var(--bg-secondary)" }}>
          <div style={{ maxWidth: "1220px", margin: "0 auto" }}>
            <SectionHeading eyebrow="Product scope" title="Key features in the experience" />
            <div className="project-detail-feature-grid">
              {project.features.map((feature) => (
                <div key={feature} style={{ display: "flex", gap: "0.8rem", alignItems: "flex-start", padding: "1.1rem", borderRadius: "16px", background: "var(--bg-surface)", border: "1px solid var(--border)" }}>
                  <CheckCircle2 size={18} color="var(--text-accent)" style={{ marginTop: "0.1rem", flexShrink: 0 }} />
                  <span style={{ fontFamily: "'Inter', sans-serif", color: "var(--text-secondary)", lineHeight: 1.6, fontSize: "0.95rem" }}>{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section style={{ padding: "5rem 1.5rem", background: "var(--bg-primary)" }}>
          <div style={{ maxWidth: "1220px", margin: "0 auto" }}>
            <SectionHeading eyebrow="Screens" title="A closer look at the interface" />
            <div className="project-detail-gallery">
              {project.images.map((image, index) => (
                <div
                  key={image}
                  style={{
                    position: "relative",
                    aspectRatio: "16 / 9",
                    borderRadius: "22px",
                    overflow: "hidden",
                    background: project.gradient,
                    border: "1px solid var(--border)",
                  }}
                  className={index === 0 ? "project-detail-gallery-main" : undefined}
                >
                  <Image src={image} alt={`${project.title} screen ${index + 1}`} fill sizes={index === 0 ? "100vw" : "50vw"} style={{ objectFit: "contain", padding: "0.9rem" }} />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section style={{ padding: "5rem 1.5rem", background: "linear-gradient(135deg, #060412 0%, #021716 42%, #042f2e 100%)" }}>
          <div className="project-detail-two-col" style={{ maxWidth: "1220px", margin: "0 auto", alignItems: "start" }}>
            <div>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.76rem", fontWeight: 800, letterSpacing: "0.12em", textTransform: "uppercase", color: "#5eead4", marginBottom: "0.75rem" }}>
                Outcomes
              </p>
              <h2 style={{ fontFamily: "'Satoshi', sans-serif", fontWeight: 800, fontSize: "clamp(2rem, 4vw, 3.2rem)", lineHeight: 1.08, letterSpacing: "-0.035em", color: "#f0fdfa" }}>
                What the project improved
              </h2>
            </div>
            <div style={{ display: "grid", gap: "0.85rem" }}>
              {project.outcomes.map((outcome) => (
                <div key={outcome} style={{ padding: "1rem 1.1rem", borderRadius: "16px", border: "1px solid rgba(94,234,212,0.18)", background: "rgba(255,255,255,0.06)", color: "#ccfbf1", fontFamily: "'Inter', sans-serif", lineHeight: 1.6 }}>
                  {outcome}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section style={{ padding: "5rem 1.5rem", background: "var(--bg-primary)" }}>
          <div style={{ maxWidth: "1220px", margin: "0 auto" }}>
            <div className="project-detail-two-col" style={{ alignItems: "start" }}>
              <div>
                <SectionHeading eyebrow="Connected services" title="Services behind this project" />
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
                  {relatedServices.map((service) => (
                    <Link key={service.slug} href={service.path} style={{ display: "inline-flex", alignItems: "center", gap: "0.45rem", padding: "0.75rem 1rem", borderRadius: "999px", border: "1px solid var(--border)", color: "var(--text-primary)", textDecoration: "none", background: "var(--bg-surface)", fontFamily: "'Inter', sans-serif", fontSize: "0.9rem", fontWeight: 700 }}>
                      {service.title}
                      <ArrowRight size={15} />
                    </Link>
                  ))}
                </div>
              </div>
              <div>
                <SectionHeading eyebrow="More work" title="Explore other builds" />
                <div style={{ display: "grid", gap: "0.75rem" }}>
                  {otherProjects.map((item) => (
                    <Link key={item.slug} href={`/projects/${item.slug}`} style={{ padding: "1rem", borderRadius: "16px", border: "1px solid var(--border)", background: "var(--bg-surface)", color: "var(--text-primary)", textDecoration: "none", display: "flex", justifyContent: "space-between", gap: "1rem", alignItems: "center" }}>
                      <span>
                        <span style={{ display: "block", fontFamily: "'Inter', sans-serif", color: "var(--text-accent)", fontSize: "0.72rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.09em", marginBottom: "0.25rem" }}>{item.category}</span>
                        <span style={{ fontFamily: "'Satoshi', sans-serif", fontWeight: 800 }}>{item.title}</span>
                      </span>
                      <ExternalLink size={17} color="var(--text-muted)" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section style={{ padding: "5rem 1.5rem 7rem", background: "var(--bg-secondary)", textAlign: "center" }}>
          <h2 style={{ fontFamily: "'Satoshi', sans-serif", fontWeight: 800, fontSize: "clamp(2rem, 5vw, 3.5rem)", letterSpacing: "-0.035em", color: "var(--text-primary)", marginBottom: "1rem" }}>
            Need something with a similar shape?
          </h2>
          <p style={{ fontFamily: "'Inter', sans-serif", color: "var(--text-secondary)", lineHeight: 1.7, maxWidth: "620px", margin: "0 auto 2rem" }}>
            Share the workflow, website, or automation idea you have in mind. We can help turn it into a practical scope.
          </p>
          <a href={siteConfig.contact.whatsappUrl} target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "0.6rem", padding: "1rem 2rem", borderRadius: "999px", background: "var(--gradient-accent)", color: "#fff", textDecoration: "none", fontFamily: "'Satoshi', sans-serif", fontWeight: 800 }}>
            Discuss a project
            <ArrowRight size={18} />
          </a>
        </section>

        <style>{`
          .project-detail-hero {
            display: grid;
            grid-template-columns: minmax(0, 1.05fr) minmax(360px, 0.95fr);
            gap: 3rem;
            align-items: center;
          }
          .project-detail-stats {
            display: grid;
            grid-template-columns: repeat(4, minmax(0, 1fr));
            gap: 1rem;
          }
          .project-detail-two-col {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 3rem;
          }
          .project-detail-feature-grid {
            display: grid;
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 1rem;
          }
          .project-detail-gallery {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 1rem;
          }
          .project-detail-gallery-main {
            grid-column: 1 / -1;
          }
          @media (max-width: 900px) {
            .project-detail-hero,
            .project-detail-two-col {
              grid-template-columns: 1fr !important;
            }
            .project-detail-stats,
            .project-detail-feature-grid,
            .project-detail-gallery {
              grid-template-columns: 1fr !important;
            }
            .project-detail-hero > div:last-child {
              min-height: 280px !important;
            }
          }
        `}</style>
      </main>
    </>
  );
}
