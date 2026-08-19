"use client";

import { useEffect } from "react";
import { useCMSData } from "@/components/cms/CMSProvider";

function hexToRgb(hex: string): string {
  const h = hex.replace("#", "").trim();
  if (h.length !== 6) return "59, 130, 246";
  const r = parseInt(h.slice(0, 2), 16);
  const g = parseInt(h.slice(2, 4), 16);
  const b = parseInt(h.slice(4, 6), 16);
  return `${r}, ${g}, ${b}`;
}

/** Applies premium theme colors from CMS siteSettings to CSS variables */
export default function ThemeInjector() {
  const { siteSettings } = useCMSData();

  useEffect(() => {
    const root = document.documentElement;
    const primary = siteSettings.primaryColor || "#3b82f6";
    const accent = siteSettings.accentColor || "#00d4ff";
    const electric = siteSettings.electricColor || accent || "#00d4ff";

    root.style.setProperty("--color-accent", primary);
    root.style.setProperty("--color-accent-electric", electric);
    root.style.setProperty("--accent", primary);
    root.style.setProperty("--accent-electric", electric);
    root.style.setProperty("--color-accent-rgb", hexToRgb(primary));
    root.style.setProperty("--color-electric-rgb", hexToRgb(electric));
  }, [
    siteSettings.primaryColor,
    siteSettings.accentColor,
    siteSettings.electricColor,
  ]);

  return null;
}
