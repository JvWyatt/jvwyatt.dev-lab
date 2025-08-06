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
