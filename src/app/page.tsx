import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ShieldCheck,
  Award,
  Sparkles,
  Calendar,
  CheckCircle2,
  Clock,
  MapPin,
  ArrowRight,
  Phone,
  MessageCircle,
  Activity,
  HeartPulse,
  Stethoscope,
  Scissors,
  Check,
  ChevronRight,
  AlertTriangle,
  HelpCircle,
  Star,
  Hospital,
} from "lucide-react";
import { doctor } from "@/data/doctor";
import { services } from "@/data/services";
import { diseases } from "@/data/diseases";
import { symptoms } from "@/data/symptoms";
import { EntityCard } from "@/components/EntityCard";
import DoctorPortrait from "@/components/DoctorPortrait";
import { FAQStructuredData } from "@/components/StructuredData";

export default function HomePage() {
  const featuredServices = services.slice(0, 6);
  const featuredDiseases = diseases.slice(0, 6);
  const prioritySymptoms = symptoms.slice(0, 6);

  const homeFaqs = [
    {
      question: "¿Qué tipo de cirugías realiza el Dr. Héctor Valdéz Grajales?",
      answer:
        "El doctor es especialista en Cirugía General egresado de la UNACH y atiende tanto cirugías programadas como de urgencia. Sus principales áreas de enfoque son la colecistectomía laparoscópica (vesícula biliar), apendicectomía de urgencia, reparación de hernias inguinales y umbilicales con malla libre de tensión, extirpación de lipomas y quistes, patología proctológica (hemorroides, abscesos y fístulas) y manejo de pie diabético.",
    },
    {
      question: "¿Cuál es el costo de la consulta y qué incluye?",
      answer:
        "La consulta de valoración en Consultorios Santa Fe tiene un costo accesible y transparente de $500 MXN ($400 MXN en consultas subsecuentes). Incluye revisión clínica y palpación abdominal minuciosa, revisión e interpretación de ultrasonidos o tomografías previas, diagnóstico certero y presupuesto quirúrgico claro.",
    },
    {
      question: "¿En qué hospitales de Tuxtla Gutiérrez realiza los procedimientos quirúrgicos?",
      answer:
        "El Dr. Valdéz opera en los hospitales privados más reconocidos y seguros de Tuxtla Gutiérrez que cuentan con quirófanos certificados, equipo de laparoscopía de alta definición y áreas de terapia intensiva, adaptando el presupuesto hospitalario a las posibilidades de cada paciente.",
    },
    {
      question: "¿Se atienden urgencias las 24 horas?",
      answer:
        "Sí. Para cuadros de dolor abdominal agudo, sospecha de apendicitis, cólico biliar severo o hernias estranguladas, el doctor cuenta con línea de atención de urgencias activa las 24 horas: 961 225 4853.",
    },
    {
      question: "¿Acepta seguros de gastos médicos mayores?",
      answer:
        "Sí, atiende pacientes con todas las aseguradoras mediante la modalidad de reembolso médico, expidiendo informe médico quirúrgico formal y factura electrónica (CFDI) para el cobro ágil ante la compañía aseguradora.",
    },
  ];

  return (
    <div className="flex flex-col">
      <FAQStructuredData faqs={homeFaqs} />

      {/* ─── 1. HERO FOLD (100vh / min-h-screen) ────────────────────── */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#F7FAF9] via-[#EBF4F2] to-[#E3EFEA] overflow-hidden py-12 lg:py-0 border-b border-neutral-200">
        {/* Patrón sutil de fondo */}
        <div className="absolute inset-0 bg-[radial-gradient(#14B8A6_1px,transparent_1px)] [background-size:24px_24px] opacity-20 pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-8 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            {/* Columna Izquierda: Información de Autoridad Quirúrgica (7 cols) */}
            <div className="lg:col-span-7 flex flex-col justify-center z-10">
              {/* Badges de Cédula y Verificación UNACH */}
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold bg-[#0C4A42] text-[#5EEAD4] shadow-xs">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#F59E0B]" />
                  Cirujano General Certificado
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-white/90 text-neutral-700 border border-neutral-300 shadow-2xs font-mono">
                  UNACH · Céd. Esp. 11742236
                </span>
                <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-white/90 text-neutral-600 border border-neutral-300 font-mono">
                  Céd. Prof. 8405839
                </span>
              </div>

              {/* Título Principal de Portada */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold text-[#091E1B] font-heading leading-[1.12] tracking-tight">
                Cirugía General & Laparoscopía de Mínima Invasión
              </h1>

              {/* Subtítulo de Especialidad */}
              <p className="mt-4 text-base sm:text-lg text-neutral-600 leading-relaxed max-w-2xl">
                Atención quirúrgica de excelencia en <strong className="text-[#0C4A42]">Tuxtla Gutiérrez, Chiapas</strong>. Cirugía de vesícula biliar por laparoscopía, apendicitis aguda de urgencia, reparación de hernias con malla y cirugía digestiva con más de <strong className="text-neutral-900">+5,000 procedimientos exitosos</strong>.
              </p>

              {/* Selector de Modalidades Quirúrgicas Rápidas */}
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-2.5 max-w-2xl">
                <div className="p-3 rounded-xl bg-white/80 border border-[#14B8A6]/30 shadow-2xs">
                  <div className="text-xs font-bold text-[#0C4A42] flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#14B8A6]" />
                    Laparoscopía HD
                  </div>
                  <p className="text-[11px] text-neutral-500 mt-0.5">Vesícula y apéndice en 24h</p>
                </div>

                <div className="p-3 rounded-xl bg-white/80 border border-[#14B8A6]/30 shadow-2xs">
                  <div className="text-xs font-bold text-[#0C4A42] flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#14B8A6]" />
                    Hernias con Malla
                  </div>
                  <p className="text-[11px] text-neutral-500 mt-0.5">Inguinales y de ombligo</p>
                </div>

                <div className="p-3 rounded-xl bg-rose-50/90 border border-rose-200 shadow-2xs">
                  <div className="text-xs font-bold text-rose-800 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-rose-600 animate-ping inline-block" />
                    Urgencias 24 Horas
                  </div>
                  <p className="text-[11px] text-rose-600 mt-0.5">Atención de abdomen agudo</p>
                </div>
              </div>

              {/* Tarjeta de Disponibilidad y Tarifa */}
              <div className="mt-6 p-4 rounded-2xl bg-white border border-neutral-200 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4 max-w-2xl">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#E6F4F1] flex items-center justify-center text-[#0C4A42]">
                    <Clock className="w-5 h-5 text-[#0C4A42]" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-neutral-900 block">
                      Consultorios Santa Fe · Consulta $500 MXN
                    </span>
                    <span className="text-xs text-neutral-500">
                      L-V 10-14h y 16-20h · Sáb 10-14h · Urgencias 24h
                    </span>
                  </div>
                </div>

                <div className="shrink-0">
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-[#E6F4F1] text-[#0C4A42]">
                    Citas abiertas
                  </span>
                </div>
              </div>

              {/* CTAs Principales */}
              <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 max-w-2xl">
                <a
                  href={`https://wa.me/${doctor.whatsapp.replace(/[^0-9]/g, "")}?text=Hola%20Dr.%20H%C3%A9ctor%20Vald%C3%A9z,%20quisiera%20agendar%20una%20consulta%20de%20cirug%C3%ADa%20general.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-[#0C4A42] hover:bg-[#08332D] text-white font-bold text-sm shadow-md hover:shadow-xl hover:-translate-y-0.5 transition-all text-center"
                >
                  <MessageCircle className="w-5 h-5 text-[#5EEAD4]" />
                  <span>Agendar Cita por WhatsApp ($500)</span>
                </a>

                <a
                  href={`tel:${doctor.emergencyPhone}`}
                  className="flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-white hover:bg-neutral-50 text-neutral-800 font-bold text-sm border-2 border-neutral-300 hover:border-[#0C4A42] transition-all text-center"
                >
                  <Phone className="w-4 h-4 text-[#0C4A42]" />
                  <span>Urgencias: 961 225 4853</span>
                </a>
              </div>
            </div>

            {/* Columna Derecha: EXCLUSIVO para la Foto del Doctor (5 cols) */}
            <div className="lg:col-span-5 flex justify-center items-center z-10">
              <DoctorPortrait className="w-full" />
            </div>
          </div>
        </div>
      </section>

      {/* ─── 2. ABOUT ME & TRAYECTORIA QUIRÚRGICA ──────────────────── */}
      <section className="py-20 bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Marco Dedicado para Foto Oficial (aspect-[3/4]) */}
            <div className="lg:col-span-5">
              <div className="relative w-full max-w-md mx-auto aspect-[3/4] rounded-brand-asym overflow-hidden bg-gradient-to-br from-[#0C4A42] via-[#08332D] to-[#091E1B] p-2 shadow-2xl border-4 border-white">
                <div className="relative w-full h-full rounded-[calc(3.5rem-8px)] overflow-hidden flex flex-col items-center justify-center text-center p-8 bg-[#091E1B]">
                  <div className="w-24 h-24 rounded-3xl bg-white/10 border border-[#2DD4BF]/40 flex items-center justify-center mb-6">
                    <span className="font-heading text-4xl font-extrabold text-[#5EEAD4]">HVG</span>
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#5EEAD4] mb-1">
                    Semblanza Médica Oficial
                  </span>
                  <h3 className="font-heading text-2xl font-extrabold text-white">
                    Dr. Héctor Valdéz Grajales
                  </h3>
                  <p className="text-xs text-neutral-300 mt-2 max-w-xs">
                    Médico Cirujano y Especialista en Cirugía General por la Universidad Autónoma de Chiapas.
                  </p>
                  <div className="mt-6 flex flex-col gap-2 w-full max-w-xs">
                    <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-left">
                      <span className="text-[10px] text-neutral-400 block uppercase">Cédula Especialidad UNACH</span>
                      <span className="font-mono text-sm font-bold text-[#5EEAD4]">11742236</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-left">
                      <span className="text-[10px] text-neutral-400 block uppercase">Cédula Médico Cirujano</span>
                      <span className="font-mono text-sm font-bold text-white">8405839</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Trayectoria, Hitos y Filosofía */}
            <div className="lg:col-span-7">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0C4A42] bg-[#E6F4F1] px-3 py-1 rounded-full inline-block mb-3">
                Experiencia & Liderazgo Quirúrgico
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#091E1B] font-heading tracking-tight">
                Más de 5,000 Procedimientos Quirúrgicos en Chiapas
              </h2>
              <p className="mt-4 text-base text-neutral-600 leading-relaxed">
                El Dr. Héctor Valdéz Grajales se formó con los más altos estándares clínicos y quirúrgicos en la Universidad Autónoma de Chiapas (UNACH). Con una sólida trayectoria de más de 5 años de práctica activa como cirujano general titular y más de 5,500 pacientes atendidos, combina el dominio de técnicas laparoscópicas avanzadas con un trato empático, ético y de absoluto respeto a la anatomía del paciente.
              </p>

              {/* Stats en Bento Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8">
                {doctor.stats.map((s, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-[#F7FAF9] border border-neutral-200/80 text-center">
                    <span className="font-heading text-2xl sm:text-3xl font-extrabold text-[#0C4A42] block">
                      {s.value}
                    </span>
                    <span className="text-xs font-medium text-neutral-500 mt-1 block">
                      {s.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Hitos Académicos y Congresos */}
              <div className="mt-8 space-y-3">
                <h4 className="text-sm font-bold text-neutral-900 uppercase tracking-wide">
                  Certificaciones y Presentaciones Médicas:
                </h4>
                {doctor.certifications.map((c, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-neutral-50 border border-neutral-200">
                    <Award className="w-5 h-5 text-[#D97706] shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs sm:text-sm font-bold text-neutral-800">{c.name}</p>
                      <span className="text-xs text-neutral-500">{c.institution} ({c.year})</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 3. TARIFAS TRANSPARENTES ($500 MXN) ───────────────────── */}
      <section className="py-16 bg-[#F7FAF9] border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0C4A42]">
              Honorarios Médicos Claros
            </span>
            <h2 className="text-3xl font-extrabold text-[#091E1B] font-heading mt-1">
              Tarifas Transparentes de Consulta en Tuxtla Gutiérrez
            </h2>
            <p className="text-sm text-neutral-600 mt-2">
              Atención médica de alta especialidad con precios justos y facilidades para reembolso con aseguradoras.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {/* Tarjeta 1: Primera Vez */}
            <div className="p-8 rounded-3xl bg-white border-2 border-[#14B8A6] shadow-lg relative flex flex-col justify-between">
              <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold bg-[#0C4A42] text-[#5EEAD4] shadow-sm">
                Más Solicitada
              </span>
              <div>
                <h3 className="font-heading text-lg font-bold text-neutral-900">
                  Consulta de Cirugía General
                </h3>
                <p className="text-xs text-neutral-500 mt-1">Primera vez en Consultorios Santa Fe</p>
                <div className="my-6">
                  <span className="font-heading text-4xl font-extrabold text-[#0C4A42]">$500</span>
                  <span className="text-xs text-neutral-500 font-semibold ml-1">MXN</span>
                </div>
                <ul className="space-y-2.5 text-xs text-neutral-600">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    Historia clínica y palpación abdominal completa
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    Interpretación de ultrasonidos y tomografías
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    Diagnóstico certero y segunda opinión honesta
                  </li>
                </ul>
              </div>
              <a
                href={`https://wa.me/${doctor.whatsapp.replace(/[^0-9]/g, "")}?text=Hola%20Dr.%20H%C3%A9ctor%20Vald%C3%A9z,%20quisiera%20agendar%20mi%20consulta%20de%20primera%20vez%20de%20$500%20pesos.`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 w-full py-3 rounded-xl bg-[#0C4A42] hover:bg-[#08332D] text-white text-xs font-bold text-center block transition-all"
              >
                Agendar por $500 MXN
              </a>
            </div>

            {/* Tarjeta 2: Subsecuente */}
            <div className="p-8 rounded-3xl bg-white border border-neutral-200 shadow-sm flex flex-col justify-between">
              <div>
                <h3 className="font-heading text-lg font-bold text-neutral-900">
                  Consulta Subsecuente
                </h3>
                <p className="text-xs text-neutral-500 mt-1">Seguimiento y control de tratamiento</p>
                <div className="my-6">
                  <span className="font-heading text-4xl font-extrabold text-neutral-800">$400</span>
                  <span className="text-xs text-neutral-500 font-semibold ml-1">MXN</span>
                </div>
                <ul className="space-y-2.5 text-xs text-neutral-600">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    Revisión de estudios de laboratorio solicitados
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    Evaluación de respuesta a tratamiento médico
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    Ajuste de prescripción y alta clínica
                  </li>
                </ul>
              </div>
              <a
                href={`https://wa.me/${doctor.whatsapp.replace(/[^0-9]/g, "")}?text=Hola%20Dr.%20H%C3%A9ctor%20Vald%C3%A9z,%20quisiera%20agendar%20mi%20consulta%20subsecuente.`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 w-full py-3 rounded-xl bg-neutral-100 hover:bg-neutral-200 text-neutral-800 text-xs font-bold text-center block transition-all"
              >
                Agendar Subsecuente ($400)
              </a>
            </div>

            {/* Tarjeta 3: Paquetes Quirúrgicos */}
            <div className="p-8 rounded-3xl bg-white border border-neutral-200 shadow-sm flex flex-col justify-between">
              <div>
                <h3 className="font-heading text-lg font-bold text-neutral-900">
                  Cirugías Programadas
                </h3>
                <p className="text-xs text-neutral-500 mt-1">Vesícula, hernias, lipomas y apéndice</p>
                <div className="my-6">
                  <span className="font-heading text-2xl font-extrabold text-[#D97706]">A Presupuesto</span>
                  <span className="text-xs text-neutral-500 block mt-1">Paquetes hospitalarios a tu medida</span>
                </div>
                <ul className="space-y-2.5 text-xs text-neutral-600">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    Honorarios quirúrgicos, ayudantía y anestesia
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    Hospitalización y medicamentos de quirófano
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    Reembolso ágil con todas las aseguradoras
                  </li>
                </ul>
              </div>
              <a
                href={`https://wa.me/${doctor.whatsapp.replace(/[^0-9]/g, "")}?text=Hola%20Dr.%20H%C3%A9ctor%20Vald%C3%A9z,%20solicito%20informaci%C3%B3n%20sobre%20un%20presupuesto%20quir%C3%BArgico.`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 w-full py-3 rounded-xl bg-neutral-100 hover:bg-neutral-200 text-neutral-800 text-xs font-bold text-center block transition-all"
              >
                Cotizar Cirugía
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 4. CIRUGÍAS Y PROCEDIMIENTOS FRECUENTES ──────────────── */}
      <section className="py-20 bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#0C4A42]">
                Procedimientos de Vanguardia
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#091E1B] font-heading tracking-tight mt-1">
                Cirugías y Procedimientos Quirúrgicos
              </h2>
            </div>
            <Link
              href="/servicios"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#0C4A42] hover:text-[#08332D] transition-colors"
            >
              <span>Ver los 11 procedimientos</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredServices.map((service) => (
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
      </section>

      {/* ─── 5. PADECIMIENTOS FRECUENTES ───────────────────────────── */}
      <section className="py-20 bg-[#F7FAF9] border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#0C4A42]">
                Orientación Médica Oportuna
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#091E1B] font-heading tracking-tight mt-1">
                Padecimientos y Enfermedades que Atiende
              </h2>
            </div>
            <Link
              href="/enfermedades"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#0C4A42] hover:text-[#08332D] transition-colors"
            >
              <span>Ver catálogo completo (12 patologías)</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredDiseases.map((disease) => (
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
      </section>

      {/* ─── 6. GUÍA DE SÍNTOMAS Y CRITERIOS DE ALARMA ─────────────── */}
      <section className="py-20 bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#0C4A42]">
                Autoevaluación & Señales de Alerta
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#091E1B] font-heading tracking-tight mt-1">
                Síntomas y Motivos de Consulta
              </h2>
            </div>
            <Link
              href="/sintomas"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#0C4A42] hover:text-[#08332D] transition-colors"
            >
              <span>Ver todos los síntomas (10 guías)</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {prioritySymptoms.map((symptom) => (
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
      </section>

      {/* ─── 7. HOSPITALES Y CENTROS QUIRÚRGICOS ───────────────────── */}
      <section className="py-16 bg-[#091E1B] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-[#5EEAD4]">
              Seguridad Quirúrgica de Máximo Nivel
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-white mt-1">
              Convenios y Cirugías en los Mejores Hospitales de Tuxtla
            </h2>
            <p className="text-sm text-neutral-300 mt-2">
              Para procedimientos que requieren internamiento u operaciones de urgencia, el Dr. Valdéz cuenta con privilegios en hospitales certificados con quirófanos de vanguardia y terapia intensiva.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
              <Hospital className="w-8 h-8 text-[#2DD4BF] mb-3" />
              <h4 className="font-bold text-white text-base">Quirófanos Certificados</h4>
              <p className="text-xs text-neutral-300 mt-1.5 leading-relaxed">
                Torres de laparoscopía 4K de última generación y esterilización hospitalaria certificada.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
              <ShieldCheck className="w-8 h-8 text-[#F59E0B] mb-3" />
              <h4 className="font-bold text-white text-base">Terapia Intensiva 24H</h4>
              <p className="text-xs text-neutral-300 mt-1.5 leading-relaxed">
                Respaldo integral para pacientes de alta complejidad, adultos mayores o urgencias graves.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
              <Award className="w-8 h-8 text-[#5EEAD4] mb-3" />
              <h4 className="font-bold text-white text-base">Reembolso con Aseguradoras</h4>
              <p className="text-xs text-neutral-300 mt-1.5 leading-relaxed">
                Expedición inmediata de informe médico y facturación electrónica para reembolso expedito.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 8. PREGUNTAS FRECUENTES (FAQS) ────────────────────────── */}
      <section className="py-20 bg-white border-b border-neutral-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0C4A42]">
              Respuestas Claras
            </span>
            <h2 className="text-3xl font-extrabold text-[#091E1B] font-heading mt-1">
              Preguntas Frecuentes sobre la Consulta Quirúrgica
            </h2>
          </div>

          <div className="space-y-4">
            {homeFaqs.map((faq, index) => (
              <details
                key={index}
                className="group p-6 rounded-2xl bg-[#F7FAF9] border border-neutral-200/80 transition-all [&_summary::-webkit-details-marker]:hidden"
              >
                <summary className="flex items-center justify-between cursor-pointer font-bold text-base text-[#091E1B] group-hover:text-[#0C4A42] transition-colors">
                  <span>{faq.question}</span>
                  <ChevronRight className="w-5 h-5 text-[#0C4A42] transition-transform duration-300 group-open:rotate-90 shrink-0 ml-4" />
                </summary>
                <p className="mt-3 text-sm text-neutral-600 leading-relaxed border-t border-neutral-200/60 pt-3">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 9. BANNER FINAL CTA URGENCIAS Y CITAS ─────────────────── */}
      <section className="py-16 bg-gradient-to-r from-[#0C4A42] via-[#08332D] to-[#091E1B] text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#5EEAD4] block mb-1">
              Atención Inmediata en Tuxtla Gutiérrez
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-white">
              ¿Presentas dolor abdominal agudo o requieres una cirugía?
            </h2>
            <p className="text-xs sm:text-sm text-neutral-200 mt-2 max-w-xl">
              Agenda tu valoración en Consultorios Santa Fe por solo $500 MXN o comunícate a nuestra línea de urgencias disponible las 24 horas.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
            <a
              href={`https://wa.me/${doctor.whatsapp.replace(/[^0-9]/g, "")}?text=Hola%20Dr.%20H%C3%A9ctor%20Vald%C3%A9z,%20quisiera%20agendar%20una%20consulta.`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-white text-[#0C4A42] hover:bg-neutral-100 font-bold text-xs sm:text-sm transition-all shadow-lg"
            >
              <MessageCircle className="w-4 h-4 text-[#0C4A42]" />
              <span>Agendar por WhatsApp ($500)</span>
            </a>

            <a
              href={`tel:${doctor.emergencyPhone}`}
              className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs sm:text-sm transition-all shadow-lg"
            >
              <Phone className="w-4 h-4" />
              <span>Llamar Urgencias: 961 225 4853</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
