import { useEffect, useState } from 'react';

const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      // Calculate how far down the page the user has scrolled
      const scrollPx = document.documentElement.scrollTop;
      // Height of the entire document minus viewport height
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      // Calculate percentage scrolled
      const scrolled = `${(scrollPx / scrollHeight) * 100}%`;
      
      // Apply the progress bar to body::after
      document.body.style.setProperty('--scroll-progress', scrolled);
      
      // Set height of body::after
      const afterElement = document.querySelector('body::after') as HTMLElement;
      if (afterElement) {
        afterElement.style.height = scrolled;
      } else {
        // Fallback to updating CSS variable
        document.documentElement.style.setProperty('--progress-height', scrolled);
      }
      
      // Update state for fallback progress bar
      setScrollProgress(scrollPx / scrollHeight);
    };

    // Listen for scroll events
    window.addEventListener('scroll', updateScrollProgress);
    
    // Initial update
    updateScrollProgress();

    // Clean up the event listener
    return () => {
      window.removeEventListener('scroll', updateScrollProgress);
    };
  }, []);

  // Fallback progress bar element in case the CSS pseudo elements don't work
  return (
    <div 
      className="scroll-progress" 
      style={{ height: `${scrollProgress * 100}%` }}
      aria-hidden="true"
    />
  );
};

export default ScrollProgress; 