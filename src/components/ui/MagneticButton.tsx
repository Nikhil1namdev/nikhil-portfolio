"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type MagneticButtonProps = {
  children: React.ReactNode;
  className?: string;
};

export function MagneticButton({ children, className }: MagneticButtonProps) {
  return (
    <motion.div
      whileHover={{ y: -3, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 320, damping: 20 }}
      className={cn("inline-flex", className)}
    >
      {children}
    </motion.div>
  );
}
