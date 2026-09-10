import { PageLayout } from "@/components/ui/page-layout";
import {
  PageHero,
  Section,
  SectionTitle,
  ListGrid,
  CTASection,
  Pill,
  ArrowButton,
  GhostLink,
} from "@/components/ui/site-sections";
import { products } from "@/lib/site-data";
import { useParams, Navigate } from "react-router-dom";

export default function ProductPage() {
  const { slug } = useParams();
  const product = products.find((p) => p.slug === slug);

  if (!product) return <Navigate to="/404" replace />;

  const others = products.filter((p) => p.slug !== product.slug);

  return (
    <PageLayout>
      <PageHero eyebrow={`${product.status} · Product`} title={product.name} text={product.short} />

      <Section className="pb-16 pt-4">
        <div className="mb-10">
          <Pill>{product.status}</Pill>
        </div>
        <div className="grid gap-10 md:grid-cols-2">
          <div className="flex flex-col gap-10">
            <div>
              <SectionTitle eyebrow="The problem" title="Why it exists" />
              <p className="text-sm leading-relaxed" style={{ color: "rgba(225, 224, 204, 0.7)" }}>
                {product.problem}
              </p>
            </div>
            <div>
              <SectionTitle eyebrow="The solution" title="What it does" />
              <p className="text-sm leading-relaxed" style={{ color: "rgba(225, 224, 204, 0.7)" }}>
                {product.solution}
              </p>
            </div>
            <div>
              <SectionTitle eyebrow="Product" title="In detail" />
              <p className="text-sm leading-relaxed" style={{ color: "rgba(225, 224, 204, 0.7)" }}>
                {product.description}
              </p>
            </div>
          </div>
          <div>
            <SectionTitle eyebrow="Features" title="What's inside" />
            <ListGrid items={product.features} />
            <div className="mt-10">
              <ArrowButton to="/contact">{product.cta}</ArrowButton>
            </div>
          </div>
        </div>
      </Section>

      <Section className="pb-20">
        <SectionTitle eyebrow="More" title="Other products" />
        <div className="flex flex-wrap gap-3">
          {others.map((o) => (
            <GhostLink key={o.slug} to={`/products/${o.slug}`}>
              {o.name}
            </GhostLink>
          ))}
          <GhostLink to="/products">All products</GhostLink>
          <GhostLink to="/products/labs">Labs</GhostLink>
        </div>
      </Section>

      <CTASection
        title="Want something like this?"
        text="We can build it for you — or with you."
        to="/start-project"
        cta="Tell us your idea"
      />
    </PageLayout>
  );
}