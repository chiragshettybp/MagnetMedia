import { PageLayout } from "@/components/ui/page-layout";
import { PageHero, Section, QuoteBlock, CTASection, GhostLink } from "@/components/ui/site-sections";

export default function Mission() {
  return (
    <PageLayout>
      <PageHero
        eyebrow="Mission & Vision"
        title="Turn ideas into real products."
        text="Faster, smarter, and with AI — from concept to software to real-world impact."
      />

      <Section className="pb-16">
        <div className="grid gap-10 md:grid-cols-2">
          <div className="flex flex-col gap-6 rounded-3xl border border-white/10 bg-white/[0.02] p-6 md:p-8">
            <p className="text-xs font-medium uppercase tracking-widest" style={{ color: "rgba(225, 224, 204, 0.45)" }}>
              Mission
            </p>
            <h2 className="text-2xl font-medium tracking-tight sm:text-3xl" style={{ color: "#E1E0CC" }}>
              Turn ideas into real products using software and AI.
            </h2>
            <p className="text-sm leading-relaxed" style={{ color: "rgba(225, 224, 204, 0.7)" }}>
              Help people and businesses move from concept → software → real-world impact.
            </p>
          </div>
          <div className="flex flex-col gap-6 rounded-3xl border border-white/10 bg-white/[0.02] p-6 md:p-8">
            <p className="text-xs font-medium uppercase tracking-widest" style={{ color: "rgba(225, 224, 204, 0.45)" }}>
              Vision
            </p>
            <h2 className="text-2xl font-medium tracking-tight sm:text-3xl" style={{ color: "#E1E0CC" }}>
              Make building meaningful software accessible to anyone with a great idea.
            </h2>
            <p className="text-sm leading-relaxed" style={{ color: "rgba(225, 224, 204, 0.7)" }}>
              A person shouldn't need a huge team, years of technical knowledge, or massive resources to build their idea.
            </p>
          </div>
        </div>
      </Section>

      <Section className="pb-20">
        <QuoteBlock text="From “I have an idea.” to “I built it. People are using it.”" />
        <div className="mt-10 flex flex-wrap gap-3">
          <GhostLink to="/about/story">Our story</GhostLink>
          <GhostLink to="/about/team">Team</GhostLink>
        </div>
      </Section>

      <CTASection
        title="You have the idea. We have the build."
        text="It only takes one message to go from idea to real product."
        to="/start-project"
        cta="Start your idea"
      />
    </PageLayout>
  );
}