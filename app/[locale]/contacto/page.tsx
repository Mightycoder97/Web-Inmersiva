"use client";

import { useState } from "react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Button from "@/components/ui/Button";
import SocialLinks from "@/components/shared/SocialLinks";

export default function ContactoPage() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    asunto: "",
    mensaje: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Connect to Supabase
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <div className="pt-24 md:pt-32 pb-20">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[var(--color-accent)] text-xs uppercase tracking-[0.3em] font-semibold mb-4 block">
            Contáctanos
          </span>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold uppercase tracking-tight">
            Contacto
          </h1>
          <p className="mt-4 text-lg text-[var(--color-text-secondary)] max-w-xl mx-auto">
            Estamos aquí para ti. Escríbenos y te responderemos pronto.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Form */}
          <ScrollReveal>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[var(--color-text-muted)] mb-2">
                    Nombre
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.nombre}
                    onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                    className="w-full px-4 py-3 bg-[var(--color-bg-card)] border border-[var(--glass-border)] rounded-[var(--radius-md)] text-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)] focus:outline-none focus:border-[var(--color-accent)] transition-colors"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[var(--color-text-muted)] mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-[var(--color-bg-card)] border border-[var(--glass-border)] rounded-[var(--radius-md)] text-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)] focus:outline-none focus:border-[var(--color-accent)] transition-colors"
                    placeholder="tu@email.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[var(--color-text-muted)] mb-2">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    value={formData.telefono}
                    onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                    className="w-full px-4 py-3 bg-[var(--color-bg-card)] border border-[var(--glass-border)] rounded-[var(--radius-md)] text-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)] focus:outline-none focus:border-[var(--color-accent)] transition-colors"
                    placeholder="+51 999 999 999"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[var(--color-text-muted)] mb-2">
                    Asunto
                  </label>
                  <select
                    value={formData.asunto}
                    onChange={(e) => setFormData({ ...formData, asunto: e.target.value })}
                    className="w-full px-4 py-3 bg-[var(--color-bg-card)] border border-[var(--glass-border)] rounded-[var(--radius-md)] text-[var(--color-text-primary)] focus:outline-none focus:border-[var(--color-accent)] transition-colors"
                  >
                    <option value="">Selecciona...</option>
                    <option value="reserva">Reservaciones</option>
                    <option value="eventos">Eventos Privados</option>
                    <option value="catering">Catering</option>
                    <option value="prensa">Prensa</option>
                    <option value="otro">Otro</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-[var(--color-text-muted)] mb-2">
                  Mensaje
                </label>
                <textarea
                  required
                  rows={5}
                  value={formData.mensaje}
                  onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                  className="w-full px-4 py-3 bg-[var(--color-bg-card)] border border-[var(--glass-border)] rounded-[var(--radius-md)] text-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)] focus:outline-none focus:border-[var(--color-accent)] transition-colors resize-none"
                  placeholder="Cuéntanos cómo podemos ayudarte..."
                />
              </div>

              <Button variant="primary" size="lg" type="submit">
                Enviar Mensaje
              </Button>

              {submitted && (
                <p className="text-[var(--color-accent)] text-sm animate-pulse">
                  ✓ Mensaje enviado correctamente. Te contactaremos pronto.
                </p>
              )}
            </form>
          </ScrollReveal>

          {/* Info */}
          <ScrollReveal delay={0.2}>
            <div className="space-y-8">
              {/* Address */}
              <div>
                <h3 className="text-xs uppercase tracking-widest text-[var(--color-text-muted)] mb-3">
                  Dirección
                </h3>
                <p className="text-lg text-[var(--color-text-secondary)]">
                  Av. La Mar 1234, Miraflores
                </p>
                <p className="text-lg text-[var(--color-text-secondary)]">
                  Lima, Perú
                </p>
              </div>

              {/* Phone */}
              <div>
                <h3 className="text-xs uppercase tracking-widest text-[var(--color-text-muted)] mb-3">
                  Teléfono
                </h3>
                <a
                  href="tel:+51999999999"
                  className="text-lg text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors"
                >
                  +51 999 999 999
                </a>
              </div>

              {/* Email */}
              <div>
                <h3 className="text-xs uppercase tracking-widest text-[var(--color-text-muted)] mb-3">
                  Email
                </h3>
                <a
                  href="mailto:info@labohemia.pe"
                  className="text-lg text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors"
                >
                  info@labohemia.pe
                </a>
              </div>

              {/* Schedule */}
              <div>
                <h3 className="text-xs uppercase tracking-widest text-[var(--color-text-muted)] mb-3">
                  Horarios
                </h3>
                <div className="space-y-1 text-[var(--color-text-secondary)]">
                  <p>Lun – Jue: 12:00 – 23:00</p>
                  <p>Vie – Sáb: 12:00 – 02:00</p>
                  <p>Dom: 12:00 – 22:00</p>
                </div>
              </div>

              {/* Social */}
              <div>
                <h3 className="text-xs uppercase tracking-widest text-[var(--color-text-muted)] mb-3">
                  Redes Sociales
                </h3>
                <SocialLinks size="md" />
              </div>

              {/* WhatsApp */}
              <a
                href="https://wa.me/51999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-6 py-4 rounded-[var(--radius-lg)] bg-[#25D366] text-white font-semibold text-sm hover:bg-[#20BD5C] transition-colors"
              >
                💬 Escríbenos por WhatsApp
              </a>

              {/* Map */}
              <div className="rounded-[var(--radius-lg)] overflow-hidden border border-[var(--glass-border)] aspect-video">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.3768542847656!2d-77.03087498522487!3d-12.119615891418!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c82200000001%3A0x2bdedf5af8551dc9!2sMiraflores!5e0!3m2!1ses!2spe!4v1710000000000"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación del restaurante"
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
}
