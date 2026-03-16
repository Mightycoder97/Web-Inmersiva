// Mock data for the restaurant website
// Replace with Sanity CMS data in production

export const restaurantInfo = {
  name: "La Bohemia",
  tagline: "Donde la gastronomía se fusiona con la música",
  description:
    "Una experiencia sensorial única en el corazón de Miraflores. Cocina de autor, cócteles artesanales y los mejores DJs de Lima se unen para crear noches inolvidables.",
  address: "Av. La Mar 1234, Miraflores",
  city: "Lima, Perú",
  phone: "+51 999 999 999",
  email: "info@labohemia.pe",
  whatsapp: "51999999999",
  schedule: {
    weekdays: "Lun – Jue: 12:00 – 23:00",
    weekends: "Vie – Sáb: 12:00 – 02:00",
    sunday: "Dom: 12:00 – 22:00",
  },
  social: {
    instagram: "https://instagram.com/labohemia",
    facebook: "https://facebook.com/labohemia",
    tiktok: "https://tiktok.com/@labohemia",
  },
};

export const mockEvents = [
  {
    id: "1",
    slug: "noche-electronica-vol-12",
    titulo: "Noche Electrónica Vol. 12",
    fecha: "2026-03-21T22:00:00",
    descripcion:
      "Una noche épica con los mejores DJs de la escena electrónica limeña. Música house, techno y progressive en un ambiente único.",
    flyer: "https://images.unsplash.com/photo-1571266028243-e4733b0f0bb0?w=800&q=80",
    artistas: ["DJ Armin", "DJ Luna", "DJ Pulse"],
    tipoEvento: "DJ Night",
    precioEntrada: "S/. 30",
    destacado: true,
  },
  {
    id: "2",
    slug: "jazz-under-stars",
    titulo: "Jazz Under the Stars",
    fecha: "2026-03-28T20:00:00",
    descripcion:
      "Disfruta de una velada mágica con jazz en vivo bajo las estrellas. Acompañado de nuestra carta de autor y cócteles especiales.",
    flyer: "https://images.unsplash.com/photo-1511192336575-5a79af67a629?w=800&q=80",
    artistas: ["The Lima Jazz Quartet", "Sandra Voz"],
    tipoEvento: "Banda en Vivo",
    precioEntrada: "Entrada Libre",
    destacado: true,
  },
  {
    id: "3",
    slug: "latin-beats-fiesta",
    titulo: "Latin Beats Fiesta",
    fecha: "2026-04-04T21:00:00",
    descripcion:
      "La mejor música latina, salsa, reggaetón y cumbia fusión. Una noche para bailar sin parar con DJ Carlos y artistas invitados.",
    flyer: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&q=80",
    artistas: ["DJ Carlos", "MC Fuego"],
    tipoEvento: "Noche Temática",
    precioEntrada: "S/. 25",
    destacado: true,
  },
  {
    id: "4",
    slug: "brunch-acustico",
    titulo: "Brunch Acústico Dominical",
    fecha: "2026-04-05T11:00:00",
    descripcion:
      "Relájate con música acústica en vivo mientras disfrutas de nuestro brunch buffet con las mejores opciones dulces y saladas de la casa.",
    flyer: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80",
    artistas: ["Duo Acústico Lima"],
    tipoEvento: "Brunch Musical",
    precioEntrada: "S/. 65 (incluye brunch)",
    destacado: false,
  },
  {
    id: "5",
    slug: "techno-underground",
    titulo: "Techno Underground Session",
    fecha: "2026-04-11T23:00:00",
    descripcion:
      "Sesión de techno underground para los amantes de los sonidos más oscuros y envolventes. Entrada limitada.",
    flyer: "https://images.unsplash.com/photo-1574391884720-bbc3740c59d1?w=800&q=80",
    artistas: ["DJ Darkwave", "Synthetik"],
    tipoEvento: "DJ Night",
    precioEntrada: "S/. 35",
    destacado: false,
  },
  {
    id: "6",
    slug: "noche-de-rock",
    titulo: "Noche de Rock Clásico",
    fecha: "2026-04-18T21:00:00",
    descripcion:
      "Los mejores covers de rock clásico en vivo. Desde Led Zeppelin hasta Queen, una noche de pura energía rock.",
    flyer: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=800&q=80",
    artistas: ["Rock Revival Band"],
    tipoEvento: "Banda en Vivo",
    precioEntrada: "S/. 20",
    destacado: false,
  },
];

