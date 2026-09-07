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
    tag: 'Zona Exclusiva',
    address: 'Calle Bolognesi 601 / Av. 28 de Julio (a pasos del Malecón)',
    photo: '/assets/sede-miraflores.jpg',
    mapUrl: 'https://maps.google.com/?q=Calle+Bolognesi+601+Miraflores+Lima',
    features: [
      'Suites Gamer VIP & Jacuzzi Climatizado',
      'Cochera interna 100% privada con portón eléctrico',
      'Cocktail Bar y Room Service 24 horas'
    ]
  },
  alisos: {
    id: 'alisos',
    name: 'Los Olivos (Los Alisos)',
    tag: 'Lima Norte',
    address: 'Av. Los Alisos 551, Los Olivos',
    photo: '/assets/sede-alisos.png',
    mapUrl: 'https://maps.google.com/?q=Av+Los+Alisos+551+Los+Olivos+Lima',
    features: [
      'Consolas PS5 y Suite Jacuzzi desde S/99',
      'Estacionamiento directo con portón eléctrico',
      'Fácil acceso desde la Panamericana Norte'
    ]
  },
  naranjal: {
    id: 'naranjal',
    name: 'Los Olivos (Naranjal)',
    tag: 'Sauna & Relax',
    address: 'Av. Naranjal 1406, Los Olivos',
    photo: '/assets/sede-naranjal.png',
    mapUrl: 'https://maps.google.com/?q=Av+Naranjal+1406+Los+Olivos+Lima',
    features: [
      'Master Suite con Sauna Finlandés de Cristal',
      'Jacuzzi doble con cascada de agua',
      'Máxima discreción y servicio a la suite'
    ]
  },
  centro: {
    id: 'centro',
    name: 'Centro de Lima',
    tag: 'Ubicación Céntrica',
    address: 'Av. 28 de Julio 1032 (Frente al Parque de la Exposición)',
    photo: '/assets/sede-centro.jpg',
    mapUrl: 'https://maps.google.com/?q=Av+28+de+Julio+1032+Lima',
    features: [
      'Suites Gamer & Habitaciones Express desde S/45',
      'Frente al Parque de la Exposición / Estación Metro',
      'Atención continua y recepción 24/7'
    ]
  }
};

export const MAIN_SEDES_LIST = [
  SEDES_DATA.miraflores,
  SEDES_DATA.alisos,
  SEDES_DATA.naranjal,
  SEDES_DATA.centro
];
