# Die (Diane) Hu — Personal CV Website
# Design Token + Component Specification
# Version 1.0 | Creative Director: INTJ Framework | March 2026
# Status: PRODUCTION-READY BRIEF — No ambiguity permitted.

---

## OVERVIEW

This document is the single source of truth for all visual and interaction decisions.
Every CSS variable, class name, and component behavior is defined here.
Developers do not make visual judgment calls — they implement this spec.

**Tech Stack Assumption:** Vanilla HTML5 + CSS3 + minimal vanilla JS. No framework required.
**Font Loading:** Google Fonts (DM Sans, Source Serif 4, JetBrains Mono).
**Icons:** Lucide Icons (SVG, self-hosted or CDN).
**Animation:** CSS transitions + IntersectionObserver (no GSAP required).

---

## 1. COLOR TOKENS

### CSS Custom Properties — paste into `:root {}`

```css
:root {

  /* === PRIMARY PALETTE === */
  --color-primary-900: #0D3D5C;   /* darkest — rarely used, deep emphasis */
  --color-primary-800: #12527A;   /* dark primary */
  --color-primary-700: #1B6CA8;   /* PRIMARY BRAND — main CTAs, headings accent */
  --color-primary-600: #2480C2;   /* interactive states */
  --color-primary-500: #3A95D5;   /* links default */
  --color-primary-400: #6AB4E4;   /* links hover */
  --color-primary-300: #9CCFEE;   /* subtle tints */
  --color-primary-200: #C8E5F5;   /* very light tint backgrounds */
  --color-primary-100: #E8F4FB;   /* near-white tint */

  /* === SECONDARY PALETTE (Amber/Terracotta — ENFJ warmth) === */
  --color-secondary-900: #7A3A1A;
  --color-secondary-800: #A34D22;
  --color-secondary-700: #C4622D;   /* secondary accent, badges */
  --color-secondary-600: #D4845A;   /* SECONDARY BRAND — warm accent */
  --color-secondary-500: #E09A72;
  --color-secondary-400: #EAB590;
  --color-secondary-300: #F2CEAF;
  --color-secondary-200: #F8E5D4;
  --color-secondary-100: #FDF4EE;

  /* === ACCENT PALETTE (Sage Green — ecological) === */
  --color-accent-900: #1E3D2F;
  --color-accent-800: #2A5540;
  --color-accent-700: #3A7055;
  --color-accent-600: #4E8E6E;   /* ACCENT BRAND — tags, ecological signals */
  --color-accent-500: #65A882;
  --color-accent-400: #8AC09E;
  --color-accent-300: #B0D8BC;
  --color-accent-200: #D4EEDB;
  --color-accent-100: #EEF8F1;

  /* === NEUTRAL PALETTE === */
  --color-neutral-950: #141414;
  --color-neutral-900: #1E1E1E;
  --color-neutral-800: #2C2C2C;   /* body text primary */
  --color-neutral-700: #404040;
  --color-neutral-600: #5A5A5A;   /* secondary text */
  --color-neutral-500: #767676;   /* placeholder, metadata */
  --color-neutral-400: #9E9E9E;
  --color-neutral-300: #C4C4C4;   /* dividers */
  --color-neutral-200: #E0E0E0;   /* subtle borders */
  --color-neutral-100: #F0EEEA;   /* card backgrounds */
  --color-neutral-50:  #F8F6F2;   /* page background — warm off-white */
  --color-white:       #FFFFFF;

  /* === SEMANTIC TOKENS === */
  --color-bg-page:         var(--color-neutral-50);
  --color-bg-card:         var(--color-white);
  --color-bg-section-alt:  var(--color-primary-100);
  --color-bg-dark:         var(--color-primary-900);

  --color-text-primary:    var(--color-neutral-800);
  --color-text-secondary:  var(--color-neutral-600);
  --color-text-muted:      var(--color-neutral-500);
  --color-text-inverse:    var(--color-white);
  --color-text-accent:     var(--color-primary-700);
  --color-text-warm:       var(--color-secondary-700);

  --color-border-default:  var(--color-neutral-200);
  --color-border-strong:   var(--color-neutral-300);
  --color-border-accent:   var(--color-primary-400);

  /* === BADGE / STATUS COLORS === */
  --color-badge-journal:     var(--color-primary-700);     /* blue — journal articles */
  --color-badge-conference:  var(--color-accent-600);      /* green — conference papers */
  --color-badge-forthcoming: var(--color-secondary-600);   /* amber — accepted/forthcoming */
  --color-badge-inprogress:  var(--color-neutral-500);     /* gray — in progress */
  --color-badge-federal:     var(--color-primary-800);     /* dark blue — federal funding */
}
```

---

## 2. TYPOGRAPHY SYSTEM

### Font Loading (place in `<head>`)

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&family=Source+Serif+4:ital,opsz,wght@0,8..60,300;0,8..60,400;0,8..60,600;1,8..60,400&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
```

### Font Family Tokens

```css
:root {
  --font-sans:  'DM Sans', system-ui, -apple-system, sans-serif;
  --font-serif: 'Source Serif 4', Georgia, serif;
  --font-mono:  'JetBrains Mono', 'Fira Code', monospace;
}
```

### Font Usage Rules
- **DM Sans:** All headings (H1–H4), navigation, buttons, labels, UI elements, body text default
- **Source Serif 4:** Long-form bio paragraphs (About section), publication citations, pull quotes
- **JetBrains Mono:** Code snippets, technical tags/chips, skill tier labels, data badges

### Type Scale (rem — base 16px)

```css
:root {
  --text-xs:   0.75rem;    /* 12px — metadata, fine print */
  --text-sm:   0.875rem;   /* 14px — captions, secondary labels */
  --text-base: 1rem;       /* 16px — body text default */
  --text-lg:   1.125rem;   /* 18px — lead paragraphs, card body */
  --text-xl:   1.25rem;    /* 20px — section subheadings, card titles */
  --text-2xl:  1.5rem;     /* 24px — section subheadings H3 */
  --text-3xl:  1.875rem;   /* 30px — section headings H2 */
  --text-4xl:  2.25rem;    /* 36px — hero subtitle */
  --text-5xl:  3rem;       /* 48px — hero name */
  --text-6xl:  3.75rem;    /* 60px — hero tagline (desktop) */
}
```

### Line Height Tokens

```css
:root {
  --leading-none:    1;
  --leading-tight:   1.2;   /* headings H1, H2 */
  --leading-snug:    1.35;  /* H3, card titles */
  --leading-normal:  1.5;   /* UI elements, buttons */
  --leading-relaxed: 1.65;  /* body text */
  --leading-loose:   1.8;   /* serif long-form paragraphs */
}
```

### Font Weight Tokens

```css
:root {
  --weight-light:    300;
  --weight-regular:  400;
  --weight-medium:   500;
  --weight-semibold: 600;
  --weight-bold:     700;
}
```

### Letter Spacing Tokens

```css
:root {
  --tracking-tight:  -0.02em;  /* large display headings */
  --tracking-normal:  0em;
  --tracking-wide:    0.05em;  /* uppercase labels, nav items */
  --tracking-wider:   0.1em;   /* section category labels */
}
```

### Typographic Style Assignments

```css
/* Apply these as the baseline — components may override */

body {
  font-family: var(--font-sans);
  font-size: var(--text-base);
  font-weight: var(--weight-regular);
  line-height: var(--leading-relaxed);
  color: var(--color-text-primary);
  background-color: var(--color-bg-page);
}

h1 {
  font-size: var(--text-5xl);
  font-weight: var(--weight-bold);
  line-height: var(--leading-tight);
  letter-spacing: var(--tracking-tight);
}

h2 {
  font-size: var(--text-3xl);
  font-weight: var(--weight-semibold);
  line-height: var(--leading-tight);
}

h3 {
  font-size: var(--text-2xl);
  font-weight: var(--weight-semibold);
  line-height: var(--leading-snug);
}

h4 {
  font-size: var(--text-xl);
  font-weight: var(--weight-medium);
  line-height: var(--leading-snug);
}

p {
  font-size: var(--text-base);
  line-height: var(--leading-relaxed);
  margin-bottom: var(--space-4);
}

/* Responsive type scaling */
@media (max-width: 768px) {
  h1 { font-size: var(--text-4xl); }
  h2 { font-size: var(--text-2xl); }
  .hero__tagline { font-size: var(--text-3xl); }
}

