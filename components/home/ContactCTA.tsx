import React from "react";
import Link from "next/link";
import { IconChevronRight } from "@/components/ui/Icons";

export function ContactCTA() {
  return (
    <section className="bg-[#123A68] text-white py-14 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-white/10 text-slate-200 border border-white/20 mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-[#F28A00]"></span>
          <span>Upcoming Turnaround Schedule</span>
        </div>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight leading-tight">
          Planning a Planned Outage or Critical Maintenance?
        </h2>
        <p className="mt-4 text-base text-slate-300 leading-relaxed">
          Ensure your refinery turnaround has skilled millwrights, riggers, tube technicians, and certified supervision ready for day one of shutdown.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/contact/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#F28A00] hover:bg-[#d97c00] text-white font-semibold px-6 py-3.5 rounded-md text-sm shadow-md transition-colors"
          >
            <span>Request Manpower &amp; Scopes</span>
            <IconChevronRight className="w-4 h-4" />
          </Link>
          <Link
            href="/projects/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 text-white border border-white/20 font-semibold px-6 py-3.5 rounded-md text-sm transition-colors"
          >
            <span>Review Past Turnarounds</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
