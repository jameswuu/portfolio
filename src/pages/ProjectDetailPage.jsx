import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import '../styles/components/projects.css';

// This is a placeholder for project data
// In a real application, this would come from a database or API
const projectsData = [
  {
    id: 1,
    title: 'Project One',
    description: 'A brief description of the first project. This is a placeholder that you can replace with your actual project details.',
    fullDescription: `
      This is a detailed description of Project One. In a real portfolio, this would contain an in-depth explanation of the project, including:
      
      - The problem it solves
      - Your approach to building it
      - Technical challenges you overcame
      - What you learned from the experience
      
      You can format this with paragraphs, lists, and other elements to make it engaging and informative.
      
      The project uses React for the frontend, Node.js for the backend, and MongoDB for the database. It features user authentication, data visualization, and real-time updates.
    `,
    technologies: ['React', 'Node.js', 'MongoDB'],
    imageUrl: 'https://via.placeholder.com/1200x600?text=Project+One',
    liveDemo: 'https://example.com',
    githubRepo: 'https://github.com/yourusername/project-one',
    featured: true
  },
  {
    id: 2,
    title: 'Project Two',
    description: 'A brief description of the second project. This is a placeholder that you can replace with your actual project details.',
    fullDescription: `
      This is a detailed description of Project Two. In a real portfolio, this would contain an in-depth explanation of the project, including:
      
      - The problem it solves
      - Your approach to building it
      - Technical challenges you overcame
      - What you learned from the experience
      
      You can format this with paragraphs, lists, and other elements to make it engaging and informative.
      
      The project uses JavaScript, HTML, and CSS to create an interactive web application. It features responsive design, form validation, and local storage for saving user preferences.
    `,
    technologies: ['JavaScript', 'HTML', 'CSS'],
    imageUrl: 'https://via.placeholder.com/1200x600?text=Project+Two',
    liveDemo: 'https://example.com',
    githubRepo: 'https://github.com/yourusername/project-two',
    featured: true
  },
  {
    id: 3,
    title: 'Project Three',
    description: 'A brief description of the third project. This is a placeholder that you can replace with your actual project details.',
    fullDescription: `
      This is a detailed description of Project Three. In a real portfolio, this would contain an in-depth explanation of the project, including:
      
      - The problem it solves
      - Your approach to building it
      - Technical challenges you overcame
      - What you learned from the experience
      
      You can format this with paragraphs, lists, and other elements to make it engaging and informative.
      
      The project uses React for the frontend, Firebase for the backend, and Tailwind CSS for styling. It features authentication, real-time database, and cloud functions.
    `,
    technologies: ['React', 'Firebase', 'Tailwind CSS'],
    imageUrl: 'https://via.placeholder.com/1200x600?text=Project+Three',
    liveDemo: 'https://example.com',
    githubRepo: 'https://github.com/yourusername/project-three',
    featured: true
  },
  {
    id: 4,
    title: 'Project Four',
    description: 'A brief description of the fourth project. This is a placeholder that you can replace with your actual project details.',
    fullDescription: `
      This is a detailed description of Project Four. In a real portfolio, this would contain an in-depth explanation of the project, including:
      
      - The problem it solves
      - Your approach to building it
      - Technical challenges you overcame
      - What you learned from the experience
      
      You can format this with paragraphs, lists, and other elements to make it engaging and informative.
      
      The project uses Vue.js for the frontend, Express for the backend, and PostgreSQL for the database. It features user authentication, data visualization, and API integration.
    `,
    technologies: ['Vue.js', 'Express', 'PostgreSQL'],
    imageUrl: 'https://via.placeholder.com/1200x600?text=Project+Four',
    liveDemo: 'https://example.com',
    githubRepo: 'https://github.com/yourusername/project-four',
    featured: false
  },
  {
    id: 5,
    title: 'Project Five',
    description: 'A brief description of the fifth project. This is a placeholder that you can replace with your actual project details.',
    fullDescription: `
      This is a detailed description of Project Five. In a real portfolio, this would contain an in-depth explanation of the project, including:
      
      - The problem it solves
      - Your approach to building it
      - Technical challenges you overcame
      - What you learned from the experience
      
      You can format this with paragraphs, lists, and other elements to make it engaging and informative.
      
      The project uses React Native for mobile development, Redux for state management, and Firebase for the backend. It features authentication, real-time updates, and push notifications.
    `,
    technologies: ['React Native', 'Redux', 'Firebase'],
    imageUrl: 'https://via.placeholder.com/1200x600?text=Project+Five',
    liveDemo: 'https://example.com',
    githubRepo: 'https://github.com/yourusername/project-five',
    featured: false
  },
  {
    id: 6,
    title: 'Project Six',
    description: 'A brief description of the sixth project. This is a placeholder that you can replace with your actual project details.',
    fullDescription: `
      This is a detailed description of Project Six. In a real portfolio, this would contain an in-depth explanation of the project, including:
      
      - The problem it solves
      - Your approach to building it
      - Technical challenges you overcame
      - What you learned from the experience
      
      You can format this with paragraphs, lists, and other elements to make it engaging and informative.
      
      The project uses HTML, CSS, and JavaScript to create a responsive website. It features smooth animations, form validation, and cross-browser compatibility.
    `,
    technologies: ['HTML', 'CSS', 'JavaScript'],
    imageUrl: 'https://via.placeholder.com/1200x600?text=Project+Six',
    liveDemo: 'https://example.com',
    githubRepo: 'https://github.com/yourusername/project-six',
    featured: false
  }
];

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
