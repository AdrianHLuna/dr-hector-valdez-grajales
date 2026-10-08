import React from "react";
import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { doctor } from "@/data/doctor";

export const metadata: Metadata = {
  title: "Aviso de Privacidad | Dr. Héctor Valdéz Grajales",
  description:
    "Aviso de privacidad y protección de datos personales de la práctica médica del Dr. Héctor Valdéz Grajales en Tuxtla Gutiérrez, Chiapas.",
};

export default function AvisoPrivacidadPage() {
  return (
    <div className="bg-[#F8F7FB] min-h-screen py-8 sm:py-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Aviso de Privacidad" }]} isDark={false} />

        <div className="mt-6 bg-white rounded-3xl p-8 sm:p-12 border border-neutral-200 shadow-xs space-y-6 text-sm text-neutral-700 leading-relaxed">
          <div>
            <h1 className="text-3xl font-extrabold text-[#181430] font-heading">
              Aviso de Privacidad Integral
            </h1>
            <p className="text-xs text-neutral-500 mt-1">Última actualización: Octubre 2026</p>
          </div>

          <p>
            El <strong>Dr. Héctor Valdéz Grajales</strong>, con domicilio profesional en <strong>Consultorios Santa Fe, 6a Sur #1271, entre 11 y 12 Poniente, Col. La Lomita, C.P. 29060, Tuxtla Gutiérrez, Chiapas</strong>, es responsable del tratamiento y protección de sus datos personales y sensibles de conformidad con la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP) y la Norma Oficial Mexicana NOM-004-SSA3-2012 del Expediente Clínico.
          </p>

          <h2 className="text-xl font-bold text-[#181430] font-heading pt-2">
            1. Datos Personales Recabados
          </h2>
          <p>
            Para la debida prestación de servicios de atención médica quirúrgica, consulta externa, elaboración de expediente clínico y seguimiento postoperatorio, recabamos:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm">
            <li><strong>Datos de Identificación y Contacto:</strong> Nombre completo, edad, fecha de nacimiento, sexo, estado civil, teléfono particular y móvil, correo electrónico y domicilio.</li>
            <li><strong>Datos Médicos y Sensibles:</strong> Antecedentes patológicos y no patológicos, antecedentes quirúrgicos, alergias, sintomatología actual, resultados de estudios de laboratorio, ultrasonido o tomografía, diagnósticos clínicos y notas de evolución médica.</li>
          </ul>

          <h2 className="text-xl font-bold text-[#181430] font-heading pt-2">
            2. Finalidades del Tratamiento
          </h2>
          <p>Los datos recabados serán utilizados estrictamente para:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm">
            <li>Integración y actualización de su Expediente Clínico médico legal.</li>
            <li>Prestación de servicios de diagnóstico médico, programación quirúrgica y seguimiento postoperatorio.</li>
            <li>Emisión de recetas médicas, órdenes de estudios y comprobantes fiscales (CFDI).</li>
            <li>Llenado de informes médicos para aseguradoras de gastos médicos en trámites de reembolso.</li>
            <li>Contacto de seguimiento y comunicación en caso de urgencias médicas.</li>
          </ul>

          <h2 className="text-xl font-bold text-[#181430] font-heading pt-2">
            3. Confidencialidad y Transferencia de Datos
          </h2>
          <p>
            Sus datos clínicos están protegidos bajo estricto secreto profesional y no serán transferidos a terceros sin su consentimiento expreso, salvo las excepciones previstas en el artículo 37 de la LFPDPPP o requerimientos legales de autoridades sanitarias o judiciales competentes.
          </p>

          <h2 className="text-xl font-bold text-[#181430] font-heading pt-2">
            4. Derechos ARCO (Acceso, Rectificación, Cancelación y Oposición)
          </h2>
          <p>
            Usted tiene derecho a conocer qué datos personales tenemos de usted, para qué los utilizamos y las condiciones de su uso (Acceso). Asimismo, es su derecho solicitar la corrección de su información (Rectificación) o solicitar su limitación (Oposición), sujeto a las obligaciones de conservación del expediente clínico (mínimo 5 años conforme a la NOM-004-SSA3-2012).
          </p>
          <p>
            Para ejercer sus derechos ARCO, puede presentar su solicitud por escrito en nuestro consultorio o enviando un correo electrónico a <strong>{doctor.email}</strong>.
          </p>

          <h2 className="text-xl font-bold text-[#181430] font-heading pt-2">
            5. Contacto para Dudas de Privacidad
          </h2>
          <p>
            Para cualquier duda sobre el presente aviso, puede comunicarse al teléfono <strong>961 225 4853</strong> o presentarse en nuestras instalaciones en Consultorios Santa Fe, Tuxtla Gutiérrez, Chiapas.
          </p>
        </div>
      </div>
    </div>
  );
}
