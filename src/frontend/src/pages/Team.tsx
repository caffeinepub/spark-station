import { Link } from "@tanstack/react-router";
import { Zap } from "lucide-react";

const members = [
  {
    img: "/assets/generated/team-saksham-real.jpg",
    name: "Saksham Pandey",
    role: "Founder & Lead Developer",
    bio: "Building robust, scalable web solutions. Saksham founded Spark Station with a vision to make world-class digital solutions accessible to every business.",
    experience: "3+ years",
    contact: "wa.me/919111376314",
    skills: ["React", "Node.js", "TypeScript", "Web3 / ICP", "System Design"],
    color: "#58A6FF",
  },
  {
    img: "/assets/generated/team-shashwat-real.jpg",
    name: "Shashwat Rai",
    role: "Finance & Operations Manager",
    bio: "Managing resources and business strategy. Shashwat keeps the business running smoothly, ensuring every project is delivered on budget and on time.",
    experience: "2+ years",
    contact: null,
    skills: [
      "Financial Planning",
      "Business Strategy",
      "Operations",
      "Risk Management",
    ],
    color: "#8B5CF6",
  },
  {
    img: "/assets/generated/team-niket-real.jpg",
    name: "Niket",
    role: "Marketing & Content Strategist",
    bio: "Crafting compelling narratives and growth strategies. Niket drives brand awareness and positions Spark Station's clients for digital success.",
    experience: "2+ years",
    contact: null,
    skills: [
      "Content Strategy",
      "SEO",
      "Social Media",
      "Brand Voice",
      "Analytics",
    ],
    color: "#F78166",
  },
  {
    img: "/assets/generated/team-manas.dim_400x400.jpg",
    name: "Manas",
    role: "Client Relations Manager",
    bio: "Ensuring exceptional client experience from first contact to post-launch. Manas is your dedicated point of contact for all project communications.",
    experience: "2+ years",
    contact: "tel:+917224935780",
    skills: [
      "Client Communication",
      "Project Management",
      "Customer Success",
      "Presentations",
    ],
    color: "#3FB950",
  },
];

export default function TeamPage() {
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
          <span className="section-label">The People</span>
          <h1
            className="text-5xl font-bold mt-2 mb-4"
            style={{ letterSpacing: "-0.03em" }}
          >
            Meet Our <span className="gradient-text">Team</span>
          </h1>
          <p className="text-lg" style={{ color: "#8B949E" }}>
            A small but mighty team of specialists dedicated to your digital
            success.
          </p>
        </div>
      </section>

      {/* Team Cards */}
      <section className="py-16 max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {members.map((m) => (
            <div key={m.name} className="ss-card p-8">
              <div className="flex items-start gap-5 mb-6">
                <img
                  src={m.img}
                  alt={m.name}
                  className="w-20 h-20 rounded-full object-cover flex-shrink-0"
                  style={{ border: `2px solid ${m.color}40` }}
                />
                <div>
                  <h2 className="text-xl font-bold">{m.name}</h2>
                  <div
                    className="text-sm font-medium mt-0.5"
                    style={{ color: m.color }}
                  >
                    {m.role}
                  </div>
                  <div className="text-xs mt-1" style={{ color: "#8B949E" }}>
                    Experience: {m.experience}
                  </div>
                </div>
              </div>

              <p
                className="text-sm leading-relaxed mb-5"
                style={{ color: "#8B949E" }}
              >
                {m.bio}
              </p>

              <div className="mb-5">
                <div
                  className="text-xs font-semibold uppercase tracking-widest mb-3"
                  style={{ color: "#8B949E" }}
                >
                  Skills
                </div>
                <div className="flex flex-wrap gap-2">
                  {m.skills.map((s) => (
                    <span
                      key={s}
                      className="tech-badge"
                      style={{
                        background: `${m.color}15`,
                        color: m.color,
                        borderColor: `${m.color}30`,
                      }}
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              {m.contact && (
                <a
                  href={
                    m.contact.startsWith("wa")
                      ? `https://${m.contact}`
                      : m.contact
                  }
                  target={m.contact.startsWith("wa") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="btn-ghost text-sm"
                  style={{ width: "fit-content" }}
                >
                  {m.contact.startsWith("wa")
                    ? "Chat on WhatsApp"
                    : "Call Directly"}
                </a>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Join Us */}
      <section
        className="py-20"
        style={{
          background: "#161B22",
          borderTop: "1px solid rgba(48,54,61,0.8)",
        }}
      >
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Want to <span className="gradient-text">Join the Team?</span>
          </h2>
          <p className="mb-8" style={{ color: "#8B949E" }}>
            We're always looking for talented individuals who are passionate
            about building great digital products.
          </p>
          <a href="mailto:sparkstation.x@gmail.com" className="btn-primary">
            <Zap size={16} /> Get in Touch
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
