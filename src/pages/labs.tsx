import { PageLayout } from "@/components/ui/page-layout";
import { PageHero, Section, QuoteBlock, CTASection } from "@/components/ui/site-sections";
import { Reveal } from "@/components/motion/reveal";

export default function Labs() {
  return (
    <PageLayout>
      <PageHero
        eyebrow="OutMaded Labs"
        title="We experiment with what comes next."
        text="OutMaded Labs is where we explore new ideas, technologies, AI systems, and product concepts — before they become products."
      />

      <Section className="pb-16">
        <div className="grid gap-4 md:grid-cols-2">
          {[
            "AI experiments",
            "Product experiments",
            "New interfaces",
            "Automation experiments",
            "Prototypes",
            "Research projects",
          ].map((area, i) => (
            <Reveal key={area} delay={i * 0.05} className="h-full">
              <div className="flex h-full flex-col rounded-3xl border border-white/10 bg-white/[0.02] p-6">
                <p className="text-xs" style={{ color: "rgba(225, 224, 204, 0.4)" }}>
                  {String(i + 1).padStart(2, "0")}
                </p>
                <p className="mt-3 text-lg font-medium tracking-tight" style={{ color: "#E1E0CC" }}>
                  {area}
                </p>
                <div className="mt-6 flex flex-col gap-1 text-sm" style={{ color: "rgba(225, 224, 204, 0.6)" }}>
                  <p>Experiment</p>
                  <p className="pl-4">Why we built it</p>
                  <p className="pl-8">What we learned</p>
                  <p className="pl-12">What happens next</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="pb-20">
        <QuoteBlock text="An experiment is a product that hasn't found its users yet." />
      </Section>

      <CTASection
        title="Want to build in the open with us?"
        text="OutMaded Labs is where our products are born. Follow along or get involved."
        to="/start-project"
        cta="Build with us"
      />
    </PageLayout>
  );
}