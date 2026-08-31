import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

interface PreloaderProps {
  onComplete?: () => void;
}

export function Preloader({ onComplete }: PreloaderProps) {
  const [percent, setPercent] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    // Fast initial progress counter
    const interval = setInterval(() => {
      setPercent((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        const step = Math.floor(Math.random() * 12) + 6;
        return Math.min(100, prev + step);
      });
    }, 40);

    // Timeout to finish preloader
    const timer = setTimeout(() => {
      setIsFinished(true); // White curtain columns retract upwards
      // Fire onComplete after curtains open so plain hero image shows first before text animations kick in
      if (onComplete) {
        setTimeout(onComplete, 650);
      }
    }, 1200);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, [onComplete]);

  // 5 vertical columns: center retracts first, then middle-outer, then outer
  const getDelay = (index: number) => {
    if (index === 2) return 0; // Middle column
    if (index === 1 || index === 3) return 0.12; // Middle-outer
    return 0.24; // Outermost
  };

  return (
    <AnimatePresence>
      {!isFinished && (
        <div className="fixed inset-0 z-[9999] pointer-events-none flex overflow-hidden">
          {/* 5 Vertical Theme Green Slabs */}
          {[0, 1, 2, 3, 4].map((i) => (
            <motion.div
              key={i}
              initial={{ y: 0 }}
              exit={{
                y: "-100%",
                transition: {
                  duration: 0.95,
                  ease: [0.76, 0, 0.24, 1],
                  delay: getDelay(i),
                },
              }}
              className="relative h-full w-1/5 bg-primary border-r border-black last:border-r-0 pointer-events-auto"
            />
          ))}

          {/* Central Logo & Progress Indicator */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{
              opacity: 0,
              y: -20,
              transition: { duration: 0.35, ease: "easeInOut" },
            }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-10 select-none"
          >
            <div className="flex flex-col items-center gap-4">
              <img
                src="/assets/images/logo.png"
                alt="Ecom Gleam"
                className="h-8 md:h-10 w-auto invert"
              />
              <div className="flex items-center gap-2 font-mono text-xs tracking-widest text-zinc-950 font-bold uppercase">
                <span>Loading</span>
                <span>{percent}%</span>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

export default Preloader;
