"use client";

import React, { useState, useMemo, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ServiceItem } from "@/data/services";
import {
  IconCheckCircle,
  IconSearch,
  IconX,
  IconChevronRight,
  IconWrench,
  IconActivity,
  IconUsers,
  IconShield
} from "@/components/ui/Icons";

interface ServiceCatalogProps {
  services: ServiceItem[];
}

type CategoryFilter = "all" | "static-equipment" | "rotating-equipment" | "site-execution";

const categories: { key: CategoryFilter; label: string; icon: React.ComponentType<{ className?: string }> }[] = [
  { key: "all", label: "All Scopes", icon: IconShield },
  { key: "static-equipment", label: "Static Equipment", icon: IconWrench },
  { key: "rotating-equipment", label: "Rotating & Mechanical", icon: IconActivity },
  { key: "site-execution", label: "Scaffolding & Manpower", icon: IconUsers }
];

export function ServiceCatalog({ services }: ServiceCatalogProps) {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [inspectingService, setInspectingService] = useState<ServiceItem | null>(null);

  // Close modal on Escape
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape" && inspectingService) {
        setInspectingService(null);
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [inspectingService]);

  // Prevent background scroll when modal open
  useEffect(() => {
    if (inspectingService) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [inspectingService]);

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
      "rotating-equipment": services.filter((s) => s.category === "rotating-equipment").length,
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
            <div
              key={service.id}
              id={service.id}
              className="bg-white rounded-xl border border-[#DCE2E5] overflow-hidden shadow-xs hover:border-[#155497]/50 hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div>
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
                <div className="p-6">
                  <h3 className="text-lg font-bold text-[#292929] mb-2 leading-snug group-hover:text-[#155497] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5A6A78] leading-relaxed mb-4">
                    {service.shortDescription}
                  </p>

                  <div className="pt-3 border-t border-[#DCE2E5]">
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
                </div>
              </div>

              {/* Bottom Equipment Tags & Actions */}
              <div className="p-6 pt-0 mt-2">
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
                  <button
                    type="button"
                    onClick={() => setInspectingService(service)}
                    className="text-xs font-bold text-[#155497] hover:underline inline-flex items-center gap-1"
                  >
                    <span>Inspect Scope Dossier</span>
                    <IconChevronRight className="w-3 h-3 text-[#F28A00]" />
                  </button>
                  <Link
                    href={`/contact/?service=${encodeURIComponent(service.title)}`}
                    className="text-xs font-semibold px-3 py-1.5 rounded bg-[#EEF1F2] hover:bg-[#155497] hover:text-white text-[#155497] transition-colors"
                  >
                    Requisition
                  </Link>
                </div>
              </div>
            </div>
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

      {/* Scope Dossier Modal */}
      {inspectingService && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
          aria-labelledby="dossier-title"
          onClick={() => setInspectingService(null)}
        >
          <div
            className="bg-white rounded-2xl border border-[#DCE2E5] shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden flex flex-col animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header Image */}
            <div className="relative h-44 sm:h-52 w-full bg-slate-900 flex-shrink-0">
              <Image
                src={inspectingService.imagePath}
                alt={inspectingService.title}
                fill
                className="object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              <button
                type="button"
                onClick={() => setInspectingService(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center transition-colors"
                aria-label="Close details"
              >
                <IconX className="w-5 h-5" />
              </button>

              <div className="absolute bottom-4 left-6 right-6">
                <span className="inline-block px-2.5 py-0.5 rounded text-[11px] font-bold uppercase tracking-wider bg-[#F28A00] text-white mb-1.5">
                  {inspectingService.categoryLabel}
                </span>
                <h2 id="dossier-title" className="text-xl sm:text-2xl font-extrabold text-white leading-tight">
                  {inspectingService.title}
                </h2>
              </div>
            </div>

            {/* Modal Body Scrollable */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#155497] mb-2">
                  Scope Overview &amp; Execution Strategy
                </h3>
                <p className="text-xs sm:text-sm text-[#5A6A78] leading-relaxed">
                  {inspectingService.fullDescription}
                </p>
              </div>

              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#292929] mb-3">
                  Documented Field Activities:
                </h3>
                <div className="space-y-2">
                  {inspectingService.documentedActivities.map((act, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 p-2.5 rounded-lg bg-[#F8FAFC] border border-[#DCE2E5]">
                      <IconCheckCircle className="w-4 h-4 text-[#155497] flex-shrink-0 mt-0.5" />
                      <span className="text-xs text-[#292929]">{act}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#292929] mb-2">
                  Target Equipment &amp; Unit Types:
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {inspectingService.equipmentHandled.map((eq, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded bg-[#EEF1F2] border border-[#DCE2E5] text-[#292929] font-medium text-xs"
                    >
                      {eq}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-[#DCE2E5] text-xs text-[#5A6A78]">
                <strong className="text-[#292929]">Operational Note:</strong> We have available specialized tools and trackers for executing all turnaround and shutdown jobs mentioned above. Over 700 skilled manpower available at any time, with rapid mobilization to arrange additional manpower per client requirement.
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 sm:p-6 bg-[#F8FAFC] border-t border-[#DCE2E5] flex flex-col sm:flex-row items-center justify-between gap-3 flex-shrink-0">
              <button
                type="button"
                onClick={() => setInspectingService(null)}
                className="w-full sm:w-auto px-4 py-2 rounded-lg border border-[#DCE2E5] text-xs font-semibold text-[#5A6A78] hover:bg-slate-100 transition-colors"
              >
                Close
              </button>
              <Link
                href={`/contact/?service=${encodeURIComponent(inspectingService.title)}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#155497] hover:bg-[#123A68] text-white text-xs font-semibold px-6 py-2.5 rounded-lg shadow-xs transition-colors"
              >
                <span>Requisition This Scope</span>
                <IconChevronRight className="w-3.5 h-3.5 text-[#F28A00]" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
