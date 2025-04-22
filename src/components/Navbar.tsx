import React, { useState, useEffect } from 'react';
import { Menu, X, Laptop, BookOpen, Award, MessageCircle, Home } from 'lucide-react';
import MobileMenu from './MobileMenu';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navItems = [
    { name: 'Home', href: '#home', icon: <Home size={18} /> },
    { name: 'Features', href: '#features', icon: <Laptop size={18} /> },
    { name: 'Courses', href: '#courses', icon: <BookOpen size={18} /> },
    { name: 'Testimonials', href: '#testimonials', icon: <MessageCircle size={18} /> },
    { name: 'Achievements', href: '#achievements', icon: <Award size={18} /> },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-md py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center">
            <div className={`font-bold text-2xl ${isScrolled ? 'text-purple-600' : 'text-white'}`}>
              <span className="bg-gradient-to-r from-purple-600 via-blue-500 to-orange-500 text-transparent bg-clip-text">
                Learnify Pro
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`flex items-center space-x-1 font-medium transition-colors duration-300 hover:text-purple-600 ${
                  isScrolled ? 'text-gray-700' : 'text-white'
                }`}
              >
                <span className="hidden lg:inline-block">{item.icon}</span>
                <span>{item.name}</span>
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a href="#download" className="btn btn-primary">Get Started</a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMobileMenu}
            className={`md:hidden p-2 rounded-full ${
              isScrolled 
                ? 'text-gray-700 hover:bg-gray-100' 
                : 'text-white hover:bg-white/10'
            }`}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <MobileMenu isOpen={isMobileMenuOpen} onClose={toggleMobileMenu} navItems={navItems} />
    </header>
  );
};

export default Navbar;