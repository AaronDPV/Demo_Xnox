import React from 'react';
import { useNavigate } from 'react-router-dom';
import { SedesSection } from '../components/sedes/SedesSection';

export function SedesPage() {
  const navigate = useNavigate();

  const handleSelectSede = (sedeId) => {
    navigate(`/reservas?sede=${sedeId}`);
  };

  return (
    <div className="page-sedes" style={{ paddingTop: '40px' }}>
      <SedesSection onSelectSede={handleSelectSede} />
    </div>
  );
}
