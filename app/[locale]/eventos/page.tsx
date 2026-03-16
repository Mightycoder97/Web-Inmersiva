"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "@/lib/animations/gsap-config";
import { mockEvents } from "@/lib/mock-data";
import type { Metadata } from "next";

const months = [
  "Todos",
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];

const eventTypes = ["Todos", "DJ Night", "Banda en Vivo", "Noche Temática", "Brunch Musical"];

export default function EventosPage() {
  const [selectedMonth, setSelectedMonth] = useState("Todos");
  const [selectedType, setSelectedType] = useState("Todos");
  const gridRef = useRef<HTMLDivElement>(null);

  const filtered = mockEvents.filter((event) => {
    const eventDate = new Date(event.fecha);
    const monthMatch =
      selectedMonth === "Todos" ||
      months[eventDate.getMonth() + 1] === selectedMonth;
    const typeMatch =
      selectedType === "Todos" || event.tipoEvento === selectedType;
    return monthMatch && typeMatch;
  });

  useEffect(() => {
    if (gridRef.current) {
      const cards = gridRef.current.querySelectorAll(".event-card");
      gsap.fromTo(
        cards,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, stagger: 0.1, duration: 0.6, ease: "power3.out" }
      );
    }
  }, [selectedMonth, selectedType]);

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return {
      day: date.getDate().toString().padStart(2, "0"),
      month: date
        .toLocaleDateString("es-PE", { month: "short" })
        .toUpperCase(),
      weekday: date.toLocaleDateString("es-PE", { weekday: "long" }),
      time: date.toLocaleTimeString("es-PE", {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };
  };

  return (
    <div className="pt-24 md:pt-32 pb-20">
      {/* Hero */}
      <div className="container-custom mb-12">
        <div className="text-center mb-10">
          <span className="text-[var(--color-accent)] text-xs uppercase tracking-[0.3em] font-semibold mb-4 block">
            Calendario
          </span>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold uppercase tracking-tight">
            Eventos
          </h1>
          <p className="mt-4 text-lg text-[var(--color-text-secondary)] max-w-xl mx-auto">
            Descubre las noches más exclusivas de Lima
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-col gap-4 mb-8">
          {/* Month filters */}
          <div className="flex flex-wrap justify-center gap-2">
            {months.slice(0, 7).map((month) => (
              <button
                key={month}
                onClick={() => setSelectedMonth(month)}
                className={`px-4 py-2 text-xs uppercase tracking-wider rounded-full border transition-all duration-300 cursor-pointer ${
                  selectedMonth === month
                    ? "bg-[var(--color-text-primary)] text-[var(--color-bg-primary)] border-[var(--color-text-primary)]"
                    : "border-[var(--glass-border)] text-[var(--color-text-secondary)] hover:border-[var(--color-text-primary)] hover:text-[var(--color-text-primary)]"
                }`}
              >
                {month}
              </button>
            ))}
          </div>

          {/* Type filters */}
          <div className="flex flex-wrap justify-center gap-2">
            {eventTypes.map((type) => (
              <button
                key={type}
                onClick={() => setSelectedType(type)}
                className={`px-4 py-2 text-xs uppercase tracking-wider rounded-full border transition-all duration-300 cursor-pointer ${
                  selectedType === type
                    ? "bg-[var(--color-accent)] text-[var(--color-bg-primary)] border-[var(--color-accent)]"
                    : "border-[var(--glass-border)] text-[var(--color-text-secondary)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Events Grid */}
      <div className="container-custom">
        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filtered.map((event) => {
            const date = formatDate(event.fecha);
            return (
              <Link
                href={`/eventos/${event.slug}`}
                key={event.id}
                className="event-card group relative aspect-[3/4] rounded-[var(--radius-lg)] overflow-hidden block"
              >
                <Image
                  src={event.flyer}
                  alt={event.titulo}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.9)] via-[rgba(0,0,0,0.3)] to-transparent" />

                {/* Date */}
                <div className="absolute top-4 left-4 glass rounded-[var(--radius-md)] px-3 py-2 text-center">
                  <span className="block text-2xl font-bold font-display">
                    {date.day}
                  </span>
                  <span className="block text-[10px] uppercase tracking-wider text-[var(--color-accent)]">
                    {date.month}
                  </span>
                </div>

                {/* Type */}
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 text-[10px] uppercase tracking-wider font-semibold rounded-full bg-[var(--color-accent)] text-[var(--color-bg-primary)]">
                    {event.tipoEvento}
                  </span>
                </div>

                {/* Info */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-display text-xl font-bold uppercase tracking-tight mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                    {event.titulo}
                  </h3>
                  <div className="flex items-center gap-3 text-sm text-[var(--color-text-secondary)]">
                    <span>{date.weekday}</span>
                    <span className="w-1 h-1 rounded-full bg-[var(--color-accent)]" />
                    <span>{date.time}</span>
                    <span className="w-1 h-1 rounded-full bg-[var(--color-accent)]" />
                    <span>{event.precioEntrada}</span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20">
            <p className="text-[var(--color-text-muted)] text-lg">
              No hay eventos programados para esta selección.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
