import { useState } from "react";
import { Preloader } from "@/components/Preloader";
import { motion } from "framer-motion";

export default function Home() {
  const [showPreloader, setShowPreloader] = useState(true);

  return (
    <>
      {showPreloader && (
        <Preloader onComplete={() => setShowPreloader(false)} />
      )}

      {!showPreloader && (
        <motion.div
          className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white font-body"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="text-center space-y-6 px-4">
            <h1 className="text-6xl md:text-8xl font-display font-black tracking-tighter">
              Welcome
            </h1>
            <p className="text-xl text-white/70 max-w-md mx-auto font-body">
              This is a demo page. The preloader component is ready to be integrated into your project.
            </p>
            <p className="text-sm text-white/50 font-body">
              Check README.md for integration instructions
            </p>
          </div>
        </motion.div>
      )}
    </>
  );
}
