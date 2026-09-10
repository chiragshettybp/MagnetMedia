import { PageLayout } from "@/components/ui/page-layout";
import { PageHero, Section, SectionTitle, QuoteBlock, CTASection, GhostLink } from "@/components/ui/site-sections";
import { Reveal } from "@/components/motion/reveal";
import { products } from "@/lib/site-data";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function Products() {
  return (
    <PageLayout>
      <PageHero
        eyebrow="Products"
        title="Products we're building."
        text="Some ideas become client solutions. Others become products of our own. OutMaded is a product company, not just an agency."
      />

      <Section className="pb-16">
        <SectionTitle eyebrow="Live" title="Products in the world" text="Everything we ship is real and honestly labelled — Live, Beta, Building, or Experiment." />
        <div className="grid gap-4 md:grid-cols-3">
          {products.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.05} className="h-full">
              <Link
                to={`/products/${p.slug}`}
                className="group flex h-full flex-col justify-between gap-6 rounded-3xl border border-white/10 bg-white/[0.02] p-6 transition-all duration-200 hover:border-white/25 active:scale-[0.985]"
              >
              <div className="flex items-start justify-between">
                <span
                  className="rounded-full border border-white/15 px-3 py-1 text-xs"
                  style={{ color: "rgba(225, 224, 204, 0.8)" }}
                >
                  {p.status}
                </span>
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" style={{ color: "#E1E0CC" }} />
              </div>
              <div>
                <h3 className="text-lg font-medium tracking-tight sm:text-xl" style={{ color: "#E1E0CC" }}>
                  {p.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed" style={{ color: "rgba(225, 224, 204, 0.7)" }}>
                  {p.short}
                </p>
              </div>
            </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="pb-16">
        <div className="max-w-2xl">
          <QuoteBlock text="Good ideas shouldn't stay ideas. Some become client products. Some become ours." />
        </div>
      </Section>

      <Section className="pb-20">
        <SectionTitle eyebrow="Experiments" title="OutMaded Labs" />
        <p className="mb-6 max-w-xl text-sm leading-relaxed" style={{ color: "rgba(225, 224, 204, 0.7)" }}>
          Where we explore what comes next — AI experiments, new interfaces, prototypes, and research projects.
        </p>
        <GhostLink to="/products/labs">Explore the Labs →</GhostLink>
      </Section>

      <CTASection
        title="Build a product of your own."
        text="Every product we own started as an experiment here. Yours can too."
        to="/start-project"
        cta="Start building"
      />
    </PageLayout>
  );
}