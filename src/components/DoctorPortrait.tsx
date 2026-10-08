"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ShieldCheck, Activity, Sparkles } from "lucide-react";

interface DoctorPortraitProps {
  imageSrc?: string;
  className?: string;
}

export default function DoctorPortrait({
  imageSrc = "/images/doctor-hero.webp",
  className = "",
}: DoctorPortraitProps) {
  const [hasError, setHasError] = useState(false);

  return (
    <div
      className={`relative w-full aspect-[4/5] sm:aspect-[3/4] max-w-md mx-auto rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(49,42,87,0.35)] border-2 border-[#8B7EC8]/30 bg-gradient-to-br from-[#312A57] via-[#201A3D] to-[#141124] ${className}`}
    >
      {!hasError ? (
        <div className="relative w-full h-full">
          <Image
            src={imageSrc}
            alt="Dr. Héctor Valdéz Grajales — Cirujano General en Tuxtla Gutiérrez"
            fill
            sizes="(max-width: 768px) 100vw, 500px"
            priority
            className="object-cover object-top"
            onError={() => setHasError(true)}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#141124] via-transparent to-transparent opacity-60" />
        </div>
      ) : (
        /* Fallback de Prestigio Quirúrgico Exclusivo para el Doctor */
        <div className="relative h-full w-full flex flex-col items-center justify-center p-8 text-center text-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#8B7EC8]/20 via-transparent to-transparent pointer-events-none" />

          {/* Anillos orbitales tecnológicos */}
          <div className="absolute w-56 h-56 rounded-full border border-[#8B7EC8]/20 animate-pulse pointer-events-none" />
          <div className="absolute w-72 h-72 rounded-full border border-[#8B7EC8]/10 pointer-events-none" />

          {/* Emblema Oficial Quirúrgico del Doctor */}
          <div className="relative z-10 flex h-28 w-28 items-center justify-center rounded-3xl bg-white/10 shadow-2xl backdrop-blur-md border border-[#8B7EC8]/40 mb-5 p-3 group">
            <Image
              src="/images/icono.png"
              alt="Emblema Dr. Héctor Valdéz Grajales"
              width={88}
              height={88}
              className="w-full h-full object-contain filter drop-shadow group-hover:scale-105 transition-transform"
            />
          </div>

          <span className="inline-flex items-center gap-1.5 rounded-full border border-[#8B7EC8]/40 bg-white/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-[#DDD8F5] backdrop-blur-md mb-3">
            <ShieldCheck className="h-4 w-4 text-[#F59E0B]" />
            Cirujano General Certificado
          </span>

          <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Dr. Héctor Valdéz Grajales
          </h3>
          <p className="max-w-xs text-xs sm:text-sm text-neutral-300 font-sans mt-1.5">
            Especialista en Cirugía General & Laparoscopía de Mínima Invasión
          </p>
          <p className="text-[11px] font-mono text-[#DDD8F5] mt-2">
            UNACH · Céd. Esp. 11742236 · Céd. Prof. 8405839
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
            <span className="inline-flex items-center gap-1 text-[11px] bg-[#312A57]/80 border border-[#8B7EC8]/30 px-3 py-1 rounded-full text-neutral-200">
              <Sparkles className="w-3 h-3 text-[#F59E0B]" /> +5,000 Cirugías
            </span>
            <span className="inline-flex items-center gap-1 text-[11px] bg-[#312A57]/80 border border-[#8B7EC8]/30 px-3 py-1 rounded-full text-neutral-200">
              <Activity className="w-3 h-3 text-[#DDD8F5]" /> +5,500 Pacientes
            </span>
          </div>
        </div>
      )}

      {/* Badges Flotantes Inferiores */}
      <div className="absolute bottom-4 left-4 right-4 z-20 flex items-center justify-between pointer-events-none">
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#141124]/90 backdrop-blur-md border border-[#8B7EC8]/30 shadow-lg">
          <div className="w-2.5 h-2.5 rounded-full bg-rose-400 animate-ping" />
          <span className="text-xs font-semibold text-white">Urgencias 24 Horas</span>
        </div>
        <div className="px-3 py-1.5 rounded-xl bg-[#141124]/90 backdrop-blur-md border border-amber-500/30 text-amber-300 text-xs font-bold shadow-lg">
          Consultorios Santa Fe
        </div>
      </div>
    </div>
  );
}
