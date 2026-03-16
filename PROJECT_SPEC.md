# 🎯 Especificación del Proyecto: Web Premium para Restaurante con Eventos Musicales

> **Tipo de Proyecto:** Sitio web inmersivo y de alto impacto visual para un restaurante mediano-pequeño que realiza eventos musicales (DJs, bandas, noches temáticas).
>
> **Ubicación del Cliente:** Lima, Perú.
>
> **Objetivo Principal:** Replicar la experiencia visual premium de los clubs de clase mundial de Ibiza (UNVRS, Hï Ibiza, Ushuaïa) adaptada al contexto de un restaurante local que desea diferenciarse con una presencia digital de lujo.
>
> **Restricción Clave:** NO se requiere sistema de venta de tickets/entradas. Todo el presupuesto técnico se concentra en el impacto visual y la fluidez de las animaciones.

---

## 1. Referencias Visuales Analizadas

Las siguientes páginas fueron auditadas visualmente y sirven como norte creativo y técnico:

### 1.1 UNVRS (https://www.unvrs.com/es)
- **Estética:** Futurista, "Transmisión desde otra dimensión".
- **Hero:** Tipografía Sans-Serif Bold masiva ("WELCOME TO THE UNIVERSE") con posters de artistas inclinados y superpuestos al texto, creando profundidad 3D falsa.
- **Fondo:** Lienzo negro absoluto con partículas sutiles y degradados en movimiento.
- **Paleta:** Negro (#000000), Blanco (#FFFFFF). El color lo aportan las imágenes de los eventos.
- **Animaciones clave:**
  - Parallax scroll (tarjetas de artistas a velocidades diferentes).
  - Hover: tarjetas se escalan y cambian ángulo de inclinación.
  - Entrance: fade-in + slide-up con retraso escalonado.
  - Texto con corchetes animados en hover (`animate-text-bracket`).
- **Navegación:** Minimalista superior + sticky widget inferior con selector de fechas.

### 1.2 Hï Ibiza (https://www.hiibiza.com/es)
- **Estética:** Cyber-Luxe / Futurista.
- **Hero:** Tipografía Extra Bold mayúsculas centrada ("THE FUTURE OF CLUBBING") sobre mesh gradients fluidos y desenfocados que se mueven suavemente (púrpuras, cian, verde lima, magenta eléctrico).
- **Paleta:** Negro profundo base. Acentos: neón cian, verde lima, magenta. Botones: azul eléctrico.
- **Animaciones clave:**
  - Scroll: fade-in + slide-up para bloques de texto e imágenes.
  - Parallax: fondo del hero a velocidad diferente del contenido.
  - Carruseles horizontales suaves (sección "Club Residentes").
  - Transiciones de video en tarjetas de artistas.
- **Glassmorphism:** Botón de menú como píldora flotante con backdrop-blur.
- **Navegación:** Logo centrado + botón "Menú" glassmorphic a la derecha. Sticky header discreto.

### 1.3 Ushuaïa Experience (https://www.theushuaiaexperience.com/es/club/calendario)
- **Estética:** Premium Clubbing Experience, lujo minimalista con energía de festival.
- **Hero:** Tipografía sans-serif ultra-bold condensada ("CALENDAR") sobre fondo gris claro/blanco con máscara angular (forma de diamante).
- **Paleta:** Negro, Blanco, Gris claro. Acento: Rojo/Naranja vibrante (#E32B14) para CTAs.
- **Animaciones clave:**
  - Scroll refinado en tarjetas de eventos.
  - Microinteracciones: botones de filtro por mes con transiciones suaves de color (blanco ↔ negro) en hover.
  - Transiciones de página fluidas (probablemente GSAP).
- **Navegación:** Dual: menú superior global persistente + sub-navegación de filtros dentro del calendario. Botón de tickets omnipresente.

---

## 2. Stack Tecnológico Definido

### 2.1 Framework Principal
- **Next.js 14+ (App Router)**
- SSR/SSG híbrido para SEO perfecto (Google indexa menú, eventos, ubicación).
- Image optimization automático (`next/image`) para fotos de platos y artistas.
- Rutas dinámicas para páginas de eventos individuales (`/eventos/[slug]`).
- i18n nativo si se requiere ES/EN en el futuro.

### 2.2 Motor de Animación
- **GSAP (GreenSock) + ScrollTrigger** → Animaciones basadas en scroll: parallax, fade-in, slide-up, rotaciones, escala. Es el estándar de la industria para animaciones a 60 FPS.
- **Framer Motion** → Transiciones entre páginas (Page Transitions / Shared Layout), micro-interacciones de botones, y animaciones declarativas en componentes React.

### 2.3 Estilizado
- **Tailwind CSS** → Utility-first para maquetación rápida y consistente.
- **CSS Custom Properties** → Tokens de diseño (colores de marca, tipografías, spacing).
- **CSS Avanzado:** `mix-blend-mode`, `clip-path`, `backdrop-filter: blur()` (glassmorphism), `mask-image` para gradientes de fundido.

### 2.4 CMS (Gestión de Contenido)
- **Sanity.io (Headless CMS)** → Plan Free.
- Schemas personalizados: `Evento`, `Artista/DJ`, `PlatoDelMenu`, `Noticia`, `InfoDelLocal`.
- El dueño del restaurante puede subir flyers, cambiar precios del menú y agregar eventos sin tocar código.
- Integración directa con Next.js vía `next-sanity` + GROQ queries.
- Preview en tiempo real.

### 2.5 Base de Datos (Reservas y Contacto)
- **Supabase (PostgreSQL)** → Plan Free.
- Tablas: `reservas`, `contacto_formulario`, `newsletter_subscribers`.
- Auth opcional si se necesita panel de administración.
- Realtime para notificaciones de nuevas reservas.

### 2.6 Deployment
- **Vercel** → Plan Hobby (Free).
- Edge Network global (CDN automático).
- Preview deployments por branch.
- SSL automático.

---

## 3. Estructura de Páginas (Sitemap)

```
/                      → Home (hero cinematográfico con video/gradientes, próximos eventos destacados, CTA reservas)
/eventos               → Calendario/listado de eventos (filtrable por mes/tipo, tarjetas animadas)
/eventos/[slug]        → Página individual del evento (artista, lineup, horario, galería, enlace a reserva)
/menu                  → Carta del restaurante (categorías animadas: Entradas, Platos Fuertes, Cócteles, Postres)
/nosotros              → Historia del restaurante, equipo, concepto, filosofía
/galeria               → Fotos y videos de eventos pasados (grid masonry con lightbox animado)
/contacto              → Formulario de contacto + mapa embebido (Google Maps) + redes sociales + WhatsApp directo
/reservas              → Sistema de reserva de mesa (formulario → Supabase) con selección de fecha y hora
```

---

## 4. Arquitectura del Sistema

```
┌─────────────────────────────────────────────────────┐
│                   CLIENTE (Browser)                  │
│    Next.js 14 App Router + GSAP + Framer Motion      │
│              Tailwind CSS + Google Fonts              │
└──────────────────────┬──────────────────────────────┘
                       │
        ┌──────────────┼──────────────┐
        │              │              │
   ┌────▼───┐    ┌─────▼────┐  ┌─────▼──────────┐
   │ Sanity │    │ Supabase │  │   WhatsApp     │
   │  CMS   │    │(Reservas │  │  Business API  │
   │(Eventos│    │ Contacto │  │  (Opcional)    │
   │ Menú)  │    │Newsletter│  └────────────────┘
   └────────┘    └──────────┘
        │              │
   ┌────▼──────────────▼────┐
   │     Vercel Edge CDN    │
   │  (Deploy automático)   │
   └────────────────────────┘
```

---

## 5. Especificación de Animaciones por Sección

### 5.1 Hero (Página Principal)
| Elemento | Animación | Librería | Detalle |
|---|---|---|---|
| Tipografía gigante | Split text reveal | GSAP SplitText | Las letras aparecen una a una o por palabra con stagger de 0.05s |
| Imagen/video de fondo | Ken Burns lento | CSS animation | Zoom-in muy sutil de 1.0 a 1.05 en 20 segundos, en loop |
| Imágenes flotantes de platos | Parallax vertical | GSAP ScrollTrigger | Velocidad 0.5x respecto al scroll del usuario |
| CTA "Reserva tu mesa" | Pulse + glow | Framer Motion | Escala 1.0 → 1.05 con box-shadow animado |
| Flecha de scroll | Bounce infinito | CSS animation | translateY de 0 a 10px en loop |

### 5.2 Sección de Eventos
| Elemento | Animación | Librería | Detalle |
|---|---|---|---|
| Tarjetas de eventos | Staggered fade-in | GSAP ScrollTrigger | Aparecen de abajo hacia arriba con 0.15s de retraso entre cada una |
| Hover en tarjetas | Scale + overlay | Framer Motion + CSS | scale(1.03), overlay oscuro con texto de fecha revelado |
| Filtros de mes | Color transition | CSS transition | Background de transparente a sólido en 0.3s |
| Transición a detalle | Shared layout | Framer Motion layoutId | La tarjeta se expande a pantalla completa (morph) |

### 5.3 Sección de Menú
| Elemento | Animación | Librería | Detalle |
|---|---|---|---|
| Categorías | Horizontal scroll snap | CSS scroll-snap | Deslizamiento suave entre categorías |
| Platos individuales | Reveal on scroll | GSAP ScrollTrigger | Foto del plato aparece con clip-path expanding circle |
| Precios | Counter animation | Framer Motion | Los números "cuentan" de 0 al precio final |
| Imágenes de platos | Tilt on hover | GSAP | Rotación 3D sutil (rotateX/rotateY) siguiendo el cursor |

### 5.4 Navegación
| Elemento | Animación | Librería | Detalle |
|---|---|---|---|
| Header | Glassmorphism + hide/show | CSS + GSAP | backdrop-filter: blur(20px). Se oculta al bajar, reaparece al subir |
| Menú hamburguesa | Full-screen overlay | Framer Motion | Se expande desde el botón como un círculo que crece (clip-path circle) |
| Links del menú | Staggered slide-in | GSAP | Cada link entra desde la derecha con 0.1s de retraso |

### 5.5 Transiciones de Página (Global)
- Implementar con `framer-motion` `AnimatePresence` en el layout de Next.js.
- Al navegar: la página actual hace fade-out con slide hacia la izquierda (0.3s), la nueva página hace fade-in con slide desde la derecha (0.3s).
- Usar `layoutId` compartido para que las imágenes de eventos hagan "morph" entre la tarjeta del listado y la imagen del detalle.

---

## 6. Assets Requeridos del Cliente

### 6.1 Lo que el cliente DEBE entregar
- **Fotos en alta calidad** (mínimo 2000px de ancho) de:
  - Platos estrella (mínimo 8-10 fotos).
  - Cócteles de autor (mínimo 4-6 fotos).
  - Interior del local (mínimo 5 fotos: barra, salón, terraza, cocina, entrada).
  - Fotos de eventos pasados (si existen).
  - Logo del restaurante en formato vectorial (SVG, AI o EPS). Si no tiene vectorial, enviar PNG en la mayor resolución posible.
- **Flyers de eventos** en formato digital (JPG/PNG de alta resolución).
- **Textos:** Historia del restaurante, descripción del concepto, carta/menú con precios y descripciones.
- **Información de contacto:** Dirección, teléfono, WhatsApp, redes sociales, horarios.

### 6.2 Procesamiento de fotos rectangulares (responsabilidad del desarrollador)

El cliente entregará fotos rectangulares estándar. El desarrollador debe procesarlas así:

#### Para fotos de platos/cócteles (necesitan fondo transparente):
1. Usar **Photoroom** (web/app) o **Remove.bg** para eliminar el fondo automáticamente con IA.
2. Exportar en formato **WebP con transparencia** (menor peso que PNG).
3. Agregar sombras sutiles vía CSS (`drop-shadow`) en lugar de sombras pre-renderizadas.

#### Para fotos del local o eventos (se mantienen rectangulares):
1. Aplicar **gradientes de fundido** con CSS para integrarlas al fondo oscuro:
   ```css
   .foto-evento {
     mask-image: linear-gradient(to bottom, black 60%, transparent 100%);
     -webkit-mask-image: linear-gradient(to bottom, black 60%, transparent 100%);
   }
   ```
2. Usar **`mix-blend-mode: luminosity`** o **`screen`** para que se fusionen con los degradados de fondo.
3. Aplicar **`clip-path`** para recortes modernos (diamante, arco, asimétrico):
   ```css
   .foto-premium {
     clip-path: inset(5% 10% 5% 10% round 30px);
     transition: clip-path 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
   }
   .foto-premium:hover {
     clip-path: inset(0% 0% 0% 0% round 10px);
   }
   ```

### 6.3 Tipografías recomendadas (Google Fonts, gratuitas)
- **Display/Títulos:** `Clash Display`, `Syne`, `Space Grotesk`, o `Outfit` (peso 700-900, mayúsculas).
- **Cuerpo:** `Inter`, `Plus Jakarta Sans`, o `DM Sans` (peso 400-500).
- Cargar en formato `.woff2` para máximo rendimiento.

### 6.4 Videos de fondo (B-Roll)
- Si el cliente tiene video del local, procesarlo así:
  - Duración: **4-6 segundos** en loop perfecto (seamless loop).
  - **Sin audio.**
  - Gradación de color oscura (para que el texto blanco sea legible encima).
  - Formato: **WebM** (Chrome/Firefox) + **MP4** (Safari fallback).
  - Peso máximo: **2 MB** por video.
  - Resolución: 1920x1080 es suficiente; se reproducirá a pantalla completa con `object-fit: cover`.
- Si NO tiene video: usar mesh gradients animados con CSS como alternativa (ver sección de Hï Ibiza).

---

## 7. Paleta de Colores Sugerida

Basada en el análisis de las 3 referencias. Adaptar según la identidad del restaurante:

```css
:root {
  /* Base (Modo Oscuro - Predominante) */
  --color-bg-primary: #0A0A0A;       /* Negro casi absoluto */
  --color-bg-secondary: #141414;      /* Gris muy oscuro para secciones alternas */
  --color-bg-card: #1A1A1A;           /* Fondo de tarjetas */

  /* Texto */
  --color-text-primary: #FFFFFF;      /* Blanco puro */
  --color-text-secondary: #A0A0A0;    /* Gris medio para subtítulos */
  --color-text-muted: #666666;        /* Gris apagado para metadata */

  /* Acentos (Elegir UNO como color principal de marca) */
  --color-accent-warm: #E32B14;       /* Rojo/Naranja (estilo Ushuaïa) */
  --color-accent-cool: #00D4FF;       /* Cian neón (estilo Hï Ibiza) */
  --color-accent-gold: #C9A96E;       /* Dorado (si el restaurante es más elegante/clásico) */

  /* Glassmorphism */
  --glass-bg: rgba(255, 255, 255, 0.05);
  --glass-border: rgba(255, 255, 255, 0.1);
  --glass-blur: 20px;

  /* Gradientes */
  --gradient-hero: linear-gradient(135deg, #0A0A0A 0%, #1a0a2e 50%, #0A0A0A 100%);
  --gradient-card-hover: linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.8) 100%);
}
```

---

## 8. Estructura de Carpetas del Proyecto

```
/
├── app/
│   ├── layout.tsx                  # Layout global (fuentes, metadata, AnimatePresence)
│   ├── page.tsx                    # Home
│   ├── eventos/
│   │   ├── page.tsx                # Listado/Calendario de eventos
│   │   └── [slug]/
│   │       └── page.tsx            # Detalle del evento
│   ├── menu/
│   │   └── page.tsx                # Carta del restaurante
│   ├── nosotros/
│   │   └── page.tsx                # Sobre el restaurante
│   ├── galeria/
│   │   └── page.tsx                # Galería de fotos/videos
│   ├── contacto/
│   │   └── page.tsx                # Formulario + mapa
│   └── reservas/
│       └── page.tsx                # Formulario de reservas
├── components/
│   ├── layout/
│   │   ├── Header.tsx              # Navbar glassmorphic con hide/show
│   │   ├── Footer.tsx              # Footer con redes sociales
│   │   ├── MobileMenu.tsx          # Menú fullscreen animado
│   │   └── PageTransition.tsx      # Wrapper de AnimatePresence
│   ├── home/
│   │   ├── HeroSection.tsx         # Hero con video/gradient + tipografía split
│   │   ├── FeaturedEvents.tsx      # Eventos destacados con parallax
│   │   ├── MenuPreview.tsx         # Preview del menú con tilt hover
│   │   └── ReservationCTA.tsx      # CTA de reservas con pulse/glow
│   ├── events/
│   │   ├── EventCard.tsx           # Tarjeta de evento (con layoutId para morph)
│   │   ├── EventCalendar.tsx       # Calendario filtrable por mes
│   │   └── EventDetail.tsx         # Vista detallada del evento
│   ├── menu/
│   │   ├── MenuCategory.tsx        # Categoría con scroll-snap horizontal
│   │   └── MenuItem.tsx            # Item individual con reveal animation
│   ├── ui/
│   │   ├── Button.tsx              # Botón reutilizable con variantes
│   │   ├── Card.tsx                # Tarjeta base glassmorphic
│   │   ├── SectionTitle.tsx        # Título de sección con split text
│   │   └── ScrollReveal.tsx        # Wrapper de GSAP ScrollTrigger reutilizable
│   └── shared/
│       ├── ContactForm.tsx         # Formulario reutilizable (contacto/reservas)
│       └── SocialLinks.tsx         # Links de redes sociales
├── lib/
│   ├── sanity/
│   │   ├── client.ts               # Cliente de Sanity configurado
│   │   ├── queries.ts              # Queries GROQ para eventos, menú, etc.
│   │   └── schemas/
│   │       ├── evento.ts           # Schema: Evento musical
│   │       ├── artista.ts          # Schema: Artista/DJ
│   │       ├── platoMenu.ts        # Schema: Plato del menú
│   │       ├── categoriaMenu.ts    # Schema: Categoría de menú
│   │       └── infoRestaurante.ts  # Schema: Info general del local
│   ├── supabase/
│   │   ├── client.ts               # Cliente de Supabase
│   │   └── types.ts                # Tipos de las tablas (reservas, contacto)
│   └── animations/
│       ├── gsap-config.ts          # Configuración global de GSAP + registro de plugins
│       ├── scroll-animations.ts    # Funciones reutilizables de ScrollTrigger
│       └── text-animations.ts      # Split text, typewriter, etc.
├── hooks/
│   ├── useScrollAnimation.ts       # Hook de GSAP ScrollTrigger
│   ├── useParallax.ts              # Hook de parallax reutilizable
│   └── useTiltEffect.ts            # Hook de inclinación 3D al hover
├── public/
│   ├── videos/                     # Videos de fondo (WebM + MP4)
│   ├── images/                     # Imágenes estáticas optimizadas
│   └── fonts/                      # Fuentes .woff2 si no se usan Google Fonts
├── styles/
│   └── globals.css                 # Variables CSS, reset, utilidades globales
├── sanity/                         # Proyecto Sanity Studio (si se embede)
│   └── sanity.config.ts
├── tailwind.config.ts
├── next.config.ts
├── package.json
└── tsconfig.json
```

---

## 9. Schemas de Sanity CMS

### 9.1 Evento Musical
```typescript
{
  name: 'evento',
  title: 'Evento Musical',
  type: 'document',
  fields: [
    { name: 'titulo', type: 'string', title: 'Nombre del Evento' },
    { name: 'slug', type: 'slug', options: { source: 'titulo' } },
    { name: 'fecha', type: 'datetime', title: 'Fecha y Hora' },
    { name: 'descripcion', type: 'text', title: 'Descripción' },
    { name: 'flyer', type: 'image', title: 'Flyer/Poster del Evento' },
    { name: 'artistas', type: 'array', of: [{ type: 'reference', to: [{ type: 'artista' }] }] },
    { name: 'tipoEvento', type: 'string', options: { list: ['DJ Night', 'Banda en Vivo', 'Noche Temática', 'Brunch Musical', 'Otro'] } },
    { name: 'precioEntrada', type: 'string', title: 'Precio o "Entrada Libre"' },
    { name: 'destacado', type: 'boolean', title: '¿Mostrar en Home?' },
  ]
}
```

### 9.2 Artista/DJ
```typescript
{
  name: 'artista',
  title: 'Artista / DJ',
  type: 'document',
  fields: [
    { name: 'nombre', type: 'string' },
    { name: 'slug', type: 'slug', options: { source: 'nombre' } },
    { name: 'foto', type: 'image' },
    { name: 'generoMusical', type: 'string' },
    { name: 'bio', type: 'text' },
    { name: 'redesSociales', type: 'object', fields: [
      { name: 'instagram', type: 'url' },
      { name: 'spotify', type: 'url' },
      { name: 'soundcloud', type: 'url' },
    ]},
  ]
}
```

### 9.3 Plato del Menú
```typescript
{
  name: 'platoMenu',
  title: 'Plato del Menú',
  type: 'document',
  fields: [
    { name: 'nombre', type: 'string' },
    { name: 'descripcion', type: 'text' },
    { name: 'precio', type: 'number' },
    { name: 'foto', type: 'image' },
    { name: 'categoria', type: 'reference', to: [{ type: 'categoriaMenu' }] },
    { name: 'destacado', type: 'boolean', title: '¿Mostrar en Home?' },
    { name: 'disponible', type: 'boolean', title: '¿Disponible actualmente?' },
  ]
}
```

---

## 10. Costos Operativos Mensuales

| Servicio | Plan | Costo Mensual |
|---|---|---|
| Vercel (Hosting) | Hobby (Free) | **$0** |
| Sanity.io (CMS) | Free | **$0** |
| Supabase (DB + Auth) | Free | **$0** |
| GSAP / Framer Motion | Free (uso comercial web) | **$0** |
| Tailwind CSS | Open Source | **$0** |
| **Dominio .com o .pe** | Anual | **~$15-40/año** |
| **Correo corporativo** (Zoho Free o Google Workspace) | — | **$0 - $6/mes** |
| **TOTAL operación** | | **~$0 - $6/mes** |

> **Nota comercial:** Al cliente se le puede cobrar un fee mensual de mantenimiento de $30-$50 USD que cubra soporte, monitoreo, renovación de dominio y actualizaciones menores.

---

## 11. Criterios de Aceptación (Definition of Done)

- [ ] La web carga en menos de 3 segundos en conexión 4G.
- [ ] Todas las animaciones corren a 60 FPS en dispositivos móviles modernos.
- [ ] El diseño es 100% responsive (Mobile First → Tablet → Desktop).
- [ ] El dueño del restaurante puede crear/editar eventos y platos del menú desde Sanity Studio sin intervención técnica.
- [ ] Las imágenes se sirven en formato WebP con lazy loading.
- [ ] Los videos de fondo se pausan automáticamente cuando están fuera del viewport.
- [ ] El formulario de reservas envía datos a Supabase y notifica vía email o WhatsApp.
- [ ] SEO: Cada página tiene meta tags, Open Graph, y JSON-LD (LocalBusiness schema).
- [ ] La web obtiene un score de Lighthouse ≥ 90 en Performance, Accessibility y SEO.
- [ ] Las animaciones respetan `prefers-reduced-motion` del sistema operativo del usuario.

---

## 12. Orden de Implementación Sugerido

1. **Fase 0 — Setup (Día 1-2):**
   Inicializar Next.js, Tailwind, GSAP, Sanity, Supabase. Configurar Vercel.

2. **Fase 1 — Design System (Día 3-5):**
   Variables CSS, componentes UI base (Button, Card, SectionTitle), Header/Footer, PageTransition.

3. **Fase 2 — Home Page (Día 6-12):**
   HeroSection con video/gradientes + split text. FeaturedEvents con parallax. MenuPreview. ReservationCTA.

4. **Fase 3 — Eventos (Día 13-17):**
   Calendario filtrable. EventCard con animaciones. Página de detalle con shared layout transition.

5. **Fase 4 — Menú (Día 18-21):**
   Categorías con scroll-snap. Items con reveal animation. Integración con Sanity.

6. **Fase 5 — Páginas Secundarias (Día 22-26):**
   Nosotros, Galería (masonry + lightbox), Contacto (formulario + mapa), Reservas (Supabase).

7. **Fase 6 — Procesamiento de Assets (Día 27-29):**
   Recorte de fondos con IA (Photoroom), optimización de imágenes, compresión de videos.

8. **Fase 7 — QA y Optimización (Día 30-35):**
   Testing responsive, Lighthouse audit, `prefers-reduced-motion`, lazy loading, deploy final.
