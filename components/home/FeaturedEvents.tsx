"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { gsap, ScrollTrigger } from "@/lib/animations/gsap-config";
import SectionTitle from "@/components/ui/SectionTitle";
import { mockEvents } from "@/lib/mock-data";

export default function FeaturedEvents() {
  const t = useTranslations();
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  const featured = mockEvents.filter((e) => e.destacado).slice(0, 3);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (cardsRef.current) {
        const cards = cardsRef.current.querySelectorAll(".event-card");
        gsap.fromTo(
          cards,
          { opacity: 0, y: 60 },
          {
            opacity: 1,
            y: 0,
            stagger: 0.15,
            duration: 0.8,
            scrollTrigger: {
              trigger: cardsRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return {
      day: date.getDate().toString().padStart(2, "0"),
      month: date
        .toLocaleDateString("es-PE", { month: "short" })
        .toUpperCase(),
      time: date.toLocaleTimeString("es-PE", {
        hour: "2-digit",
        minute: "2-digit",
      }).replace(/\u202F|\u00A0/g, ' '),
    };
  };

  return (
    <section
      ref={sectionRef}
      className="section-padding bg-[var(--color-bg-secondary)] relative overflow-hidden"
    >
      {/* Subtle glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[rgba(201,169,110,0.03)] blur-[120px] rounded-full" />

      <div className="container-custom relative z-10">
        <SectionTitle
          title={t("Events.title")}
          subtitle={t("Events.subtitle")}
        />

        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {featured.map((event) => {
            const date = formatDate(event.fecha);
            return (
              <Link
                href={`/eventos/${event.slug}`}
                key={event.id}
                className="event-card group relative aspect-[3/4] rounded-[var(--radius-lg)] overflow-hidden block"
              >
                {/* Image */}
                <Image
                  src={event.flyer}
                  alt={event.titulo}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.9)] via-[rgba(0,0,0,0.3)] to-transparent" />

                {/* Date badge */}
                <div className="absolute top-4 left-4 glass rounded-[var(--radius-md)] px-3 py-2 text-center">
                  <span className="block text-2xl font-bold font-display text-[var(--color-text-primary)]">
                    {date.day}
                  </span>
                  <span className="block text-[10px] uppercase tracking-wider text-[var(--color-accent)]">
                    {date.month}
                  </span>
                </div>

                {/* Event type badge */}
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 text-[10px] uppercase tracking-wider font-semibold rounded-full bg-[var(--color-accent)] text-[var(--color-bg-primary)]">
                    {event.tipoEvento}
                  </span>
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-display text-xl md:text-2xl font-bold uppercase tracking-tight mb-2 group-hover:text-[var(--color-accent)] transition-colors duration-300">
                    {event.titulo}
                  </h3>
                  <div className="flex items-center gap-3 text-sm text-[var(--color-text-secondary)]">
                    <span suppressHydrationWarning>{date.time}</span>
                    <span className="w-1 h-1 rounded-full bg-[var(--color-accent)]" />
                    <span>{event.precioEntrada}</span>
                  </div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {event.artistas.map((artist) => (
                      <span
                        key={artist}
                        className="text-xs text-[var(--color-text-muted)] border border-[var(--glass-border)] rounded-full px-2 py-0.5"
                      >
                        {artist}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* View all button */}
        <div className="text-center mt-12">
          <Link
            href="/eventos"
            className="inline-flex items-center gap-2 text-sm uppercase tracking-widest text-[var(--color-accent)] hover:text-[var(--color-accent-light)] transition-colors duration-300 group"
          >
            {t("Events.viewAll")}
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
