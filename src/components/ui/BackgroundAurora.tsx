"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export function BackgroundAurora() {
  const { scrollY } = useScroll();

  // Parallax Scroll Offsets (Slow drifting background creates 3D depth)
  const yTop = useTransform(scrollY, [0, 1000], [0, -140]);
  const yLeft = useTransform(scrollY, [0, 2000], [0, 220]);
  const yRight = useTransform(scrollY, [0, 2000], [0, -200]);
  const yBottom = useTransform(scrollY, [1000, 3000], [0, -100]);

  return (
    <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
      {/* Top Hero Vibrant Aurora (Moves slower on scroll for 3D depth) */}
      <motion.div
        style={{ y: yTop }}
        className="absolute -top-[160px] left-1/2 -translate-x-1/2 w-[1300px] h-[750px] rounded-full blur-[110px] opacity-90 will-change-transform"
      >
        <div
          className="w-full h-full rounded-full"
          style={{
            background:
              "radial-gradient(circle at 50% 35%, rgba(56, 189, 248, 0.44) 0%, rgba(99, 102, 241, 0.36) 45%, rgba(147, 51, 234, 0.22) 75%, transparent 100%)"
          }}
        />
      </motion.div>

      {/* Mid-page Left Ambient Orb (Skills section parallax) */}
      <motion.div
        style={{ y: yLeft }}
        className="absolute top-[30%] -left-[180px] w-[750px] h-[750px] rounded-full blur-[130px] opacity-80 will-change-transform"
      >
        <div
          className="w-full h-full rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(56, 189, 248, 0.3) 0%, rgba(37, 99, 235, 0.18) 50%, transparent 80%)"
          }}
        />
      </motion.div>

      {/* Mid-page Right Ambient Orb (Projects section parallax) */}
      <motion.div
        style={{ y: yRight }}
        className="absolute top-[50%] -right-[180px] w-[800px] h-[800px] rounded-full blur-[140px] opacity-80 will-change-transform"
      >
        <div
          className="w-full h-full rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(147, 51, 234, 0.3) 0%, rgba(79, 70, 229, 0.2) 50%, transparent 80%)"
          }}
        />
      </motion.div>

      {/* Lower Vibrant Glow near Contact Form */}
      <motion.div
        style={{ y: yBottom }}
        className="absolute -bottom-[120px] left-1/2 -translate-x-1/2 w-[1100px] h-[600px] rounded-full blur-[130px] opacity-85 will-change-transform"
      >
        <div
          className="w-full h-full rounded-full"
          style={{
            background:
              "radial-gradient(circle at 50% 65%, rgba(56, 189, 248, 0.32) 0%, rgba(139, 92, 246, 0.25) 50%, transparent 85%)"
          }}
        />
      </motion.div>

      {/* High-Definition Architectural Grid with Radial Falloff */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_80%_65%_at_50%_0%,#000_70%,transparent_100%)] opacity-85" />
    </div>
  );
}

