// Menu burger
const burger = document.getElementById('burger');
const menu = document.getElementById('menu');

burger.addEventListener('click', () => {
  menu.classList.toggle('show');
});

// Carrousel
let index = 0;
const carousel = document.getElementById('carousel');
const totalSlides = carousel.children.length;

document.getElementById('nextBtn').addEventListener('click', () => {
  index += 1;
  if (index >= totalSlides) {
    index = 0;
  }
  carousel.style.transform = `translateX(-${index * 100}%)`;
});

document.getElementById('prevBtn').addEventListener('click', () => {
  index -= 1;
  if (index < 0) {
    index = totalSlides - 1;
  }
  carousel.style.transform = `translateX(-${index * 100}%)`;
});

const burger=document.getElementById('burger');
const menu=document.getElementById('menu');

burger.addEventListener('click', () => {
  navlink.classList.add('active');
  if (!menu.classList.contains('active')) {
    menu.classList.add('active');
  } else {
    menu.classList.remove('active');
  }
});
