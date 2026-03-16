"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Link } from "@/routing";

export default function StickyDateWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations("Dates");

  return (
    <div className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-[100] flex flex-col items-end">
      {/* Expanded Widget */}
      <motion.div
        initial={false}
        animate={{
          opacity: isOpen ? 1 : 0,
          y: isOpen ? 0 : 20,
          pointerEvents: isOpen ? "auto" : "none",
        }}
        transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="mb-4 w-64 bg-black/90 border border-[#333] backdrop-blur-xl rounded-2xl p-4 shadow-2xl"
      >
        <div className="flex justify-between items-center mb-4">
          <span className="text-xs uppercase tracking-widest text-[var(--color-text-secondary)] font-bold">{t("selectDate")}</span>
          <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white transition-colors">
            ✕
          </button>
        </div>
        <div className="flex flex-col gap-2">
          {["Viernes 20 Oct", "Sábado 21 Oct", "Jueves 26 Oct"].map((date, idx) => (
            <button
              key={idx}
              className="text-left w-full py-2 px-3 text-sm font-medium text-white hover:bg-white/10 rounded-lg transition-colors border border-transparent hover:border-white/20"
            >
              {date}
            </button>
          ))}
        </div>
        <div className="mt-4 pt-4 border-t border-white/10">
          <Link href="/eventos" className="block text-center text-xs uppercase tracking-widest text-[#00D4FF] hover:text-white transition-colors font-bold">
            {t("viewCalendar")}
          </Link>
        </div>
      </motion.div>

      {/* Floating Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full font-bold uppercase tracking-widest text-sm shadow-[0_4px_20px_rgba(255,255,255,0.2)] hover:shadow-[0_4px_30px_rgba(255,255,255,0.4)] transition-shadow"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
          <line x1="16" y1="2" x2="16" y2="6"></line>
          <line x1="8" y1="2" x2="8" y2="6"></line>
          <line x1="3" y1="10" x2="21" y2="10"></line>
        </svg>
        {t("fechas")}
      </motion.button>
    </div>
  );
}
