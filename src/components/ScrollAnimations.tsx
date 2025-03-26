import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const ScrollAnimations = () => {
  const initialized = useRef(false);

  useEffect(() => {
    // Only initialize once
    if (initialized.current) return;
    initialized.current = true;

    // Set up revealing animations for elements with specific classes
    gsap.utils.toArray<HTMLElement>('.gsap-reveal').forEach((elem) => {
      gsap.set(elem, { opacity: 0 });
      
      ScrollTrigger.create({
        trigger: elem,
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse',
        onEnter: () => {
          gsap.to(elem, {
            opacity: 1,
            duration: 0.8,
            ease: 'power2.out'
          });
        },
        onLeaveBack: () => {
          gsap.to(elem, {
            opacity: 0,
            duration: 0.8,
            ease: 'power2.out'
          });
        }
      });
    });

    // From left animation
    gsap.utils.toArray<HTMLElement>('.gsap-reveal-from-left').forEach((elem) => {
      gsap.set(elem, { 
        opacity: 0,
        x: -50 
      });
      
      ScrollTrigger.create({
        trigger: elem,
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse',
        onEnter: () => {
          gsap.to(elem, {
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: 'power2.out'
          });
        },
        onLeaveBack: () => {
          gsap.to(elem, {
            opacity: 0,
            x: -50,
            duration: 0.8,
            ease: 'power2.out'
          });
        }
      });
    });

    // From right animation
    gsap.utils.toArray<HTMLElement>('.gsap-reveal-from-right').forEach((elem) => {
      gsap.set(elem, { 
        opacity: 0,
        x: 50 
      });
      
      ScrollTrigger.create({
        trigger: elem,
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse',
        onEnter: () => {
          gsap.to(elem, {
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: 'power2.out'
          });
        },
        onLeaveBack: () => {
          gsap.to(elem, {
            opacity: 0,
            x: 50,
            duration: 0.8,
            ease: 'power2.out'
          });
        }
      });
    });

    // From bottom animation
    gsap.utils.toArray<HTMLElement>('.gsap-reveal-from-bottom').forEach((elem) => {
      gsap.set(elem, { 
        opacity: 0,
        y: 50 
      });
      
      ScrollTrigger.create({
        trigger: elem,
        start: 'top 85%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse',
        onEnter: () => {
          gsap.to(elem, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power2.out'
          });
        },
        onLeaveBack: () => {
          gsap.to(elem, {
            opacity: 0,
            y: 50,
            duration: 0.8,
            ease: 'power2.out'
          });
        }
      });
    });

    // From top animation
    gsap.utils.toArray<HTMLElement>('.gsap-reveal-from-top').forEach((elem) => {
      gsap.set(elem, { 
        opacity: 0,
        y: -50 
      });
      
      ScrollTrigger.create({
        trigger: elem,
        start: 'top 85%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse',
        onEnter: () => {
          gsap.to(elem, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power2.out'
          });
        },
        onLeaveBack: () => {
          gsap.to(elem, {
            opacity: 0,
            y: -50,
            duration: 0.8,
            ease: 'power2.out'
          });
        }
      });
    });

    // Scale animation
    gsap.utils.toArray<HTMLElement>('.gsap-reveal-scale').forEach((elem) => {
      gsap.set(elem, { 
        opacity: 0,
        scale: 0.9
      });
      
      ScrollTrigger.create({
        trigger: elem,
        start: 'top 85%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse',
        onEnter: () => {
          gsap.to(elem, {
            opacity: 1,
            scale: 1,
            duration: 0.8,
            ease: 'power2.out'
          });
        },
        onLeaveBack: () => {
          gsap.to(elem, {
            opacity: 0,
            scale: 0.9,
            duration: 0.8,
            ease: 'power2.out'
          });
        }
      });
    });

    // Staggered animations for lists or grids
    gsap.utils.toArray<HTMLElement>('.stagger-container').forEach((container) => {
      const items = container.querySelectorAll('.stagger-item');
      
      gsap.set(items, { 
        opacity: 0,
        y: 20 
      });
      
      ScrollTrigger.create({
        trigger: container,
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse',
        onEnter: () => {
          gsap.to(items, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: 'power2.out'
          });
        },
        onLeaveBack: () => {
          gsap.to(items, {
            opacity: 0,
            y: 20,
            duration: 0.8,
            stagger: 0.05,
            ease: 'power2.out'
          });
        }
      });
    });

    // Clean up ScrollTrigger instances when component unmounts
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  // This component doesn't render anything
  return null;
};

export default ScrollAnimations; 