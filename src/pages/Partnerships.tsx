import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Building, 
  Heart, 
  GraduationCap, 
  Globe,
  Users,
  Briefcase,
  Camera,
  HandHeart,
  BookOpen,
  Trophy,
  Target,
  Sparkles
} from "lucide-react";

const Partnerships = () => {
  const partnerTypes = [
    {
      icon: <Building className="h-12 w-12" />,
      title: "Governments & Cultural Ministries",
      subtitle: "Culture as Soft Power. Conservation as Global Leadership.",
      description: "We collaborate with governments, ministries, and cultural institutions to amplify national heritage and environmental leadership.",
      benefits: [
        "Soft Power Showcase: Position your nation as a leader in culture and conservation",
        "Global Visibility: Present national heritage to international audiences",
        "Diplomacy Through Culture: Strengthen relationships via cultural exchange",
        "SDG Alignment: Contribute visibly to global climate and sustainability commitments",
        "Tourism & Trade Impact: Cultural promotion that supports economic growth"
      ],
      ctas: [
        { text: "Book Government Briefing & Lunch Presentation", link: "/contact" },
        { text: "Collaborate With Us on National Projects", link: "/contact" }
      ],
      color: "bg-blue-50 border-blue-200"
    },
    {
      icon: <Heart className="h-12 w-12" />,
      title: "NGOs & Charities",
      subtitle: "Storytelling for Social Impact",
      description: "We partner with NGOs and international development organizations to create projects that go beyond entertainment — fostering empathy, inclusion, and community empowerment.",
      benefits: [
        "Scalable Impact: Films, animations, and digital media reach wide audiences",
        "Community Inclusion: Projects amplify underrepresented voices and celebrate diversity",
        "Child Development: Folklore-based storytelling nurtures creativity and resilience",
        "Advocacy & Awareness: Visually powerful stories strengthen campaigns",
        "Global Networks: Collaborations connect NGOs with partners in arts and education"
      ],
      ctas: [
        { text: "Partner With Us on Social Impact", link: "/contact" },
        { text: "Amplify Your NGO Mission", link: "/contact" }
      ],
      color: "bg-green-50 border-green-200"
    },
    {
      icon: <HandHeart className="h-12 w-12" />,
      title: "Charities & Foundations",
      subtitle: "Inspiring Donors Through Magical Storytelling",
      description: "Charities and foundations gain powerful new ways to connect with supporters and beneficiaries through creative content.",
      benefits: [
        "Fundraising Appeal: Storytelling captures donor imagination and strengthens campaigns",
        "Visibility & Reach: Films expand outreach to new audiences, locally and globally",
        "Community Engagement: Folklore connects charities with families and cultural groups",
        "Donor Retention: Inspirational content deepens relationships with supporters",
        "Legacy & Heritage: Projects highlight cultural preservation as philanthropic impact"
      ],
      ctas: [
        { text: "Partner With Us to Inspire Donors", link: "/contact" },
        { text: "Bring Your Cause to Life", link: "/contact" }
      ],
      color: "bg-purple-50 border-purple-200"
    },
    {
      icon: <BookOpen className="h-12 w-12" />,
      title: "Cultural Organisations",
      subtitle: "Preserve & Share Folklore",
      description: "We work hand-in-hand with museums, archives, and cultural institutes to preserve and share folklore.",
      benefits: [
        "Cultural Preservation: Translate oral traditions into visual legacies",
        "Creative Collaboration: Co-create with storytellers, puppeteers, and artists",
        "Global Visibility: Share your cultural treasures with new audiences",
        "Cross-Media Opportunities: Film, live performance, exhibitions, and education combined"
      ],
      ctas: [
        { text: "Bring Your Culture's Stories to Screen", link: "/contact" }
      ],
      color: "bg-orange-50 border-orange-200"
    },
    {
      icon: <GraduationCap className="h-12 w-12" />,
      title: "Education & Academia",
      subtitle: "Folklore as a Living Classroom",
      description: "Our productions open new frontiers for education — from early literacy development to advanced cultural research.",
      benefits: [
        "Curriculum Innovation: Ready-to-use resources that blend conservation and creativity",
        "Exchange Opportunities: Connect students with classrooms worldwide",
        "Access to Artists & Experts: Workshops and residencies delivered by global leaders",
        "Digital Classrooms: Interactive tools to bridge distance and expand learning",
        "Global Recognition: Position your institution at the forefront of cultural education"
      ],
      ctas: [
        { text: "Join the Global Education Network", link: "/contact" },
        { text: "Collaborate on Education Programs", link: "/contact" }
      ],
      color: "bg-indigo-50 border-indigo-200"
    },
    {
      icon: <Camera className="h-12 w-12" />,
      title: "Creative & Media Industries",
      subtitle: "Innovating the Future of Storytelling",
      description: "We collaborate with film studios, production houses, broadcasters, and media innovators to push the boundaries of cinema.",
      benefits: [
        "Co-Production Opportunities: Collaborate on original folklore-based content with global appeal",
        "Technology & Innovation: Explore new frontiers with AI-enhanced creativity and puppetry",
        "Licensing & Distribution: Access captivating IP that speaks to diverse audiences",
        "Festival & Market Positioning: Distinctive, culturally rich productions stand out globally",
        "Shared Vision: Partnerships elevate creativity while aligning with heritage and innovation"
      ],
      ctas: [
        { text: "Collaborate on Creative Projects", link: "/contact" },
        { text: "Access Our Global IP", link: "/contact" }
      ],
      color: "bg-pink-50 border-pink-200"
    },
    {
      icon: <Briefcase className="h-12 w-12" />,
      title: "Businesses & Investors",
      subtitle: "Invest in Impact. Align with Purpose.",
      description: "Partnering with us connects brands to global good, offering visibility, impact, and authentic CSR integration.",
      benefits: [
        "CSR Excellence: Meaningful partnerships that tick sustainability boxes",
        "Brand Visibility: Showcase your brand in cultural and conservation platforms worldwide",
        "Employee Engagement: Opportunities for staff volunteering and skills-sharing",
        "Exclusive Access: Invitations to cultural showcases and international events",
        "Long-Term Growth: Position your business at the intersection of creativity and sustainability"
      ],
      ctas: [
        { text: "Explore Sponsorship Packages", link: "/contact" },
        { text: "Invest in Cultural Storytelling", link: "/contact" }
      ],
      color: "bg-yellow-50 border-yellow-200"
    },
    {
      icon: <Users className="h-12 w-12" />,
      title: "Individuals",
      subtitle: "Every Voice Matters. Including Yours.",
      description: "You don't need to be a government, NGO, or business to make change. Individuals can join as supporters, cultural ambassadors, or volunteers.",
      benefits: [
        "Community Membership: Be part of a global network of changemakers",
        "Recognition: Your name or contribution linked to cultural and conservation impact",
        "Volunteer Opportunities: Share your time, skills, and passion",
        "Exclusive Updates: Receive early access to news and creative content",
        "Personal Impact: Know you're contributing to protecting wildlife and culture"
      ],
      ctas: [
        { text: "Join Our Community", link: "/get-involved" },
        { text: "Volunteer With Us", link: "/get-involved" }
      ],
      color: "bg-teal-50 border-teal-200"
    }
  ];

  return (
    <div className="min-h-screen bg-background pt-14">
      {/* Hero Section */}
      <section className="py-6 bg-gradient-hero text-white">
        <div className="container mx-auto px-2 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 lg:mb-4">
            Partnerships That Matter
          </h1>
          <p className="text-sm sm:text-base text-ivory/90 max-w-3xl mx-auto mb-3 lg:mb-4">
            At Whimsy Films, transformation happens when vision meets collaboration. We are building 
            a movement powered by governments, NGOs, cultural institutions, and forward-thinking sponsors. 
            By partnering with us, you step into a global conversation about how culture and conservation 
            can work together to shape the future.
          </p>
          
          <blockquote className="text-base sm:text-lg font-serif italic text-gold-warm mb-3 lg:mb-4">
            "Partnership turns vision into action—and action into legacy."
          </blockquote>
          
          <div className="flex flex-col gap-2 sm:flex-row sm:gap-3 justify-center mb-4">
            <Button variant="warm" size="default" asChild>
              <Link to="#governments">Government Partners</Link>
            </Button>
            <Button variant="magical" size="default" asChild>
              <Link to="#ngos">NGO Partnerships</Link>
            </Button>
          </div>
          
        </div>
      </section>

      {/* Wildlife Videos Section */}
      <section className="py-4 bg-background">
        <div className="container mx-auto px-2">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-xl font-semibold text-forest-deep mb-4 text-center">Global Partnership Stories</h3>
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
                <p className="text-sm text-muted-foreground">Wildlife Conservation</p>
              </div>
              <div className="text-center">
                <div className="bg-gradient-hero rounded-lg flex items-center justify-center h-40 mb-2">
                  <p className="text-white text-sm text-center px-2">Natural Heritage<br/><span className="text-xs opacity-75">(Coming Soon)</span></p>
                </div>
                <p className="text-sm text-muted-foreground">Cultural Landscapes</p>
              </div>
              <div className="text-center">
                <div className="bg-gradient-hero rounded-lg flex items-center justify-center h-40 mb-2">
                  <p className="text-white text-sm text-center px-2">Global Reach<br/><span className="text-xs opacity-75">(Coming Soon)</span></p>
                </div>
                <p className="text-sm text-muted-foreground">International Projects</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Types */}
      <section id="governments" className="py-6 bg-background">
        <div className="container mx-auto px-2">
          <div className="text-center mb-6 lg:mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-forest-deep mb-3 lg:mb-4">
              Your Impact, Amplified
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
              Every partner brings unique strengths and goals. We tailor our collaborations 
              to maximize your impact while advancing our shared mission of cultural preservation 
              and environmental protection.
            </p>
          </div>

          <div className="space-y-8 lg:space-y-12">
            {partnerTypes.map((partner, index) => (
              <div key={index} id={partner.title.toLowerCase().replace(/[^a-z0-9]/g, '-')}>
                <Card className={`${partner.color} border-2 shadow-soft hover:shadow-magical transition-all duration-500`}>
                  <CardHeader className="pb-4 lg:pb-6">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 lg:gap-6">
                      <div className="flex items-center gap-4 lg:gap-6">
                        <div className="text-primary">
                          {partner.icon}
                        </div>
                        <div>
                          <CardTitle className="text-xl sm:text-2xl lg:text-3xl text-forest-deep mb-1 lg:mb-2">
                            {partner.title}
                          </CardTitle>
                          <p className="text-base sm:text-lg font-semibold text-primary">
                            {partner.subtitle}
                          </p>
                        </div>
                      </div>
                      
                      <Badge variant="secondary" className="text-xs sm:text-sm px-3 lg:px-4 py-1 lg:py-2">
                        Partnership Track {index + 1}
                      </Badge>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-4 lg:space-y-6 p-4 sm:p-6 lg:p-8 pt-0">
                    <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                      {partner.description}
                    </p>
                    
                    <div>
                      <h4 className="font-semibold text-forest-deep mb-3 lg:mb-4 text-base sm:text-lg">
                        Distinct Benefits:
                      </h4>
                      <div className="grid md:grid-cols-2 gap-2 lg:gap-3">
                        {partner.benefits.map((benefit, benefitIndex) => (
                          <div key={benefitIndex} className="flex items-start gap-2 lg:gap-3">
                            <Badge variant="secondary" className="mt-0.5 lg:mt-1 shrink-0 text-xs">
                              ✓
                            </Badge>
                            <span className="text-muted-foreground text-xs sm:text-sm">
                              <strong>{benefit.split(':')[0]}:</strong>
                              {benefit.split(':').slice(1).join(':')}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 lg:gap-4 pt-2 lg:pt-4">
                      {partner.ctas.map((cta, ctaIndex) => (
                        <Button 
                          key={ctaIndex}
                          variant={ctaIndex === 0 ? "default" : "outline"} 
                          size="lg" 
                          asChild
                          className="text-sm lg:text-base"
                        >
                          <Link to={cta.link}>{cta.text}</Link>
                        </Button>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Process */}
      <section className="py-8 sm:py-12 lg:py-16 bg-forest-light/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 lg:mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-forest-deep mb-4 lg:mb-6">
              How Partnership Works
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
              We believe great partnerships begin with great conversations. 
              Our collaborative approach ensures every project creates meaningful value for all stakeholders.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            <Card className="text-center hover:shadow-soft transition-all duration-300">
              <CardContent className="p-4 sm:p-6 lg:p-8">
                <div className="w-12 h-12 lg:w-16 lg:h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-3 lg:mb-4">
                  <span className="text-lg lg:text-2xl font-bold text-primary-foreground">1</span>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-forest-deep mb-2 lg:mb-3">
                  Initial Conversation
                </h3>
                <p className="text-muted-foreground text-sm sm:text-base">
                  We discuss your goals, values, and vision for collaboration
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-soft transition-all duration-300">
              <CardContent className="p-4 sm:p-6 lg:p-8">
                <div className="w-12 h-12 lg:w-16 lg:h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-3 lg:mb-4">
                  <span className="text-lg lg:text-2xl font-bold text-primary-foreground">2</span>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-forest-deep mb-2 lg:mb-3">
                  Custom Proposal
                </h3>
                <p className="text-muted-foreground text-sm sm:text-base">
                  We develop a tailored partnership proposal that maximizes impact
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-soft transition-all duration-300">
              <CardContent className="p-4 sm:p-6 lg:p-8">
                <div className="w-12 h-12 lg:w-16 lg:h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-3 lg:mb-4">
                  <span className="text-lg lg:text-2xl font-bold text-primary-foreground">3</span>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-forest-deep mb-2 lg:mb-3">
                  Collaborative Creation
                </h3>
                <p className="text-muted-foreground text-sm sm:text-base">
                  Together we bring stories to life through co-creation and expertise sharing
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-soft transition-all duration-300">
              <CardContent className="p-4 sm:p-6 lg:p-8">
                <div className="w-12 h-12 lg:w-16 lg:h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-3 lg:mb-4">
                  <span className="text-lg lg:text-2xl font-bold text-primary-foreground">4</span>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-forest-deep mb-2 lg:mb-3">
                  Shared Impact
                </h3>
                <p className="text-muted-foreground text-sm sm:text-base">
                  We measure and celebrate the cultural, educational, and conservation outcomes
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-8 sm:py-12 lg:py-16 bg-forest-deep text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <Sparkles className="h-12 sm:h-14 lg:h-16 w-12 sm:w-14 lg:w-16 text-gold-warm mx-auto mb-4 lg:mb-6" />
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 lg:mb-6">
              Ready to Create Magic Together?
            </h2>
            <p className="text-lg sm:text-xl text-ivory/90 mb-8 lg:mb-12">
              Every partnership is unique, just like every story we tell. Let's explore 
              how we can work together to create cultural experiences that inspire action, 
              preserve heritage, and protect our natural world.
            </p>
            
            <div className="flex flex-col gap-3 sm:flex-row sm:gap-4 lg:gap-6 justify-center">
              <Button variant="warm" size="xl" asChild className="w-full sm:w-auto">
                <Link to="/contact">Start Your Partnership Journey</Link>
              </Button>
              <Button variant="magical" size="xl" asChild className="w-full sm:w-auto">
                <Link to="/contact">Schedule a Discovery Call</Link>
              </Button>
              <Button variant="outline" size="xl" className="border-ivory text-ivory hover:bg-ivory hover:text-forest-deep w-full sm:w-auto" asChild>
                <Link to="/get-involved">Join Our Community First</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Partnerships;