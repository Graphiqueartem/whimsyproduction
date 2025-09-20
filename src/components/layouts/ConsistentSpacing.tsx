import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ConsistentSpacingProps {
  children: ReactNode;
  className?: string;
  gap?: "small" | "medium" | "large";
}

const ConsistentSpacing = ({ children, className = "", gap = "medium" }: ConsistentSpacingProps) => {
  const gapClasses = {
    small: "space-y-4",
    medium: "space-y-8",
    large: "space-y-12"
  };

  return (
    <div className={cn(gapClasses[gap], className)}>
      {children}
    </div>
  );
};

export default ConsistentSpacing;