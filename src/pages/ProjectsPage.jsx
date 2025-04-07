import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/projects.css';

// This is a placeholder for project data
// In a real application, this would come from a database or API
const projects = [
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
  },
  {
    id: 4,
    title: 'Project Four',
    description: 'A brief description of the fourth project. This is a placeholder that you can replace with your actual project details.',
    technologies: ['Vue.js', 'Express', 'PostgreSQL'],
    imageUrl: 'https://via.placeholder.com/600x400?text=Project+Four',
    featured: false
  },
  {
    id: 5,
    title: 'Project Five',
    description: 'A brief description of the fifth project. This is a placeholder that you can replace with your actual project details.',
    technologies: ['React Native', 'Redux', 'Firebase'],
    imageUrl: 'https://via.placeholder.com/600x400?text=Project+Five',
    featured: false
  },
  {
    id: 6,
    title: 'Project Six',
    description: 'A brief description of the sixth project. This is a placeholder that you can replace with your actual project details.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    imageUrl: 'https://via.placeholder.com/600x400?text=Project+Six',
    featured: false
  }
];

const ProjectsPage = () => {
  return (
    <div className="projects-page">
      <section className="section">
        <div className="container">
          <h1 className="section-title">My Projects</h1>
          <p className="section-description">
            Here's a collection of my recent work. Each project represents different skills and technologies I've worked with.
            Click on a project to see more details.
          </p>
          
          <div className="projects-grid">
            {projects.map(project => (
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
      </section>
    </div>
  );
};

export default ProjectsPage;
