import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Section from "@/components/layouts/Section";
import culturalPuppetry from "@/assets/cultural-puppetry.jpg";
import culturalStorytelling1 from "@/assets/cultural-storytelling-1.jpg";

const IntroSection = () => {
  return (
    <>
      {/* Inspirational Quote */}
      <Section background="gradient-forest" padding="small">
        <div className="text-center">
          <blockquote className="text-xl sm:text-2xl font-serif italic text-forest-deep max-w-4xl mx-auto">
            "Every tradition is a story. Every story is a bridge to the future."
          </blockquote>
        </div>
      </Section>

      {/* Stories That Change the World */}
      <Section background="default" padding="large">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-forest-deep">
                Stories That Change the World
              </h2>
              
              <div className="text-lg sm:text-xl text-muted-foreground space-y-6 leading-relaxed">
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

              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <Button variant="default" size="lg" asChild className="min-w-[180px]">
                  <Link to="/partnerships">Explore Partnerships</Link>
                </Button>
                <Button variant="outline" size="lg" asChild className="min-w-[180px]">
                  <Link to="/get-involved">Register Your Interest</Link>
                </Button>
              </div>
            </div>

            <div className="space-y-8">
              <div className="grid grid-cols-1 gap-8">
                <div className="relative overflow-hidden rounded-2xl aspect-[4/3] shadow-magical">
                  <img 
                    src={culturalPuppetry} 
                    alt="Cultural puppetry and storytelling performance with children"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/60 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-6 text-white">
                      <h3 className="text-xl font-semibold mb-2">Cultural Storytelling</h3>
                      <p className="text-sm opacity-90">Bringing traditional tales to life</p>
                    </div>
                  </div>
                </div>
                <div className="relative overflow-hidden rounded-2xl aspect-[4/3] shadow-magical">
                  <img 
                    src={culturalStorytelling1} 
                    alt="Traditional cultural storytelling and theatre performance"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/60 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-6 text-white">
                      <h3 className="text-xl font-semibold mb-2">Theatre Performance</h3>
                      <p className="text-sm opacity-90">Authentic cultural expression</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </Section>
    </>
  );
};

export default IntroSection;