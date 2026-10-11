import React from "react";
import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { EquipmentExplorer } from "@/components/shutdown/EquipmentExplorer";
import { ContactCTA } from "@/components/home/ContactCTA";

export const metadata: Metadata = {
  title: "Shutdown & Turnaround Solutions | Equipment Execution Scopes",
  description: "Detailed equipment shutdown workflows: Heat exchangers, distillation column trays, catalytic reactors, fired heaters, valves, pumps, compressors, and cooling towers."
};

const turnaroundExecutionHighlights = [
  {
    title: "Positive Blinding & Tagging",
    desc: "Strict adherence to client blind lists, paddle blinds, spectacle blinds, and controlled tagging before any line break."
  },
  {
    title: "Controlled Unbolting & Opening",
    desc: "Calibrated hydraulic torque wrenches and pneumatic impact tools for channel heads, manways, and high-pressure flanges."
  },
  {
    title: "Hydro Jetting & Descaling",
    desc: "Rotary high-pressure hydro jetting for bundle tube bores, shell scraping, and tray saddle grit cleaning."
  },
  {
    title: "Pressure & Hydro Testing",
    desc: "Shell and tube hydro testing at specified test pressures, silpan testing on column trays, and valve seat verification."
  },
  {
    title: "Torque Box-Up & De-Blinding",
    desc: "Sequential torque bolt tightening with certified spiral wound or ring-type gaskets followed by orderly de-blinding."
  },
  {
    title: "Safety & Gas-Free Compliance",
    desc: "Full adherence to refinery work permits, confined space entry protocols, nitrogen purging, and continuous air monitoring."
  }
];

export default function ShutdownTurnaroundPage() {
  return (
    <>
      <PageHeader
        badge="Execution Specialization"
        title="Refinery Shutdown &amp; Turnaround Solutions"
        description="Detailed technical breakdown of documented turnaround scopes by equipment category—from initial positive blinding to internal repairs, hydro testing, and startup de-blinding."
        breadcrumbs={[{ label: "Shutdown & Turnaround" }]}
      />

      {/* Main Interactive Equipment Explorer */}
      <section className="bg-[#EEF1F2] py-12 lg:py-20 border-b border-[#DCE2E5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-xl sm:text-2xl font-bold text-[#292929]">
              Equipment-Specific Shutdown Scopes
            </h2>
            <p className="text-xs sm:text-sm text-[#5A6A78] mt-1">
              Select an equipment group to inspect the documented maintenance activities, internals serviced, and execution details.
            </p>
          </div>

          <EquipmentExplorer />
        </div>
      </section>

      {/* Turnaround Protocol Strip */}
      <section className="bg-white py-16 lg:py-24 border-b border-[#DCE2E5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#155497]/10 text-[#155497] border border-[#155497]/20 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F28A00]"></span>
              <span>Site Execution Standards</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#292929]">
              Core Turnaround Execution Disciplines
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#5A6A78] leading-relaxed">
              Every maintenance package is executed with rigorous procedural discipline to protect refinery asset integrity, minimize downtime duration, and guarantee zero-rework handovers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {turnaroundExecutionHighlights.map((hl, i) => (
              <div
                key={i}
                className="bg-[#F8FAFC] rounded-xl border border-[#DCE2E5] p-6 hover:border-[#155497]/40 transition-colors"
              >
                <div className="w-8 h-8 rounded-lg bg-[#155497]/10 text-[#155497] flex items-center justify-center font-bold text-xs mb-4">
                  0{i + 1}
                </div>
                <h3 className="text-base font-bold text-[#292929] mb-2">
                  {hl.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#5A6A78] leading-relaxed">
                  {hl.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 p-6 rounded-xl bg-[#EEF1F2] border border-[#DCE2E5] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <div className="text-sm font-bold text-[#292929]">Dedicated Tools &amp; Trackers on Every Job</div>
              <div className="text-xs text-[#5A6A78] mt-0.5">
                Our crews mobilize with full complement of hydraulic torquing, tube rolling, and high-pressure jetting setups.
              </div>
            </div>
            <a
              href="/contact/"
              className="inline-flex items-center justify-center gap-2 bg-[#155497] text-white text-xs font-semibold px-5 py-2.5 rounded-md hover:bg-[#123A68] transition-colors"
            >
              <span>Consult with Operations Team</span>
            </a>
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
