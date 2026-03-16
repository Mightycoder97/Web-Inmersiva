"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { gsap } from "@/lib/animations/gsap-config";
import Button from "@/components/ui/Button";

export default function HeroSection() {
  const t = useTranslations();
  const containerRef = useRef<HTMLElement>(null);
  const h1Ref = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const postersRef = useRef<HTMLDivElement[]>([]);
  const textContainerRef = useRef<HTMLDivElement>(null);
  const carouselContainerRef = useRef<HTMLDivElement>(null);
  const carouselTitleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Initial Entrance Animation (Only Subtitle and CTA now)
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      tl.fromTo(
        subtitleRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1, delay: 0.2 }
      )
      .fromTo(
        ctaRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1 },
        "-=0.6"
      );

      // Set initial states for posters to look like 3D trapezoids *below* the title
      // We use rotationX backwards combined with perspective to pinch the top.
      postersRef.current.forEach((poster, i) => {
        gsap.set(poster, {
          y: "30vh", // Start lower so it doesn't cover the title
          rotationX: -45, // Tilted back to create the trapezoid effect
          rotationZ: (i - 1) * 5, // Slight fan out
          scale: 0.65, // Start smaller
          z: -200, // Push backward in 3D space
          transformPerspective: 800,
          opacity: 0, 
        });
      });

      // Fade in the trapezoid posters at the start
      tl.to(postersRef.current, { opacity: 0.8, duration: 1, stagger: 0.1 }, "-=0.5");

      // 2. Scroll Animation (Scrubbing from Trapezoid -> Flat Carousel)
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=150%", // Scroll distance to complete animation
          scrub: 1,
          pin: true, // Pin the container while scrubbing the transformation
        }
      });

      // Background text fades out partially and moves slightly up to make room
      scrollTl.to(textContainerRef.current, {
        opacity: 0.25, // Keep it somewhat visible
        scale: 0.95,
        y: "-8vh", // Move it up just a bit to clear space for the posters
        ease: "power2.inOut"
      }, 0.5); // Starts halfway through the scrub

      // Reveal words in the H1 as user scrolls
      const words = h1Ref.current?.querySelectorAll('.word');
      if (words) {
        scrollTl.to(words, {
          opacity: 1,
          y: 0,
          stagger: 0.05, // Faster stagger so text reveals quicker
          duration: 0.3, // Shorter duration
          ease: "power2.out"
        }, 0);
      }

      // Reveal the carousel title
      scrollTl.fromTo(carouselTitleRef.current, 
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, ease: "power2.out" },
      0.4);

      // Transform posters from scattered trapezoids to a flat rectangle carousel
      postersRef.current.forEach((poster, i) => {
        scrollTl.to(poster, {
          y: "0vh",
          x: "0vw",
          rotationX: 0,
          rotationZ: 0,
          z: 0,
          scale: 1,
          opacity: 1,
          duration: 0.8, // Slightly longer duration so posters finish after text
          ease: "power2.inOut"
        }, 0);
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  const addToPostersRef = (el: HTMLDivElement | null) => {
    if (el && !postersRef.current.includes(el)) {
      postersRef.current.push(el);
    }
  };

  const renderWords = (text: string) => {
    return text.split(" ").map((word, i, arr) => (
      <span key={i} className="inline-block">
        <span className="word opacity-0 inline-block translate-y-[50px]">{word}</span>
        {i < arr.length - 1 && <span>&nbsp;</span>}
      </span>
    ));
  };

  return (
    <section
      ref={containerRef}
      className="relative h-screen w-full bg-[#0a0a0a] overflow-hidden"
    >
      {/* Background layer */}
      <div
        className="absolute inset-0 z-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Hero Text Content (Behind posters) */}
      <div ref={textContainerRef} className="absolute inset-x-0 top-[8vh] md:top-[12vh] z-10 flex flex-col items-center justify-start px-4 pointer-events-none mix-blend-difference">
        <div className="mb-4 flex items-center justify-center gap-3">
          <span className="h-[1px] w-8 md:w-16 bg-white/70" />
          <span className="text-white/80 text-[10px] md:text-sm uppercase tracking-[0.4em] font-semibold">
            {t("Hero.city")}
          </span>
          <span className="h-[1px] w-8 md:w-16 bg-white/70" />
        </div>

        <h1 ref={h1Ref} className="font-display text-[12vw] leading-[0.8] font-black uppercase tracking-tighter text-[#eaeaea] whitespace-nowrap flex flex-col items-center">
          <span className="block w-full text-center">{renderWords(t("Hero.welcome"))}</span>
          <span className="block w-full text-center text-[#999]">{renderWords(t("Hero.brand"))}</span>
        </h1>
        
        <p
          ref={subtitleRef}
          className="mt-6 md:mt-8 text-xs md:text-md text-gray-400 max-w-2xl text-center uppercase tracking-[0.5em] font-bold"
        >
          {t("Hero.subtitle")}
        </p>

        <div ref={ctaRef} className="mt-8 relative z-20 pointer-events-auto">
          <Button variant="primary" size="md" href="/reservas" className="bg-white text-black hover:bg-gray-200 uppercase tracking-widest font-bold px-8">
            {t("Hero.reserveBtn")}
          </Button>
        </div>
      </div>

      {/* Carousel Grid Layer */}
      <div ref={carouselContainerRef} className="absolute inset-x-0 bottom-[4vh] md:bottom-[6vh] z-30 w-full max-w-[85rem] mx-auto px-4 md:px-8">
        
        <h2 ref={carouselTitleRef} className="text-white text-lg md:text-2xl font-display uppercase tracking-widest font-black text-center mb-6 opacity-0">
          Residencias y Eventos
        </h2>

        <div className="flex flex-col md:flex-row items-center md:items-end justify-center gap-4 md:gap-8 perspective-[1000px] h-full">
          
          {/* Poster 1 */}
          <div
            ref={addToPostersRef}
            className="relative w-[65%] md:w-[26%] aspect-[2.5/3.5] bg-[#111] overflow-hidden group shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
            style={{ transformStyle: "preserve-3d" }}
          >
            <Image src="https://images.unsplash.com/photo-1571266028243-e4733b0f0bb0?w=800&q=80" alt="DJ Event" fill className="object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700 grayscale group-hover:grayscale-0" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent z-10" />
            
            <div className="absolute bottom-6 left-6 md:left-8 z-20 w-full pr-8">
              <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.3em] text-[#888] mb-2 block font-mono">Residencia</span>
              <h3 className="text-2xl md:text-2xl lg:text-3xl font-display font-bold text-white uppercase tracking-tighter leading-[0.9] group-hover:text-white transition-colors">
                John Summit<br/>Presents<br/>Experts Only
              </h3>
              <div className="mt-4 flex justify-between items-center text-[9px] font-mono tracking-widest text-[#666] uppercase">
                <span>Lunes</span>
                <span>Desde 23:30</span>
              </div>
            </div>
          </div>

          {/* Poster 2: Center */}
          <div
            ref={addToPostersRef}
            className="relative w-[70%] md:w-[28%] aspect-[2.5/3.5] bg-[#111] overflow-hidden group shadow-[0_30px_60px_rgba(0,0,0,0.9)] z-30"
            style={{ transformStyle: "preserve-3d" }}
          >
            <Image src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&q=80" alt="Special Event" fill className="object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent z-10" />
            
            <div className="absolute bottom-6 left-6 md:left-8 z-20 w-full pr-8">
              <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.3em] text-[#888] mb-2 block font-mono">Residencia</span>
              <h3 className="text-3xl md:text-4xl lg:text-4xl font-display font-black text-white uppercase tracking-tighter leading-[0.9] group-hover:text-white transition-colors">
                Tiësto
              </h3>
              <div className="mt-6 flex justify-between items-center text-[9px] font-mono tracking-widest text-[#666] uppercase">
                <span>Viernes</span>
                <span>Desde 23:30</span>
              </div>
            </div>
          </div>

          {/* Poster 3 */}
          <div
            ref={addToPostersRef}
            className="relative w-[65%] md:w-[26%] aspect-[2.5/3.5] bg-[#111] overflow-hidden group shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
            style={{ transformStyle: "preserve-3d" }}
          >
            <Image src="https://images.unsplash.com/photo-1506157786151-b8491531f063?w=800&q=80" alt="Live Band" fill className="object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700 grayscale group-hover:grayscale-0" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent z-10" />
            
            <div className="absolute bottom-6 left-6 md:left-8 z-20 w-full pr-8">
              <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.3em] text-[#888] mb-2 block font-mono">Residencia</span>
              <h3 className="text-2xl md:text-2xl lg:text-3xl font-display font-bold text-white uppercase tracking-tighter leading-[0.9] group-hover:text-white transition-colors">
                Armin Van Buuren<br/>A State of<br/>Trance
              </h3>
              <div className="mt-4 flex justify-between items-center text-[9px] font-mono tracking-widest text-[#666] uppercase">
                <span>Martes</span>
                <span>Desde 23:30</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
