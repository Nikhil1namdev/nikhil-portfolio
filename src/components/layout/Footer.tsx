"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  const [indoreTime, setIndoreTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true
      };
      setIndoreTime(new Intl.DateTimeFormat("en-US", options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-white/[0.08] bg-transparent py-14 text-zinc-400">
      <div className="section-container">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 pb-10 border-b border-white/[0.06]">
          {/* Identity & Mission */}
          <div className="space-y-1.5">
            <div className="flex items-center gap-2 text-zinc-100">
              <span className="flex h-7 w-7 items-center justify-center rounded-md border border-white/10 bg-white/[0.04] text-xs font-mono font-medium">
                NN
              </span>
              <span className="font-medium tracking-tight text-base text-zinc-100">
                Nikhil Namdev
              </span>
            </div>
            <p className="text-xs text-zinc-400 max-w-sm">
              Frontend Engineer & Full Stack Developer specializing in production Next.js interfaces and modern digital craft.
            </p>
          </div>

          {/* Local Time & Location Indicator */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 text-xs font-mono">
            <div>
              <span className="text-zinc-500 block text-[10px] uppercase">Based In</span>
              <span className="text-zinc-200">Indore, India (UTC+5:30)</span>
            </div>

            {indoreTime && (
              <div>
                <span className="text-zinc-500 block text-[10px] uppercase">Local Time</span>
                <span className="text-zinc-200">{indoreTime}</span>
              </div>
            )}

            {/* Back to Top */}
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.02] px-3.5 py-1.5 text-xs text-zinc-300 hover:border-white/20 hover:text-white transition"
              aria-label="Scroll to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="h-3 w-3" />
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-400">
          <p>© {new Date().getFullYear()} Nikhil Namdev. Designed with minimal precision.</p>

          <div className="flex items-center gap-4">
            <Link
              href="https://github.com/nikhilnamdev"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-zinc-200 transition-colors"
            >
              GitHub
            </Link>
            <Link
              href="https://www.linkedin.com/in/nikhilnamdev"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-zinc-200 transition-colors"
            >
              LinkedIn
            </Link>
            <Link
              href="mailto:nikhilnamdev31@gmail.com"
              className="hover:text-zinc-200 transition-colors"
            >
              Email
            </Link>
            <Link
              href="/resume/Nikhil_Namdev_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-zinc-200 transition-colors"
            >
              Resume
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
