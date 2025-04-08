import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/components/projects.css';
import projectsData from '../../data/projectsData';

// Filter only featured projects
const featuredProjects = projectsData.filter(project => project.featured);

const FeaturedProjects = () => {
  return (
    <div className="featured-projects">
      <div className="projects-grid">
        {featuredProjects.map(project => (
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
  );
};

export default FeaturedProjects;
