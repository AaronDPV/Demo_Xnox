import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const GALLERY_ITEMS = [
  {
    id: 1,
    title: 'Jacuzzi VIP & Noche Romántica',
    tag: 'CROMOTERAPIA & RELAX',
    img: '/assets/champagne-suite-bright.jpg',
    roomId: 'jacuzzi'
  },
  {
    id: 2,
    title: 'PlayStation 5 & Luces Neón',
    tag: 'HABITACIÓN GAMER 4K',
    img: '/assets/gamer-suite-bright.jpg',
    roomId: 'gamer'
  },
  {
    id: 3,
    title: 'Sauna Finlandés en Madera Noble',
    tag: 'SPA & SAUNA PRIVADO',
    img: '/assets/sauna-suite.jpg',
    roomId: 'sauna'
  },
  {
    id: 4,
    title: 'Habitación Deluxe Miraflores',
    tag: 'VISTA PANORÁMICA',
    img: '/assets/miraflores-deluxe.jpg',
    roomId: 'miraflores'
  },
  {
    id: 5,
    title: 'Coctelería de Autor & Bar Privado',
    tag: 'BAR & COCTELERÍA',
    img: '/assets/cocktail-lounge.jpg',
    roomId: null
  },
  {
    id: 6,
    title: 'Habitación Galaxy & Proyector Estelar',
    tag: 'ATMÓSFERA SENSORIAL',
    img: '/assets/galaxy-suite.jpg',
    roomId: 'galaxy'
  }
];

export function VisualGallery({ onSelectRoom }) {
  const navigate = useNavigate();
  const [activePhoto, setActivePhoto] = useState(null);

  const handleClick = (item) => {
    if (item.roomId) {
      navigate(`/reservas?room=${item.roomId}`);
    } else {
      setActivePhoto(item);
    }
  };

  return (
    <section className="visual-gallery-section reveal-on-scroll" aria-label="Galería fotográfica de Hotel XNOX">
      <div className="container">
        
        <div className="section-header">
          <span className="section-tag">Espacios & Galerías</span>
          <h2>Atmósfera <span className="text-shimmer-red">Visual & Exclusividad</span></h2>
          <p>Fotografía real de nuestras suites de autor, mármol italiano, jacuzzis y consolas de última generación.</p>
          <div className="vertical-scroll-line" style={{ height: '45px', margin: '14px auto 0' }}></div>
        </div>

        {/* Editorial Masonry Grid con Efecto Telón de Apertura */}
        <div className="gallery-mosaic-grid">
          {GALLERY_ITEMS.map((item, idx) => (
            <div 
              key={item.id} 
              className={`gallery-mosaic-card curtain-container reveal-on-scroll reveal-scale reveal-stagger-${(idx % 3) + 1}`}
              onClick={() => handleClick(item)}
            >
              <div className="curtain-overlay"></div>
              <img src={item.img} alt={item.title} className="mosaic-img" loading="lazy" />
              <div className="mosaic-overlay">
                <span className="mosaic-tag">{item.tag}</span>
                <div className="mosaic-bottom-info">
                  <h4>{item.title}</h4>
                  <span className="mosaic-action-hint">Ver Suite →</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '36px' }}>
          <button 
            type="button" 
            className="btn btn-secondary" 
            onClick={() => navigate('/suites')}
            style={{ padding: '14px 32px' }}
          >
            Explorar Todas las Suites y Tarifas →
          </button>
        </div>

      </div>

      {/* Lightbox Modal for Photo Zoom */}
      {activePhoto && (
        <div className="modal-overlay" onClick={() => setActivePhoto(null)}>
          <div className="modal-content-box gallery-lightbox" onClick={(e) => e.stopPropagation()}>
            <button 
              type="button" 
              className="modal-close-btn" 
              onClick={() => setActivePhoto(null)}
            >
              ✕
            </button>
            <img src={activePhoto.img} alt={activePhoto.title} className="lightbox-img" />
            <div className="lightbox-caption">
              <h3>{activePhoto.title}</h3>
              <button 
                type="button" 
                className="btn btn-primary btn-sm"
                onClick={() => {
                  setActivePhoto(null);
                  navigate('/reservas');
                }}
              >
                Agendar Reserva
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default VisualGallery;
