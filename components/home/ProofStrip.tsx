import React from "react";
import { verifiedMetrics } from "@/data/company";

export function ProofStrip() {
  return (
    <section className="relative bg-gradient-to-b from-white via-[#F8FAFC] to-[#F3F6F9] border-b border-[#DCE2E5] py-7 sm:py-9">
      {/* Subtle top indicator line */}
      <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#155497]/30 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8 divide-y md:divide-y-0 md:divide-x divide-[#DCE2E5]">
          {verifiedMetrics.map((item, idx) => (
            <div
              key={idx}
              className={`group transition-all duration-200 ${
                idx !== 0 ? "pt-4 md:pt-0 md:pl-6 lg:pl-8" : ""
              }`}
            >
              <div className="flex items-baseline gap-2">
                <span className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#155497] tracking-tight group-hover:text-[#123A68] transition-colors">
                  {item.value}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#F28A00] opacity-80 group-hover:scale-125 transition-transform" />
              </div>
              <div className="text-sm font-bold text-[#292929] mt-1 group-hover:text-[#155497] transition-colors">
                {item.label}
              </div>
              <div className="text-xs text-[#5A6A78] mt-0.5 leading-relaxed">
                {item.subtext}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
