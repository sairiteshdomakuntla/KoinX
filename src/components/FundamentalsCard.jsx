// src/components/FundamentalsCard.jsx
import React from 'react';
import { Info } from 'lucide-react';

const FundamentalsCard = () => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <div className="flex items-center gap-2 mb-6">
        <h2 className="text-xl font-bold">Fundamentals</h2>
        <Info className="w-5 h-5 text-gray-400" />
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div className="space-y-4">
          <div className="flex justify-between py-3 border-b">
            <span className="text-gray-500">Bitcoin Price</span>
            <span>$16,815.46</span>
          </div>
          {/* Add more rows here as needed */}
        </div>

        <div className="space-y-4">
          {/* Add your data here */}
        </div>
      </div>
    </div>
  );
};

export default FundamentalsCard;
