/**
 * HOTEL XNOX EXPERIENCE - JAVASCRIPT ENGINE
 * Handles: Booking calculator, WhatsApp prefilled link generator,
 * pricing switcher, TikTok/Reels preview modal, Instagram stories viewer, FAQ.
 */

document.addEventListener('DOMContentLoaded', () => {
  // Data Model for Suites & Pricing
  const SUITES_DATA = {
    gamer: {
      id: 'gamer',
      name: 'Suite Gamer (PlayStation 5)',
      category: 'gamer',
      hours4: 70,
      hours6: 95,
      pernocte: 140,
      thumb: 'assets/gamer-suite.jpg',
      badge: '🔥 Tendencia Viral TikTok',
      desc: 'Equipada con PlayStation 5, mandos duales, pantalla 65" 4K HDR, luces LED RGB sincronizadas y cama King size.'
    },
    jacuzzi: {
      id: 'jacuzzi',
      name: 'Suite Jacuzzi VIP',
      category: 'jacuzzi',
      hours4: 99,
      hours6: 130,
      pernocte: 190,
      thumb: 'assets/jacuzzi-suite.jpg',
      badge: '👑 Más Solicitada',
      desc: 'Tina de hidromasaje con luces de cromoterapia sumergidas, ambientación romántica, espejo panorámico y cama King.'
    },
    sauna: {
      id: 'sauna',
      name: 'Master Suite Sauna & Jacuzzi',
      category: 'sauna',
      hours4: 120,
      hours6: 150,
      pernocte: 250,
      thumb: 'assets/sauna-suite.jpg',
      badge: '💎 Suite Presidencial',
      desc: 'Circuito privado de sauna seco finlandés con cabina de cristal templado y jacuzzi de hidromasaje exclusivo.'
    },
    galaxy: {
      id: 'galaxy',
      name: 'Suite Galaxy Neón',
      category: 'jacuzzi',
      hours4: 80,
      hours6: 110,
      pernocte: 160,
      thumb: 'assets/galaxy-suite.jpg',
      badge: '✨ Experiencia Sensorial',
      desc: 'Techo proyector de galaxias y constelaciones ópticas, luces neón personalizables y sonido envolvente Bluetooth.'
    },
    confort: {
      id: 'confort',
      name: 'Habitación Ejecutiva Confort',
      category: 'confort',
      hours4: 45,
      hours6: 60,
      pernocte: 85,
      thumb: 'assets/lobby.jpg',
      badge: '⚡ Mejor Tarifa',
      desc: 'Diseño minimalista moderno, cama King, Smart TV streaming, baño privado de lujo y máxima privacidad discreta.'
    }
  };

  const SEDES_DATA = {
    miraflores: {
      name: 'Miraflores',
      address: 'Calle Bolognesi 601 (Cerca al Malecón)'
    },
    alisos: {
      name: 'Los Olivos - Los Alisos',
      address: 'Av. Los Alisos 551'
    },
    naranjal: {
      name: 'Los Olivos - Naranjal',
      address: 'Av. Naranjal 1406'
    },
    centro: {
      name: 'Centro de Lima',
      address: 'Av. 28 de Julio 1032 (Frente Parque Exposición)'
    }
  };

  const EXTRAS_DATA = {
    'pack-romantico': { name: 'Pack Romántico (Pétalos + Velas LED)', price: 40 },
    'vino-champagne': { name: 'Botella de Espumante / Vino', price: 50 },
    'gamer-snack': { name: 'Pack Gamer (Snacks + 2 Bebidas)', price: 30 },
    'cochera': { name: 'Cochera Privada Discreta', price: 0 }
  };

  const WHATSAPP_PHONE = '51936793821'; // Official XNOX WhatsApp contact

  // State
  let currentSede = 'miraflores';
  let currentModality = 'hours4'; // 'hours4', 'hours6', 'pernocte'
  let currentRoom = 'gamer';
  let currentExtras = [];
  let pricingTableModality = 'hours'; // 'hours' or 'pernocte'

  // DOM Elements - Wizard
  const sedeInputs = document.querySelectorAll('input[name="booking-sede"]');
  const modalityInputs = document.querySelectorAll('input[name="booking-modality"]');
  const roomInputs = document.querySelectorAll('input[name="booking-room"]');
  const extraInputs = document.querySelectorAll('input[name="booking-extra"]');
  const bookingDateInput = document.getElementById('booking-date');
  const bookingTimeInput = document.getElementById('booking-time');

  // Summary Elements
  const sumSedeEl = document.getElementById('summary-sede');
  const sumModalityEl = document.getElementById('summary-modality');
  const sumRoomEl = document.getElementById('summary-room');
  const sumRoomPriceEl = document.getElementById('summary-room-price');
  const sumExtrasContainerEl = document.getElementById('summary-extras-container');
  const sumTotalEl = document.getElementById('summary-total');
  const btnSubmitWhatsapp = document.getElementById('btn-submit-whatsapp');

  // Set default date to today
  if (bookingDateInput) {
    const today = new Date().toISOString().split('T')[0];
    bookingDateInput.value = today;
    bookingDateInput.min = today;
  }

  // =========================================================================
  // RESERVATION CALCULATOR ENGINE
  // =========================================================================
  function updateReservationCalculation() {
    // 1. Get Sede
    const checkedSede = document.querySelector('input[name="booking-sede"]:checked');
    if (checkedSede) currentSede = checkedSede.value;

    // 2. Get Modality
    const checkedModality = document.querySelector('input[name="booking-modality"]:checked');
    if (checkedModality) currentModality = checkedModality.value;

    // 3. Get Room
    const checkedRoom = document.querySelector('input[name="booking-room"]:checked');
    if (checkedRoom) currentRoom = checkedRoom.value;

    // 4. Get Extras
    currentExtras = [];
    document.querySelectorAll('input[name="booking-extra"]:checked').forEach(cb => {
      if (EXTRAS_DATA[cb.value]) {
        currentExtras.push(EXTRAS_DATA[cb.value]);
      }
    });

    // Calculate Room Price based on modality
    const roomInfo = SUITES_DATA[currentRoom] || SUITES_DATA.gamer;
    let roomPrice = 0;
    let modalityLabel = '4 Horas';

    if (currentModality === 'hours4') {
      roomPrice = roomInfo.hours4;
      modalityLabel = 'Estadía Corta (4 Horas)';
    } else if (currentModality === 'hours6') {
      roomPrice = roomInfo.hours6;
      modalityLabel = 'Estadía Corta (6 Horas)';
    } else {
      roomPrice = roomInfo.pernocte;
      modalityLabel = 'Pernocte (Noche Completa)';
    }

    // Calculate Extras Price
    let extrasTotal = 0;
    currentExtras.forEach(ext => extrasTotal += ext.price);

    const grandTotal = roomPrice + extrasTotal;

    // Update Room Radio Prices in DOM
    document.querySelectorAll('.room-radio-item').forEach(item => {
      const roomId = item.querySelector('input').value;
      const priceDisplay = item.querySelector('.room-radio-price');
      if (SUITES_DATA[roomId] && priceDisplay) {
        let p = SUITES_DATA[roomId][currentModality];
        priceDisplay.textContent = `S/ ${p}`;
      }
    });

    // Update Summary in DOM
    if (sumSedeEl) sumSedeEl.textContent = SEDES_DATA[currentSede]?.name || currentSede;
    if (sumModalityEl) sumModalityEl.textContent = modalityLabel;
    if (sumRoomEl) sumRoomEl.textContent = roomInfo.name;
    if (sumRoomPriceEl) sumRoomPriceEl.textContent = `S/ ${roomPrice}.00`;

    // Render Extras in summary
    if (sumExtrasContainerEl) {
      sumExtrasContainerEl.innerHTML = '';
      if (currentExtras.length === 0) {
        sumExtrasContainerEl.innerHTML = `
          <div class="summary-item-row" style="color: var(--text-gray-600); font-size: 0.8rem;">
            <span>Extras adicionales</span>
            <span>Ninguno seleccionado</span>
          </div>`;
      } else {
        currentExtras.forEach(ext => {
          const row = document.createElement('div');
          row.className = 'summary-item-row';
          row.innerHTML = `
            <span>+ ${ext.name}</span>
            <span style="color: var(--accent-gold)">${ext.price === 0 ? 'Gratis' : 'S/ ' + ext.price + '.00'}</span>
          `;
          sumExtrasContainerEl.appendChild(row);
        });
      }
    }

    // Update Total Amount
    if (sumTotalEl) sumTotalEl.textContent = `S/ ${grandTotal}.00`;

    // Update WhatsApp link href
    updateWhatsAppLink(roomInfo, modalityLabel, roomPrice, grandTotal);
  }

  function updateWhatsAppLink(roomInfo, modalityLabel, roomPrice, grandTotal) {
    if (!btnSubmitWhatsapp) return;

    const dateVal = bookingDateInput ? bookingDateInput.value : 'Hoy';
    const timeVal = bookingTimeInput ? bookingTimeInput.value : 'Por coordinar';
    const sedeName = SEDES_DATA[currentSede]?.name || currentSede;

    let extrasText = 'Ninguno';
    if (currentExtras.length > 0) {
      extrasText = currentExtras.map(e => `${e.name} (${e.price === 0 ? 'Gratis' : 'S/' + e.price})`).join(', ');
    }

    const message = 
`¡Hola Hotel XNOX! 👋 Deseo agendar una reserva desde la web oficial:

🏨 *Sede:* ${sedeName}
🛏️ *Habitación:* ${roomInfo.name}
⏱️ *Modalidad:* ${modalityLabel}
📅 *Fecha:* ${dateVal}
⏰ *Hora aprox:* ${timeVal}
✨ *Extras:* ${extrasText}
💰 *Total Cotizado:* S/ ${grandTotal}.00

¿Tienen disponibilidad para esta fecha y horario? Quedo atento a su confirmación. ¡Muchas gracias!`;

    const encodedMsg = encodeURIComponent(message);
    const waUrl = `https://api.whatsapp.com/send?phone=${WHATSAPP_PHONE}&text=${encodedMsg}`;
    btnSubmitWhatsapp.href = waUrl;
  }

  // Attach Event Listeners to Wizard inputs
  sedeInputs.forEach(input => input.addEventListener('change', updateReservationCalculation));
  modalityInputs.forEach(input => input.addEventListener('change', updateReservationCalculation));
  roomInputs.forEach(input => input.addEventListener('change', updateReservationCalculation));
  extraInputs.forEach(input => input.addEventListener('change', updateReservationCalculation));
  if (bookingDateInput) bookingDateInput.addEventListener('change', updateReservationCalculation);
  if (bookingTimeInput) bookingTimeInput.addEventListener('change', updateReservationCalculation);

  // Quick Bar in Hero
  const btnHeroQuick = document.getElementById('btn-hero-quick');
  if (btnHeroQuick) {
    btnHeroQuick.addEventListener('click', (e) => {
      e.preventDefault();
      const qSede = document.getElementById('quick-sede')?.value;
      const qMod = document.getElementById('quick-modality')?.value;

      if (qSede) {
        const targetRadio = document.querySelector(`input[name="booking-sede"][value="${qSede}"]`);
        if (targetRadio) targetRadio.checked = true;
      }
      if (qMod) {
        const targetRadio = document.querySelector(`input[name="booking-modality"][value="${qMod}"]`);
        if (targetRadio) targetRadio.checked = true;
      }

      updateReservationCalculation();

      const bookingSec = document.getElementById('agendar-reserva');
      if (bookingSec) {
        bookingSec.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  // =========================================================================
  // PRICING SECTION SWITCHER & FILTERS
  // =========================================================================
  const toggleBtnHours = document.getElementById('toggle-pricing-hours');
  const toggleBtnPernocte = document.getElementById('toggle-pricing-pernocte');
  const filterChips = document.querySelectorAll('.filter-chip');
  const suiteCards = document.querySelectorAll('.suite-card');

  function updatePricingCards() {
    suiteCards.forEach(card => {
      const roomId = card.dataset.roomId;
      const priceVal = card.querySelector('.price-amount');
      const priceUnit = card.querySelector('.price-unit');
      const priceLabel = card.querySelector('.price-label-small');

      if (SUITES_DATA[roomId] && priceVal && priceUnit) {
        if (pricingTableModality === 'hours') {
          priceVal.textContent = SUITES_DATA[roomId].hours4;
          priceUnit.textContent = '/ 4 Horas';
          if (priceLabel) priceLabel.textContent = 'Desde (Estadía Corta)';
        } else {
          priceVal.textContent = SUITES_DATA[roomId].pernocte;
          priceUnit.textContent = '/ Pernocte';
          if (priceLabel) priceLabel.textContent = 'Tarifa Noche Completa';
        }
      }
    });
  }

  if (toggleBtnHours && toggleBtnPernocte) {
    toggleBtnHours.addEventListener('click', () => {
      toggleBtnHours.classList.add('active');
      toggleBtnPernocte.classList.remove('active');
      pricingTableModality = 'hours';
      updatePricingCards();
    });

    toggleBtnPernocte.addEventListener('click', () => {
      toggleBtnPernocte.classList.add('active');
      toggleBtnHours.classList.remove('active');
      pricingTableModality = 'pernocte';
      updatePricingCards();
    });
  }

  // Filter chips for rooms
  filterChips.forEach(chip => {
    chip.addEventListener('click', () => {
      filterChips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      const category = chip.dataset.category;

      suiteCards.forEach(card => {
        if (category === 'all' || card.dataset.category === category) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // "Reservar esta Suite" buttons from pricing cards
  document.querySelectorAll('.btn-reserve-suite').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const targetRoom = btn.dataset.targetRoom;
      if (targetRoom) {
        const radio = document.querySelector(`input[name="booking-room"][value="${targetRoom}"]`);
        if (radio) {
          radio.checked = true;
          // Also set modality if active
          if (pricingTableModality === 'pernocte') {
            const pernocteRadio = document.querySelector('input[name="booking-modality"][value="pernocte"]');
            if (pernocteRadio) pernocteRadio.checked = true;
          }
          updateReservationCalculation();
        }
      }
      const bookingSec = document.getElementById('agendar-reserva');
      if (bookingSec) {
        bookingSec.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // =========================================================================
  // SOCIAL FEED: TIKTOK VIDEO & INSTAGRAM STORIES MODALS
  // =========================================================================
  const videoModal = document.getElementById('video-modal');
  const videoModalClose = document.getElementById('video-modal-close');
  const videoModalImg = document.getElementById('video-modal-img');
  const videoModalTitle = document.getElementById('video-modal-title');
  const videoModalViews = document.getElementById('video-modal-views');
  const videoModalLikes = document.getElementById('video-modal-likes');

  // TikTok card clicks
  document.querySelectorAll('.tiktok-card').forEach(card => {
    card.addEventListener('click', () => {
      const title = card.dataset.title;
      const views = card.dataset.views;
      const likes = card.dataset.likes;
      const img = card.dataset.img;

      if (videoModal && videoModalImg && videoModalTitle) {
        videoModalTitle.textContent = title || 'Experiencia Hotel XNOX';
        videoModalViews.textContent = views || '1.2M views';
        videoModalLikes.textContent = likes || '450K likes';
        videoModalImg.src = img || 'assets/reel-gamer.jpg';
        videoModal.classList.add('active');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  if (videoModalClose) {
    videoModalClose.addEventListener('click', () => {
      videoModal.classList.remove('active');
      document.body.style.overflow = '';
    });
  }

  if (videoModal) {
    videoModal.addEventListener('click', (e) => {
      if (e.target === videoModal) {
        videoModal.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  }

  // Instagram Story Circles click
  const storyModal = document.getElementById('story-modal');
  const storyModalClose = document.getElementById('story-modal-close');
  const storyModalImg = document.getElementById('story-modal-img');
  const storyModalTag = document.getElementById('story-modal-tag');

  document.querySelectorAll('.story-circle-item').forEach(item => {
    item.addEventListener('click', () => {
      const tag = item.dataset.storyTitle;
      const img = item.dataset.storyImg;

      if (storyModal && storyModalImg && storyModalTag) {
        storyModalTag.textContent = tag || 'XNOX Highlight';
        storyModalImg.src = img || 'assets/gamer-suite.jpg';
        storyModal.classList.add('active');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  if (storyModalClose) {
    storyModalClose.addEventListener('click', () => {
      storyModal.classList.remove('active');
      document.body.style.overflow = '';
    });
  }

  if (storyModal) {
    storyModal.addEventListener('click', (e) => {
      if (e.target === storyModal) {
        storyModal.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  }

  // =========================================================================
  // FAQ ACCORDION
  // =========================================================================
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    questionBtn.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');
      faqItems.forEach(i => i.classList.remove('open'));
      if (!isOpen) {
        item.classList.add('open');
      }
    });
  });

  // =========================================================================
  // NAVBAR SCROLL EFFECT & MOBILE MENU
  // =========================================================================
  const navbar = document.querySelector('.navbar');
  const mobileToggle = document.querySelector('.mobile-menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', () => {
      navLinks.classList.toggle('open');
    });

    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
      });
    });
  }

  // Run initial calculation
  updateReservationCalculation();
  updatePricingCards();
});
