"use client";

import { useState } from "react";
import Link from "next/link";
import { Send } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { socials } from "@/data/socials";

export function ContactSection() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus("error");
      setErrorMsg("Please fill in all required fields.");
      return;
    }

    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Failed to send your message. Please try again.");
      }

      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (err: any) {
      setStatus("error");
      setErrorMsg(err.message || "An error occurred while sending your message.");
    }
  };

  return (
    <section id="contact" data-animate-section className="section-container py-20 lg:py-28">
      <SectionHeading
        eyebrow="Contact"
        title="Let's build something great."
        description="Available for frontend, React, MERN, and full-stack opportunities."
      />

      <div className="mt-14 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="grid gap-4">
          {socials.map((item) => (
            <Link
              key={item.label}
              data-animate-card
              href={item.href}
              className="flex items-center gap-4 rounded-3xl border border-white/10 bg-white/[0.02] p-5 backdrop-blur transition-all duration-300 hover:border-cyan-300/35 hover:bg-white/[0.05]"
            >
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-cyan-300/10 text-cyan-200">
                <item.icon className="h-5 w-5" />
              </span>
              <span>
                <span className="block text-sm text-gray-400">{item.label}</span>
                <span className="mt-1 block font-medium text-white">{item.value}</span>
              </span>
            </Link>
          ))}
        </div>

        <form onSubmit={handleSubmit} data-animate-card className="rounded-3xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur">
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="grid gap-2 text-sm text-gray-300">
              Name
              <input
                required
                disabled={status === "loading"}
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="rounded-2xl border border-white/10 bg-black/35 px-4 py-3 text-white outline-none transition placeholder:text-gray-600 focus:border-cyan-300/50 disabled:opacity-60"
                placeholder="Your name"
              />
            </label>
            <label className="grid gap-2 text-sm text-gray-300">
              Email
              <input
                type="email"
                required
                disabled={status === "loading"}
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="rounded-2xl border border-white/10 bg-black/35 px-4 py-3 text-white outline-none transition placeholder:text-gray-600 focus:border-cyan-300/50 disabled:opacity-60"
                placeholder="you@example.com"
              />
            </label>
          </div>
          <label className="mt-5 grid gap-2 text-sm text-gray-300">
            Message
            <textarea
              rows={6}
              required
              disabled={status === "loading"}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="resize-none rounded-2xl border border-white/10 bg-black/35 px-4 py-3 text-white outline-none transition placeholder:text-gray-600 focus:border-cyan-300/50 disabled:opacity-60"
              placeholder="Tell me about your role, project, or idea."
            />
          </label>

          {status === "success" && (
            <p className="mt-4 text-sm font-medium text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-4 py-2.5 rounded-2xl">
              Message sent successfully! I'll get back to you soon.
            </p>
          )}

          {status === "error" && (
            <p className="mt-4 text-sm font-medium text-rose-400 bg-rose-500/10 border border-rose-500/20 px-4 py-2.5 rounded-2xl">
              {errorMsg}
            </p>
          )}

          <button
            type="submit"
            disabled={status === "loading"}
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-cyan-300 px-6 py-3 text-sm font-semibold text-black transition hover:bg-white disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {status === "loading" ? "Sending..." : "Send Message"} <Send className="h-4 w-4" />
          </button>
        </form>
      </div>
    </section>
  );
}
