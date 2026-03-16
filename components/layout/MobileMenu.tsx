"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Link } from "@/routing";

interface MobileMenuProps {
  links: { href: string; label: string }[];
  onClose: () => void;
}

export default function MobileMenu({ links, onClose }: MobileMenuProps) {
  const t = useTranslations("Navigation");

  return (
    <motion.div
      initial={{ clipPath: "circle(0% at calc(100% - 2.5rem) 2.5rem)" }}
      animate={{ clipPath: "circle(150% at calc(100% - 2.5rem) 2.5rem)" }}
      exit={{ clipPath: "circle(0% at calc(100% - 2.5rem) 2.5rem)" }}
      transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="fixed inset-0 z-40 bg-[var(--color-bg-primary)] flex flex-col items-center justify-center"
    >
      <nav className="flex flex-col items-center gap-8">
        {links.map((link, i) => (
          <motion.div
            key={link.href}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 + i * 0.1, duration: 0.4 }}
          >
            <Link
              href={link.href}
              onClick={onClose}
              className="font-display text-3xl md:text-4xl uppercase tracking-widest text-[var(--color-text-primary)] hover:text-[var(--color-accent)] transition-colors duration-300"
            >
              {link.label}
            </Link>
          </motion.div>
        ))}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.4 }}
          className="mt-8"
        >
          <Link
            href="/reservas"
            onClick={onClose}
            className="px-8 py-4 text-sm uppercase tracking-widest font-semibold rounded-full bg-[var(--color-accent)] text-[var(--color-bg-primary)]"
          >
            {t("reserve")}
          </Link>
        </motion.div>
      </nav>

      {/* Social links */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="absolute bottom-8 flex gap-6"
      >
        {["Instagram", "Facebook", "TikTok"].map((social) => (
          <a
            key={social}
            href="#"
            className="text-xs uppercase tracking-widest text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors"
          >
            {social}
          </a>
        ))}
      </motion.div>
    </motion.div>
  );
}
