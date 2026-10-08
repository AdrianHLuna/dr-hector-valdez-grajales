import React from "react";
import type { Metadata } from "next";
import { diseases } from "@/data/diseases";
import { EntityCard } from "@/components/EntityCard";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Padecimientos Quirúrgicos y Digestivos en Tuxtla Gutiérrez",
  description:
    "Guía médica de enfermedades quirúrgicas, vesícula, apendicitis, hernias, lipomas y patología proctológica por el Dr. Héctor Valdéz Grajales en Tuxtla Gutiérrez, Chiapas.",
};

export default function EnfermedadesPage() {
  return (
    <div className="bg-[#F8F7FB] min-h-screen py-8 sm:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Padecimientos Médicos" }]} isDark={false} />

        {/* Encabezado compacto y natural */}
        <div className="mt-4 mb-10 max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-wider text-[#312A57]">
            Dossier Clínico & Orientación Oportuna
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#181430] font-heading tracking-tight mt-1">
            Padecimientos Quirúrgicos Frecuentes
          </h1>
          <p className="text-sm sm:text-base text-neutral-600 mt-2.5 leading-relaxed">
            Información médica validada sobre afecciones de vesícula, apendicitis, defectos herniarios de pared abdominal, tumores benignos y urgencias digestivas en Tuxtla Gutiérrez.
          </p>
        </div>

        {/* Grid de 12 Padecimientos con CardImageHeader */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {diseases.map((disease) => (
            <EntityCard
              key={disease.id}
              type="disease"
              slug={disease.slug}
              name={disease.name}
              description={disease.description}
              category={disease.category}
              image={disease.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
