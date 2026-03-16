import Link from "next/link";

const footerLinks = [
  { href: "/eventos", label: "Eventos" },
  { href: "/menu", label: "Carta" },
  { href: "/galeria", label: "Galería" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/contacto", label: "Contacto" },
  { href: "/reservas", label: "Reservas" },
];

const socialLinks = [
  { href: "https://instagram.com", label: "Instagram", icon: "IG" },
  { href: "https://facebook.com", label: "Facebook", icon: "FB" },
  { href: "https://tiktok.com", label: "TikTok", icon: "TK" },
  { href: "https://wa.me/51999999999", label: "WhatsApp", icon: "WA" },
];

export default function Footer() {
  return (
    <footer className="relative bg-[var(--color-bg-secondary)] border-t border-[var(--glass-border)]">
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[var(--color-accent)] to-transparent opacity-50" />

      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Brand */}
          <div>
            <h3 className="font-display text-2xl font-bold uppercase tracking-wider text-gradient mb-4">
              Restaurante
            </h3>
            <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed max-w-xs">
              Una experiencia gastronómica única donde la mejor cocina se fusiona
              con los mejores ritmos musicales de Lima.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-[var(--color-text-muted)] mb-6">
              Navegación
            </h4>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-[var(--color-text-muted)] mb-6">
              Contacto
            </h4>
            <div className="space-y-3 text-sm text-[var(--color-text-secondary)]">
              <p>Av. La Mar 1234, Miraflores</p>
              <p>Lima, Perú</p>
              <p>+51 999 999 999</p>
              <p>info@restaurante.pe</p>
            </div>

            <div className="flex gap-4 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full glass flex items-center justify-center text-xs font-bold text-[var(--color-text-muted)] hover:text-[var(--color-accent)] hover:border-[var(--color-accent)] transition-all duration-300"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Horarios */}
        <div className="mt-12 pt-8 border-t border-[var(--glass-border)] flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-wrap gap-6 text-xs text-[var(--color-text-muted)] uppercase tracking-wider">
            <span>Lun – Jue: 12:00 – 23:00</span>
            <span>Vie – Sáb: 12:00 – 02:00</span>
            <span>Dom: 12:00 – 22:00</span>
          </div>
          <p className="text-xs text-[var(--color-text-muted)]">
            © {new Date().getFullYear()} Restaurante. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
