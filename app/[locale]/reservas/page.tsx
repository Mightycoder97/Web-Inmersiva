"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Button from "@/components/ui/Button";

export default function ReservasPage() {
  const t = useTranslations();
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    fecha: "",
    hora: "",
    personas: "2",
    ocasion: "",
    notas: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="pt-24 md:pt-32 pb-20 min-h-screen flex items-center justify-center">
        <div className="text-center max-w-md mx-auto px-4">
          <div className="w-20 h-20 rounded-full bg-[var(--color-accent)] flex items-center justify-center mx-auto mb-6">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <path d="M8 16l6 6 10-12" stroke="var(--color-bg-primary)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <h2 className="font-display text-3xl font-bold uppercase tracking-tight mb-4">
            {t("ReservasPage.confirmedTitle")}
          </h2>
          <p className="text-[var(--color-text-secondary)] mb-8">
            {t("ReservasPage.confirmedMsg")}
          </p>
          <Button variant="secondary" onClick={() => setSubmitted(false)}>
            {t("ReservasPage.newReservation")}
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 md:pt-32 pb-20">
      <div className="container-custom max-w-3xl">
        <div className="text-center mb-12">
          <span className="text-[var(--color-accent)] text-xs uppercase tracking-[0.3em] font-semibold mb-4 block">
            {t("ReservasPage.label")}
          </span>
          <h1 className="font-display text-5xl md:text-7xl font-bold uppercase tracking-tight">
            {t("ReservasPage.pageTitle")}
          </h1>
          <p className="mt-4 text-lg text-[var(--color-text-secondary)] max-w-xl mx-auto">
            {t("ReservasPage.pageSubtitle")}
          </p>
        </div>

        <ScrollReveal>
          <form onSubmit={handleSubmit} className="space-y-6 p-8 rounded-[var(--radius-xl)] bg-[var(--color-bg-card)] border border-[var(--glass-border)]">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs uppercase tracking-wider text-[var(--color-text-muted)] mb-2">{t("ReservasPage.fullName")}</label>
                <input type="text" required value={formData.nombre} onChange={(e) => setFormData({ ...formData, nombre: e.target.value })} className="w-full px-4 py-3 bg-[var(--color-bg-secondary)] border border-[var(--glass-border)] rounded-[var(--radius-md)] text-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)] focus:outline-none focus:border-[var(--color-accent)] transition-colors" placeholder={t("ReservasPage.namePlaceholder")} />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-wider text-[var(--color-text-muted)] mb-2">{t("ReservasPage.emailLabel")}</label>
                <input type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full px-4 py-3 bg-[var(--color-bg-secondary)] border border-[var(--glass-border)] rounded-[var(--radius-md)] text-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)] focus:outline-none focus:border-[var(--color-accent)] transition-colors" placeholder="tu@email.com" />
              </div>
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider text-[var(--color-text-muted)] mb-2">{t("ReservasPage.phoneLabel")}</label>
              <input type="tel" required value={formData.telefono} onChange={(e) => setFormData({ ...formData, telefono: e.target.value })} className="w-full px-4 py-3 bg-[var(--color-bg-secondary)] border border-[var(--glass-border)] rounded-[var(--radius-md)] text-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)] focus:outline-none focus:border-[var(--color-accent)] transition-colors" placeholder="+51 999 999 999" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div>
                <label className="block text-xs uppercase tracking-wider text-[var(--color-text-muted)] mb-2">{t("ReservasPage.dateLabel")}</label>
                <input type="date" required value={formData.fecha} onChange={(e) => setFormData({ ...formData, fecha: e.target.value })} className="w-full px-4 py-3 bg-[var(--color-bg-secondary)] border border-[var(--glass-border)] rounded-[var(--radius-md)] text-[var(--color-text-primary)] focus:outline-none focus:border-[var(--color-accent)] transition-colors" />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-wider text-[var(--color-text-muted)] mb-2">{t("ReservasPage.timeLabel")}</label>
                <select required value={formData.hora} onChange={(e) => setFormData({ ...formData, hora: e.target.value })} className="w-full px-4 py-3 bg-[var(--color-bg-secondary)] border border-[var(--glass-border)] rounded-[var(--radius-md)] text-[var(--color-text-primary)] focus:outline-none focus:border-[var(--color-accent)] transition-colors">
                  <option value="">{t("ReservasPage.timeSelect")}</option>
                  {["12:00", "12:30", "13:00", "13:30", "14:00", "14:30", "19:00", "19:30", "20:00", "20:30", "21:00", "21:30", "22:00", "22:30", "23:00"].map((time) => (
                    <option key={time} value={time}>{time}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-xs uppercase tracking-wider text-[var(--color-text-muted)] mb-2">{t("ReservasPage.guestsLabel")}</label>
                <select required value={formData.personas} onChange={(e) => setFormData({ ...formData, personas: e.target.value })} className="w-full px-4 py-3 bg-[var(--color-bg-secondary)] border border-[var(--glass-border)] rounded-[var(--radius-md)] text-[var(--color-text-primary)] focus:outline-none focus:border-[var(--color-accent)] transition-colors">
                  {[1, 2, 3, 4, 5, 6, 7, 8, "9+"].map((n) => (
                    <option key={n} value={n}>{n} {n === 1 ? t("ReservasPage.person") : t("ReservasPage.people")}</option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider text-[var(--color-text-muted)] mb-2">{t("ReservasPage.occasionLabel")}</label>
              <select value={formData.ocasion} onChange={(e) => setFormData({ ...formData, ocasion: e.target.value })} className="w-full px-4 py-3 bg-[var(--color-bg-secondary)] border border-[var(--glass-border)] rounded-[var(--radius-md)] text-[var(--color-text-primary)] focus:outline-none focus:border-[var(--color-accent)] transition-colors">
                <option value="">{t("ReservasPage.occasionSelect")}</option>
                <option value="cumpleanos">{t("ReservasPage.occasionBirthday")}</option>
                <option value="aniversario">{t("ReservasPage.occasionAnniversary")}</option>
                <option value="corporativo">{t("ReservasPage.occasionCorporate")}</option>
                <option value="romantica">{t("ReservasPage.occasionRomantic")}</option>
                <option value="amigos">{t("ReservasPage.occasionFriends")}</option>
                <option value="otro">{t("ReservasPage.occasionOther")}</option>
              </select>
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider text-[var(--color-text-muted)] mb-2">{t("ReservasPage.notesLabel")}</label>
              <textarea rows={3} value={formData.notas} onChange={(e) => setFormData({ ...formData, notas: e.target.value })} className="w-full px-4 py-3 bg-[var(--color-bg-secondary)] border border-[var(--glass-border)] rounded-[var(--radius-md)] text-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)] focus:outline-none focus:border-[var(--color-accent)] transition-colors resize-none" placeholder={t("ReservasPage.notesPlaceholder")} />
            </div>

            <Button variant="primary" size="lg" type="submit" className="w-full">
              {t("ReservasPage.confirmBtn")}
            </Button>

            <p className="text-center text-xs text-[var(--color-text-muted)]">
              {t("ReservasPage.altContact")}{" "}
              <a href="https://wa.me/51999999999" className="text-[var(--color-accent)] hover:underline">WhatsApp</a>{" "}
              {t("ReservasPage.altCall")}{" "}
              <a href="tel:+51999999999" className="text-[var(--color-accent)] hover:underline">+51 999 999 999</a>
            </p>
          </form>
        </ScrollReveal>
      </div>
    </div>
  );
}
