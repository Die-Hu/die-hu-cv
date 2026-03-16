// ============================================================
// Die (Diane) Hu — Personal Academic Website
// Main JavaScript — Interactions & Animations
// ============================================================

'use strict';

// ── Utility helpers ──────────────────────────────────────────
const $  = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

// ── 1. Navigation ────────────────────────────────────────────
function initNav() {
  const nav        = $('.nav');
  const hamburger  = $('.nav__hamburger');
  const mobileMenu = $('.nav__mobile-menu');

  if (!nav) return;

  // Sticky nav — add .scrolled when scrolled past hero
  const hero = $('.hero');
  const onScroll = () => {
    const threshold = hero ? hero.offsetHeight * 0.6 : 80;
    nav.classList.toggle('scrolled', window.scrollY > threshold);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll(); // run once on load

  // Mobile hamburger toggle
  if (hamburger && mobileMenu) {
    const openMenu = () => {
      mobileMenu.classList.add('is-visible');
      // Force reflow so CSS transition fires
      mobileMenu.getBoundingClientRect();
      mobileMenu.classList.add('open');
      mobileMenu.setAttribute('aria-hidden', 'false');
      hamburger.setAttribute('aria-expanded', 'true');
      hamburger.innerHTML = '<span class="nav__toggle-bar"></span><span class="nav__toggle-bar"></span><span class="nav__toggle-bar"></span>';
      hamburger.classList.add('is-open');
    };

    const closeMenu = () => {
      mobileMenu.classList.remove('open');
      mobileMenu.setAttribute('aria-hidden', 'true');
      hamburger.setAttribute('aria-expanded', 'false');
      hamburger.classList.remove('is-open');
      // Remove is-visible after transition ends
      mobileMenu.addEventListener('transitionend', () => {
        if (!mobileMenu.classList.contains('open')) {
          mobileMenu.classList.remove('is-visible');
        }
      }, { once: true });
    };

    hamburger.addEventListener('click', () => {
      const isOpen = mobileMenu.classList.contains('open');
      isOpen ? closeMenu() : openMenu();
    });

    // Close when any nav link is clicked
    mobileMenu.querySelectorAll('.nav__link').forEach((link) => {
      link.addEventListener('click', closeMenu);
    });

    // Close on outside click
    document.addEventListener('click', (e) => {
      if (mobileMenu.classList.contains('open') &&
          !nav.contains(e.target)) {
        closeMenu();
      }
    });
  }
}

// ── 2. Hero — Typewriter effect ──────────────────────────────
function initTypewriter() {
  const el   = $('.hero__tagline');
  if (!el) return;

  const text   = 'Mapping Human Movement. Modeling Urban Futures.';
  const delay  = 500;   // ms before starting
  const speed  = 60;    // ms per character

  // Inject a cursor span we can animate via CSS
  el.innerHTML = '<span class="typewriter__text"></span><span class="typewriter__cursor" aria-hidden="true">|</span>';
  const textNode   = el.querySelector('.typewriter__text');
  const cursorNode = el.querySelector('.typewriter__cursor');

  let index = 0;

  function type() {
    if (index < text.length) {
      textNode.textContent += text.charAt(index);
      index++;
      setTimeout(type, speed);
    } else {
      // Typing done — start cursor blinking via CSS class
      cursorNode.classList.add('is-blinking');
    }
  }

  setTimeout(type, delay);
}

// ── 3. Scroll Reveal — IntersectionObserver ──────────────────
function initScrollReveal() {
  const elements = $$('[data-aos]');
  if (!elements.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        const el        = entry.target;
        const delayVal  = el.getAttribute('data-aos-delay');
        // delay="1" → 0.1s, "2" → 0.2s, "3" → 0.3s …
        // delay values in HTML are direct milliseconds (e.g. data-aos-delay="100")
        const delayMs   = delayVal ? parseInt(delayVal, 10) : 0;

        setTimeout(() => {
          el.classList.add('visible');
        }, delayMs);

        observer.unobserve(el); // fire only once
      });
    },
    { threshold: 0.15 }
  );

  elements.forEach((el) => observer.observe(el));
}

