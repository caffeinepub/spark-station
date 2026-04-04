import {
  CheckCircle2,
  ExternalLink,
  Mail,
  MessageCircle,
  Phone,
} from "lucide-react";
import { useState } from "react";
import { Service } from "../backend";
import { useActor } from "../hooks/useActor";

const inputStyle: React.CSSProperties = {
  width: "100%",
  background: "#0D1117",
  border: "1px solid rgba(48,54,61,0.8)",
  borderRadius: "8px",
  padding: "12px 16px",
  color: "#E6EDF3",
  fontSize: "0.9rem",
  outline: "none",
};

function focusBorder(
  e: React.FocusEvent<
    HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
  >,
) {
  e.target.style.borderColor = "rgba(88,166,255,0.5)";
}
function blurBorder(
  e: React.FocusEvent<
    HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
  >,
) {
  e.target.style.borderColor = "rgba(48,54,61,0.8)";
}

export default function ContactPage() {
  const { actor } = useActor();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "" as Service | "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const serviceOptions: { value: Service; label: string }[] = [
    { value: Service.webDevelopment, label: "Web Development" },
    { value: Service.appDevelopment, label: "App Development" },
    { value: Service.branding, label: "Branding & Identity" },
    { value: Service.productDesign, label: "Product Design" },
    { value: Service.consultancy, label: "Technical Consultancy" },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.service) return setError("Please select a service.");
    if (!actor) return setError("Not connected. Please try again.");
    setError("");
    setSubmitting(true);
    try {
      await actor.sendInquiry(
        form.name,
        form.email,
        form.phone || null,
        form.service as Service,
        form.message,
      );
      setSuccess(true);
      setForm({ name: "", email: "", phone: "", service: "", message: "" });
    } catch {
      setError(
        "Something went wrong. Please try again or reach us on WhatsApp.",
      );
    } finally {
      setSubmitting(false);
    }
  };

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
          <span className="section-label">Get In Touch</span>
          <h1
            className="text-5xl font-bold mt-2 mb-4"
            style={{ letterSpacing: "-0.03em" }}
          >
            Let’s <span className="gradient-text">Connect</span>
          </h1>
          <p className="text-lg" style={{ color: "#8B949E" }}>
            Have a project in mind? We’d love to hear from you. Reach out and
            we’ll get back to you within 24 hours.
          </p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="max-w-5xl mx-auto px-6 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <a
            href="https://wa.me/919111376314?text=Hi%2C%20I%27m%20interested%20in%20Spark%20Station%27s%20services"
            target="_blank"
            rel="noreferrer"
            className="ss-card p-6 text-center"
            style={{ textDecoration: "none" }}
          >
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4"
              style={{ background: "rgba(37,211,102,0.1)" }}
            >
              <MessageCircle size={24} style={{ color: "#25D366" }} />
            </div>
            <h3 className="font-semibold mb-1">WhatsApp</h3>
            <p className="text-sm" style={{ color: "#8B949E" }}>
              +91 9111376314
            </p>
            <p className="text-xs mt-0.5" style={{ color: "#8B949E" }}>
              Saksham Pandey · Consultation
            </p>
            <span
              className="inline-flex items-center gap-1 mt-3 text-xs"
              style={{ color: "#25D366" }}
            >
              Chat Now <ExternalLink size={10} />
            </span>
          </a>

          <a
            href="tel:+917224935780"
            className="ss-card p-6 text-center"
            style={{ textDecoration: "none" }}
          >
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4"
              style={{ background: "rgba(88,166,255,0.1)" }}
            >
              <Phone size={24} style={{ color: "#58A6FF" }} />
            </div>
            <h3 className="font-semibold mb-1">Call Us</h3>
            <p className="text-sm" style={{ color: "#8B949E" }}>
              +91 7224935780
            </p>
            <p className="text-xs mt-0.5" style={{ color: "#8B949E" }}>
              Manas · Client Relations
            </p>
            <span
              className="inline-flex items-center gap-1 mt-3 text-xs"
              style={{ color: "#58A6FF" }}
            >
              Call Now <ExternalLink size={10} />
            </span>
          </a>

          <a
            href="mailto:sparkstation.x@gmail.com"
            className="ss-card p-6 text-center"
            style={{ textDecoration: "none" }}
          >
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4"
              style={{ background: "rgba(139,92,246,0.1)" }}
            >
              <Mail size={24} style={{ color: "#8B5CF6" }} />
            </div>
            <h3 className="font-semibold mb-1">Email</h3>
            <p className="text-sm" style={{ color: "#8B949E" }}>
              sparkstation.x@gmail.com
            </p>
            <p className="text-xs mt-0.5" style={{ color: "#8B949E" }}>
              Business Inquiries
            </p>
            <span
              className="inline-flex items-center gap-1 mt-3 text-xs"
              style={{ color: "#8B5CF6" }}
            >
              Send Email <ExternalLink size={10} />
            </span>
          </a>
        </div>
      </section>

      {/* Inquiry Form */}
      <section className="max-w-3xl mx-auto px-6 pb-20">
        <div className="ss-card p-8">
          <h2 className="text-2xl font-bold mb-2">Send Us a Project Brief</h2>
          <p className="text-sm mb-8" style={{ color: "#8B949E" }}>
            Fill out the form below and we’ll get back to you with a custom
            quote within 24 hours.
          </p>

          {success ? (
            <div className="text-center py-12">
              <CheckCircle2
                size={48}
                className="mx-auto mb-4"
                style={{ color: "#3FB950" }}
              />
              <h3 className="text-xl font-bold mb-2">Message Received!</h3>
              <p style={{ color: "#8B949E" }}>
                Thanks for reaching out. We’ll get back to you within 24 hours.
              </p>
              <button
                type="button"
                className="btn-secondary mt-6"
                onClick={() => setSuccess(false)}
              >
                Send Another
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-sm font-medium mb-2"
                    style={{ color: "#8B949E" }}
                  >
                    Name *
                  </label>
                  <input
                    id="contact-name"
                    style={inputStyle}
                    type="text"
                    placeholder="Your full name"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    onFocus={focusBorder}
                    onBlur={blurBorder}
                  />
                </div>
                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-sm font-medium mb-2"
                    style={{ color: "#8B949E" }}
                  >
                    Email *
                  </label>
                  <input
                    id="contact-email"
                    style={inputStyle}
                    type="email"
                    placeholder="your@email.com"
                    required
                    value={form.email}
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                    onFocus={focusBorder}
                    onBlur={blurBorder}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                <div>
                  <label
                    htmlFor="contact-phone"
                    className="block text-sm font-medium mb-2"
                    style={{ color: "#8B949E" }}
                  >
                    Phone <span style={{ fontWeight: 400 }}>(optional)</span>
                  </label>
                  <input
                    id="contact-phone"
                    style={inputStyle}
                    type="tel"
                    placeholder="+91 98765 43210"
                    value={form.phone}
                    onChange={(e) =>
                      setForm({ ...form, phone: e.target.value })
                    }
                    onFocus={focusBorder}
                    onBlur={blurBorder}
                  />
                </div>
                <div>
                  <label
                    htmlFor="contact-service"
                    className="block text-sm font-medium mb-2"
                    style={{ color: "#8B949E" }}
                  >
                    Service *
                  </label>
                  <select
                    id="contact-service"
                    style={{ ...inputStyle, cursor: "none" }}
                    required
                    value={form.service}
                    onChange={(e) =>
                      setForm({ ...form, service: e.target.value as Service })
                    }
                    onFocus={focusBorder}
                    onBlur={blurBorder}
                  >
                    <option value="">Select a service...</option>
                    {serviceOptions.map((o) => (
                      <option key={o.value} value={o.value}>
                        {o.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="mb-5">
                <label
                  htmlFor="contact-message"
                  className="block text-sm font-medium mb-2"
                  style={{ color: "#8B949E" }}
                >
                  Message *
                </label>
                <textarea
                  id="contact-message"
                  style={{
                    ...inputStyle,
                    minHeight: "140px",
                    resize: "vertical",
                  }}
                  placeholder="Tell us about your project — goals, timeline, budget range..."
                  required
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  onFocus={focusBorder}
                  onBlur={blurBorder}
                />
              </div>

              {error && (
                <div
                  className="mb-4 p-3 rounded-lg text-sm"
                  style={{
                    background: "rgba(239,68,68,0.1)",
                    border: "1px solid rgba(239,68,68,0.3)",
                    color: "#f87171",
                  }}
                >
                  {error}
                </div>
              )}

              <button
                type="submit"
                className="btn-primary w-full justify-center"
                disabled={submitting}
              >
                {submitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          )}
        </div>

        {/* Google Form Link */}
        <div className="mt-6 ss-card p-5 flex items-center justify-between flex-wrap gap-4">
          <div>
            <div className="font-medium text-sm">Prefer a structured form?</div>
            <div className="text-sm mt-0.5" style={{ color: "#8B949E" }}>
              Fill our detailed project brief for a more thorough consultation.
            </div>
          </div>
          <a
            href="https://forms.google.com"
            target="_blank"
            rel="noreferrer"
            className="btn-ghost text-sm flex-shrink-0"
          >
            Open Google Form <ExternalLink size={14} />
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
