import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { services } from "@/data/services";
import { EntityCard } from "@/components/EntityCard";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CardImageHeader } from "@/components/CardImageHeader";
import { Scissors, Activity, ShieldCheck, HeartPulse, Sparkles, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Cirugías y Procedimientos Quirúrgicos en Tuxtla Gutiérrez",
  description:
    "Catálogo especializado de cirugías por el Dr. Héctor Valdéz Grajales en Tuxtla Gutiérrez, Chiapas. Laparoscopía de vesícula y apéndice, hernias con malla, proctología y partes blandas.",
};

export default function ServiciosPage() {
  const laparoscopyServices = services.filter((s) => s.category === "laparoscopia");
  const herniaServices = services.filter((s) => s.category === "hernias");
  const proctoServices = services.filter((s) => s.category === "proctologia");
  const generalSurgeryServices = services.filter((s) => s.category === "cirugia-general");

  return (
    <div className="bg-[#F8F7FB] min-h-screen py-8 sm:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Cirugías & Procedimientos" }]} isDark={false} />

        {/* Encabezado Principal */}
        <div className="mt-4 mb-10 max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-wider text-[#312A57] bg-[#EDE9F6] px-3.5 py-1 rounded-full inline-block">
            Vanguardia Quirúrgica & Mínima Invasión
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#181430] font-heading tracking-tight mt-2">
            Catálogo de Cirugías y Procedimientos
          </h1>
          <p className="text-sm sm:text-base text-neutral-600 mt-2 leading-relaxed">
            Procedimientos laparoscópicos de mínima invasión y cirugía general programada o de urgencia en los mejores hospitales certificados de Tuxtla Gutiérrez, Chiapas.
          </p>
        </div>

        {/* ─── CLASIFICADOR POR ÁREAS QUIRÚRGICAS ─────────────────────── */}
        <div className="space-y-16">
          
          {/* Bloque 1: Laparoscopía de Mínima Invasión */}
          <section>
            <div className="flex items-center gap-3 mb-6 pb-3 border-b border-neutral-200">
              <div className="w-10 h-10 rounded-xl bg-[#312A57] text-[#DDD8F5] flex items-center justify-center">
                <Scissors className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-[#181430] font-heading">
                  Cirugía Laparoscópica de Mínima Invasión
                </h2>
                <p className="text-xs text-neutral-500">
                  Microincisiones milimétricas, visión HD 4K y recuperación en 24 horas
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {laparoscopyServices.map((service) => (
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
          </section>

          {/* Bloque 2: Pared Abdominal & Hernias con Malla */}
          <section>
            <div className="flex items-center gap-3 mb-6 pb-3 border-b border-neutral-200">
              <div className="w-10 h-10 rounded-xl bg-[#312A57] text-[#DDD8F5] flex items-center justify-center">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-[#181430] font-heading">
                  Pared Abdominal & Reparación de Hernias con Malla
                </h2>
                <p className="text-xs text-neutral-500">
                  Técnicas libres de tensión con mallas biocompatibles de alta resistencia
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {herniaServices.map((service) => (
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
          </section>

          {/* Bloque 3: Proctología Quirúrgica & Patología Anorrectal */}
          <section>
            <div className="flex items-center gap-3 mb-6 pb-3 border-b border-neutral-200">
              <div className="w-10 h-10 rounded-xl bg-[#312A57] text-[#DDD8F5] flex items-center justify-center">
                <Activity className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-[#181430] font-heading">
                  Proctología Quirúrgica & Región Anorrectal
                </h2>
                <p className="text-xs text-neutral-500">
                  Manejo definitivo y humanizado de hemorroides, fístulas y abscesos anales
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {proctoServices.map((service) => (
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
          </section>

          {/* Bloque 4: Cirugía de Partes Blandas, Digestiva & Consulta General */}
          <section>
            <div className="flex items-center gap-3 mb-6 pb-3 border-b border-neutral-200">
              <div className="w-10 h-10 rounded-xl bg-[#312A57] text-[#DDD8F5] flex items-center justify-center">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-[#181430] font-heading">
                  Cirugía Digestiva, Partes Blandas & Valoración Quirúrgica
                </h2>
                <p className="text-xs text-neutral-500">
                  Resección de lipomas, quistes sinoviales, manejo de pie diabético y consulta de diagnóstico
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {generalSurgeryServices.map((service) => (
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
          </section>

        </div>
      </div>
    </div>
  );
}
