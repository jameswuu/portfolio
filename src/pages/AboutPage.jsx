import React from 'react';
import { Link } from 'react-router-dom';
import SkillsDisplay from '../components/shared/SkillsDisplay';
import '../styles/components/about.css';

const AboutPage = () => {
  return (
    <div className="about-page">
      <section className="section">
        <div className="container">
          <h1 className="section-title">About Me</h1>
          
          <div className="about-content">
            <div className="about-image anim-left">
              <img src="/profile-pic.JPEG" alt="Profile" />
            </div>
            
            <div className="about-text anim-right">
              <h2 className="about-subtitle">My Journey</h2>
              <p>
                I began my career as a civil engineer, where I developed strong problem-solving skills and attention to detail. My interest in programming was sparked by the rise of AI in early 2024.
              </p>
              <p>
                My initial interaction with AI, which started with simple tasks like deciding what to eat for lunch, gradually evolved into assisting me with report corrections and solving complex engineering problems. 
                These impressive technologies inspired me to pursue a career that integrates AI into its daily operations, which became the driving force behind my transition into programming.
              </p>
              <p>
                My engineering background provides me with a unique perspective on software development. I approach coding challenges with the same analytical mindset 
                I used to tackle engineering problems, breaking down complex issues into manageable components and building robust solutions.
              </p>
              <p>
                Today, I focus on creating responsive, user-friendly web applications using modern technologies like React. 
                I am passionate about writing clean code, crafting intuitive user experiences, and embracing continuous learning.
              </p>
              
              <div className="about-cta anim-right">
                <a href="/resume.pdf" className="button" download>
                  Download Resume
                </a>
                <Link to="/contact" className="button button-secondary">
                  Get in Touch
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="section section-alt">
        <div className="container">
          <SkillsDisplay displayType="bars" />
        </div>
      </section>
      
      <section className="section">
        <div className="container">
          <h2 className="section-title">Education & Experience</h2>
          
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-marker current"></div>
              <div className="timeline-content">
                <h3 className="timeline-title">Website Developer</h3>
                <p className="timeline-period">2025 - Current</p>
                <p className="timeline-description">
                  Freelancing as a frontend developer, creating responsive web applications using React and modern technologies such as Cline and more...
                </p>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3 className="timeline-title">CS50 and The Odin Project</h3>
                <p className="timeline-period">2024 - 2025</p>
                <p className="timeline-description">
                  Completed intensive coding courses focusing on Computer Science and full stack web development.
                </p>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3 className="timeline-title">Junior Civil Engineer</h3>
                <p className="timeline-period">2024 - 2024</p>
                <p className="timeline-description">
                  Worked on various projects, developing strong problem-solving and analytical skills.
                </p>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3 className="timeline-title">Bachelor's Degree in Civil Engineering</h3>
                <p className="timeline-period">2019 - 2024</p>
                <p className="timeline-description">
                  Graduated with honors, with a focus on geotechnical engineering and project management.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
