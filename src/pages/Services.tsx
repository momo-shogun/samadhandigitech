import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CTASection } from "@/components/CTASection";
import { Button } from "@/components/ui/button";
import { ArrowRight, Film, TrendingUp, Code, Camera, CheckCircle, Play, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    id: "media",
    icon: Film,
    title: "Media Production",
    tagline: "Stories that Inspire",
    description:
      "We bring ideas to life through impactful storytelling and world-class production quality. From concept development to final delivery, our team ensures every frame captures your vision.",
    features: [
      "Corporate Films & Audio-Visual Productions",
      "Ad Films & Television Commercials",
      "Documentaries & Short Films",
      "Animation (2D/3D) & Motion Graphics",
      "OTT Shows & Web Content",
      "Post-Production & VFX",
    ],
    image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&h=600&fit=crop",
    color: "bg-primary",
    textColor: "text-primary",
    bgColor: "bg-primary/5",
  },
  {
    id: "digital",
    icon: TrendingUp,
    title: "Digital Marketing",
    tagline: "Growth that Scales",
    description:
      "We build digital ecosystems that drive leads, revenue, and long-term brand equity. Our data-driven approach ensures measurable results and sustainable growth.",
    features: [
      "Performance Marketing",
      "Meta Ads",
      "Google Ads",
      "SEO",
      "Social Media Marketing",
      "Influencer Campaigns",
    ],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    color: "bg-accent",
    textColor: "text-accent",
    bgColor: "bg-accent/5",
  },
  {
    id: "it",
    icon: Code,
    title: "IT Services",
    tagline: "Technology that Transforms",
    description:
      "We engineer digital platforms for scalability, security, and performance. From custom software to AI solutions, we deliver technology that powers your business forward.",
    features: [
      "Website & Web Application Development",
      "Mobile Apps (iOS/Android)",
      "Custom Software & Enterprise Solutions",
      "Cloud Infrastructure & Database Management",
      "UI/UX Design & Development",
      "AI/ML Solutions & Data Analytics",
    ],
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=600&fit=crop",
    color: "bg-purple",
    textColor: "text-purple",
    bgColor: "bg-purple/5",
  },
  {
    id: "studio",
    icon: Camera,
    title: "Studio Rental",
    tagline: "Create Without Limits",
    description:
      "A fully equipped studio for creators, filmmakers, and brands. Our state-of-the-art facility provides everything you need to bring your creative vision to life.",
    features: [
      "Spacious Shooting Floor (2000+ sq ft)",
      "Professional Green Screen Setup",
      "Studio Lighting & Equipment",
      "Camera Gear & Crew Support",
      "Live Streaming & Podcast Setup",
      "Props, Set Design & Makeup Room",
    ],
    image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&h=600&fit=crop",
    color: "bg-pink",
    textColor: "text-pink",
    bgColor: "bg-pink/5",
  },
  {
    id: "branding",
    icon: Sparkles,
    title: "Branding",
    tagline: "Build a brand people trust.",
    description:
      "We craft compelling brand identities that resonate with your audience and build lasting trust. From strategy to visual systems, we create brands that stand out and drive business growth.",
    features: [
      "Brand Strategy & Positioning",
      "Brand Identity (Logo, Colors, Typography)",
      "Brand Guidelines",
      "Naming & Messaging",
      "Rebranding & Brand Refresh",
      "Packaging & Visual Systems",
    ],
    image: "https://images.unsplash.com/photo-1661956600684-97d3a4320e45?q=80&w=1170&auto=format&fit=crop",
    color: "bg-highlight",
    textColor: "text-highlight",
    bgColor: "bg-highlight/5",
  },
];

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
                What We Do
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6">
                Our <span className="text-primary">Services</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Everything you need to create, market, and scale your brand.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services Detail */}
        <section className="py-20" ref={ref}>
          <div className="container mx-auto px-4 md:px-6">
            <div className="space-y-24">
              {services.map((service, index) => (
                <motion.div
                  key={service.id}
                  id={service.id}
                  initial={{ opacity: 0, y: 40 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : ""
                    }`}
                >
                  {/* Content */}
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${service.bgColor} mb-6`}>
                      <service.icon className={`h-5 w-5 ${service.textColor}`} />
                      <span className={`text-sm font-semibold ${service.textColor}`}>
                        {service.tagline}
                      </span>
                    </div>

                    <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
                      {service.title}
                    </h2>

                    <p className="text-muted-foreground mb-8 leading-relaxed">
                      {service.description}
                    </p>

                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2">
                          <CheckCircle className={`h-5 w-5 ${service.textColor} flex-shrink-0 mt-0.5`} />
                          <span className="text-sm text-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-4">
                      <Button asChild className="rounded-full">
                        <Link to="/contact">
                          Get Started
                          <ArrowRight className="h-4 w-4 ml-2" />
                        </Link>
                      </Button>
                      <Button asChild variant="outline" className="rounded-full">
                        <Link to="/our-work">
                          View Projects
                        </Link>
                      </Button>
                    </div>
                  </div>

                  {/* Image */}
                  <div className={`relative ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                    <div className="relative rounded-2xl overflow-hidden shadow-xl group">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          className={`w-16 h-16 rounded-full ${service.color} flex items-center justify-center shadow-xl`}
                        >
                          <Play className="h-6 w-6 text-white ml-1" />
                        </motion.div>
                      </div>
                    </div>
                    {/* Decorative Elements */}
                    <div className={`absolute -z-10 -top-4 -right-4 w-full h-full rounded-2xl ${service.bgColor} opacity-50`} />
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

export default Services;