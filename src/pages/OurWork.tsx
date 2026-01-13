import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CTASection } from "@/components/CTASection";
import { Play, ArrowRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const categories = ["All", "Government", "Brands", "Corporate", "Media Production", "Digital Marketing"];

const projects = [
  {
    id: 1,
    title: "Documentary Film - Skill India",
    category: "Government",
    description: "Award-winning documentary showcasing India's skill development initiatives reaching over 10 million viewers.",
    image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&h=600&fit=crop",
    color: "bg-primary",
    year: "2024",
  },
  {
    id: 2,
    title: "Brand Campaign - Leading FMCG",
    category: "Brands",
    description: "360° integrated marketing campaign that increased brand recall by 45% and drove significant sales growth.",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=600&fit=crop",
    color: "bg-accent",
    year: "2024",
  },
  {
    id: 3,
    title: "Corporate AV - MNC Annual Report",
    category: "Corporate",
    description: "Premium annual report video for Fortune 500 company showcasing global operations and achievements.",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=600&fit=crop",
    color: "bg-purple",
    year: "2023",
  },
  {
    id: 4,
    title: "Social Media Campaign",
    category: "Digital Marketing",
    description: "Viral social media campaign reaching 10M+ audience with 5x engagement rate improvement.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    color: "bg-pink",
    year: "2024",
  },
  {
    id: 5,
    title: "E-Governance Portal",
    category: "Government",
    description: "Citizen-centric e-governance platform serving millions of users across multiple states.",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop",
    color: "bg-secondary",
    year: "2023",
  },
  {
    id: 6,
    title: "Enterprise ERP Solution",
    category: "Corporate",
    description: "Custom ERP solution for manufacturing giant streamlining operations across 20+ locations.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=600&fit=crop",
    color: "bg-primary",
    year: "2023",
  },
  {
    id: 7,
    title: "Television Commercial",
    category: "Media Production",
    description: "High-impact TV commercial for national brand achieving 40% ad recall rate.",
    image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&h=600&fit=crop",
    color: "bg-accent",
    year: "2024",
  },
  {
    id: 8,
    title: "Performance Marketing",
    category: "Digital Marketing",
    description: "ROI-focused digital marketing campaign delivering 300% return on ad spend.",
    image: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=800&h=600&fit=crop",
    color: "bg-purple",
    year: "2024",
  },
  {
    id: 9,
    title: "Corporate Documentary",
    category: "Media Production",
    description: "In-depth corporate documentary capturing 25 years of company history and evolution.",
    image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&h=600&fit=crop",
    color: "bg-pink",
    year: "2023",
  },
  {
    id: 10,
    title: "Instant Funds",
    category: "Digital Marketing",
    description: "Performance marketing and ASO strategy for RBI-compliant personal loan app, achieving 3.2x visibility increase, 68% Play Store growth, and 42% lower CPA through trust-led, compliance-first campaigns.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    color: "bg-highlight",
    year: "2024",
  },
  {
    id: 11,
    title: "Technomatic Industries",
    category: "Digital Marketing",
    description: "Social media marketing and lead generation strategy for industrial machinery manufacturer, generating 700+ qualified leads in 2 months through strategic Instagram, Facebook, and LinkedIn campaigns.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop",
    color: "bg-accent",
    year: "2024",
  },
];

const OurWork = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto text-center"
            >
              <span className="inline-block text-primary font-bold text-sm uppercase tracking-wider mb-4">
                Our Portfolio
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6">
                Our <span className="text-primary">Work</span> Speaks
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Explore our portfolio of award-winning projects across media production,
                digital marketing, and IT solutions.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Portfolio Grid */}
        <section className="py-20" ref={ref}>
          <div className="container mx-auto px-4 md:px-6">
            {/* Category Filters */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="flex flex-wrap justify-center gap-3 mb-12"
            >
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                    activeCategory === category
                      ? "bg-primary text-primary-foreground shadow-lg"
                      : "bg-muted text-foreground border border-border hover:border-primary"
                  }`}
                >
                  {category}
                </button>
              ))}
            </motion.div>

            {/* Projects Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  layout
                  className="group relative overflow-hidden rounded-2xl bg-background border border-border shadow-md cursor-pointer card-hover"
                >
                  {/* Image */}
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Play Button */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        className={`w-16 h-16 rounded-full ${project.color} flex items-center justify-center shadow-xl`}
                      >
                        <Play className="h-6 w-6 text-white ml-1" />
                      </motion.div>
                    </div>

                    {/* Badges */}
                    <div className="absolute top-4 left-4 flex gap-2">
                      <span className={`px-3 py-1 rounded-full ${project.color} text-xs font-semibold text-white`}>
                        {project.category}
                      </span>
                      <span className="px-3 py-1 rounded-full bg-background/90 backdrop-blur-sm text-xs font-semibold text-foreground">
                        {project.year}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-display font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
                    <Button asChild variant="ghost" className="p-0 h-auto text-primary hover:text-primary/80 group/btn">
                      <Link to={`/our-work/${project.id}`}>
                        View Case Study
                        <ArrowRight className="h-4 w-4 ml-1 transition-transform group-hover/btn:translate-x-1" />
                      </Link>
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default OurWork;