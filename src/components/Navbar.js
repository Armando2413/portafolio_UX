import React, { useState } from 'react';
import { motion } from 'framer-motion';
import '../styles/Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faLinkedin,
  faTwitter,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { title: 'Inicio', href: '#hero' },
    { title: 'Sobre mí', href: '#about' },
    { title: 'Portafolio', href: '#portfolio' },
    { title: 'Experiencia', href: '#experience' },
    { title: 'Habilidades', href: '#skills' },
    { title: 'Contacto', href: '#contact' },
  ];

  

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <motion.div
          className="navbar-brand"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <a href="#hero">AQ</a>
        </motion.div>
      </div>

      <div className="navbar-center">
        <ul className={`navbar-menu ${isOpen ? 'is-open' : ''}`}>
          {menuItems.map((item, index) => (
            <li key={index}>
              <a href={item.href} onClick={() => setIsOpen(false)}>
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="navbar-right">
        <div className="socials">
          <a
            className="social-icon"
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a
            className="social-icon"
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a
            className="social-icon"
            href="https://twitter.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="Twitter"
          >
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a
            className="social-icon"
            href="https://www.instagram.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>

        <div className="navbar-menu-toggle" onClick={() => setIsOpen(!isOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;