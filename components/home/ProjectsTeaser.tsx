import React from "react";
import Link from "next/link";
import { projectsData, getDisplayClient, getDisplaySite } from "@/data/projects";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { IconChevronRight, IconArrowRight, IconMapPin, IconUsers } from "@/components/ui/Icons";

export function ProjectsTeaser() {
  // Select 4 representative projects across different years and units
  const highlightedProjects = [
    projectsData.find((p) => p.srNo === 49)!, // 2026 Turnkey Nayara
    projectsData.find((p) => p.srNo === 48)!, // 2025 HMEL Bhatinda
    projectsData.find((p) => p.srNo === 32)!, // 2022 RIL Jamnagar FCCU Reactor
    projectsData.find((p) => p.srNo === 6)!   // 2015 Essar Vadinar Exchangers
  ];

  return (
    <section className="relative bg-[#F8FAFC] py-16 lg:py-24 border-b border-[#DCE2E5] overflow-hidden">
      {/* Ambient background decoration */}
      <div
        aria-hidden="true"
        className="absolute -top-32 -left-32 w-80 h-80 rounded-full bg-[#155497]/[0.025] blur-3xl pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-0 right-10 w-96 h-96 rounded-full bg-[#F28A00]/[0.02] blur-3xl pointer-events-none"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <SectionHeader
            badge="Proven Track Record"
            title="Documented Refinery Turnaround Experience"
            description="Verified historical project register spanning 49 major shutdown scopes across Indian petroleum and petrochemical refining complexes from 2014 through 2026."
            className="mb-0!"
          />
          <Link
            href="/projects/"
            className="group mt-4 md:mt-0 inline-flex items-center gap-1.5 text-sm font-bold text-[#155497] hover:text-[#123A68]"
          >
            <span>Search Complete 49-Record Register</span>
            <IconArrowRight className="w-4 h-4 text-[#F28A00] transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>

        {/* 4 Representative Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {highlightedProjects.map((proj) => (
            <div
              key={proj.id}
              className="group bg-white rounded-xl border border-[#DCE2E5] p-6 shadow-2xs hover:shadow-md hover:border-[#155497]/50 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="px-2.5 py-1 rounded-md bg-[#155497]/10 text-[#155497] text-xs font-bold border border-[#155497]/15">
                    {proj.year} &bull; {proj.month}
                  </span>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-slate-100 text-[#5A6A78] border border-slate-200/60">
                    {proj.category}
                  </span>
                </div>

                <h3 className="text-base font-bold text-[#292929] mb-2 leading-snug group-hover:text-[#155497] transition-colors">
                  {proj.jobDescription}
                </h3>

                <div className="space-y-1.5 text-xs text-[#5A6A78] mt-4 pt-3 border-t border-[#DCE2E5]">
                  <div className="flex items-center gap-2">
                    <IconMapPin className="w-3.5 h-3.5 text-[#F28A00] flex-shrink-0" />
                    <span className="truncate">{getDisplaySite(proj)}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <IconUsers className="w-3.5 h-3.5 text-[#155497] flex-shrink-0" />
                    <span>Contractor / Client: {getDisplayClient(proj)}</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 mt-4 border-t border-slate-100 text-xs">
                <span className="text-[#5A6A78]">
                  Recorded Duration: <strong className="text-[#292929]">{proj.period}</strong>
                </span>
                <span className="text-[#5A6A78]">
                  Deployed Manpower: <strong className="text-[#155497] font-bold">{proj.manpowerQty} MP</strong>
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Callout Strip */}
        <div className="bg-gradient-to-r from-white via-white to-[#F0F5FA] rounded-xl border border-[#DCE2E5] p-6 shadow-2xs hover:border-[#155497]/30 transition-all flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg bg-[#155497] text-white flex items-center justify-center font-bold text-lg flex-shrink-0 shadow-xs">
              49
            </div>
            <div>
              <div className="text-sm font-bold text-[#292929]">
                Full Historical Project Archive Available
              </div>
              <div className="text-xs text-[#5A6A78]">
                Interactive filtering by year (2014–2026), refinery unit, contractor, and recorded scope.
              </div>
            </div>
          </div>
          <Link
            href="/projects/"
            className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#155497] hover:bg-[#123A68] text-white text-xs font-semibold px-5 py-3 rounded-md shadow-xs hover:shadow transition-all"
          >
            <span>Launch Project Experience Explorer</span>
            <IconChevronRight className="w-3.5 h-3.5 text-[#F28A00] transition-transform duration-200 group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
