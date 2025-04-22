import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/home/Hero';
import FeaturedProjects from '../components/home/FeaturedProjects';
import SkillsDisplay from '../components/shared/SkillsDisplay';
import '../styles/components/home.css';

const HomePage = () => {
  return (
    <div className="home-page">
      <Hero />
      
      <section className="section section-alt">
        <div className="container">
          <h2 className="section-title">Featured Projects</h2>
          <FeaturedProjects />
          <div className="view-all-projects">
            <Link to="/projects" className="button">View All Projects</Link>
          </div>
        </div>
      </section>
      
      <section className="section">
        <div className="container">
          <div className="about-preview">
            <div className="about-preview-content">
              <h2 className="section-title">About Me</h2>
              <p className="about-preview-text">
                I'm a passionate developer with a background in civil engineering. My journey into programming 
                has equipped me with a unique perspective on problem-solving and technical challenges.
              </p>
              <Link to="/about" className="button button-secondary">Learn More</Link>
            </div>
            <div className="about-preview-skills">
              <h3 className="skills-title">My Skills</h3>
              <SkillsDisplay 
                displayType="tags" 
                limit={7}
                showTitle={false}
              />
            </div>
          </div>
        </div>
      </section>
      
      <section className="section section-alt cta-section">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Let's Work Together</h2>
            <p className="cta-text">
              Have a project in mind or want to discuss potential opportunities? I'd love to hear from you!
            </p>
            <Link to="/contact" className="button">Get in Touch</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
