document.addEventListener("DOMContentLoaded", function () {
  // Récupération des éléments essentiels
  const backToTopBtn = document.getElementById("backToTop");
  const navbar = document.querySelector(".custom-navbar");
  const banner = document.querySelector(".banner");
  
  // Sécurité : stoppe si un élément est manquant
  if (!backToTopBtn || !navbar || !banner) {
    console.log("Élément(s) manquant(s)", { backToTopBtn, navbar, banner });
    return;
  }

  // Calcule la hauteur réelle de la bannière
  const bannerHeight = banner.getBoundingClientRect().height;

  // Gestion du scroll
  window.addEventListener("scroll", function () {
    const scrolled = window.scrollY > bannerHeight;

    // Affiche ou cache le bouton "retour en haut"
    backToTopBtn.classList.toggle("show", scrolled);

    // Cache la navbar quand on a scrollé en dessous de la bannière
    navbar.classList.toggle("hide-navbar", scrolled);
  });

  // Scroll fluide vers le haut au clic sur le bouton
  backToTopBtn.addEventListener("click", function (e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});
// Empêche le copier, coller et couper dans tous les champs <input> et <textarea> du formulaire #contactForm
document.querySelectorAll('#contactForm input, #contactForm textarea').forEach(el => {
    el.onpaste = el.oncopy = el.oncut = (e) => e.preventDefault();
});

// Tableau de configuration pour chaque champ à valider
const inputs = [
    {
        element: document.getElementById("nom"),
        regex: /^[A-Za-z\-]+$/,
        errorId: "error-nom"
    },
    {
        element: document.getElementById("prenom"),
        regex: /^[A-Za-z\-]+$/,
        errorId: "error-prenom"
    },
    {
        element: document.getElementById("tel"),
        regex: /^[0-9]{10}$/,
        errorId: "error-tel"
    },
    {
        element: document.getElementById("email"),
        regex: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
        errorId: "error-email"
    },
    {
        element: document.getElementById("sujet"),
        regex: /^[^<>$%]*$/, // Interdit < > $ %
        errorId: "error-sujet"
    },
    {
        element: document.getElementById("message"),
        regex: /^[^<>$%]*$/, // Interdit < > $ %
        errorId: "error-message"
    }
];

// Fonction de validation d'un champ
function validateInput(input) {
    const isValid = input.regex.test(input.element.value);
    const errorEl = document.getElementById(input.errorId);

    input.element.style.borderColor = isValid ? "green" : "red";
    errorEl.classList.toggle("d-none", isValid);
    input.element.setCustomValidity(isValid ? "" : errorEl.textContent);

    return isValid;
}

// Ajoute l'événement 'input' sur chaque champ pour valider en temps réel
inputs.forEach(input => {
    input.element.addEventListener("input", () => {
        validateInput(input);
    });
});

// À la soumission du formulaire, on bloque l'envoi si un champ est invalide
document.getElementById("contactForm").addEventListener("submit", function (e) {
    let formValid = true;
    inputs.forEach(input => {
        if (!validateInput(input)) formValid = false;
    });
    if (!formValid) e.preventDefault();
});