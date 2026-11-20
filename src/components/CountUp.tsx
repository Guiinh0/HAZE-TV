"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";

interface CountUpProps {
  to: number;
  suffix?: string;
  duration?: number;
}

export function CountUp({ to, suffix = "", duration = 1.6 }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const shouldReduceMotion = useReducedMotion();
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (shouldReduceMotion) {
      setCount(to);
      return;
    }

    if (!isInView) return;

    let startTime: number | null = null;
    let animationFrameId: number;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeOut * to));

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(step);
      } else {
        setCount(to);
      }
    };

    animationFrameId = requestAnimationFrame(step);

    return () => cancelAnimationFrame(animationFrameId);
  }, [isInView, to, duration, shouldReduceMotion]);

  return (
    <span ref={ref} className="font-mono" suppressHydrationWarning>
      {count.toLocaleString("pt-BR")}
      {suffix}
    </span>
  );
}
