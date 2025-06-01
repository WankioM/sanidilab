import React, { useState } from 'react';
import { 

  HiCheckCircle, 
  HiCalculator,
  HiArrowRight,
  HiPlay,
  HiChartBar
} from 'react-icons/hi';
import { HiExclamationCircle } from "react-icons/hi2";
import { UseCase, UseCaseData } from './UseCases';

interface PrimaryUseCasesProps {
  useCases: UseCaseData[];
  selectedUseCase: UseCase;
  onUseCaseChange: (useCase: UseCase) => void;
}

const PrimaryUseCases: React.FC<PrimaryUseCasesProps> = ({
  useCases,
  selectedUseCase,
  onUseCaseChange
}) => {
  const [showCalculator, setShowCalculator] = useState<UseCase | null>(null);
  const activeUseCase = useCases.find(uc => uc.id === selectedUseCase);

  const ROICalculator: React.FC<{ useCase: UseCaseData }> = ({ useCase }) => {
    const [volume, setVolume] = useState<number>(1000);
    const [calculatedSavings, setCalculatedSavings] = useState<number>(0);

    const calculateROI = () => {
      let savings = 0;
      switch (useCase.id) {
        case 'supply-chain':
          savings = volume * 150; // $150 per shipment saved
          break;
        case 'loyalty':
          savings = volume * 25; // $25 per customer engagement
          break;
        case 'payments':
          savings = volume * 0.035; // 3.5% fee reduction
          break;
        case 'tokenization':
          savings = volume * 0.15; // 15% liquidity improvement
          break;
      }
      setCalculatedSavings(savings);
    };

    return (
      <div className="bg-gray-800 rounded-xl p-6 mt-6">
        <h4 className="text-lg font-semibold text-gray-100 mb-4 flex items-center gap-2">
          <HiCalculator className="w-5 h-5 text-orange-500" />
          ROI Calculator
        </h4>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
          <div>
            <label className="block text-gray-300 text-sm mb-2">
              {useCase.id === 'supply-chain' && 'Monthly Shipments'}
              {useCase.id === 'loyalty' && 'Active Customers'}
              {useCase.id === 'payments' && 'Monthly Transfer Volume ($)'}
              {useCase.id === 'tokenization' && 'Asset Value ($)'}
            </label>
            <input
              type="number"
              value={volume}
              onChange={(e) => setVolume(Number(e.target.value))}
              className="w-full bg-gray-700 border border-gray-600 text-gray-100 px-3 py-2 rounded-lg focus:outline-none focus:border-orange-500"
              placeholder="Enter amount"
            />
          </div>
          
          <button
            onClick={calculateROI}
            className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg transition-colors"
          >
            Calculate
          </button>
          
          <div className="text-center">
            <div className="text-2xl font-bold text-green-400">
              ${calculatedSavings.toLocaleString()}
            </div>
            <div className="text-gray-400 text-sm">Annual Savings</div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-orange-500 mb-6">
            Primary Use Cases
          </h2>
          <p className="text-xl text-gray-300 mb-4">
            Transform your business with proven Web3 solutions
          </p>
          <p className="text-orange-400">
            Badilisha biashara yako kwa suluhisho za Web3 zilizothibitishwa
          </p>
        </div>

        {/* Use Case Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {useCases.map((useCase) => (
            <button
              key={useCase.id}
              onClick={() => onUseCaseChange(useCase.id)}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                selectedUseCase === useCase.id
                  ? 'bg-orange-500 text-white transform scale-105'
                  : 'bg-gray-800 text-gray-400 hover:text-gray-200 hover:bg-gray-700'
              }`}
            >
              <div className="text-sm">{useCase.title}</div>
              <div className="text-xs opacity-80">{useCase.titleSwahili}</div>
            </button>
          ))}
        </div>

        {/* Active Use Case Content */}
        {activeUseCase && (
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Challenge Section */}
              <div className="bg-red-900/20 rounded-2xl p-8 border border-red-500/30">
                <div className="flex items-center gap-3 mb-6">
                  <HiExclamationCircle className="w-8 h-8 text-red-400" />
                  <h3 className="text-2xl font-bold text-red-300">The Challenge</h3>
                </div>
                
                <h4 className="text-xl font-semibold text-gray-100 mb-6">
                  "{activeUseCase.challenge.headline}"
                </h4>
                
                <div className="space-y-4 mb-6">
                  {activeUseCase.challenge.problems.map((problem, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-300">{problem}</span>
                    </div>
                  ))}
                </div>
                
                <div className="bg-red-800/30 rounded-lg p-4">
                  <h5 className="font-semibold text-red-200 mb-2">Total Cost Impact:</h5>
                  <p className="text-red-100 text-lg font-bold">{activeUseCase.challenge.costImpact}</p>
                </div>
              </div>

              {/* Solution Section */}
              <div className="bg-green-900/20 rounded-2xl p-8 border border-green-500/30">
                <div className="flex items-center gap-3 mb-6">
                  <HiCheckCircle className="w-8 h-8 text-green-400" />
                  <h3 className="text-2xl font-bold text-green-300">The Sanidi Solution</h3>
                </div>
                
                <div className="space-y-6">
                  {activeUseCase.solution.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="p-2 rounded-lg bg-green-500/20 text-green-400">
                        {feature.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-100 mb-1">{feature.title}</h4>
                        <p className="text-gray-300 text-sm">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 bg-green-800/30 rounded-lg p-4">
                  <h5 className="font-semibold text-green-200 mb-2">Estimated Savings:</h5>
                  <p className="text-green-100 text-lg font-bold">{activeUseCase.roi.estimatedSavings}</p>
                </div>
              </div>
            </div>

            {/* Customer Example */}
            <div className="mt-12 bg-gray-800/50 rounded-2xl p-8 border border-gray-700">
              <h3 className="text-xl font-semibold text-gray-100 mb-6 text-center">Customer Success Story</h3>
              
              <div className="max-w-4xl mx-auto text-center">
                <blockquote className="text-lg text-gray-300 italic mb-4">
                  "{activeUseCase.customerExample.result}, {activeUseCase.customerExample.metrics}"
                </blockquote>
                <cite className="text-orange-400 font-semibold">
                  — {activeUseCase.customerExample.company}
                </cite>
              </div>
              
              <div className="flex justify-center mt-8">
                <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors">
                  <HiPlay className="w-5 h-5" />
                  Watch Case Study Video
                </button>
              </div>
            </div>

            {/* ROI Calculator */}
            {activeUseCase.roi.calculator && (
              <div className="mt-8">
                {showCalculator === activeUseCase.id ? (
                  <ROICalculator useCase={activeUseCase} />
                ) : (
                  <div className="text-center">
                    <button
                      onClick={() => setShowCalculator(activeUseCase.id)}
                      className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-3 mx-auto"
                    >
                      <HiChartBar className="w-5 h-5" />
                      Calculate Your ROI
                      <HiArrowRight className="w-5 h-5" />
                    </button>
                  </div>
                )}
              </div>
            )}

            {/* Action Buttons */}
            <div className="mt-12 text-center">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3">
                  <span>Start Your Transformation</span>
                  <HiArrowRight className="w-5 h-5" />
                </button>
                <button className="bg-transparent border-2 border-gray-600 text-gray-100 font-semibold px-8 py-4 rounded-lg hover:border-orange-500 hover:bg-orange-500/10 transition-all duration-300">
                  Download Use Case Guide
                </button>
                <button className="bg-transparent border-2 border-blue-600 text-blue-400 font-semibold px-8 py-4 rounded-lg hover:border-blue-500 hover:bg-blue-500/10 transition-all duration-300">
                  Schedule Live Demo
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default PrimaryUseCases;