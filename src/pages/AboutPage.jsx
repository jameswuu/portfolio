import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/about.css';

const skills = [
  { category: 'Frontend', items: ['HTML', 'CSS', 'JavaScript', 'React', 'Responsive Design'] },
  { category: 'Backend', items: ['Node.js', 'Express', 'RESTful APIs'] },
  { category: 'Tools & Others', items: ['Git', 'GitHub', 'VS Code', 'Command Line', 'Agile/Scrum'] }
];

const AboutPage = () => {
  return (
    <div className="about-page">
      <section className="section">
        <div className="container">
          <h1 className="section-title">About Me</h1>
          
          <div className="about-content">
            <div className="about-image">
              <img src="https://via.placeholder.com/400x500?text=Your+Photo" alt="Profile" />
            </div>
            
            <div className="about-text">
              <h2 className="about-subtitle">My Journey</h2>
              <p>
                I started my career as a civil engineer, where I developed strong problem-solving skills and attention to detail. 
                My interest in programming began when I needed to automate repetitive tasks in my engineering work.
              </p>
              <p>
                What started as a practical solution quickly grew into a passion. I was fascinated by how programming allowed me to create 
                solutions from scratch and see immediate results. This led me to pursue formal education in software development and 
                transition my career toward programming.
              </p>
              <p>
                My engineering background gives me a unique perspective on software development. I approach coding challenges with the same 
                analytical mindset I used for engineering problems, breaking down complex issues into manageable components and building 
                robust solutions.
              </p>
              <p>
                Today, I focus on creating responsive, user-friendly web applications using modern technologies like React. I'm passionate 
                about clean code, intuitive user experiences, and continuous learning.
              </p>
              
              <div className="about-cta">
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
          <h2 className="section-title">My Skills</h2>
          
          <div className="skills-container">
            {skills.map((skillGroup, index) => (
              <div className="skill-group" key={index}>
                <h3 className="skill-category">{skillGroup.category}</h3>
                <ul className="skill-list">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <li className="skill-item" key={skillIndex}>
                      <span className="skill-name">{skill}</span>
                      <div className="skill-bar">
                        <div className="skill-progress" style={{ width: `${Math.random() * 40 + 60}%` }}></div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="section">
        <div className="container">
          <h2 className="section-title">Education & Experience</h2>
          
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3 className="timeline-title">Software Developer</h3>
                <p className="timeline-period">2023 - Present</p>
                <p className="timeline-description">
                  Working as a frontend developer, creating responsive web applications using React and modern JavaScript.
                </p>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3 className="timeline-title">Web Development Bootcamp</h3>
                <p className="timeline-period">2022 - 2023</p>
                <p className="timeline-description">
                  Completed an intensive coding bootcamp focusing on full-stack web development.
                </p>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3 className="timeline-title">Civil Engineer</h3>
                <p className="timeline-period">2018 - 2022</p>
                <p className="timeline-description">
                  Worked on various construction projects, developing strong problem-solving and analytical skills.
                </p>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3 className="timeline-title">Bachelor's Degree in Civil Engineering</h3>
                <p className="timeline-period">2014 - 2018</p>
                <p className="timeline-description">
                  Graduated with honors, with a focus on structural engineering and project management.
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
