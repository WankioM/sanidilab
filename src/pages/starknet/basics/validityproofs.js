import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const ValidityProofs = () => {
  const navigate = useNavigate();
  
  const blocks = [
    {
      id: 1,
      title: "Step 1: Transaction Execution",
      emoji: "💻",
      description: "The transaction is executed off-chain and the state transition is computed.",
      details: "Multiple transactions are bundled and processed together to create a state update."
    },
    {
      id: 2,
      title: "Step 2: Proof Generation",
      emoji: "🔄",
      description: "A validity proof is generated to verify the correctness of the computation.",
      details: "The prover creates a cryptographic proof that demonstrates the computation was done correctly."
    },
    {
      id: 3,
      title: "Step 3: Proof Verification",
      emoji: "✅",
      description: "The proof is verified on-chain to ensure the computation was valid.",
      details: "Ethereum's smart contract verifies the proof efficiently without re-executing the computation."
    },
    {
      id: 4,
      title: "Step 4: State Update",
      emoji: "📝",
      description: "The new state is committed to the blockchain.",
      details: "Once the proof is verified, the state update is finalized and becomes part of the blockchain."
    },
    {
      id: 5,
      title: "Step 5: Finality",
      emoji: "🎯",
      description: "The transaction is now final and cannot be reversed.",
      details: "Mathematical guarantees ensure that the state transition is valid and permanent."
    }
  ];

  // Create refs for each block
  const blockRefs = useRef([]);

  useEffect(() => {
    // Set up intersection observer
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          entry.target.classList.remove('opacity-0', 'translate-y-[-50px]');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe all block elements
    blockRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const handleNext = () => {
    navigate('/next-page'); // Update with your desired route
  };

  return (
    <div className="min-h-screen bg-spacecadet flex flex-col">
      {/* Fixed Header */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <div className="h-[8vh] bg-spacecadet/90 border-b border-dun/20 flex items-center justify-center backdrop-blur-sm">
          <h1 className="text-2xl font-morgath text-flame">Validity Proofs</h1>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 relative overflow-y-auto pt-[8vh]">
        {/* Background with animated gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-spacecadet/85 via-[#21253A]/80 to-spacecadet/75" />

        {/* Content Container */}
        <div className="relative z-10 container mx-auto px-4 py-16">
          <div className="max-w-3xl mx-auto space-y-16">
            {blocks.map((block, index) => (
              <div
                key={block.id}
                ref={el => blockRefs.current[index] = el}
                className="opacity-0 translate-y-[-50px] transition-all duration-1000 ease-out"
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border-2 border-dun/20 transform hover:scale-102 transition-transform duration-300">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-4xl">{block.emoji}</span>
                    <h2 className="text-2xl font-morgath text-flame">{block.title}</h2>
                  </div>
                  <div className="space-y-4">
                    <p className="text-lg font-montserrat text-dun">
                      {block.description}
                    </p>
                    <p className="text-sm font-montserrat text-dun/80">
                      {block.details}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Validity Rollup Explanation */}
          <div className="mt-16 mb-8">
            <div className="max-w-3xl mx-auto">
              <div 
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border-2 border-dun/20 transform transition-all duration-300 hover:scale-102 cursor-pointer group"
                role="button"
                tabIndex={0}
              >
                <div className="flex items-center justify-center gap-4 mb-4">
                  <span className="text-5xl group-hover:animate-bounce">📚</span>
                  <h3 className="text-xl font-morgath text-flame">Real life Illustration on Validity Rollups</h3>
                </div>
                <div className="overflow-hidden transition-all duration-500 max-h-0 group-hover:max-h-96">
                  <div className="p-4 rounded-lg bg-white/5">
                    <p className="text-dun font-montserrat mb-4">
                      <strong>Without a rollup</strong>: You grade every exam yourself, checking each answer one by one—slow and tedious, like Ethereum processing every transaction.
                    </p>
                    <p className="text-dun font-montserrat">
                      <strong>With a Validity Rollup</strong>: A trusted assistant grades all the exams and hands you a proof guaranteeing accuracy—just one quick check, and you're done, like Ethereum verifying a single proof.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Next Button */}
          <div className="mt-16 flex justify-center">
            <button
              onClick={handleNext}
              className="bg-gradient-to-r from-flame to-flame/80 text-dun font-morgath text-xl px-12 py-4 
                       rounded-xl hover:from-flame/90 hover:to-flame/70 transform hover:scale-102
                       transition-all duration-300 ease-in-out"
            >
              Now, Lets have a look at Smart Wallets ➡️
            </button>
          </div>
        </div>
      </div>

      {/* Animated background elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-4 w-72 h-72 bg-flame rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-[blob_7s_infinite]" />
        <div className="absolute top-1/4 -right-4 w-72 h-72 bg-dun rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-[blob_7s_infinite_2s]" />
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-flame rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-[blob_7s_infinite_4s]" />
      </div>
    </div>
  );
};

export default ValidityProofs;