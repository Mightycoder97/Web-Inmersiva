"use client";

import { useRef, useEffect } from "react";
import { gsap } from "@/lib/animations/gsap-config";
import { useTranslations } from "next-intl";
import Button from "@/components/ui/Button";

export default function ReservationCTA() {
  const t = useTranslations();
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (contentRef.current) {
        gsap.fromTo(
          contentRef.current,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            scrollTrigger: {
              trigger: contentRef.current,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-24 md:py-32 overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, #0d0d0d 0%, #1a0a2e 40%, #2a1040 60%, #0d0d0d 100%)",
          }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-[rgba(201,169,110,0.06)] blur-[150px]" />
      </div>

      {/* Decorative lines */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[var(--color-accent)] to-transparent opacity-30" />
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[var(--color-accent)] to-transparent opacity-30" />

      <div className="container-custom relative z-10">
        <div ref={contentRef} className="text-center max-w-3xl mx-auto">
          <span className="text-[var(--color-accent)] text-xs uppercase tracking-[0.3em] font-semibold mb-4 block">
            {t("Reservation.label")}
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tight mb-6">
            {t("Reservation.title1")}{" "}
            <span className="text-gradient">{t("Reservation.title2")}</span>
          </h2>
          <p className="text-lg text-[var(--color-text-secondary)] mb-10 leading-relaxed">
            {t("Reservation.description")}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="primary" size="lg" href="/reservas">
              {t("Reservation.bookTable")}
            </Button>
            <Button
              variant="ghost"
              size="lg"
              href="https://wa.me/51999999999"
            >
              {t("Reservation.whatsapp")}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
