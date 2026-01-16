import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import workData from "@/data/workData.json";

const { categories: allCategories, projects: allProjects } = workData;

// Filter categories for PortfolioSection (exclude "All")
const categories = allCategories.filter((cat) => cat !== "All");

// Sort projects by priority (priority: 1 first, then others), then get first 8
const sortedProjects = [...allProjects].sort((a, b) => {
  const aPriority = a.priority || 0;
  const bPriority = b.priority || 0;
  return bPriority - aPriority; // Higher priority first
});

// Get featured projects (prioritized ones first, up to 8 projects)
const projects = sortedProjects.slice(0, 9);

export function PortfolioSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="portfolio" className="py-10 bg-muted/30 relative overflow-hidden" ref={ref}>
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-8">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="inline-block text-primary font-bold text-sm uppercase tracking-wider mb-4"
            >
              Our Work
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl font-display font-bold text-foreground"
            >
              Featured <span className="text-primary">Projects</span>
            </motion.h2>
          </div>

          {/* Navigation Arrows */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center gap-3 mt-6 md:mt-0"
          >
            <button className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-foreground hover:text-background transition-all">
              <ArrowLeft className="h-5 w-5" />
            </button>
            <button className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-foreground hover:text-background transition-all">
              <ArrowRight className="h-5 w-5" />
            </button>
          </motion.div>
        </div>

        {/* Category Pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap gap-3 mb-12"
        >
          {categories.map((category) => (
            <Link
              key={category}
              to={`/our-work?category=${category}`}
              className="px-4 py-2 rounded-full text-sm font-medium bg-background border border-border hover:bg-foreground hover:text-background hover:border-foreground transition-all"
            >
              {category}
            </Link>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
            >
              <Link
                to={`/our-work/${project.id}`}
                className="group block"
              >
                {/* Image */}
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-4">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-all duration-300" />
                </div>

                {/* Content */}
                <div className="space-y-1">
                  {(project.client || project.type) && (
                    <p className="text-sm text-muted-foreground">
                      {project.client ? `${project.client}` : ""}
                      {project.client && project.type ? " • " : ""}
                      {project.type ? project.type : ""}
                    </p>
                  )}
                  <h3 className="text-xl font-display font-bold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <Link
            to="/our-work"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-foreground text-background font-semibold hover:bg-foreground/90 transition-colors"
          >
            View All Projects
            <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
