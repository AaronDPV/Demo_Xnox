import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { WhatsAppIcon } from '../components/common/WhatsAppIcon';

const PROMOTIONS_DATA = [
  {
    id: 'martes-parejas',
    category: 'dias',
    tag: 'TODOS LOS MARTES',
    badge: '10% OFF DIRECTO',
    title: 'Martes de Parejas (10% OFF)',
    image: '/assets/miraflores-deluxe.jpg',
    description: '10% de descuento directo en cualquier habitación por horas o noche.',
    highlights: ['Todas las 4 sedes en Lima', 'Válido horas o pernocte'],
    whatsappMsg: 'Hola Hotel XNOX, deseo aprovechar la promoción del Martes de Parejas (10% OFF) para reservar una habitación.',
    routeParam: 'modality=hours4'
  },
  {
    id: 'pack-romantico',
    category: 'packs',
    tag: 'PACK ROMÁNTICO VIP',
    badge: 'CHAMPAGNE & PÉTALOS',
    title: 'Pack Romance & Champagne',
    image: '/assets/champagne-suite-bright.jpg',
    description: 'Espumante helado en hielera, copas y pétalos de rosas.',
    highlights: ['Habitaciones Jacuzzi & Sauna', 'Ambientación previa lista'],
    whatsappMsg: 'Hola Hotel XNOX, deseo consultar y reservar el Pack Noche Romántica & Champagne para una ocasión especial.',
    routeParam: 'room=jacuzzi'
  },
  {
    id: 'sunset-lounge-vip',
    category: 'exclusivas',
    tag: 'PROMOCIÓN EXCLUSIVA',
    badge: 'VIP & COCTELERÍA',
    title: 'Sunset Lounge & Cócteles VIP',
    image: '/assets/cocktail-lounge.jpg',
    description: '2 cócteles de autor de cortesía en nuestra barra lounge.',
    highlights: ['Coctelería de autor 24h', 'Válido en las 4 sedes'],
    whatsappMsg: 'Hola Hotel XNOX, deseo reservar la Promoción Exclusiva de Sunset Lounge & Coctelería VIP para mi estadía.',
    routeParam: 'room=jacuzzi'
  },
  {
    id: 'cumpleanos-xnox',
    category: 'dias',
    tag: 'SEMANA CUMPLEAÑOS',
    badge: '2 CÓCTELES + 1H EXTRA',
    title: 'Semana de Cumpleaños',
    image: '/assets/hero-terrace.jpg',
    description: '2 cócteles de autor + 1 hora extra gratis con tu DNI.',
    highlights: ['Presentar DNI en recepción', 'Barman y coctelería 24h'],
    whatsappMsg: 'Hola Hotel XNOX, es mi semana de cumpleaños y deseo reservar mi habitación para disfrutar de mis cócteles de cortesía y la hora extra.',
    routeParam: ''
  },
  {
    id: 'gamer-pro-night',
    category: 'packs',
    tag: 'ENTRETENIMIENTO 4K',
    badge: '6H PS5 + 4 CERVEZAS',
    title: 'Pack Gamer Pro: PS5 4K',
    image: '/assets/gamer-suite-bright.jpg',
    description: 'PlayStation 5 en pantalla gigante 65" 4K y cervezas heladas.',
    highlights: ['Pantalla gigante 65" 4K', 'Balde 4 cervezas heladas'],
    whatsappMsg: 'Hola Hotel XNOX, deseo reservar el Pack Gamer Pro (6 Horas PS5 + Bebidas) en su habitación gamer.',
    routeParam: 'room=gamer'
  },
  {
    id: 'pernocte-continental',
    category: 'exclusivas',
    tag: 'NOCHE COMPLETA VIP',
    badge: 'DESAYUNO CONTINENTAL',
    title: 'Pernocte VIP con Desayuno',
    image: '/assets/breakfast-buffet.jpg',
    description: 'Ingreso desde 8:00 PM con desayuno continental a la habitación.',
    highlights: ['Check-out hasta 12:00 PM', 'Cochera privada techada'],
    whatsappMsg: 'Hola Hotel XNOX, deseo reservar la modalidad de Pernocte VIP con desayuno continental incluido.',
    routeParam: 'modality=pernocte'
  }
];

const PROMO_CATEGORIES = [
  { id: 'todas', label: 'Todas las Promociones' },
  { id: 'packs', label: 'Packs Parejas & Romance' },
  { id: 'dias', label: 'Días Especiales' },
  { id: 'exclusivas', label: 'Promociones Exclusivas' }
];

