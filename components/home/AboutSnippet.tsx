import React from "react";
import Link from "next/link";
import Image from "next/image";
import { IconChevronRight, IconCheckCircle } from "@/components/ui/Icons";

export function AboutSnippet() {
  return (
    <section className="relative bg-white py-16 lg:py-24 border-b border-[#DCE2E5] overflow-hidden">
      {/* Soft Ambient Radial Accents */}
      <div
        aria-hidden="true"
        className="absolute top-1/3 -left-20 w-80 h-80 rounded-full bg-[#155497]/[0.025] blur-3xl pointer-events-none"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Visual Column with Engineering Accents */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative group">
              {/* Technical Backdrop Frame */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-[#155497]/10 via-[#F8FAFC] to-[#F28A00]/10 rounded-2xl -z-10 blur-xs transition-opacity duration-300 opacity-70 group-hover:opacity-100" />
              <div className="absolute -top-2 -left-2 w-3.5 h-3.5 border-t-2 border-l-2 border-[#155497] z-20 pointer-events-none" />
              <div className="absolute -bottom-2 -right-2 w-3.5 h-3.5 border-b-2 border-r-2 border-[#F28A00] z-20 pointer-events-none" />

              <div className="relative rounded-xl overflow-hidden border border-[#DCE2E5] shadow-md aspect-[4/3]">
                <Image
                  src="/images/heat-exchanger-maintenance.jpg"
                  alt="Refinery technicians servicing shell-and-tube heat exchanger"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-xs p-3 rounded-lg border border-[#DCE2E5] shadow-xs">
                  <div className="flex items-center justify-between text-xs">
                    <div>
                      <span className="font-bold text-[#155497] block">Established 2014</span>
                      <span className="text-[11px] text-[#5A6A78]">Turnaround packages with zero lost-time delays</span>
                    </div>
                    <span className="px-2 py-0.5 rounded bg-[#155497]/10 text-[#155497] font-semibold text-[10px] whitespace-nowrap">
                      12+ Years
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Text Column */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-5">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#155497]/10 text-[#155497] border border-[#155497]/20">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F28A00]"></span>
              <span>About Jay Mataji Construction</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#292929] tracking-tight leading-tight">
              A Decade of Dedicated Shutdown &amp; Turnaround Service
            </h2>

            <p className="text-base text-[#5A6A78] leading-relaxed">
              Founded in 2014, Jay Mataji Construction was established with a singular focus: to provide expert technical manpower and precision site execution for critical static equipment maintenance, scaffolding, and catalytic reactor jobs during demanding refinery shutdowns.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 py-2">
              <div className="flex items-start gap-2.5 p-2 rounded-lg bg-[#F8FAFC] border border-[#DCE2E5] text-xs sm:text-sm text-[#292929] hover:border-[#155497]/30 transition-colors">
                <IconCheckCircle className="w-4 h-4 text-[#155497] flex-shrink-0 mt-0.5" />
                <span>Specialized in refinery static &amp; rotating maintenance</span>
              </div>
              <div className="flex items-start gap-2.5 p-2 rounded-lg bg-[#F8FAFC] border border-[#DCE2E5] text-xs sm:text-sm text-[#292929] hover:border-[#155497]/30 transition-colors">
                <IconCheckCircle className="w-4 h-4 text-[#155497] flex-shrink-0 mt-0.5" />
                <span>Documented jobs across leading Indian refineries</span>
              </div>
              <div className="flex items-start gap-2.5 p-2 rounded-lg bg-[#F8FAFC] border border-[#DCE2E5] text-xs sm:text-sm text-[#292929] hover:border-[#155497]/30 transition-colors">
                <IconCheckCircle className="w-4 h-4 text-[#155497] flex-shrink-0 mt-0.5" />
                <span>Stated 700+ technical personnel on call</span>
              </div>
              <div className="flex items-start gap-2.5 p-2 rounded-lg bg-[#F8FAFC] border border-[#DCE2E5] text-xs sm:text-sm text-[#292929] hover:border-[#155497]/30 transition-colors">
                <IconCheckCircle className="w-4 h-4 text-[#155497] flex-shrink-0 mt-0.5" />
                <span>Proven overseas and domestic contractor track record</span>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/about/"
                className="group inline-flex items-center gap-2 bg-[#155497] hover:bg-[#123A68] active:scale-[0.99] text-white font-semibold px-5 py-3 rounded-md text-sm shadow-xs hover:shadow transition-all"
              >
                <span>Read Full Company Profile</span>
                <IconChevronRight className="w-4 h-4 text-[#F28A00] transition-transform duration-200 group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
