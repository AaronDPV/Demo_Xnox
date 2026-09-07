import React from 'react';
import { MAIN_SEDES_LIST } from '../../data/sedesData';

export function SedesSection({ onSelectSede }) {
  return (
    <section className="sedes-section sedes-section-xnox" id="sedes" aria-label="Sedes de Hotel XNOX Experience">
      <div className="container">
        <div className="section-header reveal-on-scroll">
          <span className="section-tag">Ubicaciones Estratégicas</span>
          <h2>Nuestras <span className="text-shimmer-red">4 Sedes en Lima</span></h2>
          <p>Edificios modernos de estreno con cochera privada interna, portón automático y máxima discreción.</p>
          <div className="vertical-scroll-line" style={{ height: '36px', margin: '14px auto 0' }}></div>
        </div>

        <div className="sedes-xnox-grid">
          {MAIN_SEDES_LIST.map((sede, idx) => (
            <div 
              key={sede.id} 
              className={`sede-card-xnox reveal-on-scroll reveal-scale reveal-stagger-${idx + 1}`}
              onClick={() => onSelectSede ? onSelectSede(sede.id) : null}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  onSelectSede && onSelectSede(sede.id);
                }
              }}
            >
              {/* Imagen de fachada en alta definición */}
              <div className="sede-xnox-media">
                <img 
                  src={sede.photo} 
                  alt={`Sede Hotel XNOX ${sede.name}`} 
                  className="sede-xnox-img" 
                  loading="lazy" 
                />
                <div className="sede-xnox-card-overlay"></div>

                {/* Badge superior de zona exclusiva con punto rojo brillante */}
                <div className="sede-xnox-tag-badge">
                  <span className="sede-tag-pulse-dot"></span>
                  <span>{sede.tag}</span>
                </div>
              </div>

              {/* Información inferior con tipografía de lujo XNOX */}
              <div className="sede-xnox-info">
                <div className="sede-xnox-district">
                  <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                  <span>{sede.tag}</span>
                </div>

                <h3 className="sede-xnox-title">{sede.name}</h3>
                
                <p className="sede-xnox-address">{sede.address}</p>

                {/* Línea divisoria roja carmesí */}
                <div className="sede-xnox-line"></div>

                {/* Botón interactivo VER SEDE con colores Hotel XNOX */}
                <div className="sede-xnox-action">
                  <span className="sede-btn-label">VER SEDE</span>
                  <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" className="sede-arrow-icon">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SedesSection;
