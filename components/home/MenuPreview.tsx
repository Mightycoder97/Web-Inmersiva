"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap, ScrollTrigger } from "@/lib/animations/gsap-config";
import SectionTitle from "@/components/ui/SectionTitle";
import { menuCategories } from "@/lib/mock-data";

export default function MenuPreview() {
  const sectionRef = useRef<HTMLElement>(null);
  const itemsRef = useRef<HTMLDivElement>(null);

  const featuredItems = menuCategories
    .flatMap((cat) => cat.items.filter((item) => item.destacado))
    .slice(0, 4);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (itemsRef.current) {
        const items = itemsRef.current.querySelectorAll(".menu-item");
        gsap.fromTo(
          items,
          { opacity: 0, y: 40, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            stagger: 0.12,
            duration: 0.7,
            scrollTrigger: {
              trigger: itemsRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="section-padding relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[rgba(201,169,110,0.04)] blur-[150px] rounded-full" />

      <div className="container-custom relative z-10">
        <SectionTitle
          title="Nuestra Carta"
          subtitle="Cocina de autor con alma peruana, inspirada en las raíces y elevada con técnica contemporánea"
        />

        <div ref={itemsRef} className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {featuredItems.map((item) => (
            <div
              key={item.id}
              className="menu-item group flex gap-5 p-4 rounded-[var(--radius-lg)] bg-[var(--color-bg-card)] border border-[var(--glass-border)] hover:border-[rgba(201,169,110,0.2)] transition-all duration-300"
            >
              {/* Image */}
              <div className="relative w-24 h-24 md:w-32 md:h-32 flex-shrink-0 rounded-[var(--radius-md)] overflow-hidden">
                <Image
                  src={item.foto}
                  alt={item.nombre}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="128px"
                />
              </div>

              {/* Info */}
              <div className="flex flex-col justify-center flex-1 min-w-0">
                <h3 className="font-display text-lg font-bold uppercase tracking-tight group-hover:text-[var(--color-accent)] transition-colors duration-300">
                  {item.nombre}
                </h3>
                <p className="text-sm text-[var(--color-text-secondary)] mt-1 line-clamp-2">
                  {item.descripcion}
                </p>
                <p className="mt-3 font-display text-xl font-bold text-[var(--color-accent)]">
                  S/. {item.precio}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* View full menu */}
        <div className="text-center mt-12">
          <Link
            href="/menu"
            className="inline-flex items-center gap-2 text-sm uppercase tracking-widest text-[var(--color-accent)] hover:text-[var(--color-accent-light)] transition-colors duration-300 group"
          >
            Ver Carta Completa
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              className="transition-transform duration-300 group-hover:translate-x-1"
            >
              <path
                d="M3 8h10M9 4l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
