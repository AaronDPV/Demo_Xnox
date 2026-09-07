import React, { useState } from 'react';
import { SUITES_DATA } from '../../data/suitesData';
import { SuiteCard } from './SuiteCard';

export function PricingSuites({ onReserveSuite }) {
  const [pricingMode, setPricingMode] = useState('hours'); // 'hours' or 'pernocte'
  const [categoryFilter, setCategoryFilter] = useState('all');

  const allSuites = Object.values(SUITES_DATA);
  const filteredSuites = allSuites.filter(suite => {
    if (categoryFilter === 'all') return true;
    return suite.category === categoryFilter;
  });

  return (
    <section className="pricing-section" id="suites-tarifas">
      <div className="container">
        <div className="section-header reveal-on-scroll">
          <span className="section-tag">Tarifario Transparente</span>
          <h2>Nuestras <span className="text-gradient-red">Habitaciones & Precios</span></h2>
          <p>Tarifas transparentes por horas o pernocte. Todo incluido y privacidad garantizada.</p>
          <div className="vertical-scroll-line" style={{ height: '40px', margin: '14px auto 0' }}></div>
        </div>

        {/* Controls: Toggle & Category Filters */}
        <div className="pricing-controls reveal-on-scroll">
          <div className="pricing-toggle-container">
            <button 
              type="button" 
              className={`pricing-toggle-btn ${pricingMode === 'hours' ? 'active' : ''}`}
              onClick={() => setPricingMode('hours')}
            >
              Estadía por Horas (4h / 6h)
            </button>
            <button 
              type="button" 
              className={`pricing-toggle-btn ${pricingMode === 'pernocte' ? 'active' : ''}`}
              onClick={() => setPricingMode('pernocte')}
            >
              Pernocte (Noche Completa)
            </button>
          </div>

          <div className="category-filter-chips">
            <button 
              type="button" 
              className={`filter-chip ${categoryFilter === 'all' ? 'active' : ''}`}
              onClick={() => setCategoryFilter('all')}
            >
              Todas las Habitaciones
            </button>
            <button 
              type="button" 
              className={`filter-chip ${categoryFilter === 'gamer' ? 'active' : ''}`}
              onClick={() => setCategoryFilter('gamer')}
            >
              Habitaciones Gamer (PS5)
            </button>
            <button 
              type="button" 
              className={`filter-chip ${categoryFilter === 'jacuzzi' ? 'active' : ''}`}
              onClick={() => setCategoryFilter('jacuzzi')}
            >
              Habitaciones Jacuzzi
            </button>
            <button 
              type="button" 
              className={`filter-chip ${categoryFilter === 'sauna' ? 'active' : ''}`}
              onClick={() => setCategoryFilter('sauna')}
            >
              Sauna Master
            </button>
            <button 
              type="button" 
              className={`filter-chip ${categoryFilter === 'confort' ? 'active' : ''}`}
              onClick={() => setCategoryFilter('confort')}
            >
              Ejecutivas Confort
            </button>
          </div>
        </div>

        {/* Suites Grid */}
        <div className="suites-cards-grid">
          {filteredSuites.map((room, idx) => (
            <SuiteCard 
              key={room.id} 
              room={room} 
              index={idx}
              pricingMode={pricingMode}
              onReserve={onReserveSuite}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
