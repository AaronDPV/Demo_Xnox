import React, { useEffect } from 'react';

export function VideoModal({ video, onClose, onReserveVideoSuite }) {
  useEffect(() => {
    if (video) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [video]);

  if (!video) return null;

  return (
    <div 
      className="modal-overlay active" 
      role="dialog" 
      aria-modal="true"
      onClick={(e) => {
        if (e.target.classList.contains('modal-overlay')) onClose();
      }}
    >
      <div className="modal-content-box">
        <button className="modal-close-btn" onClick={onClose} aria-label="Cerrar video">✕</button>
        <div style={{ position: 'relative', aspectRatio: '9/16', maxHeight: '75vh', overflow: 'hidden', background: '#000' }}>
          <img src={video.img} alt={video.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          <div style={{ 
            position: 'absolute', 
            inset: 0, 
            background: 'linear-gradient(to top, rgba(0,0,0,0.95) 0%, transparent 40%, rgba(0,0,0,0.5) 100%)', 
            display: 'flex', 
            flexDirection: 'column', 
            justifyContent: 'space-between', 
            padding: '24px' 
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span className="tiktok-views-badge">{video.views}</span>
            </div>
            <div>
              <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--xnox-red)' }}>{video.author}</span>
              <h4 style={{ color: '#FFFFFF', fontSize: '1.05rem', margin: '6px 0 14px' }}>{video.title}</h4>
              <div style={{ display: 'flex', gap: '10px' }}>
                <a 
                  href="https://www.tiktok.com/@xnox_hotel" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-primary btn-sm" 
                  style={{ flex: 1 }}
                >
                  Abrir en TikTok
                </a>
                <button 
                  type="button"
                  className="btn btn-secondary btn-sm" 
                  onClick={() => {
                    onClose();
                    if (onReserveVideoSuite) onReserveVideoSuite(video.linkedRoomId);
                  }}
                >
                  Reservar esta Habitación
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
