import { PageLayout } from "@/components/ui/page-layout";
import { PageHero, Section, CTASection, GhostLink } from "@/components/ui/site-sections";
import { processSteps } from "@/lib/site-data";

export default function Process() {
  return (
    <PageLayout>
      <PageHero
        eyebrow="Process"
        title="From idea to working product."
        text="A clear, repeatable path: understand the problem, define what to build, build it, and keep improving it."
      />

      <Section className="pb-16">
        <div className="flex flex-col gap-0">
          {processSteps.map((s, i) => (
            <div key={s.n} className="flex gap-6 md:gap-10">
              <div className="flex flex-col items-center">
                <span
                  className="rounded-full border border-white/15 px-2 py-1 text-[10px] font-medium"
                  style={{ color: "rgba(225, 224, 204, 0.8)" }}
                >
                  {s.n}
                </span>
                {i < processSteps.length - 1 && (
                  <span className="mt-2 w-px flex-1 border-l border-dashed border-white/15" />
                )}
              </div>
              <div className="flex flex-1 flex-col gap-1 pb-12">
                <h3 className="text-xl font-medium tracking-tight sm:text-2xl" style={{ color: "#E1E0CC" }}>
                  {s.step}
                </h3>
                <p className="max-w-xl text-sm leading-relaxed" style={{ color: "rgba(225, 224, 204, 0.7)" }}>
                  {s.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section className="pb-20">
        <div className="flex flex-wrap gap-3">
          <GhostLink to="/technology">How we build</GhostLink>
          <GhostLink to="/work">What we've built</GhostLink>
          <GhostLink to="/services">What we do</GhostLink>
        </div>
      </Section>

      <CTASection
        title="Start at step one."
        text="Understand → define → plan → build. It starts with an idea."
        to="/start-project"
        cta="Start a project"
      />
    </PageLayout>
  );
}