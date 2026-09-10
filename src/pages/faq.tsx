import { useState } from "react";
import { PageLayout } from "@/components/ui/page-layout";
import { PageHero, Section, SectionTitle, CTASection } from "@/components/ui/site-sections";
import { faqs } from "@/lib/site-data";
import { AccordionItem } from "@/components/ui/accordion-item";

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <PageLayout>
      <PageHero
        eyebrow="FAQ"
        title="Frequently asked questions."
        text="The honest answers. If you don't see yours, just ask."
      />

      <Section className="pb-16">
        <div className="mx-auto max-w-3xl">
          <div className="flex flex-col gap-3">
            {faqs.map((f, i) => (
              <AccordionItem
                key={f.q}
                question={f.q}
                answer={f.a}
                isOpen={open === i}
                onToggle={() => setOpen(open === i ? null : i)}
              />
            ))}
          </div>
        </div>
      </Section>

      <Section className="pb-20">
        <SectionTitle eyebrow="Still curious" title="Ask us directly" />
      </Section>

      <CTASection
        title="Got a question we didn't answer?"
        text="Send it over. If we don't know, we'll say so."
        to="/contact"
        cta="Ask a question"
      />
    </PageLayout>
  );
}
