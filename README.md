# Alturion — Landing Page

Landing page corporativa para **Alturion**, empresa colombiana de ingeniería integral especializada en infraestructura, energía, telecomunicaciones y tecnología. Sede principal en Ibagué, Tolima, con cobertura operativa en 16+ departamentos de Colombia.

**URL en vivo:** https://camiloluna9508.github.io/alturion-landing/

---

## Stack tecnológico

| Capa | Tecnología | Uso |
|---|---|---|
| Framework | React 19 | Componentes, estado, lazy loading |
| Build tool | Vite 8 | Dev server, bundling, code splitting |
| Estilos | Tailwind CSS 4 | Utility-first CSS, tema custom |
| Animaciones | Framer Motion | Scroll reveal, transiciones, AnimatePresence |
| Mapa interactivo | D3.js + GeoJSON | Mapa de Colombia con 33 departamentos |
| Hero background | shaders (WebGL) | Efectos Swirl, ChromaFlow, FlutedGlass, FilmGrain |
| Íconos | Lucide React | Íconos SVG consistentes |
| Fuentes | Inter + JetBrains Mono | Sans-serif para texto, monospace para datos técnicos |
| Deploy | gh-pages | GitHub Pages estático |

---

## Paleta de colores — "Deep Infrastructure"

| Rol | Nombre | HEX |
|---|---|---|
| Background base | Abyssal Navy | `#020B18` |
| Background secundario | Slate Depth | `#0A1628` |
| Superficie de cards | Carbon Glass | `#0F2035` |
| Acento primario | Electric Cyan | `#00D4FF` |
| Acento secundario | Signal Amber | `#F59E0B` |
| Texto principal | Ice White | `#F0F6FF` |
| Texto secundario | Steel Gray | `#8BA3BC` |
| Grid / líneas | Blueprint Line | `#1A3A5C` |

Lógica cromática: navy profundo evoca salas de control de ingeniería. Cyan señaliza interactividad y datos. Amber contraste cálido para highlights de energía. Juntos evocan paneles de control de obra, no folletos corporativos.

---

## Concepto visual

**"Blueprint in Motion"** — La metáfora de un plano de ingeniería que cobra vida. Elementos clave:

