"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" }
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(height > 0 ? (scrollTop / height) * 100 : 0);
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    return () => window.removeEventListener("scroll", updateProgress);
  }, []);

  return (
    <>
      <div className="fixed left-0 top-0 z-[60] h-1 bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400" style={{ width: `${progress}%` }} />
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/45 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <Link href="#home" className="group flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-2xl border border-cyan-300/30 bg-cyan-300/10 text-sm font-bold text-cyan-200 shadow-glow">
              NN
            </span>
            <span className="text-sm font-semibold text-white">Nikhil Namdev</span>
          </Link>

          <div className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/[0.04] p-1 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-full px-4 py-2 text-sm text-gray-300 transition hover:bg-white/10 hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <Link
            href="/resume/Nikhil_Namdev_Resume.pdf"
            download
            className="hidden rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-sm font-semibold text-cyan-100 transition hover:bg-cyan-300 hover:text-black md:inline-flex"
          >
            Resume
          </Link>

          <button
            className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-white md:hidden"
            onClick={() => setOpen((value) => !value)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>

        <div className={cn("grid transition-all duration-300 md:hidden", open ? "grid-rows-[1fr]" : "grid-rows-[0fr]")}>
          <div className="overflow-hidden">
            <div className="mx-5 mb-5 rounded-3xl border border-white/10 bg-black/80 p-3">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-2xl px-4 py-3 text-sm text-gray-300 hover:bg-white/10 hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/resume/Nikhil_Namdev_Resume.pdf"
                download
                className="mt-2 block rounded-2xl bg-cyan-300 px-4 py-3 text-sm font-semibold text-black"
              >
                Download Resume
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
