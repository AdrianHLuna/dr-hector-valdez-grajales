import React from "react";
import type { Metadata } from "next";
import {
  MapPin,
  Phone,
  MessageCircle,
  Clock,
  Mail,
  ShieldCheck,
  CreditCard,
  Navigation,
  ExternalLink,
} from "lucide-react";
import { doctor } from "@/data/doctor";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Contacto y Ubicación en Consultorios Santa Fe | Dr. Héctor Valdéz Grajales",
  description:
    "Ubicación del consultorio del Dr. Héctor Valdéz Grajales en Tuxtla Gutiérrez, Chiapas. Consultorios Santa Fe, 6a Sur #1271, Col. La Lomita. Citas al 961 225 4853.",
};

export default function ContactoPage() {
  return (
    <div className="bg-[#F7FAF9] min-h-screen py-8 sm:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Contacto & Ubicación" }]} isDark={false} />

        {/* Encabezado */}
        <div className="mt-4 mb-8 max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-wider text-[#0C4A42]">
            Ubicación & Citas Médicas
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#091E1B] font-heading tracking-tight mt-1">
            Consultorios Santa Fe — Tuxtla Gutiérrez
          </h1>
          <p className="text-sm sm:text-base text-neutral-600 mt-2.5 leading-relaxed">
            Instalaciones médicas privadas equipadas para valoración de cirugía general, curaciones, procedimientos ambulatorios y atención programada o de urgencia.
          </p>
        </div>

        {/* ─── Lienzo Panorámico con Mapa y Dock Flotante Superpuesto ─── */}
        <div className="relative w-full rounded-3xl overflow-hidden shadow-xl border border-neutral-200 mb-12">
          {/* Mapa Interactivo de Google Maps (Iframe SIEMPRE VISIBLE) */}
          <div className="w-full h-[450px] sm:h-[520px] lg:h-[600px] relative bg-neutral-200">
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

          {/* Dock Flotante Superpuesto en Esquina Superior/Lateral */}
          <div className="lg:absolute lg:top-8 lg:left-8 z-20 m-4 lg:m-0 max-w-md bg-white/95 backdrop-blur-md rounded-2xl p-6 sm:p-7 shadow-2xl border border-neutral-200/90">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0C4A42] bg-[#E6F4F1] px-3 py-1 rounded-full inline-block">
              Consultorios Santa Fe
            </span>

            <h2 className="text-xl sm:text-2xl font-extrabold text-[#091E1B] font-heading mt-2">
              Dr. Héctor Valdéz Grajales
            </h2>
            <p className="text-xs font-semibold text-[#0C4A42] uppercase tracking-wide mt-0.5">
              Cirujano General & Laparoscopía
            </p>

            <div className="mt-4 space-y-3 text-xs sm:text-sm text-neutral-600 border-t border-neutral-100 pt-4">
              <p className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#0C4A42] shrink-0 mt-0.5" />
                <span>
                  <strong>6a Sur #1271, entre 11 y 12 Poniente</strong>
                  <br />
                  Col. La Lomita, C.P. {doctor.postalCode}, Tuxtla Gutiérrez, Chiapas.
                  <br />
                  <span className="text-[11px] text-neutral-500 italic block mt-0.5">
                    {doctor.references}
                  </span>
                </span>
              </p>

              <p className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#F59E0B] shrink-0 mt-0.5" />
                <span>
                  <strong>Horarios de Consulta:</strong>
                  <br />
                  Lunes y Viernes: 10:00 am - 2:00 pm y 4:00 pm - 8:00 pm
                  <br />
                  Sábado: 10:00 am - 2:00 pm
                  <br />
                  <span className="text-rose-700 font-bold block mt-0.5">
                    Urgencias Quirúrgicas: 24 Horas
                  </span>
                </span>
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-neutral-100 flex flex-col gap-2.5">
              <a
                href={`https://wa.me/${doctor.whatsapp.replace(/[^0-9]/g, "")}?text=Hola%20Dr.%20H%C3%A9ctor%20Vald%C3%A9z,%20quisiera%20agendar%20una%20consulta.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-[#0C4A42] hover:bg-[#08332D] text-white font-bold text-xs sm:text-sm shadow-md transition-all"
              >
                <MessageCircle className="w-4 h-4 text-[#5EEAD4]" />
                <span>Agendar por WhatsApp ($500 MXN)</span>
              </a>

              <a
                href={doctor.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-neutral-100 hover:bg-neutral-200 text-neutral-800 font-semibold text-xs transition-all"
              >
                <Navigation className="w-3.5 h-3.5 text-[#0C4A42]" />
                <span>Abrir en Google Maps / GPS</span>
              </a>
            </div>
          </div>
        </div>

        {/* ─── 3 Columnas Informativas Inferiores ───────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Columna 1: Líneas Telefónicas Directas */}
          <div className="p-8 rounded-3xl bg-white border border-neutral-200 shadow-xs">
            <div className="w-12 h-12 rounded-2xl bg-[#E6F4F1] flex items-center justify-center text-[#0C4A42] mb-4">
              <Phone className="w-6 h-6" />
            </div>
            <h3 className="font-heading text-lg font-bold text-[#091E1B]">
              Líneas Telefónicas
            </h3>
            <p className="text-xs text-neutral-500 mt-1">
              Atención telefónica de conmutador y urgencias
            </p>
            <div className="mt-5 space-y-3">
              <div className="p-3 rounded-xl bg-[#F7FAF9] border border-neutral-200/80">
                <span className="text-[11px] text-neutral-500 block">Conmutador y WhatsApp de Citas:</span>
                <a href={`tel:${doctor.phone}`} className="text-sm font-extrabold text-[#0C4A42]">
                  961 225 4853
                </a>
              </div>
              <div className="p-3 rounded-xl bg-rose-50 border border-rose-200">
                <span className="text-[11px] text-rose-700 font-bold block">Urgencias Quirúrgicas 24H:</span>
                <a href={`tel:${doctor.emergencyPhone}`} className="text-sm font-extrabold text-rose-900">
                  961 225 4853
                </a>
              </div>
            </div>
          </div>

          {/* Columna 2: Tarifas y Formas de Pago */}
          <div className="p-8 rounded-3xl bg-white border border-neutral-200 shadow-xs">
            <div className="w-12 h-12 rounded-2xl bg-[#E6F4F1] flex items-center justify-center text-[#0C4A42] mb-4">
              <CreditCard className="w-6 h-6" />
            </div>
            <h3 className="font-heading text-lg font-bold text-[#091E1B]">
              Tarifas & Métodos de Pago
            </h3>
            <p className="text-xs text-neutral-500 mt-1">
              Honorarios transparentes y facilidades
            </p>
            <div className="mt-5 space-y-2 text-xs sm:text-sm text-neutral-700">
              <p className="flex items-center justify-between py-1.5 border-b border-neutral-100">
                <span>Consulta de Primera Vez:</span>
                <strong className="text-[#0C4A42] font-mono text-base">$500 MXN</strong>
              </p>
              <p className="flex items-center justify-between py-1.5 border-b border-neutral-100">
                <span>Consulta Subsecuente:</span>
                <strong className="text-neutral-800 font-mono text-base">$400 MXN</strong>
              </p>
              <p className="text-[11px] text-neutral-500 pt-2">
                Aceptamos efectivo, tarjeta bancaria y expedición de informe formal para reembolso con aseguradoras.
              </p>
            </div>
          </div>

          {/* Columna 3: Información de Llegada */}
          <div className="p-8 rounded-3xl bg-white border border-neutral-200 shadow-xs">
            <div className="w-12 h-12 rounded-2xl bg-[#E6F4F1] flex items-center justify-center text-[#0C4A42] mb-4">
              <Navigation className="w-6 h-6" />
            </div>
            <h3 className="font-heading text-lg font-bold text-[#091E1B]">
              Cómo Llegar
            </h3>
            <p className="text-xs text-neutral-500 mt-1">
              Referencias y accesibilidad vial
            </p>
            <div className="mt-5 space-y-2.5 text-xs text-neutral-600 leading-relaxed">
              <p>
                <strong>Vías Principales:</strong> Accesible desde la Avenida Central Poniente, 9a Sur y Periférico Sur Poniente.
              </p>
              <p>
                <strong>Referencias:</strong> Consultorios Santa Fe se ubica sobre la 6a Sur Poniente, entre la 11a y 12a Poniente Sur, en zona médica consolidada de la Colonia La Lomita.
              </p>
              <p>
                <strong>Estacionamiento:</strong> Fácil estacionamiento en calle y áreas circundantes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
