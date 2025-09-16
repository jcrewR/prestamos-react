import React from 'react';
import '../css/Flooter.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2025 Biblioteca Virtual</p>
        <div className="footer-links">
          <a href="/about">Sobre nosotros</a>
          <a href="/contact">Contacto</a>
          <a href="/terms">Términos y condiciones</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
