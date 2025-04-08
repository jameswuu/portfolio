import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/projects.css';
import projectsData from '../data/projectsData';

const ProjectsPage = () => {
  return (
    <div className="projects-page">
      <section className="section">
        <div className="container">
          <h1 className="section-title">My Projects</h1>
          <p className="section-description">
            Below is a showcase of my recent projects, each demonstrating different aspects of my technical skills and problem-solving abilities.
            From web applications built with React and Firebase to smaller projects highlighting core web development fundamentals,
            this portfolio reflects my journey from civil engineering to software development.
          </p>
          
          <div className="projects-grid">
            {projectsData.map(project => (
              <div className="project-card" key={project.id}>
                <div className="project-image">
                  <img src={project.imageUrl} alt={project.title} />
                </div>
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-technologies">
                    {project.technologies.slice(0, 3).map((tech, index) => (
                      <span className="project-technology" key={index}>{tech}</span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="project-technology">+{project.technologies.length - 3} more...</span>
                    )}
                  </div>
                  <Link to={`/projects/${project.id}`} className="project-link">
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectsPage;
