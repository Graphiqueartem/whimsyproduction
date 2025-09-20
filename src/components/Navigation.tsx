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
      items: [
        { title: "Who We Are", href: "/about" },
        { title: "Our Story", href: "/about#story" },
        { title: "Our Team", href: "/about#team" },
      ],
    },
    {
      title: "Our Vision",
      items: [
        { title: "Mission & Values", href: "/vision" },
        { title: "Why Storytelling Matters", href: "/vision#storytelling" },
        { title: "The Future We Are Building", href: "/vision#future" },
      ],
    },
    {
      title: "Our Impact",
      items: [
        { title: "Conservation Impact", href: "/impact#conservation" },
        { title: "Cultural Impact", href: "/impact#cultural" },
        { title: "Education & Social Impact", href: "/impact#education" },
        { title: "Economic Impact", href: "/impact#economic" },
      ],
    },
    {
      title: "Our Productions",
      items: [
        { title: "Current Development Slate", href: "/productions" },
        { title: "Our Approach", href: "/productions#approach" },
      ],
    },
    {
      title: "Partnerships",
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
    <nav className="fixed top-0 left-0 right-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b border-border shadow-soft">
      <div className="container mx-auto px-2 sm:px-4 lg:px-6">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="text-2xl font-bold text-forest-deep">
              Whimsy<span className="text-gold-warm">Films</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList className="flex items-center space-x-1">
              {navigationItems.map((item) => (
                <NavigationMenuItem key={item.title}>
                  {item.items ? (
                    <>
                      <NavigationMenuTrigger className="bg-transparent hover:bg-accent hover:text-accent-foreground data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                        {item.title}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <div className="grid gap-2 p-4 w-64">
                          {item.items.map((subItem) => (
                            <NavigationMenuLink key={subItem.href} asChild>
                              <Link
                                to={subItem.href}
                                className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                              >
                                <div className="text-sm font-medium leading-none">
                                  {subItem.title}
                                </div>
                              </Link>
                            </NavigationMenuLink>
                          ))}
                        </div>
                      </NavigationMenuContent>
                    </>
                  ) : (
                    <Link to={item.href}>
                      <NavigationMenuLink
                        className={cn(
                          "group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50",
                          location.pathname === item.href && "bg-accent/50"
                        )}
                      >
                        {item.title}
                      </NavigationMenuLink>
                    </Link>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          {/* CTA Button */}
          <div className="hidden md:flex">
            <Button variant="hero" size="default" asChild>
              <Link to="/partnerships">Partner With Us</Link>
            </Button>
          </div>

          {/* Mobile menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80 overflow-y-auto">
              <div className="flex flex-col space-y-2 mt-8 px-2">
                {navigationItems.map((item) => (
                  <div key={item.title}>
                    {item.items ? (
                      <Collapsible 
                        open={openDropdowns.includes(item.title)}
                        onOpenChange={() => toggleDropdown(item.title)}
                      >
                        <CollapsibleTrigger className="flex items-center justify-between w-full font-semibold text-forest-deep py-2 hover:text-primary transition-colors">
                          {item.title}
                          <ChevronDown className={cn(
                            "h-4 w-4 transition-transform duration-200",
                            openDropdowns.includes(item.title) && "rotate-180"
                          )} />
                        </CollapsibleTrigger>
                        <CollapsibleContent className="pl-4 space-y-1 pb-2">
                          {item.items.map((subItem) => (
                            <Link
                              key={subItem.href}
                              to={subItem.href}
                              className="block text-sm text-muted-foreground hover:text-foreground transition-colors py-1"
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
                        className="block font-medium text-foreground hover:text-primary transition-colors py-2"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.title}
                      </Link>
                    )}
                  </div>
                ))}
                <div className="pt-4 border-t border-border">
                  <Button variant="hero" size="lg" className="w-full" asChild>
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