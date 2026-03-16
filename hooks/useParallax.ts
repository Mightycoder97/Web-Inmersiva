"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/animations/gsap-config";

interface UseParallaxOptions {
  speed?: number;
  direction?: "vertical" | "horizontal";
}

export function useParallax<T extends HTMLElement>(
  options: UseParallaxOptions = {}
) {
  const ref = useRef<T>(null);
  const { speed = 0.5, direction = "vertical" } = options;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prop = direction === "vertical" ? "yPercent" : "xPercent";

    const tween = gsap.to(el, {
      [prop]: -30 * speed,
      ease: "none",
      scrollTrigger: {
        trigger: el,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });

    return () => {
      tween.kill();
    };
  }, [speed, direction]);

  return ref;
}
