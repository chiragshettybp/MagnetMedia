import { PageLayout } from "@/components/ui/page-layout";
import { PageHero, Section, SectionTitle, GhostLink } from "@/components/ui/site-sections";
import {
  services,
  solutions,
  aiTopics,
  footerCompany,
  footerResources,
  footerLegal,
} from "@/lib/site-data";

export default function Sitemap() {
  return (
    <PageLayout>
      <PageHero eyebrow="Sitemap" title="Everything on this site." text="The complete map of OutMaded, in one place." />

      <Section className="pb-20">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <SectionTitle eyebrow="Core" title="Guides" />
            <div className="flex flex-col gap-2">
              <GhostLink to="/services">
                <strong>Services</strong>
              </GhostLink>
              {services.map((s) => (
                <GhostLink key={s.slug} to={`/services/${s.slug}`}>
                  {s.name}
                </GhostLink>
              ))}
              <GhostLink to="/solutions">
                <strong>Solutions</strong>
              </GhostLink>
              {solutions.map((s) => (
                <GhostLink key={s.slug} to={`/solutions/${s.slug}`}>
                  {s.name}
                </GhostLink>
              ))}
            </div>
          </div>
          <div>
            <SectionTitle eyebrow="AI & Products" title="Intelligence" />
            <div className="flex flex-col gap-2">
              <GhostLink to="/ai">
                <strong>AI</strong>
              </GhostLink>
              {aiTopics.map((a) => (
                <GhostLink key={a.slug} to={`/ai/${a.slug}`}>
                  {a.name}
                </GhostLink>
              ))}
              <GhostLink to="/products">
                <strong>Products</strong>
              </GhostLink>
              <GhostLink to="/products/labs">OutMaded Labs</GhostLink>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <SectionTitle eyebrow="More" title="The rest" />
          <div className="flex flex-wrap gap-3">
            {footerCompany.map((l) => (
              <GhostLink key={l.to} to={l.to}>
                {l.label}
              </GhostLink>
            ))}
            {footerResources.map((l) => (
              <GhostLink key={l.to} to={l.to}>
                {l.label}
              </GhostLink>
            ))}
            <GhostLink to="/start-project">Start a Project</GhostLink>
            {footerLegal.map((l) => (
              <GhostLink key={l.to} to={l.to}>
                {l.label}
              </GhostLink>
            ))}
          </div>
        </div>
      </Section>
    </PageLayout>
  );
}