import { Link } from "react-router-dom";
import { ArrowRight, TrendingUp, Users, Globe, Award } from "lucide-react";
import { PrismaHero } from "@/components/ui/prisma-hero";
import { LazyFooter } from "@/components/ui/lazy-footer";
import { Reveal } from "@/components/motion/reveal";
import { services } from "@/lib/site-data";

const stats = [
  { label: "Campaigns run", value: "30+", icon: TrendingUp },
  { label: "Clients served", value: "20+", icon: Users },
  { label: "Industries", value: "15+", icon: Globe },
  { label: "Average ROAS", value: "5×", icon: Award },
];

export default function Home() {
  return (
    <div className="dark min-h-screen bg-black">
      {/* ---- Hero ---- */}
      <div className="sticky top-0 h-dvh w-full">
        <PrismaHero />
      </div>

      {/* ---- 1. Services Overview ---- */}
      <section className="relative z-10 bg-black">
        <div className="mx-auto max-w-7xl px-4 py-20 md:px-8 md:py-28">
          <Reveal className="mb-12 md:mb-16">
            <p
              className="mb-3 text-xs font-medium uppercase tracking-widest"
              style={{ color: "rgba(192, 192, 192, 0.45)" }}
            >
              What we do
            </p>
            <h2
              className="max-w-3xl text-3xl font-medium tracking-tight sm:text-4xl md:text-5xl"
              style={{ color: "#C0C0C0" }}
            >
              Everything your brand needs to get noticed.
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
            {services.map((s, i) => (
              <Reveal key={s.slug} delay={i * 0.04} y={12}>
                <Link
                  to={`/services/${s.slug}`}
                  className="group flex items-center justify-between gap-6 rounded-2xl border border-white/10 bg-white/[0.02] px-6 py-5 transition-all duration-200 hover:border-white/25 active:scale-[0.99]"
                >
                  <div className="flex items-start gap-4">
                    <span
                      className="mt-0.5 text-xs font-medium"
                      style={{ color: "rgba(192, 192, 192, 0.35)" }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3
                        className="text-base font-medium tracking-tight sm:text-lg"
                        style={{ color: "#C0C0C0" }}
                      >
                        {s.name}
                      </h3>
                      <p
                        className="mt-1 text-sm"
                        style={{ color: "rgba(192, 192, 192, 0.6)" }}
                      >
                        {s.short}
                      </p>
                    </div>
                  </div>
                  <ArrowRight
                    className="h-4 w-4 shrink-0 transition-transform duration-200 group-hover:translate-x-1"
                    style={{ color: "rgba(192, 192, 192, 0.4)" }}
                  />
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---- 2. Social Proof ---- */}
      <section className="relative z-10 bg-black">
        <div className="mx-auto max-w-7xl px-4 py-20 md:px-8 md:py-28">
          <Reveal className="mb-12 md:mb-16">
            <p
              className="mb-3 text-xs font-medium uppercase tracking-widest"
              style={{ color: "rgba(192, 192, 192, 0.45)" }}
            >
              Track record
            </p>
            <h2
              className="max-w-3xl text-3xl font-medium tracking-tight sm:text-4xl md:text-5xl"
              style={{ color: "#C0C0C0" }}
            >
              Performance that speaks for itself.
            </h2>
          </Reveal>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.06}>
                <div className="flex flex-col gap-3 rounded-2xl border border-white/10 bg-white/[0.02] px-5 py-6">
                  <s.icon
                    className="h-5 w-5"
                    style={{ color: "rgba(192, 192, 192, 0.45)" }}
                  />
                  <p
                    className="text-3xl font-medium tracking-tight sm:text-4xl"
                    style={{ color: "#C0C0C0" }}
                  >
                    {s.value}
                  </p>
                  <p
                    className="text-xs"
                    style={{ color: "rgba(192, 192, 192, 0.5)" }}
                  >
                    {s.label}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---- 3. Call to Action ---- */}
      <section className="relative z-10 bg-black">
        <div className="mx-auto max-w-7xl px-4 py-20 md:px-8 md:py-28">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-transparent">
              <div className="noise-overlay pointer-events-none absolute inset-0 opacity-[0.35] mix-blend-overlay" />
              <div className="relative z-10 grid grid-cols-1 gap-10 px-6 py-16 sm:px-10 md:grid-cols-[1fr_auto] md:items-center md:py-20 md:pl-14 md:pr-10">
                <div>
                  <p
                    className="mb-3 text-xs font-medium uppercase tracking-widest"
                    style={{ color: "rgba(192, 192, 192, 0.45)" }}
                  >
                    Ready?
                  </p>
                  <h2
                    className="max-w-2xl text-3xl font-medium tracking-[-0.03em] sm:text-4xl md:text-5xl"
                    style={{ color: "#C0C0C0" }}
                  >
                    Let's make your brand magnetic.
                  </h2>
                  <p
                    className="mt-4 max-w-xl text-sm leading-relaxed sm:text-base"
                    style={{ color: "rgba(192, 192, 192, 0.7)" }}
                  >
                    Tell us about your brand, audience, and goals — we'll figure
                    out the right creative and performance approach to make people
                    stop, watch, and act.
                  </p>
                </div>

                <div className="flex flex-col gap-3">
                  <Link to="/start-project" className="inline-flex w-fit">
                    <span className="group inline-flex items-center gap-2 rounded-full bg-[#C0C0C0] py-2.5 pl-6 pr-2 text-sm font-medium text-black transition-all duration-200 hover:gap-3">
                      Start a project
                      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-black transition-transform duration-200 group-hover:scale-110">
                        <ArrowRight
                          className="h-4 w-4"
                          style={{ color: "#C0C0C0" }}
                        />
                      </span>
                    </span>
                  </Link>
                  <Link
                    to="/contact"
                    className="ml-2 text-sm font-medium transition-colors duration-200 hover:text-white"
                    style={{ color: "rgba(192, 192, 192, 0.6)" }}
                  >
                    Or just say hello →
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---- Footer ---- */}
      <LazyFooter />
    </div>
  );
}