import React from 'react';
import { Link } from 'react-router-dom';
import { WhatsAppIcon } from './WhatsAppIcon';
import { useTheme } from '../../context/ThemeContext';

export function Footer() {
  const { isDark } = useTheme();
  const logoSrc = isDark ? '/assets/xnox-transparent.png' : '/assets/xnox-blanco.png';

  return (
    <footer className="footer-luxury">
      {/* Top Decorative Brand Red Accent */}
      <div className="footer-accent-line"></div>

      <div className="container">
        <div className="footer-top-grid">

          {/* Brand Column */}
          <div className="footer-brand-col">
            <Link to="/" className="footer-brand-link" aria-label="Inicio Hotel XNOX">
              <img 
                src={logoSrc} 
                alt="Hotel XNOX Experience" 
                className="footer-logo-img" 
              />
            </Link>
            <p className="footer-brand-desc">
              El primer hotel boutique temático en Lima enfocado en descanso exclusivo y desconexión para parejas: consolas PS5 4K, tinas de hidromasaje, saunas finlandeses y privacidad absoluta.
            </p>
            <div className="footer-social-row">
              <a 
                href="https://www.tiktok.com/@xnox_hotel" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="footer-social-circle group" 
                aria-label="TikTok Hotel XNOX"
              >
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24" className="transition-transform group-hover:scale-110"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.29 0 .58.04.85.12V9.4a6.33 6.33 0 0 0-.85-.05A6.33 6.33 0 0 0 3.15 15.7a6.34 6.34 0 0 0 6.33 6.3c3.48 0 6.32-2.82 6.32-6.3v-6.9a8.3 8.3 0 0 0 5-1.63v-3.4a4.8 4.8 0 0 1-1.21.92z"/></svg>
              </a>
              <a 
                href="https://www.instagram.com/hotel.xnox/?hl=es" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="footer-social-circle group" 
                aria-label="Instagram Hotel XNOX"
              >
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24" className="transition-transform group-hover:scale-110"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a 
                href="https://api.whatsapp.com/send?phone=51936793821&text=Hola%20Hotel%20XNOX,%20deseo%20hacer%20una%20consulta" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="footer-social-circle group" 
                aria-label="WhatsApp Hotel XNOX"
              >
                <WhatsAppIcon size={18} />
              </a>
            </div>
          </div>

          {/* Habitaciones Links */}
          <div className="footer-col">
            <h4 className="footer-col-title">Nuestras Habitaciones</h4>
            <ul className="footer-nav-list">
              <li><Link to="/suites?cat=gamer">Habitación Gamer PS5 4K</Link></li>
              <li><Link to="/suites?cat=jacuzzi">Habitación Jacuzzi VIP</Link></li>
              <li><Link to="/suites?cat=sauna">Habitación Sauna & Jacuzzi</Link></li>
              <li><Link to="/suites?cat=galaxy">Habitación Galaxy Neón</Link></li>
              <li><Link to="/suites?cat=confort">Habitación Ejecutiva Confort</Link></li>
            </ul>
          </div>

          {/* Sedes & Direct Access */}
          <div className="footer-col">
            <h4 className="footer-col-title">Sedes & Navegación</h4>
            <ul className="footer-nav-list">
              <li><Link to="/promociones">Promociones Exclusivas</Link></li>
              <li><Link to="/nosotros">Nosotros & Concepto</Link></li>
              <li><Link to="/sedes">Sedes en Lima</Link></li>
              <li><a href="https://api.whatsapp.com/send?phone=51936793821&text=Hola%20Hotel%20XNOX,%20deseo%20consultar%20disponibilidad%20y%20reservar%20una%20habitaci%C3%B3n" target="_blank" rel="noopener noreferrer">Reservar por WhatsApp</a></li>
              <li><Link to="/faq">Preguntas Frecuentes</Link></li>
            </ul>
          </div>

          {/* Contact & WhatsApp Action */}
          <div className="footer-col">
            <h4 className="footer-col-title">Atención 24 Horas</h4>
            <p className="footer-hours-desc">
              Recepción y atención continua los 365 días del año con confirmación inmediata.
            </p>
            <div className="footer-contact-actions">
              <a 
                href="tel:+51932347519" 
                className="footer-phone-btn"
              >
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                <span>+51 932 347 519</span>
              </a>

              <a 
                href="https://api.whatsapp.com/send?phone=51936793821&text=Hola%20Hotel%20XNOX,%20deseo%20consultar%20disponibilidad" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-whatsapp footer-whatsapp-btn"
              >
                <WhatsAppIcon size={20} filled={true} />
                <span>WhatsApp Concierge</span>
              </a>
            </div>
          </div>

        </div>

        {/* Footer Bottom Bar */}
        <div className="footer-bottom-bar">
          <p className="footer-copy">
            © {new Date().getFullYear()} Hotel XNOX Experience. Todos los derechos reservados. Lima, Perú.
          </p>
          <div className="footer-guarantee-tags">
            <span>Privacidad Garantizada</span>
            <span className="footer-dot">•</span>
            <span>Cocheras Privadas</span>
            <span className="footer-dot">•</span>
            <span>Check-in Inmediato</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
