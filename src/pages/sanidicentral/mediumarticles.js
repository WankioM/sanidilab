import React, { useState } from 'react';
import { HiArrowUpRight, HiBookmark, HiClock } from 'react-icons/hi2';

const MediumArticles = () => {
  const [hoveredArticle, setHoveredArticle] = useState(null);

  const articles = [
    {
      id: 1,
      date: "Mar 1, 2024",
      readTime: "6 min read",
      title: "The Terrifying Joy of Success in Web3",
      titleSw: "Furaha ya Kutisha ya Mafanikio katika Web3",
      description: "Exploring the complex emotions and high stakes of achieving success while innovating in the Web3 space.",
      descriptionSw: "Kuchunguza hisia ngumu na changamoto za kupata mafanikio katika ubunifu wa Web3.",
      tags: ["Web3", "Personal Growth", "Innovation", "Success"],
      link: "https://medium.com/@tracywankio29/the-terrifying-joy-of-success-in-web3-a12b21370816"
    },
    {
      id: 2,
      date: "Feb 22, 2024",
      readTime: "8 min read",
      title: "Choosing the Right Blockchain: A Guide for Your Project",
      titleSw: "Kuchagua Blockchain Sahihi: Mwongozo wa Mradi Wako",
      description: "A comprehensive guide to selecting the optimal blockchain based on your project's needs, from transaction speed to ecosystem support.",
      descriptionSw: "Mwongozo kamili wa kuchagua blockchain kulingana na mahitaji ya mradi wako, kutoka kasi ya miamala hadi msaada wa ikolojia.",
      tags: ["Blockchain", "Development", "Guide", "Technical"],
      link: "https://medium.com/@tracywankio29/choosing-the-right-blockchain-a-guide-to-making-the-best-choice-for-your-project-939d35cf3cc0"
    },
    {
      id: 3,
      date: "Jan 25, 2025",
      readTime: "8 min read",
      title: "Not So Direct Democracy: A Smarter Approach to Web3 Governance",
      titleSw: "Sio Demokrasia ya Moja kwa Moja: Njia Bora kwa Utawala wa Web3",
      description: "An insightful exploration of why direct democracy often falls short in Web3 governance and how indirect accountability can lead to more effective and equitable decision-making.",
      descriptionSw: "Uchunguzi wenye maarifa wa kwa nini demokrasia ya moja kwa moja mara nyingi inashindwa katika utawala wa Web3 na jinsi uwajibikaji wa moja kwa moja unaweza kusababisha maamuzi bora na ya haki.",
      tags: ["Web3", "Governance", "Blockchain", "Accountability"],
      link: "https://medium.com/@tracywankio29/not-so-direct-democracy-a-smarter-approach-to-web3-governance-ec6e028df055"
    }
    
  ];

  return (
    <div className="max-w-5xl mx-auto">
      <div className="space-y-8">
        {articles.map((article) => (
          <div
            key={article.id}
            onMouseEnter={() => setHoveredArticle(article.id)}
            onMouseLeave={() => setHoveredArticle(null)}
            className="group relative bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden
                     border-2 border-dun/20 hover:border-flame/50 transition-all duration-300"
          >
            {/* Article Content */}
            <div className="p-8">
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-4 text-dun/60">
                  <span>{article.date}</span>
                  <div className="flex items-center space-x-1">
                    <HiClock className="w-4 h-4" />
                    <span>{article.readTime}</span>
                  </div>
                </div>
                <button className="p-2 rounded-full bg-white/5 text-flame hover:bg-flame/20 transition-colors">
                  <HiBookmark className="w-5 h-5" />
                </button>
              </div>

              {/* Title */}
              <h3 className="font-montserrat text-2xl font-bold text-dun mb-2">
                {hoveredArticle === article.id ? article.titleSw : article.title}
              </h3>

              {/* Description */}
              <p className="text-dun/80 mb-6">
                {hoveredArticle === article.id ? article.descriptionSw : article.description}
              </p>

              {/* Tags and Link */}
              <div className="flex items-center justify-between">
                <div className="flex flex-wrap gap-2">
                  {article.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full text-sm bg-flame/10 text-flame"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={article.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-flame hover:text-flame/80 transition-colors"
                >
                  <span>Read More</span>
                  <HiArrowUpRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MediumArticles;