import React, { useState, useEffect } from 'react';
import { HiArrowRight } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';
import { goodremarks } from '../../../data/goodremarks';

const Encouragement = () => {
  const navigate = useNavigate();
  const [isSwahili, setIsSwahili] = useState(false);
  
  const getRandomRemark = () => {
    const validRemarks = goodremarks.filter(remark => remark[isSwahili ? 'sw' : 'en']);
    const randomIndex = Math.floor(Math.random() * validRemarks.length);
    return validRemarks[randomIndex][isSwahili ? 'sw' : 'en'].replace('{name}', 'Crypto Explorer');
  };

  const [remark, setRemark] = useState(getRandomRemark());

  useEffect(() => {
    setRemark(getRandomRemark());
  }, [isSwahili]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-spacecadet to-spacecadet/90 py-24">
      <div className="max-w-2xl mx-auto px-4">
        <div className="text-right mb-4">
          <button 
            onClick={() => setIsSwahili(!isSwahili)}
            className="px-4 py-2 rounded-lg bg-flame/20 text-flame hover:bg-flame hover:text-spacecadet transition-all duration-300"
          >
            {isSwahili ? 'English' : 'Kiswahili'}
          </button>
        </div>

        {/* Lottie Animation Placeholder */}
        <div className="w-64 h-64 mx-auto mb-8 bg-flame/10 rounded-full flex items-center justify-center">
          <span className="text-6xl">🎉</span>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-montserrat text-dun mb-8">{remark}</h2>
          
          <button
            onClick={() => navigate('/blockchain-basics/decentralization')}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-flame text-spacecadet
                     transition-all duration-300 font-montserrat text-lg"
          >
            {isSwahili ? 'Endelea' : 'Continue'}
            <HiArrowRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Encouragement;