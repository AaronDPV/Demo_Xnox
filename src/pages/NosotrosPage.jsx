import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { MAIN_SEDES_LIST } from '../data/sedesData';

const PILLARS_DATA = [
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
        <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
      </svg>
    ),
    title: 'Discreción & Anonimato Total',
    desc: 'Ingreso vehicular directo con cocheras privadas techadas y portón eléctrico individual. Tu privacidad, anonimato y tranquilidad están protegidos las 24 horas con máxima confidencialidad.'
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
        <path d="m9 12 2 2 4-4"></path>
      </svg>
    ),
    title: 'Higiene de Grado Hospitalario',
    desc: 'Protocolos de desinfección estricta tras cada visita. Lencería de satén blanco de 400 hilos termosellada para cada huésped y esterilización de tinas de hidromasaje y saunas.'
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="15" rx="2" ry="2"></rect>
        <polyline points="17 2 12 7 7 2"></polyline>
      </svg>
    ),
    title: 'Tecnología & Entretenimiento 4K',
    desc: 'Consolas PlayStation 5 en suites gamer, Smart TVs 4K gigantes de 55" y 65", iluminación ambiental sensorial LED regulable y WiFi por fibra óptica de alta velocidad.'
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
      </svg>
    ),
    title: 'Confort Sensorial & Romance',
    desc: 'Tinas circulares dobles de mármol italiano con hidromasaje y cromoterapia, saunas secos finlandeses y servicio a la habitación con coctelería de autor y piqueos gourmet 24/7.'
  }
];

