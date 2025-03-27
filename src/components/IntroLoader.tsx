import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface IntroLoaderProps {
  onComplete: () => void;
}

const IntroLoader = ({ onComplete }: IntroLoaderProps) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Initial check
    checkMobile();
    
    // Listen for window resize
    window.addEventListener('resize', checkMobile);
    
    // Always show intro animation regardless of previous visits
    const timer = setTimeout(() => {
      setIsVisible(false);
      
      // Dispatch event for other components to react to
      window.dispatchEvent(new Event('introAnimationComplete'));
      
      // Call onComplete immediately when animation starts to fade out
      // Detta säkerställer att innehållet redan är laddat när animationen försvinner
      onComplete();
    }, 2400); // Slightly shorter intro animation

    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', checkMobile);
    };
  }, [onComplete]);

  // SVG path for the house icon
  const housePath = "M21 10.8V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-9.2l9-4.5 9 4.5ZM12 3L1 9l4 2v10h14V11l4-2-11-6Z";

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            transition: { 
              duration: 0.8, 
              ease: [0.65, 0, 0.35, 1] 
            } 
          }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-b from-[#1a1a1a] to-[#0f1922]"
        >
          <div className="relative z-10">
            {/* Background elements */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ 
                scale: 1,
                opacity: 1
              }}
              transition={{ 
                duration: 1.5,
                ease: [0.25, 0.1, 0.25, 1]
              }}
              className="absolute -inset-40 rounded-full bg-gradient-to-tr from-[#62c7fc]/5 to-[#4ba5dc]/10 blur-3xl"
            />

            <motion.div
              className="relative z-10 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              {/* Logo animation */}
              <motion.div 
                className="mb-8 md:mb-12 relative flex justify-center"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ 
                  duration: 0.8,
                  ease: [0, 0.55, 0.45, 1]
                }}
              >
                <div className={`relative ${isMobile ? 'w-16 h-16' : 'w-24 h-24'} flex items-center justify-center`}>
                  {/* Ripple effects */}
                  <motion.div 
                    className="absolute inset-0 rounded-full bg-[#62c7fc]/30"
                    initial={{ scale: 0.6, opacity: 0.8 }}
                    animate={{ 
                      scale: [0.6, 1.4], 
                      opacity: [0.8, 0] 
                    }}
                    transition={{ 
                      repeat: Infinity, 
                      duration: 2,
                      ease: "linear",
                      repeatDelay: 0.5
                    }}
                  />
                  
                  <motion.div 
                    className="absolute inset-0 rounded-full bg-[#62c7fc]/20"
                    initial={{ scale: 0.6, opacity: 0.8 }}
                    animate={{ 
                      scale: [0.6, 1.6], 
                      opacity: [0.8, 0] 
                    }}
                    transition={{ 
                      repeat: Infinity, 
                      duration: 2.5,
                      ease: "linear",
                      delay: 0.3,
                      repeatDelay: 0.5
                    }}
                  />
                  
                  {/* Main circle background */}
                  <motion.div 
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-[#62c7fc] to-[#4ba5dc] shadow-lg shadow-[#62c7fc]/20"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  />
                  
                  {/* House icon */}
                  <motion.svg 
                    width={isMobile ? "32" : "44"} 
                    height={isMobile ? "32" : "44"} 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                    className="relative z-10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                  >
                    <motion.path 
                      d={housePath} 
                      stroke="white" 
                      strokeWidth="1.5" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                      fill="white"
                      initial={{ pathLength: 0, fillOpacity: 0 }}
                      animate={{ 
                        pathLength: 1,
                        fillOpacity: 1
                      }}
                      transition={{ 
                        duration: 1.2,
                        fillOpacity: { delay: 1, duration: 0.3 }
                      }}
                    />
                  </motion.svg>
                </div>
              </motion.div>
              
              {/* Text animations */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <motion.h1 
                  className={`font-display ${isMobile ? 'text-3xl' : 'text-5xl'} font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#62c7fc] to-[#4ba5dc] mb-4`}
                >
                  Bygglovsexperten
                </motion.h1>
                
                <motion.p 
                  className={`text-white/80 font-sans ${isMobile ? 'text-sm' : 'text-xl'} font-light max-w-sm mx-auto`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 1.1 }}
                >
                  Din dröm. Våra ritningar.
                </motion.p>
              </motion.div>
            </motion.div>
          </div>
          
          {/* Bottom loading indicator */}
          <motion.div 
            className={`absolute ${isMobile ? 'bottom-8' : 'bottom-12'} left-0 right-0`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.5 }}
          >
            <div className="flex justify-center items-center">
              <div className={`w-full ${isMobile ? 'max-w-[80px]' : 'max-w-[120px]'} h-1 bg-white/10 rounded-full overflow-hidden mx-auto`}>
                <motion.div 
                  className="h-full bg-gradient-to-r from-[#62c7fc] to-[#4ba5dc]"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ 
                    duration: 2,
                    ease: [0.25, 0.1, 0.25, 1]
                  }}
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default IntroLoader;
