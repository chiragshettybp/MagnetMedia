import { PageLayout } from "@/components/ui/page-layout";
import { PageHero, Section, SectionTitle, CTASection, GhostLink } from "@/components/ui/site-sections";
import { team } from "@/lib/site-data";

export default function Team() {
  return (
    <PageLayout>
      <PageHero
        eyebrow="Team"
        title="A small team that makes brands magnetic."
        text="We don't imitate a 500-person company — we build like a small, focused agency: fast, honest, and obsessed with attention."
      />

      <Section className="pb-16">
        <div className="grid grid-cols-2 gap-4">
          {team.map((m) => (
            <div key={m.name} className="flex flex-col gap-6 rounded-3xl border border-white/10 bg-white/[0.02] p-6">
              <div className="flex h-24 w-24 items-center justify-center overflow-hidden rounded-full bg-gradient-to-br from-white/15 to-white/5">
                {m.image ? (
                  <img src={m.image} alt={m.name} className="h-full w-full object-cover" />
                ) : (
                  <span className="text-xs font-medium" style={{ color: "#C0C0C0" }}>
                    {m.name.slice(0, 2).toUpperCase()}
                  </span>
                )}
              </div>
              <div>
                {m.url ? (
                  <a
                    href={m.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-lg font-medium tracking-tight hover:underline"
                    style={{ color: "#C0C0C0" }}
                  >
                    {m.name}
                  </a>
                ) : (
                  <h3 className="text-lg font-medium tracking-tight" style={{ color: "#C0C0C0" }}>
                    {m.name}
                  </h3>
                )}
                <p className="text-xs" style={{ color: "rgba(192, 192, 192, 0.5)" }}>
                  {m.role}
                </p>
              </div>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(192, 192, 192, 0.7)" }}>
                {m.bio}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="pb-20">
        <SectionTitle eyebrow="More" title="About Magnet Media" />
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