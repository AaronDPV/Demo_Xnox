import { useState, useMemo, useCallback, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SUITES_DATA } from '../data/suitesData';
import { SEDES_DATA } from '../data/sedesData';
import { EXTRAS_DATA } from '../data/extrasData';

const WHATSAPP_PHONE = '51936793821';

export function useBooking() {
  const [searchParams, setSearchParams] = useSearchParams();

  const [selectedSede, setSelectedSede] = useState(() => {
    const pSede = searchParams.get('sede');
    return (pSede && SEDES_DATA[pSede]) ? pSede : 'miraflores';
  });

  const [selectedModality, setSelectedModality] = useState(() => {
    const pMod = searchParams.get('modality');
    return (pMod && ['hours4', 'hours6', 'pernocte'].includes(pMod)) ? pMod : 'hours4';
  });

  const [selectedRoomId, setSelectedRoomId] = useState(() => {
    const pRoom = searchParams.get('room');
    return (pRoom && SUITES_DATA[pRoom]) ? pRoom : 'gamer';
  });

  const [selectedExtras, setSelectedExtras] = useState(['cochera']);
  const [bookingDate, setBookingDate] = useState(() => {
    return searchParams.get('date') || new Date().toISOString().split('T')[0];
  });
  const [bookingTime, setBookingTime] = useState('20:00');

  // React to URL query params changes
  useEffect(() => {
    const pRoom = searchParams.get('room');
    if (pRoom && SUITES_DATA[pRoom] && pRoom !== selectedRoomId) {
      setSelectedRoomId(pRoom);
    }
    const pSede = searchParams.get('sede');
    if (pSede && SEDES_DATA[pSede] && pSede !== selectedSede) {
      setSelectedSede(pSede);
    }
    const pMod = searchParams.get('modality');
    if (pMod && ['hours4', 'hours6', 'pernocte'].includes(pMod) && pMod !== selectedModality) {
      setSelectedModality(pMod);
    }
    const pDate = searchParams.get('date');
    if (pDate && pDate !== bookingDate) {
      setBookingDate(pDate);
    }
  }, [searchParams]);

  // Active room data
  const currentRoom = useMemo(() => {
    return SUITES_DATA[selectedRoomId] || SUITES_DATA.gamer;
  }, [selectedRoomId]);

  // Base price
  const basePrice = useMemo(() => {
    if (selectedModality === 'hours4') return currentRoom.hours4;
    if (selectedModality === 'hours6') return currentRoom.hours6;
    return currentRoom.pernocte;
  }, [currentRoom, selectedModality]);

  // Extras list & total
  const activeExtras = useMemo(() => {
    return EXTRAS_DATA.filter(ext => selectedExtras.includes(ext.id));
  }, [selectedExtras]);

  const extrasTotal = useMemo(() => {
    return activeExtras.reduce((sum, ext) => sum + ext.price, 0);
  }, [activeExtras]);

  // Grand Total
  const grandTotal = useMemo(() => {
    return basePrice + extrasTotal;
  }, [basePrice, extrasTotal]);

  // Modality label
  const modalityLabel = useMemo(() => {
    if (selectedModality === 'hours4') return 'Estadía Corta (4 Horas)';
    if (selectedModality === 'hours6') return 'Estadía Media (6 Horas)';
    return 'Pernocte (Noche Completa)';
  }, [selectedModality]);

  // Toggle an extra
  const toggleExtra = useCallback((extraId) => {
    setSelectedExtras(prev => {
      if (prev.includes(extraId)) {
        return prev.filter(id => id !== extraId);
      } else {
        return [...prev, extraId];
      }
    });
  }, []);

  // WhatsApp formatted link
  const whatsAppUrl = useMemo(() => {
    const sedeInfo = SEDES_DATA[selectedSede]?.name || selectedSede;
    let extrasText = 'Ninguno';
    if (activeExtras.length > 0) {
      extrasText = activeExtras.map(e => `${e.name} (${e.price === 0 ? 'Gratis' : 'S/' + e.price})`).join(', ');
    }

    const message = 
`Hola Hotel XNOX. Deseo agendar una reserva desde la web oficial:

• *Sede:* ${sedeInfo}
• *Habitación:* ${currentRoom.name}
• *Modalidad:* ${modalityLabel}
• *Fecha:* ${bookingDate || 'Hoy'}
• *Hora aprox:* ${bookingTime || 'Por coordinar'}
• *Extras:* ${extrasText}
• *Total Cotizado:* S/ ${grandTotal}.00

¿Tienen disponibilidad para esta fecha y horario? Quedo atento a su confirmación. Muchas gracias.`;

    return `https://api.whatsapp.com/send?phone=${WHATSAPP_PHONE}&text=${encodeURIComponent(message)}`;
  }, [selectedSede, currentRoom, modalityLabel, bookingDate, bookingTime, activeExtras, grandTotal]);

  return {
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
    extrasTotal,
    grandTotal,
    modalityLabel,
    whatsAppUrl
  };
}
