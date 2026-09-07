import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Hero } from '../components/hero/Hero';
import { SedesSection } from '../components/sedes/SedesSection';
import { StatsTicker } from '../components/common/StatsTicker';
import { ExperienceCarousel } from '../components/carousel/ExperienceCarousel';
import { CountryClubRoomsShowcase } from '../components/rooms/CountryClubRoomsShowcase';
import { FaqAccordion } from '../components/faq/FaqAccordion';
import { TestimonialsSection } from '../components/testimonials/TestimonialsSection';

export function HomePage({ onOpenVideo }) {
  const navigate = useNavigate();

  const handleHeroQuickReserve = (sede, modality) => {
    const waUrl = `https://api.whatsapp.com/send?phone=51936793821&text=${encodeURIComponent(`Hola Hotel XNOX, deseo consultar disponibilidad para reservar en la sede ${sede}.`)}`;
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="page-home">
      <Hero onQuickReserve={handleHeroQuickReserve} />
      <StatsTicker />
      <SedesSection onSelectSede={(sedeId) => navigate(`/sedes/${sedeId}`)} />

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
