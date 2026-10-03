/**
 * MENÚ HAMBURGUESA ACCESIBLE
 * Controla la apertura/cierre del menú en móvil/tablet con soporte de teclado.
 */
(function hamburgerMenu() {
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  if (!hamburger || !navLinks) return;

  const close = () => {
    navLinks.classList.remove('active');
    hamburger.setAttribute('aria-expanded', 'false');
  };

  const toggleMenu = () => {
    const open = navLinks.classList.toggle('active');
    hamburger.setAttribute('aria-expanded', String(open));
  };

  hamburger.addEventListener('click', toggleMenu);

  hamburger.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleMenu();
    }
  });

  // Cierra el menú al hacer clic en un enlace
  navLinks.addEventListener('click', (e) => {
    if (e.target.closest('a')) close();
  });

  // Cierra el menú con Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') close();
  });
})();

/**
 * HERO PORTRAIT TOGGLE
 * Alterna entre la foto real y el avatar virtual con hover (mouse) o toque/clic accesible.
 */
(function heroPortraitToggle() {
  const heroToggle = document.querySelector('.hero-img');
  const heroName = document.querySelector('#hero-name');
  if (!heroToggle || !heroName) return;

  const togglePortrait = () => {
    const isAvatar = heroToggle.classList.toggle('show-avatar');
    heroToggle.setAttribute('aria-pressed', isAvatar ? 'true' : 'false');
    heroName.textContent = isAvatar ? 'JV Wyatt' : 'José A. Vega-Jaén';
  };

  heroToggle.addEventListener('pointerenter', (event) => {
    if (event.pointerType === 'mouse') togglePortrait();
  });

  heroToggle.addEventListener('pointerup', (event) => {
    if (event.pointerType && event.pointerType !== 'mouse') togglePortrait();
  });

  heroToggle.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      togglePortrait();
    }
  });

  heroToggle.addEventListener('click', (event) => {
    if (event.detail === 0) togglePortrait();
  });
})();

/**
 * NAVEGACIÓN ACTIVA
 * Resalta el enlace de la sección visible en pantalla.
 */
(function activeNavHighlight() {
  const links = document.querySelectorAll('.nav-links a[href^="#"]');
  const map = new Map();
  links.forEach((a) => {
    const section = document.querySelector(a.getAttribute('href'));
    if (section) map.set(section, a);
  });
  if (!map.size) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        map.forEach((link, section) => {
          link.classList.toggle('active', section === entry.target);
        });
      });
    },
    { rootMargin: '-45% 0px -50% 0px' }
  );

  map.forEach((link, section) => observer.observe(section));
})();

/**
 * REVEAL ON SCROLL
 * Aparición suave de secciones al hacer scroll.
 */
(function revealOnScroll() {
  const items = document.querySelectorAll('.reveal');
  if (!items.length) return;

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    items.forEach((el) => el.classList.add('visible'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );

  items.forEach((el) => observer.observe(el));
})();

/**
 * VOLVER ARRIBA
 * Botón flotante que aparece tras hacer scroll.
 */
(function goToTop() {
  const button = document.querySelector('.go-to-top');
  if (!button) return;

  const onScroll = () => {
    button.classList.toggle('visible', window.scrollY > 600);
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  button.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
})();

/**
 * AÑO DEL FOOTER
 * Actualiza el año de copyright automáticamente.
 */
(function year() {
  const el = document.querySelector('#year');
  if (el) el.textContent = new Date().getFullYear();
})();