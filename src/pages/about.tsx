import { PageLayout } from "@/components/ui/page-layout";
import { PageHero, Section, SectionTitle, QuoteBlock, CTASection, Pill, GhostLink } from "@/components/ui/site-sections";

const values = [
  { name: "Attention First", text: "Creative that makes people stop scrolling." },
  { name: "Performance Led", text: "Advertising built around meaningful business outcomes." },
  { name: "One Partner", text: "Ads, content, video, social, and strategy — connected through one team." },
  { name: "Brand Built", text: "No one-size-fits-all. Every brand has a different audience, personality, and objective." },
  { name: "Always Moving", text: "We test, learn, improve, and adapt as platforms and trends change." },
];

export default function About() {
  return (
    <PageLayout>
      <PageHero
        eyebrow="About"
        title="We make brands magnetic."
        text="Magnet Media was built around one idea — the brands that win are the ones that make people stop."
      />

      <Section className="pb-16">
        <QuoteBlock text="A great brand should have pull." />
      </Section>

      <Section className="pb-16">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <SectionTitle eyebrow="What we do" title="Attention-first marketing that performs" />
            <div className="flex flex-wrap gap-2">
              <Pill>Meta Ads</Pill>
              <Pill>Content Creation</Pill>
              <Pill>Video Editing</Pill>
              <Pill>Creative Strategy</Pill>
              <Pill>Social Media</Pill>
              <Pill>Brand Creative</Pill>
              <Pill>Performance Creative</Pill>
            </div>
          </div>
          <div>
            <SectionTitle eyebrow="Values" title="What we stand for" />
            <div className="flex flex-col gap-3">
              {values.map((v) => (
                <div key={v.name} className="rounded-2xl border border-white/10 bg-white/[0.02] px-4 py-3">
                  <p className="text-sm font-medium" style={{ color: "#C0C0C0" }}>
                    {v.name}
                  </p>
                  <p className="mt-1 text-sm" style={{ color: "rgba(192, 192, 192, 0.7)" }}>
                    {v.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section className="pb-20">
        <div className="flex flex-wrap gap-3">
          <GhostLink to="/about/story">Our story</GhostLink>
          <GhostLink to="/about/mission">Mission</GhostLink>
          <GhostLink to="/about/team">Team</GhostLink>
          <GhostLink to="/about/story">Start at the beginning</GhostLink>
        </div>
      </Section>

      <CTASection
        title="Want to see how we work?"
        text="Small team. Big ideas. Real creative. Let's make your brand magnetic."
        to="/start-project"
        cta="Start a project"
      />
    </PageLayout>
  );
}