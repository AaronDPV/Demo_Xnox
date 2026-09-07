import React from 'react';
import { MAIN_SEDES_LIST } from '../../data/sedesData';

export function SedeSelector({ selectedSede, onSelectSede }) {
  const sedesList = MAIN_SEDES_LIST;

  return (
    <div className="step-block">
      <div className="step-header">
        <span className="step-num">1</span>
        <h3 className="step-title">Elige la Sede de tu Preferencia</h3>
      </div>
      <div className="sede-selector-grid">
        {sedesList.map((sede) => (
          <div key={sede.id} className="sede-option">
            <input 
              type="radio" 
              id={`sede-${sede.id}`} 
              name="booking-sede" 
              value={sede.id} 
              checked={selectedSede === sede.id}
              onChange={() => onSelectSede(sede.id)}
            />
            <label htmlFor={`sede-${sede.id}`} className="sede-label">
              <span className="sede-name">{sede.name}</span>
              <span className="sede-address">{sede.address}</span>
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}
