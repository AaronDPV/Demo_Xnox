import React, { useState, useEffect, useRef } from 'react';

const REVIEWS_DATA = [
  {
    id: 'rev-liloht',
    name: 'Liloht Pingo Renteria',
    initial: 'L',
    avatarBg: '#8E24AA',
    badge: '1 opinión',
    isLocalGuide: false,
    rating: 5,
    date: 'Hace 7 meses',
    text: 'Ambiente agradable y tranquilo, ideal para descansar con tu pareja. Sus colaboradores muy amables y honestos: se me iba quedando una bolsa en la habitación y me llamaron de inmediato para recogerla. Las habitaciones son súper cómodas, limpias y la temática es llamativa y fuera de lo común, muy ingeniosos. 100% recomendado.',
    tag: 'Honestidad & Servicio'
  },
  {
    id: 'rev-jose',
    name: 'José Antonio Lazo Barboza',
    initial: 'J',
    avatarBg: '#2E7D32',
    badge: '2 opiniones',
    isLocalGuide: false,
    rating: 5,
    date: 'Hace 1 mes',
    text: 'La mejor experiencia para salir de la rutina en pareja. Las habitaciones impecables, la atención de primera y les recomiendo ir los martes para aprovechar su descuento del 10%. Definitivamente volveremos pronto.',
    tag: 'Promo Martes 10% OFF'
  },
  {
    id: 'rev-eduardo',
    name: 'Eduardo Jesús Mujica Churrango',
    initial: 'E',
    avatarBg: '#1565C0',
    badge: 'Local Guide · 31 opiniones',
    isLocalGuide: true,
    rating: 5,
    date: 'Hace 1 año',
    text: 'Tiene estacionamiento privado directo a la habitación, lo que brinda una comodidad y discreción total. Las instalaciones están muy bien cuidadas, la insonorización es excelente y la atención del personal es rápida y reservada.',
    tag: 'Cochera Privada & Discreción'
  },
  {
    id: 'rev-esteban',
    name: 'Esteban Valladolid (Stiven)',
    initial: 'E',
    avatarBg: '#D81E34',
    badge: '1 opinión · 1 foto',
    isLocalGuide: false,
    rating: 5,
    date: 'Hace 11 meses',
    text: 'Excelente servicio y comodidad, muy recomendado, 100/10. La habitación temática impecable, el jacuzzi con hidromasaje perfecto y la privacidad total desde que ingresas. Superó por completo nuestras expectativas.',
    tag: 'Calificación 100/10'
  },
  {
    id: 'rev-jhonny',
    name: 'Jhonny Quintero',
    initial: 'J',
    avatarBg: '#EF6C00',
    badge: '7 opiniones',
    isLocalGuide: false,
    rating: 5,
    date: 'Hace 1 año',
    text: 'Excelente ambiente, los recomiendo totalmente. La iluminación tenue, el sonido y la limpieza de la suite están a otro nivel. Es el lugar ideal en Lima para celebrar una fecha especial en pareja.',
    tag: 'Ambiente & Celebración'
  },
  {
    id: 'rev-jesus',
    name: 'Jesús Lavado',
    initial: 'J',
    avatarBg: '#00838F',
    badge: 'Local Guide · 15 opiniones',
    isLocalGuide: true,
    rating: 5,
    date: 'Hace 1 mes',
    text: 'Una experiencia muy divertida y fuera de lo habitual. Fuimos a la suite con temática gamer y jacuzzi, todo moderno, súper limpio y funcionando al 100%. Gran atención y amabilidad del personal.',
    tag: 'Suite Gamer PS5'
  },
  {
    id: 'rev-cristhofer',
    name: 'Cristhofer Flores Pérez',
    initial: 'C',
    avatarBg: '#5D4037',
    badge: '17 opiniones',
    isLocalGuide: false,
    rating: 5,
    date: 'Hace 8 meses',
    text: 'Instalaciones impecables y de primera calidad. Muy buen servicio, las habitaciones temáticas están perfectamente equipadas y el ingreso con cochera directa garantiza total privacidad. Súper recomendado.',
    tag: 'Privacidad & Calidad'
  },
  {
    id: 'rev-marisabel',
    name: 'Marisabel Qh',
    initial: 'M',
    avatarBg: '#C2185B',
    badge: '2 opiniones',
    isLocalGuide: false,
    rating: 5,
    date: 'Hace 4 semanas',
    text: 'Un lugar hermoso y súper tranquilo para desconectarse de la rutina. La tina de hidromasaje limpia y relajante, la cama comodísima y el trato del personal muy respetuoso y puntual. Volveremos sin dudarlo.',
    tag: 'Jacuzzi & Relax Total'
  }
];

