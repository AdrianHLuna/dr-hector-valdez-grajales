import { z } from "zod";

// ─── Constantes de validación ── v3 ────────────────────────────
const SLUG = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const E164 = /^\+[1-9]\d{6,14}$/;
const ISO_DATE = /^\d{4}-\d{2}-\d{2}$/;

// ─── Sub-schemas ──────────────────────────────────────────────
export const SEOSchema = z.object({
  title: z.string().max(70),
  description: z.string().max(170),
  keywords: z.array(z.string()).min(3),
  ogImage: z.string().optional(),
});

export const ExperienceItemSchema = z.object({
  year: z.string(),
  title: z.string(),
  description: z.string(),
});

export const CertificationSchema = z.object({
  name: z.string(),
  institution: z.string(),
  logo: z.string().optional(),
  year: z.string().optional(),
  registrationNumber: z.string().optional(),
});

export const EducationSchema = z.object({
  degree: z.string(),
  institution: z.string(),
  logo: z.string().optional(),
  year: z.string().optional(),
  cedula: z.string().optional(),
});

export const FAQItemSchema = z.object({
  question: z.string(),
  answer: z.string(),
});

export const TestimonialSchema = z.object({
  id: z.string(),
  patientName: z.string(),
  rating: z.number().min(1).max(5),
  text: z.string(),
  serviceName: z.string().optional(),
  date: z.string(),
});

// ─── Doctor Profile ───────────────────────────────────────────
export const DoctorProfileSchema = z.object({
  name: z.string(),
  title: z.string(),
  specialty: z.string(),
  specialistTitle: z.string().optional(),
  subspecialty: z.string().optional(),
  altaEspecialidades: z.array(z.string()).optional(),
  cedula: z.string().min(5),
  cedulaInstitucion: z.string().optional(),
  cedulaEspecialidad: z.string().optional(),
  cedulaEspecialidadInstitucion: z.string().optional(),
  cofepris: z.string().optional(),
  phone: z.string().regex(E164, "Formato E.164 sin espacios, ej: +529611234567"),
  secondaryPhone: z.string().regex(E164).optional(),
  whatsapp: z.string().regex(E164, "Formato E.164 sin espacios"),
  emergencyPhone: z.string().regex(E164, "Formato E.164 sin espacios").optional(),
  email: z.string().email(),
  address: z.string(),
  references: z.string().optional(),
  neighborhood: z.string().optional(),
  postalCode: z.string().optional(),
  city: z.string(),
  state: z.string(),
  country: z.string(),
  googleMapsUrl: z.string().url(),
  googleMapsEmbedUrl: z.string().url().optional(),
  geo: z.object({ latitude: z.number(), longitude: z.number() }).optional(),
  consultationPrice: z.number().positive(),
  followUpPrice: z.number().positive().optional(),
  paymentMethods: z.array(z.string()),
  insurances: z.array(z.string()).optional(),
  insuranceNote: z.string().optional(),
  schedule: z.string(),
  openingHours: z.array(z.string()).optional(),
  acceptingNewPatients: z.boolean().default(true),
  photo: z.string(),
  aboutPhoto: z.string().optional(),
  bio: z.string().min(100),
  philosophy: z.string(),
  experience: z.array(ExperienceItemSchema),
  stats: z.array(z.object({ label: z.string(), value: z.string() })),
  certifications: z.array(CertificationSchema),
  education: z.array(EducationSchema),
  testimonials: z.array(TestimonialSchema).optional(),
  sameAs: z.array(z.string().url()).optional(),
  ga4Id: z.string().optional(),
});

// ─── Medical Condition (Enfermedad) ───────────────────────────
export const MedicalConditionSchema = z.object({
  id: z.string(),
  slug: z.string().regex(SLUG, "Slug en minúsculas con guiones, sin acentos"),
  name: z.string(),
  technicalName: z.string().optional(),
  category: z.enum(["digestivo", "hernias", "proctologia", "partes-blandas", "urgencias"]),
  description: z.string().min(50),
  symptoms: z.array(z.string()),
  causes: z.array(z.string()),
  riskFactors: z.array(z.string()),
  mexicoStats: z.string().optional(),
  complications: z.array(z.string()),
  treatments: z.array(z.string()), // Estricto: procedimientos clínicos y quirúrgicos, sin marcas de medicamentos
  faqs: z.array(FAQItemSchema).min(3),
  sources: z.array(z.string()).optional(),
  relatedServices: z.array(z.string()).optional(),
  relatedSymptoms: z.array(z.string()).optional(),
  lastReviewed: z.string().regex(ISO_DATE).optional(),
  image: z.string(),
  seo: SEOSchema,
});

// ─── Medical Service (Servicio/Procedimiento) ─────────────────
export const MedicalServiceSchema = z.object({
  id: z.string(),
  slug: z.string().regex(SLUG),
  name: z.string(),
  category: z.enum(["laparoscopia", "hernias", "proctologia", "cirugia-general"]),
  description: z.string(),
  longDescription: z.string(),
  type: z.enum(["ambulatorio", "hospitalario", "consultorio"]),
  anesthesiaType: z.string().optional(),
  duration: z.string().optional(),
  recoveryTime: z.string().optional(),
  isPainful: z.boolean(),
  benefits: z.array(z.string()),
  postOpRecommendations: z.array(z.string()),
  priceRange: z.string().optional(),
  technicalSpecs: z.record(z.string(), z.string()).optional(),
  faqs: z.array(FAQItemSchema).min(2).optional(),
  relatedConditions: z.array(z.string()).optional(),
  lastReviewed: z.string().regex(ISO_DATE).optional(),
  image: z.string(),
  seo: SEOSchema,
});

// ─── Symptom (Síntoma / Motivo de Consulta) ───────────────────
export const SymptomSchema = z.object({
  id: z.string(),
  slug: z.string().regex(SLUG),
  name: z.string(),
  category: z.enum(["digestivo", "abdominal", "proctologico", "partes-blandas"]),
  colloquialNames: z.array(z.string()).optional(),
  description: z.string(),
  urgencyLevel: z.enum(["baja", "moderada", "alta", "urgencia_inmediata"]),
  causes: z.array(z.string()),
  alarmSigns: z.array(z.string()).min(1),
  whyConsult: z.string(),
  faqs: z.array(FAQItemSchema).min(2).optional(),
  relatedConditions: z.array(z.string()),
  lastReviewed: z.string().regex(ISO_DATE).optional(),
  image: z.string(),
  seo: SEOSchema,
});

// ─── Tipos inferidos ───────────────────────────────────────────
export type DoctorProfile = z.infer<typeof DoctorProfileSchema>;
export type MedicalCondition = z.infer<typeof MedicalConditionSchema>;
export type MedicalService = z.infer<typeof MedicalServiceSchema>;
export type Symptom = z.infer<typeof SymptomSchema>;
export type FAQItem = z.infer<typeof FAQItemSchema>;
export type Testimonial = z.infer<typeof TestimonialSchema>;
