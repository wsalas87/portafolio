import { motion, useReducedMotion } from "motion/react";
import {
  DOT_ANIMATION_DURATION_SECONDS,
  DOT_ANIMATION_EASE,
  DOT_MATRIX_ITEMS,
  DOT_OPACITY_KEYFRAMES,
  type DotMatrixItem,
} from "../data/dotMatrixData";

interface AnimatedDotProps {
  item: DotMatrixItem;
  prefersReducedMotion: boolean;
}

function AnimatedDot({ item, prefersReducedMotion }: AnimatedDotProps) {
  return (
    <motion.div
      className="absolute size-[8px]"
      style={{ left: `${item.left}px`, top: `${item.top}px` }}
      data-node-id={item.nodeId}
      data-name={item.name}
      initial={{ opacity: 1 }}
      animate={prefersReducedMotion ? { opacity: 1 } : { opacity: DOT_OPACITY_KEYFRAMES }}
      transition={
        prefersReducedMotion
          ? undefined
          : {
              opacity: {
                duration: DOT_ANIMATION_DURATION_SECONDS,
                times: item.times,
                ease: DOT_ANIMATION_EASE,
                repeat: Infinity,
              },
            }
      }
    >
      <img alt="" className="absolute block inset-0 max-w-none size-full" src={item.src} />
    </motion.div>
  );
}

export function DotMatrixAnimation() {
  const prefersReducedMotion = Boolean(useReducedMotion());

  return (
    <div
      aria-hidden="true"
      className="h-[198px] mt-auto opacity-70 overflow-clip relative shrink-0 w-full max-w-[1440px]"
      data-name="animation"
    >
      {DOT_MATRIX_ITEMS.map((item) => (
        <AnimatedDot key={item.nodeId} item={item} prefersReducedMotion={prefersReducedMotion} />
      ))}
    </div>
  );
}
