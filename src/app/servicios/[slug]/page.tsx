import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  ShieldCheck,
  Clock,
  Activity,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  ArrowRight,
  Phone,
  MessageCircle,
  Calendar,
  Sparkles,
} from "lucide-react";
import { services } from "@/data/services";
import { diseases } from "@/data/diseases";
import { doctor } from "@/data/doctor";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CardImageHeader } from "@/components/CardImageHeader";
import { MedicalProcedureStructuredData, FAQStructuredData } from "@/components/StructuredData";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return { title: "Servicio no encontrado" };

  return {
    title: `${service.name} en Tuxtla Gutiérrez | Dr. Héctor Valdéz Grajales`,
    description: service.description,
    keywords: service.seo.keywords,
  };
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  const relatedDiseasesList = (service.relatedConditions || [])
    .map((condId) => diseases.find((d) => d.id === condId))
    .filter(Boolean);

  return (
    <div className="bg-[#F7FAF9] min-h-screen py-8 sm:py-10">
      <MedicalProcedureStructuredData service={service} />
      {service.faqs && <FAQStructuredData faqs={service.faqs} />}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: "Cirugías & Procedimientos", href: "/servicios" },
            { label: service.name },
          ]}
          isDark={false}
        />

        {/* ─── Layout 8/4 Asimétrico Tipo Medical Dashboard ─────────── */}
        <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Columna Principal: Dossier Clínico y Quirúrgico (8 cols) */}
          <div className="lg:col-span-8 space-y-8">
            {/* Header del Procedimiento con CardImageHeader */}
            <div className="bg-white rounded-3xl border border-neutral-200 overflow-hidden shadow-xs">
              <CardImageHeader
                src={service.image}
                alt={service.name}
                category={service.category as any}
                aspectRatio="wide"
                badgeText={service.type.toUpperCase()}
              />

              <div className="p-6 sm:p-8">
                <span className="text-xs font-bold uppercase tracking-wider text-[#0C4A42]">
                  Ficha Técnica Quirúrgica
                </span>
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#091E1B] font-heading mt-1 leading-tight">
                  {service.name}
                </h1>
                <p className="mt-3 text-base text-neutral-600 leading-relaxed">
                  {service.description}
                </p>

                {/* Grid Rápido de Parámetros Quirúrgicos */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-6 pt-6 border-t border-neutral-100">
                  <div className="p-3 rounded-xl bg-[#F7FAF9] border border-neutral-200/80">
                    <span className="text-[11px] font-medium text-neutral-500 block">Modalidad</span>
                    <span className="text-xs sm:text-sm font-bold text-neutral-800 capitalize">
                      {service.type}
                    </span>
                  </div>
                  {service.duration && (
                    <div className="p-3 rounded-xl bg-[#F7FAF9] border border-neutral-200/80">
                      <span className="text-[11px] font-medium text-neutral-500 block">Duración</span>
                      <span className="text-xs sm:text-sm font-bold text-neutral-800">
                        {service.duration}
                      </span>
                    </div>
                  )}
                  {service.anesthesiaType && (
                    <div className="p-3 rounded-xl bg-[#F7FAF9] border border-neutral-200/80 col-span-2 sm:col-span-1">
                      <span className="text-[11px] font-medium text-neutral-500 block">Anestesia</span>
                      <span className="text-xs sm:text-sm font-bold text-neutral-800">
                        {service.anesthesiaType}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Abordaje Quirúrgico Detallado */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-neutral-200 shadow-xs">
              <h2 className="text-xl sm:text-2xl font-bold text-[#091E1B] font-heading mb-4">
                Descripción y Abordaje del Especialista
              </h2>
              <p className="text-sm sm:text-base text-neutral-700 leading-relaxed">
                {service.longDescription}
              </p>
            </div>

            {/* Beneficios Quirúrgicos */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-neutral-200 shadow-xs">
              <h2 className="text-xl sm:text-2xl font-bold text-[#091E1B] font-heading mb-4">
                Ventajas de este Procedimiento
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {service.benefits.map((b, i) => (
                  <div key={i} className="flex items-start gap-2.5 p-3 rounded-xl bg-[#F7FAF9] border border-neutral-200/80">
                    <CheckCircle2 className="w-4 h-4 text-[#0C4A42] shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-neutral-700">{b}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Cuidados Postoperatorios */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-neutral-200 shadow-xs">
              <h2 className="text-xl sm:text-2xl font-bold text-[#091E1B] font-heading mb-4">
                Recomendaciones y Recuperación
              </h2>
              {service.recoveryTime && (
                <div className="mb-4 p-3.5 rounded-xl bg-teal-50 border border-teal-200 text-xs text-teal-900 font-semibold flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#0C4A42]" />
                  <span>Tiempo estimado de recuperación: {service.recoveryTime}</span>
                </div>
              )}
              <ul className="space-y-2.5 text-xs sm:text-sm text-neutral-600">
                {service.postOpRecommendations.map((r, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0C4A42] shrink-0 mt-2" />
                    <span>{r}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Padecimientos Vinculados */}
            {relatedDiseasesList.length > 0 && (
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-neutral-200 shadow-xs">
                <h2 className="text-xl font-bold text-[#091E1B] font-heading mb-4">
                  Padecimientos que se Resuelven con este Procedimiento
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

            {/* Preguntas Frecuentes del Procedimiento */}
            {service.faqs && service.faqs.length > 0 && (
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-neutral-200 shadow-xs">
                <h2 className="text-xl font-bold text-[#091E1B] font-heading mb-6">
                  Preguntas Frecuentes sobre {service.name.split("(")[0]}
                </h2>
                <div className="space-y-4">
                  {service.faqs.map((faq, i) => (
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

          {/* Columna Lateral Flotante: Dock de Agendamiento (4 cols) */}
          <div className="lg:col-span-4 lg:sticky lg:top-28 space-y-6">
            <div className="bg-white rounded-3xl p-6 sm:p-7 border-2 border-[#14B8A6]/40 shadow-xl">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#0C4A42] bg-[#E6F4F1] px-3 py-1 rounded-full inline-block">
                Consultorios Santa Fe
              </span>
              <h3 className="font-heading text-xl font-extrabold text-[#091E1B] mt-3">
                Valoración Quirúrgica
              </h3>
              <p className="text-xs text-neutral-500 mt-1">
                Consulta con el Dr. Héctor Valdéz Grajales
              </p>

              <div className="my-5 p-4 rounded-2xl bg-[#F7FAF9] border border-neutral-200">
                <span className="text-[11px] text-neutral-500 block">Costo de Consulta:</span>
                <span className="font-heading text-3xl font-extrabold text-[#0C4A42]">$500</span>
                <span className="text-xs text-neutral-500 font-semibold ml-1">MXN</span>
                <span className="text-[11px] text-neutral-400 block mt-0.5">($400 en subsecuentes)</span>
              </div>

              <div className="space-y-3">
                <a
                  href={`https://wa.me/${doctor.whatsapp.replace(/[^0-9]/g, "")}?text=Hola%20Dr.%20H%C3%A9ctor%20Vald%C3%A9z,%20deseo%20agendar%20cita%20para%20${encodeURIComponent(service.name)}.`}
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
