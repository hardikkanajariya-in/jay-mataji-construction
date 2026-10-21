import React from "react";

interface PageLoaderProps {
  label?: string;
  compact?: boolean;
}

export function PageLoader({ label = "Loading page…", compact = false }: PageLoaderProps) {
  return (
    <div
      className={`flex flex-col items-center justify-center gap-4 ${compact ? "py-12" : "py-24 min-h-[40vh]"}`}
      role="status"
      aria-live="polite"
      aria-busy="true"
    >
      <div
        className="h-10 w-10 rounded-full border-2 border-[#DCE2E5] border-t-[#155497] border-r-[#F28A00] animate-spin"
        aria-hidden="true"
      />
      <p className="text-sm font-semibold text-[#5A6A78]">{label}</p>
    </div>
  );
}
