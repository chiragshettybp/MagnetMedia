import { useState } from "react";
import { PageLayout } from "@/components/ui/page-layout";
import { PageHero, Section, ArrowButton } from "@/components/ui/site-sections";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const needOptions = [
  "Website",
  "Custom software",
  "AI solution",
  "MVP",
  "Automation",
  "Existing product improvement",
  "Not sure yet",
];

const fieldCls =
  "w-full rounded-2xl border border-white/15 bg-white/[0.03] px-4 py-3 text-sm outline-none transition-colors placeholder:text-white/30 focus:border-white/40";
const labelCls = "mb-2 block text-xs font-medium uppercase tracking-widest";
const labelStyle = { color: "rgba(225, 224, 204, 0.45)" as const };

export default function StartProject() {
  const [sent, setSent] = useState(false);

  return (
    <PageLayout>
      <PageHero
        eyebrow="Start a Project"
        title="Have an idea? Let's make it real."
        text="Tell us what you're trying to build. We'll figure out the right technology, then ship the first real version."
      />

      <Section className="pb-20">
        {sent ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mx-auto max-w-xl rounded-3xl border border-white/10 bg-white/[0.02] p-10 text-center"
          >
            <h2 className="text-2xl font-medium tracking-tight" style={{ color: "#E1E0CC" }}>
              Your idea is on its way.
            </h2>
            <p className="mx-auto mt-3 max-w-sm text-sm leading-relaxed" style={{ color: "rgba(225, 224, 204, 0.7)" }}>
              We'll read it carefully and get back to you about the next step. In the meantime, the
              best ideas are the ones being built.
            </p>
            <div className="mt-8 flex justify-center">
              <ArrowButton to="/work">See what we've built</ArrowButton>
            </div>
          </motion.div>
        ) : (
          <form
            className="mx-auto flex max-w-2xl flex-col gap-6"
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
          >
            <div>
              <label className={labelCls} style={labelStyle}>
                Step 1 — About you
              </label>
              <div className="grid gap-3 sm:grid-cols-2">
                <input required className={fieldCls} placeholder="Your name" />
                <input required type="email" className={fieldCls} placeholder="Your email" />
              </div>
            </div>

            <div>
              <label className={labelCls} style={labelStyle}>
                Step 2 — What do you need?
              </label>
              <div className="flex flex-wrap gap-2">
                {needOptions.map((o) => (
                  <label
                    key={o}
                    className="flex cursor-pointer items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-xs transition-colors hover:border-white/30"
                    style={{ color: "rgba(225, 224, 204, 0.8)" }}
                  >
                    <input type="checkbox" value={o} className="accent-[#E1E0CC]" />
                    {o}
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className={labelCls} style={labelStyle}>
                Step 3 — Your idea
              </label>
              <textarea
                required
                rows={5}
                className={fieldCls}
                placeholder="What are you trying to build? What problem does it solve? Who is it for? What features do you need?"
              />
            </div>

            <div>
              <label className={labelCls} style={labelStyle}>
                Step 4 — Project details (optional)
              </label>
              <div className="grid gap-3 sm:grid-cols-2">
                <input className={fieldCls} placeholder="Budget" />
                <input className={fieldCls} placeholder="Timeline" />
              </div>
            </div>

            <button
              type="submit"
              className="group inline-flex w-fit items-center gap-2 self-start rounded-full bg-primary py-2 pl-6 pr-2 text-sm font-medium text-black transition-all hover:gap-3"
            >
              Submit
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-black transition-transform group-hover:scale-110">
                <ArrowRight className="h-4 w-4" style={{ color: "#E1E0CC" }} />
              </span>
            </button>
          </form>
        )}
      </Section>
    </PageLayout>
  );
}