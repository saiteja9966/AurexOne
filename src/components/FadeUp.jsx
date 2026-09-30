"use client";

import { motion } from "framer-motion";

// Staggered fade-up entrance. Use FadeUp for individual blocks,
// or FadeUpGroup + FadeUpItem for staggered children.
export const FadeUp = ({ children, delay = 0, className = "" }) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y: 28 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-60px" }}
    transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
  >
    {children}
  </motion.div>
);

export const FadeUpGroup = ({ children, className = "" }) => (
  <motion.div
    className={className}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, margin: "-60px" }}
    variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}
  >
    {children}
  </motion.div>
);

export const FadeUpItem = ({ children, className = "" }) => (
  <motion.div
    className={className}
    variants={{
      hidden: { opacity: 0, y: 28 },
      show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
    }}
  >
    {children}
  </motion.div>
);
