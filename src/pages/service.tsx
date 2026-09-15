import { PageLayout } from "@/components/ui/page-layout";
import {
  PageHero,
  Section,
  SectionTitle,
  ListGrid,
  QuoteBlock,
  CTASection,
  GhostLink,
  ArrowButton,
} from "@/components/ui/site-sections";
import { services } from "@/lib/site-data";
import { useParams, Navigate } from "react-router-dom";

export default function ServicePage() {
  const { slug } = useParams();
  const service = services.find((s) => s.slug === slug);

  if (!service) return <Navigate to="/404" replace />;

  const others = services.filter((s) => s.slug !== service.slug);

  return (
    <PageLayout>
      <PageHero eyebrow={service.name} title={service.heroTitle} text={service.heroText} />

      <Section className="pb-16 pt-4">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionTitle eyebrow="What we build" title="What's included" />
            <ListGrid items={service.items} />
          </div>
          <div className="flex flex-col justify-end gap-8">
            <QuoteBlock text={service.next} />
            <ArrowButton to="/start-project">{service.cta}</ArrowButton>
          </div>
        </div>
      </Section>

      <Section className="pb-20">
        <SectionTitle eyebrow="More services" title="Keep exploring" />
        <div className="flex flex-wrap gap-3">
          {others.map((o) => (
            <GhostLink key={o.slug} to={`/services/${o.slug}`}>
              {o.name}
            </GhostLink>
          ))}
          <GhostLink to="/services">All services</GhostLink>
        </div>
      </Section>

      <CTASection
        title="Ready to make it magnetic?"
        text="Tell us about your brand and goals — we'll build the right creative and performance approach around it."
        to="/contact"
        cta={`${service.cta}`}
      />
    </PageLayout>
  );
}