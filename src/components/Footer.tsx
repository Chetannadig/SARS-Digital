import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="mb-4">
              <a href="#home" className="text-2xl font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-orange-400 text-transparent bg-clip-text">
                Learnify Pro
              </a>
            </div>
            <p className="text-gray-400 mb-6">
              Transform your learning experience with our immersive, 
              interactive platform designed to make education engaging, 
              accessible, and fun.
            </p>
            <div className="flex space-x-4">
              <a href="#facebook" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-purple-600 transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#twitter" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-500 transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#instagram" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-pink-600 transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#youtube" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-red-600 transition-colors">
                <Youtube size={18} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-gray-400 hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="#features" className="text-gray-400 hover:text-white transition-colors">Features</a>
              </li>
              <li>
                <a href="#courses" className="text-gray-400 hover:text-white transition-colors">Courses</a>
              </li>
              <li>
                <a href="#testimonials" className="text-gray-400 hover:text-white transition-colors">Testimonials</a>
              </li>
              <li>
                <a href="#download" className="text-gray-400 hover:text-white transition-colors">Download</a>
              </li>
            </ul>
          </div>
          
          {/* Resources */}
          <div>
            <h3 className="text-lg font-bold mb-4">Resources</h3>
            <ul className="space-y-3">
              <li>
                <a href="#blog" className="text-gray-400 hover:text-white transition-colors">Blog</a>
              </li>
              <li>
                <a href="#help" className="text-gray-400 hover:text-white transition-colors">Help Center</a>
              </li>
              <li>
                <a href="#careers" className="text-gray-400 hover:text-white transition-colors">Careers</a>
              </li>
              <li>
                <a href="#community" className="text-gray-400 hover:text-white transition-colors">Community</a>
              </li>
              <li>
                <a href="#partners" className="text-gray-400 hover:text-white transition-colors">Partners</a>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Mail className="w-5 h-5 mr-3 text-purple-400 flex-shrink-0 mt-1" />
                <span className="text-gray-400">support@learnifypro.com</span>
              </li>
              <li className="flex items-start">
                <Phone className="w-5 h-5 mr-3 text-purple-400 flex-shrink-0 mt-1" />
                <span className="text-gray-400">+1 (800) 123-4567</span>
              </li>
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 text-purple-400 flex-shrink-0 mt-1" />
                <span className="text-gray-400">
                  123 Learning Street, San Francisco, CA 94103
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Newsletter */}
        <div className="py-8 border-t border-gray-800 mb-8">
          <div className="max-w-xl mx-auto text-center">
            <h3 className="text-xl font-bold mb-4">Subscribe to Our Newsletter</h3>
            <p className="text-gray-400 mb-6">
              Get the latest news, updates, and educational resources delivered directly to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-3">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <button 
                type="submit" 
                className="bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium px-6 py-3 rounded-lg hover:opacity-90 transition-opacity"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        {/* Bottom footer */}
        <div className="pt-8 border-t border-gray-800 text-gray-400 flex flex-col md:flex-row justify-between items-center">
          <p>© {new Date().getFullYear()} Learnify Pro. All rights reserved.</p>
          <div className="flex mt-4 md:mt-0 space-x-6">
            <a href="#privacy" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#terms" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#cookies" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;