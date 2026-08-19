"use client";

import type { ReactNode } from "react";
import { usePathname } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollProgress from "@/components/layout/ScrollProgress";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import NetworkParticles from "@/components/home/NetworkParticles";

export default function SiteShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isAdmin = pathname?.startsWith("/admin") ?? false;

  if (isAdmin) {
    return <>{children}</>;
  }

  return (
    <>
      {/* Full-page digital marketing network + soft particles */}
      <NetworkParticles fullPage intensity={0.9} />
      <div className="relative z-10">
        <ScrollProgress />
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <WhatsAppButton />
      </div>
    </>
  );
}
