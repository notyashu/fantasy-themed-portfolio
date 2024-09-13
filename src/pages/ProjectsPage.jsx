import React from 'react';
import '../styles/ProjectsPage.css';
import BackgroundImage from '../assets/grunge-vintage-old-paper-background.jpg';

const ProjectsPage = () => (
  <div className="fantasy-page projects-page" style={{ backgroundImage: `url(${BackgroundImage})` }}>
    <h1>Magical Projects</h1>
    <p>Behold the arcane works I have conjured!</p>
    {/* Add your projects content here */}
  </div>
);

export default ProjectsPage;