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
    color: "bg-[#3B82F6]", // Blue
    hoverColor: "group-hover:bg-[#2563EB]",
  },
  {
    number: "02",
    title: "Digital Marketing",
    subtitle: "For Growth",
    description: "SEO, social media, performance marketing, influencer campaigns, and analytics.",
    href: "/services#digital",
    color: "bg-[#A855F7]", // Purple
    hoverColor: "group-hover:bg-[#9333EA]",
  },
  {
    number: "03",
    title: "IT Services",
    subtitle: "For Innovation",
    description: "Web & app development, custom software, cloud solutions, and AI/ML innovations.",
    href: "/services#it",
    color: "bg-[#EC4899]", // Bright Pink/Red
    hoverColor: "group-hover:bg-[#DB2777]",
  },
  {
    number: "04",
    title: "Studio Rental",
    subtitle: "For Creators",
    description: "Fully equipped studio with green screen, professional lighting, and crew support.",
    href: "/services#studio",
    color: "bg-[#10B981]", // Lime Green
    hoverColor: "group-hover:bg-[#059669]",
  },
  {
    number: "05",
    title: "Branding",
    subtitle: "For Trust",
    description: "Brand strategy, identity design, guidelines, naming, rebranding, and visual systems.",
    href: "/services#branding",
    color: "bg-[#F97316]", // Orange
    hoverColor: "group-hover:bg-[#EA580C]",
  },
];

export function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-10 bg-background relative overflow-hidden" ref={ref}>
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
                className={`group flex flex-col md:flex-row md:items-center p-6 md:p-8 rounded-2xl ${service.color} hover:shadow-xl transition-all duration-300`}
              >
                {/* Section 1: Number & Title */}
                <div className="flex-1 flex items-start md:items-center gap-4 md:gap-6 mb-4 md:mb-0">
                  {/* Number */}
                  <span className="text-sm font-mono text-white/80 flex-shrink-0">
                    {service.number}
                  </span>
                  
                  {/* Title & Subtitle */}
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl lg:text-3xl font-display font-bold text-white transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm text-white/90 mt-1">{service.subtitle}</p>
                  </div>
                </div>

                {/* Section 2: Description */}
                <div className="flex-1 flex items-center mb-4 md:mb-0 px-0 md:px-4">
                  <p className="text-white/80 text-sm text-left">
                    {service.description}
                  </p>
                </div>

                {/* Section 3: Arrow */}
                <div className="flex-1 flex items-center justify-start md:justify-end">
                  <div className={`w-12 h-12 rounded-full border-2 border-white/30 flex items-center justify-center transition-all duration-300 ${service.hoverColor} group-hover:border-white`}>
                    <ArrowRight className="h-5 w-5 text-white transition-colors" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
