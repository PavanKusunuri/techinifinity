import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "blue" | "green" | "yellow" | "red" | "outline" | "indigo" | "cyan";
}

export function Badge({ className, variant = "default", children, ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium",
        {
          "bg-white/8 text-slate-300 border border-white/10":
            variant === "default",
          "bg-blue-500/15 text-blue-400 border border-blue-500/20":
            variant === "blue",
          "bg-green-500/15 text-green-400 border border-green-500/20":
            variant === "green",
          "bg-yellow-500/15 text-yellow-400 border border-yellow-500/20":
            variant === "yellow",
          "bg-red-500/15 text-red-400 border border-red-500/20":
            variant === "red",
          "border border-white/20 text-slate-400":
            variant === "outline",
          "bg-indigo-500/15 text-indigo-400 border border-indigo-500/20":
            variant === "indigo",
          "bg-cyan-500/15 text-cyan-400 border border-cyan-500/20":
            variant === "cyan",
        },
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
