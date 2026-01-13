import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "Samadhan Digitech delivered beyond our expectations. Their creative approach and technical expertise made our campaign a huge success reaching 10+ crore viewers.",
    author: "Ministry of Rural Development",
    role: "Lakhpati Didi Campaign",
    image: "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=400&h=400&fit=crop",
  },
  {
    quote: "Professional team with excellent project management. They understood our vision and executed it perfectly. The ad film garnered 2M+ organic views!",
    author: "Burger Singh",
    role: "Brand Film Campaign",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=400&fit=crop",
  },
  {
    quote: "The 12-minute journey film beautifully captured 75 years of scientific innovation. Screened at international science forums worldwide.",
    author: "CSIR",
    role: "75 Years Journey Film",
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=400&h=400&fit=crop",
  },
];

const ongoingProjects = [
  { name: "Ministry of Rural Development", logo: "🏛️" },
  { name: "CSIR", logo: "🔬" },
  { name: "Khadi India", logo: "🧵" },
  { name: "Burger Singh", logo: "🍔" },
  { name: "Bata", logo: "👟" },
  { name: "Jaipur Rugs", logo: "🎨" },
  { name: "Ustraa", logo: "💈" },
  { name: "Ananda", logo: "🥛" },
  { name: "Liberty Shoes", logo: "👞" },
];

export function ClientsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="clients" className="py-24 bg-background relative overflow-hidden" ref={ref}>
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-block text-primary font-bold text-sm uppercase tracking-wider mb-4"
          >
            Our On-Going Projects
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6"
          >
            Trusted by{" "}
            <span className="text-primary">Leading</span> Organizations
          </motion.h2>
        </div>

        {/* Ongoing Projects Logos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-20"
        >
          {ongoingProjects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-muted border border-border hover:border-primary/30 hover:shadow-md transition-all cursor-pointer"
            >
              <span className="text-xl">{project.logo}</span>
              <span className="text-sm font-medium text-foreground whitespace-nowrap">
                {project.name}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              className="relative"
            >
              {/* Image */}
              <div className="aspect-square rounded-2xl overflow-hidden mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.author}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-3">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div>
                <p className="font-display font-bold text-foreground">
                  {testimonial.author}
                </p>
                <p className="text-xs text-muted-foreground">
                  ({testimonial.role})
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
