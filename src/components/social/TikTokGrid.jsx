import React from 'react';
import { TIKTOK_VIDEOS } from '../../data/socialData';

export function TikTokGrid({ onOpenVideo }) {
  return (
    <div className="tiktok-cards-grid">
      {TIKTOK_VIDEOS.map((vid, idx) => (
        <div 
          key={vid.id} 
          className={`tiktok-card reveal-on-scroll reveal-scale reveal-stagger-${(idx % 4) + 1}`} 
          onClick={() => onOpenVideo(vid)}
        >
          <img src={vid.img} alt={vid.title} className="tiktok-bg-img" loading="lazy" />
          <div className="tiktok-overlay">
            <div className="tiktok-top-bar">
              <span className="tiktok-views-badge">
                <svg width="12" height="12" fill="currentColor" viewBox="0 0 24 24"><path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/></svg>
                {vid.views}
              </span>
              <span style={{ color: '#FE2C55', fontSize: '1.2rem' }}>♥</span>
            </div>

            <div className="tiktok-play-center">▶</div>

            <div className="tiktok-bottom-info">
              <span className="tiktok-author">{vid.author}</span>
              <p className="tiktok-caption">{vid.caption}</p>
              <span className="tiktok-tags">{vid.tags}</span>
              <span className="tiktok-music">{vid.music}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