// ── 4. Projects Filter ───────────────────────────────────────
function initProjectFilter() {
  const filterBtns = $$('.projects__filter .filter-btn');
  const cards      = $$('.project-card');

  if (!filterBtns.length || !cards.length) return;

  // Helper: show a card with fade-in
  function showCard(card) {
    card.style.display = '';
    // Force reflow so the transition fires
    void card.offsetWidth;
    card.style.opacity    = '1';
    card.style.transform  = 'scale(1)';
  }

  // Helper: hide a card with fade-out → display:none
  function hideCard(card) {
    card.style.opacity   = '0';
    card.style.transform = 'scale(0.95)';
    card.addEventListener(
      'transitionend',
      () => {
        if (card.style.opacity === '0') {
          card.style.display = 'none';
        }
      },
      { once: true }
    );
  }

  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      // Update active button
      filterBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter') || 'all';

      cards.forEach((card) => {
        const categories = (card.getAttribute('data-category') || '').toLowerCase();
        const match =
          filter === 'all' || categories.includes(filter.toLowerCase());

        if (match) {
          showCard(card);
        } else {
          hideCard(card);
        }
      });
    });
  });

  // Initialise: ensure cards have transition style set
  cards.forEach((card) => {
    card.style.transition = 'opacity 150ms ease, transform 150ms ease';
    card.style.opacity    = '1';
    card.style.transform  = 'scale(1)';
  });

  // Activate "All" button by default if none is active
  const activeBtn = $('.projects__filter .filter-btn.active');
  if (!activeBtn && filterBtns.length) {
    filterBtns[0].classList.add('active');
  }
}

// ── 5. Publications — Tab switch ─────────────────────────────
function initPublicationTabs() {
  const tabs   = $$('.pub-tab');
  const panels = $$('.pub-panel');

  if (!tabs.length || !panels.length) return;

  function activateTab(targetId) {
    tabs.forEach((tab) => {
      tab.classList.toggle('active', tab.getAttribute('data-tab') === targetId);
    });
    panels.forEach((panel) => {
      const isTarget = panel.id === targetId || panel.getAttribute('data-panel') === targetId;
      if (isTarget) {
        panel.style.display = '';
        // Trigger fade-in
        void panel.offsetWidth;
        panel.classList.add('is-visible');
        panel.classList.remove('is-hidden');
      } else {
        panel.classList.remove('is-visible');
        panel.classList.add('is-hidden');
        panel.addEventListener(
          'transitionend',
          () => {
            if (panel.classList.contains('is-hidden')) {
              panel.style.display = 'none';
            }
          },
          { once: true }
        );
      }
    });
  }

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      activateTab(tab.getAttribute('data-tab'));
    });
  });

  // Default: activate the first tab marked active in HTML, otherwise "conference"
  const defaultActive = $('.pub-tab.active');
  if (defaultActive) {
    activateTab(defaultActive.getAttribute('data-tab'));
  } else if (tabs.length) {
    // Prefer "conference" tab if it exists
    const confTab = Array.from(tabs).find(
      (t) => (t.getAttribute('data-tab') || '').toLowerCase().includes('conference')
    );
    activateTab((confTab || tabs[0]).getAttribute('data-tab'));
  }
}

// ── 6. Contact Form ──────────────────────────────────────────
function initContactForm() {
  const form = $('.contact__form');
  if (!form) return;

  const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  function clearError(field) {
    const err = form.querySelector(`[data-error-for="${field.name}"]`);
    if (err) err.textContent = '';
    field.classList.remove('is-invalid');
  }

  function showError(field, message) {
    field.classList.add('is-invalid');
    let err = form.querySelector(`[data-error-for="${field.name}"]`);
    if (!err) {
      // Create error element on the fly if not in HTML
      err = document.createElement('span');
      err.className = 'form__error';
      err.setAttribute('data-error-for', field.name);
      err.setAttribute('role', 'alert');
      field.insertAdjacentElement('afterend', err);
    }
    err.textContent = message;
  }

  function showSuccess(message) {
    let successEl = form.querySelector('.form__success');
    if (!successEl) {
      successEl = document.createElement('p');
      successEl.className = 'form__success';
      successEl.setAttribute('role', 'status');
      form.appendChild(successEl);
    }
    successEl.textContent = message;
    successEl.style.display = 'block';
    setTimeout(() => {
      successEl.style.display = 'none';
    }, 8000);
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nameField    = form.querySelector('[name="name"]');
    const emailField   = form.querySelector('[name="email"]');
    const messageField = form.querySelector('[name="message"]');
    const fields       = [nameField, emailField, messageField].filter(Boolean);

    // Clear previous errors
    fields.forEach(clearError);

    let hasError = false;

    if (nameField && !nameField.value.trim()) {
      showError(nameField, 'Please enter your name.');
      hasError = true;
    }

    if (emailField) {
      if (!emailField.value.trim()) {
        showError(emailField, 'Please enter your email address.');
        hasError = true;
      } else if (!EMAIL_RE.test(emailField.value.trim())) {
        showError(emailField, 'Please enter a valid email address.');
        hasError = true;
      }
    }

    if (messageField && !messageField.value.trim()) {
      showError(messageField, 'Please enter your message.');
      hasError = true;
    }

    if (hasError) return;

    // Success
    form.reset();
    showSuccess("Thanks for reaching out! I'll get back to you within 48 hours.");
  });
}

