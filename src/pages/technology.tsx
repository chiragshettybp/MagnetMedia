import { PageLayout } from "@/components/ui/page-layout";
import { PageHero, Section, QuoteBlock, CTASection, Pill, GhostLink } from "@/components/ui/site-sections";
import { techAreas } from "@/lib/site-data";

export default function Technology() {
  return (
    <PageLayout>
      <PageHero
        eyebrow="Technology"
        title="How we build."
        text="Technology follows the problem. We choose tools based on what the product requires — not because something is trendy."
      />

      <Section className="pb-16">
        <div className="grid gap-4 md:grid-cols-2">
          {techAreas.map((a, i) => (
            <div key={a.name} className="flex flex-col gap-6 rounded-3xl border border-white/10 bg-white/[0.02] p-6 md:p-8">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-medium tracking-tight" style={{ color: "#E1E0CC" }}>
                  {a.name}
                </h3>
                <span className="text-xs" style={{ color: "rgba(225, 224, 204, 0.4)" }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(225, 224, 204, 0.7)" }}>
                {a.text}
              </p>
              <div className="flex flex-wrap gap-2">
                {a.examples.map((e) => (
                  <Pill key={e}>{e}</Pill>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section className="pb-20">
        <QuoteBlock text="We choose technologies based on the product's requirements — nothing is 'best' in the abstract." />
        <div className="mt-10 flex flex-wrap gap-3">
          <GhostLink to="/process">Our process</GhostLink>
          <GhostLink to="/ai">Our AI</GhostLink>
        </div>
      </Section>

      <CTASection
        title="Have a problem that needs the right tools?"
        text="Tell us the problem. We'll pick the technology."
        to="/start-project"
        cta="Describe your project"
      />
    </PageLayout>
  );
}