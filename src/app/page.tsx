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
  AlertCircle,
  ShieldAlert,
  ArrowUpRight,
  FileText,
  BadgeCheck,
} from "lucide-react";
import { doctor } from "@/data/doctor";
import { services } from "@/data/services";
import { diseases } from "@/data/diseases";
import { symptoms } from "@/data/symptoms";
import { CardImageHeader } from "@/components/CardImageHeader";
import DoctorPortrait from "@/components/DoctorPortrait";

export default function HomePage() {
  const vBiliary = services.find((s) => s.slug === "colecistectomia-laparoscopica")!;
  const appendix = services.find((s) => s.slug === "apendicectomia-laparoscopica")!;
  const inguinalHernia = services.find((s) => s.slug === "hernioplastia-inguinal")!;
  const umbilicalHernia = services.find((s) => s.slug === "hernioplastia-umbilical-ventral")!;
  const procto = services.find((s) => s.slug === "hemorroidectomia-proctologia")!;
  const lipomas = services.find((s) => s.slug === "reseccion-lipomas-tumores")!;

  const urgentSymptoms = symptoms.filter((s) => s.urgencyLevel === "urgencia_inmediata" || s.urgencyLevel === "alta").slice(0, 4);
  const keyDiseases = diseases.slice(0, 4);

  return (
    <div className="flex flex-col">
      {/* ─── 1. HERO FOLD TRIPARTITO DE CONSOLA QUIRÚRGICA (100vh / min-h-screen) ─── */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#F8F7FB] via-[#F2EEF9] to-[#E6E0F5] overflow-hidden py-12 lg:py-0 border-b border-neutral-200">
        {/* Patrón sutil y halos de iluminación quirúrgica */}
        <div className="absolute inset-0 bg-[radial-gradient(#312A57_1px,transparent_1px)] [background-size:28px_28px] opacity-10 pointer-events-none" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[650px] h-[650px] bg-[#8B7EC8]/15 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-8 lg:py-12 z-10">
          {/* ESTRUCTURA DE 3 COLUMNAS: Información | Retrato de Honor Central | Ticket de Consulta */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-6 items-center">
            
            {/* COLUMNA 1: Autoridad Clínica y Especialidades (4 columnas en LG) */}
            <div className="lg:col-span-4 flex flex-col justify-center space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#312A57] text-[#DDD8F5] text-xs font-bold shadow-xs w-fit">
                <ShieldCheck className="w-4 h-4 text-[#F59E0B]" />
                <span>UNACH · Céd. Especialidad 11742236</span>
              </div>

              <h1 className="text-3xl sm:text-4xl xl:text-[2.75rem] font-extrabold text-[#181430] font-heading leading-[1.14] tracking-tight">
                Cirugía General & Laparoscopía de Mínima Invasión
              </h1>

              <p className="text-sm sm:text-base text-neutral-600 leading-relaxed font-sans">
                Atención quirúrgica de alta especialidad en <strong className="text-[#312A57]">Tuxtla Gutiérrez, Chiapas</strong>. Cirugía de vesícula biliar por laparoscopía, apendicitis aguda, reparación de hernias con malla y cirugía digestiva con más de <strong className="text-neutral-900">+5,000 cirugías exitosas</strong>.
              </p>

              {/* Selector Rápido de Patologías Quirúrgicas Cardinales */}
              <div className="space-y-2 pt-1">
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/90 border border-[#C8C0E2] shadow-2xs">
                  <div className="w-8 h-8 rounded-lg bg-[#EDE9F6] text-[#312A57] flex items-center justify-center shrink-0">
                    <Scissors className="w-4 h-4 text-[#312A57]" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-neutral-900 block leading-tight">Vesícula & Apéndice por Laparoscopía</span>
                    <span className="text-[11px] text-neutral-500">Mínima invasión · Alta ambulatoria 24h</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/90 border border-[#C8C0E2] shadow-2xs">
                  <div className="w-8 h-8 rounded-lg bg-[#EDE9F6] text-[#312A57] flex items-center justify-center shrink-0">
                    <Activity className="w-4 h-4 text-[#312A57]" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-neutral-900 block leading-tight">Hernias Inguinales & Umbilicales</span>
                    <span className="text-[11px] text-neutral-500">Reparación sin tensión con malla biocompatible</span>
                  </div>
                </div>
              </div>

              {/* Banner de Urgencias Directo */}
              <div className="p-3 rounded-xl bg-rose-50/90 border border-rose-200 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-600 animate-ping" />
                  <span className="text-xs font-bold text-rose-900">Urgencias 24 Horas:</span>
                </div>
                <a
                  href={`tel:${doctor.emergencyPhone}`}
                  className="text-xs font-extrabold text-rose-700 hover:text-rose-900 font-mono tracking-wider"
                >
                  961 225 4853
                </a>
              </div>
            </div>

            {/* COLUMNA 2: EJE VISUAL CENTRAL EXCLUSIVO PARA LA FOTO DEL DOCTOR (4 columnas en LG) */}
            <div className="lg:col-span-4 flex justify-center items-center">
              <div className="w-full max-w-sm">
                <DoctorPortrait className="w-full shadow-2xl" />
              </div>
            </div>

            {/* COLUMNA 3: PASE DE VALORACIÓN CLÍNICA & AGENDADOR 1-CLICK (4 columnas en LG) */}
            <div className="lg:col-span-4 flex flex-col justify-center">
              <div className="bg-white rounded-3xl p-6 sm:p-7 border-2 border-[#312A57] shadow-xl relative overflow-hidden">
                {/* Header del Ticket */}
                <div className="flex items-center justify-between border-b border-neutral-100 pb-4 mb-4">
                  <div>
                    <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#312A57] bg-[#EDE9F6] px-3 py-1 rounded-full inline-block">
                      Consultorios Santa Fe
                    </span>
                    <h2 className="text-lg font-bold text-[#181430] mt-1.5 font-heading">
                      Consulta de Cirugía General
                    </h2>
                  </div>
                  <div className="w-10 h-10 rounded-2xl bg-[#312A57] flex items-center justify-center text-white shrink-0 shadow-sm">
                    <Stethoscope className="w-5 h-5 text-[#DDD8F5]" />
                  </div>
                </div>

                {/* Tarifa Transparente en Grande */}
                <div className="p-4 rounded-2xl bg-[#F8F7FB] border border-[#C8C0E2] text-center my-3">
                  <span className="text-xs font-medium text-neutral-500 block">Tarifa de Valoración Médica:</span>
                  <div className="flex items-baseline justify-center gap-1 my-0.5">
                    <span className="text-3xl sm:text-4xl font-extrabold text-[#312A57] font-heading">$500</span>
                    <span className="text-xs font-bold text-neutral-600">MXN</span>
                  </div>
                </div>

                {/* Lo que incluye la cita */}
                <ul className="space-y-2 text-xs text-neutral-600 py-2 border-b border-neutral-100">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Exploración física y palpación abdominal minuciosa</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Interpretación de ultrasonidos y tomografías</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Presupuesto quirúrgico claro sin costos ocultos</span>
                  </li>
                </ul>

                {/* Ubicación y Horario */}
                <div className="py-3 text-[11px] text-neutral-500 space-y-1">
                  <p className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#312A57] shrink-0" />
                    <span>6a Sur #1271, Col. La Lomita, Tuxtla Gutiérrez</span>
                  </p>
                  <p className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#F59E0B] shrink-0" />
                    <span>L-V 10:00-14:00 y 16:00-20:00 · Sáb 10:00-14:00</span>
                  </p>
                </div>

                {/* Botones de Acción Inmediata */}
                <div className="space-y-2 pt-2">
                  <a
                    href={`https://wa.me/${doctor.whatsapp.replace(/[^0-9]/g, "")}?text=Hola%20Dr.%20H%C3%A9ctor%20Vald%C3%A9z,%20quisiera%20agendar%20una%20consulta%20de%20cirug%C3%ADa%20general%20de%20$500%20pesos.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-[#312A57] hover:bg-[#1E1838] text-white font-bold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all"
                  >
                    <MessageCircle className="w-4 h-4 text-[#DDD8F5]" />
                    <span>Agendar Cita por WhatsApp ($500)</span>
                  </a>

                  <a
                    href={`tel:${doctor.phone}`}
                    className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl border border-neutral-300 hover:bg-neutral-50 text-neutral-700 font-semibold text-xs transition-all"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#312A57]" />
                    <span>Llamar al Consultorio: 961 225 4853</span>
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── 2. SECCIÓN: MATRIZ BENTO ASIMÉTRICA DE PROCEDIMIENTOS QUIRÚRGICOS ─── */}
      <section className="py-20 bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#312A57] bg-[#EDE9F6] px-3.5 py-1 rounded-full inline-block">
                Técnicas de Vanguardia
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#181430] font-heading tracking-tight mt-2">
                Cirugías y Procedimientos de Mínima Invasión
              </h2>
              <p className="text-sm text-neutral-600 mt-2 max-w-2xl">
                Intervenciones laparoscópicas avanzadas y cirugía general diseñadas para menor dolor postoperatorio, cicatrices milimétricas y reinserción pronta a sus actividades cotidianas.
              </p>
            </div>
            <Link
              href="/servicios"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#312A57] hover:text-[#1E1838] transition-colors shrink-0"
            >
              <span>Ver catálogo completo (11 procedimientos)</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* BENTO GRID ASIMÉTRICO */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
            
            {/* Bento Card 1: PANORÁMICA DE VESÍCULA BILIAR (Span 7 cols) */}
            <article className="lg:col-span-7 bg-white rounded-3xl border border-neutral-200 overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between group">
              <div>
                <CardImageHeader
                  src={vBiliary.image}
                  alt={vBiliary.name}
                  category={vBiliary.category as any}
                  aspectRatio="wide"
                  badgeText="CIRUGÍA ESTRELLA LAPAROSCÓPICA"
                />
                <div className="p-6 sm:p-7">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-[#EDE9F6] text-[#312A57]">
                      {vBiliary.priceRange}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200">
                      Alta ambulatoria 24h
                    </span>
                  </div>
                  <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#181430] group-hover:text-[#312A57] transition-colors">
                    {vBiliary.name}
                  </h3>
                  <p className="mt-2 text-sm text-neutral-600 leading-relaxed line-clamp-3">
                    {vBiliary.description}
                  </p>
                  <div className="mt-4 pt-4 border-t border-neutral-100 flex flex-wrap gap-2 text-xs text-neutral-500">
                    <span className="inline-flex items-center gap-1 bg-[#F8F7FB] px-2.5 py-1 rounded-lg">
                      <Clock className="w-3.5 h-3.5 text-[#312A57]" /> {vBiliary.duration}
                    </span>
                    <span className="inline-flex items-center gap-1 bg-[#F8F7FB] px-2.5 py-1 rounded-lg">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" /> 3 a 4 microincisiones
                    </span>
                  </div>
                </div>
              </div>
              <div className="p-6 pt-0">
                <Link
                  href={`/servicios/${vBiliary.slug}`}
                  className="w-full flex items-center justify-between py-3.5 px-5 rounded-xl bg-neutral-50 hover:bg-[#312A57] text-[#312A57] hover:text-white font-semibold text-xs sm:text-sm tracking-wide transition-all border border-neutral-200 hover:border-[#312A57] group/btn"
                >
                  <span>Ver Ficha del Procedimiento</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                </Link>
              </div>
            </article>

            {/* Bento Card 2: APENDICECTOMÍA DE URGENCIA 24H (Span 5 cols) */}
            <article className="lg:col-span-5 bg-white rounded-3xl border border-neutral-200 overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between group">
              <div>
                <CardImageHeader
                  src={appendix.image}
                  alt={appendix.name}
                  category={appendix.category as any}
                  aspectRatio="wide"
                  badgeText="URGENCIA QUIRÚRGICA 24H"
                />
                <div className="p-6 sm:p-7">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-rose-100 text-rose-800 border border-rose-300 animate-pulse">
                      Atención Inmediata
                    </span>
                  </div>
                  <h3 className="font-heading text-xl font-bold text-[#181430] group-hover:text-[#312A57] transition-colors">
                    {appendix.name}
                  </h3>
                  <p className="mt-2 text-sm text-neutral-600 leading-relaxed line-clamp-3">
                    {appendix.description}
                  </p>
                  <div className="mt-4 pt-4 border-t border-neutral-100 text-xs text-rose-700 font-semibold flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-rose-600" />
                    Línea activa para dolor abdominal agudo
                  </div>
                </div>
              </div>
              <div className="p-6 pt-0">
                <Link
                  href={`/servicios/${appendix.slug}`}
                  className="w-full flex items-center justify-between py-3.5 px-5 rounded-xl bg-neutral-50 hover:bg-[#312A57] text-[#312A57] hover:text-white font-semibold text-xs sm:text-sm tracking-wide transition-all border border-neutral-200 hover:border-[#312A57] group/btn"
                >
                  <span>Ver Ficha del Procedimiento</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                </Link>
              </div>
            </article>

            {/* Bento Card 3: HERNIOPLASTÍA INGUINAL CON MALLA (Span 4 cols) */}
            <article className="lg:col-span-4 bg-white rounded-3xl border border-neutral-200 overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between group">
              <div>
                <CardImageHeader
                  src={inguinalHernia.image}
                  alt={inguinalHernia.name}
                  category={inguinalHernia.category as any}
                  aspectRatio="video"
                  badgeText="PARED ABDOMINAL"
                />
                <div className="p-6">
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-[#EDE9F6] text-[#312A57] inline-block mb-2">
                    {inguinalHernia.priceRange}
                  </span>
                  <h3 className="font-heading text-lg font-bold text-[#181430] group-hover:text-[#312A57] transition-colors leading-snug">
                    {inguinalHernia.name}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-neutral-600 line-clamp-2">
                    {inguinalHernia.description}
                  </p>
                </div>
              </div>
              <div className="p-6 pt-0">
                <Link
                  href={`/servicios/${inguinalHernia.slug}`}
                  className="w-full flex items-center justify-between py-3 px-4 rounded-xl bg-neutral-50 hover:bg-[#312A57] text-[#312A57] hover:text-white font-semibold text-xs transition-all border border-neutral-200 group/btn"
                >
                  <span>Ver Ficha del Procedimiento</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
                </Link>
              </div>
            </article>

            {/* Bento Card 4: HERNIOPLASTÍA UMBILICAL (Span 4 cols) */}
            <article className="lg:col-span-4 bg-white rounded-3xl border border-neutral-200 overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between group">
              <div>
                <CardImageHeader
                  src={umbilicalHernia.image}
                  alt={umbilicalHernia.name}
                  category={umbilicalHernia.category as any}
                  aspectRatio="video"
                  badgeText="HERNIAS DE OMBLIGO"
                />
                <div className="p-6">
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-[#EDE9F6] text-[#312A57] inline-block mb-2">
                    {umbilicalHernia.priceRange}
                  </span>
                  <h3 className="font-heading text-lg font-bold text-[#181430] group-hover:text-[#312A57] transition-colors leading-snug">
                    {umbilicalHernia.name}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-neutral-600 line-clamp-2">
                    {umbilicalHernia.description}
                  </p>
                </div>
              </div>
              <div className="p-6 pt-0">
                <Link
                  href={`/servicios/${umbilicalHernia.slug}`}
                  className="w-full flex items-center justify-between py-3 px-4 rounded-xl bg-neutral-50 hover:bg-[#312A57] text-[#312A57] hover:text-white font-semibold text-xs transition-all border border-neutral-200 group/btn"
                >
                  <span>Ver Ficha del Procedimiento</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
                </Link>
              </div>
            </article>

            {/* Bento Card 5: PROCTOLOGÍA QUIRÚRGICA (Span 4 cols) */}
            <article className="lg:col-span-4 bg-white rounded-3xl border border-neutral-200 overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between group">
              <div>
                <CardImageHeader
                  src={procto.image}
                  alt={procto.name}
                  category={procto.category as any}
                  aspectRatio="video"
                  badgeText="PROCTOLOGÍA"
                />
                <div className="p-6">
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-[#EDE9F6] text-[#312A57] inline-block mb-2">
                    {procto.priceRange}
                  </span>
                  <h3 className="font-heading text-lg font-bold text-[#181430] group-hover:text-[#312A57] transition-colors leading-snug">
                    {procto.name}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-neutral-600 line-clamp-2">
                    {procto.description}
                  </p>
                </div>
              </div>
              <div className="p-6 pt-0">
                <Link
                  href={`/servicios/${procto.slug}`}
                  className="w-full flex items-center justify-between py-3 px-4 rounded-xl bg-neutral-50 hover:bg-[#312A57] text-[#312A57] hover:text-white font-semibold text-xs transition-all border border-neutral-200 group/btn"
                >
                  <span>Ver Ficha del Procedimiento</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
                </Link>
              </div>
            </article>

          </div>
        </div>
      </section>

      {/* ─── 3. SECCIÓN: CENTRO DE TRIAJE QUIRÚRGICO & PADECIMIENTOS CARDINALES ─── */}
      <section className="py-20 bg-[#F8F7FB] border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#312A57] bg-[#EDE9F6] px-3.5 py-1 rounded-full inline-block">
              Orientación Médica Oportuna
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#181430] font-heading tracking-tight mt-2">
              Centro de Triaje: ¿Cuándo Acudir a Valoración Quirúrgica?
            </h2>
            <p className="text-sm text-neutral-600 mt-2">
              Distinga entre una molestia digestiva que requiere consulta programada y una señal de alarma que amerita atención quirúrgica de urgencia.
            </p>
          </div>

          {/* LAYOUT DIVIDIDO 5/7 ASIMÉTRICO: Semáforo de Síntomas a la Izquierda | Padecimientos a la Derecha */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* LADO IZQUIERDO (5 cols): Semáforo de Síntomas de Alerta */}
            <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 border border-neutral-200 shadow-xs space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-neutral-100">
                <div className="flex items-center gap-2">
                  <ShieldAlert className="w-5 h-5 text-rose-600" />
                  <h3 className="font-heading text-lg font-bold text-[#181430]">
                    Semáforo de Síntomas
                  </h3>
                </div>
                <Link href="/sintomas" className="text-xs font-bold text-[#312A57] hover:underline">
                  Ver las 10 guías →
                </Link>
              </div>

              <div className="space-y-3">
                {urgentSymptoms.map((sym) => (
                  <Link
                    key={sym.id}
                    href={`/sintomas/${sym.slug}`}
                    className="block p-4 rounded-2xl bg-[#F8F7FB] hover:bg-[#EDE9F6] border border-neutral-200/80 transition-all group"
                  >
                    <div className="flex items-center justify-between">
                      <span
                        className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full ${
                          sym.urgencyLevel === "urgencia_inmediata"
                            ? "bg-rose-100 text-rose-800"
                            : "bg-amber-100 text-amber-900"
                        }`}
                      >
                        {sym.urgencyLevel === "urgencia_inmediata" ? "🚨 Urgencia Inmediata" : "⚠️ Prioridad Alta"}
                      </span>
                      <ArrowRight className="w-3.5 h-3.5 text-neutral-400 group-hover:text-[#312A57] transition-transform group-hover:translate-x-1" />
                    </div>
                    <h4 className="font-heading text-sm font-bold text-[#181430] mt-2 group-hover:text-[#312A57] transition-colors">
                      {sym.name}
                    </h4>
                    <p className="text-xs text-neutral-500 mt-1 line-clamp-2">
                      {sym.description}
                    </p>
                  </Link>
                ))}
              </div>

              <div className="p-4 rounded-2xl bg-rose-50 border border-rose-200 text-xs text-rose-900">
                <p className="font-bold">¿Dolor abdominal intenso y repentino?</p>
                <p className="mt-0.5 text-rose-800">
                  Comuníquese de inmediato al conmutador de urgencias: <strong>961 225 4853</strong>
                </p>
              </div>
            </div>

            {/* LADO DERECHO (7 cols): Padecimientos Digestivos Frecuentes */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center justify-between pb-1">
                <h3 className="font-heading text-xl font-bold text-[#181430]">
                  Padecimientos Quirúrgicos Comunes
                </h3>
                <Link href="/enfermedades" className="text-xs font-bold text-[#312A57] hover:underline">
                  Ver catálogo completo (12 patologías) →
                </Link>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {keyDiseases.map((d) => (
                  <article
                    key={d.id}
                    className="bg-white rounded-2xl border border-neutral-200 overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col justify-between group"
                  >
                    <div>
                      <CardImageHeader
                        src={d.image}
                        alt={d.name}
                        category={d.category as any}
                        aspectRatio="video"
                        badgeText={d.category.toUpperCase()}
                      />
                      <div className="p-5">
                        <h4 className="font-heading text-base font-bold text-[#181430] group-hover:text-[#312A57] transition-colors leading-snug">
                          {d.name}
                        </h4>
                        <p className="text-xs text-neutral-600 mt-1.5 line-clamp-2">
                          {d.description}
                        </p>
                      </div>
                    </div>
                    <div className="p-5 pt-0">
                      <Link
                        href={`/enfermedades/${d.slug}`}
                        className="w-full flex items-center justify-between py-2.5 px-3.5 rounded-xl bg-neutral-50 hover:bg-[#312A57] text-[#312A57] hover:text-white font-semibold text-xs transition-all border border-neutral-200 group/btn"
                      >
                        <span>Ver Guía Médica</span>
                        <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── 4. SECCIÓN: DOSSIER INSTITUCIONAL & TRAYECTORIA DEL CIRUJANO ─── */}
      <section className="py-20 bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* Bento Split: Fotografía Oficial en About Me (aspect-[3/4]) + Semblanza y Acreditaciones */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* COLUMNA 1 (5 de 12): Marco Dedicado para la Fotografía Oficial del Médico */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-md aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl border-2 border-[#8B7EC8]/30 bg-gradient-to-br from-[#181430] via-[#241F42] to-[#312A57] group">
                <Image
                  src={doctor.aboutPhoto || "/aboutme.jpg"}
                  alt="Dr. Héctor Valdéz Grajales — Cirujano General en Tuxtla Gutiérrez"
                  fill
                  sizes="(max-width: 768px) 100vw, 500px"
                  className="object-cover object-top group-hover:scale-102 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#141124] via-transparent to-transparent opacity-80" />
                
                {/* Badge Superior */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#181430]/90 backdrop-blur-md border border-white/20 text-[#DDD8F5] text-xs font-bold shadow-md">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#F59E0B]" />
                    UNACH · Cirugía General
                  </span>
                </div>

                {/* Badge Inferior Flotante con Distintivos de Certificación y Trayectoria */}
                <div className="absolute bottom-4 left-4 right-4 z-10 p-4 rounded-2xl bg-[#141124]/90 backdrop-blur-md border border-white/15 text-white shadow-xl space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-amber-300 flex items-center gap-1">
                      <Sparkles className="w-3.5 h-3.5" /> +5,000 Cirugías Realizadas
                    </span>
                    <span className="text-[11px] font-mono text-neutral-300">Céd. 11742236</span>
                  </div>
                  <p className="text-xs text-neutral-300 leading-snug">
                    Cirujano Titular en Consultorios Santa Fe y Hospitales Privados de Chiapas
                  </p>
                </div>
              </div>
            </div>

            {/* COLUMNA 2 (7 de 12): Semblanza, Filosofía Médica y Cédulas UNACH */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#312A57] bg-[#EDE9F6] px-3.5 py-1 rounded-full inline-block">
                  Semblanza Institucional & Trayectoria
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#181430] font-heading tracking-tight mt-3">
                  Dr. Héctor Valdéz Grajales
                </h2>
                <p className="text-sm sm:text-base font-semibold text-[#5B4E9B] mt-1">
                  Especialista en Cirugía General y Laparoscopía de Mínima Invasión
                </p>
              </div>

              <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
                {doctor.bio}
              </p>

              {/* Callout de Filosofía Médica */}
              <div className="p-5 rounded-2xl bg-[#F8F7FB] border-l-4 border-[#312A57] border-y border-r border-neutral-200 space-y-1">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#312A57] block">
                  Filosofía de Práctica Quirúrgica:
                </span>
                <p className="text-xs sm:text-sm text-neutral-700 italic leading-relaxed">
                  "{doctor.philosophy}"
                </p>
              </div>

              {/* Cédulas Profesionales UNACH */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                <div className="p-4 rounded-2xl bg-white border border-[#C8C0E2] shadow-2xs">
                  <span className="text-[10px] font-bold text-neutral-500 uppercase tracking-wider block">
                    Cédula de Especialidad en Cirugía General
                  </span>
                  <div className="flex items-baseline gap-2 mt-1">
                    <span className="font-mono text-lg font-black text-[#312A57]">{doctor.cedulaEspecialidad}</span>
                    <span className="text-xs font-semibold text-neutral-600">UNACH</span>
                  </div>
                  <span className="text-[11px] text-neutral-400 block mt-0.5">
                    Universidad Autónoma de Chiapas
                  </span>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-[#C8C0E2] shadow-2xs">
                  <span className="text-[10px] font-bold text-neutral-500 uppercase tracking-wider block">
                    Cédula Profesional Médico Cirujano
                  </span>
                  <div className="flex items-baseline gap-2 mt-1">
                    <span className="font-mono text-lg font-black text-[#181430]">{doctor.cedula}</span>
                    <span className="text-xs font-semibold text-neutral-600">UNACH</span>
                  </div>
                  <span className="text-[11px] text-neutral-400 block mt-0.5">
                    Facultad de Medicina Humana
                  </span>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href={`https://wa.me/${doctor.whatsapp.replace(/[^0-9]/g, "")}?text=Hola%20Dr.%20H%C3%A9ctor%20Vald%C3%A9z,%20quisiera%20agendar%20una%20consulta%20de%20valoraci%C3%B3n.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#312A57] hover:bg-[#1E1838] text-white text-xs sm:text-sm font-bold shadow-md transition-all"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400" />
                  <span>Agendar Consulta de Valoración ($500 MXN)</span>
                </a>
                <Link
                  href="/contacto"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-neutral-100 hover:bg-neutral-200 text-neutral-800 text-xs sm:text-sm font-semibold transition-all"
                >
                  <MapPin className="w-4 h-4 text-[#312A57]" />
                  <span>Ver Consultorios Santa Fe</span>
                </Link>
              </div>
            </div>

          </div>

          {/* Franja de Métricas Cuantificables */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4">
            {doctor.stats.map((s, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-[#F8F7FB] border border-[#C8C0E2] text-center">
                <span className="font-heading text-3xl sm:text-4xl font-extrabold text-[#312A57] block">
                  {s.value}
                </span>
                <span className="text-xs font-bold text-neutral-600 mt-1 block uppercase tracking-wide">
                  {s.label}
                </span>
              </div>
            ))}
          </div>

          {/* Certificaciones y Participaciones Académicas */}
          <div className="bg-[#F8F7FB] rounded-3xl p-8 border border-neutral-200">
            <h3 className="font-heading text-lg font-bold text-[#181430] uppercase tracking-wide mb-6">
              Educación Médica Continua & Congresos Quirúrgicos
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {doctor.certifications.map((c, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-white border border-neutral-200 flex items-start gap-3">
                  <Award className="w-5 h-5 text-[#F59E0B] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-neutral-900 leading-snug">{c.name}</h4>
                    <span className="text-xs text-neutral-500 mt-0.5 block">{c.institution} · {c.year}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ─── 5. SECCIÓN: TRANSPARENCIA QUIRÚRGICA & TARIFAS ─── */}
      <section className="py-20 bg-[#F8F7FB] border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#312A57] bg-[#EDE9F6] px-3.5 py-1 rounded-full inline-block">
              Honorarios Claros
            </span>
            <h2 className="text-3xl font-extrabold text-[#181430] font-heading mt-2">
              Transparencia Médica y Paquetes Quirúrgicos
            </h2>
            <p className="text-sm text-neutral-600 mt-2">
              Sin sorpresas ni cobros ocultos: conozca el costo de su valoración y el funcionamiento de los presupuestos hospitalarios.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Tarjeta 1: Valoración Quirúrgica */}
            <div className="p-8 sm:p-10 rounded-3xl bg-white border-2 border-[#312A57] shadow-xl relative flex flex-col justify-between">
              <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold bg-[#312A57] text-[#DDD8F5] shadow-sm">
                Atención Especializada
              </span>
              <div>
                <h3 className="font-heading text-xl font-bold text-neutral-900">
                  Consulta de Valoración Quirúrgica
                </h3>
                <p className="text-xs text-neutral-500 mt-1">Atención personalizada en Consultorios Santa Fe</p>
                <div className="my-6">
                  <span className="font-heading text-4xl sm:text-5xl font-extrabold text-[#312A57]">$500</span>
                  <span className="text-xs text-neutral-500 font-semibold ml-1">MXN</span>
                </div>
                <ul className="space-y-3 text-xs sm:text-sm text-neutral-600">
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Historia clínica y exploración abdominal minuciosa</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Revisión e interpretación de ultrasonidos y estudios previos</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Diagnóstico certero y segunda opinión médica honesta</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Plan quirúrgico personalizado y presupuesto claro</span>
                  </li>
                </ul>
              </div>
              <a
                href={`https://wa.me/${doctor.whatsapp.replace(/[^0-9]/g, "")}?text=Hola%20Dr.%20H%C3%A9ctor%20Vald%C3%A9z,%20quisiera%20agendar%20mi%20consulta%20de%20valoraci%C3%B3n%20quir%C3%BArgica%20de%20$500%20pesos.`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 w-full py-4 rounded-xl bg-[#312A57] hover:bg-[#1E1838] text-white text-xs sm:text-sm font-bold text-center block transition-all shadow-md"
              >
                Agendar Consulta por $500 MXN
              </a>
            </div>

            {/* Tarjeta 2: Paquetes Quirúrgicos */}
            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-neutral-200 shadow-sm flex flex-col justify-between">
              <div>
                <h3 className="font-heading text-xl font-bold text-neutral-900">
                  Cirugías Programadas
                </h3>
                <p className="text-xs text-neutral-500 mt-1">Vesícula, hernias, lipomas y apéndice</p>
                <div className="my-6">
                  <span className="font-heading text-3xl sm:text-4xl font-extrabold text-[#F59E0B]">A Presupuesto</span>
                  <span className="text-xs text-neutral-500 block mt-1">Paquetes hospitalarios personalizados</span>
                </div>
                <ul className="space-y-3 text-xs sm:text-sm text-neutral-600">
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Honorarios del equipo quirúrgico y anestesiología</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Quirófano hospitalario privado certificado y material estéril</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Mallas biocompatibles de alta tecnología e insumos de laparoscopía</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Informe médico formal para reembolso con aseguradoras (GMM)</span>
                  </li>
                </ul>
              </div>
              <a
                href={`https://wa.me/${doctor.whatsapp.replace(/[^0-9]/g, "")}?text=Hola%20Dr.%20H%C3%A9ctor%20Vald%C3%A9z,%20solicito%20informaci%C3%B3n%20sobre%20un%20presupuesto%20quir%C3%BArgico.`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 w-full py-4 rounded-xl bg-neutral-100 hover:bg-neutral-200 text-neutral-800 text-xs sm:text-sm font-bold text-center block transition-all"
              >
                Cotizar Procedimiento Quirúrgico
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 6. SECCIÓN: RED HOSPITALARIA PRIVADA EN TUXTLA GUTIÉRREZ ─── */}
      <section className="py-16 bg-[#141124] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-[#DDD8F5]">
              Seguridad Quirúrgica de Máximo Nivel
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-white mt-1">
              Convenios y Cirugías en los Mejores Hospitales de Tuxtla
            </h2>
            <p className="text-sm text-neutral-300 mt-2">
              Para procedimientos que requieren internamiento u operaciones de urgencia, el Dr. Valdéz opera con privilegios en hospitales certificados con quirófanos de vanguardia y terapia intensiva.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
              <Hospital className="w-8 h-8 text-[#8B7EC8] mb-3" />
              <h3 className="font-bold text-white text-base">Quirófanos Certificados</h3>
              <p className="text-xs text-neutral-300 mt-1.5 leading-relaxed">
                Torres de laparoscopía 4K de última generación y esterilización hospitalaria certificada.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
              <ShieldCheck className="w-8 h-8 text-[#F59E0B] mb-3" />
              <h3 className="font-bold text-white text-base">Terapia Intensiva 24H</h3>
              <p className="text-xs text-neutral-300 mt-1.5 leading-relaxed">
                Respaldo integral para pacientes de alta complejidad, adultos mayores o urgencias graves.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
              <Award className="w-8 h-8 text-[#DDD8F5] mb-3" />
              <h3 className="font-bold text-white text-base">Reembolso con Aseguradoras</h3>
              <p className="text-xs text-neutral-300 mt-1.5 leading-relaxed">
                Expedición inmediata de informe médico y facturación electrónica para reembolso expedito.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 7. BANNER FINAL CTA URGENCIAS Y CITAS ─── */}
      <section className="py-16 bg-gradient-to-r from-[#312A57] via-[#241F42] to-[#141124] text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#DDD8F5] block mb-1">
              Atención Inmediata en Tuxtla Gutiérrez
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-white">
              ¿Presenta dolor abdominal agudo o requiere una cirugía?
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
              className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-white text-[#312A57] hover:bg-neutral-100 font-bold text-xs sm:text-sm transition-all shadow-lg"
            >
              <MessageCircle className="w-4 h-4 text-[#312A57]" />
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
