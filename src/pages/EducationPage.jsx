import React from 'react';
import '../styles/EducationPage.css';
import BackgroundImage from '../assets/grunge-vintage-old-paper-background.jpg';

const EducationPage = () => (
    <div className="fantasy-page education-page" style={{ backgroundImage: `url(${BackgroundImage})` }}>
        <h1>Scholarly Pursuits</h1>
        <p>The ancient tomes I have studied and the wisdom I have gained!</p>
    </div>
);

export default EducationPage;