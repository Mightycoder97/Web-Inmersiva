"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { gsap } from "@/lib/animations/gsap-config";
import { menuCategories } from "@/lib/mock-data";

export default function MenuPage() {
  const t = useTranslations();
  const [activeCategory, setActiveCategory] = useState(menuCategories[0].id);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (gridRef.current) {
      const items = gridRef.current.querySelectorAll(".menu-item");
      gsap.fromTo(
        items,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, stagger: 0.1, duration: 0.5, ease: "power3.out" }
      );
    }
  }, [activeCategory]);

  const currentCategory = menuCategories.find((c) => c.id === activeCategory);

  return (
    <div className="pt-24 md:pt-32 pb-20">
      <div className="container-custom mb-12">
        <div className="text-center mb-10">
          <span className="text-[var(--color-accent)] text-xs uppercase tracking-[0.3em] font-semibold mb-4 block">
            {t("MenuPage.label")}
          </span>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold uppercase tracking-tight">
            {t("MenuPage.pageTitle")}
          </h1>
          <p className="mt-4 text-lg text-[var(--color-text-secondary)] max-w-xl mx-auto">
            {t("MenuPage.pageSubtitle")}
          </p>
        </div>

        <div className="flex justify-center gap-2 md:gap-4 flex-wrap mb-12">
          {menuCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 text-xs uppercase tracking-wider rounded-full border transition-all duration-300 cursor-pointer ${
                activeCategory === cat.id
                  ? "bg-[var(--color-accent)] text-[var(--color-bg-primary)] border-[var(--color-accent)]"
                  : "border-[var(--glass-border)] text-[var(--color-text-secondary)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
              }`}
            >
              {t(`MenuData.cat_${cat.id}`)}
            </button>
          ))}
        </div>
      </div>

      <div className="container-custom">
        {currentCategory && (
          <>
            <p className="text-center text-[var(--color-text-muted)] text-sm uppercase tracking-wider mb-10">
              {t(`MenuData.cat_${currentCategory.id}_desc`)}
            </p>

            <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {currentCategory.items.map((item) => (
                <div
                  key={item.id}
                  className="menu-item group rounded-[var(--radius-lg)] overflow-hidden bg-[var(--color-bg-card)] border border-[var(--glass-border)] hover:border-[rgba(201,169,110,0.2)] transition-all duration-300"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image src={item.foto} alt={t(`MenuData.${item.id}_name`)} fill className="object-cover transition-transform duration-700 group-hover:scale-110" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg-card)] to-transparent opacity-50" />
                    {item.destacado && (
                      <div className="absolute top-3 right-3">
                        <span className="px-2 py-1 text-[10px] uppercase tracking-wider font-semibold rounded-full bg-[var(--color-accent)] text-[var(--color-bg-primary)]">
                          {t("MenuPage.featured")}
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="p-5">
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="font-display text-lg font-bold uppercase tracking-tight group-hover:text-[var(--color-accent)] transition-colors duration-300">
                        {t(`MenuData.${item.id}_name`)}
                      </h3>
                      <span className="font-display text-xl font-bold text-[var(--color-accent)] flex-shrink-0">
                        S/. {item.precio}
                      </span>
                    </div>
                    <p className="text-sm text-[var(--color-text-secondary)] mt-2 leading-relaxed">
                      {t(`MenuData.${item.id}_desc`)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

