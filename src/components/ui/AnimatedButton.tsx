import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";
import { cn } from "@/lib/utils";

type AnimatedButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  download?: boolean;
  className?: string;
};

export function AnimatedButton({ href, children, variant = "primary", download, className }: AnimatedButtonProps) {
  const isPrimary = variant === "primary";

  return (
    <Link
      href={href}
      download={download}
      className={cn(
        "group inline-flex items-center justify-center gap-2 rounded-full border px-5 py-3 text-sm font-semibold transition duration-300",
        isPrimary
          ? "border-cyan-300/30 bg-cyan-300 text-black shadow-glow hover:bg-white"
          : "border-white/15 bg-white/5 text-white hover:border-cyan-300/40 hover:bg-cyan-300/10",
        className
      )}
    >
      {download ? <Download className="h-4 w-4" /> : null}
      {children}
      {!download ? <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" /> : null}
    </Link>
  );
}