@media (max-width: 480px) {
  h1 { font-size: var(--text-3xl); }
}
```

---

## 3. SPACING SCALE

**Base unit: 8px.** All spacing values are multiples of 8.

```css
:root {
  --space-0:   0;
  --space-1:   0.25rem;   /* 4px  — hairline gaps */
  --space-2:   0.5rem;    /* 8px  — tight internal padding */
  --space-3:   0.75rem;   /* 12px */
  --space-4:   1rem;      /* 16px — default element spacing */
  --space-5:   1.25rem;   /* 20px */
  --space-6:   1.5rem;    /* 24px — card padding */
  --space-8:   2rem;      /* 32px — section-level gap */
  --space-10:  2.5rem;    /* 40px */
  --space-12:  3rem;      /* 48px */
  --space-16:  4rem;      /* 64px — section padding desktop */
  --space-20:  5rem;      /* 80px */
  --space-24:  6rem;      /* 96px */
  --space-32:  8rem;      /* 128px — hero top padding */

  /* Section vertical padding */
  --section-padding-y-desktop: var(--space-24);   /* 96px */
  --section-padding-y-tablet:  var(--space-16);   /* 64px */
  --section-padding-y-mobile:  var(--space-12);   /* 48px */
}
```

---

## 4. BORDER RADIUS + SHADOW SYSTEM

### Border Radius

```css
:root {
  --radius-none:   0;
  --radius-sm:     0.25rem;   /* 4px  — tags, badges */
  --radius-md:     0.5rem;    /* 8px  — buttons, inputs */
  --radius-lg:     0.75rem;   /* 12px — cards */
  --radius-xl:     1rem;      /* 16px — large cards, hero elements */
  --radius-2xl:    1.5rem;    /* 24px — decorative containers */
  --radius-full:   9999px;    /* pills — skill tags, round badges */
}
```

### Shadow System

```css
:root {
  /* Elevation scale — from flat to floating */
  --shadow-none: none;

  --shadow-xs:
    0 1px 2px 0 rgba(13, 61, 92, 0.04);

  --shadow-sm:
    0 1px 3px 0 rgba(13, 61, 92, 0.06),
    0 1px 2px -1px rgba(13, 61, 92, 0.04);

  --shadow-md:
    0 4px 6px -1px rgba(13, 61, 92, 0.08),
    0 2px 4px -2px rgba(13, 61, 92, 0.05);

  --shadow-lg:
    0 10px 15px -3px rgba(13, 61, 92, 0.10),
    0 4px 6px -4px rgba(13, 61, 92, 0.06);

  --shadow-xl:
    0 20px 25px -5px rgba(13, 61, 92, 0.12),
    0 8px 10px -6px rgba(13, 61, 92, 0.06);

  --shadow-2xl:
    0 25px 50px -12px rgba(13, 61, 92, 0.20);

  /* Semantic shadows */
  --shadow-card:       var(--shadow-sm);
  --shadow-card-hover: var(--shadow-lg);
  --shadow-nav:        0 2px 16px 0 rgba(13, 61, 92, 0.10);
  --shadow-button:     0 2px 8px 0 rgba(27, 108, 168, 0.25);
}
```

---

## 5. BREAKPOINTS

```css
/*
  Mobile-first. All base styles are mobile.
  Use min-width media queries to scale up.

  sm:  640px  — large phones / small tablets
  md:  768px  — tablets portrait
  lg:  1024px — tablets landscape / small laptops
  xl:  1280px — desktops
  2xl: 1536px — large desktops
*/

:root {
  --bp-sm:  640px;
  --bp-md:  768px;
  --bp-lg:  1024px;
  --bp-xl:  1280px;
  --bp-2xl: 1536px;
}

/* Usage pattern in CSS:
@media (min-width: 640px)  { /* sm  * / }
@media (min-width: 768px)  { /* md  * / }
@media (min-width: 1024px) { /* lg  * / }
@media (min-width: 1280px) { /* xl  * / }
*/
```

---

## 6. GRID SYSTEM

```css
:root {
  --grid-columns:        12;
  --grid-gutter:         var(--space-6);    /* 24px desktop */
  --grid-gutter-mobile:  var(--space-4);    /* 16px mobile */
  --container-max:       1200px;
  --container-padding:   var(--space-6);    /* horizontal page padding */
}

/* Base container */
.container {
  width: 100%;
  max-width: var(--container-max);
  margin-inline: auto;
  padding-inline: var(--container-padding);
}

@media (min-width: 640px) {
  .container { padding-inline: var(--space-8); }
}

/* CSS Grid utility */
.grid {
  display: grid;
  gap: var(--grid-gutter);
}

/* Column span helpers */
.col-span-full   { grid-column: 1 / -1; }
.col-span-half   { grid-column: span 6; }
.col-span-third  { grid-column: span 4; }
.col-span-fourth { grid-column: span 3; }
.col-span-two-thirds { grid-column: span 8; }

/* Section grids — responsive */
.grid--2-col {
  grid-template-columns: 1fr;
}
@media (min-width: 768px) {
  .grid--2-col { grid-template-columns: repeat(2, 1fr); }
}

.grid--3-col {
  grid-template-columns: 1fr;
}
@media (min-width: 640px) {
  .grid--3-col { grid-template-columns: repeat(2, 1fr); }
}
@media (min-width: 1024px) {
  .grid--3-col { grid-template-columns: repeat(3, 1fr); }
}

.grid--4-col {
  grid-template-columns: repeat(2, 1fr);
}
@media (min-width: 1024px) {
  .grid--4-col { grid-template-columns: repeat(4, 1fr); }
}
```

---

## 7. COMPONENT SPECIFICATIONS

---

### 7.1 NAV — `.nav`

**Behavior:** Sticky top. Transparent on Hero, gains background + shadow on scroll.
**Height:** 64px desktop / 56px mobile.
**Z-index:** 1000.

```css
/* Structure */
.nav {
  position: sticky;
  top: 0;
  z-index: 1000;
  height: 64px;
  display: flex;
  align-items: center;
  background-color: transparent;
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
}

.nav--scrolled {
  background-color: rgba(248, 246, 242, 0.95);  /* --color-neutral-50 at 95% */
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  box-shadow: var(--shadow-nav);
}

.nav__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}

/* Logo / Name */
.nav__logo {
  font-family: var(--font-sans);
  font-size: var(--text-lg);
  font-weight: var(--weight-semibold);
  color: var(--color-text-primary);
  text-decoration: none;
  letter-spacing: var(--tracking-tight);
}

.nav__logo span {
  /* "Diane Hu" — highlight surname */
  color: var(--color-primary-700);
}

/* Desktop Links */
.nav__links {
  display: none;
  gap: var(--space-8);
  list-style: none;
  margin: 0;
  padding: 0;
}

@media (min-width: 768px) {
  .nav__links { display: flex; }
}

.nav__link {
  font-size: var(--text-sm);
  font-weight: var(--weight-medium);
  letter-spacing: var(--tracking-wide);
  text-transform: uppercase;
  color: var(--color-text-secondary);
  text-decoration: none;
  transition: color 0.2s ease;
}

.nav__link:hover,
.nav__link--active {
  color: var(--color-primary-700);
}

/* CV Button in Nav */
.nav__cta {
  display: none;
  padding: var(--space-2) var(--space-5);
  background-color: var(--color-primary-700);
  color: var(--color-text-inverse);
  border-radius: var(--radius-md);
  font-size: var(--text-sm);
  font-weight: var(--weight-semibold);
  text-decoration: none;
  transition: background-color 0.2s ease, transform 0.2s ease;
}

.nav__cta:hover {
  background-color: var(--color-primary-800);
  transform: translateY(-1px);
}

@media (min-width: 1024px) {
  .nav__cta { display: inline-flex; }
}

/* Hamburger — mobile */
.nav__hamburger {
  display: flex;
  flex-direction: column;
  gap: 5px;
  cursor: pointer;
  padding: var(--space-2);
  background: none;
  border: none;
}

@media (min-width: 768px) {
  .nav__hamburger { display: none; }
}

.nav__hamburger-line {
  display: block;
  width: 22px;
  height: 2px;
  background-color: var(--color-text-primary);
  transition: transform 0.3s ease, opacity 0.3s ease;
  border-radius: var(--radius-full);
}

