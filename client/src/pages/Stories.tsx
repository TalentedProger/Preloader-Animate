import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { ArrowRight, Calendar, User, MessageSquare, Heart } from "lucide-react";
import { Footer } from "@/components/Footer";

// Stories data
const stories = [
  {
    title: "The Silence of the Swiss Peaks",
    excerpt: "How a week in a remote alpine chalet redefined my perspective on luxury and tranquility. A journey through the heart of the mountains.",
    author: "Elena Rodriguez",
    date: "Dec 12, 2025",
    image: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?auto=format&fit=crop&q=80",
    category: "Reflection"
  },
  {
    title: "Chasing Gold in the Empty Quarter",
    excerpt: "Our expedition into the deepest dunes of Dubai. Beyond the skyscrapers lies a world of ancient traditions and breathtaking vistas.",
    author: "Julianne Moore",
    date: "Nov 28, 2025",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80",
    category: "Expedition"
  },
  {
    title: "The Blue Hour at the Côte d'Azur",
    excerpt: "Capturing the perfect light along the French Riviera. A photographer's guide to the most cinematic locations on the coast.",
    author: "Marcus Chen",
    date: "Oct 15, 2025",
    image: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&q=80",
    category: "Guide"
  },
  {
    title: "Bhutan: The Kingdom of Happiness",
    excerpt: "An intimate look at the monastic life and high-altitude trekking in the hidden valleys of the Himalayas.",
    author: "Sarah Jenkins",
    date: "Sep 05, 2025",
    image: "https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80",
    category: "Culture"
  }
];

export default function Stories() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Navigation */}
      <nav className="relative z-20 w-full px-6 py-6 md:px-12 flex justify-between items-center bg-black/50 backdrop-blur-md sticky top-0 border-b border-white/5">
        <Link href="/">
          <a className="text-2xl font-display font-bold tracking-tight">LUXE.</a>
        </Link>
        <div className="hidden md:flex gap-8 text-sm uppercase tracking-widest text-white/70">
          <Link href="/destinations"><a className="hover:text-white transition-colors">Destinations</a></Link>
          <Link href="/stories"><a className="text-white">Stories</a></Link>
          <Link href="/gallery"><a className="hover:text-white transition-colors">Gallery</a></Link>
          <Link href="/about"><a className="hover:text-white transition-colors">About</a></Link>
        </div>
        <Button variant="outline" className="bg-transparent border-white/20 text-white hover:bg-white hover:text-black transition-all">
          Book Now
        </Button>
      </nav>

      {/* Hero Section */}
      <section className="relative py-24 md:py-40 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80')] bg-cover bg-fixed bg-center opacity-30 grayscale" />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
        </div>
        <div className="max-w-4xl mx-auto relative z-10 space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <h2 className="text-xs uppercase tracking-[0.6em] text-white/40 font-bold">The Journal</h2>
            <h1 className="text-6xl md:text-9xl font-display font-black tracking-tighter leading-none">
              TRAVEL<br/>
              <span className="text-glass-outline">STORIES</span>
            </h1>
          </motion.div>
          <p className="text-lg md:text-xl text-white/60 font-light leading-relaxed max-w-2xl mx-auto">
            A collection of narratives from our community of travelers, explorers, and connoisseurs. Tales of discovery that linger long after the journey ends.
          </p>
        </div>
      </section>

      {/* Featured Story */}
      <section className="py-24 px-6 md:px-12 bg-black">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group relative aspect-[21/9] overflow-hidden bg-white/5 mb-32"
          >
            <img src={stories[0].image} className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:scale-105 group-hover:grayscale-0 opacity-60 group-hover:opacity-80" alt="Featured" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
            <div className="absolute bottom-12 left-12 right-12 md:max-w-2xl space-y-6">
              <span className="text-xs uppercase tracking-[0.4em] px-4 py-1 border border-white/20 bg-black/40 backdrop-blur-md rounded-full text-white">Featured Story</span>
              <h2 className="text-4xl md:text-6xl font-display font-bold leading-tight">{stories[0].title}</h2>
              <p className="text-lg text-white/60 font-light line-clamp-2">{stories[0].excerpt}</p>
              <Button className="h-14 px-10 rounded-none bg-white text-black hover:bg-white/90 font-bold tracking-[0.2em]">
                READ FULL STORY
              </Button>
            </div>
          </motion.div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {stories.slice(1).map((story, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group space-y-6"
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-white/5">
                  <img src={story.image} className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:scale-110 group-hover:grayscale-0 opacity-70" alt={story.title} />
                  <div className="absolute top-6 right-6">
                    <span className="text-[10px] uppercase tracking-[0.3em] px-3 py-1 bg-black/60 backdrop-blur-md border border-white/10 rounded-full text-white/60">{story.category}</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 text-[10px] uppercase tracking-[0.2em] text-white/40">
                    <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {story.date}</span>
                    <span className="flex items-center gap-1"><User className="w-3 h-3" /> By {story.author}</span>
                  </div>
                  <h3 className="text-2xl font-display font-bold group-hover:text-white/80 transition-colors leading-tight">{story.title}</h3>
                  <p className="text-white/50 font-light leading-relaxed line-clamp-3">{story.excerpt}</p>
                  <Link href="#">
                    <a className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] font-bold border-b border-white/20 pb-1 hover:border-white transition-all group-hover:gap-4">
                      READ MORE <ArrowRight className="w-4 h-4" />
                    </a>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-32 text-center">
            <Button variant="outline" className="h-16 px-12 rounded-none border-white/10 text-white hover:bg-white hover:text-black font-bold tracking-[0.3em]">
              LOAD MORE STORIES
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter - Minimal version */}
      <section className="py-32 px-6 border-t border-white/5 bg-black">
        <div className="max-w-2xl mx-auto text-center space-y-12">
          <h3 className="text-4xl font-display font-bold">SHARE YOUR JOURNEY</h3>
          <p className="text-white/60 font-light">Join our community of storytellers. Submit your travel experiences for a chance to be featured in our monthly journal.</p>
          <Button className="h-14 px-10 rounded-none bg-white text-black hover:bg-white/90 font-bold tracking-[0.2em]">
            BECOME A CONTRIBUTOR
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
