import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Award, Users, Globe, History, Shield, Star } from "lucide-react";

export default function About() {
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