/* Hamburger open state — JS adds .is-open to .nav__hamburger */
.nav__hamburger.is-open .nav__hamburger-line:nth-child(1) {
  transform: translateY(7px) rotate(45deg);
}
.nav__hamburger.is-open .nav__hamburger-line:nth-child(2) {
  opacity: 0;
}
.nav__hamburger.is-open .nav__hamburger-line:nth-child(3) {
  transform: translateY(-7px) rotate(-45deg);
}

/* Mobile Menu Drawer */
.nav__mobile-menu {
  display: none;
  position: fixed;
  top: 56px;
  left: 0;
  right: 0;
  background-color: var(--color-bg-page);
  border-bottom: 1px solid var(--color-border-default);
  padding: var(--space-6) var(--space-6) var(--space-8);
  flex-direction: column;
  gap: var(--space-6);
  box-shadow: var(--shadow-lg);
  z-index: 999;
}

.nav__mobile-menu.is-open { display: flex; }
```

**HTML Structure:**
```html
<nav class="nav" id="main-nav">
  <div class="container">
    <div class="nav__inner">
      <a href="#" class="nav__logo">Die <span>Hu</span></a>
      <ul class="nav__links">
        <li><a href="#research" class="nav__link">Research</a></li>
        <li><a href="#projects" class="nav__link">Projects</a></li>
        <li><a href="#publications" class="nav__link">Publications</a></li>
        <li><a href="#teaching" class="nav__link">Teaching</a></li>
        <li><a href="#about" class="nav__link">About</a></li>
        <li><a href="#contact" class="nav__link">Contact</a></li>
      </ul>
      <a href="cv.pdf" class="nav__cta" target="_blank">Download CV</a>
      <button class="nav__hamburger" aria-label="Toggle menu" aria-expanded="false">
        <span class="nav__hamburger-line"></span>
        <span class="nav__hamburger-line"></span>
        <span class="nav__hamburger-line"></span>
      </button>
    </div>
  </div>
  <div class="nav__mobile-menu" id="mobile-menu">
    <!-- Mobile links duplicated here -->
  </div>
</nav>
```

---

### 7.2 HERO — `.hero`

**Height:** 100vh minimum, content vertically centered.
**Background:** Warm off-white (`--color-bg-page`) with subtle animated SVG network/dot-grid pattern overlay at 6% opacity (primary-200 color). Pattern represents mobility network — on-brand.
**Layout:** Two-column on desktop (text left 55%, visual right 45%). Single column mobile.

```css
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  padding-top: 64px; /* nav height offset */
}

/* Background pattern overlay */
.hero__bg {
  position: absolute;
  inset: 0;
  background-image:
    radial-gradient(circle at 20% 80%, rgba(27, 108, 168, 0.06) 0%, transparent 50%),
    radial-gradient(circle at 80% 20%, rgba(212, 132, 90, 0.06) 0%, transparent 50%);
  pointer-events: none;
  z-index: 0;
}

/* SVG dot grid pattern — reference in HTML as <svg> or CSS background-image */
.hero__pattern {
  position: absolute;
  inset: 0;
  background-image: radial-gradient(circle, var(--color-primary-300) 1px, transparent 1px);
  background-size: 32px 32px;
  opacity: 0.12;
  pointer-events: none;
  z-index: 0;
}

.hero__inner {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-12);
  align-items: center;
  width: 100%;
}

@media (min-width: 1024px) {
  .hero__inner {
    grid-template-columns: 55fr 45fr;
    gap: var(--space-16);
  }
}

/* Left: Text Content */
.hero__content {}

.hero__eyebrow {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  font-family: var(--font-mono);
  font-size: var(--text-sm);
  font-weight: var(--weight-medium);
  color: var(--color-primary-600);
  letter-spacing: var(--tracking-wider);
  text-transform: uppercase;
  margin-bottom: var(--space-4);
}

.hero__eyebrow::before {
  content: '';
  display: block;
  width: 24px;
  height: 2px;
  background-color: var(--color-primary-600);
  border-radius: var(--radius-full);
}

.hero__name {
  font-size: var(--text-5xl);
  font-weight: var(--weight-bold);
  color: var(--color-text-primary);
  line-height: var(--leading-tight);
  letter-spacing: var(--tracking-tight);
  margin-bottom: var(--space-4);
}

.hero__name-chinese {
  font-size: var(--text-2xl);
  font-weight: var(--weight-light);
  color: var(--color-text-muted);
  display: block;
  letter-spacing: 0.08em;
  margin-top: var(--space-2);
}

/* TAGLINE — Typewriter target */
.hero__tagline {
  font-size: var(--text-4xl);
  font-weight: var(--weight-semibold);
  line-height: var(--leading-snug);
  letter-spacing: var(--tracking-tight);
  color: var(--color-primary-700);
  margin-bottom: var(--space-6);
  min-height: 2.5em; /* prevent layout jump during typewriter */
}

/* Typewriter cursor */
.hero__tagline::after {
  content: '|';
  animation: blink 0.8s infinite;
  color: var(--color-secondary-600);
  font-weight: var(--weight-light);
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50%       { opacity: 0; }
}

/* Hide cursor after typewriter finishes — JS adds .is-done */
.hero__tagline.is-done::after { display: none; }

@media (min-width: 768px) {
  .hero__tagline { font-size: var(--text-5xl); }
}

/* Descriptor line */
.hero__descriptor {
  font-size: var(--text-lg);
  color: var(--color-text-secondary);
  line-height: var(--leading-relaxed);
  max-width: 520px;
  margin-bottom: var(--space-8);
}

.hero__descriptor strong {
  color: var(--color-text-primary);
  font-weight: var(--weight-semibold);
}

/* CTA Buttons */
.hero__actions {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-4);
}

/* Right: Visual */
.hero__visual {
  display: none;
  position: relative;
}

@media (min-width: 1024px) {
  .hero__visual { display: block; }
}

.hero__visual-inner {
  position: relative;
  width: 100%;
  aspect-ratio: 1;
  max-width: 440px;
  margin-inline: auto;
}

/* Photo blob shape */
.hero__photo {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 60% 40% 55% 45% / 50% 55% 45% 50%;  /* organic blob */
  box-shadow: var(--shadow-2xl);
}

/* Floating stat cards — decorative data callouts on photo */
.hero__stat-card {
  position: absolute;
  background-color: var(--color-bg-card);
  border-radius: var(--radius-xl);
  padding: var(--space-3) var(--space-5);
  box-shadow: var(--shadow-xl);
  display: flex;
  flex-direction: column;
  min-width: 120px;
}

.hero__stat-card:nth-child(1) { top: 8%; right: -8%; }
.hero__stat-card:nth-child(2) { bottom: 20%; left: -8%; }

.hero__stat-value {
  font-size: var(--text-2xl);
  font-weight: var(--weight-bold);
  color: var(--color-primary-700);
  line-height: 1;
}

.hero__stat-label {
  font-size: var(--text-xs);
  color: var(--color-text-muted);
  margin-top: var(--space-1);
  font-family: var(--font-mono);
}
```

**Stat Cards Content:**
- Card 1: `4.0` / `PhD GPA at UCSB`
- Card 2: `$454K` / `Federal Projects`

**HTML Skeleton:**
```html
<section class="hero" id="hero">
  <div class="hero__bg"></div>
  <div class="hero__pattern"></div>
  <div class="container">
    <div class="hero__inner">
      <div class="hero__content reveal">
        <span class="hero__eyebrow">PhD Candidate, Geography · UCSB</span>
        <h1 class="hero__name">
          Die (Diane) Hu
          <span class="hero__name-chinese">胡蝶</span>
        </h1>
        <p class="hero__tagline" id="typewriter"></p>
        <p class="hero__descriptor">
          Geospatial data scientist at <strong>UCSB GeoTrans Lab</strong>,
          modeling human mobility, urban accessibility, and GeoAI
          to understand how people move — and who gets left behind.
        </p>
        <div class="hero__actions">
          <a href="#projects" class="btn btn--primary">View Research</a>
          <a href="cv.pdf" class="btn btn--outline" target="_blank">Download CV</a>
        </div>
      </div>
      <div class="hero__visual">
        <div class="hero__visual-inner">
          <img src="assets/photo.jpg" alt="Die (Diane) Hu" class="hero__photo">
          <div class="hero__stat-card">
            <span class="hero__stat-value">4.0</span>
            <span class="hero__stat-label">PhD GPA at UCSB</span>
          </div>
          <div class="hero__stat-card">
            <span class="hero__stat-value">$454K</span>
            <span class="hero__stat-label">Federal Projects</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
