import { PageLayout } from "@/components/ui/page-layout";
import { PageHero, Section, SectionTitle, GhostLink } from "@/components/ui/site-sections";
import {
  services,
  footerCompany,
  footerResources,
  footerLegal,
} from "@/lib/site-data";

export default function Sitemap() {
  return (
    <PageLayout>
      <PageHero eyebrow="Sitemap" title="Everything on this site." text="The complete map of Magnet Media, in one place." />

      <Section className="pb-20">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <SectionTitle eyebrow="Core" title="Services" />
            <div className="flex flex-col gap-2">
              <GhostLink to="/services">
                <strong>All Services</strong>
              </GhostLink>
              {services.map((s) => (
                <GhostLink key={s.slug} to={`/services/${s.slug}`}>
                  {s.name}
                </GhostLink>
              ))}
            </div>
          </div>
          <div>
            <SectionTitle eyebrow="Explore" title="More" />
            <div className="flex flex-col gap-2">
              {footerCompany.map((l) => (
                <GhostLink key={l.to} to={l.to}>
                  {l.label}
                </GhostLink>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12">
          <SectionTitle eyebrow="More" title="The rest" />
          <div className="flex flex-wrap gap-3">
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