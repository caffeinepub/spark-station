import { Link } from "@tanstack/react-router";
import { ExternalLink, Zap } from "lucide-react";
import { useState } from "react";

type Category = "All" | "Web Design";

const projects = [
  {
    img: "/assets/fundoon-preview.png",
    name: "Fundoon – Snooker Lounge & Cafe Website",
    client: "Fundoon Snooker & Cafe",
    category: "Web Design" as Category,
    desc: "A luxury-style responsive website built for Fundoon Snooker & Cafe. The website showcases the lounge environment, attracts snooker players, and helps drive customer bookings through an engaging modern interface.",
    tags: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Responsive Design",
      "WhatsApp Integration",
      "Google Maps",
      "Instagram Embed",
      "Google Reviews",
    ],
    live: "https://fundoonsnooker-wsy.caffeine.xyz/",
    liveLabel: "Live Preview",
  },
  {
    img: "/assets/glaamz-preview.png",
    name: "Glaamz Cafe – Bakery & Terrace Website",
    client: "Glaamz Cafe, Gwalior",
    category: "Web Design" as Category,
    desc: "A modern luxury website designed for Glaamz Cafe in Gwalior. The website highlights the cafe's bakery menu, rooftop terrace dining experience, and provides an easy WhatsApp-based table booking system. Designed to attract college students, couples, and social hangout groups.",
    tags: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Responsive Design",
      "WhatsApp API Integration",
      "Instagram Embed",
      "Google Maps",
      "Google Reviews",
    ],
    live: "https://glaamzsparkstation-oah.caffeine.xyz/",
    liveLabel: "Visit Website",
  },
  {
    img: null,
    name: "Spark Station – Official Website",
    client: "Spark Station",
    category: "Web Design" as Category,
    desc: "The official website of Spark Station, designed to showcase the company's services, portfolio, and technology solutions. Built with a modern startup-style interface to represent the brand's vision of turning ideas into digital reality.",
    tags: ["HTML5", "CSS3", "JavaScript", "Modern UI/UX", "Responsive Design"],
    live: "#",
    liveLabel: "View Website",
  },
];

const categories: Category[] = ["All", "Web Design"];

