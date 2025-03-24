
import { ReactNode, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

type AnimationDirection = 'up' | 'down' | 'left' | 'right' | 'none';

interface AnimatedSectionProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  direction?: AnimationDirection;
  className?: string;
  once?: boolean;
  threshold?: number;
}

const getDirectionOffset = (direction: AnimationDirection) => {
  switch (direction) {
    case 'up': return { y: 50, x: 0 };
    case 'down': return { y: -50, x: 0 };
    case 'left': return { x: 50, y: 0 };
    case 'right': return { x: -50, y: 0 };
    case 'none': return { x: 0, y: 0 };
    default: return { y: 30, x: 0 };
  }
};

const AnimatedSection = ({ 
  children, 
  delay = 0, 
  duration = 0.8, 
  direction = 'up',
  className = '',
  once = true,
  threshold = 0.2
}: AnimatedSectionProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { 
    once,
    amount: threshold,
    margin: '-10% 0px -10% 0px'
  });

  const directionOffset = getDirectionOffset(direction);

  return (
    <motion.div
      ref={ref}
      initial={{ 
        opacity: 0,
        ...directionOffset
      }}
      animate={isInView ? { 
        opacity: 1,
        x: 0,
        y: 0
      } : {
        opacity: 0,
        ...directionOffset
      }}
      transition={{ 
        duration, 
        delay,
        ease: [0.25, 0.1, 0.25, 1]
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;
