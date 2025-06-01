import React from 'react';
import { useNavigate } from 'react-router-dom';
import { HiArrowRight } from 'react-icons/hi';

const Hero = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/sanidi-central');
  };

  return (
    <div 
      className="min-h-screen relative overflow-hidden pt-20"
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
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16 py-8 lg:py-16 min-h-[calc(100vh-5rem)]">
          {/* Left Section */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <div className="space-y-6">
              <h1 className="font-morgath text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-dun leading-tight">
                Transform Your Business to Web3
              </h1>
              <p className="font-montserrat text-xl sm:text-2xl lg:text-3xl text-dun/80 leading-relaxed">
                Enterprise Web3 Migration in 6 Weeks, Not 18 Months
              </p>
              <p className="font-montserrat text-base sm:text-lg text-flame/90">
                Badilisha Biashara Yako kuwa Web3 - Haraka na Rahisi
              </p>
              <p className="font-montserrat text-base sm:text-lg text-dun/70 max-w-2xl">
                No coding required. Built for African businesses. Supported in English and Swahili.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-8 max-w-lg">
              <button 
                onClick={handleGetStarted}
                className="group bg-gradient-to-r from-flame to-flame/80 text-dun font-montserrat text-lg sm:text-xl px-6 sm:px-8 py-3 sm:py-4 
                         rounded-xl hover:from-flame/90 hover:to-flame/70 transform hover:scale-[1.02]
                         transition-all duration-300 ease-in-out flex items-center justify-center gap-3"
              >
                <span>Get Started</span>
                <HiArrowRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button 
                onClick={() => navigate('/about')}
                className="group bg-transparent border-2 border-dun/30 text-dun font-montserrat text-lg sm:text-xl px-6 sm:px-8 py-3 sm:py-4 
                         rounded-xl hover:border-flame/50 hover:bg-flame/10 transform hover:scale-[1.02]
                         transition-all duration-300 ease-in-out"
              >
                Learn More
              </button>
            </div>
          </div>

          {/* Right Section - Image */}
          <div className="w-full lg:w-1/2 flex items-center justify-center">
            <div className="relative w-full max-w-md lg:max-w-lg overflow-hidden rounded-xl transform hover:scale-[1.02] transition-transform duration-300">
              <div className="absolute inset-0 border border-dun/50 rounded-xl"></div>
              <img 
                src="https://i.pinimg.com/736x/b3/85/14/b38514c2c3e675020da1104bed6cd67b.jpg"
                alt="Web3 Business Transformation"
                className="w-full h-auto object-cover rounded-xl relative z-0"
                style={{
                  maxHeight: '60vh',
                  objectFit: 'cover'
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