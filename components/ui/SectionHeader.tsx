import React from "react";

interface SectionHeaderProps {
  badge?: string;
  title: string;
  description?: string;
  centered?: boolean;
  className?: string;
}

export function SectionHeader({
  badge,
  title,
  description,
  centered = false,
  className = ""
}: SectionHeaderProps) {
  return (
    <div className={`mb-10 lg:mb-14 ${centered ? "text-center max-w-3xl mx-auto" : "max-w-3xl"} ${className}`}>
      {badge && (
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#155497]/10 text-[#155497] border border-[#155497]/20 mb-3">
          <span className="w-1.5 h-1.5 rounded-full bg-[#F28A00]"></span>
          {badge}
        </div>
      )}
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#292929] leading-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-base sm:text-lg text-[#5A6A78] leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
