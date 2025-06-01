import React, { useState } from 'react';
import { 
  HiArrowRight, 
  HiCheckCircle, 
  HiDownload,
  HiCalendar,
  HiCalculator,
  HiUsers,
  HiCog,
  HiGlobe,
  HiClock,
  HiStar,
  HiShieldCheck,
  HiTrendingUp
} from 'react-icons/hi';

const GettingStarted: React.FC = () => {
  const [assessmentStep, setAssessmentStep] = useState<number>(0);
  const [assessmentAnswers, setAssessmentAnswers] = useState<Record<string, string>>({});
  const [showResults, setShowResults] = useState<boolean>(false);

  const assessmentQuestions = [
    {
      id: 'industry',
      question: 'What industry is your business in?',
      questionSwahili: 'Biashara yako iko katika sekta gani?',
      options: [
        { id: 'manufacturing', label: 'Manufacturing', labelSwahili: 'Utengenezaji' },
        { id: 'retail', label: 'Retail & E-commerce', labelSwahili: 'Reja na Biashara za Mtandao' },
        { id: 'logistics', label: 'Logistics & Supply Chain', labelSwahili: 'Usafirishaji na Mlolongo wa Ugavi' },
        { id: 'finance', label: 'Financial Services', labelSwahili: 'Huduma za Kifedha' },
        { id: 'agriculture', label: 'Agriculture', labelSwahili: 'Kilimo' },
        { id: 'other', label: 'Other', labelSwahili: 'Nyingine' }
      ]
    },
    {
      id: 'size',
      question: 'What is your company size?',
      questionSwahili: 'Ukubwa wa kampuni yako ni upi?',
      options: [
        { id: 'startup', label: '1-10 employees', labelSwahili: 'Wafanyakazi 1-10' },
        { id: 'sme', label: '11-200 employees', labelSwahili: 'Wafanyakazi 11-200' },
        { id: 'enterprise', label: '201-1000 employees', labelSwahili: 'Wafanyakazi 201-1000' },
        { id: 'large', label: '1000+ employees', labelSwahili: 'Wafanyakazi 1000+' }
      ]
    },
    {
      id: 'challenge',
      question: 'What is your biggest business challenge?',
      questionSwahili: 'Changamoto kubwa zaidi ya biashara yako ni ipi?',
      options: [
        { id: 'transparency', label: 'Lack of transparency in operations', labelSwahili: 'Ukosefu wa uwazi katika shughuli' },
        { id: 'costs', label: 'High operational costs', labelSwahili: 'Gharama kubwa za uendeshaji' },
        { id: 'trust', label: 'Building customer trust', labelSwahili: 'Kujenga uaminifu wa wateja' },
        { id: 'payments', label: 'Slow/expensive payments', labelSwahili: 'Malipo ya polepole/ghali' },
        { id: 'fraud', label: 'Fraud and counterfeiting', labelSwahili: 'Udanganyifu na uongozi wa bidhaa' },
        { id: 'compliance', label: 'Regulatory compliance', labelSwahili: 'Kufuata sheria za serikali' }
      ]
    },
    {
      id: 'timeline',
      question: 'When do you want to implement a solution?',
      questionSwahili: 'Unataka kutekeleza suluhisho lini?',
      options: [
        { id: 'immediate', label: 'Immediately (within 1 month)', labelSwahili: 'Mara moja (ndani ya mwezi 1)' },
        { id: 'quarter', label: 'This quarter (1-3 months)', labelSwahili: 'Robo hii ya mwaka (miezi 1-3)' },
        { id: 'half-year', label: 'Within 6 months', labelSwahili: 'Ndani ya miezi 6' },
        { id: 'planning', label: 'Still planning (6+ months)', labelSwahili: 'Bado ninapanga (miezi 6+)' }
      ]
    },
    {
      id: 'budget',
      question: 'What is your implementation budget range?',
      questionSwahili: 'Bajeti yako ya utekelezaji ni ya bei gani?',
      options: [
        { id: 'small', label: 'Under $100K', labelSwahili: 'Chini ya $100K' },
        { id: 'medium', label: '$100K - $500K', labelSwahili: '$100K - $500K' },
        { id: 'large', label: '$500K - $1M', labelSwahili: '$500K - $1M' },
        { id: 'enterprise', label: '$1M+', labelSwahili: '$1M+' },
        { id: 'flexible', label: 'Flexible based on ROI', labelSwahili: 'Inabadilika kulingana na faida' }
      ]
    }
  ];

  const recommendations = {
    'manufacturing-sme-transparency': {
      useCase: 'Supply Chain Transparency',
      timeline: '6-8 weeks',
      investment: '$200K - $350K',
      roi: '340% within 12 months',
      nextSteps: ['Schedule technical assessment', 'Review integration requirements', 'Pilot program planning']
    },
    'retail-enterprise-trust': {
      useCase: 'Customer Loyalty Program',
      timeline: '4-6 weeks',
      investment: '$150K - $300K',
      roi: '280% within 8 months',
      nextSteps: ['Customer journey mapping', 'Partner network assessment', 'Tokenomics design']
    },
    'finance-large-payments': {
      useCase: 'Cross-Border Payments',
      timeline: '8-10 weeks',
      investment: '$400K - $600K',
      roi: '450% within 6 months',
      nextSteps: ['Regulatory compliance review', 'Banking partnership setup', 'Security audit']
    },
    'default': {
      useCase: 'Custom Solution',
      timeline: '6-12 weeks',
      investment: '$250K - $500K',
      roi: '300%+ within 12 months',
      nextSteps: ['Detailed requirements analysis', 'Custom solution design', 'Pilot implementation']
    }
  };

  const trustIndicators = [
    {
      category: 'Customer Logos',
      description: 'Leading enterprises across Africa',
      count: '150+',
      icon: <HiUsers className="w-6 h-6" />
    },
    {
      category: 'Security Certifications',
      description: 'SOC 2, ISO 27001 compliant',
      count: '5+',
      icon: <HiShieldCheck className="w-6 h-6" />
    },
    {
      category: 'Partner Integrations',
      description: 'ERP, CRM, Payment systems',
      count: '25+',
      icon: <HiCog className="w-6 h-6" />
    },
    {
      category: 'Success Rate',
      description: 'On-time, on-budget delivery',
      count: '98.5%',
      icon: <HiTrendingUp className="w-6 h-6" />
    }
  ];

  const handleAnswerSelect = (questionId: string, answerId: string) => {
    setAssessmentAnswers(prev => ({ ...prev, [questionId]: answerId }));
  };

  const handleNextQuestion = () => {
    if (assessmentStep < assessmentQuestions.length - 1) {
      setAssessmentStep(assessmentStep + 1);
    } else {
      setShowResults(true);
    }
  };

  const handlePreviousQuestion = () => {
    if (assessmentStep > 0) {
      setAssessmentStep(assessmentStep - 1);
    }
  };

  const getRecommendation = () => {
    const industry = assessmentAnswers.industry || 'default';
    const size = assessmentAnswers.size || 'default';
    const challenge = assessmentAnswers.challenge || 'default';
    const key = `${industry}-${size}-${challenge}`;
    return recommendations[key as keyof typeof recommendations] || recommendations.default;
  };

  const currentQuestion = assessmentQuestions[assessmentStep];
  const currentAnswer = assessmentAnswers[currentQuestion?.id];
  const recommendation = getRecommendation();

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-orange-500 mb-6">
            Getting Started
          </h2>
          <p className="text-xl text-gray-300 mb-4">
            Find the perfect Web3 solution for your business
          </p>
          <p className="text-orange-400">
            Pata suluhisho kamili la Web3 kwa biashara yako
          </p>
        </div>

        {/* Interactive Assessment Tool */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="bg-gray-800 rounded-2xl p-8">
            <h3 className="text-2xl font-semibold text-gray-100 mb-8 text-center">
              Business Assessment Tool
            </h3>

            {!showResults ? (
              <div>
                {/* Progress Bar */}
                <div className="mb-8">
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-400 text-sm">
                      Question {assessmentStep + 1} of {assessmentQuestions.length}
                    </span>
                    <span className="text-gray-400 text-sm">
                      {Math.round(((assessmentStep + 1) / assessmentQuestions.length) * 100)}% Complete
                    </span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-orange-500 to-orange-600 h-2 rounded-full transition-all duration-500"
                      style={{ width: `${((assessmentStep + 1) / assessmentQuestions.length) * 100}%` }}
                    />
                  </div>
                </div>

                {/* Question */}
                <div className="mb-8">
                  <h4 className="text-xl font-semibold text-gray-100 mb-2">
                    {currentQuestion.question}
                  </h4>
                  <p className="text-orange-400">{currentQuestion.questionSwahili}</p>
                </div>

                {/* Options */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  {currentQuestion.options.map((option) => (
                    <button
                      key={option.id}
                      onClick={() => handleAnswerSelect(currentQuestion.id, option.id)}
                      className={`p-4 rounded-lg text-left transition-all duration-300 ${
                        currentAnswer === option.id
                          ? 'bg-orange-500/20 border-2 border-orange-500'
                          : 'bg-gray-700 border-2 border-gray-600 hover:border-gray-500'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-4 h-4 rounded-full border-2 ${
                          currentAnswer === option.id
                            ? 'bg-orange-500 border-orange-500'
                            : 'border-gray-400'
                        }`}>
                          {currentAnswer === option.id && (
                            <div className="w-full h-full rounded-full bg-white scale-50"></div>
                          )}
                        </div>
                        <div>
                          <div className="font-semibold text-gray-100">{option.label}</div>
                          <div className="text-orange-400 text-sm">{option.labelSwahili}</div>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>

                {/* Navigation */}
                <div className="flex justify-between">
                  <button
                    onClick={handlePreviousQuestion}
                    disabled={assessmentStep === 0}
                    className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                      assessmentStep === 0
                        ? 'bg-gray-600 text-gray-400 cursor-not-allowed'
                        : 'bg-gray-700 text-gray-200 hover:bg-gray-600'
                    }`}
                  >
                    Previous
                  </button>
                  
                  <button
                    onClick={handleNextQuestion}
                    disabled={!currentAnswer}
                    className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                      !currentAnswer
                        ? 'bg-gray-600 text-gray-400 cursor-not-allowed'
                        : 'bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white transform hover:scale-105'
                    }`}
                  >
                    {assessmentStep === assessmentQuestions.length - 1 ? 'Get Recommendations' : 'Next'}
                    <HiArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ) : (
              /* Results */
              <div>
                <div className="text-center mb-8">
                  <div className="bg-green-500/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <HiCheckCircle className="w-8 h-8 text-green-400" />
                  </div>
                  <h4 className="text-2xl font-bold text-gray-100 mb-2">
                    Assessment Complete!
                  </h4>
                  <p className="text-gray-300">Here's your personalized recommendation</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Recommendation */}
                  <div className="bg-gray-700/50 rounded-xl p-6">
                    <h5 className="text-lg font-semibold text-orange-500 mb-4">Recommended Solution</h5>
                    <div className="space-y-4">
                      <div>
                        <span className="text-gray-400 text-sm">Use Case:</span>
                        <div className="text-gray-100 font-semibold">{recommendation.useCase}</div>
                      </div>
                      <div>
                        <span className="text-gray-400 text-sm">Implementation Timeline:</span>
                        <div className="text-gray-100 font-semibold">{recommendation.timeline}</div>
                      </div>
                      <div>
                        <span className="text-gray-400 text-sm">Investment Range:</span>
                        <div className="text-gray-100 font-semibold">{recommendation.investment}</div>
                      </div>
                      <div>
                        <span className="text-gray-400 text-sm">Expected ROI:</span>
                        <div className="text-green-400 font-semibold">{recommendation.roi}</div>
                      </div>
                    </div>
                  </div>

                  {/* Next Steps */}
                  <div className="bg-gray-700/50 rounded-xl p-6">
                    <h5 className="text-lg font-semibold text-blue-400 mb-4">Next Steps</h5>
                    <div className="space-y-3">
                      {recommendation.nextSteps.map((step, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <div className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                            {index + 1}
                          </div>
                          <span className="text-gray-300">{step}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-8 text-center">
                  <button
                    onClick={() => {
                      setShowResults(false);
                      setAssessmentStep(0);
                      setAssessmentAnswers({});
                    }}
                    className="bg-gray-700 text-gray-200 px-6 py-3 rounded-lg hover:bg-gray-600 transition-colors mr-4"
                  >
                    Retake Assessment
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Next Steps */}
        <div className="mb-20">
          <h3 className="text-2xl font-semibold text-gray-200 mb-8 text-center">
            Choose Your Next Step
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Start Transformation */}
            <div className="bg-gradient-to-br from-orange-500/20 to-orange-600/20 rounded-xl p-8 border border-orange-500/30 text-center">
              <div className="bg-orange-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <HiTrendingUp className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-gray-100 mb-4">Start Your Transformation</h4>
              <p className="text-gray-300 mb-6 text-sm">
                Begin your 6-week Web3 implementation journey
              </p>
              <button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold py-3 rounded-lg transition-all duration-300 transform hover:scale-105">
                Get Started
              </button>
            </div>

            {/* Download Guide */}
            <div className="bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-xl p-8 border border-blue-500/30 text-center">
              <div className="bg-blue-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <HiDownload className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-gray-100 mb-4">Download Use Case Guide</h4>
              <p className="text-gray-300 mb-6 text-sm">
                Comprehensive guide with implementation details
              </p>
              <button className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold py-3 rounded-lg transition-all duration-300 transform hover:scale-105">
                Download PDF
              </button>
            </div>

            {/* See Demo */}
            <div className="bg-gradient-to-br from-purple-500/20 to-purple-600/20 rounded-xl p-8 border border-purple-500/30 text-center">
              <div className="bg-purple-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <HiCalendar className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-gray-100 mb-4">See Live Demo</h4>
              <p className="text-gray-300 mb-6 text-sm">
                Schedule a personalized demonstration
              </p>
              <button className="w-full bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white font-semibold py-3 rounded-lg transition-all duration-300 transform hover:scale-105">
                Book Demo
              </button>
            </div>

            {/* Calculate ROI */}
            <div className="bg-gradient-to-br from-green-500/20 to-green-600/20 rounded-xl p-8 border border-green-500/30 text-center">
              <div className="bg-green-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <HiCalculator className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-gray-100 mb-4">Calculate Your ROI</h4>
              <p className="text-gray-300 mb-6 text-sm">
                Interactive tool to estimate your savings
              </p>
              <button className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold py-3 rounded-lg transition-all duration-300 transform hover:scale-105">
                Calculate ROI
              </button>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-200 mb-8 text-center">
            Trusted by Industry Leaders
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {trustIndicators.map((indicator, index) => (
              <div key={index} className="bg-gray-800 rounded-xl p-6 text-center">
                <div className="text-orange-500 mb-3 flex justify-center">
                  {indicator.icon}
                </div>
                <div className="text-2xl font-bold text-gray-100 mb-2">{indicator.count}</div>
                <div className="text-sm font-semibold text-gray-200 mb-1">{indicator.category}</div>
                <div className="text-gray-400 text-xs">{indicator.description}</div>
              </div>
            ))}
          </div>

          {/* Partner Logos Placeholder */}
          <div className="bg-gray-800/50 rounded-xl p-8">
            <h4 className="text-lg font-semibold text-gray-200 mb-6 text-center">
              Integration Partners
            </h4>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 opacity-60">
              {['Salesforce', 'SAP', 'Oracle', 'Microsoft', 'Flutterwave', 'M-Pesa'].map((partner, index) => (
                <div key={index} className="bg-gray-700 rounded-lg p-4 text-center">
                  <div className="text-gray-400 font-semibold text-sm">{partner}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GettingStarted;