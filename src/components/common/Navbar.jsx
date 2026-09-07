import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';

export function Navbar() {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  // Cerrar menú móvil al cambiar de ruta o pulsar Escape
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  // El header es transparente en la página principal y en suites cuando está arriba del todo
  const isTransparent = (isHome || location.pathname === '/suites') && !isScrolled;

  return (
    <header className={`navbar-country-wrapper ${isTransparent ? 'is-top' : 'is-scrolled'}`}>
      <nav className="navbar-country" id="navbar" aria-label="Navegación principal">
        <div className="navbar-country-container">
          
          {/* 1. Columna Izquierda: Enlaces principales */}
          <div className="nav-col nav-col-left">
            <ul className="nav-links-list">
              <li>
                <NavLink 
                  to="/" 
                  end 
                  className={({ isActive }) => (isActive ? 'country-nav-link active' : 'country-nav-link')}
                  onClick={handleLinkClick}
                >
                  Inicio
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/suites" 
                  className={({ isActive }) => (isActive ? 'country-nav-link active' : 'country-nav-link')}
                  onClick={handleLinkClick}
                >
                  Suites & Precios
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/sedes" 
                  className={({ isActive }) => (isActive ? 'country-nav-link active' : 'country-nav-link')}
                  onClick={handleLinkClick}
                >
                  Sedes en Lima
                </NavLink>
              </li>
            </ul>
          </div>

          {/* 2. Columna Central: Logotipo Emblema Centrado */}
          <div className="nav-col nav-col-center">
            <Link to="/" className="brand-country-logo" aria-label="Inicio Hotel XNOX" onClick={handleLinkClick}>
              <img 
                src="/assets/xnox-transparent.png" 
                alt="Hotel XNOX Experience" 
                className="brand-country-img" 
              />
            </Link>
          </div>

          {/* 3. Columna Derecha: Enlaces secundarios, botón de reserva y menú */}
          <div className="nav-col nav-col-right">
            <ul className="nav-links-list nav-links-secondary">
              <li>
                <NavLink 
                  to="/social" 
                  className={({ isActive }) => (isActive ? 'country-nav-link active' : 'country-nav-link')}
                  onClick={handleLinkClick}
                >
                  TikTok & Reels
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/faq" 
                  className={({ isActive }) => (isActive ? 'country-nav-link active' : 'country-nav-link')}
                  onClick={handleLinkClick}
                >
                  FAQ
                </NavLink>
              </li>
            </ul>

            <div className="nav-actions-group">
              <Link to="/reservas" className="btn-country-reserve" onClick={handleLinkClick}>
                Reservar
              </Link>

              <button 
                type="button" 
                className={`country-hamburger-btn ${mobileMenuOpen ? 'is-active' : ''}`}
                onClick={() => setMobileMenuOpen(prev => !prev)} 
                aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
                aria-expanded={mobileMenuOpen}
              >
                <span className="hamburger-icon-line"></span>
                <span className="hamburger-icon-line"></span>
                <span className="hamburger-icon-line"></span>
              </button>
            </div>
          </div>

        </div>

        {/* Menú Desplegable Móvil / Drawer */}
        <div className={`country-mobile-drawer ${mobileMenuOpen ? 'open' : ''}`}>
          <div className="mobile-drawer-content">
            <ul className="mobile-nav-list">
              <li>
                <NavLink to="/" end onClick={handleLinkClick}>Inicio</NavLink>
              </li>
              <li>
                <NavLink to="/suites" onClick={handleLinkClick}>Suites & Precios</NavLink>
              </li>
              <li>
                <NavLink to="/sedes" onClick={handleLinkClick}>Sedes en Lima</NavLink>
              </li>
              <li>
                <NavLink to="/social" onClick={handleLinkClick}>TikTok & Reels</NavLink>
              </li>
              <li>
                <NavLink to="/faq" onClick={handleLinkClick}>Preguntas Frecuentes (FAQ)</NavLink>
              </li>
            </ul>

            <div className="mobile-drawer-action">
              <Link to="/reservas" className="btn btn-primary btn-block" onClick={handleLinkClick}>
                Cotizar y Reservar Suite
              </Link>
              <a 
                href="https://api.whatsapp.com/send?phone=51936793821&text=Hola%20Hotel%20XNOX,%20deseo%20consultar%20disponibilidad" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-whatsapp btn-block" 
                style={{ marginTop: '10px' }}
              >
                WhatsApp Concierge
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
