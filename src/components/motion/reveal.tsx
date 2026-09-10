import { motion, useReducedMotion } from "framer-motion";
import type { CSSProperties, ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  delay?: number;
  y?: number;
  duration?: number;
}

export const Reveal = ({
  children,
  className,
  style,
  delay = 0,
  y = 12,
  duration = 0.55,
}: RevealProps) => {
  const reduce = useReducedMotion();

  if (reduce) {
    return (
      <div className={className} style={style}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
};