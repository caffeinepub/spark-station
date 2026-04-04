import {
  Code2,
  Globe,
  Palette,
  Search,
  ShoppingCart,
  Smartphone,
  TrendingUp,
  Zap,
} from "lucide-react";

const services = [
  {
    icon: <Globe size={32} />,
    title: "Web Development",
    desc: "We build fast, modern, and scalable websites and web applications using the latest technologies. From simple landing pages to complex web platforms.",
    benefits: [
      "Fully responsive on all devices",
      "SEO-optimized from the ground up",
      "Performance-first architecture",
      "Clean, maintainable codebase",
    ],
    useCases: [
      "Business websites",
      "Web apps & SaaS platforms",
      "Landing pages",
      "Portals & dashboards",
    ],
    color: "#58A6FF",
  },
  {
    icon: <Smartphone size={32} />,
    title: "Mobile App Development",
    desc: "Native and cross-platform mobile applications that deliver exceptional user experiences on iOS and Android. Built for performance and scalability.",
    benefits: [
      "Cross-platform (React Native)",
      "Native performance",
      "Offline-first capability",
      "App store deployment",
    ],
    useCases: [
      "Consumer apps",
      "Business tools",
      "Fintech & commerce",
      "On-demand services",
    ],
    color: "#8B5CF6",
  },
  {
    icon: <Palette size={32} />,
    title: "UI/UX Design",
    desc: "User-centered design that converts visitors into customers. We create intuitive interfaces backed by research, testing, and proven design principles.",
    benefits: [
      "User research & personas",
      "Wireframes & prototypes",
      "Design system creation",
      "Usability testing",
    ],
    useCases: [
      "App redesigns",
      "New product design",
      "Design audits",
      "Conversion optimization",
    ],
    color: "#F78166",
  },
  {
    icon: <Zap size={32} />,
    title: "Branding & Identity",
    desc: "Memorable brand identities that tell your story and resonate with your audience. Logo, colors, typography, and the complete visual system.",
    benefits: [
      "Logo & visual identity",
      "Brand guidelines doc",
      "Color & typography system",
      "Marketing collateral",
    ],
    useCases: [
      "New business launches",
      "Rebrands & refreshes",
      "Startup identities",
      "Agency whitelabeling",
    ],
    color: "#F1E05A",
  },
  {
    icon: <Code2 size={32} />,
    title: "Product Design",
    desc: "End-to-end product strategy, design, and development. We help you go from idea to a fully functional digital product that users love.",
    benefits: [
      "Product strategy & roadmap",
      "MVP scoping & definition",
      "Iterative design & testing",
      "Launch & scale support",
    ],
    useCases: [
      "SaaS products",
      "Marketplaces",
      "Internal tools",
      "B2B platforms",
    ],
    color: "#3FB950",
  },
  {
    icon: <ShoppingCart size={32} />,
    title: "E-Commerce",
    desc: "Custom online stores built to sell. We handle everything from product catalog and cart to payments, inventory, and analytics.",
    benefits: [
      "Custom storefront design",
      "Payment gateway integration",
      "Inventory management",
      "Analytics & reporting",
    ],
    useCases: [
      "Retail businesses",
      "D2C brands",
      "B2B wholesalers",
      "Digital product stores",
    ],
    color: "#58A6FF",
  },
  {
    icon: <Search size={32} />,
    title: "SEO & Performance",
    desc: "Get found online and keep users engaged with lightning-fast load times. We optimize for search engines and real-world performance metrics.",
    benefits: [
      "Technical SEO audit & fixes",
      "Core Web Vitals optimization",
      "Content strategy",
      "Monthly performance reports",
    ],
    useCases: [
      "Existing websites",
      "New launches",
      "E-commerce stores",
      "Content sites",
    ],
    color: "#8B5CF6",
  },
  {
    icon: <TrendingUp size={32} />,
    title: "Technical Consultancy",
    desc: "Expert guidance to help you make the right technology and architecture decisions. Avoid costly mistakes and build on a solid foundation.",
    benefits: [
      "Tech stack recommendations",
      "Architecture review",
      "Code audits",
      "Team mentoring",
    ],
    useCases: [
      "Early-stage startups",
      "Teams scaling up",
      "Digital transformation",
      "Pre-launch reviews",
    ],
    color: "#F78166",
  },
];

export default function ServicesPage() {
  return (
    <main style={{ paddingTop: "80px" }}>
      {/* Hero */}
      <section
        className="py-20 text-center"
        style={{
          background:
            "linear-gradient(180deg, rgba(88,166,255,0.08) 0%, transparent 100%)",
        }}
      >
        <div className="max-w-3xl mx-auto px-6">
          <span className="section-label">What We Offer</span>
          <h1
            className="text-5xl font-bold mt-2 mb-4"
            style={{ letterSpacing: "-0.03em" }}
          >
            Our <span className="gradient-text">Services</span>
          </h1>
          <p className="text-lg" style={{ color: "#8B949E" }}>
            Comprehensive digital services to help your business thrive online.
            Custom-built solutions, no cookie-cutter packages.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((s) => (
            <div key={s.title} className="ss-card p-8">
              <div className="flex items-start gap-5">
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: `${s.color}15`, color: s.color }}
                >
                  {s.icon}
                </div>
                <div>
                  <h2 className="text-xl font-bold mb-2">{s.title}</h2>
                  <p
                    className="text-sm leading-relaxed mb-5"
                    style={{ color: "#8B949E" }}
                  >
                    {s.desc}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <div
                        className="text-xs font-semibold uppercase tracking-widest mb-2"
                        style={{ color: s.color }}
                      >
                        Benefits
                      </div>
                      {s.benefits.map((b) => (
                        <div key={b} className="flex items-center gap-2 mb-1.5">
                          <div
                            className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                            style={{ background: s.color }}
                          />
                          <span
                            className="text-sm"
                            style={{ color: "#8B949E" }}
                          >
                            {b}
                          </span>
                        </div>
                      ))}
                    </div>
                    <div>
                      <div
                        className="text-xs font-semibold uppercase tracking-widest mb-2"
                        style={{ color: "#8B949E" }}
                      >
                        Use Cases
                      </div>
                      {s.useCases.map((u) => (
                        <div key={u} className="flex items-center gap-2 mb-1.5">
                          <div
                            className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                            style={{ background: "rgba(139,149,158,0.5)" }}
                          />
                          <span
                            className="text-sm"
                            style={{ color: "#8B949E" }}
                          >
                            {u}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
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
            Not sure which service you need?
          </h2>
          <p className="mb-8" style={{ color: "#8B949E" }}>
            Tell us about your project and we'll recommend the right approach —
            for free.
          </p>
          <a
            href="https://wa.me/919111376314?text=Hi%2C%20I%27d%20like%20a%20free%20consultation"
            target="_blank"
            rel="noreferrer"
            className="btn-primary"
          >
            Get Free Consultation
          </a>
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
