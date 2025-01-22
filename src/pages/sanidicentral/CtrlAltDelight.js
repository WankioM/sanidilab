import React from 'react';
import { HiArrowUpRight } from 'react-icons/hi2';

const CtrlAltDelight = () => {
    const episodes = [
        {
          id: 1,
          date: "15 JAN 2025",
          thumbnail: "/api/placeholder/400/320",
          title: "Sanidi: Web3 Made Easy",
          titleSw: "Sanidi: Web3 Imerahisishwa",
          description: "Introduction to Sanidi's open-source platform, featuring no-code smart contract creation and multilingual support for inclusive Web3 development",
          descriptionSw: "Utangulizi wa jukwaa la Sanidi, linalotoa uundaji rahisi wa mikataba mahiri na msaada wa lugha nyingi",
          zoraLink: "https://zora.co/episode-1"
        },
        {
          id: 2,
          date: "21 FEB 2024",
          thumbnail: "/api/placeholder/400/320",
          title: "Open Source & Internet Eras: Reclaiming the Web",
          titleSw: "Programu Huria na Vipindi vya Intaneti: Kurejesha Wavuti",
          description: "Exploring the evolution of the internet through three eras and how open source principles shape Sanidi's mission for inclusivity",
          descriptionSw: "Kuchunguza maendeleo ya intaneti kupitia vipindi vitatu na jinsi kanuni za programu huria zinavyounda dhamira ya Sanidi",
          zoraLink: "https://zora.co/episode-2"
        },
        {
          id: 3,
          date: "14 FEB 2024",
          thumbnail: "/api/placeholder/400/320",
          title: "Digital Identities: Messy, Clean & Everything In Between",
          titleSw: "Vitambulisho vya Kidijitali: Vyenye Changamoto na Suluhisho",
          description: "Examining the complexity of online identities and how they reflect our ever-changing human nature in the digital age",
          descriptionSw: "Kuchunguza ugumu wa vitambulisho vya mtandaoni na jinsi vinavyoakisi asili yetu inayobadilika",
          zoraLink: "https://zora.co/episode-3"
        }]

  return (
    <div className="max-w-5xl mx-auto">
      {/* Episodes List */}
      <div className="space-y-8">
        {episodes.map((episode) => (
          <div 
            key={episode.id}
            className="group flex items-start gap-8 p-6 rounded-xl bg-white/5 backdrop-blur-sm
                     border-2 border-dun/20 hover:border-flame/50 transition-all duration-300"
          >
            {/* Date */}
            <div className="w-24 flex-shrink-0">
              <p className="font-montserrat text-lg font-bold text-dun">
                {episode.date}
              </p>
            </div>

            {/* Thumbnail */}
            <div className="w-48 h-32 flex-shrink-0 overflow-hidden rounded-lg">
              <img
                src={episode.thumbnail}
                alt={episode.title}
                className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Content */}
            <div className="flex-1">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-montserrat text-xl font-bold text-dun mb-2">
                    {episode.title}
                  </h3>
                  <p className="text-flame/90 font-montserrat mb-2">
                    {episode.titleSw}
                  </p>
                  <p className="text-dun/80 text-sm mb-1">
                    {episode.description}
                  </p>
                  <p className="text-flame/70 text-sm">
                    {episode.descriptionSw}
                  </p>
                </div>
                <a
                  href={episode.zoraLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 rounded-full
                           bg-white/5 hover:bg-flame/20 text-flame transition-all duration-300
                           group-hover:scale-110"
                >
                  <HiArrowUpRight className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* See More Button */}
      <div className="mt-12 text-center">
        <button className="px-8 py-4 rounded-xl font-montserrat font-bold text-lg
                         bg-white/5 text-dun hover:bg-flame/20 transition-all duration-300">
          See More / Ona Zaidi
        </button>
      </div>
    </div>
  );
};

export default CtrlAltDelight;