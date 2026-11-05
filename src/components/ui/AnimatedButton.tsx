import Link from "next/link";
import { ArrowRight, ArrowUpRight, Download } from "lucide-react";
import { cn } from "@/lib/utils";

type AnimatedButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  download?: boolean;
  className?: string;
  target?: string;
  rel?: string;
  showDownloadIcon?: boolean;
  showExternalIcon?: boolean;
};

export function AnimatedButton({
  href,
  children,
  variant = "primary",
  download,
  className,
  target,
  rel,
  showDownloadIcon,
  showExternalIcon
}: AnimatedButtonProps) {
  const isPrimary = variant === "primary";
  const isSecondary = variant === "secondary";
  const isGhost = variant === "ghost";

  return (
    <Link
      href={href}
      download={download}
      target={target}
      rel={rel}
      className={cn(
        "group inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-xs font-medium transition-all duration-200 active:scale-95",
        isPrimary &&
          "bg-zinc-100 text-zinc-950 hover:bg-white hover:shadow-md",
        isSecondary &&
          "border border-white/10 bg-white/[0.03] text-zinc-300 hover:border-white/20 hover:bg-white/[0.08] hover:text-white",
        isGhost &&
          "text-zinc-400 hover:text-zinc-100 hover:bg-white/[0.04]",
        className
      )}
    >
      {showDownloadIcon && <Download className="h-3.5 w-3.5 text-zinc-400" />}
      <span>{children}</span>
      {showExternalIcon && (
        <ArrowUpRight className="h-3.5 w-3.5 text-zinc-400 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white" />
      )}
      {!showDownloadIcon && !showExternalIcon && variant === "primary" && (
        <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
      )}
    </Link>
  );
}
