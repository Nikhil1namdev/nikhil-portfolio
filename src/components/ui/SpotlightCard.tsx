"use client";

import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

type SpotlightCardProps = React.HTMLAttributes<HTMLDivElement> & {
  children: React.ReactNode;
  className?: string;
  spotlightColor?: string;
  enableTilt?: boolean;
};

export function SpotlightCard({
  children,
  className,
  spotlightColor = "rgba(56, 189, 248, 0.15)",
  enableTilt = true,
  ...props
}: SpotlightCardProps) {
  const divRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  // 3D Parallax Tilt Physics using Framer Motion Springs
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 260, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 260, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    setPosition({ x: mouseX, y: mouseY });

    if (enableTilt) {
      const xPct = mouseX / rect.width - 0.5;
      const yPct = mouseY / rect.height - 0.5;
      x.set(xPct);
      y.set(yPct);
    }
  };

  const handleMouseEnter = () => {
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
    if (enableTilt) {
      x.set(0);
      y.set(0);
    }
  };

  return (
    <div style={{ perspective: 1000 }} className="h-full">
      <motion.div
        ref={divRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={
          enableTilt
            ? {
                rotateX,
                rotateY,
                transformStyle: "preserve-3d"
              }
            : undefined
        }
        className={cn(
          "relative h-full overflow-hidden rounded-2xl border border-white/[0.08] bg-[#111114] transition-colors duration-300 hover:border-white/[0.22] will-change-transform shadow-lg",
          className
        )}
        {...(props as any)}
      >
        {/* Cursor Spotlight Radial Light */}
        <div
          className="pointer-events-none absolute -inset-px transition-opacity duration-300"
          style={{
            opacity,
            background: `radial-gradient(450px circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 70%)`
          }}
        />

        {/* Specular Inner Glare on Hover */}
        <div
          className="pointer-events-none absolute inset-0 transition-opacity duration-500 opacity-0 group-hover:opacity-100"
          style={{
            background:
              "linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, transparent 50%)"
          }}
        />

        <div className="relative z-10 h-full">{children}</div>
      </motion.div>
    </div>
  );
}
