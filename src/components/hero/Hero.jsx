import React from 'react';

export function Hero() {
  return (
    <section className="hero-section hero-section-asturias" id="hero">
      <div className="hero-background">
        <img 
          src="/assets/hero-terrace.jpg" 
          alt="Hotel XNOX Experience - Terraza Rooftop Lima" 
          className="hero-background-img" 
        />
        <div className="hero-overlay hero-overlay-asturias"></div>
      </div>

      <div className="container hero-content">
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

        {/* Subtítulo elegante y limpio */}
        <p className="hero-asturias-desc animate-fade-in-up delay-1">
          Suites temáticas de autor en las mejores zonas de Lima con Jacuzzi de mármol, consolas PS5 en 4K y saunas privados.
        </p>

        {/* Botón único que baja suavemente a la sección de habitaciones (segunda imagen) */}
        <div className="hero-asturias-actions animate-fade-in-up delay-2">
          <button 
            type="button" 
            className="btn-hero-asturias btn-hero-red btn-hero-single" 
            id="hero-cta-scroll"
            onClick={() => document.getElementById('habitaciones')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <span>CONOCER HABITACIONES & SUITES</span>
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" className="hero-scroll-icon">
              <path d="M7 13l5 5 5-5M7 6l5 5 5-5"/>
            </svg>
          </button>
        </div>

        {/* Puntos indicadores inferiores idénticos a la referencia */}
        <div className="hero-asturias-dots animate-fade-in-up delay-3">
          <span className="h-dot"></span>
          <span className="h-dot"></span>
          <span className="h-dot active"></span>
          <span className="h-dot"></span>
          <span className="h-dot"></span>
        </div>

      </div>
    </section>
  );
}

export default Hero;
