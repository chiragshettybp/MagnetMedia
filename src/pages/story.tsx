import { PageLayout } from "@/components/ui/page-layout";
import { PageHero, Section, SectionTitle, CTASection, GhostLink } from "@/components/ui/site-sections";

const timeline = [
  { title: "The Idea", text: "Great marketing starts with attention — not noise." },
  { title: "The Name", text: "Magnet Media — a name built around the idea of pull." },
  { title: "The Services", text: "Ads, content, video, social, and strategy — all under one roof." },
  { title: "The Approach", text: "Attract → Engage → Grow." },
  { title: "The Agency", text: "A creative and performance marketing company for brands that want to be noticed." },
  { title: "The Future", text: "We keep making brands magnetic." },
];

export default function Story() {
  return (
    <PageLayout>
      <PageHero
        eyebrow="Our Story"
        title="Built around attention."
        text="We noticed something early — the brands that win online aren't louder, they're magnetic."
      />

      <Section className="pb-16">
        <div className="flex flex-col gap-0">
          {timeline.map((t, i) => (
            <div key={t.title} className="flex gap-6 md:gap-10">
              <div className="flex flex-col items-center">
                <span
                  className="text-xs font-medium"
                  style={{ color: "rgba(192, 192, 192, 0.5)" }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                {i < timeline.length - 1 && (
                  <span className="mt-2 w-px flex-1 border-l border-dashed border-white/15" />
                )}
              </div>
              <div className="flex-1 pb-12">
                <h3 className="text-xl font-medium tracking-tight" style={{ color: "#C0C0C0" }}>
                  {t.title}
                </h3>
                <p className="mt-2 max-w-xl text-sm leading-relaxed" style={{ color: "rgba(192, 192, 192, 0.7)" }}>
                  {t.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section className="pb-20">
        <SectionTitle eyebrow="Continue" title="More about Magnet Media" />
        <div className="flex flex-wrap gap-3">
          <GhostLink to="/about">About</GhostLink>
          <GhostLink to="/about/mission">Mission</GhostLink>
          <GhostLink to="/about/team">Team</GhostLink>
        </div>
      </Section>

      <CTASection
        title="Make your brand the next chapter."
        text="We work with ambitious brands that want to stop the scroll and start growing."
        to="/start-project"
        cta="Work with us"
      />
    </PageLayout>
  );
}