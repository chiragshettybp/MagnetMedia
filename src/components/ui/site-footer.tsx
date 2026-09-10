import { Link } from "react-router-dom";
import { ArrowRight, Mail } from "lucide-react";
import {
  footerServices,
  footerSolutions,
  footerAi,
  footerCompany,
  footerResources,
  footerLegal,
} from "@/lib/site-data";

const linkCls = "text-xs transition-colors";
const linkStyle = { color: "rgba(225, 224, 204, 0.7)" as const };

const columns = [
  { title: "Services", links: footerServices },
  { title: "Solutions", links: footerSolutions },
  { title: "AI", links: footerAi },
  { title: "Company", links: footerCompany },
  { title: "Explore", links: footerResources },
];

export const SiteFooter = () => {
  return (
    <footer className="relative w-full bg-black" style={{ color: "#E1E0CC" }}>
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_2fr]">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <img src="/logo.png" alt="OutMaded logo" className="h-10 w-10 rounded-full object-cover" />
              <div>
                <p className="text-xl font-medium tracking-tight">OutMaded</p>
                <p className="text-xs" style={{ color: "rgba(225, 224, 204, 0.6)" }}>
                  Ideas into products. Powered by AI.
                </p>
              </div>
            </div>
            <p className="max-w-sm text-sm" style={{ color: "rgba(225, 224, 204, 0.7)" }}>
              OutMaded is a student-led software and innovation startup that turns ideas into real
              digital products using software and AI.
            </p>
            <Link
              to="/contact"
              className="group inline-flex w-fit items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-black transition-all hover:gap-3"
            >
              <Mail className="h-4 w-4" />
              Get in touch
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {columns.map((col) => (
              <div key={col.title}>
                <p className="mb-3 text-xs font-medium uppercase tracking-widest" style={{ color: "rgba(225, 224, 204, 0.45)" }}>
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
          <p className="text-xs" style={{ color: "rgba(225, 224, 204, 0.5)" }}>
            © {new Date().getFullYear()} OutMaded. Student-led. Built in the open.
          </p>
          <div className="flex items-center gap-5">
            {footerLegal.map((l) => (
              <Link key={l.to} to={l.to} className={`${linkCls} hover:text-white`} style={linkStyle}>
                {l.label}
              </Link>
            ))}
            <Link
              to="/start-project"
              className="inline-flex items-center gap-1.5 text-xs font-medium hover:text-white"
              style={{ color: "#E1E0CC" }}
            >
              Start a Project
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};