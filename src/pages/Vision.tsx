import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Heart, 
  Users, 
  Sparkles, 
  Globe,
  Target,
  BookOpen,
  Lightbulb,
  TreePine
} from "lucide-react";

const Vision = () => {
  const values = [
    {
      icon: <Sparkles className="h-8 w-8" />,
      title: "Imagination",
      description: "Wonder is the seed of empathy and action."
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Respect",
      description: "Cultural and ecological authenticity in everything we create."
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: "Innovation",
      description: "Technology that enhances artistry without losing soul."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Collaboration",
      description: "Co-created with governments, NGOs, educators, and communities."
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Impact",
      description: "Every project contributes to cultural, social, and environmental good."
    }
  ];

  return (
    <div className="min-h-screen bg-background pt-14">
      {/* Hero Section */}
      <section className="py-6 bg-gradient-hero text-white">
        <div className="container mx-auto px-2 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 lg:mb-4">
            Reimagining Stories, Inspiring Change
          </h1>
          <p className="text-sm sm:text-base text-ivory/90 max-w-2xl mx-auto mb-4">
            Our vision extends far beyond entertainment — we create cultural experiences 
            that protect wildlife, celebrate heritage, and inspire global action.
          </p>
          
        </div>
      </section>

      {/* Wildlife Videos Section */}
      <section className="py-4 bg-background">
        <div className="container mx-auto px-2">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-xl font-semibold text-forest-deep mb-4 text-center">Our Vision in Motion</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-center">
                <video 
                  src="https://lovedancelive.org/wp-content/uploads/2025/09/vecteezy_mantis-or-praying-mantis-mantis-religiosa-the-green_8660552.mp4"
                  autoPlay 
                  muted 
                  loop
                  playsInline
                  className="w-full h-40 object-cover rounded-lg shadow-soft mb-2"
                />
                <p className="text-sm text-muted-foreground">Nature's Wonder</p>
              </div>
              <div className="text-center">
                <video 
                  src="https://lovedancelive.org/wp-content/uploads/2025/09/vecteezy_the-horses-are-walking-in-the-grass-at-sunset_70189274.mov"
                  autoPlay 
                  muted 
                  loop
                  playsInline
                  className="w-full h-40 object-cover rounded-lg shadow-soft mb-2"
                />
                <p className="text-sm text-muted-foreground">Cultural Bridge Building</p>
              </div>
              <div className="text-center">
                <video 
                  src="https://lovedancelive.org/wp-content/uploads/2025/09/vecteezy_zebra-on-green-screen_70196321.mov"
                  autoPlay 
                  muted 
                  loop
                  playsInline
                  className="w-full h-40 object-cover rounded-lg shadow-soft mb-2"
                />
                <p className="text-sm text-muted-foreground">Worldwide Inspiration</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-6 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-8 lg:mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-forest-deep mb-4 lg:mb-6">
              Our Mission & Values
            </h2>
            
            <div className="text-base sm:text-lg text-muted-foreground space-y-3 lg:space-y-4 mb-8 lg:mb-10">
              <p>
                At Whimsy Films, our mission is to create films that celebrate folklore, 
                protect wildlife, and inspire children everywhere to imagine a more 
                inclusive, compassionate, and sustainable world.
              </p>
              
              <p>
                Our values guide every decision:
              </p>
              <ul className="space-y-1 lg:space-y-2 mt-3 lg:mt-4 text-sm sm:text-base">
                <li><strong>Imagination:</strong> wonder is the seed of empathy and action.</li>
                <li><strong>Respect:</strong> cultural and ecological authenticity.</li>
                <li><strong>Innovation:</strong> technology without losing artistry.</li>
                <li><strong>Collaboration:</strong> co-created with governments, NGOs, educators, and communities.</li>
                <li><strong>Impact:</strong> every project contributes to cultural, social, and environmental good.</li>
              </ul>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 lg:gap-8">
              {values.map((value, index) => (
                <Card key={index} className="border-forest-light/30 hover:shadow-magical transition-all duration-300 transform hover:scale-105">
                  <CardContent className="p-4 sm:p-6 lg:p-8 text-center">
                    <div className="text-primary mb-3 lg:mb-4 flex justify-center">
                      {value.icon}
                    </div>
                    <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-forest-deep mb-2 lg:mb-3">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground text-xs sm:text-sm lg:text-base">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-8 lg:mt-12">
              <Button variant="hero" size="lg" asChild>
                <Link to="/get-involved">Join Our Mission</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Storytelling Matters */}
      <section id="storytelling" className="py-8 sm:py-12 lg:py-16 bg-forest-light/20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-forest-deep mb-4 lg:mb-6">
                Why Storytelling Matters
              </h2>
              
              <div className="space-y-4 lg:space-y-6 text-base sm:text-lg text-muted-foreground">
                <p>
                  Stories are more than entertainment. They pass down cultural wisdom, shape 
                  childhood imagination, build empathy, and inspire societal change. Whimsy Films 
                  uses this power intentionally, turning folklore and wildlife storytelling into 
                  platforms for education, diplomacy, and conservation.
                </p>
              </div>
            </div>

            <div className="space-y-4 lg:space-y-6">
              <Card className="bg-gradient-warm border-0">
                <CardContent className="p-4 sm:p-6 lg:p-8">
                  <Globe className="h-8 sm:h-10 lg:h-12 w-8 sm:w-10 lg:w-12 text-forest-deep mb-3 lg:mb-4" />
                  <h3 className="text-lg sm:text-xl font-semibold text-forest-deep mb-2 lg:mb-3">
                    Stories as Global Language
                  </h3>
                  <p className="text-forest-deep/80 text-sm sm:text-base">
                    Folklore transcends borders, languages, and cultures. A story about a 
                    brave child protecting forest animals resonates universally, whether 
                    told in Nigeria, Japan, or Peru.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-forest border-0">
                <CardContent className="p-4 sm:p-6 lg:p-8">
                  <Heart className="h-8 sm:h-10 lg:h-12 w-8 sm:w-10 lg:w-12 text-forest-deep mb-3 lg:mb-4" />
                  <h3 className="text-lg sm:text-xl font-semibold text-forest-deep mb-2 lg:mb-3">
                    Empathy Through Experience
                  </h3>
                  <p className="text-forest-deep/80 text-sm sm:text-base">
                    When children see themselves as heroes protecting wildlife, they develop 
                    deep emotional connections to conservation that last a lifetime.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* The Future We Are Building */}
      <section id="future" className="py-8 sm:py-12 lg:py-16 bg-forest-deep text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 lg:mb-6">
              The Future We Are Building
            </h2>
            
            <div className="text-lg sm:text-xl text-ivory/90 space-y-4 lg:space-y-6 mb-8 lg:mb-10">
              <p>
                We envision a future where children everywhere grow up with stories representing their 
                cultures, where families discover films that are entertaining yet enriching, and where 
                governments and NGOs use our productions as cultural diplomacy tools and awareness campaigns. 
                Conservation efforts are amplified by stories that make the natural world unforgettable.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 text-left mt-8 lg:mt-12">
                <Card className="bg-ivory/10 border-ivory/20">
                  <CardContent className="p-4 sm:p-6 lg:p-8">
                    <Users className="h-6 sm:h-8 w-6 sm:w-8 text-gold-warm mb-3 lg:mb-4" />
                    <h3 className="text-base sm:text-lg font-semibold text-ivory mb-2 lg:mb-3">
                      For Children & Families
                    </h3>
                    <p className="text-ivory/80 text-sm sm:text-base">
                      Stories that celebrate their heritage while teaching universal values 
                      of empathy, courage, and environmental stewardship.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-ivory/10 border-ivory/20">
                  <CardContent className="p-4 sm:p-6 lg:p-8">
                    <Globe className="h-6 sm:h-8 w-6 sm:w-8 text-gold-warm mb-3 lg:mb-4" />
                    <h3 className="text-base sm:text-lg font-semibold text-ivory mb-2 lg:mb-3">
                      For Governments & NGOs
                    </h3>
                    <p className="text-ivory/80 text-sm sm:text-base">
                      Cultural diplomacy tools and conservation campaigns that reach hearts 
                      and minds through the power of storytelling.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-ivory/10 border-ivory/20">
                  <CardContent className="p-4 sm:p-6 lg:p-8">
                    <BookOpen className="h-6 sm:h-8 w-6 sm:w-8 text-gold-warm mb-3 lg:mb-4" />
                    <h3 className="text-base sm:text-lg font-semibold text-ivory mb-2 lg:mb-3">
                      For Educators
                    </h3>
                    <p className="text-ivory/80 text-sm sm:text-base">
                      Curriculum resources that make learning joyful while building global 
                      citizens who care about cultural diversity and environmental protection.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-ivory/10 border-ivory/20">
                  <CardContent className="p-4 sm:p-6 lg:p-8">
                    <TreePine className="h-6 sm:h-8 w-6 sm:w-8 text-gold-warm mb-3 lg:mb-4" />
                    <h3 className="text-base sm:text-lg font-semibold text-ivory mb-2 lg:mb-3">
                      For Our Planet
                    </h3>
                    <p className="text-ivory/80 text-sm sm:text-base">
                      A generation of children who see themselves as protectors of wildlife 
                      and guardians of the natural world.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            <Button variant="hero" size="xl" asChild>
              <Link to="/partnerships">Be Part of This Future</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-8 sm:py-12 lg:py-16 bg-gradient-warm">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-forest-deep mb-4 lg:mb-6">
              Turn Vision Into Reality
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground mb-6 lg:mb-8">
              Every great story begins with someone believing it's possible. 
              Join us in creating the stories that will shape tomorrow.
            </p>
            
            <div className="flex flex-col gap-3 sm:flex-row sm:gap-4 justify-center">
              <Button variant="default" size="lg" asChild className="w-full sm:w-auto">
                <Link to="/partnerships">Partner With Us</Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="w-full sm:w-auto">
                <Link to="/get-involved">Join the Movement</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Vision;