export function TestimonialsSection() {
  const [isPaused, setIsPaused] = useState(false);
  const scrollRef = useRef(null);
  const isMouseDown = useRef(false);
  const startX = useRef(0);
  const startScrollLeft = useRef(0);

  // Duplicamos la lista para crear un bucle continuo
  const marqueeItems = [...REVIEWS_DATA, ...REVIEWS_DATA];

  // En móvil: si no se interactúa, avanza suavemente al siguiente testimonio
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const autoScrollInterval = setInterval(() => {
      // Solo auto-desplazar en móvil/touch si no está en pausa
      if (window.innerWidth > 768 || isPaused) return;

      const card = el.querySelector('.testimonial-card-item');
      if (!card) return;
      const cardWidth = card.offsetWidth + 16;
      const maxScroll = el.scrollWidth - el.clientWidth;

      if (el.scrollLeft >= maxScroll - 20) {
        el.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        el.scrollBy({ left: cardWidth, behavior: 'smooth' });
      }
    }, 4500);

    return () => clearInterval(autoScrollInterval);
  }, [isPaused]);

  const handleTouchStart = () => {
    setIsPaused(true);
  };

  const handleTouchEnd = () => {
    setTimeout(() => setIsPaused(false), 3500);
  };

  // Soporte de arrastre con mouse para desktop
  const handleMouseDown = (e) => {
    if (!scrollRef.current) return;
    isMouseDown.current = true;
    startX.current = e.pageX - scrollRef.current.offsetLeft;
    startScrollLeft.current = scrollRef.current.scrollLeft;
    setIsPaused(true);
  };

  const handleMouseUp = () => {
    isMouseDown.current = false;
    setTimeout(() => setIsPaused(false), 2500);
  };

  const handleMouseMove = (e) => {
    if (!isMouseDown.current || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5;
    scrollRef.current.scrollLeft = startScrollLeft.current - walk;
  };

  return (
    <section className="testimonials-simple-section" id="testimonios">
      <div className="container">
        {/* Cabecera Limpia & Auténtica */}
        <div className="testimonials-simple-header text-center">
          <div className="google-badge-pill">
            <svg width="18" height="18" viewBox="0 0 24 24" className="google-svg-icon">
              <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z"/>
              <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"/>
              <path fill="#FBBC05" d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.99 0 12s.45 3.82 1.25 5.42l4.03-3.15z"/>
              <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"/>
            </svg>
            <span>OPINIONES REALES EN GOOGLE MAPS</span>
          </div>

          <h2 className="testimonials-simple-title">
            Lo que Dicen <span className="text-red">Nuestros Huéspedes</span>
          </h2>
          
          <p className="testimonials-simple-subtitle">
            Comentarios y experiencias compartidas por parejas que visitaron nuestras suites.
          </p>
        </div>
      </div>

      {/* Ticker / Carrusel Táctil Continuo */}
      <div 
        ref={scrollRef}
        className="testimonials-marquee-wrapper"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => { if (!isMouseDown.current) setIsPaused(false); }}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        <div className={`testimonials-marquee-track ${isPaused ? 'is-paused' : ''}`}>
          {marqueeItems.map((item, idx) => (
            <div key={`${item.id}-${idx}`} className="testimonial-card-item">
              {/* Encabezado del Autor */}
              <div className="card-author-row">
                <div 
                  className="card-author-avatar" 
                  style={{ backgroundColor: item.avatarBg }}
                >
                  {item.initial}
                </div>

                <div className="card-author-info">
                  <h4 className="card-author-name">{item.name}</h4>
                  <div className="card-author-meta">
                    {item.isLocalGuide && (
                      <span className="local-guide-tag">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="#F59E0B">
                          <path d="M12 2l2.4 7.2h7.6l-6.1 4.5 2.3 7.3-6.2-4.6-6.2 4.6 2.3-7.3-6.1-4.5h7.6z"/>
                        </svg>
                        Local Guide
                      </span>
                    )}
                    <span className="author-badge-text">{item.badge}</span>
                  </div>
                </div>

                {/* Logo Google sutil */}
                <div className="card-google-logo" title="Reseña en Google Maps">
                  <svg width="18" height="18" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z"/>
                    <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"/>
                    <path fill="#FBBC05" d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.99 0 12s.45 3.82 1.25 5.42l4.03-3.15z"/>
                    <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"/>
                  </svg>
                </div>
              </div>

              {/* Estrellas y Fecha */}
              <div className="card-rating-row">
                <div className="card-stars">★★★★★</div>
                <span className="card-date">{item.date}</span>
              </div>

              {/* Texto de la Reseña */}
              <p className="card-review-text">
                "{item.text}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
