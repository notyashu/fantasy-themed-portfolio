import React from 'react';
import '../styles/AboutPage.css';
import BackgroundImage from '../assets/grunge-vintage-old-paper-background.jpg';

const AboutPage = () => (
    <div className="fantasy-page about-page" style={{ backgroundImage: `url(${BackgroundImage})` }}>
        <h1>The Legend of Me</h1>
        <p>The story of how I became the hero I am today!</p>
    </div>
);

export default AboutPage;