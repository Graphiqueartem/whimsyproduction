import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import culturalPuppetry from "@/assets/cultural-puppetry.jpg";
import culturalStorytelling1 from "@/assets/cultural-storytelling-1.jpg";

const IntroSection = () => {
  return (
    <>
      {/* Inspirational Quote */}
      <section className="py-8 bg-gradient-forest">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <blockquote className="text-lg sm:text-xl font-serif italic text-forest-deep max-w-4xl mx-auto">
            "Every tradition is a story. Every story is a bridge to the future."
          </blockquote>
        </div>
      </section>

      {/* Stories That Change the World */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl font-bold text-forest-deep">
                Stories That Change the World
              </h2>
              
              <div className="text-lg text-muted-foreground space-y-4 leading-relaxed">
                <p>
                  At Whimsy Films, we see culture as a living archive of human imagination—and a tool for shaping 
                  a more sustainable tomorrow. Through film, exhibitions, festivals, and collaborations, we connect 
                  communities, governments, and cultural institutions.
                </p>
                
                <p>
                  We do not just tell stories; we curate experiences that move audiences, spark conversations, and 
                  inspire change. By weaving together folklore and conservation, we make environmental action 
                  personal, emotional, and unforgettable.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button variant="default" size="lg" asChild>
                  <Link to="/partnerships">Explore Partnerships</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/get-involved">Register Your Interest</Link>
                </Button>
              </div>
            </div>

            <div className="space-y-6">
              <div className="grid grid-cols-1 gap-6">
                <div className="relative overflow-hidden rounded-xl aspect-[4/3]">
                  <img 
                    src={culturalPuppetry} 
                    alt="Cultural puppetry and storytelling performance with children"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="relative overflow-hidden rounded-xl aspect-[4/3]">
                  <img 
                    src={culturalStorytelling1} 
                    alt="Traditional cultural storytelling and theatre performance"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default IntroSection;