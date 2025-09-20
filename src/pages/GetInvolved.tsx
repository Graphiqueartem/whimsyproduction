import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  Heart, 
  Users, 
  Globe, 
  Building,
  GraduationCap,
  Camera,
  Briefcase,
  HandHeart,
  Star,
  Target,
  Gift,
  UserCheck,
  Mail,
  MessageCircle
} from "lucide-react";

// Cultural storytelling images
import culturalStory1 from "@/assets/cultural-storytelling-1.jpg";
import culturalStory2 from "@/assets/cultural-storytelling-2.jpg";
import culturalStory8 from "@/assets/cultural-storytelling-8.jpg";

const GetInvolved = () => {
  const involvementTypes = [
    {
      icon: <Building className="h-10 w-10" />,
      title: "Governments",
      description: "Bring your folklore to life and showcase cultural heritage on the global stage.",
      benefits: ["Cultural diplomacy tool", "National story preservation", "International visibility", "Tourism promotion"],
      cta: "Partner With Us",
      ctaLink: "/partnerships"
    },
    {
      icon: <Heart className="h-10 w-10" />,
      title: "NGOs",
      description: "Turn your cause into a story that moves hearts and inspires global action.",
      benefits: ["Amplified mission reach", "Emotional storytelling", "Community engagement", "Donor inspiration"],
      cta: "Amplify Your Mission",
      ctaLink: "/partnerships"
    },
    {
      icon: <GraduationCap className="h-10 w-10" />,
      title: "Schools & Education",
      description: "Open your classrooms to magic and learning through folklore-based resources.",
      benefits: ["Curriculum enhancement", "Global classroom connections", "Cultural literacy", "Conservation education"],
      cta: "Join Education Network",
      ctaLink: "/partnerships"
    },
    {
      icon: <Gift className="h-10 w-10" />,
      title: "Donors & Sponsors",
      description: "Be part of a cinematic legacy that protects wildlife and celebrates culture.",
      benefits: ["Meaningful impact investment", "Global brand visibility", "CSR excellence", "Legacy building"],
      cta: "Explore Sponsorship",
      ctaLink: "/partnerships"
    },
    {
      icon: <Camera className="h-10 w-10" />,
      title: "Artists & Creatives",
      description: "Collaborate on the stories of tomorrow through puppetry, film, and digital innovation.",
      benefits: ["Creative collaboration", "Global platform", "Cultural preservation", "Innovation showcase"],
      cta: "Join Creative Network",
      ctaLink: "/partnerships"
    }
  ];

  const individualActions = [
    {
      icon: <Users className="h-8 w-8" />,
      title: "Community Ambassador",
      description: "Help spread awareness about folklore preservation and wildlife protection in your community.",
      commitment: "2-4 hours/month",
      impact: "Reach 50+ people monthly with our mission"
    },
    {
      icon: <UserCheck className="h-8 w-8" />,
      title: "Volunteer Contributor",
      description: "Share your skills in translation, research, education, or social media to support our projects.",
      commitment: "Flexible schedule",
      impact: "Directly support production and outreach"
    },
    {
      icon: <Star className="h-8 w-8" />,
      title: "Cultural Storyteller",
      description: "Help us discover and authentically represent folklore from your cultural background.",
      commitment: "Project-based",
      impact: "Preserve your heritage for future generations"
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Conservation Advocate",
      description: "Use our content to educate others about wildlife protection and environmental stewardship.",
      commitment: "As available",
      impact: "Amplify conservation messages in your networks"
    }
  ];

  return (
    <div className="min-h-screen bg-background pt-14">
      {/* Hero Section */}
      <section className="py-6 bg-gradient-hero text-white">
        <div className="container mx-auto px-2 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-3">
            Be Part of the Magic
          </h1>
          <p className="text-base text-ivory/90 max-w-2xl mx-auto mb-4">
            Whimsy Films is building a global movement of storytellers, conservationists, 
            educators, and dreamers. You don't just watch our films — you help create them.
          </p>
          
          <div className="bg-ivory/10 border border-ivory/20 rounded-lg p-4 max-w-xl mx-auto mb-4">
            <p className="text-base font-serif italic text-gold-warm">
              "This is more than film. More than folklore. More than puppetry. 
              This is a movement. A global journey where culture and creativity 
              unite to protect nature and inspire young minds. Will you join us?"
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-2 justify-center mb-4">
            <Button variant="warm" size="default" asChild>
              <Link to="#organizations">Partner With Us</Link>
            </Button>
            <Button variant="magical" size="default" asChild>
              <Link to="#individuals">Join the Movement</Link>
            </Button>
            <Button variant="outline" size="default" className="border-ivory text-ivory hover:bg-ivory hover:text-forest-deep" asChild>
              <Link to="#newsletter">Stay Connected</Link>
            </Button>
          </div>
          
          {/* Cultural Images Row */}
          <div className="grid grid-cols-3 gap-2 max-w-md mx-auto">
            <img src={culturalStory1} alt="Traditional puppet theater" className="w-full h-16 object-cover rounded-lg" />
            <img src={culturalStory2} alt="Shadow puppetry performance" className="w-full h-16 object-cover rounded-lg" />
            <img src={culturalStory8} alt="Scandinavian folk traditions" className="w-full h-16 object-cover rounded-lg" />
          </div>
        </div>
      </section>

      {/* Organizations & Institutions */}
      <section id="organizations" className="py-6 bg-background">
        <div className="container mx-auto px-2">
          {/* Wildlife Videos Section */}
          <div className="max-w-4xl mx-auto mb-8">
            <h3 className="text-xl font-semibold text-forest-deep mb-4 text-center">Join Our Global Movement</h3>
            <div className="grid md:grid-cols-3 gap-4 mb-8">
              <div className="text-center">
                <video 
                  src="/src/assets/videos/praying-mantis.mp4"
                  autoPlay 
                  muted 
                  loop
                  playsInline
                  className="w-full h-32 object-cover rounded-lg shadow-soft mb-2"
                />
                <p className="text-sm text-muted-foreground">Nature's Call</p>
              </div>
              <div className="text-center">
                <div className="bg-gradient-hero rounded-lg flex items-center justify-center h-32 mb-2">
                  <p className="text-white text-sm text-center px-2">Cultural Unity<br/><span className="text-xs opacity-75">(Coming Soon)</span></p>
                </div>
                <p className="text-sm text-muted-foreground">Global Traditions</p>
              </div>
              <div className="text-center">
                <div className="bg-gradient-hero rounded-lg flex items-center justify-center h-32 mb-2">
                  <p className="text-white text-sm text-center px-2">Change Makers<br/><span className="text-xs opacity-75">(Coming Soon)</span></p>
                </div>
                <p className="text-sm text-muted-foreground">Community Action</p>
              </div>
            </div>
          </div>
          
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-forest-deep mb-4">
              Organizations & Institutions
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Partner with us to amplify your mission, preserve cultural heritage, 
              and create lasting impact through the power of storytelling.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {involvementTypes.map((type, index) => (
              <Card key={index} className="hover:shadow-magical transition-all duration-300 transform hover:scale-105 border-forest-light/30">
                <CardHeader>
                  <div className="text-primary mb-3 flex justify-center">
                    {type.icon}
                  </div>
                  <CardTitle className="text-center text-forest-deep text-lg">
                    {type.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center space-y-3">
                  <p className="text-muted-foreground text-sm">
                    {type.description}
                  </p>
                  
                  <div className="space-y-1">
                    {type.benefits.map((benefit, benefitIndex) => (
                      <Badge key={benefitIndex} variant="secondary" className="text-xs mr-1 mb-1">
                        {benefit}
                      </Badge>
                    ))}
                  </div>
                  
                  <Button variant="default" className="w-full" asChild>
                    <Link to={type.ctaLink}>{type.cta}</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Card className="bg-gradient-warm border-0 max-w-2xl mx-auto">
              <CardContent className="p-8">
                <MessageCircle className="h-12 w-12 text-forest-deep mx-auto mb-4" />
                <h3 className="text-2xl font-semibold text-forest-deep mb-4">
                  Not Sure Which Partnership is Right?
                </h3>
                <p className="text-forest-deep/80 mb-6">
                  We believe partnership begins with conversation. Whimsy Films collaborates globally, 
                  and we invite dialogue with governments, NGOs, cultural organisations, and individuals 
                  who share our mission. If our vision resonates with you, we want to hear from you.
                </p>
                <Button variant="default" size="lg" asChild>
                  <Link to="/contact">Contact Us to Start a Partnership</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Individual Involvement */}
      <section id="individuals" className="py-20 bg-forest-light/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-forest-deep mb-6">
              Individual Changemakers
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Every voice matters. Join thousands of individuals worldwide who are 
              helping preserve culture, protect wildlife, and inspire children through storytelling.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {individualActions.map((action, index) => (
              <Card key={index} className="hover:shadow-soft transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="text-primary">
                      {action.icon}
                    </div>
                    <CardTitle className="text-forest-deep">
                      {action.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    {action.description}
                  </p>
                  
                  <div className="flex justify-between text-sm">
                    <span className="font-medium text-forest-deep">
                      Time Commitment: <span className="text-muted-foreground">{action.commitment}</span>
                    </span>
                  </div>
                  
                  <div className="bg-gradient-forest rounded-lg p-4">
                    <h4 className="font-semibold text-forest-deep text-sm mb-2">Your Impact:</h4>
                    <p className="text-forest-deep/80 text-sm">{action.impact}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="default" size="lg" asChild>
                <Link to="/contact">Join Our Community</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/contact">Volunteer With Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter & Updates */}
      <section id="newsletter" className="py-20 bg-forest-deep text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Mail className="h-16 w-16 text-gold-warm mx-auto mb-6" />
            <h2 className="text-4xl font-bold mb-6">
              Stay Connected to the Movement
            </h2>
            <p className="text-xl text-ivory/90 mb-8">
              Be the first to know about new productions, partnership opportunities, 
              and ways to get involved in protecting wildlife and celebrating culture.
            </p>
            
            <Card className="bg-ivory/10 border-ivory/20 max-w-2xl mx-auto">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-ivory mb-6">
                  Join Our Global Community
                </h3>
                
                <div className="space-y-4 mb-6">
                  <div className="flex gap-3 max-w-md mx-auto">
                    <Input 
                      placeholder="Your email address" 
                      className="bg-ivory/10 border-ivory/20 text-ivory placeholder:text-ivory/60"
                    />
                    <Button variant="warm">Subscribe</Button>
                  </div>
                </div>

                <div className="text-left space-y-3 text-ivory/80 text-sm">
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary">✓</Badge>
                    <span>Exclusive behind-the-scenes content</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary">✓</Badge>
                    <span>Early access to new productions</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary">✓</Badge>
                    <span>Partnership and volunteer opportunities</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary">✓</Badge>
                    <span>Conservation and cultural preservation updates</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <p className="text-ivory/60 text-sm mt-6">
              We respect your privacy and will never share your information. 
              Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-warm">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-forest-deep mb-6">
              The Future of Storytelling Starts With You
            </h2>
            <p className="text-xl text-muted-foreground mb-12">
              Whether you represent a government, NGO, school, business, or are simply 
              passionate about culture and conservation — there's a place for you in our movement.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <Card className="text-center hover:shadow-soft transition-all duration-300">
                <CardContent className="p-6">
                  <HandHeart className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold text-forest-deep mb-2">For Organizations</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Partner with us to amplify your mission through storytelling
                  </p>
                  <Button variant="default" size="sm" asChild>
                    <Link to="/partnerships">Explore Partnerships</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-soft transition-all duration-300">
                <CardContent className="p-6">
                  <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold text-forest-deep mb-2">For Individuals</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Join our community of global changemakers and storytellers
                  </p>
                  <Button variant="default" size="sm" asChild>
                    <Link to="/contact">Get Involved Today</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-soft transition-all duration-300">
                <CardContent className="p-6">
                  <Globe className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold text-forest-deep mb-2">Stay Updated</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Follow our journey and be first to know about new opportunities
                  </p>
                  <Button variant="default" size="sm" asChild>
                    <Link to="#newsletter">Join Newsletter</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="bg-forest-deep text-white rounded-2xl p-8">
              <h3 className="text-2xl font-semibold mb-4">
                Ready to Make Magic Together?
              </h3>
              <p className="text-ivory/80 mb-6">
                Every great story begins with someone believing change is possible. 
                Let's write the next chapter together.
              </p>
              <Button variant="warm" size="lg" asChild>
                <Link to="/contact">Start Your Journey</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GetInvolved;