import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  children: ReactNode;
  className?: string;
  background?: "default" | "gradient-warm" | "gradient-forest" | "gradient-hero" | "forest-deep";
  padding?: "default" | "large" | "small" | "none";
  spacing?: "default" | "large" | "small" | "none";
}

const Section = ({ 
  children, 
  className = "", 
  background = "default",
  padding = "default",
  spacing = "default"
}: SectionProps) => {
  const backgroundClasses = {
    default: "bg-background",
    "gradient-warm": "bg-gradient-warm",
    "gradient-forest": "bg-gradient-forest", 
    "gradient-hero": "bg-gradient-hero text-white",
    "forest-deep": "bg-forest-deep text-ivory"
  };

  const paddingClasses = {
    none: "",
    small: "py-8",
    default: "py-12 lg:py-16",
    large: "py-16 lg:py-24"
  };

  const spacingClasses = {
    none: "",
    small: "space-y-6",
    default: "space-y-8 lg:space-y-12",
    large: "space-y-12 lg:space-y-16"
  };

  return (
    <section className={cn(
      backgroundClasses[background],
      paddingClasses[padding],
      className
    )}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className={spacingClasses[spacing]}>
          {children}
        </div>
      </div>
    </section>
  );
};

export default Section;