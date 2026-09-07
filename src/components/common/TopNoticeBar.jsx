import React from 'react';

export function TopNoticeBar() {
  return (
    <aside className="top-notice-bar" aria-label="Aviso de promoción">
      <div className="notice-inner">
        <span className="notice-badge">
          <span className="notice-fire">🔥</span>
          <span className="notice-tag-text">PROMO VIRAL</span>
        </span>
        <span className="notice-text">
          ¡Tu <strong>4ta Estadía es GRATIS</strong>! Acumula 3 visitas y la 4ta va por la casa.
        </span>
        <a 
          href="https://api.whatsapp.com/send?phone=51936793821&text=Hola%20Hotel%20XNOX,%20deseo%20aprovechar%20la%20promoci%C3%B3n%20de%20la%204ta%20estad%C3%ADa%20gratis" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="notice-cta"
        >
          <span>Agendar ahora</span>
          <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </a>
      </div>
    </aside>
  );
}
