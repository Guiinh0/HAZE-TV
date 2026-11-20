"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";

export function Fog() {
  const [mounted, setMounted] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const { scrollY } = useScroll();

  // Parallax dos blobs roxos em velocidades diferentes
  const yBlob1 = useTransform(scrollY, [0, 2000], [0, -180]);
  const yBlob2 = useTransform(scrollY, [0, 2000], [0, 240]);

  useEffect(() => {
    setMounted(true);
  }, []);

  const enableMotion = mounted && !shouldReduceMotion;

  return (
    <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
      {/* Blob 1: Opacidade 25%, blur alto */}
      <motion.div
        style={enableMotion ? { y: yBlob1 } : {}}
        className="absolute top-[10%] left-[15%] w-[580px] h-[580px] rounded-full bg-[#8B5CF6]/25 blur-[140px]"
      />

      {/* Blob 2: Opacidade 15%, blur alto */}
      <motion.div
        style={enableMotion ? { y: yBlob2 } : {}}
        className="absolute top-[55%] right-[10%] w-[520px] h-[520px] rounded-full bg-[#8B5CF6]/15 blur-[150px]"
      />
    </div>
  );
}
