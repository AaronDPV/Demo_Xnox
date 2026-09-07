export const SEDES_DATA = {
  santaAnita: {
    id: 'santaAnita',
    name: 'Santa Anita',
    tag: 'Lima Este Moderno',
    address: 'Av. Carretera Central 1280, Santa Anita',
    photo: '/assets/facade-santa-anita.jpg',
    mapUrl: 'https://maps.google.com/?q=Santa+Anita+Lima',
    features: [
      'Suites Temáticas con Jacuzzi Climatizado',
      'Cochera privada interna con portón automático',
      'Atención discreta las 24 Horas'
    ]
  },
  lince: {
    id: 'lince',
    name: 'Lince',
    tag: 'Zona Céntrica & Moderna',
    address: 'Av. Petit Thouars 2150, Lince',
    photo: '/assets/facade-lince.jpg',
    mapUrl: 'https://maps.google.com/?q=Lince+Lima',
    features: [
      'Edificio de estreno con suites de cristal y luces LED',
      'Consolas PS5 en 4K y saunas privados',
      'Ingreso discreto 24/7 y bar de autor'
    ]
  },
  sanIsidro: {
    id: 'sanIsidro',
    name: 'San Isidro',
    tag: 'Financiero & Exclusivo',
    address: 'Av. Javier Prado Este 1420, San Isidro',
    photo: '/assets/facade-san-isidro.jpg',
    mapUrl: 'https://maps.google.com/?q=San+Isidro+Lima',
    features: [
      'Torre contemporánea con máxima privacidad',
      'Master Suites con hidromasaje y cromoterapia',
      'Room service gourmet y coctelería 24H'
    ]
  },
  ate: {
    id: 'ate',
    name: 'Ate',
    tag: 'Lima Este Express',
    address: 'Av. Nicolás Ayllón 2450, Ate Vitarte',
    photo: '/assets/facade-ate.jpg',
    mapUrl: 'https://maps.google.com/?q=Ate+Lima',
    features: [
      'Suites Confort y VIP Jacuzzi desde S/ 45',
      'Estacionamiento techado y privado',
      'Recepción 24 horas y total discreción'
    ]
  },
  losOlivos: {
    id: 'losOlivos',
    name: 'Los Olivos',
    tag: 'Lima Norte Exclusivo',
    address: 'Av. Los Alisos 551 & Av. Naranjal, Los Olivos',
    photo: '/assets/facade-los-olivos.jpg',
    mapUrl: 'https://maps.google.com/?q=Los+Olivos+Lima',
    features: [
      'Suites Jacuzzi VIP y Gamer PS5 Ultimate',
      'Master Suite con Sauna Finlandés de Cristal',
      'Cochera interna 100% privada con portón eléctrico'
    ]
  },
  // Aliases y compatibilidad retroactiva
  miraflores: {
    id: 'miraflores',
    name: 'Miraflores',
    shortName: 'Miraflores',
    tag: 'Zona Exclusiva',
    address: 'Calle Bolognesi 601 / Av. 28 de Julio (a pasos del Malecón)',
    photo: '/assets/sede-miraflores.jpg',
    viewTagline: 'Fachada contemporánea a pasos del Malecón de Miraflores con cochera privada directa y portón automático.',
    mapUrl: 'https://maps.google.com/?q=Calle+Bolognesi+601+Miraflores+Lima',
    googleMapsEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124894.97461573443!2d-77.2341857027344!3d-11.976719099999983!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c988d6b8dc4f%3A0xf8b0688097cf25a9!2sHotel%20Xnox!5e0!3m2!1ses-419!2spe!4v1788745375323!5m2!1ses-419!2spe',
    phone: '01 4348268 / +51 936 793 821',
    schedule: 'Atención Continua 24 Horas / 365 Días',
    roomIds: ['jacuzzi', 'gamer', 'galaxy', 'confort'],
    badge: '4 Suites Disponibles',
    features: [
      'Suites Gamer VIP & Jacuzzi Climatizado',
      'Cochera interna 100% privada con portón eléctrico',
      'Cocktail Bar y Room Service 24 horas'
    ]
  },
  alisos: {
    id: 'alisos',
    name: 'Los Olivos (Los Alisos)',
    shortName: 'Los Alisos',
    tag: 'Lima Norte',
    address: 'Av. Los Alisos 551, Los Olivos',
    photo: '/assets/sede-alisos.png',
    viewTagline: 'Edificio vanguardista sobre Av. Los Alisos con acceso vehicular directo, discreción 24/7 y ambiente premium.',
    mapUrl: 'https://maps.google.com/?q=Av+Los+Alisos+551+Los+Olivos+Lima',
    googleMapsEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124875.35246890872!2d-77.0633246877831!3d-12.019079696773833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105cf810fd452d1%3A0x8db5001a627c2b53!2sHotel%20Xnox!5e0!3m2!1ses-419!2spe!4v1788745315541!5m2!1ses-419!2spe',
    phone: '01 4348268 / +51 936 793 821',
    schedule: 'Atención Continua 24 Horas / 365 Días',
    roomIds: ['jacuzzi', 'gamer', 'galaxy', 'confort'],
    badge: '4 Suites Disponibles',
    features: [
      'Consolas PS5 y Suite Jacuzzi desde S/99',
      'Estacionamiento directo con portón eléctrico',
      'Fácil acceso desde la Panamericana Norte'
    ]
  },
  naranjal: {
    id: 'naranjal',
    name: 'Los Olivos (Naranjal)',
    shortName: 'Naranjal',
    tag: 'Sauna & Relax',
    address: 'Av. Naranjal 1406, Los Olivos',
    photo: '/assets/sede-naranjal.png',
    viewTagline: 'Sede insignia de relax y spa en Lima Norte, equipada en exclusiva con la Master Suite Sauna Finlandés.',
    mapUrl: 'https://maps.google.com/?q=Av+Naranjal+1406+Los+Olivos+Lima',
    googleMapsEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124875.35246890872!2d-77.0633246877831!3d-12.019079696773833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105cf5baadd369d%3A0x37f6da6c0b640caf!2sHotel%20Xnox!5e0!3m2!1ses-419!2spe!4v1788745350090!5m2!1ses-419!2spe',
    phone: '01 4348268 / +51 936 793 821',
    schedule: 'Atención Continua 24 Horas / 365 Días',
    roomIds: ['sauna', 'jacuzzi', 'gamer', 'confort'],
    badge: 'Sauna Finlandés Exclusivo',
    features: [
      'Master Suite con Sauna Finlandés de Cristal',
      'Jacuzzi doble con cascada de agua',
      'Máxima discreción y servicio a la suite'
    ]
  },
  centro: {
    id: 'centro',
    name: 'Centro de Lima',
    shortName: 'Centro de Lima',
    tag: 'Zona Centro',
    address: 'Av. 28 de Julio 1032 (Frente al Parque de la Exposición)',
    photo: '/assets/sede-centro.jpg',
    viewTagline: 'Ubicación estratégica frente al Parque de la Exposición con cochera privada interna y conectividad total.',
    mapUrl: 'https://maps.google.com/?q=Av+28+de+Julio+1032+Lima',
    googleMapsEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124894.97461573443!2d-77.2341857027344!3d-11.976719099999983!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c9000c3735d3%3A0x7b2649cbed76f37d!2sHotel%20Xnox!5e0!3m2!1ses-419!2spe!4v1788745364767!5m2!1ses-419!2spe',
    phone: '01 4348268 / +51 936 793 821',
    schedule: 'Atención Continua 24 Horas / 365 Días',
    roomIds: ['gamer', 'galaxy', 'confort'],
    badge: '3 Suites Temáticas',
    features: [
      'Suites Gamer & Habitaciones Express desde S/45',
      'Frente al Parque de la Exposición / Estación Metro',
      'Atención continua y recepción 24/7'
    ]
  },
  'los-olivos-alisos': null,
  'los-olivos-naranjal': null,
  'centro-de-lima': null
};

// Asignar alias para navegación amigable por URL
SEDES_DATA['los-olivos-alisos'] = SEDES_DATA.alisos;
SEDES_DATA['los-olivos-naranjal'] = SEDES_DATA.naranjal;
SEDES_DATA['centro-de-lima'] = SEDES_DATA.centro;

export const MAIN_SEDES_LIST = [
  SEDES_DATA.miraflores,
  SEDES_DATA.alisos,
  SEDES_DATA.naranjal,
  SEDES_DATA.centro
];
