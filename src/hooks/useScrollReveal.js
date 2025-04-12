import { useEffect, useRef } from 'react';

/**
 * Custom hook to reveal elements when they enter the viewport
 * 
 * @param {Object} options - Configuration options
 * @param {number} options.threshold - Percentage of element that must be visible (0-1)
 * @param {number} options.rootMargin - Margin around the root (in pixels)
 * @returns {React.RefObject} - Ref to attach to the element you want to animate
 */
const useScrollReveal = (options = {}) => {
  const elementRef = useRef(null);
  
  useEffect(() => {
    const currentElement = elementRef.current;
    
    const defaultOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };
    
    const observerOptions = {
      ...defaultOptions,
      ...options
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          // Once the animation has played, we can stop observing
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);
    
    if (currentElement) {
      observer.observe(currentElement);
    }
    
    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [options]);
  
  return elementRef;
};

export default useScrollReveal;
