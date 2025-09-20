import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Leaf, 
  Globe, 
  GraduationCap, 
  Building,
  Heart,
  Users,
  TreePine,
  BookOpen,
  Camera,
  Target,
  Trophy,
  TrendingUp
} from "lucide-react";
import conservationImage from "@/assets/conservation-impact.jpg";

const Impact = () => {
  const impactAreas = [
    {
      icon: <Leaf className="h-12 w-12" />,
      title: "Conservation Impact",
      subtitle: "Protecting Wildlife Through Storytelling",
      description: "We use film to protect what is disappearing. By weaving real wildlife into our folklore-inspired stories, children and families develop deep emotional connections with species and habitats.",
      benefits: [
        "Emotional Connection: Children care about what they know",
        "Global Awareness: Spotlight on endangered species and fragile habitats", 
        "NGO Amplification: Extending reach of campaigns and policy initiatives",
        "Diplomatic Unity: Wildlife narratives transcend language and borders"
      ],
      cta: "Partner With Us in Conservation",
      ctaLink: "/partnerships#conservation",
      color: "bg-green-50 border-green-200"
    },
    {
      icon: <Globe className="h-12 w-12" />,
      title: "Cultural Impact", 
      subtitle: "Preserving Heritage for Future Generations",
      description: "Folklore is humanity's oldest cultural currency. Yet many traditions are at risk of being forgotten. We showcase stories from diverse cultures with authenticity and respect.",
      benefits: [
        "Representation: Authentic stories from diverse cultures worldwide",
        "Collaboration: Cultural organizations become part of the creative process",
        "Cultural Diplomacy: Co-productions as tools for international presence",
        "Digital Preservation: Films as modern archives of folklore heritage"
      ],
      cta: "Bring Your Culture's Stories to Life",
      ctaLink: "/partnerships#cultural",
      color: "bg-blue-50 border-blue-200"
    },
    {
      icon: <GraduationCap className="h-12 w-12" />,
      title: "Educational & Social Impact",
      subtitle: "Inspiring Global Citizens",
      description: "Our films are crafted to do more than entertain — they support child development and inspire global citizenship through curriculum-aligned storytelling.",
      benefits: [
        "Curriculum Alignment: Content supporting literacy, empathy, and ecological learning",
        "Child-Centered Design: Stories empowering children as heroes and leaders",
        "Community Engagement: Resources for schools, libraries, and NGO programs",
        "Inclusive Narratives: Diverse representation ensuring all children see themselves"
      ],
      cta: "Collaborate on Education Projects", 
      ctaLink: "/partnerships#education",
      color: "bg-purple-50 border-purple-200"
    },
    {
      icon: <Building className="h-12 w-12" />,
      title: "Economic & Partnership Impact",
      subtitle: "Creating Value Beyond the Screen", 
      description: "Whimsy Films generates measurable value through economic growth, tourism promotion, innovation showcase, and global visibility for partners.",
      benefits: [
        "Economic Growth: Film production supports local jobs, skills, and industries",
        "Tourism & Promotion: Stories attract tourism interest to real cultures and landscapes",
        "Innovation Leadership: Positioning partners at forefront of creative innovation",
        "Global Prestige: Association with a studio redefining the cultural landscape"
      ],
      cta: "Invest in Cultural & Economic Impact",
      ctaLink: "/partnerships#investors", 
      color: "bg-yellow-50 border-yellow-200"
    }
  ];

  const metrics = [
    {
      icon: <Target className="h-8 w-8" />,
      value: "Global",
      label: "Reach & Distribution",
      description: "Stories designed for worldwide audiences"
    },
    {
      icon: <Users className="h-8 w-8" />,
      value: "Multi-Stakeholder",
      label: "Partnership Model",
      description: "Governments, NGOs, educators collaborating"
    },
    {
      icon: <Trophy className="h-8 w-8" />,
      value: "Award-Ready",
      label: "Production Quality", 
      description: "Festival-quality films with social impact"
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      value: "Measurable",
      label: "Impact Metrics",
      description: "Trackable conservation and education outcomes"
    }
  ];

  return (
    <div className="min-h-screen bg-background pt-14">
      {/* Hero Section */}
      <section className="py-6 bg-gradient-hero text-white">
        <div className="container mx-auto px-2 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 lg:mb-4">
            Stories That Spark Real-World Change
          </h1>
          <p className="text-sm sm:text-base text-ivory/90 max-w-3xl mx-auto mb-3 lg:mb-4">
            Every story we tell creates ripples of change. From protecting endangered species 
            to preserving cultural heritage, our impact is measurable, meaningful, and lasting.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-2 justify-center mb-4">
            <Button variant="warm" size="default" asChild>
              <Link to="#conservation">Conservation Impact</Link>
            </Button>
            <Button variant="magical" size="default" asChild>
              <Link to="#cultural">Cultural Impact</Link>
            </Button>
          </div>
          
        </div>
      </section>
      
      {/* Wildlife Videos Section */}
      <section className="py-4 bg-background">
        <div className="container mx-auto px-2">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-xl font-semibold text-forest-deep mb-4 text-center">Wildlife in Action</h3>
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
                <p className="text-sm text-muted-foreground">Praying Mantis</p>
              </div>
              <div className="text-center">
                <div className="bg-gradient-hero rounded-lg flex items-center justify-center h-40 mb-2">
                  <p className="text-white text-sm text-center px-2">Snow Hill Nature<br/><span className="text-xs opacity-75">(Coming Soon)</span></p>
                </div>
                <p className="text-sm text-muted-foreground">Natural Landscapes</p>
              </div>
              <div className="text-center">
                <div className="bg-gradient-hero rounded-lg flex items-center justify-center h-40 mb-2">
                  <p className="text-white text-sm text-center px-2">Mountain River<br/><span className="text-xs opacity-75">(Coming Soon)</span></p>
                </div>
                <p className="text-sm text-muted-foreground">Aerial Views</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Quote Section */}
      <section className="py-4 bg-forest-deep text-white">
        <div className="container mx-auto px-2 text-center">
          <p className="text-base sm:text-lg text-ivory/90 max-w-3xl mx-auto mb-4">
            Every Whimsy Films project is designed with dual impact: to enchant audiences 
            and to make a measurable difference in cultural preservation, wildlife conservation, and education.
          </p>
          <p className="text-base sm:text-lg text-ivory/80 max-w-3xl mx-auto mb-6">
            Every nation has stories of animals, spirits, and heroes. These tales connect us to the earth. 
            We transform them into cinematic experiences that children and families everywhere can treasure.
          </p>
          <div className="max-w-2xl lg:max-w-3xl mx-auto">
            <img 
              src={conservationImage}
              alt="Children reading folklore books surrounded by wildlife in nature"
              className="rounded-lg lg:rounded-2xl shadow-magical w-full"
            />
          </div>
        </div>
      </section>

      {/* Impact Overview */}
      <section id="conservation" className="py-6 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-8 lg:mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-forest-deep mb-4 lg:mb-6">
              Four Pillars of Global Impact
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground">
              Every nation has stories of animals, spirits, and heroes. These tales connect us to the earth. 
              We transform them into cinematic experiences that children and families everywhere can treasure.
            </p>
          </div>

          {/* Impact Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-8 lg:mb-12">
            {metrics.map((metric, index) => (
              <Card key={index} className="text-center hover:shadow-soft transition-all duration-300">
                <CardContent className="p-4 sm:p-6">
                  <div className="text-primary mb-2 sm:mb-3 flex justify-center">
                    {metric.icon}
                  </div>
                  <div className="text-lg sm:text-2xl font-bold text-forest-deep mb-1">
                    {metric.value}
                  </div>
                  <div className="font-semibold text-forest-deep mb-1 sm:mb-2 text-sm sm:text-base">
                    {metric.label}
                  </div>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    {metric.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Areas */}
      <section id="cultural" className="py-6 bg-forest-light/10">
        <div className="container mx-auto px-4">
          <div className="space-y-8 lg:space-y-12">
            {impactAreas.map((area, index) => (
              <div key={index} className={`${index % 2 === 1 ? 'lg:flex-row-reverse' : ''} flex flex-col lg:flex-row gap-6 lg:gap-8 items-center`}>
                <div className="lg:w-1/2">
                  <Card className={`border-2 ${area.color} shadow-soft`}>
                    <CardContent className="p-4 sm:p-6 lg:p-8">
                      <div className="text-primary mb-4 lg:mb-6 flex justify-center lg:justify-start">
                        {area.icon}
                      </div>
                      
                      <div className="text-center lg:text-left">
                        <h3 className="text-2xl sm:text-3xl font-bold text-forest-deep mb-2">
                          {area.title}
                        </h3>
                        <p className="text-base sm:text-lg font-semibold text-primary mb-3 lg:mb-4">
                          {area.subtitle}
                        </p>
                        <p className="text-muted-foreground text-sm sm:text-base lg:text-lg mb-4 lg:mb-6">
                          {area.description}
                        </p>

                        <div className="space-y-2 lg:space-y-3 mb-6 lg:mb-8">
                          {area.benefits.map((benefit, benefitIndex) => (
                            <div key={benefitIndex} className="flex items-start gap-2 lg:gap-3 text-left">
                              <Badge variant="secondary" className="mt-0.5 lg:mt-1 shrink-0 text-xs">
                                ✓
                              </Badge>
                              <span className="text-muted-foreground text-sm sm:text-base">
                                <strong>{benefit.split(':')[0]}:</strong>
                                {benefit.split(':').slice(1).join(':')}
                              </span>
                            </div>
                          ))}
                        </div>

                        <div className="flex flex-col gap-2 sm:flex-row sm:gap-3 lg:gap-4">
                          <Button variant="default" size="lg" asChild className="text-sm lg:text-base">
                            <Link to={area.ctaLink}>{area.cta}</Link>
                          </Button>
                          <Button variant="outline" size="lg" asChild className="text-sm lg:text-base">
                            <Link to="/partnerships">Learn More</Link>
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="lg:w-1/2 space-y-4 lg:space-y-6">
                  {index === 0 && (
                    <Card className="bg-gradient-forest border-0">
                      <CardContent className="p-4 sm:p-6 lg:p-8">
                        <TreePine className="h-8 sm:h-10 lg:h-12 w-8 sm:w-10 lg:w-12 text-forest-deep mb-3 lg:mb-4" />
                        <h4 className="text-lg sm:text-xl font-semibold text-forest-deep mb-2 lg:mb-3">
                          Wildlife Protection Through Emotional Connection
                        </h4>
                        <p className="text-forest-deep/80 text-sm sm:text-base">
                          When children fall in love with characters inspired by real animals, 
                          they become lifelong advocates for conservation.
                        </p>
                      </CardContent>
                    </Card>
                  )}

                  {index === 1 && (
                    <Card className="bg-gradient-warm border-0">
                      <CardContent className="p-4 sm:p-6 lg:p-8">
                        <BookOpen className="h-8 sm:h-10 lg:h-12 w-8 sm:w-10 lg:w-12 text-forest-deep mb-3 lg:mb-4" />
                        <h4 className="text-lg sm:text-xl font-semibold text-forest-deep mb-2 lg:mb-3">
                          Digital Cultural Archives
                        </h4>
                        <p className="text-forest-deep/80 text-sm sm:text-base">
                          Our films serve as modern repositories of folklore, ensuring that 
                          traditional stories are preserved for future generations.
                        </p>
                      </CardContent>
                    </Card>
                  )}

                  {index === 2 && (
                    <Card className="bg-gradient-forest border-0">
                      <CardContent className="p-4 sm:p-6 lg:p-8">
                        <Heart className="h-8 sm:h-10 lg:h-12 w-8 sm:w-10 lg:w-12 text-forest-deep mb-3 lg:mb-4" />
                        <h4 className="text-lg sm:text-xl font-semibold text-forest-deep mb-2 lg:mb-3">
                          Empathy-Driven Learning
                        </h4>
                        <p className="text-forest-deep/80 text-sm sm:text-base">
                          Stories that put children at the center of heroic narratives build 
                          confidence, resilience, and social-emotional intelligence.
                        </p>
                      </CardContent>
                    </Card>
                  )}

                  {index === 3 && (
                    <Card className="bg-gradient-warm border-0">
                      <CardContent className="p-4 sm:p-6 lg:p-8">
                        <Camera className="h-8 sm:h-10 lg:h-12 w-8 sm:w-10 lg:w-12 text-forest-deep mb-3 lg:mb-4" />
                        <h4 className="text-lg sm:text-xl font-semibold text-forest-deep mb-2 lg:mb-3">
                          Creative Economy Growth
                        </h4>
                        <p className="text-forest-deep/80 text-sm sm:text-base">
                          Our productions create jobs in film, puppetry, education, and tourism 
                          while showcasing innovative storytelling techniques.
                        </p>
                      </CardContent>
                    </Card>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-8 sm:py-12 lg:py-16 bg-forest-deep text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 lg:mb-6">
              Measurable Impact, Lasting Legacy
            </h2>
            <p className="text-lg sm:text-xl text-ivory/90 mb-8 lg:mb-12">
              Join a movement where storytelling creates real change. Every partnership 
              amplifies conservation efforts, preserves cultural heritage, and inspires 
              the next generation of global citizens.
            </p>
            
            <div className="flex flex-col gap-3 sm:flex-row sm:gap-4 lg:gap-6 justify-center">
              <Button variant="warm" size="xl" asChild className="w-full sm:w-auto">
                <Link to="/partnerships">Become a Partner</Link>
              </Button>
              <Button variant="magical" size="xl" asChild className="w-full sm:w-auto">
                <Link to="/get-involved">Support Our Mission</Link>
              </Button>
              <Button variant="outline" size="xl" className="border-ivory text-ivory hover:bg-ivory hover:text-forest-deep w-full sm:w-auto" asChild>
                <Link to="/contact">Discuss Your Impact Goals</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Impact;