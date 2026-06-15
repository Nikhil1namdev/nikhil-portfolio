type GradualBlurProps = {
  position?: "top" | "bottom";
  className?: string;
};

export function GradualBlur({ position = "bottom", className = "" }: GradualBlurProps) {
  return <div aria-hidden="true" className={`gradual-blur gradual-blur-${position} ${className}`} />;
}
