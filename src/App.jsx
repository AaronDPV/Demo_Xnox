import React, { useState, useEffect, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { ScrollToTop } from './components/common/ScrollToTop';
import { Navbar } from './components/common/Navbar';
import { WelcomeIntro } from './components/common/WelcomeIntro';
import { FloatingWhatsApp } from './components/common/FloatingWhatsApp';
import { Footer } from './components/common/Footer';
import { VideoModal } from './components/modals/VideoModal';
import { StoryModal } from './components/modals/StoryModal';
import { useScrollReveal } from './hooks/useScrollReveal';
import { ThemeProvider } from './context/ThemeContext';
import { SUITES_DATA } from './data/suitesData';
import './styles/app.css';

// Lazy-loaded route pages for code-splitting and high performance
const HomePage = lazy(() => import('./pages/HomePage').then(m => ({ default: m.HomePage })));
const SuitesPage = lazy(() => import('./pages/SuitesPage').then(m => ({ default: m.SuitesPage })));
const BookingPage = lazy(() => import('./pages/BookingPage').then(m => ({ default: m.BookingPage })));
const SocialPage = lazy(() => import('./pages/SocialPage').then(m => ({ default: m.SocialPage })));
const SedesPage = lazy(() => import('./pages/SedesPage').then(m => ({ default: m.SedesPage })));
const SedeDetailPage = lazy(() => import('./pages/SedeDetailPage').then(m => ({ default: m.SedeDetailPage })));
const PromocionesPage = lazy(() => import('./pages/PromocionesPage').then(m => ({ default: m.PromocionesPage })));
const NosotrosPage = lazy(() => import('./pages/NosotrosPage').then(m => ({ default: m.NosotrosPage })));
const FaqPage = lazy(() => import('./pages/FaqPage').then(m => ({ default: m.FaqPage })));

function AppContent() {
  const navigate = useNavigate();
  const location = useLocation();
  const { scrollProgress } = useScrollReveal();
  const [activeVideo, setActiveVideo] = useState(null);
  const [activeStory, setActiveStory] = useState(null);


  return (
    <div className="app-root">
      {/* Animación de Entrada / Apertura de Bienvenida (Primera Carga) */}
      <WelcomeIntro />

      {/* Dynamic Scroll Progress Bar */}
      <div className="scroll-progress-container" aria-hidden="true">
        <div className="scroll-progress-bar" style={{ width: `${scrollProgress}%` }}></div>
      </div>

      <ScrollToTop />
      <Navbar />

      <main className={(
        location.pathname === '/' || 
        location.pathname.startsWith('/suites') || 
        location.pathname.startsWith('/sedes') || 
        location.pathname.startsWith('/promociones') || 
        location.pathname.startsWith('/nosotros')
      ) ? 'main-home' : 'main-inner'}>
        <Suspense fallback={
          <div style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '16px', fontFamily: 'var(--font-heading)' }}>
            <div className="w-8 h-8 border-2 border-xnox-red border-t-transparent rounded-full animate-spin"></div>
            <span style={{ fontSize: '1.05rem', color: '#141518', letterSpacing: '1px' }}>Cargando Hotel XNOX Experience...</span>
          </div>
        }>
          <Routes>
            <Route path="/" element={<HomePage onOpenVideo={setActiveVideo} />} />
            <Route path="/suites" element={<SuitesPage />} />
            <Route path="/promociones" element={<PromocionesPage />} />
            <Route path="/nosotros" element={<NosotrosPage />} />
            <Route path="/reservas" element={<BookingPage />} />
            <Route path="/social" element={<SocialPage onOpenStory={setActiveStory} onOpenVideo={setActiveVideo} />} />
            <Route path="/sedes" element={<SedesPage />} />
            <Route path="/sedes/:sedeId" element={<SedeDetailPage />} />
            <Route path="/faq" element={<FaqPage />} />
            <Route path="*" element={<HomePage onOpenVideo={setActiveVideo} />} />
          </Routes>
        </Suspense>
      </main>

      <Footer />
      <FloatingWhatsApp />

      {/* Global Modals */}
      <VideoModal 
        video={activeVideo} 
        onClose={() => setActiveVideo(null)} 
        onReserveVideoSuite={(roomId) => {
          setActiveVideo(null);
          const roomName = roomId ? (SUITES_DATA[roomId]?.name || roomId) : 'una suite temática';
          const waUrl = `https://api.whatsapp.com/send?phone=51936793821&text=${encodeURIComponent(`Hola Hotel XNOX, vi el video y deseo reservar la habitación "${roomName}". ¿Tienen disponibilidad?`)}`;
          window.open(waUrl, '_blank', 'noopener,noreferrer');
        }}
      />

      <StoryModal 
        story={activeStory} 
        onClose={() => setActiveStory(null)} 
        onReserveStorySuite={() => {
          setActiveStory(null);
          const waUrl = `https://api.whatsapp.com/send?phone=51936793821&text=${encodeURIComponent('Hola Hotel XNOX, deseo consultar disponibilidad y reservar una habitación.')}`;
          window.open(waUrl, '_blank', 'noopener,noreferrer');
        }}
      />
    </div>
  );
}

export function App() {
  return (
    <ThemeProvider>
      <Router>
        <AppContent />
      </Router>
    </ThemeProvider>
  );
}

export default App;
