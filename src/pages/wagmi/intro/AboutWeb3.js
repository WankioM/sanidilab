import React from "react";

export const AboutWeb3 = ({ isOpen, onClose }) => {
    return (
      <div className="mt-4 p-6 bg-white rounded-xl border-2 border-dun/10">
        <h3 className="text-xl font-montserrat font-semibold text-spacecadet mb-4">About Web3</h3>
        <p className="text-gray-600 mb-4">
          Web3 represents the next evolution of the internet, built on blockchain technology.
          It enables direct peer-to-peer interactions and gives users control over their digital assets and data.
        </p>
        {/* Add more content as needed */}
      </div>
    );
  };

  export default AboutWeb3;