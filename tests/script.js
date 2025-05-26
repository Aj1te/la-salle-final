const burger = document.getElementById('burger');
const menu = document.getElementById('menu');
const navlink = document.getElementById('navlink');
function toggleMenu(element, className) {
  if (!element.classList.contains(className)) {
    element.classList.add(className);
  } else {
    element.classList.remove(className);
  }
}
burger.addEventListener('click', () => {
  toggleMenu(menu, 'show');      
  toggleMenu(navlink, 'active'); 
});
