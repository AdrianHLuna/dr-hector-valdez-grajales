import React from "react";
import Link from "next/link";
import { ArrowRight, Sparkles, AlertCircle, Clock, ShieldAlert } from "lucide-react";
import { CardImageHeader } from "./CardImageHeader";

interface EntityCardProps {
  type: "service" | "disease" | "symptom";
  slug: string;
  name: string;
  description: string;
  category?: string;
  price?: string;
  urgency?: "baja" | "moderada" | "alta" | "urgencia_inmediata";
  image?: string;
}

export function EntityCard({
  type,
  slug,
  name,
  description,
  category = "cirugia-general",
  price,
  urgency,
  image,
}: EntityCardProps) {
  const getHref = () => {
    switch (type) {
      case "service":
        return `/servicios/${slug}`;
      case "disease":
        return `/enfermedades/${slug}`;
      case "symptom":
        return `/sintomas/${slug}`;
    }
  };

  const getButtonText = () => {
    switch (type) {
      case "service":
        return "Ver Ficha del Procedimiento";
      case "disease":
        return "Ver Guía Médica";
      case "symptom":
        return "Ver Orientación Médica";
    }
  };

  const getBadgeCategory = () => {
    switch (category) {
      case "laparoscopia":
        return "Laparoscopía HD";
      case "hernias":
        return "Hernias & Pared";
      case "proctologia":
      case "proctologico":
        return "Proctología";
      case "partes-blandas":
        return "Partes Blandas";
      case "urgencias":
        return "Urgencia 24H";
      case "digestivo":
        return "Cirugía Digestiva";
      default:
        return "Cirugía General";
    }
  };

  return (
    <article className="group flex flex-col justify-between h-full bg-white rounded-2xl border border-neutral-200/80 overflow-hidden shadow-[0_4px_20px_rgba(12,74,66,0.04)] hover:shadow-[0_16px_36px_rgba(12,74,66,0.12)] transition-all duration-300 hover:-translate-y-1">
      <div>
        {/* CardImageHeader Obligatorio */}
        <CardImageHeader
          src={image}
          alt={name}
          category={category as any}
          badgeText={getBadgeCategory()}
        />

        {/* Contenido textual de la tarjeta */}
        <div className="p-6">
          {price && (
            <div className="mb-2.5 inline-block">
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#E6F4F1] text-[#0C4A42] border border-[#14B8A6]/30">
                {price}
              </span>
            </div>
          )}

          {urgency && (
            <div className="mb-2.5 inline-block">
              <span
                className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${
                  urgency === "urgencia_inmediata"
                    ? "bg-rose-100 text-rose-800 border border-rose-300"
                    : urgency === "alta"
                    ? "bg-amber-100 text-amber-900 border border-amber-300"
                    : urgency === "moderada"
                    ? "bg-teal-100 text-teal-900 border border-teal-300"
                    : "bg-emerald-100 text-emerald-900 border border-emerald-300"
                }`}
              >
                {urgency === "urgencia_inmediata" ? (
                  <>
                    <ShieldAlert className="w-3.5 h-3.5 text-rose-600 animate-pulse" />
                    Urgencia Inmediata
                  </>
                ) : urgency === "alta" ? (
                  <>
                    <AlertCircle className="w-3.5 h-3.5 text-amber-600" />
                    Prioridad Alta
                  </>
                ) : urgency === "moderada" ? (
                  <>
                    <Clock className="w-3.5 h-3.5 text-teal-600" />
                    Prioridad Moderada
                  </>
                ) : (
                  <>
                    <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                    Prioridad Ordinaria
                  </>
                )}
              </span>
            </div>
          )}

          <h3 className="font-heading text-lg sm:text-xl font-bold text-[#091E1B] group-hover:text-[#0C4A42] transition-colors leading-snug line-clamp-2">
            {name}
          </h3>

          <p className="mt-2.5 text-xs sm:text-sm text-neutral-600 line-clamp-3 leading-relaxed">
            {description}
          </p>
        </div>
      </div>

      {/* Botón conciso institucional */}
      <div className="p-6 pt-0 mt-auto">
        <Link
          href={getHref()}
          className="w-full flex items-center justify-between py-3.5 px-5 rounded-xl bg-neutral-50 hover:bg-[#0C4A42] text-[#0C4A42] hover:text-white font-semibold text-xs sm:text-sm tracking-wide transition-all duration-300 border border-neutral-200 hover:border-[#0C4A42] group/btn"
        >
          <span>{getButtonText()}</span>
          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
        </Link>
      </div>
    </article>
  );
}
