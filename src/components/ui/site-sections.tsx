import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Pressable } from "@/components/ui/pressable";
import { Reveal } from "@/components/motion/reveal";
import type { ReactNode } from "react";

export const PageHero = ({
  eyebrow,
  title,
  text,
}: {
  eyebrow?: string;
  title: string;
  text?: string;
}) => {
  return (
    <section className="relative mx-auto max-w-7xl px-4 pb-8 pt-16 md:px-8 md:pt-24">
      {eyebrow && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-4 text-xs font-medium uppercase tracking-widest"
          style={{ color: "rgba(225, 224, 204, 0.45)" }}
        >
          {eyebrow}
        </motion.p>
      )}
      <motion.h1
        initial={{ y: 24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-4xl font-medium leading-[1.02] tracking-[-0.04em] text-[clamp(2.5rem,8vw,6.5rem)]"
        style={{ color: "#E1E0CC" }}
      >
        {title}
      </motion.h1>
      {text && (
        <motion.p
          initial={{ y: 16, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 max-w-2xl text-sm leading-relaxed sm:text-base"
          style={{ color: "rgba(225, 224, 204, 0.7)" }}
        >
          {text}
        </motion.p>
      )}
    </section>
  );
};

export const Section = ({
  className = "",
  children,
}: {
  className?: string;
  children: ReactNode;
}) => (
  <section className={`mx-auto max-w-7xl px-4 md:px-8 ${className}`}>{children}</section>
);

export const SectionTitle = ({ eyebrow, title, text }: { eyebrow?: string; title: string; text?: string }) => (
  <Reveal className="mb-8 flex flex-col gap-3 md:mb-12 md:flex-row md:items-end md:justify-between">
    <div>
      {eyebrow && (
        <p className="mb-2 text-xs font-medium uppercase tracking-widest" style={{ color: "rgba(225, 224, 204, 0.45)" }}>
          {eyebrow}
        </p>
      )}
      <h2 className="max-w-2xl text-2xl font-medium tracking-[-0.02em] sm:text-3xl md:text-4xl" style={{ color: "#E1E0CC" }}>
        {title}
      </h2>
    </div>
    {text && (
      <p className="max-w-md text-sm leading-relaxed" style={{ color: "rgba(225, 224, 204, 0.7)" }}>
        {text}
      </p>
    )}
  </Reveal>
);

export const ArrowButton = ({ to, children }: { to: string; children: ReactNode }) => (
  <Link to={to} className="inline-flex w-fit">
    <Pressable
      pressScale={0.97}
      className="group inline-flex w-fit items-center gap-2 rounded-full bg-primary py-1.5 pl-5 pr-1.5 text-sm font-medium text-black transition-all duration-200 hover:gap-3"
    >
      {children}
      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-black transition-transform duration-200 group-hover:scale-110">
        <ArrowRight className="h-4 w-4" style={{ color: "#E1E0CC" }} />
      </span>
    </Pressable>
  </Link>
);

export const GhostLink = ({ to, children }: { to: string; children: ReactNode }) => (
  <Link to={to} className="inline-flex">
    <Pressable
      pressScale={0.97}
      className="group inline-flex items-center gap-2 text-sm font-medium transition-colors duration-200 hover:text-white"
      style={{ color: "#E1E0CC" }}
    >
      {children}
      <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
    </Pressable>
  </Link>
);

export const ListGrid = ({ items }: { items: string[] }) => (
  <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
    {items.map((i, idx) => (
      <Reveal key={i} delay={idx * 0.04} y={10}>
        <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.02] px-4 py-3">
          <span className="mt-0.5 text-xs" style={{ color: "rgba(225, 224, 204, 0.4)" }}>
            {String(idx + 1).padStart(2, "0")}
          </span>
          <span className="text-sm" style={{ color: "rgba(225, 224, 204, 0.85)" }}>
            {i}
          </span>
        </div>
      </Reveal>
    ))}
  </div>
);

export const FlowText = ({ steps }: { steps: string[] }) => (
  <div className="flex flex-col gap-1">
    {steps.map((s, i) => (
      <div key={s} className="flex flex-wrap items-center gap-2">
        <code
          className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs sm:text-sm"
          style={{ color: "rgba(225, 224, 204, 0.9)" }}
        >
          {s}
        </code>
        {i < steps.length - 1 && <ArrowDown />}
      </div>
    ))}
  </div>
);

const ArrowDown = () => (
  <span className="text-xs px-2" style={{ color: "rgba(225, 224, 204, 0.4)" }}>
    ↓
  </span>
);

export const CTASection = ({
  title,
  text,
  to,
  cta,
}: {
  title: string;
  text?: string;
  to: string;
  cta: string;
}) => (
  <Section className="pb-20 md:pb-28">
    <Reveal className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-transparent px-6 py-14 text-center md:px-12 md:py-20">
      <div className="noise-overlay pointer-events-none absolute inset-0 opacity-[0.35] mix-blend-overlay" />
      <h2 className="mx-auto max-w-3xl text-3xl font-medium tracking-[-0.03em] sm:text-4xl md:text-5xl" style={{ color: "#E1E0CC" }}>
        {title}
      </h2>
      {text && (
        <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed" style={{ color: "rgba(225, 224, 204, 0.7)" }}>
          {text}
        </p>
      )}
      <div className="mt-8 flex justify-center">
        <ArrowButton to={to}>{cta}</ArrowButton>
      </div>
    </Reveal>
  </Section>
);

export const QuoteBlock = ({ text }: { text: string }) => (
  <Reveal>
    <blockquote
      className="border-l-2 pl-5 text-lg font-medium leading-snug sm:text-xl"
      style={{ borderColor: "rgba(225, 224, 204, 0.3)", color: "#E1E0CC" }}
    >
      {text}
    </blockquote>
  </Reveal>
);

export const Pill = ({ children }: { children: ReactNode }) => (
  <span
    className="rounded-full border border-white/15 px-3 py-1 text-xs"
    style={{ color: "rgba(225, 224, 204, 0.8)" }}
  >
    {children}
  </span>
);