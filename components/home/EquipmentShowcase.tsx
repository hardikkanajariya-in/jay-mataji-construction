"use client";

import React, { useState } from "react";
import Link from "next/link";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { IconChevronRight, IconWrench, IconCheckCircle } from "@/components/ui/Icons";

interface ComponentDetail {
  id: string;
  name: string;
  role: string;
  inspectionFocus: string;
}

interface EquipmentUnit {
  id: string;
  name: string;
  category: string;
  shortDesc: string;
  detailedScope: string;
  svgType: "exchanger" | "column" | "reactor" | "pump";
  components: ComponentDetail[];
}

const equipmentCatalog: EquipmentUnit[] = [
  {
    id: "exchanger",
    name: "Shell & Tube Heat Exchangers",
    category: "Static Equipment",
    shortDesc: "Complete mechanical overhaul, tube cleaning, Belzona protective coating, and hydrostatic pressure testing.",
    detailedScope: "Executed under critical turnaround windows. Scopes involve positive blinding, channel head unbolting, bundle cleaning with high-pressure water jetting (up to 1000+ bar), mechanical tube rolling, Belzona erosion protection, and witness hydro testing.",
    svgType: "exchanger",
    components: [
      {
        id: "tube-sheet",
        name: "Tube Sheet",
        role: "Primary flanged interface securing tube ends",
        inspectionFocus: "Gasket face serrations, wire drawing, erosion pitting, and tube-to-sheet joint seal"
      },
      {
        id: "baffles",
        name: "Baffle Plates",
        role: "Shell-side flow deflectors & tube supports",
        inspectionFocus: "Baffle hole clearance, vibration wear, corrosion thinning, and shell alignment"
      },
      {
        id: "bundle",
        name: "Tube Bundle",
        role: "Heat transfer core matrix",
        inspectionFocus: "Internal scale buildup, tube fouling, wall thickness measurement, and rolling tightness"
      },
      {
        id: "channel-head",
        name: "Channel Head & Cover",
        role: "Tube-side inlet & outlet fluid manifold",
        inspectionFocus: "Pass partition plate seal, internal Belzona coating condition, and stud bolt threads"
      }
    ]
  },
  {
    id: "column",
    name: "Distillation Columns & Towers",
    category: "Static Equipment",
    shortDesc: "Manway opening, valve & sieve tray cleaning, structured packing replacement, silpan testing, and box-up.",
    detailedScope: "High-elevation turnaround servicing inside fractionation towers (CDU, VDU, FCCU). Crews dismantle tray manways, hydroblast fouled valve trays and downcomers, perform silpan level testing, replace hardware, and close under QC witness.",
    svgType: "column",
    components: [
      {
        id: "trays",
        name: "Valve & Sieve Trays",
        role: "Vapor-liquid mass transfer contact stages",
        inspectionFocus: "Valve caps free movement, fouling coke deposits, levelness check, and hold-down clamps"
      },
      {
        id: "downcomers",
        name: "Downcomer Sections",
        role: "Liquid overflow conduits between active trays",
        inspectionFocus: "Clearance gaps, bottom seal pan integrity, and support saddle tightness"
      },
      {
        id: "packing",
        name: "Structured & Random Packing",
        role: "High-efficiency distillation bed matrix",
        inspectionFocus: "Bed fouling, crush damage, hold-down grid security, and spray distributor profiling"
      },
      {
        id: "manways",
        name: "Shell Manway Openings",
        role: "Confined space technician access doors",
        inspectionFocus: "Flange face condition, hinge pin alignment, and fresh spiral wound gasket seating"
      }
    ]
  },
  {
    id: "reactor",
    name: "Catalytic Process Reactors",
    category: "Static Equipment",
    shortDesc: "Controlled nitrogen atmosphere entry, catalyst dumping, vacuum unloading, internal repairs, and dense loading.",
    detailedScope: "Critical path turnaround execution in hydrocrackers, reformers, and FCCU regenerators. Experienced personnel handle blind isolation, inert entry unloading, coke skimming, internal scallop repairs, and precision catalyst loading.",
    svgType: "reactor",
    components: [
      {
        id: "catalyst-bed",
        name: "Catalyst Bed Matrix",
        role: "Active catalytic reaction process zone",
        inspectionFocus: "Spent catalyst agglomeration, pressure drop channeling, and dust segregation"
      },
      {
        id: "support-grid",
        name: "Support Grid & Screens",
        role: "Heavy ceramic ball & catalyst retention base",
        inspectionFocus: "Screen wire integrity, wedge wire warping, support beam deflection, and seal ropes"
      },
      {
        id: "inlet-diffuser",
        name: "Inlet Diffuser & Basket",
        role: "Top feed flow distribution system",
        inspectionFocus: "Scale basket cleanliness, baffle deflection, and bolting retention"
      },
      {
        id: "quench-piping",
        name: "Quench Pipe Manifolds",
        role: "Inter-bed temperature cooling injection",
        inspectionFocus: "Spray nozzle blockage, thermal fatigue cracking, and alignment"
      }
    ]
  },
  {
    id: "pump",
    name: "Heavy Process Pumps",
    category: "Rotating Equipment",
    shortDesc: "Casing dismantling, mechanical seal replacement, impeller clearance inspection, and precision laser alignment.",
    detailedScope: "Mechanical overhaul of single and multi-stage process hydrocarbon and boiler feed pumps. Involves decoupling, bearing and mechanical seal renewal, dynamic balance verification, and laser alignment to drive motors.",
    svgType: "pump",
    components: [
      {
        id: "mech-seal",
        name: "Mechanical Seal Cartridge",
        role: "Hydrocarbon leakage barrier at shaft",
        inspectionFocus: "Seal face flatness, O-ring elastomeric integrity, barrier fluid circulation, and spring tension"
      },
      {
        id: "impeller",
        name: "Impeller & Wear Rings",
        role: "Centrifugal hydraulic fluid accelerator",
        inspectionFocus: "Cavitation erosion, vane damage, wear ring radial clearances, and dynamic balance"
      },
      {
        id: "bearings",
        name: "Bearing Assemblies",
        role: "Shaft radial and axial thrust support",
        inspectionFocus: "Lube oil contamination, bearing cage clearance, shaft runout, and thermal growth"
      },
      {
        id: "coupling",
        name: "Flexible Drive Coupling",
        role: "Torque transmission from motor driver",
        inspectionFocus: "Angular and parallel laser alignment tolerances, disc pack condition, and bolt torque"
      }
    ]
  }
];

