import React from 'react';
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from 'recharts';

const BitcoinTracker = () => {
  const priceData = [
    { date: '16 Dec', price: 42000 },
    { date: '17 Dec', price: 42500 },
    { date: '18 Dec', price: 42300 },
    { date: '19 Dec', price: 46300 },
    { date: '20 Dec', price: 44500 },
    { date: '21 Dec', price: 44000 },
    { date: '22 Dec', price: 43000 },
  ];

  const renderPerformanceBar = (current, min, max) => {
    const percentage = ((current - min) / (max - min)) * 100;
    return (
      <div className="w-full h-2 bg-gray-200 rounded-full mt-2">
        <div className="relative w-full">
          <div className="absolute h-full w-full bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 rounded-full" />
          <div className="absolute top-0 -mt-1" style={{ left: `${percentage}%` }}>
            <div className="w-0 h-0 border-l-4 border-r-4 border-b-8 border-l-transparent border-r-transparent border-b-black" />
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white rounded-lg shadow-sm">
      {/* Header */}
      <nav className="flex items-center justify-between mb-8">
        <div className="flex space-x-8">
          <img src="/api/placeholder/120/32" alt="KoinX Logo" className="h-8" />
          <div className="flex items-center space-x-6 text-gray-600">
            <span>Crypto Taxes</span>
            <span>Free Tools</span>
            <span>Resource Center</span>
          </div>
        </div>
        <button className="bg-blue-600 text-white px-6 py-2 rounded-lg">
          Get Started
        </button>
      </nav>

      {/* Breadcrumb */}
      <div className="text-gray-600 mb-6">
        Cryptocurrencies &gt; Bitcoin
      </div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="flex-grow">
          {/* Bitcoin Header */}
          <div className="flex items-center gap-4 mb-8">
            <div className="flex items-center gap-2">
              <div className="bg-orange-500 rounded-full p-2">
                <img src="/api/placeholder/32/32" alt="Bitcoin" className="w-8 h-8" />
              </div>
              <div>
                <h1 className="text-2xl font-bold">Bitcoin</h1>
                <span className="text-gray-600">BTC</span>
              </div>
            </div>
            <span className="bg-gray-200 px-3 py-1 rounded-full text-sm">Rank #1</span>
          </div>

          {/* Price Section */}
          <div className="mb-8">
            <h2 className="text-4xl font-bold mb-2">$46,953.04</h2>
            <div className="flex items-center gap-2">
              <span className="text-lg text-green-500">▲ 2.51%</span>
              <span className="text-gray-500">(24H)</span>
            </div>
          </div>

          {/* Price Chart */}
          <div className="h-[300px] mb-8">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={priceData}>
                <XAxis dataKey="date" />
                <YAxis domain={['auto', 'auto']} />
                <Line type="monotone" dataKey="price" stroke="#2563eb" strokeWidth={2} dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Navigation Tabs */}
          <div className="flex border-b mb-8">
            <button className="px-4 py-2 text-blue-600 border-b-2 border-blue-600">Overview</button>
            <button className="px-4 py-2 text-gray-600">Fundamentals</button>
            <button className="px-4 py-2 text-gray-600">News Insights</button>
            <button className="px-4 py-2 text-gray-600">Sentiments</button>
            <button className="px-4 py-2 text-gray-600">Team</button>
            <button className="px-4 py-2 text-gray-600">Technicals</button>
            <button className="px-4 py-2 text-gray-600">Tokenomics</button>
          </div>

          {/* Performance Section */}
          <div className="border-t pt-8">
            <h3 className="text-xl font-semibold mb-6">Performance</h3>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-600">Today's Low</span>
                  <span className="text-gray-600">Today's High</span>
                </div>
                <div className="flex justify-between">
                  <span>$46,930.22</span>
                  <span>$49,343.83</span>
                </div>
                {renderPerformanceBar(48637.83, 46930.22, 49343.83)}
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-600">52W Low</span>
                  <span className="text-gray-600">52W High</span>
                </div>
                <div className="flex justify-between">
                  <span>$16,930.22</span>
                  <span>$49,743.83</span>
                </div>
                {renderPerformanceBar(48637.83, 16930.22, 49743.83)}
              </div>
            </div>
          </div>

          {/* Fundamentals Section */}
          <div className="mt-8 border-t pt-8">
            <h3 className="text-xl font-semibold mb-6">Fundamentals</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex justify-between py-3 border-b">
                <span className="text-gray-600">Bitcoin Price</span>
                <span className="font-medium">$16,815.46</span>
              </div>
              <div className="flex justify-between py-3 border-b">
                <span className="text-gray-600">Market Cap</span>
                <span className="font-medium">$323,507,290,047</span>
              </div>
              <div className="flex justify-between py-3 border-b">
                <span className="text-gray-600">24h Low / 24h High</span>
                <span className="font-medium">$16,382.07 / $16,874.12</span>
              </div>
              <div className="flex justify-between py-3 border-b">
                <span className="text-gray-600">Market Cap Dominance</span>
                <span className="font-medium">38.343%</span>
              </div>
              <div className="flex justify-between py-3 border-b">
                <span className="text-gray-600">Trading Volume</span>
                <span className="font-medium">$23,249,202,782</span>
              </div>
              <div className="flex justify-between py-3 border-b">
                <span className="text-gray-600">All-Time High</span>
                <div className="text-right">
                  <div className="font-medium">$69,044.77</div>
                  <div className="text-red-500 text-sm">-75.6%</div>
                  <div className="text-gray-500 text-sm">Nov 10, 2021 (about 1 year)</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="w-full lg:w-80">
          <div className="bg-blue-600 text-white p-6 rounded-lg mb-6">
            <h3 className="text-2xl font-bold mb-4">Get Started with KoinX for FREE</h3>
            <p className="mb-4">With our range of features that you can equip for free, KoinX allows you to be more educated and aware of your tax reports.</p>
            <img src="/api/placeholder/240/160" alt="Illustration" className="mx-auto mb-4" />
            <button className="w-full bg-white text-black font-bold py-2 rounded-lg">
              Get Started for FREE →
            </button>
          </div>

          <div className="bg-white p-4 rounded-lg">
            <h3 className="text-lg font-bold mb-4">Trending Coins (24h)</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <img src="/api/placeholder/24/24" alt="Ethereum" className="w-6 h-6" />
                  <span>Ethereum (ETH)</span>
                </div>
                <span className="text-green-500">▲ 8.21%</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <img src="/api/placeholder/24/24" alt="Bitcoin" className="w-6 h-6" />
                  <span>Bitcoin (BTC)</span>
                </div>
                <span className="text-green-500">▲ 5.26%</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <img src="/api/placeholder/24/24" alt="Polygon" className="w-6 h-6" />
                  <span>Polygon (MATIC)</span>
                </div>
                <span className="text-green-500">▲ 4.32%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BitcoinTracker;