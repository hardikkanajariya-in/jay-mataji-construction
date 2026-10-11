import React from "react";
import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { ProjectExplorer } from "@/components/projects/ProjectExplorer";
import { ContactCTA } from "@/components/home/ContactCTA";
import { IconCalendar, IconUsers, IconMapPin, IconShield } from "@/components/ui/Icons";

export const metadata: Metadata = {
  title: "Project Experience (2014–2026) | Verified Refinery Register",
  description: "Explore 49 documented turnaround, shutdown, and equipment overhaul contracts across major Indian refineries including Jamnagar, Mangalore, Mumbai, Vizag, and Vadinar."
};

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        badge="Historical Register"
        title="Documented Refinery Turnaround Contracts"
        description="A transparent, searchable record of 49 major shutdown scopes executed from 2014 through 2026 across premier Indian refineries and petrochemical facilities."
        breadcrumbs={[{ label: "Project Experience" }]}
      />

      {/* Register Summary Strip */}
      <section className="bg-white border-b border-[#DCE2E5] py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-xs sm:text-sm">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-[#155497]/10 text-[#155497]">
                <IconShield className="w-5 h-5" />
              </div>
              <div>
                <div className="font-bold text-[#292929]">49 Recorded Jobs</div>
                <div className="text-[11px] text-[#5A6A78]">Complete chronological register</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-[#155497]/10 text-[#155497]">
                <IconCalendar className="w-5 h-5" />
              </div>
              <div>
                <div className="font-bold text-[#292929]">2014 &ndash; 2026 Timeline</div>
                <div className="text-[11px] text-[#5A6A78]">Over a decade of unbroken service</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-[#155497]/10 text-[#155497]">
                <IconMapPin className="w-5 h-5" />
              </div>
              <div>
                <div className="font-bold text-[#292929]">Pan-India Coverage</div>
                <div className="text-[11px] text-[#5A6A78]">10+ Indian industrial states</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-[#155497]/10 text-[#155497]">
                <IconUsers className="w-5 h-5" />
              </div>
              <div>
                <div className="font-bold text-[#292929]">Up to 500 Manpower</div>
                <div className="text-[11px] text-[#5A6A78]">Peak single-job batch deployments</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Interactive Explorer */}
      <section className="bg-[#EEF1F2] py-12 lg:py-20 border-b border-[#DCE2E5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ProjectExplorer />
        </div>
      </section>

      {/* Data Traceability Note */}
      <section className="bg-white py-12 border-b border-[#DCE2E5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-xs text-[#5A6A78] space-y-2">
          <div className="font-bold text-[#292929] uppercase tracking-wider text-[11px]">
            Data Integrity &amp; Transparency Notice
          </div>
          <p className="leading-relaxed">
            All entries in this register reflect verified historical records sourced directly from company job completion sheets. Recorded manpower figures represent batch quantities mobilized for each specific contract window. Client and refinery names are maintained under centralized publication control.
          </p>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
