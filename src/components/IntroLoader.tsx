import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface IntroLoaderProps {
  onComplete: () => void;
}

const IntroLoader = ({ onComplete }: IntroLoaderProps) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Always show intro animation regardless of previous visits
    const timer = setTimeout(() => {
      setIsVisible(false);
      
      // Dispatch event for other components to react to
      window.dispatchEvent(new Event('introAnimationComplete'));
      
      // Call onComplete after animation finishes
      setTimeout(() => {
        onComplete();
      }, 1000);
    }, 2800); // Longer intro animation

    return () => clearTimeout(timer);
  }, [onComplete]);

  // SVG path for the house icon
  const housePath = "M21 10.8V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-9.2l9-4.5 9 4.5ZM12 3L1 9l4 2v10h14V11l4-2-11-6Z";

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            y: -100, 
            transition: { 
              duration: 1.2, 
              ease: [0.65, 0, 0.35, 1] 
            } 
          }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-b from-white to-gray-100"
        >
          <div className="relative">
            {/* Animated background circle */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ 
                scale: [0, 1.2, 1],
                opacity: [0, 0.8, 1]
              }}
              transition={{ 
                duration: 1.2,
                times: [0, 0.6, 1],
                ease: "easeInOut"
              }}
              className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#62c7fc]/20 to-[#4ba5dc]/20 blur-lg"
              style={{ width: '200%', height: '200%', top: '-50%', left: '-50%', zIndex: -1 }}
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: 0.8,
                delay: 0.4,
                ease: [0.22, 1, 0.36, 1]
              }}
              className="text-center"
            >
              {/* Logo animation */}
              <motion.div 
                className="mb-8 flex justify-center"
                initial={{ y: 0, scale: 0 }}
                animate={{ 
                  y: 0, 
                  scale: [0, 1.2, 1],
                  transition: { 
                    delay: 0.2, 
                    duration: 1.2,
                    times: [0, 0.6, 1],
                    ease: "easeInOut"
                  }
                }}
              >
                <div className="relative w-20 h-20 flex items-center justify-center">
                  {/* Circle background */}
                  <motion.div 
                    className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#62c7fc] to-[#4ba5dc]"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                  />
                  
                  {/* House icon */}
                  <motion.svg 
                    width="40" 
                    height="40" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                    className="relative z-10"
                    initial={{ opacity: 0, pathLength: 0 }}
                    animate={{ 
                      opacity: 1,
                      pathLength: 1,
                      pathOffset: [1, 0]
                    }}
                    transition={{ 
                      delay: 0.6,
                      duration: 1.2,
                      ease: "easeInOut"
                    }}
                  >
                    <motion.path 
                      d={housePath} 
                      stroke="white" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ delay: 0.8, duration: 1.2 }}
                    />
                  </motion.svg>
                </div>
              </motion.div>
              
              {/* Text animation */}
              <motion.h1 
                className="font-sans text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#62c7fc] to-[#4ba5dc] mb-3"
                initial={{ y: 20, opacity: 0 }}
                animate={{ 
                  y: 0, 
                  opacity: 1,
                  transition: { 
                    delay: 1.2, 
                    duration: 0.8,
                    ease: [0.22, 1, 0.36, 1]
                  }
                }}
              >
                Bygglovsexperten
              </motion.h1>
              
              <motion.p 
                className="text-gray-600 font-sans text-lg"
                initial={{ y: 20, opacity: 0 }}
                animate={{ 
                  y: 0, 
                  opacity: 1,
                  transition: { 
                    delay: 1.4, 
                    duration: 0.8,
                    ease: [0.22, 1, 0.36, 1]
                  }
                }}
              >
                Din dröm. Våra ritningar.
              </motion.p>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default IntroLoader;
