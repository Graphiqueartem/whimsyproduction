import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const CallToActionSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-forest-deep mb-8">
            Join the Global Movement
          </h2>
          <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
            Every story matters. Every partnership creates change. Every action protects our future.
          </p>
          
          <div className="flex flex-col gap-4 sm:flex-row sm:gap-6 justify-center">
            <Button variant="hero" size="xl" asChild>
              <Link to="/partnerships">Partner With Us</Link>
            </Button>
            <Button variant="magical" size="xl" asChild>
              <Link to="/get-involved">Support Wildlife Storytelling</Link>
            </Button>
            <Button variant="warm" size="xl" asChild>
              <Link to="/get-involved">Get Involved</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;