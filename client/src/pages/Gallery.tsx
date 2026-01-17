import { motion, useAnimationControls } from "framer-motion";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Maximize2, Camera, MapPin, Instagram } from "lucide-react";

import { Footer } from "@/components/Footer";

import stockMaldives from "@assets/stock_images/luxury_travel_destin_fb1d68db.jpg";
import stockAlps from "@assets/stock_images/luxury_travel_destin_c835dd8b.jpg";
import stockDesert from "@assets/stock_images/luxury_travel_destin_379bb3b7.jpg";
import stockParis from "@assets/stock_images/luxury_travel_destin_e6605b7c.jpg";
import stockNordic from "@assets/stock_images/nordic_lights_aurora_de916a9f.jpg";
import stockAuroraPeak from "@assets/stock_images/aurora_peak_snowy_mo_15779f0c.jpg";
import stockWhiteSands from "@assets/stock_images/white_sands_tropical_03bf2a06.jpg";

import stock1 from "@assets/stock_images/luxury_travel_aesthe_e0e843fa.jpg";
import stock2 from "@assets/stock_images/luxury_travel_aesthe_f05e8da4.jpg";
import stock3 from "@assets/stock_images/luxury_travel_aesthe_b953f4db.jpg";

const galleryItems = [
  {
    title: "Alpine Morning",
    location: "Zermatt, Switzerland",
    image: stockAlps,
    category: "Mountain",
    size: "large"
  },
  {
    title: "Azure Reflections",
    location: "Saint-Tropez, France",
    image: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&q=80",
    category: "Coastal",
    size: "small"
  },
  {
    title: "Golden Hour",
    location: "Empty Quarter, UAE",
    image: stockDesert,
    category: "Desert",
    size: "small"
  },
  {
    title: "Parisian Elegance",
    location: "Paris, France",
    image: stockParis,
    category: "City",
    size: "small"
  },
  {
    title: "Mystic Temple",
    location: "Paro, Bhutan",
    image: "https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80",
    category: "Culture",
    size: "large"
  },
  {
    title: "Nordic Lights",
    location: "Lofoten, Norway",
    image: stockNordic,
    category: "Arctic",
    size: "small"
  },
  {
    title: "Island Escape",
    location: "Maldives",
    image: stockMaldives,
    category: "Coastal",
    size: "small"
  },
  {
    title: "Aurora peak",
    location: "Lofoten, Norway",
    image: stockAuroraPeak,
    category: "Arctic",
    size: "large"
  },
  {
    title: "White Sands",
    location: "Maldives",
    image: stockWhiteSands,
    category: "Coastal",
    size: "small"
  }
];

const carouselImages = [stock1, stock2, stock3, stockMaldives, stockAlps, stockDesert, stockParis, stockNordic];

export default function Gallery() {
  const [isPaused, setIsPaused] = useState(false);
  const controls = useAnimationControls();

  useEffect(() => {
    if (true) {
      controls.start({
        rotate: [0, 360],
        transition: {
          duration: 40,
          repeat: Infinity,
          ease: "linear",
        },
      });
    } else {
      controls.stop();
    }
  }, [controls]); // Removed isPaused dependency to prevent stopping

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Navigation */}
      <nav className="relative z-20 w-full px-6 py-6 md:px-12 flex justify-between items-center bg-black/50 backdrop-blur-md sticky top-0 border-b border-white/5">
        <Link href="/">
          <a className="text-2xl font-display font-bold tracking-tight">LUXE.</a>
        </Link>
        <div className="hidden md:flex gap-8 text-sm uppercase tracking-widest text-white/70">
          <Link href="/destinations"><a className="hover:text-white transition-colors">Destinations</a></Link>
          <Link href="/stories"><a className="hover:text-white transition-colors">Stories</a></Link>
          <Link href="/gallery"><a className="text-white">Gallery</a></Link>
          <Link href="/about"><a className="hover:text-white transition-colors">About</a></Link>
        </div>
        <Button variant="outline" className="bg-transparent border-white/20 text-white hover:bg-white hover:text-black transition-all">
          Book Now
        </Button>
      </nav>

      {/* Hero Section */}
      <section className="relative py-24 md:py-32 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 text-center"
          >
            <h2 className="text-xs uppercase tracking-[0.5em] text-white/40 font-bold">Visual Collection</h2>
            <h1 className="text-6xl md:text-9xl font-display font-black tracking-tighter leading-none">
              CAPTURED<br/>
              <span className="text-glass-outline">MOMENTS</span>
            </h1>
            <p className="max-w-2xl mx-auto text-lg text-white/60 font-light leading-relaxed">
              A curated anthology of light, texture, and emotion from the most extraordinary places on Earth. Each frame tells a story of discovery.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-24 px-6 md:px-12 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {galleryItems.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="group relative break-inside-avoid overflow-hidden bg-white/5 cursor-pointer"
              >
                <img 
                  src={item.image} 
                  alt={item.title} 
                  loading="lazy"
                  className="w-full grayscale transition-all duration-1000 group-hover:scale-105 group-hover:grayscale-0 opacity-70 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                  <div className="space-y-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <span className="text-[10px] uppercase tracking-[0.3em] text-white/50">{item.category}</span>
                    <h3 className="text-2xl font-display font-bold">{item.title}</h3>
                    <p className="text-xs flex items-center gap-1 text-white/40 uppercase tracking-widest">
                      <MapPin className="w-3 h-3" /> {item.location}
                    </p>
                  </div>
                  <div className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity delay-100">
                    <Maximize2 className="w-5 h-5 text-white/60" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Follow our visual journey - Circular Carousel Upgrade */}
          <div className="mt-48 relative min-h-[800px] flex flex-col items-center justify-center overflow-hidden">
            <div className="relative z-10 text-center space-y-8 mb-20">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-4 text-white/30"
              >
                <div className="h-px w-12 bg-white/10" />
                <Camera className="w-5 h-5" />
                <div className="h-px w-12 bg-white/10" />
              </motion.div>
              
              <div className="space-y-4">
                <p className="text-white/40 uppercase tracking-[0.4em] text-xs font-bold">The Continuous Narrative</p>
                <h3 className="text-4xl md:text-6xl font-display font-black tracking-tight">FOLLOW OUR PERSPECTIVE</h3>
              </div>
              
              <Button variant="outline" className="h-16 px-12 rounded-none border-white/10 text-white hover:bg-white hover:text-black font-bold tracking-[0.3em] transition-all text-sm">
                @LUXETRAVEL
              </Button>
            </div>

            {/* Marquee Slider */}
            <div className="mt-24 relative w-screen left-1/2 -translate-x-1/2 overflow-hidden py-10">
              <motion.div
                className="flex gap-6 whitespace-nowrap"
                animate={{
                  x: [0, -1920], // Adjust based on content width
                }}
                transition={{
                  duration: 30,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                {[...carouselImages, ...carouselImages].map((img, i) => (
                  <div
                    key={i}
                    className="w-64 aspect-[3/4] flex-shrink-0 rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-md shadow-xl group cursor-pointer"
                  >
                    <img 
                      src={img} 
                      loading="lazy"
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" 
                      alt={`Visual journey ${i}`} 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                      <Instagram className="w-6 h-6 text-white/80" />
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
