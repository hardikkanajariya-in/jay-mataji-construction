import React from "react";
import Link from "next/link";
import { IconChevronRight } from "@/components/ui/Icons";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface PageHeaderProps {
  badge?: string;
  title: string;
  description: string;
  breadcrumbs: BreadcrumbItem[];
}

export function PageHeader({
  badge,
  title,
  description,
  breadcrumbs
}: PageHeaderProps) {
  return (
    <div className="bg-gradient-to-b from-[#EEF1F2] to-white border-b border-[#DCE2E5] py-10 sm:py-14 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-4">
          <ol className="flex items-center gap-1.5 text-xs text-[#5A6A78]">
            <li>
              <Link href="/" className="hover:text-[#155497] transition-colors">
                Home
              </Link>
            </li>
            {breadcrumbs.map((crumb, idx) => (
              <li key={idx} className="flex items-center gap-1.5">
                <IconChevronRight className="w-3.5 h-3.5 text-slate-400" />
                {crumb.href ? (
                  <Link href={crumb.href} className="hover:text-[#155497] transition-colors">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="font-semibold text-[#292929]" aria-current="page">
                    {crumb.label}
                  </span>
                )}
              </li>
            ))}
          </ol>
        </nav>

        {/* Badge */}
        {badge && (
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#155497]/10 text-[#155497] border border-[#155497]/20 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F28A00]"></span>
            {badge}
          </div>
        )}

        {/* Title & Description */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#292929] tracking-tight leading-tight max-w-4xl">
          {title}
        </h1>
        <p className="mt-4 text-base sm:text-lg text-[#5A6A78] leading-relaxed max-w-3xl">
          {description}
        </p>
      </div>
    </div>
  );
}