```

---

### 7.3 BUTTONS — `.btn`

```css
/* Base */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-2);
  padding: var(--space-3) var(--space-6);
  font-family: var(--font-sans);
  font-size: var(--text-base);
  font-weight: var(--weight-semibold);
  line-height: var(--leading-normal);
  border-radius: var(--radius-md);
  text-decoration: none;
  border: 2px solid transparent;
  cursor: pointer;
  transition:
    background-color 0.2s ease,
    color 0.2s ease,
    border-color 0.2s ease,
    transform 0.2s ease,
    box-shadow 0.2s ease;
  white-space: nowrap;
}

.btn:hover { transform: translateY(-2px); }
.btn:active { transform: translateY(0); }

/* Primary — solid blue */
.btn--primary {
  background-color: var(--color-primary-700);
  color: var(--color-text-inverse);
  box-shadow: var(--shadow-button);
}
.btn--primary:hover {
  background-color: var(--color-primary-800);
  box-shadow: var(--shadow-xl);
}

/* Outline — bordered */
.btn--outline {
  background-color: transparent;
  color: var(--color-primary-700);
  border-color: var(--color-primary-700);
}
.btn--outline:hover {
  background-color: var(--color-primary-100);
}

/* Secondary — warm amber */
.btn--secondary {
  background-color: var(--color-secondary-600);
  color: var(--color-text-inverse);
}
.btn--secondary:hover {
  background-color: var(--color-secondary-700);
}

/* Ghost — minimal */
.btn--ghost {
  background-color: transparent;
  color: var(--color-text-secondary);
  border-color: var(--color-border-default);
}
.btn--ghost:hover {
  background-color: var(--color-neutral-100);
  color: var(--color-text-primary);
}

/* Sizes */
.btn--sm {
  font-size: var(--text-sm);
  padding: var(--space-2) var(--space-4);
}
.btn--lg {
  font-size: var(--text-lg);
  padding: var(--space-4) var(--space-8);
}
```

---

### 7.4 RESEARCH INTERESTS — `.research`

**Layout:** 3-column grid desktop, 2-column tablet, 1-column mobile. 6 cards total.
**Section background:** `--color-bg-section-alt` (light blue tint).

```css
.research {
  padding-block: var(--section-padding-y-desktop);
  background-color: var(--color-bg-section-alt);
}

@media (max-width: 768px) {
  .research { padding-block: var(--section-padding-y-tablet); }
}

.research__grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-6);
  margin-top: var(--space-12);
}

@media (min-width: 640px) {
  .research__grid { grid-template-columns: repeat(2, 1fr); }
}

@media (min-width: 1024px) {
  .research__grid { grid-template-columns: repeat(3, 1fr); }
}

/* Individual Interest Card */
.research-card {
  background-color: var(--color-bg-card);
  border-radius: var(--radius-xl);
  padding: var(--space-8) var(--space-6);
  border: 1px solid var(--color-border-default);
  box-shadow: var(--shadow-card);
  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease,
    border-color 0.25s ease;
  cursor: default;
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
}

.research-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-card-hover);
  border-color: var(--color-primary-300);
}

.research-card__icon {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--color-primary-100);
  border-radius: var(--radius-lg);
  color: var(--color-primary-700);
  flex-shrink: 0;
}

.research-card__icon svg {
  width: 24px;
  height: 24px;
  stroke-width: 1.75;
}

.research-card__title {
  font-size: var(--text-lg);
  font-weight: var(--weight-semibold);
  color: var(--color-text-primary);
  line-height: var(--leading-snug);
}

.research-card__body {
  font-size: var(--text-sm);
  color: var(--color-text-secondary);
  line-height: var(--leading-relaxed);
  flex-grow: 1;
}

.research-card__link {
  font-size: var(--text-sm);
  font-weight: var(--weight-medium);
  color: var(--color-primary-600);
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: var(--space-1);
  transition: gap 0.2s ease, color 0.2s ease;
  align-self: flex-start;
  margin-top: auto;
}

.research-card__link:hover {
  color: var(--color-primary-700);
  gap: var(--space-2);
}
```

**6 Cards Content:**

| # | Icon (Lucide) | Title | Body |
|---|---|---|---|
| 1 | `navigation` | Human Mobility & Travel Behavior | Modeling how people move through urban systems using NHTS data, mobility motifs, and spatiotemporal pattern analysis. |
| 2 | `brain-circuit` | GeoAI & Spatial Machine Learning | Applying deep learning and AI to geospatial prediction tasks — from stormwater infrastructure to destination accessibility scoring. |
| 3 | `map-pin` | Urban Accessibility & Equity | Quantifying who can reach what — and who cannot. Research at the intersection of transportation, land use, and social equity. |
| 4 | `route` | Transportation Systems Modeling | Household VMT, vehicle fleet composition, and policy-relevant modeling of transportation demand and emissions. |
| 5 | `satellite` | Remote Sensing & Land Analysis | GEE, ENVI, and multispectral imagery for land cover mapping, ecological security, and environmental inventory at scale. |
| 6 | `trees` | Ecological Spatial Planning | InVEST modeling, MSPA analysis, and spatial planning frameworks for national and provincial territories in China. |

---

### 7.5 FEATURED PROJECTS — `.projects`

**Layout:** 3 cards, horizontal grid desktop. Each card is vertically structured.
**Background:** `--color-bg-page` (standard).
**Funding Badge:** Prominent, dark blue pill with dollar amount — this is a priority visual signal.

```css
.projects {
  padding-block: var(--section-padding-y-desktop);
  background-color: var(--color-bg-page);
}

.projects__header {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: var(--space-4);
  margin-bottom: var(--space-12);
}

.projects__view-all {
  font-size: var(--text-sm);
  font-weight: var(--weight-medium);
  color: var(--color-primary-600);
  text-decoration: none;
  white-space: nowrap;
}

.projects__grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-8);
}

@media (min-width: 768px) {
  .projects__grid { grid-template-columns: repeat(2, 1fr); }
}

@media (min-width: 1024px) {
  .projects__grid { grid-template-columns: repeat(3, 1fr); }
}

/* Project Card */
.project-card {
  background-color: var(--color-bg-card);
  border-radius: var(--radius-xl);
  overflow: hidden;
  border: 1px solid var(--color-border-default);
  box-shadow: var(--shadow-card);
  display: flex;
  flex-direction: column;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.project-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-card-hover);
}

/* Image / Visual Area */
.project-card__visual {
  width: 100%;
  aspect-ratio: 16 / 9;
  overflow: hidden;
  position: relative;
  background-color: var(--color-primary-100);
}

.project-card__visual img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
}

.project-card:hover .project-card__visual img {
  transform: scale(1.04);
}

/* Status badge overlaid on image */
.project-card__status {
  position: absolute;
  top: var(--space-3);
  right: var(--space-3);
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  font-weight: var(--weight-medium);
  padding: var(--space-1) var(--space-3);
  border-radius: var(--radius-full);
  color: var(--color-white);
  text-transform: uppercase;
  letter-spacing: var(--tracking-wide);
}

.project-card__status--published    { background-color: var(--color-badge-journal); }
.project-card__status--forthcoming  { background-color: var(--color-badge-forthcoming); }
.project-card__status--inprogress   { background-color: var(--color-badge-inprogress); }

/* Card Body */
.project-card__body {
  padding: var(--space-6);
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  flex-grow: 1;
}

/* FUNDING BADGE — Primary trust signal, do not minimize */
.project-card__funding {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  background-color: var(--color-primary-900);
  color: var(--color-white);
  border-radius: var(--radius-sm);
  padding: var(--space-1) var(--space-3);
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  font-weight: var(--weight-medium);
  letter-spacing: var(--tracking-wide);
  align-self: flex-start;
}

.project-card__funding-icon {
  font-size: 0.65rem;
  opacity: 0.8;
}

.project-card__title {
  font-size: var(--text-xl);
  font-weight: var(--weight-semibold);
  color: var(--color-text-primary);
  line-height: var(--leading-snug);
}

.project-card__institution {
  font-size: var(--text-sm);
  color: var(--color-text-muted);
  font-family: var(--font-mono);
}

.project-card__description {
  font-size: var(--text-sm);
  color: var(--color-text-secondary);
  line-height: var(--leading-relaxed);
  flex-grow: 1;
}

/* Tag Chips */
.project-card__tags {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
  margin-top: var(--space-2);
}

