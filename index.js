const hamburgerButton = document.querySelector("#hamburger-button");
const mobileNav = document.querySelector("#mobile-nav");
(function () {
  document.addEventListener("DOMContentLoaded", () => {
    hamburgerButton.addEventListener('click', () => {
      mobileNav.classList.toggle('show')
    });
  });
})();
