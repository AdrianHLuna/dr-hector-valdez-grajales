import React from "react";
import type { Metadata } from "next";
import { symptoms } from "@/data/symptoms";
import { EntityCard } from "@/components/EntityCard";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Guía de Síntomas Quirúrgicos y Señales de Alarma en Tuxtla",
  description:
    "Identifique señales de alarma de apendicitis, dolor de vesícula, hernias y urgencias digestivas con el Dr. Héctor Valdéz Grajales en Tuxtla Gutiérrez, Chiapas.",
};

export default function SintomasPage() {
  return (
    <div className="bg-[#F8F7FB] min-h-screen py-8 sm:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Guía de Síntomas" }]} isDark={false} />

        {/* Encabezado */}
        <div className="mt-4 mb-10 max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-wider text-[#312A57]">
            Autoevaluación & Señales de Alarma
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#181430] font-heading tracking-tight mt-1">
            Síntomas y Motivos de Consulta
          </h1>
          <p className="text-sm sm:text-base text-neutral-600 mt-2.5 leading-relaxed">
            Identifique el nivel de prioridad médica de sus síntomas, conozca cuándo acudir a valoración y qué criterios indican una urgencia quirúrgica de atención inmediata.
          </p>
        </div>

        {/* Grid de 10 Síntomas con CardImageHeader */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {symptoms.map((symptom) => (
            <EntityCard
              key={symptom.id}
              type="symptom"
              slug={symptom.slug}
              name={symptom.name}
              description={symptom.description}
              category={symptom.category}
              urgency={symptom.urgencyLevel}
              image={symptom.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
