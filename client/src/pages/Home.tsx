import { useState } from "react";
import { Preloader } from "@/components/Preloader";
import { motion } from "framer-motion";
import { useCreateSubscriber } from "@/hooks/use-subscribers";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertSubscriberSchema, type InsertSubscriber } from "@shared/schema";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowRight, Loader2, Star, MapPin, Globe, Shield, Phone, Instagram, Facebook, Twitter, Youtube, Mail } from "lucide-react";
import { SiVisa, SiMastercard, SiAmericanexpress } from "react-icons/si";

// Re-use last image for background continuity
import imgHero from "@assets/image_1768503794711.png";

// Import images from assets as requested
import imgExplore from "@assets/image_1768503551264.png";
import imgExperience from "@assets/image_1768503607623.png";
import imgComfort from "@assets/image_1768503721085.png";
import imgConfidence from "@assets/image_1768503794711.png";

const steps_assets = [
  { id: 1, text: "EXPLORE", image: imgExplore },
  { id: 2, text: "EXPERIENCE", image: imgExperience },
  { id: 3, text: "COMFORT", image: imgComfort },
  { id: 4, text: "CONFIDENCE", image: imgConfidence },
];

export default function Home() {
  const [showPreloader, setShowPreloader] = useState(true);
  const createSubscriber = useCreateSubscriber();

  const form = useForm<InsertSubscriber>({
    resolver: zodResolver(insertSubscriberSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = (data: InsertSubscriber) => {
    createSubscriber.mutate(data, {
      onSuccess: () => form.reset(),
    });
  };

  return (
    <>
      {showPreloader && (
        <Preloader onComplete={() => setShowPreloader(false)} />
      )}

      {/* Main Content - revealed after preloader */}
      {!showPreloader && (
        <motion.div
          className="relative min-h-screen w-full flex flex-col overflow-hidden bg-black text-white font-sans"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {/* Background with slight zoom effect */}
          <motion.div 
            className="absolute inset-0 z-0"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 10, ease: "easeOut" }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10" />
            <img 
              src={imgHero} 
              alt="Hero Background" 
              className="w-full h-full object-cover opacity-60"
            />
          </motion.div>

          {/* Navigation */}
          <nav className="relative z-20 w-full px-6 py-6 md:px-12 flex justify-between items-center">
            <div className="text-2xl font-display font-bold tracking-tight">LUXE.</div>
            <div className="hidden md:flex gap-8 text-sm uppercase tracking-widest text-white/70">
              <a href="#" className="hover:text-white transition-colors">Destinations</a>
              <a href="#" className="hover:text-white transition-colors">Stories</a>
              <a href="#" className="hover:text-white transition-colors">Gallery</a>
              <a href="#" className="hover:text-white transition-colors">About</a>
            </div>
            <Button variant="outline" className="bg-transparent border-white/20 text-white hover:bg-white hover:text-black transition-all">
              Book Now
            </Button>
          </nav>

          {/* Hero Content */}
          <main className="relative z-20 min-h-[90vh] flex flex-col items-center justify-center text-center px-4 md:px-6 py-20">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="max-w-4xl mx-auto space-y-8"
            >
              <h2 className="text-sm md:text-base uppercase tracking-[0.3em] text-white/60">
                Redefine Your Journey
              </h2>
              
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-black tracking-tighter leading-[0.85]">
                <span className="block text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60">
                  TRAVEL BEYOND
                </span>
                <span className="block text-glass-outline opacity-80">
                  BOUNDARIES
                </span>
              </h1>
              
              <p className="max-w-xl mx-auto text-lg md:text-xl text-white/70 leading-relaxed font-light">
                Discover the world's most breathtaking destinations with unparalelled comfort and style. Your adventure begins where the map ends.
              </p>

              {/* Newsletter Form */}
              <div className="pt-12 w-full max-w-md mx-auto">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-3">
                    <div className="flex gap-0 relative group">
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem className="flex-1">
                            <FormControl>
                              <Input 
                                placeholder="Enter your email for exclusive offers" 
                                {...field} 
                                className="bg-white/5 border-white/10 text-white placeholder:text-white/30 h-14 rounded-none focus:border-white/40 transition-all backdrop-blur-md px-6 text-base border-r-0"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <Button 
                        type="submit" 
                        disabled={createSubscriber.isPending}
                        className="h-14 px-8 rounded-none bg-white text-black hover:bg-white/90 font-bold tracking-wide transition-all active:scale-95"
                      >
                        {createSubscriber.isPending ? (
                          <Loader2 className="w-5 h-5 animate-spin" />
                        ) : (
                          <ArrowRight className="w-6 h-6" />
                        )}
                      </Button>
                    </div>
                  </form>
                </Form>
              </div>
            </motion.div>
          </main>

          {/* Featured Destinations */}
          <section className="relative z-20 py-24 px-6 md:px-12 bg-black">
            <div className="max-w-7xl mx-auto">
              <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                <div className="space-y-4">
                  <h2 className="text-xs uppercase tracking-[0.4em] text-white/40">Curated Experiences</h2>
                  <h3 className="text-4xl md:text-5xl font-display font-bold">FEARED DESTINATIONS</h3>
                </div>
                <Button variant="outline" className="rounded-none border-white/10 hover:bg-white hover:text-black">
                  View All Gallery
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { title: "Alpine Serenity", location: "Switzerland", img: steps_assets[0].image },
                  { title: "Azure Coast", location: "French Riviera", img: steps_assets[1].image },
                  { title: "Desert Mirage", location: "Dubai", img: steps_assets[2].image }
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    whileHover={{ y: -10 }}
                    className="group relative aspect-[3/4] overflow-hidden bg-white/5"
                  >
                    <img 
                      src={item.img} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70" 
                      alt={item.title}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                    <div className="absolute bottom-8 left-8 right-8">
                      <p className="text-xs uppercase tracking-widest text-white/50 mb-1">{item.location}</p>
                      <h4 className="text-2xl font-display font-bold">{item.title}</h4>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Experience Section */}
          <section className="relative z-20 py-24 px-6 md:px-12 bg-white text-black">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <h2 className="text-xs uppercase tracking-[0.4em] text-black/40 font-bold">The Luxe Standard</h2>
                <h3 className="text-5xl md:text-6xl font-display font-black leading-[0.9]">
                  BEYOND THE <br/> ORDINARY
                </h3>
                <p className="text-xl text-black/60 font-light leading-relaxed">
                  We believe travel should be more than just moving from one place to another. It should be an awakening of the senses, a transformation of the soul.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
                  <div className="space-y-3">
                    <div className="h-10 w-10 flex items-center justify-center border border-black/10">01</div>
                    <h4 className="font-bold uppercase tracking-tight">Private Access</h4>
                    <p className="text-sm text-black/50">Exclusive entry to the world's most guarded locations and private estates.</p>
                  </div>
                  <div className="space-y-3">
                    <div className="h-10 w-10 flex items-center justify-center border border-black/10">02</div>
                    <h4 className="font-bold uppercase tracking-tight">Personal Concierge</h4>
                    <p className="text-sm text-black/50">24/7 dedicated support to handle every detail of your journey with precision.</p>
                  </div>
                </div>
              </div>
              <div className="relative aspect-square">
                <img src={imgHero} className="w-full h-full object-cover grayscale brightness-90" alt="Experience" />
                <div className="absolute -bottom-8 -left-8 bg-black text-white p-12 hidden md:block">
                  <p className="text-5xl font-display font-bold mb-2">20</p>
                  <p className="text-xs uppercase tracking-widest text-white/40">Years of excellence</p>
                </div>
              </div>
            </div>
          </section>
          
          {/* Reviews Section */}
          <section className="relative z-20 py-32 px-6 md:px-12 bg-black overflow-hidden">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-20 space-y-4">
                <h2 className="text-xs uppercase tracking-[0.5em] text-white/40 font-bold">What Our Travelers Say</h2>
                <h3 className="text-5xl md:text-7xl font-display font-black text-glass-outline">REVIEWS</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { name: "Julianne Moore", role: "Vogue Editor", text: "The most seamless luxury experience I've ever had. Every detail was curated beyond perfection." },
                  { name: "Marcus Chen", role: "Tech Entrepreneur", text: "LUXE redefined what I thought was possible in private travel. The desert mirage tour was life-changing." },
                  { name: "Elena Rodriguez", role: "Architect", text: "As someone who appreciates design, the aesthetic of every location chosen was impeccable. Truly beyond the ordinary." }
                ].map((review, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.2 }}
                    viewport={{ once: true }}
                    className="p-10 border border-white/5 bg-white/[0.02] backdrop-blur-sm flex flex-col justify-between aspect-square group hover:border-white/20 transition-all"
                  >
                    <div className="space-y-6">
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 fill-white text-white" />)}
                      </div>
                      <p className="text-xl font-light leading-relaxed text-white/80 italic">"{review.text}"</p>
                    </div>
                    <div className="pt-8 border-t border-white/10">
                      <h4 className="font-bold tracking-tight">{review.name}</h4>
                      <p className="text-xs uppercase tracking-widest text-white/40">{review.role}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Pricing & Offers */}
          <section className="relative z-20 py-32 px-6 md:px-12 bg-white text-black">
            <div className="max-w-7xl mx-auto">
              <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                <div className="space-y-4">
                  <h2 className="text-xs uppercase tracking-[0.5em] text-black/40 font-bold">Curated Packages</h2>
                  <h3 className="text-5xl md:text-7xl font-display font-black leading-none">OFFERS</h3>
                </div>
                <p className="max-w-md text-black/60 font-light">All-inclusive luxury journeys tailored to your specific desires. Pricing includes private transport, concierge, and exclusive access.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border border-black/10">
                {[
                  { title: "The Alpine Retreat", price: "$12,500", days: "7 Days", features: ["Private Chalet", "Heli-Skiing", "Michelin Dining"] },
                  { title: "Coastal Elegance", price: "$18,900", days: "10 Days", features: ["Superyacht Access", "Private Villa", "Vintage Car Hire"] },
                  { title: "Desert Sanctuary", price: "$14,200", days: "5 Days", features: ["Private Oasis", "Falconry", "Night Sky Dining"] }
                ].map((offer, i) => (
                  <div key={i} className="p-12 border-b md:border-b-0 md:border-r last:border-r-0 border-black/10 group hover:bg-black hover:text-white transition-all duration-500">
                    <div className="space-y-8">
                      <div className="flex justify-between items-start">
                        <span className="text-xs uppercase tracking-[0.3em] font-bold opacity-40">{offer.days}</span>
                        <ArrowRight className="w-5 h-5 -rotate-45 group-hover:rotate-0 transition-transform" />
                      </div>
                      <h4 className="text-3xl font-display font-bold leading-tight">{offer.title}</h4>
                      <div className="space-y-2">
                        {offer.features.map((f, j) => (
                          <div key={j} className="flex items-center gap-2 text-sm opacity-60">
                            <div className="w-1 h-1 bg-current rounded-full" /> {f}
                          </div>
                        ))}
                      </div>
                      <div className="pt-12 border-t border-black/10 group-hover:border-white/10 flex items-baseline gap-2">
                        <span className="text-4xl font-display font-black">{offer.price}</span>
                        <span className="text-xs uppercase tracking-widest opacity-40">/ person</span>
                      </div>
                      <Button className="w-full h-14 rounded-none bg-black text-white group-hover:bg-white group-hover:text-black transition-colors font-bold tracking-widest">
                        INQUIRE NOW
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Map Section */}
          <section className="relative z-20 h-[70vh] w-full bg-black overflow-hidden flex items-center justify-center">
            <div className="absolute inset-0 opacity-40 grayscale pointer-events-none">
              <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80')] bg-cover bg-center" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
            <div className="relative z-30 text-center space-y-8 max-w-2xl px-6">
              <motion.div 
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                className="inline-flex items-center gap-2 px-6 py-2 border border-white/20 backdrop-blur-md rounded-full text-xs tracking-[0.3em] uppercase"
              >
                <MapPin className="w-3 h-3 text-white" /> Global Presence
              </motion.div>
              <h3 className="text-5xl md:text-7xl font-display font-black text-white leading-none">WE ARE EVERYWHERE</h3>
              <p className="text-white/60 font-light text-lg">From the hidden valleys of Bhutan to the private islands of the Maldives. Our network spans across 140+ luxury destinations worldwide.</p>
              <Button variant="outline" className="h-14 px-10 rounded-none border-white/20 text-white hover:bg-white hover:text-black font-bold tracking-[0.2em] transition-all">
                EXPLORE MAP
              </Button>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="relative z-20 py-32 px-6 md:px-12 bg-black">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-20 space-y-4">
                <h2 className="text-xs uppercase tracking-[0.5em] text-white/40 font-bold">Inquiries</h2>
                <h3 className="text-5xl md:text-7xl font-display font-black text-white">FAQ</h3>
              </div>
              
              <Accordion type="single" collapsible className="w-full space-y-4">
                {[
                  { q: "How do you select your destinations?", a: "We personally visit and vet every location. Our criteria focus on exclusivity, cultural depth, and the highest standards of luxury and safety." },
                  { q: "Can I customize an existing package?", a: "Absolutely. Every itinerary is fully customizable. Your personal concierge will work with you to tailor every detail to your preferences." },
                  { q: "What is included in the 'Luxe Standard'?", a: "It includes 24/7 concierge, private transportation, priority access to attractions, and hand-selected premium accommodations." },
                  { q: "Do you offer private jet services?", a: "Yes, we partner with world-class private aviation companies to provide seamless air travel as part of your experience." }
                ].map((item, i) => (
                  <AccordionItem key={i} value={`item-${i}`} className="border-white/10 px-6 bg-white/[0.02]">
                    <AccordionTrigger className="text-xl font-display font-bold hover:no-underline py-8 text-left uppercase tracking-tight">
                      {item.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-white/60 text-lg leading-relaxed pb-8 font-light">
                      {item.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </section>

          {/* New Footer */}
          <footer className="relative z-20 bg-[#0a0a0a] text-white pt-24 pb-12 border-t border-white/5">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
                <div className="space-y-8">
                  <div className="text-3xl font-display font-black tracking-tighter">LUXE.</div>
                  <p className="text-white/40 font-light leading-relaxed">
                    Redefining luxury travel since 2006. We create transformative journeys for those who seek the extraordinary.
                  </p>
                  <div className="flex gap-4">
                    {[Instagram, Facebook, Twitter, Youtube].map((Icon, i) => (
                      <a key={i} href="#" className="w-10 h-10 flex items-center justify-center border border-white/10 hover:bg-white hover:text-black transition-all">
                        <Icon className="w-4 h-4" />
                      </a>
                    ))}
                  </div>
                </div>

                <div className="space-y-6">
                  <h4 className="text-xs uppercase tracking-[0.4em] font-bold text-white/40">Destinations</h4>
                  <ul className="space-y-4 text-sm tracking-widest uppercase">
                    <li><a href="#" className="hover:text-white/60 transition-colors">Europe</a></li>
                    <li><a href="#" className="hover:text-white/60 transition-colors">Asia Pacific</a></li>
                    <li><a href="#" className="hover:text-white/60 transition-colors">Americas</a></li>
                    <li><a href="#" className="hover:text-white/60 transition-colors">Middle East</a></li>
                  </ul>
                </div>

                <div className="space-y-6">
                  <h4 className="text-xs uppercase tracking-[0.4em] font-bold text-white/40">Company</h4>
                  <ul className="space-y-4 text-sm tracking-widest uppercase">
                    <li><a href="#" className="hover:text-white/60 transition-colors">Our Story</a></li>
                    <li><a href="#" className="hover:text-white/60 transition-colors">Careers</a></li>
                    <li><a href="#" className="hover:text-white/60 transition-colors">Press Room</a></li>
                    <li><a href="#" className="hover:text-white/60 transition-colors">Contact</a></li>
                  </ul>
                </div>

                <div className="space-y-6">
                  <h4 className="text-xs uppercase tracking-[0.4em] font-bold text-white/40">Newsletter</h4>
                  <p className="text-sm text-white/40">Subscribe to receive curated travel inspiration directly to your inbox.</p>
                  <div className="flex border-b border-white/20 pb-2">
                    <input type="email" placeholder="Your email" className="bg-transparent flex-1 text-sm focus:outline-none" />
                    <button className="text-white/60 hover:text-white transition-colors">
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

              <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
                <div className="text-[10px] uppercase tracking-[0.5em] text-white/20">
                  © 2026 LUXE TRAVEL CO. ALL RIGHTS RESERVED.
                </div>
                <div className="flex gap-8 text-[10px] uppercase tracking-[0.5em] text-white/20">
                  <a href="#" className="hover:text-white transition-colors">Privacy</a>
                  <a href="#" className="hover:text-white transition-colors">Terms</a>
                  <a href="#" className="hover:text-white transition-colors">Cookies</a>
                </div>
                <div className="flex gap-4 opacity-20 grayscale">
                  <SiVisa className="text-3xl" />
                  <SiMastercard className="text-3xl" />
                  <SiAmericanexpress className="text-3xl" />
                </div>
              </div>
            </div>
          </footer>
        </motion.div>
      )}
    </>
  );
}
