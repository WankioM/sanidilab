import React from 'react';
import { Link } from 'react-router-dom';
import { MdAgriculture, MdAccountBalance, MdPeople, MdLightbulb } from 'react-icons/md';

const AboutUs = () => {
  const challenges = [
    {
      title: "Localized Content Gap",
      titleSw: "Pengo la Maudhui ya Ndani",
      description: "Many learning resources aren't tailored to African realities, missing crucial context about local systems like M-Pesa.",
      icon: "📚"
    },
    {
      title: "Support Networks",
      titleSw: "Mitandao ya Usaidizi",
      description: "Fragmented and limited support networks make it difficult for developers to find help and mentorship.",
      icon: "🤝"
    },
    {
      title: "Cross-Border Collaboration",
      titleSw: "Ushirikiano wa Kimataifa",
      description: "Communication challenges and infrastructure limitations hinder cross-border collaboration.",
      icon: "🌍"
    },
    {
      title: "Infrastructure Access",
      titleSw: "Upatikanaji wa Miundombinu",
      description: "Limited internet and electricity access creates barriers to consistent development work.",
      icon: "💡"
    }
  ];

  const opportunities = [
    {
      title: "African Stablecoin",
      description: "Redefining transactions, investments, and savings across the continent with asset-backed stability",
      icon: <MdAccountBalance className="w-8 h-8 text-flame" />
    },
    {
      title: "Lower-Cost Remittances",
      description: "Addressing Africa's high remittance fees through blockchain solutions",
      icon: <MdPeople className="w-8 h-8 text-flame" />
    },
    {
      title: "Agricultural Supply Chains",
      description: "Revolutionizing agricultural tracking and trade through blockchain technology",
      icon: <MdAgriculture className="w-8 h-8 text-flame" />
    },
    {
      title: "Innovation Hub",
      description: "Creating new opportunities for African developers to lead in Web3",
      icon: <MdLightbulb className="w-8 h-8 text-flame" />
    }
  ];

  return (
    <div className="min-h-screen mt-20 relative overflow-hidden bg-spacecadet">
      {/* Kanga-inspired pattern overlay */}
      <div className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23EC5022' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Hero Section */}
      <section className="relative max-w-6xl mx-auto px-4 py-20">
        <div className="bg-spacecadet/30 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-dun/10">
          <h1 className="font-morgath text-5xl md:text-7xl text-dun mb-8">
            Sanidi
          </h1>
          <p className="font-montserrat text-2xl text-flame mb-4">
            "Build" in Swahili—because we're building more than tools, we're building the future.
          </p>
          <p className="font-montserrat text-xl text-dun/90 mb-8">
            Born from the minds of two East African women technologists and co-founders of Daobitat (a property tokenization platform), Sanidi represents a bridge to Africa's Web3 future.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="relative max-w-6xl mx-auto px-4 py-20">
        <div className="bg-flame/5 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-flame/10">
          <h2 className="font-morgath text-4xl text-flame mb-8">Our Mission</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/5 p-6 rounded-xl">
              <h3 className="text-dun text-xl font-bold mb-4">Simplify Web3</h3>
              <p className="text-dun/80">Creating intuitive, visual tools that make Web3 development accessible to everyone.</p>
            </div>
            <div className="bg-white/5 p-6 rounded-xl">
              <h3 className="text-dun text-xl font-bold mb-4">Empower Africa</h3>
              <p className="text-dun/80">Enabling African developers to build solutions that address continental needs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="relative max-w-6xl mx-auto px-4 py-20">
        <div className="bg-dun/5 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-dun/10">
          <h2 className="font-morgath text-4xl text-dun mb-8">The Challenges We Address</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {challenges.map((challenge, index) => (
              <div key={index} className="bg-white/5 p-6 rounded-xl">
                <div className="text-3xl mb-4">{challenge.icon}</div>
                <h3 className="text-dun text-xl font-bold mb-2">{challenge.title}</h3>
                <p className="text-flame/80 text-sm mb-2">{challenge.titleSw}</p>
                <p className="text-dun/80">{challenge.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Future Vision Section */}
      <section className="relative max-w-6xl mx-auto px-4 py-20">
        <div className="bg-spacecadet/30 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-flame/10">
          <h2 className="font-morgath text-4xl text-flame mb-8">The Future We See</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {opportunities.map((opportunity, index) => (
              <div key={index} className="bg-white/5 p-6 rounded-xl">
                <div className="mb-4">{opportunity.icon}</div>
                <h3 className="text-dun text-xl font-bold mb-4">{opportunity.title}</h3>
                <p className="text-dun/80">{opportunity.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative max-w-6xl mx-auto px-4 py-20">
        <div className="text-center">
          <p className="text-dun/90 text-xl mb-8">
            Sanidi can't solve everything, but we're committed to fixing this one bit at a time.
          </p>
          <Link 
            to="/join"
            className="inline-block bg-flame text-dun font-montserrat text-lg px-12 py-6 
                     rounded-xl shadow-lg hover:bg-flame/90 transition-all duration-300
                     hover:shadow-xl hover:-translate-y-0.5"
          >
            Join Our Journey
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;