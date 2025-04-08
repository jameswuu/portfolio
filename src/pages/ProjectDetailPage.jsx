import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import '../styles/components/projects.css';
import projectsData from '../data/projectsData';

const ProjectDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  // Find the project with the matching id
  const project = projectsData.find(p => p.id === parseInt(id));
  
  // If no project is found, redirect to the projects page
  if (!project) {
    React.useEffect(() => {
      navigate('/projects');
    }, [navigate]);
    return null;
  }
  
  return (
    <div className="project-detail-page">
      <section className="section">
        <div className="container">
          <div className="project-detail">
            <div className="project-detail-header">
              <h1 className="project-detail-title">{project.title}</h1>
              <div className="project-detail-technologies">
                {project.technologies.map((tech, index) => (
                  <span className="project-detail-technology" key={index}>{tech}</span>
                ))}
              </div>
            </div>
            
            <div className="project-detail-image">
              <img src={project.imageUrl} alt={project.title} />
            </div>
            
            <div className="project-detail-content">
              {project.fullDescription.split('\n\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
            
            <div className="project-detail-links">
              <a 
                href={project.liveDemo} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="button"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
                Live Demo
              </a>
              <a 
                href={project.githubRepo} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="button button-secondary"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
                View Code
              </a>
            </div>
            
            <div className="back-to-projects">
              <Link to="/projects" className="back-link">
                ← Back to Projects
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetailPage;
