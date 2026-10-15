import React from "react";
import type { Metadata } from "next";
import { companyData } from "@/data/company";
import { PageHeader } from "@/components/layout/PageHeader";
import { EnquiryForm } from "@/components/contact/EnquiryForm";
import { IconMapPin, IconMail, IconPhone, IconCalendar, IconUsers } from "@/components/ui/Icons";

export const metadata: Metadata = {
  title: "Contact & Mobilization | Refinery Turnaround & Maintenance Services",
  description: "Contact Jay Mataji Construction (Sanjay Harshalia) in Vadodara, Gujarat for refinery turnaround staffing, industrial maintenance services, heat exchanger overhauls, and trade crew mobilization."
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        badge="Direct Operations Desk"
        title="Contact &amp; Mobilization Desk"
        description="Initiate discussions for upcoming planned refinery outages, routine & emergency plant maintenance services, or trade crew requisitions. We coordinate directly with plant maintenance engineers and procurement heads nationwide."
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
                <div className="border-b border-[#DCE2E5] pb-4 mb-5">
                  <span className="text-xs font-bold text-[#F28A00] uppercase tracking-wider block">Key Contact</span>
                  <h3 className="text-xl font-extrabold text-[#292929] mt-0.5">
                    {companyData.contactPerson}
                  </h3>
                  <p className="text-xs text-[#5A6A78] font-medium mt-0.5">
                    {companyData.name} &bull; Vadodara, Gujarat
                  </p>
                </div>

                <div className="space-y-4 text-xs sm:text-sm">
                  {/* Phone Numbers */}
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-[#155497]/10 text-[#155497] flex-shrink-0 mt-0.5">
                      <IconPhone className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="font-bold text-[#292929] block">Direct Mobile Numbers</span>
                      <div className="flex flex-col gap-1 mt-0.5">
                        <div className="flex items-center gap-2">
                          <a
                            href={`tel:${companyData.contactPhone}`}
                            className="text-[#155497] hover:underline font-semibold"
                          >
                            {companyData.contactPhoneFormatted}
                          </a>
                          <span className="text-[10px] uppercase font-bold px-1.5 py-0.5 bg-[#155497]/10 text-[#155497] rounded">
                            Primary
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <a
                            href={`tel:${companyData.secondaryPhone}`}
                            className="text-[#155497] hover:underline font-semibold"
                          >
                            {companyData.secondaryPhoneFormatted}
                          </a>
                          <span className="text-[10px] uppercase font-bold px-1.5 py-0.5 bg-slate-100 text-[#5A6A78] rounded">
                            Secondary
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Email Addresses */}
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-[#155497]/10 text-[#155497] flex-shrink-0 mt-0.5">
                      <IconMail className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="font-bold text-[#292929] block">Official Email Addresses</span>
                      <div className="flex flex-col gap-1 mt-0.5">
                        <a
                          href={`mailto:${companyData.contactEmail}`}
                          className="text-[#155497] hover:underline break-all font-medium"
                        >
                          {companyData.contactEmail}
                        </a>
                        <a
                          href={`mailto:${companyData.additionalEmail}`}
                          className="text-[#155497] hover:underline break-all text-xs"
                        >
                          {companyData.additionalEmail}
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Registered Office Address */}
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-[#155497]/10 text-[#155497] flex-shrink-0 mt-0.5">
                      <IconMapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="font-bold text-[#292929] block">Registered Office Address</span>
                      <address className="not-italic text-[#5A6A78] text-xs leading-relaxed mt-0.5">
                        {companyData.address.line1}, {companyData.address.line2},<br />
                        {companyData.address.city}, {companyData.address.state} &ndash; {companyData.address.pincode}
                      </address>
                    </div>
                  </div>

                  {/* Manpower Capability */}
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-[#155497]/10 text-[#155497] flex-shrink-0 mt-0.5">
                      <IconUsers className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="font-bold text-[#292929] block">Technical Workforce</span>
                      <span className="text-[#5A6A78] text-xs">{companyData.statedManpowerCapacity}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-[#DCE2E5] text-xs text-[#5A6A78] leading-relaxed">
                  <strong className="text-[#292929]">Maintenance &amp; Turnaround Mobilization:</strong> Crews can be staged and deployed rapidly with complete gate induction compliance for refineries and process complexes across Gujarat, Maharashtra, Karnataka, Punjab, Andhra Pradesh, and Eastern industrial hubs.
                </div>
              </div>

              {/* Turnaround & Maintenance Scheduling Note */}
              <div className="bg-[#123A68] text-white rounded-xl p-6 shadow-xs">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#F28A00] mb-2">
                  <IconCalendar className="w-4 h-4" />
                  <span>Planning Recommendation</span>
                </div>
                <h4 className="text-base font-bold text-white mb-2">
                  Planned Outage &amp; Routine Maintenance Coordination
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  For peak turnaround periods (March–May and September–November) or routine plant maintenance contracts, early coordination guarantees dedicated allocation of specialized millwright fitters, hydro-jetting crews, and certified scaffolding supervisors.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
