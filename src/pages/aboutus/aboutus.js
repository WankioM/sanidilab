import React from 'react';
import { Link } from 'react-router-dom';

const AboutUs = () => {
  return (
    <div className="min-h-[calc(100vh-80px)] mt-20 relative overflow-hidden">
      {/* Radial gradient background */}
      <div className="absolute inset-0 bg-spacecadet">
        <div className="absolute inset-0">
          <div 
            className="w-full h-full"
            style={{
              background: `
                radial-gradient(circle at 30% 40%, 
                  rgba(236, 80, 34, 0.4) 0%, 
                  rgba(236, 80, 34, 0) 40%
                ),
                radial-gradient(circle at 70% 60%, 
                  rgba(226, 210, 184, 0.4) 0%, 
                  rgba(226, 210, 184, 0) 40%
                )
              `
            }}
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24">
        <div className="bg-spacecadet/30 backdrop-blur-lg rounded-2xl p-8 md:p-12 border border-dun/10">
          <h1 className="font-montserrat text-4xl md:text-5xl font-bold text-dun mb-8">
            About Us
          </h1>

          <div className="space-y-6 font-montserrat text-lg text-dun/90">
            <p>
              At <span className="text-flame font-semibold">Sanidi</span>, we are two passionate individuals committed to simplifying your Web3 journey. Our mission is to make connecting to smart contracts easy for everyone, regardless of technical expertise. Whether you're just starting out or have limited knowledge of coding, we're here to guide you every step of the way.
            </p>

            <p>
              We believe in the power of community, and that's why our code is open source. Anyone interested in contributing, learning, or sharing knowledge is welcome to join us. We've also incorporated Swahili words to ensure our platform is accessible and easy to understand for Swahili-speaking users.
            </p>

            <p>
              Let us help you connect to the future of the web, effortlessly.
            </p>

            <div className="pt-8">
              <Link 
                to="/join"
                className="inline-block bg-flame text-dun font-montserrat text-lg px-8 py-4 
                           rounded-lg shadow-lg hover:bg-flame/90 transition-all duration-300
                           hover:shadow-xl hover:-translate-y-0.5"
              >
                Join Us
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Additional decorative elements */}
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-flame/10 rounded-full blur-3xl" />
      <div className="absolute top-0 right-0 w-64 h-64 bg-dun/10 rounded-full blur-3xl" />
    </div>
  );
};

export default AboutUs;