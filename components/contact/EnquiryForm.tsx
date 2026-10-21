"use client";

import React, { useState, useEffect } from "react";
import { integrationsConfig } from "@/config/integrations";
import { companyData } from "@/data/company";
import { IconCheckCircle, IconArrowRight } from "@/components/ui/Icons";

declare global {
  interface Window {
    grecaptcha?: {
      ready: (callback: () => void) => void;
      execute: (siteKey: string, options: { action: string }) => Promise<string>;
    };
  }
}

export function EnquiryForm() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    equipmentCategory: "Heat Exchangers",
    turnaroundPeriod: "",
    manpowerRequired: "",
    requirements: "",
    botcheck: "" // Web3Forms honeypot anti-spam
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  // Load Google reCAPTCHA v3 script if siteKey is provided
  useEffect(() => {
    if (integrationsConfig.recaptcha.enabled && integrationsConfig.recaptcha.siteKey) {
      const scriptId = "google-recaptcha-v3";
      if (!document.getElementById(scriptId)) {
        const script = document.createElement("script");
        script.id = scriptId;
        script.src = `https://www.google.com/recaptcha/api.js?render=${integrationsConfig.recaptcha.siteKey}`;
        script.async = true;
        document.body.appendChild(script);
      }
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    // Basic email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(formData.email)) {
      setSubmitStatus("error");
      setErrorMessage("Please provide a valid corporate email address.");
      return;
    }

    const accessKey = integrationsConfig.web3forms.accessKey;
    if (!accessKey) {
      setSubmitStatus("error");
      setErrorMessage(
        "The enquiry gateway is not configured. Please email our operations desk directly."
      );
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");
    setErrorMessage("");

    try {
      // reCAPTCHA v3 runs only in the browser before submit (free Web3Forms plan — do not send token to Web3Forms).
      if (integrationsConfig.recaptcha.enabled) {
        if (!window.grecaptcha) {
          setSubmitStatus("error");
          setErrorMessage(
            "Security verification could not load. Please refresh the page or contact our operations desk directly."
          );
          return;
        }
        try {
          await new Promise<void>((resolve) => window.grecaptcha?.ready(() => resolve()));
          const recaptchaToken = await window.grecaptcha.execute(
            integrationsConfig.recaptcha.siteKey,
            { action: integrationsConfig.recaptcha.actionName }
          );
          if (!recaptchaToken) {
            setSubmitStatus("error");
            setErrorMessage("Security verification failed. Please try again.");
            return;
          }
        } catch {
          setSubmitStatus("error");
          setErrorMessage(
            "Security verification failed. Please try again or contact our operations desk directly."
          );
          return;
        }
      }

      const payload: Record<string, string> = {
        access_key: accessKey,
        subject: `${integrationsConfig.web3forms.subjectPrefix}: ${formData.company} - ${formData.equipmentCategory}`,
        from_name: integrationsConfig.web3forms.fromName,
        name: formData.name,
        company: formData.company,
        email: formData.email,
        phone: formData.phone || "Not specified",
        equipment_category: formData.equipmentCategory,
        target_outage_window: formData.turnaroundPeriod || "Not specified",
        estimated_manpower: formData.manpowerRequired || "To be discussed",
        message: formData.requirements,
        botcheck: formData.botcheck
      };

      const response = await fetch(integrationsConfig.web3forms.endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify(payload)
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setSubmitStatus("success");
      } else {
        setSubmitStatus("error");
        setErrorMessage(
          result.message || "Unable to transmit technical enquiry. Please verify your details or contact our operations desk directly."
        );
      }
    } catch {
      setSubmitStatus("error");
      setErrorMessage("Network error connecting to operations gateway. Please check your internet connection or email our operations desk directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleResetForm = () => {
    setFormData({
      name: "",
      company: "",
      email: "",
      phone: "",
      equipmentCategory: "Heat Exchangers",
      turnaroundPeriod: "",
      manpowerRequired: "",
      requirements: "",
      botcheck: ""
    });
    setSubmitStatus("idle");
    setErrorMessage("");
  };

  return (
    <div className="bg-white rounded-xl border border-[#DCE2E5] p-6 sm:p-8 lg:p-10 shadow-xs">
      {submitStatus === "success" ? (
        <div className="text-center py-10 space-y-4">
          <div className="w-16 h-16 rounded-full bg-[#155497]/10 text-[#155497] flex items-center justify-center mx-auto">
            <IconCheckCircle className="w-10 h-10 text-[#155497]" />
          </div>
          <h3 className="text-2xl font-extrabold text-[#292929]">
            Turnaround Enquiry Transmitted
          </h3>
          <p className="text-sm text-[#5A6A78] max-w-md mx-auto leading-relaxed">
            Thank you. Your technical requisition has been dispatched directly to the operations planning team at <strong>{companyData.name}</strong>. An outage coordinator will review your schedule and respond promptly.
          </p>
          <div className="pt-4">
            <button
              type="button"
              onClick={handleResetForm}
              className="px-6 py-3 rounded-lg bg-[#155497] text-white text-xs font-semibold hover:bg-[#123A68] transition-colors"
            >
              Submit Another Requisition
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6" noValidate>
          <div className="border-b border-[#DCE2E5] pb-4 mb-2">
            <h3 className="text-xl font-bold text-[#292929]">Turnaround Scope &amp; Manpower Requisition</h3>
            <p className="text-xs text-[#5A6A78] mt-1">
              Complete your planned outage parameters. Inquiries are routed directly to our operations and mobilization desk.
            </p>
          </div>

          {/* Honeypot anti-spam field */}
          <input
            type="checkbox"
            name="botcheck"
            className="hidden"
            style={{ display: "none" }}
            checked={Boolean(formData.botcheck)}
            onChange={(e) => setFormData({ ...formData, botcheck: e.target.checked ? "bot" : "" })}
            tabIndex={-1}
            autoComplete="off"
          />

          {submitStatus === "error" && (
            <div className="p-4 rounded-lg bg-red-50 border border-red-200 text-xs text-red-700 flex items-start gap-2.5" role="alert">
              <span className="font-bold text-red-800 flex-shrink-0">&bull;</span>
              <div>
                <strong className="block font-semibold">Transmission Notice:</strong>
                {errorMessage}
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="name" className="block text-xs font-bold text-[#292929] mb-1.5 uppercase tracking-wider">
                Full Name <span className="text-[#F28A00]">*</span>
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                disabled={isSubmitting}
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="e.g., Rajesh Patel"
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-[#DCE2E5] rounded-lg text-sm text-[#292929] focus:outline-none focus:ring-2 focus:ring-[#155497] focus:bg-white transition-all disabled:opacity-50"
              />
            </div>

            <div>
              <label htmlFor="company" className="block text-xs font-bold text-[#292929] mb-1.5 uppercase tracking-wider">
                Company / Refinery Complex <span className="text-[#F28A00]">*</span>
              </label>
              <input
                id="company"
                name="company"
                type="text"
                required
                disabled={isSubmitting}
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                placeholder="e.g., Indian Oil / Reliance Industries"
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-[#DCE2E5] rounded-lg text-sm text-[#292929] focus:outline-none focus:ring-2 focus:ring-[#155497] focus:bg-white transition-all disabled:opacity-50"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="email" className="block text-xs font-bold text-[#292929] mb-1.5 uppercase tracking-wider">
                Work Email <span className="text-[#F28A00]">*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                disabled={isSubmitting}
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="procurement@refinery.com"
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-[#DCE2E5] rounded-lg text-sm text-[#292929] focus:outline-none focus:ring-2 focus:ring-[#155497] focus:bg-white transition-all disabled:opacity-50"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-xs font-bold text-[#292929] mb-1.5 uppercase tracking-wider">
                Contact Phone / Mobile
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                disabled={isSubmitting}
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="+91 90335 XXXXX"
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-[#DCE2E5] rounded-lg text-sm text-[#292929] focus:outline-none focus:ring-2 focus:ring-[#155497] focus:bg-white transition-all disabled:opacity-50"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            <div>
              <label htmlFor="equipmentCategory" className="block text-xs font-bold text-[#292929] mb-1.5 uppercase tracking-wider">
                Primary Scope <span className="text-[#F28A00]">*</span>
              </label>
              <select
                id="equipmentCategory"
                name="equipmentCategory"
                disabled={isSubmitting}
                value={formData.equipmentCategory}
                onChange={(e) => setFormData({ ...formData, equipmentCategory: e.target.value })}
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-[#DCE2E5] rounded-lg text-sm text-[#292929] focus:outline-none focus:ring-2 focus:ring-[#155497] focus:bg-white transition-all disabled:opacity-50"
              >
                <option value="Plant Maintenance">Plant &amp; Equipment Maintenance (Routine / AMC / Breakdown)</option>
                <option value="Heat Exchangers">Heat Exchangers Overhaul</option>
                <option value="Distillation Columns">Distillation Columns &amp; Trays</option>
                <option value="Vessels & Spheres">Vessels &amp; Spheres</option>
                <option value="Industrial Valves">Industrial Valve Servicing &amp; Testing</option>
                <option value="Engineered Scaffolding">Engineered Scaffolding Platforms</option>
                <option value="Turnaround Manpower">Trade Crew Supply (Up to 700+)</option>
              </select>
            </div>

            <div>
              <label htmlFor="turnaroundPeriod" className="block text-xs font-bold text-[#292929] mb-1.5 uppercase tracking-wider">
                Target Outage Window
              </label>
              <input
                id="turnaroundPeriod"
                name="turnaroundPeriod"
                type="text"
                disabled={isSubmitting}
                value={formData.turnaroundPeriod}
                onChange={(e) => setFormData({ ...formData, turnaroundPeriod: e.target.value })}
                placeholder="e.g., Nov 2026 (18 Days)"
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-[#DCE2E5] rounded-lg text-sm text-[#292929] focus:outline-none focus:ring-2 focus:ring-[#155497] focus:bg-white transition-all disabled:opacity-50"
              />
            </div>

            <div>
              <label htmlFor="manpowerRequired" className="block text-xs font-bold text-[#292929] mb-1.5 uppercase tracking-wider">
                Trade Crew Size
              </label>
              <input
                id="manpowerRequired"
                name="manpowerRequired"
                type="text"
                disabled={isSubmitting}
                value={formData.manpowerRequired}
                onChange={(e) => setFormData({ ...formData, manpowerRequired: e.target.value })}
                placeholder="e.g., 50–150 Technicians"
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-[#DCE2E5] rounded-lg text-sm text-[#292929] focus:outline-none focus:ring-2 focus:ring-[#155497] focus:bg-white transition-all disabled:opacity-50"
              />
            </div>
          </div>

          <div>
            <label htmlFor="requirements" className="block text-xs font-bold text-[#292929] mb-1.5 uppercase tracking-wider">
              Technical Scope &amp; Unit Description <span className="text-[#F28A00]">*</span>
            </label>
            <textarea
              id="requirements"
              name="requirements"
              rows={4}
              required
              disabled={isSubmitting}
              value={formData.requirements}
              onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
              placeholder="Outline unit name (CDU/FCCU/DHDS), number of heat exchangers, column heights, blinding boundaries, specialized tooling, or shift arrangements..."
              className="w-full px-3.5 py-2.5 bg-slate-50 border border-[#DCE2E5] rounded-lg text-sm text-[#292929] focus:outline-none focus:ring-2 focus:ring-[#155497] focus:bg-white transition-all disabled:opacity-50"
            />
          </div>

          <div className="pt-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#F28A00] hover:bg-[#d97c00] active:scale-[0.99] text-white font-bold px-8 py-3.5 rounded-lg text-sm shadow-md transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  <span>Transmitting Requisition...</span>
                </>
              ) : (
                <>
                  <span>Transmit Technical Requisition</span>
                  <IconArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
            {integrationsConfig.recaptcha.enabled && (
              <p className="mt-3 text-[10px] text-[#5A6A78] leading-relaxed max-w-xl">
                This site is protected by reCAPTCHA and the Google{" "}
                <a
                  href="https://policies.google.com/privacy"
                  className="underline hover:text-[#292929]"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Privacy Policy
                </a>{" "}
                and{" "}
                <a
                  href="https://policies.google.com/terms"
                  className="underline hover:text-[#292929]"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Terms of Service
                </a>{" "}
                apply.
              </p>
            )}
          </div>
        </form>
      )}
    </div>
  );
}
