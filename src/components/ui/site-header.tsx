import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { ArrowRight, ChevronDown, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { services, solutions, aiTopics } from "@/lib/site-data";
import { Pressable } from "@/components/ui/pressable";

type Drop = { label: string; to: string }[];

const dropdowns: { name: string; to: string; items: Drop }[] = [
  { name: "Services", to: "/services", items: services.map((s) => ({ label: s.name, to: `/services/${s.slug}` })) },
  { name: "Solutions", to: "/solutions", items: solutions.map((s) => ({ label: s.name, to: `/solutions/${s.slug}` })) },
  { name: "AI", to: "/ai", items: aiTopics.map((a) => ({ label: a.name, to: `/ai/${a.slug}` })) },
];

const directLinks = [
  { name: "Work", to: "/work" },
  { name: "Products", to: "/products" },
  { name: "About", to: "/about" },
];

const hover = {
  color: "rgba(225, 224, 204, 0.8)" as const,
};

export const SiteHeader = () => {
  const [openDrop, setOpenDrop] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(() => (typeof window !== "undefined" ? window.scrollY > 12 : false));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b backdrop-blur-md transition-[background-color,border-color,box-shadow] duration-300 ${
        scrolled
          ? "border-white/15 bg-black/95 shadow-[0_8px_24px_rgba(0,0,0,0.35)]"
          : "border-white/10 bg-black/80 shadow-none"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 md:px-8">
        <Link to="/" className="flex items-center gap-2.5" onClick={() => setMobileOpen(false)}>
          <img src="/logo.png" alt="OutMaded logo" className="h-7 w-7 rounded-full object-cover" />
          <span className="text-sm font-medium tracking-tight" style={{ color: "#E1E0CC" }}>
            OutMaded
          </span>
        </Link>

        <div className="hidden items-center gap-6 lg:flex">
          {dropdowns.map((d) => (
            <div key={d.name} className="relative" onMouseEnter={() => setOpenDrop(d.name)} onMouseLeave={() => setOpenDrop(null)}>
              <Link
                to={d.to}
                className="flex items-center gap-1 transition-colors duration-200 hover:text-white text-xs sm:text-sm"
                style={hover}
              >
                {d.name}
                <ChevronDown className="h-3.5 w-3.5" />
              </Link>
              <AnimatePresence>
                {openDrop === d.name && (
                  <motion.div
                    initial={{ opacity: 0, y: -4, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -4, scale: 0.98 }}
                    transition={{ duration: 0.18, ease: [0.25, 0.1, 0.25, 1] }}
                    className="absolute left-0 top-full pt-3"
                  >
                    <div className="flex w-56 flex-col gap-1 rounded-2xl border border-white/10 bg-black p-2 shadow-2xl">
                      {d.items.map((i) => (
                        <Link
                          key={i.to}
                          to={i.to}
                          className="rounded-xl px-3 py-2 text-xs transition-colors duration-200 hover:bg-white/5 hover:text-white"
                          style={{ color: "rgba(225, 224, 204, 0.8)" }}
                        >
                          {i.label}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
          {directLinks.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className="transition-colors duration-200 hover:text-white text-xs sm:text-sm"
              style={hover}
            >
              {l.name}
            </NavLink>
          ))}
        </div>

        <div className="hidden lg:block">
          <Link to="/start-project" className="inline-flex">
            <Pressable
              pressScale={0.97}
              className="group inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 py-1.5 pl-4 pr-1.5 text-xs font-medium transition-all duration-200 hover:gap-3 hover:bg-white/10 sm:text-sm"
              style={{ color: "#E1E0CC" }}
            >
              Start a Project
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary">
                <ArrowRight className="h-3.5 w-3.5" style={{ color: "#0a0a0a" }} />
              </span>
            </Pressable>
          </Link>
        </div>

        <Pressable
          pressScale={0.92}
          className="flex h-11 w-11 items-center justify-center rounded-xl lg:hidden"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <X className="h-5 w-5" style={{ color: "#E1E0CC" }} />
          ) : (
            <Menu className="h-5 w-5" style={{ color: "#E1E0CC" }} />
          )}
        </Pressable>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
            className="border-t border-white/10 bg-black lg:hidden"
          >
            <div className="flex max-h-[70vh] flex-col gap-1 overflow-y-auto px-4 py-4">
              <Link to="/" className="px-2 py-2 text-sm" style={{ color: "#E1E0CC" }} onClick={() => setMobileOpen(false)}>
                Home
              </Link>
              {dropdowns.map((d) => (
                <div key={d.name}>
                  <Link to={d.to} className="block px-2 py-2 text-sm font-medium" style={{ color: "#E1E0CC" }} onClick={() => setMobileOpen(false)}>
                    {d.name}
                  </Link>
                  {d.items.map((i) => (
                    <Link
                      key={i.to}
                      to={i.to}
                      className="block px-4 py-1.5 text-xs"
                      style={{ color: "rgba(225, 224, 204, 0.7)" }}
                      onClick={() => setMobileOpen(false)}
                    >
                      {i.label}
                    </Link>
                  ))}
                </div>
              ))}
              {directLinks.map((l) => (
                <Link key={l.to} to={l.to} className="px-2 py-2 text-sm" style={{ color: "#E1E0CC" }} onClick={() => setMobileOpen(false)}>
                  {l.name}
                </Link>
              ))}
              <Link
                to="/start-project"
                className="mt-2 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-black"
                onClick={() => setMobileOpen(false)}
              >
                Start a Project
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
