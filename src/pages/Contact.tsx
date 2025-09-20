import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  Building,
  Heart,
  GraduationCap,
  Camera,
  Users,
  MessageCircle,
  Send,
  Globe
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

// Cultural storytelling images
import culturalStory5 from "@/assets/cultural-storytelling-5.jpg";
import culturalStory6 from "@/assets/cultural-storytelling-6.jpg";
import culturalStory7 from "@/assets/cultural-storytelling-7.jpg";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    type: "",
    subject: "",
    message: ""
  });
  
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. We'll get back to you within 24 hours.",
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      organization: "",
      type: "",
      subject: "",
      message: ""
    });
  };

  const contactMethods = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email Us",
      description: "Get in touch via email",
      contact: "hello@whimsyfilms.com",
      action: "Send Email"
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Schedule a Call",
      description: "Book a discovery conversation",
      contact: "Available by appointment",
      action: "Book Meeting"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Our Location", 
      description: "Based in the United Kingdom",
      contact: "London, UK",
      action: "View Map"
    }
  ];

  const partnershipTypes = [
    {
      icon: <Building className="h-8 w-8" />,
      title: "Government & Cultural Ministries",
      description: "Cultural diplomacy and heritage showcasing"
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "NGOs & Charities",
      description: "Social impact and conservation partnerships"  
    },
    {
      icon: <GraduationCap className="h-8 w-8" />,
      title: "Education & Academia",
      description: "Curriculum development and research collaboration"
    },
    {
      icon: <Camera className="h-8 w-8" />,
      title: "Media & Creative Industries", 
      description: "Co-production and distribution partnerships"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Individual Supporters",
      description: "Community membership and volunteering"
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-8 bg-gradient-hero text-white">
        <div className="container mx-auto px-2 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-3">
            Let's Create Magic Together
          </h1>
          <p className="text-base text-ivory/90 max-w-2xl mx-auto mb-4">
            Every great partnership begins with a conversation. Whether you represent 
            a government, NGO, cultural organization, or are simply passionate about 
            our mission — we'd love to hear from you.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-2 justify-center">
            <Button variant="warm" size="default" asChild>
              <a href="#contact-form">Send Us a Message</a>
            </Button>
            <Button variant="magical" size="default" asChild>
              <a href="#partnership-info">Explore Partnerships</a>
            </Button>
          </div>
          
          {/* Cultural Images Row */}
          <div className="grid grid-cols-3 gap-2 mt-4 max-w-lg mx-auto">
            <img src={culturalStory5} alt="Celtic storytelling tradition" className="w-full h-16 object-cover rounded-lg" />
            <img src={culturalStory6} alt="Chinese opera performance" className="w-full h-16 object-cover rounded-lg" />
            <img src={culturalStory7} alt="Indian classical dance" className="w-full h-16 object-cover rounded-lg" />
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-2">
          {/* Wildlife Videos Section */}
          <div className="max-w-4xl mx-auto mb-8">
            <h3 className="text-xl font-semibold text-forest-deep mb-4 text-center">Connect With Our Mission</h3>
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
                <p className="text-sm text-muted-foreground">Wildlife Conservation</p>
              </div>
              <div className="text-center">
                <div className="bg-gradient-hero rounded-lg flex items-center justify-center h-32 mb-2">
                  <p className="text-white text-sm text-center px-2">Global Stories<br/><span className="text-xs opacity-75">(Coming Soon)</span></p>
                </div>
                <p className="text-sm text-muted-foreground">Cultural Heritage</p>
              </div>
              <div className="text-center">
                <div className="bg-gradient-hero rounded-lg flex items-center justify-center h-32 mb-2">
                  <p className="text-white text-sm text-center px-2">Partnership Magic<br/><span className="text-xs opacity-75">(Coming Soon)</span></p>
                </div>
                <p className="text-sm text-muted-foreground">Collaboration</p>
              </div>
            </div>
          </div>
          
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-forest-deep mb-4">
              Get In Touch
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose the method that works best for you. We respond to all inquiries 
              within 24 hours and are excited to learn about your vision.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {contactMethods.map((method, index) => (
              <Card key={index} className="text-center hover:shadow-magical transition-all duration-300 transform hover:scale-105">
                <CardContent className="p-6">
                  <div className="text-primary mb-3 flex justify-center">
                    {method.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-forest-deep mb-2">
                    {method.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    {method.description}
                  </p>
                  <p className="font-medium text-forest-deep mb-3">
                    {method.contact}
                  </p>
                  <Button variant="outline" size="sm">
                    {method.action}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Office Hours */}
          <Card className="bg-gradient-warm border-0 max-w-xl mx-auto">
            <CardContent className="p-6 text-center">
              <Clock className="h-10 w-10 text-forest-deep mx-auto mb-3" />
              <h3 className="text-xl font-semibold text-forest-deep mb-3">
                Response Times & Availability
              </h3>
              <div className="grid md:grid-cols-2 gap-4 text-left">
                <div>
                  <h4 className="font-semibold text-forest-deep mb-1">Email Response</h4>
                  <p className="text-forest-deep/80 text-xs">Within 24 hours on business days</p>
                </div>
                <div>
                  <h4 className="font-semibold text-forest-deep mb-1">Meeting Scheduling</h4>
                  <p className="text-forest-deep/80 text-xs">Available Monday-Friday, UK time</p>
                </div>
                <div>
                  <h4 className="font-semibold text-forest-deep mb-1">Urgent Inquiries</h4>
                  <p className="text-forest-deep/80 text-xs">Mark as urgent in subject line</p>
                </div>
                <div>
                  <h4 className="font-semibold text-forest-deep mb-1">Partnership Discussions</h4>
                  <p className="text-forest-deep/80 text-xs">Comprehensive response within 48 hours</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact-form" className="py-12 bg-forest-light/20">
        <div className="container mx-auto px-2">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-forest-deep mb-4">
                Send Us a Message
              </h2>
              <p className="text-lg text-muted-foreground">
                Tell us about your organization, your goals, and how you'd like to collaborate.
              </p>
            </div>

            <Card className="shadow-soft">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name" className="text-forest-deep font-medium">
                        Full Name *
                      </Label>
                      <Input 
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        placeholder="Your name"
                        required
                        className="mt-2"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="email" className="text-forest-deep font-medium">
                        Email Address *
                      </Label>
                      <Input 
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        placeholder="your.email@example.com"
                        required
                        className="mt-2"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="organization" className="text-forest-deep font-medium">
                        Organization/Company
                      </Label>
                      <Input 
                        id="organization"
                        value={formData.organization}
                        onChange={(e) => setFormData({...formData, organization: e.target.value})}
                        placeholder="Organization name (optional)"
                        className="mt-2"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="type" className="text-forest-deep font-medium">
                        Inquiry Type *
                      </Label>
                      <Select onValueChange={(value) => setFormData({...formData, type: value})}>
                        <SelectTrigger className="mt-2">
                          <SelectValue placeholder="Select inquiry type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="partnership">Partnership Opportunity</SelectItem>
                          <SelectItem value="government">Government Collaboration</SelectItem>
                          <SelectItem value="ngo">NGO/Charity Partnership</SelectItem>
                          <SelectItem value="education">Education/Academic Inquiry</SelectItem>
                          <SelectItem value="media">Media/Press Inquiry</SelectItem>
                          <SelectItem value="investment">Investment/Sponsorship</SelectItem>
                          <SelectItem value="volunteer">Volunteer/Individual Support</SelectItem>
                          <SelectItem value="general">General Inquiry</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="subject" className="text-forest-deep font-medium">
                      Subject *
                    </Label>
                    <Input 
                      id="subject"
                      value={formData.subject}
                      onChange={(e) => setFormData({...formData, subject: e.target.value})}
                      placeholder="Brief description of your inquiry"
                      required
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-forest-deep font-medium">
                      Message *
                    </Label>
                    <Textarea 
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      placeholder="Tell us about your organization, your goals, and how you'd like to collaborate with Whimsy Films. The more details you provide, the better we can assist you."
                      required
                      rows={6}
                      className="mt-2"
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button type="submit" variant="default" size="lg" className="flex-1">
                      <Send className="h-4 w-4 mr-2" />
                      Send Message
                    </Button>
                    <Button type="button" variant="outline" size="lg" className="flex-1">
                      <MessageCircle className="h-4 w-4 mr-2" />
                      Schedule Call Instead
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Partnership Information */}
      <section id="partnership-info" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-forest-deep mb-6">
              Partnership Opportunities
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We work with diverse organizations worldwide. Find the partnership 
              type that best matches your goals and interests.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {partnershipTypes.slice(0, 5).map((type, index) => (
              <Card key={index} className="text-center hover:shadow-soft transition-all duration-300">
                <CardContent className="p-8">
                  <div className="text-primary mb-4 flex justify-center">
                    {type.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-forest-deep mb-3">
                    {type.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {type.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Card className="bg-gradient-hero border-0 max-w-2xl mx-auto">
              <CardContent className="p-8 text-white">
                <Globe className="h-12 w-12 text-gold-warm mx-auto mb-4" />
                <h3 className="text-2xl font-semibold mb-4">
                  Don't See Your Organization Type?
                </h3>
                <p className="text-ivory/90 mb-6">
                  We're always open to innovative partnerships. If you share our mission 
                  of cultural preservation and environmental protection, let's explore 
                  how we can work together.
                </p>
                <Button variant="warm" size="lg" asChild>
                  <a href="#contact-form">Discuss Custom Partnership</a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-forest-light/20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-forest-deep mb-12 text-center">
              Frequently Asked Questions
            </h2>
            
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg text-forest-deep">
                    How long does it take to develop a partnership?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Partnership timelines vary depending on scope and complexity. Initial conversations 
                    typically lead to formal proposals within 2-4 weeks. Full partnership development 
                    can range from 2-6 months depending on the project scale.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg text-forest-deep">
                    What types of organizations do you work with?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We collaborate with governments, NGOs, cultural institutions, educational 
                    organizations, media companies, and individual supporters. Our partnerships 
                    are designed to align with our mission of cultural preservation and conservation.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg text-forest-deep">
                    Do you offer consulting services?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Yes, we provide consulting on cultural storytelling, conservation messaging, 
                    and folklore adaptation. We also offer workshops on puppetry, wildlife 
                    cinematography, and cross-cultural collaboration.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg text-forest-deep">
                    How do you ensure cultural authenticity?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We work directly with cultural consultants, community leaders, and traditional 
                    storytellers from source communities. Every adaptation involves extensive 
                    collaboration to ensure respectful and accurate representation.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-forest-deep text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Begin Our Conversation?
            </h2>
            <p className="text-xl text-ivory/90 mb-12">
              Every partnership starts with a single message. Share your vision with us, 
              and let's explore how storytelling can amplify your mission and create lasting impact.
            </p>
            
            <div className="flex flex-col md:flex-row gap-6 justify-center">
              <Button variant="warm" size="xl" asChild>
                <a href="#contact-form">Send Your Message</a>
              </Button>
              <Button variant="magical" size="xl" asChild>
                <a href="mailto:hello@whimsyfilms.com">Email Us Directly</a>
              </Button>
              <Button variant="outline" size="xl" className="border-ivory text-ivory hover:bg-ivory hover:text-forest-deep" asChild>
                <a href="/partnerships">Explore Partnership Types</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;