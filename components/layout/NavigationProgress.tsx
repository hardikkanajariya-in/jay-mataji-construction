"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";

const NAVIGATION_TIMEOUT_MS = 15000;

function isModifiedClick(event: MouseEvent) {
  return event.metaKey || event.altKey || event.ctrlKey || event.shiftKey || event.button !== 0;
}

function getNavigationTarget(anchor: HTMLAnchorElement): URL | null {
  const rawHref = anchor.getAttribute("href");
  if (!rawHref) return null;

  const trimmed = rawHref.trim();
  if (
    trimmed.startsWith("#") ||
    trimmed.startsWith("mailto:") ||
    trimmed.startsWith("tel:") ||
    trimmed.startsWith("javascript:")
  ) {
    return null;
  }

  if (anchor.target === "_blank" || anchor.hasAttribute("download")) {
    return null;
  }

  try {
    return new URL(trimmed, window.location.href);
  } catch {
    return null;
  }
}

function isSameDocumentNavigation(target: URL, pathname: string, search: string) {
  const currentPath = pathname + search;
  const targetPath = target.pathname + target.search;
  return targetPath === currentPath;
}

export function NavigationProgress() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const search = searchParams.toString() ? `?${searchParams.toString()}` : "";

  const [isNavigating, setIsNavigating] = useState(false);
  const [progress, setProgress] = useState(0);
  const progressTimerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const completeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const safetyTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const isNavigatingRef = useRef(false);

  const clearTimers = useCallback(() => {
    if (progressTimerRef.current) {
      clearInterval(progressTimerRef.current);
      progressTimerRef.current = null;
    }
    if (completeTimerRef.current) {
      clearTimeout(completeTimerRef.current);
      completeTimerRef.current = null;
    }
    if (safetyTimerRef.current) {
      clearTimeout(safetyTimerRef.current);
      safetyTimerRef.current = null;
    }
  }, []);

  const startNavigation = useCallback(() => {
    clearTimers();
    isNavigatingRef.current = true;
    setIsNavigating(true);
    setProgress(12);

    progressTimerRef.current = setInterval(() => {
      setProgress((value) => {
        if (value >= 92) return value;
        return value + Math.random() * 8;
      });
    }, 180);

    safetyTimerRef.current = setTimeout(() => {
      isNavigatingRef.current = false;
      setIsNavigating(false);
      setProgress(0);
      clearTimers();
    }, NAVIGATION_TIMEOUT_MS);
  }, [clearTimers]);

  const finishNavigation = useCallback(() => {
    if (!isNavigatingRef.current) return;

    clearTimers();
    setProgress(100);
    completeTimerRef.current = setTimeout(() => {
      isNavigatingRef.current = false;
      setIsNavigating(false);
      setProgress(0);
    }, 280);
  }, [clearTimers]);

  useEffect(() => {
    finishNavigation();
  }, [pathname, search, finishNavigation]);

  useEffect(() => {
    const handleDocumentClick = (event: MouseEvent) => {
      if (isModifiedClick(event)) return;

      const anchor = (event.target as Element | null)?.closest("a");
      if (!anchor) return;

      const target = getNavigationTarget(anchor);
      if (!target) return;
      if (target.origin !== window.location.origin) return;
      if (isSameDocumentNavigation(target, pathname, search)) return;

      startNavigation();
    };

    document.addEventListener("click", handleDocumentClick, true);
    return () => document.removeEventListener("click", handleDocumentClick, true);
  }, [pathname, search, startNavigation]);

  useEffect(() => {
    if (isNavigating) {
      document.body.setAttribute("data-navigating", "true");
    } else {
      document.body.removeAttribute("data-navigating");
    }
    return () => document.body.removeAttribute("data-navigating");
  }, [isNavigating]);

  useEffect(() => () => clearTimers(), [clearTimers]);

  if (!isNavigating && progress === 0) {
    return null;
  }

  return (
    <>
      <div
        className="fixed inset-0 z-[100] cursor-wait bg-white/40 backdrop-blur-[1px]"
        aria-hidden="true"
      />
      <div className="fixed top-0 left-0 right-0 z-[110] h-1 bg-[#DCE2E5]/80" role="presentation">
        <div
          className="h-full bg-gradient-to-r from-[#155497] via-[#123A68] to-[#F28A00] transition-[width] duration-200 ease-out shadow-[0_0_8px_rgba(21,84,151,0.45)]"
          style={{ width: `${Math.min(progress, 100)}%` }}
        />
      </div>
      <div className="fixed top-4 left-1/2 z-[110] -translate-x-1/2 pointer-events-none">
        <div
          className="flex items-center gap-2.5 rounded-full border border-[#DCE2E5] bg-white/95 px-4 py-2 shadow-md"
          role="status"
          aria-live="polite"
          aria-busy="true"
        >
          <span
            className="h-4 w-4 rounded-full border-2 border-[#DCE2E5] border-t-[#155497] animate-spin"
            aria-hidden="true"
          />
          <span className="text-xs font-bold text-[#292929] tracking-wide">Loading…</span>
        </div>
      </div>
    </>
  );
}
