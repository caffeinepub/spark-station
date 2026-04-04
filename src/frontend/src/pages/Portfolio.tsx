import { Link } from "@tanstack/react-router";
import { ExternalLink, Zap } from "lucide-react";
import { useState } from "react";

type Category = "All" | "Web" | "App" | "Design";

const projects = [
  {
    img: "/assets/generated/portfolio-project1.dim_800x500.jpg",
    name: "E-Commerce Platform",
    client: "RetailEdge Co.",
    desc: "A full-stack e-commerce platform with real-time inventory management, Stripe payments, and a comprehensive analytics dashboard.",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    category: "Web" as Category,
    live: "#",
  },
  {
    img: "/assets/generated/portfolio-project2.dim_800x500.jpg",
    name: "SaaS Analytics Dashboard",
    client: "DataFlow Inc.",
    desc: "B2B analytics platform for enterprise clients with role-based access control, real-time charts, and automated reporting.",
    tags: ["TypeScript", "Next.js", "PostgreSQL", "Chart.js"],
    category: "Web" as Category,
    live: "#",
  },
  {
    img: "/assets/generated/portfolio-project3.dim_800x500.jpg",
    name: "Mobile Banking App",
    client: "FinPay Solutions",
    desc: "Secure fintech mobile app with KYC verification, P2P transfers, transaction history, and smart spending insights.",
    tags: ["React Native", "Firebase", "Stripe", "Node.js"],
    category: "App" as Category,
    live: "#",
  },
  {
    img: "/assets/generated/portfolio-project4.dim_800x500.jpg",
    name: "Brand Identity System",
    client: "CreativeAgency X",
    desc: "Complete brand overhaul including logo design, brand guidelines, web presence redesign, and digital marketing collateral.",
    tags: ["Figma", "Branding", "Illustration", "Web"],
    category: "Design" as Category,
    live: "#",
  },
];

const categories: Category[] = ["All", "Web", "App", "Design"];

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
            A selection of projects we’re proud of. Real results for real
            clients.
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filtered.map((p) => (
            <div key={p.name} className="ss-card overflow-hidden">
              <div
                className="relative overflow-hidden"
                style={{ height: "220px" }}
              >
                <img
                  src={p.img}
                  alt={p.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(180deg, transparent 60%, rgba(13,17,23,0.8) 100%)",
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
              <div className="p-6">
                <div className="text-xs mb-1" style={{ color: "#8B949E" }}>
                  {p.client}
                </div>
                <h3 className="text-lg font-bold mb-2">{p.name}</h3>
                <p
                  className="text-sm leading-relaxed mb-4"
                  style={{ color: "#8B949E" }}
                >
                  {p.desc}
                </p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {p.tags.map((t) => (
                    <span key={t} className="tech-badge">
                      {t}
                    </span>
                  ))}
                </div>
                <a
                  href={p.live}
                  className="btn-ghost text-sm"
                  style={{ width: "fit-content" }}
                >
                  <ExternalLink size={14} /> View Live Project
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
            Let’s create something you’ll be proud to showcase.
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
          © 2026 Spark Station. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
