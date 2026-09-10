import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface CheckboxProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label: string;
  className?: string;
}

export const Checkbox = ({ checked, onChange, label, className }: CheckboxProps) => (
  <motion.button
    type="button"
    role="checkbox"
    aria-checked={checked}
    onClick={() => onChange(!checked)}
    whileTap={{ scale: 0.97 }}
    transition={{ type: "spring", stiffness: 500, damping: 30 }}
    className={cn(
      "flex items-center gap-2.5 rounded-full border px-4 py-2 text-left text-xs transition-all duration-200 ease-[cubic-bezier(0.25,0.1,0.25,1)]",
      checked
        ? "border-[#E1E0CC]/30 bg-[#E1E0CC]/[0.08]"
        : "border-white/15 bg-transparent hover:border-white/25 hover:bg-white/[0.02]",
      className
    )}
    style={{ WebkitTapHighlightColor: "transparent" }}
  >
    <span className="relative flex h-4 w-4 shrink-0 items-center justify-center">
      <span
        className={cn(
          "h-full w-full rounded-[5px] border transition-all duration-200 ease-[cubic-bezier(0.25,0.1,0.25,1)]",
          checked ? "border-[#E1E0CC] bg-[#E1E0CC]" : "border-white/30"
        )}
      >
        <AnimatePresence>
          {checked && (
            <motion.svg
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
              className="absolute inset-0 h-full w-full"
              viewBox="0 0 16 16"
              fill="none"
            >
              <motion.path
                d="M3.5 8L6.5 11L12.5 5"
                stroke="#000"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              />
            </motion.svg>
          )}
        </AnimatePresence>
      </span>
    </span>
    <span style={{ color: "rgba(225, 224, 204, 0.8)" }}>{label}</span>
  </motion.button>
);