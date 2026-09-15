import { motion, AnimatePresence } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface FormFieldProps {
  label?: string;
  error?: string;
  children: ReactNode;
  className?: string;
}

export const FormField = ({ label, error, children, className }: FormFieldProps) => (
  <div className={cn("flex flex-col gap-2", className)}>
    {label && (
      <label className="text-xs font-medium uppercase tracking-widest" style={{ color: "rgba(192, 192, 192, 0.45)" }}>
        {label}
      </label>
    )}
    {children}
    <AnimatePresence>
      {error && (
        <motion.p
          initial={{ opacity: 0, y: -4, height: 0 }}
          animate={{ opacity: 1, y: 0, height: "auto" }}
          exit={{ opacity: 0, y: -4, height: 0 }}
          transition={{ duration: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-xs"
          style={{ color: "rgba(239, 68, 68, 0.8)" }}
        >
          {error}
        </motion.p>
      )}
    </AnimatePresence>
  </div>
);
