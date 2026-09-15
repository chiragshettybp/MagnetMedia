import { useState, type FormEvent } from "react";
import { PageLayout } from "@/components/ui/page-layout";
import { PageHero, Section, ArrowButton } from "@/components/ui/site-sections";
import { Mail } from "lucide-react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Pressable } from "@/components/ui/pressable";
import { ArrowRight } from "lucide-react";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [projectType, setProjectType] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSent(true);
    }, 800);
  };

  return (
    <PageLayout>
      <PageHero
        eyebrow="Contact"
        title="Let's talk about your brand."
        text="Email, socials, or a project enquiry — however you reach us, we reply."
      />

      <Section className="pb-16">
        <div className="mb-10 flex flex-col gap-2 text-sm" style={{ color: "rgba(192, 192, 192, 0.7)" }}>
          <a href="mailto:magnetmedia@gmail.com" className="inline-flex items-center gap-2 transition-colors duration-200 hover:text-white">
            <Mail className="h-4 w-4" />
            magnetmedia@gmail.com
          </a>
          <p className="text-xs" style={{ color: "rgba(192, 192, 192, 0.4)" }}>
            Socials: coming as we ship things worth sharing.
          </p>
        </div>

        {sent ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            className="max-w-xl rounded-3xl border border-white/10 bg-white/[0.02] p-10 text-center"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.15, type: "spring", stiffness: 400, damping: 25 }}
              className="mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-[#C0C0C0]/10"
            >
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="#C0C0C0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <motion.path
                  d="M5 12l5 5L19 7"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
                />
              </svg>
            </motion.div>
            <h2 className="text-2xl font-medium tracking-tight" style={{ color: "#C0C0C0" }}>
              Message sent. Thanks.
            </h2>
            <p className="mx-auto mt-3 max-w-sm text-sm leading-relaxed" style={{ color: "rgba(192, 192, 192, 0.7)" }}>
              We'll get back to you as soon as we can. While you wait — browse what we've already built.
            </p>
            <div className="mt-8 flex justify-center">
              <ArrowButton to="/work">View our work</ArrowButton>
            </div>
          </motion.div>
        ) : (
          <form
            className="mx-auto flex max-w-2xl flex-col gap-6"
            onSubmit={handleSubmit}
            noValidate
          >
            <div className="grid gap-3 sm:grid-cols-2">
              <Input
                required
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <Input
                required
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <Input
              placeholder="Company (optional)"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
            />
            <Input
              placeholder="Project type (ads, content, video, social, brand, strategy…)"
              value={projectType}
              onChange={(e) => setProjectType(e.target.value)}
            />
            <Textarea
              required
              rows={5}
              placeholder="What are you building?"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <Pressable
              type="submit"
              pressScale={0.97}
              disabled={submitting}
              className="group inline-flex w-fit items-center gap-2 self-start rounded-full bg-primary py-2 pl-6 pr-2 text-sm font-medium text-black transition-all duration-200 hover:gap-3"
            >
              {submitting ? (
                <>
                  <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                  Sending…
                </>
              ) : (
                <>
                  Start a Project
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-black transition-transform duration-200 group-hover:scale-110">
                    <ArrowRight className="h-4 w-4" style={{ color: "#C0C0C0" }} />
                  </span>
                </>
              )}
            </Pressable>
          </form>
        )}
      </Section>
    </PageLayout>
  );
}
