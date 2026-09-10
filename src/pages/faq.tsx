import { useState } from "react";
import { PageLayout } from "@/components/ui/page-layout";
import { PageHero, Section, SectionTitle, CTASection } from "@/components/ui/site-sections";
import { ChevronDown } from "lucide-react";
import { faqs } from "@/lib/site-data";

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
            {faqs.map((f, i) => {
              const isOpen = open === i;
              return (
                <div
                  key={f.q}
                  className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02]"
                >
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                  >
                    <span className="text-sm font-medium sm:text-base" style={{ color: "#E1E0CC" }}>
                      {f.q}
                    </span>
                    <ChevronDown
                      className={`h-4 w-4 shrink-0 transition-transform ${isOpen ? "rotate-180" : ""}`}
                      style={{ color: "rgba(225, 224, 204, 0.7)" }}
                    />
                  </button>
                  {isOpen && (
                    <div className="border-t border-white/10 px-5 py-4">
                      <p className="text-sm leading-relaxed" style={{ color: "rgba(225, 224, 204, 0.7)" }}>
                        {f.a}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
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