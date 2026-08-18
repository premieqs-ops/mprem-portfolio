"use client";

import { MessageCircle } from "lucide-react";
import { useCMSData } from "@/components/cms/CMSProvider";

export default function WhatsAppButton() {
  const { siteSettings } = useCMSData();
  if (!siteSettings.enableWhatsapp || !siteSettings.whatsappNumber) {
    return null;
  }
  const url = `https://wa.me/${siteSettings.whatsappNumber.replace(/\D/g, "")}`;
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg hover:scale-110 transition-transform"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
    </a>
  );
}
