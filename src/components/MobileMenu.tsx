import React, { useEffect } from 'react';

interface NavItem {
  name: string;
  href: string;
  icon: React.ReactNode;
}

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navItems: NavItem[];
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose, navItems }) => {
  // Close mobile menu when clicking on a nav item
  const handleNavItemClick = () => {
    onClose();
  };

  // Close menu when pressing Escape key
  useEffect(() => {
    const handleEscapeKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscapeKey);
      // Prevent body scrolling when menu is open
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
      // Restore body scrolling when menu is closed
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 md:hidden"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black bg-opacity-50" />
      
      {/* Menu */}
      <div 
        className="fixed top-0 right-0 bottom-0 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out"
        style={{ transform: isOpen ? 'translateX(0)' : 'translateX(100%)' }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col h-full">
          <div className="p-5 border-b">
            <div className="font-bold text-xl bg-gradient-to-r from-purple-600 via-blue-500 to-orange-500 text-transparent bg-clip-text">
              Learnify Pro
            </div>
          </div>
          
          <nav className="flex-1 px-4 py-6 overflow-y-auto">
            <ul className="space-y-4">
              {navItems.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="flex items-center space-x-3 p-3 rounded-lg hover:bg-purple-50 text-gray-700 hover:text-purple-600 transition-colors"
                    onClick={handleNavItemClick}
                  >
                    <span className="text-purple-500">{item.icon}</span>
                    <span className="font-medium">{item.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          
          <div className="p-4 border-t">
            <a 
              href="#download" 
              className="btn btn-primary w-full text-center"
              onClick={handleNavItemClick}
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;