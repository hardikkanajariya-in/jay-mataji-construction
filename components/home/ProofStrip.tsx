import React from "react";
import { verifiedMetrics } from "@/data/company";

export function ProofStrip() {
  return (
    <section className="bg-white border-b border-[#DCE2E5] py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8 divide-y md:divide-y-0 md:divide-x divide-[#DCE2E5]">
          {verifiedMetrics.map((item, idx) => (
            <div key={idx} className={`${idx !== 0 ? "pt-4 md:pt-0 md:pl-6 lg:pl-8" : ""}`}>
              <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#155497] tracking-tight">
                {item.value}
              </div>
              <div className="text-sm font-bold text-[#292929] mt-1">
                {item.label}
              </div>
              <div className="text-xs text-[#5A6A78] mt-0.5">
                {item.subtext}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
