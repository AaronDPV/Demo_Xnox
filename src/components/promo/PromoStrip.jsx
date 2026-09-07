import React from 'react';

export function PromoStrip() {
  return (
    <section className="promo-strip-section" aria-label="Promociones">
      <div className="container">
        <div className="promo-cards-wrapper">
          <div className="promo-card">
            <div className="promo-icon-badge">
              <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
            </div>
            <div className="promo-info">
              <h4>¡Tu 4ta Estadía es Totalmente Gratis!</h4>
              <p>Pide tu tarjeta de fidelización en recepción. Al completar 3 estadías, la 4ta va por nuestra cuenta.</p>
            </div>
          </div>

          <div className="promo-card">
            <div className="promo-icon-badge">
              <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M4 12v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-6"></path><path d="M2 12h20"></path><path d="M7 12V7a3 3 0 0 1 6 0v5"></path></svg>
            </div>
            <div className="promo-info">
              <h4>Suite Jacuzzi VIP desde S/ 99</h4>
              <p>Disfruta de hidromasajes, cromoterapia y ambiente climatizado en sedes Naranjal, Alisos y Miraflores.</p>
            </div>
          </div>

          <div className="promo-card">
            <div className="promo-icon-badge">
              <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><rect x="2" y="6" width="20" height="12" rx="2"></rect><line x1="6" y1="12" x2="10" y2="12"></line><line x1="8" y1="10" x2="8" y2="14"></line><line x1="15" y1="13" x2="15.01" y2="13"></line><line x1="18" y1="11" x2="18.01" y2="11"></line></svg>
            </div>
            <div className="promo-info">
              <h4>Pack Gamer Duo en Suite PS5</h4>
              <p>Tus juegos favoritos en pantalla 65" 4K con mandos duales sincronizados y sonido envolvente.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
