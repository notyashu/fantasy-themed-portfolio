import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import FantasyPortfolioMap from './components/FantasyPortfolioMap';
import {
  ProjectsPage,
  SkillsPage,
  ExperiencePage,
  EducationPage,
  ContactPage,
  AboutPage
} from './pages';
import { preloadImages } from './utils/imagePreloader';
import './styles/App.css';
import BackgroundImage from './assets/grunge-vintage-old-paper-background.jpg';

const App = () => {
  useEffect(() => {
    preloadImages([BackgroundImage]);
  }, []);

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