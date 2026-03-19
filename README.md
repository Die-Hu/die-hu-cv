# die-hu-cv — Die (Diane) Hu · Personal Academic CV Website

[![Live Site](https://img.shields.io/badge/Live%20Site-die--hu.github.io%2Fdie--hu--cv-1B6CA8?style=flat-square&logo=github)](https://die-hu.github.io/die-hu-cv/)
[![Built With HTML5](https://img.shields.io/badge/Built%20With-HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/-CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![Vanilla JS](https://img.shields.io/badge/-Vanilla%20JS-F7DF1E?style=flat-square&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Status](https://img.shields.io/badge/Status-Active%20Development-D4845A?style=flat-square)](https://github.com/Die-Hu/die-hu-cv)

---

## Live Demo

**URL:** https://die-hu.github.io/die-hu-cv/

### Visual Overview

The site is a single-page application with a full-height hero section at the top. The hero displays Diane's name and title in a two-column layout: a text column on the left (name, pronouns, institution, a tagline typed character-by-character via a typewriter animation) and a circular profile photo placeholder on the right. The hero background is `#F8F6F2` warm off-white with four slow-moving semi-transparent Bezier curves drawn on a Canvas element, evoking topographic contour lines in muted academic blue, terracotta, and ecological green.

Scrolling down, each section is separated by subtle SVG wave dividers. The **About** section uses a two-column layout with narrative paragraphs on the left and animated statistics counters on the right. The **Research** section features a horizontal four-node timeline visualization showing the research evolution from Tourism Geography through Ecological Planning and GIS to GeoAI and Human Mobility. Below it, six research interest cards are arranged in a responsive grid.

The **Projects** section displays cards in a responsive grid with a filter bar at the top (All / GeoAI / Remote Sensing / GIS / Ecology). Each project card has a colored left-border accent keyed to its primary category. The **Publications** section uses a two-tab switcher (Journal / Conference), with each entry formatted in academic citation style. The **Skills** section renders badges in three visual tiers: filled pills (Tier 1 core skills), outlined badges (Tier 2 supporting skills), and dashed-border badges (Tier 3 emerging skills).

Navigation is a sticky bar at 68px height that transitions from transparent over the hero to a solid white background with shadow once scrolled past 60% of the hero height. On viewports 767px and narrower, it collapses into a hamburger menu with an animated X transition.

---

## About the Project

This is the personal academic CV website for **Die (Diane) Hu** (胡蝶, She/Her), PhD Candidate in Geographic Information Science and Cartography at the **GeoTrans Lab, UC Santa Barbara**, advised by Prof. Konstantinos (Kostas) Goulias. The site serves as her primary professional online presence for academic career development, job applications (targeting geospatial technology companies, national laboratories, and government agencies), and conference networking.

**Why this site was built:**
Diane's career trajectory spans five institutions across two countries — Huaqiao University, China University of Geosciences (Wuhan), UNC Charlotte, Florida State University, and UC Santa Barbara. A static PDF CV cannot convey the intentional arc of that progression: from tourism geography to ecological spatial modeling to GIS engineering to GeoAI and human mobility research. A personal website allows her to present that evolution as a growth narrative rather than a list of dates, to surface federally-funded project deliverables with proper context ($404K NCDOT, $49K USDA), and to demonstrate geospatial literacy through the visual design itself.

**Target audience:** Recruiters and hiring managers at geospatial technology companies (Google Maps, Uber, Waymo, Esri, Palantir), national laboratories (Oak Ridge, Lawrence Berkeley), federal agencies (FHWA, USDOT, USGS), and academic search committees.

**Why Vanilla HTML/CSS/JS (not React or Vue):**
A personal CV website has no dynamic data requirements, no component reuse at scale, and no state management complexity. A framework would add build tooling, a `node_modules` directory, and deployment complexity with zero functional benefit. Vanilla HTML renders directly in any browser, loads instantly, deploys to GitHub Pages with a single `git push`, and requires no compilation step. The zero-dependency constraint also means the site will continue to work correctly years from now without dependency rot.

---

## Features — Currently Implemented

### Content Sections (11 total)

| Section | HTML `id` | Description |
|---|---|---|
| Hero | `#hero` | Name, pronouns, title, affiliation, animated tagline, CTA buttons (View Research, Download CV), Canvas background animation |
| About | `#about` | Three-paragraph narrative biography, animated stats counters |
| Research | `#interests` | Four-node research evolution timeline + six research interest cards in a responsive grid |
| Projects | `#projects` | 14 projects total (5 featured + 9 additional); filterable card grid with colored left-border accents by category |
| Publications | `#publications` | Journal tab (1 entry) + Conference tab (6 entries); academic citation formatting |
| Teaching | `#teaching` | Four teaching appointments (institution, course, role, term) |
| Skills | `#skills` | Three-tier badge system; programming and tools sub-sections |
| Awards | `#awards` | Nine honors and awards in reverse chronological order |
| Code | `#code` | Three featured GitHub repository cards |
| Contact | `#contact` | Static contact form (client-side validation only) + direct contact details |
| Footer | — | Dynamic copyright year, social links |

### Interactions and Animations

- **Typewriter animation** — The Hero tagline ("Mapping Human Movement. Modeling Urban Futures.") is typed character-by-character at 60ms/character with a 500ms initial delay, then a CSS blinking cursor. Implemented in `initTypewriter()` in `main.js`.

- **Hero background Canvas animation** — Four Bezier curves animate slowly across the full-height hero using `requestAnimationFrame`. Each curve has independent speed, phase offset, and amplitude. Colors: primary blue `rgba(27,108,168,0.18)`, muted blue `rgba(27,108,168,0.12)`, accent terracotta `rgba(212,132,90,0.10)`, earth green `rgba(123,158,135,0.10)`. Respects `prefers-reduced-motion`. Implemented in `initHeroContourCanvas()`.

- **Scroll reveal (IntersectionObserver)** — All major content elements carry `data-aos` and optional `data-aos-delay` attributes. An `IntersectionObserver` with `threshold: 0.15` adds `.visible` to trigger CSS fade-up transitions. Each element fires only once. Implemented in `initScrollReveal()`.

- **Research evolution timeline** — A horizontal four-node visualization: Tourism Geography (2016–2020) → Ecological Spatial Planning (2020–2023) → GIS Engineering (2024–2025) → GeoAI & Human Mobility (2025–present). Implemented in pure HTML/CSS.

- **Project filter** — Filter buttons (All, GeoAI, Remote Sensing, GIS, Ecology) show/hide `.project-card` elements by matching `data-category` attribute. Show/hide uses `opacity` and `transform` CSS transitions, followed by `display:none` via `transitionend` event. Implemented in `initProjectFilter()`.

- **Project card colored left border** — Each card's `data-primary-category` attribute drives a colored `border-left` via CSS attribute selectors: blue for GeoAI/Mobility, terracotta for Remote Sensing, green for Ecology/Land Use.

- **Publications tab system** — Two tabs ("Journal Articles", "Conference Papers") switch visible panels with fade transitions. Default active tab is "Conference". Implemented in `initPublicationTabs()`.

- **Count-up animation** — Stats counters (`data-count` + optional `data-suffix`) animate from 0 to target value over 1500ms using a quadratic ease-out function. Supports decimal values. Triggered once by `IntersectionObserver`. Implemented in `initStatsCounter()`.

- **Three-tier skill badges** — Tier 1 (8 skills): filled pill, `--color-primary-light` background. Tier 2 (8 skills): outlined badge, `--color-earth-light` background. Tier 3 (5 skills): dashed border, `--color-surface-alt` background.

- **SVG wave section dividers** — Inline SVG `<path>` wave shapes between sections soften section boundaries.

- **Sticky navigation with scroll state** — Nav becomes `.scrolled` (white background, box-shadow) after scrolling past 60% of hero height. Active link state tracked by `IntersectionObserver` across 9 sections with `-68px 0px -40% 0px` rootMargin. Implemented in `initNavActiveState()`.

- **Mobile hamburger menu** — Three-bar icon toggles a slide-down mobile nav. Closes on outside click, on any nav link click, and animates to X shape when open. Uses CSS class toggling and `transitionend` event for cleanup. Implemented in `initNav()`.

- **Back-to-top button** — Appears when `scrollY > 400px`. Smooth scroll with native `scrollBehavior` API; manual cubic ease-out fallback for Safari.

- **Smooth scroll** — All `a[href^="#"]` anchors use native smooth scroll with a `-68px` nav-height offset; cubic ease-in-out polyfill for older Safari. Implemented in `initSmoothScroll()`.

- **Contact form validation** — Client-side only. Validates name (non-empty), email (non-empty + regex pattern), and message (non-empty). Shows inline error messages with `role="alert"`. On valid submit: resets form and displays a success message for 8 seconds. Implemented in `initContactForm()`.

- **Dynamic copyright year** — Footer year set to `new Date().getFullYear()` at runtime.

### Accessibility and Standards

- Semantic HTML5 elements (`<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`)
- ARIA labels on interactive elements (hamburger: `aria-expanded`, mobile menu: `aria-hidden`)
- `role="alert"` and `role="status"` on dynamic form feedback
- `aria-hidden="true"` on decorative elements (typewriter cursor, Canvas element)
- Focus management preserved through menu open/close
- `prefers-reduced-motion` support: Canvas animation disabled, CSS transitions shortened via media query
- Print stylesheet: hides nav, hero animation, buttons; adjusts typography for paper output
- iOS Safari: `100svh` for full-height hero, `font-size: 16px` on form inputs to prevent auto-zoom

---

## Technology Stack

### Frontend

| Layer | Technology | Notes |
|---|---|---|
| Markup | HTML5 (Semantic, ARIA) | Single `index.html`, 1,251 lines |
| Styles | CSS3 (Custom Properties, Grid, Flexbox, Animations) | `styles.css`, 3,315 lines |
| Behavior | Vanilla JavaScript ES6+ | `main.js` 675 lines, `content.js` 812 lines |

### External Resources (CDN only — no npm, no build step)

| Resource | Version / Weights | Purpose |
|---|---|---|
| Google Fonts — DM Sans | 400, 500, 600, 700 | Headings, UI labels, navigation |
| Google Fonts — Source Serif 4 | 400, 600 (normal + italic) | Body text, paragraphs |
| Font Awesome Free | 6.5.1 | Icons (social, UI, research area icons) |

> **Note:** JetBrains Mono is referenced in `styles.css` as `--font-mono` but is **not** currently loaded in the HTML `<link>` tag. Monospace text falls back to the system monospace stack until this is corrected. See Known Limitations.

No jQuery. No React. No Vue. No Bootstrap. No GSAP.

### Development Tools

| Tool | Purpose |
|---|---|
| Python 3 HTTP Server | Local preview (`python3 -m http.server 8899`) |
| Claude Code (Anthropic) | AI-assisted planning, design, and development |
| Git | Version control |
| GitHub Pages | Static hosting and deployment |

---

## Project Structure

```
die-hu-cv/
├── index.html              # Single-page application, 1,251 lines
│                           # 11 content sections + nav + footer
├── css/
│   └── styles.css          # 3,315 lines, 20+ named sections:
│                           #   1. CSS Custom Properties (:root tokens)
│                           #   2. Reset & Base
│                           #   3. Layout & Container
│                           #   4. Navigation (desktop + mobile drawer)
│                           #   5. Buttons
│                           #   6. Section Shared Styles
│                           #   7. Hero (canvas, typewriter, badges)
│                           #   8. About (stats, timeline)
│                           #   9. Research Interests
│                           #  10. Projects (filter, cards, category system)
│                           #  11. Publications (tabs, items, badges)
│                           #  12. Teaching
│                           #  13. Skills
│                           #  13b. GitHub / Open Source (Code section)
│                           #  14. Contact
│                           #  15. Footer
│                           #  16. Back-to-top
│                           #  17. Scroll Reveal Animations
│                           #  18. Tablet (max-width: 1024px)
│                           #  19. Mobile (max-width: 767px)
│                           #  20. Ultra-small (max-width: 390px)
│                           #  21. Print
├── js/
│   ├── main.js             # 675 lines — 11 interactive modules:
│   │                       #   initNav, initTypewriter, initScrollReveal,
│   │                       #   initProjectFilter, initPublicationTabs,
│   │                       #   initContactForm, initStatsCounter,
│   │                       #   initSmoothScroll, initBackToTop,
│   │                       #   initNavActiveState, initHeroContourCanvas
│   └── content.js          # 812 lines — structured content data object
│                           #   (window.DIANE) with 13 data keys:
│                           #   meta, hero, about, education,
│                           #   researchInterests, featuredProjects,
│                           #   allProjects, publications, teaching,
│                           #   awards, skills, service, contact
├── assets/
│   ├── Diana_Hu_CV.pdf     # PLACEHOLDER — CV PDF not yet added
│   └── images/             # Profile photo directory (currently empty)
├── DESIGN-SPEC.md          # Complete design system specification
│                           # Color tokens, typography scale, spacing,
│                           # breakpoints, component behavior, animation params
├── LICENSE                 # MIT License
└── README.md               # This file
```

---

## Design System

### Color Palette

All colors are defined as CSS Custom Properties in `:root` in `styles.css`.

| Token | Value | Usage |
|---|---|---|
| `--color-primary` | `#1B6CA8` | Academic blue — CTAs, headings accent, nav active state, timeline nodes |
| `--color-primary-dark` | `#134e7a` | Hover state for primary elements, Contact section background |
| `--color-primary-light` | `#e8f2fb` | Tier 1 skill badge backgrounds, icon containers |
| `--color-accent` | `#D4845A` | Warm terracotta — tagline, Remote Sensing card borders, secondary accents |
| `--color-accent-dark` | `#b86b40` | Hover state for accent elements |
| `--color-accent-light` | `#fdf0e8` | Accent tint backgrounds |
| `--color-earth` | `#7B9E87` | Ecological green — Ecology/Land Use card borders |
| `--color-earth-light` | `#edf4ef` | Tier 2 skill badge backgrounds |
| `--color-bg` | `#F8F6F2` | Page background (warm off-white) |
| `--color-surface` | `#FFFFFF` | Card surfaces, nav background (scrolled state) |
| `--color-surface-alt` | `#F2F0EC` | Alternating section backgrounds, Tier 3 badge backgrounds |
| `--color-text` | `#2C2C2C` | Primary body text |
| `--color-text-secondary` | `#5A5A5A` | Subheadings, metadata |
| `--color-text-muted` | `#888888` | Captions, timestamps |
| `--color-border` | `#E0DDD8` | Card and section borders |
| `--color-border-light` | `#EDE9E4` | Subtle dividers |

### Typography

| Token | Family | Weights Loaded | Role |
|---|---|---|---|
| `--font-heading` | DM Sans | 400, 500, 600, 700 | All headings, nav links, buttons, badges |
| `--font-body` | Source Serif 4 | 400, 600 (normal + italic) | Body paragraphs, publication citations |
| `--font-mono` | JetBrains Mono | not yet loaded (see Known Limitations) | Code snippets, monospace text |

**Font size scale** (`--text-xs` through `--text-7xl`):
0.75rem / 0.875rem / 1rem / 1.125rem / 1.25rem / 1.5rem / 1.875rem / 2.25rem / 3rem / 3.75rem / 4.5rem

**Line height tokens:** `--leading-relaxed: 1.7` (body text), `--leading-snug: 1.35` (headings, badges)

### Spacing Scale

8px base grid. Token range: `--space-1` (0.25rem / 4px) through `--space-32` (8rem / 128px).

| Token | Value | Common usage |
|---|---|---|
| `--space-4` | 1rem (16px) | Default padding unit |
| `--space-6` | 1.5rem (24px) | Container side padding |
| `--space-8` | 2rem (32px) | Card internal padding, grid gaps |
| `--space-16` | 4rem (64px) | Section vertical padding (desktop) |
| `--space-24` | 6rem (96px) | Hero bottom padding |

### Responsive Breakpoints

| Breakpoint | Condition | Description |
|---|---|---|
| Desktop | > 1024px | Two-column layouts, full horizontal navigation |
| Tablet | max-width: 1024px | Adjusted grid columns, reduced font sizes |
| Mobile | max-width: 767px | Single-column layouts, hamburger menu, stacked hero |
| Ultra-small | max-width: 390px | Further padding and font-size reduction for small phones |

### Additional Tokens

| Category | Tokens |
|---|---|
| Border radius | `--radius-sm: 4px`, `--radius-md: 8px`, `--radius-lg: 12px`, `--radius-xl: 16px`, `--radius-full: 9999px` |
| Shadows | `--shadow-sm` through `--shadow-xl` (four levels) |
| Transitions | `--transition-fast: 150ms ease`, `--transition-base: 250ms ease`, `--transition-slow: 400ms ease` |
| Layout | `--nav-height: 68px`, `--container-max: 1200px` |

---

## Getting Started — Local Development

No build step required. The project runs directly from the filesystem via any static HTTP server.

```bash
# 1. Clone the repository
git clone https://github.com/Die-Hu/die-hu-cv.git
cd die-hu-cv

# 2. Start a local static server
python3 -m http.server 8899

# 3. Open in browser
# http://localhost:8899
```

> **Why a server and not `file://`?**
> Browsers restrict certain behaviors (font loading, CORS, some module patterns) when opening HTML directly from the filesystem. A local HTTP server guarantees behavior identical to the GitHub Pages deployment.

**Requirements:** Python 3, which is pre-installed on macOS and most Linux distributions. No npm, no Node.js, no compilation step of any kind.

---

## Current Status and Known Limitations

All known gaps and limitations in the current codebase are listed here without omission.

| Issue | Severity | Detail |
|---|---|---|
| **Profile photo missing** | High | `assets/images/` is empty. The Hero `<img>` in `index.html` references `assets/img/diane-hu.jpg` while `content.js` uses `assets/img/diane-hu.jpg`. A placeholder renders in the browser. |
| **CV PDF missing** | High | `assets/Diana_Hu_CV.pdf` does not exist on disk. The "Download CV" CTA in the Hero section will return a 404. |
| **Contact form has no backend** | High | Form submission is validated client-side and resets with a fake success message — no email is sent. Reach Diane directly at **diehu@ucsb.edu**. |
| **JetBrains Mono not loaded** | Medium | `--font-mono: 'JetBrains Mono', monospace` is defined in `styles.css` and referenced in `DESIGN-SPEC.md`, but the Google Fonts `<link>` tag in `index.html` does not include it. Monospace elements render in the system fallback font. |
| **Google Scholar link is a placeholder** | Medium | `contact.googleScholar` in `content.js` is an empty string. The Scholar icon in the Contact section links nowhere. |
| **ORCID link is a placeholder** | Medium | No ORCID value is set in `content.js`. |
| **GitHub profile link is a placeholder** | Medium | `contact.github` in `content.js` is an empty string. |
| **Code section repo links are placeholders** | Medium | The three featured repository cards in the Code section link to `#`. Real repository URLs must be supplied. |
| **Favicon is commented out** | Low | `<link rel="icon">` in `<head>` is commented out. Browsers display a blank tab icon. |
| **`siteUrl` meta field is empty** | Low | `DIANE.meta.siteUrl` in `content.js` is an empty string. OG tags do not include the canonical URL. |
| **`content.js` data not wired to DOM** | Low | `content.js` defines `window.DIANE` as a structured data object, but `index.html` hard-codes all content directly in HTML markup. The two are maintained separately and will drift. |
| **No Education section rendered** | Low | The `education` array exists in `content.js` (5 degree entries) but there is no dedicated Education section in `index.html`. Degree history appears only in About narrative text. |
| **Skills and Awards not in navigation** | Low | Both sections exist in the page but are not linked from the desktop nav bar. They are only reachable by scrolling. |

---

## Roadmap

### High Priority (Next 1–3 months)

- [ ] Add profile photo — add photograph to `assets/images/` and update the `<img>` `src` in the Hero section
- [ ] Upload actual CV PDF to `assets/Diana_Hu_CV.pdf`
- [ ] Add JetBrains Mono to the Google Fonts `<link>` tag in `index.html`
- [ ] Set real Google Scholar profile URL (pattern: `scholar.google.com/citations?user=...`)
- [ ] Set ORCID profile URL
- [ ] Set GitHub profile URL in `content.js` `contact.github`
- [ ] Add real GitHub repository URLs to the Code section cards
- [ ] Add favicon file and uncomment the `<link rel="icon">` tag in `<head>`
- [ ] Implement a working contact form backend (Formspree or Netlify Forms — no server required)

### Medium Priority (3–6 months)

- [ ] Add a dedicated Education section that renders the `education` array from `content.js` (5 degrees, full degree history)
- [ ] Wire `content.js` data to DOM so content is maintained in one place (currently HTML and JS data are out of sync)
- [ ] Add Skills and Awards links to the main desktop navigation
- [ ] Expand project cards to link to full project detail pages or extended descriptions
- [ ] Rewrite project descriptions in a more narrative, human-centered register (current text is accurate but reads as a technical report rather than a portfolio)
- [ ] Add field research photography (typhoon volunteer work at Xiamen, Yunnan Shidian one-month residency, Ezhou field survey)
- [ ] Interactive research field sites map showing: Guizhou, Wuhan, Charlotte NC, Dominican Republic, Santa Barbara CA
- [ ] Add `og:image` social card image for LinkedIn and other link preview contexts
- [ ] Dark mode toggle
- [ ] Chinese / English language toggle (i18n)

### Long-term Vision (6+ months)

- [ ] Blog / Research Notes section (spatial data science methods, conference reflections, research updates)
- [ ] Interactive embedded project demos (MBTIearth 3D globe, Global-AI-Acceptance-Index)
- [ ] Embedded research data visualizations (output maps from NHTS California mobility motif analysis)
- [ ] Conference presentation archive (slides or recording embeds for AAG 2026, WCTR 2026, SWAAG 2024)
- [ ] Automated CV sync via ORCID or Google Scholar API
- [ ] Privacy-respecting analytics (Plausible or Fathom)

---

## AI-Assisted Development Notes

This project was developed using **Claude Code** (Anthropic, model: claude-sonnet-4-6). The following is an accurate account of how AI tooling participated, included here for transparency.

**What Claude Code did:**

- Conducted a structured analysis of Diane's full academic and professional profile from CV source materials, LinkedIn information, and personal statement documents
- Produced `DESIGN-SPEC.md` — the complete design system specification (color palette, typography scale, component behavior definitions, animation parameters)
- Wrote the full HTML structure (`index.html`, 1,251 lines), CSS system (`styles.css`, 3,315 lines), JavaScript interaction modules (`main.js`, 675 lines), and content data object (`content.js`, 812 lines)
- Implemented all technical features including the Canvas contour animation, IntersectionObserver scroll reveal, count-up animation, project filter, and publication tab system
- Drafted all biographical and research narrative text in `content.js` (About paragraphs, project descriptions, research interest descriptions) based on source CV materials
- Produced this README

**Multi-agent architecture used during development:**

The development session employed parallel agents in distinct analytical roles:

| Agent Role | Responsibility |
|---|---|
| INFP persona | Narrative authenticity, emotional resonance, personal story arc, ensuring Diane's ENFJ voice comes through |
| INTP persona | Technical consistency audit, logic and architecture analysis, identifying mismatches between CSS, HTML, and JS |
| INTJ persona | Strategic positioning, brand differentiation, target audience prioritization, one-sentence brand definition |
| ISTJ persona | Documentation, code organization, technical specifications, this README |
| Web Visualization Team | UI component implementation: Canvas animation, timeline, skills tier system, wave transitions |
| GitHub Integration | Code section HTML/CSS, repository card system |
| Mobile Optimization | Touch targets, iOS Safari fixes, 390px breakpoint, `hover:none` media query states |

**Human oversight:**

All design decisions, content accuracy, and final code were reviewed and approved by Leo (project owner and collaborator). All factual content about Diane's research, publications, and background was sourced from materials she provided. No biographical details were invented.

---

## About Diane

**Die (Diane) Hu** (She/Her) is a PhD Candidate in Geographic Information Science and Cartography at the University of California, Santa Barbara, working in the **GeoTrans Lab** under Prof. Konstantinos (Kostas) Goulias. Her research focuses on human mobility and travel behavior, spatiotemporal modeling, GeoAI, and urban accessibility — with a consistent equity orientation across all these themes.

Before UCSB, she worked as a Graduate Research Assistant at UNC Charlotte's Center for Applied GIScience (CAGIS), contributing to two federally funded projects: a $404K NC Department of Transportation infrastructure study (DeepPipe) and a $49K USDA Forest Service mangrove inventory in the Dominican Republic. She holds an M.S. in Land Resource Management from China University of Geosciences (Wuhan) and a B.S. in Human Geography and Urban-Rural Planning from Huaqiao University, where she published a peer-reviewed journal article as an undergraduate.

Her current dissertation work uses the 2017 NHTS California subsample (N=28,404) to develop a dwell-time-weighted Activity Space Indicator examining how capabilities, constraints, and built-environment factors shape the geographic extent of daily activities. She presented this work ("How We Move, What We Reach: Capabilities, Constraints, and Daily Activity Space in California") as an oral presentation at the AAG Annual Meeting in Minneapolis (March 2026). A co-authored paper on household VMT and vehicle fleet structures has been accepted for presentation at WCTR 2026 in Toulouse, France.

She grew up in Guizhou Province, China.

Contact: **diehu@ucsb.edu** | Santa Barbara, California | [LinkedIn](https://www.linkedin.com/in/die-diane-hu-370007270)

---

## License and Credits

### Code License — MIT

```
MIT License

Copyright (c) 2026 Die (Diane) Hu

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

### Content Copyright

All CV content, research descriptions, biographical text, and academic work descriptions are **© Die (Diane) Hu. All Rights Reserved.** They may not be reproduced without permission.

### Credits

| Item | Credit |
|---|---|
| Website design and development | Built with [Claude Code](https://claude.com/claude-code) (Anthropic) |
| Project supervision | Leo (project owner) |
| Fonts | [DM Sans](https://fonts.google.com/specimen/DM+Sans) and [Source Serif 4](https://fonts.google.com/specimen/Source+Serif+4) via Google Fonts (SIL Open Font License) |
| Icons | [Font Awesome Free](https://fontawesome.com) 6.5.1 (CC BY 4.0 for icons, SIL OFL for fonts) |

---

*Last updated: March 2026*
