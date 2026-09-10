import { PageLayout } from "@/components/ui/page-layout";
import { PageHero, Section, CTASection, QuoteBlock } from "@/components/ui/site-sections";
import { Reveal } from "@/components/motion/reveal";
import { solutions } from "@/lib/site-data";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function Solutions() {
  return (
    <PageLayout>
      <PageHero
        eyebrow="Solutions"
        title="Technology should solve problems."
        text="Instead of selling technology, we explain the problems OutMaded solves — then apply the right software, AI, and automation to fix them."
      />

      <Section className="pb-16">
        <div className="grid gap-4 md:grid-cols-2">
          {solutions.map((s, i) => (
            <Reveal key={s.slug} delay={i * 0.05} className="h-full">
              <Link
                to={`/solutions/${s.slug}`}
                className="group flex h-full flex-col justify-between gap-8 rounded-3xl border border-white/10 bg-white/[0.02] p-6 transition-all duration-200 hover:border-white/25 active:scale-[0.985] md:p-8"
              >
              <div className="flex items-start justify-between">
                <span className="text-xs" style={{ color: "rgba(225, 224, 204, 0.4)" }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" style={{ color: "#E1E0CC" }} />
              </div>
              <div>
                <h3 className="text-xl font-medium tracking-tight sm:text-2xl" style={{ color: "#E1E0CC" }}>
                  {s.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed" style={{ color: "rgba(225, 224, 204, 0.7)" }}>
                  {s.short}
                </p>
              </div>
            </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="pb-20">
        <QuoteBlock text="The problem isn't that people don't have ideas. The problem is turning those ideas into working products." />
      </Section>

      <CTASection
        title="We solve problems, not just screens."
        text="Describe the problem. We'll bring the right technology."
        to="/start-project"
        cta="Start a project"
      />
    </PageLayout>
  );
}