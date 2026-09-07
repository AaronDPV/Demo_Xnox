import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { SUITES_DATA } from '../../data/suitesData';
import { WhatsAppIcon } from '../common/WhatsAppIcon';

// SVGs elegantes de línea fina para los iconos de especificaciones con acento rojo y negro
function BulletIcon({ type }) {
  switch (type) {
    case 'bed':
      return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="bullet-icon-svg">
          <path d="M2 19h20M2 17v-6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v6M4 9V5a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v4M12 9V5a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v4" />
        </svg>
      );
    case 'bath':
      return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="bullet-icon-svg">
          <path d="M4 12h16a1 1 0 0 1 1 1v3a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4v-3a1 1 0 0 1 1-1z" />
          <path d="M6 12V5a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1M5 20l-1 2M19 20l1 2" />
        </svg>
      );
    case 'cocktail':
    case 'bar':
      return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="bullet-icon-svg">
          <path d="M8 22h8M12 11v11M19 3l-7 8-7-8h14z" />
        </svg>
      );
    case 'ps5':
    case 'game':
      return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="bullet-icon-svg">
          <rect x="2" y="6" width="20" height="12" rx="3" />
          <path d="M6 12h4M8 10v4M15 11h.01M17 13h.01" />
        </svg>
      );
    case 'tv':
      return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="bullet-icon-svg">
          <rect x="2" y="7" width="20" height="13" rx="2" />
          <path d="m17 2-5 5-5-5" />
        </svg>
      );
    case 'sauna':
      return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="bullet-icon-svg">
          <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg>
      );
    case 'lounge':
      return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="bullet-icon-svg">
          <path d="M20 9V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v2M2 14v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4M2 11h20v4H2z" />
        </svg>
      );
    case 'stars':
      return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="bullet-icon-svg">
          <path d="m12 3 2.5 5.5L20 11l-4 4.5 1 6.5-5-3-5 3 1-6.5L4 11l5.5-2.5L12 3z" />
        </svg>
      );
    case 'sound':
      return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="bullet-icon-svg">
          <path d="M3 18v-6a9 9 0 0 1 18 0v6M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
        </svg>
      );
    default:
      return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="bullet-icon-svg">
          <circle cx="12" cy="12" r="9" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      );
  }
}

