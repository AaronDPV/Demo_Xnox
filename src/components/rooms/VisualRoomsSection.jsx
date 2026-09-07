import React from 'react';
import { useNavigate } from 'react-router-dom';

const FEATURED_ROOMS = [
  {
    id: 'jacuzzi',
    title: 'Habitación Jacuzzi VIP',
    tag: 'Tina de Hidromasaje',
    specs: 'Cromoterapia LED • Cama King • Climatizado',
    price: 'S/ 99',
    unit: '4h',
    img: '/assets/champagne-suite-bright.jpg',
    alt: 'Habitación Jacuzzi VIP con hidromasaje y pétalos'
  },
  {
    id: 'gamer',
    title: 'Habitación Gamer PS5',
    tag: 'Consola PlayStation 5',
    specs: 'Pantalla 65" 4K • Neón RGB • Fibra Óptica',
    price: 'S/ 70',
    unit: '4h',
    img: '/assets/gamer-suite-bright.jpg',
    alt: 'Habitación Gamer con PlayStation 5 y luces neón'
  },
  {
    id: 'sauna',
    title: 'Habitación Sauna Master',
    tag: 'Spa & Madera Noble',
    specs: 'Sauna Seco Finlandés • Jacuzzi • Lounge',
    price: 'S/ 120',
    unit: '4h',
    img: '/assets/sauna-suite.jpg',
    alt: 'Habitación Master con sauna seco finlandés en madera noble'
  },
  {
    id: 'galaxy',
    title: 'Habitación Galaxy Neón',
    tag: 'Experiencia Sensorial',
    specs: 'Techo Estelar 360° • Mood Light • Audio Hi-Fi',
    price: 'S/ 80',
    unit: '4h',
    img: '/assets/galaxy-suite.jpg',
    alt: 'Habitación Galaxy con proyector estelar y atmósfera de luces'
  }
];

export function VisualRoomsSection() {
  const navigate = useNavigate();

  return (
    <section className="visual-rooms-section reveal-on-scroll" id="habitaciones" aria-label="Sección de Habitaciones">
      <div className="container">
        
        {/* Cabecera Editorial Limpia */}
        <div className="section-header">
          <span className="section-tag">Colección Exclusiva</span>
          <h2>Nuestras <span className="text-shimmer-red">Habitaciones de Autor</span></h2>
          <p>Espacios creados para desconectar con total privacidad, hidromasajes de mármol y tecnología de vanguardia.</p>
          <div className="vertical-scroll-line" style={{ height: '42px', margin: '14px auto 0' }}></div>
        </div>

        {/* Grid Fotográfico Dominante con Poquísimo Texto */}
        <div className="visual-rooms-grid">
          {FEATURED_ROOMS.map((room, idx) => (
            <article 
              key={room.id}
              className={`visual-room-card curtain-container reveal-on-scroll reveal-scale reveal-stagger-${(idx % 2) + 1}`}
              onClick={() => navigate(`/reservas?room=${room.id}&modality=hours4`)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter') navigate(`/reservas?room=${room.id}&modality=hours4`);
              }}
              aria-label={`Reservar ${room.title}`}
            >
              <div className="curtain-overlay"></div>
              <img 
                src={room.img} 
                alt={room.alt} 
                className="visual-room-img" 
                loading="lazy" 
              />
              
              {/* Badges superiores flotantes */}
              <div className="visual-room-top-badges">
                <span className="visual-room-tag">{room.tag}</span>
                <span className="visual-room-price-badge">
                  Desde <strong>{room.price}</strong> <small>/ {room.unit}</small>
                </span>
              </div>

              {/* Overlay Inferior Minimalista */}
              <div className="visual-room-bottom-overlay">
                <div className="visual-room-info-row">
                  <div className="visual-room-title-group">
                    <h3 className="visual-room-name">{room.title}</h3>
                    <p className="visual-room-specs">{room.specs}</p>
                  </div>
                  <button 
                    type="button" 
                    className="btn btn-primary visual-room-cta-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate(`/reservas?room=${room.id}&modality=hours4`);
                    }}
                  >
                    <span>Reservar</span>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M5 13h11.86l-5.43 5.43 1.42 1.42L21.14 12l-8.29-8.29-1.42 1.42L16.86 11H5v2z"/></svg>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Botón inferior al catálogo completo */}
        <div style={{ textAlign: 'center', marginTop: '44px' }}>
          <button 
            type="button" 
            className="btn btn-secondary" 
            onClick={() => navigate('/suites')}
            style={{ padding: '14px 34px', fontSize: '0.95rem' }}
          >
            Ver Todas las Habitaciones & Tarifas por Horas →
          </button>
        </div>

      </div>
    </section>
  );
}

export default VisualRoomsSection;
