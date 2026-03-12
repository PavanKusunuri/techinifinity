import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "blue" | "green" | "yellow" | "red" | "outline";
}

export function Badge({ className, variant = "default", children, ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium",
        {
          "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300":
            variant === "default",
          "bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300":
            variant === "blue",
          "bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300":
            variant === "green",
          "bg-yellow-100 dark:bg-yellow-900 text-yellow-700 dark:text-yellow-300":
            variant === "yellow",
          "bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300":
            variant === "red",
          "border border-current text-slate-600 dark:text-slate-400":
            variant === "outline",
        },
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
