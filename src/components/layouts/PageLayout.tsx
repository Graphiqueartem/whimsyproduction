import { ReactNode } from "react";

interface PageLayoutProps {
  children: ReactNode;
  className?: string;
}

const PageLayout = ({ children, className = "" }: PageLayoutProps) => {
  return (
    <div className={`min-h-screen bg-background pt-16 ${className}`}>
      <div className="max-w-content mx-auto">
        {children}
      </div>
    </div>
  );
};

export default PageLayout;