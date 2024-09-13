import React from 'react';
import '../styles/ExperiencePage.css';
import BackgroundImage from '../assets/grunge-vintage-old-paper-background.jpg';

const ExperiencePage = () => (
    <div className="fantasy-page experience-page" style={{ backgroundImage: `url(${BackgroundImage})` }}>
        <h1>Epic Quests</h1>
        <p>Tales of the great adventures I have undertaken!</p>
    </div>
);

export default ExperiencePage;