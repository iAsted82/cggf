/**
 * Validation Schemas - Implémentation Raj (Microsoft Azure)
 * Validation robuste avec Zod pour prévention d'erreurs
 */

import { z } from 'zod';

// Schema de base pour coordonnées
export const contactSchema = z.object({
  email: z
    .string()
    .min(1, "L'email est requis")
    .email("Format d'email invalide")
    .max(255, "Email trop long"),
  
  phone: z
    .string()
    .min(1, "Le téléphone est requis")
    .regex(
      /^(?:\+33|0)[1-9](?:[0-9]{8})$/,
      "Format de téléphone français invalide (ex: 01 23 45 67 89 ou +33 1 23 45 67 89)"
    ),
    
  address: z
    .string()
    .min(10, "L'adresse doit contenir au moins 10 caractères")
    .max(500, "L'adresse est trop longue")
});

// Schema pour inscription consulaire
export const inscriptionSchema = z.object({
  // Informations personnelles
  firstName: z
    .string()
    .min(2, "Le prénom doit contenir au moins 2 caractères")
    .max(50, "Le prénom est trop long")
    .regex(/^[a-zA-ZÀ-ÿ\s\-']+$/, "Le prénom ne peut contenir que des lettres, espaces, tirets et apostrophes"),
    
  lastName: z
    .string()
    .min(2, "Le nom doit contenir au moins 2 caractères")
    .max(50, "Le nom est trop long")
    .regex(/^[a-zA-ZÀ-ÿ\s\-']+$/, "Le nom ne peut contenir que des lettres, espaces, tirets et apostrophes"),
    
  birthDate: z
    .string()
    .min(1, "La date de naissance est requise")
    .refine((date) => {
      const birthDate = new Date(date);
      const today = new Date();
      const age = today.getFullYear() - birthDate.getFullYear();
      return age >= 16 && age <= 120;
    }, "Vous devez avoir entre 16 et 120 ans"),
    
  birthPlace: z
    .string()
    .min(2, "Le lieu de naissance est requis")
    .max(100, "Le lieu de naissance est trop long"),
    
  nationality: z
    .string()
    .min(1, "La nationalité est requise")
    .refine((val) => val === "gabonaise", "Seuls les ressortissants gabonais peuvent s'inscrire"),
    
  // Documents
  passportNumber: z
    .string()
    .min(1, "Le numéro de passeport est requis")
    .regex(/^[A-Z]{2}\d{7}$/, "Format de passeport gabonais invalide (ex: GA1234567)"),
    
  passportExpiry: z
    .string()
    .min(1, "La date d'expiration du passeport est requise")
    .refine((date) => {
      const expiryDate = new Date(date);
      const today = new Date();
      return expiryDate > today;
    }, "Le passeport doit être valide"),
    
  // Contact
  ...contactSchema.shape,
  
  // Adresse en France
  frenchAddress: z
    .string()
    .min(10, "L'adresse en France est requise")
    .max(500, "L'adresse est trop longue"),
    
  postalCode: z
    .string()
    .regex(/^\d{5}$/, "Code postal français invalide (5 chiffres)"),
    
  city: z
    .string()
    .min(2, "La ville est requise")
    .max(100, "Le nom de la ville est trop long"),
    
  // Situation professionnelle
  profession: z
    .string()
    .min(2, "La profession est requise")
    .max(100, "La profession est trop longue"),
    
  employer: z
    .string()
    .max(200, "Le nom de l'employeur est trop long")
    .optional(),
    
  // Contact d'urgence
  emergencyContact: z.object({
    name: z
      .string()
      .min(2, "Le nom du contact d'urgence est requis")
      .max(100, "Le nom est trop long"),
    relationship: z
      .string()
      .min(2, "La relation avec le contact d'urgence est requise"),
    phone: z
      .string()
      .min(10, "Le téléphone du contact d'urgence est requis")
  }),
  
  // Acceptation conditions
  acceptTerms: z
    .boolean()
    .refine((val) => val === true, "Vous devez accepter les conditions d'utilisation"),
    
  acceptPrivacy: z
    .boolean()
    .refine((val) => val === true, "Vous devez accepter la politique de confidentialité")
});

// Schema pour demande de documents
export const documentRequestSchema = z.object({
  // Type de document
  documentType: z.enum([
    'birth_certificate',
    'marriage_certificate', 
    'death_certificate',
    'nationality_certificate',
    'residence_certificate',
    'single_certificate'
  ], {
    errorMap: () => ({ message: "Type de document invalide" })
  }),
  
  // Informations sur la personne concernée
  subjectFirstName: z
    .string()
    .min(2, "Le prénom de la personne concernée est requis")
    .max(50, "Le prénom est trop long"),
    
  subjectLastName: z
    .string()
    .min(2, "Le nom de la personne concernée est requis")
    .max(50, "Le nom est trop long"),
    
  subjectBirthDate: z
    .string()
    .min(1, "La date de naissance est requise"),
    
  subjectBirthPlace: z
    .string()
    .min(2, "Le lieu de naissance est requis")
    .max(100, "Le lieu de naissance est trop long"),
    
  // Demandeur (si différent)
  requesterRelation: z
    .string()
    .min(1, "Votre relation avec la personne concernée est requise"),
    
  // Informations de livraison
  deliveryMethod: z.enum(['pickup', 'mail', 'email'], {
    errorMap: () => ({ message: "Méthode de livraison invalide" })
  }),
  
  deliveryAddress: z
    .string()
    .min(10, "L'adresse de livraison est requise")
    .max(500, "L'adresse est trop longue")
    .optional(),
    
  // Quantité et urgence
  quantity: z
    .number()
    .int("La quantité doit être un nombre entier")
    .min(1, "Minimum 1 exemplaire")
    .max(10, "Maximum 10 exemplaires"),
    
  isUrgent: z.boolean().default(false),
  
  urgentReason: z
    .string()
    .max(500, "La justification d'urgence est trop longue")
    .optional(),
    
  // Contact du demandeur
  ...contactSchema.shape
});

// Schema pour prise de rendez-vous
export const appointmentSchema = z.object({
  // Type de service
  serviceType: z.enum([
    'inscription',
    'documents',
    'passport',
    'marriage',
    'protection',
    'other'
  ], {
    errorMap: () => ({ message: "Type de service invalide" })
  }),
  
  // Créneaux disponibles
  preferredDate: z
    .string()
    .min(1, "Veuillez sélectionner une date")
    .refine((date) => {
      const appointmentDate = new Date(date);
      const today = new Date();
      const maxDate = new Date();
      maxDate.setMonth(maxDate.getMonth() + 3);
      
      return appointmentDate >= today && appointmentDate <= maxDate;
    }, "La date doit être comprise entre aujourd'hui et dans 3 mois"),
    
  preferredTime: z
    .string()
    .regex(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/, "Format d'heure invalide"),
    
  alternativeDate: z
    .string()
    .optional(),
    
  alternativeTime: z
    .string()
    .regex(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/, "Format d'heure invalide")
    .optional(),
    
  // Informations personnelles
  firstName: z
    .string()
    .min(2, "Le prénom est requis")
    .max(50, "Le prénom est trop long"),
    
  lastName: z
    .string()
    .min(2, "Le nom est requis")
    .max(50, "Le nom est trop long"),
    
  ...contactSchema.shape,
  
  // Motif détaillé
  purpose: z
    .string()
    .min(10, "Veuillez décrire en détail l'objet de votre visite")
    .max(1000, "La description est trop longue"),
    
  documents: z
    .array(z.string())
    .min(1, "Veuillez préciser les documents que vous apporterez"),
    
  // Accessibilité
  needsAccessibility: z.boolean().default(false),
  accessibilityDetails: z
    .string()
    .max(500, "Les détails d'accessibilité sont trop longs")
    .optional(),
    
  // Accompagnants
  numberOfAccompanying: z
    .number()
    .int("Le nombre d'accompagnants doit être un entier")
    .min(0, "Le nombre ne peut être négatif")
    .max(3, "Maximum 3 accompagnants autorisés")
    .default(0)
});

// Schema pour contact/support
export const contactFormSchema = z.object({
  firstName: z
    .string()
    .min(2, "Le prénom est requis")
    .max(50, "Le prénom est trop long"),
    
  lastName: z
    .string()
    .min(2, "Le nom est requis")
    .max(50, "Le nom est trop long"),
    
  ...contactSchema.shape,
  
  subject: z.enum([
    'inscription',
    'etat-civil',
    'passeport',
    'protection',
    'autre'
  ], {
    errorMap: () => ({ message: "Veuillez sélectionner un sujet" })
  }),
  
  priority: z.enum(['normal', 'urgent', 'emergency']).default('normal'),
  
  message: z
    .string()
    .min(20, "Le message doit contenir au moins 20 caractères")
    .max(2000, "Le message est trop long"),
    
  attachments: z
    .array(z.object({
      name: z.string(),
      size: z.number().max(10 * 1024 * 1024, "Fichier trop volumineux (max 10MB)"),
      type: z.string()
    }))
    .max(5, "Maximum 5 fichiers autorisés")
    .default([]),
    
  // Consentement RGPD
  consentDataProcessing: z
    .boolean()
    .refine((val) => val === true, "Vous devez consentir au traitement de vos données"),
    
  consentCommunication: z.boolean().default(false)
});

// Schema pour newsletter/communications
export const newsletterSchema = z.object({
  email: z
    .string()
    .min(1, "L'email est requis")
    .email("Format d'email invalide"),
    
  firstName: z
    .string()
    .min(2, "Le prénom est requis")
    .max(50, "Le prénom est trop long")
    .optional(),
    
  interests: z
    .array(z.enum([
      'services',
      'events',
      'news',
      'diaspora',
      'culture'
    ]))
    .min(1, "Sélectionnez au moins un centre d'intérêt"),
    
  frequency: z.enum(['weekly', 'monthly', 'quarterly']).default('monthly'),
  
  consentMarketing: z
    .boolean()
    .refine((val) => val === true, "Vous devez consentir à recevoir nos communications")
});

// Types TypeScript générés
export type InscriptionFormData = z.infer<typeof inscriptionSchema>;
export type DocumentRequestData = z.infer<typeof documentRequestSchema>;
export type AppointmentData = z.infer<typeof appointmentSchema>;
export type ContactFormData = z.infer<typeof contactFormSchema>;
export type NewsletterData = z.infer<typeof newsletterSchema>;

// Helpers de validation
export function validateWithSchema<T>(
  schema: z.ZodSchema<T>, 
  data: unknown
): { success: true; data: T } | { success: false; errors: z.ZodIssue[] } {
  try {
    const validData = schema.parse(data);
    return { success: true, data: validData };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return { success: false, errors: error.issues };
    }
    throw error;
  }
}

// Validation en temps réel pour champs spécifiques
export const fieldValidators = {
  email: (value: string) => {
    try {
      z.string().email().parse(value);
      return { isValid: true };
    } catch {
      return { isValid: false, message: "Format d'email invalide" };
    }
  },
  
  phone: (value: string) => {
    try {
      contactSchema.shape.phone.parse(value);
      return { isValid: true };
    } catch {
      return { isValid: false, message: "Format de téléphone invalide" };
    }
  },
  
  postalCode: (value: string) => {
    try {
      z.string().regex(/^\d{5}$/).parse(value);
      return { isValid: true };
    } catch {
      return { isValid: false, message: "Code postal français requis (5 chiffres)" };
    }
  },
  
  passport: (value: string) => {
    try {
      z.string().regex(/^[A-Z]{2}\d{7}$/).parse(value);
      return { isValid: true };
    } catch {
      return { isValid: false, message: "Format: GA1234567" };
    }
  }
};