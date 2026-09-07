import React, { useState, useEffect } from 'react';

const HERO_SLIDES = [
  {
    src: '/assets/fondo.jpeg',
    alt: 'Hotel XNOX Experience - Habitación VIP Sensorial',
  },
  {
    src: '/assets/hero-terrace.jpg',
    alt: 'Hotel XNOX Experience - Terraza Rooftop Lima',
  },
  {
    src: '/assets/champagne-suite-bright.jpg',
    alt: 'Hotel XNOX Experience - Romance & Jacuzzi VIP',
  },
  {
    src: '/assets/fondo2.jpeg',
    alt: 'Hotel XNOX Experience - Habitación Presidencial Skyline',
  },
  {
    src: '/assets/miraflores-deluxe.jpg',
    alt: 'Hotel XNOX Experience - Lujo y Confort Miraflores',
  },
  {
    src: '/assets/imagen3.jpeg',
    alt: 'Hotel XNOX Experience - Jacuzzi & Cromoterapia',
  },
  {
    src: '/assets/cocktail-lounge.jpg',
    alt: 'Hotel XNOX Experience - Bar Privado & Lounge',
  },
  {
    src: '/assets/gamer-suite-bright.jpg',
    alt: 'Hotel XNOX Experience - Suite Gamer PS5',
  }
];

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [prevSlide, setPrevSlide] = useState(null);

  // Precargar todas las imágenes para que la transición sea 100% fluida sin ningún salto ni parpadeo
  useEffect(() => {
    HERO_SLIDES.forEach((slide) => {
      const img = new Image();
      img.src = slide.src;
    });
  }, []);

  // Función para cambiar de diapositiva controlando el cross-fade entre la anterior y la nueva
  const handleSlideChange = (nextIndex) => {
    if (nextIndex === currentSlide) return;
    setPrevSlide(currentSlide);
    setCurrentSlide(nextIndex);
  };

  // Rotación automática suave cada 6.5 segundos con transición de 2.2 segundos
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => {
        setPrevSlide(prev);
        return (prev + 1) % HERO_SLIDES.length;
      });
    }, 6500);

    return () => clearInterval(timer);
  }, []);

  const getSlideClass = (idx) => {
    if (idx === currentSlide) return 'hero-slide-item active';
    if (idx === prevSlide) return 'hero-slide-item leaving';
    return 'hero-slide-item hidden-slide';
  };

  return (
    <section 
      className="hero-section hero-section-asturias w-full h-screen h-[100dvh] min-h-screen min-h-[100svh] min-h-[100dvh] flex items-center justify-center relative overflow-hidden bg-[#07080B]" 
      id="hero"
      aria-label="Hotel XNOX Presentación Principal"
    >
      {/* Background Slideshow con transición Cross-fade & Ken-Burns ultra-suave */}
      <div className="hero-background pointer-events-none" aria-hidden="true">
        {HERO_SLIDES.map((slide, idx) => (
          <img 
            key={slide.src}
            src={slide.src} 
            alt={slide.alt} 
            className={getSlideClass(idx)}
            loading={idx === 0 ? 'eager' : 'lazy'}
          />
        ))}
        <div className="hero-overlay hero-overlay-asturias"></div>
      </div>

      <div className="container hero-content relative z-[3] text-center max-w-[1040px] mx-auto px-4">
        {/* Etiqueta superior con líneas rojas — XNOX EXPERIENCE — */}
        <div className="hero-asturias-tag animate-fade-in-down">
          <span>HOTEL XNOX EXPERIENCE</span>
        </div>

        {/* Titular Dos Tonos: Rojo Carmesí de Lujo + Blanco Nítido */}
        <h1 className="hero-asturias-title animate-fade-in-up">
          <span className="hero-title-red">Hotel XNOX</span>
          <span className="hero-title-white">Sentir y Vivir el Lujo</span>
        </h1>

        {/* Línea divisoria fina roja carmesí */}
        <div className="hero-asturias-line animate-fade-in-up"></div>

        {/* Botón único que baja suavemente a la sección de habitaciones */}
        <div className="hero-asturias-actions animate-fade-in-up delay-2">
          <button 
            type="button" 
            className="btn-hero-asturias btn-hero-red btn-hero-single" 
            id="hero-cta-scroll"
            onClick={() => document.getElementById('habitaciones')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <span>CONOCER NUESTRAS HABITACIONES</span>
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" className="hero-scroll-icon">
              <path d="M7 13l5 5 5-5M7 6l5 5 5-5"/>
            </svg>
          </button>
        </div>

        {/* Puntos e indicador interactivo de diapositivas (rayita activa + puntitos) */}
        <div className="hero-asturias-dots animate-fade-in-up delay-3" role="tablist" aria-label="Selector de fotos del hotel">
          {HERO_SLIDES.map((_, idx) => (
            <button
              key={idx}
              type="button"
              className={`h-dot ${currentSlide === idx ? 'active' : ''}`}
              onClick={() => handleSlideChange(idx)}
              aria-label={`Ver foto ${idx + 1} de ${HERO_SLIDES.length}`}
              aria-selected={currentSlide === idx}
              role="tab"
            />
          ))}
        </div>

      </div>
    </section>
  );
}

export default Hero;

