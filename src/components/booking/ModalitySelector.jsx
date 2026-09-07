import React from 'react';

export function ModalitySelector({ selectedModality, onSelectModality }) {
  return (
    <div className="step-block">
      <div className="step-header">
        <span className="step-num">2</span>
        <h3 className="step-title">Modalidad de Estadía</h3>
      </div>
      <div className="modality-toggle-group">
        <div className="modality-option">
          <input 
            type="radio" 
            id="mod-4h" 
            name="booking-modality" 
            value="hours4" 
            checked={selectedModality === 'hours4'}
            onChange={() => onSelectModality('hours4')}
          />
          <label htmlFor="mod-4h" className="modality-label">
            <span className="modality-title">4 Horas</span>
            <span className="modality-desc">Escapada Express</span>
          </label>
        </div>

        <div className="modality-option">
          <input 
            type="radio" 
            id="mod-6h" 
            name="booking-modality" 
            value="hours6" 
            checked={selectedModality === 'hours6'}
            onChange={() => onSelectModality('hours6')}
          />
          <label htmlFor="mod-6h" className="modality-label">
            <span className="modality-title">6 Horas</span>
            <span className="modality-desc">Relax Extendido</span>
          </label>
        </div>

        <div className="modality-option">
          <input 
            type="radio" 
            id="mod-pernocte" 
            name="booking-modality" 
            value="pernocte" 
            checked={selectedModality === 'pernocte'}
            onChange={() => onSelectModality('pernocte')}
          />
          <label htmlFor="mod-pernocte" className="modality-label">
            <span className="modality-title">Pernocte</span>
            <span className="modality-desc">Noche Completa 12h-24h</span>
          </label>
        </div>
      </div>
    </div>
  );
}
