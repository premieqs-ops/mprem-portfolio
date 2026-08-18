"use client";

import type { ReactNode } from "react";
import { CMSProvider } from "@/components/cms/CMSProvider";

export default function Providers({ children }: { children: ReactNode }) {
  return <CMSProvider>{children}</CMSProvider>;
}
