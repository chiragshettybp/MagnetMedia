import { forwardRef, type TextareaHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: boolean;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, error, ...props }, ref) => (
    <textarea
      ref={ref}
      className={cn(
        "w-full resize-none rounded-2xl border bg-white/[0.03] px-4 py-3 text-sm text-[#C0C0C0] placeholder:text-white/30",
        "transition-all duration-200 ease-[cubic-bezier(0.25,0.1,0.25,1)]",
        "hover:bg-white/[0.05] hover:border-white/20",
        "focus:bg-white/[0.05] focus:border-white/40 focus:outline-none focus:ring-1 focus:ring-white/10",
        error
          ? "border-red-500/50 focus:border-red-500/70 focus:ring-red-500/20"
          : "border-white/15",
        className
      )}
      {...props}
    />
  )
);
Textarea.displayName = "Textarea";
