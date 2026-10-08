import React from "react";
import type { Metadata } from "next";
import {
  MapPin,
  Phone,
  MessageCircle,
  Clock,
  CreditCard,
  Navigation,
  ExternalLink,
  ShieldCheck,
  AlertCircle,
  Building2,
  Car,
  FileText,
  CheckCircle2,
  Stethoscope,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { doctor } from "@/data/doctor";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Contacto, Citas y Ubicación en Consultorios Santa Fe | Dr. Héctor Valdéz Grajales",
  description:
    "Ubicación y contacto del Dr. Héctor Valdéz Grajales, Cirujano General en Tuxtla Gutiérrez, Chiapas. Consultorios Santa Fe, 6a Sur #1271, Col. La Lomita. Citas y Urgencias al 961 225 4853.",
};

export default function ContactoPage() {
  const whatsappUrl = `https://wa.me/${doctor.whatsapp.replace(/[^0-9]/g, "")}?text=Hola%20Dr.%20H%C3%A9ctor%20Vald%C3%A9z,%20quisiera%20agendar%20una%20consulta%20de%20cirug%C3%ADa%20general.`;
  const whatsappUrgenciasUrl = `https://wa.me/${doctor.whatsapp.replace(/[^0-9]/g, "")}?text=URGENCIA%20M%C3%89DICA:%20Requiero%20valoraci%C3%B3n%20quir%C3%BArgica%20inmediata%20con%20el%20Dr.%20H%C3%A9ctor%20Vald%C3%A9z.`;

  return (
    <div className="bg-[#FAF9FD] min-h-screen py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12">
        {/* Migas de pan */}
        <Breadcrumbs items={[{ label: "Contacto & Ubicación" }]} isDark={false} />

        {/* ─── Encabezado de Página Compacto y Diferenciado ─── */}
        <div className="border-b border-[#E6E1F2] pb-6 sm:pb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#EDE9F6] border border-[#DDD7EE] text-[#312A57] text-xs font-bold uppercase tracking-wider mb-3">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            Centro Quirúrgico & Enlace de Consulta • Tuxtla Gutiérrez
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4">
            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#181430] font-heading tracking-tight">
                Contacto Directo & Ubicación Clínica
              </h1>
              <p className="text-sm sm:text-base text-neutral-600 mt-2 max-w-2xl leading-relaxed">
                Atención personalizada en Consultorios Santa Fe. Valoración preoperatoria, manejo de dolor abdominal, cirugías laparoscópicas programadas y respuesta quirúrgica de urgencia 24/7.
              </p>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#312A57] hover:bg-[#1E1838] text-white text-xs sm:text-sm font-bold shadow-md hover:shadow-lg transition-all"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp de Citas</span>
              </a>
              <a
                href={`tel:${doctor.phone}`}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white border border-[#D5CEE8] text-[#312A57] hover:bg-[#F2EFF9] text-xs sm:text-sm font-bold shadow-xs transition-all"
              >
                <Phone className="w-4 h-4" />
                <span>961 225 4853</span>
              </a>
            </div>
          </div>
        </div>

        {/* ─── MASTER CONSOLE ASIMÉTRICA: DIRECTORIO + MAPA DEDICADO ─── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          
          {/* LADO IZQUIERDO: Directorio de Recepción Médica (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between bg-[#181430] text-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-[#312A57] relative overflow-hidden">
            {/* Brillo de fondo sutil */}
            <div className="absolute top-0 right-0 w-72 h-72 bg-[#5B4E9B]/20 rounded-full blur-3xl pointer-events-none" />
            
            <div className="relative z-10 space-y-6">
              {/* Tarjeta de Identidad de la Sede */}
              <div>
                <span className="text-[11px] font-black tracking-widest uppercase text-[#DDD8F5] bg-white/10 px-3 py-1 rounded-md border border-white/10">
                  Sede Principal de Consulta
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-white mt-3">
                  Consultorios Santa Fe
                </h2>
                <p className="text-xs sm:text-sm text-[#DDD8F5] mt-1 font-medium">
                  Dr. Héctor Valdéz Grajales — Cirujano General
                </p>
              </div>

              {/* Dirección Física Exacta */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-4 sm:p-5 space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#312A57] flex items-center justify-center text-[#DDD8F5] shrink-0 mt-0.5 border border-white/10">
                    <MapPin className="w-5 h-5 text-purple-300" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white">Dirección de la Clínica</h3>
                    <p className="text-xs sm:text-sm text-neutral-300 mt-1 leading-snug">
                      6a Sur #1271, entre 11 y 12 Poniente
                    </p>
                    <p className="text-xs text-neutral-400 mt-0.5">
                      Col. La Lomita, C.P. {doctor.postalCode}, Tuxtla Gutiérrez, Chiapas.
                    </p>
                    <span className="inline-block text-[11px] text-purple-200/90 font-medium mt-2 bg-[#312A57]/60 px-2.5 py-1 rounded-md border border-purple-400/20">
                      Ref: {doctor.references}
                    </span>
                  </div>
                </div>

                <a
                  href={doctor.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full mt-2 inline-flex items-center justify-center gap-2 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white text-xs font-semibold border border-white/10 transition-colors"
                >
                  <Navigation className="w-3.5 h-3.5 text-purple-300" />
                  <span>Navegar con GPS / Google Maps</span>
                  <ExternalLink className="w-3 h-3 text-neutral-400" />
                </a>
              </div>

              {/* Horarios de Atención en Formato Timeline */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-4 sm:p-5 space-y-3">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-purple-300" />
                  <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-300">
                    Horarios de Consulta Externa
                  </h3>
                </div>

                <div className="space-y-2 text-xs sm:text-sm border-t border-white/10 pt-3">
                  <div className="flex items-center justify-between">
                    <span className="text-neutral-300 font-medium">Lunes y Viernes:</span>
                    <span className="font-bold text-white text-right">
                      10:00 am - 2:00 pm <br className="sm:hidden" />
                      <span className="text-neutral-400 font-normal"> / </span>
                      4:00 pm - 8:00 pm
                    </span>
                  </div>
                  <div className="flex items-center justify-between border-t border-white/5 pt-2">
                    <span className="text-neutral-300 font-medium">Sábado:</span>
                    <span className="font-bold text-white">10:00 am - 2:00 pm</span>
                  </div>
                  <div className="flex items-center justify-between border-t border-white/5 pt-2">
                    <span className="text-neutral-300 font-medium">Martes, Miércoles y Jueves:</span>
                    <span className="text-purple-300 text-xs font-semibold">Quirófano & Urgencias</span>
                  </div>
                </div>
              </div>

              {/* Bloque de Urgencias Quirúrgicas */}
              <div className="p-4 rounded-2xl bg-rose-500/10 border border-rose-500/30 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-rose-500 animate-ping shrink-0" />
                  <div>
                    <span className="text-[11px] font-black uppercase text-rose-400 block tracking-wide">
                      Urgencias Quirúrgicas 24/7
                    </span>
                    <span className="text-xs text-neutral-300">
                      Atención inmediata ante dolor agudo
                    </span>
                  </div>
                </div>
                <a
                  href={`tel:${doctor.emergencyPhone}`}
                  className="px-3.5 py-2 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-black text-xs transition-colors shrink-0 shadow-sm"
                >
                  Llamar 24H
                </a>
              </div>
            </div>

            {/* Pie del Directorio con Honorario Transparente */}
            <div className="relative z-10 pt-6 mt-6 border-t border-white/10 flex items-center justify-between">
              <div>
                <span className="text-[11px] text-neutral-400 block uppercase tracking-wider font-semibold">
                  Consulta de Primera Vez
                </span>
                <span className="text-2xl font-black text-white font-mono">
                  ${doctor.consultationPrice} <span className="text-xs text-neutral-400 font-sans font-normal">MXN</span>
                </span>
              </div>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#5B4E9B] hover:bg-[#6D5EB7] text-white text-xs font-bold transition-all shadow-md"
              >
                <span>Agendar Cita</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* LADO DERECHO: Visor Geoespacial Ampliado & Guía Vial (7 cols) */}
          <div className="lg:col-span-7 flex flex-col bg-white rounded-3xl border border-[#DCD5EC] shadow-xl overflow-hidden">
            {/* Barra superior de estado del mapa */}
            <div className="px-5 py-3.5 bg-[#F2EEFA] border-b border-[#DCD5EC] flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-600" />
                <span className="text-xs font-bold text-[#181430] uppercase tracking-wide">
                  Visor Satelital & Rutas GPS • Consultorios Santa Fe
                </span>
              </div>
              <span className="text-[11px] font-semibold text-[#5B4E9B] bg-white px-2.5 py-0.5 rounded-md border border-[#D5CEE8]">
                Zona Médica La Lomita
              </span>
            </div>

            {/* Contenedor del Mapa 100% despejado y visible */}
            <div className="relative w-full flex-1 min-h-[380px] sm:min-h-[460px] bg-neutral-200">
              <iframe
                src={doctor.googleMapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación de Consultorios Santa Fe en Google Maps"
                className="w-full h-full filter saturate-110"
              />
            </div>

            {/* Barra inferior de accesibilidad vial (Guía Rápida) */}
            <div className="p-4 sm:p-5 bg-white border-t border-[#E6E1F2] grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
              <div className="flex items-start gap-2.5 p-2 rounded-xl bg-[#FAF9FD] border border-[#EDE9F6]">
                <Car className="w-4 h-4 text-[#312A57] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#181430] block">Vías de Acceso</strong>
                  <span className="text-neutral-500 text-[11px] leading-tight block">
                    Conexión directa por Av. Central Poniente y 9a Sur Poniente.
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-2 rounded-xl bg-[#FAF9FD] border border-[#EDE9F6]">
                <Building2 className="w-4 h-4 text-[#312A57] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#181430] block">Puntos de Referencia</strong>
                  <span className="text-neutral-500 text-[11px] leading-tight block">
                    Entre 11a y 12a Poniente Sur, frente al área médica La Lomita.
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-2 rounded-xl bg-[#FAF9FD] border border-[#EDE9F6]">
                <Navigation className="w-4 h-4 text-[#312A57] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#181430] block">Estacionamiento</strong>
                  <span className="text-neutral-500 text-[11px] leading-tight block">
                    Espacios sobre la 6a Sur y calles aledañas del consultorio.
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* ─── SECCIÓN 2: BENTO GRID DE 4 TARJETAS DE INFORMACIÓN PRÁCTICA ─── */}
        <div>
          <div className="mb-6">
            <span className="text-xs font-bold uppercase tracking-wider text-[#5B4E9B]">
              Información de Interés para el Paciente
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#181430] font-heading mt-1">
              Guía Operativa & Protocolos de Atención
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Bento Card 1: Primera Consulta */}
            <div className="bg-white rounded-3xl p-6 border border-[#E6E1F2] shadow-xs hover:border-[#312A57] hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#EDE9F6] text-[#312A57] flex items-center justify-center mb-4">
                  <Stethoscope className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-bold uppercase text-[#5B4E9B] tracking-wide">
                  Consulta de Valoración
                </span>
                <h3 className="text-lg font-bold text-[#181430] font-heading mt-1">
                  Diagnóstico Certero
                </h3>
                <p className="text-xs text-neutral-600 mt-2.5 leading-relaxed">
                  Exploración física abdominal completa, revisión rigurosa de estudios de laboratorio o ecografía previos y propuesta del plan quirúrgico adecuado para cada caso.
                </p>
              </div>
              <div className="mt-5 pt-3 border-t border-neutral-100 flex items-center justify-between text-xs">
                <span className="text-neutral-500">Tarifa fija:</span>
                <strong className="text-[#312A57] font-mono text-sm">${doctor.consultationPrice} MXN</strong>
              </div>
            </div>

            {/* Bento Card 2: Urgencias 24 Horas */}
            <div className="bg-white rounded-3xl p-6 border border-rose-100 shadow-xs hover:border-rose-300 hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-rose-50 text-rose-600 flex items-center justify-center mb-4">
                  <AlertCircle className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-bold uppercase text-rose-600 tracking-wide">
                  Atención Inmediata
                </span>
                <h3 className="text-lg font-bold text-[#181430] font-heading mt-1">
                  Urgencias Quirúrgicas
                </h3>
                <p className="text-xs text-neutral-600 mt-2.5 leading-relaxed">
                  Protocolo prioritario ante sospecha de apendicitis aguda, cólico vesicular severo o hernias incarceradas con enlace hospitalario de urgencia las 24 horas.
                </p>
              </div>
              <div className="mt-5 pt-3 border-t border-neutral-100 flex items-center justify-between text-xs">
                <span className="text-rose-600 font-semibold">Guardia Activa:</span>
                <a href={`tel:${doctor.emergencyPhone}`} className="text-rose-700 font-extrabold hover:underline">
                  961 225 4853
                </a>
              </div>
            </div>

            {/* Bento Card 3: Formas de Pago y Reembolso */}
            <div className="bg-white rounded-3xl p-6 border border-[#E6E1F2] shadow-xs hover:border-[#312A57] hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#EDE9F6] text-[#312A57] flex items-center justify-center mb-4">
                  <CreditCard className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-bold uppercase text-[#5B4E9B] tracking-wide">
                  Facilidades de Pago
                </span>
                <h3 className="text-lg font-bold text-[#181430] font-heading mt-1">
                  Pagos y Seguros Médicos
                </h3>
                <p className="text-xs text-neutral-600 mt-2.5 leading-relaxed">
                  Aceptamos efectivo, transferencias y tarjetas de débito/crédito. Se emiten informes quirúrgicos detallados y factura fiscal (CFDI) para reembolso con aseguradoras.
                </p>
              </div>
              <div className="mt-5 pt-3 border-t border-neutral-100 flex items-center justify-between text-xs">
                <span className="text-neutral-500">Aseguradoras:</span>
                <span className="text-emerald-700 font-bold">Vía Reembolso</span>
              </div>
            </div>

            {/* Bento Card 4: Quirófanos y Hospitales Privados */}
            <div className="bg-white rounded-3xl p-6 border border-[#E6E1F2] shadow-xs hover:border-[#312A57] hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#EDE9F6] text-[#312A57] flex items-center justify-center mb-4">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-bold uppercase text-[#5B4E9B] tracking-wide">
                  Seguridad Máxima
                </span>
                <h3 className="text-lg font-bold text-[#181430] font-heading mt-1">
                  Hospitales Privados
                </h3>
                <p className="text-xs text-neutral-600 mt-2.5 leading-relaxed">
                  Intervenciones quirúrgicas realizadas exclusivamente en hospitales privados certificados de Tuxtla Gutiérrez, equipados con torres laparoscópicas HD y terapia intensiva.
                </p>
              </div>
              <div className="mt-5 pt-3 border-t border-neutral-100 flex items-center justify-between text-xs">
                <span className="text-neutral-500">Tecnología:</span>
                <span className="text-[#312A57] font-bold">Laparoscopía HD</span>
              </div>
            </div>
          </div>
        </div>

        {/* ─── BANNER FINAL DE ACCIÓN QUIRÚRGICA ─── */}
        <div className="rounded-3xl bg-gradient-to-r from-[#181430] via-[#312A57] to-[#1E1838] p-8 sm:p-10 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 border border-[#5B4E9B]/30">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-wider text-purple-200">
              Atención Quirúrgica Inmediata
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold font-heading mt-1 text-white">
              ¿Requieres valoración por dolor abdominal o cirugía programada?
            </h3>
            <p className="text-xs sm:text-sm text-neutral-300 mt-2">
              Envía tus estudios previos o describe tus síntomas por WhatsApp para brindarte orientación preliminar y coordinar tu cita en Consultorios Santa Fe.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full md:w-auto">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white text-[#181430] hover:bg-neutral-100 font-extrabold text-xs sm:text-sm shadow-md transition-all"
            >
              <MessageCircle className="w-4 h-4 text-emerald-600" />
              <span>Enviar Mensaje por WhatsApp</span>
            </a>
            <a
              href={`tel:${doctor.phone}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold text-xs sm:text-sm border border-white/20 transition-all"
            >
              <Phone className="w-4 h-4" />
              <span>Llamar al Consultorio</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
