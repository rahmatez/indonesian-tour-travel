import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonVariant =
  | "primary"
  | "secondary"
  | "outline"
  | "outline-dark"
  | "ghost"
  | "whatsapp";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  external?: boolean;
}

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-primary-600 text-white hover:bg-primary-700 shadow-lg shadow-primary-600/30 hover:shadow-primary-600/40 active:scale-[0.98]",
  secondary:
    "bg-accent-500 text-white hover:bg-accent-600 shadow-lg shadow-accent-500/30 active:scale-[0.98]",
  outline:
    "border-2 border-white/70 text-white hover:border-white hover:bg-white/10 backdrop-blur-sm active:scale-[0.98]",
  "outline-dark":
    "border-2 border-stone-300 text-ink hover:border-primary-500 hover:text-primary-700 bg-white active:scale-[0.98]",
  ghost:
    "text-primary-700 hover:bg-primary-50 ring-1 ring-primary-100 hover:ring-primary-200",
  whatsapp:
    "bg-[#25D366] text-white hover:bg-[#1da851] shadow-lg shadow-[#25D366]/30 active:scale-[0.98]",
};

const sizes: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-2.5 text-sm font-semibold",
  lg: "px-8 py-3.5 text-base font-semibold",
};

export function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className,
  onClick,
  type = "button",
  external,
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-full leading-none transition-all duration-200",
    variants[variant],
    sizes[size],
    className,
  );

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={classes}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
