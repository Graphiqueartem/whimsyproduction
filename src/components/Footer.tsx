import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { title: "About Us", href: "/about" },
    { title: "Our Vision", href: "/vision" },
    { title: "Our Impact", href: "/impact" },
    { title: "Productions", href: "/productions" },
    { title: "Partnerships", href: "/partnerships" },
    { title: "Get Involved", href: "/get-involved" },
    { title: "Contact", href: "/contact" },
  ];

  const legalLinks = [
    { title: "Privacy Policy", href: "/privacy" },
    { title: "Terms of Use", href: "/terms" },
    { title: "Careers", href: "/careers" },
  ];

  return (
    <footer className="bg-forest-deep text-ivory">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand & Mission */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="text-2xl font-bold">
                Whimsy<span className="text-gold-warm">Films</span>
              </div>
            </Link>
            <p className="text-ivory/80 mb-6 max-w-md">
              Where storytelling inspires action. We create magical films rooted in folklore 
              and wildlife to inspire children, empower communities, and protect our natural world.
            </p>
            
            {/* Newsletter Signup */}
            <div className="space-y-3">
              <h4 className="font-semibold text-gold-warm">Join Our Newsletter</h4>
              <div className="flex gap-2 max-w-md">
                <Input 
                  placeholder="Your email address" 
                  className="bg-ivory/10 border-ivory/20 text-ivory placeholder:text-ivory/60"
                />
                <Button variant="warm" size="default">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-gold-warm mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link 
                    to={link.href}
                    className="text-ivory/80 hover:text-gold-warm transition-colors duration-200"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="font-semibold text-gold-warm mb-4">Connect With Us</h4>
            
            {/* Contact Info */}
            <div className="space-y-2 mb-6">
              <p className="text-ivory/80">
                <span className="font-medium">Email:</span><br />
                hello@whimsyfilms.com
              </p>
              <p className="text-ivory/80">
                <span className="font-medium">Location:</span><br />
                United Kingdom
              </p>
            </div>

            {/* Social Media */}
            <div className="space-y-3">
              <h5 className="font-medium text-ivory">Follow Our Journey</h5>
              <div className="flex gap-3">
                <Button variant="ghost" size="icon" className="text-ivory hover:text-gold-warm hover:bg-ivory/10">
                  <Facebook className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="text-ivory hover:text-gold-warm hover:bg-ivory/10">
                  <Twitter className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="text-ivory hover:text-gold-warm hover:bg-ivory/10">
                  <Instagram className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="text-ivory hover:text-gold-warm hover:bg-ivory/10">
                  <Linkedin className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="text-ivory hover:text-gold-warm hover:bg-ivory/10">
                  <Youtube className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-ivory/20" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-ivory/60 text-sm">
            © {new Date().getFullYear()} Whimsy Films. All rights reserved.
          </div>
          
          <div className="flex gap-6 text-sm">
            {legalLinks.map((link) => (
              <Link 
                key={link.href}
                to={link.href}
                className="text-ivory/60 hover:text-ivory transition-colors duration-200"
              >
                {link.title}
              </Link>
            ))}
          </div>
        </div>

        {/* Partner Logos Placeholder */}
        <div className="mt-8 pt-8 border-t border-ivory/20">
          <div className="text-center text-ivory/60 text-sm">
            Proud to collaborate with governments, NGOs, cultural organizations, and educational institutions worldwide
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;