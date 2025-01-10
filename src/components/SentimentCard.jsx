import React from 'react';
import { ArrowRight, NewspaperIcon, TrendingUp } from 'lucide-react';

const SentimentSection = () => {
  return (
    <div className="bg-white p-6 rounded-lg mb-8">
      <h2 className="text-2xl font-bold mb-6">Sentiment</h2>
      
      {/* Key Events */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <h3 className="text-xl font-semibold">Key Events</h3>
          <div className="w-4 h-4 rounded-full bg-gray-200 text-gray-600 flex items-center justify-center text-xs">i</div>
        </div>
        
        <div className="flex gap-4 overflow-x-auto pb-4">
          <div className="min-w-[400px] bg-blue-50 p-4 rounded-lg">
            <div className="flex gap-3">
              <div className="bg-blue-500 p-2 rounded-full h-fit">
                <NewspaperIcon className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="font-medium mb-2">Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim mattis enim tincidunt.</p>
                <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est faucibus metus quis. Amet sapien quam viverra adipiscing condimentum. Ac consectetur et pretium in a bibendum in. Sed vitae sit nisi viverra natoque lacinia libero enim.</p>
              </div>
            </div>
          </div>

          <div className="min-w-[400px] bg-green-50 p-4 rounded-lg">
            <div className="flex gap-3">
              <div className="bg-green-500 p-2 rounded-full h-fit">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="font-medium mb-2">Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim mattis enim tincidunt.</p>
                <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est faucibus metus quis. Amet sapien quam viverra adipiscing condimentum. Ac consectetur et pretium in a bibendum in. Sed vitae sit nisi viverra in a adipisinc metus quis del</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Analyst Estimates */}
      <div>
        <div className="flex items-center gap-2 mb-4">
          <h3 className="text-xl font-semibold">Analyst Estimates</h3>
          <div className="w-4 h-4 rounded-full bg-gray-200 text-gray-600 flex items-center justify-center text-xs">i</div>
        </div>

        <div className="flex items-center gap-8">
          <div className="w-32 h-32 rounded-full bg-green-50 flex items-center justify-center">
            <span className="text-3xl text-green-500 font-bold">76%</span>
          </div>

          <div className="flex-1 space-y-4">
            <div className="flex items-center gap-4">
              <span className="w-10 text-gray-600">Buy</span>
              <div className="flex-1 h-2 bg-green-500 rounded"></div>
              <span className="w-12 text-gray-600">76%</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="w-10 text-gray-600">Hold</span>
              <div className="flex-1 h-2 bg-gray-200 rounded" style={{width: '8%'}}></div>
              <span className="w-12 text-gray-600">8%</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="w-10 text-gray-600">Sell</span>
              <div className="flex-1 h-2 bg-red-500 rounded" style={{width: '16%'}}></div>
              <span className="w-12 text-gray-600">16%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const AboutSection = () => {
  return (
    <div className="bg-white p-6 rounded-lg mb-8">
      <h2 className="text-2xl font-bold mb-6">About Bitcoin</h2>
      
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold mb-2">What is Bitcoin?</h3>
          <p className="text-gray-600">Bitcoin's price today is US$16,951.82, with a 24-hour trading volume of $19.14 B. BTC is +0.36% in the last 24 hours. It is currently -7.70% from its 7-day all-time high of $18,366.66, and 3.40% from its 7-day all-time low of $16,394.75. BTC has a circulating supply of 19.24 M BTC and a max supply of 21 M BTC.</p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-2">Lorem ipsum dolor sit amet</h3>
          <div className="space-y-4 text-gray-600">
            <p>Lorem ipsum dolor sit amet consectetur. Aliquam placerat sit lobortis tristique pharetra. Diam id et lectus urna et tellus aliquam dictum at. Viverra diam suspendisse enim facilisi diam ut sed. Quam scelerisque fermentum sapien morbi sodales odio sed rhoncus. Ultricies urna volutpat pendisse enim facilisi diam ut sed. Quam scelerisque fermentum sapien morbi sodales odio sed rhoncus.</p>
            <p>Diam praesent massa dapibus magna aliquam a dictumst volutpat. Egestas vitae pellentesque auctor amet. Nunc sagittis libero adipiscing cursus felis pellentesque interdum. Odio cursus phasellus velit in senectus enim dui. Turpis tristique placerat interdum sed volutpat. Id imperdiet magna eget eros donec cursus nunc. Mauris faucibus diam mi nunc praesent massa turpis a. Integer dignissim augue viverra nulla et quis lobortis phasellus. Integer pellentesque enim convallis ultricies at.</p>
            <p>Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam massa vel convallis duis ac. Mi adipiscing semper scelerisque porttitor pulvinar nunc risus. Fermentum potenti iaculis lacinia congue ipsum fames amet dui. Purus ultrices tincidunt volutpat in eget. Ullamcorper dui</p>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Already Holding Bitcoin?</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-gradient-to-r from-green-400 to-blue-500 p-4 rounded-lg text-white">
              <div className="flex gap-6">
                <img src="/api/placeholder/160/160" alt="Calculate Profits" className="w-40 h-32 rounded-lg object-cover" />
                <div>
                  <h4 className="text-xl font-bold mb-2">Calculate your Profits</h4>
                  <button className="bg-white text-black px-4 py-2 rounded-lg flex items-center gap-2">
                    Check Now <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-orange-400 to-red-500 p-4 rounded-lg text-white">
              <div className="flex gap-6">
                <img src="/api/placeholder/160/160" alt="Calculate Tax" className="w-40 h-32 rounded-lg object-cover" />
                <div>
                  <h4 className="text-xl font-bold mb-2">Calculate your tax liability</h4>
                  <button className="bg-white text-black px-4 py-2 rounded-lg flex items-center gap-2">
                    Check Now <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <p className="text-gray-600">Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam massa vel convallis duis ac. Mi adipiscing semper scelerisque porttitor pulvinar nunc risus. Fermentum potenti iaculis lacinia congue ipsum fames amet dui. Purus ultrices tincidunt volutpat in eget. Ullamcorper dui</p>
      </div>
    </div>
  );
};

// Usage in main component
const ContentSection = () => {
  return (
    <div>
      <SentimentSection />
      <AboutSection />
    </div>
  );
};

export default ContentSection;