import Image from "next/image";
import Link from "next/link";
import { mockEvents } from "@/lib/mock-data";
import { notFound } from "next/navigation";
import Button from "@/components/ui/Button";

interface EventPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return mockEvents.map((event) => ({ slug: event.slug }));
}

export default async function EventDetailPage({ params }: EventPageProps) {
  const { slug } = await params;
  const event = mockEvents.find((e) => e.slug === slug);

  if (!event) {
    notFound();
  }

  const date = new Date(event.fecha);
  const formattedDate = date.toLocaleDateString("es-PE", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const formattedTime = date.toLocaleTimeString("es-PE", {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className="pt-20">
      {/* Hero Image */}
      <div className="relative h-[60vh] md:h-[70vh] overflow-hidden">
        <Image
          src={event.flyer}
          alt={event.titulo}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg-primary)] via-[rgba(10,10,10,0.5)] to-transparent" />

        {/* Back button */}
        <Link
          href="/eventos"
          className="absolute top-24 left-4 md:left-8 z-10 glass rounded-full px-4 py-2 flex items-center gap-2 text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M10 12L6 8l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Volver
        </Link>
      </div>

      {/* Content */}
      <div className="container-custom -mt-32 relative z-10 pb-20">
        <div className="max-w-3xl">
          {/* Badge */}
          <span className="inline-block px-4 py-1.5 text-xs uppercase tracking-wider font-semibold rounded-full bg-[var(--color-accent)] text-[var(--color-bg-primary)] mb-6">
            {event.tipoEvento}
          </span>

          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold uppercase tracking-tight mb-6">
            {event.titulo}
          </h1>

          {/* Date & Time */}
          <div className="flex flex-wrap items-center gap-4 mb-8 text-[var(--color-text-secondary)]">
            <div className="flex items-center gap-2">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <rect x="2" y="3" width="14" height="13" rx="2" stroke="currentColor" strokeWidth="1.5" />
                <path d="M2 7h14M6 1v4M12 1v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
              <span className="capitalize">{formattedDate}</span>
            </div>
            <div className="flex items-center gap-2">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <circle cx="9" cy="9" r="7" stroke="currentColor" strokeWidth="1.5" />
                <path d="M9 5v4l3 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
              <span>{formattedTime}</span>
            </div>
            <div className="flex items-center gap-2">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M9 2l2 4 4.5.5-3.3 3.2.8 4.3L9 12l-4 2 .8-4.3L2.5 6.5 7 6l2-4z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
              </svg>
              <span>{event.precioEntrada}</span>
            </div>
          </div>

          {/* Description */}
          <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed mb-10">
            {event.descripcion}
          </p>

          {/* Artists */}
          <div className="mb-10">
            <h3 className="text-xs uppercase tracking-widest text-[var(--color-text-muted)] mb-4">
              Line Up
            </h3>
            <div className="flex flex-wrap gap-3">
              {event.artistas.map((artist) => (
                <span
                  key={artist}
                  className="px-4 py-2 glass rounded-full text-sm font-medium"
                >
                  {artist}
                </span>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="primary" size="lg" href="/reservas">
              Reservar Mesa
            </Button>
            <Button
              variant="secondary"
              size="lg"
              href="https://wa.me/51999999999"
            >
              Consultar por WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
