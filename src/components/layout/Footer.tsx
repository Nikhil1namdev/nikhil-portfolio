import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/40">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-8 sm:flex-row sm:items-center sm:justify-between lg:px-8">
        <div>
          <p className="text-lg font-semibold text-white">Nikhil Namdev</p>
          <p className="mt-1 text-sm text-gray-400">Full Stack Developer / Frontend Engineer</p>
        </div>
        <div className="flex items-center gap-3">
          <Link href="mailto:nikhilnamdev31@gmail.com" className="rounded-full border border-white/10 p-3 text-gray-300 transition hover:border-cyan-300/40 hover:text-cyan-200">
            <Mail className="h-4 w-4" />
          </Link>
          <Link href="https://www.linkedin.com/in/nikhilnamdev" className="rounded-full border border-white/10 p-3 text-gray-300 transition hover:border-cyan-300/40 hover:text-cyan-200">
            <Linkedin className="h-4 w-4" />
          </Link>
          <Link href="https://github.com/nikhilnamdev" className="rounded-full border border-white/10 p-3 text-gray-300 transition hover:border-cyan-300/40 hover:text-cyan-200">
            <Github className="h-4 w-4" />
          </Link>
        </div>
        <p className="text-sm text-gray-500">Copyright (c) 2026 Nikhil Namdev. All rights reserved.</p>
      </div>
    </footer>
  );
}
