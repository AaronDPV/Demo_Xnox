import React from 'react';
import { SedeSelector } from './SedeSelector';
import { ModalitySelector } from './ModalitySelector';
import { RoomPicker } from './RoomPicker';
import { ExtrasPicker } from './ExtrasPicker';
import { BookingSummary } from './BookingSummary';

export function BookingEngine({ bookingState }) {
  const {
    selectedSede,
    setSelectedSede,
    selectedModality,
    setSelectedModality,
    selectedRoomId,
    setSelectedRoomId,
    selectedExtras,
    toggleExtra,
    bookingDate,
    setBookingDate,
    bookingTime,
    setBookingTime,
    currentRoom,
    basePrice,
    activeExtras,
    grandTotal,
    modalityLabel,
    whatsAppUrl
  } = bookingState;

  return (
    <section className="booking-section" id="agendar-reserva">
      <div className="container">
        <div className="section-header reveal-on-scroll">
          <span className="section-tag">Cotizador & Agendamiento Online</span>
          <h2>Agenda tu Reserva en <span className="text-red">3 Simples Pasos</span></h2>
          <p>Selecciona tu sede, modalidad y habitación favorita. Obtén el monto exacto en tiempo real y confirma directamente con recepción vía WhatsApp oficial.</p>
        </div>

        <div className="booking-grid">
          <div className="booking-wizard-card reveal-on-scroll reveal-slide-left">
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="wizard-steps">
                <SedeSelector 
                  selectedSede={selectedSede} 
                  onSelectSede={setSelectedSede} 
                />

                <ModalitySelector 
                  selectedModality={selectedModality} 
                  onSelectModality={setSelectedModality} 
                />

                <RoomPicker 
                  selectedRoomId={selectedRoomId} 
                  onSelectRoom={setSelectedRoomId} 
                  currentModality={selectedModality}
                />

                <ExtrasPicker 
                  selectedExtras={selectedExtras}
                  onToggleExtra={toggleExtra}
                  bookingDate={bookingDate}
                  onDateChange={setBookingDate}
                  bookingTime={bookingTime}
                  onTimeChange={setBookingTime}
                />
              </div>
            </form>
          </div>

          <BookingSummary 
            selectedSede={selectedSede}
            modalityLabel={modalityLabel}
            currentRoom={currentRoom}
            basePrice={basePrice}
            activeExtras={activeExtras}
            grandTotal={grandTotal}
            whatsAppUrl={whatsAppUrl}
          />
        </div>
      </div>
    </section>
  );
}
