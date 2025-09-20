import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Film, 
  Heart, 
  Globe, 
  Sparkles, 
  Camera,
  Users,
  BookOpen,
  TreePine,
  Star,
  Play,
  Eye,
  Bell
} from "lucide-react";

const Productions = () => {
  const approaches = [
    {
      icon: <Users className="h-10 w-10" />,
      title: "Child-Centered",
      description: "Stories told through children's eyes, speaking directly to their imagination and empowering them as heroes of their own narratives.",
      details: "Every protagonist is a child who faces real challenges with courage, creativity, and compassion. We believe children are not just audiences but active participants in shaping their world."
    },
    {
      icon: <Heart className="h-10 w-10" />,
      title: "Handcrafted Meets Digital",
      description: "Traditional puppetry and practical effects meet cutting-edge technology to create timeless, tactile storytelling.",
      details: "Our artisans create physical puppets with intricate details while our technologists enhance them with AI and digital effects that feel magical, not artificial."
    },
    {
      icon: <Camera className="h-10 w-10" />,
      title: "Wildlife Integration", 
      description: "Animals are not background elements — they are central characters in narratives that celebrate their beauty and importance.",
      details: "We work with wildlife cinematographers and conservation experts to ensure authentic, respectful representation of animals in their natural habitats."
    },
    {
      icon: <BookOpen className="h-10 w-10" />,
      title: "Rooted in Folklore",
      description: "Stories drawn from authentic cultural traditions, adapted with respect and collaboration from source communities.",
      details: "Every folklore adaptation involves cultural consultants, community leaders, and traditional storytellers to ensure authenticity and respectful representation."
    },
    {
      icon: <Globe className="h-10 w-10" />,
      title: "Universal Appeal",
      description: "Narratives that resonate across cultures, transcending borders while celebrating local uniqueness.",
      details: "We identify universal themes in local stories — courage, friendship, environmental protection — that speak to children regardless of their background."
    }
  ];

  const thematicStrands = [
    {
      title: "Folklore & Fairy Tales",
      description: "Traditional stories from diverse cultures, retold for modern global audiences",
      icon: <BookOpen className="h-8 w-8" />,
      examples: ["Celtic forest legends", "African animal wisdom tales", "Asian creation myths", "Indigenous earth stories"]
    },
    {
      title: "Magical Animal Narratives",
      description: "Wildlife-centered adventures that build emotional connections with endangered species",
      icon: <TreePine className="h-8 w-8" />,
      examples: ["Elephant migration journeys", "Arctic wildlife survival", "Rainforest ecosystem adventures", "Ocean conservation tales"]
    },
    {
      title: "Conservation Adventures",
      description: "Action-packed stories where children become environmental heroes",
      icon: <Globe className="h-8 w-8" />,
      examples: ["Plastic ocean cleanup", "Forest restoration missions", "Wildlife sanctuary protection", "Climate action adventures"]
    },
    {
      title: "Child-Hero Storytelling",
      description: "Empowering narratives featuring children as protagonists solving real-world challenges",
      icon: <Star className="h-8 w-8" />,
      examples: ["Cultural bridge-builders", "Young conservationists", "Community problem-solvers", "Peace ambassadors"]
    }
  ];

  return (
    <div className="min-h-screen bg-background pt-14">
      {/* Hero Section */}
      <section className="py-6 bg-gradient-hero text-white">
        <div className="container mx-auto px-2 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 lg:mb-4">
            Where Folklore Meets the Screen
          </h1>
          <p className="text-sm sm:text-base text-ivory/90 max-w-3xl mx-auto mb-4 lg:mb-6">
            Whimsy Films' productions are unlike anything else in today's media landscape. 
            We combine live action, puppetry, wildlife cinematography, and AI-enhanced visuals 
            to create timeless stories that feel magical, tactile, and emotionally real.
          </p>
          
          <div className="flex flex-col gap-2 sm:flex-row sm:gap-3 justify-center mb-4">
            <Button variant="warm" size="default" asChild className="w-full sm:w-auto">
              <Link to="#approach">Explore Our Storytelling Approach</Link>
            </Button>
            <Button variant="magical" size="default" asChild className="w-full sm:w-auto">
              <Link to="#slate">Register for Updates</Link>
            </Button>
          </div>
          
        </div>
      </section>

      {/* Wildlife Videos Section */}
      <section className="py-4 bg-background">
        <div className="container mx-auto px-2">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-xl font-semibold text-forest-deep mb-4 text-center">Productions in Motion</h3>
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
                <p className="text-sm text-muted-foreground">Nature Stories</p>
              </div>
              <div className="text-center">
                <video 
                  src="https://lovedancelive.org/wp-content/uploads/2025/09/vecteezy_aerial-view-of-a-mountain-river-in-the-clouds_67163497-1.mp4"
                  autoPlay 
                  muted 
                  loop
                  playsInline
                  className="w-full h-40 object-cover rounded-lg shadow-soft mb-2"
                />
                <p className="text-sm text-muted-foreground">Cultural Tales</p>
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
                <p className="text-sm text-muted-foreground">International Reach</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Production Highlights */}
      <section className="py-6 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 lg:mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-forest-deep mb-4 lg:mb-6">
              Innovation Meets Tradition
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
              Our unique approach blends the timeless appeal of traditional storytelling 
              with cutting-edge production techniques.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            <Card className="text-center hover:shadow-magical transition-all duration-300 transform hover:scale-105">
              <CardContent className="p-4 sm:p-6 lg:p-8">
                <Camera className="h-8 sm:h-10 lg:h-12 w-8 sm:w-10 lg:w-12 text-primary mx-auto mb-3 lg:mb-4" />
                <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-forest-deep mb-2 lg:mb-3">
                  Wildlife Cinematography
                </h3>
                <p className="text-muted-foreground text-xs sm:text-sm lg:text-base">
                  Capturing the raw wonder of the natural world
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-magical transition-all duration-300 transform hover:scale-105">
              <CardContent className="p-4 sm:p-6 lg:p-8">
                <Heart className="h-8 sm:h-10 lg:h-12 w-8 sm:w-10 lg:w-12 text-primary mx-auto mb-3 lg:mb-4" />
                <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-forest-deep mb-2 lg:mb-3">
                  Puppetry & Practical Artistry
                </h3>
                <p className="text-muted-foreground text-xs sm:text-sm lg:text-base">
                  Timeless, tactile, beloved by children
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-magical transition-all duration-300 transform hover:scale-105">
              <CardContent className="p-4 sm:p-6 lg:p-8">
                <Users className="h-8 sm:h-10 lg:h-12 w-8 sm:w-10 lg:w-12 text-primary mx-auto mb-3 lg:mb-4" />
                <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-forest-deep mb-2 lg:mb-3">
                  Live Action & Human Performance
                </h3>
                <p className="text-muted-foreground text-xs sm:text-sm lg:text-base">
                  Authentic, emotional, deeply relatable
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-magical transition-all duration-300 transform hover:scale-105">
              <CardContent className="p-4 sm:p-6 lg:p-8">
                <Sparkles className="h-8 sm:h-10 lg:h-12 w-8 sm:w-10 lg:w-12 text-primary mx-auto mb-3 lg:mb-4" />
                <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-forest-deep mb-2 lg:mb-3">
                  AI-enhanced Visuals & Innovation
                </h3>
                <p className="text-muted-foreground text-xs sm:text-sm lg:text-base">
                  Expanding creative possibilities
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section id="approach" className="py-20 bg-forest-light/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-forest-deep mb-6">
              Our Five-Pillar Approach
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Every production follows our proven methodology that ensures cultural authenticity, 
              environmental responsibility, and child-centered storytelling.
            </p>
          </div>

          <div className="space-y-12">
            {approaches.map((approach, index) => (
              <div key={index} className={`flex flex-col lg:flex-row gap-8 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className="lg:w-1/2">
                  <Card className="hover:shadow-soft transition-all duration-300">
                    <CardContent className="p-8">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="text-primary">
                          {approach.icon}
                        </div>
                        <div>
                          <Badge variant="secondary" className="mb-2">
                            Pillar {index + 1}
                          </Badge>
                          <h3 className="text-2xl font-bold text-forest-deep">
                            {approach.title}
                          </h3>
                        </div>
                      </div>
                      
                      <p className="text-lg text-muted-foreground mb-4">
                        {approach.description}
                      </p>
                      
                      <p className="text-muted-foreground">
                        {approach.details}
                      </p>
                    </CardContent>
                  </Card>
                </div>

                <div className="lg:w-1/2">
                  <Card className="bg-gradient-warm border-0">
                    <CardContent className="p-8">
                      <h4 className="text-xl font-semibold text-forest-deep mb-4">
                        {index === 0 && "Empowering Young Heroes"}
                        {index === 1 && "Artistry Meets Technology"} 
                        {index === 2 && "Conservation Through Connection"}
                        {index === 3 && "Cultural Collaboration"}
                        {index === 4 && "Stories Without Borders"}
                      </h4>
                      <p className="text-forest-deep/80">
                        {index === 0 && "Children see themselves as capable, creative problem-solvers who can make a real difference in their communities and the world."}
                        {index === 1 && "The warmth of handcrafted puppets combined with the endless possibilities of digital enhancement creates truly magical experiences."}
                        {index === 2 && "Real wildlife footage and scientifically accurate habitats help children understand and care about the creatures they're protecting."}
                        {index === 3 && "Working directly with cultural communities ensures our adaptations honor tradition while reaching new audiences."}
                        {index === 4 && "Universal themes of courage, friendship, and environmental stewardship resonate with families worldwide."}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="default" size="lg" asChild>
                <Link to="/partnerships">Explore Our Storytelling Approach</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/get-involved">Register for Updates</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Current Development Slate */}
      <section id="slate" className="py-20 bg-forest-deep text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Current Development Slate
            </h2>
            <p className="text-xl text-ivory/90 max-w-3xl mx-auto mb-8">
              While specific titles remain confidential, our slate is built around core thematic 
              strands that celebrate diversity, protect wildlife, and inspire young audiences.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {thematicStrands.map((strand, index) => (
              <Card key={index} className="bg-ivory/10 border-ivory/20 hover:bg-ivory/15 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="text-gold-warm">
                      {strand.icon}
                    </div>
                    <CardTitle className="text-ivory text-xl">
                      {strand.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-ivory/80 mb-4">
                    {strand.description}
                  </p>
                  
                  <div className="space-y-2">
                    <h4 className="font-semibold text-gold-warm text-sm">Example Themes:</h4>
                    <div className="flex flex-wrap gap-2">
                      {strand.examples.map((example, exampleIndex) => (
                        <Badge key={exampleIndex} variant="secondary" className="text-xs">
                          {example}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <div className="bg-ivory/10 border border-ivory/20 rounded-2xl p-8 max-w-2xl mx-auto mb-8">
              <Bell className="h-12 w-12 text-gold-warm mx-auto mb-4" />
              <h3 className="text-2xl font-semibold text-ivory mb-4">
                Be First to Know
              </h3>
              <p className="text-ivory/80 mb-6">
                Join our exclusive community to receive updates on new productions, 
                behind-the-scenes content, and partnership opportunities.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="warm" size="xl" asChild>
                <Link to="/get-involved">Register for Exclusive Updates</Link>
              </Button>
              <Button variant="magical" size="xl" asChild>
                <Link to="/partnerships">Join Our Beta Screening Community</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-warm">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-forest-deep mb-6">
              Shape the Future of Storytelling
            </h2>
            <p className="text-xl text-muted-foreground mb-12">
              Our productions are more than entertainment — they're cultural experiences 
              that inspire action, preserve heritage, and protect our natural world. 
              Be part of creating stories that matter.
            </p>
            
            <div className="flex flex-col md:flex-row gap-6 justify-center">
              <Button variant="default" size="xl" asChild>
                <Link to="/partnerships">Partner on Productions</Link>
              </Button>
              <Button variant="outline" size="xl" asChild>
                <Link to="/get-involved">Support Our Mission</Link>
              </Button>
              <Button variant="secondary" size="xl" asChild>
                <Link to="/contact">Discuss Collaboration</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Productions;