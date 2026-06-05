"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { SlidersHorizontal } from "lucide-react";
import { destinations } from "@/lib/data/destinations";
import { categories } from "@/lib/data/categories";
import { cn } from "@/lib/utils";

function FilterGroup({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h3 className="mb-3 text-[11px] font-bold uppercase tracking-[0.2em] text-ink-muted">
        {label}
      </h3>
      <div className="flex flex-wrap gap-2">{children}</div>
    </div>
  );
}

function FilterPill({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn("pill transition-all", active ? "pill-active" : "pill-inactive")}
    >
      {children}
    </button>
  );
}

export function TourFilter() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const activeDestination = searchParams.get("destination") ?? "";
  const activeCategory = searchParams.get("category") ?? "";
  const hasFilters = activeDestination || activeCategory;

  function updateFilter(key: string, value: string) {
    const params = new URLSearchParams(searchParams.toString());
    if (value) {
      params.set(key, value);
    } else {
      params.delete(key);
    }
    router.push(`/tours?${params.toString()}`, { scroll: false });
  }

  function clearAll() {
    router.push("/tours", { scroll: false });
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-ink">
          <SlidersHorizontal className="h-4 w-4 text-primary-600" />
          <span className="text-sm font-semibold">Filters</span>
        </div>
        {hasFilters && (
          <button
            type="button"
            onClick={clearAll}
            className="text-xs font-semibold text-primary-600 hover:text-primary-800"
          >
            Clear all
          </button>
        )}
      </div>

      <FilterGroup label="Destination">
        <FilterPill
          active={!activeDestination}
          onClick={() => updateFilter("destination", "")}
        >
          All
        </FilterPill>
        {destinations.map((dest) => (
          <FilterPill
            key={dest.slug}
            active={activeDestination === dest.slug}
            onClick={() => updateFilter("destination", dest.slug)}
          >
            {dest.name}
          </FilterPill>
        ))}
      </FilterGroup>

      <FilterGroup label="Category">
        <FilterPill
          active={!activeCategory}
          onClick={() => updateFilter("category", "")}
        >
          All
        </FilterPill>
        {categories.map((cat) => (
          <FilterPill
            key={cat.slug}
            active={activeCategory === cat.slug}
            onClick={() => updateFilter("category", cat.slug)}
          >
            {cat.name}
          </FilterPill>
        ))}
      </FilterGroup>
    </div>
  );
}
