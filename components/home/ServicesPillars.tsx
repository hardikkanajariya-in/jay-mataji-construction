import React from "react";
import Link from "next/link";
import { servicesData } from "@/data/services";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { IconChevronRight, IconWrench, IconActivity, IconUsers } from "@/components/ui/Icons";

export function ServicesPillars() {
  const staticServices = servicesData.filter((s) => s.category === "static-equipment").slice(0, 4);
  const rotatingServices = servicesData.filter((s) => s.category === "rotating-equipment").slice(0, 2);
  const siteServices = servicesData.filter((s) => s.category === "site-execution");

  return (
    <section className="bg-white py-16 lg:py-24 border-b border-[#DCE2E5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <SectionHeader
            badge="Industrial Capabilities"
            title="Comprehensive Shutdown & Maintenance Services"
            description="Proven execution across static process units, rotating assemblies, and high-elevation refinery infrastructure with specialized tooling and experienced manpower."
            className="mb-0!"
          />
          <Link
            href="/services/"
            className="mt-4 md:mt-0 inline-flex items-center gap-1.5 text-sm font-bold text-[#155497] hover:text-[#123A68] hover:underline"
          >
            <span>View All 12 Documented Scopes</span>
            <IconChevronRight className="w-4 h-4 text-[#F28A00]" />
          </Link>
        </div>

        {/* 3 Strategic Pillars Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Pillar 1: Static Equipment */}
          <div className="bg-[#F8FAFC] rounded-xl border border-[#DCE2E5] p-6 lg:p-8 flex flex-col justify-between hover:border-[#155497]/40 transition-colors">
            <div>
              <div className="w-12 h-12 rounded-lg bg-[#155497]/10 text-[#155497] flex items-center justify-center mb-5">
                <IconWrench className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#292929] mb-2">Static Equipment Maintenance</h3>
              <p className="text-sm text-[#5A6A78] leading-relaxed mb-6">
                Specialized turnaround overhaul for critical pressure-containing refinery equipment including heat exchangers, columns, reactors, and furnaces.
              </p>

              <div className="space-y-3 pt-2 border-t border-[#DCE2E5]">
                {staticServices.map((service) => (
                  <div key={service.id} className="text-xs">
                    <span className="font-semibold text-[#292929] block">&bull; {service.title}</span>
                    <span className="text-[#5A6A78] pl-2 block text-[11px]">{service.shortDescription}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-[#DCE2E5]">
              <Link
                href="/services/#static-equipment"
                className="inline-flex items-center gap-1 text-xs font-bold text-[#155497] hover:text-[#123A68]"
              >
                <span>Explore Static Equipment Scopes</span>
                <IconChevronRight className="w-3.5 h-3.5 text-[#F28A00]" />
              </Link>
            </div>
          </div>

          {/* Pillar 2: Rotating & Mechanical Servicing */}
          <div className="bg-[#F8FAFC] rounded-xl border border-[#DCE2E5] p-6 lg:p-8 flex flex-col justify-between hover:border-[#155497]/40 transition-colors">
            <div>
              <div className="w-12 h-12 rounded-lg bg-[#155497]/10 text-[#155497] flex items-center justify-center mb-5">
                <IconActivity className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#292929] mb-2">Rotating &amp; Mechanical Overhaul</h3>
              <p className="text-sm text-[#5A6A78] leading-relaxed mb-6">
                Precision alignment, lapping, and complete mechanical turnaround servicing of process pumps, compressors, drivers, and industrial cooling towers.
              </p>

              <div className="space-y-3 pt-2 border-t border-[#DCE2E5]">
                {rotatingServices.map((service) => (
                  <div key={service.id} className="text-xs">
                    <span className="font-semibold text-[#292929] block">&bull; {service.title}</span>
                    <span className="text-[#5A6A78] pl-2 block text-[11px]">{service.shortDescription}</span>
                  </div>
                ))}
                <div className="text-xs">
                  <span className="font-semibold text-[#292929] block">&bull; Cooling Tower Fan &amp; Gearbox</span>
                  <span className="text-[#5A6A78] pl-2 block text-[11px]">Blade replacement, pitch balancing, and right-angle drive refurbishment.</span>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-[#DCE2E5]">
              <Link
                href="/services/#rotating-equipment"
                className="inline-flex items-center gap-1 text-xs font-bold text-[#155497] hover:text-[#123A68]"
              >
                <span>Explore Mechanical Servicing</span>
                <IconChevronRight className="w-3.5 h-3.5 text-[#F28A00]" />
              </Link>
            </div>
          </div>

          {/* Pillar 3: Scaffolding & Shutdown Manpower */}
          <div className="bg-[#F8FAFC] rounded-xl border border-[#DCE2E5] p-6 lg:p-8 flex flex-col justify-between hover:border-[#155497]/40 transition-colors">
            <div>
              <div className="w-12 h-12 rounded-lg bg-[#155497]/10 text-[#155497] flex items-center justify-center mb-5">
                <IconUsers className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#292929] mb-2">Scaffolding &amp; Manpower Supply</h3>
              <p className="text-sm text-[#5A6A78] leading-relaxed mb-6">
                Engineered temporary access systems for high-elevation columns, paired with an immediate roster of 700+ verified turnaround personnel.
              </p>

              <div className="space-y-3 pt-2 border-t border-[#DCE2E5]">
                {siteServices.map((service) => (
                  <div key={service.id} className="text-xs">
                    <span className="font-semibold text-[#292929] block">&bull; {service.title}</span>
                    <span className="text-[#5A6A78] pl-2 block text-[11px]">{service.shortDescription}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-[#DCE2E5]">
              <Link
                href="/services/#site-execution"
                className="inline-flex items-center gap-1 text-xs font-bold text-[#155497] hover:text-[#123A68]"
              >
                <span>Explore Scaffolding &amp; Manpower</span>
                <IconChevronRight className="w-3.5 h-3.5 text-[#F28A00]" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
