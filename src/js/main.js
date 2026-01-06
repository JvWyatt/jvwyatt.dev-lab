/**
 * MENÚ HAMBURGUESA ACCESIBLE
 * Controla la apertura/cierre del menú en móvil/tablet y permite accesibilidad por teclado.
 * Modular y preparado para ampliaciones futuras.
 */
(function hamburgerMenu() {
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  if (!hamburger || !navLinks) return;

  // Alterna la visibilidad del menú
  function toggleMenu() {
    navLinks.classList.toggle('active');
  }

  hamburger.addEventListener('click', toggleMenu);

  // Accesibilidad: permite abrir/cerrar con Enter/Espacio
  hamburger.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      toggleMenu();
    }
  });
})();

/**
 * HERO PORTRAIT TOGGLE
 * Alterna entre la foto real y el avatar virtual con hover (mouse) o toque/clic accesible.
 * También cambia el nombre mostrado entre el nombre completo y las iniciales.
 */
(function heroPortraitToggle() {
  const heroToggle = document.querySelector('.hero-img');
  const heroName = document.querySelector('#hero-name');
  if (!heroToggle || !heroName) return;

  const togglePortrait = () => {
    const isAvatar = heroToggle.classList.toggle('show-avatar');
    heroToggle.setAttribute('aria-pressed', isAvatar ? 'true' : 'false');
    
    // Cambiar el nombre según la imagen mostrada
    heroName.textContent = isAvatar ? 'JV Wyatt' : 'José A. Vega-Jaén';
  };

  // Hover con mouse
  heroToggle.addEventListener('pointerenter', (event) => {
    if (event.pointerType === 'mouse') {
      togglePortrait();
    }
  });

  // Toque o lápiz
  heroToggle.addEventListener('pointerup', (event) => {
    if (event.pointerType && event.pointerType !== 'mouse') {
      togglePortrait();
    }
  });

  // Accesibilidad por teclado
  heroToggle.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      togglePortrait();
    }
  });

  // Clic generado por teclado (detail === 0)
  heroToggle.addEventListener('click', (event) => {
    if (event.detail === 0) {
      togglePortrait();
    }
  });
})();
