
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 50);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { path: '/', label: 'Work' },
    { path: '/us', label: 'Us' },
    { path: '/media', label: 'Media' },
    { path: '/products', label: 'Products' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-cream-50/95 backdrop-blur shadow-sm' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex flex-col items-start">
            <span className="font-playfair text-2xl font-semibold text-charcoal-800">
              DKnC.
            </span>
            <span className="font-playfair text-xs text-gray-600/80 mt-1">
              architecture . interior
            </span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`nav-link ${
                  location.pathname === item.path ? 'text-charcoal-800' : ''
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden p-2 z-50"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg 
              className={`w-6 h-6 transition-transform duration-300 ${isMobileMenuOpen ? 'rotate-90' : ''}`} 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu overlay */}
      {isMobileMenuOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <div 
            className="absolute top-0 left-0 right-0 bg-cream-50/95 backdrop-blur shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="px-6 py-8">
              <div className="flex flex-col space-y-6">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`text-xl font-medium transition-colors duration-200 ${
                      location.pathname === item.path 
                        ? 'text-charcoal-800 border-b-2 border-blush-500 pb-2' 
                        : 'text-charcoal-600 hover:text-charcoal-800'
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
