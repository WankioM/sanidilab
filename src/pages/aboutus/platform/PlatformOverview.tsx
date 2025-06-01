import React, { useState, useEffect } from 'react';
import { 
  HiArrowRight, 
  HiClock, 
  HiCheckCircle, 
  HiPlay, 
  HiCalendar,
  HiCog,
  HiAcademicCap,
  HiTrendingUp,
  HiX
} from 'react-icons/hi';

const PlatformOverview = () => {
  const [activeWeek, setActiveWeek] = useState(0);
  const [timeRemaining, setTimeRemaining] = useState({
    days: 42,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  // Countdown timer effect
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const weeklyData = [
    {
      week: "1-2",
      title: "Discovery & Planning",
      subtitle: "Uchunguzi na Mipango",
      icon: <HiCog className="w-8 h-8" />,
      description: "Business assessment, use case identification, integration mapping",
      deliverables: [
        "Implementation roadmap",
        "Technical requirements",
        "Team assignments"
      ],
      visual: "consultation meetings, system analysis diagrams",
      color: "from-orange-500/20 to-orange-400/10"
    },
    {
      week: "3-4",
      title: "Setup & Integration",
      subtitle: "Usanidi na Muunganisho",
      icon: <HiCog className="w-8 h-8" />,
      description: "Platform deployment, API connections, template customization",
      deliverables: [
        "Connected systems",
        "Configured templates",
        "Testing environment"
      ],
      visual: "system integration flows, dashboard previews",
      color: "from-blue-500/20 to-blue-400/10"
    },
    {
      week: "5-6",
      title: "Launch & Training",
      subtitle: "Uzinduzi na Mafunzo",
      icon: <HiAcademicCap className="w-8 h-8" />,
      description: "Go-live deployment, team training, performance optimization",
      deliverables: [
        "Live Web3 system",
        "Trained team",
        "Ongoing support plan"
      ],
      visual: "live dashboards, team training sessions, success metrics",
      color: "from-green-500/20 to-green-400/10"
    }
  ];

  const comparisonData = [
    {
      metric: "Timeline",
      traditional: "18+ months",
      sanidi: "6 weeks",
      icon: <HiClock className="w-6 h-6" />
    },
    {
      metric: "Investment",
      traditional: "$2.5M+",
      sanidi: "$250K-500K",
      icon: <HiTrendingUp className="w-6 h-6" />
    },
    {
      metric: "Success Rate",
      traditional: "10% success",
      sanidi: "Proven methodology",
      icon: <HiCheckCircle className="w-6 h-6" />
    },
    {
      metric: "Approach",
      traditional: "Rebuild everything",
      sanidi: "Enhance existing",
      icon: <HiCog className="w-6 h-6" />
    },
    {
      metric: "Language Support",
      traditional: "English only",
      sanidi: "Multi-language",
      icon: <HiAcademicCap className="w-6 h-6" />
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-orange-500 mb-6">
              From Enterprise to Web3
            </h1>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-100 mb-8">
              in 6 Weeks
            </h2>
            
            {/* Countdown Timer */}
            <div className="flex justify-center mb-8">
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
                <p className="text-gray-300 mb-4">Your transformation timeline:</p>
                <div className="flex gap-6 text-center">
                  <div className="flex flex-col">
                    <span className="text-3xl font-bold text-orange-500">{timeRemaining.days}</span>
                    <span className="text-sm text-gray-400">Days</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-3xl font-bold text-orange-500">{timeRemaining.hours}</span>
                    <span className="text-sm text-gray-400">Hours</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-3xl font-bold text-orange-500">{timeRemaining.minutes}</span>
                    <span className="text-sm text-gray-400">Minutes</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-3xl font-bold text-orange-500">{timeRemaining.seconds}</span>
                    <span className="text-sm text-gray-400">Seconds</span>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-xl sm:text-2xl text-gray-300 mb-4 max-w-3xl mx-auto">
              Transform your business with Web3 without rebuilding everything
            </p>
            <p className="text-lg text-orange-400 mb-12">
              Badilisha biashara yako kwa Web3 bila kujenga upya kila kitu
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button className="group bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold text-lg px-8 py-4 rounded-xl hover:from-orange-600 hover:to-orange-700 transform hover:scale-105 transition-all duration-300 flex items-center gap-3">
                <HiPlay className="w-6 h-6" />
                <span>Interactive Demo</span>
              </button>
              <button className="group bg-transparent border-2 border-gray-600 text-gray-100 font-semibold text-lg px-8 py-4 rounded-xl hover:border-orange-500 hover:bg-orange-500/10 transform hover:scale-105 transition-all duration-300 flex items-center gap-3">
                <HiCalendar className="w-6 h-6" />
                <span>Book Consultation</span>
                <HiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Hero Visual */}
          <div className="flex justify-center">
            <div className="relative max-w-4xl w-full">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                  <h3 className="text-xl text-gray-300 mb-4 text-center">Traditional Enterprise</h3>
                  <div className="aspect-video bg-gray-700 rounded-lg flex items-center justify-center">
                    <span className="text-gray-400">Legacy Systems</span>
                  </div>
                </div>
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-orange-500/50">
                  <h3 className="text-xl text-orange-400 mb-4 text-center">Web3-Enabled</h3>
                  <div className="aspect-video bg-orange-500/20 rounded-lg flex items-center justify-center">
                    <span className="text-orange-300">Smart Contracts + Integration</span>
                  </div>
                </div>
              </div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-orange-500 text-white rounded-full p-3 border-4 border-gray-900">
                <HiArrowRight className="w-8 h-8" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6-Week Journey Timeline */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-orange-500 mb-6">The 6-Week Journey</h2>
            <p className="text-xl text-gray-300">Safari ya Wiki Sita</p>
          </div>

          {/* Week Selection */}
          <div className="flex justify-center mb-12">
            <div className="flex bg-gray-800/50 rounded-2xl p-2">
              {weeklyData.map((week, index) => (
                <button
                  key={index}
                  onClick={() => setActiveWeek(index)}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    activeWeek === index 
                      ? 'bg-orange-500 text-white' 
                      : 'text-gray-400 hover:text-gray-200 hover:bg-gray-700'
                  }`}
                >
                  Week {week.week}
                </button>
              ))}
            </div>
          </div>

          {/* Active Week Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className={`bg-gradient-to-br ${weeklyData[activeWeek].color} backdrop-blur-sm rounded-2xl p-8 border border-gray-700`}>
              <div className="flex items-center gap-4 mb-6">
                <div className="text-orange-500">
                  {weeklyData[activeWeek].icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-100">{weeklyData[activeWeek].title}</h3>
                  <p className="text-orange-400">{weeklyData[activeWeek].subtitle}</p>
                </div>
              </div>
              
              <p className="text-gray-300 mb-6 text-lg">
                {weeklyData[activeWeek].description}
              </p>

              <div className="mb-6">
                <h4 className="font-semibold text-gray-100 mb-3">Deliverables:</h4>
                <ul className="space-y-2">
                  {weeklyData[activeWeek].deliverables.map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <HiCheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0" />
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gray-700/50 rounded-lg p-4">
                <p className="text-sm text-gray-400">
                  <span className="font-semibold">Visual focus:</span> {weeklyData[activeWeek].visual}
                </p>
              </div>
            </div>

            <div className="space-y-6">
              {weeklyData.map((week, index) => (
                <div
                  key={index}
                  className={`p-6 rounded-xl border transition-all duration-300 cursor-pointer ${
                    activeWeek === index
                      ? 'border-orange-500/50 bg-orange-500/5 transform scale-105'
                      : 'border-gray-700 bg-gray-800/50 hover:border-gray-600'
                  }`}
                  onClick={() => setActiveWeek(index)}
                >
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-lg ${activeWeek === index ? 'bg-orange-500/20' : 'bg-gray-700'}`}>
                      <div className={activeWeek === index ? 'text-orange-500' : 'text-gray-400'}>
                        {week.icon}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg text-gray-100">Week {week.week}</h4>
                      <p className="text-gray-400">{week.title}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Before vs After Comparison */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-orange-500 mb-6">Traditional vs Sanidi Approach</h2>
            <p className="text-xl text-gray-300">Njia ya Kawaida dhidi ya Njia ya Sanidi</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Traditional Approach */}
            <div className="bg-red-900/20 backdrop-blur-sm rounded-2xl p-8 border border-red-500/30">
              <div className="flex items-center gap-3 mb-6">
                <HiX className="w-8 h-8 text-red-400" />
                <h3 className="text-2xl font-bold text-red-300">Traditional Approach</h3>
              </div>
              <div className="space-y-4">
                {comparisonData.map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-red-900/20 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="text-red-400">{item.icon}</div>
                      <span className="text-gray-300">{item.metric}</span>
                    </div>
                    <span className="font-semibold text-red-300">{item.traditional}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Sanidi Approach */}
            <div className="bg-green-900/20 backdrop-blur-sm rounded-2xl p-8 border border-green-500/30">
              <div className="flex items-center gap-3 mb-6">
                <HiCheckCircle className="w-8 h-8 text-green-400" />
                <h3 className="text-2xl font-bold text-green-300">Sanidi Approach</h3>
              </div>
              <div className="space-y-4">
                {comparisonData.map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-green-900/20 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="text-green-400">{item.icon}</div>
                      <span className="text-gray-300">{item.metric}</span>
                    </div>
                    <span className="font-semibold text-green-300">{item.sanidi}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-12 border border-orange-500/30">
              <h3 className="text-3xl font-bold text-orange-500 mb-6">Ready to Transform Your Business?</h3>
              <p className="text-xl text-gray-300 mb-8">
                Join hundreds of enterprises already leveraging Web3 with Sanidi
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <button className="group bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold text-lg px-8 py-4 rounded-xl hover:from-orange-600 hover:to-orange-700 transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3">
                  <span>Start Your 6-Week Journey</span>
                  <HiArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="group bg-transparent border-2 border-gray-600 text-gray-100 font-semibold text-lg px-8 py-4 rounded-xl hover:border-orange-500 hover:bg-orange-500/10 transform hover:scale-105 transition-all duration-300">
                  Schedule a Demo
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PlatformOverview;