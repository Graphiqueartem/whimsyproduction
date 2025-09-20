import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Menu, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdowns, setOpenDropdowns] = useState<string[]>([]);
  const location = useLocation();

  const toggleDropdown = (title: string) => {
    setOpenDropdowns(prev => 
      prev.includes(title) 
        ? prev.filter(item => item !== title)
        : [...prev, title]
    );
  };

  const navigationItems = [
    { title: "Home", href: "/" },
    {
      title: "About Us", 
      href: "/about",
      items: [
        { title: "Who We Are", href: "/about" },
        { title: "Our Story", href: "/about#story" },
        { title: "Our Team", href: "/about#team" },
      ],
    },
    {
      title: "Our Vision",
      href: "/vision", 
      items: [
        { title: "Mission & Values", href: "/vision" },
        { title: "Why Storytelling Matters", href: "/vision#storytelling" },
        { title: "The Future We Are Building", href: "/vision#future" },
      ],
    },
    {
      title: "Our Impact",
      href: "/impact",
      items: [
        { title: "Conservation Impact", href: "/impact#conservation" },
        { title: "Cultural Impact", href: "/impact#cultural" },
        { title: "Education & Social Impact", href: "/impact#education" },
        { title: "Economic Impact", href: "/impact#economic" },
      ],
    },
    {
      title: "Our Productions",
      href: "/productions",
      items: [
        { title: "Current Development Slate", href: "/productions" },
        { title: "Our Approach", href: "/productions#approach" },
      ],
    },
    {
      title: "Partnerships",
      href: "/partnerships",
      items: [
        { title: "Governments", href: "/partnerships#governments" },
        { title: "NGOs & Charities", href: "/partnerships#ngos" },
        { title: "Cultural Organisations", href: "/partnerships#cultural" },
        { title: "Education Networks", href: "/partnerships#education" },
        { title: "Media & Industry", href: "/partnerships#media" },
        { title: "Investors", href: "/partnerships#investors" },
      ],
    },
    { title: "Get Involved", href: "/get-involved" },
    { title: "News & Insights", href: "/news" },
    { title: "Contact", href: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 w-full bg-background/98 backdrop-blur supports-[backdrop-filter]:bg-background/95 border-b border-border shadow-soft">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-4 max-w-[1400px] mx-auto">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 flex-shrink-0">
            <div className="text-2xl sm:text-3xl font-bold text-forest-deep hover:text-primary transition-colors">
              Whimsy<span className="text-gold-warm">Films</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden lg:flex flex-1 justify-center">
            <NavigationMenuList className="flex items-center space-x-1">
              {navigationItems.map((item) => (
                <NavigationMenuItem key={item.title}>
                  {item.items ? (
                    <>
                      <NavigationMenuTrigger 
                        className="bg-transparent hover:bg-accent hover:text-accent-foreground data-[active]:bg-accent/50 data-[state=open]:bg-accent/50 px-3 py-2"
                        asChild
                      >
                        <Link to={item.href || `/${item.title.toLowerCase().replace(/\s+/g, '-')}`}>
                          {item.title}
                        </Link>
                      </NavigationMenuTrigger>
                      <NavigationMenuContent className="left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto">
                        <div className="grid gap-2 p-6 w-80 bg-background border border-border shadow-magical rounded-xl">
                          {item.items.map((subItem) => (
                            <NavigationMenuLink key={subItem.href} asChild>
                              <Link
                                to={subItem.href}
                                className="block select-none rounded-lg p-3 text-sm font-medium leading-snug no-underline outline-none transition-all duration-200 hover:bg-primary/10 hover:text-primary focus:bg-primary/10 focus:text-primary text-foreground"
                              >
                                <div className="font-semibold">{subItem.title}</div>
                              </Link>
                            </NavigationMenuLink>
                          ))}
                        </div>
                      </NavigationMenuContent>
                    </>
                  ) : (
                    <NavigationMenuLink asChild>
                      <Link 
                        to={item.href}
                        className={cn(
                          "group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50",
                          location.pathname === item.href && "bg-accent/50"
                        )}
                      >
                        {item.title}
                      </Link>
                    </NavigationMenuLink>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          {/* CTA Button */}
          <div className="hidden lg:flex flex-shrink-0 ml-4">
            <Button variant="hero" size="sm" className="text-sm px-5 py-2 whitespace-nowrap font-semibold min-w-[140px]" asChild>
              <Link to="/partnerships">Partner With Us</Link>
            </Button>
          </div>

          {/* Mobile menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden ml-2">
              <Button variant="ghost" size="icon" className="flex-shrink-0">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80 overflow-y-auto bg-background border-l border-border">
              <div className="flex flex-col space-y-1 mt-8 px-4">
                {navigationItems.map((item) => (
                  <div key={item.title}>
                    {item.items ? (
                      <Collapsible 
                        open={openDropdowns.includes(item.title)}
                        onOpenChange={() => toggleDropdown(item.title)}
                      >
                        <CollapsibleTrigger asChild>
                          <Link 
                            to={item.href}
                            className="flex items-center justify-between w-full font-semibold text-forest-deep py-3 px-2 hover:text-primary hover:bg-accent/50 rounded-md transition-colors"
                          >
                            {item.title}
                            <ChevronDown className={cn(
                              "h-4 w-4 transition-transform duration-200",
                              openDropdowns.includes(item.title) && "rotate-180"
                            )} />
                          </Link>
                        </CollapsibleTrigger>
                        <CollapsibleContent className="pl-6 space-y-1 pb-2">
                          {item.items.map((subItem) => (
                            <Link
                              key={subItem.href}
                              to={subItem.href}
                              className="block text-sm text-muted-foreground hover:text-foreground hover:bg-accent/30 rounded-md py-2 px-3 transition-colors"
                              onClick={() => setIsOpen(false)}
                            >
                              {subItem.title}
                            </Link>
                          ))}
                        </CollapsibleContent>
                      </Collapsible>
                    ) : (
                      <Link
                        to={item.href}
                        className="block font-medium text-foreground hover:text-primary hover:bg-accent/50 rounded-md py-3 px-2 transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.title}
                      </Link>
                    )}
                  </div>
                ))}
                <div className="pt-6 mt-4 border-t border-border">
                  <Button variant="hero" size="default" className="w-full" asChild>
                    <Link to="/partnerships" onClick={() => setIsOpen(false)}>
                      Partner With Us
                    </Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;