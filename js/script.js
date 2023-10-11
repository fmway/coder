// -------------------------------------------------------------
// Toggle for navbar hamburger
// -------------------------------------------------------------
const nav = document.querySelector('#navbar-menu');
const navbarToggle = document.querySelector("#navbar-toggle");

navbarToggle.addEventListener('click', () => {
  nav.classList.toggle('hidden');
});
// -------------------------------------------------------------
