import { ReactNode } from "react";

interface PageLayoutProps {
  children: ReactNode;
  className?: string;
}

const PageLayout = ({ children, className = "" }: PageLayoutProps) => {
  return (
    <div className={`min-h-screen bg-background pt-20 ${className}`}>
      <div className="w-full">
        {children}
      </div>
    </div>
  );
};

export default PageLayout;