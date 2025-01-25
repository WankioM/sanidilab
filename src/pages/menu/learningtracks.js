import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { HiArrowRight } from 'react-icons/hi';

const LearningTracks = () => {
  const navigate = useNavigate();
  const [hoveredTrack, setHoveredTrack] = useState(null);

  const tracks = [
    {
      id: 'blockchain',
      titleEn: 'Blockchain Basics',
      titleSw: 'Misingi ya Blockchain',
      descEn: 'Learn to build on StarkNet - from basics to advanced smart contracts',
      descSw: 'Jifunze misingi ya blockchain - kutoka dhana za msingi hadi teknolojia ya kisasa',
      path: '/blockchain-basics',
      color: 'from-flame/20 to-flame/10'
    },
    {
      id: 'starknet',
      titleEn: 'StarkNet Development',
      titleSw: 'Maendeleo ya StarkNet',
      descEn: 'Learn to build on StarkNet - from basics to advanced smart contracts',
      descSw: 'Jifunze kujenga kwenye StarkNet - kutoka misingi hadi mikataba mahiri',
      path: '/starknet',
      color: 'from-flame/20 to-flame/10'
    },
    {
      id: 'wagmi',
      titleEn: 'Wagmi Integration',
      titleSw: 'Ufungaji wa Wagmi',
      descEn: 'Master Web3 frontend development with wagmi hooks and tools',
      descSw: 'Kuwa mtaalam wa frontend ya Web3 na zana za wagmi',
      path: '/intro',
      color: 'from-dun/20 to-dun/10'
    }
  ];

  return (
    <div className="min-h-[90vh] bg-spacecadet pt-6">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-4 w-72 h-72 bg-flame rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob" />
        <div className="absolute top-1/4 -right-4 w-72 h-72 bg-dun rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000" />
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-flame rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        {/* Title Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-montserrat font-bold text-dun mb-4">
            Choose Your Path
          </h1>
          <p className="text-xl text-flame/90 font-montserrat">
            Chagua Njia Yako
          </p>
        </div>

        {/* Tracks Grid */}
     
<div className="grid md:grid-cols-3 gap-6 max-w-7xl mx-auto">
  {tracks.map((track) => (
    <button
      key={track.id}
      onClick={() => navigate(track.path)}
      onMouseEnter={() => setHoveredTrack(track.id)}
      onMouseLeave={() => setHoveredTrack(null)}
      className="group relative h-72 w-full rounded-2xl overflow-hidden transition-all duration-500 transform hover:scale-[1.02]"
    >
      {/* Rest of the button content stays the same */}
      <div className={`absolute inset-0 bg-gradient-to-br ${track.color} backdrop-blur-sm`} />
      
      <div className="absolute inset-0 p-6 flex flex-col justify-between">
        <div>
          <h2 className="text-2xl font-montserrat font-bold text-dun mb-2 transition-all duration-300">
            {hoveredTrack === track.id ? track.titleSw : track.titleEn}
          </h2>
          <p className="text-base text-dun/80 transition-all duration-300">
            {hoveredTrack === track.id ? track.descSw : track.descEn}
          </p>
        </div>
        
        <div className="flex items-center text-flame group-hover:translate-x-2 transition-all duration-300">
          <HiArrowRight className="w-6 h-6" />
        </div>
      </div>
    </button>
  ))}
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

export default LearningTracks;