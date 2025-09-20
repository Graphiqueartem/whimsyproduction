import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Mail, Bell, Clock } from "lucide-react";

const ComingSoon = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-forest-light/10 to-background">
      {/* Hero Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <Clock className="h-16 w-16 text-gold-warm mx-auto mb-6" />
              <h1 className="text-4xl md:text-6xl font-bold text-forest-deep mb-6">
                Coming Soon
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                We're working on something magical. This page will be available soon 
                as part of our ongoing mission to bring folklore and conservation together.
              </p>
            </div>

            <Card className="bg-gradient-warm border-0 shadow-soft max-w-2xl mx-auto">
              <CardContent className="p-8">
                <h2 className="text-2xl font-semibold text-forest-deep mb-4">
                  Stay Connected
                </h2>
                <p className="text-muted-foreground mb-6">
                  Join our community to be the first to know when new content and features become available.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="default" size="lg" asChild>
                    <Link to="/get-involved">
                      <Bell className="h-4 w-4 mr-2" />
                      Get Notified
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <Link to="/contact">
                      <Mail className="h-4 w-4 mr-2" />
                      Contact Us
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <div className="mt-12">
              <Button variant="ghost" size="lg" asChild>
                <Link to="/">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Return to Homepage
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Explore Section */}
      <section className="py-16 bg-forest-light/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-forest-deep mb-8">
              Explore What's Available Now
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="hover:shadow-soft transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <h3 className="text-lg font-semibold text-forest-deep mb-3">Our Mission</h3>
                  <p className="text-muted-foreground mb-4">
                    Discover how we're changing the world through storytelling.
                  </p>
                  <Button variant="outline" size="sm" asChild>
                    <Link to="/vision">Learn More</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-soft transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <h3 className="text-lg font-semibold text-forest-deep mb-3">Partner With Us</h3>
                  <p className="text-muted-foreground mb-4">
                    Join our global network of conservation storytellers.
                  </p>
                  <Button variant="outline" size="sm" asChild>
                    <Link to="/partnerships">Explore Partnerships</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-soft transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <h3 className="text-lg font-semibold text-forest-deep mb-3">Get Involved</h3>
                  <p className="text-muted-foreground mb-4">
                    Be part of the movement protecting wildlife through stories.
                  </p>
                  <Button variant="outline" size="sm" asChild>
                    <Link to="/get-involved">Join Us</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ComingSoon;