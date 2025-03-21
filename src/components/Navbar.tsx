
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur-lg shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <span className="font-display text-2xl font-bold text-gray-900">Bygglovsdr</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/tjanster" className="text-gray-700 hover:text-brand-500 font-medium transition-colors">
            Tjänster
          </Link>
          <Link to="/priser" className="text-gray-700 hover:text-brand-500 font-medium transition-colors">
            Priser
          </Link>
          <Link to="/kunder" className="text-gray-700 hover:text-brand-500 font-medium transition-colors">
            Kunder
          </Link>
          <Link to="/projekt" className="text-gray-700 hover:text-brand-500 font-medium transition-colors">
            Projekt
          </Link>
          <Link to="/kontakt" className="text-gray-700 hover:text-brand-500 font-medium transition-colors">
            Kontakta oss
          </Link>
          <a 
            href="tel:0104051000" 
            className="button-primary flex items-center gap-2"
          >
            <Phone size={16} />
            <span>Ring oss</span>
          </a>
        </div>

        {/* Mobile menu button */}
        <button 
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={`md:hidden absolute top-full left-0 right-0 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
          <Link 
            to="/tjanster" 
            className="text-gray-700 hover:text-brand-500 py-2 font-medium transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Tjänster
          </Link>
          <Link 
            to="/priser" 
            className="text-gray-700 hover:text-brand-500 py-2 font-medium transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Priser
          </Link>
          <Link 
            to="/kunder" 
            className="text-gray-700 hover:text-brand-500 py-2 font-medium transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Kunder
          </Link>
          <Link 
            to="/projekt" 
            className="text-gray-700 hover:text-brand-500 py-2 font-medium transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Projekt
          </Link>
          <Link 
            to="/kontakt" 
            className="text-gray-700 hover:text-brand-500 py-2 font-medium transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Kontakta oss
          </Link>
          <a 
            href="tel:0104051000" 
            className="button-primary flex items-center justify-center gap-2"
            onClick={() => setIsOpen(false)}
          >
            <Phone size={16} />
            <span>Ring oss</span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
