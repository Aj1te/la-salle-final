const navbar = document.querySelector('.custom-navbar');
  const banner = document.querySelector('.banner');

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const bannerHeight = banner.offsetHeight;

    if (scrollY > bannerHeight) {
      navbar.classList.add('hide-navbar');
    } else {
      navbar.classList.remove('hide-navbar');
    }
  });