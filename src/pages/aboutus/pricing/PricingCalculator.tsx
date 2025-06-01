import React, { useState } from 'react';
import {
  HiCalculator,
  HiUsers,
  HiCog,
  HiGlobe,
  HiClock,
  HiCurrencyDollar,
  HiCheckCircle,
  HiInformationCircle,
  HiArrowRight,
  HiDownload,
  HiMail,
  HiLightningBolt,
  HiShieldCheck,
  HiSupport
} from 'react-icons/hi';

// Import types and data from the types file
import {
  FormData,
  PricingResult,
  companySizeOptions,
  complexityOptions,
  integrationOptions,
  timelineOptions,
  additionalFeatureOptions,
  calculatePricing,
  formatCurrency
} from './types';

const PricingCalculator: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    companySize: 'sme',
    useCaseComplexity: 'intermediate',
    integrationLevel: 'standard',
    timelinePreference: 'standard',
    additionalFeatures: [],
    supportLevel: 'standard'
  });

  const [currentStep, setCurrentStep] = useState<number>(0);
  const [pricingResult, setPricingResult] = useState<PricingResult | null>(null);
  const [showResult, setShowResult] = useState<boolean>(false);

  const steps = [
    { title: 'Company Size', titleSwahili: 'Ukubwa wa Kampuni', icon: <HiUsers className="w-5 h-5" /> },
    { title: 'Use Case', titleSwahili: 'Matumizi', icon: <HiCog className="w-5 h-5" /> },
    { title: 'Integration', titleSwahili: 'Muunganisho', icon: <HiGlobe className="w-5 h-5" /> },
    { title: 'Timeline', titleSwahili: 'Mipango', icon: <HiClock className="w-5 h-5" /> },
    { title: 'Result', titleSwahili: 'Matokeo', icon: <HiCalculator className="w-5 h-5" /> }
  ];

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
    if (currentStep === steps.length - 2) {
      const result = calculatePricing(formData);
      setPricingResult(result);
      setShowResult(true);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      setShowResult(false);
    }
  };

  const handleFeatureToggle = (featureId: string) => {
    setFormData(prev => ({
      ...prev,
      additionalFeatures: prev.additionalFeatures.includes(featureId)
        ? prev.additionalFeatures.filter(f => f !== featureId)
        : [...prev.additionalFeatures, featureId]
    }));
  };

  const getStepContent = () => {
    switch (currentStep) {
      case 0:
        return (
          <div>
            <h3 className="text-2xl font-semibold text-gray-200 mb-6">What's your company size?</h3>
            <p className="text-orange-400 mb-8">Ukubwa wa kampuni yako ni upi?</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {companySizeOptions.map((option) => (
                <div
                  key={option.id}
                  className={`p-6 rounded-xl cursor-pointer transition-all duration-300 ${
                    formData.companySize === option.id
                      ? 'bg-orange-500/20 border-2 border-orange-500'
                      : 'bg-gray-800 border-2 border-gray-700 hover:border-gray-600'
                  }`}
                  onClick={() => setFormData(prev => ({ ...prev, companySize: option.id }))}
                >
                  <h4 className="font-semibold text-gray-100 mb-2">{option.label}</h4>
                  <p className="text-orange-400 text-sm mb-2">{option.labelSwahili}</p>
                  <p className="text-gray-300 text-sm mb-3">{option.description}</p>
                  <span className="text-gray-400 text-xs">{option.employees}</span>
                </div>
              ))}
            </div>
          </div>
        );

      case 1:
        return (
          <div>
            <h3 className="text-2xl font-semibold text-gray-200 mb-6">What's your use case complexity?</h3>
            <p className="text-orange-400 mb-8">Uchangamano wa matumizi yako ni wa aina gani?</p>
            <div className="space-y-4">
              {complexityOptions.map((option) => (
                <div
                  key={option.id}
                  className={`p-6 rounded-xl cursor-pointer transition-all duration-300 ${
                    formData.useCaseComplexity === option.id
                      ? 'bg-orange-500/20 border-2 border-orange-500'
                      : 'bg-gray-800 border-2 border-gray-700 hover:border-gray-600'
                  }`}
                  onClick={() => setFormData(prev => ({ ...prev, useCaseComplexity: option.id }))}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-100 mb-2">{option.label}</h4>
                      <p className="text-orange-400 text-sm mb-2">{option.labelSwahili}</p>
                      <p className="text-gray-300 text-sm mb-4">{option.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {option.features.map((feature, index) => (
                          <span key={index} className="px-2 py-1 bg-gray-700 text-gray-300 rounded text-xs">
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                    {formData.useCaseComplexity === option.id && (
                      <HiCheckCircle className="w-6 h-6 text-green-400 ml-4" />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 2:
        return (
          <div>
            <h3 className="text-2xl font-semibold text-gray-200 mb-6">What integration level do you need?</h3>
            <p className="text-orange-400 mb-8">Unahitaji kiwango gani cha muunganisho?</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {integrationOptions.map((option) => (
                <div
                  key={option.id}
                  className={`p-6 rounded-xl cursor-pointer transition-all duration-300 ${
                    formData.integrationLevel === option.id
                      ? 'bg-orange-500/20 border-2 border-orange-500'
                      : 'bg-gray-800 border-2 border-gray-700 hover:border-gray-600'
                  }`}
                  onClick={() => setFormData(prev => ({ ...prev, integrationLevel: option.id }))}
                >
                  <h4 className="font-semibold text-gray-100 mb-2">{option.label}</h4>
                  <p className="text-orange-400 text-sm mb-2">{option.labelSwahili}</p>
                  <p className="text-gray-300 text-sm mb-4">{option.description}</p>
                  <div className="space-y-1">
                    {option.systems.map((system, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <HiCheckCircle className="w-3 h-3 text-green-400" />
                        <span className="text-gray-400 text-xs">{system}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 3:
        return (
          <div>
            <h3 className="text-2xl font-semibold text-gray-200 mb-6">What's your preferred timeline?</h3>
            <p className="text-orange-400 mb-8">Mipango yako ya wakati ni ipi?</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              {timelineOptions.map((option) => (
                <div
                  key={option.id}
                  className={`p-6 rounded-xl cursor-pointer transition-all duration-300 ${
                    formData.timelinePreference === option.id
                      ? 'bg-orange-500/20 border-2 border-orange-500'
                      : 'bg-gray-800 border-2 border-gray-700 hover:border-gray-600'
                  }`}
                  onClick={() => setFormData(prev => ({ ...prev, timelinePreference: option.id }))}
                >
                  <h4 className="font-semibold text-gray-100 mb-2">{option.label}</h4>
                  <p className="text-orange-400 text-sm mb-2">{option.labelSwahili}</p>
                  <p className="text-gray-300 text-sm mb-3">{option.description}</p>
                  <div className="flex items-center gap-2">
                    <HiClock className="w-4 h-4 text-blue-400" />
                    <span className="text-blue-400 font-semibold text-sm">{option.duration}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Additional Features */}
            <div className="mb-8">
              <h4 className="text-lg font-semibold text-gray-200 mb-4">Additional Features (Optional)</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {additionalFeatureOptions.map((feature) => (
                  <div
                    key={feature.id}
                    className={`p-4 rounded-lg cursor-pointer transition-all duration-300 ${
                      formData.additionalFeatures.includes(feature.id)
                        ? 'bg-blue-500/20 border-2 border-blue-500'
                        : 'bg-gray-800 border-2 border-gray-700 hover:border-gray-600'
                    }`}
                    onClick={() => handleFeatureToggle(feature.id)}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-gray-200 text-sm">{feature.label}</span>
                      <span className="text-blue-400 font-semibold text-sm">{formatCurrency(feature.cost)}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Support Level */}
            <div>
              <h4 className="text-lg font-semibold text-gray-200 mb-4">Support Level</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {['standard', 'premium', 'enterprise'].map((level) => (
                  <div
                    key={level}
                    className={`p-4 rounded-lg cursor-pointer transition-all duration-300 ${
                      formData.supportLevel === level
                        ? 'bg-green-500/20 border-2 border-green-500'
                        : 'bg-gray-800 border-2 border-gray-700 hover:border-gray-600'
                    }`}
                    onClick={() => setFormData(prev => ({ ...prev, supportLevel: level as any }))}
                  >
                    <h5 className="font-semibold text-gray-100 capitalize">{level}</h5>
                    <p className="text-gray-400 text-sm">
                      {level === 'standard' && 'Business hours support'}
                      {level === 'premium' && 'Extended hours + priority'}
                      {level === 'enterprise' && '24/7 dedicated support'}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 4:
        return showResult && pricingResult ? (
          <div>
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-orange-500 mb-4">Your Custom Quote</h3>
              <p className="text-orange-400">Nukuu yako ya Mahususi</p>
              <div className="flex items-center justify-center gap-2 mt-4">
                <div className="flex items-center gap-1">
                  <HiShieldCheck className="w-5 h-5 text-green-400" />
                  <span className="text-green-400 font-semibold">{pricingResult.confidence}% Confidence</span>
                </div>
                <span className="text-gray-500">•</span>
                <span className="text-blue-400">{pricingResult.timeline} delivery</span>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Cost Breakdown */}
              <div className="bg-gray-800 rounded-xl p-6">
                <h4 className="text-xl font-semibold text-gray-100 mb-6">Cost Breakdown</h4>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-center justify-between p-4 bg-gray-700 rounded-lg">
                    <div className="flex items-center gap-3">
                      <HiCog className="w-5 h-5 text-blue-400" />
                      <span className="text-gray-200">Implementation</span>
                    </div>
                    <span className="text-blue-400 font-semibold">{formatCurrency(pricingResult.implementationCost)}</span>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 bg-gray-700 rounded-lg">
                    <div className="flex items-center gap-3">
                      <HiLightningBolt className="w-5 h-5 text-purple-400" />
                      <span className="text-gray-200">Platform License (Annual)</span>
                    </div>
                    <span className="text-purple-400 font-semibold">{formatCurrency(pricingResult.platformLicensing)}</span>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 bg-gray-700 rounded-lg">
                    <div className="flex items-center gap-3">
                      <HiSupport className="w-5 h-5 text-green-400" />
                      <span className="text-gray-200">Managed Services (Monthly)</span>
                    </div>
                    <span className="text-green-400 font-semibold">{formatCurrency(pricingResult.managedServices)}</span>
                  </div>
                </div>

                <div className="border-t border-gray-600 pt-4">
                  <div className="flex items-center justify-between text-xl">
                    <span className="text-gray-100 font-semibold">Total Implementation:</span>
                    <span className="text-orange-500 font-bold">{formatCurrency(pricingResult.totalCost)}</span>
                  </div>
                  <div className="flex items-center justify-between mt-2 text-sm">
                    <span className="text-gray-400">In Kenyan Shillings:</span>
                    <span className="text-orange-400 font-semibold">{formatCurrency(pricingResult.totalCost, 'KES')}</span>
                  </div>
                </div>
              </div>

              {/* Savings & Benefits */}
              <div className="bg-gray-800 rounded-xl p-6">
                <h4 className="text-xl font-semibold text-gray-100 mb-6">Your Savings</h4>
                
                <div className="bg-green-900/20 rounded-lg p-6 mb-6 border border-green-500/30">
                  <div className="text-center">
                    <HiCurrencyDollar className="w-12 h-12 text-green-400 mx-auto mb-3" />
                    <div className="text-3xl font-bold text-green-400 mb-2">
                      {formatCurrency(pricingResult.savings)}
                    </div>
                    <p className="text-green-300">Saved vs Traditional Approach</p>
                    <p className="text-green-200 text-sm">Umeokoa kwa njia ya jadi</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-gray-700 rounded-lg">
                    <HiClock className="w-5 h-5 text-blue-400" />
                    <div>
                      <div className="text-gray-200 font-semibold">Faster Delivery</div>
                      <div className="text-gray-400 text-sm">{pricingResult.timeline} vs 18+ months</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 p-3 bg-gray-700 rounded-lg">
                    <HiShieldCheck className="w-5 h-5 text-green-400" />
                    <div>
                      <div className="text-gray-200 font-semibold">Proven Success</div>
                      <div className="text-gray-400 text-sm">{pricingResult.confidence}% success rate</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 p-3 bg-gray-700 rounded-lg">
                    <HiGlobe className="w-5 h-5 text-purple-400" />
                    <div>
                      <div className="text-gray-200 font-semibold">Multi-language</div>
                      <div className="text-gray-400 text-sm">English & Swahili ready</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Next Steps */}
            <div className="mt-8 bg-gradient-to-r from-orange-500/20 to-blue-500/20 rounded-xl p-8 border border-orange-500/30">
              <h4 className="text-xl font-semibold text-gray-100 mb-6 text-center">Ready to Move Forward?</h4>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3">
                  <HiMail className="w-5 h-5" />
                  Request Detailed Proposal
                </button>
                <button className="bg-transparent border-2 border-gray-600 text-gray-100 font-semibold px-8 py-3 rounded-lg hover:border-orange-500 hover:bg-orange-500/10 transition-all duration-300 flex items-center justify-center gap-3">
                  <HiDownload className="w-5 h-5" />
                  Download Quote PDF
                </button>
                <button className="bg-transparent border-2 border-blue-600 text-blue-400 font-semibold px-8 py-3 rounded-lg hover:border-blue-500 hover:bg-blue-500/10 transition-all duration-300">
                  Schedule Demo Call
                </button>
              </div>
            </div>
          </div>
        ) : null;

      default:
        return null;
    }
  };

  return (
    <div className="bg-gray-900 text-gray-100 p-8 rounded-2xl">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-orange-500 mb-4">Pricing Calculator</h2>
        <p className="text-gray-300 mb-2">Kikokotoo cha Bei</p>
        <p className="text-gray-400">Get an instant estimate for your Web3 transformation project</p>
      </div>

      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          {steps.map((step, index) => (
            <div key={index} className="flex items-center">
              <div className={`flex items-center justify-center w-10 h-10 rounded-full border-2 transition-all duration-300 ${
                index <= currentStep
                  ? 'bg-orange-500 border-orange-500 text-white'
                  : 'border-gray-600 text-gray-400'
              }`}>
                {index < currentStep ? (
                  <HiCheckCircle className="w-6 h-6" />
                ) : (
                  step.icon
                )}
              </div>
              <div className="ml-3 hidden sm:block">
                <div className={`text-sm font-semibold ${index <= currentStep ? 'text-gray-100' : 'text-gray-400'}`}>
                  {step.title}
                </div>
                <div className={`text-xs ${index <= currentStep ? 'text-orange-400' : 'text-gray-500'}`}>
                  {step.titleSwahili}
                </div>
              </div>
              {index < steps.length - 1 && (
                <div className={`w-12 h-0.5 mx-4 ${index < currentStep ? 'bg-orange-500' : 'bg-gray-600'}`} />
              )}
            </div>
          ))}
        </div>
        
        <div className="w-full bg-gray-700 rounded-full h-2">
          <div 
            className="bg-gradient-to-r from-orange-500 to-orange-600 h-2 rounded-full transition-all duration-500"
            style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
          />
        </div>
      </div>

      {/* Step Content */}
      <div className="min-h-96 mb-8">
        {getStepContent()}
      </div>

      {/* Navigation */}
      <div className="flex justify-between">
        <button
          onClick={handlePrevious}
          disabled={currentStep === 0}
          className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
            currentStep === 0
              ? 'bg-gray-700 text-gray-500 cursor-not-allowed'
              : 'bg-gray-700 text-gray-200 hover:bg-gray-600'
          }`}
        >
          Previous
        </button>
        
        <div className="text-center text-gray-500 text-sm">
          Step {currentStep + 1} of {steps.length}
        </div>

        <button
          onClick={handleNext}
          disabled={currentStep === steps.length - 1}
          className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
            currentStep === steps.length - 1
              ? 'bg-gray-700 text-gray-500 cursor-not-allowed'
              : 'bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white transform hover:scale-105'
          }`}
        >
          {currentStep === steps.length - 2 ? 'Calculate' : 'Next'}
          <HiArrowRight className="w-5 h-5" />
        </button>
      </div>

      {/* Quick Info */}
      {!showResult && (
        <div className="mt-8 bg-gray-800 rounded-xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <HiInformationCircle className="w-6 h-6 text-blue-400" />
            <h4 className="text-lg font-semibold text-gray-100">Quick Info</h4>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div>
              <span className="text-gray-400">Typical Range:</span>
              <div className="text-blue-400 font-semibold">$150K - $500K</div>
            </div>
            <div>
              <span className="text-gray-400">Average Timeline:</span>
              <div className="text-green-400 font-semibold">6 weeks</div>
            </div>
            <div>
              <span className="text-gray-400">ROI Timeline:</span>
              <div className="text-purple-400 font-semibold">3-6 months</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PricingCalculator;