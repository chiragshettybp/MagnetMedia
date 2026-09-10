import { forwardRef, type InputHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, error, ...props }, ref) => (
    <input
      ref={ref}
      className={cn(
        "w-full rounded-2xl border bg-white/[0.03] px-4 py-3 text-sm text-[#E1E0CC] placeholder:text-white/30",
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
Input.displayName = "Input";
