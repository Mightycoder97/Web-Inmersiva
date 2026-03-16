"use client";

import { motion } from "framer-motion";
import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit";
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  onClick,
  className = "",
  type = "button",
}: ButtonProps) {
  const baseStyles = `
    inline-flex items-center justify-center gap-2
    font-semibold tracking-wide uppercase
    transition-all duration-300 cursor-pointer
    focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]
  `;

  const variants: Record<string, string> = {
    primary: `
      bg-[var(--color-accent)] text-[var(--color-bg-primary)]
      hover:bg-[var(--color-accent-light)]
      animate-pulse-glow rounded-full
    `,
    secondary: `
      border border-[var(--color-accent)] text-[var(--color-accent)]
      hover:bg-[var(--color-accent)] hover:text-[var(--color-bg-primary)]
      rounded-full
    `,
    ghost: `
      text-[var(--color-text-secondary)]
      hover:text-[var(--color-text-primary)]
      hover:bg-[var(--glass-bg)]
      rounded-lg
    `,
  };

  const sizes: Record<string, string> = {
    sm: "px-4 py-2 text-xs",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  };

  const combinedClass = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  const motionProps = {
    whileHover: { scale: 1.05 },
    whileTap: { scale: 0.97 },
    transition: { type: "spring" as const, stiffness: 400, damping: 17 },
  };

  if (href) {
    return (
      <motion.a
        href={href}
        className={combinedClass}
        {...motionProps}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      className={combinedClass}
      {...motionProps}
    >
      {children}
    </motion.button>
  );
}