export function EquipmentShowcase() {
  const [selectedUnitId, setSelectedUnitId] = useState(equipmentCatalog[0].id);
  const [highlightedComponentId, setHighlightedComponentId] = useState<string | null>(null);

  const activeUnit = equipmentCatalog.find((u) => u.id === selectedUnitId) || equipmentCatalog[0];

  return (
    <section className="bg-white py-16 lg:py-24 border-b border-[#DCE2E5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <SectionHeader
            badge="Engineering Precision"
            title="Interactive Equipment Overhaul Specifications"
            description="Explore key pressure vessels, heat transfer apparatus, and rotating machinery maintained by our trade crews during planned refinery outages."
            className="mb-0!"
          />
          <Link
            href="/shutdown-turnaround/"
            className="mt-4 md:mt-0 inline-flex items-center gap-1.5 text-sm font-bold text-[#155497] hover:text-[#123A68] hover:underline"
          >
            <span>Full Turnaround Scope Details</span>
            <IconChevronRight className="w-4 h-4 text-[#F28A00]" />
          </Link>
        </div>

        {/* Equipment Category Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-8 scrollbar-none">
          {equipmentCatalog.map((unit) => {
            const isSelected = unit.id === activeUnit.id;
            return (
              <button
                key={unit.id}
                type="button"
                onClick={() => {
                  setSelectedUnitId(unit.id);
                  setHighlightedComponentId(null);
                }}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap flex items-center gap-2 border ${isSelected
                    ? "bg-[#155497] text-white border-[#155497] shadow-sm"
                    : "bg-[#F8FAFC] text-[#292929] border-[#DCE2E5] hover:bg-slate-100"
                  }`}
                aria-pressed={isSelected}
              >
                <span>{unit.name}</span>
              </button>
            );
          })}
        </div>

        {/* Interactive Deep-Dive Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-[#F8FAFC] rounded-2xl border border-[#DCE2E5] p-6 sm:p-8 lg:p-10 shadow-xs">
          {/* Dynamic SVG with Animated Flow Lines */}
          <div className="bg-[#F8FAFC] rounded-lg p-4 border border-[#DCE2E5] flex items-center justify-center min-h-[2rem]">
            {activeUnit.svgType === "exchanger" && (
              <svg viewBox="0 0 240 140" className="w-full h-44 stroke-[#155497] fill-none stroke-[1.5]" aria-label="Heat Exchanger Diagram">
                {/* Outer Shell */}
                <rect x="45" y="30" width="150" height="80" rx="4" className="fill-[#155497]/5 stroke-[#155497]" />
                {/* Channel Head Left */}
                <path
                  d="M45 30 C20 42 20 98 45 110 Z"
                  className={`transition-colors ${highlightedComponentId === "channel-head"
                      ? "fill-[#F28A00]/30 stroke-[#F28A00] stroke-[2.5]"
                      : "fill-[#F28A00]/10 stroke-[#F28A00]"
                    }`}
                />
                {/* Tube Sheet Interface */}
                <line
                  x1="45"
                  y1="25"
                  x2="45"
                  y2="115"
                  className={`transition-all ${highlightedComponentId === "tube-sheet"
                      ? "stroke-[#F28A00] stroke-[3]"
                      : "stroke-[#155497] stroke-[2]"
                    }`}
                />
                {/* Tube Bundle Lines with Flow Animation */}
                <line x1="55" y1="50" x2="185" y2="50" className="stroke-[#155497] animate-pipeline-flow" />
                <line x1="55" y1="70" x2="185" y2="70" className="stroke-[#155497] animate-pipeline-flow" />
                <line x1="55" y1="90" x2="185" y2="90" className="stroke-[#155497] animate-pipeline-flow" />
                {/* Baffles */}
                <line
                  x1="85"
                  y1="30"
                  x2="85"
                  y2="85"
                  className={`transition-all ${highlightedComponentId === "baffles" ? "stroke-[#F28A00] stroke-[3]" : "stroke-[#155497] stroke-[2]"
                    }`}
                />
                <line
                  x1="120"
                  y1="55"
                  x2="120"
                  y2="110"
                  className={`transition-all ${highlightedComponentId === "baffles" ? "stroke-[#F28A00] stroke-[3]" : "stroke-[#155497] stroke-[2]"
                    }`}
                />
                <line
                  x1="155"
                  y1="30"
                  x2="155"
                  y2="85"
                  className={`transition-all ${highlightedComponentId === "baffles" ? "stroke-[#F28A00] stroke-[3]" : "stroke-[#155497] stroke-[2]"
                    }`}
                />
                {/* Fluid Inlet & Outlet Nozzles */}
                <rect x="65" y="15" width="16" height="15" className="stroke-[#155497] fill-white" />
                <rect x="160" y="110" width="16" height="15" className="stroke-[#155497] fill-white" />
              </svg>
            )}

            {activeUnit.svgType === "column" && (
              <svg viewBox="0 0 240 140" className="w-full h-44 stroke-[#155497] fill-none stroke-[1.5]" aria-label="Distillation Column Diagram">
                {/* Shell Cylinder */}
                <rect x="90" y="10" width="60" height="120" rx="8" className="fill-[#155497]/5 stroke-[#155497]" />
                {/* Active Trays with Downcomers */}
                <line
                  x1="90"
                  y1="35"
                  x2="135"
                  y2="35"
                  className={highlightedComponentId === "trays" ? "stroke-[#F28A00] stroke-[3]" : "stroke-[#155497] stroke-[2]"}
                />
                <line x1="135" y1="35" x2="135" y2="52" className="stroke-[#F28A00]" />
                <line
                  x1="105"
                  y1="55"
                  x2="150"
                  y2="55"
                  className={highlightedComponentId === "trays" ? "stroke-[#F28A00] stroke-[3]" : "stroke-[#155497] stroke-[2]"}
                />
                <line x1="105" y1="55" x2="105" y2="72" className="stroke-[#F28A00]" />
                <line
                  x1="90"
                  y1="75"
                  x2="135"
                  y2="75"
                  className={highlightedComponentId === "trays" ? "stroke-[#F28A00] stroke-[3]" : "stroke-[#155497] stroke-[2]"}
                />
                <line x1="135" y1="75" x2="135" y2="92" className="stroke-[#F28A00]" />
                {/* Packing Zone */}
                <rect
                  x="96"
                  y="98"
                  width="48"
                  height="20"
                  className={`stroke-dashed ${highlightedComponentId === "packing"
                      ? "fill-[#F28A00]/20 stroke-[#F28A00]"
                      : "fill-[#155497]/10 stroke-[#155497]"
                    }`}
                  strokeDasharray="2 2"
                />
                {/* Manway Ports */}
                <circle
                  cx="120"
                  cy="45"
                  r="4"
                  className={highlightedComponentId === "manways" ? "fill-[#F28A00] stroke-[#F28A00]" : "fill-white stroke-[#F28A00]"}
                />
                <circle
                  cx="120"
                  cy="85"
                  r="4"
                  className={highlightedComponentId === "manways" ? "fill-[#F28A00] stroke-[#F28A00]" : "fill-white stroke-[#F28A00]"}
                />
              </svg>
            )}

            {activeUnit.svgType === "reactor" && (
              <svg viewBox="0 0 240 140" className="w-full h-44 stroke-[#155497] fill-none stroke-[1.5]" aria-label="Reactor Diagram">
                {/* Vessel Outline */}
                <path d="M85 28 C85 14 155 14 155 28 L155 112 C155 126 85 126 85 112 Z" className="fill-[#155497]/5 stroke-[#155497]" />
                {/* Catalyst Bed */}
                <rect
                  x="92"
                  y="48"
                  width="56"
                  height="50"
                  className={`animate-pulse-subtle ${highlightedComponentId === "catalyst-bed"
                      ? "fill-[#F28A00]/30 stroke-[#F28A00]"
                      : "fill-[#F28A00]/15 stroke-[#F28A00]"
                    }`}
                  strokeDasharray="3 2"
                />
                {/* Support Grid Bottom */}
                <line
                  x1="90"
                  y1="98"
                  x2="150"
                  y2="98"
                  className={highlightedComponentId === "support-grid" ? "stroke-[#F28A00] stroke-[3]" : "stroke-[#155497] stroke-[2]"}
                />
                {/* Inlet Diffuser Top */}
                <path
                  d="M108 24 L132 24 L125 36 L115 36 Z"
                  className={highlightedComponentId === "inlet-diffuser" ? "fill-[#F28A00]/40 stroke-[#F28A00]" : "fill-white stroke-[#155497]"}
                />
              </svg>
            )}

            {activeUnit.svgType === "pump" && (
              <svg viewBox="0 0 240 140" className="w-full h-44 stroke-[#155497] fill-none stroke-[1.5]" aria-label="Pump Diagram">
                {/* Volute Casing */}
                <circle cx="100" cy="70" r="38" className="fill-[#155497]/5 stroke-[#155497]" />
                {/* Impeller Eye */}
                <circle
                  cx="100"
                  cy="70"
                  r="12"
                  className={highlightedComponentId === "impeller" ? "fill-[#F28A00]/30 stroke-[#F28A00]" : "fill-[#F28A00]/10 stroke-[#F28A00]"}
                />
                {/* Discharge Nozzle */}
                <rect x="90" y="12" width="22" height="22" className="stroke-[#155497] fill-white" />
                {/* Shaft & Mechanical Seal Housing */}
                <rect
                  x="138"
                  y="61"
                  width="24"
                  height="18"
                  className={highlightedComponentId === "mech-seal" ? "fill-[#F28A00]/30 stroke-[#F28A00]" : "fill-slate-100 stroke-[#155497]"}
                />
                {/* Drive Coupling & Motor Frame */}
                <rect
                  x="162"
                  y="52"
                  width="50"
                  height="36"
                  rx="3"
                  className={highlightedComponentId === "coupling" ? "fill-[#155497]/25 stroke-[#155497]" : "fill-[#123A68]/10 stroke-[#123A68]"}
                />
              </svg>
            )}
          </div>

          {/* Right Column: Detailed Scope & Interactive Component Matrix */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#F28A00] mb-1">
                <IconWrench className="w-3.5 h-3.5" />
                <span>{activeUnit.category}</span>
              </div>
              <h3 className="text-2xl font-extrabold text-[#292929] mb-3">
                {activeUnit.name}
              </h3>
              <p className="text-sm text-[#5A6A78] leading-relaxed mb-6">
                {activeUnit.detailedScope}
              </p>

              {/* Component Callouts */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#292929] mb-3">
                  Critical Internals Serviced Under Turnaround:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {activeUnit.components.map((comp) => {
                    const isHighlighted = highlightedComponentId === comp.id;
                    return (
                      <button
                        key={comp.id}
                        type="button"
                        onClick={() =>
                          setHighlightedComponentId(isHighlighted ? null : comp.id)
                        }
                        className={`p-3 rounded-xl border text-left transition-all ${isHighlighted
                            ? "bg-white border-[#155497] shadow-sm ring-2 ring-[#155497]/20"
                            : "bg-white border-[#DCE2E5] hover:border-slate-300"
                          }`}
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-xs font-bold text-[#292929]">
                            {comp.name}
                          </span>
                          <span
                            className={`w-2 h-2 rounded-full ${isHighlighted ? "bg-[#F28A00]" : "bg-slate-300"
                              }`}
                          />
                        </div>
                        <div className="text-[11px] text-[#5A6A78] leading-tight">
                          {comp.role}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-[#DCE2E5] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
              <span className="text-[#5A6A78]">
                Complete hydraulic bolt tensioning &amp; torque verification on all nozzles.
              </span>
              <Link
                href="/shutdown-turnaround/"
                className="inline-flex items-center gap-1.5 font-bold text-[#155497] hover:underline"
              >
                <span>Examine Work Scopes</span>
                <IconChevronRight className="w-3.5 h-3.5 text-[#F28A00]" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
