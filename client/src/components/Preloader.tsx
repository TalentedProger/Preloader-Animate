import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

// Import images from assets as requested
import imgExplore from "@assets/image_1768503551264.png";
import imgExperience from "@assets/image_1768503607623.png";
import imgComfort from "@assets/image_1768503721085.png";
import imgConfidence from "@assets/image_1768503794711.png";

const steps = [
  {
    id: 1,
    text: "EXPLORE",
    image: imgExplore,
    direction: "left", // Image slides from left
  },
  {
    id: 2,
    text: "EXPERIENCE",
    image: imgExperience,
    direction: "bottom", // Image slides from bottom
  },
  {
    id: 3,
    text: "COMFORT",
    image: imgComfort,
    direction: "right", // Image slides from right
  },
  {
    id: 4,
    text: "CONFIDENCE",
    image: imgConfidence,
    direction: "top", // Image slides from top
  },
];

interface PreloaderProps {
  onComplete: () => void;
}

export function Preloader({ onComplete }: PreloaderProps) {
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    // Sequence timing
    const timers = [
      setTimeout(() => setCurrentStep(1), 2000), // Step 1 to 2
      setTimeout(() => setCurrentStep(2), 4000), // Step 2 to 3
      setTimeout(() => setCurrentStep(3), 6000), // Step 3 to 4
      setTimeout(() => {
        // End of sequence
        onComplete();
      }, 8500),
    ];

    return () => timers.forEach(clearTimeout);
  }, [onComplete]);

  // Variants for image sliding
  const imageVariants = {
    initial: (direction: string) => {
      switch (direction) {
        case "left": return { x: "-100%", y: 0 };
        case "right": return { x: "100%", y: 0 };
        case "top": return { x: 0, y: "-100%" };
        case "bottom": return { x: 0, y: "100%" };
        default: return { opacity: 0 };
      }
    },
    animate: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        duration: 1.2,
        ease: [0.22, 1, 0.36, 1], // Custom ease for smooth cinematic feel
      },
    },
    exit: {
        // We don't actually exit images, we layer them. 
        // But if we needed to, we'd define it here.
        opacity: 0 
    }
  };

  // Variants for text sliding (matching the image direction)
  const textVariants = {
    initial: (direction: string) => {
      switch (direction) {
        case "left": return { x: -100, opacity: 0 };
        case "right": return { x: 100, opacity: 0 };
        case "top": return { y: -100, opacity: 0 };
        case "bottom": return { y: 100, opacity: 0 };
        default: return { opacity: 0 };
      }
    },
    animate: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        duration: 1.2,
        ease: [0.22, 1, 0.36, 1],
        delay: 0.1, // Slight delay for text after image starts
      },
    },
    exit: {
      opacity: 0,
      scale: 1.1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-black text-white">
      <AnimatePresence mode="popLayout">
        {steps.map((step, index) => {
          // Only render steps that are active (current or past)
          if (index > currentStep) return null;

          const isCurrent = index === currentStep;
          
          return (
            <motion.div
              key={step.id}
              className="absolute inset-0 z-10 flex items-center justify-center overflow-hidden"
              style={{ zIndex: step.id * 10 }} // Ensure stacking order: 10, 20, 30, 40
            >
              {/* Image Background Layer */}
              <motion.div
                className="absolute inset-0 w-full h-full"
                custom={step.direction}
                variants={imageVariants}
                initial="initial"
                animate="animate"
              >
                <div className="relative w-full h-full">
                  <img
                    src={step.image}
                    alt={step.text}
                    className="w-full h-full object-cover"
                  />
                  {/* Overlay for text readability */}
                  <div className="absolute inset-0 bg-black/20 backdrop-blur-[2px]" />
                </div>
              </motion.div>

              {/* Text Layer - Centered */}
              {isCurrent && (
                <motion.h1
                  className="relative z-20 font-display font-black text-5xl md:text-7xl lg:text-9xl tracking-tighter text-glass-outline uppercase text-center px-4"
                  custom={step.direction}
                  variants={textVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                >
                  {step.text}
                </motion.h1>
              )}
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
}
