import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { BookingModal } from "@/components/BookingModal";
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

export default function Gallery() {
  const [bookingOpen, setBookingOpen] = useState(false);
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <BookingModal isOpen={bookingOpen} onClose={() => setBookingOpen(false)} />
      <Navbar onBookNow={() => setBookingOpen(true)} />

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

          {/* Follow our visual journey - Aesthetic Upgrade */}
          <div className="mt-48 relative">
            <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none overflow-hidden">
              <h2 className="text-[25vw] font-display font-black tracking-tighter whitespace-nowrap text-white/5 uppercase select-none">
                Instagram
              </h2>
            </div>
            
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

            <div className="relative z-10 grid grid-cols-2 md:grid-cols-5 gap-3 md:gap-4">
              {[stock1, stock2, stock3, stockMaldives, stockAlps].map((img, i) => {
                // Staggered vertical offsets for a dynamic masonry feel
                const topOffsets = ["md:mt-0", "md:mt-12", "md:mt-4", "md:mt-16", "md:mt-8"];
                const heights = ["aspect-[3/4]", "aspect-[2/3]", "aspect-[3/4]", "aspect-[2/3]", "aspect-[3/4]"];
                
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 60, scale: 0.95 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    whileHover={{ y: -12, transition: { duration: 0.35, ease: "easeOut" } }}
                    transition={{ delay: i * 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    viewport={{ once: true, margin: "-50px" }}
                    className={`relative group overflow-hidden rounded-xl ${heights[i]} ${topOffsets[i]} ${i >= 2 ? "hidden md:block" : ""} cursor-pointer`}
                  >
                    <img
                      src={img}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 scale-105 group-hover:scale-100 transition-all duration-700"
                      alt={`Visual journey ${i + 1}`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
                      <div className="flex items-center justify-between">
                        <span className="text-xs uppercase tracking-[0.2em] text-white/70 font-medium">@luxetravel</span>
                        <Instagram className="w-4 h-4 text-white/60" />
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
