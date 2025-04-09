import { useState } from 'react';
import '../styles/Header.css';

const Header = ({ scrolled }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <a href="/">
              <span className="logo-text">Cyber Catalyst</span>
            </a>
          </div>

          <div className={`mobile-menu-btn ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>

          <nav className={`nav-menu ${menuOpen ? 'active' : ''}`}>
            <ul>
              <li><a href="#home" onClick={() => setMenuOpen(false)}>Home</a></li>
              <li><a href="#services" onClick={() => setMenuOpen(false)}>Services</a></li>
              <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
              <li><a href="#features" onClick={() => setMenuOpen(false)}>Solutions</a></li>
              <li><a href="#team" onClick={() => setMenuOpen(false)}>Team</a></li>
              <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
            </ul>
          </nav>

          <div className="header-cta">
            <a href="#contact" className="btn">Get Started</a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
