export interface Clients {
  imageUrl: string;
  alt: string;
}
export interface Feature {
  imageUrl: string;
  title: string;
  content: string;
  isReversed?: boolean;
}
export interface Pricing {
  title: string;
  desc: string;
  monthPrice: number;
  yearPrice: number;
  features: string[];
  isMostPopular?: boolean;
  glowPosition?: "right" | "left";
}

export interface Testimonials {
  imageUrl: string;
  name: string;
  role: string;
  review: string;
}

export type PricingMode = "monthly" | "annually";
