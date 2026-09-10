import { PageLayout } from "@/components/ui/page-layout";
import { PageHero, Section, QuoteBlock, CTASection, Pill } from "@/components/ui/site-sections";
import { services } from "@/lib/site-data";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function Services() {
  return (
    <PageLayout>
      <PageHero
        eyebrow="Services"
        title="Build the product your idea deserves."
        text="From business websites to custom software, AI-powered products, MVPs, and automation — we turn ideas into working digital products."
      />

      <Section className="pb-8">
        <div className="grid gap-4 md:grid-cols-2">
          {services.map((s, i) => (
            <Link
              key={s.slug}
              to={`/services/${s.slug}`}
              className="group relative flex flex-col justify-between gap-8 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] p-6 transition-colors hover:border-white/25 md:p-8"
            >
              <div className="flex items-start justify-between">
                <span className="text-xs" style={{ color: "rgba(225, 224, 204, 0.4)" }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <div>
                <h3 className="text-xl font-medium tracking-tight sm:text-2xl" style={{ color: "#E1E0CC" }}>
                  {s.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed" style={{ color: "rgba(225, 224, 204, 0.7)" }}>
                  {s.short}
                </p>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex flex-wrap gap-2">
                  <Pill>{s.items[0]}</Pill>
                  <Pill>{s.items[1]}</Pill>
                  <Pill>{s.items[2]}</Pill>
                </div>
                <ArrowRight className="h-5 w-5 shrink-0 transition-transform group-hover:translate-x-1" style={{ color: "#E1E0CC" }} />
              </div>
            </Link>
          ))}
        </div>
      </Section>

      <Section className="pb-16 pt-8 md:pt-16">
        <div className="max-w-2xl">
          <QuoteBlock text="We're not simply selling websites or writing code — we're focused on building products. Solve the problem with the right technology." />
        </div>
      </Section>

      <CTASection
        title="Not sure what you need?"
        text="Tell us what you're trying to do. We'll figure out the right technology together."
        to="/contact"
        cta="Talk to us"
      />
    </PageLayout>
  );
}