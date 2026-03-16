"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import React from "react";

interface ScrollRevealProps {
  children: React.ReactNode;
  animation?: "fadeInUp" | "fadeInLeft" | "fadeInRight" | "scaleIn";
  delay?: number;
  className?: string;
}

export default function ScrollReveal({
  children,
  animation = "fadeInUp",
  delay = 0,
  className = "",
}: ScrollRevealProps) {
  const ref = useScrollAnimation<HTMLDivElement>({ animation, delay });

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
