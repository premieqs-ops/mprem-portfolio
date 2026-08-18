import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface BadgeProps {
  children: ReactNode;
  className?: string;
  variant?: "default" | "accent" | "outline";
}

export default function Badge({
  children,
  className,
  variant = "default",
}: BadgeProps) {
  const variants = {
    default:
      "border border-accent/30 bg-accent/10 text-accent-light",
    accent: "bg-accent text-white border-transparent",
    outline: "border border-border text-foreground-muted bg-transparent",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1 text-xs font-medium tracking-wider uppercase rounded-full",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
