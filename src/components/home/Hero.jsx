import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/components/hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-overlay"></div>
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title anim">
            <span className="hero-greeting">Hello, I'm</span>
            <span className="hero-name">James Wu</span>
          </h1>
          <p className="hero-subtitle anim">
            Crafting Web Experiences with Engineering Precision
          </p>
          <p className="hero-description anim">
          What happens when engineering meets creativity? I build responsive, user-friendly websites and applications fueled by an engineering mindset and a passion for innovation. <Link to="/about" className='link-secondary'>Found out more!</Link>

          </p>
          <div className="hero-buttons anim">
            <Link to="/projects" className="button">View My Projects</Link>
            <Link to="/contact" className="button button-secondary">Get in Touch</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
