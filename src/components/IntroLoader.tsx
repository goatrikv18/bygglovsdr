
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface IntroLoaderProps {
  onComplete: () => void;
}

const IntroLoader = ({ onComplete }: IntroLoaderProps) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Check if intro has already played
    const hasIntroPlayed = localStorage.getItem('introAnimationPlayed');
    
    if (hasIntroPlayed) {
      setIsVisible(false);
      setTimeout(() => {
        onComplete();
      }, 100);
      return;
    }

    // If not played before, set timeout to hide loader
    const timer = setTimeout(() => {
      setIsVisible(false);
      
      // Store that intro has played
      localStorage.setItem('introAnimationPlayed', 'true');
      
      // Dispatch event for other components to react to
      window.dispatchEvent(new Event('introAnimationComplete'));
      
      // Call onComplete after animation finishes
      setTimeout(() => {
        onComplete();
      }, 1000);
    }, 2000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.8, ease: [0.65, 0, 0.35, 1] }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center"
          >
            <div className="mb-6 flex justify-center">
              <div className="h-24 w-24 rounded-full bg-[#62c7fc] flex items-center justify-center shadow-lg">
                <span className="text-white text-3xl font-bold">B</span>
              </div>
            </div>
            <h1 className="font-display text-4xl font-bold text-gray-900 mb-2">
              Bygglovsdr
            </h1>
            <p className="text-gray-500">Din dröm. Våra ritningar.</p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default IntroLoader;
