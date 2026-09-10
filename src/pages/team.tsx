import { PageLayout } from "@/components/ui/page-layout";
import { PageHero, Section, SectionTitle, CTASection, GhostLink } from "@/components/ui/site-sections";
import { team } from "@/lib/site-data";

export default function Team() {
  return (
    <PageLayout>
      <PageHero
        eyebrow="Team"
        title="A small team building big ideas."
        text="We're a college-student-founded team. We don't imitate a 500-person company — we build like a startup: fast, honest, and learning as we go."
      />

      <Section className="pb-16">
        <div className="grid gap-4 md:grid-cols-3">
          {team.map((m) => (
            <div key={m.name} className="flex flex-col gap-6 rounded-3xl border border-white/10 bg-white/[0.02] p-6">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-white/15 to-white/5">
                <span className="text-xs font-medium" style={{ color: "#E1E0CC" }}>
                  {m.name.slice(0, 2).toUpperCase()}
                </span>
              </div>
              <div>
                <h3 className="text-lg font-medium tracking-tight" style={{ color: "#E1E0CC" }}>
                  {m.name}
                </h3>
                <p className="text-xs" style={{ color: "rgba(225, 224, 204, 0.5)" }}>
                  {m.role}
                </p>
              </div>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(225, 224, 204, 0.7)" }}>
                {m.bio}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="pb-20">
        <SectionTitle eyebrow="More" title="About OutMaded" />
        <div className="flex flex-wrap gap-3">
          <GhostLink to="/about">About</GhostLink>
          <GhostLink to="/about/story">Our story</GhostLink>
          <GhostLink to="/about/mission">Mission</GhostLink>
        </div>
      </Section>

      <CTASection
        title="Want to build with a small team?"
        text="No big-company bloat. Just people who build."
        to="/start-project"
        cta="Build with us"
      />
    </PageLayout>
  );
}