export default function PortfolioPage() {
  const [active, setActive] = useState<Category>("All");

  const filtered =
    active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <main style={{ paddingTop: "80px" }}>
      {/* Hero */}
      <section
        className="py-20 text-center"
        style={{
          background:
            "linear-gradient(180deg, rgba(139,92,246,0.08) 0%, transparent 100%)",
        }}
      >
        <div className="max-w-3xl mx-auto px-6">
          <span className="section-label">Showcase</span>
          <h1
            className="text-5xl font-bold mt-2 mb-4"
            style={{ letterSpacing: "-0.03em" }}
          >
            Our <span className="gradient-text">Work</span>
          </h1>
          <p className="text-lg" style={{ color: "#8B949E" }}>
            Real projects, real results. A selection of websites we've built for
            our clients.
          </p>
        </div>
      </section>

      {/* Filters */}
      <div className="max-w-6xl mx-auto px-6 mb-8">
        <div className="flex gap-2 flex-wrap">
          {categories.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setActive(c)}
              data-ocid="portfolio-filter"
              className="px-5 py-2 rounded-lg text-sm font-medium transition-all duration-200"
              style={{
                background:
                  active === c
                    ? "linear-gradient(135deg, #58A6FF, #8B5CF6)"
                    : "rgba(22,27,34,1)",
                color: active === c ? "white" : "#8B949E",
                border: active === c ? "none" : "1px solid rgba(48,54,61,0.8)",
              }}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p) => (
            <div
              key={p.name}
              data-ocid="portfolio-card"
              className="group overflow-hidden rounded-xl transition-all duration-300"
              style={{
                background: "#161B22",
                border: "1px solid rgba(48,54,61,0.8)",
                boxShadow: "0 0 0 0 rgba(88,166,255,0)",
                transition:
                  "transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.transform =
                  "translateY(-6px)";
                (e.currentTarget as HTMLDivElement).style.boxShadow =
                  "0 0 24px rgba(88,166,255,0.25), 0 8px 32px rgba(0,0,0,0.4)";
                (e.currentTarget as HTMLDivElement).style.borderColor =
                  "rgba(88,166,255,0.5)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.transform =
                  "translateY(0)";
                (e.currentTarget as HTMLDivElement).style.boxShadow =
                  "0 0 0 0 rgba(88,166,255,0)";
                (e.currentTarget as HTMLDivElement).style.borderColor =
                  "rgba(48,54,61,0.8)";
              }}
            >
              {/* Image / Placeholder */}
              <div
                className="relative overflow-hidden"
                style={{ height: "220px" }}
              >
                {p.img ? (
                  <img
                    src={p.img}
                    alt={p.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div
                    className="w-full h-full flex items-center justify-center"
                    style={{
                      background:
                        "linear-gradient(135deg, #0D1117 0%, #161B22 40%, #1a1f2e 70%, #0D1117 100%)",
                      position: "relative",
                      overflow: "hidden",
                    }}
                  >
                    {/* Grid lines decoration */}
                    <div
                      style={{
                        position: "absolute",
                        inset: 0,
                        backgroundImage:
                          "linear-gradient(rgba(88,166,255,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(88,166,255,0.07) 1px, transparent 1px)",
                        backgroundSize: "32px 32px",
                      }}
                    />
                    <div className="relative z-10 text-center px-4">
                      <div
                        className="text-3xl font-black mb-2 tracking-tight"
                        style={{
                          background:
                            "linear-gradient(135deg, #58A6FF, #8B5CF6)",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                        }}
                      >
                        SPARK
                      </div>
                      <div
                        className="text-sm font-semibold"
                        style={{ color: "#8B949E", letterSpacing: "0.2em" }}
                      >
                        STATION
                      </div>
                      <div
                        className="mt-3 px-3 py-1 rounded-full text-xs"
                        style={{
                          background: "rgba(88,166,255,0.15)",
                          color: "#58A6FF",
                          border: "1px solid rgba(88,166,255,0.3)",
                        }}
                      >
                        Official Website
                      </div>
                    </div>
                  </div>
                )}
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(180deg, transparent 60%, rgba(13,17,23,0.85) 100%)",
                  }}
                />
                <span
                  className="absolute top-3 right-3 text-xs font-semibold px-3 py-1 rounded-full"
                  style={{
                    background: "rgba(88,166,255,0.2)",
                    color: "#58A6FF",
                    border: "1px solid rgba(88,166,255,0.3)",
                  }}
                >
                  {p.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <div
                  className="text-xs mb-1 font-medium"
                  style={{ color: "#58A6FF" }}
                >
                  {p.client}
                </div>
                <h3
                  className="text-base font-bold mb-2 leading-snug"
                  style={{ color: "#E6EDF3" }}
                >
                  {p.name}
                </h3>
                <p
                  className="text-sm leading-relaxed mb-4"
                  style={{ color: "#8B949E" }}
                >
                  {p.desc}
                </p>

                {/* Tech Stack Badges */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2.5 py-1 rounded-full font-medium"
                      style={{
                        background: "rgba(139,92,246,0.12)",
                        color: "#A78BFA",
                        border: "1px solid rgba(139,92,246,0.25)",
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Live Button */}
                <a
                  href={p.live}
                  target={p.live !== "#" ? "_blank" : undefined}
                  rel={p.live !== "#" ? "noopener noreferrer" : undefined}
                  data-ocid="portfolio-live-btn"
                  className="inline-flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded-lg transition-all duration-200"
                  style={{
                    background: "rgba(88,166,255,0.1)",
                    color: "#58A6FF",
                    border: "1px solid rgba(88,166,255,0.3)",
                    boxShadow: "0 0 0 rgba(88,166,255,0)",
                    transition:
                      "background 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease, color 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLAnchorElement;
                    el.style.background = "rgba(88,166,255,0.2)";
                    el.style.boxShadow = "0 0 16px rgba(88,166,255,0.35)";
                    el.style.borderColor = "rgba(88,166,255,0.6)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLAnchorElement;
                    el.style.background = "rgba(88,166,255,0.1)";
                    el.style.boxShadow = "0 0 0 rgba(88,166,255,0)";
                    el.style.borderColor = "rgba(88,166,255,0.3)";
                  }}
                >
                  <ExternalLink size={14} />
                  {p.liveLabel}
                </a>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20" style={{ color: "#8B949E" }}>
            No projects in this category yet.
          </div>
        )}
      </section>

      {/* CTA */}
      <section
        className="py-20"
        style={{
          background: "#161B22",
          borderTop: "1px solid rgba(48,54,61,0.8)",
        }}
      >
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Your project could be <span className="gradient-text">next</span>
          </h2>
          <p className="mb-8" style={{ color: "#8B949E" }}>
            Let's create something you'll be proud to showcase.
          </p>
          <Link to="/contact" className="btn-primary">
            <Zap size={16} /> Start Your Project
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer
        className="py-8 text-center"
        style={{ borderTop: "1px solid rgba(48,54,61,0.8)" }}
      >
        <div className="text-sm" style={{ color: "#8B949E" }}>
          © {new Date().getFullYear()} Spark Station. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
