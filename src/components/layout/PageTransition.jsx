import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { useLocation } from 'react-router-dom';

/**
 * PageTransition - A wrapper component that provides smooth transitions between pages
 * 
 * @param {Object} props
 * @param {React.ReactNode} props.children - The page content to be animated
 */
const PageTransition = ({ children }) => {
  const location = useLocation();
  
  return (
    <TransitionGroup component={null}>
      <CSSTransition
        key={location.key}
        timeout={300} // Match this with the transition duration in animations.css
        classNames="page"
        unmountOnExit
      >
        {children}
      </CSSTransition>
    </TransitionGroup>
  );
};

export default PageTransition;
