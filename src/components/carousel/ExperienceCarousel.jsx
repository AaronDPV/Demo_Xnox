import React, { useState, useEffect, useRef } from 'react';

const CAROUSEL_EXPERIENCES = [
  {
    id: 'sauna',
    badge: 'BIENESTAR & SPA PRIVADO',
    title: 'Sauna Finlandés & Spa',
    tagline: 'Cabina de calor seco en fina madera nórdica, ducha española y desconexión absoluta para renovarte.',
    img: '/assets/sauna-suite.jpg',
    chips: ['Sauna Finlandés', 'Ducha Cascada', 'Relax & Detox']
  },
  {
    id: 'desayuno',
    badge: 'GASTRONOMÍA & GOURMET',
    title: 'Desayuno & Barra Libre',
    tagline: 'Desayuno buffet gourmet con panadería artesanal recién horneada, frutas selectas, café de especialidad y barra libre.',
    img: '/assets/breakfast-buffet.jpg',
    chips: ['Desayuno Buffet', 'Barra Libre', 'Café de Autor']
  },
  {
    id: 'gamer',
    badge: 'ENTRETENIMIENTO TOP',
    title: 'Experiencia Gamer PS5',
    tagline: 'Consola PlayStation 5 de última generación con pantalla 65" 4K HDR, mandos DualSense y luces RGB inmersivas.',
    img: '/assets/imagen1.jpeg',
    chips: ['PlayStation 5', 'Pantalla 65" 4K', 'Mandos DualSense']
  },
  {
    id: 'jacuzzi',
    badge: 'ROMANCE & CONFORT',
    title: 'Jacuzzi & Cromoterapia',
    tagline: 'Tina circular doble de hidromasaje en mármol italiano con iluminación sumergida, sales minerales y espuma.',
    img: '/assets/imagen3.jpeg',
    chips: ['Tina de Mármol', 'Cromoterapia LED', 'Espuma & Relax']
  }
];

export function ExperienceCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const total = CAROUSEL_EXPERIENCES.length;

  // Autoplay con temporizador suave
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % total);
    }, 4500);
    return () => clearInterval(interval);
  }, [isPaused, total]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % total);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  };

  const handleTouchStart = (e) => {
    if (!e.touches || e.touches.length === 0) return;
    touchStartX.current = e.touches[0].clientX;
    touchEndX.current = e.touches[0].clientX;
    setIsPaused(true);
  };

  const handleTouchMove = (e) => {
    if (!e.touches || e.touches.length === 0) return;
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 35) {
      if (diff > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
    setTimeout(() => setIsPaused(false), 3500);
  };

  const handleSlideClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section 
      className="experience-carousel-section" 
      id="experiencias-3d"
      aria-label="Carrusel 3D de experiencias exclusivas"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="container">
        
        {/* Cabecera de Experiencias XNOX */}
        <div className="section-header reveal-on-scroll">
          <span className="section-tag">Vivencias Exclusivas</span>
          <h2>Experiencias <span className="text-shimmer-red">Hotel XNOX</span></h2>
          <p>Conoce los servicios y comodidades que transforman tu estancia: sauna privado, desayuno con barra libre, consolas PS5 en 4K y relax total.</p>
        </div>

        {/* 3D Carousel Stage con Tarjetas de Imagen Entera */}
        <div 
          className="carousel-3d-stage reveal-on-scroll reveal-scale"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className="carousel-3d-track">
            {CAROUSEL_EXPERIENCES.map((exp, idx) => {
              // Distancia relativa al slide actual (-2, -1, 0, 1, 2)
              let diff = idx - currentIndex;
              if (diff < -2) diff += total;
              if (diff > 2) diff -= total;

              let positionClass = 'slide-hidden';
              if (diff === 0) positionClass = 'slide-active';
              else if (diff === -1) positionClass = 'slide-prev';
              else if (diff === 1) positionClass = 'slide-next';
              else if (diff === -2) positionClass = 'slide-far-prev';
              else if (diff === 2) positionClass = 'slide-far-next';

              return (
                <div 
                  key={exp.id} 
                  className={`carousel-3d-card ${positionClass}`}
                  onClick={() => handleSlideClick(idx)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => { if (e.key === 'Enter') handleSlideClick(idx); }}
                >
                  {/* 1. Imagen entera que ocupa todo el fondo de la tarjeta */}
                  <img src={exp.img} alt={exp.title} className="card-bg-img" loading="lazy" />
                  
                  {/* 2. Degradado cinematográfico oscuro para contraste óptimo */}
                  <div className="card-gradient-overlay"></div>

                  {/* 3. Badge superior izquierdo estilo XNOX */}
                  <span className="carousel-badge">{exp.badge}</span>

                  {/* 4. Contenido inferior superpuesto sobre la imagen */}
                  <div className="card-content-pane">
                    <h3 className="card-title">{exp.title}</h3>
                    <p className="card-tagline">{exp.tagline}</p>

                    <div className="card-chips-row">
                      {exp.chips.map((chip, cIdx) => (
                        <span key={cIdx} className="card-chip-tag">{chip}</span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Flechas de Navegación laterales */}
          <button 
            type="button" 
            className="carousel-arrow prev-arrow" 
            onClick={handlePrev}
            aria-label="Experiencia anterior"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button 
            type="button" 
            className="carousel-arrow next-arrow" 
            onClick={handleNext}
            aria-label="Experiencia siguiente"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>

        {/* Indicadores inferiores de posición */}
        <div className="carousel-controls-bottom">
          <div className="carousel-dots-list">
            {CAROUSEL_EXPERIENCES.map((exp, idx) => (
              <button 
                key={exp.id}
                type="button"
                className={`carousel-dot-btn ${idx === currentIndex ? 'active' : ''}`}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Ver experiencia ${exp.title}`}
              >
                <span className="dot-fill"></span>
              </button>
            ))}
          </div>

          <div className="carousel-status-pill">
            <span className="status-counter">{currentIndex + 1} / {total}</span>
            <span className="status-hint">• Desliza o haz clic para rotar en 3D</span>
          </div>
        </div>

      </div>
    </section>
  );
}

export default ExperienceCarousel;
