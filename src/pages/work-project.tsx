import { PageLayout } from "@/components/ui/page-layout";
import {
  PageHero,
  Section,
  SectionTitle,
  ListGrid,
  CTASection,
  Pill,
  GhostLink,
} from "@/components/ui/site-sections";
import { projects } from "@/lib/site-data";
import { useParams, Navigate } from "react-router-dom";

export default function WorkProjectPage() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) return <Navigate to="/404" replace />;

  const others = projects.filter((p) => p.slug !== project.slug);

  return (
    <PageLayout>
      <PageHero eyebrow={project.status} title={project.name} text={project.blurb} />

      <Section className="pb-16 pt-4">
        <div className="mb-12 flex flex-wrap gap-2">
          <Pill>{project.type}</Pill>
          {project.tech.map((t) => (
            <Pill key={t}>{t}</Pill>
          ))}
        </div>

        <div className="grid gap-10 md:grid-cols-2">
          <div className="flex flex-col gap-10">
            <div>
              <SectionTitle eyebrow="The problem" title="What existed before" />
              <p className="text-sm leading-relaxed" style={{ color: "rgba(225, 224, 204, 0.7)" }}>
                {project.problem}
              </p>
            </div>
            <div>
              <SectionTitle eyebrow="The idea" title="The proposed solution" />
              <p className="text-sm leading-relaxed" style={{ color: "rgba(225, 224, 204, 0.7)" }}>
                {project.idea}
              </p>
            </div>
            <div>
              <SectionTitle eyebrow="The product" title="What was built" />
              <p className="text-sm leading-relaxed" style={{ color: "rgba(225, 224, 204, 0.7)" }}>
                {project.product}
              </p>
            </div>
            {project.ai && (
              <div>
                <SectionTitle eyebrow="AI" title="How AI fits in" />
                <p className="text-sm leading-relaxed" style={{ color: "rgba(225, 224, 204, 0.7)" }}>
                  {project.ai}
                </p>
              </div>
            )}
          </div>
          <div>
            <SectionTitle eyebrow="Features" title="What it does" />
            <ListGrid items={project.features} />
          </div>
        </div>
      </Section>

      <Section className="pb-16">
        <SectionTitle eyebrow="Related" title="More work" />
        <div className="flex flex-wrap gap-3">
          {others.map((o) => (
            <GhostLink key={o.slug} to={`/work/${o.slug}`}>
              {o.name}
            </GhostLink>
          ))}
          <GhostLink to="/work">All work</GhostLink>
        </div>
      </Section>

      <CTASection
        title="Have an idea like this?"
        text="Let's build it — properly, with the right technology."
        to="/start-project"
        cta="Let's build it"
      />
    </PageLayout>
  );
}