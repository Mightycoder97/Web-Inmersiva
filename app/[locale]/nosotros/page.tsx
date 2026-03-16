"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { gsap } from "@/lib/animations/gsap-config";
import { aboutContent } from "@/lib/mock-data";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function NosotrosPage() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (heroRef.current) {
        gsap.fromTo(
          heroRef.current.querySelectorAll(".reveal"),
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, stagger: 0.2, duration: 0.8 }
        );
      }
    });
    return () => ctx.revert();
  }, []);

  return (
    <div className="pt-24 md:pt-32 pb-20">
      <div className="container-custom">
        {/* Header */}
        <div ref={heroRef} className="text-center mb-16">
          <span className="reveal text-[var(--color-accent)] text-xs uppercase tracking-[0.3em] font-semibold mb-4 block">
            Nuestra Esencia
          </span>
          <h1 className="reveal font-display text-5xl md:text-7xl lg:text-8xl font-bold uppercase tracking-tight">
            Nosotros
          </h1>
          <p className="reveal mt-4 text-lg text-[var(--color-text-secondary)] max-w-2xl mx-auto">
            Más que un restaurante. Una experiencia donde los sentidos se despiertan.
          </p>
        </div>

        {/* Historia */}
        <ScrollReveal className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold uppercase tracking-tight mb-6">
                {aboutContent.historia.titulo}
              </h2>
              <p className="text-[var(--color-text-secondary)] leading-relaxed text-lg">
                {aboutContent.historia.texto}
              </p>
            </div>
            <div className="relative aspect-[4/3] rounded-[var(--radius-lg)] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80"
                alt="Interior del restaurante"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg-primary)] to-transparent opacity-30" />
            </div>
          </div>
        </ScrollReveal>

        {/* Concepto */}
        <ScrollReveal className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[4/3] rounded-[var(--radius-lg)] overflow-hidden order-2 lg:order-1">
              <Image
                src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800&q=80"
                alt="Evento musical"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg-primary)] to-transparent opacity-30" />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="font-display text-3xl md:text-4xl font-bold uppercase tracking-tight mb-6">
                {aboutContent.concepto.titulo}
              </h2>
              <p className="text-[var(--color-text-secondary)] leading-relaxed text-lg">
                {aboutContent.concepto.texto}
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* Equipo */}
        <ScrollReveal className="mb-12">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold uppercase tracking-tight mb-4">
              {aboutContent.equipo.titulo}
            </h2>
            <p className="text-[var(--color-text-secondary)]">
              Las personas detrás de la experiencia
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {aboutContent.equipo.miembros.map((member, i) => (
            <ScrollReveal key={member.nombre} delay={i * 0.15}>
              <div className="text-center group">
                <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden border-2 border-[var(--glass-border)] group-hover:border-[var(--color-accent)] transition-colors duration-300">
                  <Image
                    src={member.foto}
                    alt={member.nombre}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="192px"
                  />
                </div>
                <h3 className="font-display text-lg font-bold uppercase tracking-tight">
                  {member.nombre}
                </h3>
                <p className="text-[var(--color-accent)] text-sm uppercase tracking-wider mt-1">
                  {member.rol}
                </p>
                <p className="text-[var(--color-text-secondary)] text-sm mt-3 max-w-xs mx-auto">
                  {member.bio}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Values */}
        <ScrollReveal className="mt-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: "🔥",
                title: "Pasión",
                desc: "Cada plato refleja nuestra pasión por la cocina peruana y la innovación",
              },
              {
                icon: "🎵",
                title: "Música",
                desc: "Curamos las mejores experiencias sonoras para cada noche de la semana",
              },
              {
                icon: "✨",
                title: "Experiencia",
                desc: "Creamos momentos memorables que van más allá de una simple cena",
              },
            ].map((value) => (
              <div
                key={value.title}
                className="text-center p-8 rounded-[var(--radius-lg)] bg-[var(--color-bg-card)] border border-[var(--glass-border)]"
              >
                <span className="text-4xl mb-4 block">{value.icon}</span>
                <h3 className="font-display text-lg font-bold uppercase tracking-tight mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-[var(--color-text-secondary)]">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
