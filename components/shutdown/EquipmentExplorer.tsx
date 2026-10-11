"use client";

import React, { useState } from "react";
import Image from "next/image";
import { IconCheckCircle } from "@/components/ui/Icons";

interface ScopeItem {
  id: string;
  name: string;
  subtitle: string;
  category: "Static Equipment" | "Rotating & Mechanical" | "Site Execution";
  image: string;
  activities: string[];
  executionDetails: string;
}

const scopes: ScopeItem[] = [
  {
    id: "heat-exchangers",
    name: "Heat Exchangers",
    subtitle: "Shell & Tube, Reboilers, Condensers",
    category: "Static Equipment",
    image: "/images/heat-exchanger-maintenance.jpg",
    executionDetails: "Complete mechanical overhaul sequence for refinery heat exchangers under planned shutdown schedules. Crews handle critical positive blinding, channel head de-bolting, internal cleaning, Belzona protective coating, hydro testing, and precision torque box-up.",
    activities: [
      "Nozzle and manifold positive blinding to establish clear battery isolation",
      "Channel cover, shell cover, and floating head unbolting and crane lifting",
      "Internal tube cleaning using mechanical rolling, brushes, and sand blasting",
      "High-pressure water hydro jetting to clear stubborn deposits and process scale",
      "Belzona protective polymer coating application on tube sheet faces and channel heads",
      "Hydrostatic testing of both tube-side and shell-side circuits to verify joint integrity",
      "Precision box-up with fresh spiral wound gaskets and systematic de-blinding"
    ]
  },
  {
    id: "columns-and-trays",
    name: "Columns & Distillation Towers",
    subtitle: "Fractionators, Strippers, Absorbers",
    image: "/images/scaffolding-column-maintenance.jpg",
    category: "Static Equipment",
    executionDetails: "Turnaround maintenance inside tall process distillation towers (CDU, VDU, FCCU). Involves confined-space entry, tray manway opening, hardware inspection, tray re-fixing, hydroblasting, silpan testing, and systematic closure.",
    activities: [
      "Total column blinding and certified gas-free manway door unbolting",
      "Dismantling of tray manways, valve/sieve active trays, and structured packing beds",
      "Internal column shell scraping, grit cleaning, and corrosion inspection support",
      "High-pressure hydroblasting of fouled trays, downcomers, and tray support saddles",
      "Silpan test execution to verify tray levelness and hydraulic integrity",
      "Re-fixing and torque-tightening of tray manways and packing hold-down grids",
      "Final shell manway box-up and systematic battery limit de-blinding"
    ]
  },
  {
    id: "reactors-regenerators",
    name: "Reactors & Regenerators",
    subtitle: "FCCU, Hydrocrackers, Hydrotreaters",
    image: "/images/scaffolding-column-maintenance.jpg",
    category: "Static Equipment",
    executionDetails: "High-hazard, critical-path maintenance of catalytic reactors, regenerators, and reformer loops. Specialized manpower executes blind isolation, inert-entry catalyst dumping, vacuum unloading, internal grid refurbishment, and sock/dense loading.",
    activities: [
      "Nitrogen-blanketed or air-free isolation and positive blinding",
      "Top and bottom reactor manway de-bolting and dumping chute rigging",
      "Catalyst unloading by gravity drop and vacuum suction with segregation",
      "Internal coke removal and refractory/internal shroud visual inspection assistance",
      "Precision catalyst reloading utilizing approved sock or dense loading methods",
      "Internal support grid, scallop, and center screen repair or replacement",
      "Torque-controlled closure of reactor manways and leak test witness verification"
    ]
  },
  {
    id: "vessels-and-spheres",
    name: "Vessels, Drums & Spheres",
    subtitle: "Separators, Knock-Out Pots, LPG Spheres",
    image: "/images/hero-refinery.jpg",
    category: "Static Equipment",
    executionDetails: "Turnaround inspection and servicing of pressure vessels, surge drums, and storage spheres. Activities include isolation, sludge removal, vessel surface passivation, and internal fitting repairs.",
    activities: [
      "Positive blinding of all process, drain, and instrument nozzle flanges",
      "Gas-free manway unbolting and internal ventilation setup",
      "Internal sludge removal, grit cleaning, and high-pressure chemical wash",
      "Vessel internal passivation and protective chemical passivation rinse",
      "Internal distributor pipes, vortex breakers, and demister pad servicing",
      "Torque box-up with fresh gaskets and joint hydrostatic verification"
    ]
  },
  {
    id: "heaters-and-furnaces",
    name: "Heaters, Boilers & Furnaces",
    subtitle: "Fired Process Heaters & Auxiliary Boilers",
    image: "/images/hero-refinery.jpg",
    category: "Static Equipment",
    executionDetails: "Cleaning and decoking of refinery fired process heaters and steam boilers. Crews perform tube coil decoking, external inert blasting, ACFM chemical wash, and header box plug servicing.",
    activities: [
      "Process coil blinding and radiant/convection section opening",
      "Mechanical and chemical decoking of heater tube passes",
      "Inert blasting and high-pressure surface wash of tube outer banks",
      "Chemical wash and ACFM (Alternating Current Field Measurement) cleaning",
      "Furnace header box plug unbolting, inspection, and high-pressure hydro testing",
      "Damper, peep door, and burner assembly servicing support"
    ]
  },
  {
    id: "valves-servicing",
    name: "Industrial Valves",
    subtitle: "Gate, Globe, Check, Relief & Control Valves",
    image: "/images/equipment-servicing.jpg",
    category: "Rotating & Mechanical",
    executionDetails: "Comprehensive turnaround valve servicing including in-situ and shop overhaul. Technicians perform body unbolting, internal and external cleaning, seat lapping, packing replacement, and mandatory hydrostatic pressure testing.",
    activities: [
      "De-bolting valves from process piping and rigging to overhaul bays",
      "Internal and external cleaning of valve bodies, bonnets, and discs",
      "Precision lapping of gate faces and globe seats to restore bubble-tight seal",
      "Replacement of gland packing rings, stem seals, and bonnet spiral gaskets",
      "Hydrostatic testing of valve bodies and seat leak test sign-off",
      "Re-installation in pipeline manifolds with calibrated flange torque"
    ]
  },
  {
    id: "pumps-and-rotating",
    name: "Process Pumps",
    subtitle: "Centrifugal Hydrocarbon & Utility Pumps",
    image: "/images/equipment-servicing.jpg",
    category: "Rotating & Mechanical",
    executionDetails: "Mechanical overhauls of single and multi-stage process pumps during unit shutdown. Overhaul includes casing opening, bearing and mechanical seal renewal, impeller check, and laser alignment.",
    activities: [
      "Coupling de-coupling, piping spool disconnection, and pump pull-out",
      "Casing dismantling, impeller removal, and shaft runout measurement",
      "Replacement of mechanical seal cartridges, O-rings, and bearing sets",
      "Internal wear ring clearance measurement and casing refurbishment",
      "Motor-to-pump re-alignment to tight angular and parallel tolerances",
      "Coupling re-assembly, lube fill, and solo/coupled test verification"
    ]
  },
  {
    id: "compressors-and-motors",
    name: "Compressors & Motors",
    subtitle: "Gas Compressors, Blowers, Heavy Drivers",
    image: "/images/equipment-servicing.jpg",
    category: "Rotating & Mechanical",
    executionDetails: "Mechanical overhauls, erection, and dynamic alignment of reciprocating and centrifugal process gas compressors and high-voltage drive motors.",
    activities: [
      "Cylinder head and suction/discharge valve removal and refurbishment",
      "Piston, rod, and crosshead clearance checks and packing replacement",
      "Erection and mechanical assembly of compressor modules and auxiliaries",
      "Dynamic and laser alignment between compressor shaft and drive motor",
      "Lube oil console flushing, oil filter replacement, and barrier seal checks"
    ]
  },
  {
    id: "cooling-towers",
    name: "Cooling Towers",
    subtitle: "Axial Fans & Right-Angle Gearboxes",
    image: "/images/equipment-servicing.jpg",
    category: "Rotating & Mechanical",
    executionDetails: "Replacement and overhaul of cooling tower mechanical drive assemblies. Involves rigging axial fan blades, right-angle gearbox replacement, and floating driveshaft alignment.",
    activities: [
      "Mechanical lockout, safe isolation, and fan deck staging",
      "Disassembly, inspection, and replacement of axial fan blade sets",
      "Right-angle drive gearbox unbolting, replacement, and oil level servicing",
      "Floating composite driveshaft and flexible coupling alignment",
      "Blade pitch angle calibration, static balancing, and vibration test run"
    ]
  }
];

