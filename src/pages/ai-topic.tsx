import { PageLayout } from "@/components/ui/page-layout";
import {
  PageHero,
  Section,
  SectionTitle,
  ListGrid,
  FlowText,
  CTASection,
  ArrowButton,
  GhostLink,
} from "@/components/ui/site-sections";
import { aiTopics } from "@/lib/site-data";
import { useParams, Navigate } from "react-router-dom";

export default function AiTopicPage() {
  const { slug } = useParams();
  const topic = aiTopics.find((a) => a.slug === slug);

  if (!topic) return <Navigate to="/404" replace />;

  const others = aiTopics.filter((a) => a.slug !== topic.slug);

  return (
    <PageLayout>
      <PageHero eyebrow={topic.name} title={topic.heroTitle} text={topic.heroText} />

      <Section className="pb-16 pt-4">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionTitle eyebrow="Examples" title="What this looks like" />
            <ListGrid items={topic.steps} />
          </div>
          <div className="flex flex-col gap-8">
            {topic.slug === "workflows" && (
              <div>
                <SectionTitle eyebrow="Flow" title="How it runs" />
                <FlowText steps={topic.steps} />
              </div>
            )}
            <ArrowButton to="/start-project">{topic.cta}</ArrowButton>
          </div>
        </div>
      </Section>

      <Section className="pb-20">
        <SectionTitle eyebrow="More AI" title="Keep exploring" />
        <div className="flex flex-wrap gap-3">
          {others.map((o) => (
            <GhostLink key={o.slug} to={`/ai/${o.slug}`}>
              {o.name}
            </GhostLink>
          ))}
          <GhostLink to="/ai">All AI</GhostLink>
        </div>
      </Section>

      <CTASection
        title="Make your product intelligent."
        text="We'll find where AI genuinely helps and integrate it properly."
        to="/contact"
        cta="Add AI"
      />
    </PageLayout>
  );
}