import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Code2,
  ExternalLink,
  Globe,
  Mail,
  MessageCircle,
  Palette,
  Phone,
  Smartphone,
  Star,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

// ─── Particle Canvas ──────────────────────────────────────────
function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;
    let raf: number;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const particles: {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      alpha: number;
    }[] = [];
    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 1.5 + 0.5,
        alpha: Math.random() * 0.5 + 0.1,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(88,166,255,${p.alpha})`;
        ctx.fill();
      }
      raf = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      id="particle-canvas"
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
    />
  );
}

// ─── Animated Counter ─────────────────────────────────────────
function AnimatedCounter({
  target,
  suffix = "",
}: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          let start = 0;
          const duration = 2000;
          const step = (ts: number) => {
            if (!start) start = ts;
            const progress = Math.min((ts - start) / duration, 1);
            const eased = 1 - (1 - progress) ** 3;
            setCount(Math.floor(eased * target));
            if (progress < 1) requestAnimationFrame(step);
            else setCount(target);
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.3 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref} className="counter-value">
      {count}
      {suffix}
    </span>
  );
}

// ─── FAQ Item ────────────────────────────────────────────────
function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="faq-item py-5">
      <button
        type="button"
        className="w-full flex justify-between items-start gap-4 text-left"
        onClick={() => setOpen(!open)}
        style={{ background: "none", border: "none", color: "#E6EDF3" }}
      >
        <span className="font-semibold text-base">{q}</span>
        {open ? (
          <ChevronUp size={20} style={{ color: "#58A6FF", flexShrink: 0 }} />
        ) : (
          <ChevronDown size={20} style={{ color: "#8B949E", flexShrink: 0 }} />
        )}
      </button>
      {open && (
        <p
          className="mt-3 text-sm leading-relaxed"
          style={{ color: "#8B949E" }}
        >
          {a}
        </p>
      )}
    </div>
  );
}

const services = [
  {
    icon: <Globe size={24} />,
    title: "Web Development",
    desc: "Responsive, fast, and modern websites built with the latest technologies.",
  },
  {
    icon: <Smartphone size={24} />,
    title: "App Development",
    desc: "Native and cross-platform mobile apps that deliver great user experiences.",
  },
  {
    icon: <Palette size={24} />,
    title: "UI/UX Design",
    desc: "Beautiful, intuitive interfaces that convert visitors into customers.",
  },
  {
    icon: <Zap size={24} />,
    title: "Branding",
    desc: "Memorable brand identities that set you apart from the competition.",
  },
  {
    icon: <Code2 size={24} />,
    title: "Product Design",
    desc: "End-to-end product strategy, research, and design for digital products.",
  },
  {
    icon: <TrendingUp size={24} />,
    title: "Consultancy",
    desc: "Expert guidance to help you make the right tech and business decisions.",
  },
];

const portfolioProjects = [
  {
    img: "/assets/fundoon-preview.png",
    name: "Fundoon – Snooker Lounge & Cafe Website",
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
    live: "#",
    liveLabel: "Live Preview",
  },
  {
    img: "/assets/glaamz-preview.png",
    name: "Glaamz Cafe – Bakery & Terrace Website",
    desc: "A modern luxury website designed for Glaamz Cafe in Gwalior. The website highlights the cafe's bakery menu, rooftop terrace dining experience, and provides an easy WhatsApp-based table booking system.",
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
    desc: "The official website of Spark Station, designed to showcase the company's services, portfolio, and technology solutions. Built with a modern startup-style interface to represent the brand's vision of turning ideas into digital reality.",
    tags: ["HTML5", "CSS3", "JavaScript", "Modern UI/UX", "Responsive Design"],
    live: "#",
    liveLabel: "View Website",
  },
];

const team = [
  {
    img: "/assets/generated/team-saksham.dim_400x400.jpg",
    name: "Saksham Pandey",
    role: "Founder & Lead Developer",
  },
  {
    img: "/assets/generated/team-shashwat.dim_400x400.jpg",
    name: "Shashwat Rai",
    role: "Finance & Operations",
  },
  {
    img: "/assets/generated/team-niket.dim_400x400.jpg",
    name: "Niket",
    role: "Marketing & Content",
  },
  {
    img: "/assets/generated/team-manas.dim_400x400.jpg",
    name: "Manas",
    role: "Client Relations",
  },
];

const testimonials = [
  {
    name: "Arjun Sharma",
    company: "TechStartup Co.",
    text: "Spark Station delivered our platform ahead of schedule. The quality of work and communication was outstanding.",
  },
  {
    name: "Priya Mehta",
    company: "LocalBiz Hub",
    text: "Our new website has tripled our inbound leads. The team really understood our vision and executed perfectly.",
  },
  {
    name: "Rohan Gupta",
    company: "Creator Studio",
    text: "Exceptional UI/UX work. Our app's user retention improved by 60% after the redesign.",
  },
];

const faqs = [
  {
    q: "How much does a project cost?",
    a: "We provide custom quotes based on your specific requirements, scope, and timeline. Contact us for a free consultation and we'll give you a transparent breakdown.",
  },
  {
    q: "How long does a typical project take?",
    a: "Timelines vary by project complexity. A landing page might take 1-2 weeks, while a full web app can take 4-12 weeks. We'll give you a clear timeline during our consultation.",
  },
  {
    q: "Do you work with startups?",
    a: "Absolutely. We love working with early-stage startups and have tailored packages to help you build your MVP and scale.",
  },
  {
    q: "Will I own the code and designs?",
    a: "Yes, 100%. Upon project completion and final payment, all code, designs, and assets belong to you entirely.",
  },
  {
    q: "Do you offer ongoing support?",
    a: "Yes, we offer maintenance and support packages so your product stays up-to-date, secure, and running smoothly.",
  },
  {
    q: "What information do you need to get started?",
    a: "A brief description of your project, target audience, rough timeline, and any reference sites or designs you like. That's all we need for an initial consultation.",
  },
];

export default function HomePage() {
  return (
    <main>
      {/* ── Hero ── */}
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{ paddingTop: "80px" }}
      >
        <ParticleCanvas />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 50% 0%, rgba(88,166,255,0.12) 0%, rgba(139,92,246,0.06) 50%, transparent 70%)",
          }}
        />
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <div className="section-label mb-6">
            <Zap size={12} />
            Digital Solutions Agency
          </div>
          <h1
            className="text-5xl md:text-7xl font-bold leading-tight mb-6"
            style={{ letterSpacing: "-0.03em" }}
          >
            We Build <span className="gradient-text">Digital Solutions</span>
            <br />
            That Work
          </h1>
          <p
            className="text-lg md:text-xl max-w-2xl mx-auto mb-10"
            style={{ color: "#8B949E", lineHeight: 1.7 }}
          >
            Helping startups, businesses, and creators build, grow, and scale
            online. From web apps to brand identities — we deliver results.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="btn-primary">
              <Zap size={16} /> Start Your Project
            </Link>
            <a
              href="https://wa.me/919111376314?text=Hi%2C%20I%27d%20like%20a%20free%20consultation"
              target="_blank"
              rel="noreferrer"
              className="btn-secondary"
            >
              <MessageCircle size={16} /> Free Consultation
            </a>
            <Link to="/portfolio" className="btn-ghost">
              View Portfolio <ArrowRight size={16} />
            </Link>
          </div>
        </div>
        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
          style={{ color: "#58A6FF", opacity: 0.6 }}
        >
          <ChevronDown size={24} />
        </div>
      </section>

      {/* ── Trusted By ── */}
      <section
        className="py-16"
        style={{
          borderTop: "1px solid rgba(48,54,61,0.8)",
          borderBottom: "1px solid rgba(48,54,61,0.8)",
        }}
      >
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p
            className="text-sm font-semibold tracking-widest uppercase mb-8"
            style={{ color: "#8B949E" }}
          >
            Trusted by growing businesses
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            {[
              "TechStartup Co.",
              "LocalBiz Hub",
              "Creator Studio",
              "ScaleUp Ventures",
              "Digital Agency X",
            ].map((name) => (
              <span
                key={name}
                className="tech-badge"
                style={{ fontSize: "0.85rem", padding: "8px 20px" }}
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services ── */}
      <section className="py-24 max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="section-label">
            <Code2 size={12} /> What We Do
          </span>
          <h2
            className="text-4xl md:text-5xl font-bold mt-2"
            style={{ letterSpacing: "-0.02em" }}
          >
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="mt-4 text-base" style={{ color: "#8B949E" }}>
            Everything you need to build and grow your digital presence.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s) => (
            <div key={s.title} className="ss-card p-6">
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                style={{ background: "rgba(88,166,255,0.1)", color: "#58A6FF" }}
              >
                {s.icon}
              </div>
              <h3 className="font-semibold text-base mb-2">{s.title}</h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "#8B949E" }}
              >
                {s.desc}
              </p>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link to="/services" className="btn-secondary">
            View All Services <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* ── Problem → Solution ── */}
      <section
        className="py-24"
        style={{
          background: "#161B22",
          borderTop: "1px solid rgba(48,54,61,0.8)",
          borderBottom: "1px solid rgba(48,54,61,0.8)",
        }}
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="section-label">
              <Zap size={12} /> Why It Matters
            </span>
            <h2
              className="text-4xl font-bold mt-2"
              style={{ letterSpacing: "-0.02em" }}
            >
              The <span className="gradient-text">Problem & Solution</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div
              className="ss-card p-8"
              style={{ borderColor: "rgba(239,68,68,0.3)" }}
            >
              <div className="text-red-400 font-bold text-sm tracking-widest uppercase mb-4">
                The Problem
              </div>
              {[
                "Outdated or non-existent digital presence",
                "Poor user experience losing potential customers",
                "Slow, buggy applications damaging your brand",
                "Lack of technical expertise on your team",
                "High agency costs with low-quality results",
              ].map((p) => (
                <div key={p} className="flex items-start gap-3 mb-3">
                  <span className="mt-1 text-red-400 flex-shrink-0">✗</span>
                  <span className="text-sm" style={{ color: "#8B949E" }}>
                    {p}
                  </span>
                </div>
              ))}
            </div>
            <div
              className="ss-card p-8"
              style={{ borderColor: "rgba(88,166,255,0.3)" }}
            >
              <div
                className="font-bold text-sm tracking-widest uppercase mb-4"
                style={{ color: "#58A6FF" }}
              >
                Our Solution
              </div>
              {[
                "Modern, fast websites & apps built to convert",
                "UX-first design that delights your users",
                "Clean, maintainable code that scales",
                "A dedicated expert team behind every project",
                "Transparent, fair pricing with real results",
              ].map((s) => (
                <div key={s} className="flex items-start gap-3 mb-3">
                  <CheckCircle2
                    size={16}
                    className="mt-0.5 flex-shrink-0"
                    style={{ color: "#58A6FF" }}
                  />
                  <span className="text-sm" style={{ color: "#8B949E" }}>
                    {s}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Portfolio Preview ── */}
      <section className="py-24 max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="section-label">
            <Star size={12} /> Our Work
          </span>
          <h2
            className="text-4xl md:text-5xl font-bold mt-2"
            style={{ letterSpacing: "-0.02em" }}
          >
            Portfolio <span className="gradient-text">Projects</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioProjects.map((p) => (
            <div
              key={p.name}
              className="ss-card overflow-hidden group"
              style={{
                transition:
                  "transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.transform =
                  "translateY(-6px)";
                (e.currentTarget as HTMLDivElement).style.boxShadow =
                  "0 0 0 1px rgba(88,166,255,0.5), 0 12px 40px rgba(88,166,255,0.15)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.transform =
                  "translateY(0)";
                (e.currentTarget as HTMLDivElement).style.boxShadow = "";
              }}
            >
              {/* Project Image */}
              {p.img ? (
                <img
                  src={p.img}
                  alt={p.name}
                  className="w-full h-48 object-cover"
                  style={{ borderBottom: "1px solid rgba(48,54,61,0.8)" }}
                />
              ) : (
                <div
                  className="w-full h-48 flex items-center justify-center relative overflow-hidden"
                  style={{
                    background:
                      "linear-gradient(135deg, #0D1117 0%, #1a1f35 40%, #161B22 100%)",
                    borderBottom: "1px solid rgba(48,54,61,0.8)",
                  }}
                >
                  {/* Grid pattern overlay */}
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      backgroundImage:
                        "linear-gradient(rgba(88,166,255,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(88,166,255,0.07) 1px, transparent 1px)",
                      backgroundSize: "28px 28px",
                    }}
                  />
                  <div className="relative z-10 text-center px-4">
                    <div
                      className="text-3xl font-bold mb-1"
                      style={{
                        background: "linear-gradient(135deg, #58A6FF, #8B5CF6)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                      }}
                    >
                      SS
                    </div>
                    <div
                      className="text-xs font-medium"
                      style={{ color: "#58A6FF", letterSpacing: "0.1em" }}
                    >
                      SPARK STATION
                    </div>
                  </div>
                </div>
              )}

              {/* Card Content */}
              <div className="p-5 flex flex-col gap-3">
                <h3
                  className="font-semibold text-sm leading-snug"
                  style={{ color: "#E6EDF3" }}
                >
                  {p.name}
                </h3>
                <p
                  className="text-xs leading-relaxed"
                  style={{ color: "#8B949E" }}
                >
                  {p.desc}
                </p>
                {/* Tech Stack Badges */}
                <div className="flex flex-wrap gap-1.5 mt-1">
                  {p.tags.map((t) => (
                    <span key={t} className="tech-badge">
                      {t}
                    </span>
                  ))}
                </div>
                {/* Live Preview Button */}
                <a
                  href={p.live}
                  target={p.live !== "#" ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-lg self-start"
                  style={{
                    background: "rgba(88,166,255,0.1)",
                    color: "#58A6FF",
                    border: "1px solid rgba(88,166,255,0.3)",
                    transition:
                      "background 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease",
                    textDecoration: "none",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.background =
                      "rgba(88,166,255,0.18)";
                    (e.currentTarget as HTMLAnchorElement).style.boxShadow =
                      "0 0 14px rgba(88,166,255,0.35)";
                    (e.currentTarget as HTMLAnchorElement).style.borderColor =
                      "rgba(88,166,255,0.6)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.background =
                      "rgba(88,166,255,0.1)";
                    (e.currentTarget as HTMLAnchorElement).style.boxShadow = "";
                    (e.currentTarget as HTMLAnchorElement).style.borderColor =
                      "rgba(88,166,255,0.3)";
                  }}
                >
                  <ExternalLink size={12} />
                  {p.liveLabel}
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link to="/portfolio" className="btn-secondary">
            View All Projects <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* ── Why Choose Us ── */}
      <section
        className="py-24"
        style={{
          background: "#161B22",
          borderTop: "1px solid rgba(48,54,61,0.8)",
          borderBottom: "1px solid rgba(48,54,61,0.8)",
        }}
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="section-label">
              <CheckCircle2 size={12} /> Why Us
            </span>
            <h2
              className="text-4xl font-bold mt-2"
              style={{ letterSpacing: "-0.02em" }}
            >
              Why Choose <span className="gradient-text">Spark Station</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                icon: <Zap size={24} />,
                title: "Fast Delivery",
                desc: "We move quickly without cutting corners. Your deadlines are our deadlines.",
              },
              {
                icon: <Code2 size={24} />,
                title: "Quality Code",
                desc: "Clean, documented, maintainable code. Built to last and scale.",
              },
              {
                icon: <TrendingUp size={24} />,
                title: "Custom Pricing",
                desc: "No cookie-cutter packages. Fair, transparent quotes tailored to you.",
              },
              {
                icon: <Users size={24} />,
                title: "Ongoing Support",
                desc: "We don't disappear after launch. We're here for the long haul.",
              },
            ].map((item) => (
              <div key={item.title} className="ss-card p-6 text-center">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(88,166,255,0.15), rgba(139,92,246,0.15))",
                    color: "#58A6FF",
                  }}
                >
                  {item.icon}
                </div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm" style={{ color: "#8B949E" }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Team ── */}
      <section className="py-24 max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="section-label">
            <Users size={12} /> The Team
          </span>
          <h2
            className="text-4xl font-bold mt-2"
            style={{ letterSpacing: "-0.02em" }}
          >
            Meet the <span className="gradient-text">People</span>
          </h2>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {team.map((m) => (
            <div key={m.name} className="ss-card p-5 text-center">
              <img
                src={m.img}
                alt={m.name}
                className="w-16 h-16 rounded-full mx-auto mb-3 object-cover"
                style={{ border: "2px solid rgba(88,166,255,0.3)" }}
              />
              <div className="font-semibold text-sm">{m.name}</div>
              <div className="text-xs mt-1" style={{ color: "#8B949E" }}>
                {m.role}
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link to="/team" className="btn-secondary">
            Meet Full Team <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* ── Stats ── */}
      <section
        className="py-24"
        style={{
          background: "#161B22",
          borderTop: "1px solid rgba(48,54,61,0.8)",
          borderBottom: "1px solid rgba(48,54,61,0.8)",
        }}
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { target: 50, suffix: "+", label: "Projects Delivered" },
              { target: 100, suffix: "%", label: "Client Satisfaction" },
              { target: 4, suffix: "+", label: "Expert Team Members" },
              { target: 2, suffix: "+", label: "Years Experience" },
            ].map((s) => (
              <div key={s.label}>
                <AnimatedCounter target={s.target} suffix={s.suffix} />
                <div className="text-sm mt-2" style={{ color: "#8B949E" }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="py-24 max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="section-label">
            <Star size={12} /> Social Proof
          </span>
          <h2
            className="text-4xl font-bold mt-2"
            style={{ letterSpacing: "-0.02em" }}
          >
            What Clients <span className="gradient-text">Say</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="ss-card p-6">
              <div className="flex mb-3">
                {[1, 2, 3, 4, 5].map((n) => (
                  <Star
                    key={n}
                    size={14}
                    fill="#58A6FF"
                    style={{ color: "#58A6FF" }}
                  />
                ))}
              </div>
              <p
                className="text-sm leading-relaxed mb-4"
                style={{ color: "#8B949E" }}
              >
                " {t.text} "
              </p>
              <div>
                <div className="font-semibold text-sm">{t.name}</div>
                <div className="text-xs mt-0.5" style={{ color: "#58A6FF" }}>
                  {t.company}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── FAQ ── */}
      <section
        className="py-24"
        style={{
          background: "#161B22",
          borderTop: "1px solid rgba(48,54,61,0.8)",
          borderBottom: "1px solid rgba(48,54,61,0.8)",
        }}
      >
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="section-label">FAQ</span>
            <h2
              className="text-4xl font-bold mt-2"
              style={{ letterSpacing: "-0.02em" }}
            >
              Common <span className="gradient-text">Questions</span>
            </h2>
          </div>
          <div className="ss-card px-6">
            {faqs.map((f) => (
              <FAQItem key={f.q} q={f.q} a={f.a} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="py-24 max-w-6xl mx-auto px-6">
        <div
          className="ss-card p-12 text-center"
          style={{
            background:
              "linear-gradient(135deg, rgba(88,166,255,0.08), rgba(139,92,246,0.08))",
            borderColor: "rgba(88,166,255,0.2)",
          }}
        >
          <h2 className="text-4xl font-bold mb-4">
            Ready to <span className="gradient-text">Start Your Project?</span>
          </h2>
          <p className="text-base mb-8" style={{ color: "#8B949E" }}>
            Let's build something great together. Get in touch for a free
            consultation.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="btn-primary">
              <Zap size={16} /> Start Your Project
            </Link>
            <a
              href="https://wa.me/919111376314?text=Hi%2C%20I%27d%20like%20a%20free%20consultation"
              target="_blank"
              rel="noreferrer"
              className="btn-secondary"
            >
              <MessageCircle size={16} /> Free Consultation
            </a>
          </div>
        </div>
      </section>

      {/* ── Contact Cards ── */}
      <section
        className="py-16"
        style={{ borderTop: "1px solid rgba(48,54,61,0.8)" }}
      >
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <a
              href="https://wa.me/919111376314"
              target="_blank"
              rel="noreferrer"
              className="ss-card p-6 text-center no-underline"
            >
              <MessageCircle
                size={28}
                className="mx-auto mb-3"
                style={{ color: "#25D366" }}
              />
              <div className="font-semibold mb-1">WhatsApp</div>
              <div className="text-sm" style={{ color: "#8B949E" }}>
                +91 9111376314
              </div>
              <div className="text-xs mt-1" style={{ color: "#8B949E" }}>
                Saksham Pandey
              </div>
            </a>
            <a
              href="tel:+917224935780"
              className="ss-card p-6 text-center no-underline"
            >
              <Phone
                size={28}
                className="mx-auto mb-3"
                style={{ color: "#58A6FF" }}
              />
              <div className="font-semibold mb-1">Call Us</div>
              <div className="text-sm" style={{ color: "#8B949E" }}>
                +91 7224935780
              </div>
              <div className="text-xs mt-1" style={{ color: "#8B949E" }}>
                Manas
              </div>
            </a>
            <a
              href="mailto:sparkstation.x@gmail.com"
              className="ss-card p-6 text-center no-underline"
            >
              <Mail
                size={28}
                className="mx-auto mb-3"
                style={{ color: "#8B5CF6" }}
              />
              <div className="font-semibold mb-1">Email</div>
              <div className="text-sm" style={{ color: "#8B949E" }}>
                sparkstation.x@gmail.com
              </div>
              <div className="text-xs mt-1" style={{ color: "#8B949E" }}>
                Business Inquiries
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer
        className="py-10"
        style={{
          borderTop: "1px solid rgba(48,54,61,0.8)",
          background: "#0D1117",
        }}
      >
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <img
              src="/assets/generated/spark-station-logo-transparent.dim_200x200.png"
              alt="Logo"
              className="w-7 h-7"
            />
            <span className="font-bold" style={{ color: "#E6EDF3" }}>
              Spark Station
            </span>
          </div>
          <div className="flex gap-6 text-sm" style={{ color: "#8B949E" }}>
            <Link
              to="/services"
              style={{ color: "#8B949E", textDecoration: "none" }}
            >
              Services
            </Link>
            <Link
              to="/portfolio"
              style={{ color: "#8B949E", textDecoration: "none" }}
            >
              Portfolio
            </Link>
            <Link
              to="/team"
              style={{ color: "#8B949E", textDecoration: "none" }}
            >
              Team
            </Link>
            <Link
              to="/contact"
              style={{ color: "#8B949E", textDecoration: "none" }}
            >
              Contact
            </Link>
          </div>
          <div className="text-sm" style={{ color: "#8B949E" }}>
            © 2026 Spark Station. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}