.tag {
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  font-weight: var(--weight-medium);
  padding: var(--space-1) var(--space-3);
  border-radius: var(--radius-full);
  background-color: var(--color-neutral-100);
  color: var(--color-text-secondary);
  border: 1px solid var(--color-border-default);
}

.tag--primary  { background-color: var(--color-primary-100); color: var(--color-primary-700); border-color: var(--color-primary-200); }
.tag--accent   { background-color: var(--color-accent-100); color: var(--color-accent-600); border-color: var(--color-accent-200); }
.tag--warm     { background-color: var(--color-secondary-100); color: var(--color-secondary-700); border-color: var(--color-secondary-200); }

/* Card Footer / Link */
.project-card__footer {
  padding: var(--space-4) var(--space-6);
  border-top: 1px solid var(--color-border-default);
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.project-card__venue {
  font-size: var(--text-xs);
  font-family: var(--font-mono);
  color: var(--color-text-muted);
}

.project-card__link {
  font-size: var(--text-sm);
  font-weight: var(--weight-medium);
  color: var(--color-primary-600);
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: var(--space-1);
  transition: color 0.2s ease, gap 0.2s ease;
}

.project-card__link:hover {
  color: var(--color-primary-700);
  gap: var(--space-2);
}
```

**3 Featured Project Cards:**

**Card 1:** Capabilities, Constraints & Daily Activity Space
- Funding: `UCSB GeoTrans Lab`
- Status: `forthcoming`
- Description: "Modeling where California households travel and why — using 2017 NHTS data and spatiotemporal motif analysis to reveal patterns of destination choice and mobility inequity."
- Tags: `GeoAI` `Mobility` `NHTS` `Accessibility`
- Venue: `AAG 2026 · Oral Presentation`

**Card 2:** Household VMT & Vehicle Fleet Structures
- Funding: `UCSB GeoTrans Lab`
- Status: `published`
- Description: "Analyzing how household vehicle fleet composition drives vehicle miles traveled — with direct implications for emissions modeling, energy policy, and transportation equity."
- Tags: `VMT` `Transportation` `Policy`
- Venue: `WCTR 2026 · Accepted`

**Card 3:** NCDOT DeepPipe — Stormwater Infrastructure
- Funding: `$404,403 · NCDOT`
- Status: `inprogress`
- Description: "Applying deep learning to predict stormwater pipeline failures across North Carolina's road network — a GeoAI approach to proactive infrastructure management at state scale."
- Tags: `Deep Learning` `Infrastructure` `Federal`
- Venue: `UNC Charlotte · NCDOT`

---

### 7.6 PUBLICATIONS — `.publications`

**Style:** Vertical timeline with left border line. Badge colors differentiate publication type.
**Background:** `--color-bg-section-alt`.

```css
.publications {
  padding-block: var(--section-padding-y-desktop);
  background-color: var(--color-bg-section-alt);
}

/* Tab Filter (optional, toggles visibility by category) */
.publications__filters {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-3);
  margin-bottom: var(--space-10);
}

.pub-filter {
  padding: var(--space-2) var(--space-5);
  border-radius: var(--radius-full);
  font-size: var(--text-sm);
  font-weight: var(--weight-medium);
  cursor: pointer;
  border: 1px solid var(--color-border-strong);
  background-color: transparent;
  color: var(--color-text-secondary);
  transition: all 0.2s ease;
}

.pub-filter:hover,
.pub-filter.is-active {
  background-color: var(--color-primary-700);
  color: var(--color-white);
  border-color: var(--color-primary-700);
}

/* Timeline Container */
.pub-timeline {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 0;
}

/* Vertical line */
.pub-timeline::before {
  content: '';
  position: absolute;
  left: 92px;         /* aligns with year labels */
  top: 0;
  bottom: 0;
  width: 2px;
  background: linear-gradient(
    to bottom,
    transparent,
    var(--color-primary-300) 10%,
    var(--color-primary-300) 90%,
    transparent
  );
}

@media (max-width: 640px) {
  .pub-timeline::before { left: 0; }
}

/* Single Publication Entry */
.pub-entry {
  display: grid;
  grid-template-columns: 92px 1fr;
  gap: var(--space-6);
  padding: var(--space-6) 0;
  position: relative;
}

@media (max-width: 640px) {
  .pub-entry {
    grid-template-columns: 1fr;
    padding-left: var(--space-6);
    border-left: 2px solid var(--color-primary-300);
  }
}

/* Year label */
.pub-entry__year {
  font-family: var(--font-mono);
  font-size: var(--text-sm);
  font-weight: var(--weight-semibold);
  color: var(--color-primary-600);
  padding-top: var(--space-3);
  text-align: right;
  padding-right: var(--space-6);
}

/* Timeline dot */
.pub-entry__year::after {
  content: '';
  position: absolute;
  left: 85px;    /* centered on the 2px line */
  top: 28px;
  width: 16px;
  height: 16px;
  border-radius: var(--radius-full);
  background-color: var(--color-bg-card);
  border: 3px solid var(--color-primary-500);
  z-index: 1;
}

@media (max-width: 640px) {
  .pub-entry__year::after { display: none; }
}

/* Entry content */
.pub-entry__content {
  background-color: var(--color-bg-card);
  border-radius: var(--radius-lg);
  padding: var(--space-5) var(--space-6);
  border: 1px solid var(--color-border-default);
  box-shadow: var(--shadow-xs);
  transition: box-shadow 0.2s ease;
}

.pub-entry__content:hover {
  box-shadow: var(--shadow-md);
}

.pub-entry__header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: var(--space-4);
  flex-wrap: wrap;
  margin-bottom: var(--space-3);
}

/* TYPE BADGE — color-coded */
.pub-badge {
  font-family: var(--font-mono);
  font-size: 0.625rem;    /* 10px */
  font-weight: var(--weight-medium);
  letter-spacing: var(--tracking-wider);
  text-transform: uppercase;
  padding: var(--space-1) var(--space-3);
  border-radius: var(--radius-full);
  color: var(--color-white);
  white-space: nowrap;
  flex-shrink: 0;
}

.pub-badge--journal      { background-color: var(--color-badge-journal); }
.pub-badge--conference   { background-color: var(--color-badge-conference); }
.pub-badge--forthcoming  { background-color: var(--color-badge-forthcoming); }
.pub-badge--presentation { background-color: var(--color-neutral-500); }

.pub-entry__title {
  font-size: var(--text-base);
  font-weight: var(--weight-semibold);
  color: var(--color-text-primary);
  line-height: var(--leading-snug);
  flex: 1;
}

.pub-entry__authors {
  font-family: var(--font-serif);
  font-size: var(--text-sm);
  color: var(--color-text-secondary);
  font-style: italic;
  margin-bottom: var(--space-2);
}

/* Highlight Diane's name in author list */
.pub-entry__authors strong {
  font-style: normal;
  font-weight: var(--weight-semibold);
  color: var(--color-text-primary);
  font-family: var(--font-sans);
}

.pub-entry__venue {
  font-size: var(--text-sm);
  color: var(--color-primary-600);
  font-weight: var(--weight-medium);
}

.pub-entry__actions {
  display: flex;
  gap: var(--space-3);
  margin-top: var(--space-3);
}

.pub-link {
  font-size: var(--text-xs);
  font-family: var(--font-mono);
  font-weight: var(--weight-medium);
  color: var(--color-text-secondary);
  text-decoration: none;
  border: 1px solid var(--color-border-default);
  padding: var(--space-1) var(--space-3);
  border-radius: var(--radius-sm);
  transition: all 0.2s ease;
}

.pub-link:hover {
  background-color: var(--color-primary-700);
  color: var(--color-white);
  border-color: var(--color-primary-700);
}
```

---

### 7.7 TEACHING — `.teaching`

**Layout:** Clean card list. Not a table (poor mobile UX).
**Background:** `--color-bg-page`.

```css
.teaching {
  padding-block: var(--section-padding-y-desktop);
  background-color: var(--color-bg-page);
}

.teaching__grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-4);
  margin-top: var(--space-10);
}

@media (min-width: 768px) {
  .teaching__grid { grid-template-columns: repeat(2, 1fr); }
}

/* Course Card */
.course-card {
  background-color: var(--color-bg-card);
  border-radius: var(--radius-lg);
  padding: var(--space-6);
  border: 1px solid var(--color-border-default);
  display: grid;
  grid-template-columns: auto 1fr;
  gap: var(--space-4);
  align-items: start;
  transition: box-shadow 0.2s ease, border-color 0.2s ease;
}

