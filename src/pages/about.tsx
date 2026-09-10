import { PageLayout } from "@/components/ui/page-layout";
import { PageHero, Section, SectionTitle, QuoteBlock, CTASection, Pill, GhostLink } from "@/components/ui/site-sections";

const values = [
  { name: "Build", text: "We believe in making things real." },
  { name: "Learn", text: "Every project is an opportunity to learn." },
  { name: "Experiment", text: "We aren't afraid to test unconventional ideas." },
  { name: "Simplicity", text: "Technology should make things easier, not more complicated." },
  { name: "Useful AI", text: "AI should create actual value." },
];

export default function About() {
  return (
    <PageLayout>
      <PageHero
        eyebrow="About"
        title="We're building the bridge between ideas and software."
        text="OutMaded was started by college students who wanted to build real technology rather than simply study it."
      />

      <Section className="pb-16">
        <QuoteBlock text="Good ideas shouldn't stay ideas." />
      </Section>

      <Section className="pb-16">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <SectionTitle eyebrow="What we do" title="Build products, not just code" />
            <div className="flex flex-wrap gap-2">
              <Pill>Build products</Pill>
              <Pill>Solve business problems</Pill>
              <Pill>Integrate AI</Pill>
              <Pill>Automate workflows</Pill>
              <Pill>Experiment with technology</Pill>
            </div>
          </div>
          <div>
            <SectionTitle eyebrow="Values" title="What we stand for" />
            <div className="flex flex-col gap-3">
              {values.map((v) => (
                <div key={v.name} className="rounded-2xl border border-white/10 bg-white/[0.02] px-4 py-3">
                  <p className="text-sm font-medium" style={{ color: "#E1E0CC" }}>
                    {v.name}
                  </p>
                  <p className="mt-1 text-sm" style={{ color: "rgba(225, 224, 204, 0.7)" }}>
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
        text="Small team. Big ideas. Real software. Let's build something."
        to="/start-project"
        cta="Start a project"
      />
    </PageLayout>
  );
}