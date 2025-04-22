import React from 'react';
import { Download, Apple, Smartphone } from 'lucide-react';

const CTA: React.FC = () => {
  return (
    <section id="download" className="py-20 bg-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-purple-600"></div>
        <div className="absolute -bottom-20 -left-20 w-96 h-96 rounded-full bg-blue-600"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-700 rounded-3xl overflow-hidden shadow-xl">
          <div className="flex flex-col lg:flex-row items-center">
            {/* Content */}
            <div className="w-full lg:w-3/5 p-8 md:p-12 lg:p-16 text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Start Your Learning Journey Today
              </h2>
              <p className="text-white/80 text-lg mb-8 max-w-lg">
                Download the Learnify Pro app and unlock a world of interactive learning experiences. 
                Transform the way you learn with our engaging, gamified approach.
              </p>
              
              {/* App store buttons */}
              <div className="flex flex-wrap gap-4">
                <a 
                  href="#appstore" 
                  className="flex items-center justify-center px-6 py-3 bg-black rounded-xl hover:bg-gray-900 transition-colors shadow-lg"
                >
                  <Apple size={24} className="mr-3" />
                  <div className="text-left">
                    <p className="text-xs font-light">Download on the</p>
                    <p className="text-lg font-semibold">App Store</p>
                  </div>
                </a>
                
                <a 
                  href="#googleplay" 
                  className="flex items-center justify-center px-6 py-3 bg-black rounded-xl hover:bg-gray-900 transition-colors shadow-lg"
                >
                  <Smartphone size={24} className="mr-3" />
                  <div className="text-left">
                    <p className="text-xs font-light">GET IT ON</p>
                    <p className="text-lg font-semibold">Google Play</p>
                  </div>
                </a>
              </div>
              
              {/* Features list */}
              <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center">
                  <div className="mr-3 text-orange-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                  </div>
                  <span>Engaging Interactive Content</span>
                </div>
                <div className="flex items-center">
                  <div className="mr-3 text-orange-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                  </div>
                  <span>Personalized Learning Paths</span>
                </div>
                <div className="flex items-center">
                  <div className="mr-3 text-orange-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                  </div>
                  <span>Progress Tracking & Analytics</span>
                </div>
                <div className="flex items-center">
                  <div className="mr-3 text-orange-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                  </div>
                  <span>Offline Learning Mode</span>
                </div>
              </div>
            </div>
            
            {/* App mockup */}
            <div className="w-full lg:w-2/5 p-8 flex justify-center">
              <div className="relative">
                {/* Phone frame */}
                <div className="relative z-10 shadow-2xl rounded-[40px] border-[14px] border-black overflow-hidden w-[280px] h-[580px]">
                  <img 
                    src="https://images.pexels.com/photos/5302784/pexels-photo-5302784.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                    alt="Learnify Pro Mobile App" 
                    className="w-full h-full object-cover"
                  />
                  
                  {/* App overlay */}
                  <div className="absolute inset-0 bg-gradient-to-b from-purple-600/40 to-blue-700/40 flex flex-col items-center justify-center text-white p-6">
                    <div className="text-center">
                      <h3 className="text-2xl font-bold mb-2">Learnify Pro</h3>
                      <p className="text-white/90 mb-6">Your learning journey starts here</p>
                      <a href="#download" className="btn bg-white text-purple-700 inline-flex items-center">
                        <Download size={16} className="mr-2" />
                        Get Started
                      </a>
                    </div>
                  </div>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute top-1/3 -left-8 w-16 h-16 bg-orange-500 rounded-full opacity-90 animate-pulse-slow"></div>
                <div className="absolute bottom-1/4 -right-10 w-20 h-20 bg-purple-600 rounded-full opacity-80 animate-float"></div>
              </div>
            </div>
          </div>
        </div>
        
        {/* User count */}
        <div className="mt-16 text-center">
          <p className="text-lg text-gray-600 mb-3">
            Join over <span className="font-bold text-purple-600">10 million+</span> learners worldwide
          </p>
          <div className="flex items-center justify-center space-x-2">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4, 5].map((i) => (
                <img 
                  key={i}
                  src={`https://randomuser.me/api/portraits/men/${20 + i}.jpg`}
                  alt={`User ${i}`}
                  className="w-10 h-10 rounded-full border-2 border-white"
                />
              ))}
            </div>
            <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center border-2 border-white">
              <span className="text-xs font-bold text-purple-600">5k+</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;