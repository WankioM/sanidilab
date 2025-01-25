import React, { useState } from 'react';
import { HiArrowUpRight, HiUser, HiSparkles, HiHeart } from 'react-icons/hi2';

const SanidiSpace = () => {
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "DAO-bitat: Fractional Real Estate Ownership",
      titleSw: "DAO-bitat: Umiliki wa Mali Isiyohamishika kwa Sehemu",
      creator: "Njeri W, Tracy W.",
      description: "A blockchain-powered platform enabling fractional ownership of real estate through tokenisation, fostering collaborative investment and accessibility.",
      descriptionSw: "Jukwaa linalotumia blockchain kuwezesha umiliki wa mali isiyohamishika kwa sehemu kupitia tokenisation, likihimiza uwekezaji wa pamoja na ufikivu.",
      likes: 421,
      category: "Prop Tech",
      thumbnail: "/api/placeholder/400/320",
      link: "www.daobitat.xyz"
    },
    
    {
      id: 2,
      title: "Community NFT Marketplace",
      titleSw: "Soko la NFT la Jamii",
      creator: "John K.",
      description: "An NFT marketplace focused on African digital art and creators.",
      descriptionSw: "Soko la NFT linalolenga sanaa ya dijitali na wasanii wa Afrika.",
      likes: 186,
      category: "Marketplace",
      thumbnail: "/api/placeholder/400/320",
      link: "https://nft-market.example.com"
    },
    {
      id: 3,
      title: "Decentralized Savings Club",
      titleSw: "Kikundi cha Akiba Kisicholindwa Kati",
      creator: "Maria N.",
      description: "A blockchain-based savings group system inspired by traditional African saving circles.",
      descriptionSw: "Mfumo wa kikundi cha kuweka akiba unaotumia blockchain.",
      likes: 156,
      category: "DeFi",
      thumbnail: "/api/placeholder/400/320",
      link: "https://savings.example.com"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto">
      {/* Featured Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            onMouseEnter={() => setHoveredProject(project.id)}
            onMouseLeave={() => setHoveredProject(null)}
            className="group relative bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden
                     border-2 border-dun/20 hover:border-flame/50 transition-all duration-300"
          >
            {/* Project Image */}
            <div className="relative h-48 overflow-hidden">
              <img
                src={project.thumbnail}
                alt={project.title}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-spacecadet/90 to-transparent" />
              
              {/* Category Badge */}
              <div className="absolute top-4 right-4 px-3 py-1 rounded-full 
                           bg-flame/90 text-dun text-sm font-montserrat">
                {project.category}
              </div>
            </div>

            {/* Project Content */}
            <div className="p-6">
              <div className="flex items-center space-x-2 mb-4">
                <HiUser className="w-5 h-5 text-flame" />
                <span className="text-dun/80">{project.creator}</span>
              </div>

              <h3 className="font-montserrat text-xl font-bold text-dun mb-2">
                {hoveredProject === project.id ? project.titleSw : project.title}
              </h3>

              <p className="text-dun/80 text-sm mb-4">
                {hoveredProject === project.id ? project.descriptionSw : project.description}
              </p>

              {/* Project Stats */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <HiHeart className="w-5 h-5 text-flame" />
                  <span className="text-dun/60">{project.likes}</span>
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-flame hover:text-flame/80 transition-colors"
                >
                  <span>View Project</span>
                  <HiArrowUpRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Submit Project Button */}
      <div className="mt-12 text-center">
        <button className="group px-8 py-4 rounded-xl font-montserrat font-bold text-lg
                         bg-white/5 text-dun hover:bg-flame/20 transition-all duration-300
                         flex items-center justify-center mx-auto space-x-2">
          <HiSparkles className="w-6 h-6 group-hover:rotate-12 transition-transform" />
          <span>Submit Your Project / Wasilisha Mradi Wako</span>
        </button>
      </div>
    </div>
  );
};

export default SanidiSpace;