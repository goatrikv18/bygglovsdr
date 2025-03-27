import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Star, ArrowRight } from 'lucide-react';

interface ParallaxHeroProps {
  introComplete: boolean;
}

const ParallaxHero: React.FC<ParallaxHeroProps> = ({ introComplete }) => {
  const heroRef = useRef<HTMLDivElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);
  
  const { scrollY } = useScroll();
  
  // We'll use this to control the opacity of the content as user scrolls
  const contentOpacity = useTransform(scrollY, [0, 300], [1, 0]);
  
  // Instead of transforming the background, we'll keep it fixed in position
  // We'll keep a very slight movement for depth, but much less than before
  const backgroundY = useTransform(scrollY, [0, 1500], [0, 20]);
  
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Check if mobile device
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    checkMobile();

    // Listen for window resize
    window.addEventListener('resize', checkMobile);

    // Set loaded state immediately
    setIsLoaded(true);
    
    // Show content with minimal delay
    const showContentTimer = setTimeout(() => {
      setShowContent(true);
    }, 300);

    // Force the viewport to stay at top on load
    window.scrollTo(0, 0);

    return () => {
      clearTimeout(showContentTimer);
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  // Arrow animation variants
  const arrowAnimation = {
    rest: { x: 0 },
    hover: { x: 5, transition: { duration: 0.3, ease: "easeInOut" } }
  };

  // Button animation variants
  const buttonAnimation = {
    rest: { backgroundColor: "rgba(255, 255, 255, 0.1)" },
    hover: { backgroundColor: "rgba(255, 255, 255, 0.2)" }
  };

  return (
    <div 
      ref={heroRef}
      className="relative w-full overflow-hidden"
      style={{
        height: '100vh', // Force exact viewport height
        minHeight: isMobile ? '500px' : '650px', // Ensure minimum height on small screens
        marginBottom: '0px', // Ensure no gap below
        position: 'relative',
        zIndex: 20 // Higher z-index to ensure it's above other sections
      }}
    >
      {/* Create an additional bottom overlay that is fixed in position */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-[80px]" 
        style={{
          background: 'linear-gradient(to bottom, transparent, rgba(0,0,0,0.95))',
          zIndex: 5
        }}
      />

      {/* Parallax background with overlay - fixed position for the BTIB-style effect */}
      <motion.div 
        ref={backgroundRef}
        className="absolute inset-0 z-0"
        style={{ 
          y: backgroundY,
          // Use absolute instead of fixed to prevent white gap
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          height: '100vh',
          width: '100%'
        }}
      >
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: 'url(https://bygglovsexperten.se/wp-content/uploads/2024/06/hero-image-new-1-min.jpg)',
            backgroundPosition: isMobile ? 'center right -100px' : 'center center',
          }}
        />
        {/* Dark overlay with gradient for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/60 to-black/40" />
      </motion.div>
      
      {/* Content container - positioned in the bottom left corner */}
      <div className="absolute bottom-0 left-0 w-full z-10 p-6 sm:p-10 md:p-16">
        <motion.div 
          className="max-w-3xl"
          style={{ opacity: contentOpacity }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ 
            opacity: isLoaded && (introComplete || showContent) ? 1 : 0,
            y: isLoaded && (introComplete || showContent) ? 0 : 30 
          }}
          transition={{ 
            duration: 0.6, // Faster transition
            delay: 0.1, // Reduced delay
            ease: [0.22, 1, 0.36, 1]
          }}
        >
          {/* Rating badge - positioned on top */}
          <div className="mb-6 inline-flex items-center bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full">
            <div className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <span className="ml-2 text-white/90 text-sm font-medium">5.0 av 192 Google recensioner</span>
          </div>
          
          {/* Main hero heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight text-white leading-tight mb-6">
            Din dröm.
            <br />
            Våra <em className="font-normal italic text-[#62c7fc]">ritningar</em>
          </h1>
          
          {/* Subheading */}
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl leading-relaxed">
            Tillsammans skapar vi ditt hem. 
            Vi förverkligar din vision med bygglovsritningar av högsta kvalitet.
          </p>
          
          {/* Call to action buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="tel:0104051000" 
              className="inline-flex items-center justify-center bg-[#62c7fc] hover:bg-[#4ba5dc] text-white px-6 py-4 rounded-lg font-medium text-lg transition-all duration-300 shadow-lg"
            >
              Ring oss nu
            </a>
            
            <motion.div
              initial="rest"
              whileHover="hover"
              animate="rest"
            >
              <motion.div variants={buttonAnimation}>
                <Link 
                  to="/kontakt" 
                  className="inline-flex items-center justify-center border border-white/30 backdrop-blur-sm bg-white/10 text-white px-6 py-4 rounded-lg font-medium text-lg transition-colors duration-300"
                >
                  Boka ett möte
                  <motion.div
                    variants={arrowAnimation}
                    className="ml-2 flex items-center"
                  >
                    <ArrowRight className="h-5 w-5" />
                  </motion.div>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
      
      {/* Scroll indicator - Only on desktop */}
      {!isMobile && (
        <motion.div 
          className="absolute bottom-8 right-8 flex flex-col items-center"
          initial={{ opacity: 0 }}
          animate={{ 
            y: [0, 10, 0],
            opacity: isLoaded && introComplete ? 0.7 : 0
          }}
          transition={{ 
            y: {
              repeat: Infinity, 
              duration: 2,
              ease: "easeInOut"
            },
            opacity: {
              delay: 1, // Reduced delay for scroll indicator
              duration: 1
            }
          }}
        >
          <div className="w-1 h-16 relative">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white to-transparent rounded-full"></div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default ParallaxHero;
