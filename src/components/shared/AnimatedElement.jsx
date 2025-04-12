import React, { useEffect, useRef } from 'react';

/**
 * AnimatedElement - A component that adds animation classes to its children
 * 
 * @param {Object} props
 * @param {React.ReactNode} props.children - The content to be animated
 * @param {string} props.animation - The animation class to apply (e.g., 'fade-in', 'slide-in-left')
 * @param {string} props.delay - Optional delay class (e.g., 'delay-100', 'delay-200')
 * @param {string} props.className - Additional classes to apply
 * @param {string} props.tag - HTML element to render (default: 'div')
 */
const AnimatedElement = ({ 
  children, 
  animation, 
  delay = '', 
  className = '', 
  tag = 'div',
  ...rest 
}) => {
  const elementRef = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            // Add animation classes when element is in view
            entry.target.classList.add(animation);
            if (delay) {
              entry.target.classList.add(delay);
            }
            // Stop observing once animation is triggered
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (elementRef.current) {
      observer.observe(elementRef.current);
    }
    
    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [animation, delay]);
  
  const Element = tag;
  
  return (
    <Element 
      ref={elementRef} 
      className={className} 
      {...rest}
    >
      {children}
    </Element>
  );
};

export default AnimatedElement;
