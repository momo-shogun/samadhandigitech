import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const quickLinks = [
  {
    number: "01",
    title: "Check Our Services",
    href: "/services",
    color: "group-hover:bg-primary",
  },
  {
    number: "02",
    title: "Look At Our Work",
    href: "/our-work",
    color: "group-hover:bg-accent",
  },
  {
    number: "03",
    title: "About Us & Our Team",
    href: "/#about",
    color: "group-hover:bg-pink",
  },
  {
    number: "04",
    title: "Discuss Your Project",
    href: "/contact",
    color: "group-hover:bg-purple",
  },
];

const decorativeImages = [
  "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=200&h=200&fit=crop",
  "https://images.unsplash.com/photo-1551434678-e076c223a692?w=200&h=200&fit=crop",
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=200&h=200&fit=crop",
  "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=200&h=200&fit=crop",
];

export function WhatBringsYouSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 bg-background relative overflow-hidden" ref={ref}>
      {/* Decorative floating images - like Confetti */}
      <div className="absolute top-10 left-10 hidden lg:block">
        <motion.div
          initial={{ opacity: 0, rotate: -10 }}
          animate={isInView ? { opacity: 1, rotate: -5 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-24 h-24 rounded-xl overflow-hidden shadow-lg rotate-[-5deg]"
        >
          <img src={decorativeImages[0]} alt="" className="w-full h-full object-cover" />
        </motion.div>
      </div>
      <div className="absolute top-20 right-20 hidden lg:block">
        <motion.div
          initial={{ opacity: 0, rotate: 10 }}
          animate={isInView ? { opacity: 1, rotate: 8 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="w-20 h-20 rounded-xl overflow-hidden shadow-lg rotate-[8deg]"
        >
          <img src={decorativeImages[1]} alt="" className="w-full h-full object-cover" />
        </motion.div>
      </div>
      <div className="absolute bottom-20 left-20 hidden lg:block">
        <motion.div
          initial={{ opacity: 0, rotate: -5 }}
          animate={isInView ? { opacity: 1, rotate: 3 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-28 h-28 rounded-xl overflow-hidden shadow-lg rotate-[3deg]"
        >
          <img src={decorativeImages[2]} alt="" className="w-full h-full object-cover" />
        </motion.div>
      </div>
      <div className="absolute bottom-10 right-10 hidden lg:block">
        <motion.div
          initial={{ opacity: 0, rotate: 5 }}
          animate={isInView ? { opacity: 1, rotate: -3 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="w-24 h-24 rounded-xl overflow-hidden shadow-lg rotate-[-3deg]"
        >
          <img src={decorativeImages[3]} alt="" className="w-full h-full object-cover" />
        </motion.div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Small text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center text-muted-foreground text-sm mb-4"
        >
          Make yourself comfortable.
        </motion.p>

        {/* Main heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-center text-foreground mb-16"
        >
          What Brings You Here?
        </motion.h2>

        {/* Quick Links Grid */}
        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {quickLinks.map((link, index) => (
              <motion.div
                key={link.number}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              >
                <Link
                  to={link.href}
                  className="group flex items-center justify-between p-6 rounded-2xl border border-border bg-background hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-sm text-muted-foreground font-mono">
                      {link.number}:
                    </span>
                    <span className="text-lg font-display font-semibold text-foreground group-hover:text-primary transition-colors">
                      {link.title}
                    </span>
                  </div>
                  <div className={`w-10 h-10 rounded-full border border-border flex items-center justify-center transition-all duration-300 ${link.color} group-hover:border-transparent`}>
                    <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-white transition-colors" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
