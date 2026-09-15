import { PageLayout } from "@/components/ui/page-layout";
import { PageHero, Section, QuoteBlock, CTASection, GhostLink } from "@/components/ui/site-sections";

export default function Mission() {
  return (
    <PageLayout>
      <PageHero
        eyebrow="Mission & Vision"
        title="Make brands magnetic."
        text="Attention is the first win — everything we do is built around getting noticed and turning that into growth."
      />

      <Section className="pb-16">
        <div className="grid gap-10 md:grid-cols-2">
          <div className="flex flex-col gap-6 rounded-3xl border border-white/10 bg-white/[0.02] p-6 md:p-8">
            <p className="text-xs font-medium uppercase tracking-widest" style={{ color: "rgba(192, 192, 192, 0.45)" }}>
              Mission
            </p>
            <h2 className="text-2xl font-medium tracking-tight sm:text-3xl" style={{ color: "#C0C0C0" }}>
              Make brands magnetic.
            </h2>
            <p className="text-sm leading-relaxed" style={{ color: "rgba(192, 192, 192, 0.7)" }}>
              Help brands get noticed, build attention, and turn that attention into customers, conversions, and growth.
            </p>
          </div>
          <div className="flex flex-col gap-6 rounded-3xl border border-white/10 bg-white/[0.02] p-6 md:p-8">
            <p className="text-xs font-medium uppercase tracking-widest" style={{ color: "rgba(192, 192, 192, 0.45)" }}>
              Vision
            </p>
            <h2 className="text-2xl font-medium tracking-tight sm:text-3xl" style={{ color: "#C0C0C0" }}>
              A world where great brands don't have to shout to be seen.
            </h2>
            <p className="text-sm leading-relaxed" style={{ color: "rgba(192, 192, 192, 0.7)" }}>
              Every ambitious brand should be able to stop the scroll — with creative that's as effective as it is meaningful.
            </p>
          </div>
        </div>
      </Section>

      <Section className="pb-20">
        <QuoteBlock text="From “what's your brand?” to “I remember that.”" />
        <div className="mt-10 flex flex-wrap gap-3">
          <GhostLink to="/about/story">Our story</GhostLink>
          <GhostLink to="/about/team">Team</GhostLink>
        </div>
      </Section>

      <CTASection
        title="Ready to be noticed?"
        text="All it takes is one message to start becoming magnetic."
        to="/start-project"
        cta="Make my brand magnetic"
      />
    </PageLayout>
  );
}