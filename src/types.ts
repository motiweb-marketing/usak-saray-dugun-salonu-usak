export interface ServiceItem {
  id: string;
  category: "all" | "wedding" | "engagement-henna" | "corporate";
  badge: string;
  title: string;
  description: string;
  imageUrl: string;
  features: string[];
}

export interface PackageItem {
  id: string;
  name: string;
  capacity: string;
  badge?: string;
  priceTag?: string;
  features: string[];
}

export interface AdvantageItem {
  iconName: string; // lucide icon identifier
  title: string;
  description: string;
  assuranceTag: string;
}

export interface ProcessStep {
  stepNumber: number;
  title: string;
  description: string;
}

export interface GalleryItem {
  id: string;
  category: "interior" | "decoration" | "henna" | "exterior";
  categoryLabel: string;
  title: string;
  imageUrl: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  location: string; // e.g., "Çankaya, Ankara"
  text: string;
  rating: number; // e.g., 5
  date: string; // e.g., "Eylül 2025"
}

export type EventType = "wedding" | "engagement" | "henna" | "circumcision" | "corporate" | "other";

export interface ReservationFormData {
  fullName: string;
  phone: string;
  eventType: EventType;
  date: string;
  guestCount: string;
  note: string;
}
