import { useState } from "react";
import { PageLayout } from "@/components/ui/page-layout";
import { PageHero, Section, GhostLink, Pill } from "@/components/ui/site-sections";
import { projects } from "@/lib/site-data";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { ChoiceChip } from "@/components/ui/choice-chip";
import { Reveal } from "@/components/motion/reveal";

const types = ["All", "Brand & Website", "Creative System", "Internal Product", "Client"];

export default function Work() {
  const [filter, setFilter] = useState("All");
  const filtered = filter === "All" ? projects : projects.filter((p) => p.type === filter || p.status === filter);

  return (
    <PageLayout>
      <PageHero
        eyebrow="Work"
        title="Things we've made magnetic."
        text="Real work, built under the Magnet Media model — attention-first, performance-led, and designed to be remembered."
      />

      <Section className="pb-8">
        <div className="mb-6 flex flex-wrap gap-2">
          {types.map((t) => (
            <ChoiceChip
              key={t}
              selected={filter === t}
              onClick={() => setFilter(t)}
            >
              {t}
            </ChoiceChip>
          ))}
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {filtered.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.05}>
              <Link
                to={`/work/${p.slug}`}
                className="group flex h-full flex-col justify-between gap-8 rounded-3xl border border-white/10 bg-white/[0.02] p-6 transition-all duration-200 hover:border-white/25 active:scale-[0.985] md:p-8"
              >
              <div className="flex items-start justify-between gap-4">
                <Pill>{p.status}</Pill>
                <ArrowRight className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" style={{ color: "#C0C0C0" }} />
              </div>
              <div>
                <h3 className="text-xl font-medium tracking-tight sm:text-2xl" style={{ color: "#C0C0C0" }}>
                  {p.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed" style={{ color: "rgba(192, 192, 192, 0.7)" }}>
                  {p.blurb}
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {p.tech.slice(0, 3).map((t) => (
                  <Pill key={t}>{t}</Pill>
                ))}
              </div>
            </Link>
            </Reveal>
          ))}
        </div>
        {filtered.length === 0 && (
          <p className="py-16 text-center text-sm" style={{ color: "rgba(192, 192, 192, 0.6)" }}>
            Nothing here yet — we're building.
          </p>
        )}
      </Section>

      <Section className="pb-16">
        <div className="flex flex-wrap gap-3">
          <GhostLink to="/services">Explore services</GhostLink>
          <GhostLink to="/process">Our approach</GhostLink>
        </div>
      </Section>
    </PageLayout>
  );
}
