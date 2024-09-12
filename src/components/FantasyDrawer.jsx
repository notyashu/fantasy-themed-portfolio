import React, { useEffect, useRef } from 'react';
import { X } from 'lucide-react';
import { Link } from 'react-router-dom';
import '../styles/FantasyDrawer.css';

const FantasyDrawer = ({ isOpen, onClose }) => {
  const drawerRef = useRef(null);

  useEffect(() => {
    const drawer = drawerRef.current;
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      drawer.style.transform = 'translateX(0)';
    } else {
      document.body.style.overflow = 'unset';
      drawer.style.transform = 'translateX(-100%)';
    }
  }, [isOpen]);

  const navItems = ['Map', 'Projects', 'Skills', 'Experience', 'Education', 'Contact', 'About'];

  return (
    <div className={`fantasy-drawer-overlay ${isOpen ? 'open' : ''}`} onClick={onClose}>
      <div ref={drawerRef} className="fantasy-drawer" onClick={(e) => e.stopPropagation()}>
        <button className="fantasy-drawer-close" onClick={onClose}>
          <X size={24} />
        </button>
        <div className="fantasy-drawer-content">
          <h2 className="drawer-title">Realm Navigation</h2>
          {navItems.map((item) => (
            <Link
              key={item}
              to={item === 'Map' ? '/' : `/${item.toLowerCase()}`}
              className="nav-button"
              onClick={onClose}
            >
              {item}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FantasyDrawer;