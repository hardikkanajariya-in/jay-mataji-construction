import React from "react";
import Link from "next/link";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { IconChevronRight } from "@/components/ui/Icons";

interface EquipmentItem {
  name: string;
  category: string;
  scopeSummary: string;
  keyComponents: string[];
  svgType: "exchanger" | "column" | "reactor" | "pump";
}

const equipmentList: EquipmentItem[] = [
  {
    name: "Shell & Tube Heat Exchangers",
    category: "Static Equipment",
    scopeSummary: "Blinding, channel cover removal, high-pressure hydro jetting, rolling, Belzona coating, hydro testing, and box-up.",
    keyComponents: ["Tube Sheet", "Baffle Plates", "Tube Bundle", "Channel Head", "Pass Partition"],
    svgType: "exchanger"
  },
  {
    name: "Distillation Columns & Towers",
    category: "Static Equipment",
    scopeSummary: "Manway opening, tray manway and packing removal, internal shell cleaning, tray replacement, silpan testing, and closure.",
    keyComponents: ["Valve & Sieve Trays", "Downcomers", "Structured Packing", "Demister Pads", "Manways"],
    svgType: "column"
  },
  {
    name: "Catalytic Reactors & Regenerators",
    category: "Static Equipment",
    scopeSummary: "Controlled atmosphere unbolting, gravity and vacuum catalyst unloading, coke removal, and sock/dense loading.",
    keyComponents: ["Catalyst Bed", "Support Grids", "Inlet Diffuser", "Thermocouple Wells", "Quench Piping"],
    svgType: "reactor"
  },
  {
    name: "Heavy Process Pumps & Rotating",
    category: "Rotating Equipment",
    scopeSummary: "Mechanical seal overhaul, impeller clearance inspection, bearing replacement, casing refurbishment, and laser alignment.",
    keyComponents: ["Mechanical Seal", "Impeller & Casing", "Shaft Sleeve", "Bearing Housing", "Flexible Coupling"],
    svgType: "pump"
  }
];

