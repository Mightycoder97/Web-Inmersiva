"use client";

import { gsap, ScrollTrigger } from "./gsap-config";

export function fadeInUp(
  element: Element | Element[],
  options?: {
    delay?: number;
    duration?: number;
    y?: number;
    stagger?: number;
    trigger?: Element;
  }
) {
  const { delay = 0, duration = 0.8, y = 60, stagger = 0.15, trigger } = options || {};

  return gsap.fromTo(
    element,
    { opacity: 0, y },
    {
      opacity: 1,
      y: 0,
      duration,
      delay,
      stagger,
      scrollTrigger: {
        trigger: trigger || (Array.isArray(element) ? element[0] : element),
        start: "top 85%",
        toggleActions: "play none none reverse",
      },
    }
  );
}

export function staggerReveal(
  elements: Element[] | NodeListOf<Element>,
  options?: {
    stagger?: number;
    y?: number;
    trigger?: Element;
  }
) {
  const { stagger = 0.15, y = 50, trigger } = options || {};

  return gsap.fromTo(
    elements,
    { opacity: 0, y },
    {
      opacity: 1,
      y: 0,
      stagger,
      scrollTrigger: {
        trigger: trigger || elements[0],
        start: "top 85%",
        toggleActions: "play none none reverse",
      },
    }
  );
}

export function parallaxScroll(
  element: Element,
  options?: {
    speed?: number;
    trigger?: Element;
  }
) {
  const { speed = 0.5, trigger } = options || {};

  return gsap.to(element, {
    yPercent: -30 * speed,
    ease: "none",
    scrollTrigger: {
      trigger: trigger || element,
      start: "top bottom",
      end: "bottom top",
      scrub: true,
    },
  });
}

export function scaleReveal(
  element: Element,
  options?: {
    trigger?: Element;
  }
) {
  const { trigger } = options || {};

  return gsap.fromTo(
    element,
    { scale: 0.8, opacity: 0 },
    {
      scale: 1,
      opacity: 1,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: trigger || element,
        start: "top 85%",
        toggleActions: "play none none reverse",
      },
    }
  );
}

export { ScrollTrigger };