export const menuCategories = [
  {
    id: "entradas",
    nombre: "Entradas",
    descripcion: "Para iniciar tu experiencia",
    items: [
      {
        id: "e1",
        nombre: "Ceviche Nikkei",
        descripcion: "Corvina fresca marinada en leche de tigre con toque de soya, jengibre y aceite de sésamo",
        precio: 48,
        foto: "https://images.unsplash.com/photo-1535399831218-d5bd36d1a6b3?w=600&q=80",
        destacado: true,
      },
      {
        id: "e2",
        nombre: "Tiradito de Salmón",
        descripcion: "Láminas de salmón premium con salsa de ají amarillo y chalaquita criolla",
        precio: 45,
        foto: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=600&q=80",
        destacado: false,
      },
      {
        id: "e3",
        nombre: "Causita de Pulpo",
        descripcion: "Causa limeña con pulpo al olivo, palta fresca y salsa huancaína",
        precio: 42,
        foto: "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=600&q=80",
        destacado: true,
      },
    ],
  },
  {
    id: "platos-fuertes",
    nombre: "Platos Fuertes",
    descripcion: "El corazón de nuestra cocina",
    items: [
      {
        id: "p1",
        nombre: "Lomo Saltado Premium",
        descripcion: "Lomo fino al wok con cebollas caramelizadas, tomate, papas nativas y arroz jazmín",
        precio: 58,
        foto: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=600&q=80",
        destacado: true,
      },
      {
        id: "p2",
        nombre: "Risotto de Mariscos",
        descripcion: "Arroz arborio cremoso con langostinos, conchas, calamares y azafrán",
        precio: 62,
        foto: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=600&q=80",
        destacado: false,
      },
      {
        id: "p3",
        nombre: "Pulpo a la Parrilla",
        descripcion: "Tentáculos de pulpo a la brasa con puré de camote morado y chimichurri de huacatay",
        precio: 68,
        foto: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=600&q=80",
        destacado: true,
      },
    ],
  },
  {
    id: "cocteles",
    nombre: "Cócteles de Autor",
    descripcion: "Mixología con alma peruana",
    items: [
      {
        id: "c1",
        nombre: "Pisco Bohemia",
        descripcion: "Pisco quebranta, maracuyá fresca, almíbar de hierba luisa y espuma de clara",
        precio: 35,
        foto: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=600&q=80",
        destacado: true,
      },
      {
        id: "c2",
        nombre: "Negroni Peruano",
        descripcion: "Gin artesanal peruano, Campari, vermut rojo y twist de naranja ahumada",
        precio: 38,
        foto: "https://images.unsplash.com/photo-1536935338788-846bb9981813?w=600&q=80",
        destacado: false,
      },
      {
        id: "c3",
        nombre: "Chicha Sour Fusion",
        descripcion: "Chicha morada reducida, pisco italia, limón, jarabe de canela y amargo de angostura",
        precio: 32,
        foto: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=600&q=80",
        destacado: true,
      },
    ],
  },
  {
    id: "postres",
    nombre: "Postres",
    descripcion: "El final perfecto",
    items: [
      {
        id: "d1",
        nombre: "Suspiro Limeño Deconstruido",
        descripcion: "Crema de manjar blanco, merengue italiano ahumado y polvo de canela",
        precio: 28,
        foto: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=600&q=80",
        destacado: true,
      },
      {
        id: "d2",
        nombre: "Volcán de Chocolate",
        descripcion: "Bizcocho de chocolate 70% cacao con corazón fundido y helado de vainilla bourbon",
        precio: 32,
        foto: "https://images.unsplash.com/photo-1541783245831-57d6fb0926d3?w=600&q=80",
        destacado: false,
      },
    ],
  },
];

export const galleryImages = [
  {
    id: "g1",
    src: "https://images.unsplash.com/photo-1566417713940-fe7c737a9ef2?w=800&q=80",
    alt: "Evento con DJ en vivo",
    category: "eventos",
  },
  {
    id: "g2",
    src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80",
    alt: "Interior del restaurante",
    category: "local",
  },
  {
    id: "g3",
    src: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80",
    alt: "Barra de cócteles",
    category: "local",
  },
  {
    id: "g4",
    src: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800&q=80",
    alt: "Noche de música electrónica",
    category: "eventos",
  },
  {
    id: "g5",
    src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80",
    alt: "Plato gourmet",
    category: "gastronomia",
  },
  {
    id: "g6",
    src: "https://images.unsplash.com/photo-1559329007-40df8a9345d8?w=800&q=80",
    alt: "Ambiente nocturno",
    category: "local",
  },
  {
    id: "g7",
    src: "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=800&q=80",
    alt: "Presentación de plato",
    category: "gastronomia",
  },
  {
    id: "g8",
    src: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&q=80",
    alt: "Público disfrutando del evento",
    category: "eventos",
  },
  {
    id: "g9",
    src: "https://images.unsplash.com/photo-1560964645-5296b5099677?w=800&q=80",
    alt: "Cóctel de autor",
    category: "gastronomia",
  },
  {
    id: "g10",
    src: "https://images.unsplash.com/photo-1578474846511-04ba529f0b88?w=800&q=80",
    alt: "Terraza del restaurante",
    category: "local",
  },
  {
    id: "g11",
    src: "https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?w=800&q=80",
    alt: "Banda en vivo",
    category: "eventos",
  },
  {
    id: "g12",
    src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80",
    alt: "Brunch dominical",
    category: "gastronomia",
  },
];

export const aboutContent = {
  historia: {
    titulo: "Nuestra Historia",
    texto:
      "Nacimos en 2019 con un sueño: crear un espacio donde la gastronomía peruana de autor y la música se fusionen en una experiencia sensorial única. En el corazón de Miraflores, transformamos un antiguo caserón en lo que hoy es La Bohemia, un lugar donde cada noche tiene su propia identidad sonora y cada plato cuenta una historia.",
  },
  concepto: {
    titulo: "Nuestro Concepto",
    texto:
      "No somos solo un restaurante. No somos solo un club. Somos una experiencia. Cada semana curamos una programación musical que va desde el jazz íntimo hasta las sesiones de techno más envolventes, siempre acompañado de nuestra cocina de autor que reinterpreta los sabores peruanos con técnicas contemporáneas.",
  },
  equipo: {
    titulo: "Nuestro Equipo",
    miembros: [
      {
        nombre: "Chef Marco Delgado",
        rol: "Chef Ejecutivo",
        foto: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=400&q=80",
        bio: "15 años de experiencia en cocina peruana de autor. Formado en Le Cordon Bleu.",
      },
      {
        nombre: "Andrea Huerta",
        rol: "Directora Musical",
        foto: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&q=80",
        bio: "Curadora de experiencias musicales. Conecta a los mejores artistas con nuestro espacio.",
      },
      {
        nombre: "José Rivas",
        rol: "Mixólogo Principal",
        foto: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
        bio: "Campeón nacional de coctelería 2023. Creador de nuestra carta de cócteles de autor.",
      },
    ],
  },
};
