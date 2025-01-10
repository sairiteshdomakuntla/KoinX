// src/components/PerformanceCard.jsx
import React from 'react';

const PerformanceCard = () => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-xl font-bold mb-6">Performance</h2>

      <div className="flex justify-between mb-8">
        <div>
          <span className="text-sm text-gray-500">Today's Low</span>
          <p>46,930.22</p>
        </div>
        <div className="flex-1 mx-4 self-center">
          <div className="h-1.5 bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 rounded-full" />
        </div>
        <div>
          <span className="text-sm text-gray-500">Today's High</span>
          <p>49,343.83</p>
        </div>
      </div>
    </div>
  );
};

export default PerformanceCard;
