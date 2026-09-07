import React, { useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { SedesSection } from '../components/sedes/SedesSection';

export function SedesPage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const sedeFromUrl = searchParams.get('sede');

  useEffect(() => {
    if (sedeFromUrl) {
      navigate(`/sedes/${sedeFromUrl}`, { replace: true });
    }
  }, [sedeFromUrl, navigate]);

  return (
    <div className="page-sedes">
      <SedesSection showHeroBanner={true} />
    </div>
  );
}

export default SedesPage;
