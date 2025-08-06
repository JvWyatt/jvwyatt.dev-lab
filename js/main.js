// ===================== MENÚ HAMBURGUESA =====================
// Controla la apertura/cierre del menú en móvil/tablet
(function() {
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");
  if (!hamburger || !navLinks) return;

  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

  // Accesibilidad: permite abrir/cerrar con Enter/Espacio
  hamburger.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      navLinks.classList.toggle("active");
    }
  });
})();
