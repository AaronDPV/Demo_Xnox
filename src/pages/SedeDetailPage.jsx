import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { SEDES_DATA, MAIN_SEDES_LIST } from '../data/sedesData';
import { SUITES_DATA } from '../data/suitesData';

// Iconos vectoriales minimalistas para las etiquetas de amenidades (estilo XNOX boutique)
function AmenityIcon({ type }) {
  switch (type) {
    case 'wifi':
      return (
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 12.55a11 11 0 0 1 14.08 0"/>
          <path d="M1.42 9a16 16 0 0 1 21.16 0"/>
          <path d="M8.53 16.11a6 6 0 0 1 6.95 0"/>
          <line x1="12" y1="20" x2="12.01" y2="20"/>
        </svg>
      );
    case 'tv':
      return (
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="7" width="20" height="13" rx="2" />
          <polyline points="17 2 12 7 7 2" />
        </svg>
      );
    case 'bath':
    case 'jacuzzi':
      return (
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 12h16a1 1 0 0 1 1 1v3a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4v-3a1 1 0 0 1 1-1z" />
          <path d="M6 12V5a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1" />
        </svg>
      );
    case 'game':
    case 'ps5':
      return (
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="6" width="20" height="12" rx="3" />
          <path d="M6 12h4M8 10v4M15 11h.01M17 13h.01" />
        </svg>
      );
    case 'sparkle':
    case 'lights':
      return (
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m12 3 2.5 5.5L20 11l-4 4.5 1 6.5-5-3-5 3 1-6.5L4 11l5.5-2.5L12 3z" />
        </svg>
      );
    case 'sauna':
      return (
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg>
      );
    case 'bed':
    default:
      return (
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 19h20M2 17v-6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v6M4 9V5a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v4M12 9V5a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v4" />
        </svg>
      );
  }
}

function getRoomAmenityTags(room) {
  if (room.id === 'gamer') {
    return [
      { label: 'PS5 4K', icon: 'game' },
      { label: 'TV SMART 65"', icon: 'tv' },
      { label: 'WIFI FIBRA', icon: 'wifi' },
      { label: 'LUCES LED RGB', icon: 'sparkle' },
      { label: 'CAMA KING', icon: 'bed' }
    ];
  }
  if (room.id === 'jacuzzi') {
    return [
      { label: 'JACUZZI HIDRO', icon: 'bath' },
      { label: 'CROMOTERAPIA', icon: 'sparkle' },
      { label: 'CAMA KING', icon: 'bed' },
      { label: 'TV SMART 55"', icon: 'tv' },
      { label: 'WIFI FIBRA', icon: 'wifi' }
    ];
  }
  if (room.id === 'sauna') {
    return [
      { label: 'SAUNA SECO', icon: 'sauna' },
      { label: 'JACUZZI VIP', icon: 'bath' },
      { label: 'ZONA LOUNGE', icon: 'sparkle' },
      { label: 'DUCHA ESPAÑOLA', icon: 'bath' },
      { label: 'WIFI FIBRA', icon: 'wifi' }
    ];
  }
  if (room.id === 'galaxy') {
    return [
      { label: 'CIELO ESTRELLADO', icon: 'sparkle' },
      { label: 'JACUZZI NEÓN', icon: 'bath' },
      { label: 'LUCES SENSORIALES', icon: 'sparkle' },
      { label: 'TV SMART 55"', icon: 'tv' },
      { label: 'WIFI FIBRA', icon: 'wifi' }
    ];
  }
  return [
    { label: 'CAMA KING', icon: 'bed' },
    { label: 'TV SMART', icon: 'tv' },
    { label: 'BAÑO PRIVADO', icon: 'bath' },
    { label: 'CLIMATIZADO', icon: 'sparkle' },
    { label: 'WIFI FIBRA', icon: 'wifi' }
  ];
}

