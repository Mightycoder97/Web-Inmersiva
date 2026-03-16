"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { gsap } from "@/lib/animations/gsap-config";
import { galleryImages } from "@/lib/mock-data";

const categories = ["all", "eventos", "local", "gastronomia"];

export default function GaleriaPage() {
  const t = useTranslations();
  const categoryLabels: Record<string, string> = {
    all: t("GalleryPage.all"),
    eventos: t("GalleryPage.events"),
    local: t("GalleryPage.venue"),
    gastronomia: t("GalleryPage.food"),
  };

  const [activeFilter, setActiveFilter] = useState("all");
  const [lightbox, setLightbox] = useState<string | null>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  const filtered =
    activeFilter === "all"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeFilter);

  useEffect(() => {
    if (gridRef.current) {
      const items = gridRef.current.querySelectorAll(".gallery-item");
      gsap.fromTo(
        items,
        { opacity: 0, scale: 0.9 },
        { opacity: 1, scale: 1, stagger: 0.08, duration: 0.5, ease: "power3.out" }
      );
    }
  }, [activeFilter]);

  return (
    <div className="pt-24 md:pt-32 pb-20">
      <div className="container-custom">
        <div className="text-center mb-10">
          <span className="text-[var(--color-accent)] text-xs uppercase tracking-[0.3em] font-semibold mb-4 block">
            {t("GalleryPage.label")}
          </span>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold uppercase tracking-tight">
            {t("GalleryPage.pageTitle")}
          </h1>
          <p className="mt-4 text-lg text-[var(--color-text-secondary)] max-w-xl mx-auto">
            {t("GalleryPage.pageSubtitle")}
          </p>
        </div>

        <div className="flex justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-5 py-2.5 text-xs uppercase tracking-wider rounded-full border transition-all duration-300 cursor-pointer ${
                activeFilter === cat
                  ? "bg-[var(--color-text-primary)] text-[var(--color-bg-primary)] border-[var(--color-text-primary)]"
                  : "border-[var(--glass-border)] text-[var(--color-text-secondary)] hover:border-[var(--color-text-primary)] hover:text-[var(--color-text-primary)]"
              }`}
            >
              {categoryLabels[cat]}
            </button>
          ))}
        </div>

        <div ref={gridRef} className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {filtered.map((image, index) => (
            <div
              key={image.id}
              className="gallery-item break-inside-avoid group cursor-pointer relative rounded-[var(--radius-lg)] overflow-hidden"
              onClick={() => setLightbox(image.src)}
            >
              <div className={`relative ${index % 3 === 0 ? "aspect-[3/4]" : index % 3 === 1 ? "aspect-square" : "aspect-[4/3]"}`}>
                <Image src={image.src} alt={image.alt} fill className="object-cover transition-transform duration-700 group-hover:scale-110" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />
                <div className="absolute inset-0 bg-[rgba(0,0,0,0)] group-hover:bg-[rgba(0,0,0,0.4)] transition-colors duration-300 flex items-center justify-center">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-75 group-hover:scale-100">
                    <circle cx="16" cy="16" r="15" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M16 10v12M10 16h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {lightbox && (
        <div className="fixed inset-0 z-[100] bg-[rgba(0,0,0,0.95)] flex items-center justify-center p-4 cursor-pointer" onClick={() => setLightbox(null)}>
          <button className="absolute top-6 right-6 text-white text-2xl w-10 h-10 flex items-center justify-center rounded-full glass hover:bg-[var(--glass-bg-hover)] transition-colors z-10 cursor-pointer" onClick={() => setLightbox(null)}>✕</button>
          <div className="relative max-w-5xl max-h-[85vh] w-full h-full">
            <Image src={lightbox} alt="Gallery image" fill className="object-contain" sizes="100vw" />
          </div>
        </div>
      )}
    </div>
  );
}
