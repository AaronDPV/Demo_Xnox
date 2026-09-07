import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Hero } from '../components/hero/Hero';
import { BookingBar } from '../components/booking/BookingBar';
import { SedesSection } from '../components/sedes/SedesSection';
import { StatsTicker } from '../components/common/StatsTicker';
import { ExperienceCarousel } from '../components/carousel/ExperienceCarousel';
import { CountryClubRoomsShowcase } from '../components/rooms/CountryClubRoomsShowcase';
import { FaqAccordion } from '../components/faq/FaqAccordion';
import { TestimonialsSection } from '../components/testimonials/TestimonialsSection';

export function HomePage({ onOpenVideo }) {
  const navigate = useNavigate();

  const handleHeroQuickReserve = (sede, modality, date) => {
    navigate(`/reservas?sede=${sede}&modality=${modality}&date=${date}`);
  };

  return (
    <div className="page-home">
      <Hero onQuickReserve={handleHeroQuickReserve} />
      <BookingBar />
      <StatsTicker />
      <SedesSection onSelectSede={(sedeId) => navigate(`/reservas?sede=${sedeId}`)} />

      {/* Presentación Curada de Nuestras Mejores Habitaciones (Sin filtros) */}
      <CountryClubRoomsShowcase isCurated={true} />

      {/* Carrusel de Experiencias Estilo Asturias (DESPUÉS de Habitaciones y Suites) */}
      <ExperienceCarousel />

      {/* Crónicas de Estancia & Testimonios Elocuentes (Diseño Fuera de lo Normal) */}
      <TestimonialsSection />

      {/* Sección de Preguntas Frecuentes (FAQ) */}
      <FaqAccordion />
    </div>
  );
}
