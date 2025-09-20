import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Film, 
  Globe, 
  Heart, 
  Users, 
  Camera,
  BookOpen,
  Sparkles,
  Leaf
} from "lucide-react";
import culturalPuppetryImage from "@/assets/cultural-puppetry.jpg";

const About = () => {
  const pillars = [
    {
      icon: <Film className="h-8 w-8" />,
      title: "Creative Cinema",
      description: "Original productions blending live action, puppetry, wildlife, and AI-enhanced visuals."
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Cultural Heritage", 
      description: "Folklore and fairy tales from around the world, retold with respect and authenticity."
    },
    {
      icon: <Leaf className="h-8 w-8" />,
      title: "Conservation Storytelling",
      description: "Every story supports the protection of wildlife and ecosystems."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Child-Focused Education",
      description: "Stories designed to spark empathy, curiosity, and learning."
    }
  ];

  const teamRoles = [
    "Cultural Consultants – ensuring authenticity in folklore representation",
    "Wildlife Specialists – guiding our conservation storytelling and animal cinematography", 
    "Puppetry & Practical Artists – crafting characters that feel tactile and timeless",
    "Filmmakers & Technologists – blending AI, VFX, and live action into seamless narratives",
    "Educators – aligning our stories with child learning frameworks"
  ];

  return (
    <div className="min-h-screen bg-background pt-14">
      {/* Hero Section */}
      <section className="py-6 bg-gradient-hero text-white">
        <div className="container mx-auto px-2 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 lg:mb-4">
            A Global Studio With a Purpose
          </h1>
          <p className="text-sm sm:text-base text-ivory/90 max-w-2xl mx-auto mb-4">
            More than a production house — we are a movement for cultural celebration and conservation.
          </p>
          
        </div>
      </section>

      {/* Wildlife Videos Section */}
      <section className="py-4 bg-background">
        <div className="container mx-auto px-2">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-xl font-semibold text-forest-deep mb-4 text-center">Our Team's Inspiration</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-center">
                <video 
                  src="/src/assets/videos/praying-mantis.mp4"
                  autoPlay 
                  muted 
                  loop
                  playsInline
                  className="w-full h-40 object-cover rounded-lg shadow-soft mb-2"
                />
                <p className="text-sm text-muted-foreground">Wildlife Focus</p>
              </div>
              <div className="text-center">
                <div className="bg-gradient-hero rounded-lg flex items-center justify-center h-40 mb-2">
                  <p className="text-white text-sm text-center px-2">Cultural Heritage<br/><span className="text-xs opacity-75">(Coming Soon)</span></p>
                </div>
                <p className="text-sm text-muted-foreground">Global Stories</p>
              </div>
              <div className="text-center">
                <div className="bg-gradient-hero rounded-lg flex items-center justify-center h-40 mb-2">
                  <p className="text-white text-sm text-center px-2">Creative Process<br/><span className="text-xs opacity-75">(Coming Soon)</span></p>
                </div>
                <p className="text-sm text-muted-foreground">Behind the Scenes</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section id="who-we-are" className="py-6 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-forest-deep mb-4 lg:mb-6">Who We Are</h2>
              
              <div className="prose prose-lg text-muted-foreground space-y-3 lg:space-y-4 text-sm sm:text-base lg:text-lg">
                <p>
                  Whimsy Films is a UK-based production house dedicated to creating magical, 
                  child-centered films and series that combine folklore, wildlife, and imaginative 
                  storytelling. But we are more than a studio — we are a movement for cultural 
                  celebration and conservation.
                </p>
                
                <p>We work at the intersection of:</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mt-6 lg:mt-8">
                {pillars.map((pillar, index) => (
                  <Card key={index} className="border-forest-light/30 hover:shadow-soft transition-all duration-300">
                    <CardContent className="p-4 sm:p-6">
                      <div className="text-primary mb-2 sm:mb-3">
                        {pillar.icon}
                      </div>
                      <h3 className="font-semibold text-forest-deep mb-1 sm:mb-2 text-sm sm:text-base">
                        {pillar.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-muted-foreground">
                        {pillar.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="mt-6 lg:mt-8">
                <Button variant="default" size="lg" asChild>
                  <Link to="/partnerships">Learn More About Us</Link>
                </Button>
              </div>
            </div>

            <div className="space-y-4 lg:space-y-6">
              <div className="rounded-lg lg:rounded-2xl overflow-hidden shadow-magical">
                <img 
                  src={culturalPuppetryImage}
                  alt="Cultural puppetry workshop showcasing diverse folklore traditions"
                  className="w-full h-auto"
                />
              </div>
              
              <Card className="bg-gradient-warm border-0">
                <CardContent className="p-4 sm:p-6 lg:p-8">
                  <h3 className="text-lg sm:text-xl font-semibold text-forest-deep mb-3 lg:mb-4">
                    Our Vision in Action
                  </h3>
                  <p className="text-forest-deep/80 text-sm sm:text-base">
                    From Africa to Asia, from Europe to the Americas, we bring magical stories 
                    to life through puppetry, wildlife cinematography, and cultural authenticity — 
                    inviting the world to join us in protecting nature and celebrating heritage.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section id="story" className="py-8 sm:py-12 lg:py-16 bg-forest-light/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-forest-deep mb-4 lg:mb-6 text-center">
              Born From a Love of Stories and the Natural World
            </h2>
            
            <div className="space-y-4 lg:space-y-6 text-base sm:text-lg text-muted-foreground">
              <p>
                Whimsy Films began with a simple belief: that the old stories we tell our children 
                hold the power to shape the world of tomorrow. Across every culture, fairy tales 
                and folklore carry wisdom, values, and a connection to the natural world. Yet, 
                many of these stories remain untold on the global stage.
              </p>
              
              <p>
                At the same time, our planet's wildlife faces unprecedented threats. Children are 
                growing up further removed from nature, at risk of losing their connection to the 
                very creatures and landscapes that inspired those stories in the first place.
              </p>
              
              <p>
                Whimsy Films was founded to bridge that gap. To reawaken the magic of folklore 
                and reconnect children with wildlife, through films that are enchanting, 
                educational, and globally inclusive.
              </p>
            </div>

            <Card className="mt-8 lg:mt-12 bg-gradient-hero border-0">
              <CardContent className="p-6 lg:p-8 text-white">
                <h3 className="text-xl sm:text-2xl font-semibold mb-3 lg:mb-4">
                  Why Folklore & Sustainability?
                </h3>
                <p className="text-sm sm:text-base">
                  Folklore is more than entertainment. It is the ancestral memory of humankind, 
                  carrying lessons on how to coexist with the environment, how to navigate social 
                  harmony, and how to find meaning in times of uncertainty. At Whimsy Films, we 
                  treat folklore as a vital resource for sustainability education. By connecting 
                  stories with pressing issues like climate change, biodiversity, and cultural 
                  preservation, we reframe folklore as a tool for empowerment. Through our work, 
                  heritage is not frozen in time but activated as a force for present and future change.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section id="team" className="py-8 sm:py-12 lg:py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-forest-deep mb-4 lg:mb-6">
              Built on Collaboration and Expertise
            </h2>
            
            <p className="text-base sm:text-lg text-muted-foreground mb-8 lg:mb-10">
              While Whimsy Films is young, it is built on collaboration and expertise. For each 
              project, we bring together:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 text-left">
              {teamRoles.map((role, index) => (
                <Card key={index} className="border-forest-light/30">
                  <CardContent className="p-4 sm:p-6">
                    <div className="flex items-start gap-2 sm:gap-3">
                      <Badge variant="secondary" className="mt-0.5 sm:mt-1 text-xs">
                        {index + 1}
                      </Badge>
                      <p className="text-muted-foreground text-sm sm:text-base">{role}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-8 lg:mt-12">
              <p className="text-base sm:text-lg text-muted-foreground mb-6 lg:mb-8">
                Our core founding team is supported by a growing global network of advisors, 
                creatives, and institutional partners.
              </p>
              
              <Button variant="hero" size="lg" asChild>
                <Link to="/partnerships">Meet Our Partners</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-8 sm:py-12 lg:py-16 bg-gradient-warm">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-forest-deep mb-4 lg:mb-6">
              Join Our Global Network
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground mb-6 lg:mb-8">
              Be part of a movement that celebrates culture, protects wildlife, and inspires the next generation.
            </p>
            
            <div className="flex flex-col gap-3 sm:flex-row sm:gap-4 justify-center">
              <Button variant="default" size="lg" asChild className="w-full sm:w-auto">
                <Link to="/partnerships">Partner With Us</Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="w-full sm:w-auto">
                <Link to="/get-involved">Get Involved</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;