.course-card:hover {
  box-shadow: var(--shadow-md);
  border-color: var(--color-primary-200);
}

/* Role indicator dot */
.course-card__role-dot {
  width: 10px;
  height: 10px;
  border-radius: var(--radius-full);
  margin-top: 6px;
  flex-shrink: 0;
}

.course-card__role-dot--ta { background-color: var(--color-primary-500); }
.course-card__role-dot--instructor { background-color: var(--color-secondary-600); }

.course-card__code {
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  font-weight: var(--weight-medium);
  color: var(--color-primary-600);
  letter-spacing: var(--tracking-wide);
  text-transform: uppercase;
  margin-bottom: var(--space-1);
}

.course-card__name {
  font-size: var(--text-base);
  font-weight: var(--weight-semibold);
  color: var(--color-text-primary);
  margin-bottom: var(--space-2);
}

.course-card__meta {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-3);
}

.course-card__meta-item {
  font-size: var(--text-xs);
  color: var(--color-text-muted);
  display: flex;
  align-items: center;
  gap: var(--space-1);
}

/* Role label — TA vs Instructor of Record */
.course-card__role-label {
  font-size: var(--text-xs);
  font-family: var(--font-mono);
  padding: 2px var(--space-2);
  border-radius: var(--radius-sm);
}

.course-card__role-label--ta {
  background-color: var(--color-primary-100);
  color: var(--color-primary-700);
}

.course-card__role-label--instructor {
  background-color: var(--color-secondary-100);
  color: var(--color-secondary-700);
}

/* Teaching philosophy block */
.teaching__philosophy {
  margin-top: var(--space-12);
  padding: var(--space-8) var(--space-8);
  background-color: var(--color-primary-100);
  border-radius: var(--radius-xl);
  border-left: 4px solid var(--color-primary-700);
  max-width: 720px;
  margin-inline: auto;
}

.teaching__philosophy p {
  font-family: var(--font-serif);
  font-size: var(--text-lg);
  line-height: var(--leading-loose);
  color: var(--color-text-primary);
  margin: 0;
}
```

---

### 7.8 SKILLS — `.skills`

**Design principle:** Three-tier visual hierarchy. Tier 1 is large, prominent pills. Tier 2 is medium. Tier 3 is smaller, understated.
**Layout:** Grouped by category, each category a labeled section.
**Background:** `--color-bg-section-alt`.

```css
.skills {
  padding-block: var(--section-padding-y-desktop);
  background-color: var(--color-bg-section-alt);
}

.skills__categories {
  display: flex;
  flex-direction: column;
  gap: var(--space-10);
  margin-top: var(--space-12);
}

.skill-category {}

.skill-category__label {
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  font-weight: var(--weight-medium);
  letter-spacing: var(--tracking-wider);
  text-transform: uppercase;
  color: var(--color-text-muted);
  margin-bottom: var(--space-4);
}

.skill-category__tags {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-3);
  align-items: center;
}

/* TIER 1 — Core expertise, daily tools */
.skill-tag--tier1 {
  font-family: var(--font-sans);
  font-size: var(--text-base);
  font-weight: var(--weight-semibold);
  padding: var(--space-3) var(--space-6);
  border-radius: var(--radius-full);
  background-color: var(--color-primary-700);
  color: var(--color-white);
  box-shadow: var(--shadow-sm);
  letter-spacing: var(--tracking-normal);
}

/* TIER 2 — Proficient, regularly used */
.skill-tag--tier2 {
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  font-weight: var(--weight-medium);
  padding: var(--space-2) var(--space-5);
  border-radius: var(--radius-full);
  background-color: var(--color-bg-card);
  color: var(--color-primary-700);
  border: 1.5px solid var(--color-primary-300);
}

/* TIER 3 — Familiar, supporting tools */
.skill-tag--tier3 {
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  font-weight: var(--weight-regular);
  padding: var(--space-1) var(--space-4);
  border-radius: var(--radius-full);
  background-color: transparent;
  color: var(--color-text-secondary);
  border: 1px solid var(--color-border-default);
}
```

**Skill Tier Assignments:**

| Tier | Skills |
|---|---|
| Tier 1 (Core) | Python, R, ArcGIS, QGIS, GEE |
| Tier 2 (Proficient) | SQL, Git, HPC/Linux, ENVI, Jupyter, Fragstats, AutoCAD |
| Tier 3 (Familiar) | CPLEX, Adobe Illustrator, Photoshop, SPSS, InVEST/MSPA |

**Category Labels:** `Geospatial & Remote Sensing` / `Programming & Data` / `Computation & Infrastructure` / `Design & Visualization`

---

### 7.9 ABOUT — `.about`

**Layout:** Two-column desktop (text 60%, photo 40%). Stacked mobile.
**Background:** `--color-bg-page`.
**Typography:** Body in Source Serif 4 for warmth and readability.

```css
.about {
  padding-block: var(--section-padding-y-desktop);
  background-color: var(--color-bg-page);
}

.about__inner {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-16);
  align-items: start;
}

@media (min-width: 1024px) {
  .about__inner {
    grid-template-columns: 60fr 40fr;
  }
}

/* Left: Text */
.about__text {}

.about__section-label {
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  font-weight: var(--weight-medium);
  letter-spacing: var(--tracking-wider);
  text-transform: uppercase;
  color: var(--color-secondary-600);
  margin-bottom: var(--space-3);
}

.about__heading {
  font-size: var(--text-3xl);
  font-weight: var(--weight-semibold);
  color: var(--color-text-primary);
  line-height: var(--leading-tight);
  margin-bottom: var(--space-8);
}

.about__body {
  font-family: var(--font-serif);
  font-size: var(--text-lg);
  line-height: var(--leading-loose);
  color: var(--color-text-primary);
}

.about__body p {
  margin-bottom: var(--space-6);
}

/* Pull Quote highlight */
.about__quote {
  border-left: 4px solid var(--color-secondary-500);
  padding: var(--space-4) var(--space-6);
  margin: var(--space-8) 0;
  background-color: var(--color-secondary-100);
  border-radius: 0 var(--radius-lg) var(--radius-lg) 0;
}

.about__quote p {
  font-family: var(--font-serif);
  font-size: var(--text-xl);
  font-weight: var(--weight-regular);
  font-style: italic;
  color: var(--color-secondary-800);
  margin: 0;
  line-height: var(--leading-relaxed);
}

/* Language / personal tag line */
.about__tagline {
  font-family: var(--font-mono);
  font-size: var(--text-sm);
  color: var(--color-text-muted);
  margin-top: var(--space-8);
  display: flex;
  gap: var(--space-4);
  flex-wrap: wrap;
}

.about__tagline-item::before {
  content: '→ ';
  color: var(--color-primary-400);
}

/* Right: Photo + Details */
.about__visual {
  display: flex;
  flex-direction: column;
  gap: var(--space-6);
  position: sticky;
  top: 96px;
}

.about__photo-wrap {
  position: relative;
}

.about__photo {
  width: 100%;
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-xl);
  display: block;
}

/* Decorative accent behind photo */
.about__photo-wrap::before {
  content: '';
  position: absolute;
  inset: var(--space-4);
  top: auto;
  right: auto;
  bottom: calc(-1 * var(--space-4));
  left: calc(-1 * var(--space-4));
  background-color: var(--color-primary-100);
  border-radius: var(--radius-xl);
  z-index: -1;
}

/* Quick facts card below photo */
.about__facts {
  background-color: var(--color-bg-card);
  border-radius: var(--radius-lg);
  padding: var(--space-6);
  border: 1px solid var(--color-border-default);
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
}

.about__fact {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  font-size: var(--text-sm);
  color: var(--color-text-secondary);
}

