# CLAUDE.md — Alarma Inteligente Project Guide

Proyecto académico UCB (semestre 7 · Innovación, Desarrollo y Tecnología) que documenta el desarrollo de un **sistema de alarma inteligente**. Es una SPA de presentación visual con 19 páginas, animaciones elaboradas y tema oscuro.

---

## Stack

| Capa | Tecnología |
|------|-----------|
| Framework | React 19 + TypeScript |
| Routing | React Router DOM 7 |
| Animaciones | Framer Motion 12 |
| Estilos | Tailwind CSS 4 + inline `style` props |
| Íconos | Lucide React + react-icons |
| Build | Vite 7 |
| Deploy | Vercel |

---

## Estructura del Proyecto

```
src/
├── App.tsx              # Router + ScrollToTop
├── main.tsx             # Entry point
├── components/
│   ├── Navbar.tsx       # Nav con dropdowns (NAV_CONFIG array)
│   ├── Footer.tsx       # Footer 4-columnas con íconos sociales
│   └── MotionWrapper.tsx # Wrapper de fade-in reutilizable
└── pages/              # 19 páginas (ver mapa abajo)
```

### Mapa de Páginas

| Grupo Navbar | Ruta | Archivo |
|---|---|---|
| — | `/` | `Home.tsx` (hero, counter stats, timeline) |
| **Idea** | `/lluvia-de-ideas` | `LluviaIdeas.tsx` (word cloud, grid de techs) |
| **Idea** | `/ishikawa` | `Ishikawa.tsx` (cards expandibles por causa) |
| **Idea** | `/definicion-del-problema` | `DefinicionProblema.tsx` (causas + stats) |
| **Idea** | `/la-pregunta` | `LaPregunta.tsx` |
| **Idea** | `/objetivo` | `Objetivo.tsx` |
| **Idea** | `/modelo-smart` | `ModeloSMART.tsx` (S/M/A/R/T, modal preguntas) |
| **Idea** | `/modelo-part` | `ModeloPART.tsx` |
| **Idea** | `/smartsheet` | `SmartSheet.tsx` |
| **Analisis** | `/idef0` | `ModeloIDEF0.tsx` |
| **Analisis** | `/bpmn` | `BPMN.tsx` (elementos, diagrama, ventajas) |
| **Analisis** | `/caso-de-uso` | `CasoUso.tsx` |
| **Analisis** | `/recursos` | `Recursos.tsx` |
| **Analisis** | `/diagrama-tecnologico` | `DiagramaTecnologico.tsx` |
| **Datos** | `/notebook-lm` | `NotebookLM.tsx` |
| **Datos** | `/gapminder` | `GapminderData.tsx` (visualizaciones datos) |
| **Datos** | `/tableau` | `Tableau.tsx` (encuesta, iframes, hallazgos) |
| — | `/contactos` | `Contactos.tsx` (team cards con fotos) |
| — | `*` | `NotFound.tsx` |

---

## Sistema de Diseño

### Paleta de Colores (tema oscuro fijo)

```js
// Backgrounds
"#0f172a"   // fondo principal (slate-900)
"#080f1f"   // fondo oscuro alternado de secciones

// Texto
"#e2e8f0"   // texto principal
"#475569"   // texto secundario
"#334155"   // texto tenue

// Acentos (rotados por tarjeta/grupo)
const ACCENT_COLORS = [
  "#22d3ee",  // cyan
  "#34d399",  // emerald
  "#f59e0b",  // amber
  "#a78bfa",  // purple
  "#fb7185",  // rose
  "#38bdf8",  // sky
];
```

### Tipografía

```css
font-family: 'Syne', sans-serif;          /* primaria — títulos y cuerpo */
font-family: 'Space Mono', monospace;     /* estadísticas y datos */
/* Importadas en <style> tags dentro de componentes */
```

### Estilos — Reglas

- **Tailwind** para layout (`flex`, `grid`, `gap`, `p-*`, `text-*`)
- **Inline `style` prop** para colores, gradientes, sombras y efectos de brillo
- Efecto de brillo: `box-shadow: 0 0 20px ${color}40`
- Bordes con transparencia: `1px solid ${color}22`
- Gradientes: `linear-gradient(135deg, #06b6d4, #0e7490)`
- Sin CSS Modules; sin variables CSS globales

