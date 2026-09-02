import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";

interface PreloaderProps {
  onComplete?: () => void;
}

// Generate smooth cubic bezier sinusoidal wave paths with deep, prominent curvature
function createWavePath(
  wavelength: number,
  amplitude: number,
  totalWidth: number = 3200,
  depth: number = 800
) {
  let d = "M 0 0";
  const half = wavelength / 2;
  const cp1 = wavelength * 0.14;
  const cp2 = wavelength * 0.36;

  for (let x = 0; x < totalWidth; x += wavelength) {
    // Crest (curves upwards into a deep, smooth rounded swell)
    d += ` C ${x + cp1} ${-amplitude}, ${x + cp2} ${-amplitude}, ${x + half} 0`;
    // Trough (curves downwards into a deep, smooth rounded scoop)
    d += ` C ${x + half + cp1} ${amplitude}, ${x + half + cp2} ${amplitude}, ${x + wavelength} 0`;
  }
  d += ` L ${totalWidth} ${depth} L 0 ${depth} Z`;
  return d;
}

// Deep, dramatic wave curves (36px and 44px amplitude for high curviness)
const FRONT_WAVE_PATH = createWavePath(360, 36, 3200, 800);
const BACK_WAVE_PATH = createWavePath(280, 44, 3200, 800);

export function Preloader({ onComplete }: PreloaderProps) {
  const [percent, setPercent] = useState(0);
  const [isZooming, setIsZooming] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const onCompleteRef = useRef(onComplete);

  useEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);

  useEffect(() => {
    let frameId: number;
    let startTime: number | null = null;
    // 3.2 seconds for a calm, graceful, satisfying liquid color fill
    const duration = 3200;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(1, elapsed / duration);

      // Smooth progress count-up
      const currentVal = Math.min(100, Math.floor(progress * 100));
      setPercent(currentVal);

      if (progress < 1) {
        frameId = requestAnimationFrame(animate);
      } else {
        setPercent(100);
        // Calm pause (400ms) with full white text so the user can enjoy the completed logo
        const holdTimer = setTimeout(() => {
          setIsZooming(true);

          // Fire onComplete smoothly mid-zoom so hero elements glide in in tandem
          const completeTimer = setTimeout(() => {
            onCompleteRef.current?.();
          }, 450);

          // Finish and unmount preloader smoothly after the slow soothing zoom
          const finishTimer = setTimeout(() => {
            setIsFinished(true);
          }, 1250);

          return () => {
            clearTimeout(completeTimer);
            clearTimeout(finishTimer);
          };
        }, 400);

        return () => clearTimeout(holdTimer);
      }
    };

    frameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(frameId);
    };
  }, []);

  // Water level translation accounting for the larger wave amplitude:
  // At 0%: 345 (crest at 345 - 44 = 301, completely below the descender of 'g' at 286)
  // At 100%: 20 (trough at 20 + 44 = 64, completely submerging the top of 'E' and 'l' at 88)
  const waterY = 345 - (percent / 100) * 325;

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          animate={isZooming ? { opacity: 0 } : { opacity: 1 }}
          transition={{ duration: 0.85, delay: 0.25, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#09090b] text-white overflow-hidden pointer-events-auto select-none"
        >
          {/* Zooming container for the text & water wave with slow, soothing, gentle ease */}
          <motion.div
            initial={{ scale: 1, opacity: 1 }}
            animate={
              isZooming
                ? {
                    scale: [1, 2.2],
                    opacity: [1, 1, 0],
                  }
                : { scale: 1, opacity: 1 }
            }
            transition={{
              duration: 1.25,
              times: [0, 0.65, 1],
              ease: [0.16, 1, 0.3, 1],
            }}
            style={{ transformOrigin: "center center" }}
            className="relative flex flex-col items-center justify-center w-full max-w-[1380px] px-4 sm:px-8"
          >
            {/* SVG Logo with Wavy Water Mask */}
            <svg
              viewBox="0 0 1300 350"
              className="w-full h-auto overflow-visible"
              aria-label="Ecomgleam"
            >
              <defs>
                {/* Text Mask defining the exact letterform boundaries */}
                <clipPath id="ecomgleam-clip">
                  <text
                    x="650"
                    y="192"
                    textAnchor="middle"
                    dominantBaseline="middle"
                    style={{
                      fontFamily:
                        "'Clash Display', 'Archivo', -apple-system, BlinkMacSystemFont, sans-serif",
                      fontWeight: 900,
                      fontSize: "188px",
                      letterSpacing: "-0.035em",
                    }}
                  >
                    Ecomgleam
                  </text>
                </clipPath>
              </defs>

              {/* 1. Base Unfilled Text (dark charcoal gray matching reference) */}
              <text
                x="650"
                y="192"
                textAnchor="middle"
                dominantBaseline="middle"
                fill="#34343a"
                style={{
                  fontFamily:
                    "'Clash Display', 'Archivo', -apple-system, BlinkMacSystemFont, sans-serif",
                  fontWeight: 900,
                  fontSize: "188px",
                  letterSpacing: "-0.035em",
                }}
              >
                Ecomgleam
              </text>

              {/* 2. Liquid Wavy Water Fill (strictly clipped to the letters) */}
              <g clipPath="url(#ecomgleam-clip)">
                {/* Back wave with depth & deep curvature */}
                <g transform={`translate(0, ${waterY})`}>
                  <motion.path
                    d={BACK_WAVE_PATH}
                    fill="rgba(255, 255, 255, 0.42)"
                    animate={{ x: [-280, 0] }}
                    transition={{
                      repeat: Infinity,
                      duration: 3.6,
                      ease: "linear",
                    }}
                  />
                </g>

                {/* Front wave in pure solid white with high wave curvature */}
                <g transform={`translate(0, ${waterY})`}>
                  <motion.path
                    d={FRONT_WAVE_PATH}
                    fill="#ffffff"
                    animate={{ x: [0, -360] }}
                    transition={{
                      repeat: Infinity,
                      duration: 2.8,
                      ease: "linear",
                    }}
                  />
                </g>

                {/* Solid white flood when progress reaches 100% */}
                {percent >= 99 && (
                  <rect
                    x="0"
                    y="0"
                    width="1300"
                    height="350"
                    fill="#ffffff"
                    opacity={percent === 100 ? 1 : 0.7}
                  />
                )}
              </g>
            </svg>

            {/* Bottom-right loading percentage indicator */}
            <motion.div
              animate={isZooming ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.25 }}
              className="flex justify-end w-full pr-4 sm:pr-8 md:pr-14 -mt-2 sm:-mt-4"
            >
              <div className="font-mono text-xs sm:text-sm text-zinc-400 tracking-wider flex items-center gap-1.5 select-none">
                <span>loading...</span>
                <span className="text-white font-medium min-w-[36px] text-right tabular-nums">
                  {percent} %
                </span>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Preloader;
