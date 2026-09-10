import { useState } from "react";
import { PageLayout } from "@/components/ui/page-layout";
import { PageHero, Section, ArrowButton } from "@/components/ui/site-sections";
import { Mail, ArrowRight } from "lucide-react";

export default function Contact() {
  const [sent, setSent] = useState(false);

  const fieldCls =
    "w-full rounded-2xl border border-white/15 bg-white/[0.03] px-4 py-3 text-sm outline-none transition-colors placeholder:text-white/30 focus:border-white/40";

  return (
    <PageLayout>
      <PageHero
        eyebrow="Contact"
        title="Let's talk about what you're building."
        text="Email, socials, or a project enquiry — however you reach us, we reply."
      />

      <Section className="pb-16">
        <div className="mb-10 flex flex-col gap-2 text-sm" style={{ color: "rgba(225, 224, 204, 0.7)" }}>
          <a href="mailto:outmaded@gmail.com" className="inline-flex items-center gap-2 transition-colors hover:text-white">
            <Mail className="h-4 w-4" />
            outmaded@gmail.com
          </a>
          <p className="text-xs" style={{ color: "rgba(225, 224, 204, 0.4)" }}>
            Socials: coming as we ship things worth sharing.
          </p>
        </div>

        {sent ? (
          <div className="max-w-xl rounded-3xl border border-white/10 bg-white/[0.02] p-10 text-center">
            <h2 className="text-2xl font-medium tracking-tight" style={{ color: "#E1E0CC" }}>
              Message sent. Thanks.
            </h2>
            <p className="mx-auto mt-3 max-w-sm text-sm leading-relaxed" style={{ color: "rgba(225, 224, 204, 0.7)" }}>
              We'll get back to you as soon as we can. While you wait — browse what we've already built.
            </p>
            <div className="mt-8 flex justify-center">
              <ArrowButton to="/work">View our work</ArrowButton>
            </div>
          </div>
        ) : (
          <form
            className="mx-auto flex max-w-2xl flex-col gap-6"
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
          >
            <div className="grid gap-3 sm:grid-cols-2">
              <input required className={fieldCls} placeholder="Your name" />
              <input required type="email" className={fieldCls} placeholder="Your email" />
            </div>
            <input className={fieldCls} placeholder="Company (optional)" />
            <input className={fieldCls} placeholder="Project type (website, software, AI, MVP, automation…)" />
            <textarea required rows={5} className={fieldCls} placeholder="What are you building?" />
            <button
              type="submit"
              className="group inline-flex w-fit items-center gap-2 self-start rounded-full bg-primary py-2 pl-6 pr-2 text-sm font-medium text-black transition-all hover:gap-3"
            >
              Start a Project
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