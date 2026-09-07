import React, { useState } from 'react';
import { WhatsAppIcon } from './WhatsAppIcon';

export function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false);

  const quickActions = [
    { label: 'Suite Gamer con PS5', text: 'Hola Hotel XNOX, deseo consultar disponibilidad para la Suite Gamer con PS5' },
    { label: 'Promoción Suite Jacuzzi', text: 'Hola Hotel XNOX, deseo consultar la promoción de la Suite Jacuzzi' },
    { label: 'Master Sauna Finlandés', text: 'Hola Hotel XNOX, deseo consultar la Master Suite con Sauna Finlandés' },
    { label: 'Sedes y Cocheras Privadas', text: 'Hola Hotel XNOX, deseo información de la sede más cercana con cochera privada' },
  ];

  return (
    <aside className="concierge-widget-wrapper" aria-label="Contacto por WhatsApp">
      
      {/* Modal / Card Concierge Desplegable */}
      <div className={`concierge-card ${isOpen ? 'active' : ''}`}>
        <div className="concierge-card-header">
          <div className="concierge-avatar-box">
            <img src="/assets/xnox-blanco.png" alt="Hotel XNOX" className="concierge-avatar-img" />
            <span className="concierge-status-dot"></span>
          </div>
          <div className="concierge-header-info">
            <h4>Recepción Hotel XNOX</h4>
            <span className="concierge-status-text">En línea • Respuesta inmediata</span>
          </div>
          <button 
            type="button" 
            className="concierge-close-btn" 
            onClick={() => setIsOpen(false)}
            aria-label="Cerrar ventana de WhatsApp"
          >
            ✕
          </button>
        </div>

        <div className="concierge-card-body">
          <div className="concierge-chat-bubble">
            <p>
              Bienvenido a <strong>Hotel XNOX Experience</strong>. ¿Deseas agendar una habitación o consultar nuestras tarifas de estadía por horas o pernocte?
            </p>
            <span className="chat-time">24/7 disponible</span>
          </div>

          <div className="concierge-quick-pills">
            <span className="quick-pills-label">Consultas frecuentes:</span>
            {quickActions.map((action, idx) => (
              <a 
                key={idx}
                href={`https://api.whatsapp.com/send?phone=51936793821&text=${encodeURIComponent(action.text)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="concierge-pill-link"
              >
                {action.label}
              </a>
            ))}
          </div>

          <a 
            href="https://api.whatsapp.com/send?phone=51936793821&text=Hola%20Hotel%20XNOX,%20deseo%20consultar%20disponibilidad%20para%20hoy" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn btn-whatsapp concierge-main-cta"
          >
            <WhatsAppIcon size={20} />
            <span>Abrir Chat de WhatsApp</span>
          </a>
        </div>
      </div>

      {/* Botón Flotante Circular Icon-Only (Sin texto) */}
      <button 
        type="button" 
        className={`concierge-floating-toggle ${isOpen ? 'open' : ''}`}
        onClick={() => setIsOpen(prev => !prev)}
        aria-label="Abrir WhatsApp"
        title="WhatsApp Hotel XNOX"
      >
        <span className="concierge-pulse-aura"></span>
        <WhatsAppIcon size={32} filled={false} />
      </button>

    </aside>
  );
}

export default FloatingWhatsApp;
