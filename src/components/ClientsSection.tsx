import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Star, Quote } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonials = [
  {
    quote: "Samadhan Digitech delivered beyond our expectations. Their creative approach and technical expertise made our campaign a huge success reaching 10+ crore viewers.",
    author: "Ministry of Rural Development",
    role: "Lakhpati Didi Campaign",
    avatar: "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=100&h=100&fit=crop",
  },
  {
    quote: "Professional team with excellent project management. They understood our vision and executed it perfectly. The ad film garnered 2M+ organic views!",
    author: "Burger Singh",
    role: "Brand Film Campaign",
    avatar: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=100&h=100&fit=crop",
  },
  {
    quote: "The 12-minute journey film beautifully captured 75 years of scientific innovation. Screened at international science forums worldwide.",
    author: "CSIR",
    role: "75 Years Journey Film",
    avatar: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=100&h=100&fit=crop",
  },
  {
    quote: "Working with Samadhan Digitech has been a great experience for us. Their team understands our industry well and has managed our Instagram, Facebook, and LinkedIn platforms with a clear strategy and consistency. In just two months, they helped us generate over 700 leads through digital channels. We are very satisfied with their performance and look forward to continuing this partnership.",
    author: "Team Technomatic Industries",
    role: "",
    avatar: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=100&h=100&fit=crop",
  }
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
            Testimonials
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4"
          >
            What Our <span className="text-primary">Clients</span> Say
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-muted-foreground text-lg"
          >
            Trusted by leading organizations across government, corporate, and startup sectors
          </motion.p>
        </div>

        {/* Testimonials Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative"
        >
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {testimonials.map((testimonial, index) => (
                <CarouselItem
                  key={`${testimonial.author}-${index}`}
                  className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3"
                >
                  <div className="h-full p-6 md:p-8 rounded-2xl border border-border bg-background hover:shadow-xl transition-all duration-300 flex flex-col">
                    {/* Quote Icon */}
                    <div className="mb-4">
                      <Quote className="h-8 w-8 text-primary/20" />
                    </div>

                    {/* Stars */}
                    <div className="flex gap-1 mb-4">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className="h-4 w-4 fill-accent text-accent"
                        />
                      ))}
                    </div>

                    {/* Quote */}
                    <p className="text-muted-foreground text-sm mb-6 leading-relaxed flex-grow">
                      "{testimonial.quote}"
                    </p>

                    {/* Author Info */}
                    <div className="flex items-center gap-4 pt-4 border-t border-border">
                      <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 border-2 border-border">
                        <img
                          src={testimonial.avatar}
                          alt={testimonial.author}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-display font-bold text-foreground text-sm truncate">
                          {testimonial.author}
                        </p>
                        <p className="text-xs text-muted-foreground truncate">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-left-4 md:-left-12 border-foreground/20 hover:border-foreground/40 hover:bg-foreground hover:text-background" />
            <CarouselNext className="-right-4 md:-right-12 border-foreground/20 hover:border-foreground/40 hover:bg-foreground hover:text-background" />
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
}
