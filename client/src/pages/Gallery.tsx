import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Maximize2, Camera, MapPin, Instagram } from "lucide-react";

const galleryItems = [
  {
    title: "Alpine Morning",
    location: "Zermatt, Switzerland",
    image: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?auto=format&fit=crop&q=80",
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
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80",
    category: "Desert",
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
    image: "https://images.unsplash.com/photo-1531366930499-41f695548db7?auto=format&fit=crop&q=80",
    category: "Arctic",
    size: "small"
  },
  {
    title: "Island Escape",
    location: "Maldives",
    image: "https://images.unsplash.com/photo-1514282401047-d78a73a6704a?auto=format&fit=crop&q=80",
    category: "Coastal",
    size: "small"
  }
];

export default function Gallery() {
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

          <div className="mt-32 text-center space-y-8">
            <div className="flex items-center justify-center gap-4">
              <div className="h-px w-24 bg-white/10" />
              <Camera className="w-6 h-6 text-white/20" />
              <div className="h-px w-24 bg-white/10" />
            </div>
            <p className="text-white/40 uppercase tracking-[0.4em] text-sm">Follow our visual journey</p>
            <Button variant="outline" className="h-16 px-12 rounded-none border-white/10 text-white hover:bg-white hover:text-black font-bold tracking-[0.3em]">
              <Instagram className="mr-2 w-5 h-5" /> @LUXETRAVEL
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-20 bg-[#0a0a0a] text-white pt-24 pb-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="pt-12 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-[10px] uppercase tracking-[0.5em] text-white/20">
              © 2026 LUXE TRAVEL CO. ALL RIGHTS RESERVED.
            </div>
            <div className="text-2xl font-display font-black tracking-tighter">LUXE.</div>
            <div className="flex gap-8 text-[10px] uppercase tracking-[0.5em] text-white/20">
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