.about__fact-icon {
  width: 32px;
  height: 32px;
  background-color: var(--color-primary-100);
  border-radius: var(--radius-md);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-primary-600);
  flex-shrink: 0;
}
```

**About Body Copy (3 paragraphs):**

Para 1 (Origin): "I grew up in Guizhou, a mountainous province in southwest China where the landscape makes geography visceral — distances are not straight lines, accessibility is not a given, and where you can reach shapes who you can become. That early intuition about space and movement became a career."

Para 2 (Research arc): "My research sits at the intersection of geospatial data science, human mobility, and urban systems. Working across institutions from UNC Charlotte to Florida State to UCSB, I have contributed to federally funded projects in infrastructure prediction, international ecological inventory, and regional spatial planning — always asking the same underlying question: how do physical systems enable or constrain human life?"

Para 3 (Identity): "I lead field teams, mentor undergraduates, and build the kind of collaborative research environments where geographic thinking can scale. At UCSB's GeoTrans Lab with Prof. Konstantinos Goulias, I am now bringing these threads together — modeling mobility motifs, accessibility surfaces, and the structural patterns of how households move through cities."

**Pull Quote:** *"Geography is not the study of maps. It is the study of why some people can move freely and others cannot."*

**Quick Facts:**
- Location: Santa Barbara, CA / UCSB
- Lab: GeoTrans Lab
- Languages: English, Mandarin Chinese (胡蝶)
- MBTI: ENFJ

---

### 7.10 CONTACT — `.contact`

**Layout:** Two-column: social links left, form right.
**Background:** `--color-bg-dark` (deep teal) — creates strong visual termination before footer.

```css
.contact {
  padding-block: var(--section-padding-y-desktop);
  background-color: var(--color-bg-dark);
  color: var(--color-text-inverse);
}

.contact__heading,
.contact h2 {
  color: var(--color-white);
}

.contact__descriptor {
  color: rgba(255, 255, 255, 0.7);
  font-size: var(--text-lg);
  max-width: 480px;
}

.contact__inner {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-12);
  margin-top: var(--space-10);
}

@media (min-width: 768px) {
  .contact__inner { grid-template-columns: 1fr 1fr; }
}

/* Social Links Column */
.contact__links {
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
}

.contact-link {
  display: flex;
  align-items: center;
  gap: var(--space-4);
  padding: var(--space-4) var(--space-5);
  background-color: rgba(255, 255, 255, 0.08);
  border-radius: var(--radius-lg);
  border: 1px solid rgba(255, 255, 255, 0.12);
  text-decoration: none;
  color: rgba(255, 255, 255, 0.9);
  transition: background-color 0.2s ease, border-color 0.2s ease, transform 0.2s ease;
}

.contact-link:hover {
  background-color: rgba(255, 255, 255, 0.15);
  border-color: rgba(255, 255, 255, 0.25);
  transform: translateX(4px);
}

.contact-link__icon {
  width: 40px;
  height: 40px;
  background-color: rgba(255, 255, 255, 0.12);
  border-radius: var(--radius-md);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.contact-link__label {
  font-size: var(--text-xs);
  color: rgba(255, 255, 255, 0.5);
  font-family: var(--font-mono);
  letter-spacing: var(--tracking-wide);
  text-transform: uppercase;
  line-height: 1;
  margin-bottom: var(--space-1);
}

.contact-link__value {
  font-size: var(--text-sm);
  font-weight: var(--weight-medium);
}

/* Contact Links — ordered */
/* 1. Email (institutional)     2. Google Scholar
   3. GitHub                   4. LinkedIn
   5. ORCID                    6. ResearchGate (optional) */

/* Contact Form Column */
.contact__form {
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
}

.form-label {
  font-size: var(--text-sm);
  font-weight: var(--weight-medium);
  color: rgba(255, 255, 255, 0.7);
  font-family: var(--font-mono);
  letter-spacing: var(--tracking-wide);
}

.form-input,
.form-textarea {
  width: 100%;
  padding: var(--space-3) var(--space-4);
  background-color: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: var(--radius-md);
  color: var(--color-white);
  font-family: var(--font-sans);
  font-size: var(--text-base);
  transition: border-color 0.2s ease, background-color 0.2s ease;
  box-sizing: border-box;
}

.form-input::placeholder,
.form-textarea::placeholder {
  color: rgba(255, 255, 255, 0.35);
}

.form-input:focus,
.form-textarea:focus {
  outline: none;
  border-color: var(--color-primary-400);
  background-color: rgba(255, 255, 255, 0.12);
}

.form-textarea {
  min-height: 140px;
  resize: vertical;
}

.form-submit {
  align-self: flex-start;
  padding: var(--space-3) var(--space-8);
  background-color: var(--color-secondary-600);
  color: var(--color-white);
  border: none;
  border-radius: var(--radius-md);
  font-family: var(--font-sans);
  font-size: var(--text-base);
  font-weight: var(--weight-semibold);
  cursor: pointer;
  transition: background-color 0.2s ease, transform 0.2s ease;
}

.form-submit:hover {
  background-color: var(--color-secondary-700);
  transform: translateY(-2px);
}

.contact__response-note {
  font-size: var(--text-xs);
  color: rgba(255, 255, 255, 0.4);
  font-family: var(--font-mono);
  margin-top: var(--space-2);
}
```

---

### 7.11 FOOTER — `.footer`

```css
.footer {
  background-color: var(--color-neutral-950);
  padding: var(--space-8) 0;
  color: var(--color-neutral-500);
}

.footer__inner {
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
  align-items: center;
  text-align: center;
}

@media (min-width: 640px) {
  .footer__inner {
    flex-direction: row;
    justify-content: space-between;
    text-align: left;
  }
}

.footer__name {
  font-weight: var(--weight-semibold);
  color: var(--color-neutral-400);
  font-size: var(--text-sm);
}

.footer__copy {
  font-size: var(--text-xs);
  font-family: var(--font-mono);
}

.footer__updated {
  font-size: var(--text-xs);
  font-family: var(--font-mono);
  color: var(--color-neutral-600);
}
```

**Footer Copy:**
- Left: `Die (Diane) Hu — PhD Candidate, Geography, UCSB`
- Center: `© 2026 All rights reserved`
- Right: `Last updated: March 2026`

---

### 7.12 SECTION HEADING SYSTEM — `.section-header`

Reusable across all sections.

```css
.section-header {
  text-align: left;
  max-width: 640px;
}

.section-header--center {
  text-align: center;
  margin-inline: auto;
}

.section-header__eyebrow {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  font-weight: var(--weight-medium);
  letter-spacing: var(--tracking-wider);
  text-transform: uppercase;
  color: var(--color-primary-600);
  margin-bottom: var(--space-3);
}

.section-header__title {
  font-size: var(--text-3xl);
  font-weight: var(--weight-semibold);
  color: var(--color-text-primary);
  line-height: var(--leading-tight);
  margin-bottom: var(--space-4);
}

.section-header__subtitle {
  font-size: var(--text-lg);
  color: var(--color-text-secondary);
  line-height: var(--leading-relaxed);
}
```

---

## 8. ANIMATION + INTERACTION SPECS

### 8.1 Global Scroll Reveal

**Mechanism:** IntersectionObserver. JS adds `.is-visible` class when element enters viewport.
**Default animation:** `fadeInUp` — elements start 20px below, opacity 0; animate to natural position, opacity 1.
**Stagger:** 0.1s delay increment per child element (apply via `--reveal-delay` CSS var).
**Threshold:** 0.15 (element is 15% visible before triggering).

```css
/* Base hidden state — apply .reveal to any element to opt in */
.reveal {
  opacity: 0;
  transform: translateY(20px);
  transition:
    opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1),
    transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
  transition-delay: var(--reveal-delay, 0s);
}

.reveal.is-visible {
  opacity: 1;
  transform: translateY(0);
}

/* Stagger children — apply to container */
.reveal-stagger > *:nth-child(1) { --reveal-delay: 0.0s; }
.reveal-stagger > *:nth-child(2) { --reveal-delay: 0.1s; }
.reveal-stagger > *:nth-child(3) { --reveal-delay: 0.2s; }
.reveal-stagger > *:nth-child(4) { --reveal-delay: 0.3s; }
.reveal-stagger > *:nth-child(5) { --reveal-delay: 0.4s; }
.reveal-stagger > *:nth-child(6) { --reveal-delay: 0.5s; }

/* Fade-in-right variant (for about section photo) */
.reveal--right {
  transform: translateX(20px);
}
.reveal--right.is-visible {
  transform: translateX(0);
}

/* Respect prefers-reduced-motion */
@media (prefers-reduced-motion: reduce) {
  .reveal {
    opacity: 1;
    transform: none;
    transition: none;
  }
}
```

**JS (minimal — no library):**
```javascript
const revealElements = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target); // fire once
      }
    });
  },
  { threshold: 0.15 }
);
revealElements.forEach(el => observer.observe(el));
```

---

### 8.2 Nav Scroll Behavior

```javascript
const nav = document.getElementById('main-nav');
const SCROLL_THRESHOLD = 60; // px

