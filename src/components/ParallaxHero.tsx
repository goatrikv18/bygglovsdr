
import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Star, Phone, Calendar } from 'lucide-react';

const ParallaxHero = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacityBackground = useTransform(scrollY, [0, 300], [1, 0.5]);
  const opacityContent = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 300], [1, 1.1]);

  const [isLoaded, setIsLoaded] = useState(false);
  const [introComplete, setIntroComplete] = useState(false);

  useEffect(() => {
    // Check if intro animation has completed
    const hasIntroPlayed = localStorage.getItem('introAnimationPlayed');
    if (hasIntroPlayed) {
      setIntroComplete(true);
    }

    const loadTimer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    const handleIntroComplete = () => {
      setIntroComplete(true);
    };

    window.addEventListener('introAnimationComplete', handleIntroComplete);

    return () => {
      clearTimeout(loadTimer);
      window.removeEventListener('introAnimationComplete', handleIntroComplete);
    };
  }, []);

  return (
    <motion.div 
      ref={ref} 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ 
        opacity: isLoaded && introComplete ? 1 : 0,
        y: isLoaded && introComplete ? 0 : 50
      }}
      transition={{ 
        duration: 0.8, 
        delay: 0.2,
        ease: [0.65, 0, 0.35, 1]
      }}
    >
      {/* Parallax background */}
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ 
          y,
          opacity: opacityBackground,
          scale
        }}
      >
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: 'url(https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80)',
          }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-40" />
      </motion.div>
      
      {/* Content container */}
      <div className="container mx-auto px-4 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left content */}
        <motion.div 
          className="text-white"
          style={{ opacity: opacityContent }}
          initial={{ opacity: 0, x: -50 }}
          animate={{ 
            opacity: isLoaded && introComplete ? 1 : 0, 
            x: isLoaded && introComplete ? 0 : -50
          }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <span className="inline-block bg-[#62c7fc] text-white px-4 py-1 rounded-full text-sm font-medium mb-6">
            Söker du bygglov?
          </span>
          
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-6 leading-tight">
            Din dröm.<br />Våra ritningar.
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 max-w-lg">
            Tillsammans skapar vi ditt hem. Vi förverkligar din vision med bygglovsritningar av högsta kvalitet.
          </p>
          
          <div className="mt-8 mb-12">
            <div className="flex items-center">
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="ml-2 text-sm">
                <span className="font-semibold">UTMÄRKT</span> • Baserat på 191 recensioner
              </p>
            </div>
          </div>
        </motion.div>

        {/* Right content - CTA buttons */}
        <motion.div 
          className="flex flex-col space-y-4"
          style={{ opacity: opacityContent }}
          initial={{ opacity: 0, x: 50 }}
          animate={{ 
            opacity: isLoaded && introComplete ? 1 : 0, 
            x: isLoaded && introComplete ? 0 : 50 
          }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <a 
            href="tel:0104051000" 
            className="button-cta bg-[#62c7fc] hover:bg-[#4ba5dc] text-white"
          >
            <Phone className="w-5 h-5" />
            <span>Ring oss nu</span>
          </a>
          
          <Link 
            to="/kontakt" 
            className="button-cta bg-white hover:bg-gray-100 text-gray-900"
          >
            <Calendar className="w-5 h-5" />
            <span>Boka ett möte</span>
          </Link>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        animate={{ 
          opacity: [0.5, 1, 0.5], 
          y: [0, 10, 0] 
        }}
        transition={{ 
          repeat: Infinity, 
          duration: 2 
        }}
      >
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center p-1">
          <motion.div 
            className="w-1 h-2 bg-white rounded-full"
            animate={{ 
              y: [0, 15, 0] 
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 2 
            }}
          />
        </div>
        <span className="text-white text-xs mt-2">Scrolla ner</span>
      </motion.div>
    </motion.div>
  );
};

export default ParallaxHero;
