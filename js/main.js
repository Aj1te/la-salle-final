  document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.querySelector(".navbar");
    const backToTopBtn = document.getElementById("backToTop");
    let lastScrollTop = 0;

    window.addEventListener("scroll", function () {
      const currentScroll = window.scrollY;

      // Afficher bouton retour haut
      if (currentScroll > 200) {
        backToTopBtn.classList.add("show");
      } else {
        backToTopBtn.classList.remove("show");
      }

      // Disparition / réapparition navbar
      if (currentScroll > lastScrollTop && currentScroll > 100) {
        navbar.classList.add("hide-navbar");
      } else {
        navbar.classList.remove("hide-navbar");
      }
      lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
    });

    backToTopBtn.addEventListener("click", function (e) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });

// =====================
// CAROUSEL
// =====================
  // select('#carouselExampleIndicators').carousel({
  //   interval: 5000,
  //   ride: 'carousel'
  // });

  const myCarousel = document.querySelector('#carouselTraining');
  const carousel = new Bootstrap.Carousel(myCarousel, {
  interval: 5000,
  ride: 'carousel'
});