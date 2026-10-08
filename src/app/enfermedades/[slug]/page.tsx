import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  ShieldCheck,
  AlertTriangle,
  Activity,
  CheckCircle2,
  HelpCircle,
  ArrowRight,
  Phone,
  MessageCircle,
  FileText,
  Clock,
  Sparkles,
} from "lucide-react";
import { diseases } from "@/data/diseases";
import { services } from "@/data/services";
import { symptoms } from "@/data/symptoms";
import { doctor } from "@/data/doctor";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CardImageHeader } from "@/components/CardImageHeader";
import { MedicalConditionStructuredData, FAQStructuredData } from "@/components/StructuredData";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return diseases.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const disease = diseases.find((d) => d.slug === slug);
  if (!disease) return { title: "Padecimiento no encontrado" };

  return {
    title: `${disease.name} en Tuxtla Gutiérrez | Dr. Héctor Valdéz Grajales`,
    description: disease.description,
    keywords: disease.seo.keywords,
  };
}

export default async function DiseaseDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const disease = diseases.find((d) => d.slug === slug);
  if (!disease) notFound();

  const relatedServicesList = (disease.relatedServices || [])
    .map((sId) => services.find((s) => s.id === sId))
    .filter(Boolean);

  const relatedSymptomsList = (disease.relatedSymptoms || [])
    .map((symId) => symptoms.find((sym) => sym.id === symId))
    .filter(Boolean);

  return (
    <div className="bg-[#F8F7FB] min-h-screen py-8 sm:py-10">
      <MedicalConditionStructuredData condition={disease} />
      <FAQStructuredData faqs={disease.faqs} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: "Padecimientos", href: "/enfermedades" },
            { label: disease.name },
          ]}
          isDark={false}
        />

        {/* ─── Layout 8/4 Asimétrico Tipo Medical Dashboard ─────────── */}
        <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Columna Principal: Dossier Clínico (8 cols) */}
          <div className="lg:col-span-8 space-y-8">
            {/* Cabecera con CardImageHeader */}
            <div className="bg-white rounded-3xl border border-neutral-200 overflow-hidden shadow-xs">
              <CardImageHeader
                src={disease.image}
                alt={disease.name}
                category={disease.category as any}
                aspectRatio="wide"
                badgeText={disease.category.toUpperCase()}
              />

              <div className="p-6 sm:p-8">
                <span className="text-xs font-bold uppercase tracking-wider text-[#312A57]">
                  Guía Clínica Quirúrgica
                </span>
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#181430] font-heading mt-1 leading-tight">
                  {disease.name}
                </h1>
                {disease.technicalName && (
                  <p className="text-xs sm:text-sm font-mono text-neutral-500 mt-1">
                    {disease.technicalName}
                  </p>
                )}
                <p className="mt-4 text-base text-neutral-600 leading-relaxed">
                  {disease.description}
                </p>
              </div>
            </div>

            {/* Cuadro Clínico y Síntomas Frecuentes */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-neutral-200 shadow-xs">
              <h2 className="text-xl sm:text-2xl font-bold text-[#181430] font-heading mb-4">
                Manifestaciones y Cuadro Clínico
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {disease.symptoms.map((s, i) => (
                  <div key={i} className="flex items-start gap-2.5 p-3 rounded-xl bg-[#F8F7FB] border border-neutral-200/80">
                    <Activity className="w-4 h-4 text-[#312A57] shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-neutral-700">{s}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Causas y Factores de Riesgo */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-white rounded-3xl p-6 border border-neutral-200 shadow-xs">
                <h3 className="text-lg font-bold text-[#181430] font-heading mb-3">
                  Causas Principales
                </h3>
                <ul className="space-y-2 text-xs sm:text-sm text-neutral-600">
                  {disease.causes.map((c, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#312A57] shrink-0 mt-2" />
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white rounded-3xl p-6 border border-neutral-200 shadow-xs">
                <h3 className="text-lg font-bold text-[#181430] font-heading mb-3">
                  Factores de Riesgo
                </h3>
                <ul className="space-y-2 text-xs sm:text-sm text-neutral-600">
                  {disease.riskFactors.map((r, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#F59E0B] shrink-0 mt-2" />
                      <span>{r}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Complicaciones & Datos en México */}
            <div className="bg-rose-50/70 rounded-3xl p-6 sm:p-8 border border-rose-200">
              <div className="flex items-center gap-2 mb-3">
                <AlertTriangle className="w-5 h-5 text-rose-700" />
                <h3 className="text-lg font-bold text-rose-950 font-heading">
                  Riesgos y Complicaciones si no se Trata a Tiempo
                </h3>
              </div>
              <ul className="space-y-2 text-xs sm:text-sm text-rose-900 mb-4">
                {disease.complications.map((comp, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-600 shrink-0 mt-2" />
                    <span>{comp}</span>
                  </li>
                ))}
              </ul>
              {disease.mexicoStats && (
                <div className="pt-3 border-t border-rose-200/80 text-xs text-rose-800 font-medium">
                  📊 {disease.mexicoStats}
                </div>
              )}
            </div>

            {/* Abordajes Quirúrgicos y Tratamientos (Cero Marcas de Medicamentos) */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-neutral-200 shadow-xs">
              <h2 className="text-xl sm:text-2xl font-bold text-[#181430] font-heading mb-4">
                Abordajes Clínicos y Opciones de Tratamiento
              </h2>
              <div className="space-y-3">
                {disease.treatments.map((t, i) => (
                  <div key={i} className="flex items-start gap-3 p-3.5 rounded-xl bg-[#F8F7FB] border border-neutral-200">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-neutral-800 leading-relaxed">{t}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Cirugías Relacionadas */}
            {relatedServicesList.length > 0 && (
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-neutral-200 shadow-xs">
                <h2 className="text-xl font-bold text-[#181430] font-heading mb-4">
                  Procedimientos Quirúrgicos para este Padecimiento
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {relatedServicesList.map((s) => (
                    <Link
                      key={s!.id}
                      href={`/servicios/${s!.slug}`}
                      className="p-3.5 rounded-xl bg-[#F8F7FB] hover:bg-[#EDE9F6] border border-neutral-200 hover:border-[#8B7EC8] flex items-center justify-between text-xs sm:text-sm font-semibold text-neutral-800 transition-all group"
                    >
                      <span className="truncate">{s!.name.split("(")[0]}</span>
                      <ArrowRight className="w-4 h-4 text-[#312A57] transition-transform group-hover:translate-x-1" />
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Síntomas Relacionados */}
            {relatedSymptomsList.length > 0 && (
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-neutral-200 shadow-xs">
                <h2 className="text-xl font-bold text-[#181430] font-heading mb-4">
                  Síntomas y Motivos de Consulta Asociados
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {relatedSymptomsList.map((sym) => (
                    <Link
                      key={sym!.id}
                      href={`/sintomas/${sym!.slug}`}
                      className="p-3.5 rounded-xl bg-[#F8F7FB] hover:bg-[#EDE9F6] border border-neutral-200 flex items-center justify-between text-xs sm:text-sm font-medium text-neutral-800 transition-all group"
                    >
                      <span className="truncate">{sym!.name}</span>
                      <ArrowRight className="w-4 h-4 text-neutral-400 group-hover:text-[#312A57] transition-transform group-hover:translate-x-1" />
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Preguntas Frecuentes */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-neutral-200 shadow-xs">
              <h2 className="text-xl font-bold text-[#181430] font-heading mb-6">
                Preguntas Frecuentes sobre {disease.name}
              </h2>
              <div className="space-y-4">
                {disease.faqs.map((faq, i) => (
                  <div key={i} className="p-4 rounded-xl bg-[#F8F7FB] border border-neutral-200/80">
                    <h3 className="font-bold text-sm text-[#181430]">{faq.question}</h3>
                    <p className="mt-2 text-xs sm:text-sm text-neutral-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Columna Lateral Flotante: Dock de Citas (4 cols) */}
          <div className="lg:col-span-4 lg:sticky lg:top-28 space-y-6">
            <div className="bg-white rounded-3xl p-6 sm:p-7 border-2 border-[#8B7EC8]/40 shadow-xl">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#312A57] bg-[#EDE9F6] px-3 py-1 rounded-full inline-block">
                Consultorios Santa Fe
              </span>
              <h3 className="font-heading text-xl font-extrabold text-[#181430] mt-3">
                ¿Presentas síntomas de {disease.name}?
              </h3>
              <p className="text-xs text-neutral-500 mt-1">
                Atención experta con el Dr. Héctor Valdéz Grajales
              </p>

              <div className="my-5 p-4 rounded-2xl bg-[#F8F7FB] border border-neutral-200">
                <span className="text-[11px] text-neutral-500 block">Costo de Consulta:</span>
                <span className="font-heading text-3xl font-extrabold text-[#312A57]">$500</span>
                <span className="text-xs text-neutral-500 font-semibold ml-1">MXN</span>
                <span className="text-[11px] text-neutral-400 block mt-0.5">($400 en subsecuentes)</span>
              </div>

              <div className="space-y-3">
                <a
                  href={`https://wa.me/${doctor.whatsapp.replace(/[^0-9]/g, "")}?text=Hola%20Dr.%20H%C3%A9ctor%20Vald%C3%A9z,%20quisiera%20agendar%20una%20consulta%20por%20${encodeURIComponent(disease.name)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-[#312A57] hover:bg-[#1E1838] text-white font-bold text-xs sm:text-sm shadow-md transition-all"
                >
                  <MessageCircle className="w-4 h-4 text-[#DDD8F5]" />
                  <span>Agendar por WhatsApp ($500)</span>
                </a>

                <a
                  href={`tel:${doctor.emergencyPhone}`}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl border-2 border-rose-200 bg-rose-50 hover:bg-rose-100 text-rose-800 font-bold text-xs sm:text-sm transition-all"
                >
                  <Phone className="w-4 h-4" />
                  <span>Urgencias 24H: 961 225 4853</span>
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
