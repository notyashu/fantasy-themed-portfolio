import React from 'react';
import '../styles/SkillsPage.css';

const SkillsPage = () => (
  <div className="fantasy-page skills-page">
    <h1>Mystical Skills</h1>
    <p>Witness the powers I have mastered in my journey!</p>
    <div className="skills-list">
      {/* Add your skills here */}
      <div className="skill-card">
        <h2>Arcane Programming</h2>
        <p>Mastery of JavaScript, React, and Node.js</p>
      </div>
      <div className="skill-card">
        <h2>Database Sorcery</h2>
        <p>Proficiency in SQL and NoSQL realms</p>
      </div>
      {/* Add more skill cards as needed */}
    </div>
  </div>
);

export default SkillsPage;