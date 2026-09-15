import { motion, useInView, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Pressable } from "@/components/ui/pressable";

/* ---------------- WordsPullUp ---------------- */
interface WordsPullUpProps {
  text: string;
  className?: string;
  showAsterisk?: boolean;
  style?: React.CSSProperties;
}

export const WordsPullUp = ({ text, className = "", showAsterisk = false, style }: WordsPullUpProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const words = text.split(" ");

  return (
    <div ref={ref} className={`inline-flex flex-wrap ${className}`} style={style}>
      {words.map((word, i) => {
        const isLast = i === words.length - 1;
        return (
          <motion.span
            key={i}
            initial={{ y: 20, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="inline-block relative"
            style={{ marginRight: isLast ? 0 : "0.25em" }}
          >
            {word}
            {showAsterisk && isLast && (
              <span className="absolute top-[0.65em] -right-[0.3em] text-[0.31em]">*</span>
            )}
          </motion.span>
        );
      })}
    </div>
  );
};

/* ---------------- WordsPullUpMultiStyle ---------------- */
interface Segment {
  text: string;
  className?: string;
}

interface WordsPullUpMultiStyleProps {
  segments: Segment[];
  className?: string;
  style?: React.CSSProperties;
}

export const WordsPullUpMultiStyle = ({ segments, className = "", style }: WordsPullUpMultiStyleProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  const words: { word: string; className?: string }[] = [];
  segments.forEach((seg) => {
    seg.text.split(" ").forEach((w) => {
      if (w) words.push({ word: w, className: seg.className });
    });
  });

  return (
    <div ref={ref} className={`inline-flex flex-wrap justify-center ${className}`} style={style}>
      {words.map((w, i) => (
        <motion.span
          key={i}
          initial={{ y: 20, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
          className={`inline-block ${w.className ?? ""}`}
          style={{ marginRight: "0.25em" }}
        >
          {w.word}
        </motion.span>
      ))}
    </div>
  );
};

/* ---------------- Hero ---------------- */
const navItems = [
  { label: "Services", to: "/services" },
  { label: "Approach", to: "/process" },
  { label: "Work", to: "/work" },
  { label: "About", to: "/about" },
];

const PrismaHero = () => {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const [videoOn, setVideoOn] = useState(false);

  useEffect(() => {
    const id = window.setTimeout(() => setVideoOn(true), 350);
    return () => window.clearTimeout(id);
  }, []);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 0.7], [1, 0.98]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.55]);

  return (
    <section ref={ref} className="h-dvh w-full">
      <div className="relative h-full w-full overflow-hidden">
        <motion.div
          className="absolute inset-0"
          style={reduce ? undefined : { scale, opacity }}
        >
        
        {/* Background video — mounted after first paint to prioritize text LCP */}
        {videoOn && (
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 h-full w-full object-cover"
            src="/hero%20video.mp4"
          />
        )}

        {/* Noise overlay */}
        <div className="noise-overlay pointer-events-none absolute inset-0 opacity-[0.7] mix-blend-overlay" />

        {/* Gradient overlay */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60" />

        {/* Navbar */}
        <nav className="absolute left-0 right-0 top-0 z-20 flex items-center justify-between px-2 sm:px-4 md:px-8">
          <Link to="/about/story" className="flex items-center gap-2 rounded-b-2xl bg-black py-2 pl-3 pr-5 transition-transform duration-150 active:scale-[0.97] md:pl-5 md:pr-8">
            <img src="/logo.png" alt="Magnet Media logo" className="h-6 w-6 rounded-full object-cover sm:h-7 sm:w-7" />
            <span
              className="text-[10px] transition-colors duration-200 sm:text-xs md:text-sm"
              style={{ color: "rgba(192, 192, 192, 0.8)" }}
            >
              Our Story
            </span>
          </Link>
          <div className="flex items-center gap-3 rounded-b-2xl bg-black px-4 py-2 sm:gap-6 md:rounded-b-3xl md:px-8 lg:gap-14">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="text-[10px] transition-colors duration-200 sm:text-xs md:text-sm"
                style={{ color: "rgba(192, 192, 192, 0.8)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#C0C0C0")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(192, 192, 192, 0.8)")}
              >
                <span className="inline-block transition-transform duration-150 active:scale-95">
                  {item.label}
                </span>
              </Link>
            ))}
          </div>
        </nav>

        {/* Hero content */}
        <div className="absolute bottom-0 left-0 right-0 px-4 pb-2 sm:px-6 md:px-10">
          <div className="grid grid-cols-12 items-end gap-4">
            
            <div className="col-span-12 lg:col-span-8">
              <h1
                className="font-medium leading-[0.85] tracking-[-0.07em] text-[18vw] sm:text-[17vw] md:text-[16vw] lg:text-[15vw] xl:text-[14vw] 2xl:text-[14vw]"
                style={{ color: "#C0C0C0" }}
              >
                <WordsPullUp text="Magnet Media" showAsterisk />
              </h1>
            </div>

            <div className="col-span-12 flex flex-col gap-5 pb-6 lg:col-span-4 lg:pb-10">
              
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="text-xs text-primary/70 sm:text-sm md:text-base"
                style={{ lineHeight: 1.2 }}
              >
                Magnet Media is a modern creative and performance marketing agency. We help brands get noticed, build attention, and turn that attention into growth — through ads, content, video, and creative strategy that make people stop, watch, remember, and act.
              </motion.p>

              <Link to="/start-project" className="inline-flex self-start">
                <Pressable
                  pressScale={0.97}
                  className="group inline-flex items-center gap-2 rounded-full bg-primary py-1 pl-5 pr-1 text-sm font-medium text-black transition-all duration-200 hover:gap-3 sm:text-base"
                >
                  Work With Us
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-black transition-transform duration-200 group-hover:scale-110 sm:h-10 sm:w-10">
                    <ArrowRight className="h-4 w-4" style={{ color: "#C0C0C0" }} />
                  </span>
                </Pressable>
              </Link>

            </div>
          </div>
        </div>
        </motion.div>
      </div>
    </section>
  );
};

export { PrismaHero }