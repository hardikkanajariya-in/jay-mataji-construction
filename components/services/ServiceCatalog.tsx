"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { ServiceItem } from "@/data/services";
import {
  IconCheckCircle,
  IconSearch,
  IconX,
  IconWrench,
  IconActivity,
  IconUsers,
  IconShield,
  IconChevronRight
} from "@/components/ui/Icons";

interface ServiceCatalogProps {
  services: ServiceItem[];
}

type CategoryFilter = "all" | "static-equipment" | "plant-maintenance" | "site-execution";

const categories: { key: CategoryFilter; label: string; icon: React.ComponentType<{ className?: string }> }[] = [
  { key: "all", label: "All Scopes", icon: IconShield },
  { key: "static-equipment", label: "Static Equipment", icon: IconWrench },
  { key: "plant-maintenance", label: "Plant Maintenance", icon: IconActivity },
  { key: "site-execution", label: "Scaffolding & Manpower", icon: IconUsers }
];

export function ServiceCatalog({ services }: ServiceCatalogProps) {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredServices = useMemo(() => {
    return services.filter((service) => {
      const matchesCategory =
        activeCategory === "all" || service.category === activeCategory;

      if (!matchesCategory) return false;

      if (!searchQuery.trim()) return true;

      const q = searchQuery.toLowerCase().trim();
      const inTitle = service.title.toLowerCase().includes(q);
      const inDesc = service.fullDescription.toLowerCase().includes(q) || service.shortDescription.toLowerCase().includes(q);
      const inEquipment = service.equipmentHandled.some((eq) => eq.toLowerCase().includes(q));
      const inActivities = service.documentedActivities.some((act) => act.toLowerCase().includes(q));

      return inTitle || inDesc || inEquipment || inActivities;
    });
  }, [services, activeCategory, searchQuery]);

  const categoryCounts = useMemo(() => {
    return {
      all: services.length,
      "static-equipment": services.filter((s) => s.category === "static-equipment").length,
      "plant-maintenance": services.filter((s) => s.category === "plant-maintenance").length,
      "site-execution": services.filter((s) => s.category === "site-execution").length
    };
  }, [services]);

  return (
    <div>
      {/* Interactive Filter Bar */}
      <div className="bg-white rounded-xl border border-[#DCE2E5] p-4 sm:p-5 shadow-xs mb-10">
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-1.5" role="tablist" aria-label="Service categories">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeCategory === cat.key;
              const count = categoryCounts[cat.key];
              return (
                <button
                  key={cat.key}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveCategory(cat.key)}
                  className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all border ${
                    isActive
                      ? "bg-[#155497] text-white border-[#155497] shadow-xs"
                      : "bg-[#F8FAFC] text-[#5A6A78] border-[#DCE2E5] hover:bg-slate-100 hover:text-[#292929]"
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? "text-[#F28A00]" : "text-[#5A6A78]"}`} />
                  <span>{cat.label}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${
                      isActive ? "bg-white/20 text-white" : "bg-slate-200/80 text-[#5A6A78]"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Keyword Search */}
          <div className="relative min-w-[240px] sm:min-w-[280px]">
            <label htmlFor="service-search" className="sr-only">
              Search equipment or service scopes
            </label>
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#5A6A78]">
              <IconSearch className="w-4 h-4" />
            </div>
            <input
              id="service-search"
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search equipment, tray, valve..."
              className="w-full pl-9 pr-9 py-2 rounded-lg border border-[#DCE2E5] bg-[#F8FAFC] text-xs sm:text-sm text-[#292929] placeholder-[#5A6A78] focus:bg-white focus:outline-hidden focus:border-[#155497] focus:ring-1 focus:ring-[#155497] transition-all"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-[#5A6A78] hover:text-[#292929]"
                aria-label="Clear search"
              >
                <IconX className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* Results summary bar if filtered */}
        {(activeCategory !== "all" || searchQuery) && (
          <div className="mt-4 pt-3 border-t border-[#DCE2E5] flex flex-wrap items-center justify-between text-xs text-[#5A6A78]">
            <div>
              Showing <span className="font-bold text-[#292929]">{filteredServices.length}</span> matching{" "}
              {filteredServices.length === 1 ? "scope" : "scopes"}
              {searchQuery && (
                <span>
                  {" "}for &ldquo;<strong className="text-[#292929]">{searchQuery}</strong>&rdquo;
                </span>
              )}
            </div>
            <button
              type="button"
              onClick={() => {
                setActiveCategory("all");
                setSearchQuery("");
              }}
              className="font-semibold text-[#155497] hover:underline"
            >
              Reset all filters
            </button>
          </div>
        )}
      </div>

      {/* Services Grid */}
      {filteredServices.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <Link
              key={service.id}
              id={service.id}
              href={`/services/${service.slug}/`}
              className="bg-white rounded-xl border border-[#DCE2E5] overflow-hidden shadow-xs hover:border-[#155497]/50 hover:shadow-md transition-all flex flex-col justify-between group h-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#155497] focus-visible:ring-offset-2"
            >
              <div className="flex flex-col flex-1">
                {/* Card Top Image with Badges */}
                <div className="relative h-48 w-full bg-slate-100 border-b border-[#DCE2E5] overflow-hidden">
                  <Image
                    src={service.imagePath}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded bg-[#123A68]/90 text-white text-[11px] font-bold backdrop-blur-xs shadow-xs">
                    {service.categoryLabel}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-lg font-bold text-[#292929] mb-2 leading-snug group-hover:text-[#155497] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5A6A78] leading-relaxed mb-4">
                    {service.shortDescription}
                  </p>

                  <div className="pt-3 border-t border-[#DCE2E5] flex-1">
                    <h4 className="text-[11px] font-bold uppercase tracking-wider text-[#155497] mb-2">
                      Documented Scope Activities:
                    </h4>
                    <ul className="space-y-1.5 text-xs text-[#292929]">
                      {service.documentedActivities.slice(0, 4).map((act, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <IconCheckCircle className="w-3.5 h-3.5 text-[#F28A00] flex-shrink-0 mt-0.5" />
                          <span className="line-clamp-2">{act}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <p className="mt-5 pt-4 border-t border-[#DCE2E5] inline-flex items-center gap-1.5 text-xs font-bold text-[#155497] group-hover:text-[#123A68]">
                    <span>View scope details</span>
                    <IconChevronRight className="w-4 h-4 text-[#F28A00] transition-transform group-hover:translate-x-0.5" />
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        /* Empty State */
        <div className="bg-white rounded-xl border border-[#DCE2E5] p-12 text-center max-w-lg mx-auto shadow-xs">
          <div className="w-12 h-12 rounded-full bg-slate-100 text-[#5A6A78] flex items-center justify-center mx-auto mb-4">
            <IconSearch className="w-6 h-6" />
          </div>
          <h3 className="text-base font-bold text-[#292929] mb-1">No matching service scope found</h3>
          <p className="text-xs sm:text-sm text-[#5A6A78] mb-6">
            We couldn&apos;t find any equipment scope matching &ldquo;{searchQuery}&rdquo;. Try adjusting your search term or view all scopes.
          </p>
          <button
            type="button"
            onClick={() => {
              setActiveCategory("all");
              setSearchQuery("");
            }}
            className="inline-flex items-center gap-2 bg-[#155497] text-white text-xs font-semibold px-4 py-2 rounded-lg hover:bg-[#123A68] transition-colors"
          >
            Reset Filters
          </button>
        </div>
      )}
    </div>
  );
}
