import React from "react";
import Link from "next/link";
import { IconChevronRight } from "@/components/ui/Icons";

export function ContactCTA() {
  return (
    <section className="relative bg-gradient-to-br from-[#123A68] via-[#0F325A] to-[#0B2548] text-white py-16 lg:py-24 overflow-hidden border-t border-[#155497]/40">
      {/* Background Subtle Industrial Architectural Grid */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
          backgroundSize: "40px 40px"
        }}
      />

      {/* Ambient Lighting Accents */}
      <div
        aria-hidden="true"
        className="absolute top-0 right-1/4 w-[500px] h-[500px] rounded-full bg-[#155497]/30 blur-3xl pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-20 left-1/3 w-[450px] h-[450px] rounded-full bg-[#F28A00]/15 blur-3xl pointer-events-none"
      />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-white/10 text-slate-100 border border-white/20 mb-5 shadow-xs">
          <span className="w-2 h-2 rounded-full bg-[#F28A00] animate-pulse"></span>
          <span>Upcoming Turnaround Schedule</span>
        </div>

        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight leading-tight">
          Planning a Planned Outage or Critical Maintenance?
        </h2>

        <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
          Ensure your refinery turnaround has skilled millwrights, riggers, tube technicians, and certified supervision ready for day one of shutdown.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5">
          <Link
            href="/contact/"
            className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#F28A00] hover:bg-[#d97c00] active:scale-[0.99] text-white font-semibold px-7 py-3.5 rounded-md text-sm shadow-md hover:shadow-lg transition-all"
          >
            <span>Request Manpower &amp; Scopes</span>
            <IconChevronRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
          </Link>
          <Link
            href="/projects/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 active:scale-[0.99] text-white border border-white/25 font-semibold px-6 py-3.5 rounded-md text-sm backdrop-blur-2xs transition-all"
          >
            <span>Review Past Turnarounds</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
