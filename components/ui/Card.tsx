"use client";

import { motion } from "framer-motion";
import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  layoutId?: string;
  onClick?: () => void;
}

export default function Card({
  children,
  className = "",
  hover = true,
  layoutId,
  onClick,
}: CardProps) {
  return (
    <motion.div
      layoutId={layoutId}
      onClick={onClick}
      className={`
        relative overflow-hidden rounded-[var(--radius-lg)]
        bg-[var(--color-bg-card)] border border-[var(--glass-border)]
        ${hover ? "cursor-pointer" : ""}
        ${className}
      `}
      whileHover={
        hover
          ? {
              scale: 1.03,
              borderColor: "rgba(201, 169, 110, 0.3)",
            }
          : undefined
      }
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {/* Gradient overlay on hover */}
      {hover && (
        <div
          className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10"
          style={{ background: "var(--gradient-card-hover)" }}
        />
      )}
      {children}
    </motion.div>
  );
}
