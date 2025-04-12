const projectsData = [
  {
    id: 1,
    title: 'E-commerce Project',
    description: 'An e-commerce platform for purchasing 3D printed components, featuring secure payment processing and user authentication.',
    technologies: ['React', 'Vite', 'UI/UX (Github Action)', 'Restful API', 'Stripe', 'React Router', 'Firebase Hosting', 'Firestore', 'Firebase Authentication', 'Firebase Function', 'Responsive Design'],
    imageUrl: '/project1.png',
    featured: true,
    fullDescription: `
      This e-commerce website allows users to buy their favorite 3D printed components. It utilizes React for the frontend and Firestore for the database, with Firebase Functions for serverless backend operations. Stripe is integrated for secure payment processing.

      Key features include:
      - User authentication and profiles
      - Product catalog
      - Shopping cart and checkout process
      - Order history

      
      Due to partnerships with stakeholders, the source code is not publicly available.
    `,
    liveDemo: 'https://buffalo-keychain.web.app/',
    githubRepo: 'https://github.com/jameswuu/ecommerce-project'
  },
  {
    id: 2,
    title: 'Quizasy',
    description: 'A multiple-choice quiz platform offering real-time scoring, performance analytics, and leaderboards.',
    technologies: ['React', 'Vite', 'React Router', 'Firebase Hosting', 'Firestore', 'Firebase Authentication', 'Responsive Design'],
    imageUrl: '/project2.png',
    featured: true,
    fullDescription: `
      Quizasy is a website designed to make quizzes easy and engaging. Built with React for the frontend and Firebase for the backend, it uses GitHub Actions for CI/CD workflow automation.

      Key features include:
      - User registration and authentication (including email and Google sign-in)
      - Quiz creation and management
      - Real-time scoring and feedback
      - Multiple collections and documents in Firestore for efficient data management
      - Responsive design for optimal viewing on all devices
    `,
    liveDemo: 'https://quizasy-dee17.web.app/',
    githubRepo: 'https://github.com/jameswuu/Quizasy-public'
  },
  {
    id: 3,
    title: 'Fantasktic',
    description: 'A task management application for organizing and tracking tasks with collaboration features.',
    technologies: ['React', 'Vite', 'Firebase Hosting', 'Firestore', 'Firebase Authentication'],
    imageUrl: '/project3.png',
    featured: false,
    fullDescription: `
      Fantasktic is a task management web application that allows users to add, organize, and track tasks. Built with React for the frontend and Firebase for real-time data synchronization and backend services.

      Key features include:
      - Task creation, editing, and deletion
      - Task categorization and priority levels
      - Due dates
    `,
    liveDemo: 'https://fantasktic-1e480.web.app/',
    githubRepo: 'https://github.com/jameswuu/fantasktic'
  },
  {
    id: 4,
    title: 'Calculator',
    description: 'A functional web calculator demonstrating HTML, CSS, and JavaScript skills.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    imageUrl: '/project4.png',
    featured: false,
    fullDescription: `
      The Calculator is a web application that showcases foundational web development skills, including HTML structure, CSS styling, and DOM manipulation using JavaScript. 
      
      Key features include:
      - User-friendly interface with intuitive button layout
      - Responsive design that works on both desktop and mobile devices
      - Robust error handling for invalid operations
    `,
    liveDemo: 'https://jameswuu.github.io/calculator/',
    githubRepo: 'https://github.com/jameswuu/calculator'
  },
  {
    id: 5,
    title: 'Countdown Timer',
    description: 'A countdown timer application built with HTML, CSS, and JavaScript.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    imageUrl: '/project5.png',
    featured: false,
    fullDescription: `
      This countdown timer demonstrates basic web development skills using HTML, CSS, and JavaScript. It provides a simple interface for users to set and track countdowns.

      In a real-world scenario, this project could be expanded to include features like:
      - Customizable timer settings
      - Real-time updates
      - Integration with other web services
    `,
    liveDemo: 'https://jameswuu.github.io/countdown/',
    githubRepo: 'https://github.com/jameswuu/countdown'
  },
  {
    id: 6,
    title: 'Rate my Course',
    description: 'A course rating platform built with Flask, featuring user reviews and account management.',
    technologies: ['Flask', 'HTML', 'CSS', 'JavaScript', 'SQL', 'Python'],
    imageUrl: '/project6.png',
    featured: true,
    fullDescription: `
      This project is the final assignment for the CS50 course provided by Harvard University. It consists of five main components:
      - Navigation Bar: Allows users to navigate between different pages.
      - Index: Displays current course ratings from all users.
      - Review: Enables users to rate courses.
      - About: Explains the purpose of the website.
      - Account: Allows users to manage their personal information.

      The project introduced me to the Flask framework, which uses Python, HTML, CSS, and JavaScript to create a responsive website.
    `,
    liveDemo: 'https://www.youtube.com/watch?v=WOTDMLNOFU8&ab_channel=JamesWu',
    githubRepo: 'https://github.com/jameswuu/rate-my-course'
  }
];

export default projectsData;