function EquipmentDiagram({ type }: { type: EquipmentItem["svgType"] }) {
  if (type === "exchanger") {
    return (
      <svg viewBox="0 0 200 120" className="w-full h-24 stroke-[#155497] fill-none stroke-[1.5]" aria-hidden="true">
        {/* Outer Shell */}
        <rect x="35" y="25" width="130" height="70" rx="4" className="fill-[#155497]/5 stroke-[#155497]" />
        {/* Channel Head Left */}
        <path d="M35 25 C15 35 15 85 35 95 Z" className="fill-[#F28A00]/10 stroke-[#F28A00]" />
        {/* Shell Cover Right */}
        <path d="M165 25 C185 35 185 85 165 95 Z" className="fill-[#155497]/10" />
        {/* Tube Bundle Lines */}
        <line x1="45" y1="45" x2="155" y2="45" strokeDasharray="3 2" />
        <line x1="45" y1="60" x2="155" y2="60" />
        <line x1="45" y1="75" x2="155" y2="75" strokeDasharray="3 2" />
        {/* Baffles */}
        <line x1="75" y1="25" x2="75" y2="75" strokeWidth="2" />
        <line x1="105" y1="45" x2="105" y2="95" strokeWidth="2" />
        <line x1="135" y1="25" x2="135" y2="75" strokeWidth="2" />
        {/* Nozzles */}
        <rect x="55" y="12" width="14" height="13" className="stroke-[#155497]" />
        <rect x="135" y="95" width="14" height="13" className="stroke-[#155497]" />
      </svg>
    );
  }

  if (type === "column") {
    return (
      <svg viewBox="0 0 200 120" className="w-full h-24 stroke-[#155497] fill-none stroke-[1.5]" aria-hidden="true">
        {/* Column Shell */}
        <rect x="75" y="10" width="50" height="100" rx="8" className="fill-[#155497]/5 stroke-[#155497]" />
        {/* Trays */}
        <line x1="75" y1="30" x2="115" y2="30" strokeWidth="2" />
        <line x1="115" y1="30" x2="115" y2="45" stroke="#F28A00" />
        <line x1="85" y1="50" x2="125" y2="50" strokeWidth="2" />
        <line x1="85" y1="50" x2="85" y2="65" stroke="#F28A00" />
        <line x1="75" y1="70" x2="115" y2="70" strokeWidth="2" />
        <line x1="115" y1="70" x2="115" y2="85" stroke="#F28A00" />
        <line x1="85" y1="90" x2="125" y2="90" strokeWidth="2" />
        {/* Manway Circles */}
        <circle cx="100" cy="40" r="4" className="stroke-[#F28A00] fill-[#F28A00]/20" />
        <circle cx="100" cy="80" r="4" className="stroke-[#F28A00] fill-[#F28A00]/20" />
      </svg>
    );
  }

  if (type === "reactor") {
    return (
      <svg viewBox="0 0 200 120" className="w-full h-24 stroke-[#155497] fill-none stroke-[1.5]" aria-hidden="true">
        {/* Reactor Vessel */}
        <path d="M70 25 C70 12 130 12 130 25 L130 95 C130 108 70 108 70 95 Z" className="fill-[#155497]/5 stroke-[#155497]" />
        {/* Catalyst Bed Fill */}
        <rect x="76" y="42" width="48" height="42" className="fill-[#F28A00]/15 stroke-[#F28A00]" strokeDasharray="2 2" />
        {/* Support Grid */}
        <line x1="74" y1="84" x2="126" y2="84" strokeWidth="2" stroke="#155497" />
        {/* Top & Bottom Flanges */}
        <line x1="65" y1="20" x2="135" y2="20" strokeWidth="3" />
        <line x1="65" y1="100" x2="135" y2="100" strokeWidth="3" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 200 120" className="w-full h-24 stroke-[#155497] fill-none stroke-[1.5]" aria-hidden="true">
      {/* Pump Casing Volute */}
      <circle cx="85" cy="60" r="32" className="fill-[#155497]/5 stroke-[#155497]" />
      {/* Impeller Eye */}
      <circle cx="85" cy="60" r="10" className="fill-[#F28A00]/20 stroke-[#F28A00]" />
      {/* Discharge Nozzle */}
      <rect x="75" y="10" width="20" height="20" className="stroke-[#155497]" />
      {/* Shaft & Motor Box */}
      <rect x="117" y="52" width="55" height="16" rx="2" className="fill-slate-100 stroke-[#155497]" />
      <rect x="135" y="44" width="37" height="32" rx="3" className="fill-[#123A68]/10 stroke-[#123A68]" />
    </svg>
  );
}

export function EquipmentShowcase() {
  return (
    <section className="bg-white py-16 lg:py-24 border-b border-[#DCE2E5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Engineering Focus"
          title="Supported Refinery &amp; Petrochemical Equipment"
          description="Direct mechanical capabilities across primary process vessels, heat transfer units, and rotating machinery supported during planned outages."
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {equipmentList.map((item) => (
            <div
              key={item.name}
              className="bg-[#F8FAFC] rounded-xl border border-[#DCE2E5] p-5 flex flex-col justify-between hover:border-[#155497]/50 transition-all hover:shadow-xs"
            >
              <div>
                <div className="bg-white rounded-lg p-2 border border-[#DCE2E5] mb-4 flex items-center justify-center">
                  <EquipmentDiagram type={item.svgType} />
                </div>
                <div className="text-[11px] font-bold uppercase tracking-wider text-[#F28A00] mb-1">
                  {item.category}
                </div>
                <h3 className="text-base font-bold text-[#292929] mb-2 leading-snug">
                  {item.name}
                </h3>
                <p className="text-xs text-[#5A6A78] leading-relaxed mb-4">
                  {item.scopeSummary}
                </p>
              </div>

              <div className="pt-3 border-t border-[#DCE2E5]">
                <div className="text-[10px] uppercase font-bold tracking-wider text-[#292929] mb-2">
                  Key Internals Serviced:
                </div>
                <div className="flex flex-wrap gap-1">
                  {item.keyComponents.map((comp) => (
                    <span
                      key={comp}
                      className="px-2 py-0.5 rounded text-[10px] bg-white border border-[#DCE2E5] text-[#5A6A78]"
                    >
                      {comp}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/shutdown-turnaround/"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#155497] hover:text-[#123A68] hover:underline"
          >
            <span>Explore Technical Work Scopes by Equipment Category</span>
            <IconChevronRight className="w-4 h-4 text-[#F28A00]" />
          </Link>
        </div>
      </div>
    </section>
  );
}
