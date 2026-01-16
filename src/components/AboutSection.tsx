import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle2 } from "lucide-react";

const strengths = [
  {
    icon: "✅",
    title: "10+ Years of Trust",
    description: "Experience with government, corporate, and startup clients.",
  },
  {
    icon: "✅",
    title: "150+ Projects Delivered",
    description: "A broad portfolio across industries.",
  },
  {
    icon: "✅",
    title: "Pan-India Presence",
    description: "Local insight with international standards.",
  },
  {
    icon: "✅",
    title: "End-to-End Capabilities",
    description: "Media + Marketing + Technology under one roof.",
  },
];

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 bg-muted/30 relative overflow-hidden" ref={ref}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="inline-block text-primary font-bold text-sm uppercase tracking-wider mb-4"
            >
              About Us
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6"
            >
              We Are{" "}
              <span className="text-primary">Samadhan</span>{" "}
              Digitech
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-muted-foreground mb-6"
            >
              In today's digital-first world, every organization needs a partner who blends
              technology, creativity, and strategy to make an impact. Founded in 2017 as part
              of the Samadhan Group, we've evolved over 9 years into a leading creative-tech agency.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-3 mb-8"
            >
              <p className="text-foreground font-semibold">Our Philosophy:</p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <span className="text-primary">•</span>
                  Purpose-led innovation.
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-accent">•</span>
                  Strategy-backed creativity.
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-pink">•</span>
                  Human-first technology.
                </li>
              </ul>
            </motion.div>

            {/* Why Choose Us Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {strengths.map((item, index) => (
                <div
                  key={item.title}
                  className="flex items-start gap-3 p-4 rounded-xl bg-background border border-border"
                >
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground text-sm">{item.title}</p>
                    <p className="text-xs text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Content - Image Collage */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              {/* Main Image */}
              <div className="col-span-2">
                <div className="aspect-video rounded-2xl overflow-hidden bg-foreground shadow-xl">
                  <img
                    src="/images/about/3.JPG"
                    alt="Team collaboration"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Bottom Images */}
              <div className="aspect-square rounded-2xl overflow-hidden bg-primary shadow-lg">
                <img
                  src="/images/about/2.JPG"
                  alt="Digital marketing"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-square rounded-2xl overflow-hidden bg-accent shadow-lg">
                <img
                  src="/images/about/1.png"
                  alt="Film production"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Floating Stats Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="absolute -bottom-6 -left-6 bg-background rounded-2xl shadow-xl border border-border p-6"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center">
                  <span className="text-primary-foreground font-display font-bold text-xl">9+</span>
                </div>
                <div>
                  <p className="font-display font-bold text-foreground">Years</p>
                  <p className="text-sm text-muted-foreground">of Excellence</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
