export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  role: string;
  company: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    quote: 'MarkyDev transformed our outdated website into a modern, lead-generating machine. We saw a 45% increase in qualified leads within the first month.',
    name: 'Sarah Cruz',
    role: 'CEO',
    company: 'Pacific Realty Group',
    rating: 5,
  },
  {
    id: '2',
    quote: 'The automation they built saves our team 20 hours a week on invoice processing. Incredible ROI and the team was responsive throughout.',
    name: 'James Santos',
    role: 'Operations Manager',
    company: 'QuickShip Logistics',
    rating: 5,
  },
  {
    id: '3',
    quote: 'Our AI chatbot handles customer inquiries 24/7 now. Support tickets dropped by 80% and our customers love the instant responses.',
    name: 'Maria Dela Rosa',
    role: 'Head of Support',
    company: 'TechMart PH',
    rating: 5,
  },
  {
    id: '4',
    quote: 'From design to launch in just 10 days. The e-commerce site they built for us tripled our online revenue. Highly recommend!',
    name: 'David Lee',
    role: 'Founder',
    company: 'Manila Fresh Market',
    rating: 5,
  },
  {
    id: '5',
    quote: 'Professional, fast, and they actually listen. They nailed our brand identity and built a site that converts visitors into customers.',
    name: 'Angela Reyes',
    role: 'Marketing Director',
    company: 'FitTrack Pro',
    rating: 4,
  },
  {
    id: '6',
    quote: 'The onboarding AI agent they created reduced our new hire ramp-up time by 60%. It\'s like having an HR assistant that never sleeps.',
    name: 'Robert Tan',
    role: 'HR Manager',
    company: 'CloudScale Solutions',
    rating: 5,
  },
];
