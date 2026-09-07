import React from 'react';
import { SEDES_DATA } from '../../data/sedesData';
import { WhatsAppIcon } from '../common/WhatsAppIcon';

export function BookingSummary({
  selectedSede,
  modalityLabel,
  currentRoom,
  basePrice,
  activeExtras,
  grandTotal,
  whatsAppUrl
}) {
  const sedeName = SEDES_DATA[selectedSede]?.name || selectedSede;

  return (
    <aside className="booking-summary-card reveal-on-scroll reveal-slide-right" aria-label="Resumen de reserva">
      <div className="summary-header">
        <span className="section-tag" style={{ marginBottom: '8px' }}>Presupuesto en Vivo</span>
        <h3>Resumen de Reserva</h3>
        <p>Calculado en tiempo real según tarifas oficiales</p>
      </div>

      <div className="summary-items-list">
        <div className="summary-item-row">
          <span>Sede elegida:</span>
          <span>{sedeName}</span>
        </div>
        <div className="summary-item-row">
          <span>Modalidad:</span>
          <span>{modalityLabel}</span>
        </div>
        <div className="summary-item-row">
          <span>Habitación:</span>
          <span>{currentRoom.name}</span>
        </div>
        <div className="summary-item-row">
          <span>Tarifa Base:</span>
          <span>S/ {basePrice}.00</span>
        </div>

        <div className="summary-divider"></div>

        <div id="summary-extras-container">
          {activeExtras.length === 0 ? (
            <div className="summary-item-row" style={{ color: 'var(--text-gray-600)', fontSize: '0.8rem' }}>
              <span>Extras adicionales</span>
              <span>Ninguno seleccionado</span>
            </div>
          ) : (
            activeExtras.map(ext => (
              <div key={ext.id} className="summary-item-row">
                <span>+ {ext.name}</span>
                <span style={{ color: 'var(--accent-gold)' }}>
                  {ext.price === 0 ? 'Gratis' : `S/ ${ext.price}.00`}
                </span>
              </div>
            ))
          )}
        </div>
      </div>

      <div className="summary-total-box">
        <span className="summary-total-label">Total a Pagar:</span>
        <span className="summary-total-amount">S/ {grandTotal}.00</span>
      </div>

      <a 
        href={whatsAppUrl} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="btn btn-whatsapp" 
        style={{ width: '100%', fontSize: '1.05rem', padding: '16px' }}
      >
        <WhatsAppIcon size={22} />
        Confirmar Reserva por WhatsApp
      </a>

      <div className="booking-guarantees">
        <div className="guarantee-point">
          <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
          <span>Reserva inmediata y confirmación en minutos con recepción</span>
        </div>
        <div className="guarantee-point">
          <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
          <span>Sin cobros sorpresa ni comisiones de plataformas intermediarias</span>
        </div>
        <div className="guarantee-point">
          <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
          <span>Ingreso 100% privado y discreto las 24 horas</span>
        </div>
      </div>
    </aside>
  );
}
