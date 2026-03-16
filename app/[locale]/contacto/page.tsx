"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Button from "@/components/ui/Button";
import SocialLinks from "@/components/shared/SocialLinks";

export default function ContactoPage() {
  const t = useTranslations();
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
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <div className="pt-24 md:pt-32 pb-20">
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="text-[var(--color-accent)] text-xs uppercase tracking-[0.3em] font-semibold mb-4 block">
            {t("ContactPage.label")}
          </span>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold uppercase tracking-tight">
            {t("ContactPage.pageTitle")}
          </h1>
          <p className="mt-4 text-lg text-[var(--color-text-secondary)] max-w-xl mx-auto">
            {t("ContactPage.pageSubtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <ScrollReveal>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[var(--color-text-muted)] mb-2">{t("ContactPage.nameLabel")}</label>
                  <input type="text" required value={formData.nombre} onChange={(e) => setFormData({ ...formData, nombre: e.target.value })} className="w-full px-4 py-3 bg-[var(--color-bg-card)] border border-[var(--glass-border)] rounded-[var(--radius-md)] text-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)] focus:outline-none focus:border-[var(--color-accent)] transition-colors" placeholder={t("ContactPage.namePlaceholder")} />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[var(--color-text-muted)] mb-2">{t("ContactPage.emailLabel")}</label>
                  <input type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full px-4 py-3 bg-[var(--color-bg-card)] border border-[var(--glass-border)] rounded-[var(--radius-md)] text-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)] focus:outline-none focus:border-[var(--color-accent)] transition-colors" placeholder="tu@email.com" />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[var(--color-text-muted)] mb-2">{t("ContactPage.phoneLabel")}</label>
                  <input type="tel" value={formData.telefono} onChange={(e) => setFormData({ ...formData, telefono: e.target.value })} className="w-full px-4 py-3 bg-[var(--color-bg-card)] border border-[var(--glass-border)] rounded-[var(--radius-md)] text-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)] focus:outline-none focus:border-[var(--color-accent)] transition-colors" placeholder="+51 999 999 999" />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[var(--color-text-muted)] mb-2">{t("ContactPage.subjectLabel")}</label>
                  <select value={formData.asunto} onChange={(e) => setFormData({ ...formData, asunto: e.target.value })} className="w-full px-4 py-3 bg-[var(--color-bg-card)] border border-[var(--glass-border)] rounded-[var(--radius-md)] text-[var(--color-text-primary)] focus:outline-none focus:border-[var(--color-accent)] transition-colors">
                    <option value="">{t("ContactPage.subjectSelect")}</option>
                    <option value="reserva">{t("ContactPage.subjectReservations")}</option>
                    <option value="eventos">{t("ContactPage.subjectPrivateEvents")}</option>
                    <option value="catering">{t("ContactPage.subjectCatering")}</option>
                    <option value="prensa">{t("ContactPage.subjectPress")}</option>
                    <option value="otro">{t("ContactPage.subjectOther")}</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-xs uppercase tracking-wider text-[var(--color-text-muted)] mb-2">{t("ContactPage.messageLabel")}</label>
                <textarea required rows={5} value={formData.mensaje} onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })} className="w-full px-4 py-3 bg-[var(--color-bg-card)] border border-[var(--glass-border)] rounded-[var(--radius-md)] text-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)] focus:outline-none focus:border-[var(--color-accent)] transition-colors resize-none" placeholder={t("ContactPage.messagePlaceholder")} />
              </div>
              <Button variant="primary" size="lg" type="submit">{t("ContactPage.sendBtn")}</Button>
              {submitted && (
                <p className="text-[var(--color-accent)] text-sm animate-pulse">{t("ContactPage.successMsg")}</p>
              )}
            </form>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="space-y-8">
              <div>
                <h3 className="text-xs uppercase tracking-widest text-[var(--color-text-muted)] mb-3">{t("ContactPage.addressLabel")}</h3>
                <p className="text-lg text-[var(--color-text-secondary)]">Av. La Mar 1234, Miraflores</p>
                <p className="text-lg text-[var(--color-text-secondary)]">Lima, Perú</p>
              </div>
              <div>
                <h3 className="text-xs uppercase tracking-widest text-[var(--color-text-muted)] mb-3">{t("ContactPage.phoneLabel")}</h3>
                <a href="tel:+51999999999" className="text-lg text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors">+51 999 999 999</a>
              </div>
              <div>
                <h3 className="text-xs uppercase tracking-widest text-[var(--color-text-muted)] mb-3">{t("ContactPage.emailLabel")}</h3>
                <a href="mailto:info@labohemia.pe" className="text-lg text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors">info@labohemia.pe</a>
              </div>
              <div>
                <h3 className="text-xs uppercase tracking-widest text-[var(--color-text-muted)] mb-3">{t("ContactPage.scheduleLabel")}</h3>
                <div className="space-y-1 text-[var(--color-text-secondary)]">
                  <p>{t("Footer.monThu")}</p>
                  <p>{t("Footer.friSat")}</p>
                  <p>{t("Footer.sun")}</p>
                </div>
              </div>
              <div>
                <h3 className="text-xs uppercase tracking-widest text-[var(--color-text-muted)] mb-3">{t("ContactPage.socialLabel")}</h3>
                <SocialLinks size="md" />
              </div>
              <a href="https://wa.me/51999999999" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 px-6 py-4 rounded-[var(--radius-lg)] bg-[#25D366] text-white font-semibold text-sm hover:bg-[#20BD5C] transition-colors">
                {t("ContactPage.whatsappBtn")}
              </a>
              <div className="rounded-[var(--radius-lg)] overflow-hidden border border-[var(--glass-border)] aspect-video">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.3768542847656!2d-77.03087498522487!3d-12.119615891418!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c82200000001%3A0x2bdedf5af8551dc9!2sMiraflores!5e0!3m2!1ses!2spe!4v1710000000000" width="100%" height="100%" style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Ubicación del restaurante" />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
}
