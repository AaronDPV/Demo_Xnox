import React from 'react';
import { InstagramStories } from './InstagramStories';
import { TikTokGrid } from './TikTokGrid';

export function SocialFeed({ onOpenStory, onOpenVideo }) {
  return (
    <section className="social-section" id="tiktok-instagram">
      <div className="container">
        <div className="section-header reveal-on-scroll">
          <span className="section-tag">En Tendencia Social</span>
          <h2>Como lo Viste en <span className="text-red">TikTok & Instagram</span></h2>
          <p>Los videos más virales de nuestras suites temáticas. Mira los tours, las reacciones de las parejas y sorpresas preparadas en Hotel XNOX.</p>
        </div>

        <InstagramStories onOpenStory={onOpenStory} />
        <TikTokGrid onOpenVideo={onOpenVideo} />

        {/* Social Media CTA Banner */}
        <div className="social-cta-box reveal-on-scroll reveal-scale">
          <div className="social-cta-text">
            <h4>¡Síguenos y participa por estadías gratis y sorteos mensuales!</h4>
            <p>Publicamos promociones relámpago, nuevos juegos de PS5 y dinámicas exclusivas para nuestros seguidores.</p>
          </div>
          <div className="social-cta-buttons">
            <a href="https://www.tiktok.com/@xnox_hotel" target="_blank" rel="noopener noreferrer" className="btn btn-tiktok">
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.29 0 .58.04.85.12V9.4a6.33 6.33 0 0 0-.85-.05A6.33 6.33 0 0 0 3.15 15.7a6.34 6.34 0 0 0 6.33 6.3c3.48 0 6.32-2.82 6.32-6.3v-6.9a8.3 8.3 0 0 0 5-1.63v-3.4a4.8 4.8 0 0 1-1.21.92z"/></svg>
              TikTok @xnox_hotel
            </a>
            <a href="https://www.instagram.com/hotel.xnox/?hl=es" target="_blank" rel="noopener noreferrer" className="btn btn-instagram">
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              Instagram @hotel.xnox
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
