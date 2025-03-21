
import { useRef, useEffect, useState, ReactNode } from 'react';

interface AnimateOnScrollProps {
  children: ReactNode;
  animation?: string;
  delay?: number;
  className?: string;
  threshold?: number;
}

const AnimateOnScroll = ({ 
  children, 
  animation = 'fade-in', 
  delay = 0,
  className = '',
  threshold = 0.1
}: AnimateOnScrollProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [threshold]);

  return (
    <div
      ref={ref}
      className={`${className} transition-all duration-700`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: !isVisible ? 
          (animation.includes('slide-up') ? 'translateY(30px)' : 
           animation.includes('slide-down') ? 'translateY(-30px)' :
           animation.includes('slide-in-left') ? 'translateX(-30px)' :
           animation.includes('slide-in-right') ? 'translateX(30px)' :
           animation.includes('scale') ? 'scale(0.95)' : '') : 
          'none',
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};

export default AnimateOnScroll;
