import React from "react";
import Link from "next/link";
import Image from "next/image";
import { companyData } from "@/data/company";
import { footerQuickLinks, footerServiceLinks } from "@/data/navigation";
import { IconMapPin, IconCalendar, IconUsers, IconChevronRight } from "@/components/ui/Icons";

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
              <div className="text-slate-300 text-xs mt-0.5">Over a decade executing critical refinery shutdowns</div>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="p-2.5 rounded-lg bg-white/10 text-[#F28A00] flex-shrink-0">
              <IconUsers className="w-5 h-5" />
            </div>
            <div>
              <div className="font-semibold text-white">700+ Technical Personnel</div>
              <div className="text-slate-300 text-xs mt-0.5">Rapid turnaround mobilization across India</div>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="p-2.5 rounded-lg bg-white/10 text-[#F28A00] flex-shrink-0">
              <IconMapPin className="w-5 h-5" />
            </div>
            <div>
              <div className="font-semibold text-white">Pan-India Industrial Coverage</div>
              <div className="text-slate-300 text-xs mt-0.5">Serving major petroleum and petrochemical sites</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-14 h-14 bg-white rounded p-1 flex-shrink-0">
                <Image
                  src="/images/brand/logo.jpg"
                  alt="Jay Mataji Construction"
                  fill
                  sizes="56px"
                  className="object-contain"
                />
              </div>
              <div>
                <div className="text-base font-bold text-white leading-tight">JAY MATAJI CONSTRUCTION</div>
                <div className="text-xs text-[#F28A00] font-semibold">Shutdown &amp; Maintenance Solutions</div>
              </div>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Industrial contractor specializing in refinery turnaround, shutdown maintenance, static equipment overhaul, reactor catalyst handling, and specialized technical manpower supply since 2014.
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

          {/* Refinery Experience Locations */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-100 mb-4 pb-2 border-b border-white/10">
              Documented Footprint
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed mb-3">
              Documented maintenance and shutdown jobs performed across key industrial hubs:
            </p>
            <div className="flex flex-wrap gap-1.5 text-[11px]">
              {["Jamnagar", "Mangalore", "Mumbai", "Vizag", "Vadinar", "Bhatinda", "Barauni", "Haldia", "Kochi", "Numaligarh", "Nagothane"].map((hub) => (
                <span
                  key={hub}
                  className="px-2 py-0.5 bg-white/10 rounded text-slate-200 border border-white/10"
                >
                  {hub}
                </span>
              ))}
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