---

## Sistema de Animaciones (Framer Motion)

### Recetas de Animación Estándar

```tsx
// 1. Entrada de sección (fade-in con subida)
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.4 }}
/>

// 2. Animación al hacer scroll (whileInView)
<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, delay: i * 0.1 }}
  viewport={{ once: true }}
/>

// 3. Hover lift en tarjetas
<motion.div whileHover={{ y: -6 }} />

// 4. Salida
exit={{ opacity: 0, y: -20 }}
```

### Timings

- Transiciones estándar: **0.4–0.55s**
- Stagger por ítem: `i * 0.08` a `i * 0.1`
- Scroll: siempre con `viewport={{ once: true }}`
- `AnimatePresence` para cards expandibles y modals

### Hook de Contador (Home.tsx)

```ts
// useCounter — anima de 0 a target en ~2000ms
// Activado por IntersectionObserver cuando el elemento es visible
```

---

## Estructura de una Página Típica

```tsx
// 1. Imports (motion, icons, assets, useState)
// 2. Constantes de imágenes: const IMGS = { ... }
// 3. Constantes de datos: arrays de objetos
// 4. Sub-componentes internos (Card, Modal, etc.) — NO se extraen a archivos separados
// 5. Componente principal con secciones

export default function MiPagina() {
  return (
    <div style={{ background: "#0f172a", minHeight: "100vh", color: "#e2e8f0" }}>
      {/* Hero */}
      {/* Grid de tarjetas con animación whileInView */}
      {/* Secciones adicionales */}
    </div>
  );
}
```

### Layout Global (App.tsx)

```tsx
<div className="flex flex-col min-h-screen">
  <Navbar />
  <main className="grow">{/* página activa */}</main>
  <Footer />
</div>
```

---

## Patrones de Sección Existentes

| Patrón | Usado en | Descripción |
|--------|----------|-------------|
| **Hero + Grid** | DefinicionProblema, Tableau | Imagen hero con overlay, luego grid de tarjetas |
| **Cards Expandibles** | Ishikawa, LluviaIdeas, BPMN | Click expande detalle con AnimatePresence |
| **Preguntas / Modal** | ModeloSMART, LaPregunta | Contenedor centrado, modal con AnimatePresence |
| **Timeline / Pasos** | Home | Círculos numerados, flow vertical/horizontal, stagger |
| **Stats con Contador** | Home | `useCounter` + IntersectionObserver, fuente monospace |
| **Visualización de Datos** | Tableau, Gapminder | iframes embebidos o imágenes + metadata table |
| **Team Cards** | Contactos | Foto + nombre + íconos de contacto, hover glow |
| **Agrupación con Modal** | ModeloSMART | Botones que abren modal con detalle completo |

---

## Convenciones de Código

- **Componentes**: PascalCase (`ModeloSMART.tsx`)
- **Rutas**: kebab-case (`/modelo-smart`)
- **Variables**: camelCase; constantes UPPERCASE
- Sub-componentes definidos **dentro del mismo archivo** de la página
- Marcadores `// ✏️  EDITA AQUÍ` señalan contenido editable (datos de equipo, preguntas, objetivos)
- Secciones internas delimitadas con `// ─── Nombre ───`
- Sin carpetas `hooks/`, `utils/` o `constants/` separadas — cada página es autosuficiente

---

## Al Crear un Nuevo Módulo

1. Crear `src/pages/NombrePagina.tsx`
2. Añadir ruta en `App.tsx`
3. Añadir entrada en `NAV_CONFIG` dentro de `Navbar.tsx`
4. Seguir el patrón de la página más similar (ver tabla de patrones)
5. Usar los mismos `ACCENT_COLORS` rotativos
6. Fuente `Syne` importada en `<style>` tag dentro del componente
7. Todas las animaciones con `viewport={{ once: true }}`
8. Sub-componentes internos al mismo archivo, no extraer
