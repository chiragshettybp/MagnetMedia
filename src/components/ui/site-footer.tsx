import { Link } from "react-router-dom";
import { ArrowRight, Mail } from "lucide-react";
import { Pressable } from "@/components/ui/pressable";
import { Reveal } from "@/components/motion/reveal";
import {
  footerServices,
  footerCompany,
  footerResources,
  footerLegal,
} from "@/lib/site-data";

const linkCls = "text-xs transition-colors duration-200";
const linkStyle = { color: "rgba(192, 192, 192, 0.7)" as const };

const columns = [
  { title: "Services", links: footerServices },
  { title: "Company", links: footerCompany },
  { title: "Explore", links: footerResources },
];

export const SiteFooter = () => {
  return (
    <footer className="relative w-full bg-black" style={{ color: "#C0C0C0" }}>
      <Reveal y={16} duration={0.6} className="mx-auto max-w-7xl px-4 pt-16 pb-safe-4 md:px-8 md:pt-24 md:pb-safe-6">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_2fr]">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <img src="/logo.png" alt="Magnet Media logo" className="h-10 w-10 rounded-full object-cover" />
              <div>
                <p className="text-xl font-medium tracking-tight">Magnet Media</p>
                <p className="text-xs" style={{ color: "rgba(192, 192, 192, 0.6)" }}>
                  Make Brands Magnetic.
                </p>
              </div>
            </div>
            <p className="max-w-sm text-sm" style={{ color: "rgba(192, 192, 192, 0.7)" }}>
              Magnet Media is a creative and performance marketing agency built to help brands get noticed, build attention, and turn attention into growth.
            </p>
            <Link to="/contact" className="inline-flex w-fit">
              <Pressable
                pressScale={0.97}
                className="group inline-flex w-fit items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-black transition-all duration-200 hover:gap-3"
              >
                <Mail className="h-4 w-4" />
                Get in touch
              </Pressable>
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {columns.map((col) => (
              <div key={col.title}>
                <p className="mb-3 text-xs font-medium uppercase tracking-widest" style={{ color: "rgba(192, 192, 192, 0.45)" }}>
                  {col.title}
                </p>
                <ul className="flex flex-col gap-2">
                  {col.links.map((l) => (
                    <li key={l.to}>
                      <Link to={l.to} className={`${linkCls} hover:text-white`} style={linkStyle}>
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs" style={{ color: "rgba(192, 192, 192, 0.5)" }}>
            © {new Date().getFullYear()} Magnet Media. Make Brands Magnetic.
          </p>
          <div className="flex items-center gap-5">
            {footerLegal.map((l) => (
              <Link key={l.to} to={l.to} className={`${linkCls} hover:text-white`} style={linkStyle}>
                {l.label}
              </Link>
            ))}
            <Link
              to="/start-project"
              className="group inline-flex items-center gap-1.5 text-xs font-medium transition-all duration-200 hover:text-white"
              style={{ color: "#C0C0C0" }}
            >
              Start a Project
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </Reveal>
    </footer>
  );
};