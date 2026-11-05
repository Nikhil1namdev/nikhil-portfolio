"use client";

import Image from "next/image";
import Link from "next/link";
import { Github, Linkedin, Mail, MapPin } from "lucide-react";

export function ProfileCard() {
  return (
    <div className="space-y-6">
      {/* Portrait Frame with Specular Border */}
      <div className="relative aspect-[4/5] w-full max-w-[340px] overflow-hidden rounded-2xl border border-white/10 bg-zinc-900 shadow-xl">
        <Image
          src="/images/profile/nikhil-profile.jpg"
          alt="Nikhil Namdev"
          fill
          className="object-cover object-center grayscale contrast-125 transition-all duration-500 hover:grayscale-0 hover:scale-105"
          sizes="340px"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80 pointer-events-none" />

        {/* Overlay Badge at Bottom of Portrait */}
        <div className="absolute bottom-4 inset-x-4 flex items-center justify-between text-xs font-mono">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-black/70 px-3 py-1 text-emerald-400 border border-emerald-500/30 backdrop-blur-md">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>Open to Work</span>
          </div>

          <span className="text-zinc-300 bg-black/60 px-2.5 py-1 rounded backdrop-blur-md border border-white/10 flex items-center gap-1">
            <MapPin className="h-3 w-3 text-zinc-400" /> Indore, IN
          </span>
        </div>
      </div>

      {/* Identity & Social Row */}
      <div className="space-y-2 max-w-[340px]">
        <h3 className="text-2xl font-medium tracking-tight text-zinc-100">
          Nikhil Namdev
        </h3>
        <p className="font-mono text-xs uppercase tracking-wider text-sky-400">
          Frontend Engineer & Full Stack Developer
        </p>
        <p className="text-sm text-zinc-400 leading-relaxed pt-1">
          1+ years of production experience shipping high-craft React, Next.js, and MERN applications.
        </p>

        <div className="flex items-center gap-3 pt-3">
          <Link
            href="https://github.com/nikhilnamdev"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 text-xs font-mono text-zinc-300 transition hover:border-white/25 hover:text-white"
          >
            <Github className="h-3.5 w-3.5" />
            <span>GitHub</span>
          </Link>
          <Link
            href="https://www.linkedin.com/in/nikhilnamdev"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 text-xs font-mono text-zinc-300 transition hover:border-white/25 hover:text-white"
          >
            <Linkedin className="h-3.5 w-3.5" />
            <span>LinkedIn</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
