import { cn } from "@/lib/utils";
import { AnimateIn } from "@/components/ui/AnimateIn";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  light = false,
  className,
}: SectionHeadingProps) {
  return (
    <AnimateIn>
      <div
        className={cn(
          "max-w-3xl",
          align === "center" && "mx-auto text-center",
          className,
        )}
      >
        {eyebrow && (
          <p
            className={cn(
              "mb-5 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em]",
              align === "center" && "justify-center",
              light ? "text-primary-300" : "text-primary-600",
            )}
          >
            <span
              className={cn(
                "h-px w-8",
                light ? "bg-primary-400/50" : "bg-primary-300",
              )}
            />
            {eyebrow}
            {align === "center" && (
              <span
                className={cn(
                  "h-px w-8",
                  light ? "bg-primary-400/50" : "bg-primary-300",
                )}
              />
            )}
          </p>
        )}
        <h2
          className={cn(
            "font-display text-3xl font-bold tracking-tight sm:text-4xl lg:text-[2.75rem] lg:leading-tight text-balance",
            light ? "text-white" : "text-ink",
          )}
        >
          {title}
        </h2>
        {description && (
          <p
            className={cn(
              "mt-5 text-base leading-relaxed sm:text-lg",
              light ? "text-stone-300" : "text-ink-muted",
            )}
          >
            {description}
          </p>
        )}
      </div>
    </AnimateIn>
  );
}
