import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { servicesData, ServiceItem } from "@/data/services";
import { PageHeader } from "@/components/layout/PageHeader";
import { ContactCTA } from "@/components/home/ContactCTA";
import { IconCheckCircle, IconWrench, IconActivity, IconUsers, IconChevronRight } from "@/components/ui/Icons";

export const metadata: Metadata = {
  title: "Specialized Shutdown Services | Static & Rotating Equipment",
  description: "Comprehensive turnaround maintenance services: Heat exchangers, columns, reactors, furnaces, pumps, valves, compressors, scaffolding, and 700+ manpower."
};

function ServiceCard({ service }: { service: ServiceItem }) {
  return (
    <div
      id={service.id}
      className="bg-white rounded-xl border border-[#DCE2E5] overflow-hidden shadow-xs hover:border-[#155497]/40 transition-all flex flex-col justify-between"
    >
      <div>
        <div className="relative h-48 w-full bg-slate-100 border-b border-[#DCE2E5]">
          <Image
            src={service.imagePath}
            alt={service.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
          />
          <div className="absolute top-3 left-3 px-2.5 py-1 rounded bg-[#123A68]/90 text-white text-[11px] font-bold backdrop-blur-xs">
            {service.categoryLabel}
          </div>
        </div>

        <div className="p-6">
          <h3 className="text-xl font-bold text-[#292929] mb-2 leading-snug">
            {service.title}
          </h3>
          <p className="text-xs sm:text-sm text-[#5A6A78] leading-relaxed mb-4">
            {service.fullDescription}
          </p>

          <div className="pt-3 border-t border-[#DCE2E5]">
            <h4 className="text-[11px] font-bold uppercase tracking-wider text-[#155497] mb-2">
              Documented Scope Activities:
            </h4>
            <ul className="space-y-1.5 text-xs text-[#292929]">
              {service.documentedActivities.map((act, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <IconCheckCircle className="w-3.5 h-3.5 text-[#F28A00] flex-shrink-0 mt-0.5" />
                  <span>{act}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="p-6 pt-0 mt-4">
        <div className="p-3 bg-[#F8FAFC] rounded-lg border border-[#DCE2E5] text-xs">
          <span className="font-bold text-[#292929] block mb-1">Equipment Handled:</span>
          <div className="flex flex-wrap gap-1">
            {service.equipmentHandled.map((eq, i) => (
              <span key={i} className="px-2 py-0.5 rounded bg-white border border-[#DCE2E5] text-[#5A6A78] text-[10px]">
                {eq}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
          <Link
            href="/shutdown-turnaround/"
            className="text-xs font-bold text-[#155497] hover:underline inline-flex items-center gap-1"
          >
            <span>See Execution Details</span>
            <IconChevronRight className="w-3 h-3 text-[#F28A00]" />
          </Link>
          <Link
            href="/contact/"
            className="text-xs font-semibold px-3 py-1.5 rounded bg-[#EEF1F2] hover:bg-[#155497] hover:text-white text-[#155497] transition-colors"
          >
            Enquire
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function ServicesPage() {
  const staticServices = servicesData.filter((s) => s.category === "static-equipment");
  const rotatingServices = servicesData.filter((s) => s.category === "rotating-equipment");
  const siteServices = servicesData.filter((s) => s.category === "site-execution");

  return (
    <>
      <PageHeader
        badge="Scope Catalog"
        title="Refinery Shutdown &amp; Maintenance Services"
        description="Comprehensive mechanical execution packages for planned turnaround outages. Grounded strictly in our documented equipment experience across premier Indian process units."
        breadcrumbs={[{ label: "Services" }]}
      />

      {/* Category Jump Navigation */}
      <section className="bg-white border-b border-[#DCE2E5] py-4 sticky top-20 z-20 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-between gap-3 text-xs sm:text-sm font-semibold">
          <span className="text-[#5A6A78] hidden sm:inline">Jump to Category:</span>
          <div className="flex flex-wrap gap-2">
            <a
              href="#static-equipment"
              className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-[#155497] hover:text-white text-[#292929] transition-colors"
            >
              Static Equipment (6)
            </a>
            <a
              href="#rotating-equipment"
              className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-[#155497] hover:text-white text-[#292929] transition-colors"
            >
              Rotating &amp; Mechanical (4)
            </a>
            <a
              href="#site-execution"
              className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-[#155497] hover:text-white text-[#292929] transition-colors"
            >
              Scaffolding &amp; Manpower (2)
            </a>
          </div>
          <Link
            href="/contact/"
            className="text-[#F28A00] font-bold hover:underline"
          >
            Request Mobilization &rarr;
          </Link>
        </div>
      </section>

      {/* Group 1: Static Equipment */}
      <section id="static-equipment" className="bg-[#F8FAFC] py-16 lg:py-20 border-b border-[#DCE2E5] scroll-mt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2.5 rounded-lg bg-[#155497] text-white">
              <IconWrench className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#292929]">
                Static Equipment Turnaround Overhauls
              </h2>
              <p className="text-xs sm:text-sm text-[#5A6A78] mt-0.5">
                Heat exchangers, distillation columns, catalytic reactors, drums, spheres, and fired heaters.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {staticServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Group 2: Rotating & Mechanical */}
      <section id="rotating-equipment" className="bg-white py-16 lg:py-20 border-b border-[#DCE2E5] scroll-mt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2.5 rounded-lg bg-[#155497] text-white">
              <IconActivity className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#292929]">
                Rotating Equipment &amp; Mechanical Servicing
              </h2>
              <p className="text-xs sm:text-sm text-[#5A6A78] mt-0.5">
                Valves, process pumps, compressors, motor alignments, and cooling tower fan assemblies.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {rotatingServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Group 3: Site Execution & Manpower */}
      <section id="site-execution" className="bg-[#F8FAFC] py-16 lg:py-20 border-b border-[#DCE2E5] scroll-mt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2.5 rounded-lg bg-[#155497] text-white">
              <IconUsers className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#292929]">
                Site Execution &amp; Turnaround Manpower Supply
              </h2>
              <p className="text-xs sm:text-sm text-[#5A6A78] mt-0.5">
                OSHA-compliant engineered scaffolding platforms and 700+ trade specialists on immediate call.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {siteServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
