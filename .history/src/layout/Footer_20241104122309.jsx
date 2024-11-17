import React from 'react';
import './styles/Footer.css'; // Asegúrate de que el archivo CSS esté en la ruta correcta

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <p>&copy; 2024 Im Your Fan Store. Todos los derechos reservados.</p>
        <ul className="footer__socials">
          <li>
            <a 
              href="https://www.instagram.com/imyourfanstore_7/" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <i className="bx bxl-instagram"></i>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
