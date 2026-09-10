import { forwardRef } from "react";
import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface PressableProps extends Omit<HTMLMotionProps<"button">, "ref"> {
  pressScale?: number;
  disabled?: boolean;
}

export const Pressable = forwardRef<HTMLButtonElement, PressableProps>(
  ({ pressScale = 0.97, children, className, disabled, style, ...props }, ref) => (
    <motion.button
      ref={ref}
      whileTap={disabled ? undefined : { scale: pressScale }}
      transition={{ type: "spring", stiffness: 500, damping: 30 }}
      className={cn(
        "cursor-pointer select-none",
        disabled && "pointer-events-none opacity-50",
        className
      )}
      style={{ WebkitTapHighlightColor: "transparent", ...style }}
      disabled={disabled}
      {...props}
    >
      {children}
    </motion.button>
  )
);
Pressable.displayName = "Pressable";
