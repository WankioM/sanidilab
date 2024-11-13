import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../../context/UserContext';

const Hero = () => {
  const [inputName, setInputName] = useState('');
  const { setUserName } = useUser();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputName.trim()) {
      setUserName(inputName.trim());
      navigate('/intro');
    }
  };

  return (
    <div className="min-h-[calc(100vh-80px)] mt-20 bg-spacecadet">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 py-8 lg:py-12">
          {/* Left Section */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <div className="max-w-xl">
              <h1 className="mb-6">
                <span className="block mt-4 font-montserrat font-semibold text-2xl md:text-3xl lg:text-4xl text-dun">
                  Njia Rahisi ya Kuungana na Web3
                </span>
              </h1>

              <p className="font-montserrat text-lg md:text-xl mb-8 text-dun/80">
                You don't need to learn, just start
              </p>

              <form onSubmit={handleSubmit} className="space-y-6 max-w-md">
                <div className="relative">
                  <input 
                    type="text"
                    placeholder="Andika Jina"
                    value={inputName}
                    onChange={(e) => setInputName(e.target.value)}
                    className="w-full bg-dun/5 backdrop-blur-sm font-montserrat text-lg px-6 py-4 rounded-lg
                             border-2 border-dun/10 focus:border-flame/50 focus:outline-none
                             text-dun placeholder-dun/50 transition-all"
                  />
                </div>

                <button 
                  type="submit"
                  className="w-full sm:w-auto bg-flame text-dun font-montserrat text-lg px-8 py-4 
                           rounded-lg shadow-md hover:shadow-lg hover:bg-flame/90 
                           transition-all duration-300 ease-in-out"
                >
                  Anza Sasa
                </button>
              </form>
            </div>
          </div>

          {/* Right Section - Animation Container */}
          <div className="w-full lg:w-1/2 flex items-center justify-center py-8 lg:py-0">
            <div className="relative w-full max-w-lg">
              {/* Gradient orbs */}
              <div className="absolute top-0 -left-4 w-72 h-72 bg-flame rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
              <div className="absolute top-0 -right-4 w-72 h-72 bg-dun rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
              <div className="absolute -bottom-8 left-20 w-72 h-72 bg-flame rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
              
              {/* StorySet Animation Container */}
              <div className="relative">
                {/* Place your StorySet SVG here */}
                <svg className="w-full h-auto" viewBox="0 0 500 500">
                  {/* Your StorySet SVG content will go here */}
                  {/* For now, showing a placeholder animation */}
                  <circle cx="250" cy="250" r="100" fill="none" stroke="#E2D2B8" strokeWidth="4" className="animate-pulse"/>
                  <path d="M250 150 L250 350 M150 250 L350 250" stroke="#EC5022" strokeWidth="4" className="animate-pulse"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Add some CSS for the animation */}
      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
};

export default Hero;