import React, { useState, useEffect } from 'react';

export function WelcomeIntro() {
  const [isMounted, setIsMounted] = useState(true);
  const [isOpening, setIsOpening] = useState(false);

  useEffect(() => {
    // Bloqueamos el scroll mientras la animación de bienvenida está activa
    document.body.style.overflow = 'hidden';

    // 1. A los 1.3s (al completarse la barra de carga) se abren las cortinas y las letras/logo salen a un lado
    const openTimer = setTimeout(() => {
      setIsOpening(true);
    }, 1300);

    // 2. A los 2.0s se desmonta para dejar la web completamente disponible
    const unmountTimer = setTimeout(() => {
      setIsMounted(false);
      document.body.style.overflow = '';
    }, 2000);

    return () => {
      clearTimeout(openTimer);
      clearTimeout(unmountTimer);
      document.body.style.overflow = '';
    };
  }, []);

  const handleSkip = () => {
    setIsOpening(true);
    setTimeout(() => {
      setIsMounted(false);
      document.body.style.overflow = '';
    }, 450);
  };

  if (!isMounted) return null;

  return (
    <div 
      className={`welcome-intro-screen ${isOpening ? 'is-opening' : ''}`}
      role="dialog"
      aria-label="Hotel Experience - XNOX"
    >
      {/* Cortinas laterales que se abren hacia ambos lados */}
      <div className="welcome-curtain welcome-curtain-left"></div>
      <div className="welcome-curtain welcome-curtain-right"></div>

      {/* Contenedor central con logo, detalle y barra de carga.
          Al abrirse las cortinas, sale velozmente hacia un lado para no quedarse en medio */}
      <div className="welcome-center-brand">
        <div className="welcome-logo-container">
          <img 
            src="/assets/xnox-transparent.png" 
            alt="XNOX Logo" 
            className="welcome-brand-logo-img" 
          />
        </div>

        <div className="welcome-hotel-detail-box">
          <span className="welcome-hotel-detail-text">HOTEL EXPERIENCE</span>
          <div className="welcome-detail-accent-line"></div>
        </div>

        {/* Efecto de carga con barra de progreso */}
        <div className="welcome-progress-track">
          <div className="welcome-progress-fill"></div>
        </div>
      </div>

      {/* Botón sutil de salto inmediato */}
      <button 
        type="button" 
        className="welcome-skip-action"
        onClick={handleSkip}
        aria-label="Saltar bienvenida"
      >
        Saltar ✕
      </button>
    </div>
  );
}

export default WelcomeIntro;


