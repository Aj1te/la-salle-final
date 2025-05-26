const burger = document.getElementById('burgerToggle');
const sideMenu = document.getElementById('sideMenu');

// Gestion du clic sur l'icône burger
burger.addEventListener('click', () => {
  sideMenu.classList.toggle('active');
});