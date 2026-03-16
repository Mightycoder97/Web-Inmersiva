"use client";

import { gsap } from "./gsap-config";

export function splitTextReveal(
  element: HTMLElement,
  options?: {
    delay?: number;
    stagger?: number;
    duration?: number;
    trigger?: Element;
  }
) {
  const { delay = 0, stagger = 0.04, duration = 0.6, trigger } = options || {};

  const text = element.textContent || "";
  element.textContent = "";
  element.style.visibility = "visible";

  // Split into words, then each word into chars
  const words = text.split(" ");
  words.forEach((word, wordIndex) => {
    const wordSpan = document.createElement("span");
    wordSpan.style.display = "inline-block";
    wordSpan.style.whiteSpace = "nowrap";

    word.split("").forEach((char) => {
      const charSpan = document.createElement("span");
      charSpan.textContent = char;
      charSpan.style.display = "inline-block";
      charSpan.style.opacity = "0";
      charSpan.style.transform = "translateY(40px)";
      wordSpan.appendChild(charSpan);
    });

    element.appendChild(wordSpan);

    // Add space between words
    if (wordIndex < words.length - 1) {
      const space = document.createElement("span");
      space.innerHTML = "&nbsp;";
      space.style.display = "inline-block";
      element.appendChild(space);
    }
  });

  const chars = element.querySelectorAll("span > span");

  return gsap.to(chars, {
    opacity: 1,
    y: 0,
    duration,
    stagger,
    delay,
    ease: "power3.out",
    scrollTrigger: trigger
      ? {
          trigger,
          start: "top 80%",
          toggleActions: "play none none reverse",
        }
      : undefined,
  });
}

export function wordReveal(
  element: HTMLElement,
  options?: {
    delay?: number;
    stagger?: number;
    trigger?: Element;
  }
) {
  const { delay = 0, stagger = 0.08, trigger } = options || {};

  const text = element.textContent || "";
  element.textContent = "";
  element.style.visibility = "visible";

  const words = text.split(" ");
  words.forEach((word, i) => {
    const span = document.createElement("span");
    span.textContent = word;
    span.style.display = "inline-block";
    span.style.opacity = "0";
    span.style.transform = "translateY(30px)";
    element.appendChild(span);

    if (i < words.length - 1) {
      const space = document.createElement("span");
      space.innerHTML = "&nbsp;";
      space.style.display = "inline-block";
      element.appendChild(space);
    }
  });

  const wordSpans = element.querySelectorAll(":scope > span:not(:last-child)");

  return gsap.to(Array.from(element.children).filter((_, i) => i % 2 === 0), {
    opacity: 1,
    y: 0,
    stagger,
    delay,
    ease: "power3.out",
    scrollTrigger: trigger
      ? {
          trigger,
          start: "top 80%",
          toggleActions: "play none none reverse",
        }
      : undefined,
  });
}
