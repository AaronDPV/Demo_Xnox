import React from 'react';

export function SuiteCard({ room, pricingMode, onReserve, index = 0 }) {
  const isHours = pricingMode === 'hours';
  const price = isHours ? room.hours4 : room.pernocte;
  const unitLabel = isHours ? '/ 4 Horas' : '/ Pernocte';
  const modeLabel = isHours ? 'Estadía Corta' : 'Noche Completa';
  const staggerClass = `reveal-stagger-${(index % 5) + 1}`;

  // Extraer amenidades clave como micro-chips limpios
  const quickChips = room.features.slice(0, 3).map(f => {
    // Remover texto largo si lo hay
    return f.length > 24 ? f.substring(0, 22) + '...' : f;
  });

  return (
    <article 
      className={`suite-card image-first-card highlighted reveal-on-scroll reveal-scale ${staggerClass}`} 
      data-room-id={room.id} 
      data-category={room.category}
    >
      <div className="suite-image-container curtain-container">
        <div className="curtain-overlay"></div>
        <img src={room.thumb} alt={room.name} className="suite-img" loading="lazy" />
        <div className="suite-image-overlay"></div>
        <span className="suite-sedes-pill">{room.sedes}</span>
      </div>

      <div className="suite-card-body">
        <h3 className="suite-name">{room.name}</h3>

        {/* Micro-chips visuales en vez de párrafos largos */}
        <div className="suite-chips-preview">
          {quickChips.map((chip, cIdx) => (
            <span key={cIdx} className="suite-mini-chip">{chip}</span>
          ))}
        </div>

        <div className="suite-pricing-footer">
          <div className="price-display-block">
            <span className="price-label-small">{modeLabel}</span>
            <div className="price-value-box">
              <span className="currency-sym">S/</span>
              <span className="price-amount">{price}</span>
              <span className="price-unit">{unitLabel}</span>
            </div>
          </div>
          <button 
            type="button" 
            className="btn btn-primary btn-sm btn-reserve-suite" 
            onClick={() => onReserve(room.id, isHours ? 'hours4' : 'pernocte')}
          >
            Reservar →
          </button>
        </div>
      </div>
    </article>
  );
}

export default SuiteCard;
