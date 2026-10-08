import React from "react";
import type { Metadata } from "next";
import { symptoms } from "@/data/symptoms";
import { EntityCard } from "@/components/EntityCard";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ShieldAlert, AlertCircle, Clock, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Guía de Síntomas Quirúrgicos y Señales de Alarma en Tuxtla",
  description:
    "Identifique señales de alarma de apendicitis, dolor de vesícula, hernias y urgencias digestivas con el Dr. Héctor Valdéz Grajales en Tuxtla Gutiérrez, Chiapas.",
};

export default function SintomasPage() {
  const immediateUrgency = symptoms.filter((s) => s.urgencyLevel === "urgencia_inmediata");
  const highUrgency = symptoms.filter((s) => s.urgencyLevel === "alta");
  const moderateOrLow = symptoms.filter((s) => s.urgencyLevel !== "urgencia_inmediata" && s.urgencyLevel !== "alta");

  return (
    <div className="bg-[#F8F7FB] min-h-screen py-8 sm:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Guía de Síntomas" }]} isDark={false} />

        {/* Encabezado */}
        <div className="mt-4 mb-10 max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-wider text-[#312A57] bg-[#EDE9F6] px-3.5 py-1 rounded-full inline-block">
            Semáforo de Síntomas Quirúrgicos
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#181430] font-heading tracking-tight mt-2">
            Orientación Clínica y Niveles de Urgencia
          </h1>
          <p className="text-sm sm:text-base text-neutral-600 mt-2.5 leading-relaxed">
            Identifique la gravedad de su dolor abdominal o molestia y conozca si requiere traslado urgente a quirófano o una consulta programada de valoración por $500 MXN.
          </p>
        </div>

        {/* ─── CLASIFICACIÓN POR NIVELES DE URGENCIA ────────────────── */}
        <div className="space-y-16">
          
          {/* Nivel 1: Urgencia Inmediata */}
          {immediateUrgency.length > 0 && (
            <section>
              <div className="flex items-center gap-3 mb-6 p-4 rounded-2xl bg-rose-50 border border-rose-200">
                <ShieldAlert className="w-6 h-6 text-rose-600 shrink-0 animate-pulse" />
                <div>
                  <h2 className="text-lg sm:text-xl font-bold text-rose-950 font-heading">
                    Nivel 1: Criterios de Urgencia Inmediata (Atención 24 Horas)
                  </h2>
                  <p className="text-xs text-rose-800">
                    Riesgo de peritonitis, perforación o estrangulamiento. Llame de inmediato al 961 225 4853.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {immediateUrgency.map((symptom) => (
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
            </section>
          )}

          {/* Nivel 2: Prioridad Alta */}
          {highUrgency.length > 0 && (
            <section>
              <div className="flex items-center gap-3 mb-6 p-4 rounded-2xl bg-amber-50 border border-amber-200">
                <AlertCircle className="w-6 h-6 text-amber-600 shrink-0" />
                <div>
                  <h2 className="text-lg sm:text-xl font-bold text-amber-950 font-heading">
                    Nivel 2: Prioridad Alta de Valoración Quirúrgica
                  </h2>
                  <p className="text-xs text-amber-800">
                    Dolores recurrentes, masas dolorosas o infecciones que ameritan cita dentro de las próximas 24 a 48 horas.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {highUrgency.map((symptom) => (
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
            </section>
          )}

          {/* Nivel 3: Prioridad Moderada & Consulta Programada */}
          {moderateOrLow.length > 0 && (
            <section>
              <div className="flex items-center gap-3 mb-6 p-4 rounded-2xl bg-[#EDE9F6] border border-[#C8C0E2]">
                <Clock className="w-6 h-6 text-[#312A57] shrink-0" />
                <div>
                  <h2 className="text-lg sm:text-xl font-bold text-[#181430] font-heading">
                    Nivel 3: Valoración Quirúrgica Programada ($500 MXN)
                  </h2>
                  <p className="text-xs text-[#312A57]">
                    Molestias crónicas, abultamientos indoloros o revisiones electivas en Consultorios Santa Fe.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {moderateOrLow.map((symptom) => (
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
            </section>
          )}

        </div>
      </div>
    </div>
  );
}
