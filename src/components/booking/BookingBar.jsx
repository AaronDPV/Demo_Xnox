import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function BookingBar() {
  const navigate = useNavigate();
  const [selectedSede, setSelectedSede] = useState('miraflores');
  const [selectedRoomType, setSelectedRoomType] = useState('all');
  const [selectedModality, setSelectedModality] = useState('hours');
  const [selectedDate, setSelectedDate] = useState('today');

  const handleSearch = (e) => {
    e.preventDefault();
    const sedeName = selectedSede === 'miraflores' ? 'Miraflores' : selectedSede === 'alisos' ? 'Los Olivos (Alisos)' : selectedSede === 'naranjal' ? 'Los Olivos (Naranjal)' : 'Centro de Lima';
    const modalityName = selectedModality === 'hours' ? 'Estadía por Horas (4 Horas)' : 'Pernocte Completo';
    const msg = `Hola Hotel XNOX, deseo consultar disponibilidad en la sede ${sedeName} para ${modalityName}.`;
    const waUrl = `https://api.whatsapp.com/send?phone=51936793821&text=${encodeURIComponent(msg)}`;
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="booking-bar-wrapper container reveal-on-scroll">
      <div className="country-booking-bar">
        <form className="booking-bar-form" onSubmit={handleSearch}>
          
          {/* Selector 1: Sede */}
          <div className="booking-bar-field">
            <span className="field-eyebrow">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
              Sede XNOX
            </span>
            <select 
              className="booking-bar-select"
              value={selectedSede}
              onChange={(e) => setSelectedSede(e.target.value)}
              aria-label="Seleccionar sede"
            >
              <option value="miraflores">Sede Miraflores</option>
              <option value="alisos">Sede Los Olivos (Alisos)</option>
              <option value="naranjal">Sede Los Olivos (Naranjal)</option>
              <option value="centro">Sede Centro de Lima</option>
            </select>
          </div>

          <div className="booking-bar-divider"></div>

          {/* Selector 2: Tipo de Suite */}
          <div className="booking-bar-field">
            <span className="field-eyebrow">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M7 13c1.66 0 3-1.34 3-3S8.66 7 7 7s-3 1.34-3 3 1.34 3 3 3zm12-6h-8v7H3V5H1v15h2v-3h18v3h2v-9c0-2.21-1.79-4-4-4z"/></svg>
              Experiencia & Suite
            </span>
            <select 
              className="booking-bar-select"
              value={selectedRoomType}
              onChange={(e) => setSelectedRoomType(e.target.value)}
              aria-label="Seleccionar tipo de suite"
            >
              <option value="all">Todas las Suites</option>
              <option value="jacuzzi">Suite Jacuzzi VIP</option>
              <option value="gamer">Suite Gamer PS5</option>
              <option value="sauna">Master Suite Sauna</option>
              <option value="galaxy">Suite Galaxy Neón</option>
              <option value="confort">Suite Confort</option>
            </select>
          </div>

          <div className="booking-bar-divider"></div>

          {/* Selector 3: Modalidad */}
          <div className="booking-bar-field">
            <span className="field-eyebrow">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/></svg>
              Modalidad de Estadía
            </span>
            <select 
              className="booking-bar-select"
              value={selectedModality}
              onChange={(e) => setSelectedModality(e.target.value)}
              aria-label="Seleccionar modalidad"
            >
              <option value="hours">Estadía por Horas (4h - 6h)</option>
              <option value="pernocte">Pernocte Completo</option>
            </select>
          </div>

          <div className="booking-bar-divider"></div>

          {/* Selector 4: Fecha / Disponibilidad */}
          <div className="booking-bar-field">
            <span className="field-eyebrow">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/></svg>
              Horario & Fecha
            </span>
            <select 
              className="booking-bar-select"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              aria-label="Seleccionar fecha u horario"
            >
              <option value="today">Hoy • Inmediato</option>
              <option value="tonight">Esta Noche (VIP)</option>
              <option value="tomorrow">Mañana</option>
              <option value="weekend">Fin de Semana</option>
            </select>
          </div>

          {/* Botón de Acción Principal */}
          <div className="booking-bar-action">
            <button type="submit" className="btn btn-primary booking-bar-btn">
              <span>Consultar Tarifas</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M5 13h11.86l-5.43 5.43 1.42 1.42L21.14 12l-8.29-8.29-1.42 1.42L16.86 11H5v2z"/></svg>
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}

export default BookingBar;
