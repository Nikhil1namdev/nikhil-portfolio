"use client";

import { ElementType, useEffect, useMemo, useRef } from "react";
import gsap from "gsap";

type SplitTextProps = {
  text: string;
  tag?: ElementType;
  className?: string;
  splitType?: "chars" | "words";
  delay?: number;
  duration?: number;
  ease?: string;
  from?: gsap.TweenVars;
  to?: gsap.TweenVars;
  threshold?: number;
  rootMargin?: string;
};

export function SplitText({
  text,
  tag: Tag = "span",
  className = "",
  splitType = "chars",
  delay = 42,
  duration = 0.8,
  ease = "power3.out",
  from = { opacity: 0, y: 48, rotateX: -70 },
  to = { opacity: 1, y: 0, rotateX: 0 },
  threshold = 0.2,
  rootMargin = "0px"
}: SplitTextProps) {
  const ref = useRef<HTMLElement | null>(null);
  const hasAnimated = useRef(false);

  const pieces = useMemo(() => {
    if (splitType === "words") {
      return text.split(/(\s+)/).map((value, index) => ({
        value,
        key: `${value}-${index}`,
        isSpace: /^\s+$/.test(value)
      }));
    }

    return Array.from(text).map((value, index) => ({
      value,
      key: `${value}-${index}`,
      isSpace: value === " "
    }));
  }, [splitType, text]);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const targets = Array.from(element.querySelectorAll("[data-split-piece]"));
    if (!targets.length) return;

    const runAnimation = () => {
      if (hasAnimated.current) return;
      hasAnimated.current = true;

      gsap.fromTo(
        targets,
        { transformOrigin: "50% 100%", ...from },
        {
          ...to,
          duration,
          ease,
          stagger: delay / 1000,
          force3D: true
        }
      );
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          runAnimation();
          observer.disconnect();
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [delay, duration, ease, from, rootMargin, threshold, to]);

  return (
    <Tag ref={ref} className={`split-parent ${className}`}>
      {pieces.map((piece) =>
        piece.isSpace ? (
          <span key={piece.key} aria-hidden="true">
            {" "}
          </span>
        ) : (
          <span key={piece.key} data-split-piece className="split-piece">
            {piece.value}
          </span>
        )
      )}
    </Tag>
  );
}
