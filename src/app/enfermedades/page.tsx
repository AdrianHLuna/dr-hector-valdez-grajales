import React from "react";
import type { Metadata } from "next";
import { diseases } from "@/data/diseases";
import { EntityCard } from "@/components/EntityCard";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Activity, ShieldCheck, AlertCircle, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Padecimientos Quirúrgicos y Digestivos en Tuxtla Gutiérrez",
  description:
    "Guía médica de enfermedades quirúrgicas, vesícula, apendicitis, hernias, lipomas y patología proctológica por el Dr. Héctor Valdéz Grajales en Tuxtla Gutiérrez, Chiapas.",
};

export default function EnfermedadesPage() {
  const biliaryDiseases = diseases.filter(
    (d) => d.slug.includes("vesicula") || d.slug.includes("colecistitis") || d.slug.includes("pancreatitis")
  );
  const abdominalWallDiseases = diseases.filter((d) => d.slug.includes("hernia"));
  const acuteGastroDiseases = diseases.filter(
    (d) => d.slug.includes("apendicitis") || d.slug.includes("diverticulitis")
  );
  const proctoAndSoftTissueDiseases = diseases.filter(
    (d) =>
      !d.slug.includes("vesicula") &&
      !d.slug.includes("colecistitis") &&
      !d.slug.includes("pancreatitis") &&
      !d.slug.includes("hernia") &&
      !d.slug.includes("apendicitis") &&
      !d.slug.includes("diverticulitis")
  );

  return (
    <div className="bg-[#F8F7FB] min-h-screen py-8 sm:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Padecimientos Médicos" }]} isDark={false} />

        {/* Encabezado */}
        <div className="mt-4 mb-10 max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-wider text-[#312A57] bg-[#EDE9F6] px-3.5 py-1 rounded-full inline-block">
            Dossier Clínico Especializado
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#181430] font-heading tracking-tight mt-2">
            Padecimientos Quirúrgicos y Digestivos
          </h1>
          <p className="text-sm sm:text-base text-neutral-600 mt-2.5 leading-relaxed">
            Consulte información médica validada sobre afecciones de la vesícula biliar, defectos herniarios de la pared abdominal, urgencias digestivas y patología proctológica.
          </p>
        </div>

        {/* ─── CLASIFICACIÓN POR ÁREAS ANATÓMICAS ────────────────────── */}
        <div className="space-y-16">
          
          {/* Bloque 1: Vesícula y Vías Biliares */}
          <section>
            <div className="flex items-center gap-3 mb-6 pb-3 border-b border-neutral-200">
              <div className="w-10 h-10 rounded-xl bg-[#312A57] text-[#DDD8F5] flex items-center justify-center">
                <Activity className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-[#181430] font-heading">
                  Vesícula Biliar, Vías Biliares & Páncreas
                </h2>
                <p className="text-xs text-neutral-500">
                  Cálculos biliares, dolor en hipocondrio derecho y complicaciones pancreáticas
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {biliaryDiseases.map((disease) => (
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
          </section>

          {/* Bloque 2: Pared Abdominal y Hernias */}
          <section>
            <div className="flex items-center gap-3 mb-6 pb-3 border-b border-neutral-200">
              <div className="w-10 h-10 rounded-xl bg-[#312A57] text-[#DDD8F5] flex items-center justify-center">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-[#181430] font-heading">
                  Defectos de Pared Abdominal & Hernias
                </h2>
                <p className="text-xs text-neutral-500">
                  Abultamientos reductibles o dolorosos en ingles, ombligo y abdomen
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {abdominalWallDiseases.map((disease) => (
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
          </section>

          {/* Bloque 3: Abdomen Agudo & Urgencias Digestivas */}
          <section>
            <div className="flex items-center gap-3 mb-6 pb-3 border-b border-neutral-200">
              <div className="w-10 h-10 rounded-xl bg-[#312A57] text-[#DDD8F5] flex items-center justify-center">
                <AlertCircle className="w-5 h-5 text-rose-300" />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-[#181430] font-heading">
                  Abdomen Agudo Quirúrgico & Patología Intestinal
                </h2>
                <p className="text-xs text-neutral-500">
                  Dolor abdominal de inicio súbito, fiebre e inflamación digestiva aguda
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {acuteGastroDiseases.map((disease) => (
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
          </section>

          {/* Bloque 4: Proctología & Tejidos Blandos */}
          <section>
            <div className="flex items-center gap-3 mb-6 pb-3 border-b border-neutral-200">
              <div className="w-10 h-10 rounded-xl bg-[#312A57] text-[#DDD8F5] flex items-center justify-center">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-[#181430] font-heading">
                  Proctología Quirúrgica & Partes Blandas
                </h2>
                <p className="text-xs text-neutral-500">
                  Hemorroides, fístulas, lipomas, quistes de articulaciones y pie diabético
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {proctoAndSoftTissueDiseases.map((disease) => (
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
          </section>

        </div>
      </div>
    </div>
  );
}
