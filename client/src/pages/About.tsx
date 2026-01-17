import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Award, Users, Globe, History, Shield, Star } from "lucide-react";
import { Footer } from "@/components/Footer";

import img1 from "@assets/stock_images/luxury_travel_destin_fb1d68db.jpg";
import img2 from "@assets/stock_images/luxury_travel_destin_c835dd8b.jpg";
import img3 from "@assets/stock_images/luxury_travel_destin_379bb3b7.jpg";
import img4 from "@assets/stock_images/luxury_travel_destin_e6605b7c.jpg";

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);

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
          <Link href="/gallery"><a className="hover:text-white transition-colors">Gallery</a></Link>
          <Link href="/about"><a className="text-white">About</a></Link>
        </div>
        <Button variant="outline" className="bg-transparent border-white/20 text-white hover:bg-white hover:text-black transition-all">
          Book Now
        </Button>
      </nav>

      {/* Hero Section */}
      <section className="relative py-24 md:py-40 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80')] bg-cover bg-fixed bg-center opacity-20 grayscale" />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
        </div>
        <div className="max-w-4xl mx-auto relative z-10 space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <h2 className="text-xs uppercase tracking-[0.6em] text-white/40 font-bold">The Heritage</h2>
            <h1 className="text-6xl md:text-9xl font-display font-black tracking-tighter leading-none">
              OUR<br/>
              <span className="text-glass-outline">LEGACY</span>
            </h1>
          </motion.div>
          <p className="text-lg md:text-xl text-white/60 font-light leading-relaxed max-w-2xl">
            Since 2006, LUXE has been at the forefront of bespoke travel, crafting narratives of exploration for the most discerning travelers. We don't just plan trips; we architect life-defining moments.
          </p>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-24 px-6 md:px-12 bg-white text-black">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="space-y-12">
            <div className="space-y-4">
              <h2 className="text-xs uppercase tracking-[0.4em] text-black/40 font-bold">Our Philosophy</h2>
              <h3 className="text-5xl font-display font-black leading-tight">THE ART OF DISCOVERY</h3>
            </div>
            <p className="text-xl text-black/60 font-light leading-relaxed">
              We believe that true luxury is not about excess, but about the rarity of experience and the depth of connection. Our mission is to bridge the gap between the known and the extraordinary.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { title: "Curated Excellence", text: "Every partner and property is chosen through a rigorous 120-point selection process." },
                { title: "Total Privacy", text: "Our protocols ensure your journey remains your own, protected by absolute discretion." }
              ].map((item, i) => (
                <div key={i} className="space-y-4">
                  <div className="h-12 w-12 border border-black/10 flex items-center justify-center">0{i+1}</div>
                  <h4 className="font-bold uppercase tracking-tight">{item.title}</h4>
                  <p className="text-sm text-black/50 leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden">
            <img src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80" className="w-full h-full object-cover grayscale" alt="CEO" />
            <div className="absolute bottom-12 right-12 bg-black text-white p-8 max-w-xs hidden md:block">
              <p className="text-sm font-light italic leading-relaxed mb-4">"Travel is the only thing you buy that makes you richer in ways money cannot measure."</p>
              <p className="text-xs uppercase tracking-[0.2em] font-bold">Arthur Sterling, Founder</p>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-32 px-6 md:px-12 bg-black">
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
          {[
            { icon: Globe, value: "140+", label: "Destinations" },
            { icon: History, value: "20", label: "Years Experience" },
            { icon: Users, value: "15k+", label: "Happy Clients" },
            { icon: Award, value: "42", label: "Global Awards" }
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <div className="w-12 h-12 border border-white/10 flex items-center justify-center mx-auto mb-6">
                <stat.icon className="w-5 h-5 text-white/40" />
              </div>
              <p className="text-5xl md:text-6xl font-display font-black leading-none">{stat.value}</p>
              <p className="text-xs uppercase tracking-[0.4em] text-white/30">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Follow our visual journey */}
      <section ref={containerRef} className="py-40 px-6 bg-black overflow-hidden relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="space-y-8 relative z-10">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <h2 className="text-xs uppercase tracking-[0.6em] text-white/40 font-bold">The Perspective</h2>
                <h3 className="text-5xl md:text-7xl font-display font-black leading-none">
                  FOLLOW OUR <br/>
                  <span className="text-glass-outline">JOURNEY</span>
                </h3>
              </motion.div>
              <p className="text-xl text-white/60 font-light leading-relaxed max-w-md">
                Experience the world through our lens. A continuous stream of inspiration from the most breathtaking corners of the earth.
              </p>
              <Button variant="outline" className="h-16 px-12 rounded-none border-white/10 text-white hover:bg-white hover:text-black font-bold tracking-[0.3em] transition-all">
                @LUXETRAVEL
              </Button>
            </div>

            <div className="relative grid grid-cols-2 gap-4 h-[600px]">
              <motion.div style={{ y: y1 }} className="space-y-4">
                <div className="aspect-[3/4] overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
                  <img src={img1} loading="lazy" className="w-full h-full object-cover" alt="Journey 1" />
                </div>
                <div className="aspect-[3/4] overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
                  <img src={img2} loading="lazy" className="w-full h-full object-cover" alt="Journey 2" />
                </div>
              </motion.div>
              <motion.div style={{ y: y2 }} className="space-y-4 pt-20">
                <div className="aspect-[3/4] overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
                  <img src={img3} loading="lazy" className="w-full h-full object-cover" alt="Journey 3" />
                </div>
                <div className="aspect-[3/4] overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
                  <img src={img4} loading="lazy" className="w-full h-full object-cover" alt="Journey 4" />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
        
        {/* Abstract background elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/[0.02] rounded-full blur-3xl pointer-events-none" />
      </section>

      <Footer />
    </div>
  );
}
