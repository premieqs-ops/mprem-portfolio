"use client";

import type { ReactNode } from "react";
import { CMSProvider } from "@/components/cms/CMSProvider";
import ThemeInjector from "@/components/ThemeInjector";

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <CMSProvider>
      <ThemeInjector />
      {children}
    </CMSProvider>
  );
}