- **Grid blueprint SVG** de fondo persistente (líneas #1A3A5C, opacidad sutil)
- **Divisores técnicos** entre secciones con coordenadas y referencias tipo plano (`SEC-02 // VERTICALES — LAT 4.4389° N`)
- **Nomenclatura de ingeniería** en todo el sitio (fibra monomodo G.652D, Cat6A, SCADA, RETIE)
- **Fichas de especificaciones** en cada vertical (tolerancia, SLA, protocolos, normativa)
- **Badges de certificación** (ISO 9001:2015, ISO 45001:2018, NTC-RETIE, SG-SST)
- **Indicador de proyectos activos** con pulso verde en navbar (dashboard feel)
- **Coordenadas lat/lon** en el mapa interactivo

---

## Estructura de archivos

```
src/
├── App.jsx                           # Ensamblaje principal, lazy loading, Suspense
├── main.jsx                          # Entry point con ErrorBoundary
├── index.css                         # Tailwind + tema custom @theme
├── hooks/
│   └── useScrollReveal.js            # Hook para animaciones on-scroll
├── data/
│   ├── projects.js                   # 9 proyectos, stats, certificaciones
│   ├── services.js                   # 4 verticales con specs técnicas
│   ├── departmentProjects.js         # Proyectos por departamento + coordenadas
│   ├── contact.js                    # Datos de contacto centralizados
│   └── colombia.geo.json             # GeoJSON de 33 departamentos
├── components/
│   ├── ui/
│   │   ├── BlueprintGrid.jsx         # Grid SVG de fondo tipo plano
│   │   ├── TechDivider.jsx           # Divisor técnico entre secciones
│   │   ├── SectionBadge.jsx          # Badge numerado de sección
│   │   ├── Counter.jsx               # Contador numérico animado
│   │   ├── TextRoll.jsx              # Animación text-roll en botones
│   │   ├── WhatsAppButton.jsx        # Botón flotante de WhatsApp
│   │   ├── ErrorBoundary.jsx         # Catch de errores con fallback
│   │   ├── SectionSkeleton.jsx       # Skeleton de carga
│   │   └── LazyImage.jsx             # Imagen con blur placeholder
│   ├── layout/
│   │   ├── Navbar.jsx                # Navbar pill flotante + menú mobile + reloj
│   │   └── Footer.jsx                # Footer con estándares de operación
│   ├── sections/
│   │   ├── Hero.jsx                  # Hero con shaders WebGL animados
│   │   ├── About.jsx                 # Quiénes somos + imágenes
│   │   ├── Stats.jsx                 # Métricas con unidades técnicas
│   │   ├── Services.jsx              # 4 verticales con fichas de specs
│   │   ├── Projects.jsx              # Proyectos con filtro por vertical
│   │   ├── Commitment.jsx            # 3 pilares + badges certificación
│   │   └── Contact.jsx               # Formulario + datos de contacto
│   └── map/
│       └── ColombiaMap.jsx           # Mapa D3.js interactivo con panel lateral
```

---

## Secciones de la página

| # | Sección | Descripción |
|---|---|---|
| — | Hero | Shader animado WebGL, headline "Construimos la infraestructura...", CTAs con text-roll |
| 1 | Quiénes Somos | Descripción, imágenes, cards "Para quién" / "Respaldo" |
| — | Stats | 4 métricas con unidades (2,847+ km F.O, $18.000M+, 16+ dptos, 40+ proy) + barra de estándares |
| 2 | Verticales | 4 cards con imagen, specs técnicas, servicios profesionales transversales |
| 3 | Mapa | D3.js interactivo, click por departamento, panel con imágenes y métricas, coordenadas |
| 4 | Proyectos | Grid filtrable por vertical, 9 proyectos con imágenes y métricas |
| 5 | Compromiso | 3 pilares (Calidad, Seguridad, Sostenibilidad), badges de certificación |
| 6 | Contacto | Formulario + datos de contacto, botón mailto |
| — | Footer | Estándares de operación, contacto, verticales técnicas |
| — | WhatsApp | Botón flotante con mensaje predefinido a +57 311 552 6686 |

---

## Optimizaciones de producción

- **Code splitting**: React.lazy() para todas las secciones below-fold. Vendor chunks separados (react, framer-motion, d3, shaders)
- **Bundle principal**: 19 KB (vs 1,875 KB antes del split)
- **Lazy loading**: `loading="lazy"` en todas las imágenes
- **Error boundary**: Fallback branded si un componente crashea
- **SEO**: Meta description, Open Graph, Twitter Card, canonical URL, theme-color, robots.txt, sitemap.xml
- **Accesibilidad**: ARIA en menú mobile, skip-to-content, role/aria-label en mapa SVG, lista sr-only de departamentos
- **Favicon**: SVG branded con círculo AL cyan

---

## Lo que falta para terminar

### Prioritario
- [ ] **Imágenes reales de los proyectos** — Reemplazar las fotos de Unsplash por fotografías propias de obras de Alturion/SINERCOM. Esto cambiará completamente la credibilidad del sitio
- [ ] **Logo profesional** — Diseñar un logotipo real de Alturion para reemplazar el placeholder "AL" en navbar, favicon y footer
- [ ] **Imagen OG para redes sociales** — Crear imagen 1200x630px para previews de WhatsApp/LinkedIn/Facebook (`public/og-image.jpg`)
- [ ] **Formulario de contacto funcional** — Integrar con Formspree, SendGrid o backend propio para recibir mensajes reales
- [ ] **Shader en Chrome desktop 2K** — El efecto WebGL no renderiza correctamente en algunos monitores 2K con Chrome. Evaluar reemplazar con animación CSS pura como fallback

### Mejoras pendientes
- [ ] **Mapa interactivo completo** — Agregar coordenadas a todos los departamentos (solo 6 de 16 las tienen), agregar heatmap de densidad de proyectos
- [ ] **NIT de la empresa** — Actualizar el footer con el NIT real cuando esté disponible
- [ ] **Dominio propio** — Configurar alturion.com.co para apuntar al sitio (actualmente en GitHub Pages)
- [ ] **Analytics** — Integrar Google Analytics o Plausible para tracking de visitas
- [ ] **Número de WhatsApp** — Confirmar que el número +57 311 552 6686 es la línea de atención correcta
- [ ] **Contenido del formulario** — Agregar validación de campos (email válido, campos requeridos)
- [ ] **Velocidad de carga** — El paquete `shaders` pesa 2.1 MB. Evaluar si el efecto visual justifica el peso o usar alternativa CSS
- [ ] **Certificaciones** — Confirmar que los estándares listados (ISO 9001:2015, ISO 45001:2018, etc.) son los que la empresa realmente tiene
- [ ] **Especificaciones técnicas** — Validar datos de specs en las verticales (tolerancias, SLAs, protocolos) con el equipo técnico de Alturion

### Nice to have (futuro)
- [ ] Migración a TypeScript
- [ ] Animaciones de scroll más avanzadas (parallax en cards)
- [ ] Blog/Journal de proyectos
- [ ] Sección de equipo con perfiles
- [ ] Testimonios de clientes
- [ ] Versión en inglés
- [ ] PWA (manifest.json, service worker)
- [ ] CI/CD con GitHub Actions

---

## Comandos

```bash
npm run dev       # Servidor de desarrollo (localhost:5173)
npm run build     # Build de producción
npm run preview   # Preview del build
npm run deploy    # Build + deploy a GitHub Pages
```

---

## Créditos

- **Empresa:** Alturion — Ingeniería integral de nueva generación
- **GeoJSON:** [caticoa3/colombia_mapa](https://github.com/caticoa3/colombia_mapa) (Departamentos de Colombia 2018)
- **Imágenes placeholder:** [Unsplash](https://unsplash.com) (reemplazar con fotos propias)
