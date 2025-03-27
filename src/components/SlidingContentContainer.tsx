import { ReactNode, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface SlidingContentContainerProps {
  children: ReactNode;
}

/**
 * A container component that creates the effect of content sliding up over a fixed background,
 * similar to the BTIB website design.
 * 
 * This component works with ParallaxHero to create a smooth transition effect
 * where the hero section stays relatively fixed while content slides up over it.
 */
const SlidingContentContainer: React.FC<SlidingContentContainerProps> = ({ children }) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  
  // Transform the content sections as user scrolls
  // Start with a positive Y offset (80px) and gradually move to 0
  // This creates the illusion that content is sliding up over the fixed hero section
  const contentY = useTransform(scrollY, [0, 300], [80, 0]);
  
  return (
    <motion.div
      ref={contentRef}
      className="relative z-30 bg-transparent"
      style={{ 
        y: contentY,
        position: 'relative',
        marginTop: '-60px', // Negative margin to ensure overlap with hero
        display: 'block',
        width: '100%',
        opacity: 1, // Säkerställ att innehållet är synligt direkt
      }}
      initial={{ opacity: 1 }}
    >
      {children}
    </motion.div>
  );
};

export default SlidingContentContainer; 