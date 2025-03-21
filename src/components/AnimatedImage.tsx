
import { useEffect, useRef, useState } from 'react';

interface AnimatedImageProps {
  src: string;
  alt: string;
  className?: string;
}

const AnimatedImage = ({ src, alt, className = '' }: AnimatedImageProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="overflow-hidden relative">
      {!isLoaded && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-md"></div>
      )}
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        className={`${className} transition-all duration-700 ${
          isVisible
            ? 'opacity-100 transform-none'
            : 'opacity-0 translate-y-8'
        } ${!isLoaded ? 'invisible' : 'visible'}`}
        onLoad={() => setIsLoaded(true)}
      />
    </div>
  );
};

export default AnimatedImage;
