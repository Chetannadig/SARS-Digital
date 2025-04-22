import React, { useEffect, useRef } from 'react';
import { Play, Download } from 'lucide-react';

const Hero: React.FC = () => {
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    // Simple parallax effect on scroll
    const handleScroll = () => {
      if (imageRef.current) {
        const scrollPosition = window.scrollY;
        imageRef.current.style.transform = `translateY(${scrollPosition * 0.1}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section 
      id="home" 
      className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden bg-gradient-to-br from-purple-900 via-indigo-800 to-blue-900"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-purple-400 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/3 w-96 h-96 bg-blue-400 rounded-full filter blur-3xl"></div>
        <div className="absolute top-1/2 left-1/4 w-80 h-80 bg-orange-400 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 text-center md:text-left mb-12 md:mb-0">
            {/* Badges */}
            <div className="mb-6 flex flex-wrap justify-center md:justify-start gap-2">
              <span className="badge badge-purple animate-pulse-slow">New Features</span>
              <span className="badge badge-orange">Online Learning</span>
              <span className="badge badge-blue">AI-Powered</span>
            </div>
            
            {/* Hero Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 text-white leading-tight">
              Learn Anywhere, <br />
              <span className="bg-gradient-to-r from-orange-400 via-pink-400 to-purple-400 text-transparent bg-clip-text">
                Anytime
              </span>
            </h1>
            
            {/* Hero Description */}
            <p className="text-lg md:text-xl text-white/80 mb-8 max-w-lg mx-auto md:mx-0">
              Transform your learning experience with our immersive, 
              interactive platform designed to make education engaging, 
              accessible, and fun.
            </p>
            
            {/* Call to Action Buttons */}
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <a href="#download" className="btn btn-primary">
                <span className="flex items-center gap-2">
                  <Download size={20} />
                  <span>Download App</span>
                </span>
              </a>
              <a href="#demo" className="btn bg-white text-purple-800 focus:ring-white/50">
                <span className="flex items-center gap-2">
                  <Play size={20} />
                  <span>Watch Demo</span>
                </span>
              </a>
            </div>
            
            {/* Stats */}
            <div className="mt-10 grid grid-cols-3 gap-4 max-w-md mx-auto md:mx-0">
              <div className="text-center">
                <p className="text-2xl md:text-3xl font-bold text-white">10M+</p>
                <p className="text-sm text-white/70">Users</p>
              </div>
              <div className="text-center">
                <p className="text-2xl md:text-3xl font-bold text-white">500+</p>
                <p className="text-sm text-white/70">Courses</p>
              </div>
              <div className="text-center">
                <p className="text-2xl md:text-3xl font-bold text-white">92%</p>
                <p className="text-sm text-white/70">Success Rate</p>
              </div>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 relative">
            {/* Hero image with animation */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-2xl"></div>
              <img
                ref={imageRef}
                src="https://images.pexels.com/photos/7516363/pexels-photo-7516363.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Students learning with Learnify Pro"
                className="rounded-2xl shadow-2xl animate-float relative z-10 w-full object-cover"
                style={{ maxHeight: '560px' }}
              />
              
              {/* Floating elements */}
              <div className="absolute -top-6 -right-6 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full p-5 shadow-lg animate-float" style={{ animationDelay: '1.5s' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="M9.5 4h5q4.5 0 4.5 5v1"></path><path d="M8.5 10v1q0 5-4.5 5h-1"></path><path d="M8.5 14v-4q0-5 4.5-5h1"></path><path d="M14.5 20v-1q0-5 4.5-5h1"></path></svg>
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full p-5 shadow-lg animate-float" style={{ animationDelay: '0.5s' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><circle cx="12" cy="17" r=".5"></circle></svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto">
          <path fill="#ffffff" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,181.3C384,203,480,213,576,202.7C672,192,768,160,864,165.3C960,171,1056,213,1152,218.7C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;