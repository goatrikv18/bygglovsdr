
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Phone, ChevronUp } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showMinimal, setShowMinimal] = useState(false);
  const [introComplete, setIntroComplete] = useState(false);

  useEffect(() => {
    // Check if intro animation has completed from localStorage
    const hasIntroPlayed = localStorage.getItem('introAnimationPlayed');
    if (hasIntroPlayed) {
      setIntroComplete(true);
    }

    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
        setShowMinimal(true);
      } else {
        setScrolled(false);
        setShowMinimal(window.scrollY > 50);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle receiving intro completion event
  useEffect(() => {
    const handleIntroComplete = () => {
      setIntroComplete(true);
    };

    window.addEventListener('introAnimationComplete', handleIntroComplete);
    return () => window.removeEventListener('introAnimationComplete', handleIntroComplete);
  }, []);

  return (
    <>
      {/* Minimal floating navbar */}
      {showMinimal && introComplete && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed top-6 left-6 z-50 flex items-center"
        >
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="bg-white rounded-full shadow-lg p-3 text-gray-700 hover:text-[#62c7fc] transition-colors"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
          
          <div className={`ml-3 ${isOpen ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}>
            <Link to="/" className="font-display text-xl font-bold text-white px-4 py-2 bg-[#62c7fc] rounded-full shadow-lg">
              Bygglovsdr
            </Link>
          </div>
        </motion.div>
      )}

      {/* Full navbar - visible when scrolled back to top or menu opened */}
      <AnimatePresence>
        {((!showMinimal || isOpen) && introComplete) && (
          <motion.nav 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
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
                <Link to="/tjanster" className="text-gray-700 hover:text-[#62c7fc] font-medium transition-colors">
                  Tjänster
                </Link>
                <Link to="/priser" className="text-gray-700 hover:text-[#62c7fc] font-medium transition-colors">
                  Priser
                </Link>
                <Link to="/kunder" className="text-gray-700 hover:text-[#62c7fc] font-medium transition-colors">
                  Kunder
                </Link>
                <Link to="/projekt" className="text-gray-700 hover:text-[#62c7fc] font-medium transition-colors">
                  Projekt
                </Link>
                <Link to="/kontakt" className="text-gray-700 hover:text-[#62c7fc] font-medium transition-colors">
                  Kontakta oss
                </Link>
                <a 
                  href="tel:0104051000" 
                  className="bg-[#62c7fc] hover:bg-[#4ba5dc] text-white px-4 py-2 rounded-full transition-colors flex items-center gap-2"
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
                  className="text-gray-700 hover:text-[#62c7fc] py-2 font-medium transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Tjänster
                </Link>
                <Link 
                  to="/priser" 
                  className="text-gray-700 hover:text-[#62c7fc] py-2 font-medium transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Priser
                </Link>
                <Link 
                  to="/kunder" 
                  className="text-gray-700 hover:text-[#62c7fc] py-2 font-medium transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Kunder
                </Link>
                <Link 
                  to="/projekt" 
                  className="text-gray-700 hover:text-[#62c7fc] py-2 font-medium transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Projekt
                </Link>
                <Link 
                  to="/kontakt" 
                  className="text-gray-700 hover:text-[#62c7fc] py-2 font-medium transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Kontakta oss
                </Link>
                <a 
                  href="tel:0104051000" 
                  className="bg-[#62c7fc] hover:bg-[#4ba5dc] text-white py-2 px-4 rounded-full inline-flex items-center justify-center gap-2"
                  onClick={() => setIsOpen(false)}
                >
                  <Phone size={16} />
                  <span>Ring oss</span>
                </a>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>

      {/* Back to top button */}
      {scrolled && (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 right-6 z-50 bg-white p-3 rounded-full shadow-lg text-gray-700 hover:text-[#62c7fc] transition-colors"
        >
          <ChevronUp size={20} />
        </motion.button>
      )}
    </>
  );
};

export default Navbar;
