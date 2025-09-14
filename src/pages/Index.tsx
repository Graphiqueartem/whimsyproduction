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
import heroImage from "@/assets/hero-main.jpg";

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
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.3)), url(${heroImage})`
          }}
        />
        
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Where Storytelling
              <span className="block text-gold-warm">Inspires Action</span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-ivory/90 leading-relaxed max-w-3xl mx-auto">
              Whimsy Films is a global production house bringing folklore, wildlife, and magical 
              storytelling to life — to inspire children, empower communities, and protect our natural world.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button variant="hero" size="xl" asChild>
                <Link to="/partnerships">Partner With Us</Link>
              </Button>
              <Button variant="warm" size="xl" asChild>
                <Link to="/vision">Discover Our Vision</Link>
              </Button>
            </div>

            <div className="text-ivory/80 text-sm uppercase tracking-wider">
              Stories connect us. Culture inspires us. Together we protect our planet.
            </div>
          </div>
        </div>
      </section>

      {/* Inspirational Quote Divider */}
      <section className="py-16 bg-gradient-forest">
        <div className="container mx-auto px-4 text-center">
          <blockquote className="text-3xl md:text-4xl font-serif italic text-forest-deep max-w-4xl mx-auto">
            "Every tradition is a story. Every story is a bridge to the future."
          </blockquote>
        </div>
      </section>

      {/* Expanded Intro Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-forest-deep leading-tight">
                Stories That Change the World
              </h2>
              
              <div className="text-lg text-muted-foreground space-y-4">
                <p>
                  At Whimsy Films, we see culture as a living archive of human imagination—and 
                  a tool for shaping a more sustainable tomorrow. Through film, exhibitions, 
                  festivals, and collaborations, we connect communities, governments, and cultural institutions.
                </p>
                
                <p>
                  We do not just tell stories; we curate experiences that move audiences, spark 
                  conversations, and inspire change. By weaving together folklore and conservation, 
                  we make environmental action personal, emotional, and unforgettable.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="default" size="lg" asChild>
                  <Link to="/productions">Watch Our Films</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/partnerships">Partner With Us</Link>
                </Button>
                <Button variant="secondary" size="lg" asChild>
                  <Link to="/get-involved">Join the Journey</Link>
                </Button>
              </div>
            </div>

            <div className="space-y-6">
              <Card className="border-0 shadow-soft bg-gradient-warm">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold text-forest-deep mb-4">
                    We tell magical stories that protect nature and inspire generations.
                  </h3>
                  <p className="text-forest-deep/80">
                    Our production house blends film, theatre, puppetry, and AI innovation. 
                    Our work celebrates folklore, protects wildlife, and inspires the imaginations 
                    of children and adults alike.
                  </p>
                </CardContent>
              </Card>

              <div className="grid grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <Card key={index} className="border border-forest-light/30 hover:shadow-soft transition-all duration-300">
                    <CardContent className="p-6 text-center">
                      <div className="text-forest-deep mb-3 flex justify-center">
                        {feature.icon}
                      </div>
                      <h4 className="font-semibold text-sm text-forest-deep mb-2">
                        {feature.title}
                      </h4>
                      <p className="text-xs text-muted-foreground">
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
      <section className="py-20 bg-forest-deep text-ivory">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why Whimsy Films Matters
            </h2>
            <p className="text-xl text-ivory/90 leading-relaxed">
              We are not simply a film studio. We are building a global cultural platform 
              where every production acts as a catalyst for positive change.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {benefits.map((benefit, index) => (
              <Card key={index} className="bg-ivory/10 border-ivory/20 hover:bg-ivory/15 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="text-gold-warm mb-4 flex justify-center">
                    {benefit.icon}
                  </div>
                  <h3 className="font-semibold text-ivory mb-2">{benefit.title}</h3>
                  <p className="text-sm text-ivory/80">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center space-y-6">
            <div className="text-lg text-ivory/90 max-w-3xl mx-auto">
              <p className="mb-4">
                For investors, governments, and NGOs, Whimsy Films represents a rare opportunity to 
                align with a high-growth creative sector while creating measurable social and environmental impact.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="warm" size="lg" asChild>
                <Link to="/impact">Discover Our Impact</Link>
              </Button>
              <Button variant="magical" size="lg" asChild>
                <Link to="/partnerships">Partner With Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Home Sub-Sections */}
      <section className="py-20 bg-gradient-warm">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center hover:shadow-magical transition-all duration-300 transform hover:scale-105">
              <CardContent className="p-8">
                <BookOpen className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-forest-deep mb-3">Our Mission</h3>
                <p className="text-muted-foreground mb-4">
                  Creating films that celebrate folklore, protect wildlife, and inspire global action.
                </p>
                <Button variant="outline" size="sm" asChild>
                  <Link to="/vision">Read Our Mission</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-magical transition-all duration-300 transform hover:scale-105">
              <CardContent className="p-8">
                <Target className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-forest-deep mb-3">Our Impact</h3>
                <p className="text-muted-foreground mb-4">
                  Measurable conservation, cultural, educational and economic outcomes.
                </p>
                <Button variant="outline" size="sm" asChild>
                  <Link to="/impact">Explore Our Impact</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-magical transition-all duration-300 transform hover:scale-105">
              <CardContent className="p-8">
                <Film className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-forest-deep mb-3">Our Approach</h3>
                <p className="text-muted-foreground mb-4">
                  Blending puppetry, wildlife, AI, and folklore into magical storytelling.
                </p>
                <Button variant="outline" size="sm" asChild>
                  <Link to="/productions">Discover Our Approach</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-magical transition-all duration-300 transform hover:scale-105">
              <CardContent className="p-8">
                <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-forest-deep mb-3">Digital Archives</h3>
                <p className="text-muted-foreground mb-4">
                  Preserving cultural heritage through modern storytelling technology.
                </p>
                <Button variant="outline" size="sm" asChild>
                  <Link to="/about">Explore the Archive Project</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-forest-deep mb-6">
              Join the Global Movement
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Every story matters. Every partnership creates change. Every action protects our future.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
    </div>
  );
};

export default Index;