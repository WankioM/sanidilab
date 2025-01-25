import React, { useState } from 'react';
import { HiArrowLeft, HiHome, HiArrowRight } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';

const ConsensusQuiz = () => {
  const navigate = useNavigate();
  const [isSwahili, setIsSwahili] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const quizContent = {
    en: {
      question: "What is the purpose of a consensus mechanism in blockchain?",
      options: [
        { id: 'A', text: "To determine the market value of cryptocurrencies" },
        { id: 'B', text: "To allow all participants to agree on the validity of transactions" },
        { id: 'C', text: "To store personal information securely" },
        { id: 'D', text: "To back up the blockchain ledger on a central server" }
      ],
      correctAnswer: 'B',
      feedback: {
        correct: "Correct! Consensus mechanisms ensure all network participants can agree on the valid state of the blockchain.",
        incorrect: "That's not quite right. Consensus mechanisms are essential for allowing network participants to agree on valid transactions without a central authority."
      }
    },
    sw: {
      question: "Nini madhumuni ya utaratibu wa makubaliano katika blockchain?",
      options: [
        { id: 'A', text: "Kuamua thamani ya soko ya sarafu za crypto" },
        { id: 'B', text: "Kuruhusu washiriki wote kukubaliana juu ya uhalali wa miamala" },
        { id: 'C', text: "Kuhifadhi taarifa za kibinafsi kwa usalama" },
        { id: 'D', text: "Kuhifadhi nakala ya leja ya blockchain kwenye seva kuu" }
      ],
      correctAnswer: 'B',
      feedback: {
        correct: "Sahihi! Taratibu za makubaliano zinahakikisha washiriki wote wa mtandao wanaweza kukubaliana juu ya hali halali ya blockchain.",
        incorrect: "Sio sahihi kabisa. Taratibu za makubaliano ni muhimu kwa kuruhusu washiriki wa mtandao kukubaliana juu ya miamala halali bila mamlaka kuu."
      }
    }
  };

  const content = quizContent[isSwahili ? 'sw' : 'en'];

  const handleSubmit = () => {
    setHasSubmitted(true);
  };

  const isCorrect = selectedAnswer === content.correctAnswer;

  return (
    <div className="min-h-screen bg-gradient-to-br from-spacecadet to-spacecadet/90 py-24">
      <div className="max-w-3xl mx-auto px-4">
        <div className="mb-8 flex justify-between items-center">
          <h1 className="text-2xl font-montserrat text-dun">
            {isSwahili ? 'Jaribio: Makubaliano' : 'Quiz: Consensus'}
          </h1>
          <button 
            onClick={() => setIsSwahili(!isSwahili)}
            className="px-4 py-2 rounded-lg bg-flame/20 text-flame hover:bg-flame hover:text-spacecadet transition-all duration-300"
          >
            {isSwahili ? 'English' : 'Kiswahili'}
          </button>
        </div>

        <div className="space-y-8">
          <div className="p-6 bg-spacecadet rounded-xl border-2 border-flame/20">
            <p className="text-lg text-dun font-montserrat mb-8">{content.question}</p>
            
            <div className="space-y-4">
              {content.options.map((option) => (
                <button
                  key={option.id}
                  onClick={() => !hasSubmitted && setSelectedAnswer(option.id)}
                  className={`w-full p-4 rounded-lg border-2 transition-all duration-300 text-left
                    ${hasSubmitted && option.id === content.correctAnswer ? 'bg-green-500/20 border-green-500' : ''}
                    ${hasSubmitted && option.id === selectedAnswer && option.id !== content.correctAnswer ? 'bg-red-500/20 border-red-500' : ''}
                    ${!hasSubmitted && option.id === selectedAnswer ? 'bg-flame/20 border-flame' : 'border-flame/20'}
                    ${!hasSubmitted && option.id !== selectedAnswer ? 'hover:border-flame hover:bg-flame/10' : ''}
                  `}
                >
                  <div className="flex items-center gap-4">
                    <span className="w-8 h-8 rounded-full bg-flame/20 flex items-center justify-center text-flame">
                      {option.id}
                    </span>
                    <span className="text-dun">{option.text}</span>
                  </div>
                </button>
              ))}
            </div>

            {hasSubmitted && (
              <div className={`mt-6 p-4 rounded-lg ${isCorrect ? 'bg-green-500/20' : 'bg-red-500/20'}`}>
                <p className="text-dun">
                  {isCorrect ? content.feedback.correct : content.feedback.incorrect}
                </p>
              </div>
            )}
          </div>
        </div>

        <div className="mt-16 flex justify-between items-center">
          <button
            onClick={() => navigate('/blockchain-basics/consensus')}
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-flame text-spacecadet transition-all duration-300 font-montserrat"
          >
            <HiArrowLeft className="w-5 h-5" />
            {isSwahili ? 'Rudi' : 'Back'}
          </button>

          <button
            onClick={() => navigate('/blockchain-basics')}
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-flame/20 text-flame
                     hover:bg-flame hover:text-spacecadet transition-all duration-300 font-montserrat"
          >
            <HiHome className="w-5 h-5" />
            {isSwahili ? 'Msingi wa Blockchain' : 'Blockchain Basics'}
          </button>

          {!hasSubmitted ? (
            <button
              onClick={handleSubmit}
              disabled={!selectedAnswer}
              className={`px-6 py-3 rounded-xl font-montserrat
                       ${selectedAnswer ? 'bg-flame text-spacecadet' : 'bg-flame/20 text-flame/50'}`}
            >
              {isSwahili ? 'Wasilisha' : 'Submit'}
            </button>
          ) : (
            <button
              onClick={() => navigate('/blockchain-basics/encouragement')}
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-flame text-spacecadet transition-all duration-300 font-montserrat"
            >
              {isSwahili ? 'Inayofuata' : 'Next'}
              <HiArrowRight className="w-5 h-5" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ConsensusQuiz;