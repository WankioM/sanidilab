import React, { useState } from 'react';

const ComparisonSection = () => {
  const [activeComparison, setActiveComparison] = useState(null);

  const comparisons = [
    {
      attribute: "Transparency",
      stark: {
        title: "Transparent Setup",
        description: "STARKs require no trusted setup. The system can be verified by anyone without relying on initially generated parameters, making it more transparent and reducing security assumptions.",
        advantage: "STARK"
      },
      snark: {
        title: "Trusted Setup Required",
        description: "SNARKs require a trusted setup phase where initial parameters are generated. If this setup is compromised, the system's security could be affected.",
        advantage: "STARK"
      }
    },
    {
      attribute: "Proof Size",
      stark: {
        title: "Larger Proofs",
        description: "STARK proofs are typically larger in size, which can lead to higher gas costs when verifying proofs on-chain.",
        advantage: "SNARK"
      },
      snark: {
        title: "Compact Proofs",
        description: "SNARK proofs are more succinct, resulting in lower gas costs for on-chain verification.",
        advantage: "SNARK"
      }
    },
    {
      attribute: "Proof Generation",
      stark: {
        title: "Faster Generation",
        description: "STARKs generally offer faster proof generation times, making them more efficient for complex computations.",
        advantage: "STARK"
      },
      snark: {
        title: "Slower Generation",
        description: "SNARKs typically have slower proof generation times, especially for complex computations.",
        advantage: "STARK"
      }
    }
  ];

  return (
    <div className="backdrop-blur-sm bg-white/5 rounded-xl p-8 border-2 border-dun/20">
      <h2 className="text-4xl font-bold mb-8 font-morgath text-flame text-center">
        STARKs vs SNARKs
      </h2>

      {/* Comparison Navigation */}
      <div className="flex flex-wrap gap-4 mb-8 justify-center">
        {comparisons.map((comparison, index) => (
          <button
            key={index}
            onClick={() => setActiveComparison(index)}
            className={`group p-4 text-xl font-bold rounded-xl font-morgath transform hover:scale-[1.02] transition-all duration-300
              ${activeComparison === index
                ? 'bg-gradient-to-r from-flame to-flame/80 text-dun'
                : 'bg-white/5 border-2 border-dun/20 text-dun hover:border-flame/50'
              }`}
          >
            <span className="min-w-[200px] inline-block">{comparison.attribute}</span>
          </button>
        ))}
      </div>

      {/* Comparison Content */}
      {activeComparison !== null && (
        <div className="mt-8 grid md:grid-cols-2 gap-8">
          {/* STARK Side */}
          <div className="backdrop-blur-sm bg-white/5 rounded-xl p-6 border-2 border-dun/20">
            <h3 className="text-2xl font-morgath text-flame mb-4">STARK</h3>
            <h4 className="text-xl font-morgath text-dun mb-2">
              {comparisons[activeComparison].stark.title}
            </h4>
            <p className="text-lg font-montserrat text-dun/80">
              {comparisons[activeComparison].stark.description}
            </p>
          </div>

          {/* SNARK Side */}
          <div className="backdrop-blur-sm bg-white/5 rounded-xl p-6 border-2 border-dun/20">
            <h3 className="text-2xl font-morgath text-flame mb-4">SNARK</h3>
            <h4 className="text-xl font-morgath text-dun mb-2">
              {comparisons[activeComparison].snark.title}
            </h4>
            <p className="text-lg font-montserrat text-dun/80">
              {comparisons[activeComparison].snark.description}
            </p>
          </div>

          {/* Advantage Indicator */}
          <div className="md:col-span-2 text-center mt-4">
            <p className="text-xl font-morgath text-flame">
              Advantage: {comparisons[activeComparison].advantage}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ComparisonSection;