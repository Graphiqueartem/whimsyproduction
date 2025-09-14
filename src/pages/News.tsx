import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  Calendar, 
  User, 
  ArrowRight,
  BookOpen,
  Globe,
  Camera,
  Heart,
  Lightbulb,
  Target,
  Mail,
  Bell
} from "lucide-react";

const News = () => {
  const featuredArticles = [
    {
      category: "Impact Story",
      title: "How Folklore Films Are Changing Conservation Education",
      excerpt: "Discover how traditional stories are becoming powerful tools for wildlife protection and environmental awareness in classrooms worldwide.",
      author: "Dr. Sarah Chen",
      date: "March 15, 2024",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=250&fit=crop",
      tags: ["Conservation", "Education", "Research"]
    },
    {
      category: "Partnership Spotlight",
      title: "UNESCO Collaboration Brings African Folktales to Global Screens",
      excerpt: "Our groundbreaking partnership with UNESCO preserves endangered oral traditions while creating educational content for international audiences.",
      author: "Marcus Johnson",
      date: "March 10, 2024", 
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=250&fit=crop",
      tags: ["Partnership", "Cultural Heritage", "Africa"]
    },
    {
      category: "Behind the Scenes",
      title: "The Art of Wildlife Puppetry: Creating Believable Animal Characters",
      excerpt: "Meet our master puppeteers who bring endangered species to life through traditional craftsmanship and modern storytelling techniques.",
      author: "Elena Rodriguez",
      date: "March 5, 2024",
      readTime: "10 min read", 
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=250&fit=crop",
      tags: ["Puppetry", "Wildlife", "Craftsmanship"]
    }
  ];

  const thoughtLeadership = [
    {
      title: "The Future of Cultural Diplomacy Through Storytelling",
      excerpt: "How governments are using folklore films to build bridges across cultures and promote understanding.",
      author: "Ambassador Maria Santos",
      date: "March 12, 2024",
      category: "Thought Leadership"
    },
    {
      title: "AI and Traditional Arts: Enhancing Without Replacing",
      excerpt: "Exploring how artificial intelligence can support traditional puppetry and filmmaking while preserving artisanal heritage.",
      author: "Dr. James Liu",
      date: "March 8, 2024",
      category: "Technology"
    },
    {
      title: "Building Empathy Through Character-Driven Conservation Stories",
      excerpt: "Research shows that children who connect emotionally with animal characters become lifelong conservation advocates.",
      author: "Prof. Anna Kowalski",
      date: "March 3, 2024",
      category: "Research"
    }
  ];

  const updates = [
    {
      date: "March 18, 2024",
      title: "New Partnership with Canadian Indigenous Communities",
      description: "Exciting collaboration to bring First Nations stories to international audiences while honoring traditional protocols."
    },
    {
      date: "March 14, 2024",
      title: "Whimsy Films Selected for Cannes Documentary Corner",
      description: "Our upcoming wildlife folklore documentary has been selected for screening at this year's Cannes Film Festival."
    },
    {
      date: "March 11, 2024",
      title: "Educational Pilot Program Launches in 50 UK Schools",
      description: "Our folklore-based conservation curriculum is now being tested in primary schools across England and Wales."
    },
    {
      date: "March 7, 2024",
      title: "Master Puppeteer Workshop Series Announced",
      description: "Join renowned artists from around the world in our virtual workshop series on traditional puppetry techniques."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            News & Insights
          </h1>
          <p className="text-xl text-ivory/90 max-w-3xl mx-auto mb-8">
            Stay updated on our latest productions, partnerships, and impact stories. 
            Discover thought leadership on culture, conservation, and the power of storytelling.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="warm" size="xl" asChild>
              <Link to="#featured">Read Latest Stories</Link>
            </Button>
            <Button variant="magical" size="xl" asChild>
              <Link to="#newsletter">Subscribe to Updates</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section id="featured" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-forest-deep mb-6">
              Featured Stories
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Deep dives into our impact, behind-the-scenes insights, and the latest 
              developments in culture-based conservation storytelling.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {featuredArticles.map((article, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-magical transition-all duration-300 transform hover:scale-105">
                <div className="aspect-video bg-muted">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="secondary">{article.category}</Badge>
                    <span className="text-sm text-muted-foreground">{article.readTime}</span>
                  </div>
                  <CardTitle className="text-xl text-forest-deep leading-tight">
                    {article.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    {article.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4" />
                      <span>{article.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>{article.date}</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {article.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <Button variant="outline" className="w-full group" asChild>
                    <Link to={`/news/${article.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}>
                      Read Full Story
                      <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Thought Leadership & Research */}
      <section className="py-20 bg-forest-light/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-forest-deep mb-6">
              Thought Leadership
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Insights from experts, researchers, and leaders in cultural preservation, 
              conservation, and innovative storytelling.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {thoughtLeadership.map((article, index) => (
              <Card key={index} className="hover:shadow-soft transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="secondary">{article.category}</Badge>
                    {article.category === "Thought Leadership" && <Lightbulb className="h-4 w-4 text-gold-warm" />}
                    {article.category === "Technology" && <Camera className="h-4 w-4 text-primary" />}
                    {article.category === "Research" && <Target className="h-4 w-4 text-forest-deep" />}
                  </div>
                  <CardTitle className="text-lg text-forest-deep leading-tight">
                    {article.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-4">
                    {article.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <span className="font-medium">{article.author}</span>
                    <span>{article.date}</span>
                  </div>
                  
                  <Button variant="outline" size="sm" className="w-full" asChild>
                    <Link to={`/insights/${article.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}>
                      Read Article
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Updates */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Updates Feed */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-forest-deep mb-8">
                Latest Updates
              </h2>
              
              <div className="space-y-6">
                {updates.map((update, index) => (
                  <Card key={index} className="hover:shadow-soft transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0">
                          <div className="w-3 h-3 bg-primary rounded-full mt-2"></div>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <Calendar className="h-4 w-4 text-muted-foreground" />
                            <span className="text-sm text-muted-foreground">{update.date}</span>
                          </div>
                          <h3 className="font-semibold text-forest-deep mb-2">
                            {update.title}
                          </h3>
                          <p className="text-muted-foreground text-sm">
                            {update.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Newsletter Sidebar */}
            <div className="space-y-8">
              <Card className="bg-gradient-warm border-0">
                <CardHeader>
                  <div className="text-center">
                    <Mail className="h-12 w-12 text-forest-deep mx-auto mb-4" />
                    <CardTitle className="text-forest-deep">
                      Stay In The Loop
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-forest-deep/80 text-sm mb-4 text-center">
                    Get our weekly newsletter with the latest updates, stories, 
                    and opportunities delivered straight to your inbox.
                  </p>
                  
                  <div className="space-y-3">
                    <Input 
                      placeholder="Your email address" 
                      className="bg-white/80 border-forest-light"
                    />
                    <Button variant="default" className="w-full">
                      Subscribe Now
                    </Button>
                  </div>
                  
                  <p className="text-xs text-forest-deep/60 mt-3 text-center">
                    We respect your privacy. Unsubscribe at any time.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-forest-light/30">
                <CardHeader>
                  <CardTitle className="text-forest-deep flex items-center gap-2">
                    <BookOpen className="h-5 w-5" />
                    Categories
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Button variant="ghost" className="w-full justify-start text-sm" asChild>
                    <Link to="/news?category=updates">Updates & Announcements</Link>
                  </Button>
                  <Button variant="ghost" className="w-full justify-start text-sm" asChild>
                    <Link to="/news?category=impact">Impact Stories</Link>
                  </Button>
                  <Button variant="ghost" className="w-full justify-start text-sm" asChild>
                    <Link to="/news?category=partnerships">Partnership Spotlights</Link>
                  </Button>
                  <Button variant="ghost" className="w-full justify-start text-sm" asChild>
                    <Link to="/news?category=behind-scenes">Behind the Scenes</Link>
                  </Button>
                  <Button variant="ghost" className="w-full justify-start text-sm" asChild>
                    <Link to="/news?category=research">Research & Insights</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section id="newsletter" className="py-20 bg-forest-deep text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <Bell className="h-16 w-16 text-gold-warm mx-auto mb-6" />
            <h2 className="text-4xl font-bold mb-6">
              Never Miss a Story
            </h2>
            <p className="text-xl text-ivory/90 mb-8">
              Join our community of cultural enthusiasts, conservationists, and storytelling advocates. 
              Get exclusive access to behind-the-scenes content, partnership opportunities, and impact updates.
            </p>
            
            <Card className="bg-ivory/10 border-ivory/20 max-w-lg mx-auto">
              <CardContent className="p-8">
                <div className="space-y-4">
                  <Input 
                    placeholder="Enter your email address" 
                    className="bg-ivory/10 border-ivory/20 text-ivory placeholder:text-ivory/60"
                  />
                  <Button variant="warm" size="lg" className="w-full">
                    Subscribe to Newsletter
                  </Button>
                </div>
                
                <div className="flex items-center justify-center gap-4 mt-6 text-ivory/60 text-sm">
                  <span>✓ Weekly updates</span>
                  <span>✓ Exclusive content</span>
                  <span>✓ No spam</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-warm">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-forest-deep mb-6">
              Be Part of the Stories We Tell
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Our news and insights reflect the incredible community of partners, 
              supporters, and changemakers who make our mission possible.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="default" size="lg" asChild>
                <Link to="/partnerships">Become a Partner</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/get-involved">Join Our Community</Link>
              </Button>
              <Button variant="secondary" size="lg" asChild>
                <Link to="/contact">Share Your Story</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default News;