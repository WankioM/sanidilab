// src/pages/aboutus/usecases/index.ts
// Central export file for all use cases components

export { default as UseCases } from './UseCases';
export { default as UseCasesHero } from './UseCasesHero';
export { default as PrimaryUseCases } from './PrimaryUseCases';
export { default as IndustrySpecific } from './IndustrySpecific';
export { default as ImplementationShowcase } from './ImplementationShowcase';
export { default as CustomerMetrics } from './CustomerMetrics';
export { default as TechnicalSpecs } from './TechnicalSpecs';
export { default as GettingStarted } from './GettingStarted';

// Export types for external use
export type { Industry, UseCase, UseCaseData, IndustryData } from './UseCases';