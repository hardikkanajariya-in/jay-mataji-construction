import React from "react";
import type { Metadata } from "next";
import { companyData } from "@/data/company";
import { PageHeader } from "@/components/layout/PageHeader";
import { EnquiryForm } from "@/components/contact/EnquiryForm";
import { IconMapPin, IconMail, IconCalendar, IconUsers } from "@/components/ui/Icons";

export const metadata: Metadata = {
  title: "Contact & Mobilization | Refinery Turnaround Requisition",
  description: "Contact Jay Mataji Construction for refinery turnaround staffing, heat exchanger overhauls, column revamps, and technical manpower mobilization."
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        badge="Direct Operations Desk"
        title="Contact &amp; Turnaround Mobilization"
        description="Initiate discussions for upcoming planned refinery outages, emergency maintenance support, or trade crew requisitions. We coordinate with refinery maintenance and procurement heads nationwide."
        breadcrumbs={[{ label: "Contact" }]}
      />

      <section className="bg-[#EEF1F2] py-12 lg:py-20 border-b border-[#DCE2E5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left 7 Columns: Practical Enquiry Form */}
            <div className="lg:col-span-7">
              <EnquiryForm />
            </div>

            {/* Right 5 Columns: Verified Operations Contacts & Guidelines */}
            <div className="lg:col-span-5 space-y-6">
              {/* Operations Information Card */}
              <div className="bg-white rounded-xl border border-[#DCE2E5] p-6 sm:p-8 shadow-xs">
                <h3 className="text-lg font-bold text-[#292929] mb-4 pb-3 border-b border-[#DCE2E5]">
                  Operations Coordination
                </h3>

                <div className="space-y-4 text-xs sm:text-sm">
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-[#155497]/10 text-[#155497] flex-shrink-0 mt-0.5">
                      <IconMail className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="font-bold text-[#292929] block">Contact Email</span>
                      <a
                        href={`mailto:${companyData.contactEmail}`}
                        className="text-[#155497] hover:underline break-all"
                      >
                        {companyData.contactEmail}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-[#155497]/10 text-[#155497] flex-shrink-0 mt-0.5">
                      <IconMapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="font-bold text-[#292929] block">Regional Operating Base</span>
                      <span className="text-[#5A6A78]">{companyData.headquarters}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-[#155497]/10 text-[#155497] flex-shrink-0 mt-0.5">
                      <IconUsers className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="font-bold text-[#292929] block">Stated Manpower Ready</span>
                      <span className="text-[#5A6A78]">{companyData.statedManpowerCapacity}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-[#DCE2E5] text-xs text-[#5A6A78] leading-relaxed">
                  <strong className="text-[#292929]">Pan-India Mobilization:</strong> Crews can be staged and deployed rapidly with complete gate induction compliance for refineries across Gujarat, Maharashtra, Karnataka, Punjab, Andhra Pradesh, and Eastern hubs.
                </div>
              </div>

              {/* Turnaround Lead Time Note */}
              <div className="bg-[#123A68] text-white rounded-xl p-6 shadow-xs">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#F28A00] mb-2">
                  <IconCalendar className="w-4 h-4" />
                  <span>Planning Recommendation</span>
                </div>
                <h4 className="text-base font-bold text-white mb-2">
                  Advance Scheduling for Major Outages
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  For peak turnaround periods (March–May and September–November), early reservation guarantees batch availability of specialized millwright fitters, high-pressure jetting crews, and scaffolding supervisors.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
