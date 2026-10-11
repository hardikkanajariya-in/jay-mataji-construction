"use client";

import React, { useState, useMemo, useEffect } from "react";
import { projectsData, ProjectRecord, getDisplayClient, getDisplaySite } from "@/data/projects";
import { IconSearch, IconMapPin, IconUsers, IconX } from "@/components/ui/Icons";

export function ProjectExplorer() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedYear, setSelectedYear] = useState<string>("ALL");
  const [selectedCategory, setSelectedCategory] = useState<string>("ALL");
  const [sortBy, setSortBy] = useState<"year-desc" | "year-asc" | "manpower-desc">("year-desc");
  const [inspectingRecord, setInspectingRecord] = useState<ProjectRecord | null>(null);

  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && inspectingRecord) {
        setInspectingRecord(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [inspectingRecord]);

  // Extract distinct years and categories
  const years = useMemo(() => {
    const set = new Set(projectsData.map((p) => p.year));
    return Array.from(set).sort((a, b) => b - a);
  }, []);

  const categories = useMemo(() => {
    const set = new Set(projectsData.map((p) => p.category));
    return Array.from(set);
  }, []);

  // Filter and sort
  const filteredProjects = useMemo(() => {
    return projectsData
      .filter((proj) => {
        if (selectedYear !== "ALL" && proj.year.toString() !== selectedYear) {
          return false;
        }

        if (selectedCategory !== "ALL" && proj.category !== selectedCategory) {
          return false;
        }

        if (searchQuery.trim() !== "") {
          const q = searchQuery.toLowerCase();
          const matchClient = getDisplayClient(proj).toLowerCase().includes(q);
          const matchSite = getDisplaySite(proj).toLowerCase().includes(q);
          const matchDesc = proj.jobDescription.toLowerCase().includes(q);
          const matchCat = proj.category.toLowerCase().includes(q);
          const matchYear = proj.year.toString().includes(q);
          if (!matchClient && !matchSite && !matchDesc && !matchCat && !matchYear) {
            return false;
          }
        }

        return true;
      })
      .sort((a, b) => {
        if (sortBy === "year-desc") {
          return b.year - a.year || b.srNo - a.srNo;
        }
        if (sortBy === "year-asc") {
          return a.year - b.year || a.srNo - b.srNo;
        }
        if (sortBy === "manpower-desc") {
          return b.manpowerQty - a.manpowerQty;
        }
        return 0;
      });
  }, [searchQuery, selectedYear, selectedCategory, sortBy]);

  // Quick aggregate stats for active filter
  const totalFilteredManpower = useMemo(() => {
    return filteredProjects.reduce((sum, p) => sum + p.manpowerQty, 0);
  }, [filteredProjects]);

  const handleResetFilters = () => {
    setSearchQuery("");
    setSelectedYear("ALL");
    setSelectedCategory("ALL");
    setSortBy("year-desc");
  };

  const hasActiveFilters = searchQuery !== "" || selectedYear !== "ALL" || selectedCategory !== "ALL" || sortBy !== "year-desc";

  return (
    <div className="space-y-8">
      {/* Quick Year Pill Navigator */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none">
        <span className="text-xs font-bold text-[#5A6A78] uppercase tracking-wider mr-2 whitespace-nowrap">
          Timeline:
        </span>
        <button
          type="button"
          onClick={() => setSelectedYear("ALL")}
          className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all whitespace-nowrap border ${
            selectedYear === "ALL"
              ? "bg-[#155497] text-white border-[#155497] shadow-xs"
              : "bg-white text-[#292929] border-[#DCE2E5] hover:bg-slate-50"
          }`}
        >
          All Years (49)
        </button>
        {years.map((y) => {
          const count = projectsData.filter((p) => p.year === y).length;
          const isSelected = selectedYear === y.toString();
          return (
            <button
              key={y}
              type="button"
              onClick={() => setSelectedYear(isSelected ? "ALL" : y.toString())}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all whitespace-nowrap border ${
                isSelected
                  ? "bg-[#155497] text-white border-[#155497] shadow-xs"
                  : "bg-white text-[#292929] border-[#DCE2E5] hover:bg-slate-50"
              }`}
            >
              {y} ({count})
            </button>
          );
        })}
      </div>

      {/* Search & Filter Toolbar */}
      <div className="bg-white rounded-xl border border-[#DCE2E5] p-5 shadow-xs">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          {/* Text Search */}
          <div className="md:col-span-5 relative">
            <label htmlFor="search-input" className="sr-only">Search projects</label>
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
              <IconSearch className="w-4 h-4" />
            </div>
            <input
              id="search-input"
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by refinery, unit (FCCU/CDU), or scope..."
              className="w-full pl-9 pr-8 py-2.5 bg-slate-50 border border-[#DCE2E5] rounded-lg text-xs sm:text-sm text-[#292929] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#155497] focus:bg-white transition-all"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-600"
                aria-label="Clear search"
              >
                <IconX className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Category Filter */}
          <div className="md:col-span-4">
            <label htmlFor="category-select" className="sr-only">Filter by Scope Category</label>
            <select
              id="category-select"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full px-3 py-2.5 bg-slate-50 border border-[#DCE2E5] rounded-lg text-xs sm:text-sm text-[#292929] focus:outline-none focus:ring-2 focus:ring-[#155497] focus:bg-white"
            >
              <option value="ALL">All Equipment Categories</option>
              {categories.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>

          {/* Sort By */}
          <div className="md:col-span-3">
            <label htmlFor="sort-select" className="sr-only">Sort By</label>
            <select
              id="sort-select"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as "year-desc" | "year-asc" | "manpower-desc")}
              className="w-full px-3 py-2.5 bg-slate-50 border border-[#DCE2E5] rounded-lg text-xs sm:text-sm text-[#292929] focus:outline-none focus:ring-2 focus:ring-[#155497] focus:bg-white"
            >
              <option value="year-desc">Latest First (2026 &rarr; 2014)</option>
              <option value="year-asc">Earliest First (2014 &rarr; 2026)</option>
              <option value="manpower-desc">Highest Trade Deployment</option>
            </select>
          </div>
        </div>
      </div>

      {/* Results Grid */}
      {filteredProjects.length === 0 ? (
        <div className="bg-white rounded-xl border border-[#DCE2E5] p-12 text-center max-w-lg mx-auto">
          <div className="w-12 h-12 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center mx-auto mb-3">
            <IconSearch className="w-6 h-6" />
          </div>
          <h3 className="text-base font-bold text-[#292929]">No historical records match your filter criteria</h3>
          <p className="text-xs text-[#5A6A78] mt-1">
            Try adjusting your search terms, selecting another equipment scope, or clearing filters.
          </p>
          <button
            type="button"
            onClick={handleResetFilters}
            className="mt-4 px-4 py-2 bg-[#155497] text-white text-xs font-semibold rounded-lg hover:bg-[#123A68] transition-colors"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((proj) => (
            <div
              key={proj.id}
              role="button"
              tabIndex={0}
              onClick={() => setInspectingRecord(proj)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setInspectingRecord(proj);
                }
              }}
              className="bg-white rounded-xl border border-[#DCE2E5] p-5 shadow-xs hover:border-[#155497]/50 hover:shadow-sm transition-all flex flex-col justify-between cursor-pointer focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#155497]"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="px-2.5 py-0.5 rounded bg-[#155497]/10 text-[#155497] text-xs font-bold">
                    {proj.year} &bull; {proj.month}
                  </span>
                  <span className="text-[11px] font-semibold px-2 py-0.5 rounded bg-slate-100 text-[#5A6A78]">
                    Record #{proj.srNo}
                  </span>
                </div>

                <div className="text-[11px] uppercase font-bold tracking-wider text-[#F28A00] mb-1">
                  {proj.category}
                </div>

                <h3 className="text-sm font-bold text-[#292929] line-clamp-2 leading-snug mb-3">
                  {proj.jobDescription}
                </h3>

                <div className="space-y-1.5 text-xs text-[#5A6A78] pt-3 border-t border-[#DCE2E5]">
                  <div className="flex items-start gap-2">
                    <IconMapPin className="w-3.5 h-3.5 text-[#F28A00] flex-shrink-0 mt-0.5" />
                    <span className="line-clamp-2">{getDisplaySite(proj)}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <IconUsers className="w-3.5 h-3.5 text-[#155497] flex-shrink-0 mt-0.5" />
                    <span className="line-clamp-1">{getDisplayClient(proj)}</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                <div>
                  <span className="text-[#5A6A78] block text-[11px]">Duration &bull; Crew</span>
                  <span className="font-semibold text-[#292929]">{proj.period} &bull; {proj.manpowerQty} MP</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Record Inspector Modal */}
      {inspectingRecord && (
        <div
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-150"
          onClick={() => setInspectingRecord(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-xl font-extrabold text-[#292929] mb-4 leading-snug">
              {inspectingRecord.jobDescription}
            </h3>

            <div className="space-y-3 bg-[#F8FAFC] p-4 rounded-xl border border-[#DCE2E5] text-xs sm:text-sm">
              <div>
                <span className="text-[#5A6A78] block text-xs">Contracting Partner / EPC:</span>
                <span className="font-bold text-[#292929]">{getDisplayClient(inspectingRecord)}</span>
              </div>
              <div>
                <span className="text-[#5A6A78] block text-xs">Refinery Unit &amp; Location:</span>
                <span className="font-bold text-[#292929]">{getDisplaySite(inspectingRecord)}</span>
              </div>
              <div className="grid grid-cols-2 gap-3 pt-2 border-t border-[#DCE2E5]">
                <div>
                  <span className="text-[#5A6A78] block text-xs">Outage Window:</span>
                  <span className="font-semibold text-[#292929]">{inspectingRecord.month} {inspectingRecord.year}</span>
                </div>
                <div>
                  <span className="text-[#5A6A78] block text-xs">Turnaround Duration:</span>
                  <span className="font-semibold text-[#292929]">{inspectingRecord.period}</span>
                </div>
              </div>
              <div className="pt-2 border-t border-[#DCE2E5]">
                <span className="text-[#5A6A78] block text-xs">Trade Crew Deployed:</span>
                <span className="font-bold text-[#155497] text-base">{inspectingRecord.manpowerQty} Technical Manpower</span>
              </div>
            </div>

            <div className="mt-6 flex justify-end gap-3">
              <button
                type="button"
                onClick={() => setInspectingRecord(null)}
                className="px-5 py-2.5 bg-[#155497] text-white text-xs font-semibold rounded-lg hover:bg-[#123A68] transition-colors"
              >
                Close Record
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
