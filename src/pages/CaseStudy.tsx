import { motion } from "framer-motion";
import { useParams, Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CTASection } from "@/components/CTASection";
import { ArrowLeft, CheckCircle2, TrendingUp, Target, Lightbulb, BarChart3, Video, ExternalLink, Image as ImageIcon, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const caseStudies: Record<number, any> = {
  10: {
    id: 10,
    title: "Instant Funds",
    industry: "Fintech / Digital Lending",
    services: ["Digital Marketing", "Performance Marketing", "ASO"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=600&fit=crop",
    color: "bg-highlight",
    textColor: "text-highlight",
    bgColor: "bg-highlight/5",
    overview: "We partnered with Instant Funds, a personal loan app offering short-term loans via RBI-regulated banks and NBFCs, to improve visibility, trust, and high-intent user acquisition across India. The goal was to stand out in a crowded loan-app market by reaching users actively searching for instant and short-term loan solutions—especially across Tier 2 and Tier 3 cities.",
    challenges: [
      "Low brand visibility despite RBI-compliant partnerships",
      "High competition in the personal loan app ecosystem",
      "Trust deficit among first-time digital loan users",
      "Difficulty reaching high-intent users at scale",
    ],
    approach: [
      "Conducted fintech market & search-intent analysis",
      "Identified high-intent loan keywords and user behavior",
      "Implemented performance-driven acquisition campaigns",
      "Optimized Play Store presence for better discoverability",
      "Built compliance-first, trust-led messaging",
    ],
    results: [
      "3.2x increase in app visibility across high-intent search terms",
      "+68% growth in Play Store organic discovery",
      "42% lower CPA through refined audience targeting",
      "2.5x increase in qualified app installs",
      "Stronger trust perception as an RBI-compliant loan platform",
    ],
    impact: "Instant Funds successfully positioned itself as a reliable, transparent, and compliant instant loan solution, achieving sustainable user growth while maintaining ethical and regulatory marketing standards.",
    gallery: [
      "/images/instantfund/Picture1.jpg",
      "/images/instantfund/Picture2.jpg",
      "/images/instantfund/unnamed.jpg",
    ],
  },
  11: {
    id: 11,
    title: "Technomatic Industries",
    industry: "Industrial Machinery / Manufacturing",
    services: ["Social Media Marketing", "Lead Generation", "Digital Strategy"],
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&h=600&fit=crop",
    color: "bg-accent",
    textColor: "text-accent",
    bgColor: "bg-accent/5",
    overview: "Samadhan Digitech partnered with Technomatic Industries to strengthen their digital presence and generate high-quality business leads through strategic social media marketing. Our responsibility included end-to-end management of their Instagram, Facebook, and LinkedIn profiles with a clear focus on brand visibility, credibility, and lead generation.",
    challenges: [
      "Limited digital visibility in a competitive industrial market",
      "Low inbound leads from online platforms",
      "Need to position the brand as a trusted and modern industrial solution provider",
      "Platform-specific content requirements for B2B audiences",
    ],
    approach: [
      "Developed a structured social media strategy aligned with business goals",
      "Created platform-specific content for Instagram, Facebook, and LinkedIn",
      "Focused on industrial storytelling, product showcases, and trust-building content",
      "Implemented lead-focused campaigns and inquiry-driven creatives",
      "Maintained consistent posting, engagement, and optimization",
    ],
    results: [
      "Generated 700+ qualified leads in just 2 months",
      "Significant increase in inbound inquiries across platforms",
      "Improved brand visibility and engagement in the industrial segment",
      "Strong growth in professional audience reach on LinkedIn",
      "High client satisfaction and long-term collaboration",
    ],
    impact: "Through a focused and performance-driven social media strategy, Technomatic Industries successfully transformed their digital platforms into powerful lead-generation channels. The brand is now positioned as a reliable and forward-thinking industrial partner, with consistent online visibility and measurable business outcomes.",
    reels: [
      "https://www.instagram.com/reel/DTP4OkeFe1z/?igsh=b3Eyc2JyNjBmeGg5",
      "https://www.instagram.com/reel/DSUaLAfFAvB/?igsh=MXdyaHUwYXpvcnZiNA==",
    ],
    gallery: [
      "/images/technomatic/Picture2.jpg",
      "/images/technomatic/Picture3.jpg",
      "/images/technomatic/Picture4.jpg",
      "/images/technomatic/Picture5.jpg",
      "/images/technomatic/Picture6.jpg",
    ],
  },
};

const CaseStudy = () => {
  const { id } = useParams<{ id: string }>();
  const caseStudy = caseStudies[Number(id)];
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  if (!caseStudy) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="pt-20">
          <div className="container mx-auto px-4 md:px-6 py-20 text-center">
            <h1 className="text-4xl font-display font-bold mb-4">Case Study Not Found</h1>
            <p className="text-muted-foreground mb-8">The case study you're looking for doesn't exist.</p>
            <Button asChild>
              <Link to="/our-work">Back to Portfolio</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

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
            >
              <Button
                asChild
                variant="ghost"
                className="mb-8 hover:text-primary"
              >
                <Link to="/our-work">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Portfolio
                </Link>
              </Button>

              <div className="max-w-4xl">
                <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${caseStudy.bgColor} mb-6`}>
                  <span className={`text-sm font-semibold ${caseStudy.textColor}`}>
                    {caseStudy.industry}
                  </span>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6">
                  {caseStudy.title}
                </h1>

                <div className="flex flex-wrap gap-3 mb-8">
                  {caseStudy.services.map((service: string) => (
                    <span
                      key={service}
                      className="px-4 py-2 rounded-full bg-background border border-border text-sm font-medium"
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Hero Image */}
        <section className="py-12">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="max-w-6xl mx-auto"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={caseStudy.image}
                  alt={caseStudy.title}
                  className="w-full h-[400px] md:h-[500px] object-cover"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Overview */}
        <section className="py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
                  Overview
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {caseStudy.overview}
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Challenge */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center gap-3 mb-8">
                  <div className={`p-3 rounded-xl ${caseStudy.bgColor}`}>
                    <Target className={`h-6 w-6 ${caseStudy.textColor}`} />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
                    Challenge
                  </h2>
                </div>
                <ul className="space-y-4">
                  {caseStudy.challenges.map((challenge: string, index: number) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className={`h-5 w-5 ${caseStudy.textColor} flex-shrink-0 mt-1`} />
                      <span className="text-muted-foreground text-lg">{challenge}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Our Approach */}
        <section className="py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center gap-3 mb-8">
                  <div className={`p-3 rounded-xl ${caseStudy.bgColor}`}>
                    <Lightbulb className={`h-6 w-6 ${caseStudy.textColor}`} />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
                    Our Approach
                  </h2>
                </div>
                <ul className="space-y-4">
                  {caseStudy.approach.map((item: string, index: number) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className={`h-5 w-5 ${caseStudy.textColor} flex-shrink-0 mt-1`} />
                      <span className="text-muted-foreground text-lg">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Results */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center gap-3 mb-8">
                  <div className={`p-3 rounded-xl ${caseStudy.bgColor}`}>
                    <BarChart3 className={`h-6 w-6 ${caseStudy.textColor}`} />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
                    Results
                  </h2>
                </div>
                <ul className="space-y-4">
                  {caseStudy.results.map((result: string, index: number) => (
                    <li key={index} className="flex items-start gap-3">
                      <TrendingUp className={`h-5 w-5 ${caseStudy.textColor} flex-shrink-0 mt-1`} />
                      <span className="text-muted-foreground text-lg">{result}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Gallery Section - Only show if gallery exists */}
        {caseStudy.gallery && caseStudy.gallery.length > 0 && (
          <section className="py-20">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-6xl mx-auto">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="flex items-center gap-3 mb-8">
                    <div className={`p-3 rounded-xl ${caseStudy.bgColor}`}>
                      <ImageIcon className={`h-6 w-6 ${caseStudy.textColor}`} />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
                      Gallery
                    </h2>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {caseStudy.gallery.map((image: string, index: number) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.05 }}
                        className="group relative aspect-square overflow-hidden rounded-xl cursor-pointer"
                        onClick={() => setSelectedImage(image)}
                      >
                        <img
                          src={image}
                          alt={`${caseStudy.title} - Image ${index + 1}`}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-all duration-300 flex items-center justify-center">
                          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className={`p-3 rounded-full ${caseStudy.color} bg-opacity-90`}>
                              <ImageIcon className="h-5 w-5 text-white" />
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </section>
        )}

        {/* Reels Section - Only show if reels exist */}
        {caseStudy.reels && caseStudy.reels.length > 0 && (
          <section className="py-20">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-4xl mx-auto">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="flex items-center gap-3 mb-8">
                    <div className={`p-3 rounded-xl ${caseStudy.bgColor}`}>
                      <Video className={`h-6 w-6 ${caseStudy.textColor}`} />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
                      Featured Reels
                    </h2>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    {caseStudy.reels.map((reel: string, index: number) => (
                      <motion.a
                        key={index}
                        href={reel}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="group relative block p-6 rounded-2xl border border-border bg-background hover:border-primary transition-all hover:shadow-lg"
                      >
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center gap-3">
                            <div className={`p-2 rounded-lg ${caseStudy.bgColor}`}>
                              <Video className={`h-5 w-5 ${caseStudy.textColor}`} />
                            </div>
                            <span className="font-semibold text-foreground">Instagram Reel {index + 1}</span>
                          </div>
                          <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                        </div>
                        <p className="text-sm text-muted-foreground">
                          View on Instagram
                        </p>
                      </motion.a>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </section>
        )}

        {/* Impact */}
        <section className={`py-20 ${caseStudy.reels && caseStudy.reels.length > 0 ? 'bg-muted/30' : ''}`}>
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
                  Impact
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {caseStudy.impact}
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />

      {/* Lightbox Modal */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/95 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 p-2 rounded-full bg-background/90 hover:bg-background transition-colors"
            aria-label="Close lightbox"
          >
            <X className="h-6 w-6 text-foreground" />
          </button>
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="relative max-w-7xl max-h-[90vh] mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage}
              alt="Gallery image"
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
            />
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default CaseStudy;
