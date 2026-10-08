import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  ShieldAlert,
  AlertCircle,
  Clock,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  Phone,
  MessageCircle,
  HelpCircle,
  Activity,
  HeartPulse,
} from "lucide-react";
import { symptoms } from "@/data/symptoms";
import { diseases } from "@/data/diseases";
import { doctor } from "@/data/doctor";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CardImageHeader } from "@/components/CardImageHeader";
import { FAQStructuredData } from "@/components/StructuredData";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return symptoms.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const symptom = symptoms.find((s) => s.slug === slug);
  if (!symptom) return { title: "Síntoma no encontrado" };

  return {
    title: `${symptom.name} en Tuxtla Gutiérrez | Dr. Héctor Valdéz Grajales`,
    description: symptom.description,
    keywords: symptom.seo.keywords,
  };
}

export default async function SymptomDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const symptom = symptoms.find((s) => s.slug === slug);
  if (!symptom) notFound();

  const relatedDiseasesList = (symptom.relatedConditions || [])
    .map((condId) => diseases.find((d) => d.id === condId))
    .filter(Boolean);

  const isUrgent = symptom.urgencyLevel === "urgencia_inmediata" || symptom.urgencyLevel === "alta";

  return (
    <div className="bg-[#F7FAF9] min-h-screen py-8 sm:py-10">
      {symptom.faqs && <FAQStructuredData faqs={symptom.faqs} />}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: "Guía de Síntomas", href: "/sintomas" },
            { label: symptom.name },
          ]}
          isDark={false}
        />

        {/* ─── Layout 8/4 Asimétrico ───────────────────────────────── */}
        <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Columna Principal: Dossier del Síntoma (8 cols) */}
          <div className="lg:col-span-8 space-y-8">
            {/* Header del Síntoma con CardImageHeader */}
            <div className="bg-white rounded-3xl border border-neutral-200 overflow-hidden shadow-xs">
              <CardImageHeader
                src={symptom.image}
                alt={symptom.name}
                category={symptom.category as any}
                aspectRatio="wide"
                badgeText={symptom.category.toUpperCase()}
              />

              <div className="p-6 sm:p-8">
                {/* Badge de Nivel de Urgencia */}
                <div className="mb-3 inline-block">
                  <span
                    className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold ${
                      symptom.urgencyLevel === "urgencia_inmediata"
                        ? "bg-rose-100 text-rose-800 border border-rose-300"
                        : symptom.urgencyLevel === "alta"
                        ? "bg-amber-100 text-amber-900 border border-amber-300"
                        : symptom.urgencyLevel === "moderada"
                        ? "bg-teal-100 text-teal-900 border border-teal-300"
                        : "bg-emerald-100 text-emerald-900 border border-emerald-300"
                    }`}
                  >
                    {symptom.urgencyLevel === "urgencia_inmediata" ? (
                      <>
                        <ShieldAlert className="w-4 h-4 text-rose-600 animate-pulse" />
                        Criterio de Urgencia Inmediata
                      </>
                    ) : symptom.urgencyLevel === "alta" ? (
                      <>
                        <AlertCircle className="w-4 h-4 text-amber-600" />
                        Prioridad Alta de Valoración
                      </>
                    ) : symptom.urgencyLevel === "moderada" ? (
                      <>
                        <Clock className="w-4 h-4 text-teal-600" />
                        Prioridad Moderada
                      </>
                    ) : (
                      <>
                        <Sparkles className="w-4 h-4 text-emerald-600" />
                        Prioridad Ordinaria
                      </>
                    )}
                  </span>
                </div>

                <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#091E1B] font-heading mt-1 leading-tight">
                  {symptom.name}
                </h1>

                {symptom.colloquialNames && symptom.colloquialNames.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mt-2.5">
                    <span className="text-xs text-neutral-500">También conocido como:</span>
                    {symptom.colloquialNames.map((name, i) => (
                      <span key={i} className="text-xs font-medium text-neutral-700 bg-neutral-100 px-2 py-0.5 rounded-md">
                        "{name}"
                      </span>
                    ))}
                  </div>
                )}

                <p className="mt-4 text-base text-neutral-600 leading-relaxed">
                  {symptom.description}
                </p>
              </div>
            </div>

            {/* Señales de Alarma Críticas */}
            <div className="bg-rose-50/70 rounded-3xl p-6 sm:p-8 border border-rose-200">
              <div className="flex items-center gap-2 mb-3">
                <ShieldAlert className="w-5 h-5 text-rose-700 animate-pulse" />
                <h2 className="text-lg sm:text-xl font-bold text-rose-950 font-heading">
                  Criterios de Alarma: ¿Cuándo Acudir de Urgencia?
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-rose-900/80 mb-4">
                Si presenta una o más de las siguientes manifestaciones, requiere atención médica inmediata por un cirujano general:
              </p>
              <div className="space-y-2.5">
                {symptom.alarmSigns.map((sign, i) => (
                  <div key={i} className="flex items-start gap-2.5 p-3 rounded-xl bg-white/80 border border-rose-200 text-xs sm:text-sm text-rose-950 font-medium">
                    <span className="w-2 h-2 rounded-full bg-rose-600 shrink-0 mt-1.5" />
                    <span>{sign}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Causas Quirúrgicas Posibles */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-neutral-200 shadow-xs">
              <h2 className="text-xl sm:text-2xl font-bold text-[#091E1B] font-heading mb-4">
                Posibles Causas de este Síntoma
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {symptom.causes.map((c, i) => (
                  <div key={i} className="flex items-start gap-2.5 p-3 rounded-xl bg-[#F7FAF9] border border-neutral-200/80">
                    <CheckCircle2 className="w-4 h-4 text-[#0C4A42] shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-neutral-700">{c}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* ¿Por qué Consultar al Cirujano? */}
            <div className="bg-[#E6F4F1] rounded-3xl p-6 sm:p-8 border border-[#14B8A6]/30">
              <h3 className="text-lg sm:text-xl font-bold text-[#08332D] font-heading mb-2">
                ¿Por qué es Importante la Valoración Especializada?
              </h3>
              <p className="text-sm sm:text-base text-[#0C4A42] leading-relaxed">
                {symptom.whyConsult}
              </p>
            </div>

            {/* Padecimientos Relacionados */}
            {relatedDiseasesList.length > 0 && (
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-neutral-200 shadow-xs">
                <h2 className="text-xl font-bold text-[#091E1B] font-heading mb-4">
                  Padecimientos Clínicos Asociados
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {relatedDiseasesList.map((d) => (
                    <Link
                      key={d!.id}
                      href={`/enfermedades/${d!.slug}`}
                      className="p-3.5 rounded-xl bg-[#F7FAF9] hover:bg-[#E6F4F1] border border-neutral-200 hover:border-[#14B8A6] flex items-center justify-between text-xs sm:text-sm font-semibold text-neutral-800 transition-all group"
                    >
                      <span className="truncate">{d!.name}</span>
                      <ArrowRight className="w-4 h-4 text-[#0C4A42] transition-transform group-hover:translate-x-1" />
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Preguntas Frecuentes del Síntoma */}
            {symptom.faqs && symptom.faqs.length > 0 && (
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-neutral-200 shadow-xs">
                <h2 className="text-xl font-bold text-[#091E1B] font-heading mb-6">
                  Preguntas Frecuentes sobre este Síntoma
                </h2>
                <div className="space-y-4">
                  {symptom.faqs.map((faq, i) => (
                    <div key={i} className="p-4 rounded-xl bg-[#F7FAF9] border border-neutral-200/80">
                      <h3 className="font-bold text-sm text-[#091E1B]">{faq.question}</h3>
                      <p className="mt-2 text-xs sm:text-sm text-neutral-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Columna Lateral Flotante (4 cols) */}
          <div className="lg:col-span-4 lg:sticky lg:top-28 space-y-6">
            <div className="bg-white rounded-3xl p-6 sm:p-7 border-2 border-[#14B8A6]/40 shadow-xl">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#0C4A42] bg-[#E6F4F1] px-3 py-1 rounded-full inline-block">
                Consultorios Santa Fe
              </span>
              <h3 className="font-heading text-xl font-extrabold text-[#091E1B] mt-3">
                ¿Presentas este síntoma?
              </h3>
              <p className="text-xs text-neutral-500 mt-1">
                Atención con el Dr. Héctor Valdéz Grajales
              </p>

              <div className="my-5 p-4 rounded-2xl bg-[#F7FAF9] border border-neutral-200">
                <span className="text-[11px] text-neutral-500 block">Costo de Consulta:</span>
                <span className="font-heading text-3xl font-extrabold text-[#0C4A42]">$500</span>
                <span className="text-xs text-neutral-500 font-semibold ml-1">MXN</span>
                <span className="text-[11px] text-neutral-400 block mt-0.5">($400 en subsecuentes)</span>
              </div>

              <div className="space-y-3">
                <a
                  href={`https://wa.me/${doctor.whatsapp.replace(/[^0-9]/g, "")}?text=Hola%20Dr.%20H%C3%A9ctor%20Vald%C3%A9z,%20quisiera%20agendar%20una%20consulta%20por%20${encodeURIComponent(symptom.name)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-[#0C4A42] hover:bg-[#08332D] text-white font-bold text-xs sm:text-sm shadow-md transition-all"
                >
                  <MessageCircle className="w-4 h-4 text-[#5EEAD4]" />
                  <span>Agendar por WhatsApp ($500)</span>
                </a>

                <a
                  href={`tel:${doctor.emergencyPhone}`}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl border-2 border-rose-200 bg-rose-50 hover:bg-rose-100 text-rose-800 font-bold text-xs sm:text-sm transition-all"
                >
                  <Phone className="w-4 h-4" />
                  <span>Llamar Urgencias: 961 225 4853</span>
                </a>
              </div>

              <div className="mt-6 pt-5 border-t border-neutral-100 text-xs text-neutral-500 space-y-2">
                <p>📍 {doctor.address}, {doctor.neighborhood}, Tuxtla Gutiérrez.</p>
                <p>🕒 {doctor.schedule}</p>
                <p>💳 Pago con efectivo, tarjeta y reembolso con aseguradoras.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
