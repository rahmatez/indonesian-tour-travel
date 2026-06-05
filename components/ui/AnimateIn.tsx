"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export type AnimationVariant =
  | "fade-up"
  | "fade-down"
  | "fade-left"
  | "fade-right"
  | "fade"
  | "scale";

interface AnimateInProps {
  children: React.ReactNode;
  className?: string;
  variant?: AnimationVariant;
  delay?: number;
  duration?: number;
  once?: boolean;
  threshold?: number;
  as?: keyof React.JSX.IntrinsicElements;
}

export function AnimateIn({
  children,
  className,
  variant = "fade-up",
  delay = 0,
  duration = 650,
  once = true,
  threshold = 0.15,
  as: Tag = "div",
}: AnimateInProps) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          if (once) observer.unobserve(el);
        } else if (!once) {
          setVisible(false);
        }
      },
      { threshold, rootMargin: "0px 0px -6% 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [once, threshold]);

  const Component = Tag as React.ElementType;

  return (
    <Component
      ref={ref}
      className={cn(
        "reveal",
        `reveal-${variant}`,
        visible && "reveal-visible",
        className,
      )}
      style={{
        transitionDelay: `${delay}ms`,
        transitionDuration: `${duration}ms`,
      }}
    >
      {children}
    </Component>
  );
}

