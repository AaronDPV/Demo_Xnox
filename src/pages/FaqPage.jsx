import React from 'react';
import { FaqAccordion } from '../components/faq/FaqAccordion';

export function FaqPage() {
  return (
    <div className="page-faq" style={{ paddingTop: '40px' }}>
      <FaqAccordion />

      {/* Support / Contact Cards */}
      <section style={{ padding: '60px 0 100px', background: 'var(--bg-dark)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '650px', margin: '0 auto 40px' }}>
            <span className="section-tag">Atención Personalizada 24/7</span>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', fontWeight: 800, color: '#141518', marginBottom: '12px' }}>
              ¿Tienes alguna duda adicional?
            </h2>
            <p style={{ color: 'var(--text-gray-300)' }}>
              Nuestro equipo de recepción atiende consultas, solicitudes de habitaciones temáticas y confirmación de disponibilidad las 24 horas.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', maxWidth: '900px', margin: '0 auto' }}>
            <div style={{ background: 'var(--bg-card)', border: '1px solid rgba(197, 160, 89, 0.25)', borderRadius: 'var(--radius-md)', padding: '28px', textAlign: 'center', boxShadow: '0 4px 18px rgba(0,0,0,0.04)' }}>
              <div style={{ width: '48px', height: '48px', margin: '0 auto 14px', borderRadius: '50%', background: 'rgba(37, 211, 102, 0.1)', color: '#25D366', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
              </div>
              <h3 style={{ fontFamily: 'var(--font-heading)', color: '#141518', fontSize: '1.2rem', marginBottom: '8px' }}>WhatsApp Concierge</h3>
              <p style={{ color: 'var(--text-gray-400)', fontSize: '0.85rem', marginBottom: '18px' }}>Respuestas en menos de 5 minutos</p>
              <a 
                href="https://api.whatsapp.com/send?phone=51936793821&text=Hola%20Hotel%20XNOX,%20tengo%20una%20consulta" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-whatsapp btn-sm" 
                style={{ width: '100%' }}
              >
                +51 936 793 821
              </a>
            </div>

            <div style={{ background: 'var(--bg-card)', border: '1px solid rgba(197, 160, 89, 0.25)', borderRadius: 'var(--radius-md)', padding: '28px', textAlign: 'center', boxShadow: '0 4px 18px rgba(0,0,0,0.04)' }}>
              <div style={{ width: '48px', height: '48px', margin: '0 auto 14px', borderRadius: '50%', background: 'rgba(216, 30, 52, 0.08)', color: 'var(--xnox-red)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              </div>
              <h3 style={{ fontFamily: 'var(--font-heading)', color: '#141518', fontSize: '1.2rem', marginBottom: '8px' }}>Línea de Recepción</h3>
              <p style={{ color: 'var(--text-gray-400)', fontSize: '0.85rem', marginBottom: '18px' }}>Atención telefónica directa</p>
              <a 
                href="tel:+51932347519" 
                className="btn btn-secondary btn-sm" 
                style={{ width: '100%' }}
              >
                +51 932 347 519
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
