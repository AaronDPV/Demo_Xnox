import React, { useEffect } from 'react';

export function StoryModal({ story, onClose, onReserveStorySuite }) {
  useEffect(() => {
    if (story) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [story]);

  if (!story) return null;

  return (
    <div 
      className="modal-overlay active" 
      role="dialog" 
      aria-modal="true"
      onClick={(e) => {
        if (e.target.classList.contains('modal-overlay')) onClose();
      }}
    >
      <div className="modal-content-box" style={{ maxWidth: '420px' }}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Cerrar historia">✕</button>
        <div style={{ position: 'relative', aspectRatio: '9/16', maxHeight: '75vh', overflow: 'hidden', background: '#000' }}>
          <img src={story.img} alt={story.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          
          <div style={{ 
            position: 'absolute', 
            top: 0, 
            left: 0, 
            right: 0, 
            padding: '16px', 
            background: 'linear-gradient(to bottom, rgba(0,0,0,0.8), transparent)', 
            display: 'flex', 
            alignItems: 'center', 
            gap: '10px' 
          }}>
            <img src="/assets/logo.jpg" alt="Logo XNOX" style={{ width: '36px', height: '36px', borderRadius: '50%', border: '2px solid var(--xnox-red)' }} />
            <div>
              <div style={{ color: '#FFF', fontWeight: 700, fontSize: '0.85rem' }}>hotel.xnox</div>
              <div style={{ color: 'var(--text-gray-400)', fontSize: '0.75rem' }}>{story.title}</div>
            </div>
          </div>

          <div style={{ 
            position: 'absolute', 
            bottom: 0, 
            left: 0, 
            right: 0, 
            padding: '20px', 
            background: 'linear-gradient(to top, rgba(0,0,0,0.95), transparent)' 
          }}>
            <button 
              type="button"
              className="btn btn-primary btn-sm" 
              style={{ width: '100%' }} 
              onClick={() => {
                onClose();
                if (onReserveStorySuite) onReserveStorySuite();
              }}
            >
              Quiero agendar esta experiencia →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
