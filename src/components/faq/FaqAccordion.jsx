import React, { useState } from 'react';
import { FAQS_DATA } from '../../data/faqsData';

export function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleItem = (idx) => {
    setOpenIndex(prev => (prev === idx ? -1 : idx));
  };

  return (
    <section className="faq-section" id="faq">
      <div className="container">
        <div className="section-header reveal-on-scroll">
          <span className="section-tag">Dudas y Respuestas</span>
          <h2>Preguntas Frecuentes</h2>
          <p>Todo lo que necesitas saber antes de tu visita a Hotel XNOX Experience.</p>
        </div>

        <div className="faq-accordion reveal-on-scroll">
          {FAQS_DATA.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div 
                key={idx} 
                className={`faq-item ${isOpen ? 'open' : ''}`}
              >
                <button 
                  type="button" 
                  className="faq-question"
                  onClick={() => toggleItem(idx)}
                  aria-expanded={isOpen}
                  id={`faq-btn-${idx}`}
                  aria-controls={`faq-answer-${idx}`}
                >
                  <span className="faq-question-text">{faq.question}</span>
                  <span className="faq-icon" aria-hidden="true">+</span>
                </button>
                <div 
                  className="faq-answer"
                  id={`faq-answer-${idx}`}
                  role="region"
                  aria-labelledby={`faq-btn-${idx}`}
                >
                  <p className="faq-answer-text">{faq.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

