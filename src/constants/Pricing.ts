import { Pricing } from "@/types/interfaces";

export const PricingItems: Pricing[] = [
  {
    title: "Freelancer",
    desc: "The essentials to provide your best work for your clients.",
    monthPrice: 15,
    yearPrice: 144,
    features: [
      "5 products",
      "Up to 1,000 subscribers",
      "Basic analytics",
      "48-hour support response time",
    ],
    glowPosition: "right",
  },
  {
    title: "Startup",
    desc: "A plan that scales with your rapidly growing business.",
    monthPrice: 30,
    yearPrice: 288,
    features: [
      "25 products",
      "Up to 10,000 subscribers",
      "Advanced analytics",
      "24-hour support response time",
      "Marketing automations",
    ],
    isMostPopular: true,
  },
  {
    title: "Enterprise",
    desc: "Dedicated support and infrastructure for your company.",
    monthPrice: 48,
    yearPrice: 576,
    features: [
      "Unlimited products",
      "Unlimited subscribers",
      "Advanced analytics",
      "1-hour, dedicated support response time",
      "Marketing automations",
      "Custom reporting tools",
    ],
    glowPosition: "left",
  },
];
