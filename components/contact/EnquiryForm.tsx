"use client";

import React, { useState } from "react";
import { companyData } from "@/data/company";
import { IconCheckCircle, IconArrowRight } from "@/components/ui/Icons";

export function EnquiryForm() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    contactInfo: "",
    equipmentCategory: "Heat Exchangers",
    turnaroundPeriod: "",
    manpowerRequired: "",
    requirements: ""
  });

  const [submitted, setSubmitted] = useState(false);
  const [mailtoUrl, setMailtoUrl] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Prepare encoded mailto URL
    const subject = encodeURIComponent(`Turnaround Enquiry: ${formData.company || formData.name} - ${formData.equipmentCategory}`);
    const body = encodeURIComponent(
      `JAY MATAJI CONSTRUCTION - SHUTDOWN ENQUIRY\n` +
      `==========================================\n\n` +
      `Contact Name: ${formData.name}\n` +
      `Company / Refinery: ${formData.company}\n` +
      `Work Email / Phone: ${formData.contactInfo}\n` +
      `Equipment Category: ${formData.equipmentCategory}\n` +
      `Target Outage Window: ${formData.turnaroundPeriod || "Not specified"}\n` +
      `Estimated Manpower: ${formData.manpowerRequired || "To be discussed"}\n\n` +
      `Detailed Scope & Requirements:\n` +
      `${formData.requirements}\n\n` +
      `==========================================\n` +
      `Submitted via Jay Mataji Construction Web Portal`
    );

    const generatedMailto = `mailto:${companyData.contactEmail}?subject=${subject}&body=${body}`;
    setMailtoUrl(generatedMailto);
    setSubmitted(true);

    // Trigger user mail client
    window.location.href = generatedMailto;
  };

  return (
    <div className="bg-white rounded-xl border border-[#DCE2E5] p-6 sm:p-8 lg:p-10 shadow-xs">
      {submitted ? (
        <div className="text-center py-8 space-y-4">
          <div className="w-14 h-14 rounded-full bg-[#155497]/10 text-[#155497] flex items-center justify-center mx-auto">
            <IconCheckCircle className="w-8 h-8 text-[#155497]" />
          </div>
          <h3 className="text-2xl font-bold text-[#292929]">
            Enquiry Details Prepared
          </h3>
          <p className="text-sm text-[#5A6A78] max-w-md mx-auto leading-relaxed">
            Your default email client has been opened with your structured technical requirements pre-filled for <strong>{companyData.contactEmail}</strong>.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={mailtoUrl}
              className="px-5 py-3 rounded-md bg-[#155497] text-white text-xs font-semibold hover:bg-[#123A68]"
            >
              Open Email Client Again
            </a>
            <button
              type="button"
              onClick={() => setSubmitted(false)}
              className="px-5 py-3 rounded-md border border-[#DCE2E5] text-[#292929] text-xs font-semibold hover:bg-slate-50"
            >
              Edit Enquiry Details
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="border-b border-[#DCE2E5] pb-4 mb-2">
            <h3 className="text-xl font-bold text-[#292929]">Turnaround Scope &amp; Manpower Requisition</h3>
            <p className="text-xs text-[#5A6A78] mt-1">
              Provide your upcoming outage requirements. Form encodes directly to our operations desk.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="name" className="block text-xs font-bold text-[#292929] mb-1.5 uppercase tracking-wider">
                Full Name *
              </label>
              <input
                id="name"
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="e.g., Rajesh Patel"
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-[#DCE2E5] rounded-lg text-sm text-[#292929] focus:outline-none focus:ring-2 focus:ring-[#155497] focus:bg-white"
              />
            </div>

            <div>
              <label htmlFor="company" className="block text-xs font-bold text-[#292929] mb-1.5 uppercase tracking-wider">
                Company / Refinery *
              </label>
              <input
                id="company"
                type="text"
                required
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                placeholder="e.g., Indian Oil / Reliance Refinery"
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-[#DCE2E5] rounded-lg text-sm text-[#292929] focus:outline-none focus:ring-2 focus:ring-[#155497] focus:bg-white"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="contactInfo" className="block text-xs font-bold text-[#292929] mb-1.5 uppercase tracking-wider">
                Work Email or Phone *
              </label>
              <input
                id="contactInfo"
                type="text"
                required
                value={formData.contactInfo}
                onChange={(e) => setFormData({ ...formData, contactInfo: e.target.value })}
                placeholder="contact@company.com / +91 ..."
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-[#DCE2E5] rounded-lg text-sm text-[#292929] focus:outline-none focus:ring-2 focus:ring-[#155497] focus:bg-white"
              />
            </div>

            <div>
              <label htmlFor="equipmentCategory" className="block text-xs font-bold text-[#292929] mb-1.5 uppercase tracking-wider">
                Primary Scope / Equipment *
              </label>
              <select
                id="equipmentCategory"
                value={formData.equipmentCategory}
                onChange={(e) => setFormData({ ...formData, equipmentCategory: e.target.value })}
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-[#DCE2E5] rounded-lg text-sm text-[#292929] focus:outline-none focus:ring-2 focus:ring-[#155497] focus:bg-white"
              >
                <option value="Heat Exchangers">Heat Exchangers (Cleaning, Testing, Box-up)</option>
                <option value="Distillation Columns">Distillation Columns &amp; Trays</option>
                <option value="Reactors & Catalyst">Reactors &amp; Catalyst Handling</option>
                <option value="Vessels & Spheres">Vessels &amp; Spheres</option>
                <option value="Heaters & Furnaces">Heaters, Boilers &amp; Furnaces</option>
                <option value="Valves & Pumps">Valves, Pumps &amp; Compressors</option>
                <option value="Engineered Scaffolding">Engineered Industrial Scaffolding</option>
                <option value="Turnaround Manpower">Specialized Shutdown Manpower (Up to 700+)</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="turnaroundPeriod" className="block text-xs font-bold text-[#292929] mb-1.5 uppercase tracking-wider">
                Target Outage Window / Month
              </label>
              <input
                id="turnaroundPeriod"
                type="text"
                value={formData.turnaroundPeriod}
                onChange={(e) => setFormData({ ...formData, turnaroundPeriod: e.target.value })}
                placeholder="e.g., Nov 2026, 18-day window"
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-[#DCE2E5] rounded-lg text-sm text-[#292929] focus:outline-none focus:ring-2 focus:ring-[#155497] focus:bg-white"
              />
            </div>

            <div>
              <label htmlFor="manpowerRequired" className="block text-xs font-bold text-[#292929] mb-1.5 uppercase tracking-wider">
                Estimated Trade Crew Size
              </label>
              <input
                id="manpowerRequired"
                type="text"
                value={formData.manpowerRequired}
                onChange={(e) => setFormData({ ...formData, manpowerRequired: e.target.value })}
                placeholder="e.g., 50-100 Fitters / Riggers"
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-[#DCE2E5] rounded-lg text-sm text-[#292929] focus:outline-none focus:ring-2 focus:ring-[#155497] focus:bg-white"
              />
            </div>
          </div>

          <div>
            <label htmlFor="requirements" className="block text-xs font-bold text-[#292929] mb-1.5 uppercase tracking-wider">
              Detailed Scope Summary *
            </label>
            <textarea
              id="requirements"
              rows={4}
              required
              value={formData.requirements}
              onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
              placeholder="Outline unit name (CDU/FCCU/DHDS), number of exchangers or column heights, tooling expectations, or specific shift requirements..."
              className="w-full px-3.5 py-2.5 bg-slate-50 border border-[#DCE2E5] rounded-lg text-sm text-[#292929] focus:outline-none focus:ring-2 focus:ring-[#155497] focus:bg-white"
            />
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#F28A00] hover:bg-[#d97c00] text-white font-bold px-8 py-3.5 rounded-lg text-sm shadow-md transition-colors"
            >
              <span>Transmit Technical Requisition</span>
              <IconArrowRight className="w-4 h-4" />
            </button>
            <span className="block text-[11px] text-[#5A6A78] mt-2">
              *Generates pre-formatted email to operations dispatch: {companyData.contactEmail}
            </span>
          </div>
        </form>
      )}
    </div>
  );
}
