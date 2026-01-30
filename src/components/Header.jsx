import { useState, useEffect } from 'react';
import BRAND_CONFIG from '../config/brandConfig';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Main Header */}
      <header
        className={`sticky top-0 z-50 bg-white transition-all duration-300 ${
          isScrolled ? 'shadow-lg' : ''
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <a href="/" className="flex items-center">
                <img
                  src="/eco4u-logo.png"
                  alt={BRAND_CONFIG.name}
                  className="h-12 sm:h-16 md:h-20 lg:h-24 w-auto"
                  loading="eager"
                  sizes="(max-width: 640px) 48px, (max-width: 768px) 64px, (max-width: 1024px) 80px, 96px"
                />
              </a>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {BRAND_CONFIG.navigation.main.map((item) => {
                // Handle About Us as smooth scroll
                if (item.name === 'About Us') {
                  return (
                    <a
                      key={item.name}
                      href="#about-us"
                      className="text-gray-800 hover:text-primary transition-colors duration-300 font-medium"
                      onClick={(e) => {
                        e.preventDefault();
                        document.getElementById('about-us')?.scrollIntoView({ behavior: 'smooth' });
                      }}
                    >
                      {item.name}
                    </a>
                  );
                }
                return (
                  <a
                    key={item.name}
                    href={item.path}
                    className="text-gray-800 hover:text-primary transition-colors duration-300 font-medium"
                  >
                    {item.name}
                  </a>
                );
              })}
            </nav>

            {/* Right Icons */}
            <div className="flex items-center space-x-2 sm:space-x-4">
              {/* User Account */}
              <button
                className="hidden sm:flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-gray-800 text-gray-800 hover:bg-primary hover:text-white transition-all duration-300 touch-manipulation"
                aria-label="User Account"
              >
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </button>

              {/* Mobile Menu Button */}
              <button
                className="sm:hidden flex items-center justify-center w-10 h-10 rounded-full border-2 border-gray-800 text-gray-800 hover:bg-primary hover:text-white transition-all duration-300 touch-manipulation"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle Menu"
              >
                {isMobileMenuOpen ? (
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>

              {/* Desktop Menu Button */}
              <button
                className="hidden sm:flex lg:hidden items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-gray-800 text-gray-800 hover:bg-primary hover:text-white transition-all duration-300 touch-manipulation"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle Menu"
              >
                {isMobileMenuOpen ? (
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200 shadow-lg">
            <nav className="px-4 py-4 space-y-3 max-h-screen overflow-y-auto">
              {BRAND_CONFIG.navigation.main.map((item) => {
                // Handle About Us as smooth scroll
                if (item.name === 'About Us') {
                  return (
                    <a
                      key={item.name}
                      href="#about-us"
                      className="block text-gray-800 hover:text-primary transition-colors duration-300 font-medium py-3 px-2 rounded-lg hover:bg-gray-50 touch-manipulation"
                      onClick={(e) => {
                        e.preventDefault();
                        setIsMobileMenuOpen(false);
                        document.getElementById('about-us')?.scrollIntoView({ behavior: 'smooth' });
                      }}
                    >
                      {item.name}
                    </a>
                  );
                }
                return (
                  <a
                    key={item.name}
                    href={item.path}
                    className="block text-gray-800 hover:text-primary transition-colors duration-300 font-medium py-3 px-2 rounded-lg hover:bg-gray-50 touch-manipulation"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                );
              })}
              
              {/* Mobile User Account Link */}
              <div className="pt-4 border-t border-gray-200">
                <a
                  href="#account"
                  className="flex items-center text-gray-800 hover:text-primary transition-colors duration-300 font-medium py-3 px-2 rounded-lg hover:bg-gray-50 touch-manipulation"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <svg
                    className="w-5 h-5 mr-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                  My Account
                </a>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
