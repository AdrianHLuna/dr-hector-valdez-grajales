import React from "react";
import { doctor } from "@/data/doctor";
import { MedicalCondition, MedicalService, FAQItem } from "@/types/schema";

export function PhysicianStructuredData() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Physician",
    name: doctor.name,
    image: `https://drhectorvaldez.com${doctor.photo}`,
    medicalSpecialty: [
      "Surgery",
      "General Surgery",
      "Laparoscopic Surgery",
      "Gastrointestinal Surgery",
      "Abdominal Wall Hernia Surgery",
    ],
    telephone: doctor.phone,
    email: doctor.email,
    priceRange: "$$",
    currenciesAccepted: "MXN",
    paymentAccepted: "Cash, Credit Card, Debit Card, Bank Transfer",
    address: {
      "@type": "PostalAddress",
      streetAddress: doctor.address,
      addressLocality: doctor.city,
      addressRegion: doctor.state,
      postalCode: doctor.postalCode,
      addressCountry: "MX",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 16.749876,
      longitude: -93.125678,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Friday"],
        opens: "10:00",
        closes: "20:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "10:00",
        closes: "14:00",
      },
    ],
    hasCredential: [
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "degree",
        name: "Médico Cirujano",
        recognizedBy: {
          "@type": "CollegeOrUniversity",
          name: "Universidad Autónoma de Chiapas",
        },
      },
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "specialty",
        name: "Especialista en Cirugía General",
        recognizedBy: {
          "@type": "CollegeOrUniversity",
          name: "Universidad Autónoma de Chiapas",
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function MedicalConditionStructuredData({ condition }: { condition: MedicalCondition }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalCondition",
    name: condition.name,
    alternateName: condition.technicalName,
    description: condition.description,
    signOrSymptom: condition.symptoms.map((s) => ({
      "@type": "MedicalSignOrSymptom",
      name: s,
    })),
    cause: condition.causes.map((c) => ({
      "@type": "MedicalCause",
      name: c,
    })),
    riskFactor: condition.riskFactors.map((r) => ({
      "@type": "MedicalRiskFactor",
      name: r,
    })),
    possibleTreatment: condition.treatments.map((t) => ({
      "@type": "MedicalTherapy",
      name: t,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function MedicalProcedureStructuredData({ service }: { service: MedicalService }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    name: service.name,
    description: service.description,
    procedureType: service.type,
    followup: service.postOpRecommendations.join("; "),
    howPerformed: service.longDescription,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function FAQStructuredData({ faqs }: { faqs: FAQItem[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
