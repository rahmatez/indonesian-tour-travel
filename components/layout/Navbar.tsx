"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X, MapPin } from "lucide-react";
import { APP_NAME, NAV_LINKS } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 48);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const solid = scrolled || !isHome;

  return (
    <header
      className={cn(
        "animate-fade-down fixed inset-x-0 top-0 z-50 transition-all duration-300",
        solid
          ? "bg-stone-950/90 shadow-lg shadow-black/10 backdrop-blur-xl"
          : "bg-transparent",
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3.5 sm:px-6 sm:py-4 lg:px-8">
        <Link href="/" className="group flex items-center gap-2.5 sm:gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-linear-to-br from-primary-500 to-primary-700 text-white shadow-lg shadow-primary-600/40 transition-transform group-hover:scale-105 sm:h-11 sm:w-11 sm:rounded-2xl">
            <MapPin className="h-5 w-5" />
          </div>
          <div className="hidden sm:block">
            <p className="text-sm font-bold leading-tight text-white">
              {APP_NAME}
            </p>
            <p className="text-[11px] font-medium tracking-wide text-white/60">
              Indonesia Tour Operator
            </p>
          </div>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => {
            const active =
              pathname === link.href ||
              pathname.startsWith(`${link.href}/`);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-medium transition-colors",
                  active
                    ? "bg-white/15 text-white"
                    : "text-white/80 hover:bg-white/10 hover:text-white",
                )}
              >
                {link.label}
              </Link>
            );
          })}
          <Button href="/tours" size="sm" className="ml-3">
            Explore Tours
          </Button>
        </div>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-xl text-white ring-1 ring-white/20 md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <div
        className={cn(
          "overflow-hidden border-t border-white/10 bg-stone-950/95 backdrop-blur-xl transition-all duration-300 md:hidden",
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <div className="flex flex-col gap-1 px-4 py-4">
          {NAV_LINKS.map((link) => {
            const active =
              pathname === link.href ||
              pathname.startsWith(`${link.href}/`);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "rounded-xl px-4 py-3 text-sm font-medium transition-colors",
                  active
                    ? "bg-primary-600/20 text-primary-200"
                    : "text-white/90 hover:bg-white/10",
                )}
              >
                {link.label}
              </Link>
            );
          })}
          <Button href="/tours" size="sm" className="mt-2 w-full">
            Explore Tours
          </Button>
        </div>
      </div>
    </header>
  );
}
