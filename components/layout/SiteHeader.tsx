"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { companyData } from "@/data/company";
import { mainNavItems } from "@/data/navigation";
import { IconMenu, IconX, IconChevronRight, IconPhone } from "@/components/ui/Icons";

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-200 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-[#DCE2E5]"
            : "bg-white border-b border-[#DCE2E5]"
        }`}
      >
        {/* Top Operational Bar */}
        <div className="bg-[#123A68] text-white text-xs py-1.5 px-4 sm:px-6 lg:px-8 border-b border-[#155497]">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="inline-block w-2 h-2 rounded-full bg-[#F28A00] animate-pulse"></span>
              <span className="font-medium text-slate-100 hidden sm:inline">Refinery Shutdown &amp; Maintenance Contractor</span>
              <span className="text-slate-300">|</span>
              <span className="text-slate-300">Est. 2014 &bull; 700+ Technical Manpower</span>
            </div>
            <div className="flex items-center gap-4 text-slate-200">
              <a
                href={`tel:${companyData.contactPhone}`}
                className="hover:text-white transition-colors flex items-center gap-1.5 font-semibold text-slate-100 hover:text-[#F28A00]"
                title={`Call ${companyData.contactPerson}`}
              >
                <IconPhone className="w-3.5 h-3.5 text-[#F28A00]" />
                <span className="hidden sm:inline">{companyData.contactPhoneFormatted}</span>
                <span className="sm:hidden text-[#F28A00] font-bold">Call</span>
              </a>
              <span className="text-slate-400 hidden sm:inline">|</span>
              <Link
                href="/projects/"
                className="hover:text-white transition-colors hidden sm:flex items-center gap-1 font-medium"
              >
                <span>49+ Documented Shutdowns</span>
                <IconChevronRight className="w-3 h-3 text-[#F28A00]" />
              </Link>
            </div>
          </div>
        </div>

        {/* Main Navigation Bar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Approved Brand Logo */}
            <Link
              href="/"
              className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#155497] rounded py-1"
              aria-label="Jay Mataji Construction - Home"
            >
              <div className="relative w-14 h-14 sm:w-16 sm:h-16 flex-shrink-0 bg-white rounded p-1 border border-[#DCE2E5] group-hover:border-[#155497]/40 transition-colors">
                <Image
                  src="/images/brand/logo.jpg"
                  alt="Jay Mataji Construction Logo"
                  fill
                  sizes="64px"
                  className="object-contain"
                  priority
                />
              </div>
              <div className="flex flex-col">
                <span className="text-base sm:text-lg font-extrabold tracking-tight text-[#155497] leading-none">
                  JAY MATAJI
                </span>
                <span className="text-xs sm:text-sm font-bold tracking-wider text-[#F28A00] leading-none mt-0.5">
                  CONSTRUCTION
                </span>
                <span className="text-[10px] text-[#5A6A78] hidden sm:block font-medium tracking-normal mt-0.5">
                  Shutdown &amp; Maintenance Solutions
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2" aria-label="Main Navigation">
              {mainNavItems.map((item) => {
                const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`px-3 py-2 text-sm font-semibold rounded-md transition-all ${
                      isActive
                        ? "text-[#155497] bg-[#155497]/8 border-b-2 border-[#155497]"
                        : "text-[#292929] hover:text-[#155497] hover:bg-slate-50"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            {/* Header Action Button */}
            <div className="hidden lg:flex items-center gap-3">
              <Link
                href="/contact/"
                className="inline-flex items-center gap-2 bg-[#F28A00] hover:bg-[#d97c00] text-white text-sm font-semibold px-4 py-2.5 rounded-md shadow-sm transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#F28A00]"
              >
                <span>Contact Us</span>
                <IconChevronRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex lg:hidden items-center gap-2">
              <Link
                href="/contact/"
                className="inline-flex items-center gap-1.5 bg-[#F28A00] text-white text-xs font-semibold px-3 py-2 rounded shadow-sm"
              >
                <span>Enquire</span>
              </Link>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-[#292929] hover:text-[#155497] hover:bg-slate-100 rounded-md focus:outline-none focus:ring-2 focus:ring-[#155497]"
                aria-expanded={mobileMenuOpen}
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <IconX className="w-6 h-6" /> : <IconMenu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Accessible Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-50 lg:hidden bg-black/50 backdrop-blur-xs flex flex-col justify-end transition-opacity"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className="bg-white w-full max-h-[85vh] rounded-t-2xl p-6 shadow-2xl overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-4 border-b border-[#DCE2E5]">
              <div className="flex items-center gap-2.5">
                <div className="relative w-10 h-10 flex-shrink-0">
                  <Image
                    src="/images/brand/logo.jpg"
                    alt="Jay Mataji Construction Logo"
                    fill
                    className="object-contain"
                  />
                </div>
                <div>
                  <div className="text-sm font-bold text-[#155497]">JAY MATAJI CONSTRUCTION</div>
                  <div className="text-[11px] text-[#5A6A78]">Shutdown &amp; Maintenance Solutions</div>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="p-1.5 text-slate-500 hover:text-slate-800 rounded-md"
                aria-label="Close menu"
              >
                <IconX className="w-6 h-6" />
              </button>
            </div>

            <nav className="py-4 space-y-1">
              {mainNavItems.map((item) => {
                const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center justify-between px-3 py-3 rounded-lg text-base font-semibold transition-colors ${
                      isActive
                        ? "text-[#155497] bg-[#155497]/10"
                        : "text-[#292929] hover:bg-slate-50"
                    }`}
                  >
                    <span>{item.label}</span>
                    <IconChevronRight className="w-4 h-4 text-slate-400" />
                  </Link>
                );
              })}
            </nav>

            <div className="pt-4 border-t border-[#DCE2E5] space-y-2.5">
              <a
                href={`tel:${companyData.contactPhone}`}
                className="w-full flex items-center justify-center gap-2 bg-[#155497] text-white font-semibold py-2.5 px-4 rounded-lg shadow-sm text-sm"
              >
                <IconPhone className="w-4 h-4 text-[#F28A00]" />
                <span>Call {companyData.contactPhoneFormatted}</span>
              </a>
              <Link
                href="/contact/"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 bg-[#F28A00] text-white font-semibold py-2.5 px-4 rounded-lg shadow-sm text-sm"
              >
                <span>Request Outage &amp; Maintenance</span>
                <IconChevronRight className="w-4 h-4" />
              </Link>
              <div className="text-center text-xs text-[#5A6A78] pt-1">
                {companyData.contactPerson} &bull; Vadodara, Gujarat
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
