import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  Heart, 
  Globe, 
  Users, 
  BookOpen, 
  Camera, 
  Sparkles,
  Leaf,
  Shield,
  Target,
  Building,
  GraduationCap,
  Film
} from "lucide-react";
import eagleHero from "@/assets/videos/eagle-hero.jpg";
import turtleConservation from "@/assets/videos/turtle-conservation.jpg";
import pandaCloseup from "@/assets/videos/panda-closeup.jpg";
import lionSavanna from "@/assets/videos/lion-savanna.jpg";
import chimpanzeePortrait from "@/assets/videos/chimpanzee-portrait.jpg";
import zebraGrassland from "@/assets/videos/zebra-grassland.jpg";

const Index = () => {
  const features = [
    {
      icon: <Camera className="h-8 w-8" />,
      title: "Wildlife Cinematography",
      description: "Capturing the raw wonder of the natural world"
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Puppetry & Practical Artistry", 
      description: "Timeless, tactile, beloved by children"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Live Action & Human Performance",
      description: "Authentic, emotional, deeply relatable"
    },
    {
      icon: <Sparkles className="h-8 w-8" />,
      title: "AI-enhanced Visuals & Innovation",
      description: "Expanding creative possibilities"
    }
  ];

  const benefits = [
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Soft Power Tool",
      description: "Showcase cultural heritage globally"
    },
    {
      icon: <Leaf className="h-6 w-6" />,
      title: "Conservation Catalyst", 
      description: "Link storytelling with wildlife protection"
    },
    {
      icon: <GraduationCap className="h-6 w-6" />,
      title: "Education Support",
      description: "Engaging, curriculum-linked resources"
    },
    {
      icon: <Building className="h-6 w-6" />,
      title: "Economic Opportunities",
      description: "Creative industries & cultural exchange"
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.3)), url(${eagleHero})`
          }}
        />
        
        <div className="relative z-10 container mx-auto px-2 sm:px-4 lg:px-6 text-center text-white">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
              Where Storytelling
              <span className="block text-gold-warm">Inspires Action</span>
            </h1>
            
            <p className="text-lg sm:text-xl md:text-xl mb-4 sm:mb-6 text-ivory/90 leading-relaxed max-w-3xl mx-auto px-2">
              Whimsy Films is a global production house bringing folklore, wildlife, and magical 
              storytelling to life — to inspire children, empower communities, and protect our natural world.
            </p>
            
            <div className="flex flex-col gap-2 sm:flex-row sm:gap-3 justify-center items-center mb-6 sm:mb-8 px-2">
              <Button variant="hero" size="lg" asChild className="w-full sm:w-auto">
                <Link to="/partnerships">Partner With Us</Link>
              </Button>
              <Button variant="warm" size="lg" asChild className="w-full sm:w-auto">
                <Link to="/vision">Discover Our Vision</Link>
              </Button>
              <Button variant="magical" size="lg" asChild className="w-full sm:w-auto">
                <Link to="/get-involved">Join the Movement</Link>
              </Button>
            </div>

            <div className="text-ivory/80 text-xs sm:text-sm uppercase tracking-wider px-2">
              Stories connect us. Culture inspires us. Together we protect our planet.
            </div>
          </div>
        </div>
      </section>

      {/* Inspirational Quote Divider */}
      <section className="py-6 sm:py-8 lg:py-10 bg-gradient-forest">
        <div className="container mx-auto px-2 sm:px-4 lg:px-6 text-center">
          <blockquote className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-serif italic text-forest-deep max-w-4xl mx-auto leading-relaxed">
            "Every tradition is a story. Every story is a bridge to the future."
          </blockquote>
        </div>
      </section>

      {/* Expanded Intro Section */}
      <section className="py-8 sm:py-10 lg:py-12 bg-background">
        <div className="container mx-auto px-2 sm:px-4 lg:px-6">
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-start">
            <div className="space-y-4 lg:space-y-6">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-forest-deep leading-tight">
                Stories That Change the World
              </h2>
              
              <div className="text-sm sm:text-base text-muted-foreground space-y-3 lg:space-y-4">
                <p>At Whimsy Films, we see culture as a living archive of human imagination—and a tool for shaping a more sustainable tomorrow. Through film, exhibitions, festivals, and collaborations, we connect communities, governments, and cultural institutions.</p>
                
                <p>We do not just tell stories; we curate experiences that move audiences, spark conversations, and inspire change. By weaving together folklore and conservation, we make environmental action personal, emotional, and unforgettable.</p>
              </div>

              <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 pt-2">
                <Button variant="default" size="default" asChild className="w-full sm:w-auto">
                  <Link to="/partnerships">Explore Partnerships</Link>
                </Button>
                <Button variant="outline" size="default" asChild className="w-full sm:w-auto">
                  <Link to="/get-involved">Register Your Interest</Link>
                </Button>
              </div>

              {/* Wildlife Gallery */}
              <div className="grid grid-cols-2 gap-2 sm:gap-3 pt-3 sm:pt-4">
                <div className="relative overflow-hidden rounded-lg aspect-video">
                  <img 
                    src={chimpanzeePortrait} 
                    alt="Wildlife conservation - Chimpanzee portrait showing intelligence and emotion"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="relative overflow-hidden rounded-lg aspect-video">
                  <img 
                    src={zebraGrassland} 
                    alt="Wildlife in natural habitat - Zebra in grassland"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-4 lg:space-y-6">
              {/* Praying Mantis Video */}
              <div className="relative overflow-hidden rounded-lg aspect-video mb-4 lg:mb-6">
                <video 
                  src="/src/assets/videos/praying-mantis.mp4"
                  autoPlay 
                  muted 
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/80 via-transparent to-transparent flex items-end">
                  <div className="p-3 sm:p-4 text-white">
                    <h3 className="text-base sm:text-lg font-semibold mb-1">Wildlife in Focus</h3>
                    <p className="text-xs opacity-90">Capturing nature's intricate beauty</p>
                  </div>
                </div>
              </div>

              <Card className="border-0 shadow-soft bg-gradient-warm">
                <CardContent className="p-4 lg:p-6">
                  <h3 className="text-base sm:text-lg font-semibold text-forest-deep mb-3 lg:mb-4">Our Mission</h3>
                  <div className="space-y-2 sm:space-y-3 text-forest-deep/80 text-xs sm:text-sm">
                    <p>At Whimsy Films, we believe storytelling is humanity's oldest and most powerful tool. Stories have taught us who we are, connected us across cultures, and inspired generations to dream.</p>
                    <p>Today, stories must do more. They must remind us of our shared humanity, protect the fragile beauty of wildlife, and spark empathy in a divided world.</p>
                    <p>That is why Whimsy Films exists. We are a UK-based production company that creates films, series, and cultural experiences rooted in folklore and magical storytelling — designed not only to entertain but also to educate, conserve, and inspire global action.</p>
                  </div>
                  <div className="mt-4 lg:mt-6 p-3 lg:p-4 bg-forest-deep/10 rounded-lg">
                    <p className="text-forest-deep font-semibold text-center text-sm sm:text-base">
                      "We tell magical stories that protect nature and inspire generations."
                    </p>
                  </div>
                  <div className="flex flex-col gap-2 mt-4 lg:mt-6">
                    <Button variant="default" size="sm" asChild className="w-full sm:w-auto">
                      <Link to="/productions">Watch Our Films</Link>
                    </Button>
                    <Button variant="outline" size="sm" asChild className="w-full sm:w-auto">
                      <Link to="/partnerships">Partner With Us</Link>
                    </Button>
                    <Button variant="secondary" size="sm" asChild className="w-full sm:w-auto">
                      <Link to="/get-involved">Join the Journey</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-soft bg-gradient-forest">
                <CardContent className="p-6 lg:p-8">
                  <h3 className="text-lg sm:text-xl font-semibold text-forest-deep mb-4 lg:mb-6">Our Production House</h3>
                  <p className="text-forest-deep/80 leading-relaxed mb-4 lg:mb-6 text-sm sm:text-base">Our production house blends film, theatre, puppetry, and AI innovation. Our work celebrates folklore, protects wildlife, and inspires the imaginations of children and adults alike. From Africa to Asia, from Europe to the Americas, we bring magical stories to life — and invite the world to join us.</p>
                  
                  {/* Production Showcase Images */}
                  <div className="grid grid-cols-2 gap-2 sm:gap-3">
                    <div className="relative overflow-hidden rounded-md aspect-video">
                      <img 
                        src={lionSavanna} 
                        alt="African wildlife - Majestic lion in savanna"
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                      />
                    </div>
                    <div className="relative overflow-hidden rounded-md aspect-video">
                      <img 
                        src={pandaCloseup} 
                        alt="Asian wildlife - Giant panda in bamboo forest"
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="grid grid-cols-2 gap-3 sm:gap-6">
                {features.map((feature, index) => (
                  <Card key={index} className="border border-forest-light/30 hover:shadow-soft transition-all duration-300">
                    <CardContent className="p-4 sm:p-6 text-center">
                      <div className="text-forest-deep mb-3 sm:mb-4 flex justify-center">
                        {feature.icon}
                      </div>
                      <h4 className="font-semibold text-xs sm:text-sm text-forest-deep mb-2 sm:mb-3 leading-tight">
                        {feature.title}
                      </h4>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        {feature.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Whimsy Films Matters */}
      <section className="py-8 sm:py-12 lg:py-16 xl:py-24 bg-forest-deep text-ivory">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-8 sm:mb-12 lg:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 lg:mb-8">Why Whimsy Films Matters</h2>
              <p className="text-lg sm:text-xl text-ivory/90 leading-relaxed mb-6 sm:mb-8 px-2">We are not simply a film studio. We are building a global cultural platform where every production:</p>
              
              <div className="grid md:grid-cols-2 gap-6 sm:gap-8 text-left max-w-4xl mx-auto">
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-gold-warm rounded-full mt-3 flex-shrink-0"></div>
                    <p className="text-base sm:text-lg text-ivory/90">Acts as a soft power tool for governments to showcase their cultural heritage</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-gold-warm rounded-full mt-3 flex-shrink-0"></div>
                    <p className="text-base sm:text-lg text-ivory/90">Serves as a catalyst for conservation partnerships, linking storytelling with wildlife protection</p>
                  </div>
                </div>
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-gold-warm rounded-full mt-3 flex-shrink-0"></div>
                    <p className="text-base sm:text-lg text-ivory/90">Supports education systems, offering engaging, curriculum-linked cultural resources</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-gold-warm rounded-full mt-3 flex-shrink-0"></div>
                    <p className="text-base sm:text-lg text-ivory/90">Creates new economic opportunities in creative industries, tourism, and cultural exchange</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-12 lg:mb-16">
              {benefits.map((benefit, index) => (
                <Card key={index} className="bg-ivory/10 border-ivory/20 hover:bg-ivory/15 transition-all duration-300">
                  <CardContent className="p-4 sm:p-6 lg:p-8 text-center">
                    <div className="text-gold-warm mb-4 sm:mb-6 flex justify-center">
                      {benefit.icon}
                    </div>
                    <h3 className="font-semibold text-ivory mb-2 sm:mb-3 text-base sm:text-lg">{benefit.title}</h3>
                    <p className="text-xs sm:text-sm text-ivory/80 leading-relaxed">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center">
              <p className="text-lg sm:text-xl text-ivory/90 leading-relaxed mb-6 sm:mb-8 max-w-4xl mx-auto px-2">For investors, governments, and NGOs, Whimsy Films represents a rare opportunity to align with a high-growth creative sector while creating measurable social and environmental impact.</p>
              
              <div className="flex flex-col gap-3 sm:flex-row sm:gap-4 justify-center">
                <Button variant="warm" size="lg" asChild className="w-full sm:w-auto">
                  <Link to="/impact">Discover Our Impact</Link>
                </Button>
                <Button variant="magical" size="lg" asChild className="w-full sm:w-auto">
                  <Link to="/partnerships">Partner With Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Home Sub-Sections */}
      <section className="py-8 sm:py-12 lg:py-16 xl:py-24 bg-gradient-warm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            <Card className="text-center hover:shadow-magical transition-all duration-300 transform hover:scale-105">
              <CardContent className="p-4 sm:p-6 lg:p-8">
                <BookOpen className="h-10 sm:h-12 w-10 sm:w-12 text-primary mx-auto mb-4 sm:mb-6" />
                <h3 className="text-lg sm:text-xl font-semibold text-forest-deep mb-3 sm:mb-4">Our Mission</h3>
                <p className="text-muted-foreground mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">Creating films that celebrate folklore, protect wildlife, and inspire global action.</p>
                <Button variant="outline" size="sm" asChild className="w-full sm:w-auto">
                  <Link to="/vision">Read Our Mission</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-magical transition-all duration-300 transform hover:scale-105">
              <CardContent className="p-4 sm:p-6 lg:p-8">
                <Target className="h-10 sm:h-12 w-10 sm:w-12 text-primary mx-auto mb-4 sm:mb-6" />
                <h3 className="text-lg sm:text-xl font-semibold text-forest-deep mb-3 sm:mb-4">Our Impact</h3>
                <p className="text-muted-foreground mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">Measurable conservation, cultural, educational and economic outcomes.</p>
                <Button variant="outline" size="sm" asChild className="w-full sm:w-auto">
                  <Link to="/impact">Explore Our Impact</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-magical transition-all duration-300 transform hover:scale-105">
              <CardContent className="p-4 sm:p-6 lg:p-8">
                <Film className="h-10 sm:h-12 w-10 sm:w-12 text-primary mx-auto mb-4 sm:mb-6" />
                <h3 className="text-lg sm:text-xl font-semibold text-forest-deep mb-3 sm:mb-4">Our Approach</h3>
                <p className="text-muted-foreground mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">Blending puppetry, wildlife, AI, and folklore into magical storytelling.</p>
                <Button variant="outline" size="sm" asChild className="w-full sm:w-auto">
                  <Link to="/productions">Discover Our Approach</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-magical transition-all duration-300 transform hover:scale-105">
              <CardContent className="p-4 sm:p-6 lg:p-8">
                <Shield className="h-10 sm:h-12 w-10 sm:w-12 text-primary mx-auto mb-4 sm:mb-6" />
                <h3 className="text-lg sm:text-xl font-semibold text-forest-deep mb-3 sm:mb-4">Digital Archives</h3>
                <p className="text-muted-foreground mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">Preserving cultural heritage through modern storytelling technology.</p>
                <Button variant="outline" size="sm" asChild className="w-full sm:w-auto">
                  <Link to="/about">Explore the Archive Project</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="py-8 sm:py-12 lg:py-16 xl:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-forest-deep mb-4 sm:mb-6 lg:mb-8">Join the Global Movement</h2>
            <p className="text-lg sm:text-xl text-muted-foreground mb-8 sm:mb-12 leading-relaxed px-2">Every story matters. Every partnership creates change. Every action protects our future.</p>
            
            <div className="flex flex-col gap-3 sm:flex-row sm:gap-4 justify-center">
              <Button variant="hero" size="xl" asChild className="w-full sm:w-auto">
                <Link to="/partnerships">Partner With Us</Link>
              </Button>
              <Button variant="magical" size="xl" asChild className="w-full sm:w-auto">
                <Link to="/get-involved">Support Wildlife Storytelling</Link>
              </Button>
              <Button variant="warm" size="xl" asChild className="w-full sm:w-auto">
                <Link to="/get-involved">Get Involved</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;