export function PromocionesPage() {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('todas');
  const [promoModal, setPromoModal] = useState(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.title = 'Promociones & Ofertas Especiales | Hotel XNOX Lima';
  }, []);

  const handleReservePromo = (promo) => {
    // 1. Envía de una a WhatsApp con el mensaje pre-cargado
    const waUrl = `https://api.whatsapp.com/send?phone=51936793821&text=${encodeURIComponent(promo.whatsappMsg)}`;
    window.open(waUrl, '_blank');
    // 2. Abre además el cuadrito de confirmación y detalles en pantalla
    setPromoModal(promo);
  };

  const filteredPromos = selectedCategory === 'todas' 
    ? PROMOTIONS_DATA 
    : PROMOTIONS_DATA.filter(p => p.category === selectedCategory);

  return (
    <div className="page-promociones">
      {/* 1. Mini Hero Banner idéntico a Suites y Precios */}
      <section className="suites-hero-banner" aria-label="Cabecera Promociones Hotel XNOX">
        <div className="suites-hero-bg">
          <img 
            src="/assets/hero-terrace.jpg" 
            alt="Promociones y Ofertas Exclusivas Hotel XNOX" 
            className="suites-hero-img" 
          />
          <div className="suites-hero-overlay"></div>
        </div>

        <div className="container suites-hero-content">
          <div className="hero-asturias-tag animate-fade-in-down" style={{ marginBottom: '14px' }}>
            <span>BENEFICIOS EXCLUSIVOS EN LIMA</span>
          </div>
          
          <h1 className="suites-hero-title animate-fade-in-up">
            Promociones & <span className="text-shimmer-red">Beneficios XNOX</span>
          </h1>

          <div className="hero-asturias-line animate-fade-in-up" style={{ margin: '14px auto' }}></div>

          <p className="suites-hero-desc animate-fade-in-up delay-1">
            Descuentos especiales por días de semana, packs románticos con champagne y cortesías exclusivas en todas nuestras sedes.
          </p>
        </div>
      </section>

      {/* 2. Sección Principal de Promociones */}
      <section className="promociones-main-section" aria-label="Catálogo de Promociones">
        <div className="container">
          
          {/* Tabs de Filtro de Promociones */}
          <div className="promo-filter-tabs-wrapper reveal-on-scroll">
            <div className="promo-tabs-baseline" role="tablist">
              {PROMO_CATEGORIES.map(cat => (
                <button
                  key={cat.id}
                  type="button"
                  role="tab"
                  aria-selected={selectedCategory === cat.id}
                  className={`promo-tab-btn ${selectedCategory === cat.id ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(cat.id)}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Cuadrícula de Promociones (Formato Horizontal 60% Imagen / 40% Contenido) */}
          <div className="promos-cards-grid-2col" key={selectedCategory}>
            {filteredPromos.map((promo, idx) => (
              <article 
                key={promo.id} 
                className={`promo-horizontal-card reveal-on-scroll reveal-scale reveal-stagger-${(idx % 2) + 1}`}
              >
                {/* 60% Fotografía de Alto Impacto */}
                <div className="promo-card-media">
                  <img 
                    src={promo.image} 
                    alt={promo.title} 
                    className="promo-card-img" 
                    loading="lazy" 
                  />
                  <div className="promo-card-overlay"></div>
                  <span className="promo-card-badge-pill">{promo.badge}</span>
                </div>

                {/* 40% Contenido Breve y Sofisticado */}
                <div className="promo-card-content">
                  <div className="promo-card-top">
                    <span className="promo-card-kicker">{promo.tag}</span>
                    <h3 className="promo-card-title">{promo.title}</h3>
                    <p className="promo-card-desc">{promo.description}</p>
                    
                    <div className="promo-chips-list">
                      {promo.highlights.map((h, hIdx) => (
                        <span key={hIdx} className="promo-chip-item">
                          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                          <span>{h}</span>
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Acciones de la Tarjeta */}
                  <div className="promo-card-actions">
                    <button 
                      type="button" 
                      className="btn btn-primary btn-block promo-book-btn"
                      onClick={() => handleReservePromo(promo)}
                    >
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
                      </svg>
                      <span>Reservar Promo</span>
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                      </svg>
                    </button>

                    <button 
                      type="button" 
                      className="promo-details-btn"
                      onClick={(e) => {
                        e.stopPropagation();
                        setPromoModal(promo);
                      }}
                    >
                      <span>Ver detalles de reserva ➔</span>
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* 3. Banner VIP de Personalización & Aniversarios */}
          <div className="promo-custom-banner reveal-on-scroll reveal-scale">
            <div className="promo-custom-content">
              <div className="custom-banner-tag">ATENCIÓN PERSONALIZADA</div>
              <h2 className="custom-banner-title">
                ¿Planeas un Aniversario o <span className="text-shimmer-red">Propuesta de Matrimonio?</span>
              </h2>
              <p className="custom-banner-text">
                Coordinamos contigo en estricta confidencialidad para ambientar la habitación antes de tu llegada con arreglos florales especiales, carta de vinos premium, postres artesanales o sorpresas personalizadas.
              </p>
              <div className="custom-banner-actions">
                <a 
                  href="https://api.whatsapp.com/send?phone=51936793821&text=Hola%20Hotel%20XNOX,%20deseo%20coordinar%20una%20ambientaci%C3%B3n%20especial%20personalizada%20(aniversario/propuesta)"
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-whatsapp btn-lg"
                >
                  Hablar con el Concierge por WhatsApp
                </a>
                <Link to="/suites" className="btn btn-secondary btn-lg promo-banner-suites-btn">
                  Ver Habitaciones Disponibles ➔
                </Link>
              </div>
            </div>
          </div>

          {/* 4. Condiciones Generales Transparentes */}
          <div className="promo-terms-box reveal-on-scroll">
            <h4 className="promo-terms-title">Términos y Condiciones Generales de las Promociones</h4>
            <ul className="promo-terms-list">
              <li>Todas las promociones están sujetas a disponibilidad de habitaciones en cada una de las 4 sedes de Lima.</li>
              <li>Las promociones no son acumulables entre sí ni con otros cupones o descuentos vigentes.</li>
              <li>Para hacer válidos los beneficios de cumpleaños, es indispensable presentar documento de identidad (DNI o Pasaporte) en recepción.</li>
              <li>Ingreso exclusivo para mayores de 18 años conforme a la ley peruana.</li>
            </ul>
          </div>

        </div>
      </section>

      {/* 5. Modal Amplio de Promoción & Reserva Inmediata (Estilo Suites VIP) */}
      {promoModal && (
        <div className="promo-modal-backdrop" onClick={() => setPromoModal(null)}>
          <div className="promo-modal-card room-detail-modal" onClick={(e) => e.stopPropagation()}>
            <button 
              type="button" 
              className="modal-close-btn promo-modal-close-btn"
              onClick={() => setPromoModal(null)}
              aria-label="Cerrar ventana de promoción"
            >
              ✕
            </button>

            <div className="modal-room-header-img promo-modal-media-header">
              <img src={promoModal.image} alt={promoModal.title} className="modal-room-img promo-modal-header-img" />
              <div className="promo-modal-media-overlay"></div>
              <span className="modal-img-tag promo-modal-badge">{promoModal.badge}</span>
            </div>

            <div className="modal-room-body promo-modal-body">
              <h3 className="modal-room-title promo-modal-title">{promoModal.title}</h3>
              <p className="modal-room-quote promo-modal-desc">{promoModal.description}</p>

              {/* Grid de 3 cajas de tarifas / beneficio al estilo Suites */}
              <div className="modal-pricing-grid promo-modal-grid">
                <div className="modal-price-box">
                  <span className="modal-p-label">Categoría</span>
                  <strong className="modal-p-val promo-p-val">{promoModal.tag}</strong>
                </div>
                <div className="modal-price-box highlight">
                  <span className="modal-p-label">Beneficio Clave</span>
                  <strong className="modal-p-val promo-p-val highlight-val">{promoModal.badge}</strong>
                </div>
                <div className="modal-price-box">
                  <span className="modal-p-label">Modalidad Válida</span>
                  <strong className="modal-p-val promo-p-val">Horas & Pernocte</strong>
                </div>
              </div>

              {/* Lista en 2 columnas de beneficios y amenidades */}
              <div className="modal-features-section promo-modal-features">
                <span className="modal-features-title">Comodidades & Beneficios Incluidos:</span>
                <ul className="modal-features-list">
                  {promoModal.highlights?.map((h, i) => (
                    <li key={i}>✓ {h}</li>
                  ))}
                  <li>✓ Válido en las 4 sedes de Lima</li>
                  <li>✓ Coordinación directa con Concierge 24/7</li>
                  <li>✓ Cochera privada techada y discreta</li>
                  <li>✓ Reserva inmediata sin trámites engorrosos</li>
                </ul>
              </div>

              {/* Sedes disponibles */}
              <div className="promo-modal-sedes-grid">
                <span className="promo-sedes-header-text">Disponible en nuestras 4 sedes de Lima:</span>
                <div className="promo-sedes-badges">
                  <span>📍 Miraflores</span>
                  <span>📍 Naranjal</span>
                  <span>📍 San Miguel</span>
                  <span>📍 Centro Lima</span>
                </div>
              </div>

              {/* Botón WhatsApp de Acción Directa */}
              <div className="modal-action-bar">
                <a 
                  href={`https://api.whatsapp.com/send?phone=51936793821&text=${encodeURIComponent(promoModal.whatsappMsg)}`}
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-primary btn-block promo-modal-reserve-btn"
                  onClick={() => setPromoModal(null)}
                >
                  <WhatsAppIcon size={20} />
                  <span>Reservar esta Promoción por WhatsApp →</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default PromocionesPage;
