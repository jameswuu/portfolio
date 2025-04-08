import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/components/hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-overlay"></div>
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="hero-greeting">Hello, I'm</span>
            <span className="hero-name">James</span>
          </h1>
          <p className="hero-subtitle">
            Civil Engineer turned Developer
          </p>
          <p className="hero-description">
            I build responsive, user-friendly websites and applications with modern technologies.
            My engineering background gives me a unique approach to problem-solving and attention to detail.
          </p>
          <div className="hero-buttons">
            <Link to="/projects" className="button">View My Projects</Link>
            <Link to="/contact" className="button button-secondary">Get in Touch</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
