// Types and interfaces for the pricing calculator
export type CompanySize = 'startup' | 'sme' | 'enterprise' | 'large-enterprise';
export type UseCaseComplexity = 'basic' | 'intermediate' | 'advanced' | 'custom';
export type IntegrationLevel = 'minimal' | 'standard' | 'comprehensive' | 'full-stack';
export type TimelinePreference = 'standard' | 'accelerated' | 'extended';

export interface FormData {
  companySize: CompanySize;
  useCaseComplexity: UseCaseComplexity;
  integrationLevel: IntegrationLevel;
  timelinePreference: TimelinePreference;
  additionalFeatures: string[];
  supportLevel: 'standard' | 'premium' | 'enterprise';
}

export interface PricingResult {
  implementationCost: number;
  platformLicensing: number;
  managedServices: number;
  totalCost: number;
  timeline: string;
  savings: number;
  confidence: number;
}

export interface CompanySizeOption {
  id: CompanySize;
  label: string;
  labelSwahili: string;
  description: string;
  employees: string;
  multiplier: number;
}

export interface ComplexityOption {
  id: UseCaseComplexity;
  label: string;
  labelSwahili: string;
  description: string;
  features: string[];
  multiplier: number;
}

export interface IntegrationOption {
  id: IntegrationLevel;
  label: string;
  labelSwahili: string;
  description: string;
  systems: string[];
  multiplier: number;
}

export interface TimelineOption {
  id: TimelinePreference;
  label: string;
  labelSwahili: string;
  description: string;
  duration: string;
  multiplier: number;
}

export interface AdditionalFeature {
  id: string;
  label: string;
  cost: number;
}

// Data constants
export const companySizeOptions: CompanySizeOption[] = [
  {
    id: 'startup',
    label: 'Startup',
    labelSwahili: 'Biashara Mpya',
    description: 'Early stage company with basic Web3 needs',
    employees: '1-10 employees',
    multiplier: 0.5
  },
  {
    id: 'sme',
    label: 'Small & Medium Enterprise',
    labelSwahili: 'Biashara Ndogo na za Kati',
    description: 'Established business looking to modernize',
    employees: '11-200 employees',
    multiplier: 1.0
  },
  {
    id: 'enterprise',
    label: 'Enterprise',
    labelSwahili: 'Shirika Kubwa',
    description: 'Large organization with complex requirements',
    employees: '201-1000 employees',
    multiplier: 1.8
  },
  {
    id: 'large-enterprise',
    label: 'Large Enterprise',
    labelSwahili: 'Shirika Kubwa Sana',
    description: 'Multi-national corporation with extensive needs',
    employees: '1000+ employees',
    multiplier: 3.0
  }
];

export const complexityOptions: ComplexityOption[] = [
  {
    id: 'basic',
    label: 'Basic Implementation',
    labelSwahili: 'Utekelezaji wa Kimsingi',
    description: 'Simple smart contracts and basic features',
    features: ['Token creation', 'Basic transfers', 'Simple reporting'],
    multiplier: 0.7
  },
  {
    id: 'intermediate',
    label: 'Intermediate Solution',
    labelSwahili: 'Suluhisho la Kati',
    description: 'Multiple use cases with moderate complexity',
    features: ['Multi-token support', 'Advanced workflows', 'Analytics dashboard'],
    multiplier: 1.0
  },
  {
    id: 'advanced',
    label: 'Advanced Platform',
    labelSwahili: 'Jukwaa la Hali ya Juu',
    description: 'Complex business logic and integrations',
    features: ['Custom smart contracts', 'Multi-chain support', 'Advanced analytics'],
    multiplier: 1.5
  },
  {
    id: 'custom',
    label: 'Custom Development',
    labelSwahili: 'Maendeleo ya Mahususi',
    description: 'Fully customized solution with unique requirements',
    features: ['Bespoke architecture', 'Custom protocols', 'White-label solution'],
    multiplier: 2.2
  }
];

