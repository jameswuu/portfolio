import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/components/projects.css';

// This is a placeholder for project data
// In a real application, this would come from a database or API
const featuredProjects = [
  {
    id: 1,
    title: 'Project One',
    description: 'A brief description of the first project. This is a placeholder that you can replace with your actual project details.',
    technologies: ['React', 'Node.js', 'MongoDB'],
    imageUrl: 'https://via.placeholder.com/600x400?text=Project+One',
    featured: true
  },
  {
    id: 2,
    title: 'Project Two',
    description: 'A brief description of the second project. This is a placeholder that you can replace with your actual project details.',
    technologies: ['JavaScript', 'HTML', 'CSS'],
    imageUrl: 'https://via.placeholder.com/600x400?text=Project+Two',
    featured: true
  },
  {
    id: 3,
    title: 'Project Three',
    description: 'A brief description of the third project. This is a placeholder that you can replace with your actual project details.',
    technologies: ['React', 'Firebase', 'Tailwind CSS'],
    imageUrl: 'https://via.placeholder.com/600x400?text=Project+Three',
    featured: true
  }
];

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
                {project.technologies.map((tech, index) => (
                  <span className="project-technology" key={index}>{tech}</span>
                ))}
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
