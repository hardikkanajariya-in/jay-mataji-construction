"use client";

import React, { useState } from "react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { IconCheckCircle } from "@/components/ui/Icons";

interface WorkflowStep {
  stepNumber: string;
  title: string;
  shortTag: string;
  summary: string;
  documentedTasks: string[];
  equipmentFocus: string;
}

const workflowSteps: WorkflowStep[] = [
  {
    stepNumber: "01",
    title: "Scope Preparation & Blinding",
    shortTag: "Isolation & Blind Lists",
    summary: "Pre-turnaround staging, modular scaffolding erection, tool mobilization, and positive isolation across all flanged battery limits.",
    documentedTasks: [
      "Rigging of engineered modular scaffolding platforms around columns and heat exchangers",
      "Field verification of isolation limits against approved refinery blind lists",
      "De-bolting and positive blinding of nozzles, line connections, and battery headers",
      "Readiness checks of hydraulic torque wrenches, tube rollers, and safety gear"
    ],
    equipmentFocus: "Battery limits, battery headers, heat exchanger nozzles, column piping"
  },
  {
    stepNumber: "02",
    title: "Opening & Internal Access",
    shortTag: "Channel & Manway Access",
    summary: "Systematic unbolting of channel covers, manways, and internal tray hardware under controlled atmospheric protocols.",
    documentedTasks: [
      "Removal of heat exchanger channel covers, floating heads, and shell covers",
      "Gas-free certified manway cover removal on distillation columns and vessels",
      "Disassembly of internal column tray manways, clamp rings, and packing retainers",
      "Controlled reactor head unbolting and catalyst dumping chute attachment"
    ],
    equipmentFocus: "Shell-and-tube exchangers, distillation towers, reactors, accumulator drums"
  },
  {
    stepNumber: "03",
    title: "Cleaning, Overhaul & Servicing",
    shortTag: "Hydro Jetting & Overhauls",
    summary: "Heavy mechanical descaling, catalyst handling, hydro jetting, and rotating machinery overhaul.",
    documentedTasks: [
      "High-pressure hydro jetting and rotary mechanical brushing of exchanger tubes",
      "Sand blasting and Belzona erosion-resistant coating on tube sheets and heads",
      "Hydroblasting and grit cleaning of column trays, downcomers, and shell walls",
      "Catalyst vacuum unloading, skimming, and inert-atmosphere loading",
      "Pump mechanical seal replacement, valve seat lapping, and compressor overhaul"
    ],
    equipmentFocus: "Tube bundles, column internal trays, fired heater tubes, pumps, valves"
  },
  {
    stepNumber: "04",
    title: "Inspection & Pressure Testing",
    shortTag: "QA/QC & Hydro Testing",
    summary: "Quality checks, joint verification, silpan testing on column internals, and hydrostatic pressure testing.",
    documentedTasks: [
      "Silpan test and QA/QC witness inspection on reassembled column trays",
      "Hydrostatic testing of heat exchanger tube side and shell side at test pressures",
      "Valve body and seat hydro testing to certify zero passing",
      "Alignment verification of pump-motor and compressor drive couplings"
    ],
    equipmentFocus: "Exchanger tube-to-tubesheet joints, column tray levels, valve seats, pump shafts"
  },
  {
    stepNumber: "05",
    title: "Box-Up & Final De-Blinding",
    shortTag: "Torque Box-Up & Handover",
    summary: "New gasket insertion, controlled torque tightening, manway closure, and systematic de-blinding for startup handover.",
    documentedTasks: [
      "Box-up of internal column tray manways and shell manways with certified gaskets",
      "Torque-controlled tightening of heat exchanger covers using calibrated tools",
      "Systematic de-blinding and reinstatement of process line connections",
      "Final housekeeping, scaffold dismantling, and documented client handover"
    ],
    equipmentFocus: "Completed process units, exchangers, distillation columns, battery limits"
  }
];

