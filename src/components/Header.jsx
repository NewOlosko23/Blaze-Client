import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Flame } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };
  
  const navigation = [
    { name: 'About', sectionId: 'about' },
    { name: 'Services', sectionId: 'services' },
    { name: 'Products', sectionId: 'products' },
    { name: 'Contact', sectionId: 'contact' }
  ];

  const handleLogoClick = () => {
    if (window.location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      window.location.href = '/';
    }
  };

  const handleHomeClick = () => {
    window.location.href = '/';
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-black/90 backdrop-blur-md shadow-2xl' 
        : 'bg-transparent'
    }`}>
      <div className="w-full max-w-7xl mx-auto flex justify-between items-center px-4 py-3 md:py-4">
        <button onClick={handleLogoClick} className="flex items-center space-x-3 group">
          <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 ${
            isScrolled 
              ? 'bg-gradient-to-br from-green-500 to-green-600 shadow-lg' 
              : 'bg-white/20 backdrop-blur-sm'
          }`}>
            <Flame className={`${isScrolled ? 'text-white' : 'text-white'} w-6 h-6`} />
          </div>
          <span className={`text-2xl font-bold transition-colors duration-300 ${
            isScrolled ? 'text-white' : 'text-white'
          }`}>
            Blaze
          </span>
        </button>
        
        <nav className="hidden md:flex space-x-6">
          {location.pathname === '/' ? (
            <>
              <Link
                to="/order"
                className={`font-medium transition-all duration-300 hover:scale-105 ${
                  isScrolled 
                    ? 'text-gray-300 hover:text-green-400' 
                    : 'text-white hover:text-green-300'
                }`}
              >
                Order
              </Link>
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.sectionId)}
                  className={`font-medium transition-all duration-300 hover:scale-105 ${
                    isScrolled 
                      ? 'text-gray-300 hover:text-green-400' 
                      : 'text-white hover:text-green-300'
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </>
          ) : (
            <button
              onClick={handleHomeClick}
              className={`font-medium transition-all duration-300 hover:scale-105 ${
                isScrolled 
                  ? 'text-gray-300 hover:text-green-400' 
                  : 'text-white hover:text-green-300'
              }`}
            >
              Home
            </button>
          )}
        </nav>
        
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={`md:hidden focus:outline-none transition-colors duration-300 ${
            isScrolled ? 'text-white' : 'text-white'
          }`}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
      
      <div className={`md:hidden w-full transition-all duration-300 ease-in-out ${
        isMenuOpen ? 'block' : 'hidden'
      } ${
        isScrolled 
          ? 'bg-black/95 backdrop-blur-md px-4 pb-4' 
          : 'bg-black/80 backdrop-blur-sm px-4 pb-4'
      }`}>
        {location.pathname === '/' ? (
          <>
            <Link
              to="/order"
              className="block py-2 text-white hover:text-green-400 font-medium transition-colors duration-300 text-left"
              onClick={() => setIsMenuOpen(false)}
            >
              Order
            </Link>
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.sectionId)}
                className="block py-2 text-white hover:text-green-400 font-medium transition-colors duration-300 text-left"
              >
                {item.name}
              </button>
            ))}
          </>
        ) : (
          <button
            onClick={handleHomeClick}
            className="block py-2 text-white hover:text-green-400 font-medium transition-colors duration-300 text-left"
          >
            Home
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;
