"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Check, Copy, Github, Linkedin, Mail, MapPin, Send } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { socials } from "@/data/socials";

export function ContactSection() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("nikhilnamdev31@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

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
        body: JSON.stringify(formData)
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Failed to deliver message. Please try again or email directly.");
      }

      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (err: any) {
      setStatus("error");
      setErrorMsg(err.message || "An unexpected error occurred. Please try again.");
    }
  };

  return (
    <section id="contact" className="py-28 border-t border-white/[0.08] bg-transparent">
      <div className="section-container">
        <SectionHeading
          eyebrow="06 / Get In Touch"
          title="Let's build something exceptional together."
          description="Have an open engineering role, freelance project, or collaboration? Reach out directly through the form or email."
        />

        <div className="mt-16 grid gap-14 lg:grid-cols-[0.8fr_1.2fr] items-start">
          {/* Left Column: Direct Inquiries & Availability */}
          <div className="space-y-8">
            <div className="space-y-3">
              <h3 className="text-2xl font-medium tracking-tight text-zinc-100">
                Direct Inquiries
              </h3>
              <p className="text-base leading-relaxed text-zinc-400">
                I typically respond within 24 hours. Based in Indore, India (IST / UTC+5:30). Open to remote positions worldwide.
              </p>
            </div>

            {/* Copy Email Box */}
            <div className="rounded-2xl border border-white/10 bg-[#121215] p-5 flex items-center justify-between">
              <div>
                <p className="font-mono text-xs uppercase tracking-wider text-zinc-500">
                  Primary Email
                </p>
                <p className="font-mono text-base text-zinc-100 mt-1 select-all font-medium">
                  nikhilnamdev31@gmail.com
                </p>
              </div>
              <button
                onClick={handleCopyEmail}
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-zinc-300 transition hover:border-white/20 hover:text-white active:scale-95"
                title="Copy email to clipboard"
                aria-label="Copy email"
              >
                {copiedEmail ? (
                  <Check className="h-4 w-4 text-emerald-400" />
                ) : (
                  <Copy className="h-4 w-4" />
                )}
              </button>
            </div>

            {/* Channels List */}
            <div className="space-y-3 pt-2">
              {socials.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex items-center justify-between rounded-xl border border-white/[0.06] bg-white/[0.01] p-4 text-sm transition hover:border-white/15 hover:bg-white/[0.03]"
                >
                  <div className="flex items-center gap-3.5">
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] text-zinc-300">
                      <item.icon className="h-4 w-4" />
                    </span>
                    <div>
                      <span className="text-xs font-mono text-zinc-500 block">
                        {item.label}
                      </span>
                      <span className="text-zinc-200 font-medium">{item.value}</span>
                    </div>
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-zinc-500" />
                </Link>
              ))}
            </div>
          </div>

          {/* Right Column: Spacious Form Fields */}
          <div className="rounded-2xl border border-white/10 bg-[#121215] p-8 sm:p-10 shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="name" className="font-mono text-xs uppercase tracking-wider text-zinc-400">
                    Your Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    required
                    disabled={status === "loading"}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Jane Doe"
                    className="w-full rounded-xl border border-white/10 bg-[#18181c] px-4 py-3.5 text-sm text-zinc-100 placeholder:text-zinc-600 outline-none transition focus:border-zinc-400 disabled:opacity-50"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="font-mono text-xs uppercase tracking-wider text-zinc-400">
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    disabled={status === "loading"}
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="jane@company.com"
                    className="w-full rounded-xl border border-white/10 bg-[#18181c] px-4 py-3.5 text-sm text-zinc-100 placeholder:text-zinc-600 outline-none transition focus:border-zinc-400 disabled:opacity-50"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="font-mono text-xs uppercase tracking-wider text-zinc-400">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  disabled={status === "loading"}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell me about your role, project, or vision..."
                  className="w-full resize-none rounded-xl border border-white/10 bg-[#18181c] p-4 text-sm text-zinc-100 placeholder:text-zinc-600 outline-none transition focus:border-zinc-400 disabled:opacity-50"
                />
              </div>

              {/* Status Alerts */}
              {status === "error" && (
                <div className="rounded-xl border border-rose-500/30 bg-rose-500/10 p-4 text-xs text-rose-300">
                  {errorMsg}
                </div>
              )}

              {status === "success" && (
                <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-4 text-xs text-emerald-300 flex items-center gap-2">
                  <Check className="h-4 w-4" />
                  <span>Message sent successfully! I will respond to your email promptly.</span>
                </div>
              )}

              <button
                type="submit"
                disabled={status === "loading"}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-zinc-100 px-8 py-3.5 text-xs font-mono font-medium text-zinc-950 uppercase tracking-wider transition hover:bg-white hover:shadow-lg disabled:opacity-50 active:scale-95"
              >
                {status === "loading" ? (
                  <span>Transmitting...</span>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send className="h-3.5 w-3.5" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
