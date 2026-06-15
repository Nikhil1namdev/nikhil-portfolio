"use client";

import { useState } from "react";
import { MapPin, Sparkles } from "lucide-react";

export function ProfileCard() {
  const [imageLoaded, setImageLoaded] = useState(true);

  return (
    <div className="relative overflow-hidden rounded-3xl border border-cyan-500/20 bg-[#0a0a0a]/60 p-6 shadow-[0_0_50px_rgba(6,182,212,0.08)] backdrop-blur-md transition duration-500 hover:border-cyan-400/40">
      {/* Decorative blur glows */}
      <div className="absolute -left-20 -top-20 -z-10 h-44 w-44 rounded-full bg-cyan-500/10 blur-[80px]" />
      <div className="absolute -right-20 -bottom-20 -z-10 h-44 w-44 rounded-full bg-teal-500/10 blur-[80px]" />

      <div className="flex flex-col items-center text-center">
        {/* Profile Image Squircle/Circle Container */}
        <div className="relative group h-40 w-40 rounded-full border-2 border-cyan-400/30 p-1.5 bg-gradient-to-br from-cyan-500/20 to-teal-500/20 shadow-lg shadow-cyan-500/5 transition duration-500 hover:border-cyan-400/50">
          <div className="relative h-full w-full overflow-hidden rounded-full border border-white/10 bg-black/40">
            {imageLoaded ? (
              <img
                src="/images/profile/profile.jpeg"
                alt="Nikhil Namdev"
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                style={{ objectPosition: "center 20%" }}
                onError={() => setImageLoaded(false)}
              />
            ) : (
              // Premium initials fallback
              <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-b from-cyan-950/40 to-black/80">
                <span className="bg-gradient-to-r from-cyan-200 via-cyan-100 to-teal-200 bg-clip-text text-3xl font-extrabold tracking-wide text-transparent">
                  NN
                </span>
              </div>
            )}
          </div>
          
          {/* Subtle pulse for online status indicator */}
          <span className="absolute bottom-1 right-2 h-4.5 w-4.5 rounded-full border-2 border-[#0a0a0a] bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.85)] animate-pulse" />
        </div>

        {/* Name and Professional Title */}
        <div className="mt-5">
          <h3 className="text-2xl font-extrabold tracking-tight text-white">
            Nikhil Namdev
          </h3>
          <p className="mt-1 bg-gradient-to-r from-cyan-400 to-teal-300 bg-clip-text font-bold text-transparent text-sm uppercase tracking-[0.16em]">
            FULL STACK DEVELOPER
          </p>
        </div>

        {/* Gradient separator */}
        <div className="mt-6 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* Detailed Metadata Fields */}
        <div className="mt-6 w-full space-y-3.5 text-left">
          {/* Location */}
          <div className="flex items-center gap-3.5 rounded-2xl border border-white/5 bg-white/[0.01] px-4 py-3 backdrop-blur-sm transition hover:border-white/10 hover:bg-white/[0.03]">
            <span className="grid h-9 w-9 place-items-center rounded-xl border border-cyan-400/25 bg-cyan-400/10 text-cyan-300 shadow-sm">
              <MapPin className="h-4.5 w-4.5" />
            </span>
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-500">Location</p>
              <p className="text-sm font-medium text-white">Indore, India</p>
            </div>
          </div>

          {/* Availability Status */}
          <div className="flex items-center gap-3.5 rounded-2xl border border-cyan-400/10 bg-cyan-500/[0.04] px-4 py-3 backdrop-blur-sm transition hover:border-cyan-400/20 hover:bg-cyan-500/[0.06]">
            <span className="grid h-9 w-9 place-items-center rounded-xl border border-teal-400/25 bg-teal-400/10 text-teal-300 shadow-sm">
              <Sparkles className="h-4.5 w-4.5" />
            </span>
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-500">Status</p>
              <p className="text-sm font-medium text-white flex items-center gap-2">
                Available for opportunities
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