export const integrationOptions: IntegrationOption[] = [
  {
    id: 'minimal',
    label: 'Minimal Integration',
    labelSwahili: 'Muunganisho wa Chini',
    description: 'Basic API connections only',
    systems: ['1-2 systems', 'REST API only'],
    multiplier: 0.6
  },
  {
    id: 'standard',
    label: 'Standard Integration',
    labelSwahili: 'Muunganisho wa Kawaida',
    description: 'Connect core business systems',
    systems: ['CRM integration', 'Payment gateway', 'Basic ERP'],
    multiplier: 1.0
  },
  {
    id: 'comprehensive',
    label: 'Comprehensive Integration',
    labelSwahili: 'Muunganisho wa Kina',
    description: 'Full ecosystem integration',
    systems: ['Multiple CRMs', 'ERP systems', 'Payment gateways', 'Analytics tools'],
    multiplier: 1.4
  },
  {
    id: 'full-stack',
    label: 'Full-Stack Integration',
    labelSwahili: 'Muunganisho wa Kila Kitu',
    description: 'Complete digital transformation',
    systems: ['All business systems', 'Legacy modernization', 'Data migration'],
    multiplier: 2.0
  }
];

export const timelineOptions: TimelineOption[] = [
  {
    id: 'standard',
    label: 'Standard Timeline',
    labelSwahili: 'Mipango ya Kawaida',
    description: 'Our proven 6-week implementation',
    duration: '6 weeks',
    multiplier: 1.0
  },
  {
    id: 'accelerated',
    label: 'Accelerated Delivery',
    labelSwahili: 'Uongezaji wa Kasi',
    description: 'Faster implementation with dedicated resources',
    duration: '4 weeks',
    multiplier: 1.3
  },
  {
    id: 'extended',
    label: 'Extended Timeline',
    labelSwahili: 'Mipango ya Mrefu',
    description: 'Gradual rollout with extensive testing',
    duration: '8-10 weeks',
    multiplier: 0.8
  }
];

export const additionalFeatureOptions: AdditionalFeature[] = [
  { id: 'multi-language', label: 'Additional Language Support', cost: 15000 },
  { id: 'white-label', label: 'White-label Solution', cost: 25000 },
  { id: 'mobile-app', label: 'Mobile Application', cost: 40000 },
  { id: 'advanced-analytics', label: 'Advanced Analytics Package', cost: 20000 },
  { id: 'compliance-toolkit', label: 'Compliance Toolkit', cost: 30000 },
  { id: 'custom-branding', label: 'Custom Branding & UI', cost: 18000 }
];

// Utility functions
export const calculatePricing = (formData: FormData): PricingResult => {
  const baseCost = 200000; // Base implementation cost in USD
  
  const sizeMultiplier = companySizeOptions.find(o => o.id === formData.companySize)?.multiplier || 1;
  const complexityMultiplier = complexityOptions.find(o => o.id === formData.useCaseComplexity)?.multiplier || 1;
  const integrationMultiplier = integrationOptions.find(o => o.id === formData.integrationLevel)?.multiplier || 1;
  const timelineMultiplier = timelineOptions.find(o => o.id === formData.timelinePreference)?.multiplier || 1;

  const implementationCost = Math.round(baseCost * sizeMultiplier * complexityMultiplier * integrationMultiplier * timelineMultiplier);
  
  // Additional features cost
  const additionalCost = formData.additionalFeatures.reduce((total, featureId) => {
    const feature = additionalFeatureOptions.find(f => f.id === featureId);
    return total + (feature?.cost || 0);
  }, 0);

  // Platform licensing (annual)
  const platformLicensing = Math.round((implementationCost * 0.2) + (sizeMultiplier * 15000));
  
  // Managed services (monthly)
  const managedServices = Math.round((implementationCost * 0.08) + (sizeMultiplier * 3000));

  const totalCost = implementationCost + additionalCost;
  
  // Calculate timeline
  const timelineOption = timelineOptions.find(o => o.id === formData.timelinePreference);
  const timeline = timelineOption?.duration || '6 weeks';

  // Calculate savings compared to traditional approach
  const traditionalCost = implementationCost * 3.5; // Traditional costs are typically 3.5x higher
  const savings = traditionalCost - totalCost;

  // Confidence level based on complexity and size
  const confidence = Math.max(75, 95 - (complexityMultiplier * 8) - (sizeMultiplier * 3));

  return {
    implementationCost: totalCost,
    platformLicensing,
    managedServices,
    totalCost,
    timeline,
    savings,
    confidence: Math.round(confidence)
  };
};

export const formatCurrency = (amount: number, currency: 'USD' | 'KES' = 'USD'): string => {
  if (currency === 'KES') {
    return `KES ${(amount * 130).toLocaleString()}`;
  }
  return `$${amount.toLocaleString()}`;
};