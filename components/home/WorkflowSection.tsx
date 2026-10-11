"use client";

import React, { useState } from "react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { IconCheckCircle } from "@/components/ui/Icons";

interface WorkflowStep {
  stepNumber: string;
  title: string;
  summary: string;
  documentedTasks: string[];
  equipmentFocus: string;
}

const workflowSteps: WorkflowStep[] = [
  {
    stepNumber: "01",
    title: "Scope Preparation & Blinding",
    summary: "Pre-turnaround mobilization, scaffolding erection, tagging, and positive isolation across all flanged battery limits.",
    documentedTasks: [
      "Rigging of engineered modular scaffolding platforms around columns and exchangers",
      "Field verification of isolation limits against approved blind lists",
      "De-bolting and positive blinding of nozzles, line connections, and manifolds",
      "Readiness checks of hydraulic torque wrenches, tube rollers, and safety gear"
    ],
    equipmentFocus: "Battery limits, battery headers, heat exchanger nozzles, column piping"
  },
  {
    stepNumber: "02",
    title: "Opening & Internal Access",
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
    <section className="bg-[#EEF1F2] py-16 lg:py-24 border-b border-[#DCE2E5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Execution Methodology"
          title="Turnaround & Shutdown Execution Sequence"
          description="An illustrative breakdown of the documented field activities performed during typical refinery turnaround and shutdown scopes, from initial positive blinding to final unit box-up."
          centered
        />

        {/* Step Selector Pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {workflowSteps.map((step, idx) => (
            <button
              key={step.stepNumber}
              type="button"
              onClick={() => setActiveStep(idx)}
              className={`px-4 py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 border ${
                activeStep === idx
                  ? "bg-[#155497] text-white border-[#155497] shadow-sm"
                  : "bg-white text-[#292929] border-[#DCE2E5] hover:bg-slate-50"
              }`}
            >
              <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold ${
                activeStep === idx ? "bg-[#F28A00] text-white" : "bg-slate-100 text-[#5A6A78]"
              }`}>
                {step.stepNumber}
              </span>
              <span>{step.title}</span>
            </button>
          ))}
        </div>

        {/* Active Step Detail Card */}
        <div className="bg-white rounded-xl border border-[#DCE2E5] shadow-xs p-6 sm:p-8 lg:p-10 max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-[#DCE2E5] gap-4">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-[#F28A00]">
                Phase {workflowSteps[activeStep].stepNumber} of 05
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-[#292929] mt-1">
                {workflowSteps[activeStep].title}
              </h3>
            </div>
            <div className="px-3 py-1.5 bg-[#EEF1F2] rounded text-xs font-medium text-[#5A6A78] max-w-xs">
              <span className="font-semibold text-[#292929]">Focus Equipment:</span>{" "}
              {workflowSteps[activeStep].equipmentFocus}
            </div>
          </div>

          <p className="py-6 text-sm sm:text-base text-[#5A6A78] leading-relaxed border-b border-[#DCE2E5]">
            {workflowSteps[activeStep].summary}
          </p>

          <div className="pt-6">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#292929] mb-4">
              Documented Field Activities:
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {workflowSteps[activeStep].documentedTasks.map((task, i) => (
                <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#292929]">
                  <IconCheckCircle className="w-4 h-4 text-[#155497] flex-shrink-0 mt-0.5" />
                  <span>{task}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-[#5A6A78]">
            <span className="italic">
              *Illustrative technical explanation of documented shutdown work scopes.
            </span>
            <div className="flex gap-2">
              <button
                type="button"
                disabled={activeStep === 0}
                onClick={() => setActiveStep((prev) => Math.max(0, prev - 1))}
                className="px-3 py-1.5 rounded border border-[#DCE2E5] font-semibold text-[#292929] disabled:opacity-40 disabled:cursor-not-allowed hover:bg-slate-50"
              >
                Previous
              </button>
              <button
                type="button"
                disabled={activeStep === workflowSteps.length - 1}
                onClick={() => setActiveStep((prev) => Math.min(workflowSteps.length - 1, prev + 1))}
                className="px-3 py-1.5 rounded bg-[#155497] text-white font-semibold disabled:opacity-40 disabled:cursor-not-allowed hover:bg-[#123A68]"
              >
                Next Phase
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
