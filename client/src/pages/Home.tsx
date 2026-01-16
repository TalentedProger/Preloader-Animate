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
import { ArrowRight, Loader2 } from "lucide-react";

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
          <main className="relative z-20 flex-grow flex flex-col items-center justify-center text-center px-4 md:px-6 mt-10 md:mt-0">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="max-w-4xl mx-auto space-y-6"
            >
              <h2 className="text-sm md:text-base uppercase tracking-[0.3em] text-white/60">
                Redefine Your Journey
              </h2>
              
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-black tracking-tighter leading-[0.9]">
                <span className="block text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60">
                  TRAVEL BEYOND
                </span>
                <span className="block text-glass-outline opacity-80">
                  BOUNDARIES
                </span>
              </h1>
              
              <p className="max-w-xl mx-auto text-lg text-white/70 leading-relaxed font-light">
                Discover the world's most breathtaking destinations with unparalelled comfort and style. Your adventure begins where the map ends.
              </p>

              {/* Newsletter Form */}
              <div className="pt-8 w-full max-w-md mx-auto">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-3">
                    <div className="flex gap-2 relative">
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem className="flex-1">
                            <FormControl>
                              <Input 
                                placeholder="Enter your email for exclusive offers" 
                                {...field} 
                                className="bg-white/5 border-white/10 text-white placeholder:text-white/30 h-12 rounded-none focus:border-white/50 transition-colors backdrop-blur-sm"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <Button 
                        type="submit" 
                        disabled={createSubscriber.isPending}
                        className="h-12 px-8 rounded-none bg-white text-black hover:bg-white/90 font-bold tracking-wide"
                      >
                        {createSubscriber.isPending ? (
                          <Loader2 className="w-4 h-4 animate-spin" />
                        ) : (
                          <ArrowRight className="w-5 h-5" />
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
          
          {/* Footer Stats */}
          <footer className="relative z-20 w-full px-6 py-8 md:px-12 border-t border-white/10 mt-auto bg-black/40 backdrop-blur-md">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center md:text-left">
              {[
                { label: "Destinations", value: "140+" },
                { label: "Travelers", value: "85k+" },
                { label: "Experience", value: "20 Yrs" },
                { label: "Rating", value: "4.9/5" },
              ].map((stat, i) => (
                <div key={i} className="flex flex-col">
                  <span className="text-2xl md:text-3xl font-display font-bold">{stat.value}</span>
                  <span className="text-xs uppercase tracking-widest text-white/50">{stat.label}</span>
                </div>
              ))}
            </div>
          </footer>
        </motion.div>
      )}
    </>
  );
}
