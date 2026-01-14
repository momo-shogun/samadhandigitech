import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Layout } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useHero } from "@/contexts/HeroContext";

const navLinks = [
  { name: "Our Work", href: "/our-work", badge: "New" },
  { name: "About Us", href: "/#about" },
  { name: "Our Services", href: "/services" },
  { name: "Blog", href: "/blog" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { heroVariant, setHeroVariant } = useHero();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-background/95 backdrop-blur-md shadow-sm border-b border-border"
            : "bg-transparent"
        }`}
      >
        <nav className="container mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <img 
                src="/favicon.png" 
                alt="Samadhan Digitech Logo" 
                className="h-12 w-12 md:h-16 md:w-16 object-contain"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="relative text-sm font-medium text-foreground hover:text-primary transition-colors flex items-center gap-1"
                >
                  {link.name}
                  {link.badge && (
                    <span className="px-1.5 py-0.5 text-[10px] font-bold bg-pink text-white rounded-full">
                      {link.badge}
                    </span>
                  )}
                </Link>
              ))}
              
              {/* Hero Section Switcher */}
              {location.pathname === "/" && (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <button className="text-sm font-medium text-foreground hover:text-primary transition-colors flex items-center gap-1">
                      <Layout className="h-4 w-4" />
                      Hero
                      <ChevronDown className="h-3 w-3" />
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem
                      onClick={() => setHeroVariant("default")}
                      className={heroVariant === "default" ? "bg-muted" : ""}
                    >
                      Default Hero
                      {heroVariant === "default" && <span className="ml-2 text-primary">✓</span>}
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onClick={() => setHeroVariant("demo2")}
                      className={heroVariant === "demo2" ? "bg-muted" : ""}
                    >
                      Demo 2 Hero
                      {heroVariant === "demo2" && <span className="ml-2 text-primary">✓</span>}
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              )}
            </div>

            {/* CTA Button */}
            <div className="hidden md:flex items-center gap-4">
              <Button asChild className="rounded-full bg-foreground text-background hover:bg-foreground/90">
                <Link to="/contact">Book A Call</Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-foreground"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-background pt-20 md:hidden"
          >
            <div className="container mx-auto px-4 py-8">
              <div className="flex flex-col gap-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    className="text-2xl font-display font-bold text-foreground hover:text-primary transition-colors flex items-center gap-2"
                  >
                    {link.name}
                    {link.badge && (
                      <span className="px-2 py-0.5 text-xs font-bold bg-pink text-white rounded-full">
                        {link.badge}
                      </span>
                    )}
                  </Link>
                ))}
                
                {/* Mobile Hero Section Switcher */}
                {location.pathname === "/" && (
                  <div className="pt-4 border-t border-border">
                    <p className="text-sm text-muted-foreground mb-3">Hero Section</p>
                    <div className="flex flex-col gap-2">
                      <button
                        onClick={() => {
                          setHeroVariant("default");
                          setIsMobileMenuOpen(false);
                        }}
                        className={`text-left px-4 py-2 rounded-lg text-foreground hover:bg-muted transition-colors flex items-center justify-between ${
                          heroVariant === "default" ? "bg-muted" : ""
                        }`}
                      >
                        Default Hero
                        {heroVariant === "default" && <span className="text-primary">✓</span>}
                      </button>
                      <button
                        onClick={() => {
                          setHeroVariant("demo2");
                          setIsMobileMenuOpen(false);
                        }}
                        className={`text-left px-4 py-2 rounded-lg text-foreground hover:bg-muted transition-colors flex items-center justify-between ${
                          heroVariant === "demo2" ? "bg-muted" : ""
                        }`}
                      >
                        Demo 2 Hero
                        {heroVariant === "demo2" && <span className="text-primary">✓</span>}
                      </button>
                    </div>
                  </div>
                )}
                
                <Button asChild size="lg" className="rounded-full mt-4 bg-foreground text-background">
                  <Link to="/contact">Book A Call</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
