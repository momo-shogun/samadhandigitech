import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Zap } from "lucide-react";
import { Link } from "react-router-dom";

export function HeroSectionDemo2() {
  return (
    <section className="relative min-h-screen pt-24 pb-16 overflow-hidden bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Content */}
          <div className="pt-8 lg:pt-16">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-foreground leading-[1.1] tracking-tight"
            >  
              We Turn{" "}
              <span className="italic font-normal">Scrolls</span>{" "}
              Into Sales
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-6 text-lg text-muted-foreground max-w-xl"
            >
              We help brands grow online by combining performance-driven digital marketing, conversion-focused websites, and high-quality content production.
              <br />
              <br />
              <span className="text-foreground font-semibold">
                Attract. Convert. Grow.
              </span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-8 flex flex-col sm:flex-row gap-4"
            >
              <Button asChild size="lg" className="rounded-full bg-foreground text-background hover:bg-foreground/90 px-8">
                <Link to="/contact">Book A Call</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full border-2 border-foreground/20 hover:border-foreground/40 px-8">
                <Link to="/our-work">Our Work</Link>
              </Button>
            </motion.div>

            {/* Instant Response Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-6 flex items-center gap-2 text-sm text-pink font-medium"
            >
              <Zap className="h-4 w-4 fill-pink" />
              <span className="italic">Get Instant Response</span>
            </motion.div>

            {/* Stats Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 inline-flex items-center gap-3 bg-muted rounded-full px-4 py-2"
            >
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-xs font-bold border-2 border-background"
                  >
                    {i === 1 ? "SD" : i === 2 ? "+" : "🎬"}
                  </div>
                ))}
              </div>
              <span className="text-sm text-foreground font-medium">
                150+ Projects delivered successfully
              </span>
            </motion.div>
          </div>

          {/* Right Content - Video/Showreel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative lg:pt-8"
          >
            {/* <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl"> */}
              {/* Hero Image */}
              <img
                src="/images/image-2.jpg"
                alt="Samadhan Digitech Showreel"
                className="w-full h-full object-cover"
              />
            {/* </div> */}
          </motion.div>
        </div>
      </div>

      {/* Clients Logo Strip */}
      <div className="mt-16 md:mt-24">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center text-sm text-muted-foreground mb-8"
        >
          Working With Leading Institutions & Brands
        </motion.p>
        <ClientLogoStrip />
      </div>
    </section>
  );
}

function ClientLogoStrip() {
  const clientLogos = [
    {
      name: "Ministry of Rural Development",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/c/c8/Ministry_of_Rural_Development.png",
    },
    {
      name: "CSIR",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/6/60/CSIR-Logo-With-Tagline-Seleceted-Bilingual.png",
    },
    {
      name: "Khadi India",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9DQU24PnoUGBEIkHj4StbbY7XHFe2snxJNw&s",
    },
    {
      name: "DSIIDC",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrq1DkrDR_Z5GcjC6AJZs_ZHdksRu01ymAHg&s",
    },
    {
      name: "Burger Singh",
      image:
        "https://www.burgersinghonline.com/wp-content/themes/burger-singh/front/images/logo-v=0.1.png",
    },
    {
      name: "Bata",
      image:
        "https://airiamall.com/wp-content/uploads/2023/08/Bata-Airia-Mall-Gurugram-Delhi.png",
    },
    {
      name: "Jaipur Rugs",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTosBGBX15jP5DFLqy-z3S5BWnTCNyPjYhfSg&s",
    },
    {
      name: "Ananda",
      image:
        "https://pbs.twimg.com/profile_images/1981281423433543680/E2YY12Tt_400x400.jpg",
    },
    {
      name: "Liberty Shoes",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_QDVVcJUSnSFFty-bM9nWb5tT2ebhyWqrQw&s",
    },
    {
      name: "Theka Coffee",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBLByT-VsrFsAZS1G3xPHtgID6s5gEdzMIuw&s",
    },
  ];

  return (
    <div className="relative overflow-hidden py-4 bg-muted/50">
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="flex animate-marquee"
      >
        {[...clientLogos, ...clientLogos].map((client, index) => (
          <div
            key={index}
            className="flex-shrink-0 mx-8 flex items-center justify-center"
            style={{ minWidth: 96, minHeight: 48 }}
            title={client.name}
          >
            <img
              src={client.image}
              alt={client.name}
              className="h-10 max-h-10 w-auto object-contain opacity-90 hover:opacity-100 transition hover:scale-110"
              draggable={false}
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
