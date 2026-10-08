"use client";

import React, { useState } from "react";
import Image from "next/image";

interface CardImageHeaderProps {
  src?: string;
  alt: string;
  category?: "digestivo" | "hernias" | "proctologia" | "partes-blandas" | "urgencias" | "laparoscopia" | "cirugia-general" | "abdominal" | "proctologico";
  aspectRatio?: "video" | "wide";
  badgeText?: string;
}

export function CardImageHeader({
  src,
  alt,
  category = "cirugia-general",
  aspectRatio = "video",
  badgeText,
}: CardImageHeaderProps) {
  const [imageError, setImageError] = useState(false);
  const showFallback = !src || imageError;

  const aspectClass = aspectRatio === "wide" ? "aspect-[16/10]" : "aspect-video";

  return (
    <div className={`relative w-full ${aspectClass} overflow-hidden rounded-t-2xl bg-neutral-100`}>
      {!showFallback ? (
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 hover:scale-105"
          onError={() => setImageError(true)}
        />
      ) : (
        <div className="relative flex h-full w-full flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-[#0C4A42] via-[#093530] to-[#081D1A]">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#14B8A6]/20 via-transparent to-transparent pointer-events-none" />
          
          <div className="relative z-10 flex flex-col items-center justify-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 shadow-sm border border-[#14B8A6]/30 mb-2 backdrop-blur-md">
              <svg className="w-6 h-6 text-[#2DD4BF]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2v20M2 12h20M7 7l10 10M17 7L7 17"/>
              </svg>
            </div>
            <span className="text-xs font-semibold tracking-wider uppercase text-[#5EEAD4]">
              {category === "laparoscopia"
                ? "Laparoscopía de Mínima Invasión"
                : category === "hernias"
                ? "Pared Abdominal & Hernias"
                : category === "proctologia" || category === "proctologico"
                ? "Proctología Quirúrgica"
                : category === "partes-blandas"
                ? "Cirugía de Partes Blandas"
                : category === "urgencias"
                ? "Urgencia Quirúrgica 24H"
                : "Cirugía General & Digestiva"}
            </span>
            <span className="text-[11px] text-neutral-300 mt-0.5 font-medium">
              Dr. Héctor Valdéz Grajales
            </span>
          </div>

          <div className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full bg-[#14B8A6]/10 blur-xl pointer-events-none" />
        </div>
      )}

      {badgeText && (
        <div className="absolute top-3 left-3 z-20">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-[#0C4A42]/90 text-[#5EEAD4] shadow-sm backdrop-blur-md border border-[#14B8A6]/30">
            {badgeText}
          </span>
        </div>
      )}
    </div>
  );
}