export function SedeDetailPage() {
  const { sedeId } = useParams();
  const navigate = useNavigate();
  const [selectedGalleryImg, setSelectedGalleryImg] = useState(null);

  // Buscar la sede correspondiente (por id directo o alias)
  const currentSedeId = (sedeId || 'miraflores').toLowerCase();
  const sede = SEDES_DATA[currentSedeId] || SEDES_DATA.miraflores;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.title = `Sede ${sede.name} | Hotel XNOX Experience Lima`;
  }, [sede]);

  // Obtener habitaciones exclusivas para esta sede
  const roomsInSede = (sede.roomIds || []).map(id => SUITES_DATA[id]).filter(Boolean);

  // Estado para el slider de fotos de cada suite
  const [activePhotos, setActivePhotos] = useState({});

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

  // Las otras sedes para navegación rápida
  const otherSedes = MAIN_SEDES_LIST.filter(s => s.id !== sede.id);

  // Galería de fotos exclusiva para la sede
  const galleryPhotos = [
    { src: sede.photo, title: `Vista y Fachada Sede ${sede.name}`, tag: 'Exterior & Cochera' },
    { src: '/assets/jacuzzi-suite.jpg', title: 'Suite Jacuzzi Climatizado', tag: 'Hidromasaje' },
    { src: '/assets/champagne-suite-bright.jpg', title: 'Decoración Romántica & Champagne', tag: 'Packs Parejas' },
    { src: '/assets/gamer-suite-bright.jpg', title: 'Suite Gamer PS5 en 4K', tag: 'Entretenimiento' },
    { src: '/assets/cocktail-lounge.jpg', title: 'Coctelería de Autor & Bar', tag: 'Room Service' },
    { src: '/assets/hero-terrace.jpg', title: 'Ambiente Nocturno de Lujo', tag: 'Atmósfera XNOX' },
  ];

  // Experiencias de la sede con elegantes iconos SVG sin emojis
  const experiences = [
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M8 22h8m-4-7v7M4 4l8 8 8-8H4z"/>
        </svg>
      ),
      title: 'Coctelería de Autor & Room Service 24H',
      desc: 'Carta exclusiva de tragos, cócteles de autor y piqueos gourmet preparados al momento y servidos con absoluta discreción directamente en tu suite.',
      img: '/assets/cocktail-lounge.jpg'
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
        </svg>
      ),
      title: 'Packs Románticos & Noches de Pareja',
      desc: 'Sorprende a tu pareja con ambientación sensorial: pétalos de rosas frescas, velas LED, espumante helado y copas listas para una noche inolvidable.',
      img: '/assets/champagne-suite-bright.jpg'
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="6" width="20" height="12" rx="4"/>
          <path d="M6 12h4m-2-2v4m9-2h.01m3 0h.01"/>
        </svg>
      ),
      title: 'Gaming PS5 en 4K & Sonido Envolvente',
      desc: 'Disfruta de consolas PlayStation 5 con mandos inalámbricos DualSense, pantallas gigantes 4K HDR y luces LED regulables para competir o relajarte.',
      img: '/assets/gamer-suite-bright.jpg'
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
          <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
        </svg>
      ),
      title: 'Cochera Privada & Acceso 100% Discreto',
      desc: 'Ingreso vehicular directo con portón eléctrico automático y estacionamiento interno techado. Tu privacidad y anonimato están protegidos las 24 horas.',
      img: '/assets/lobby.jpg'
    }
  ];

  return (
    <div className="page-sede-detail">
      {/* 1. Hero Panorámico: El Header se combina transparentemente con la foto */}
      <section className="sede-page-hero">
        <div className="sede-page-hero-bg">
          <img 
            src={sede.photo} 
            alt={`Fachada y Vista Exterior Hotel XNOX ${sede.name}`} 
            className="sede-page-hero-img" 
          />
          <div className="sede-page-hero-overlay"></div>
        </div>

        <div className="container sede-page-hero-container">
          {/* Breadcrumbs */}
          <nav className="sede-breadcrumbs" aria-label="Navegación">
            <Link to="/">Inicio</Link>
            <span className="bc-sep">/</span>
            <Link to="/sedes">Sedes en Lima</Link>
            <span className="bc-sep">/</span>
            <span className="bc-current">{sede.name}</span>
          </nav>

          <div className="hero-asturias-tag animate-fade-in-down" style={{ marginBottom: '14px' }}>
            <span>SEDE OFICIAL XNOX • {sede.tag.toUpperCase()}</span>
          </div>

          <h1 className="sede-page-hero-title">
            Hotel XNOX <span className="text-shimmer-red">{sede.name}</span>
          </h1>

          <p className="sede-page-hero-address">
            <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24" className="sede-pin-svg">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
            </svg>
            <span>{sede.address}</span>
          </p>

          {sede.viewTagline && (
            <p className="sede-page-hero-tagline">{sede.viewTagline}</p>
          )}

          {/* Botones de acción directa */}
          <div className="sede-hero-actions">
            <a 
              href="#ubicacion-mapa" 
              className="btn btn-secondary sede-hero-btn"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
              <span>Ver Ubicación & Mapa</span>
            </a>

            <a 
              href={`https://api.whatsapp.com/send?phone=51936793821&text=Hola%20Hotel%20XNOX,%20deseo%20consultar%20disponibilidad%20en%20Sede%20${encodeURIComponent(sede.name)}`}
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-whatsapp sede-hero-btn"
            >
              WhatsApp Concierge
            </a>

            <a 
              href={`https://api.whatsapp.com/send?phone=51936793821&text=${encodeURIComponent(`Hola Hotel XNOX, deseo reservar una habitación en la Sede ${sede.name}. ¿Tienen disponibilidad?`)}`}
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-primary sede-hero-btn"
              style={{ textDecoration: 'none' }}
            >
              Reservar en esta Sede ➔
            </a>
          </div>
        </div>
      </section>


      {/* 3. Catálogo de Habitaciones de esta Sede (Fondo Claro, Tarjetas de Lujo) */}
      <section className="sede-rooms-catalog-section" id="habitaciones">
        <div className="container">
          <div className="section-header sede-catalog-header reveal-on-scroll">
            <span className="section-tag">CATÁLOGO EXCLUSIVO</span>
            <h2>Habitaciones Disponibles en Sede <span className="text-shimmer-red">{sede.name}</span></h2>
            <p>
              Esta sede cuenta con una selección exclusiva de <strong>{roomsInSede.length} tipos de habitaciones</strong> adaptadas a cada ocasión:
            </p>
          </div>

          <div className="sede-rooms-showcase-grid-2col">
            {roomsInSede.map((room, idx) => {
              const photoList = room.gallery && room.gallery.length > 0 ? room.gallery : [room.thumb];
              const currentPhotoIdx = activePhotos[room.id] || 0;
              const currentPhoto = photoList[currentPhotoIdx];

              return (
                <article 
                  key={room.id} 
                  className={`sede-country-mini-card group reveal-on-scroll suite-slide-in-left reveal-stagger-${idx + 1}`}
                >
                  {/* 40% Contenido: Información breve, elegante y sin precios */}
                  <div className="mini-card-content">
                    <div className="mini-content-top">
                      {/* Metadatos (Capacidad & Área) */}
                      <div className="mini-card-specs">
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
                          <circle cx="9" cy="7" r="4"/>
                          <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
                          <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                        </svg>
                        <span>{room.capacity ? room.capacity.toUpperCase() : '2 HUÉSPEDES'}</span>
                        {room.area && (
                          <>
                            <span className="mini-sep">•</span>
                            <span>{room.area}</span>
                          </>
                        )}
                      </div>

                      {/* Título de la Suite */}
                      <h3 className="mini-card-title">{room.name}</h3>

                      {/* Breve descripción de la habitación (1-2 líneas) */}
                      <p className="mini-card-quote">
                        {room.quote || room.desc}
                      </p>

                      {/* Etiquetas de Amenidades clave */}
                      <div className="mini-card-amenities">
                        {getRoomAmenityTags(room).slice(0, 3).map((tag, tIdx) => (
                          <span key={tIdx} className="mini-amenity-tag">
                            <AmenityIcon type={tag.icon} />
                            <span>{tag.label}</span>
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Fila Inferior con acción de reserva directa */}
                    <div className="mini-card-footer">
                      <a
                        href={`https://api.whatsapp.com/send?phone=51936793821&text=${encodeURIComponent(`Hola Hotel XNOX, deseo reservar la habitación "${room.name}" en la Sede ${sede.name}. ¿Tienen disponibilidad?`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-mini-book"
                        style={{ textDecoration: 'none' }}
                      >
                        <span>Reservar Suite</span>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="5" y1="12" x2="19" y2="12"></line>
                          <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                      </a>
                    </div>
                  </div>

                  {/* 60% Imagen con Carrusel Horizontal (Sin Etiquetas Flotantes) */}
                  <div className="mini-card-media">
                    <img 
                      src={currentPhoto} 
                      alt={`${room.name} en Sede ${sede.name}`} 
                      className="mini-card-img" 
                      loading="lazy" 
                    />
                    <div className="mini-card-overlay"></div>

                    {/* Controles de Slider < 1/3 > */}
                    {photoList.length > 1 && (
                      <div className="mini-slider-controls">
                        <button 
                          type="button" 
                          className="mini-arrow-btn"
                          onClick={(e) => handlePrevPhoto(room.id, photoList.length, e)}
                          aria-label="Foto anterior"
                        >
                          ‹
                        </button>
                        <span className="mini-counter">
                          {currentPhotoIdx + 1}/{photoList.length}
                        </span>
                        <button 
                          type="button" 
                          className="mini-arrow-btn"
                          onClick={(e) => handleNextPhoto(room.id, photoList.length, e)}
                          aria-label="Foto siguiente"
                        >
                          ›
                        </button>
                      </div>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Ubicación con Mapa Interactivo de Google Maps (Distribución solicitada) */}
      <section className="sede-location-maps-section" id="ubicacion-mapa">
        <div className="container">
          <div className="section-header sede-location-header reveal-on-scroll">
            <span className="section-tag">DÓNDE ESTAMOS</span>
            <h2>UBICACIÓN <span className="text-shimmer-red">SEDE {sede.name.toUpperCase()}</span></h2>
            <p>Encuéntranos fácilmente con acceso vehicular directo, portón automático y máxima discreción.</p>
          </div>

          <div className="sede-location-split-card reveal-on-scroll reveal-scale">
            {/* Columna Izquierda: Información de Contacto y Llegada */}
            <div className="sede-location-info-panel reveal-on-scroll reveal-slide-left">
              <div className="location-info-item">
                <div className="location-info-icon-wrap">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                </div>
                <div className="location-info-text">
                  <span className="info-label">DIRECCIÓN</span>
                  <p className="info-value">{sede.address}</p>
                </div>
              </div>

              <div className="location-info-item">
                <div className="location-info-icon-wrap">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
                  </svg>
                </div>
                <div className="location-info-text">
                  <span className="info-label">TELÉFONO & WHATSAPP</span>
                  <p className="info-value">{sede.phone || '01 4348268 / +51 936 793 821'}</p>
                </div>
              </div>

              <div className="location-info-item">
                <div className="location-info-icon-wrap">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/>
                    <polyline points="12 6 12 12 16 14"/>
                  </svg>
                </div>
                <div className="location-info-text">
                  <span className="info-label">HORARIO DE ATENCIÓN</span>
                  <p className="info-value">{sede.schedule || '24 Horas / 365 Días al Año'}</p>
                </div>
              </div>

              <div className="location-info-item">
                <div className="location-info-icon-wrap">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="1" y="3" width="15" height="13"/>
                    <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/>
                    <circle cx="5.5" cy="18.5" r="2.5"/>
                    <circle cx="18.5" cy="18.5" r="2.5"/>
                  </svg>
                </div>
                <div className="location-info-text">
                  <span className="info-label">ACCESO VEHICULAR PRIVADO</span>
                  <p className="info-value">Cochera privada interna techada con portón automático</p>
                </div>
              </div>

              <div className="location-actions-group">
                <a 
                  href={sede.mapUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-secondary btn-block location-open-map-btn"
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                  <span>Abrir en Google Maps ↗</span>
                </a>

                <a 
                  href={`https://api.whatsapp.com/send?phone=51936793821&text=Hola%20Hotel%20XNOX,%20deseo%20consultar%20c%C3%B3mo%20llegar%20a%20Sede%20${encodeURIComponent(sede.name)}`}
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-whatsapp btn-block"
                >
                  Consultar Cómo Llegar por WhatsApp
                </a>
              </div>
            </div>

            {/* Columna Derecha: Iframe de Google Maps Oficial */}
            <div className="sede-location-map-frame-wrap reveal-on-scroll reveal-slide-right">
              {sede.googleMapsEmbedUrl ? (
                <iframe 
                  src={sede.googleMapsEmbedUrl} 
                  width="100%" 
                  height="450" 
                  style={{ border: 0, borderRadius: '16px', display: 'block' }} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="strict-origin-when-cross-origin"
                  title={`Ubicación Google Maps Hotel XNOX ${sede.name}`}
                ></iframe>
              ) : (
                <div className="map-placeholder-box">
                  <p>Mapa interactivo disponible en Google Maps</p>
                  <a href={sede.mapUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                    Abrir Google Maps
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 5. Experiencias Exclusivas de la Sede */}
      <section className="sede-experiences-section">
        <div className="container">
          <div className="section-header reveal-on-scroll">
            <span className="section-tag">SERVICIOS & MOMENTOS</span>
            <h2>Experiencias en Sede <span className="text-shimmer-red">{sede.name}</span></h2>
            <p>Todo lo que necesitas para que tu estancia sea perfecta de principio a fin.</p>
          </div>

          <div className="sede-experiences-grid">
            {experiences.map((exp, idx) => (
              <div key={idx} className={`sede-experience-card reveal-on-scroll reveal-scale reveal-stagger-${idx + 1}`}>
                <div className="exp-card-media">
                  <img src={exp.img} alt={exp.title} className="exp-card-img" loading="lazy" />
                  <span className="exp-card-icon-pill">{exp.icon}</span>
                </div>
                <div className="exp-card-body">
                  <h3 className="exp-card-title">{exp.title}</h3>
                  <p className="exp-card-desc">{exp.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Galería Fotográfica de la Sede */}
      <section className="sede-gallery-section">
        <div className="container">
          <div className="section-header reveal-on-scroll">
            <span className="section-tag">FOTOGRAFÍAS REALES</span>
            <h2>Galería Visual <span className="text-shimmer-red">Sede {sede.name}</span></h2>
            <p>Conoce los espacios, detalles y acabados de primera calidad de nuestras instalaciones.</p>
          </div>

          <div className="sede-gallery-mosaic-grid">
            {galleryPhotos.map((photo, pIdx) => (
              <div 
                key={pIdx} 
                className={`sede-gallery-item reveal-on-scroll reveal-scale reveal-stagger-${(pIdx % 3) + 1}`}
                onClick={() => setSelectedGalleryImg(photo)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => { if (e.key === 'Enter') setSelectedGalleryImg(photo); }}
              >
                <img src={photo.src} alt={photo.title} className="sede-gallery-img" loading="lazy" />
                <div className="sede-gallery-overlay">
                  <span className="sede-gallery-tag">{photo.tag}</span>
                  <h4 className="sede-gallery-title">{photo.title}</h4>
                  <span className="sede-gallery-zoom-hint flex items-center justify-center gap-1.5">
                    <span>Ver Foto</span>
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="11" cy="11" r="8"/>
                      <line x1="21" y1="21" x2="16.65" y2="16.65"/>
                      <line x1="11" y1="8" x2="11" y2="14"/>
                      <line x1="8" y1="11" x2="14" y2="11"/>
                    </svg>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox para Ver Foto Ampliada */}
      {selectedGalleryImg && (
        <div 
          className="modal-overlay active sede-gallery-lightbox" 
          onClick={() => setSelectedGalleryImg(null)}
          role="dialog"
          aria-modal="true"
        >
          <div className="lightbox-box" onClick={(e) => e.stopPropagation()}>
            <button 
              type="button" 
              className="modal-close-btn" 
              onClick={() => setSelectedGalleryImg(null)}
              aria-label="Cerrar imagen"
            >
              ✕
            </button>
            <img src={selectedGalleryImg.src} alt={selectedGalleryImg.title} className="lightbox-full-img" />
            <div className="lightbox-caption-bar">
              <div>
                <span className="lightbox-tag">{selectedGalleryImg.tag}</span>
                <h4 className="lightbox-title">{selectedGalleryImg.title}</h4>
              </div>
              <a 
                href={`https://api.whatsapp.com/send?phone=51936793821&text=${encodeURIComponent(`Hola Hotel XNOX, deseo reservar una habitación en la Sede ${sede.name}. ¿Tienen disponibilidad?`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-sm"
                style={{ textDecoration: 'none' }}
                onClick={() => setSelectedGalleryImg(null)}
              >
                Reservar en Sede {sede.name} ➔
              </a>
            </div>
          </div>
        </div>
      )}

      {/* 7. Selector Rápido de Nuestras Otras Sedes en Lima */}
      <section className="sede-other-locations-section">
        <div className="container">
          <div className="other-sedes-header reveal-on-scroll">
            <h3>Conoce también nuestras otras 3 sedes en Lima</h3>
            <p>Ubicaciones estratégicas en Lima con cocheras privadas y suites temáticas exclusivas</p>
          </div>

          <div className="other-sedes-grid">
            {otherSedes.map((other, oIdx) => (
              <Link key={other.id} to={`/sedes/${other.id}`} className={`other-sede-card reveal-on-scroll reveal-scale reveal-stagger-${oIdx + 1}`}>
                <div className="other-sede-thumb-wrap">
                  <img src={other.photo} alt={other.name} className="other-sede-thumb" />
                  <span className="other-sede-badge">{other.tag}</span>
                </div>
                <div className="other-sede-info">
                  <h4 className="other-sede-title">Sede {other.name}</h4>
                  <p className="other-sede-address">{other.address}</p>
                  <span className="other-sede-link-action">
                    Ver Sede y Habitaciones ➔
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="other-sedes-all-wrap reveal-on-scroll">
            <Link to="/sedes" className="btn btn-secondary">
              Ver mapa y catálogo completo de las 4 sedes ➔
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SedeDetailPage;
