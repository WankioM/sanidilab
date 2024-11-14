import React from 'react';
import { Link } from 'react-router-dom';

const AboutUs = () => {
  return (
    <div className="min-h-screen mt-20 relative overflow-hidden bg-spacecadet">
      {/* Subtle Kanga-inspired pattern overlay */}
      <div className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("https://i.pinimg.com/736x/bf/c3/47/bfc347c729c75988f2f603c9c96aa376.jpg")`,
          backgroundRepeat: 'repeat', // Add this if you want the pattern to repeat
          backgroundSize: 'auto' // or specify a size like '200px' or 'cover'
        }}
      />

      <div className="relative max-w-4xl mx-auto px-4 py-20 space-y-24 font-montserrat">
        {/* Opening Section */}
        <section className="prose prose-xl prose-invert">
          <div className="bg-spacecadet/30 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-dun/10">
            <h1 className="font-morgath text-5xl md:text-7xl text-dun mb-8">Sanidi</h1>
            <p className="text-flame italic">"Build" in Swahili—because we're building more than tools, we're building the future.</p>
            <p className="text-dun/90">Born from the minds of two East African women technologists and co-founders of Daobitat (a property tokenization platform), Sanidi represents a bridge to Africa's Web3 future.</p>
          </div>
        </section>

        {/* Our Journey */}
        <section className="prose prose-xl prose-invert">
          <div className="bg-flame/5 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-flame/10">
            <h2 className="font-morgath text-4xl text-flame">SAFARI YETU</h2>
            <p className="text-flame/80 italic mb-6">"Our Journey"</p>
            <p className="text-dun/90 pb-2">The world is rapidly evolving, and traditional paths to prosperity are being redefined. As co-founders of Daobitat, we witnessed firsthand how Web3 technologies could revolutionize traditional systems, particularly in property ownership and investment. However, we also noticed a critical gap: the need for more African developers to participate in shaping this new digital frontier.</p>
            <p className="text-dun/90">This realization led us to a twofold mission: to simplify Web3 development through intuitive, visual tools, and to empower African developers to build solutions that address continental needs.</p>
          </div>
        </section>

        {/* The Ripple Effect */}
        <section className="prose prose-xl prose-invert">
          <div className="bg-dun/5 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-dun/10">
            <h2 className="font-morgath text-4xl text-dun">Haba na haba hujaza kibaba</h2>
            <p className="text-flame/80 italic mb-6">"Little by little fills the measure"</p>
            <p className="text-dun/90 pb-2">Across Africa, our Web3 developers face unique challenges. Limited internet access. Fragmented support networks. Language barriers. Cross-border collaboration hurdles. These aren't just challenges—they're opportunities waiting for innovative solutions.</p>
            <p className="text-dun/90">At Sanidi, we are the 'haba'—the little—but we believe in the power of small beginnings. Like a ripple in a pond that eventually reaches every shore, each developer we empower, each tool we simplify, contributes to a greater wave of African innovation in Web3.</p>
          </div>
        </section>

        {/* Vision for Tomorrow */}
        <section className="prose prose-xl prose-invert">
          <div className="bg-spacecadet/30 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-flame/10">
            <h2 className="font-morgath text-4xl text-flame">YA KESHO</h2>
            <p className="text-flame/80 italic mb-6">"Tomorrow's Promise"</p>
            <p className="text-dun/90 pb-2">We see a future where African developers lead the charge in transforming our continent through Web3. A future where our solutions address our unique challenges: stable digital currencies that truly serve our needs, remittance systems that don't drain our resources, and agricultural supply chains that empower our farmers.</p>
            <p className="text-dun/90">This isn't just a dream—it's an inevitability. The only question is: who will build it? We believe it should be us, Africans, crafting solutions that understand our context, our challenges, and our potential.</p>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center prose prose-xl prose-invert">
          <p className="text-2xl text-dun/90 italic">"Tanga ndeko, te tozala na ekolo."</p>
          <p className="text-flame/80">Little by little, we grow as a people.</p>
          <div className="mt-12">
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
    </div>
  );
};

export default AboutUs;