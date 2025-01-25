import React, { useState } from 'react';
import { HiLightBulb, HiCube, HiCode, HiGlobe, HiCheck } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';

const BlockchainSteps = () => {
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState(new Set());
  
  const steps = [
    {
      id: 1,
      icon: HiLightBulb,
      title: 'How Blockchain Works',
      titleSw: 'Jinsi Blockchain Inavyofanya Kazi',
      goto: '/blockchain-basics/how-blockchain-works'
    },
    {
      id: 2,
      icon: HiCube,
      title: 'Building Blocks of Blockchain',
      titleSw: 'Vipengele vya Blockchain',
      goto: '/blockchain-basics/building-blocks'
    },
    {
      id: 3,
      icon: HiCode,
      title: 'Start Programming Blockchain',
      titleSw: 'Anza Kuandika Blockchain',
      goto: '/blockchain-basics/start-programming-blockchain'
    },
    {
      id: 4,
      icon: HiGlobe,
      title: 'The Blockchain Universe',
      titleSw: 'Ulimwengu wa Blockchain',
      goto: '/blockchain-basics/the-blockchain-universe'
    }
  ];

  const progress = (completedSteps.size / steps.length) * 100;

  const handleStepClick = (id, goto) => {
    toggleComplete(id);
    navigate(goto);
  };

  const toggleComplete = (id) => {
    setCompletedSteps(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-spacecadet to-spacecadet/90">
      <div className="max-w-4xl mx-auto p-8 pt-28">
        {/* Progress Bar */}
        <div className="mb-12">
          <div className="h-2 bg-spacecadet rounded-full overflow-hidden border border-flame/20">
            <div 
              className="h-full bg-flame transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="mt-2 text-right text-sm text-dun">
            {Math.round(progress)}% Complete
          </div>
        </div>

        <div className="space-y-8">
          {steps.map((step, index) => (
            <div 
              key={step.id}
              className="relative cursor-pointer"
              onMouseEnter={() => setActiveStep(index)}
              onClick={() => handleStepClick(step.id, step.goto)}
            >
              <div className="flex items-start gap-6">
                {index !== steps.length - 1 && (
                  <div className="absolute left-6 top-12 w-0.5 h-24 bg-gradient-to-b from-flame/30 to-flame/10" />
                )}
                
                <div 
                  className={`relative z-10 flex items-center justify-center w-12 h-12 rounded-full
                           ${completedSteps.has(step.id) ? 'bg-flame' : 'bg-spacecadet'}
                           border-2 ${completedSteps.has(step.id) ? 'border-flame' : 'border-flame/30'}
                           transition-all duration-300
                           hover:border-flame ${activeStep === index ? 'scale-110' : ''}`}
                >
                  {completedSteps.has(step.id) ? (
                    <HiCheck className="w-6 h-6 text-spacecadet" />
                  ) : (
                    <step.icon className="w-6 h-6 text-flame" />
                  )}
                </div>
                
                <div className={`flex-1 p-6 rounded-xl bg-spacecadet border-2 border-flame/20
                              transition-all duration-300 ${activeStep === index ? 'translate-x-2' : ''}`}>
                  <h3 className="text-xl font-montserrat font-bold text-dun mb-1">
                    {activeStep === index ? step.titleSw : step.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlockchainSteps;