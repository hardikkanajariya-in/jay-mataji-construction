"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { IconChevronRight, IconArrowRight, IconShield, IconUsers, IconCalendar } from "@/components/ui/Icons";

export function HeroSection() {
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [isReducedMotion, setIsReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setIsReducedMotion(mediaQuery.matches);
    const handler = (e: MediaQueryListEvent) => setIsReducedMotion(e.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  const handlePointerMove = (e: React.PointerEvent<HTMLElement>) => {
    if (isReducedMotion || e.pointerType === "touch") return;
    const { clientX, clientY, currentTarget } = e;
    const rect = currentTarget.getBoundingClientRect();
    const x = ((clientX - rect.left) / rect.width - 0.5) * 16;
    const y = ((clientY - rect.top) / rect.height - 0.5) * 16;
    setOffset({ x, y });
  };

  const handlePointerLeave = () => {
    setOffset({ x: 0, y: 0 });
  };

  return (
    <section
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      className="relative bg-[#F4F7FA] border-b border-[#DCE2E5] overflow-hidden"
    >
      {/* 1. Subtle Industrial Architectural Grid */}
      <div 
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(#155497 1px, transparent 1px), linear-gradient(90deg, #155497 1px, transparent 1px)",
          backgroundSize: "36px 36px"
        }}
      />

      {/* 2. Soft Ambient Brand Blobs (Blue & Orange) with Parallax & Motion */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none overflow-hidden"
      >
        {/* Soft Industrial Blue Shape (Top Right / Center) */}
        <div
          className="absolute -top-24 right-0 lg:right-1/4 w-[420px] sm:w-[540px] h-[420px] sm:h-[540px] rounded-full blur-3xl opacity-35 bg-gradient-to-br from-[#155497]/25 via-[#123A68]/15 to-transparent animate-float-gentle transition-transform duration-500 ease-out"
          style={{
            transform: !isReducedMotion ? `translate3d(${offset.x * -0.8}px, ${offset.y * -0.8}px, 0)` : undefined
          }}
        />

        {/* Soft Industrial Orange Ember Accent (Bottom Left) */}
        <div
          className="absolute -bottom-20 -left-16 w-[340px] sm:w-[440px] h-[340px] sm:h-[440px] rounded-full blur-3xl opacity-25 bg-gradient-to-tr from-[#F28A00]/25 via-[#F28A00]/10 to-transparent animate-float-reverse transition-transform duration-500 ease-out"
          style={{
            transform: !isReducedMotion ? `translate3d(${offset.x * 0.6}px, ${offset.y * 0.6}px, 0)` : undefined
          }}
        />

        {/* Technical Blueprint Vector Accents (Concentric Ring & Refinery Axis) */}
        <svg
          className="absolute right-4 top-1/2 -translate-y-1/2 w-[480px] h-[480px] text-[#155497]/[0.04] hidden lg:block transition-transform duration-700 ease-out"
          style={{
            transform: !isReducedMotion ? `translate3d(${offset.x * 0.4}px, ${offset.y * 0.4}px, 0)` : undefined
          }}
          viewBox="0 0 400 400"
          fill="none"
        >
          <circle cx="200" cy="200" r="180" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
          <circle cx="200" cy="200" r="120" stroke="currentColor" strokeWidth="1" />
          <circle cx="200" cy="200" r="60" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
          <path d="M200 10v380M10 200h380" stroke="currentColor" strokeWidth="1" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Industrial Copy */}
          <div className="lg:col-span-7 space-y-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold text-[#292929] tracking-tight leading-[1.15]">
              Shutdown Readiness.{" "}
              <span className="text-[#155497] relative inline-block">
                Maintenance Expertise.
                <span className="absolute left-0 -bottom-1 w-full h-[3px] bg-gradient-to-r from-[#155497] to-[#F28A00]/70 rounded-full" />
              </span>
            </h1>

            <p className="text-base sm:text-lg text-[#5A6A78] leading-relaxed max-w-2xl font-normal">
              Jay Mataji Construction provides specialized turnaround execution, static equipment maintenance, column revamping, catalyst handling, and skilled industrial manpower for premier Indian refineries and petrochemical plants.
            </p>

            {/* Quick Proof Pills with Refined Hover States */}
            <div className="grid grid-cols-3 gap-3 pt-2 max-w-xl">
              <div className="bg-white/90 backdrop-blur-xs p-3 rounded-lg border border-[#DCE2E5] shadow-xs hover:border-[#155497]/40 hover:-translate-y-0.5 transition-all">
                <div className="flex items-center gap-1.5 text-xs font-semibold text-[#155497]">
                  <IconCalendar className="w-3.5 h-3.5 text-[#F28A00]" />
                  <span>Est. 2014</span>
                </div>
                <div className="text-[11px] text-[#5A6A78] mt-0.5">12+ Yrs Site Execution</div>
              </div>

              <div className="bg-white/90 backdrop-blur-xs p-3 rounded-lg border border-[#DCE2E5] shadow-xs hover:border-[#155497]/40 hover:-translate-y-0.5 transition-all">
                <div className="flex items-center gap-1.5 text-xs font-semibold text-[#155497]">
                  <IconUsers className="w-3.5 h-3.5 text-[#F28A00]" />
                  <span>700+ Roster</span>
                </div>
                <div className="text-[11px] text-[#5A6A78] mt-0.5">Rapid Deployment</div>
              </div>

              <div className="bg-white/90 backdrop-blur-xs p-3 rounded-lg border border-[#DCE2E5] shadow-xs hover:border-[#155497]/40 hover:-translate-y-0.5 transition-all">
                <div className="flex items-center gap-1.5 text-xs font-semibold text-[#155497]">
                  <IconShield className="w-3.5 h-3.5 text-[#F28A00]" />
                  <span>49+ Jobs</span>
                </div>
                <div className="text-[11px] text-[#5A6A78] mt-0.5">Major Indian Refineries</div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <Link
                href="/services/"
                className="inline-flex items-center justify-center gap-2 bg-[#155497] hover:bg-[#123A68] active:scale-[0.99] text-white font-semibold px-6 py-3.5 rounded-md shadow-sm hover:shadow-md transition-all text-sm"
              >
                <span>Explore Capabilities</span>
                <IconChevronRight className="w-4 h-4 text-[#F28A00]" />
              </Link>
              <Link
                href="/projects/"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 active:scale-[0.99] text-[#292929] border border-[#DCE2E5] hover:border-[#155497]/40 font-semibold px-6 py-3.5 rounded-md shadow-2xs hover:shadow-xs transition-all text-sm"
              >
                <span>Track Record (2014–2026)</span>
                <IconArrowRight className="w-4 h-4 text-[#155497]" />
              </Link>
            </div>
          </div>

          {/* Right Column: Industrial Photograph with Technical Frame */}
          <div className="lg:col-span-5">
            <div className="relative group">
              {/* Engineering Corner Brackets & Offset Backdrop */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-[#155497]/15 via-transparent to-[#F28A00]/15 rounded-2xl -z-10 blur-xs transition-opacity duration-300 opacity-80 group-hover:opacity-100" />
              <div className="absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2 border-[#155497] z-20 pointer-events-none" />
              <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b-2 border-r-2 border-[#F28A00] z-20 pointer-events-none" />

              <div className="relative rounded-xl overflow-hidden border-2 border-white shadow-xl bg-slate-900 aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3]">
                <Image
                  src="/images/hero-refinery.jpg"
                  alt="Refinery turnaround maintenance operation executed by skilled industrial technicians under daylight"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-3 right-3 p-3 bg-white/95 backdrop-blur-xs rounded-lg border border-[#DCE2E5] shadow-md">
                  <div className="flex items-center justify-between text-xs">
                    <div>
                      <span className="font-bold text-[#155497] block sm:inline">Refinery Shutdown Execution</span>
                      <span className="text-[#5A6A78] block text-[11px] mt-0.5">Static &amp; Rotating Equipment &bull; 2014–2026</span>
                    </div>
                    <span className="px-2 py-0.5 rounded bg-[#155497]/10 text-[#155497] font-semibold text-[10px] whitespace-nowrap self-start sm:self-center">
                      Verified Track Record
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
