import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import FantasyPortfolioMap from './components/FantasyPortfolioMap';
import ProjectsPage from './pages/ProjectsPage';
import SkillsPage from './pages/SkillsPage';
import ExperiencePage from './pages/ExperiencePage';
import EducationPage from './pages/EducationPage';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';
import './styles/App.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<FantasyPortfolioMap />} />
          <Route path="projects" element={<ProjectsPage />} />
          <Route path="skills" element={<SkillsPage />} />
          <Route path="experience" element={<ExperiencePage />} />
          <Route path="education" element={<EducationPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="about" element={<AboutPage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;