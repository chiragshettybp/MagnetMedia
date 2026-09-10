import { useState } from "react";
import { PageLayout } from "@/components/ui/page-layout";
import { PageHero, Section, GhostLink, Pill } from "@/components/ui/site-sections";
import { projects } from "@/lib/site-data";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const types = ["All", "Website", "Software", "AI", "MVP", "Automation", "Internal Product", "Experiment", "Concept"];

export default function Work() {
  const [filter, setFilter] = useState("All");
  const filtered = filter === "All" ? projects : projects.filter((p) => p.type === filter || p.status === filter);

  return (
    <PageLayout>
      <PageHero
        eyebrow="Work"
        title="Things we've built."
        text="Real projects, experiments, and internal products. We never fabricate clients, numbers, or testimonials — what you see is what we actually made."
      />

      <Section className="pb-8">
        <div className="mb-6 flex flex-wrap gap-2">
          {types.map((t) => (
            <button
              key={t}
              onClick={() => setFilter(t)}
              className="rounded-full border px-4 py-1.5 text-xs transition-colors"
              style={{
                color: filter === t ? "#0a0a0a" : "rgba(225, 224, 204, 0.7)",
                background: filter === t ? "#E1E0CC" : "transparent",
                borderColor: filter === t ? "#E1E0CC" : "rgba(225, 224, 204, 0.15)",
              }}
            >
              {t}
            </button>
          ))}
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {filtered.map((p) => (
            <Link
              key={p.slug}
              to={`/work/${p.slug}`}
              className="group flex flex-col justify-between gap-8 rounded-3xl border border-white/10 bg-white/[0.02] p-6 transition-colors hover:border-white/25 md:p-8"
            >
              <div className="flex items-start justify-between gap-4">
                <Pill>{p.status}</Pill>
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" style={{ color: "#E1E0CC" }} />
              </div>
              <div>
                <h3 className="text-xl font-medium tracking-tight sm:text-2xl" style={{ color: "#E1E0CC" }}>
                  {p.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed" style={{ color: "rgba(225, 224, 204, 0.7)" }}>
                  {p.blurb}
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {p.tech.slice(0, 3).map((t) => (
                  <Pill key={t}>{t}</Pill>
                ))}
              </div>
            </Link>
          ))}
        </div>
        {filtered.length === 0 && (
          <p className="py-16 text-center text-sm" style={{ color: "rgba(225, 224, 204, 0.6)" }}>
            Nothing here yet — we're building.
          </p>
        )}
      </Section>

      <Section className="pb-16">
        <div className="flex flex-wrap gap-3">
          <GhostLink to="/products">View products</GhostLink>
          <GhostLink to="/services">Explore services</GhostLink>
        </div>
      </Section>
    </PageLayout>
  );
}