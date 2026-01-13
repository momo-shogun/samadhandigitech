import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CTASection } from "@/components/CTASection";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Clock, User, Search, Tag } from "lucide-react";
import { Link } from "react-router-dom";

const categories = ["All", "Case Studies", "Industry Insights", "Technology", "Marketing Tips"];

const blogPosts = [
  {
    id: 1,
    title: "How We Helped a Government Initiative Reach 10 Million Citizens",
    excerpt: "A deep dive into our comprehensive media campaign that transformed public awareness and engagement across India.",
    category: "Case Studies",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=500&fit=crop",
    author: "Samadhan Team",
    date: "Jan 5, 2026",
    readTime: "8 min read",
    color: "bg-primary",
    featured: true,
  },
  {
    id: 2,
    title: "The Future of Digital Marketing in India: 2026 Trends",
    excerpt: "Explore the emerging trends shaping digital marketing landscape and how businesses can stay ahead of the curve.",
    category: "Industry Insights",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop",
    author: "Marketing Team",
    date: "Jan 3, 2026",
    readTime: "6 min read",
    color: "bg-accent",
    featured: true,
  },
  {
    id: 3,
    title: "Building Scalable Web Applications: A Technical Guide",
    excerpt: "Best practices and architecture patterns for building high-performance web applications that grow with your business.",
    category: "Technology",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=500&fit=crop",
    author: "Tech Team",
    date: "Dec 28, 2025",
    readTime: "10 min read",
    color: "bg-purple",
    featured: false,
  },
  {
    id: 4,
    title: "Creating Impactful Corporate Videos: Our Process",
    excerpt: "Behind the scenes of how we create award-winning corporate videos that tell compelling brand stories.",
    category: "Case Studies",
    image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&h=500&fit=crop",
    author: "Production Team",
    date: "Dec 20, 2025",
    readTime: "7 min read",
    color: "bg-pink",
    featured: false,
  },
  {
    id: 5,
    title: "5 Social Media Strategies That Actually Work",
    excerpt: "Proven social media marketing strategies that have delivered results for our clients across various industries.",
    category: "Marketing Tips",
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&h=500&fit=crop",
    author: "Social Team",
    date: "Dec 15, 2025",
    readTime: "5 min read",
    color: "bg-secondary",
    featured: false,
  },
  {
    id: 6,
    title: "AI in Media Production: Opportunities and Challenges",
    excerpt: "How artificial intelligence is transforming the media production industry and what it means for creative professionals.",
    category: "Technology",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=500&fit=crop",
    author: "Innovation Team",
    date: "Dec 10, 2025",
    readTime: "9 min read",
    color: "bg-primary",
    featured: false,
  },
];

const Blog = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = activeCategory === "All" || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPosts = blogPosts.filter((post) => post.featured);

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
                Insights & Stories
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6">
                Blog & <span className="text-primary">Case Studies</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                Explore our latest insights, industry trends, and success stories from
                projects that made a difference.
              </p>

              {/* Search */}
              <div className="relative max-w-md mx-auto">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 rounded-full border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Featured Posts */}
        <section className="py-12 border-b border-border">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-2xl font-display font-bold text-foreground mb-8">Featured Stories</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {featuredPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative overflow-hidden rounded-2xl bg-background border border-border shadow-md card-hover"
                >
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <span className={`inline-block px-3 py-1 rounded-full ${post.color} text-xs font-semibold text-white mb-3`}>
                        {post.category}
                      </span>
                      <h3 className="text-xl md:text-2xl font-display font-bold text-white mb-2 group-hover:text-accent transition-colors">
                        {post.title}
                      </h3>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-muted-foreground mb-4 line-clamp-2">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {post.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {post.readTime}
                        </span>
                      </div>
                      <Button variant="ghost" className="p-0 h-auto text-primary group/btn">
                        Read More
                        <ArrowRight className="h-4 w-4 ml-1 transition-transform group-hover/btn:translate-x-1" />
                      </Button>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* All Posts */}
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

            {/* Posts Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group overflow-hidden rounded-2xl bg-background border border-border shadow-md card-hover"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <span className={`absolute top-4 left-4 px-3 py-1 rounded-full ${post.color} text-xs font-semibold text-white`}>
                      {post.category}
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-display font-bold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{post.excerpt}</p>
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <div className="flex items-center gap-3">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {post.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {post.readTime}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>

            {filteredPosts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground">No posts found matching your criteria.</p>
              </div>
            )}
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Blog;