import React from "react";
import Link from "next/link";
import Image from "next/image";
import { companyData } from "@/data/company";
import { footerQuickLinks, footerServiceLinks } from "@/data/navigation";
import { IconMapPin, IconCalendar, IconUsers, IconChevronRight, IconPhone, IconMail } from "@/components/ui/Icons";

export function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#123A68] text-white border-t-4 border-[#F28A00]">
      {/* Upper Info Strip */}
      <div className="border-b border-white/10 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
          <div className="flex items-start gap-3">
            <div className="p-2.5 rounded-lg bg-white/10 text-[#F28A00] flex-shrink-0">
              <IconCalendar className="w-5 h-5" />
            </div>
            <div>
              <div className="font-semibold text-white">Established in 2014</div>
              <div className="text-slate-300 text-xs mt-0.5">Over a decade executing critical refinery shutdowns &amp; maintenance</div>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="p-2.5 rounded-lg bg-white/10 text-[#F28A00] flex-shrink-0">
              <IconUsers className="w-5 h-5" />
            </div>
            <div>
              <div className="font-semibold text-white">700+ Technical Personnel</div>
              <div className="text-slate-300 text-xs mt-0.5">Rapid turnaround &amp; maintenance mobilization across India</div>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="p-2.5 rounded-lg bg-white/10 text-[#F28A00] flex-shrink-0">
              <IconMapPin className="w-5 h-5" />
            </div>
            <div>
              <div className="font-semibold text-white">Vadodara, Gujarat Base</div>
              <div className="text-slate-300 text-xs mt-0.5">Pan-India petroleum &amp; petrochemical coverage</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {/* Brand Column */}
          <div className="space-y-4 sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 bg-white rounded p-1 flex-shrink-0">
                <Image
                  src="/images/brand/logo.jpg"
                  alt="Jay Mataji Construction"
                  fill
                  sizes="48px"
                  className="object-contain"
                />
              </div>
              <div>
                <div className="text-sm font-bold text-white leading-tight">JAY MATAJI CONSTRUCTION</div>
                <div className="text-[11px] text-[#F28A00] font-semibold">Shutdown &amp; Maintenance</div>
              </div>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Industrial contractor specializing in refinery turnaround, plant maintenance services, static equipment overhaul, and specialized technical manpower supply since 2014.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-100 mb-4 pb-2 border-b border-white/10">
              Site Navigation
            </h3>
            <ul className="space-y-2.5 text-xs text-slate-300">
              {footerQuickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-white hover:translate-x-0.5 transition-all inline-flex items-center gap-1"
                  >
                    <span className="text-[#F28A00]">&rsaquo;</span>
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-100 mb-4 pb-2 border-b border-white/10">
              Specialized Scopes
            </h3>
            <ul className="space-y-2.5 text-xs text-slate-300">
              {footerServiceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-white hover:translate-x-0.5 transition-all inline-flex items-center gap-1"
                  >
                    <span className="text-[#F28A00]">&rsaquo;</span>
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Office & Direct Contact Column */}
          <div className="space-y-3 sm:col-span-2 lg:col-span-1">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-100 mb-4 pb-2 border-b border-white/10">
              Contact &amp; Office
            </h3>
            <div className="text-xs text-slate-300 space-y-2.5">
              <div>
                <span className="text-white font-bold block">{companyData.contactPerson}</span>
                <span className="text-[11px] text-[#F28A00] font-medium">{companyData.name}</span>
              </div>

              <div className="space-y-1 pt-1">
                <div className="flex items-center gap-2">
                  <IconPhone className="w-3.5 h-3.5 text-[#F28A00] flex-shrink-0" />
                  <a href={`tel:${companyData.contactPhone}`} className="hover:text-white transition-colors">
                    {companyData.contactPhoneFormatted}
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <IconPhone className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
                  <a href={`tel:${companyData.secondaryPhone}`} className="hover:text-white transition-colors">
                    {companyData.secondaryPhoneFormatted}
                  </a>
                </div>
              </div>

              <div className="space-y-1 pt-1">
                <div className="flex items-start gap-2">
                  <IconMail className="w-3.5 h-3.5 text-[#F28A00] flex-shrink-0 mt-0.5" />
                  <a href={`mailto:${companyData.contactEmail}`} className="hover:text-white transition-colors break-all">
                    {companyData.contactEmail}
                  </a>
                </div>
                <div className="flex items-start gap-2">
                  <IconMail className="w-3.5 h-3.5 text-slate-400 flex-shrink-0 mt-0.5" />
                  <a href={`mailto:${companyData.additionalEmail}`} className="hover:text-white transition-colors break-all text-[11px]">
                    {companyData.additionalEmail}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2 pt-2 border-t border-white/10">
                <IconMapPin className="w-3.5 h-3.5 text-[#F28A00] flex-shrink-0 mt-0.5" />
                <address className="not-italic text-[11px] leading-relaxed text-slate-300">
                  {companyData.address.line1}, {companyData.address.line2}, {companyData.address.city}, {companyData.address.state} &ndash; {companyData.address.pincode}
                </address>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Legal Bar */}
      <div className="bg-[#0c2747] py-5 px-4 sm:px-6 lg:px-8 border-t border-white/10 text-xs text-slate-400">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3 text-center md:text-left">
          <div>
            &copy; {currentYear} {companyData.name}. All rights reserved.
          </div>
          <div className="text-[11px] text-slate-300">
            Designed By{" "}
            <a
              href="http://niftysolutions.co.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#F28A00] hover:text-white font-medium underline underline-offset-2 transition-colors"
            >
              Nifty Solutions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
