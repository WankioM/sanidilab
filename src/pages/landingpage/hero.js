import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../../context/UserContext';
import { HiArrowRight } from 'react-icons/hi';

const Hero = () => {
  const [inputName, setInputName] = useState('');
  const { setUserName } = useUser();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputName.trim()) {
      setUserName(inputName.trim());
      navigate('/menu/learningtracks');
    }
  };

  return (
    <div 
      className="min-h-screen h-[90vh]  relative overflow-hidden"
      style={{
        backgroundImage: `url('https://i.pinimg.com/736x/d7/af/8c/d7af8c4d281d97497f8fd8ba21316693.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-spacecadet/85 via-[#21253A]/80 to-spacecadet/75" />

      {/* Animated Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-4 w-72 h-72 bg-flame rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-1/4 -right-4 w-72 h-72 bg-dun rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-flame rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 py-12 lg:py-20">
          {/* Left Section */}
          <div className="w-full lg:w-1/2">
            <div className="relative p-0 rounded-2xl  mb-12">
              <div className="  rounded-xl p-8 sm:p-12">
                
                <p className="font-montserrat text-2xl sm:text-3xl text-dun/80 mb-4">
                  Because, Why shouldn't Web3 Speak Your Language?
                </p>
                <p className="font-montserrat text-lg text-flame/90">
                Kwa nini Web3 isiongee kwa Lugha Yako?
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8 max-w-md">
              <div className="relative transform hover:scale-[1.02] transition-transform duration-300">
                <input 
                  type="text"
                  placeholder="Andika Jina / Enter Name"
                  value={inputName}
                  onChange={(e) => setInputName(e.target.value)}
                  className="w-full bg-white/5 backdrop-blur-sm font-montserrat text-xl px-8 py-6 rounded-xl
                           border-2 border-dun/20 focus:border-flame/50 focus:outline-none
                           text-dun placeholder-dun/50 transition-all"
                />
              </div>

              <button 
                type="submit"
                className="group w-full bg-gradient-to-r from-flame to-flame/80 text-dun font-montserrat text-xl px-8 py-6 
                         rounded-xl hover:from-flame/90 hover:to-flame/70 transform hover:scale-[1.02]
                         transition-all duration-300 ease-in-out flex items-center justify-center gap-3"
              >
                <span>Anza Sasa</span>
                <HiArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>

    
          {/* Right Section - Image */}
          <div className="w-full lg:w-1/2 mt-6 flex items-center justify-center">
            <div className="relative w-full max-w-lg overflow-hidden rounded-xl transform hover:scale-[1.02] transition-transform duration-300">
              <div className="absolute inset-0  border border-dun/50 "></div>
              <img 
                src="https://i.pinimg.com/736x/b3/85/14/b38514c2c3e675020da1104bed6cd67b.jpg"
                alt="Web3 Illustration"
                className="w-full h-auto object-cover rounded-xl relative z-0"
                style={{
                  maxHeight: 'calc(90vh - 4rem)', // Accounting for header and some padding
                  objectFit: 'contain'
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Animation Styles */}
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