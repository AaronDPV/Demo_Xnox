import React from 'react';
import { SUITES_DATA } from '../../data/suitesData';

export function RoomPicker({ selectedRoomId, onSelectRoom, currentModality }) {
  const suitesList = Object.values(SUITES_DATA);

  return (
    <div className="step-block">
      <div className="step-header">
        <span className="step-num">3</span>
        <h3 className="step-title">Selecciona tu Habitación Temática</h3>
      </div>
      <div className="room-picker-list">
        {suitesList.map((room) => {
          const roomPrice = room[currentModality] || room.hours4;

          return (
            <div key={room.id} className="room-radio-item">
              <input 
                type="radio" 
                id={`room-${room.id}`} 
                name="booking-room" 
                value={room.id} 
                checked={selectedRoomId === room.id}
                onChange={() => onSelectRoom(room.id)}
              />
              <label htmlFor={`room-${room.id}`} className="room-radio-label">
                <div className="room-radio-info">
                  <img src={room.thumb} alt={room.name} className="room-radio-thumb" loading="lazy" />
                  <div className="room-radio-details">
                    <h5>
                      {room.name} 
                      {room.id === 'gamer' && <span className="text-red"> ★ Viral</span>}
                      {room.id === 'jacuzzi' && <span className="text-gold"> ★ Favorita</span>}
                    </h5>
                    <p>{room.desc}</p>
                  </div>
                </div>
                <span className="room-radio-price">
                  <span className="price-currency">S/</span>{roomPrice}
                </span>
              </label>
            </div>
          );
        })}
      </div>
    </div>
  );
}
