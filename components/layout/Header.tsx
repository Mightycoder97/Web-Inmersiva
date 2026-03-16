"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations, useLocale } from "next-intl";
import { Link, usePathname, useRouter } from "@/routing";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const t = useTranslations("Navigation");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: t("home") },
    { href: "/eventos", label: t("events") },
    { href: "/menu", label: t("menu") },
    { href: "/galeria", label: t("gallery") },
    { href: "/nosotros", label: t("about") },
    { href: "/contacto", label: t("contact") },
  ];

  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleLanguage = () => {
    const nextLocale = locale === "es" ? "en" : "es";
    router.replace(pathname, { locale: nextLocale });
  };

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;

    setIsScrolled(currentScrollY > 50);

    if (currentScrollY > lastScrollY && currentScrollY > 100) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }

    setLastScrollY(currentScrollY);
  }, [lastScrollY]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <>
      <motion.header
        initial={{ y: 0 }}
        animate={{ y: isVisible ? 0 : -100 }}
        transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={`
          fixed top-0 left-0 right-0 z-50
          transition-all duration-300
          ${
            isScrolled
              ? "bg-[rgba(10,10,10,0.8)] backdrop-blur-[20px] border-b border-[var(--glass-border)]"
              : "bg-transparent"
          }
        `}
      >
        <nav className="container-custom flex items-center justify-between h-20 md:h-24">
          {/* Logo */}
          <Link
            href="/"
            className="relative z-10 font-display text-xl md:text-2xl font-bold tracking-wider uppercase"
          >
            <span className="text-gradient">Restaurante</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm uppercase tracking-widest text-[var(--color-text-secondary)] transition-colors duration-300 relative animate-text-bracket"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA + Language + Mobile Menu Button */}
          <div className="flex items-center gap-4">
            <button
              onClick={toggleLanguage}
              className="text-white text-xs font-bold uppercase tracking-widest hover:text-[var(--color-accent)] transition-colors mr-2"
            >
              [{locale === "es" ? "EN" : "ES"}]
            </button>

            <Link
              href="/reservas"
              className="hidden md:inline-flex px-5 py-2.5 text-xs uppercase tracking-widest font-semibold rounded-full bg-[var(--color-accent)] text-[var(--color-bg-primary)] hover:bg-[var(--color-accent-light)] transition-colors duration-300"
            >
              {t("reserve")}
            </Link>

            {/* Hamburger */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden relative z-50 w-10 h-10 flex flex-col items-center justify-center gap-1.5 cursor-pointer"
              aria-label="Toggle menu"
            >
              <motion.span
                animate={{
                  rotate: isMobileMenuOpen ? 45 : 0,
                  y: isMobileMenuOpen ? 6 : 0,
                }}
                className="block w-6 h-[2px] bg-[var(--color-text-primary)]"
              />
              <motion.span
                animate={{ opacity: isMobileMenuOpen ? 0 : 1 }}
                className="block w-6 h-[2px] bg-[var(--color-text-primary)]"
              />
              <motion.span
                animate={{
                  rotate: isMobileMenuOpen ? -45 : 0,
                  y: isMobileMenuOpen ? -6 : 0,
                }}
                className="block w-6 h-[2px] bg-[var(--color-text-primary)]"
              />
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <MobileMenu
            links={navLinks}
            onClose={() => setIsMobileMenuOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
