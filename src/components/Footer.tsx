import React from "react";
import Link from "next/link";
import { MapPin, Phone, MessageCircle, Clock, ShieldCheck, Mail, ArrowUpRight } from "lucide-react";
import { doctor } from "@/data/doctor";
import { services } from "@/data/services";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#091E1B] text-white pt-16 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Brand Banner Principal */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between pb-12 border-b border-white/10 gap-6">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#0C4A42] to-[#14B8A6]/40 flex items-center justify-center text-white border border-[#2DD4BF]/30 shadow-xl">
              <span className="font-heading font-extrabold text-2xl text-[#5EEAD4] tracking-wider">
                HVG
              </span>
            </div>
            <div>
              <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Dr. Héctor Valdéz Grajales
              </h3>
              <p className="text-sm font-medium text-[#2DD4BF] mt-0.5">
                Especialista en Cirugía General & Laparoscopía de Mínima Invasión
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href={`https://wa.me/${doctor.whatsapp.replace(/[^0-9]/g, "")}?text=Hola%20Dr.%20H%C3%A9ctor%20Vald%C3%A9z,%20quisiera%20agendar%20una%20consulta.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#0C4A42] hover:bg-[#14B8A6] text-white text-xs sm:text-sm font-bold border border-[#2DD4BF]/40 transition-all shadow-md"
            >
              <MessageCircle className="w-4 h-4 text-[#5EEAD4]" />
              <span>WhatsApp de Citas ($500 MXN)</span>
            </a>
            <a
              href={`tel:${doctor.emergencyPhone}`}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-rose-900/60 hover:bg-rose-900 text-rose-200 text-xs sm:text-sm font-bold border border-rose-500/30 transition-all"
            >
              <Phone className="w-4 h-4 text-rose-300" />
              <span>Urgencias 24H: 961 225 4853</span>
            </a>
          </div>
        </div>

        {/* 4 Columnas de Información */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 py-12 border-b border-white/10 text-xs sm:text-sm">
          {/* Columna 1: Consultorio & Ubicación */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#5EEAD4] mb-4">
              Ubicación del Consultorio
            </h4>
            <div className="space-y-3 text-neutral-300">
              <p className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#2DD4BF] shrink-0 mt-0.5" />
                <span>
                  <strong className="text-white block">Consultorios Santa Fe</strong>
                  {doctor.address}, {doctor.neighborhood}.
                  <br />
                  {doctor.references}.
                  <br />
                  C.P. {doctor.postalCode}, {doctor.city}, {doctor.state}.
                </span>
              </p>
              <p className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#2DD4BF] shrink-0" />
                <a href={`mailto:${doctor.email}`} className="hover:text-white transition-colors">
                  {doctor.email}
                </a>
              </p>
            </div>
          </div>

          {/* Columna 2: Horarios de Atención */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#5EEAD4] mb-4">
              Horarios de Consulta
            </h4>
            <div className="space-y-2.5 text-neutral-300">
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-[#F59E0B] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-white block">Lunes y Viernes</span>
                  <span className="text-xs text-neutral-400">10:00 am a 2:00 pm y 4:00 pm a 8:00 pm</span>
                </div>
              </div>
              <div className="flex items-start gap-2 pl-6">
                <div>
                  <span className="font-semibold text-white block">Sábado</span>
                  <span className="text-xs text-neutral-400">10:00 am a 2:00 pm</span>
                </div>
              </div>
              <div className="flex items-start gap-2 pl-6">
                <div>
                  <span className="font-semibold text-rose-300 block">Urgencias Quirúrgicas</span>
                  <span className="text-xs text-rose-200">Disponibilidad las 24 horas del día</span>
                </div>
              </div>
            </div>
          </div>

          {/* Columna 3: Procedimientos Clave */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#5EEAD4] mb-4">
              Cirugías Frecuentes
            </h4>
            <ul className="space-y-2 text-neutral-300">
              {services.slice(0, 5).map((s) => (
                <li key={s.id}>
                  <Link
                    href={`/servicios/${s.slug}`}
                    className="hover:text-white transition-colors flex items-center justify-between group"
                  >
                    <span className="truncate">{s.name.split("(")[0]}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-40 group-hover:opacity-100 group-hover:text-[#2DD4BF] transition-all" />
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/servicios"
                  className="inline-block text-[#5EEAD4] font-semibold text-xs mt-1 hover:underline"
                >
                  Ver los 11 procedimientos →
                </Link>
              </li>
            </ul>
          </div>

          {/* Columna 4: Cédulas & Registro Oficial */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#5EEAD4] mb-4">
              Credenciales Profesionales
            </h4>
            <div className="space-y-2.5 text-xs text-neutral-300">
              <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                <span className="font-semibold text-white block">Cédula Médico Cirujano:</span>
                <span className="font-mono text-[#5EEAD4] font-bold">8405839</span>
                <span className="text-[11px] text-neutral-400 block">Universidad Autónoma de Chiapas</span>
              </div>

              <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                <span className="font-semibold text-white block">Cédula Cirugía General:</span>
                <span className="font-mono text-[#5EEAD4] font-bold">11742236</span>
                <span className="text-[11px] text-neutral-400 block">Universidad Autónoma de Chiapas</span>
              </div>

              <p className="text-[11px] text-neutral-400 flex items-center gap-1.5 mt-2">
                <ShieldCheck className="w-3.5 h-3.5 text-[#F59E0B]" />
                {doctor.cofepris}
              </p>
            </div>
          </div>
        </div>

        {/* Barra Inferior de Derechos y Enlaces Legales */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
          <p>© {currentYear} Dr. Héctor Valdéz Grajales. Todos los derechos reservados. Tuxtla Gutiérrez, Chiapas.</p>
          <div className="flex items-center gap-6">
            <Link href="/aviso-de-privacidad" className="hover:text-white transition-colors">
              Aviso de Privacidad
            </Link>
            <Link href="/contacto" className="hover:text-white transition-colors">
              Ubicación en Google Maps
            </Link>
            <Link href="/llms.txt" className="hover:text-white transition-colors font-mono text-[11px]">
              /llms.txt
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
