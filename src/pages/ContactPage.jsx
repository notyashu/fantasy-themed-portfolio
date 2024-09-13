import React from 'react';
import '../styles/ContactPage.css';
import BackgroundImage from '../assets/grunge-vintage-old-paper-background.jpg';

const ContactPage = () => (
    <div className="fantasy-page contact-page" style={{ backgroundImage: `url(${BackgroundImage})` }}>
        <h1>Send a Raven</h1>
        <p>Ways to contact me across the realms!</p>
        {/* Add contact details or form here */}
    </div>
);

export default ContactPage;