// ── 7. Stats Counter Animation ───────────────────────────────
function initStatsCounter() {
  const statEls = $$('.about__stats [data-count]');
  if (!statEls.length) return;

  const DURATION = 1500; // ms

  function easeOut(t) {
    // Quadratic ease-out: decelerates toward end
    return 1 - Math.pow(1 - t, 2);
  }

  function animateCount(el) {
    const target    = parseFloat(el.getAttribute('data-count'));
    const suffix    = el.getAttribute('data-suffix') || '';
    const isDecimal = String(target).includes('.');
    const decimals  = isDecimal ? String(target).split('.')[1].length : 0;
    const start     = performance.now();

    function tick(now) {
      const elapsed  = now - start;
      const progress = Math.min(elapsed / DURATION, 1);
      const value    = easeOut(progress) * target;
      const display  = isDecimal ? value.toFixed(decimals) : Math.floor(value);

      el.textContent = display + suffix;

      if (progress < 1) {
        requestAnimationFrame(tick);
      } else {
        el.textContent = (isDecimal ? target.toFixed(decimals) : target) + suffix;
      }
    }

    requestAnimationFrame(tick);
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        animateCount(entry.target);
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.15 }  // lowered from 0.4 — safer for mobile
  );

  statEls.forEach((el) => observer.observe(el));
}

// ── 8. Smooth Scroll ─────────────────────────────────────────
function initSmoothScroll() {
  const NAV_HEIGHT = 68; // px — adjust to match CSS nav height

  $$('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      const href = anchor.getAttribute('href');
      if (!href || href === '#') return;

      const target = $(href);
      if (!target) return;

      e.preventDefault();

      const top = target.getBoundingClientRect().top + window.scrollY - NAV_HEIGHT;

      if ('scrollBehavior' in document.documentElement.style) {
        // Modern browsers — native smooth scroll
        window.scrollTo({ top, behavior: 'smooth' });
      } else {
        // Safari / older browsers — manual animation
        const startY    = window.scrollY;
        const distance  = top - startY;
        const duration  = 600;
        const startTime = performance.now();

        function scrollStep(now) {
          const elapsed  = now - startTime;
          const progress = Math.min(elapsed / duration, 1);
          // ease-in-out cubic
          const ease =
            progress < 0.5
              ? 4 * progress * progress * progress
              : 1 - Math.pow(-2 * progress + 2, 3) / 2;

          window.scrollTo(0, startY + distance * ease);

          if (progress < 1) requestAnimationFrame(scrollStep);
        }

        requestAnimationFrame(scrollStep);
      }
    });
  });
}

// ── 9. Back to Top Button ────────────────────────────────────
function initBackToTop() {
  const btn = $('#back-to-top');
  if (!btn) return;

  window.addEventListener(
    'scroll',
    () => {
      btn.classList.toggle('is-visible', window.scrollY > 400);
    },
    { passive: true }
  );

  btn.addEventListener('click', () => {
    if ('scrollBehavior' in document.documentElement.style) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // Fallback for Safari
      const startY    = window.scrollY;
      const duration  = 500;
      const startTime = performance.now();

      function step(now) {
        const elapsed  = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const ease     = 1 - Math.pow(1 - progress, 3); // ease-out cubic
        window.scrollTo(0, startY * (1 - ease));
        if (progress < 1) requestAnimationFrame(step);
      }

      requestAnimationFrame(step);
    }
  });
}

// ── 10. Nav Active-link State (IntersectionObserver) ─────────
function initNavActiveState() {
  const sectionIds = [
    '#about',
    '#interests',
    '#projects',
    '#publications',
    '#teaching',
    '#skills',
    '#awards',
    '#code',
    '#contact',
  ];

  const sections = sectionIds
    .map((id) => $(id))
    .filter(Boolean);

  const navLinkMap = {};
  sectionIds.forEach((id) => {
    const link = $(`.nav__link[href="${id}"]`);
    if (link) navLinkMap[id] = link;
  });

  if (!sections.length) return;

  // Track which section is most "in view"
  const visibleSections = new Set();

  function updateActiveLink() {
    if (!visibleSections.size) return;

    // Pick the topmost visible section in document order
    let topmost = null;
    let topmostTop = Infinity;

    visibleSections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      if (rect.top < topmostTop) {
        topmostTop = rect.top;
        topmost    = section;
      }
    });

    if (!topmost) return;

    const activeId = '#' + topmost.id;
    Object.entries(navLinkMap).forEach(([id, link]) => {
      link.classList.toggle('active', id === activeId);
    });
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          visibleSections.add(entry.target);
        } else {
          visibleSections.delete(entry.target);
        }
      });
      updateActiveLink();
    },
    {
      // rootMargin: account for sticky nav height
      rootMargin: '-68px 0px -40% 0px',
      threshold: 0,
    }
  );

  sections.forEach((section) => observer.observe(section));
}