export function EquipmentExplorer() {
  const [selectedId, setSelectedId] = useState(scopes[0].id);

  const selectedScope = scopes.find((s) => s.id === selectedId) || scopes[0];

  return (
    <div className="bg-white rounded-xl border border-[#DCE2E5] shadow-xs overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12">
        {/* Left Sidebar: Equipment List */}
        <div className="lg:col-span-4 border-b lg:border-b-0 lg:border-r border-[#DCE2E5] bg-[#F8FAFC] p-4 sm:p-6">
          <div className="text-xs font-bold uppercase tracking-wider text-[#155497] mb-3">
            Select Equipment Scope
          </div>
          <div className="space-y-1.5 max-h-[600px] overflow-y-auto pr-1">
            {scopes.map((scope) => {
              const isSelected = scope.id === selectedId;
              return (
                <button
                  key={scope.id}
                  type="button"
                  onClick={() => setSelectedId(scope.id)}
                  className={`w-full text-left p-3 rounded-lg text-xs sm:text-sm font-semibold transition-all flex items-center justify-between border ${
                    isSelected
                      ? "bg-[#155497] text-white border-[#155497] shadow-xs"
                      : "bg-white text-[#292929] border-[#DCE2E5] hover:bg-slate-50"
                  }`}
                  aria-pressed={isSelected}
                >
                  <div>
                    <div className="font-bold">{scope.name}</div>
                    <div className={`text-[11px] ${isSelected ? "text-slate-200" : "text-[#5A6A78]"}`}>
                      {scope.subtitle}
                    </div>
                  </div>
                  <span className={`text-[10px] px-2 py-0.5 rounded uppercase font-bold ${
                    isSelected ? "bg-white/20 text-white" : "bg-slate-100 text-[#5A6A78]"
                  }`}>
                    {scope.category.split(" ")[0]}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="mt-6 pt-4 border-t border-[#DCE2E5] text-[11px] text-[#5A6A78]">
            <strong className="text-[#292929]">Dedicated Tools &amp; Trackers:</strong> We maintain complete in-house hydraulic bolt tensioners, torque tools, tube rollers, and hydro jetting units for all above scopes.
          </div>
        </div>

        {/* Right Detail Pane: Documented Scopes */}
        <div className="lg:col-span-8 p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
          <div>
            <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-[#DCE2E5] mb-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#F28A00]">
                  {selectedScope.category}
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#292929] mt-0.5">
                  {selectedScope.name}
                </h3>
                <p className="text-xs font-semibold text-[#5A6A78] mt-0.5">
                  {selectedScope.subtitle}
                </p>
              </div>

              <div className="relative w-28 h-20 rounded-lg overflow-hidden border border-[#DCE2E5] hidden sm:block">
                <Image
                  src={selectedScope.image}
                  alt={selectedScope.name}
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <p className="text-sm sm:text-base text-[#5A6A78] leading-relaxed mb-6">
              {selectedScope.executionDetails}
            </p>

            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#292929] mb-4">
                Documented Field Activities:
              </h4>
              <div className="space-y-2.5">
                {selectedScope.activities.map((act, i) => (
                  <div key={i} className="flex items-start gap-3 p-2.5 rounded-lg bg-[#F8FAFC] border border-[#DCE2E5]">
                    <IconCheckCircle className="w-4 h-4 text-[#155497] flex-shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-[#292929]">{act}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 pt-4 border-t border-[#DCE2E5] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
            <span className="text-[#5A6A78]">
              Stated 700+ technical manpower ready for mobilization on this equipment scope.
            </span>
            <a
              href="/contact/"
              className="inline-flex items-center gap-1.5 font-bold text-[#155497] hover:underline"
            >
              <span>Enquire for {selectedScope.name} Shutdown</span>
              <span>&rarr;</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
