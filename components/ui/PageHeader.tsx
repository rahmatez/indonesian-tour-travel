import Image from "next/image";
import { cn } from "@/lib/utils";
import { AnimateIn } from "@/components/ui/AnimateIn";

interface PageHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  image?: string;
  imageAlt?: string;
  className?: string;
}

export function PageHeader({
  eyebrow,
  title,
  description,
  image,
  imageAlt = "",
  className,
}: PageHeaderProps) {
  return (
    <section className={cn("relative overflow-hidden", className)}>
      {image ? (
        <>
          <Image
            src={image}
            alt={imageAlt}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-linear-to-r from-stone-950/95 via-stone-950/80 to-stone-950/60" />
        </>
      ) : (
        <div className="absolute inset-0 bg-linear-to-br from-stone-900 via-stone-800 to-primary-900 gradient-mesh" />
      )}

      <div className="relative mx-auto max-w-7xl px-5 pb-16 pt-32 sm:px-6 sm:pb-20 sm:pt-36 lg:px-8 lg:pb-24 lg:pt-40">
        {eyebrow && (
          <AnimateIn delay={0}>
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-primary-200 backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-accent-400" />
              {eyebrow}
            </p>
          </AnimateIn>
        )}
        <AnimateIn delay={100}>
          <h1 className="max-w-3xl font-display text-3xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl text-balance">
            {title}
          </h1>
        </AnimateIn>
        {description && (
          <AnimateIn delay={200}>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-stone-300 sm:mt-5 sm:text-lg">
              {description}
            </p>
          </AnimateIn>
        )}
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-16 bg-linear-to-t from-surface to-transparent" />
    </section>
  );
}