window.addEventListener('scroll', () => {
  if (window.scrollY > SCROLL_THRESHOLD) {
    nav.classList.add('nav--scrolled');
  } else {
    nav.classList.remove('nav--scrolled');
  }
}, { passive: true });
```

---

### 8.3 Card Hover — defined in CSS (sections 7.4–7.7)

Universally: `transform: translateY(-4px)` + `box-shadow: var(--shadow-card-hover)`.
Duration: `0.25s ease`.
No JS required.

---

### 8.4 Typewriter Effect — Hero Tagline

**Target text:** `"Mapping Human Movement. Modeling Urban Futures."`
**Behavior:** Characters appear one by one. Blinking cursor during + after. `.is-done` class added on completion to stop cursor.
**Start delay:** 600ms after page load (let hero render first).
**Speed:** 55ms per character.

```javascript
const typewriter = document.getElementById('typewriter');
const text = 'Mapping Human Movement. Modeling Urban Futures.';
let index = 0;

function type() {
  if (index < text.length) {
    typewriter.textContent += text[index];
    index++;
    setTimeout(type, 55);
  } else {
    typewriter.classList.add('is-done');
  }
}

setTimeout(type, 600);
```

---

### 8.5 Mobile Menu Toggle

```javascript
const hamburger = document.querySelector('.nav__hamburger');
const mobileMenu = document.getElementById('mobile-menu');

hamburger.addEventListener('click', () => {
  const isOpen = hamburger.classList.toggle('is-open');
  mobileMenu.classList.toggle('is-open', isOpen);
  hamburger.setAttribute('aria-expanded', isOpen);
  document.body.style.overflow = isOpen ? 'hidden' : '';
});

// Close on nav link click
mobileMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('is-open');
    mobileMenu.classList.remove('is-open');
    hamburger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  });
});
```

---

### 8.6 Active Nav Link on Scroll (IntersectionObserver)

```javascript
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav__link');

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => {
          link.classList.toggle(
            'nav__link--active',
            link.getAttribute('href') === '#' + entry.target.id
          );
        });
      }
    });
  },
  { rootMargin: '-40% 0px -55% 0px' }
);

sections.forEach(section => sectionObserver.observe(section));
```

---

### 8.7 Smooth Scroll (Global)

```css
html {
  scroll-behavior: smooth;
  scroll-padding-top: 80px; /* nav height + buffer */
}
```

---

## 9. CSS CLASS NAMING CONVENTION

### System: BEM-inspired, flat where possible.

**Pattern:** `block__element--modifier`

### Complete Class Name Registry

```
/* === LAYOUT === */
.container
.grid
.grid--2-col
.grid--3-col
.grid--4-col
.col-span-full
.col-span-half
.col-span-third

/* === NAVIGATION === */
.nav
.nav--scrolled
.nav__inner
.nav__logo
.nav__links
.nav__link
.nav__link--active
.nav__cta
.nav__hamburger
.nav__hamburger.is-open
.nav__hamburger-line
.nav__mobile-menu
.nav__mobile-menu.is-open

/* === HERO === */
.hero
.hero__bg
.hero__pattern
.hero__inner
.hero__content
.hero__eyebrow
.hero__name
.hero__name-chinese
.hero__tagline
.hero__tagline.is-done
.hero__descriptor
.hero__actions
.hero__visual
.hero__visual-inner
.hero__photo
.hero__stat-card
.hero__stat-value
.hero__stat-label

/* === BUTTONS === */
.btn
.btn--primary
.btn--outline
.btn--secondary
.btn--ghost
.btn--sm
.btn--lg

/* === SECTION HEADER === */
.section-header
.section-header--center
.section-header__eyebrow
.section-header__title
.section-header__subtitle

/* === RESEARCH === */
.research
.research__grid
.research-card
.research-card__icon
.research-card__title
.research-card__body
.research-card__link

/* === PROJECTS === */
.projects
.projects__header
.projects__view-all
.projects__grid
.project-card
.project-card__visual
.project-card__status
.project-card__status--published
.project-card__status--forthcoming
.project-card__status--inprogress
.project-card__body
.project-card__funding
.project-card__funding-icon
.project-card__title
.project-card__institution
.project-card__description
.project-card__tags
.project-card__footer
.project-card__venue
.project-card__link

/* === TAGS === */
.tag
.tag--primary
.tag--accent
.tag--warm

/* === PUBLICATIONS === */
.publications
.publications__filters
.pub-filter
.pub-filter.is-active
.pub-timeline
.pub-entry
.pub-entry__year
.pub-entry__content
.pub-entry__header
.pub-entry__title
.pub-entry__authors
.pub-entry__venue
.pub-entry__actions
.pub-badge
.pub-badge--journal
.pub-badge--conference
.pub-badge--forthcoming
.pub-badge--presentation
.pub-link

/* === TEACHING === */
.teaching
.teaching__grid
.course-card
.course-card__role-dot
.course-card__role-dot--ta
.course-card__role-dot--instructor
.course-card__code
.course-card__name
.course-card__meta
.course-card__meta-item
.course-card__role-label
.course-card__role-label--ta
.course-card__role-label--instructor
.teaching__philosophy

/* === SKILLS === */
.skills
.skills__categories
.skill-category
.skill-category__label
.skill-category__tags
.skill-tag--tier1
.skill-tag--tier2
.skill-tag--tier3

/* === ABOUT === */
.about
.about__inner
.about__text
.about__section-label
.about__heading
.about__body
.about__quote
.about__tagline
.about__tagline-item
.about__visual
.about__photo-wrap
.about__photo
.about__facts
.about__fact
.about__fact-icon

/* === CONTACT === */
.contact
.contact__heading
.contact__descriptor
.contact__inner
.contact__links
.contact-link
.contact-link__icon
.contact-link__label
.contact-link__value
.contact__form
.form-group
.form-label
.form-input
.form-textarea
.form-submit
.contact__response-note

/* === FOOTER === */
.footer
.footer__inner
.footer__name
.footer__copy
.footer__updated

/* === ANIMATIONS === */
.reveal
.reveal--right
.reveal.is-visible
.reveal-stagger
```

---

## 10. FILE STRUCTURE (Recommended)

```
website/
├── index.html
├── assets/
│   ├── photo.jpg           (professional photo — 800×800px min)
│   ├── photo-field.jpg     (optional: field work photo for about)
│   ├── cv.pdf
│   └── images/
│       ├── project-mobility.jpg
│       ├── project-vmt.jpg
│       └── project-deeppipe.jpg
├── css/
│   ├── tokens.css          (all :root variables — sections 1–6 of this doc)
│   ├── base.css            (reset, body, typography defaults)
│   ├── components.css      (all component CSS from section 7)
│   ├── animations.css      (section 8 CSS)
│   └── main.css            (@import all above, in order)
├── js/
│   └── main.js             (all JS from section 8, no external deps)
└── DESIGN-SPEC.md          (this file)
```

**CSS @import order in main.css:**
```css
@import url('https://fonts.googleapis.com/css2?family=...');
@import 'tokens.css';
@import 'base.css';
@import 'components.css';
@import 'animations.css';
```

---

## 11. ACCESSIBILITY REQUIREMENTS (Non-negotiable)

- All interactive elements must be keyboard-navigable (`Tab`, `Enter`, `Escape`)
- Minimum color contrast ratio: 4.5:1 for body text, 3:1 for large text (WCAG AA)
- All images require `alt` text
- Form inputs require associated `<label>` elements
- Nav toggle requires `aria-expanded` attribute (implemented in JS spec above)
- `prefers-reduced-motion` respected (implemented in animation CSS above)
- Skip-to-content link: `<a href="#main-content" class="sr-only">Skip to main content</a>` as first body child

```css
/* Screen-reader only utility */
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}
```

---

## 12. PERFORMANCE REQUIREMENTS

- Google Fonts: preconnect links required (included in section 2)
- Images: serve as WebP with JPEG fallback; hero photo max 200KB
- No JavaScript frameworks or libraries (vanilla only)
- Target Lighthouse score: Performance ≥ 90, Accessibility ≥ 95
- CSS total: target under 30KB unminified across all files
- Defer non-critical JS: `<script src="js/main.js" defer></script>`

---

*End of Design Specification v1.0*
*Questions → resolve by defaulting to this document, not judgment calls.*
```
