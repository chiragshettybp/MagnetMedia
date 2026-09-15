import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface AccordionItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

export const AccordionItem = ({ question, answer, isOpen, onToggle }: AccordionItemProps) => (
  <div
    className={cn(
      "overflow-hidden rounded-2xl border transition-colors duration-200",
      isOpen ? "border-white/10 bg-white/[0.02]" : "border-white/10 bg-white/[0.02]"
    )}
  >
    <motion.button
      onClick={onToggle}
      whileTap={{ scale: 0.995 }}
      transition={{ type: "spring", stiffness: 500, damping: 30 }}
      className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
      style={{ WebkitTapHighlightColor: "transparent" }}
    >
      <span className="text-sm font-medium sm:text-base" style={{ color: "#C0C0C0" }}>
        {question}
      </span>
      <motion.span
        animate={{ rotate: isOpen ? 180 : 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
        className="shrink-0"
      >
        <ChevronDown
          className="h-4 w-4"
          style={{ color: "rgba(192, 192, 192, 0.7)" }}
        />
      </motion.span>
    </motion.button>
    <AnimatePresence initial={false}>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <div className="border-t border-white/10 px-5 py-4">
            <p className="text-sm leading-relaxed" style={{ color: "rgba(192, 192, 192, 0.7)" }}>
              {answer}
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);
