import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { MAIN_SEDES_LIST } from '../../data/sedesData';
import { useTheme } from '../../context/ThemeContext';

export function Navbar() {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [sedesDropdownOpen, setSedesDropdownOpen] = useState(false);
  const { theme, toggleTheme, isDark } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  // Cerrar menú móvil y dropdown al cambiar de ruta o pulsar Escape
  useEffect(() => {
    setMobileMenuOpen(false);
    setSedesDropdownOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
        setSedesDropdownOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
    setSedesDropdownOpen(false);
  };

  // El header es transparente arriba del todo en Home, Suites, Sedes, Promociones y Nosotros
  const isTransparent = (
    isHome || 
    location.pathname.startsWith('/suites') || 
    location.pathname.startsWith('/sedes') ||
    location.pathname.startsWith('/promociones') ||
    location.pathname.startsWith('/nosotros')
  ) && !isScrolled;

  // Logotipo dinámico según contraste
  const logoSrc = (!isDark && isScrolled) ? '/assets/xnox-blanco.png' : '/assets/xnox-transparent.png';

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
                  className={() => (location.pathname.startsWith('/suites') ? 'country-nav-link active' : 'country-nav-link')}
                  onClick={handleLinkClick}
                >
                  Suites & Precios
                </NavLink>
              </li>
              
              {/* Desglose de Sedes en Lima al pasar el mouse (Alineado y Sin Quiebres) */}
              <li 
                className="nav-item-has-dropdown"
                onMouseEnter={() => setSedesDropdownOpen(true)}
                onMouseLeave={() => setSedesDropdownOpen(false)}
              >
                <NavLink 
                  to="/sedes" 
                  className={() => (location.pathname.startsWith('/sedes') ? 'country-nav-link active' : 'country-nav-link')}
                  onClick={handleLinkClick}
                >
                  <span>Sedes en Lima</span>
                  <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="dropdown-caret" aria-hidden="true">
                    <path d="M6 9l6 6 6-6"/>
                  </svg>
                </NavLink>

                {/* Dropdown elegante, compacto con fotos en miniatura */}
                <div className={`nav-sedes-dropdown-compact ${sedesDropdownOpen ? 'is-visible' : ''}`}>
                  <div className="nav-sedes-compact-header">
                    <span>NUESTRAS 4 SEDES</span>
                  </div>

                  <div className="nav-sedes-compact-list">
                    {MAIN_SEDES_LIST.map((sede) => (
                      <Link
                        key={sede.id}
                        to={`/sedes/${sede.id}`}
                        className="nav-sede-compact-item"
                        onClick={handleLinkClick}
                      >
                        <div className="nav-sede-mini-thumb-wrap">
                          <img src={sede.photo} alt={sede.name} className="nav-sede-mini-thumb" />
                        </div>
                        <div className="nav-sede-compact-info">
                          <span className="nav-sede-compact-name">{sede.name}</span>
                          <span className="nav-sede-compact-tag">{sede.tag}</span>
                        </div>
                        <span className="nav-sede-compact-arrow">›</span>
                      </Link>
                    ))}
                  </div>

                  <Link to="/sedes" className="nav-sedes-compact-all" onClick={handleLinkClick}>
                    <span>Ver mapa de las 4 sedes</span>
                    <span>→</span>
                  </Link>
                </div>
              </li>
            </ul>
          </div>

          {/* 2. Columna Central: Logotipo Emblema Centrado */}
          <div className="nav-col nav-col-center">
            <Link to="/" className="brand-country-logo" aria-label="Inicio Hotel XNOX" onClick={handleLinkClick}>
              <img 
                src={logoSrc} 
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
                  to="/promociones" 
                  className={({ isActive }) => (isActive ? 'country-nav-link active' : 'country-nav-link')}
                  onClick={handleLinkClick}
                >
                  Promociones
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/nosotros" 
                  className={({ isActive }) => (isActive ? 'country-nav-link active' : 'country-nav-link')}
                  onClick={handleLinkClick}
                >
                  Nosotros
                </NavLink>
              </li>
            </ul>

            <div className="nav-actions-group">
              {/* Botón de Alternancia Modo Oscuro / Modo Claro (Sol / Luna) */}
              <button
                type="button"
                className={`theme-toggle-btn ${isDark ? 'is-dark' : 'is-light'}`}
                onClick={toggleTheme}
                aria-label={isDark ? 'Cambiar a Modo Claro' : 'Cambiar a Modo Oscuro'}
                title={isDark ? 'Activar Modo Claro' : 'Activar Modo Oscuro'}
              >
                <span className="theme-toggle-icon">
                  {isDark ? (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="theme-svg sun-svg">
                      <circle cx="12" cy="12" r="4.5" fill="currentColor" fillOpacity="0.25"></circle>
                      <line x1="12" y1="1.5" x2="12" y2="4"></line>
                      <line x1="12" y1="20" x2="12" y2="22.5"></line>
                      <line x1="4.5" y1="4.5" x2="6.3" y2="6.3"></line>
                      <line x1="17.7" y1="17.7" x2="19.5" y2="19.5"></line>
                      <line x1="1.5" y1="12" x2="4" y2="12"></line>
                      <line x1="20" y1="12" x2="22.5" y2="12"></line>
                      <line x1="4.5" y1="19.5" x2="6.3" y2="17.7"></line>
                      <line x1="17.7" y1="6.3" x2="19.5" y2="4.5"></line>
                    </svg>
                  ) : (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="theme-svg moon-svg">
                      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" fill="currentColor" fillOpacity="0.18"></path>
                    </svg>
                  )}
                </span>
              </button>

              <a 
                href="https://api.whatsapp.com/send?phone=51936793821&text=Hola%20Hotel%20XNOX,%20deseo%20consultar%20disponibilidad%20y%20reservar%20una%20habitaci%C3%B3n" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-country-reserve"
                style={{ textDecoration: 'none' }}
              >
                Reservar
              </a>

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
              <li className="mobile-sedes-item">
                <NavLink to="/sedes" onClick={handleLinkClick} className="mobile-sedes-main-link">
                  <span>Sedes en Lima</span>
                  <span className="mobile-sedes-count-badge">4 Sedes</span>
                </NavLink>
                {/* Desglose rápido de las 4 sedes en móvil */}
                <div className="mobile-sedes-chips">
                  {MAIN_SEDES_LIST.map((sede) => (
                    <Link
                      key={sede.id}
                      to={`/sedes/${sede.id}`}
                      className="mobile-sede-chip-btn"
                      onClick={handleLinkClick}
                    >
                      <span className="chip-dot"></span>
                      <span>{sede.shortName || sede.name}</span>
                    </Link>
                  ))}
                </div>
              </li>
              <li>
                <NavLink to="/promociones" onClick={handleLinkClick}>Promociones</NavLink>
              </li>
              <li>
                <NavLink to="/nosotros" onClick={handleLinkClick}>Nosotros</NavLink>
              </li>
            </ul>

            {/* Selector de Tema en Móvil */}
            <div className="mobile-theme-wrap">
              <button 
                type="button" 
                className={`mobile-theme-pill-btn ${isDark ? 'is-dark' : 'is-light'}`}
                onClick={toggleTheme}
                aria-label={isDark ? 'Cambiar a Modo Claro' : 'Cambiar a Modo Oscuro'}
              >
                <span className="mobile-theme-icon-badge">
                  {isDark ? '☀️' : '🌙'}
                </span>
                <span className="mobile-theme-text">
                  {isDark ? 'Modo Oscuro Activo (Toca para Claro)' : 'Modo Claro Activo (Toca para Oscuro)'}
                </span>
              </button>
            </div>

            <div className="mobile-drawer-action">
              <a 
                href="https://api.whatsapp.com/send?phone=51936793821&text=Hola%20Hotel%20XNOX,%20deseo%20consultar%20disponibilidad%20y%20reservar%20una%20habitaci%C3%B3n" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-primary btn-block" 
                onClick={handleLinkClick}
                style={{ textDecoration: 'none' }}
              >
                Reservar por WhatsApp
              </a>
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
