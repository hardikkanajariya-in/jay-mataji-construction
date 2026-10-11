import React from "react";
import Link from "next/link";
import { coreServiceAreas, turnaroundHighlights } from "@/data/services";
import {
  IconWrench,
  IconActivity,
  IconUsers,
  IconShield,
  IconCheckCircle,
  IconChevronRight
} from "@/components/ui/Icons";

export function CoreServiceAreas() {
  const getAreaIcon = (iconName: string) => {
    switch (iconName) {
      case "heat-exchanger":
        return IconWrench;
      case "column":
        return IconActivity;
      case "cooler":
        return IconShield;
      case "reactor":
        return IconWrench;
      case "manpower":
      default:
        return IconUsers;
    }
  };

  return (
    <div className="space-y-12 mb-16">
      {/* Turnaround Profile & Capabilities Card */}
      <div className="bg-[#123A68] text-white rounded-2xl p-6 sm:p-8 lg:p-10 shadow-lg border border-[#155497] relative overflow-hidden">
        {/* Subtle decorative background glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#155497]/40 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F28A00]/20 border border-[#F28A00]/40 text-[#F28A00] text-xs font-bold uppercase tracking-wider mb-4">
              <span className="w-2 h-2 rounded-full bg-[#F28A00] animate-pulse" />
              Turnaround &amp; Shutdown Specialist
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-3">
              Specialized Static Equipment &amp; Refinery Shutdowns
            </h2>
            <p className="text-sm sm:text-base text-slate-200 leading-relaxed mb-4">
              Established in 2014 with a clear vision to provide expert manpower to execute critical static equipment maintenance jobs, scaffolding jobs, and reactor jobs in refineries. Since inception, JAY MATAJI CONSTRUCTION has executed several large shutdown jobs in almost all refineries across India and abroad.
            </p>
            <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-slate-200 pt-2 border-t border-white/10">
              <span className="inline-flex items-center gap-1.5 font-semibold text-white">
                <IconCheckCircle className="w-4 h-4 text-[#F28A00]" />
                In-House Tools &amp; Trackers
              </span>
              <span className="text-white/40">&bull;</span>
              <span className="inline-flex items-center gap-1.5 font-semibold text-white">
                <IconCheckCircle className="w-4 h-4 text-[#F28A00]" />
                700+ Manpower Ready
              </span>
              <span className="text-white/40">&bull;</span>
              <span className="inline-flex items-center gap-1.5 font-semibold text-white">
                <IconCheckCircle className="w-4 h-4 text-[#F28A00]" />
                Rapid Scalability On Demand
              </span>
            </div>
          </div>

          {/* Quick Metrics Grid */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            <div className="bg-white/10 backdrop-blur-xs rounded-xl p-4 sm:p-5 border border-white/10">
              <div className="text-2xl sm:text-3xl font-extrabold text-[#F28A00] mb-0.5">
                {turnaroundHighlights.establishedYear}
              </div>
              <div className="text-xs font-bold text-white uppercase tracking-wider mb-1">
                Established
              </div>
              <p className="text-[11px] text-slate-300">
                12+ years of dedicated turnaround &amp; shutdown excellence.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-xs rounded-xl p-4 sm:p-5 border border-white/10">
              <div className="text-2xl sm:text-3xl font-extrabold text-[#F28A00] mb-0.5">
                {turnaroundHighlights.availableManpower}
              </div>
              <div className="text-xs font-bold text-white uppercase tracking-wider mb-1">
                Active Manpower
              </div>
              <p className="text-[11px] text-slate-300">
                Available at any time, scalable as per client requirement.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-xs rounded-xl p-4 sm:p-5 border border-white/10">
              <div className="text-2xl sm:text-3xl font-extrabold text-white mb-0.5">
                100%
              </div>
              <div className="text-xs font-bold text-white uppercase tracking-wider mb-1">
                Tools &amp; Trackers
              </div>
              <p className="text-[11px] text-slate-300">
                Dedicated specialized equipment &amp; progress tracking.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-xs rounded-xl p-4 sm:p-5 border border-white/10">
              <div className="text-2xl sm:text-3xl font-extrabold text-white mb-0.5">
                Global
              </div>
              <div className="text-xs font-bold text-white uppercase tracking-wider mb-1">
                Refinery Reach
              </div>
              <p className="text-[11px] text-slate-300">
                Turnaround jobs across almost all Indian &amp; foreign units.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 5 Core Service Areas Section */}
      <div>
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#155497] block mb-1">
              Core Strategic Capability
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-[#292929]">
              Our Primary Service Areas
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-[#5A6A78] max-w-md mt-1 sm:mt-0">
            Structured turnkey scope packages executed with proprietary tools, trackers, and vetted refinery crews.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {coreServiceAreas.map((area, idx) => {
            const Icon = getAreaIcon(area.iconName);
            const isLast = idx === coreServiceAreas.length - 1;

            return (
              <div
                key={area.id}
                className={`bg-white rounded-xl border border-[#DCE2E5] p-5 shadow-xs hover:border-[#155497]/50 hover:shadow-md transition-all flex flex-col justify-between ${
                  isLast ? "md:col-span-2 lg:col-span-1" : ""
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-lg bg-[#155497]/10 text-[#155497] flex items-center justify-center font-bold">
                      <Icon className="w-5 h-5 text-[#155497]" />
                    </div>
                    <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-[#EEF1F2] text-[#5A6A78]">
                      Area 0{idx + 1}
                    </span>
                  </div>

                  <h4 className="text-base font-bold text-[#292929] mb-2 leading-snug">
                    {area.title}
                  </h4>
                  <p className="text-xs text-[#5A6A78] leading-relaxed mb-4">
                    {area.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#DCE2E5] text-[11px] text-[#5A6A78]">
                  <span className="font-bold text-[#292929] block mb-1">Target Systems:</span>
                  <p className="line-clamp-2">{area.equipmentSummary}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Tools, Tracker & Scalability Notice */}
      <div className="bg-[#F8FAFC] rounded-xl border-l-4 border-l-[#F28A00] border border-[#DCE2E5] p-5 sm:p-6 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 rounded bg-[#F28A00] text-white text-[10px] font-extrabold uppercase tracking-wider">
              Tooling &amp; Workforce Commitment
            </span>
            <span className="text-xs font-bold text-[#292929]">
              Proprietary Trackers &amp; Heavy Tools Ready
            </span>
          </div>
          <p className="text-xs sm:text-sm text-[#5A6A78]">
            We maintain available tools, hydraulic torquing gear, hydro-jetters, and progress trackers for all jobs. 700+ manpower is available at any time, and we can arrange additional qualified crews tailored to your outage schedule.
          </p>
        </div>
        <Link
          href="/contact/?service=Manpower%20and%20Tooling%20Requisition"
          className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-lg bg-[#155497] hover:bg-[#123A68] text-white text-xs font-bold shadow-xs whitespace-nowrap transition-colors flex-shrink-0"
        >
          <span>Mobilize Turnaround Crew</span>
          <IconChevronRight className="w-3.5 h-3.5 text-[#F28A00]" />
        </Link>
      </div>
    </div>
  );
}
