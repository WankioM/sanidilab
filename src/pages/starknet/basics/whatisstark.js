import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const WhatIsStark = () => {
  const navigate = useNavigate();
  const [selectedAnswers, setSelectedAnswers] = useState(new Set());
  const [feedback, setFeedback] = useState({});
  const [expandedAnswer, setExpandedAnswer] = useState(null);

  const questions = [
    {
      id: 1,
      question: "Let's break it down—what is StarkNet, really?",
      options: [
        {
          id: 'a',
          text: "A Layer 2 scaling solution for Ethereum",
          correct: true,
          feedback: "🚀 Correct! StarkNet is indeed a Layer 2 scaling solution that helps Ethereum scale while maintaining security.",
          emoji: "🔐"
        },
        {
          id: 'b',
          text: "The Home of Onchain Everything",
          correct: true,
          feedback: "⚡ Correct! Starknet bundles multiple transactions together off-chain and then submits a single, compressed proof back to the Ethereum mainnet, reducing gas costs and improving transaction speed.",
          emoji: "🏠"
        },
        {
          id: 'c',
          text: "Where Developers Get Superpowers",
          correct: true,
          feedback: "🦸‍♂️ You are quite a smart one! Yes StarkNet uses Cairo, and devs can build scalable, complex applications without worrying about gas limits or network congestion.",
          emoji: "💪"
        }
      ]
    }
  ];

  const handleAnswerSelect = (option) => {
    // If not selected yet, mark as selected
    if (!selectedAnswers.has(option.id)) {
      setSelectedAnswers(prev => {
        const newSelected = new Set(prev);
        newSelected.add(option.id);
        return newSelected;
      });
      setFeedback(prev => ({
        ...prev,
        [option.id]: option.feedback
      }));
    }
    
    // Toggle expansion state
    setExpandedAnswer(prev => prev === option.id ? null : option.id);
  };

  const handleNext = () => {
    navigate('/next-question');
  };

  const allOptionsSelected = selectedAnswers.size === questions[0].options.length;

  return (
    <div className="h-screen relative overflow-hidden bg-spacecadet flex flex-col">
      {/* Header taking 8% of viewport height */}
      <div className="h-[8vh] bg-spacecadet/90 border-b border-dun/20 flex items-center justify-center">
        <h1 className="text-2xl font-morgath text-flame">StarkNet Quiz</h1>
      </div>

      {/* Main content */}
      <div className="flex-1 relative overflow-y-auto">
        {/* Background with animated gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-spacecadet/85 via-[#21253A]/80 to-spacecadet/75" />

        {/* Animated background orbs */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 -left-4 w-72 h-72 bg-flame rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-[blob_7s_infinite]" />
          <div className="absolute top-1/4 -right-4 w-72 h-72 bg-dun rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-[blob_7s_infinite_2s]" />
          <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-flame rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-[blob_7s_infinite_4s]" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 py-8">
          <div className="backdrop-blur-sm bg-white/5 rounded-xl p-8 border-2 border-dun/20">
            {/* Question */}
            <h2 className="text-3xl font-morgath text-flame mb-8">
              {questions[0].question}
            </h2>

            {/* Answer Options */}
            <div className="space-y-4">
              {questions[0].options.map((option) => (
                <div key={option.id} className="space-y-2">
                  <button
                    onClick={() => handleAnswerSelect(option)}
                    className={`w-full p-6 text-left rounded-xl font-montserrat text-lg transition-all duration-300 transform hover:scale-102 flex items-center justify-between
                      ${selectedAnswers.has(option.id)
                        ? 'bg-green-500/20 border-2 border-green-500/50 text-dun'
                        : 'bg-white/5 border-2 border-dun/20 text-dun hover:border-flame/50'
                      }`}
                  >
                    <span className="flex items-center">
                      <span className="mr-2">{option.emoji}</span>
                      {option.text}
                    </span>
                    {selectedAnswers.has(option.id) && (
                      <span className="text-xl transform transition-transform duration-300 ml-2">
                        {expandedAnswer === option.id ? '↑' : '↓'}
                      </span>
                    )}
                  </button>
                  
                  {/* Individual Feedback with collapse animation */}
                  <div 
                    className={`transition-all duration-300 ease-in-out overflow-hidden
                      ${expandedAnswer === option.id ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}
                  >
                    {feedback[option.id] && (
                      <div 
                        className="p-4 rounded-xl bg-white/5 border-2 border-dun/20"
                        role="alert"
                      >
                        <p className="text-lg font-montserrat text-dun">
                          {feedback[option.id]}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Next Button */}
            {allOptionsSelected && (
              <button
                onClick={handleNext}
                className="mt-8 w-full bg-gradient-to-r from-flame to-flame/80 text-dun font-morgath text-xl px-8 py-4 
                         rounded-xl hover:from-flame/90 hover:to-flame/70 transform hover:scale-102
                         transition-all duration-300 ease-in-out"
              >
                Time for more! Let’s go! ➡️
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatIsStark;
