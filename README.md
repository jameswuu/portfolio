# Portfolio Website

A modern, responsive portfolio website built with React and Vite to showcase my projects, skills, and professional journey. This portfolio is specifically designed for developers transitioning from civil engineering to programming, highlighting the unique perspective and problem-solving skills gained from an engineering background.


## Features

- **Responsive Design**: Looks great on all devices (mobile, tablet, desktop)
- **Modern UI**: Clean, professional interface with smooth animations
- **Project Showcase**: Highlight my best work with detailed project pages
- **Skills Section**: Visual representation of my technical skills
- **About Me**: Share my professional journey and background
- **Contact Form**: Allow visitors to reach out via an integrated contact form (using Formspree)
- **Resume Download**: Provide a downloadable version of my resume
- **Social Media Integration**: Connect with visitors through my social profiles

## Technologies Used

- **React**: Frontend library for building the user interface
- **Vite**: Next-generation frontend tooling for faster development
- **React Router**: For navigation between pages
- **CSS**: Custom styling with CSS variables for consistent theming
- **Formspree**: For handling contact form submissions
- **Responsive Design**: Mobile-first approach for all screen sizes

## Getting Started

### Prerequisites

- Node.js (v14.0.0 or later)
- npm or yarn


## Project Structure

```
portfolio/
├── public/               # Static assets
│   ├── favicon.svg       # Site favicon
│   └── resume.pdf        # Downloadable resume
├── src/                  # Source files
│   ├── components/       # Reusable components
│   │   ├── layout/       # Layout components (Header, Footer)
│   │   ├── home/         # Homepage components
│   │   ├── projects/     # Project-related components
│   │   ├── about/        # About page components
│   │   └── contact/      # Contact page components
│   ├── pages/            # Page components
│   ├── data/             # Data files (project info, skills)
│   ├── styles/           # CSS styles
│   │   ├── variables.css # CSS variables for theming
│   │   ├── global.css    # Global styles
│   │   └── components/   # Component-specific styles
│   ├── utils/            # Utility functions
│   ├── App.jsx           # Main App component
│   └── main.jsx          # Entry point
├── index.html            # HTML template
├── vite.config.js        # Vite configuration
└── package.json          # Project dependencies and scripts
```

## Customization

### Personal Information

1. Update the personal information in the components:
   - Edit `src/components/home/Hero.jsx` to update your name and introduction
   - Modify `src/pages/AboutPage.jsx` to update your background and journey
   - Update contact information in `src/pages/ContactPage.jsx`

### Projects

1. Edit the project data in:
   - `src/components/home/FeaturedProjects.jsx` for featured projects
   - `src/pages/ProjectsPage.jsx` for all projects
   - `src/pages/ProjectDetailPage.jsx` for detailed project information

### Styling

1. Customize the theme by editing `src/styles/variables.css`:
   - Change colors, fonts, spacing, etc.
   - Adjust responsive breakpoints if needed

### Resume

1. Replace the placeholder resume:
   - Add your actual resume to `public/resume.pdf`

## Deployment

### Netlify

1. Create a Netlify account
2. Connect your GitHub repository
3. Configure build settings:
   - Build command: `npm run build` or `yarn build`
   - Publish directory: `dist`
4. Deploy

### Vercel

1. Create a Vercel account
2. Import your GitHub repository
3. Configure build settings:
   - Build command: `npm run build` or `yarn build`
   - Output directory: `dist`
4. Deploy

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgments

- Design inspiration from modern portfolio trends
- Icons from [Feather Icons](https://feathericons.com/)
- Placeholder images from [Placeholder.com](https://placeholder.com/)

---

## About the Developer

This portfolio template was created to help developers showcase their work and professional journey. Feel free to customize it to match your personal brand and highlight your unique skills and experiences.
