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
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const totalDuration = 7500;
    const startTime = Date.now();

    const progressInterval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const newProgress = Math.min((elapsed / totalDuration) * 100, 100);
      setProgress(newProgress);

      if (newProgress >= 75) {
        setCurrentStep(3);
      } else if (newProgress >= 50) {
        setCurrentStep(2);
      } else if (newProgress >= 25) {
        setCurrentStep(1);
      } else {
        setCurrentStep(0);
      }

      if (elapsed >= totalDuration) {
        clearInterval(progressInterval);
        onComplete();
      }
    }, 10);

    return () => clearInterval(progressInterval);
  }, [onComplete]);

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
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
    exit: { opacity: 0 }
  };

  const textVariants = {
    initial: (direction: string) => {
      switch (direction) {
        case "left": return { x: "-100vw", opacity: 0 };
        case "right": return { x: "100vw", opacity: 0 };
        case "top": return { y: "-100vh", opacity: 0 };
        case "bottom": return { y: "100vh", opacity: 0 };
        default: return { opacity: 0 };
      }
    },
    animate: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
    exit: {
      opacity: 0,
      scale: 1.05,
      transition: { duration: 0.2 }
    }
  };

  const getStepFillPercentage = (totalProgress: number) => {
    return `${totalProgress}%`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-black text-white">
      <div className="hidden">
        {steps.map(s => <img key={s.id} src={s.image} />)}
      </div>

      <AnimatePresence mode="popLayout">
        {steps.map((step, index) => {
          if (index > currentStep) return null;

          const isCurrent = index === currentStep;
          const fillPercentage = getStepFillPercentage(progress);
          
          return (
            <motion.div
              key={step.id}
              className="absolute inset-0 z-10 flex items-center justify-center overflow-hidden"
              style={{ zIndex: step.id * 10 }}
            >
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
                  <div className="absolute inset-0 bg-black/20 backdrop-blur-[1px]" />
                </div>
              </motion.div>

              {isCurrent && (
                <motion.div
                  className="relative z-20 flex flex-col items-center justify-center"
                  custom={step.direction}
                  variants={textVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                >
                  <h1 
                    className="font-display font-black text-6xl md:text-8xl lg:text-[12rem] tracking-tighter uppercase text-center px-4 text-glass-outline relative"
                    style={{
                      backgroundImage: `linear-gradient(to top, white ${fillPercentage}, transparent ${fillPercentage})`,
                      WebkitBackgroundClip: "text",
                      backgroundClip: "text",
                      backgroundSize: "100% 100%",
                      backgroundPosition: "bottom",
                    } as any}
                  >
                    {step.text}
                  </h1>
                </motion.div>
              )}
            </motion.div>
          );
        })}
      </AnimatePresence>

      <div className="absolute bottom-10 right-10 z-[100] font-display font-black text-6xl md:text-9xl text-glass-outline tabular-nums opacity-80">
        {Math.round(progress)}%
      </div>
    </div>
  );
}
