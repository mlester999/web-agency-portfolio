export interface Package {
  id: string;
  name: string;
  tagline: string;
  price: { PHP: number; USD: number };
  features: string[];
  delivery: string;
  ideal: string;
  popular: boolean;
}

export const packages: Package[] = [
  {
    id: 'starter',
    name: 'Starter',
    tagline: 'Perfect for new businesses getting online',
    price: { PHP: 15000, USD: 299 },
    features: [
      '1-page responsive website',
      'Mobile-first design',
      'Basic SEO setup',
      'Contact form integration',
      'Social media links',
      '7-day delivery',
    ],
    delivery: '3–5 days',
    ideal: 'Freelancers & new businesses',
    popular: false,
  },
  {
    id: 'business',
    name: 'Business',
    tagline: 'For brands that want to stand out and convert',
    price: { PHP: 35000, USD: 699 },
    features: [
      'Multi-page responsive website',
      'Custom design & branding',
      'Advanced SEO optimization',
      'Lead capture & automation',
      'CMS integration',
      'Analytics dashboard',
      'Speed optimization',
      '14-day delivery',
    ],
    delivery: '7–14 days',
    ideal: 'Growing businesses & startups',
    popular: true,
  },
  {
    id: 'premium',
    name: 'Premium',
    tagline: 'Full-stack solutions for scaling brands',
    price: { PHP: 75000, USD: 1499 },
    features: [
      'Everything in Business',
      'E-commerce / booking system',
      'AI chatbot integration',
      'Custom automation workflows',
      'Database & API development',
      'Priority support for 30 days',
      'Performance monitoring',
      '21-day delivery',
    ],
    delivery: '14–21 days',
    ideal: 'E-commerce & enterprise clients',
    popular: false,
  },
];
