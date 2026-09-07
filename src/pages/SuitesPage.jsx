import React from 'react';
import { CountryClubRoomsShowcase } from '../components/rooms/CountryClubRoomsShowcase';

export function SuitesPage() {
  return (
    <div className="page-suites">
      {/* Catálogo Completo con Banner Hero con Imagen y Filtros por Categoría */}
      <CountryClubRoomsShowcase 
        isCurated={false} 
        showFilters={true} 
        showHeroBanner={true}
      />
    </div>
  );
}

export default SuitesPage;
