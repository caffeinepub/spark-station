import {
  Link,
  Outlet,
  RouterProvider,
  createRootRoute,
  createRoute,
  createRouter,
  useLocation,
} from "@tanstack/react-router";
import { Menu, X, Zap } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import ContactPage from "./pages/Contact";
import HomePage from "./pages/Home";
import PortfolioPage from "./pages/Portfolio";
import ServicesPage from "./pages/Services";
import TeamPage from "./pages/Team";

// ─── Custom Cursor ───────────────────────────────────────────
function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: 0, y: 0 });
  const ring = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };
      if (dotRef.current) {
        dotRef.current.style.left = `${e.clientX}px`;
        dotRef.current.style.top = `${e.clientY}px`;
      }
    };
    const onDown = () => dotRef.current?.classList.add("clicking");
    const onUp = () => dotRef.current?.classList.remove("clicking");

    document.addEventListener("mousemove", onMove);
    document.addEventListener("mousedown", onDown);
    document.addEventListener("mouseup", onUp);

    let raf: number;
    const animate = () => {
      ring.current.x += (pos.current.x - ring.current.x) * 0.12;
      ring.current.y += (pos.current.y - ring.current.y) * 0.12;
      if (ringRef.current) {
        ringRef.current.style.left = `${ring.current.x}px`;
        ringRef.current.style.top = `${ring.current.y}px`;
      }
      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("mouseup", onUp);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot" />
      <div ref={ringRef} className="cursor-ring" />
    </>
  );
}

// ─── Loading Screen ───────────────────────────────────────────
function LoadingScreen({ onDone }: { onDone: () => void }) {
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setFading(true), 1500);
    const t2 = setTimeout(() => onDone(), 2000);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [onDone]);

  return (
    <div className={`loading-screen ${fading ? "fade-out" : ""}`}>
      <div className="loading-logo-pulse flex flex-col items-center gap-3">
        <img
          src="/assets/generated/spark-station-logo-new.png"
          alt="Spark Station"
          className="w-20 h-20"
        />
        <span
          className="text-2xl font-bold tracking-widest"
          style={{ color: "#E6EDF3" }}
        >
          SPARK STATION
        </span>
        <span className="text-sm" style={{ color: "#8B949E" }}>
          Digital Solutions Agency
        </span>
      </div>
      <div className="loading-bar">
        <div className="loading-bar-fill" />
      </div>
    </div>
  );
}

// ─── Navbar ───────────────────────────────────────────────────
const navLinks = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/team", label: "Team" },
  { to: "/contact", label: "Contact" },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const prevPath = useRef(location.pathname);
  useEffect(() => {
    if (prevPath.current !== location.pathname) {
      prevPath.current = location.pathname;
      setOpen(false);
    }
  });

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(13,17,23,0.95)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(48,54,61,0.8)" : "none",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 no-underline">
          <img
            src="/assets/generated/spark-station-logo-new.png"
            alt="Logo"
            className="w-8 h-8"
          />
          <span
            className="font-bold text-lg tracking-tight"
            style={{ color: "#E6EDF3" }}
          >
            Spark Station
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200"
              style={{
                color: location.pathname === link.to ? "#58A6FF" : "#8B949E",
              }}
              activeProps={{ style: { color: "#58A6FF" } }}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex">
          <Link
            to="/contact"
            className="btn-primary"
            style={{ padding: "8px 20px", fontSize: "0.85rem" }}
          >
            <Zap size={14} />
            Start Project
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          type="button"
          className="md:hidden p-2 rounded-lg"
          style={{
            color: "#E6EDF3",
            background: "rgba(88,166,255,0.1)",
            border: "none",
          }}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div
          className="md:hidden px-6 pb-4"
          style={{
            background: "rgba(13,17,23,0.98)",
            borderBottom: "1px solid rgba(48,54,61,0.8)",
          }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="block py-3 text-sm font-medium border-b"
              style={{ color: "#E6EDF3", borderColor: "rgba(48,54,61,0.5)" }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="btn-primary mt-4 w-full justify-center"
            style={{ fontSize: "0.85rem" }}
          >
            Start Project
          </Link>
        </div>
      )}
    </nav>
  );
}

// ─── WhatsApp Float ───────────────────────────────────────────
function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/919111376314?text=Hi%2C%20I%27m%20interested%20in%20Spark%20Station%27s%20services"
      target="_blank"
      rel="noreferrer"
      className="whatsapp-float"
      aria-label="Chat on WhatsApp"
    >
      <span
        style={{
          position: "absolute",
          width: "1px",
          height: "1px",
          overflow: "hidden",
          clip: "rect(0,0,0,0)",
          whiteSpace: "nowrap",
        }}
      >
        Chat on WhatsApp
      </span>
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="white"
        aria-hidden="true"
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    </a>
  );
}

// ─── Root Layout ─────────────────────────────────────────────
function RootLayout() {
  return (
    <div style={{ background: "#0D1117", minHeight: "100vh" }}>
      <Navbar />
      <Outlet />
      <WhatsAppFloat />
    </div>
  );
}

// ─── Router Setup ─────────────────────────────────────────────
const rootRoute = createRootRoute({ component: RootLayout });
const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: HomePage,
});
const servicesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/services",
  component: ServicesPage,
});
const portfolioRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/portfolio",
  component: PortfolioPage,
});
const teamRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/team",
  component: TeamPage,
});
const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/contact",
  component: ContactPage,
});

const routeTree = rootRoute.addChildren([
  homeRoute,
  servicesRoute,
  portfolioRoute,
  teamRoute,
  contactRoute,
]);
const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      <CustomCursor />
      {!loaded && <LoadingScreen onDone={() => setLoaded(true)} />}
      <div style={{ opacity: loaded ? 1 : 0, transition: "opacity 0.3s ease" }}>
        <RouterProvider router={router} />
      </div>
    </>
  );
}
