import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, ArrowRight, Star, Clock, Globe, Shield } from "lucide-react";
import { Link } from "wouter";
import { Footer } from "@/components/Footer";

// Import images
import imgAlpine from "@assets/stock_images/luxury_alpine_chalet_f7c24fd7.jpg";
import imgRiviera from "@assets/stock_images/french_riviera_azure_b5453c77.jpg";
import imgDesert from "@assets/stock_images/dubai_desert_dunes_l_4d2d48dc.jpg";

const destinations = [
  {
    title: "Alpine Serenity",
    location: "Swiss Alps, Switzerland",
    description: "Experience the pinnacle of mountain luxury. Our private chalets offer breathtaking views of the Matterhorn, personal ski instructors, and Michelin-starred dining in the clouds.",
    image: imgAlpine,
    price: "From $12,500",
    tags: ["Winter", "Luxury", "Ski"]
  },
  {
    title: "Azure Coast",
    location: "French Riviera, France",
    description: "The timeless elegance of the Côte d'Azur. Private yacht charters, exclusive beach club access, and historic villas overlooking the Mediterranean's most prestigious coastline.",
    image: imgRiviera,
    price: "From $18,900",
    tags: ["Summer", "Coast", "Yacht"]
  },
  {
    title: "Desert Sanctuary",
    location: "Empty Quarter, Dubai",
    description: "An ethereal escape into the golden dunes. Private desert oases featuring infinity pools, traditional falconry, and starlit dining far from the city lights.",
    image: imgDesert,
    price: "From $14,200",
    tags: ["Autumn", "Desert", "Oasis"]
  },
  {
    title: "Hidden Kingdom",
    location: "Paro Valley, Bhutan",
    description: "A spiritual journey into the last Shangri-La. Discover ancient monasteries and pristine landscapes with our local guides and stay in world-class wellness retreats.",
    image: "https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80",
    price: "From $9,800",
    tags: ["Spirituality", "Nature", "Hiking"]
  }
];

export default function Destinations() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Navigation - Simplified for pages */}
      <nav className="relative z-20 w-full px-6 py-6 md:px-12 flex justify-between items-center bg-black/50 backdrop-blur-md sticky top-0 border-b border-white/5">
        <Link href="/">
          <a className="text-2xl font-display font-bold tracking-tight">LUXE.</a>
        </Link>
        <div className="hidden md:flex gap-8 text-sm uppercase tracking-widest text-white/70">
          <Link href="/destinations"><a className="text-white">Destinations</a></Link>
          <Link href="/stories"><a className="hover:text-white transition-colors">Stories</a></Link>
          <Link href="/gallery"><a className="hover:text-white transition-colors">Gallery</a></Link>
          <Link href="/about"><a className="hover:text-white transition-colors">About</a></Link>
        </div>
        <Button variant="outline" className="bg-transparent border-white/20 text-white hover:bg-white hover:text-black transition-all">
          Book Now
        </Button>
      </nav>

      {/* Hero Section */}
      <section className="relative py-24 md:py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20 grayscale">
          <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&q=80')] bg-cover bg-fixed bg-center" />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h2 className="text-xs uppercase tracking-[0.5em] text-white/40 font-bold">World Selection</h2>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-black tracking-tighter leading-none">
              CURATED<br/>
              <span className="text-glass-outline">HORIZONS</span>
            </h1>
            <p className="max-w-2xl text-xl text-white/60 font-light leading-relaxed">
              We don't just find places; we discover souls. Our portfolio is a collection of the world's most exceptional locations, each chosen for its unique character and uncompromising luxury.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="py-24 px-6 md:px-12 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 gap-32">
            {destinations.map((dest, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true, margin: "-100px" }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className={`space-y-8 ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="space-y-4">
                    <div className="flex gap-4">
                      {dest.tags.map((tag, j) => (
                        <span key={j} className="text-[10px] uppercase tracking-[0.3em] px-3 py-1 border border-white/10 rounded-full text-white/40">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-4xl md:text-5xl font-display font-bold">{dest.title}</h3>
                    <div className="flex items-center gap-2 text-white/50 text-sm tracking-widest uppercase">
                      <MapPin className="w-4 h-4" /> {dest.location}
                    </div>
                  </div>
                  <p className="text-lg text-white/60 font-light leading-relaxed">
                    {dest.description}
                  </p>
                  <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                    <div>
                      <p className="text-xs uppercase tracking-widest text-white/30 mb-1">Starting from</p>
                      <p className="text-2xl font-display font-bold">{dest.price}</p>
                    </div>
                    <Button className="h-14 px-8 rounded-none bg-white text-black hover:bg-white/90 font-bold tracking-widest">
                      EXPLORE DETAILS <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                </div>
                <div className={`relative aspect-[4/5] overflow-hidden group ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <img 
                    src={dest.image} 
                    alt={dest.title} 
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-40" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-32 px-6 bg-white text-black">
        <div className="max-w-7xl mx-auto text-center space-y-16">
          <div className="space-y-4">
            <h2 className="text-xs uppercase tracking-[0.5em] text-black/40 font-bold">Uncompromising Quality</h2>
            <h3 className="text-4xl md:text-6xl font-display font-black">WHY CHOOSE OUR DESTINATIONS</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: Globe, title: "Global Reach", text: "Access to the most remote and exclusive corners of the planet." },
              { icon: Shield, title: "Vetted Luxury", text: "Every location is personally inspected by our specialists annually." },
              { icon: Clock, title: "24/7 Precision", text: "Your schedule is managed with obsessive attention to detail." }
            ].map((feature, i) => (
              <div key={i} className="space-y-6 p-8 border border-black/5 hover:border-black/20 transition-colors">
                <div className="w-16 h-16 border border-black/10 flex items-center justify-center mx-auto">
                  <feature.icon className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold uppercase tracking-tight">{feature.title}</h4>
                <p className="text-black/60 font-light leading-relaxed">{feature.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
