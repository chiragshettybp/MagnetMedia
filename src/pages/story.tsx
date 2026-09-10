import { PageLayout } from "@/components/ui/page-layout";
import { PageHero, Section, SectionTitle, CTASection, GhostLink } from "@/components/ui/site-sections";

const timeline = [
  { title: "Students", text: "It started with college students who wanted to build real things — not just study them." },
  { title: "Ideas", text: "We kept having ideas. Then we kept turning them into working software." },
  { title: "First projects", text: "Websites, tools, systems, and experiments — each one taught us more." },
  { title: "Experiments", text: "We started playing with AI, automation, and unconventional ideas." },
  { title: "OutMaded", text: "The experiments became a company. A student-led software and innovation startup." },
  { title: "Products", text: "Now we build for others — and for ourselves." },
  { title: "Future", text: "We keep building. That's the whole plan." },
];

export default function Story() {
  return (
    <PageLayout>
      <PageHero
        eyebrow="Our Story"
        title="A story still being written."
        text="We're building while we're learning. That gives us a different perspective — and a different pace."
      />

      <Section className="pb-16">
        <div className="flex flex-col gap-0">
          {timeline.map((t, i) => (
            <div key={t.title} className="flex gap-6 md:gap-10">
              <div className="flex flex-col items-center">
                <span
                  className="text-xs font-medium"
                  style={{ color: "rgba(225, 224, 204, 0.5)" }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                {i < timeline.length - 1 && (
                  <span className="mt-2 w-px flex-1 border-l border-dashed border-white/15" />
                )}
              </div>
              <div className="flex-1 pb-12">
                <h3 className="text-xl font-medium tracking-tight" style={{ color: "#E1E0CC" }}>
                  {t.title}
                </h3>
                <p className="mt-2 max-w-xl text-sm leading-relaxed" style={{ color: "rgba(225, 224, 204, 0.7)" }}>
                  {t.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section className="pb-20">
        <SectionTitle eyebrow="Continue" title="More about OutMaded" />
        <div className="flex flex-wrap gap-3">
          <GhostLink to="/about">About</GhostLink>
          <GhostLink to="/about/mission">Mission</GhostLink>
          <GhostLink to="/about/team">Team</GhostLink>
        </div>
      </Section>

      <CTASection
        title="Part of the story next?"
        text="Every product at OutMaded starts the same way — with a story and a build."
        to="/start-project"
        cta="Write the next chapter"
      />
    </PageLayout>
  );
}