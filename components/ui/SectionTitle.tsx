"use client";

import { useEffect, useRef } from "react";
import { splitTextReveal } from "@/lib/animations/text-animations";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  className?: string;
}

export default function SectionTitle({
  title,
  subtitle,
  align = "center",
  className = "",
}: SectionTitleProps) {
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (titleRef.current) {
      splitTextReveal(titleRef.current, {
        trigger: titleRef.current,
      });
    }
  }, []);

  const alignClass = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  }[align];

  return (
    <div className={`mb-12 md:mb-16 ${alignClass} ${className}`}>
      <h2
        ref={titleRef}
        className="font-display text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-[var(--color-text-primary)]"
        style={{ visibility: "hidden" }}
      >
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base md:text-lg text-[var(--color-text-secondary)] max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}
