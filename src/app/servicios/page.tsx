import React from "react";
import type { Metadata } from "next";
import { services } from "@/data/services";
import { EntityCard } from "@/components/EntityCard";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Cirugías y Procedimientos Quirúrgicos en Tuxtla Gutiérrez",
  description:
    "Catálogo de procedimientos y cirugías por el Dr. Héctor Valdéz Grajales en Tuxtla Gutiérrez, Chiapas. Colecistectomía laparoscópica, apendicectomía, hernias con malla y cirugía ambulatoria.",
};

export default function ServiciosPage() {
  return (
    <div className="bg-[#F8F7FB] min-h-screen py-8 sm:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Cirugías & Procedimientos" }]} isDark={false} />

        {/* Encabezado compacto y natural */}
        <div className="mt-4 mb-10 max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-wider text-[#312A57]">
            Vanguardia Quirúrgica & Mínima Invasión
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#181430] font-heading tracking-tight mt-1">
            Cirugías y Procedimientos
          </h1>
          <p className="text-sm sm:text-base text-neutral-600 mt-2.5 leading-relaxed">
            Procedimientos laparoscópicos de mínima invasión y cirugía general programada o de urgencia en los mejores hospitales privados de Tuxtla Gutiérrez, Chiapas.
          </p>
        </div>

        {/* Grid de 11 Servicios con CardImageHeader */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <EntityCard
              key={service.id}
              type="service"
              slug={service.slug}
              name={service.name}
              description={service.description}
              category={service.category}
              price={service.priceRange}
              image={service.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
