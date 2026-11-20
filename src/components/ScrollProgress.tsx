"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useSpring, useReducedMotion } from "framer-motion";

export function ScrollProgress() {
  const [mounted, setMounted] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || shouldReduceMotion) {
    return null;
  }

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 h-[3px] bg-[#8B5CF6] origin-left z-50 pointer-events-none shadow-[0_0_8px_#8B5CF6]"
    />
  );
}
