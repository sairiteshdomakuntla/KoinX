// src/components/AboutBitcoinCard.jsx
import React from 'react';

const AboutBitcoinCard = () => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-xl font-bold mb-4">About Bitcoin</h2>
      <div className="border-b pb-4 mb-4">
        <h3 className="font-bold mb-2">What is Bitcoin?</h3>
        <p className="text-gray-600">
          Bitcoin's price today is US$16,951.82, with a 24-hour trading volume of $19.14 B...
        </p>
      </div>
    </div>
  );
};

export default AboutBitcoinCard;
