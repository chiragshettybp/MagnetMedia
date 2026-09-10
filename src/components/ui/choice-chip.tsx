import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ChoiceChipProps {
  selected: boolean;
  onClick: () => void;
  children: ReactNode;
  className?: string;
}

export const ChoiceChip = ({ selected, onClick, children, className }: ChoiceChipProps) => (
  <motion.button
    type="button"
    onClick={onClick}
    whileTap={{ scale: 0.97 }}
    transition={{ type: "spring", stiffness: 500, damping: 30 }}
    className={cn(
      "rounded-full border px-4 py-1.5 text-xs transition-all duration-200 ease-[cubic-bezier(0.25,0.1,0.25,1)]",
      className
    )}
    style={{
      color: selected ? "#0a0a0a" : "rgba(225, 224, 204, 0.7)",
      background: selected ? "#E1E0CC" : "transparent",
      borderColor: selected ? "#E1E0CC" : "rgba(225, 224, 204, 0.15)",
      WebkitTapHighlightColor: "transparent",
    }}
  >
    {children}
  </motion.button>
);
