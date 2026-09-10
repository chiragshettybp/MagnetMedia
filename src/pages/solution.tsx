import { PageLayout } from "@/components/ui/page-layout";
import {
  PageHero,
  Section,
  SectionTitle,
  ListGrid,
  CTASection,
  ArrowButton,
  GhostLink,
} from "@/components/ui/site-sections";
import { solutions } from "@/lib/site-data";
import { useParams, Navigate } from "react-router-dom";

export default function SolutionPage() {
  const { slug } = useParams();
  const solution = solutions.find((s) => s.slug === slug);

  if (!solution) return <Navigate to="/404" replace />;

  const others = solutions.filter((s) => s.slug !== solution.slug);

  return (
    <PageLayout>
      <PageHero eyebrow={solution.name} title={solution.heroTitle} text={solution.heroText} />

      <Section className="pb-16 pt-4">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionTitle eyebrow="The problems" title="What we fix" />
            <ListGrid items={solution.problems} />
          </div>
          <div>
            <SectionTitle eyebrow="The solutions" title="What we build" />
            <ListGrid items={solution.solutions} />
            <div className="mt-8">
              <ArrowButton to="/start-project">{solution.cta}</ArrowButton>
            </div>
          </div>
        </div>
      </Section>

      <Section className="pb-20">
        <SectionTitle eyebrow="Related" title="Other solutions" />
        <div className="flex flex-wrap gap-3">
          {others.map((o) => (
            <GhostLink key={o.slug} to={`/solutions/${o.slug}`}>
              {o.name}
            </GhostLink>
          ))}
          <GhostLink to="/solutions">All solutions</GhostLink>
        </div>
      </Section>

      <CTASection
        title="Have this problem?"
        text="Tell us what's getting in the way and we'll design the fix."
        to="/contact"
        cta="Talk about it"
      />
    </PageLayout>
  );
}