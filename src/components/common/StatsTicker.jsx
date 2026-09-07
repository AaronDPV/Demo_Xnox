import React from 'react';

export function StatsTicker() {
  const tickerItems = [
    {
      title: 'PlayStation 5 en Suite',
      icon: (
        <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><rect x="2" y="6" width="20" height="12" rx="2"></rect><line x1="6" y1="12" x2="10" y2="12"></line><line x1="8" y1="10" x2="8" y2="14"></line><line x1="15" y1="13" x2="15.01" y2="13"></line><line x1="18" y1="11" x2="18.01" y2="11"></line></svg>
      )
    },
    {
      title: 'Jacuzzi con Cromoterapia',
      icon: (
        <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M4 12v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-6"></path><path d="M2 12h20"></path><path d="M7 12V7a3 3 0 0 1 6 0v5"></path></svg>
      )
    },
    {
      title: 'Sauna Seco Finlandés',
      icon: (
        <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M12 2v20"></path><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
      )
    },
    {
      title: 'Cocheras Privadas',
      icon: (
        <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
      )
    },
    {
      title: 'Ingreso Discreto 24/7',
      icon: (
        <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
      )
    },
    {
      title: 'Promoción 4ta Noche Gratis',
      icon: (
        <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
      )
    },
    {
      title: 'Champagne & Bar VIP',
      icon: (
        <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M8 22h8"></path><path d="M12 11v11"></path><path d="m19 3-7 8-7-8Z"></path></svg>
      )
    },
    {
      title: 'Sedes Exclusivas en Lima',
      icon: (
        <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
      )
    }
  ];

  return (
    <div className="stats-ticker-wrapper" aria-label="Beneficios destacados Hotel XNOX">
      <div className="ticker-track">
        {[...tickerItems, ...tickerItems].map((item, idx) => (
          <div key={idx} className="ticker-item">
            <span className="ticker-icon text-xnox-red flex items-center">{item.icon}</span>
            <span className="ticker-title">{item.title}</span>
            <span className="ticker-dot">•</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StatsTicker;
