import React from "react";
import Link from "next/link";
import Image from "next/image";
import { IconChevronRight, IconArrowRight, IconShield, IconUsers, IconCalendar } from "@/components/ui/Icons";

export function HeroSection() {
  return (
    <section className="relative bg-[#EEF1F2] border-b border-[#DCE2E5] overflow-hidden">
      {/* Background Subtle Industrial Architectural Grid */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(#155497 1px, transparent 1px), linear-gradient(90deg, #155497 1px, transparent 1px)",
          backgroundSize: "40px 40px"
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Industrial Copy */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#155497]/10 text-[#155497] border border-[#155497]/20">
              <span className="w-2 h-2 rounded-full bg-[#F28A00]"></span>
              <span>Shutdown &amp; Maintenance Solutions</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold text-[#292929] tracking-tight leading-[1.15]">
              Shutdown Readiness.{" "}
              <span className="text-[#155497]">Maintenance Expertise.</span>
            </h1>

            <p className="text-base sm:text-lg text-[#5A6A78] leading-relaxed max-w-2xl font-normal">
              Jay Mataji Construction provides specialized turnaround execution, static equipment maintenance, column revamping, catalyst handling, and skilled industrial manpower for premier Indian refineries and petrochemical plants.
            </p>

            {/* Quick Proof Pills */}
            <div className="grid grid-cols-3 gap-3 pt-2 max-w-xl">
              <div className="bg-white p-3 rounded-lg border border-[#DCE2E5] shadow-xs">
                <div className="flex items-center gap-1.5 text-xs font-semibold text-[#155497]">
                  <IconCalendar className="w-3.5 h-3.5 text-[#F28A00]" />
                  <span>Est. 2014</span>
                </div>
                <div className="text-[11px] text-[#5A6A78] mt-0.5">12+ Yrs Site Execution</div>
              </div>

              <div className="bg-white p-3 rounded-lg border border-[#DCE2E5] shadow-xs">
                <div className="flex items-center gap-1.5 text-xs font-semibold text-[#155497]">
                  <IconUsers className="w-3.5 h-3.5 text-[#F28A00]" />
                  <span>700+ Roster</span>
                </div>
                <div className="text-[11px] text-[#5A6A78] mt-0.5">Rapid Deployment</div>
              </div>

              <div className="bg-white p-3 rounded-lg border border-[#DCE2E5] shadow-xs">
                <div className="flex items-center gap-1.5 text-xs font-semibold text-[#155497]">
                  <IconShield className="w-3.5 h-3.5 text-[#F28A00]" />
                  <span>49+ Jobs</span>
                </div>
                <div className="text-[11px] text-[#5A6A78] mt-0.5">Major Indian Refineries</div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <Link
                href="/services/"
                className="inline-flex items-center justify-center gap-2 bg-[#155497] hover:bg-[#123A68] text-white font-semibold px-6 py-3.5 rounded-md shadow-sm transition-colors text-sm"
              >
                <span>Explore Capabilities</span>
                <IconChevronRight className="w-4 h-4 text-[#F28A00]" />
              </Link>
              <Link
                href="/projects/"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-[#292929] border border-[#DCE2E5] font-semibold px-6 py-3.5 rounded-md shadow-xs transition-colors text-sm"
              >
                <span>Track Record (2014–2026)</span>
                <IconArrowRight className="w-4 h-4 text-[#155497]" />
              </Link>
            </div>
          </div>

          {/* Right Column: Original Industrial Photograph */}
          <div className="lg:col-span-5">
            <div className="relative rounded-xl overflow-hidden border-2 border-white shadow-xl bg-slate-900 aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3]">
              <Image
                src="/images/hero-refinery.jpg"
                alt="Refinery turnaround maintenance operation executed by skilled industrial technicians under daylight"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-3 left-3 right-3 p-3 bg-white/95 backdrop-blur-xs rounded-lg border border-[#DCE2E5] shadow-md">
                <div className="flex items-center justify-between text-xs">
                  <div>
                    <span className="font-bold text-[#155497]">Refinery Shutdown Execution</span>
                    <span className="text-[#5A6A78] block text-[11px]">Static &amp; Rotating Equipment &bull; 2014–2026</span>
                  </div>
                  <span className="px-2 py-0.5 rounded bg-[#155497]/10 text-[#155497] font-semibold text-[10px]">
                    Verified Track Record
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
