const year = document.querySelector("#year");

if (year) {
  year.textContent = new Date().getFullYear();
}

const cards = document.querySelectorAll(
  ".work-card, .service-card, .timeline article, .principles article, .proof-bar article"
);
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector("#primary-navigation");

cards.forEach((card) => {
  card.addEventListener("pointermove", (event) => {
    const rect = card.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;

    card.style.background = `radial-gradient(circle at ${x}% ${y}%, rgba(25, 182, 165, 0.18), rgba(16, 25, 29, 0.76) 42%)`;
  });

  card.addEventListener("pointerleave", () => {
    card.style.background = "";
  });
});

if (menuToggle && navLinks) {
  const setMenuOpen = (isOpen) => {
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    navLinks.classList.toggle("is-open", isOpen);
    menuToggle.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
  };

  menuToggle.addEventListener("click", () => {
    const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
    setMenuOpen(!isOpen);
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => setMenuOpen(false));
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 960) {
      setMenuOpen(false);
    }
  });
}
