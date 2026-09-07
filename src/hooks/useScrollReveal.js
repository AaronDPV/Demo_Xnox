import { useEffect, useState } from 'react';

/**
 * Hook de alto rendimiento para revelado de elementos al hacer scroll
 * utilizando IntersectionObserver nativo (0 jank, 60fps con GPU)
 * y cálculo optimizado de la barra de progreso de scroll.
 */
export function useScrollReveal() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    // 1. Configuración de IntersectionObserver bidireccional (subir y bajar con scroll)
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
        } else {
          // Al salir del viewport (tanto hacia arriba como hacia abajo),
          // removemos la clase para que vuelva a animarse al reingresar
          entry.target.classList.remove('is-revealed');
        }
      });
    };

    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -30px 0px',
      threshold: 0.1,
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    const observeElements = () => {
      const elements = document.querySelectorAll('.reveal-on-scroll');
      elements.forEach((el) => observer.observe(el));
    };

    // Observar elementos actuales
    observeElements();
    const timer = setTimeout(observeElements, 250);

    // MutationObserver para observar elementos que se montan dinámicamente en el DOM
    // o re-aplicar is-revealed si una reconciliación de React reinició className mientras estaba en pantalla
    const mutationObserver = new MutationObserver((mutations) => {
      let needsReobserve = false;
      mutations.forEach((m) => {
        if (m.type === 'childList') {
          needsReobserve = true;
        } else if (m.type === 'attributes' && m.attributeName === 'class') {
          const el = m.target;
          if (el.classList?.contains('reveal-on-scroll') && !el.classList?.contains('is-revealed')) {
            const rect = el.getBoundingClientRect();
            const isInView = rect.top < window.innerHeight && rect.bottom > 0;
            if (isInView) {
              el.classList.add('is-revealed');
            }
          }
        }
      });
      if (needsReobserve) {
        observeElements();
      }
    });
    mutationObserver.observe(document.body, { 
      childList: true, 
      subtree: true,
      attributes: true,
      attributeFilter: ['class']
    });

    // 2. Progreso de lectura de la página con requestAnimationFrame (máxima optimización)
    let ticking = false;
    const handleScrollProgress = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
          if (totalHeight > 0) {
            const progress = (window.scrollY / totalHeight) * 100;
            setScrollProgress(Math.min(100, Math.max(0, progress)));
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScrollProgress, { passive: true });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScrollProgress);
    };
  }, []);

  return { scrollProgress };
}

export default useScrollReveal;
