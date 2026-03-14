"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";

interface AnimatedCounterProps {
  value: string;
  className?: string;
}

export default function AnimatedCounter({ value, className }: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  // Extract numbers and non-numbers (prefix/suffix)
  const numberMatch = value.match(/\d+/);
  const targetNumber = numberMatch ? parseInt(numberMatch[0], 10) : null;
  
  const prefix = numberMatch ? value.substring(0, numberMatch.index) : "";
  const suffix = numberMatch ? value.substring((numberMatch.index || 0) + numberMatch[0].length) : value;

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 30,
    stiffness: 100,
  });

  const [displayNumber, setDisplayNumber] = useState(0);

  useEffect(() => {
    springValue.on("change", (latest) => {
      setDisplayNumber(Math.floor(latest));
    });
  }, [springValue]);

  useEffect(() => {
    if (isInView && targetNumber !== null) {
      motionValue.set(targetNumber);
    }
  }, [isInView, motionValue, targetNumber]);

  if (targetNumber === null) {
    return <span className={className}>{value}</span>;
  }

  return (
    <span ref={ref} className={className}>
      {prefix}{displayNumber}{suffix}
    </span>
  );
}
