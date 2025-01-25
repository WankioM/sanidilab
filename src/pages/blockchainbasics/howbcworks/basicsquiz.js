import React, { useState } from 'react';
import { HiArrowLeft, HiHome, HiArrowRight } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';

const BlockchainBasicsQuiz = () => {
  const navigate = useNavigate();
  const [isSwahili, setIsSwahili] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState([null, null]);
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const questions = {
    en: [
      {
        question: "How does decentralization contribute to security in blockchain?",
        options: [
          { id: 'A', text: "By storing data in one location" },
          { id: 'B', text: "By eliminating the need for encryption" },
          { id: 'C', text: "By ensuring that multiple copies of the ledger exist, making it harder to tamper with" },
          { id: 'D', text: "By preventing anyone from accessing the network" }
        ],
        correctAnswer: 'C'
      },
      {
        question: "What is the function of a public-private key pair in blockchain?",
        options: [
          { id: 'A', text: "Public keys are used to decrypt messages, while private keys are used to encrypt them" },
          { id: 'B', text: "Public keys are used to verify transactions, while private keys are used to sign them" },
          { id: 'C', text: "Both keys are used for encrypting data only" },
          { id: 'D', text: "The private key is shared publicly to ensure trust" }
        ],
        correctAnswer: 'B'
      }
    ],
    sw: [
      {
        question: "Usambazaji unachangiaje usalama katika blockchain?",
        options: [
          { id: 'A', text: "Kwa kuhifadhi data mahali pamoja" },
          { id: 'B', text: "Kwa kuondoa hitaji la usimbaji fiche" },
          { id: 'C', text: "Kwa kuhakikisha nakala nyingi za leja zipo, kufanya iwe ngumu kubadilisha" },
          { id: 'D', text: "Kwa kuzuia mtu yeyote kufikia mtandao" }
        ],
        correctAnswer: 'C'
      },
      {
        question: "Nini kazi ya jozi ya ufunguo wa umma-binafsi katika blockchain?",
        options: [
          { id: 'A', text: "Funguo za umma zinatumika kufungua ujumbe, wakati funguo za kibinafsi zinatumika kusimba" },
          { id: 'B', text: "Funguo za umma zinatumika kuthibitisha miamala, wakati funguo za kibinafsi zinatumika kusaini" },
          { id: 'C', text: "Funguo zote zinatumika tu kusimba data" },
          { id: 'D', text: "Ufunguo wa kibinafsi unashirikiwa hadharani kuhakikisha imani" }
        ],
        correctAnswer: 'B'
      }
    ]
  };

  const currentContent = questions[isSwahili ? 'sw' : 'en'][currentQuestion];
  const isLastQuestion = currentQuestion === questions.en.length - 1;
  const allAnswered = selectedAnswers.every(answer => answer !== null);
  const isCorrect = hasSubmitted && selectedAnswers[currentQuestion] === currentContent.correctAnswer;

  const handleNext = () => {
    if (hasSubmitted && isLastQuestion) {
      navigate('/blockchain-basics/final-encouragement');
    } else if (hasSubmitted) {
      setCurrentQuestion(prev => prev + 1);
      setHasSubmitted(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-spacecadet to-spacecadet/90 py-24">
      <div className="max-w-3xl mx-auto px-4">
        <div className="mb-8 flex justify-between items-center">
          <h1 className="text-2xl font-montserrat text-dun">
            {isSwahili ? 'Jaribio la Blockchain' : 'Blockchain Quiz'}
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
            <p className="text-lg text-dun font-montserrat mb-8">{currentContent.question}</p>
            
            <div className="space-y-4">
              {currentContent.options.map((option) => (
                <button
                  key={option.id}
                  onClick={() => !hasSubmitted && setSelectedAnswers(prev => {
                    const newAnswers = [...prev];
                    newAnswers[currentQuestion] = option.id;
                    return newAnswers;
                  })}
                  className={`w-full p-4 rounded-lg border-2 transition-all duration-300 text-left
                    ${hasSubmitted && option.id === currentContent.correctAnswer ? 'bg-green-500/20 border-green-500' : ''}
                    ${hasSubmitted && option.id === selectedAnswers[currentQuestion] && option.id !== currentContent.correctAnswer ? 'bg-red-500/20 border-red-500' : ''}
                    ${!hasSubmitted && option.id === selectedAnswers[currentQuestion] ? 'bg-flame/20 border-flame' : 'border-flame/20'}
                    ${!hasSubmitted && option.id !== selectedAnswers[currentQuestion] ? 'hover:border-flame hover:bg-flame/10' : ''}
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
                  {isCorrect ? 
                    (isSwahili ? 'Hongera! Umejibu swali kwa usahihi.' : 'Correct! That\'s the right answer.') :
                    (isSwahili ? 'Samahani, jibu sio sahihi. Jaribu tena.' : 'Sorry, that\'s not correct. Try again.')}
                </p>
              </div>
            )}
          </div>
        </div>

        <div className="mt-16 flex justify-between items-center">
          <button
            onClick={() => navigate(-1)}
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
              onClick={() => setHasSubmitted(true)}
              disabled={selectedAnswers[currentQuestion] === null}
              className={`px-6 py-3 rounded-xl font-montserrat
                       ${selectedAnswers[currentQuestion] !== null ? 'bg-flame text-spacecadet' : 'bg-flame/20 text-flame/50'}`}
            >
              {isSwahili ? 'Wasilisha' : 'Submit'}
            </button>
          ) : (
            <button
              onClick={handleNext}
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-flame text-spacecadet transition-all duration-300 font-montserrat"
            >
              {isLastQuestion ? (isSwahili ? 'Maliza' : 'Finish') : (isSwahili ? 'Swali Linalofuata' : 'Next Question')}
              <HiArrowRight className="w-5 h-5" />
            </button>
          )}

          
        </div>
      </div>
    </div>
  );
};

export default BlockchainBasicsQuiz;