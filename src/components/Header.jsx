import React, { useState } from 'react';
import { Menu } from 'lucide-react';
import FantasyDrawer from './FantasyDrawer';
import '../styles/Header.css';

const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <header className="fantasy-header">
      <button onClick={toggleDrawer} className="menu-button">
        <Menu size={24} />
      </button>
      <FantasyDrawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
    </header>
  );
};

export default Header;