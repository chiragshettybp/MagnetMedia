import { PageLayout } from "@/components/ui/page-layout";
import {
  PageHero,
  Section,
  QuoteBlock,
  CTASection,
  Pill,
} from "@/components/ui/site-sections";
import { aiTopics } from "@/lib/site-data";
import { Link } from "react-router-dom";
import { Reveal } from "@/components/motion/reveal";

export default function Ai() {
  return (
    <PageLayout>
      <PageHero
        eyebrow="AI"
        title="AI isn't the product. It's what makes the product smarter."
        text="We use AI where it creates real value — eliminating repetitive work, improving decisions, assisting users, and unlocking capabilities that weren't possible before."
      />

      <Section className="pb-16">
        <div className="grid gap-4 md:grid-cols-3">
          {aiTopics.map((a, i) => (
            <Reveal key={a.slug} delay={i * 0.05} className="h-full">
              <Link
                to={`/ai/${a.slug}`}
                className="group flex h-full flex-col justify-between gap-6 rounded-3xl border border-white/10 bg-white/[0.02] p-6 transition-all duration-200 hover:border-white/25 active:scale-[0.985]"
              >
              <span className="text-xs" style={{ color: "rgba(225, 224, 204, 0.4)" }}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="text-lg font-medium tracking-tight sm:text-xl" style={{ color: "#E1E0CC" }}>
                {a.name}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(225, 224, 204, 0.7)" }}>
                {a.short}
              </p>
            </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="pb-20">
        <div className="max-w-3xl">
          <QuoteBlock text="Use AI where it makes the product better — not just where it makes the product sound better." />
          <div className="mt-8 flex flex-wrap gap-2">
            <Pill>Faster development</Pill>
            <Pill>Smarter products</Pill>
            <Pill>Less repetitive work</Pill>
            <Pill>Better user experiences</Pill>
          </div>
        </div>
      </Section>

      <CTASection
        title="Build something with AI."
        text="Tell us where your product feels repetitive or limited — AI might be the answer."
        to="/start-project"
        cta="Build With AI"
      />
    </PageLayout>
  );
}