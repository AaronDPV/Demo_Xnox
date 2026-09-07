import React from 'react';
import { EXTRAS_DATA } from '../../data/extrasData';

export function ExtrasPicker({ 
  selectedExtras, 
  onToggleExtra, 
  bookingDate, 
  onDateChange, 
  bookingTime, 
  onTimeChange 
}) {
  return (
    <div className="step-block">
      <div className="step-header">
        <span className="step-num">4</span>
        <h3 className="step-title">Personaliza tu Experiencia (Opcional)</h3>
      </div>

      <div className="extras-grid">
        {EXTRAS_DATA.map((extra) => {
          const isChecked = selectedExtras.includes(extra.id);

          return (
            <div key={extra.id} className="extra-checkbox-item">
              <input 
                type="checkbox" 
                id={`extra-${extra.id}`} 
                name="booking-extra" 
                value={extra.id} 
                checked={isChecked}
                onChange={() => onToggleExtra(extra.id)}
              />
              <label htmlFor={`extra-${extra.id}`} className="extra-checkbox-label">
                <div className="extra-info-left">
                  <span className="text-xnox-red flex items-center">
                    {extra.id === 'pack-romantico' && (
                      <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                    )}
                    {extra.id === 'vino-champagne' && (
                      <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M8 22h8"></path><path d="M12 11v11"></path><path d="m19 3-7 8-7-8Z"></path></svg>
                    )}
                    {extra.id === 'gamer-snack' && (
                      <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><rect x="2" y="6" width="20" height="12" rx="2"></rect><line x1="6" y1="12" x2="10" y2="12"></line><line x1="8" y1="10" x2="8" y2="14"></line><line x1="15" y1="13" x2="15.01" y2="13"></line><line x1="18" y1="11" x2="18.01" y2="11"></line></svg>
                    )}
                    {extra.id === 'cochera' && (
                      <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                    )}
                  </span>
                  <span className="extra-title">{extra.name}</span>
                </div>
                <span className="extra-cost">
                  {extra.price === 0 ? 'GRATIS' : `+S/ ${extra.price}`}
                </span>
              </label>
            </div>
          );
        })}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginTop: '18px' }}>
        <div className="quick-field">
          <label htmlFor="wizard-booking-date" className="wizard-field-label">Fecha de Reserva</label>
          <input 
            type="date" 
            id="wizard-booking-date" 
            className="wizard-input"
            value={bookingDate}
            onChange={(e) => onDateChange(e.target.value)}
            min={new Date().toISOString().split('T')[0]}
          />
        </div>

        <div className="quick-field">
          <label htmlFor="wizard-booking-time" className="wizard-field-label">Hora Estimada de Llegada</label>
          <input 
            type="time" 
            id="wizard-booking-time" 
            className="wizard-input"
            value={bookingTime}
            onChange={(e) => onTimeChange(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}
