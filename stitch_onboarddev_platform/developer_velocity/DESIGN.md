---
name: Developer Velocity
colors:
  surface: '#111125'
  surface-dim: '#111125'
  surface-bright: '#37374d'
  surface-container-lowest: '#0c0c20'
  surface-container-low: '#1a1a2e'
  surface-container: '#1e1e32'
  surface-container-high: '#28283d'
  surface-container-highest: '#333348'
  on-surface: '#e2e0fc'
  on-surface-variant: '#c7c4d7'
  inverse-surface: '#e2e0fc'
  inverse-on-surface: '#2f2e44'
  outline: '#908fa0'
  outline-variant: '#464554'
  surface-tint: '#c0c1ff'
  primary: '#c0c1ff'
  on-primary: '#1000a9'
  primary-container: '#8083ff'
  on-primary-container: '#0d0096'
  inverse-primary: '#494bd6'
  secondary: '#d0bcff'
  on-secondary: '#3c0091'
  secondary-container: '#571bc1'
  on-secondary-container: '#c4abff'
  tertiary: '#4cd7f6'
  on-tertiary: '#003640'
  tertiary-container: '#009eb9'
  on-tertiary-container: '#002f38'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#e1e0ff'
  primary-fixed-dim: '#c0c1ff'
  on-primary-fixed: '#07006c'
  on-primary-fixed-variant: '#2f2ebe'
  secondary-fixed: '#e9ddff'
  secondary-fixed-dim: '#d0bcff'
  on-secondary-fixed: '#23005c'
  on-secondary-fixed-variant: '#5516be'
  tertiary-fixed: '#acedff'
  tertiary-fixed-dim: '#4cd7f6'
  on-tertiary-fixed: '#001f26'
  on-tertiary-fixed-variant: '#004e5c'
  background: '#111125'
  on-background: '#e2e0fc'
  surface-variant: '#333348'
typography:
  headline-xl:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-md:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
    letterSpacing: 0.02em
  label-sm:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
  headline-xl-mobile:
    fontFamily: Inter
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1280px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 40px
  stack-xs: 4px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 32px
  stack-xl: 64px
---

## Brand & Style
The design system is engineered for a high-fidelity, intelligent developer onboarding experience. It targets a sophisticated audience of software engineers and tech leads who value efficiency, technical precision, and modern aesthetics.

The visual direction is **Modern Corporate with Glassmorphism**. It utilizes a deep-space dark mode palette to reduce eye strain during long technical sessions, accented by vibrant, neon-inspired brand colors that signify energy and progression. The interface leverages translucent layers, subtle glows, and precise transitions to create a sense of depth and "living" software. It feels less like a static document and more like an advanced Integrated Development Environment (IDE).

## Colors
This design system operates on a multi-layered dark mode architecture. 

- **Primary & Secondary:** A high-energy Indigo-to-Violet gradient represents the "electric" nature of modern development. 
- **Accents:** Cyan is used for data visualization, technical highlights, and interactive progress indicators.
- **Surfaces:** Depth is created using three distinct dark tones. `#0f0f23` acts as the canvas, `#16162e` for navigational surfaces, and `#1a1a3e` for interactive glass containers.
- **Feedback:** Semantic colors (Success, Warning, Error) utilize high-saturation tones to remain legible against the dark background.

## Typography
The system uses **Inter** for all primary communication to ensure maximum legibility and a clean, modernist feel. To appeal to the developer persona, **JetBrains Mono** (or a system monospaced font) is introduced for technical labels, code snippets, and metadata.

- **Headlines:** Use tighter letter spacing and heavier weights for a commanding presence.
- **Body:** Generous line heights are maintained to ensure readability during documentation-heavy onboarding tasks.
- **Labels:** Monospaced fonts are reserved for status tags, version numbers, and CLI commands to provide a "terminal-inspired" aesthetic.

## Layout & Spacing
The layout follows a **Fluid Grid** model based on an 8px base unit. 

- **Desktop:** A 12-column grid with 24px gutters. Content is centered with a max-width of 1280px.
- **Tablet:** 8-column grid with 20px gutters.
- **Mobile:** 4-column grid with 16px gutters and 16px side margins.

Spacing should prioritize "stack" logic—using consistent vertical increments (16, 32, 64) to separate conceptual blocks of information. Information density should remain medium-high to reflect the tool's professional utility.

## Elevation & Depth
Depth is not communicated through traditional drop shadows, but through **Tonal Layering** and **Glassmorphism**.

- **Level 0 (Base):** `#0f0f23`. The foundation.
- **Level 1 (Sub-navigation/Sidebars):** `#16162e`. Used for persistent lateral elements.
- **Level 2 (Cards/Overlays):** `rgba(26, 26, 62, 0.8)` with a 10px backdrop blur. These elements should have a subtle 1px border of `rgba(255, 255, 255, 0.1)` to define edges against dark backgrounds.
- **Glows:** Primary interactive elements (like the current step in an onboarding flow) utilize a soft outer glow: `0px 0px 20px rgba(99, 102, 241, 0.15)`.

## Shapes
The shape language is "Soft-Tech." While the underlying grid is rigid and professional, the corners are rounded to feel approachable and modern.

- **Cards & Containers:** 12px radius. This provides a distinct containerized look for modules.
- **Interactive Elements:** Buttons and Inputs use an 8px radius to feel more precise and "tooled."
- **Status Indicators:** Chips and badges use pill-shaped (20px+) radii to contrast against the more rectangular layout elements.

## Components
- **Buttons:**
    - **Primary:** Uses the Primary Gradient with white text. 8px radius. Hover state should increase the brightness of the gradient.
    - **Secondary:** Ghost style with a 1px border of `#6366f1` and a subtle fill on hover.
- **Cards:** Glassmorphic containers. Headers within cards should have a subtle bottom border (`1px solid rgba(255,255,255,0.05)`).
- **Inputs:** Solid `#16162e` background with an 8px radius. Active state features a 1px `primary_color` border and a subtle Indigo glow.
- **Chips:** Monospaced font (`label-sm`). Backgrounds use low-opacity versions of semantic colors (e.g., Success is `rgba(16, 185, 129, 0.1)` with `#10b981` text).
- **Progress Bars:** Thin, 4px height tracks. Completed segments use the Primary Gradient; remaining segments use `#1a1a3e`.
- **Code Blocks:** `#0f0f23` background, 8px radius, with syntax highlighting optimized for high-contrast dark mode.