export function WorkflowSection() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="relative bg-[#EFF4F8] py-16 lg:py-24 border-b border-[#DCE2E5] overflow-hidden">
      {/* Background Subtle Flow Line Accent */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(90deg, #155497 1px, transparent 1px)",
          backgroundSize: "60px 60px"
        }}
      />
      {/* Ambient Radial Depth Glow */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full bg-[#155497]/[0.035] blur-3xl pointer-events-none"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Execution Methodology"
          title="Turnaround &amp; Shutdown Execution Sequence"
          description="Systematic execution sequence deployed during refinery turnaround and shutdown outages, ensuring positive isolation, thorough mechanical servicing, and zero-leak unit box-up."
          centered
        />

        {/* Connected Interactive Pipeline Navigator */}
        <div className="relative mb-10 max-w-5xl mx-auto">
          {/* Background Connecting Pipe Track */}
          <div className="hidden md:block absolute top-1/2 left-8 right-8 h-1.5 bg-[#DCE2E5] rounded-full -translate-y-1/2 z-0">
            <div
              className="h-full bg-gradient-to-r from-[#155497] via-[#155497] to-[#F28A00] rounded-full transition-all duration-300"
              style={{ width: `${(activeStep / (workflowSteps.length - 1)) * 100}%` }}
            />
          </div>

          <div className="relative z-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            {workflowSteps.map((step, idx) => {
              const isSelected = activeStep === idx;
              const isCompleted = idx < activeStep;
              return (
                <button
                  key={step.stepNumber}
                  type="button"
                  onClick={() => setActiveStep(idx)}
                  className={`relative p-3.5 rounded-xl text-left transition-all border flex flex-col justify-between ${
                    isSelected
                      ? "bg-[#155497] text-white border-[#155497] shadow-md -translate-y-0.5"
                      : isCompleted
                      ? "bg-white text-[#292929] border-[#155497]/40 hover:border-[#155497] hover:shadow-xs"
                      : "bg-white text-[#292929] border-[#DCE2E5] hover:border-slate-300 hover:bg-slate-50"
                  }`}
                  aria-pressed={isSelected}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span
                      className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                        isSelected
                          ? "bg-[#F28A00] text-white shadow-xs"
                          : isCompleted
                          ? "bg-[#155497] text-white"
                          : "bg-slate-100 text-[#5A6A78]"
                      }`}
                    >
                      {step.stepNumber}
                    </span>
                    {isSelected && (
                      <span className="w-2 h-2 rounded-full bg-[#F28A00] animate-pulse"></span>
                    )}
                  </div>
                  <div>
                    <div className="text-xs font-bold leading-snug line-clamp-2">
                      {step.title}
                    </div>
                    <div
                      className={`text-[10px] mt-0.5 line-clamp-1 ${
                        isSelected ? "text-slate-200" : "text-[#5A6A78]"
                      }`}
                    >
                      {step.shortTag}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Phase Deep Dive Card */}
        <div className="bg-white rounded-2xl border border-[#DCE2E5] shadow-sm p-6 sm:p-8 lg:p-10 max-w-4xl mx-auto transition-all">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-[#DCE2E5] gap-4">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#F28A00]">
                <span>Phase {workflowSteps[activeStep].stepNumber} of 05</span>
                <span className="w-1 h-1 rounded-full bg-slate-300"></span>
                <span className="text-[#155497]">{workflowSteps[activeStep].shortTag}</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-[#292929] mt-1">
                {workflowSteps[activeStep].title}
              </h3>
            </div>
            <div className="px-3.5 py-2 bg-[#F8FAFC] rounded-lg border border-[#DCE2E5] text-xs font-medium text-[#5A6A78] max-w-xs">
              <span className="font-bold text-[#292929] block mb-0.5">Primary Target Units:</span>
              <span className="text-[11px] leading-tight block">{workflowSteps[activeStep].equipmentFocus}</span>
            </div>
          </div>

          <p className="py-6 text-sm sm:text-base text-[#5A6A78] leading-relaxed border-b border-[#DCE2E5]">
            {workflowSteps[activeStep].summary}
          </p>

          <div className="pt-6">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#292929] mb-4">
              Documented Field Execution Scope:
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {workflowSteps[activeStep].documentedTasks.map((task, i) => (
                <div
                  key={i}
                  className="flex items-start gap-2.5 p-2.5 rounded-lg bg-[#F8FAFC] border border-[#DCE2E5] hover:border-[#155497]/30 hover:bg-white text-xs sm:text-sm text-[#292929] transition-colors"
                >
                  <IconCheckCircle className="w-4 h-4 text-[#155497] flex-shrink-0 mt-0.5" />
                  <span className="leading-snug">{task}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="mt-8 pt-6 border-t border-[#DCE2E5] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
            <span className="text-[#5A6A78] text-center sm:text-left">
              Rigorous procedural verification ensuring zero-leak startup handovers.
            </span>
            <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
              <button
                type="button"
                disabled={activeStep === 0}
                onClick={() => setActiveStep((prev) => Math.max(0, prev - 1))}
                className="px-4 py-2 rounded-lg border border-[#DCE2E5] font-semibold text-[#292929] hover:bg-slate-50 active:scale-[0.98] transition-all disabled:opacity-40 disabled:cursor-not-allowed"
              >
                &larr; Previous Phase
              </button>
              <button
                type="button"
                disabled={activeStep === workflowSteps.length - 1}
                onClick={() => setActiveStep((prev) => Math.min(workflowSteps.length - 1, prev + 1))}
                className="px-4 py-2 rounded-lg bg-[#155497] text-white font-semibold hover:bg-[#123A68] active:scale-[0.98] transition-all disabled:opacity-40 disabled:cursor-not-allowed"
              >
                Next Phase &rarr;
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