export function NosotrosPage() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.title = 'Nosotros & Concepto | Hotel XNOX Lima';
  }, []);

  return (
    <div className="page-nosotros">
      {/* 1. Mini Hero Banner idéntico a Suites y Precios */}
      <section className="suites-hero-banner" aria-label="Cabecera Nosotros Hotel XNOX">
        <div className="suites-hero-bg">
          <img 
            src="/assets/lobby.jpg" 
            alt="Nosotros y Concepto Hotel XNOX Experience" 
            className="suites-hero-img" 
          />
          <div className="suites-hero-overlay"></div>
        </div>

        <div className="container suites-hero-content">
          <div className="hero-asturias-tag animate-fade-in-down" style={{ marginBottom: '14px' }}>
            <span>HISTORIA, VISIÓN & FILOSOFÍA</span>
          </div>
          
          <h1 className="suites-hero-title animate-fade-in-up">
            Nosotros & <span className="text-shimmer-red">Concepto XNOX</span>
          </h1>

          <div className="hero-asturias-line animate-fade-in-up" style={{ margin: '14px auto' }}></div>

          <p className="suites-hero-desc animate-fade-in-up delay-1">
            Revolucionando el descanso exclusivo y el romance en Lima con arquitectura de vanguardia, discreción absoluta y confort sensorial.
          </p>
        </div>
      </section>

      {/* 2. Sección Manifiesto: Quiénes Somos */}
      <section className="nosotros-manifesto-section">
        <div className="container">
          <div className="nosotros-manifesto-grid">
            
            {/* Columna Texto Editorial */}
            <div className="manifesto-text-col reveal-on-scroll reveal-slide-left">
              <span className="section-tag">HOSPITALIDAD DE VANGUARDIA</span>
              <h2 className="manifesto-heading">
                Redefiniendo el Hospedaje Boutique en <span className="text-shimmer-red">Lima</span>
              </h2>
              <p className="manifesto-paragraph">
                <strong>Hotel XNOX Experience</strong> nació de una convicción clara: las parejas en Lima merecen un espacio verdaderamente sofisticado, limpio y privado, alejado de los anticuados clichés de los moteles tradicionales y la frialdad de los hoteles convencionales.
              </p>
              <p className="manifesto-paragraph">
                Diseñamos cada edificio desde cero con arquitectura contemporánea, aislamiento acústico de grado profesional y sistemas vehiculares con portón eléctrico automático directo a tu cochera techada, garantizando un anonimato del 100% desde tu llegada hasta tu salida.
              </p>

              <blockquote className="manifesto-quote">
                "En Hotel XNOX creemos que la intimidad, la elegancia arquitectónica y la tecnología de última generación deben convivir en perfecta armonía."
              </blockquote>

              <div className="manifesto-stats-inline">
                <div className="stat-inline-item">
                  <span className="stat-inline-num text-shimmer-red">4</span>
                  <span className="stat-inline-label">Sedes en Lima</span>
                </div>
                <div className="stat-inline-item">
                  <span className="stat-inline-num text-shimmer-red">+50K</span>
                  <span className="stat-inline-label">Huéspedes Felices</span>
                </div>
                <div className="stat-inline-item">
                  <span className="stat-inline-num text-shimmer-red">24/7</span>
                  <span className="stat-inline-label">Atención Continua</span>
                </div>
              </div>
            </div>

            {/* Columna Visual con Foto y Elemento Decorativo */}
            <div className="manifesto-visual-col reveal-on-scroll reveal-slide-right">
              <div className="manifesto-img-wrapper">
                <img 
                  src="/assets/cocktail-lounge.jpg" 
                  alt="Atmósfera y Arquitectura Hotel XNOX" 
                  className="manifesto-main-img" 
                  loading="lazy" 
                />
                <div className="manifesto-badge-float">
                  <span className="badge-float-icon">★</span>
                  <div className="badge-float-text">
                    <strong>100% Discreción</strong>
                    <span>Cocheras privadas con portón eléctrico</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Los 4 Pilares Innegociables de Excelencia */}
      <section className="nosotros-pillars-section">
        <div className="container">
          <div className="section-header reveal-on-scroll">
            <span className="section-tag">NUESTROS PRINCIPIOS</span>
            <h2>Los 4 Pilares de <span className="text-shimmer-red">Excelencia XNOX</span></h2>
            <p>Cada detalle de nuestras instalaciones ha sido rigurosamente concebido para garantizar una experiencia intachable.</p>
          </div>

          <div className="pillars-cards-grid">
            {PILLARS_DATA.map((pillar, idx) => (
              <div 
                key={idx} 
                className={`pillar-card reveal-on-scroll reveal-scale reveal-stagger-${idx + 1}`}
              >
                <div className="pillar-icon-box">
                  {pillar.icon}
                </div>
                <h3 className="pillar-title">{pillar.title}</h3>
                <p className="pillar-desc">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Nuestras 4 Sedes Estratégicas en Lima */}
      <section className="nosotros-sedes-section">
        <div className="container">
          <div className="section-header reveal-on-scroll">
            <span className="section-tag">PRESENCIA EN LA CAPITAL</span>
            <h2>Nuestras <span className="text-shimmer-red">4 Sedes en Lima</span></h2>
            <p>Edificios propios modernos y de fácil acceso vehicular en las zonas más estratégicas de la ciudad.</p>
          </div>

          <div className="nosotros-sedes-grid">
            {MAIN_SEDES_LIST.map((sede, idx) => (
              <div 
                key={sede.id} 
                className={`nosotros-sede-card reveal-on-scroll reveal-scale reveal-stagger-${idx + 1}`}
                onClick={() => navigate(`/sedes/${sede.id}`)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => { if (e.key === 'Enter') navigate(`/sedes/${sede.id}`); }}
              >
                <div className="nosotros-sede-img-wrap">
                  <img src={sede.photo} alt={`Fachada Sede ${sede.name}`} className="nosotros-sede-img" loading="lazy" />
                  <span className="nosotros-sede-tag-pill">{sede.tag}</span>
                </div>
                <div className="nosotros-sede-body">
                  <h3 className="nosotros-sede-title">Sede {sede.name}</h3>
                  <p className="nosotros-sede-address">{sede.address}</p>
                  <span className="nosotros-sede-link">Explorar Sede y Habitaciones ➔</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}

export default NosotrosPage;
