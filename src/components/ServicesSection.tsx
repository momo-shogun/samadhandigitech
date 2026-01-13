import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    number: "01",
    title: "Media Production",
    subtitle: "For Brands & Government",
    description: "Corporate films, documentaries, ad films, animations, and post-production services.",
    href: "/services#media",
    color: "bg-primary",
    hoverColor: "group-hover:bg-primary",
  },
  {
    number: "02",
    title: "Digital Marketing",
    subtitle: "For Growth",
    description: "SEO, social media, performance marketing, influencer campaigns, and analytics.",
    href: "/services#digital",
    color: "bg-accent",
    hoverColor: "group-hover:bg-accent",
  },
  {
    number: "03",
    title: "IT Services",
    subtitle: "For Innovation",
    description: "Web & app development, custom software, cloud solutions, and AI/ML innovations.",
    href: "/services#it",
    color: "bg-pink",
    hoverColor: "group-hover:bg-pink",
  },
  {
    number: "04",
    title: "Studio Rental",
    subtitle: "For Creators",
    description: "Fully equipped studio with green screen, professional lighting, and crew support.",
    href: "/services#studio",
    color: "bg-purple",
    hoverColor: "group-hover:bg-purple",
  },
  {
    number: "05",
    title: "Branding",
    subtitle: "For Trust",
    description: "Brand strategy, identity design, guidelines, naming, rebranding, and visual systems.",
    href: "/services#branding",
    color: "bg-highlight",
    hoverColor: "group-hover:bg-highlight",
  },
];

export function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-24 bg-background relative overflow-hidden" ref={ref}>
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="inline-block text-primary font-bold text-sm uppercase tracking-wider mb-4"
            >
              Our Services
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl font-display font-bold text-foreground"
            >
              What We <span className="text-primary">Offer</span>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-foreground font-semibold hover:text-primary transition-colors mt-4 md:mt-0"
            >
              View all services
              <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>

        {/* Services List - Like Confetti */}
        <div className="space-y-4">
          {services.map((service, index) => (
            <motion.div
              key={service.number}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
            >
              <Link
                to={service.href}
                className="group flex flex-col md:flex-row md:items-center justify-between p-6 md:p-8 rounded-2xl border border-border bg-background hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start md:items-center gap-6 mb-4 md:mb-0">
                  {/* Number */}
                  <span className="text-sm font-mono text-muted-foreground">
                    {service.number}
                  </span>
                  
                  {/* Title & Subtitle */}
                  <div>
                    <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{service.subtitle}</p>
                  </div>
                </div>

                {/* Description (Hidden on mobile) */}
                <p className="hidden lg:block text-muted-foreground max-w-md text-sm flex-1 mx-8">
                  {service.description}
                </p>

                {/* Arrow */}
                <div className={`w-12 h-12 rounded-full border border-border flex items-center justify-center transition-all duration-300 ${service.hoverColor} group-hover:border-transparent`}>
                  <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-white transition-colors" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
