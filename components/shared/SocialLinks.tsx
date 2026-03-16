import Link from "next/link";

interface SocialLinksProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

const socials = [
  { href: "https://instagram.com", label: "Instagram", icon: "IG" },
  { href: "https://facebook.com", label: "Facebook", icon: "FB" },
  { href: "https://tiktok.com", label: "TikTok", icon: "TK" },
  { href: "https://wa.me/51999999999", label: "WhatsApp", icon: "WA" },
];

export default function SocialLinks({ size = "md", className = "" }: SocialLinksProps) {
  const sizes = {
    sm: "w-8 h-8 text-[10px]",
    md: "w-10 h-10 text-xs",
    lg: "w-12 h-12 text-sm",
  };

  return (
    <div className={`flex gap-3 ${className}`}>
      {socials.map((social) => (
        <a
          key={social.label}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={social.label}
          className={`
            ${sizes[size]}
            rounded-full glass flex items-center justify-center
            font-bold text-[var(--color-text-muted)]
            hover:text-[var(--color-accent)] hover:border-[var(--color-accent)]
            transition-all duration-300
          `}
        >
          {social.icon}
        </a>
      ))}
    </div>
  );
}
