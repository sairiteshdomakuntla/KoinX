// src/components/Header.jsx
import React from 'react';
import { ChevronRight } from 'lucide-react';

const Header = () => {
  return (
    <header className="flex justify-between items-center px-6 py-4 border-b">
      <div className="flex items-center gap-12">
        <img src="/api/placeholder/120/40" alt="KoinX" className="h-6" />
        <nav className="flex gap-8">
          <span>Crypto Taxes</span>
          <span>Free Tools</span>
          <span>Resource Center</span>
        </nav>
      </div>
      <button className="bg-blue-600 text-white px-6 py-2 rounded-lg">
        Get Started
      </button>
    </header>
  );
};

export default Header;
