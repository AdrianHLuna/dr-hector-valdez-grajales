"use client";

import React from "react";
import { MessageCircle, Phone } from "lucide-react";
import { doctor } from "@/data/doctor";

export function FloatingButtons() {
  const whatsappUrl = `https://wa.me/${doctor.whatsapp.replace(/[^0-9]/g, "")}?text=Hola%20Dr.%20H%C3%A9ctor%20Vald%C3%A9z,%20quisiera%20agendar%20una%20consulta%20de%20cirug%C3%ADa%20general.`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      {/* Botón de Llamada Rápida */}
      <a
        href={`tel:${doctor.emergencyPhone}`}
        className="flex items-center justify-center w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-rose-600 hover:bg-rose-700 text-white shadow-[0_8px_24px_rgba(225,29,72,0.4)] hover:scale-105 active:scale-95 transition-all group relative"
        aria-label="Llamar a Urgencias 24 Horas"
      >
        <Phone className="w-6 h-6 animate-pulse" />
        <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-3 py-1.5 rounded-xl bg-neutral-900/90 text-white text-xs font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-md">
          Urgencias 24H: 961 225 4853
        </span>
      </a>

      {/* Botón de WhatsApp */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-[0_8px_24px_rgba(37,211,102,0.4)] hover:scale-105 active:scale-95 transition-all group relative"
        aria-label="Contactar por WhatsApp"
      >
        <MessageCircle className="w-7 h-7" />
        <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-3 py-1.5 rounded-xl bg-neutral-900/90 text-white text-xs font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-md">
          Agendar Cita ($500 MXN)
        </span>
      </a>
    </div>
  );
}
