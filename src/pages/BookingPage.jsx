import React, { useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { SUITES_DATA } from '../data/suitesData';
import { MAIN_SEDES_LIST } from '../data/sedesData';
import { WhatsAppIcon } from '../components/common/WhatsAppIcon';

export function BookingPage() {
  const [searchParams] = useSearchParams();
  const roomId = searchParams.get('room');
  const sedeId = searchParams.get('sede');
  const modality = searchParams.get('modality');

  const room = roomId ? SUITES_DATA[roomId] : null;
  const sede = sedeId ? MAIN_SEDES_LIST.find(s => s.id === sedeId) : null;

  let message = 'Hola Hotel XNOX, deseo consultar disponibilidad y reservar una habitación.';
  
  if (room && sede) {
    const tariffInfo = room.hours4 ? ` (Tarifa 4h: S/ ${room.hours4})` : '';
    message = `Hola Hotel XNOX, deseo reservar la habitación "${room.name}" en la Sede ${sede.name}${tariffInfo}. ¿Tienen disponibilidad?`;
  } else if (room) {
    const tariffInfo = room.hours4 ? ` (Tarifa 4h: S/ ${room.hours4})` : '';
    message = `Hola Hotel XNOX, deseo reservar la habitación "${room.name}"${tariffInfo}. ¿Tienen disponibilidad?`;
  } else if (sede) {
    message = `Hola Hotel XNOX, deseo reservar una habitación en la Sede ${sede.name}. ¿Tienen disponibilidad?`;
  }

  const waUrl = `https://api.whatsapp.com/send?phone=51936793821&text=${encodeURIComponent(message)}`;

  useEffect(() => {
    // Redirige de forma automática al WhatsApp oficial con el mensaje ya listo
    const timer = setTimeout(() => {
      window.location.href = waUrl;
    }, 450);
    return () => clearTimeout(timer);
  }, [waUrl]);

  return (
    <div className="page-booking-direct min-h-[75vh] flex items-center justify-center py-20 px-4">
      <div className="max-w-[540px] w-full bg-white dark:bg-[#141722] border border-black/10 dark:border-white/10 rounded-2xl p-8 sm:p-10 text-center shadow-2xl transition-colors">
        
        {/* Badge / Icono de WhatsApp con aura */}
        <div className="relative w-20 h-20 mx-auto mb-6 flex items-center justify-center">
          <span className="absolute inset-0 rounded-full bg-[#25D366]/20 animate-ping opacity-75"></span>
          <div className="relative w-20 h-20 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg shadow-[#25D366]/30">
            <WhatsAppIcon size={40} filled={false} />
          </div>
        </div>

        <span className="inline-block text-xs font-black tracking-widest text-[#D81E34] uppercase mb-2">
          RESERVA INMEDIATA 24/7
        </span>

        <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white mb-3 font-serif tracking-tight">
          Redirigiendo a WhatsApp...
        </h1>

        <p className="text-sm text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
          {room ? (
            <>
              Estamos preparando tu solicitud para la habitación <strong className="text-slate-900 dark:text-white">"{room.name}"</strong> con atención VIP y confirmación en tiempo real.
            </>
          ) : (
            <>
              Conectando con la recepción central de <strong className="text-slate-900 dark:text-white">Hotel XNOX Experience</strong> para consultar disponibilidad inmediata.
            </>
          )}
        </p>

        <div className="flex flex-col gap-3">
          <a
            href={waUrl}
            className="btn btn-whatsapp w-full flex items-center justify-center gap-3 py-3.5 px-6 text-base font-bold shadow-lg shadow-[#25D366]/25 hover:shadow-[#25D366]/40 transition-all rounded-xl"
            style={{ textDecoration: 'none' }}
          >
            <WhatsAppIcon size={22} />
            <span>Abrir WhatsApp Ahora</span>
          </a>

          <Link
            to="/"
            className="text-xs text-slate-500 dark:text-slate-400 hover:text-[#D81E34] dark:hover:text-[#FF4D6D] transition-colors py-2 font-medium"
          >
            ← Volver a la página de inicio
          </Link>
        </div>

      </div>
    </div>
  );
}

export default BookingPage;
