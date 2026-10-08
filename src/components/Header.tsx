"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, MessageCircle, Menu, X, Clock, MapPin, ShieldCheck, Activity } from "lucide-react";
import { doctor } from "@/data/doctor";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "Inicio", href: "/" },
    { label: "Cirugías & Procedimientos", href: "/servicios" },
    { label: "Padecimientos", href: "/enfermedades" },
    { label: "Guía de Síntomas", href: "/sintomas" },
    { label: "Contacto & Ubicación", href: "/contacto" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-neutral-200/80 shadow-xs transition-all">
      {/* Top Banner de Urgencias & Horarios */}
      <div className="hidden lg:block bg-[#181430] text-white py-2 px-4 text-xs font-medium">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-neutral-300">
              <MapPin className="w-3.5 h-3.5 text-[#8B7EC8]" />
              Consultorios Santa Fe · 6a Sur #1271, Col. La Lomita, Tuxtla Gutiérrez
            </span>
            <span className="flex items-center gap-1.5 text-neutral-300">
              <Clock className="w-3.5 h-3.5 text-[#F59E0B]" />
              L-V 10-14h y 16-20h · Sáb 10-14h
            </span>
          </div>

          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 font-semibold text-[#DDD8F5]">
              <span className="w-2 h-2 rounded-full bg-rose-400 animate-ping inline-block" />
              Línea de Urgencias Quirúrgicas 24H:
            </span>
            <a
              href={`tel:${doctor.emergencyPhone}`}
              className="text-white hover:text-[#DDD8F5] font-bold tracking-wide transition-colors"
            >
              961 225 4853
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 sm:h-22">
          {/* Brand Logo & Doctor Name */}
          <Link href="/" className="flex items-center gap-3.5 group">
            <div className="relative w-14 h-14 sm:w-16 sm:h-16 shrink-0 group-hover:scale-105 transition-transform">
              <Image
                src="/images/icono.png"
                alt="Isotipo Dr. Héctor Valdéz Grajales"
                width={64}
                height={64}
                className="w-full h-full object-contain"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-heading text-lg sm:text-xl font-extrabold text-[#181430] group-hover:text-[#312A57] transition-colors leading-tight">
                Dr. Héctor Valdéz Grajales
              </span>
              <span className="text-[11px] font-semibold text-[#312A57] tracking-wide uppercase">
                Cirugía General & Laparoscopía · Gastrocirugía
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-semibold text-neutral-700 hover:text-[#312A57] transition-colors tracking-tight relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#312A57] hover:after:w-full after:transition-all"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={`tel:${doctor.phone}`}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-neutral-300 text-neutral-700 hover:bg-neutral-50 text-xs font-semibold transition-all"
            >
              <Phone className="w-3.5 h-3.5 text-[#312A57]" />
              <span>961 225 4853</span>
            </a>

            <a
              href={`https://wa.me/${doctor.whatsapp.replace(/[^0-9]/g, "")}?text=Hola%20Dr.%20H%C3%A9ctor%20Vald%C3%A9z,%20quisiera%20agendar%20una%20consulta%20de%20cirug%C3%ADa%20general.`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#312A57] hover:bg-[#1E1838] text-white text-xs font-bold shadow-md hover:shadow-lg transition-all"
            >
              <MessageCircle className="w-4 h-4 text-[#DDD8F5]" />
              <span>Cita ($500)</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href={`tel:${doctor.emergencyPhone}`}
              className="p-2.5 rounded-xl bg-rose-50 text-rose-700 border border-rose-200"
              title="Llamar Urgencias"
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2.5 rounded-xl text-neutral-700 hover:bg-neutral-100 transition-colors"
              aria-label="Abrir Menú"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="lg:hidden bg-white border-b border-neutral-200 px-4 pt-3 pb-6 space-y-3 animate-in slide-in-from-top-2 duration-200 shadow-xl">
          <div className="p-3 rounded-xl bg-[#EDE9F6] border border-[#C8C0E2] mb-2">
            <p className="text-xs font-bold text-[#312A57]">Línea Directa de Urgencias 24 Horas:</p>
            <a href={`tel:${doctor.emergencyPhone}`} className="text-sm font-extrabold text-[#181430]">
              📞 961 225 4853
            </a>
          </div>

          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block py-2.5 px-3 rounded-lg text-base font-semibold text-neutral-800 hover:bg-neutral-50 hover:text-[#312A57] transition-colors"
            >
              {link.label}
            </Link>
          ))}

          <div className="pt-4 flex flex-col gap-2.5">
            <a
              href={`https://wa.me/${doctor.whatsapp.replace(/[^0-9]/g, "")}?text=Hola%20Dr.%20H%C3%A9ctor%20Vald%C3%A9z,%20quisiera%20agendar%20una%20consulta.`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-[#312A57] text-white font-bold text-sm shadow-md"
            >
              <MessageCircle className="w-4 h-4 text-[#DDD8F5]" />
              <span>Agendar por WhatsApp ($500 MXN)</span>
            </a>
            <a
              href={`tel:${doctor.phone}`}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl border border-neutral-300 text-neutral-700 font-semibold text-sm"
            >
              <Phone className="w-4 h-4 text-[#312A57]" />
              <span>Llamar al consultorio</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