// ── TASK 2: Hero Contour Canvas Animation ────────────────────
// Draws 4 slow-moving Bezier curves simulating map contour lines / trajectories.
// Respects prefers-reduced-motion via CSS (canvas hidden) and JS guard.
function initHeroContourCanvas() {
  const canvas = document.getElementById('heroContourCanvas');
  if (!canvas) return;

  // Honour prefers-reduced-motion
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reducedMotion) {
    canvas.style.display = 'none';
    return;
  }

  const ctx = canvas.getContext('2d');
  let W, H, rafId;

  // Resize handler — keeps canvas resolution correct
  function resize() {
    const hero = canvas.closest('.hero') || canvas.parentElement.parentElement;
    W = canvas.width  = hero ? hero.offsetWidth  : window.innerWidth;
    H = canvas.height = hero ? hero.offsetHeight : window.innerHeight;
  }

  // Each curve is defined by animated control-point offsets
  const curves = [
    {
      color: 'rgba(27, 108, 168, 0.18)',  // primary blue
      width: 1.5,
      t: 0,
      speed: 0.00018,
      // base Y positions as fraction of height
      y0: 0.25, y1: 0.35, y2: 0.20, y3: 0.32,
      amp: 0.12,  // animation amplitude (fraction of H)
      phase: 0,
    },
    {
      color: 'rgba(27, 108, 168, 0.12)',
      width: 1,
      t: 0,
      speed: 0.00013,
      y0: 0.55, y1: 0.45, y2: 0.60, y3: 0.50,
      amp: 0.10,
      phase: Math.PI * 0.7,
    },
    {
      color: 'rgba(212, 132, 90, 0.10)',  // accent terracotta
      width: 1.5,
      t: 0,
      speed: 0.00022,
      y0: 0.70, y1: 0.60, y2: 0.75, y3: 0.65,
      amp: 0.08,
      phase: Math.PI * 1.3,
    },
    {
      color: 'rgba(123, 158, 135, 0.10)', // earth green
      width: 1,
      t: 0,
      speed: 0.00016,
      y0: 0.15, y1: 0.22, y2: 0.10, y3: 0.18,
      amp: 0.07,
      phase: Math.PI * 2.1,
    },
  ];

  let lastTime = 0;

  function draw(timestamp) {
    rafId = requestAnimationFrame(draw);
    const dt = timestamp - lastTime;
    lastTime = timestamp;

    ctx.clearRect(0, 0, W, H);

    curves.forEach((curve) => {
      curve.t += dt * curve.speed;

      // Animate y positions using sine waves with individual phase offsets
      const dy0 = Math.sin(curve.t + curve.phase)           * curve.amp * H;
      const dy1 = Math.sin(curve.t + curve.phase + 1.1)     * curve.amp * H;
      const dy2 = Math.sin(curve.t + curve.phase + 2.3)     * curve.amp * H;
      const dy3 = Math.sin(curve.t + curve.phase + 3.5)     * curve.amp * H;

      const x0 = 0;
      const x1 = W * 0.33;
      const x2 = W * 0.67;
      const x3 = W;

      const y0 = curve.y0 * H + dy0;
      const y1 = curve.y1 * H + dy1;
      const y2 = curve.y2 * H + dy2;
      const y3 = curve.y3 * H + dy3;

      ctx.beginPath();
      ctx.moveTo(x0, y0);
      ctx.bezierCurveTo(x1, y1, x2, y2, x3, y3);
      ctx.strokeStyle = curve.color;
      ctx.lineWidth   = curve.width;
      ctx.lineCap     = 'round';
      ctx.stroke();
    });
  }

  resize();
  window.addEventListener('resize', resize, { passive: true });
  rafId = requestAnimationFrame((ts) => { lastTime = ts; draw(ts); });

  // Clean up if ever needed (SPA navigation, etc.)
  canvas._stopContour = () => {
    cancelAnimationFrame(rafId);
    window.removeEventListener('resize', resize);
  };
}


// ── Bootstrap ────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  initNav();
  initTypewriter();
  initScrollReveal();
  initProjectFilter();
  initPublicationTabs();
  initContactForm();
  initStatsCounter();
  initSmoothScroll();
  initBackToTop();
  initNavActiveState();
  initHeroContourCanvas(); // TASK 2

  // Footer — dynamic copyright year
  const yearEl = $('.footer__year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});
