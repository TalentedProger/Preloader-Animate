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
        duration: 1.2,
        ease: [0.16, 1, 0.3, 1],
      },
    },
    exit: { opacity: 0 }
  };

  const textVariants = {
    initial: (direction: string) => {
      switch (direction) {
        case "left": return { x: "-100%", opacity: 0 };
        case "right": return { x: "100%", opacity: 0 };
        case "top": return { y: "-100%", opacity: 0 };
        case "bottom": return { y: "100%", opacity: 0 };
        default: return { opacity: 0 };
      }
    },
    animate: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        duration: 1.2,
        ease: [0.16, 1, 0.3, 1],
      },
    },
    exit: {
      opacity: 0,
      scale: 1.05,
      transition: { duration: 0.2 }
    }
  };

  const getStepFillPercentage = (index: number, totalProgress: number) => {
    const stepStart = index * 25;
    const stepEnd = (index + 1) * 25;
    
    if (totalProgress <= stepStart) return "0%";
    if (totalProgress >= stepEnd) return "100%";
    
    const relativeProgress = ((totalProgress - stepStart) / 25) * 100;
    return `${relativeProgress}%`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-black text-white">
      <div className="hidden">
        {steps.map(s => <img key={s.id} src={s.image} />)}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={steps[currentStep].id}
          className="absolute inset-0 z-10 flex items-center justify-center overflow-hidden"
        >
          <motion.div
            className="absolute inset-0 w-full h-full"
            custom={steps[currentStep].direction}
            variants={imageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <div className="relative w-full h-full overflow-hidden">
              <motion.img
                src={steps[currentStep].image}
                alt={steps[currentStep].text}
                className="w-full h-full object-cover"
                initial={{ scale: 1.2 }}
                animate={{ scale: 1 }}
                transition={{ duration: 2.5, ease: "easeOut" }}
              />
              <div className="absolute inset-0 bg-black/30 backdrop-blur-[1px]" />
            </div>
          </motion.div>

          <motion.div
            className="relative z-20 flex flex-col items-center justify-center"
            custom={steps[currentStep].direction}
            variants={textVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            key={`text-${steps[currentStep].id}-${Date.now()}`}
          >
            <h1 
              className="font-display font-black text-6xl md:text-8xl lg:text-[12rem] tracking-tighter uppercase text-center px-4 text-glass-outline relative"
              style={{
                backgroundImage: `linear-gradient(to top, white ${getStepFillPercentage(currentStep, progress)}, transparent ${getStepFillPercentage(currentStep, progress)})`,
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                backgroundSize: "100% 100%",
                backgroundPosition: "bottom",
              } as any}
            >
              {steps[currentStep].text}
            </h1>
          </motion.div>
        </motion.div>
      </AnimatePresence>

      <div className="absolute bottom-10 right-10 z-[100] font-display font-black text-6xl md:text-9xl text-glass-outline tabular-nums opacity-80">
        {Math.round(progress)}%
      </div>
    </div>
  );
}
