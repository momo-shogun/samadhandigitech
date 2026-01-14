import { motion } from "framer-motion";
import { useParams, Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CTASection } from "@/components/CTASection";
import { ArrowLeft, CheckCircle2, TrendingUp, Target, Lightbulb, BarChart3, Video, ExternalLink, Image as ImageIcon, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import workData from "@/data/workData.json";

// Special galleries/reels for specific projects
const specialData: Record<number, { gallery?: string[]; reels?: string[] }> = {
  16: {
    gallery: [
      "/images/instantfund/Picture1.jpg",
      "/images/instantfund/Picture2.jpg",
      "/images/instantfund/unnamed.jpg",
    ],
  },
  18: {
    gallery: [
      "/images/cmyuva/Picture3.png",
      "/images/cmyuva/Picture4.png",
      "/images/cmyuva/Picture5.png",
      "/images/cmyuva/Picture6.png",
      "/images/cmyuva/Picture7.png",
      "/images/cmyuva/Picture8.png",
      "/images/cmyuva/Picture9.png",
      "/images/cmyuva/Picture10.png",
      "/images/cmyuva/Picture11.png"
    ],
  },
  19: {
    gallery: [
      "/images/odop/Picture1.png",
      "/images/odop/Picture2.png",
      "/images/odop/Picture3.png",
      "/images/odop/Picture4.png",
      "/images/odop/Picture5.png",
      "/images/odop/Picture6.png",
    ],
  },
  17: {
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

// Helper function to convert color class to text color
const getTextColor = (color: string) => {
  const colorMap: Record<string, string> = {
    "bg-primary": "text-primary",
    "bg-accent": "text-accent",
    "bg-purple": "text-purple",
    "bg-pink": "text-pink",
    "bg-secondary": "text-secondary",
    "bg-highlight": "text-highlight",
  };
  return colorMap[color] || "text-primary";
};

// Helper function to get bg color with opacity
const getBgColor = (color: string) => {
  return `${color}/5`;
};

// Helper function to parse approach string into array
const parseApproach = (approach: string | undefined): string[] => {
  if (!approach) return [];
  // Split by numbered points (1., 2., etc.) or by periods followed by space
  const items = approach.split(/(?=\d+\.\s)/).filter(item => item.trim());
  if (items.length > 1) {
    return items.map(item => item.trim().replace(/^\d+\.\s*/, ""));
  }
  // If no numbered list, split by periods
  return approach.split(/\.\s+(?=[A-Z])/).filter(item => item.trim());
};

// Helper function to parse challenge string into array
const parseChallenge = (challenge: string | undefined): string[] => {
  if (!challenge) return [];
  return challenge.split(/\.\s+(?=[A-Z])/).filter(item => item.trim());
};

// Helper function to parse result string into array
const parseResult = (result: string | undefined): string[] => {
  if (!result) return [];
  // Split by periods or colons followed by space
  const items = result.split(/\.\s+|:\s+/).filter(item => item.trim());
  return items;
};

const CaseStudy = () => {
  const { id } = useParams<{ id: string }>();
  const project = workData.projects.find((p) => p.id === Number(id));
  const special = specialData[Number(id)] || {};

  // Convert project data to case study format
  const caseStudy = project ? {
    id: project.id,
    title: project.title,
    industry: project.industry || project.category,
    services: project.services || [],
    image: project.image,
    color: project.color || "bg-primary",
    textColor: getTextColor(project.color || "bg-primary"),
    bgColor: getBgColor(project.color || "bg-primary"),
    overview: project.overview || project.description,
    challenges: parseChallenge(project.challenge),
    approach: parseApproach(project.approach),
    results: parseResult(project.result),
    impact: project.impact || project.conclusion,
    gallery: special.gallery || [],
    reels: special.reels || [],
    videoUrl: project.videoUrl,
    client: project.client,
    type: project.type,
    year: project.year,
  } : null;
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  if (!caseStudy || !project) {
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

                {(caseStudy.services && caseStudy.services.length > 0) && (
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
                )}
                {(caseStudy.client || caseStudy.type || caseStudy.year) && (
                  <div className="flex flex-wrap gap-4 mb-8 text-sm text-muted-foreground">
                    {caseStudy.client && <span>Client: <strong className="text-foreground">{caseStudy.client}</strong></span>}
                    {caseStudy.type && <span>Type: <strong className="text-foreground">{caseStudy.type}</strong></span>}
                    {caseStudy.year && <span>Year: <strong className="text-foreground">{caseStudy.year}</strong></span>}
                  </div>
                )}
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

        {/* Challenge - Only show if challenges exist */}
        {caseStudy.challenges && caseStudy.challenges.length > 0 && (
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
        )}

        {/* Our Approach - Only show if approach exists */}
        {caseStudy.approach && caseStudy.approach.length > 0 && (
          <section className={`py-20 ${caseStudy.challenges && caseStudy.challenges.length > 0 ? '' : 'bg-muted/30'}`}>
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
        )}

        {/* Results - Only show if results exist */}
        {caseStudy.results && caseStudy.results.length > 0 && (
          <section className={`py-20 ${(caseStudy.challenges && caseStudy.challenges.length > 0) || (caseStudy.approach && caseStudy.approach.length > 0) ? 'bg-muted/30' : ''}`}>
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
        )}

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

        {/* Video Section - Only show if videoUrl exists */}
        {caseStudy.videoUrl && (
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
                      Watch Video
                    </h2>
                  </div>
                  <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl">
                    <iframe
                      src={(() => {
                        let url = caseStudy.videoUrl;
                        // Handle youtu.be links
                        if (url.includes('youtu.be/')) {
                          const videoId = url.split('youtu.be/')[1].split('?')[0];
                          return `https://www.youtube.com/embed/${videoId}`;
                        }
                        // Handle youtube.com/watch?v=
                        if (url.includes('youtube.com/watch?v=')) {
                          const videoId = url.split('v=')[1].split('&')[0];
                          return `https://www.youtube.com/embed/${videoId}`;
                        }
                        // Handle youtube.com/shorts/
                        if (url.includes('youtube.com/shorts/')) {
                          const videoId = url.split('shorts/')[1].split('?')[0];
                          return `https://www.youtube.com/embed/${videoId}`;
                        }
                        // Handle already embedded URLs
                        if (url.includes('youtube.com/embed/')) {
                          return url;
                        }
                        return url;
                      })()}
                      title={caseStudy.title}
                      className="w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </motion.div>
              </div>
            </div>
          </section>
        )}

        {/* Impact */}
        <section className={`py-20 ${(caseStudy.reels && caseStudy.reels.length > 0) || caseStudy.videoUrl ? 'bg-muted/30' : ''}`}>
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
