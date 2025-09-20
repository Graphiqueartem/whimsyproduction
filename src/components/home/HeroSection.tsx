import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import heroMain from "@/assets/hero-main.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2)), url(${heroMain})`
        }}
      />
      
      <div className="relative z-10 container mx-auto px-6 sm:px-8 lg:px-12 text-center text-white">
        <div className="max-w-5xl mx-auto space-y-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in">
            Where Storytelling
            <span className="block text-gold-warm">Inspires Action</span>
          </h1>
          
          <p className="text-lg sm:text-xl lg:text-2xl text-ivory/90 leading-relaxed max-w-4xl mx-auto">
            Whimsy Films is a global production house bringing folklore, wildlife, and magical 
            storytelling to life — to inspire children, empower communities, and protect our natural world.
          </p>
          
          <div className="flex flex-col gap-4 sm:flex-row sm:gap-6 justify-center items-center pt-4">
            <Button variant="hero" size="xl" asChild className="w-full sm:w-auto min-w-[200px]">
              <Link to="/partnerships">Partner With Us</Link>
            </Button>
            <Button variant="warm" size="xl" asChild className="w-full sm:w-auto min-w-[200px]">
              <Link to="/vision">Discover Our Vision</Link>
            </Button>
            <Button variant="magical" size="xl" asChild className="w-full sm:w-auto min-w-[200px]">
              <Link to="/get-involved">Join the Movement</Link>
            </Button>
          </div>

          <div className="text-ivory/80 text-sm sm:text-base uppercase tracking-wider pt-6">
            Stories connect us. Culture inspires us. Together we protect our planet.
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;