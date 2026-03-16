# die-hu-cv — Die (Diane) Hu · Personal Academic CV Website

[![Live Site](https://img.shields.io/badge/Live%20Site-die--hu.github.io%2Fdie--hu--cv-1B6CA8?style=flat-square&logo=github)](https://die-hu.github.io/die-hu-cv/)
[![HTML5](https://img.shields.io/badge/Built%20With-HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/-CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/-Vanilla%20JS-F7DF1E?style=flat-square&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Status](https://img.shields.io/badge/Status-Active%20Development-7B9E87?style=flat-square)](https://github.com/Die-Hu/die-hu-cv)

Personal academic CV website for **Die (Diane) Hu**, PhD Candidate in Geographic Information Science & Cartography at UC Santa Barbara's GeoTrans Lab. Built for job hunting, academic networking, and personal branding toward careers at tech companies, national labs, and research institutions.

---

## 🌐 Live Demo

**→ [die-hu.github.io/die-hu-cv](https://die-hu.github.io/die-hu-cv/)**

### Page Overview
The website is a single-page application with 11 sections navigable via sticky top nav:

| Section | ID | Description |
|---|---|---|
| Hero | `#hero` | Name, typewriter tagline, animated contour canvas background |
| About | `#about` | Personal narrative, 4 stats, research evolution timeline (4 nodes) |
| Research | `#interests` | 6 research interest cards with icons |
| Projects | `#projects` | 5 featured project cards with category filter |
| Publications | `#publications` | Journal / Conference tab switcher |
| Teaching | `#teaching` | 4 course cards |
| Skills | `#skills` | Three-tier pill badge system |
| Awards | `#awards` | Timeline of honors (2017–2026) |
| Code | `#code` | 3 GitHub open-source repo cards |
| Contact | `#contact` | Contact info + static form |

---

## 👤 About Diane

Die (Diane) Hu is a PhD student (2025–2029 est.) in the Geography Department at UC Santa Barbara, advised by Prof. Konstantinos (Kostas) Goulias at the [GeoTrans Lab](https://geotrans.geog.ucsb.edu/). Her research bridges **human mobility**, **GeoAI**, and **urban systems** to make cities more accessible and equitable.

- **Education path**: Huaqiao University (B.S. Tourism/Geography, 2020) → China University of Geosciences Wuhan (M.S. Land Resource Management, 2023) → UNC Charlotte (PhD coursework, 2024–2025) → Florida State University (exchange, Spring 2025) → **UC Santa Barbara** (PhD, 2025–)
- **Research tagline**: *"Mapping Human Movement. Modeling Urban Futures."*
- **Target audience for this site**: Tech companies (Google Maps, Uber, Waymo, Esri, Palantir), national labs (Oak Ridge, Lawrence Berkeley), government agencies (FHWA, USDOT, EPA), and academic positions

---

## ✅ Features (Currently Implemented)

### Visuals & Animation
- **Hero canvas animation** — 4 slow-moving Bézier curves simulating map contour lines/trajectories, drawn via `requestAnimationFrame` using a `<canvas>` element; respects `prefers-reduced-motion`
- **Typewriter effect** — Hero tagline types out at 60ms/character with blinking cursor (CSS `@keyframes`)
- **Scroll reveal** — Custom `IntersectionObserver` implementation adding `.visible` class to `[data-aos]` elements; no external library
- **Count-up animation** — Stats numbers animate from 0 to target (supports numeric suffix like `14+`) using quadratic ease-out
- **Section wave dividers** — SVG `<path>` wave shapes between Hero→About and GitHub→Contact sections
- **Project card hover** — Left-border colored accent expands to subtle background gradient on hover

### Interactive Components
- **Project category filter** — Filter buttons toggle `data-category` matching with 150ms fade transition
- **Publications tab** — Journal / Conference switcher with `aria-selected` management
- **Mobile hamburger menu** — Animated 3-bar → X transition, `max-height` slide-down drawer, closes on outside click or nav link click
- **Back-to-top button** — Appears after 400px scroll with smooth animation
- **Smooth scroll** — Native CSS + JS fallback with `NAV_HEIGHT` offset correction (Safari compatible)
- **Nav active state** — `IntersectionObserver` highlights active section link; tracks all 9 sections including `#code`, `#skills`, `#awards`
- **Sticky nav** — Adds `.scrolled` class (backdrop-blur + shadow) after hero scroll threshold

### Content Sections
- **Research Evolution Timeline** — Horizontal 4-node timeline (Tourism 2016 → Ecology 2020 → GIS 2024 → GeoAI 2025), vertical on mobile
- **Three-tier skills system** — Tier 1 (large filled pills), Tier 2 (medium outlined), Tier 3 (small dashed border)
- **GitHub Open Source section** — Cards for `awesome-giser`, `Global-AI-Acceptance-Index`, `MBTIearth` with topics, badges, star counts
- **Project category badges** — Right-corner color-coded badges matching left-border accent per `data-primary-category`
- **Publication color-coding** — `pub-item--conference` (accent orange border) / `pub-item--forthcoming` (earth green border)

### Accessibility & Responsiveness
- Semantic HTML5 (`<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`)
- Full `aria-*` attributes, `role`, `aria-label`, `aria-expanded`, `aria-hidden`
- Focus management on mobile menu
- Three breakpoints: **1024px** (tablet), **767px** (mobile), **390px** (ultra-small)
- iOS Safari fixes: `100svh` hero height, `font-size: 16px` on inputs (prevents zoom), `-webkit-overflow-scrolling: touch`
- `@media (hover: none)` — touch-specific active states (no hover side effects on mobile)
- Print stylesheet (hides nav, back-to-top, contact form; adjusts typography for paper)

---

## 🛠 Technology Stack

### Frontend (Zero dependencies)
| Layer | Technology |
|---|---|
| Markup | HTML5 — semantic, ARIA-compliant |
| Styles | CSS3 — Custom Properties, Grid, Flexbox, Animations, Clip-path |
| Scripts | Vanilla JavaScript ES6+ — no frameworks, no jQuery |

### External Resources (CDN, no npm install required)
```html
<!-- Fonts -->
<link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700
             &family=Source+Serif+4:ital,wght@0,400;0,600;1,400;1,600
             &display=swap" rel="stylesheet">

<!-- Icons -->
<link rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
```

**Font roles:**
- `DM Sans` — headings, UI labels, nav
- `Source Serif 4` — body text, quotes (humanist warmth)
- `JetBrains Mono` — code elements, repo names, skill tags *(⚠ not yet in `<link>` tag — see Known Limitations)*

### Development Environment
- **Local preview**: Python HTTP server (`python3 -m http.server 8899`)
- **Version control**: Git + GitHub Pages
- **AI assistance**: Claude Code (Anthropic) with specialized multi-agent workflows (see §AI-Assisted Development)

---

## 📁 Project Structure

```
die-hu-cv/
│
├── index.html              # Single-page app, ~1,250 lines
│                           # 11 sections, semantic HTML5
│
├── css/
│   └── styles.css          # ~3,300 lines, organized in 20+ labeled sections:
│                           #   1. CSS Custom Properties (:root tokens)
│                           #   2. Reset & Base
│                           #   3. Layout & Container
│                           #   4. Navigation (desktop + mobile drawer)
│                           #   5. Buttons
│                           #   6. Section Shared Styles
│                           #   7. Hero Section (canvas, typewriter, badges)
│                           #   8. About Section (grid, stats, quote, timeline)
│                           #   9. Research Interests
│                           #  10. Projects (filter, cards, category system)
│                           #  11. Publications (tabs, items, badges)
│                           #  12. Teaching
│                           #  13. Skills
│                           #  13b. GitHub / Open Source
│                           #  14. Contact
│                           #  15. Footer
│                           #  16. Back-to-top
│                           #  17. Scroll Reveal Animations
│                           #  18. Tablet (<1024px)
│                           #  19. Mobile (<767px)
│                           #  20. Extra-small (<390px)
│                           #  20a. Touch / hover:none
│                           #  21. Print
│
├── js/
│   ├── main.js             # ~670 lines, 10 interactive modules:
│   │                       #   initNav(), initTypewriter(), initScrollReveal()
│   │                       #   initProjectFilter(), initPublicationTabs()
│   │                       #   initContactForm(), initStatsCounter()
│   │                       #   initSmoothScroll(), initBackToTop()
│   │                       #   initNavActiveState(), initHeroContourCanvas()
│   │
│   └── content.js          # ~810 lines — structured content data object
│                           #   window.DIANE = { meta, hero, about, education,
│                           #     researchInterests, featuredProjects, allProjects,
│                           #     publications, teaching, awards, skills,
│                           #     service, contact }
│
├── assets/
│   ├── Diana_Hu_CV.pdf     # ⚠ PLACEHOLDER — CV PDF not yet added
│   └── images/             # Profile photo and project images (empty)
│
├── DESIGN-SPEC.md          # Complete design system specification (~65KB):
│                           #   color tokens, typography scale, spacing,
│                           #   breakpoints, component specs, animation params
│
├── .gitignore
└── README.md               # This file
```

---

## 🎨 Design System

### Color Palette

| Token | Value | Usage |
|---|---|---|
| `--color-primary` | `#1B6CA8` | Nav, buttons, links, borders, section labels |
| `--color-primary-dark` | `#134e7a` | Hover states, contact section background |
| `--color-primary-light` | `#e8f2fb` | Hover backgrounds, icon containers |
| `--color-accent` | `#D4845A` | Tagline, conference pub borders, badges, warm accents |
| `--color-accent-dark` | `#b86b40` | Accent hover states |
| `--color-earth` | `#7B9E87` | Ecology-category accents, forthcoming pub borders |
| `--color-bg` | `#F8F6F2` | Page background (warm off-white) |
| `--color-surface` | `#FFFFFF` | Cards, nav |
| `--color-text` | `#2C2C2C` | Primary text |
| `--color-text-secondary` | `#5A5A5A` | Subtitles, metadata |
| `--color-text-muted` | `#888888` | Labels, captions |

### Typography Scale

| Token | Size | Usage |
|---|---|---|
| `--text-xs` | 0.75rem | Labels, captions, badges |
| `--text-sm` | 0.875rem | Card descriptions, meta |
| `--text-base` | 1rem | Body text |
| `--text-lg` | 1.125rem | Lead paragraphs |
| `--text-xl` | 1.25rem | Card titles |
| `--text-2xl` | 1.5rem | Section subtitles |
| `--text-3xl` | 1.875rem | Section titles (mobile) |
| `--text-4xl`–`7xl` | 2.25–4.5rem | Hero name, display text |

### Spacing Scale
8px base grid: `--space-1` (2px) through `--space-24` (96px)

### Responsive Breakpoints
| Breakpoint | Width | Changes |
|---|---|---|
| Default | > 1024px | Desktop — full 2-col layouts |
| Tablet | ≤ 1024px | 2-col about, 2-col repo grid, reduced padding |
| Mobile | ≤ 767px | 1-col everything, hamburger nav, touch targets 44px |
| Ultra-small | ≤ 390px | Further font reduction, single-col interests |

---

## 🚀 Getting Started

### Local Development
```bash
# Clone the repository
git clone https://github.com/Die-Hu/die-hu-cv.git
cd die-hu-cv

# Start local server (Python 3)
python3 -m http.server 8899

# Open in browser
open http://localhost:8899
```

> **Note**: Must be served via HTTP (not `file://`) due to browser CORS restrictions on local JS module loading.

### Editing Content
Most visible content is structured in `js/content.js` as a `window.DIANE` object. Edit that file to update text content without touching HTML structure.

For structural changes (new sections, layout modifications), edit `index.html` directly. Design token changes (colors, fonts, spacing) live at the top of `css/styles.css` in the `:root` block.

---

## ⚠️ Known Limitations

The following issues are documented openly. All are fixable and on the roadmap:

| Issue | Severity | Notes |
|---|---|---|
| Contact form is static | Medium | Submitting does nothing; form resets and shows fake success. Email directly: `diehu@ucsb.edu` |
| Profile photo missing | High | `assets/images/` is empty; About section shows placeholder icon |
| CV PDF missing | High | `assets/Diana_Hu_CV.pdf` is a placeholder; Download CV button 404s |
| Google Scholar link placeholder | Medium | Points to `scholar.google.com` homepage, not Diane's profile |
| ORCID link placeholder | Medium | Points to `orcid.org` homepage |
| JetBrains Mono not loaded | Low | Referenced in CSS (`--font-mono`) but not in HTML `<link>` tag; falls back to system monospace |
| Education section missing | Low | Degree history is embedded in About text, not a scannable table |
| Skills/Awards not in nav | Low | These sections exist but are only reachable by scrolling |

---

## 🗺 Roadmap

### 🔴 High Priority (Next 1–3 Months)

- [ ] **Add profile photo** — Replace `<div class="about__photo-placeholder">` with real photo
- [ ] **Upload CV PDF** — Add `assets/Diana_Hu_CV.pdf`; test download button
- [ ] **Fix Google Scholar link** — Update `href` to `https://scholar.google.com/citations?user=[ID]`
- [ ] **Fix ORCID link** — Update `href` to `https://orcid.org/[ID]`
- [ ] **Add JetBrains Mono** — Add to Google Fonts `<link>` tag in `<head>`
- [ ] **Real contact form** — Integrate [Formspree](https://formspree.io) or [Netlify Forms](https://docs.netlify.com/forms/setup/)
- [ ] **Add favicon** — Create `assets/favicon.ico` / `.png` using Diane's initials or a small map pin icon

### 🟡 Medium Priority (3–6 Months)

- [ ] **Education section** — Dedicated section with degree table (Huaqiao → CUG-Wuhan → UNCC → FSU → UCSB)
- [ ] **Add Skills/Awards to navigation** — Currently scroll-only orphan sections
- [ ] **Narrative project descriptions** — Rewrite project descriptions to be human-centered, not CV-speak (per INFP review)
- [ ] **Field research photos** — Add photos from typhoon volunteering (Xiamen), Yunnan Shidian fieldwork, Ezhou land survey
- [ ] **Interactive research field map** — Map of all field sites (Guizhou, Wuhan, Charlotte NC, Dominican Republic, Santa Barbara CA)
- [ ] **About section improvements** — Add father-worked-away childhood backstory that connects to mobility research theme
- [ ] **Dark mode toggle** — CSS `prefers-color-scheme` + manual toggle button
- [ ] **`<meta>` social card image** — Add `og:image` for LinkedIn/Twitter link previews

### 🟢 Long-term Vision (6+ Months)

- [ ] **Blog / Research Notes** — Markdown-powered posts on spatial data science, field updates, paper summaries
- [ ] **Interactive project embeds** — Live demos of GitHub projects (MBTIearth 3D globe, Global-AI-Acceptance-Index)
- [ ] **Mobility visualization** — Embed actual output maps from NHTS California mobility motif analysis
- [ ] **Conference slides archive** — PDF embeds for AAG 2026, WCTR 2026, SWAAG 2024 presentations
- [ ] **Automated academic profile sync** — Pull publications from ORCID API, citation counts from Google Scholar
- [ ] **i18n (Chinese / English toggle)** — Bilingual support for Chinese academic networks
- [ ] **CV auto-generator** — Generate updated PDF CV from `content.js` data using HTML-to-PDF
- [ ] **Analytics** — Privacy-respecting visitor analytics (Plausible or Fathom)

---

## 🤖 AI-Assisted Development

This project was built using **[Claude Code](https://claude.ai/claude-code)** (Anthropic) as the primary development environment. The development process used a multi-agent architecture to ensure both technical quality and narrative authenticity:

### Agent Roles

| Agent Type | Responsibility |
|---|---|
| **INFP** | Narrative authenticity, emotional resonance, personal story arc, ensuring Diane's ENFJ voice |
| **INTP** | Technical consistency audit, logic/architecture analysis, identifying CSS-HTML mismatches |
| **INTJ** | Strategic positioning, brand differentiation, target audience prioritization |
| **ISTJ** | Documentation, code organization, technical specifications, roadmap tracking |
| **Web Viz Team** | UI implementation — canvas animation, timeline visualization, skills system, wave transitions |
| **GitHub Integration** | Open-source section HTML/CSS, repo card system |
| **Mobile Optimization** | Touch targets, iOS Safari fixes, 390px breakpoint, `hover: none` states |

### What AI Did vs. What Humans Decided
- **AI implemented**: All HTML structure, CSS styling, JavaScript interactions, content writing
- **Human decided**: Which projects to feature, narrative priorities, tone of personal story, visual direction preferences
- **All content verified**: Research descriptions, publication data, and biographical information reviewed against Diane's actual CV materials

### Development Principles Applied
- Zero external JS dependencies (for long-term maintainability)
- CSS Custom Properties throughout (single source of truth for design tokens)
- BEM-inspired class naming convention
- `IntersectionObserver` for all scroll-triggered effects (no AOS library)
- Accessibility-first (WCAG 2.1 AA target)

---

## 📄 License

| Item | License |
|---|---|
| **Website code** (HTML, CSS, JS structure) | [MIT License](LICENSE) |
| **Personal content** (CV data, research descriptions, biographical text, photos) | © Die (Diane) Hu — All Rights Reserved |

---

## 🙏 Credits

- Website designed and developed with **[Claude Code](https://claude.ai/claude-code)** by Anthropic
- Supervised and directed by Leo (project manager / collaborator)
- Profile content © Die (Diane) Hu
- Icons: [Font Awesome 6 Free](https://fontawesome.com)
- Fonts: [Google Fonts](https://fonts.google.com) (DM Sans, Source Serif 4)

---

## 📬 Contact

**Die (Diane) Hu**
PhD Candidate, Geography · UC Santa Barbara
📧 [diehu@ucsb.edu](mailto:diehu@ucsb.edu)
🔗 [LinkedIn](https://www.linkedin.com/in/die-diane-hu-370007270)
🐙 [GitHub](https://github.com/Die-Hu)

---

*Last updated: March 2026 · Built with ♥ for spatial justice*
