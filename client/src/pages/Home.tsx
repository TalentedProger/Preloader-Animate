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