export function CountryClubRoomsShowcase({
  isCurated = false,
  showFilters = !isCurated,
  tag = null,
  title = null,
  subtitle = null,
  showHeroBanner = false
}) {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [activePhotos, setActivePhotos] = useState({});
  const [modalRoom, setModalRoom] = useState(null);

  const categories = [
    { id: 'all', label: 'Todas las Suites' },
    { id: 'jacuzzi', label: 'Jacuzzi VIP' },
    { id: 'gamer', label: 'Gamer PS5' },
    { id: 'sauna', label: 'Sauna Master' },
    { id: 'galaxy', label: 'Galaxy Sensorial' },
    { id: 'confort', label: 'Ejecutivas' }
  ];

  const suitesList = Object.values(SUITES_DATA);

  // Selección Curada de las Mejores Habitaciones (Para Inicio)
  // 1. Suite Jacuzzi VIP, 2. Suite Gamer PS5, 3. Suite Sauna Master, 4. Suite Galaxy Sensorial
  const curatedIds = ['jacuzzi', 'gamer', 'sauna', 'galaxy'];
  const displayedSuites = isCurated
    ? curatedIds.map(id => SUITES_DATA[id]).filter(Boolean)
    : (selectedCategory === 'all' ? suitesList : suitesList.filter(s => s.category === selectedCategory));

  const handlePrevPhoto = (roomId, total, e) => {
    e.stopPropagation();
    setActivePhotos(prev => {
      const current = prev[roomId] || 0;
      return { ...prev, [roomId]: (current - 1 + total) % total };
    });
  };

  const handleNextPhoto = (roomId, total, e) => {
    e.stopPropagation();
    setActivePhotos(prev => {
      const current = prev[roomId] || 0;
      return { ...prev, [roomId]: (current + 1) % total };
    });
  };

  return (
    <div className={`country-rooms-wrapper ${showHeroBanner ? 'has-hero-banner' : ''}`}>
      {/* 1. Hero Banner con Imagen de Fondo (Solo en Suites & Precios) */}
      {showHeroBanner && (
        <section className="suites-hero-banner" aria-label="Cabecera Suites y Precios">
          <div className="suites-hero-bg">
            <img 
              src="/assets/miraflores-deluxe.jpg" 
              alt="Suites y Precios Hotel XNOX" 
              className="suites-hero-img" 
            />
            <div className="suites-hero-overlay"></div>
          </div>

          <div className="container suites-hero-content">
            <div className="hero-asturias-tag animate-fade-in-down" style={{ marginBottom: '14px' }}>
              <span>CATÁLOGO OFICIAL DE SUITES</span>
            </div>
            
            <h1 className="suites-hero-title animate-fade-in-up">
              Nuestras <span className="text-shimmer-red">Suites & Precios</span>
            </h1>

            <div className="hero-asturias-line animate-fade-in-up" style={{ margin: '14px auto' }}></div>

            <p className="suites-hero-desc animate-fade-in-up delay-1">
              Tarifas transparentes por horas o pernocte. Todo incluido y privacidad garantizada.
            </p>
          </div>
        </section>
      )}

      {/* 2. Sección Principal de Habitaciones */}
      <section className="country-rooms-section" id="habitaciones" aria-label="Colección de Habitaciones y Suites">
        <div className="container">
          
          {/* Cabecera Editorial Estándar (Solo cuando no hay Hero Banner) */}
          {!showHeroBanner && (
            <div className="section-header">
              <span className="section-tag">
                {tag || (isCurated ? 'Nuestras Mejores Habitaciones' : 'Catálogo Oficial de Suites')}
              </span>
              <h2>
                {title || (isCurated ? (
                  <>Habitaciones & <span className="text-shimmer-red">Suites de Autor</span></>
                ) : (
                  <>Nuestras <span className="text-shimmer-red">Suites & Precios</span></>
                ))}
              </h2>
              <p>
                {subtitle || (isCurated 
                  ? 'Una selecta curaduría de nuestros espacios más exclusivos: tinas de hidromasaje en mármol, consolas PS5 y ambientación de autor.'
                  : 'Filtra por categoría, compara tarifas por horas (4h/6h) o pernocte y reserva tu suite con total discreción.')}
              </p>
              <div className="vertical-scroll-line" style={{ height: '42px', margin: '14px auto 0' }}></div>
            </div>
          )}

          {/* 1. Barra Superior de Categorías con Línea de Separación (Solo en Suites & Precios, oculto en Inicio) */}
          {showFilters && !isCurated && (
            <div className="country-tabs-wrapper">
              <div className="country-tabs-baseline" role="tablist">
                {categories.map(cat => (
                  <button
                    key={cat.id}
                    type="button"
                    role="tab"
                    aria-selected={selectedCategory === cat.id}
                    className={`country-tab-btn ${selectedCategory === cat.id ? 'active' : ''}`}
                    onClick={() => setSelectedCategory(cat.id)}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* 2. Cuadrícula Alternante Zig-Zag de Habitaciones */}
          <div className="country-rooms-stack" key={selectedCategory}>
            {displayedSuites.map((room, idx) => {
            const isImageLeft = idx % 2 === 1; // Alternancia: par contenido izq, impar imagen izq
            const photoList = room.gallery && room.gallery.length > 0 ? room.gallery : [room.thumb];
            const currentPhotoIdx = activePhotos[room.id] || 0;
            const currentPhoto = photoList[currentPhotoIdx];

            return (
              <article 
                key={room.id} 
                className={`country-room-card ${isImageLeft ? 'image-left' : 'image-right'} reveal-on-scroll suite-slide-in-left bg-white dark:bg-[#141722] border border-black/10 dark:border-white/10`}
                style={{
                  animationDelay: `${idx * 0.1}s`,
                  transitionDelay: `${idx * 0.1}s`
                }}
              >
                {/* Columna de Contenido */}
                <div className="country-room-content bg-white dark:bg-[#141722] transition-colors duration-300">
                  <div className="country-room-header">
                    <h3 className="country-room-title text-[#111317] dark:text-white transition-colors">{room.name}</h3>
                    
                    {/* Metadatos (Área, Huéspedes, Sedes) */}
                    <div className="country-room-meta">
                      <div className="meta-specs-group text-[#4A5568] dark:text-[#CBD5E1]">
                        <span className="meta-item">
                          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/>
                          </svg>
                          {room.area}
                        </span>
                        <span className="meta-sep">•</span>
                        <span className="meta-item">
                          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
                            <circle cx="9" cy="7" r="4"/>
                            <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
                            <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                          </svg>
                          {room.capacity}
                        </span>
                      </div>
                      {room.sedes && (
                        <div className="meta-sedes-badge">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                          </svg>
                          <span>{room.sedes}</span>
                        </div>
                      )}
                    </div>

                    {/* Lista de 3 Balas con Iconos Delicados */}
                    <div className="country-room-bullets">
                      {room.bullets?.map((b, bIdx) => (
                        <div key={bIdx} className="bullet-row">
                          <BulletIcon type={b.icon} />
                          <span className="bullet-text text-[#2D3748] dark:text-[#F1F5F9] transition-colors">{b.text}</span>
                        </div>
                      ))}
                    </div>

                    {/* Frase Editorial Evocativa */}
                    <p className="country-room-quote text-[#1A202C] dark:text-[#E2E8F0] transition-colors">
                      {room.quote}
                    </p>
                  </div>

                  {/* Acciones de Reserva */}
                  <div className="country-room-footer">
                    <div className="country-room-actions">
                      <button 
                        type="button" 
                        className="btn-link-details text-[#111317] dark:text-white transition-colors"
                        onClick={() => setModalRoom(room)}
                      >
                        Ver más detalles →
                      </button>

                      <div className="country-room-cta-group">
                        <div className="country-room-price">
                          <span className="price-from text-[#64748B] dark:text-[#94A3B8]">Desde</span>
                          <span className="price-currency">S/</span>
                          <span className="price-amount text-[#0F131A] dark:text-white transition-colors">{room.hours4}</span>
                          <span className="price-unit text-[#64748B] dark:text-[#94A3B8]">/ 4h</span>
                        </div>
                        <a 
                          href={`https://api.whatsapp.com/send?phone=51936793821&text=${encodeURIComponent(`Hola Hotel XNOX, deseo reservar la habitación "${room.name}" (Tarifa 4h: S/ ${room.hours4}). ¿Tienen disponibilidad?`)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-country-card-book"
                          style={{ textDecoration: 'none' }}
                        >
                          Reservar
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Columna de Fotografía con Slider Horizontal < 1/3 > */}
                <div className="country-room-media">
                  <div 
                    className="country-slider-track"
                    style={{ transform: `translateX(-${currentPhotoIdx * 100}%)` }}
                  >
                    {photoList.map((photo, pIdx) => (
                      <div key={pIdx} className="country-slide-item">
                        <img 
                          src={photo} 
                          alt={`${room.name} - Vista ${pIdx + 1}`} 
                          className="country-room-photo"
                          loading="lazy" 
                        />
                      </div>
                    ))}
                  </div>
                  <div className="country-media-overlay"></div>

                  {/* Paginador interactivo inferior < 1/3 > estilo Country Club */}
                  {photoList.length > 1 && (
                    <div className="country-slider-controls">
                      <button 
                        type="button" 
                        className="slider-arrow-btn"
                        onClick={(e) => handlePrevPhoto(room.id, photoList.length, e)}
                        aria-label="Foto anterior"
                      >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M15 18l-6-6 6-6" />
                        </svg>
                      </button>
                      <span className="slider-counter">
                        {currentPhotoIdx + 1}/{photoList.length}
                      </span>
                      <button 
                        type="button" 
                        className="slider-arrow-btn"
                        onClick={(e) => handleNextPhoto(room.id, photoList.length, e)}
                        aria-label="Foto siguiente"
                      >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M9 18l6-6-6-6" />
                        </svg>
                      </button>
                    </div>
                  )}
                </div>

              </article>
            );
          })}
        </div>

        {/* Banner CTA para la versión curada de Inicio */}
        {isCurated && (
          <div className="curated-suites-cta-box reveal-on-scroll">
            <div className="curated-cta-content">
              <span className="curated-cta-tag">Catálogo Completo & Tarifario</span>
              <h3 className="curated-cta-title">¿Buscas filtrar por categoría o comparar todas las tarifas?</h3>
              <p className="curated-cta-desc">
                Encuentra todas nuestras habitaciones ejecutivas, suites temáticas y compara precios transparentes por horas (4h/6h) o pernocte en nuestra sección especializada.
              </p>
            </div>
            <div className="curated-cta-action">
              <Link to="/suites" className="btn btn-primary curated-cta-btn">
                Ver Todas las Suites & Precios →
              </Link>
            </div>
          </div>
        )}

      </div>

      {/* Modal de Detalles Completos de la Suite */}
      {modalRoom && (
        <div className="modal-overlay" onClick={() => setModalRoom(null)}>
          <div className="modal-content-box room-detail-modal" onClick={(e) => e.stopPropagation()}>
            <button 
              type="button" 
              className="modal-close-btn" 
              onClick={() => setModalRoom(null)}
              aria-label="Cerrar ventana"
            >
              ✕
            </button>

            <div className="modal-room-header-img">
              <img src={modalRoom.thumb} alt={modalRoom.name} className="modal-room-img" />
            </div>

            <div className="modal-room-body">
              <h3 className="modal-room-title">{modalRoom.name}</h3>
              <p className="modal-room-quote">{modalRoom.quote}</p>

              <div className="modal-pricing-grid">
                <div className="modal-price-box">
                  <span className="modal-p-label">Estadía 4 Horas</span>
                  <strong className="modal-p-val">S/ {modalRoom.hours4}</strong>
                </div>
                <div className="modal-price-box">
                  <span className="modal-p-label">Estadía 6 Horas</span>
                  <strong className="modal-p-val">S/ {modalRoom.hours6}</strong>
                </div>
                <div className="modal-price-box highlight">
                  <span className="modal-p-label">Pernocte Completo</span>
                  <strong className="modal-p-val">S/ {modalRoom.pernocte}</strong>
                </div>
              </div>

              <div className="modal-features-section">
                <span className="modal-features-title">Comodidades & Amenidades Incluidas:</span>
                <ul className="modal-features-list">
                  {modalRoom.features?.map((f, i) => (
                    <li key={i}>✓ {f}</li>
                  ))}
                </ul>
              </div>

              <div className="modal-action-bar">
                <a 
                  href={`https://api.whatsapp.com/send?phone=51936793821&text=${encodeURIComponent(`Hola Hotel XNOX, deseo reservar la habitación "${modalRoom.name}" (Tarifa 4h: S/ ${modalRoom.hours4}, 6h: S/ ${modalRoom.hours6}, Pernocte: S/ ${modalRoom.pernocte}). ¿Tienen disponibilidad?`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary btn-block flex items-center justify-center gap-2"
                  style={{ textDecoration: 'none' }}
                  onClick={() => setModalRoom(null)}
                >
                  <WhatsAppIcon size={20} />
                  <span>Reservar esta Suite por WhatsApp →</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
      </section>
    </div>
  );
}

export default CountryClubRoomsShowcase;
