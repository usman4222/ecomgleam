import * as React from "react";
import { motion, Variants } from "motion/react";
import { cn } from "@/lib/utils";

export interface TextAnimateProps {
  children: string;
  animation?: "blurInUp" | "fadeIn" | "fadeInUp" | "blurIn";
  by?: "character" | "word";
  once?: boolean;
  className?: string;
  delay?: number;
}

export function TextAnimate({
  children,
  animation = "blurInUp",
  by = "character",
  once = true,
  className,
  delay = 0,
}: TextAnimateProps) {
  const wordsOrChars = by === "character" ? children.split("") : children.split(" ");

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: by === "character" ? 0.045 : 0.2,
        delayChildren: delay,
      },
    },
  };

  let childVariants: Variants;

  switch (animation) {
    case "blurInUp":
      childVariants = {
        hidden: {
          opacity: 0,
          y: 20,
          filter: "blur(6px)",
        },
        visible: {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          transition: {
            duration: 1.1,
            ease: [0.16, 1, 0.3, 1],
          },
        },
      };
      break;
    case "blurIn":
      childVariants = {
        hidden: {
          opacity: 0,
          filter: "blur(6px)",
        },
        visible: {
          opacity: 1,
          filter: "blur(0px)",
          transition: {
            duration: 1.1,
            ease: [0.16, 1, 0.3, 1],
          },
        },
      };
      break;
    case "fadeInUp":
      childVariants = {
        hidden: {
          opacity: 0,
          y: 16,
        },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.9,
            ease: [0.16, 1, 0.3, 1],
          },
        },
      };
      break;
    case "fadeIn":
    default:
      childVariants = {
        hidden: {
          opacity: 0,
        },
        visible: {
          opacity: 1,
          transition: {
            duration: 0.8,
            ease: "easeOut",
          },
        },
      };
      break;
  }

  return (
    <motion.span
      className={cn("inline-block", className)}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once }}
    >
      {wordsOrChars.map((item, idx) => {
        if (by === "character") {
          return (
            <motion.span
              key={idx}
              className="inline-block"
              variants={childVariants}
            >
              {item === " " ? "\u00A0" : item}
            </motion.span>
          );
        } else {
          return (
            <React.Fragment key={idx}>
              <motion.span
                className="inline-block"
                variants={childVariants}
              >
                {item}
              </motion.span>
              {idx < wordsOrChars.length - 1 && (
                <span className="inline-block">&nbsp;</span>
              )}
            </React.Fragment>
          );
        }
      })}
    </motion.span>
  );
}

export default TextAnimate;
