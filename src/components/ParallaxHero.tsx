import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Star } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register plugins
gsap.registerPlugin(ScrollTrigger);

const ParallaxHero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  
  const { scrollY } = useScroll();
  const contentOpacity = useTransform(scrollY, [0, 300], [1, 0]);
  
  const [isLoaded, setIsLoaded] = useState(false);
  const [introComplete, setIntroComplete] = useState(false);

  useEffect(() => {
    // Check if intro animation has completed
    const handleIntroComplete = () => {
      setIntroComplete(true);
    };

    window.addEventListener('introAnimationComplete', handleIntroComplete);

    const loadTimer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    return () => {
      clearTimeout(loadTimer);
      window.removeEventListener('introAnimationComplete', handleIntroComplete);
    };
  }, []);

  // Set up GSAP ScrollTrigger for parallax effect
  useEffect(() => {
    if (!heroRef.current || !backgroundRef.current || !contentRef.current) return;

    // Pin the hero section so it "stays" while content below moves up
    ScrollTrigger.create({
      trigger: heroRef.current,
      start: 'top top',
      end: '+=100%', // Pin for the height of the hero section
      pin: true,
      pinSpacing: false
    });

    // Animation for content opacity
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: heroRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: 0.5,
        invalidateOnRefresh: true
      }
    });

    // Minimal background movement
    tl.to(backgroundRef.current, {
      y: 30,
      ease: 'none',
    }, 0);

    return () => {
      // Clean up ScrollTrigger
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [isLoaded, introComplete]);

  return (
    <motion.div 
      ref={heroRef}
      className="relative min-h-[115vh] pb-40 flex items-center justify-center overflow-hidden will-change-transform"
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
      {/* Parallax background - more fixed position */}
      <div 
        ref={backgroundRef}
        className="absolute inset-0 z-0 will-change-transform"
      >
        <div 
          className="absolute inset-0 bg-cover bg-center will-change-transform"
          style={{ 
            backgroundImage: 'url(https://bygglovsexperten.se/wp-content/uploads/2024/06/hero-image-new-1-min.jpg)',
            backgroundPosition: 'center center',
            transform: 'translateZ(0)'
          }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-40" />
      </div>
      
      {/* Right side service description content - fades out on scroll */}
      <div className="container mx-auto px-4 relative z-10 flex items-center h-full">
        <motion.div 
          ref={contentRef} 
          className="ml-auto mr-56 w-full max-w-md -mt-[55vh]"
          style={{ opacity: contentOpacity }}
        >
          <motion.div 
            className="text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: isLoaded && introComplete ? 1 : 0, 
              y: isLoaded && introComplete ? 0 : 20
            }}
            transition={{ 
              duration: 0.8,
              delay: 0.4,
              ease: [0.22, 1, 0.36, 1]
            }}
          >
            <p className="text-base md:text-lg mb-4 leading-relaxed opacity-90 font-medium">
              Tillsammans skapar vi ditt hem. 
              Vi förverkligar din vision med bygglovsritningar av högsta kvalitet.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3">
              <a 
                href="/offert" 
                className="button-cta bg-[#62c7fc] hover:bg-[#d85d3a] text-white px-6 py-3 rounded-full inline-flex items-center justify-center font-medium text-base"
              >
                Ring oss nu
              </a>
              
              <Link 
                to="/kontakt" 
                className="button-cta text-white hover:text-[#F06B46] px-6 py-3 rounded-full inline-flex items-center justify-center font-medium text-base"
              >
                Boka ett möte <span className="ml-1">→</span>
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Bottom content - project heading with fade out */}
      <div className="absolute bottom-[22vh] left-0 container z-10">
        <motion.div 
          className="flex flex-col items-start pl-1 ml-1"
          style={{ opacity: contentOpacity }}
        >
          {/* Rating badge */}
          <motion.div
            className="flex flex-col items-start mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: isLoaded && introComplete ? 1 : 0,
              y: isLoaded && introComplete ? 0 : 20
            }}
            transition={{ 
              duration: 0.8,
              delay: 0.6
            }}
          >
            <div className="bg-white rounded-md py-1 px-3 text-lg font-bold">
              5.0
            </div>
            <div className="flex mt-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <div className="text-white text-xs mt-1 opacity-80">
              av 192 Google recensioner
            </div>
          </motion.div>
          
          {/* Project heading */}
          <motion.div
            className="max-w-3xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ 
              opacity: isLoaded && introComplete ? 1 : 0,
              y: isLoaded && introComplete ? 0 : 30
            }}
            transition={{ 
              duration: 0.8,
              delay: 0.7
            }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold leading-tight text-white">
              Din dröm.
              <br />
              Våra <em className="font-normal italic text-[#62c7fc]">ritningar</em>
            </h1>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-[15vh] right-10 flex flex-col items-center"
        animate={{ 
          opacity: [0.5, 1, 0.5]
        }}
        transition={{ 
          repeat: Infinity, 
          duration: 2 
        }}
      >
        <span className="text-white text-sm">Skrolla</span>
      </motion.div>
    </motion.div>
  );
};

export default ParallaxHero;
