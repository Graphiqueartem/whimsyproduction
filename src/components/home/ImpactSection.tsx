import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Globe, 
  Leaf,
  GraduationCap,
  Building,
  BookOpen, 
  Target,
  Film,
  Shield
} from "lucide-react";

const ImpactSection = () => {
  const benefits = [
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Soft Power Tool",
      description: "Showcase cultural heritage globally"
    },
    {
      icon: <Leaf className="h-8 w-8" />,
      title: "Conservation Catalyst", 
      description: "Link storytelling with wildlife protection"
    },
    {
      icon: <GraduationCap className="h-8 w-8" />,
      title: "Education Support",
      description: "Engaging, curriculum-linked resources"
    },
    {
      icon: <Building className="h-8 w-8" />,
      title: "Economic Opportunities",
      description: "Creative industries & cultural exchange"
    }
  ];

  const sections = [
    {
      icon: <BookOpen className="h-12 w-12" />,
      title: "Our Mission",
      description: "Creating films that celebrate folklore, protect wildlife, and inspire global action.",
      link: "/vision",
      linkText: "Read Our Mission"
    },
    {
      icon: <Target className="h-12 w-12" />,
      title: "Our Impact",
      description: "Measurable conservation, cultural, educational and economic outcomes.",
      link: "/impact",
      linkText: "Explore Our Impact"
    },
    {
      icon: <Film className="h-12 w-12" />,
      title: "Our Approach",
      description: "Blending puppetry, wildlife, AI, and folklore into magical storytelling.",
      link: "/productions",
      linkText: "Discover Our Approach"
    },
    {
      icon: <Shield className="h-12 w-12" />,
      title: "Digital Archives",
      description: "Preserving cultural heritage through modern storytelling technology.",
      link: "/about",
      linkText: "Explore the Archive Project"
    }
  ];

  return (
    <>
      {/* Why Whimsy Films Matters */}
      <section className="py-16 bg-forest-deep text-ivory">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8">Why Whimsy Films Matters</h2>
              <p className="text-xl text-ivory/90 leading-relaxed mb-8 max-w-4xl mx-auto">
                We are not simply a film studio. We are building a global cultural platform where every production:
              </p>
              
              <div className="grid md:grid-cols-2 gap-8 text-left max-w-5xl mx-auto">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-3 h-3 bg-gold-warm rounded-full mt-3 flex-shrink-0"></div>
                    <p className="text-lg text-ivory/90">Acts as a soft power tool for governments to showcase their cultural heritage</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-3 h-3 bg-gold-warm rounded-full mt-3 flex-shrink-0"></div>
                    <p className="text-lg text-ivory/90">Serves as a catalyst for conservation partnerships, linking storytelling with wildlife protection</p>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-3 h-3 bg-gold-warm rounded-full mt-3 flex-shrink-0"></div>
                    <p className="text-lg text-ivory/90">Supports education systems, offering engaging, curriculum-linked cultural resources</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-3 h-3 bg-gold-warm rounded-full mt-3 flex-shrink-0"></div>
                    <p className="text-lg text-ivory/90">Creates new economic opportunities in creative industries, tourism, and cultural exchange</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {benefits.map((benefit, index) => (
                <Card key={index} className="bg-ivory/10 border-ivory/20 hover:bg-ivory/15 transition-all duration-300 hover:scale-105">
                  <CardContent className="p-8 text-center">
                    <div className="text-gold-warm mb-6 flex justify-center">
                      {benefit.icon}
                    </div>
                    <h3 className="font-bold text-ivory mb-4 text-lg">{benefit.title}</h3>
                    <p className="text-sm text-ivory/80 leading-relaxed">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center">
              <p className="text-xl text-ivory/90 leading-relaxed mb-8 max-w-4xl mx-auto">
                For investors, governments, and NGOs, Whimsy Films represents a rare opportunity to align with 
                a high-growth creative sector while creating measurable social and environmental impact.
              </p>
              
              <div className="flex flex-col gap-4 sm:flex-row sm:gap-6 justify-center">
                <Button variant="warm" size="xl" asChild>
                  <Link to="/impact">Discover Our Impact</Link>
                </Button>
                <Button variant="magical" size="xl" asChild>
                  <Link to="/partnerships">Partner With Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Home Sub-Sections */}
      <section className="py-16 bg-gradient-warm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {sections.map((section, index) => (
              <Card key={index} className="text-center hover:shadow-magical transition-all duration-300 transform hover:scale-105">
                <CardContent className="p-8">
                  <div className="text-primary mx-auto mb-6 flex justify-center">
                    {section.icon}
                  </div>
                  <h3 className="text-xl font-bold text-forest-deep mb-4">{section.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{section.description}</p>
                  <Button variant="outline" size="lg" asChild className="w-full">
                    <Link to={section.link}>{section.linkText}</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ImpactSection;