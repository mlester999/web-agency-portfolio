export interface Project {
  id: string;
  title: string;
  description: string;
  category: 'Websites' | 'Automation' | 'AI Agents';
  tags: string[];
  result: string;
  initial: string;
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'Manila Fresh Market',
    description: 'E-commerce platform for a local organic food delivery service with real-time order tracking.',
    category: 'Websites',
    tags: ['Next.js', 'E-commerce', 'Stripe'],
    result: '3x increase in online orders',
    initial: 'M',
  },
  {
    id: '2',
    title: 'Pacific Realty Group',
    description: 'Modern real estate website with property listings, virtual tours, and lead capture automation.',
    category: 'Websites',
    tags: ['React', 'CMS', 'Lead Gen'],
    result: '45% more qualified leads',
    initial: 'P',
  },
  {
    id: '3',
    title: 'InvoiceFlow Automation',
    description: 'Automated invoice processing pipeline that reduced manual work by 90% for a logistics company.',
    category: 'Automation',
    tags: ['n8n', 'Google Sheets', 'Email'],
    result: '90% reduction in manual work',
    initial: 'I',
  },
  {
    id: '4',
    title: 'SupportBot AI',
    description: 'AI-powered customer support agent that handles 80% of inquiries without human intervention.',
    category: 'AI Agents',
    tags: ['GPT-4', 'Custom API', 'WhatsApp'],
    result: '80% ticket auto-resolution',
    initial: 'S',
  },
  {
    id: '5',
    title: 'FitTrack Pro',
    description: 'Fitness coaching platform with workout tracking, progress dashboards, and client management.',
    category: 'Websites',
    tags: ['Next.js', 'Dashboard', 'Stripe'],
    result: '200+ active users in month 1',
    initial: 'F',
  },
  {
    id: '6',
    title: 'OnboardAI Agent',
    description: 'Intelligent employee onboarding assistant that guides new hires through company processes.',
    category: 'AI Agents',
    tags: ['LangChain', 'RAG', 'Slack Bot'],
    result: '60% faster onboarding',
    initial: 'O',
  },
];
