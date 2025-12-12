"use client";

import { motion } from "framer-motion";

interface ScrollFadeInProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export default function ScrollFadeIn({ children, className, delay = 0 }: ScrollFadeInProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  );
}
